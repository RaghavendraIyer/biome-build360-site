# Design: Brand Distribution Hierarchy Across Product Sections

**Date:** 2026-08-11

**Status:** Approved for implementation

## Goal

Reflect Build360's real brand/distribution structure for three product verticals across the products page and all relevant product sections of the site (header nav, homepage product grid, footer):

- **Water Treatment Solutions** — Heat Pumps, Water Softeners, RO Plants, Pressure Pumps, Geysers
- **Power Backups & Gensets** — Genset, Solar
- **Steel & TMT Bars** — grades **Primary** (JSW, Vizag, SAIL, TATA) and **Secondary** (Shree, Radha, Suguna, Vinayaka, Kamadhenu)

## Hierarchy

Water Treatment and Power Backup are **2 levels** (category → product type).
Steel is **3 levels** (category → grade → brand).

## Data model (`data/navigation.ts`)

Extend `ProductCategory` with an optional `groups` array. A category has either a flat `brands` list (Adhesives, unchanged) or `groups` (the new verticals).

```ts
export interface ProductGroup {
  label: string;          // e.g. 'Heat Pumps', 'Primary'
  href: string;           // anchor on the category page, e.g. '/products/steel#primary'
  brands?: BrandChild[];  // only Steel grades carry brands
}

export interface ProductCategory {
  label: string;
  href: string;
  brands?: BrandChild[];   // flat brands (Tile Adhesives & Grouts)
  groups?: ProductGroup[]; // grouped (Water Treatment, Power, Steel)
}
```

- Tile Adhesives & Grouts → keeps flat `brands` (UltraTech, MYK, Weber) — unchanged.
- Water Treatment Solutions → `groups` with 5 leaf groups (no brands).
- Power Backups & Gensets → `groups` Genset + Solar (no brands).
- Steel & TMT Bars → `groups` **Primary** (JSW, Vizag, SAIL, TATA) and **Secondary** (Shree, Radha, Suguna, Vinayaka, Kamadhenu), each with a `brands` list.

## Navigation flyout (`components/layout/ProductsSubmenu.tsx`)

- Groups render as flyout rows, always clickable, and link to their group anchor on the category page (e.g. `/products/water-treatment#heat-pumps`, `/products/steel#primary`).
- A group with `brands` also gets a chevron and a **third hover column** listing its brands (Steel only). Steel brand hrefs point to the same anchor as their grade (`/products/steel#primary`, `/products/steel#secondary`).
- Leaf groups (Water/Power types) are plain rows with no chevron.
- The second-level flyout header shows the category label; the third level shows the group label.

## New category pages

All follow the existing adhesives/UltraTech page visual language (dark gradient hero with mono eyebrow → card grid → WhatsApp quote CTA) and export `metadata`.

- `/products/water-treatment` — 5 product-type cards (Heat Pumps, Water Softeners, RO Plants, Pressure Pumps, Geysers), each with image + short description. Anchor slugs per type.
- `/products/power-backup` — Genset + Solar cards.
- `/products/steel` — two grade sections (Primary, Secondary); each brand renders as a card using generic steel imagery / monogram (never brand logos), plus the anchor slugs `#primary` and `#secondary`.

## `/products` page

Replace the 4 hardcoded category cards with a grid driven from `navigation.ts` (categories marked live), aligned labels:

- Live: Tile Adhesives & Grouts, Steel & TMT Bars, Water Treatment Solutions, Power Backups & Gensets
- Coming Soon (unchanged destinations): Cement & Concrete, Blocks & Bricks, Waterproofing & Sealants, Plumbing & Sanitaryware, Finishing Supplies

## Homepage `ProductGrid.tsx`

Flip the three related cards to `status: 'live'` with real hrefs and updated badges/descriptions:

- Steel & TMT Bars → `/products/steel`, badge `9 Mills · 2 Grades`, desc mentions Primary JSW/Vizag/SAIL/TATA + Secondary mills.
- Water Treatment Solutions → `/products/water-treatment`, badge `5 Product Lines`, desc mentions heat pumps, softeners, RO, pressure pumps, geysers.
- Power Backups & Gensets → `/products/power-backup`, badge `Gensets · Solar`.

## Footer (`components/layout/Footer.tsx`)

Point the three product links to the new category pages.

## Images (user-supplied, `public/images/<category>/`, landscape ~468×256+)

- `water-treatment/`: `heat-pump.jpg`, `softener.jpg`, `ro-plant.jpg`, `pressure-pump.jpg`, `geyser.jpg`
- `power-backup/`: `genset.jpg`, `solar.jpg`
- `steel/`: `primary-grade.jpg`, `secondary-grade.jpg` (generic mill/coil/bundle shots; no brand logos)

Existing hero stills (steel rebar, water softener/RO, diesel genset) are reused as page-top heroes and homepage cards. Brand tiles for steel use `primary-grade.jpg` / `secondary-grade.jpg` or the existing letter-monogram fallback — never trademarked logos. If any user images are not yet available at implementation time, pages must render with the monogram fallback and no broken assets.

## Out of scope

- No new SKU products in `data/products.ts` (these pages list distribution lines/brands, not SKU catalogs).
- No changes to `public/images/categories/*.png` (unreferenced leftovers from `slice-sprite.mjs`).
- No logo/image-generation — user generates the 9 assets above.