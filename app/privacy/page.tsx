import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy : Build360.online',
  description: 'Privacy Policy for Build360.online — operated by Biome Build360 LLP.',
};

export default function PrivacyPage() {
  return (
    <section className="px-[var(--gutter)] pt-[60px] pb-20 max-w-3xl mx-auto">
      <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-extrabold text-[var(--color-text-main)] mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        <p>Biome Build360 LLP (&apos;Build360.online&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Information We Collect</h2>
        <p>We collect information you voluntarily provide when you submit a contact form, request a quote, or communicate with us via WhatsApp or email. This may include your name, phone number, email address, company name, and project requirements.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">How We Use Your Information</h2>
        <p>We use the information we collect to respond to your enquiries, process quote requests, coordinate material supply and delivery, improve our services, and communicate with you about your orders.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Data Sharing</h2>
        <p>We do not sell your personal information. We may share your data with verified supplier partners as necessary to fulfil your procurement requests.</p>
        <h2 className="font-serif text-lg font-bold text-[var(--color-text-main)] mt-8">Contact</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@build360.online" className="text-[var(--color-primary)] no-underline">info@build360.online</a>.</p>
        <p className="text-xs text-[var(--color-text-muted)] mt-8">Last updated: July 2026</p>
      </div>
    </section>
  );
}
