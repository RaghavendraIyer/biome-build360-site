import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Careers : Build360.online',
  description: 'Join the Build360 team — build India\'s construction procurement network.',
};

export default function CareersPage() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-[var(--gutter)] relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A0A08 0%, #0A0A0A 50%, #1A0A08 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10 max-w-xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-primary)] border border-[var(--color-primary-18)] bg-[var(--color-primary-10)] px-4 py-2 rounded-full inline-block mb-6">
          Join Us
        </span>
        <h1 className="font-serif text-[clamp(36px,6vw,60px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white mb-5">
          Build the Future of{' '}
          <em className="not-italic text-[var(--color-primary)]">Procurement.</em>
        </h1>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed font-light mb-10 max-w-lg mx-auto">
          We&apos;re building India&apos;s most organized construction materials network. If you&apos;re passionate about supply chain, technology, and construction — we&apos;d love to hear from you.
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mb-8">
          No open positions right now, but we&apos;re always looking for great talent.
        </p>
        <Button href="mailto:careers@build360.online" external variant="outline" className="px-8 py-3">
          Send Your Resume
        </Button>
      </div>
    </section>
  );
}
