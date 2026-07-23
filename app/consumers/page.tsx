import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'For Consumers : Build360.online',
  description: 'Source construction materials with transparent pricing, bulk quotes, and pan-India delivery.',
};

export default function ConsumersPage() {
  return (
    <>
      <section className="min-h-[40vh] flex items-center text-center px-[var(--gutter)] pt-[60px] pb-16 bg-[var(--color-bg-app)]">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-extrabold text-[var(--color-text-main)] mb-4">
            Procure Construction Materials<br />
            <em className="not-italic text-[var(--color-primary)]">Direct & Transparent.</em>
          </h1>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
            Contractors, builders, and project owners — source verified materials across brands with one request. Bulk pricing, pan-India delivery, and a single point of contact from quote to doorstep.
          </p>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">Bulk Sourcing</span>
            <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)]">
              One Request.{' '}
              <em className="not-italic text-[var(--color-primary)]">Multiple Quotes.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'FileText', title: 'Aggregated Quotes', desc: 'Submit your requirement once. Get competitive pricing from multiple brand partners side by side — compare, choose, and order.' },
              { icon: 'Truck', title: 'Logistics Managed', desc: 'We coordinate dispatch, transit tracking, and last-mile delivery to your site — partial or full truckload across India.' },
              { icon: 'Handshake', title: 'Credit Terms', desc: 'Enrolled B2B partners qualify for credit lines, volume discounts, and supply agreements tailored to project timelines.' },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-10)] flex items-center justify-center mx-auto mb-4 text-[var(--color-primary)] text-xl">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    {card.icon === 'FileText' && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>}
                    {card.icon === 'Truck' && <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>}
                    {card.icon === 'Handshake' && <><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></>}
                  </svg>
                </div>
                <h4 className="font-serif text-base font-bold text-[var(--color-text-main)] mb-3">{card.title}</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-extrabold text-[var(--color-text-main)] mb-6">
            Start Your{' '}
            <em className="not-italic text-[var(--color-primary)]">Procurement.</em>
          </h2>
          <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed mb-8">
            Share your material requirements, quantity, and location. Get pricing within minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://wa.me/919032514441" external variant="primary" className="px-8 py-3">
              Order on WhatsApp
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
