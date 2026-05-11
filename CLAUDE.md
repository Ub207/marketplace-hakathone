# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack on localhost:3000
npm run build     # Production build
npm run lint      # ESLint (note: lint is disabled in next.config.ts for builds)
npm run import-data  # Migrate product data from external API into Sanity
```

## Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-02-01
SANITY_API_TOKEN=           # Required for data migration script only
NEXT_PUBLIC_BASE_URL=       # Used for share URLs on product detail pages
```

Note: `src/sanity/lib/client.ts` currently has hardcoded placeholder values and should use the env vars from `src/sanity/env.ts` instead.

## Architecture

**Stack:** Next.js 15 (App Router) + Sanity CMS + Tailwind CSS + TypeScript

### Data Flow

Products live in Sanity CMS. The migration script (`scripts/data-migration.mjs`) pulls from an external API (`https://template-03-api.vercel.app/api/products`) and uploads products + images into Sanity. The Next.js app then queries Sanity directly via GROQ using `src/sanity/lib/client.ts`.

- `src/lib/api.ts` — GROQ query helpers (currently only `getProducts()`)
- `src/app/product/[id]/page.tsx` — fetches a single product by `_id` client-side via `useEffect`
- `src/app/studio/[[...tool]]/page.tsx` — embedded Sanity Studio at `/studio`

### State Management

Two React Context providers wrap the entire app (in `src/app/layout.tsx`):

- `CartContext` (`src/context/CartContext.tsx`) — cart items persisted to `localStorage`; exposes `addToCart`, `removeFromCart`, `updateCartItemQuantity`, `cartTotal`, `cartCount`
- `WishlistContext` (`src/context/WishlistContext.tsx`) — wishlist items persisted to `localStorage`; exposes `addToWishlist`, `removeFromWishlist`

Products with `inventory > 0` go to cart; out-of-stock products go to wishlist.

### Sanity Schema

The product document type (`src/sanity/schemaTypes/product.ts`) has two variants in practice:
- The schema file defines: `name`, `slug`, `image`, `price`, `originalPrice`, `rating`, `reviews`, `description`, `tags`, `sizes`, `stock_quantity`, `category`
- The migration script imports: `productName`, `category`, `price`, `inventory`, `colors`, `status`, `description`, `image`

The app queries use `productName` (not `name`), so the live data comes from migrated documents, not manually created ones.

### Key Type Mismatch

`src/types/index.ts` defines `Product.productName` but `src/sanity/schemaTypes/product.ts` uses `name`. Pages that query Sanity directly (e.g. `product/[id]/page.tsx`) define their own local `Product` type with `productName` to match the migrated data shape.

### Pages

| Route | Description |
|-------|-------------|
| `/` | Home (Hero section) |
| `/product` | Product listing grid |
| `/product/[id]` | Product detail with size selector, add to cart/wishlist, share |
| `/cart` | Cart review |
| `/checkout` | Shipping address + payment form + order summary |
| `/snkrs` | SNKRS section |
| `/help` | Help/contact page |
| `/locate` | Store locator |
| `/orderstatus` | Order tracking |
| `/Loginform` | Login |
| `/SignUp` | Sign up |
| `/joinus` | Join us |
| `/studio` | Sanity Studio (embedded) |
