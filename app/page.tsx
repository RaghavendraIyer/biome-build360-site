import { StepFlow } from '@/components/sections/StepFlow';
import { AiRfqUpload } from '@/components/sections/AiRfqUpload';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { AudienceSegments } from '@/components/sections/AudienceSegments';
import { FeatureCards } from '@/components/sections/FeatureCards';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { ContactSection } from '@/components/sections/ContactSection';
import { HomeDynamicContent } from '@/components/sections/HomeDynamicContent';

export default function Home() {
  return (
    <>
      <HomeDynamicContent />
      <StepFlow />
      <AiRfqUpload />
      <ProductGrid />
      <ProcessSteps />
      <AudienceSegments />
      <FeatureCards />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
