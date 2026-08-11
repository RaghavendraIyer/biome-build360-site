import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { publicImageExists } from '@/lib/image-exists';

export const metadata: Metadata = {
  title: 'Finishing Supplies : Build360.online',
  description: 'Ready-mix plaster, repair mortars, flooring systems, adhesives, and grouts for finishing your build.',
};

const categories = [
  {
    id: 'plaster-repair',
    label: 'Plaster & Repair',
    banner: '/images/finishing/plaster-repair.jpg',
    description: 'Ready-mix plasters, repair mortars, and flooring systems that protect from cracks and dampness.',
    brands: [
      {
        name: 'UltraTech BPD',
        href: '/products/ultratech-bpd#plaster-repair',
        description: 'Readiplast RP, Repair2Day, Super Stucco, Microkrete, and Floorkrete HS2 systems.',
      },
    ],
  },
  {
    id: 'adhesives-grouts',
    label: 'Adhesives & Grouts',
    banner: '/images/finishing/adhesives-grouts.jpg',
    description: 'Tile adhesives, grouts, and sealants for flawless finishes on every tile and surface.',
    brands: [
      {
        name: 'Kerakoll',
        href: '/products/kerakoll',
        description: 'Superflex, H40 Gel, Bioflex, Fugalite Color, Fugabella Eco, and Silicone Color systems.',
      },
    ],
  },
];

export default function FinishingSuppliesPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2E3D1A 0%, #1A240B 50%, #2E3D1A 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Finishing Supplies
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Finish Strong.{' '}
            <em className="not-italic text-[var(--color-primary)]">Finish Right.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Plasters, repair mortars, adhesives, and grouts — everything that gives your build its final look.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const hasBanner = publicImageExists(category.banner);
        return (
          <section key={category.id} id={category.id} className="py-16 px-[var(--gutter)] scroll-mt-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-10">
                <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">
                  {category.label}
                </span>
                <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              {hasBanner && (
                <div className="rounded-[var(--radius)] overflow-hidden mb-10 relative aspect-[16/5] bg-[var(--color-bg-surface-alt)]">
                  <Image
                    src={category.banner}
                    alt={`${category.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 1024px"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.brands.map((brand) => (
                  <Link key={brand.name} href={brand.href} className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] overflow-hidden hover:shadow-md transition-all group">
                    <div className="aspect-[4/3] bg-[var(--color-bg-surface-alt)] flex items-center justify-center relative">
                      <span className="font-serif text-4xl font-extrabold text-[var(--color-primary)]">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-sm font-bold text-[var(--color-text-main)] mb-1">{brand.name}</h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{brand.description}</p>
                      <span className="inline-flex items-center mt-3 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded px-2 py-1">
                        View Range →
                      </span>
                    </div>
                  </Link>
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
