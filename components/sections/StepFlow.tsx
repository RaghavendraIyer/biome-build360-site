import { MessageSquare, MapPin, Package, CheckCircle, Truck } from 'lucide-react';
import { stepFlow } from '@/data/metrics';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, MapPin, Package, CheckCircle, Truck,
};

export function StepFlow() {
  return (
    <section className="py-20 md:py-28 px-[var(--gutter)] bg-[var(--color-bg-surface)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">
            How It Works
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)]">
            Ordering Materials Is as Simple as{' '}
            <em className="not-italic text-[var(--color-primary)]">Scanning a QR Code.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stepFlow.map((item) => {
            const Icon = iconMap[item.icon] || Package;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-colors group"
              >
                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-10)] flex items-center justify-center mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-text-main)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
