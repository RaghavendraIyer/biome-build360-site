import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions : Build360.online',
  description: 'Terms & Conditions for using Build360.online — operated by Biome Build360 LLP.',
};

export default function TermsPage() {
  return (
    <section className="px-[var(--gutter)] pt-[60px] pb-20 max-w-3xl mx-auto">
      <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-extrabold text-[var(--color-text-main)] mb-8">Terms &amp; Conditions</h1>
      <div className="space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        <p>These Terms &amp; Conditions govern your use of the Build360.online website and services operated by Biome Build360 LLP.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Use of Service</h2>
        <p>Build360.online acts as a procurement intermediary connecting buyers with verified supplier partners. All quotes, orders, and transactions are subject to confirmation and availability.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Pricing &amp; Availability</h2>
        <p>Quoted prices are indicative and subject to change based on market conditions, order quantity, and delivery location. Final pricing is confirmed at the time of order placement.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Limitation of Liability</h2>
        <p>Biome Build360 LLP shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform or services.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Contact</h2>
        <p>For questions about these terms, contact us at <a href="mailto:info@build360.online" className="text-[var(--color-primary)] no-underline">info@build360.online</a>.</p>
        <p className="text-xs text-[var(--color-text-muted)] mt-8">Last updated: July 2026</p>
      </div>
    </section>
  );
}
