import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, "..", ".open-next", "worker.js");

let content = readFileSync(workerPath, "utf-8");

// ---------------------------------------------------------------------------
// 1. Remove unused CDN-CGI image handler from import list
//    Pattern: only the ", handleCdnCgiImageRequest" part of the import.
// ---------------------------------------------------------------------------
content = content.replace("handleCdnCgiImageRequest, ", "");

// ---------------------------------------------------------------------------
// 2. Inject ASSETS binding block — serves static files and pre-rendered HTML
//    directly from the Pages ASSETS binding, bypassing the Next.js server.
//    Matches the entire line (including 12-space indent) so indentation stays
//    correct. The first line of ASSETS_BLOCK starts with 12 spaces to match.
// ---------------------------------------------------------------------------
const ASSETS_BLOCK =
`            // Serve static assets from the Pages ASSETS binding (for _worker.js advanced mode).
            if (env.ASSETS) {
                try {
                    let assetPath = url.pathname;
                    if (assetPath === "/" || assetPath === "") {
                        assetPath = "/index.html";
                    } else if (!/\\.[\\w-]+$/.test(assetPath)) {
                        assetPath += ".html";
                    }
                    const prefixedUrl = new URL(\`/assets\${assetPath}\`, request.url);
                    prefixedUrl.search = url.search;
                    const assetResponse = await env.ASSETS.fetch(new Request(prefixedUrl, request));
                    if (assetResponse.status < 400) {
                        const enriched = new Response(assetResponse.body, assetResponse);
                        enriched.headers.set('Link', '</sitemap.xml>; rel="sitemap"');
                        return enriched;
                    }
                } catch {
                    // ASSETS binding unavailable — fall through to Next.js server.
                }
            }`;

content = content.replace(
  "            // Serve images in development.\n",
  ASSETS_BLOCK + "\n",
);

// ---------------------------------------------------------------------------
// 3. Remove the CDN-CGI handler block (harmless but dead code per OpenNext's
//    own comment: "requests do not reach production workers").
// ---------------------------------------------------------------------------
const CDN_CGI_BLOCK =
  "            // Note: \"/cdn-cgi/image/...\" requests do not reach production workers.\n" +
  '            if (url.pathname.startsWith("/cdn-cgi/image/")) {\n' +
  "                return handleCdnCgiImageRequest(url, env);\n" +
  "            }\n";

content = content.replace(CDN_CGI_BLOCK, "");

// ---------------------------------------------------------------------------
// 4. Add a static import for the Next.js server handler (replaces the dynamic
//    `import()` inside the fetch handler). Static imports are evaluated at
//    worker startup time (1-second budget) instead of per-request (10 ms
//    budget), which is the root cause of Error 1102 on cold starts.
//    Guard: check if the import already exists before adding again.
// ---------------------------------------------------------------------------
if (!content.includes('from "./server-functions/default/handler.mjs"')) {
  content = content.replace(
    'import { handler as middlewareHandler } from "./middleware/handler.mjs"',
    `import { handler as middlewareHandler } from "./middleware/handler.mjs"
// @ts-expect-error: resolved by wrangler build
import { handler } from "./server-functions/default/handler.mjs"`,
  );
}

// ---------------------------------------------------------------------------
// 5. Replace the dynamic import in the fetch handler body with a direct call.
//    The module is now statically imported at the top of the file.
// ---------------------------------------------------------------------------
content = content.replace(
  "            // @ts-expect-error: resolved by wrangler build\n" +
  "            const { handler } = await import(\"./server-functions/default/handler.mjs\");\n" +
  "            return handler(reqOrResp, env, ctx, request.signal);",
  "            return handler(reqOrResp, env, ctx, request.signal);",
);

writeFileSync(workerPath, content);

console.log("Patched worker.js ✓ static handler import ✓ ASSETS serving ✓ removed CDN-CGI");
