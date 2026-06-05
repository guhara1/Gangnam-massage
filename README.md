# Gangnam Care Guide

Next.js App Router static site for Gangnam area guide pages.

## Build

```bash
npm install
npm run build
```

The static export is generated in `out/`.

## Cloud Settings

Use these settings for static hosting:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npx next build`
- Install command: `npm install`
- Output directory: `out`
- Node.js: `20.9` or newer

This repository also includes `wrangler.toml` with `pages_build_output_dir = "out"` for Cloudflare Pages.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so sitemap, robots, and canonical URLs point to the deployed site.
