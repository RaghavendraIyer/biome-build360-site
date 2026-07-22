import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Service Providers : Coming Soon | Build360.online',
  description: 'Build360.online is onboarding verified contractors, material vendors, logistics providers, and skilled trades.',
};

export default function ServiceProvidersPage() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-[var(--gutter)] relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2E1A17 0%, #1A0D0B 100%)' }}
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
          Launching Soon
        </span>
        <h1 className="font-serif text-[clamp(36px,6vw,60px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white mb-5">
          Contractors, Vendors &{' '}
          <em className="not-italic text-[var(--color-primary)]">Service Providers.</em>
        </h1>
        <p className="text-sm md:text-base text-[#d0d0d0] leading-relaxed font-light mb-10 max-w-lg mx-auto">
          We&apos;re onboarding all types of contractors, material vendors, logistics partners, and skilled service providers relevant to organised construction materials: from cement and steel to adhesives and finishing supplies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { title: 'Contractors & Labour', desc: 'Civil contractors, tiling applicators, waterproofing crews.' },
            { title: 'Material Vendors', desc: 'Cement, steel, AAC blocks, adhesives — verified suppliers.' },
            { title: 'Logistics & Support', desc: 'Transport providers, site delivery, warehousing services.' },
          ].map((c) => (
            <div key={c.title} className="p-4 rounded-[var(--radius)]" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h4 className="font-serif text-sm font-bold text-white mb-2">{c.title}</h4>
              <p className="text-xs text-[#aaa] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <Button href="https://wa.me/919032514441" external variant="primary" className="px-8 py-3">
          Register Interest on WhatsApp
        </Button>
      </div>
    </section>
  );
}
