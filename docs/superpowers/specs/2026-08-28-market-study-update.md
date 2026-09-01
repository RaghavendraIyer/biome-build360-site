# Market Study Update — Build360 Positioning, ICP & Execution Plan

**Date:** 2026-08-28
**Status:** Draft for review (updates Jul 28 study)
**Author:** Raghavendra Iyer + Muse
**Basis:** Jul 28 Primary Market Study (Notion) + 2026-08-24 Business Model Design (Approach 1: ServCrust Literal Clone) + Competitor scrapes (BuildXpria, Infra Market, OfBusiness, ServCrust) + build360.online audit 2026-08-31
**Decisions locked since Jul 28:** Narrow SKUs (aggregates/bricks/solid & AAC blocks/RMC + tile adhesives), Dual-channel (WhatsApp `Hi` + B2B portal), Fee-per-order (2-5%), Handwritten OCR ditched, Business Model = ServCrust clone

> **How to read:** This is a redline-friendly update. Sections marked **[UPDATED]** have changed from Jul 28. Unmarked sections are unchanged and carried forward. Original Jul 28 Notion page remains source of truth until this is approved.

---

## 1) Positioning Statement [UPDATED]

**1-sentence positioning (framework)**

For **mid-size real estate developers, Tier-2 contractors, *and* retail buyers in Hyderabad & Bengaluru** who need **predictable pricing and on-time delivery for high-frequency masonry materials (aggregates, bricks, solid & AAC blocks, RMC) plus tile adhesives & allied finishing materials**, **Build360** is a **dual-channel procurement aggregator (WhatsApp for retail + B2B web portal for business)** that **standardizes RFQs, benchmarks live prices, and guarantees fulfillment through camera-vetted, pin-precise supply partners for a fee per fulfilled order**. Unlike **calling 5 dealers on WhatsApp + buying blind, or browsing a directory like BuildXpria, or waiting on an Infra Market-style integrated manufacturer**, we **own the quote-to-delivery accountability without owning inventory — live stock, transparent pricing, tracked delivery.**

*Jul 28 version was: "mid-size real estate developers and Tier-2 contractors in Hyderabad & Bengaluru who need predictable pricing and on-time delivery for high-frequency materials (starting with tile adhesives & allied finishing materials)" as a "procurement + supply reliability platform" vs "calling 5 dealers + buying blind on credit" — standardized RFQs, benchmarked prices, managed accountability. The update narrows SKUs, adds retail dual-channel, and makes fee-per-order explicit.*

### Audience definition (ICP) [UPDATED]

**Primary ICP (beachhead):**

- **Who:** Mid-size developers (5–20 Cr annual material spend) and Tier-2 contractors executing **residential + small commercial** projects — **plus retail buyers (individual home builders) served off the same backbone** (ServCrust duality). This matches ServCrust's B2C+B2B model, validated as your closest competitor (Hyderabad, 2022/23, unfunded).
- **Where:** **Hyderabad / Secunderabad / Gachibowli corridor** first; expansion to **Bengaluru (Whitefield / Sarjapur)** and **Pune** once repeatable — unchanged.
- **What they're buying (initial wedge) [NARROWED]:** **Aggregates, bricks, solid blocks, AAC blocks, RMC, plus tile adhesives / epoxy grout** — **masonry-stage materials** that cause frequent "site stop" issues. *Jul 28 wedge was "Tile adhesives, epoxy grout, waterproofing chemicals, tile spacers/tools — finishing-stage materials." The ServCrust clone narrows to structural masonry + your live tile-adhesive wedge. Waterproofing, Water Treatment, Power Backups, Plumbing, Furniture are deferred to Phase 2.*
- **Operating reality:** Multiple ongoing sites; procurement runs on **WhatsApp, phone calls, and relationships**; approvals are messy; payments run on **15–60 day cycles**; vendor reliability varies sharply by area — unchanged.

### Market category (in buyer's mind) [UPDATED]

Position Build360 as:

- **"Dual-channel aggregator with fee-per-order fulfillment"** (not "marketplace" first, not "directory") — evolution of Jul 28's "Procurement desk + supply reliability partner"
- A **B2B construction procurement platform** that combines:
    - **WhatsApp `Hi` ordering** for retail + **B2B portal** for business (both with real-time tracking) — *new, from ServCrust*
    - **RFQ standardization** (fewer spec mismatches)
    - **Live price benchmarking** (reduce overpay + variance) — *updated from "price benchmarking" to "live" to match ServCrust live stock*
    - **Fulfillment accountability for a fee** (delivery, replacement, serviceability) — *made explicit vs. Jul 28's implicit*

### Reason to believe (early proof points) [UPDATED]

Use only what you can stand behind today:

- **Live catalog + buyer entry points** on build360.online — **but currently 2.5/10 aligned** (audit 2026-08-31): only Tile Adhesives & Blocks & Bricks are narrow-SKU aligned; Aggregates/RMC missing; 7 tiles out-of-scope must be hidden/301'd before claiming this.
- **Quote speed promise** operationalized as **"<4 hours quote" for Hyderabad masonry + tile adhesives** once RFQ desk is staffed — unchanged.
- **Vendor onboarding + bid workflow** already exists — now live at `/partners` with Wizard v2 (Business Type Supplier/Manufacturer/Both, Website, Other Materials, WhatsApp toggle `Same number for WhatsApp`, auto eSign) → Notion Vendors DB `3c05e0a1...` (26 props) — *new proof point*.
- **Content credibility:** pricing trends + BOQ guidance + case stories — unchanged.

### Competitive alternatives (what they do today) [UPDATED]

Jul 28 list plus the four you researched since:

- **Local dealer network** (area-based monopoly; limited price discovery) — unchanged
- **WhatsApp groups** for "rate?" messages (no standardized spec, no audit trail) — unchanged
- **Excel BOQs + phone calls** (slow, inconsistent) — unchanged
- **IndiaMART / JustDial** discovery (leads, not fulfillment) — unchanged
- **Direct brand distributors** (one brand; inventory constraints) — unchanged
- **ERP (larger firms)** (accounting, not last-mile sourcing) — unchanged
- **BuildXpria (Directory)** — 34k listings, free `list your business`, no vetting, monetizes visibility. *You vet and guarantee delivery; they sell discovery.* **[NEW]**
- **ServCrust (Closest clone, Hyderabad 2022/23, unfunded)** — Narrow aggregates/bricks/blocks/RMC + WhatsApp `Hi to 8811881111` + B2B portal + camera vendor auth + pin-precise delivery + rewards app. *You clone this literally, but add tile adhesives and verified SLA.* **[NEW]**
- **Infra Market (Integrated)** — 60% private label, owned/leased plants, RDC acquisition, pan-India. Needs ₹100Cr+ and 10 years. *You defer private label to Year 3+.* **[NEW]**
- **OfBusiness (Commerce+Finance)** — SMME ₹10-200Cr wedge, commerce hook + unsecured credit (GST/bank scoring), interest as profit. *You leave finance for Year 3 (NBFC partner).* **[NEW]**

---

## 2) Product Angles (x3) [REFINED]

### Angle 1 — **The Margin Protector** [UNCHANGED]

- **Target segment:** Procurement head / purchase coordinator at **mid-size developer** (Hyderabad) managing 5–10 concurrent sites
- **Primary emotion:** Anxiety about overpaying + being blamed for cost overruns
- **Best channel:** LinkedIn + WhatsApp outreach to procurement networks; on-ground site visits; builder association meets
- **One-liner tagline:** **"Benchmark prices. Cut variance. Protect margins."**

*Note: Now benchmark against ServCrust narrow masonry basket, not broad finishing catalog. Fee-per-order (not private-label margin) is the protector.*

### Angle 2 — **The Site-Stop Insurance** [UPDATED — DUAL-CHANNEL]

- **Target segment:** Site engineer / project manager at **Tier-2 contractor *and* retail home builder** doing masonry + finishing works
- **Primary emotion:** Fear of delays and site embarrassment (materials not arriving, wrong spec, rework)
- **Best channel:** On-site demos + contractor WhatsApp groups + referral via supervisors (mistris / foremen) + **WhatsApp `Hi` retail flow** — *new, ServCrust duality*
- **One-liner tagline:** **"No material, no work stoppage — we keep your site moving. WhatsApp Hi → delivered."**

*Jul 28 was contractor-only. ServCrust proves B2C+B2B off one backbone doubles liquidity — added retail.*

### Angle 3 — **The Spec & Accountability Layer** [UNCHANGED, NARROWED]

- **Target segment:** Interior fit-out firm owner / project lead doing fast-turnaround commercial interiors (Hyderabad, Bengaluru)
- **Primary emotion:** Frustration with rework, wrong materials, vendor blame games
- **Best channel:** Partnerships with architects/interior studios; BOQ template downloads; targeted Google search ("tile adhesive rate", "epoxy grout price", "aggregates rate Hyderabad", "RMC quote")
- **One-liner tagline:** **"Right spec in. Right material out. Accountability tracked."**

*Search terms updated to narrow SKUs; waterproofing removed from Phase 1 wedge.*

---

## 3) ICP & Pain Point Mapping [UPDATED — added ServCrust duality row]

| Segment | Role/Title | Top 3 Pain Points | What They've Tried | Why It Failed | Emotional Cost |
| --- | --- | --- | --- | --- | --- |
| Mid-size real estate developer (Hyderabad) | Procurement Head / Purchase Coordinator | 1) Price opacity (rates vary wildly by dealer) 2) Supplier fragmentation (no single accountable source) 3) Payment-cycle pressure (15–60 days) | Local dealer relationships, WhatsApp rate checks, Excel BOQs, distributor "favorites" | Rates not comparable (specs differ), favors distort pricing, no audit trail, dealer stockouts shift timelines | Anxiety, blame from leadership, loss of negotiating confidence |
| Tier-2 contractor (multiple sites) | Site Engineer / Project Manager | 1) Material delays stop work 2) Wrong spec delivered causes rework 3) Last-minute demands + approvals chaos | Phone calls to multiple suppliers, "urgent" procurement via runners, borrowing stock from nearby sites | High firefighting, inconsistent quality, hidden costs (transport, wastage), no repeatable process | Constant stress, credibility loss on site, burnout |
| **Retail home builder (individual) [NEW — ServCrust duality]** | **Homeowner / Small contractor** | **1) No single number to order small masonry loads 2) Delivery pin uncertainty 3) No trackability** | **Calling nearest dealer, BuildXpria directory, JustDial** | **No pin-precise promise, no live stock, no tracking** | **Frustration, site idle, mistrust** |
| Interior fit-out firm (commercial) | Owner / Project Lead | 1) Tight deadlines + penalty risk 2) Quality inconsistency (adhesive/grout failures) 3) Coordination gaps between BOQ, client changes, and procurement | Preferred vendors, bulk buying "just in case", ad-hoc substitutions | Inventory ties up cash, substitutions lead to client disputes, failures show up later as callbacks | Fear of reputational damage, frustration, decision fatigue |
| Infrastructure / institutional contractor (packages) | Commercial Manager / Procurement Manager | 1) Compliance + documentation 2) Vendor reliability across locations 3) Working capital strain (retentions + delayed receivables) | Rate contracts, tendered vendors, centralized procurement lists | Rate contracts don't solve last-mile delivery, local execution still depends on informal networks | Low trust, risk aversion, slow decision-making |

---

## 4) Outcome Map [UNCHANGED — metrics still hold]

| Pain Point | Current reality | Desired outcome (Build360) | Quantifiable metric | Qualitative shift |
| --- | --- | --- | --- | --- |
| Price opacity / rate variance | Procurement calls 3–7 dealers; rates differ due to brand/spec/location; decision is political | Standard RFQ + comparable quotes + "best value" recommendation | Same-day price comparison; 5–15% reduction in variance on repeat SKUs | From "guessing" to confident, defensible decisions |
| Material delays causing site stoppage | Work stops; supervisors improvise; schedule slips; client pressure increases | Commitment-based fulfillment: confirmed lead times + escalations + alternatives | 3-day sourcing → <24 hours confirmation; fewer "no-material" days per site/month | From firefighting to predictable execution |
| Wrong spec / quality mismatch | BOQ unclear; substitutions happen; rework + failures later (tile pop-up, grout discoloration) | Spec lock + brand equivalence mapping + proof of supply (batch/brand) | Rework incidents reduced; fewer callbacks within 30–60 days of handover | From blame games to accountability |
| Payment-cycle friction | Dealers chase payments; buyers stretch credit; relationships get strained | Transparent credit terms + ledger visibility + milestone-based follow-ups (even if manual initially) | DSO improved by 7–15 days for participating vendors (target) | From constant tension to managed expectations |

*Note: Jul 28 desired outcome "fee is recorded as receivable" (Epic 5.4) remains manual (UPI/bank transfer outside platform) — consistent with deferring OfBusiness finance wedge.*

---

## 5) Hands-on Deck (Execution Plan) [UPDATED]

### Roles needed (lean, execution-first)

1. **GM / Founder-led GTM (1):** Own ICP focus (**Hyderabad narrow masonry + tile adhesives**), pricing policy, and partner terms — *updated from "Hyderabad finishing materials"*
2. **RFQ Desk / Inside Sales (1–2):** Convert inbound → quote → follow-up; maintain quote SLA ("<4 hours") — unchanged
3. **Supply Partnerships Lead (1):** Onboard + maintain **10–25 reliable vendors/distributors** for **aggregates/bricks/blocks/RMC + tile adhesives**; negotiate serviceability + lead times — *narrowed from broad finishing*
4. **Field Sales / Site Acquisition (1):** Visit sites, collect BOQs, onboard repeat buyers (contractors, developers, *and retail via WhatsApp Hi*) — *added retail*
5. **Content + Performance Marketing (1 part-time or agency):** BOQ templates, pricing pages, local SEO for **"aggregates rate Hyderabad", "AAC block price Hyderabad", "RMC quote" plus "tile adhesive price Hyderabad"** — *updated terms*
6. **Product/Engineering (as needed):** RFQ form, lead routing, vendor quote workflow, analytics instrumentation — *now includes Linear (BIO team, 7 Projects, Cycles) + Notion CRM (Leads 3545e0a1..., Vendors 3c05e0a1...) + Cloudflare Pages deploy (`main` ↔ `dev/staging` lockstep)*

### 30/60/90-day milestones [UPDATED — reflects actual Aug 2026 state]

#### Days 0–30 (Beachhead + Proof) [IN PROGRESS — 50% done]

- [x] **Vendor registration live:** `/partners` Wizard v2 + `POST /api/submit-lead source=vendor-registration` → Vendors DB (verified staging+prod 2026-09-01)
- [x] **Linear operationalized:** Team BIO, 7 Projects (Epics 1-7), 8 issues (BIO-5 Done, BIO-6–11 Todo) — https://linear.app/biome-build-360-llp/team/BIO/overview
- [x] **Business Model locked:** ServCrust clone doc committed `docs/superpowers/specs/2026-08-24-build360-business-model-design.md`
- [ ] **Single promise still to operationalize:** **Hyderabad masonry + tile adhesives quotes in <4 hours** (RFQ desk staffing)
- [ ] **RFQ form V1:** product, quantity, pincode, delivery date, phone — *needs update to narrow SKU dropdown*
- [ ] **10 anchor supply partners** with serviceable pincodes, SLA, replacement policy — *in progress via /partners*
- [ ] **1-page "Verification Standards" + "How we quote"** (fee-per-order explanation, Epic 6.3) — *pending*
- [ ] **Local SEO landing pages:** "Tile adhesive price Hyderabad", "Epoxy grout quote Hyderabad" — *exist but need fee disclosure; add "Aggregates rate Hyderabad", "RMC quote Hyderabad"*
- **Target outcomes:** 50 qualified RFQs / 20 quotes in SLA / 5 fulfilled orders — *to be tracked in Linear Cycle 1*

#### Days 31–60 (Repeatability) [NEXT]

- Add **quote comparison format** (PDF/WhatsApp template) with fee line item
- Introduce **vendor scorecard** (Epic 4.4): SLA adherence, fulfillment, complaints — manual Notion view
- Publish **2 real Hyderabad case proofs** (narrow SKU)
- **Do NOT add categories** beyond wedge — enforce ServCrust narrow discipline (audit P0)
- **Target outcomes:** 150 RFQs cumulative / 30 repeat buyers / 15–25 vendors onboarded

#### Days 61–90 (Scale the motion) [THEN]

- Formalize **account-based approach:** 30 target builders/contractors in Hyderabad + retail WhatsApp funnel metrics
- Add **simple CRM discipline** in Notion + Linear: stages, follow-ups, win/loss reason
- Launch **partner program** for architects/interior studios (referrals)
- **Target outcomes:** 300 RFQs / 50 fulfilled orders / 70%+ quote SLA under 4 hours

### Key content / collateral needed (specific) [UPDATED]

- **Buyer one-pager (PDF):** "How Build360 quotes + delivers in Hyderabad" — *now with narrow SKU list + fee-per-order + dual-channel diagram*
- **RFQ/BOQ templates:** **masonry BOQ starter kit (aggregates/bricks/blocks/RMC)** plus finishing BOQ (tiles/bathrooms/kitchens) — *added masonry*
- **Vendor onboarding pack:** requirements, SLA expectations, serviceability format — *now reflects Wizard v2 fields: Business Type, Supplier type, Website, Other Materials, WhatsApp same toggle*
- **Demo script (7 minutes):** 1) RFQ intake → 2) quote comparison → 3) delivery confirmation → 4) issue resolution — unchanged
- **Case study template (1 page):** Site context → problem → procurement timeline → outcome → testimonial line — unchanged
- **Pricing-trust pages:** "How rates are determined" — *now must explain fee vs. private-label margin to avoid audit P0 confusion*

### Success metrics (leading indicators, first 90 days) [UNCHANGED]

- **Demand-side:** Qualified RFQs/week, RFQ → quote rate, Quote → order conversion, Repeat order rate
- **Supply-side:** Active vendors/week, Vendor quote response time, Fulfillment success rate (% delivered as promised)
- **Ops:** Median time-to-first-quote, Complaint rate per order, "Site-stop" incidents avoided

---

**GTM principle for Build360 (India reality) [REFINED]:** Win by being the **narrow-SKU aggregator that answers fast on WhatsApp and delivers reliably to the pin — with a fee you can see** — *before* expanding into a broad "construction OS." This is ServCrust's proven Hyderabad wedge, Infra Market's Year 1 discipline, and OfBusiness's profitability focus — combined.

*Next step:* Review this diff, approve, and I'll PATCH your Notion Jul 28 page in place (preserves history) or create a new page — your call.
