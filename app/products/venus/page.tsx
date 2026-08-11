import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'Venus Heat Pumps & Solar : Build360.online',
  description: 'Venus heat pump water heaters and solar water heaters for domestic and commercial use — source in bulk.',
};

const heatPumps = [
  { id: 'hp-domestic', name: 'Heat Pump Domestic', description: 'Non-stop hot water anywhere in the house while saving up to 75–80% on heating costs. COP up to 4.2.', chips: ['75–80% Saving', 'COP 4.2'] },
  { id: 'hp-commercial', name: 'Heat Pump Commercial', description: 'Uses heat from the air to heat water, saving 60–80% on energy vs diesel boilers. Ideal for hotels, hospitals, hostels.', chips: ['Commercial', '500L+'] },
  { id: 'hp-high-temp', name: 'High Temperature Heat Pump', description: 'Heats water up to 80°C for industrial applications and food processing industries.', chips: ['Up to 80°C', 'Industrial'] },
  { id: 'hp-pool', name: 'Swimming Pool Heat Pump', description: 'High-capacity pool heating from ambient to set temperature — for clubs, resorts, and bungalows.', chips: ['Pool Heating'] },
  { id: 'hp-all-in-one', name: 'All-in-One Heat Pump', description: 'Heats water to 75°C with smart touch control, enamel tank, and 7-bar pressure rating.', chips: ['75°C', '200L'] },
];

const solar = [
  { id: 'solar-vtc', name: 'Solar VTC (Non-Pressure)', description: 'Vacuum tube collectors with triple-layer coating, PUF insulation, and optional electric backup. 100–300 LPD.', chips: ['VTC', '100–300 LPD'] },
  { id: 'solar-vtc-enamel', name: 'Solar VTC Enamel', description: 'Porcelain enamel glass-lined tank in an automated European-tech plant with 7-year inner tank guarantee.', chips: ['Enamel Tank', '7 Yr Guarantee'] },
  { id: 'solar-flatplate', name: 'Solar Flat Plate (Pressure)', description: '100% copper fin collectors, pressure-pump compatible up to 5 bar, PUF insulated tanks. 100–200 LPD.', chips: ['Flat Plate', '5 bar'] },
  { id: 'solar-jacketed', name: 'Jacketed Flat Plate', description: 'Copper-fin collector with corrosion-resistant porcelain enamel tank and 7-bar pressure rating.', chips: ['Pressure', '7 bar'] },
  { id: 'solar-commercial', name: 'Solar Commercial', description: 'Vacuum tube and flat plate commercial systems from 300 LPD to 3000 LPD for hotels, hospitals, and hostels.', chips: ['Commercial', '300–3000 LPD'] },
  { id: 'solar-combo', name: 'Combo Solar & Heat Pump', description: 'Solar heats water in sun, heat pump takes over on cloudy days — uninterrupted hot water year-round.', chips: ['Hybrid'] },
  { id: 'solar-on-grid', name: 'Solar On-Grid Rooftop', description: 'On-grid rooftop solar plants from 1kW to 15kW with reputed panels, quality inverters, and net-metering.', chips: ['1–15 kW', 'On-Grid'] },
];

export default function VenusPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A3D2E 0%, #062A20 50%, #0A3D2E 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Venus — Heat Pumps & Solar
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Go Green with Venus.{' '}
            <em className="not-italic text-[var(--color-primary)]">Warmth for Life.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Advanced solar and heat pump water heaters from a 55+ year market leader — renewable energy at the lowest operating cost.
          </p>
        </div>
      </section>

      <section id="heat-pumps" className="py-16 px-[var(--gutter)] scroll-mt-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Heat Pump Water Heaters</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Move heat from the air to water, not generate it — saving up to 80% on heating energy.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heatPumps.map((line) => (
              <ProductLineCard key={line.id} name={line.name} description={line.description} chips={line.chips} />
            ))}
          </div>
        </div>
      </section>

      <section id="solar" className="py-16 px-[var(--gutter)] scroll-mt-24 bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">Solar Water Heaters</span>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">Vacuum tube and flat plate solar water heaters for domestic and commercial scale.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solar.map((line) => (
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
