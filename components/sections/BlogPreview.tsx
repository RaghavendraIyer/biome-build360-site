import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/metrics';

export function BlogPreview() {
  return (
    <section className="py-20 md:py-28 px-[var(--gutter)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 block">
            Insights
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)]">
            Latest News &{' '}
            <em className="not-italic text-[var(--color-primary)]">Articles</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="rounded-[var(--radius)] bg-[var(--color-bg-surface)] border border-[var(--color-border-light)] overflow-hidden hover:border-[var(--color-primary-18)] transition-colors relative"
            >
              <div className="relative aspect-[16/9] bg-[var(--color-bg-surface-alt)] flex items-center justify-center overflow-hidden">
                {post.image ? (
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                ) : post.comingSoon ? (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                    Coming Soon
                  </span>
                ) : (
                  <span className="font-serif text-2xl font-bold text-[var(--color-text-muted)]">
                    B360
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)]">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[var(--color-text-main)] mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                {!post.comingSoon && (
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-primary)] hover:gap-2 transition-all no-underline"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                )}
                {post.comingSoon && (
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-[var(--color-text-muted)]">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-[var(--color-primary-18)] text-[var(--color-primary)] rounded-[var(--radius)] hover:bg-[var(--color-primary-10)] transition-colors no-underline"
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
