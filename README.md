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

Generated discovery files:

- Sitemap: `https://gangnam-massage.netlify.app/sitemap.xml`
- RSS: `https://gangnam-massage.netlify.app/rss.xml`
- Robots: `https://gangnam-massage.netlify.app/robots.txt`
- Naver verification meta: `621007e6fdab98f3ffa54fa0686bb423f77cc0c3`

## IndexNow

The site hosts the IndexNow verification key at:

`https://gangnam-massage.netlify.app/e926d9ebeec34dd196aee0797ea4bf3d.txt`

Run `npm run indexnow` to submit the current public URLs to IndexNow/Bing and Naver. A GitHub Actions workflow also runs on every push to `main`, waits for the key file to be live on Cloudflare Pages, and then sends the update notification.
