import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Tile Adhesives & Grouts',
    desc: 'Premium tile adhesives, epoxy grouts, and cleaners from UltraTech Tilefixo, MYK Laticrete, and Saint Gobain Weber.',
    href: '/products/adhesives',
    badge: '3 Brands · 34 SKUs',
    status: 'live' as const,
    bg: 'from-[#2E1A17] to-[#1A0D0B]',
  },
  {
    title: 'Cement & Concrete',
    desc: 'OPC, PPC, and specialty cement for all construction grades. Sourced from IS-certified mills.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Steel & TMT Bars',
    desc: 'Fe-500, Fe-550, and Fe-600 grade TMT bars from IS-certified manufacturers.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Blocks & Bricks',
    desc: 'AAC blocks, fly ash bricks, red bricks, and concrete blocks for all walling needs.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Finishing Supplies',
    desc: 'POP, putty, paints, sealants, and interior finishing materials for residential and commercial projects.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Waterproofing & Sealants',
    desc: 'Membrane waterproofing, liquid sealants, and drainage solutions. Coming soon.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Water Treatment Solutions',
    desc: 'Industrial and residential water treatment systems, RO plants, and softeners. Partner: Venus.',
    href: '/products',
    badge: 'Coming Soon · Venus',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Power Backups & Gensets',
    desc: 'Industrial generators, UPS systems, and power backup solutions. Partner: Cummins.',
    href: '/products',
    badge: 'Coming Soon · Cummins',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
  {
    title: 'Plumbing & Sanitaryware',
    desc: 'CPVC pipes, fittings, sanitaryware, and bathroom solutions for residential and commercial projects.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon' as const,
    bg: 'from-zinc-800 to-zinc-900',
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 md:py-28 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">
            Our Products
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)]">
            Everything You Need to{' '}
            <em className="not-italic text-[var(--color-primary)]">Build.</em>
          </h2>
          <p className="mt-4 text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-lg mx-auto">
            From tile adhesives and epoxy grouts to cement, steel, and finishing supplies — source every category through Build360.Online&apos;s verified partner network.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group block bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] overflow-hidden hover:shadow-md hover:border-[var(--color-primary-18)] transition-all no-underline"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${cat.bg} relative overflow-hidden flex items-center justify-center`}>
                <span className="font-serif text-4xl md:text-5xl font-extrabold text-white/10 select-none">
                  {cat.title.split(' ')[0]}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded"
                  style={{
                    background: cat.status === 'live' ? 'rgba(37,211,102,0.15)' : 'rgba(255,255,255,0.10)',
                    color: cat.status === 'live' ? '#16A34A' : 'rgba(255,255,255,0.60)',
                  }}
                >
                  {cat.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
                  {cat.status === 'live' ? 'Explore Range' : 'Notify Me'} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
