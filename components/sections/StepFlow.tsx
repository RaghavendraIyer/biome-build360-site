import { MessageSquare, MapPin, Package, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import { stepFlow } from '@/data/metrics';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, MapPin, Package, CheckCircle, Truck,
};

export function StepFlow() {
  return (
    <section className="relative py-12 md:py-16 px-[var(--gutter)] bg-[var(--color-bg-surface)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">
            How It Works
          </span>
          <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--color-text-main)]">
            From Message to Material in{' '}
            <em className="not-italic text-[var(--color-primary)]">5 Simple Steps.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {stepFlow.map((item, idx) => {
            const Icon = iconMap[item.icon] || Package;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center p-5 md:p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="font-mono text-[28px] md:text-[32px] font-extrabold text-[var(--color-primary)] leading-none mb-3">
                  {String(item.step).padStart(2, '0')}
                </span>
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary-10)] flex items-center justify-center mb-3 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-[13px] font-bold text-[var(--color-text-main)] mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
                {idx < stepFlow.length - 1 && (
                  <ArrowRight size={16} className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-primary)]/30" />
                )}
              </div>
            );
          })}
        </div>

        <Link
          href="https://wa.me/919032514441"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 mx-auto max-w-[280px] block no-underline"
        >
          <div className="flex items-center gap-4 p-4 rounded-[var(--radius)] bg-[var(--color-primary)] text-white transition-all duration-300 group hover:bg-[var(--color-primary-hover)]">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/qr-code.png"
                alt="QR"
                width={48}
                height={48}
                className="rounded"
              />
            </div>
            <div className="flex-1 text-left">
              <span className="block text-[13px] font-bold leading-tight">Scan to Order</span>
              <span className="block text-[10px] text-white/70 mt-0.5">WhatsApp &rarr; Send &ldquo;Hi&rdquo; &rarr; Done</span>
            </div>
            <ArrowRight size={18} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </div>
    </section>
  );
}
