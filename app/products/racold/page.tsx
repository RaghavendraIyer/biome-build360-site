import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ProductLineCard } from '@/components/products/ProductLineCard';

export const metadata: Metadata = {
  title: 'Racold Water Heaters : Build360.online',
  description: 'Racold storage geysers, instant & tankless water heaters, heat pumps, and solar water heaters — source in bulk.',
};

const lines = [
  { id: 'mnis', name: 'MNIS Slim & DG', description: 'Slim, space-saving storage geysers with Wi-Fi control, voice commands, quick heating, and auto diagnosis.', chips: ['Wi-Fi', '15L–25L'] },
  { id: 'mnis-r', name: 'MNIS R', description: 'Italian-designed storage geyser with rust-proof Duronox coating, consistent hot water, and Flexomix temperature control.', chips: ['Italian Design', '10L–25L'] },
  { id: 'dr-series', name: 'DR DLX / DLX Plus / Swift', description: 'Classic storage geysers with digital temperature display, anti-corrosion tanks, and HPR heating technology.', chips: ['Comfort Storage', '6L–35L'] },
  { id: 'platinum', name: 'Platinum NXT / Plus / Eco', description: 'Large-capacity storage geysers for high-demand homes — 50L to 100L with faster heating and safety plus.', chips: ['Large Storage', '50L–100L'] },
  { id: 'litro', name: 'Litro I+ / Pronto Neo', description: 'Instant water heaters that heat water on demand — compact, hard-water resistant, and fast heating.', chips: ['Instant', '1L–5L'] },
  { id: 'ures', name: 'Ures Pro / Ures Multi', description: 'Tankless instant heaters with powerful heating elements and digital display — 5kW to 24kW variants.', chips: ['Tankless', '5kW–24kW'] },
  { id: 'ids', name: 'IDS-ECO+ / CO', description: 'Gas-fired instant water heaters (LPG/PNG) with oxygen depletion safety and digital display.', chips: ['Gas', 'LPG/PNG'] },
  { id: 'heatpump', name: 'Heat Pump Domestic', description: 'Sustainable water heating that saves up to 70% power by transferring heat from air instead of generating it.', chips: ['70% Power Saving', '150L–300L'] },
  { id: 'solar', name: 'Solar — Mega Max / Alpha', description: 'High-pressure and non-pressured solar water heaters from 100 LPD to 500 LPD, with anti-corrosion INOX tanks.', chips: ['Solar', '100–500 LPD'] },
  { id: 'commercial', name: 'Commercial — Heat Pump & Solar', description: 'End-to-end hot water solutions for commercial buildings — large-capacity heat pumps and solar arrays.', chips: ['Commercial'] },
];

export default function RacoldPage() {
  return (
    <>
      <section className="min-h-[35vh] flex items-center text-center px-[var(--gutter)] relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0E2A47 0%, #081A2E 50%, #0E2A47 100%)' }}
      >
        <div className="mx-auto max-w-3xl w-full pt-[60px] pb-16">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] bg-[var(--color-primary-10)] px-5 py-2 rounded-full mb-4 inline-block">
            Racold Water Heaters
          </span>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold leading-[1] tracking-[-0.02em] uppercase text-white mb-4">
            Hot Water Comfort,{' '}
            <em className="not-italic text-[var(--color-primary)]">Your Way.</em>
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed font-light">
            Storage geysers, instant heaters, heat pumps, and solar water heaters from Racold — backed by a pan-India service network.
          </p>
        </div>
      </section>

      <section className="py-16 px-[var(--gutter)]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lines.map((line) => (
              <ProductLineCard key={line.id} name={line.name} description={line.description} chips={line.chips} />
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
