import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { products, brands } from '@/data/products';
import { FilterBar } from '@/components/products/FilterBar';
import { GroutCalculator } from '@/components/products/GroutCalculator';

export const metadata: Metadata = {
  title: 'UltraTech Tilefixo Adhesives & Grouts : Build360.online',
  description: 'Explore the complete range of tile adhesives, epoxy grouts, and cleaners. Calculate grout joints and preview colors.',
};

const brandOrder = ['ultratech', 'myk', 'weber'];
const brandGradients: Record<string, string> = {
  ultratech: 'linear-gradient(135deg, #2E1A17 0%, #1A0D0B 100%)',
  myk: 'linear-gradient(135deg, #1A2E1A 0%, #0D1A0B 100%)',
  weber: 'linear-gradient(135deg, #1A1A2E 0%, #0B0B1A 100%)',
};

export default function AdhesivesPage() {
  return (
    <>
      {brandOrder.map((brandId) => {
        const brand = brands.find((b) => b.id === brandId);
        const brandProducts = products.filter((p) => p.brand === brandId);
        if (!brand) return null;
        return (
          <section key={brandId} className="py-20 px-[var(--gutter)] relative overflow-hidden" style={{ background: brandGradients[brandId] }}>
            <div className="mx-auto max-w-5xl text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-4 py-2 rounded-full mb-4 inline-block">
                {brand.name}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {brandProducts.map((product) => (
                  <div key={product.id} className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] overflow-hidden hover:shadow-md transition-all group">
                    <div className="aspect-[4/3] bg-[var(--color-bg-surface-alt)] relative">
                      {product.image ? (
                        <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-serif text-2xl font-bold text-[var(--color-text-muted)]">{product.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      {product.specs?.Grade && (
                        <span className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded inline-block mb-2">
                          {product.specs.Grade}
                        </span>
                      )}
                      <h3 className="font-serif text-sm font-bold text-[var(--color-text-main)] mb-1">{product.name}</h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-5xl text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">Tools</span>
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Grout Volume &amp; Weight{' '}
            <em className="not-italic text-[var(--color-primary)]">Calculator</em>
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto mb-10">
            Input tile geometry and target joint dimensions. Calculates required grout weight based on volumetric equations.
          </p>
          <GroutCalculator />
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)]" style={{ background: 'linear-gradient(135deg, #1A0A08 0%, #0A0A0A 50%, #1A0A08 100%)' }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-white mb-4">
            Professional Sourcing.{' '}
            <em className="not-italic text-[var(--color-primary)]">Guaranteed Turnaround.</em>
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            WhatsApp your project location and quantity specifications. Get detailed quotes for premium adhesives in under 4 hours.
          </p>
          <Button href="https://wa.me/919032514441" external variant="primary" className="px-8 py-3">
            Get a Quote
          </Button>
        </div>
      </section>
    </>
  );
}
