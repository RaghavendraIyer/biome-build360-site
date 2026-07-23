import { Hero } from '@/components/sections/Hero';
import { StepFlow } from '@/components/sections/StepFlow';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { MetricsDashboard } from '@/components/sections/MetricsDashboard';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { AudienceSegments } from '@/components/sections/AudienceSegments';
import { FeatureCards } from '@/components/sections/FeatureCards';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { ContactSection } from '@/components/sections/ContactSection';
import { AiRfqUpload } from '@/components/sections/AiRfqUpload';

export default function Home() {
  return (
    <>
      <Hero />
      <StepFlow />
      <ProductGrid />
      <MetricsDashboard />
      <ProcessSteps />
      <AudienceSegments />
      <FeatureCards />
      <AiRfqUpload />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
