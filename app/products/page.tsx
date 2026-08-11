import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Products : Build360.online',
  description: 'Browse Build360\'s product verticals: tile adhesives, steel, water treatment, power backup, and more.',
};

const liveDescriptions: Record<string, string> = {
  'Tile Adhesives & Grouts': 'UltraTech Tilefixo, MYK Laticrete, Saint Gobain Weber, and Kerakoll adhesives, grouts, sealants, and waterproofing. 44 SKUs across 4 brands.',
  'Steel & TMT Bars': 'Fe-500, Fe-550, and Fe-600 TMT bars. Primary mills — JSW, Vizag, SAIL, TATA — and secondary mills such as Shree, Radha, Suguna, Vinayaka, Kamadhenu.',
  'Water Treatment Solutions': 'Heat pumps (Venus), geysers (Racold), water softeners, RO plants, and pressure pumps from verified manufacturers.',
  'Power Backups & Gensets': 'Industrial and commercial gensets and solar power backup solutions — including Venus on-grid rooftop solar.',
  'Blocks & Bricks': 'Xtralite AAC blocks and Fixoblock thin-layer jointing mortar from UltraTech Building Products.',
  'Finishing Supplies': 'Readiplast plaster, repair mortars, flooring systems, and Kerakoll adhesives and grouts for flawless finishes.',
  'Waterproofing & Sealants': 'WeatherPro and Aquastop membrane waterproofing, liquid sealants, and bathroom kits from UltraTech BPD and Kerakoll.',
  'Plumbing & Sanitaryware': 'Hindware sanitaryware, faucets, showers, and bath fittings from the Italian Collection.',
  'Furniture & Interiors': 'Rockworth ergonomic and task chairs for modern, productive workspaces.',
};

const comingSoonDescriptions: Record<string, string> = {
  'Cement & Concrete': 'OPC, PPC, and specialty cement for all construction grades.',
  Plywood: 'Marine, BWR, and commercial plywood for structural and interior use.',
};

const productsLink = navLinks.find((link) => link.type === 'products');
const categories = productsLink?.type === 'products' ? productsLink.categories : [];

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
            From tile adhesives and epoxy grouts to steel, water treatment, and power backup — source every category through Build360&apos;s verified partner network.
          </p>
        </div>
      </section>

      <section className="pb-20 px-[var(--gutter)]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat) => {
              const isLive = Boolean(liveDescriptions[cat.label]);
              const desc = liveDescriptions[cat.label] ?? comingSoonDescriptions[cat.label] ?? '';
              return isLive ? (
                <Link key={cat.label} href={cat.href} className="group block p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-colors no-underline">
                  <h3 className="font-serif text-xl font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors mb-3">{cat.label}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">Browse Products <ArrowRight size={14} /></span>
                </Link>
              ) : (
                <div key={cat.label} className="p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] opacity-60">
                  <h3 className="font-serif text-xl font-bold text-[var(--color-text-main)] mb-3">{cat.label}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{desc}</p>
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Coming Soon</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
