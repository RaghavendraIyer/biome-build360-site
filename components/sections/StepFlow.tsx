'use client';

import { MapPin, Package, Truck, ArrowRight, QrCode, IndianRupee } from 'lucide-react';
import { stepFlow } from '@/data/metrics';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const iconMap: Record<string, React.ElementType> = {
  QrCode, MapPin, Package, IndianRupee, Truck,
};

export function StepFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 md:py-16 px-[var(--gutter)] bg-[var(--color-bg-surface)] overflow-hidden">
      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
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
                className={`relative flex flex-col items-center text-center p-5 md:p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-06)] transition-all duration-500 group hover:shadow-md hover:-translate-y-0.5 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 80}ms`, animationFillMode: 'forwards' }}
              >
                <span className="font-mono text-[28px] md:text-[32px] font-extrabold text-[var(--color-primary)] leading-none mb-3 group-hover:scale-110 transition-transform duration-300">
                  {String(item.step).padStart(2, '0')}
                </span>
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary-10)] flex items-center justify-center mb-3 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="text-[13px] font-bold text-[var(--color-text-main)] mb-1 leading-snug">
                  {item.title}
                </h3>
                {idx < stepFlow.length - 1 && (
                  <div className="hidden lg:flex absolute -right-[18px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] items-center justify-center shadow-sm group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    <ArrowRight size={18} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          href="https://wa.me/919032514441"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block no-underline group w-full lg:w-[217px] mx-auto"
        >
          <div className="flex flex-col items-center text-center p-5 md:p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface-alt)] border border-[var(--color-border-light)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-06)] transition-all duration-500 hover:shadow-md hover:-translate-y-0.5">
            <div className="w-36 h-36 rounded-lg overflow-hidden ring-1 ring-[var(--color-border-light)] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/qr-code.png"
                alt="QR"
                width={360}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-[13px] uppercase tracking-[0.15em] text-[var(--color-primary)] mt-4">
              Scan to Order
            </span>
            <span className="text-[10px] text-[var(--color-text-muted)] mt-1">WhatsApp &rarr; Send &ldquo;Hi&rdquo; &rarr; Done</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
