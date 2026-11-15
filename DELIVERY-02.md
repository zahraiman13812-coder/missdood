# DELIVERY 02 — Header + navigation

## Changed files (replace)
- `src/components/layout/site-header.tsx`
- `src/styles/tokens.css`
- `src/styles/theme.css`

## New files (add)
- `src/config/navigation.ts`
- `src/app/(store)/shop/page.tsx`
- `src/app/(store)/search/page.tsx`
- `src/app/(store)/cart/page.tsx`
- `src/app/(store)/about/page.tsx`
- `src/app/(store)/contact/page.tsx`
- `src/app/(customer)/account/page.tsx`

## Included features
- Responsive sticky header with original logo
- Accessible multi-level desktop navigation
- Mobile drawer with grouped links
- Search overlay leading to a query-aware route
- Account and cart links with honest demo placeholder pages
- No literal colors inside TSX; only in theme token file

## Important
- Search has no real product results yet.
- Login, cart transactions, checkout, backend and database are **not** implemented.
- Selling restricted tobacco products online in Iran is not enabled.
- Run `npm install`, `npm run typecheck`, `npm run build` before deploying.

## Install
Extract the `miss-dood` directory in the ZIP into your existing project, allowing replacement of the three changed files. All other files are additions. Do not place the folder as a nested `miss-dood/miss-dood`.
