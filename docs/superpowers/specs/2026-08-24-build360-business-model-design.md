# Design: Build360 Business Model, Vision & Mission — ServCrust Literal Clone (Approach 1)

**Date:** 2026-08-24
**Status:** Approved for implementation
**Author:** Srikar + Muse (brainstorming)
**Decisions locked:** Business Model = Option A (ServCrust literal clone), Vision horizon = B (Pan-India 5-year), Handwritten-note OCR ditched

## Goal

Lock a credible Business Model, Vision, and Mission for Build360 Phase 1 that Srikar can pitch, the site can reflect, and Epics 1–7 can execute against — without overpromising manufacturing or finance we cannot deliver unfunded in 2026–27.

Competitive grounding: BuildXpria (directory), Infra Market (integrated private-label, 60% rev, $2.5B), OfBusiness (commerce + finance for ₹10–200Cr SMMEs), ServCrust (Hyderabad 2022/23, unfunded, 144 players — **closest clone target**).

## Business Model — Dual-Channel Aggregator, Narrow SKUs

**Archetype:** ServCrust literal clone. Not a directory, not a manufacturer in Phase 1.

**SKUs (Phase 1):** Stone aggregates / coarse aggregate, bricks, solid blocks, AAC blocks, RMC — plus Build360's live wedge of **Tile Adhesives & Grouts** (UltraTech, MYK Laticrete, Saint-Gobain Weber). **Out of scope for Phase 1:** Water Treatment, Power Backups & Gensets, Furniture & Interiors, Cement & Concrete broad catalog, Steel & TMT Bars broad catalog — deferred to Phase 2.

**Channels:**
- **Retail / WhatsApp:** Conversational ordering — "send Hi" — status updates on WhatsApp (like ServCrust 8811881111). Plain text only; no vision OCR in Phase 1.
- **B2B Web Portal:** `build360.online` + `/partners` vendor onboarding, order management, payment handling, real-time delivery tracking.
- **Consumer App / Loyalty:** Rewards points + discounts — deferred to Phase 2 (noted as ServCrust differentiator).

**Revenue:** Fee per fulfilled order (2–5% service fee per Phase 1 story map, Epic 3.2 AC3, Epic 5.3–5.4). No inventory. No interest income in Phase 1.

**Moat (Phase 1):** Camera-based vendor authentication (<1s), pin-precise delivery location, live stock with transparent pricing, streamlined checkout-to-tracking. Matches ServCrust trust mechanics; proven unfunded-viable.

**Financial posture:** Asset-light financials, operationally disciplined — Infra Market 2017–18 bootstrapped arc (₹12.5Cr → ₹28.5Cr → ₹60Cr before Series A), OfBusiness profitability discipline. No private label, no owned plants in Phase 1.

## Vision (5-Year, Pan-India)

> **India's most trusted backbone for building — every material, on time, on price.**

Stretches from Hyderabad proof (Year 1–2: pin-level SLA, GHMC daytime windows) to pan-India (Year 3–5) without promising manufacturing in Year 1. This is ServCrust's advertised pan-India promise made credible by sequencing.

## Mission

> **We make procurement transparent: vetted vendors in <1s, live prices, and tracked delivery to your pin — from a WhatsApp Hi to proof of delivery.**

Daily execution promise. Channel-agnostic (WhatsApp + portal), B2C+B2B (like ServCrust), and maps 1:1 to Epic 4.1→4.4 and Epic 5.1→5.4.

## Why This Wins (Trade-offs)

- **Vs. Directory (BuildXpria):** We vet and guarantee delivery — directory sells discovery, we sell fulfillment.
- **Vs. Integrated Mfg (Infra Market):** Infra Market needed mortgage of family property + ₹100Cr Series A + owned plants to hit 60% private label. We defer that to Year 3+ after demand proof.
- **Vs. Commerce+Finance (OfBusiness):** Most sticky long-term (interest > fee), but needs NBFC partner and GST/bank credit scoring from day one. Left as Year 3 option after profitability — not promised in Vision now.

## Roadmap Alignment (Epics 1–7)

- **Now (Epic 1–4.1):** Buyer Acquisition (SEO pages), RFQ Intake (`/api/submit-lead` + Turnstile), Quote Generation (Notion), Supply Partner Management 4.1 — vendor registration at `/partners` (company, contact, phone, email, service pincodes, product categories, brand affiliations → `source=vendor-registration`).
- **Next (Epic 4.2–4.4, prioritized):** Admin onboarding (New→Vetted→Active + quote SLA/delivery capability/fee terms), RFQ forwarding by pincode+category via WhatsApp, fulfillment performance tracking (orders fulfilled, on-time %, <80% on-time for 5+ orders flagged).
- **Then (Epic 5–7):** Order & Fulfillment (Confirmed→Delivered→Collected), Content & SEO, Platform Health. Epic 6.3 pricing transparency page and Epic 7.3 keep-warm workflow stay.

## Out of Scope for Phase 1 (Explicit)

- Handwritten-note OCR (`lib/ox-alpha.ts`, `@cf/meta/llama-3.2-11b-vision-instruct`, `waitUntil` image pipeline) — **ditched** per 2026-08-24 decision.
- Water Treatment, Power Backups, Steel broad, Cement broad, Furniture verticals — catalog stays narrow.
- Private label manufacturing, owned/leased plants, RDC-style acquisition.
- Embedded finance / unsecured credit, BNPL, working-capital underwriting.
- Loyalty/gamification app (rewards, discounts) — noted for Phase 2.

## Implications

- **Data:** `data/navigation.ts` and `data/products.ts` stay narrow; no new SKU verticals until Epic 4 proves vendor density.
- **Tech:** No `export const runtime = "edge"` image pipeline; existing `/api/submit-lead` (Notion + Turnstile) and upcoming `/api/whatsapp` plain-text flow suffice.
- **Notion:** Vendors DB (`3c05e0a1-b48a-80d3-a3cf-e7a83d43ab8e`) already has Business Type/Website/Other Materials. Leads DB (`3545e0a1-b48a-80c8-a252-ea130b376a64`) will gain `WA Stage` select for WhatsApp state machine when that flow is re-scoped to text.

## Open Decisions for Writing-Plans

- Exact service-fee % (to be confirmed with Srikar, Epic 6.3).
- WhatsApp `Hi` number provisioning and Business API verification.
- Vendor rewards mechanics for Phase 2 — points per fulfillment vs. discount tiers.
