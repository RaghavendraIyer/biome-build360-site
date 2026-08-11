import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'Hindware Italian Collection : Build360.online',
  description: 'Hindware sanitaryware, faucets, showers, and bathroom solutions from the Italian Collection — source in bulk.',
};

const sanitaryware = [
  { id: 'one-piece', name: 'One-Piece Toilets', description: 'Sleek one-piece WC with concealed cisterns, wall-mount options, and intelligent toilet variants.', chips: ['One-Piece', 'Wall Mount'] },
  { id: 'coupled-toilets', name: 'Coupled & Standard Toilets', description: 'Classic coupled and standard two-piece toilets in a wide range of Italian designs.', chips: ['Coupled', 'Standard'] },
  { id: 'wall-hung', name: 'Wall-Hung Toilets', description: 'Space-saving wall-mounted toilets with concealed cisterns for a minimalist bathroom.', chips: ['Wall Hung', 'Concealed'] },
  { id: 'concealed-cisterns', name: 'Concealed Cisterns', description: 'Pneumatic and dual-flush concealed cisterns with ceramic and PVC options.', chips: ['Concealed', 'Dual Flush'] },
  { id: 'wash-basins', name: 'Wash Basins', description: 'Self-rimming, counter-top, pedestal, wall-hung, and integrated pedestal basins.', chips: ['Pedestal', 'Counter-Top', 'Wall Hung'] },
  { id: 'urinals', name: 'Urinals', description: 'Waterless and wall-hung urinals with sensor and standard flushing options.', chips: ['Waterless', 'Wall Hung'] },
  { id: 'bathtubs', name: 'Bath Tubs', description: 'Full and freestanding bathtubs from the Italian collection for premium bathrooms.', chips: ['Bathtub'] },
  { id: 'sensor-faucets', name: 'Sensor Faucets', description: 'Touch-free sensor faucets and tap options for total hygiene in bathrooms.', chips: ['Touch-Free', 'Sensor'] },
];

const bathFittings = [
  { id: 'basin-mixers', name: 'Basin Mixers & Taps', description: 'Single-lever and centre-hole basin mixers in chrome, black, and gold finishes.', chips: ['Single Lever', 'Centre Hole'] },
  { id: 'kitchen-mixers', name: 'Flexible Kitchen Mixers', description: 'Table-mounted and wall-mounted flexible kitchen mixers for every kitchen layout.', chips: ['Kitchen', 'Flexible'] },
  { id: 'showers', name: 'Showers & Multi-Function', description: 'Overhead, rain, ceiling, and hand showers — including 3-, 5-, and 6-flow multi-function variants.', chips: ['Overhead', 'Rain', 'Hand'] },
  { id: 'thermostats', name: 'Thermostats & Showers', description: 'Thermostatic diverters and shower mixers for precise, safe temperature control.', chips: ['Thermostatic'] },
  { id: 'health-faucets', name: 'Health Faucets & Add-ons', description: 'Health faucets, shower arms, shower drains, and bathroom accessories.', chips: ['Health Faucet', 'Accessories'] },
  { id: 'shower-enclosures', name: 'Shower Enclosures', description: 'Shower doors and enclosures that lend an elegant, premium look to the bathroom.', chips: ['Enclosure'] },
];

export default function HindwarePage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D1A1A 0%, #260E0E 50%, #3D1A1A 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Hindware Italian Collection
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Italian Design.{' '}
            <em className="not-italic text-[var(--color-primary)]">Indian Craft.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Sanitaryware, faucets, and showers from the Hindware Italian Collection — India&apos;s leading bathroom brand.
          </p>
        </div>
      </section>

      <section id="sanitaryware" className="py-16 px-[var(--gutter)] scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Sanitaryware</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Toilets, basins, urinals, and bathtubs — engineered for durability and style.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sanitaryware.map((line) => (
              <ProductLineCard key={line.id} name={line.name} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section id="bath-fittings" className="py-16 px-[var(--gutter)] scroll-mt-24 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Bath & Kitchen Fittings</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Faucets, mixers, showers, and accessories in chrome, black, and gold finishes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bathFittings.map((line) => (
              <ProductLineCard key={line.id} name={line.name} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)]">
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
