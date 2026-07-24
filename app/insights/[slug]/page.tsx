import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/metrics';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} : Build360.online`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  if (post.comingSoon) notFound();

  return (
    <article className="px-[var(--gutter)] pt-[60px] pb-20 max-w-3xl mx-auto">
      <Link href="/insights" className="inline-flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] no-underline mb-8 transition-colors">
        <ArrowLeft size={14} /> Back to Insights
      </Link>

      <span className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider bg-[var(--color-primary-10)] text-[var(--color-primary)] rounded">
        {post.category}
      </span>
      <h1 className="font-serif text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-main)] mt-4 mb-4">
        {post.title}
      </h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-8">{post.readTime}</p>

      {post.image && (
        <div className="relative aspect-[16/7] mb-8 rounded-[var(--radius)] overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
        </div>
      )}

      <div className="prose prose-invert prose-sm max-w-none text-[var(--color-text-secondary)] leading-relaxed space-y-6">
        {slug === 'tile-adhesive-pricing-q2-2026' && (
          <>
            <p>The Indian tile adhesive market has seen consistent upward price pressure through the first half of 2026. Cement-based adhesives — the most widely used category in residential and commercial construction — have risen 6-8% year-on-year, driven primarily by escalating raw material costs and logistics bottlenecks.</p>

            <h2 className="font-serif text-xl font-bold text-[var(--color-text-main)] mt-8">What&apos;s Driving the Increase?</h2>
            <p><strong>1. Cement prices</strong> are up 9% since January 2025 due to higher clinker costs and freight inflation. Since cement is the primary component in standard tile adhesives, every percentage point increase in cement cost directly impacts adhesive pricing.</p>
            <p><strong>2. Polymer prices</strong> remain elevated globally. Redispersible polymer powders (RDP) — a key performance additive in flexible adhesives — continue to track petrochemical prices, which have stayed volatile through H1 2026.</p>
            <p><strong>3. Compliance costs</strong> are rising. Stricter BIS quality compliance norms have raised industry-wide production costs, particularly for smaller manufacturers who previously operated with more relaxed standards.</p>

            <h2 className="font-serif text-xl font-bold text-[var(--color-text-main)] mt-8">Brand-Level Comparison</h2>
            <p>UltraTech Tilefixo has held pricing relatively stable, absorbing approximately 2% of the raw material increase through operational efficiencies. Their standard cement-based adhesives (Sumo CT, Aqua Marine VT) remain the most competitively priced across the three major brands.</p>
            <p>MYK Laticrete adjusted their premium epoxy grout line by +7% while keeping standard adhesive prices flat. Their 111+73 and 345 Super Flex grades continue to offer strong value in the mid-range segment.</p>
            <p>Saint Gobain Weber introduced a new high-performance variant at a 12% premium, targeting the growing demand for large-format tile installation, where European-spec flexibility and water resistance are increasingly specified.</p>

            <h2 className="font-serif text-xl font-bold text-[var(--color-text-main)] mt-8">Outlook for Q3 2026</h2>
            <p>If cement prices stabilize at current levels, adhesive pricing should plateau by August. Monsoon-season logistics disruptions may cause short-term spot price volatility in northern and eastern India. We recommend buyers lock in bulk pricing before mid-July.</p>
          </>
        )}

        {slug !== 'tile-adhesive-pricing-q2-2026' && (
          <p>Article content coming soon.</p>
        )}
      </div>
    </article>
  );
}
