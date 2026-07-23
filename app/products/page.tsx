import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products : Build360.online',
  description: 'Browse Build360\'s product verticals: tile adhesives, epoxy grouts, and more.',
};

const categories = [
  { name: 'Tile Adhesives & Grouts', desc: 'UltraTech Tilefixo, MYK Laticrete, and Saint Gobain Weber adhesives, epoxy grouts, and specialty tiling solutions. 40+ SKUs across 3 brands.', href: '/products/adhesives', available: true },
  { name: 'Water Solutions', desc: 'Waterproofing membranes, sealants, and drainage solutions for residential and commercial construction projects.', href: '#', available: false },
  { name: 'Power & Gensets', desc: 'Industrial generators, power backup solutions, and electrical distribution equipment for construction sites.', href: '#', available: false },
  { name: 'Furniture & Interiors', desc: 'Modular furniture, interior fit-out materials, and finishing supplies for commercial and residential projects.', href: '#', available: false },
];

export default function ProductsPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center text-center px-[var(--gutter)] pt-[60px] pb-16 bg-[var(--color-bg-app)]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Everything You Need to{' '}
            <em className="not-italic text-[var(--color-primary)]">Build.</em>
          </h1>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            From tile adhesives and epoxy grouts to cement, steel, and finishing supplies — source every category through Build360&apos;s verified partner network.
          </p>
        </div>
      </section>

      <section className="pb-20 px-[var(--gutter)]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              cat.available ? (
                <Link key={cat.name} href={cat.href} className="group block p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-colors no-underline">
                  <h3 className="font-serif text-xl font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors mb-3">{cat.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">Browse Products <ArrowRight size={14} /></span>
                </Link>
              ) : (
                <div key={cat.name} className="p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] opacity-60">
                  <h3 className="font-serif text-xl font-bold text-[var(--color-text-main)] mb-3">{cat.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{cat.desc}</p>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Coming Soon</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
