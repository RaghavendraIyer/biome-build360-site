import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/metrics';

export const metadata: Metadata = {
  title: 'Insights : Build360.online',
  description: 'Procurement insights, market analysis, and best practices from India\'s construction supply chain experts.',
};

export default function InsightsPage() {
  return (
    <>
      <section className="pt-[60px] pb-10 px-[var(--gutter)] text-center bg-[var(--color-bg-app)]">
        <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-extrabold text-[var(--color-text-main)]">
          Insights &amp;{' '}
          <em className="not-italic text-[var(--color-primary)]">Analysis</em>
        </h1>
        <p className="text-sm md:text-[15px] text-[var(--color-text-secondary)] max-w-lg mx-auto mt-3">
          Market trends, price forecasts, and best practices from India&apos;s construction supply chain.
        </p>
      </section>

      <section className="pb-20 px-[var(--gutter)] max-w-4xl mx-auto">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.slug} className="flex flex-col md:flex-row gap-6 p-6 rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)]">
              <div className="w-full md:w-[180px] h-[120px] rounded-lg bg-[var(--color-bg-surface-alt)] flex items-center justify-center shrink-0">
                <span className="font-serif text-xl font-bold text-[var(--color-text-muted)]">B360</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)]">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                  {post.comingSoon && <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">Coming Soon</span>}
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--color-text-main)] mb-2">{post.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{post.excerpt}</p>
                {!post.comingSoon && (
                  <Link href={`/insights/${post.slug}`} className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-[var(--color-primary)] hover:gap-2 transition-all no-underline">
                    Read More <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
