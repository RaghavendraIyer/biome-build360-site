import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build360 Vision & Business Model — Shareable Overview',
  description:
    "India's most trusted backbone for building — every material, on time, on price. Business model, journey, and roadmap for stakeholders.",
  robots: { index: false, follow: false },
};

export default function VisionSharePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-[var(--gutter)] py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            Shareable — for Srikar & stakeholders (not indexed)
          </div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold text-[var(--color-text-main)] leading-tight">
            Build360 — Where we are & where we&apos;re going
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-3 max-w-2xl mx-auto">
            A non-technical overview: how a builder gets material, what we clone from ServCrust, and our 7-epic roadmap. Approved model: <strong>Approach 1 — ServCrust literal clone</strong> (2026-08-24).
          </p>
        </div>

        {/* Vision / Mission / Business Model */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-900 to-[#1e3a5f] text-white p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-[11px] tracking-[0.15em] uppercase opacity-60 mb-2">Vision — 5 Years</div>
              <div className="font-serif text-[22px] font-extrabold leading-tight">
                India&apos;s most trusted backbone for building — every material, on time, on price.
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-[11px] tracking-[0.1em] uppercase opacity-60 mb-2">Mission — Every Day</div>
                <div className="text-sm leading-relaxed opacity-90">
                  We make procurement transparent: vetted vendors in &lt;1s, live prices, and tracked delivery to your pin — from a WhatsApp Hi to proof of delivery.
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur">
              <div className="text-[11px] tracking-[0.1em] uppercase opacity-60 mb-3">Business Model — Simple</div>
              <div className="space-y-3 text-[13px]">
                <div className="flex gap-3 items-center">
                  <span className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-sm">📦</span>
                  <span><b>Narrow SKUs:</b> Aggregates, bricks, blocks, RMC + tile adhesives</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-7 h-7 rounded-lg bg-sky-400 flex items-center justify-center text-sm">💬</span>
                  <span><b>Two ways to order:</b> WhatsApp “Hi” + B2B portal</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-sm">₹</span>
                  <span><b>We earn:</b> Fee per delivered order (2–5%) — no hidden markup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h2 className="font-serif text-xl font-extrabold text-[var(--color-text-main)]">How a Builder Gets Material — 5 Steps</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">No calls, no chasing dealers. One flow, one accountable partner.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
            {[
              { n: '1. WhatsApp Hi', d: 'Builder sends “Hi” or uploads BOQ list', bg: '#f0fdf4', e: '💬' },
              { n: '2. Quote in 4 Hours', d: 'We standardize RFQ, get live prices from vetted vendors', bg: '#eff6ff', e: '⚡' },
              { n: '3. You Choose', d: 'Compare quotes side-by-side, pick best value', bg: '#fef3c7', e: '✓' },
              { n: '4. Delivered to Pin', d: 'Camera-vetted vendor, pin-precise, tracked live', bg: '#f5f3ff', e: '🚚' },
              { n: '5. Fee Done', d: 'Proof of delivery → fee collected (COD/UPI)', bg: '#fdf2f8', e: '🧾' },
            ].map((s) => (
              <div key={s.n} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                <div className="w-11 h-11 rounded-[10px] flex items-center justify-center mx-auto mb-2 text-[18px]" style={{ background: s.bg }}>
                  {s.e}
                </div>
                <div className="text-xs font-bold text-slate-900">{s.n}</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-[11px] text-slate-400 mt-3">Before: Call 5 dealers → no audit trail → site stops. → Now: One WhatsApp → accountable delivery.</div>
        </div>

        {/* Roadmap */}
        <div className="mb-8">
          <h2 className="font-serif text-xl font-extrabold text-[var(--color-text-main)]">Roadmap — 7 Epics, Where We Are</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">Priority order. Green = done & live on build360.online</p>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mt-4">
            {[
              { k: 'Epic 1', t: 'Buyer Acquisition', s: 'SEO pages', c: '✓ Live', bg: '#f0fdf4', bd: '#22c55e', tc: '#16a34a' },
              { k: 'Epic 2', t: 'RFQ Intake', s: 'Form + WhatsApp', c: '✓ Live', bg: '#f0fdf4', bd: '#22c55e', tc: '#16a34a' },
              { k: 'Epic 3', t: 'Quote Generation', s: 'Notion CRM', c: '✓ Live', bg: '#f0fdf4', bd: '#22c55e', tc: '#16a34a' },
              { k: 'Epic 4 ★', t: 'Supply Partners', s: 'Vendor onboarding', c: '● 4.1 Done', bg: '#fef3c7', bd: '#f59e0b', tc: '#d97706' },
              { k: 'Epic 5', t: 'Order & Fulfillment', s: 'Delivery → fee', c: 'Next', bg: '#ffffff', bd: '#e2e8f0', tc: '#64748b' },
              { k: 'Epic 6', t: 'Content & SEO', s: 'Pricing pages', c: 'Queued', bg: '#ffffff', bd: '#e2e8f0', tc: '#64748b' },
              { k: 'Epic 7', t: 'Platform Health', s: 'Uptime', c: 'Live', bg: '#ffffff', bd: '#e2e8f0', tc: '#64748b' },
            ].map((e) => (
              <div key={e.k} className="rounded-[10px] p-3 text-center" style={{ background: e.bg, border: `1.5px solid ${e.bd}` }}>
                <div className="text-[10px] tracking-[0.08em] uppercase font-bold" style={{ color: e.tc }}>
                  {e.k}
                </div>
                <div className="text-[11px] font-bold text-slate-900 mt-1">{e.t}</div>
                <div className="text-[10px] text-slate-500 mt-1">{e.s}</div>
                <div className="mt-2 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: e.tc === '#64748b' ? '#e2e8f0' : e.tc, color: e.tc === '#64748b' ? '#64748b' : 'white' }}>
                  {e.c}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-3 items-center">
            <span className="text-xl">★</span>
            <span className="text-xs leading-relaxed">
              <b>Priority now is Epic 4.2–4.4</b> — taking vendors from “New” → “Vetted” → “Active”, then forwarding RFQs by pincode, then tracking on-time delivery. Your Linear board (BIO-6, BIO-7, BIO-8) is ready.
            </span>
          </div>
        </div>

        {/* Shipped vs Next */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-emerald-600">✓ What We Shipped (Live Today)</div>
            <ul className="text-xs text-slate-700 mt-2 ml-4 list-disc leading-6">
              <li><b>/partners</b> vendor wizard — 2 steps, WhatsApp toggle, auto eSign</li>
              <li>Notion Vendors DB (26 fields) + Leads DB — end-to-end tested on prod</li>
              <li>Linear: 7 Projects, 8 issues, GitHub linked (main ↔ dev/staging lockstep)</li>
              <li>ServCrust research — we cloned their model honestly</li>
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-amber-600">→ What&apos;s Next (Your Call)</div>
            <ul className="text-xs text-slate-700 mt-2 ml-4 list-disc leading-6">
              <li>BIO-6: Vendor vetting workflow (Stage select)</li>
              <li>BIO-9: Hide 7 out-of-scope product tiles on site</li>
              <li>BIO-10: Rewrite heroes to “fee-per-order”</li>
              <li>Or update your Jul 28 Notion market study — draft ready</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400 border-t border-slate-200 pt-6">
          Shareable link for Srikar — not indexed (no robots). Built from <code>docs/superpowers/specs/2026-08-24-build360-business-model-design.md</code> + audited live site 2026-08-31.
        </div>
      </div>
    </div>
  );
}
