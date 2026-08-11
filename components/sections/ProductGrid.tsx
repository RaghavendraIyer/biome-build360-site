import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Category {
  title: string;
  desc: string;
  href: string;
  badge: string;
  status: 'live' | 'coming-soon';
  image: string;
}

const categories: Category[] = [
  {
    title: 'Tile Adhesives & Grouts',
    desc: 'Premium tile adhesives, epoxy grouts, and cleaners from UltraTech Tilefixo, MYK Laticrete, and Saint Gobain Weber.',
    href: '/products/adhesives',
    badge: '3 Brands · 34 SKUs',
    status: 'live',
    image: '/images/categories-jpg/Professional_product_photography_of_construction-grade_tile-0.jpg',
  },
  {
    title: 'Cement & Concrete',
    desc: 'OPC, PPC, and specialty cement for all construction grades. Sourced from IS-certified mills.',
    href: '/products',
    badge: 'Coming Soon',
    status: 'coming-soon',
    image: '/images/categories-jpg/cinematic_photo_of_Realistic_photograph_of_cement_bags_plain_grey_brown_sacks_-2.jpg',
  },
  {
    title: 'Steel & TMT Bars',
    desc: 'Fe-500, Fe-550, and Fe-600 TMT bars. Primary mills — JSW, Vizag, SAIL, TATA — and secondary mills such as Shree, Radha, Suguna, Vinayaka, Kamadhenu.',
    href: '/products/steel',
    badge: '9 Mills · 2 Grades',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Photorealistic_image_of_bundled_TMT_steel_rebar_rods_stacke-3.jpg',
  },
  {
    title: 'Blocks & Bricks',
    desc: 'Xtralite AAC blocks and Fixoblock thin-layer jointing mortar from UltraTech Building Products for faster, greener walls.',
    href: '/products/blocks-bricks',
    badge: 'UltraTech BPD',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Realistic_photograph_of_AAC_blocks_and_red_clay_bricks_stac-2.jpg',
  },
  {
    title: 'Finishing Supplies',
    desc: 'Readiplast plaster, repair mortars, flooring systems, and Kerakoll adhesives and grouts for flawless finishes.',
    href: '/products/finishing-supplies',
    badge: 'UltraTech · Kerakoll',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Realistic_product_photography_of_construction_finishing_sup-2.jpg',
  },
  {
    title: 'Waterproofing & Sealants',
    desc: 'WeatherPro and Aquastop membrane waterproofing, liquid sealants, and bathroom kits from UltraTech BPD and Kerakoll.',
    href: '/products/waterproofing-sealants',
    badge: 'UltraTech · Kerakoll',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Professional_photograph_of_waterproofing_membrane_rolls_and-3.jpg',
  },
  {
    title: 'Water Treatment Solutions',
    desc: 'Heat pumps (Venus), geysers (Racold), water softeners, RO plants, pressure pumps from verified manufacturers.',
    href: '/products/water-treatment',
    badge: 'Venus · Racold',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Realistic_photograph_of_an_industrial_water_softener_and_RO-3.jpg',
  },
  {
    title: 'Power Backups & Gensets',
    desc: 'Industrial and commercial gensets and solar power backup — including Venus on-grid rooftop solar.',
    href: '/products/power-backup',
    badge: 'Gensets · Solar',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Professional_photograph_of_an_industrial_diesel_generator_g-0.jpg',
  },
  {
    title: 'Plumbing & Sanitaryware',
    desc: 'Hindware sanitaryware, faucets, showers, and bath fittings from the Italian Collection for premium bathrooms.',
    href: '/products/plumbing-sanitaryware',
    badge: 'Hindware',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_High-end_realistic_photograph_of_modern_bathroom_sanitarywa-1.jpg',
  },
  {
    title: 'Furniture & Interiors',
    desc: 'Rockworth ergonomic and task chairs for modern, productive workspaces — certified ergonomics and sustainability.',
    href: '/products/furniture-interiors',
    badge: 'Rockworth',
    status: 'live',
    image: '/images/categories-jpg/cinematic_photo_of_Realistic_product_photography_of_construction_finishing_sup-2.jpg',
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 md:py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">
            Our Products
          </span>
          <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--color-text-main)]">
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
              <div className="aspect-square relative overflow-hidden bg-[var(--color-bg-surface)]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
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
