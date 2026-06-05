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

If the site returns 404 at the root domain, check that the Cloudflare Pages build command is not empty. Without a build command, Cloudflare may deploy the repository root instead of the generated `out/` directory.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so sitemap, robots, and canonical URLs point to the deployed site.
