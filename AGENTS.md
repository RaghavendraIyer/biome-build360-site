<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Git / Deploy workflow

- `main` and `dev/staging` are kept in lockstep at the same commit.
- Sync MUST include a post-merge sanity check; the chain aborts (no push) if an unexpected difference develops:
  ```
  git checkout dev/staging && git merge main \
    && [ "$(git rev-parse --verify main)" = "$(git rev-parse --verify dev/staging)" ] \
    && git push origin dev/staging && git checkout main && git push origin main
  ```
- Deploy is MANUAL ONLY. Prod: `npm run cf-deploy --branch=main`; staging: `npm run cf-deploy:staging --branch=dev/staging`. Cloudflare Pages deploys show `source: "ad_hoc"` (no git auto-deploy).
- NON-NEGOTIABLE: always deploy to staging first, validate there, and push to production only on explicit user approval.
- New assets take ~30s to propagate on build360.online after deploy.
