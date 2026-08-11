import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { publicImageExists } from '@/lib/image-exists';

export const metadata: Metadata = {
  title: 'Steel & TMT Bars : Build360.online',
  description: 'Fe-500, Fe-550, and Fe-600 TMT bars from primary mills (JSW, Vizag, SAIL, TATA) and secondary mills — sourced in bulk.',
};

interface Grade {
  id: 'primary' | 'secondary';
  label: string;
  banner: string;
  description: string;
  brands: Array<{ name: string; description: string }>;
}

const grades: Grade[] = [
  {
    id: 'primary',
    label: 'Primary',
    banner: '/images/steel/primary-grade.jpg',
    description: 'Fe-500, Fe-550, and Fe-600 TMT bars from IS-certified primary steel mills.',
    brands: [
      { name: 'JSW', description: 'High-strength TMT bars from JSW Steel with consistent grade certification.' },
      { name: 'Vizag', description: 'Vizag Steel (RINL) TMT and structural steel known for consistent quality.' },
      { name: 'SAIL', description: 'Steel Authority of India TMT bars across all construction grades.' },
      { name: 'TATA', description: 'Tata Steel TMT bars with superior strength, ductility, and bendability.' },
    ],
  },
  {
    id: 'secondary',
    label: 'Secondary',
    banner: '/images/steel/secondary-grade.jpg',
    description: 'Value-optimised TMT bars from trusted secondary steel mills, grade-certified for construction use.',
    brands: [
      { name: 'Shree', description: 'Reliable secondary TMT bars with dependable strength and finish.' },
      { name: 'Radha', description: 'Cost-effective TMT bars suited to budget-conscious structural works.' },
      { name: 'Suguna', description: 'Durable secondary-mill TMT bars for general construction.' },
      { name: 'Vinayaka', description: 'Consistent secondary-grade TMT bars with verified test certificates.' },
      { name: 'Kamadhenu', description: 'Secondary TMT bars delivering value across residential and commercial builds.' },
    ],
  },
];

export default function SteelPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F2937 0%, #0F172A 50%, #1F2937 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Steel &amp; TMT Bars
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Steel You Can{' '}
            <em className="not-italic text-[var(--color-primary)]">Build On.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Primary and secondary grade TMT bars from 9 verified mills — JSW, Vizag, SAIL, TATA and more.
          </p>
        </div>
      </section>

      {grades.map((grade) => {
        const hasBanner = publicImageExists(grade.banner);
        return (
          <section key={grade.id} id={grade.id} className="py-16 px-[var(--gutter)] scroll-mt-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-10">
                <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">
                  {grade.label} Grade
                </span>
                <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
                  {grade.description}
                </p>
              </div>

              {hasBanner && (
                <div className="rounded-[var(--radius)] overflow-hidden mb-10 relative aspect-[16/5] bg-[var(--color-bg-surface-alt)]">
                  <Image
                    src={grade.banner}
                    alt={`${grade.label} grade steel`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 1024px"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {grade.brands.map((brand) => (
                  <div key={brand.name} className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] overflow-hidden hover:shadow-md transition-all group">
                    <div className="aspect-[4/3] bg-[var(--color-bg-surface-alt)] flex items-center justify-center relative">
                      <span className="font-serif text-4xl font-extrabold text-[var(--color-primary)]">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-sm font-bold text-[var(--color-text-main)] mb-1">{brand.name}</h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{brand.description}</p>
                      <span className="inline-flex items-center mt-3 px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded">
                        {grade.label} Grade
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
