# MISS DOOD — Frontend Foundation (Stage 01)

A Persian RTL Next.js 16 + TypeScript + Tailwind CSS 4 starter, with centralized theme tokens and the provided transparent brand logo.

## Prerequisites
- Node.js 20.9+ (Node.js 22 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## GitHub / Vercel
1. Create a new **empty** GitHub repo named `miss-dood` (no auto README).
2. In this folder run:
```bash
git init
git add .
git commit -m "chore: initial MISS DOOD frontend foundation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/miss-dood.git
git push -u origin main
```
3. In https://vercel.com/new import your GitHub repository; framework should be detected as Next.js. Deploy with defaults.
4. Changes merged/pushed to `main` will trigger redeployment automatically.

## What this stage includes
- Working root homepage, brand header, footer, RTL metadata, Tailwind v4
- Logo: `public/logos/miss-dood-transparent.png`
- All default brand colors centralized in `src/styles/tokens.css`
- Theme variable aliases in `src/styles/theme.css`
- Future feature folders are placeholders containing `.gitkeep`, not finished pages
- No database, payment connection, admin login, or active checkout at this stage

## Change management
Future stage ZIPs should contain only added/changed files plus a CHANGELOG. Unzip over the existing project and commit.

## Compliance
Initial public site is a non-transactional brand design preview. Restricted product checkout must not be enabled where prohibited.
