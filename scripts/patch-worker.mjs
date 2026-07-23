import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, "..", ".open-next", "worker.js");

let content = readFileSync(workerPath, "utf-8");

// Remove unused CDN-CGI image handler from import
content = content.replace(", handleCdnCgiImageRequest", "");

// Inject ASSETS binding block (single fetch, skips redundant request)
const ASSETS_BLOCK = `            // Serve static assets from the Pages ASSETS binding (for _worker.js advanced mode).
            if (/\\\.\\w+$/.test(url.pathname) && env.ASSETS) {
                try {
                    const prefixedUrl = new URL(\`/assets\${url.pathname}\`, request.url);
                    prefixedUrl.search = url.search;
                    const assetResponse = await env.ASSETS.fetch(new Request(prefixedUrl, request));
                    if (assetResponse.status !== 404) return assetResponse;
                } catch {
                    // ASSETS binding unavailable or error — fall through to Next.js server.
                }
            }`;

content = content.replace("// Serve images in development.", ASSETS_BLOCK);

// Remove CDN-CGI handler (doesn't reach production workers per OpenNext's own comment)
content = content.replace(
  /            \/\/ Note: "\\\/cdn-cgi\\\/image\/\.\.\." requests do not reach production workers\.\n            if \(url\.pathname\.startsWith\("\\\/cdn-cgi\\\/image\/"\)\) \{\n                return handleCdnCgiImageRequest\(url, env\);\n            \}\n/,
  "",
);

writeFileSync(workerPath, content);

console.log("Patched worker.js: single ASSETS fetch, removed unused CDN-CGI handler");
