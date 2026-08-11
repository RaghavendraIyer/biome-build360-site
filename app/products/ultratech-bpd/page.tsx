import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'UltraTech Building Products : Build360.online',
  description: 'UltraTech WeatherPro waterproofing, Readiplast plaster, and Xtralite AAC blocks — specialist home-building products.',
};

const waterproofing = [
  { id: 'weatherpro-flex', image: '/images/products/bpd/weatherpro-flex.jpg', name: 'WeatherPro Flex', description: 'Single-component waterproofer for general waterproofing of roofs, terraces, and wet areas. 3/15/30 kg.', chips: ['Flex', 'Roofs & Terraces'] },
  { id: 'weatherpro-hi-flex', image: '/images/products/bpd/weatherpro-hi-flex.jpg', name: 'WeatherPro Hi-Flex', description: 'Superior waterproofing coat for critical moisture and stress areas — bridges cracks and enhances durability.', chips: ['Hi-Flex', 'High Performance'] },
  { id: 'weatherpro-wp200', image: '/images/products/bpd/weatherpro-wp200.jpg', name: 'WeatherPro WP+ 200', description: 'Preventive waterproofing system from the WeatherPro range — one chance to build your home waterproof from within.', chips: ['Preventive', 'WP+ 200'] },
  { id: 'weatherpro-top-shield', image: '/images/products/bpd/weatherpro-top-shield.jpg', name: 'WeatherPro Top-Shield', description: 'Acrylic-based triple-coat waterproofing system delivering superior protection for roofs.', chips: ['Acrylic', 'Triple Coat'] },
  { id: 'pop-shield', image: '/images/products/bpd/pop-shield.jpg', name: 'POP-Shield', description: '3x protection for your roof from dampness — with crack bridging up to 10%.', chips: ['Crack Bridging', 'Roof'] },
  { id: 'bitupo', image: '/images/products/bpd/bitupo.jpg', name: 'Bitupo', description: 'Repair waterproofing system for effective protection of horizontal and vertical surfaces.', chips: ['Repair WP'] },
  { id: 'seal-dry', image: '/images/products/bpd/seal-dry.jpg', name: 'Seal & Dry SBR / S+', description: 'SBR latex and polymer additives for waterproofing and polymer-modified mortar.', chips: ['SBR Latex'] },
  { id: 'bathroom-kit', image: '/images/products/bpd/bathroom-kit.jpg', name: 'Bathroom Waterproofing Kit', description: 'Complete kit for waterproofing bathrooms — membrane plus accessories in one solution.', chips: ['Bathroom Kit'] },
];

const plasterRepair = [
  { id: 'readiplast-rp', image: '/images/products/bpd/readiplast.jpg', name: 'Readiplast RP', description: 'Specialist ready-mix plaster system — strong plastering in just 2 days with self-curing and dampness prevention.', chips: ['Ready-Mix', '2-Day'] },
  { id: 'repair2day', image: '/images/products/bpd/repair2day.jpg', name: 'Repair2Day', description: 'Rapid repair mortar that gains strength in 2 days — restores surfaces fast.', chips: ['Rapid Repair'] },
  { id: 'super-stucco', image: '/images/products/bpd/super-stucco.jpg', name: 'Super Stucco', description: 'Smooth finishing plaster for premium interiors and exterior surfaces.', chips: ['Finishing Plaster'] },
  { id: 'sprayoplast', image: '/images/products/bpd/sprayoplast.jpg', name: 'Sprayoplast', description: 'Spray-applied plaster for fast, large-area wall finishing.', chips: ['Spray Applied'] },
  { id: 'microkrete', image: '/images/products/bpd/microkrete.jpg', name: 'Microkrete', description: 'Structural repair and rehabilitation mortar for concrete repairs.', chips: ['Repair & Rehab'] },
  { id: 'mykrofill', image: '/images/products/bpd/mykrofill.jpg', name: 'Mykrofill', description: 'Non-shrink repair mortar for filling and patching of concrete surfaces.', chips: ['Non-Shrink'] },
  { id: 'basekrete', image: '/images/products/bpd/basekrete.jpg', name: 'Basekrete', description: 'Base coat plaster and repair mortar for masonry and concrete.', chips: ['Base Coat'] },
  { id: 'krackfil', image: '/images/products/bpd/krackfil.jpg', name: 'Krackfil', description: 'Crack-filling compound for repairing hairline and structural cracks.', chips: ['Crack Filler'] },
  { id: 'rpm', image: '/images/products/bpd/rpm.jpg', name: 'RPM', description: 'Repair and plaster mortar range for general masonry repairs.', chips: ['Repair'] },
  { id: 'smartop', image: '/images/products/bpd/smartop.jpg', name: 'Smartop', description: 'Flooring system for self-levelling and decorative concrete toppings.', chips: ['Flooring'] },
  { id: 'floorkrete-hs2', image: '/images/products/bpd/floorkrete.jpg', name: 'Floorkrete HS2', description: 'High-strength flooring mortar for industrial and commercial floors.', chips: ['High Strength'] },
];

const blocks = [
  { id: 'xtralite', image: '/images/products/bpd/xtralite.jpg', name: 'Xtralite AAC Blocks', description: 'Autoclaved aerated concrete blocks — building accuracy, superior acoustics, and faster construction. IS 2185 Part 3 certified.', chips: ['AAC', 'IS 2185'] },
  { id: 'fixoblock', image: '/images/products/bpd/fixoblock.jpg', name: 'Fixoblock', description: 'Thin-layer jointing mortar for AAC block masonry — high tensile adhesion with no shrinkage cracks.', chips: ['Thin Layer', '40 kg'] },
];

export default function UltratechBpdPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A2E3D 0%, #0B1620 50%, #1A2E3D 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            UltraTech Building Products
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Specialist Home Building.{' '}
            <em className="not-italic text-[var(--color-primary)]">From India&apos;s No.1 Cement.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Waterproofing, plaster & repair systems, and AAC blocks from UltraTech Building Products Division.
          </p>
        </div>
      </section>

      <section id="waterproofing" className="py-16 px-[var(--gutter)] scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Waterproofing Systems</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Preventive and repair waterproofing — one chance to build your home waterproof from within.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterproofing.map((line) => (
              <ProductLineCard key={line.id} name={line.name} image={line.image} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section id="plaster-repair" className="py-16 px-[var(--gutter)] scroll-mt-24 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Plaster & Repair</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Ready-mix plasters, repair mortars, and flooring systems that protect from cracks and dampness.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plasterRepair.map((line) => (
              <ProductLineCard key={line.id} name={line.name} image={line.image} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section id="blocks" className="py-16 px-[var(--gutter)] scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">AAC Blocks</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Lightweight, precision AAC blocks and thin-layer jointing mortar for faster, greener walls.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((line) => (
              <ProductLineCard key={line.id} name={line.name} image={line.image} description={line.description} chips={line.chips} />
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
