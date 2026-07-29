import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { audienceSegments } from '@/data/metrics';

export function AudienceSegments() {
  return (
    <section className="py-16 md:py-20 px-[var(--gutter)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[20px] uppercase tracking-[0.15em] text-[var(--color-primary)] mb-3 block">
            Who We Serve
          </span>
          <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--color-text-main)]">
            Built for{' '}
            <em className="not-italic text-[var(--color-primary)]">Every Buyer.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audienceSegments.map((segment) => (
            <div
              key={segment.title}
              className="p-8 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] hover:border-[var(--color-primary-18)] transition-colors flex flex-col"
            >
              <h3 className="font-serif text-xl font-bold text-[var(--color-text-main)] mb-4">
                {segment.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-6">
                {segment.desc}
              </p>
              <Link
                href={segment.slug}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:gap-3 transition-all no-underline"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
