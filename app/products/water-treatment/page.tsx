import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'Water Treatment Solutions : Build360.online',
  description: 'Heat pumps, water softeners, RO plants, pressure pumps, and geysers from verified manufacturers — sourced in bulk.',
};

const lines = [
  { id: 'heat-pumps', name: 'Heat Pumps', description: 'Energy-efficient heat pump water heaters for residential, commercial, and industrial hot water.', image: '/images/water-treatment/heat-pump.jpg' },
  { id: 'water-softeners', name: 'Water Softeners', description: 'Ion-exchange water softeners that remove hardness for scale-free plumbing and appliances.', image: '/images/water-treatment/softener.jpg' },
  { id: 'ro-plants', name: 'RO Plants', description: 'Reverse osmosis plants delivering pure drinking water at residential, commercial, and industrial scale.', image: '/images/water-treatment/ro-plant.jpg' },
  { id: 'pressure-pumps', name: 'Pressure Pumps', description: 'Reliable pressure pumps and booster systems for consistent water flow across storeys.', image: '/images/water-treatment/pressure-pump.jpg' },
  { id: 'geysers', name: 'Geysers', description: 'Electric geysers and water heating solutions for bathrooms and kitchens, in every capacity.', image: '/images/water-treatment/geyser.jpg' },
];

export default function WaterTreatmentPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #06253D 0%, #04121F 50%, #06253D 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Water Treatment Solutions
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Clean Water, Every Drop.{' '}
            <em className="not-italic text-[var(--color-primary)]">Sourced Right.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            We hold distribution across heat pumps, water softeners, RO plants, pressure pumps, and geysers — from verified manufacturers.
          </p>
        </div>
      </section>

      <section className="py-16 px-[var(--gutter)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lines.map((line) => (
              <div key={line.id} id={line.id} className="scroll-mt-24">
                <ProductLineCard name={line.name} description={line.description} image={line.image} />
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
