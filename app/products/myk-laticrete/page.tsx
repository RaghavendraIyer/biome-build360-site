import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { products, brands } from '@/data/products';

export const metadata: Metadata = {
  title: 'MYK Laticrete : Build360.online',
  description: 'MYK Laticrete tile adhesives and epoxy grouts — source in bulk from Build360.',
};

const brand = brands.find((b) => b.id === 'myk')!;
const brandProducts = products.filter((p) => p.brand === 'myk');

export default function MykPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0A08, #0A0A0A, #1A0A08)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[calc(80px+60px)] pb-16">
          <h2 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            {brand.name}
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            {brand.description}
          </p>
        </div>
      </section>

      <section className="py-16 px-[var(--gutter)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandProducts.map((product) => (
              <div key={product.id} className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-[var(--color-bg-surface-alt)] relative">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-lg font-bold text-[var(--color-text-muted)]">{product.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-bold text-[var(--color-text-main)] mb-2">{product.name}</h3>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed">{product.description}</p>
                </div>
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
