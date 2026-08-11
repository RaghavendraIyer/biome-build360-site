import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'Power Backup & Gensets : Build360.online',
  description: 'Industrial gensets and solar power backup solutions from verified manufacturers — sourced in bulk.',
};

const lines = [
  { id: 'genset', name: 'Genset', description: 'Industrial and commercial diesel gensets with reliable power output for sites and facilities.', image: '/images/power-backup/genset.jpg' },
  { id: 'solar', name: 'Solar', description: 'On-grid and off-grid solar panels, inverters, and battery backup systems.', image: '/images/power-backup/solar.jpg' },
];

export default function PowerBackupPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D2E06 0%, #1F1704 50%, #3D2E06 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Power Backups &amp; Gensets
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Power That Never{' '}
            <em className="not-italic text-[var(--color-primary)]">Falters.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Gensets and solar solutions from verified manufacturers — keep your site running through every outage.
          </p>
        </div>
      </section>

      <section className="py-16 px-[var(--gutter)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lines.map((line) => (
              <div key={line.id} id={line.id} className="scroll-mt-24">
                <ProductLineCard name={line.name} description={line.description} image={line.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Need Bulk Pricing?{' '}
            <em className="not-italic text-[var(--color-primary)]">We&apos;re Here to Help.</em>
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">Send your BOQ or product list — get a competitive quote within 4 hours.</p>
          <Button href="https://wa.me/919032514441" external variant="primary" className="px-8 py-3">
            Get Pricing on WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
