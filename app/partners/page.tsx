import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'For Partners : Build360.online',
  description: 'Manufacturers, service providers, and logistics partners powering India\'s procurement ecosystem.',
};

export default function PartnersPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center text-center px-[var(--gutter)] pt-[calc(80px+60px)] pb-16 bg-[var(--color-bg-app)]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Join India&apos;s{' '}
            <em className="not-italic text-[var(--color-primary)]">Procurement Ecosystem.</em>
          </h1>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            Manufacturers, service providers, and logistics partners — Build360 connects you to verified buyers, streamlines quoting, and opens new revenue channels across 28 states.
          </p>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">Ecosystem</span>
            <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)]">
              Trusted by Manufacturers,{' '}
              <em className="not-italic text-[var(--color-primary)]">Powered by Partners.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'Industry', title: 'Manufacturers', desc: 'UltraTech, MYK Laticrete, Saint Gobain Weber, and more — all onboarded with live inventory and dynamic pricing.' },
              { icon: 'HardHat', title: 'Service Providers', desc: 'Vetted contractors and installers offering turnkey execution — waterproofing, tiling, grouting, and site finishing.' },
              { icon: 'Boxes', title: 'Logistics Network', desc: 'Integrated 3PL partners ensure time-bound delivery across 28 states — with real-time tracking on every consignment.' },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-[var(--radius)] bg-[var(--color-bg-app)] border border-[var(--color-border-light)] text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-10)] flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)] text-xl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    {card.icon === 'Industry' && <><rect x="8" y="2" width="8" height="4"/><path d="M2 22h20"/><path d="M4 22V8h6v6h4V8h6v14"/></>}
                    {card.icon === 'HardHat' && <><path d="M2 22h20"/><path d="M12 2c-5.5 0-10 4.5-10 10v2h20v-2c0-5.5-4.5-10-10-10z"/><path d="M12 12v6"/></>}
                    {card.icon === 'Boxes' && <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>}
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-[var(--color-text-main)] mb-3">{card.title}</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)] mb-6">
            Partner With{' '}
            <em className="not-italic text-[var(--color-primary)]">Build360.</em>
          </h2>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed mb-8">
            Ready to join India&apos;s fastest-growing construction procurement network? Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://wa.me/919032514441" external variant="primary" className="px-8 py-3">
              Start on WhatsApp
            </Button>
            <Button href="mailto:info@build360.online" external variant="outline" className="px-8 py-3">
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
