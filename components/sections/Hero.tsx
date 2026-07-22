import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A08 0%, #0A0A0A 50%, #1A0A08 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 w-full px-[var(--gutter)] py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-primary)] border border-[var(--color-primary-18)] bg-[var(--color-primary-10)] px-4 py-2 rounded-full inline-block mb-6">
            India&apos;s Organized Procurement Network
          </span>
          <h1 className="font-serif text-[clamp(36px,7vw,64px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-5">
            The Smarter Way to{' '}
            <em className="not-italic text-[var(--color-primary)]">Procure</em>{' '}
            Building Supplies.
          </h1>
          <p className="text-sm md:text-[16px] text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-light mb-8">
            India&apos;s organized procurement network: connecting contractors, builders, and
            architects to verified supplier partners. Bulk pricing, project delivery,
            zero hassle.
          </p>
          <p className="text-xs md:text-sm text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed mb-10">
            From cement and steel to tiles, adhesives, and finishing supplies — source
            your entire project through a single verified partner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="https://wa.me/919032514441" external variant="primary" className="text-base px-8 py-4">
              Order Now
            </Button>
            <Button href="/partners" variant="outline" className="text-base px-8 py-4">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
