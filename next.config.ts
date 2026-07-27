import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          { key: 'Link', value: '</sitemap.xml>; rel="sitemap"' },
        ],
      },
    ];
  },
};

export default nextConfig;
