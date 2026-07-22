import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'UltraTech Tilefixo',
    desc: 'India\'s leading tile adhesive and grout brand. Trusted for consistent quality across ceramic, vitrified, and stone applications.',
    image: '/adhesives/sumo-ct.jpg',
    href: '/products/ultratech-tilefixo',
  },
  {
    name: 'MYK Laticrete',
    desc: 'Global tile installation technology from a US-India joint venture. Premium epoxy grouts, adhesives, and waterproofing systems.',
    image: '/adhesives/myk-111-73.jpg',
    href: '/products/myk-laticrete',
  },
  {
    name: 'Saint Gobain Weber',
    desc: '350+ years of European construction chemistry. Advanced tile adhesives and grouts engineered for Indian climatic conditions.',
    image: '/adhesives/weberset-premier.jpg',
    href: '/products/saint-gobain-weber',
  },
  {
    name: 'Water Solutions',
    desc: 'Waterproofing membranes, sealants, and drainage solutions for residential and commercial construction. Coming soon.',
    image: null,
    href: '/products',
    comingSoon: true,
  },
  {
    name: 'Power & Gensets',
    desc: 'Industrial generators, power backup solutions, and electrical distribution equipment for construction sites. Coming soon.',
    image: null,
    href: '/products',
    comingSoon: true,
  },
];

export function ProductGrid() {
  return (
    <section className="py-20 md:py-28 px-[var(--gutter)]">
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
            From tile adhesives and epoxy grouts to cement, steel, and finishing supplies — source every category through Build360&apos;s verified partner network.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group block bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] rounded-[var(--radius)] overflow-hidden hover:shadow-md hover:border-[var(--color-primary-18)] transition-all no-underline"
            >
              <div className="aspect-[4/3] bg-[var(--color-bg-surface-alt)] relative overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)]">
                    <span className="text-xs uppercase tracking-wider font-mono">Coming Soon</span>
                  </div>
                )}
                {product.comingSoon && (
                  <span className="absolute top-3 right-3 px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-bg-app)]/80 text-[var(--color-text-muted)] rounded">
                    Coming Soon
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[var(--color-text-main)] group-hover:text-[var(--color-primary)] transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                  {product.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
                  Explore Range <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
