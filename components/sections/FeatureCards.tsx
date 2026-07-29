import { Globe, FileText, Truck, ShieldCheck } from 'lucide-react';
import { features } from '@/data/metrics';

const iconMap: Record<string, React.ElementType> = {
  Globe, FileText, Truck, ShieldCheck,
};

export function FeatureCards() {
  return (
    <section className="py-16 md:py-20 px-[var(--gutter)] relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0A08 0%, #0A0A0A 50%, #1A0A08 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BC4A3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-white/60 mb-3 block">
            Platform Features
          </span>
          <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
            Built for Scale.{' '}
            <em className="not-italic text-[var(--color-primary)]">Built for Trust.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || ShieldCheck;
            return (
              <div
                key={feature.title}
                className="flex gap-5 p-6 rounded-[var(--radius)]"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-10)] flex items-center justify-center shrink-0 text-[var(--color-primary)]">
                  <Icon size={24} />
                </div>
                <div>
                    <h3 className="font-serif text-base font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
