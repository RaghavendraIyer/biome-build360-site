'use client';

import { useEffect, useRef, useState } from 'react';
import { metrics } from '@/data/metrics';

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 30;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <strong className="font-serif text-[clamp(32px,4vw,48px)] font-extrabold text-[var(--color-primary)] block leading-none">
        {prefix}{count}{suffix}
      </strong>
      <span className="text-xs md:text-sm text-[var(--color-text-muted)] mt-2 block">
        {metrics.find((m) => m.value === value)?.label}
      </span>
    </div>
  );
}

export function MetricsDashboard() {
  return (
    <section className="py-20 px-[var(--gutter)] bg-[var(--color-bg-surface-alt)]">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative"
            >
              <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              {m.label !== metrics[metrics.length - 1].label && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-[var(--color-border-light)] last:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
