import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, "..", ".open-next", "worker.js");

const ASSETS_BLOCK = `            // Serve static assets from the Pages ASSETS binding (for _worker.js advanced mode).
            if (env.ASSETS) {
                try {
                    let assetResponse = await env.ASSETS.fetch(request);
                    if (assetResponse.status !== 404) return assetResponse;
                    const prefixedUrl = new URL(\`/assets\${url.pathname}\`, request.url);
                    prefixedUrl.search = url.search;
                    assetResponse = await env.ASSETS.fetch(new Request(prefixedUrl, request));
                    if (assetResponse.status !== 404) return assetResponse;
                } catch {
                    // ASSETS binding unavailable or error — fall through to Next.js server.
                }
            }
            // Serve images in development.`;

let content = readFileSync(workerPath, "utf-8");
content = content.replace("// Serve images in development.", ASSETS_BLOCK);
writeFileSync(workerPath, content);

console.log("Patched worker.js with ASSETS binding support");
