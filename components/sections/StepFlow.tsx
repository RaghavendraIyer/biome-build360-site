import { MessageSquare, MapPin, Package, CheckCircle, Truck } from 'lucide-react';
import { stepFlow } from '@/data/metrics';
import Image from 'next/image';
import Link from 'next/link';

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, MapPin, Package, CheckCircle, Truck,
};

export function StepFlow() {
  return (
    <section className="relative py-16 md:py-20 px-[var(--gutter)] bg-[var(--color-bg-surface)] overflow-hidden">
      {/* Parallax background shapes — float at different depths */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--color-primary-10)] animate-[drift_25s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[var(--color-primary-10)] opacity-60 animate-[drift_35s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-12 left-1/4 w-48 h-48 rounded-full bg-[var(--color-primary-18)] opacity-40 animate-[drift_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--color-primary-10)] animate-[pulse-ring_8s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-[var(--color-primary-18)] animate-[drift_30s_ease-in-out_infinite]" />
      </div>

      {/* SVG flow path connector */}
      <div className="absolute inset-0 pointer-events-none z-[1] hidden lg:flex items-center justify-center" aria-hidden="true">
        <svg
          className="w-full h-full max-w-6xl"
          viewBox="0 0 1152 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker id="flowArrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-primary)" opacity="0.2" />
            </marker>
          </defs>
          <path
            d="M 30,200 Q 288,60 576,200 T 1122,200"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="6 8"
            opacity="0.12"
            markerEnd="url(#flowArrowhead)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
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
                className="relative flex flex-col items-center text-center p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-all duration-300 group hover:shadow-md"
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

        {/* QR code card — matches step card visual language */}
        <Link
          href="https://wa.me/919032514441"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 mx-auto max-w-xs block no-underline"
        >
          <div className="flex flex-col items-center text-center p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border-2 border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-all duration-300 group hover:shadow-md animate-[fadeUp_0.6s_ease_forwards]">
            <div className="relative mb-5">
              <Image
                src="/qr-code.png"
                alt="Scan QR code to start ordering"
                width={200}
                height={200}
                className="rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -inset-2 rounded-xl bg-[var(--color-primary-10)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2">
              Scan to Order
            </span>
            <p className="text-sm font-semibold text-[var(--color-text-main)]">
              Start your order in seconds
            </p>
            <span className="mt-2 text-xs text-[var(--color-text-muted)]">
              Open WhatsApp → Send "Hi" → We take it from here
            </span>
          </div>
        </Link>
      </div>

      {/* Keyframes injected via style tag for animations added by shadcn/tw-animate-css */}
    </section>
  );
}
