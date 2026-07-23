'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/sections/Hero').then((m) => m.Hero), {
  ssr: false,
  loading: () => <div className="min-h-[90vh]" />,
});

const MetricsDashboard = dynamic(
  () => import('@/components/sections/MetricsDashboard').then((m) => m.MetricsDashboard),
  { ssr: false },
);

const AiRfqUpload = dynamic(
  () => import('@/components/sections/AiRfqUpload').then((m) => m.AiRfqUpload),
  { ssr: false },
);

export function HomeDynamicContent() {
  return (
    <>
      <Hero />
      <MetricsDashboard />
      <AiRfqUpload />
    </>
  );
}
