import { blogPosts } from '@/data/metrics';

const BASE = 'https://build360.online';

const staticPages = [
  { url: '/', priority: 1.0, changeFreq: 'weekly' as const },
  { url: '/about', priority: 0.7, changeFreq: 'monthly' as const },
  { url: '/products', priority: 0.8, changeFreq: 'weekly' as const },
  { url: '/products/adhesives', priority: 0.7, changeFreq: 'weekly' as const },
  { url: '/products/ultratech-tilefixo', priority: 0.6, changeFreq: 'monthly' as const },
  { url: '/products/myk-laticrete', priority: 0.6, changeFreq: 'monthly' as const },
  { url: '/products/saint-gobain-weber', priority: 0.6, changeFreq: 'monthly' as const },
  { url: '/insights', priority: 0.7, changeFreq: 'weekly' as const },
  { url: '/bid', priority: 0.7, changeFreq: 'weekly' as const },
  { url: '/consumers', priority: 0.6, changeFreq: 'monthly' as const },
  { url: '/partners', priority: 0.6, changeFreq: 'monthly' as const },
  { url: '/service-providers', priority: 0.5, changeFreq: 'monthly' as const },
  { url: '/careers', priority: 0.5, changeFreq: 'monthly' as const },
  { url: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
  { url: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
  { url: '/refund', priority: 0.3, changeFreq: 'yearly' as const },
];

const articleEntries = blogPosts
  .filter((p) => !p.comingSoon)
  .map((p) => ({
    url: `/insights/${p.slug}`,
    priority: 0.6 as const,
    changeFreq: 'monthly' as const,
  }));

export default function sitemap() {
  return [...staticPages, ...articleEntries].map((entry) => ({
    url: `${BASE}${entry.url}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: entry.changeFreq,
    priority: entry.priority,
  }));
}
