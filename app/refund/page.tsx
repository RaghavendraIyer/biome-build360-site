import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy : Build360.online',
  description: 'Refund and cancellation policy for Build360.online procurement services.',
};

export default function RefundPage() {
  return (
    <section className="px-[var(--gutter)] pt-[60px] pb-20 max-w-3xl mx-auto">
      <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-extrabold text-[var(--color-text-main)] mb-8">Refund Policy</h1>
      <div className="space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        <p>Biome Build360 LLP facilitates procurement between buyers and verified supplier partners. Refund and return policies are governed by the terms agreed upon at the time of order confirmation.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Order Cancellation</h2>
        <p>Cancellation requests must be submitted within 24 hours of order confirmation. Late cancellations may be subject to a restocking fee as determined by the supplier partner.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Defective or Damaged Goods</h2>
        <p>Claims for defective or damaged goods must be reported within 48 hours of delivery. Photographic evidence may be required to process the claim.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Refund Processing</h2>
        <p>Approved refunds are processed within 7-10 business days to the original payment method.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Contact</h2>
        <p>For refund-related queries, contact us at <a href="mailto:info@build360.online" className="text-[var(--color-primary)] no-underline">info@build360.online</a>.</p>
        <p className="text-xs text-[var(--color-text-muted)] mt-8">Last updated: July 2026</p>
      </div>
    </section>
  );
}
