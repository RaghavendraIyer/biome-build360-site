import { Globe, FileText, Truck, ShieldCheck } from 'lucide-react';
import { features } from '@/data/metrics';

const iconMap: Record<string, React.ElementType> = {
  Globe, FileText, Truck, ShieldCheck,
};

export function FeatureCards() {
  return (
    <section className="py-20 md:py-28 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">
            Platform Features
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)]">
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
                className="flex gap-5 p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-10)] flex items-center justify-center shrink-0 text-[var(--color-primary)]">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[var(--color-text-main)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
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
