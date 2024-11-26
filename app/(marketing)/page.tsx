import { DonationForm } from "@/components/home/donationForm-section";
import { FeaturesSection } from "@/components/home/features-section";
import { InteractiveGallery } from "@/components/home/gallery-section";
import { HelpSection } from "@/components/home/Help-section";
import { HeroSection } from "@/components/home/hero-section";
import HowToContribute from "@/components/home/HowToContribute";
import { ImpactVisualization } from "@/components/home/impact-visualization-section";
import { ProgressSection } from "@/components/home/progress-section";
import StorySection from "@/components/home/story-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import VisionSection from "@/components/home/vision-section";
import WhySection from "@/components/home/why-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProgressSection />
      <WhySection />
      <VisionSection />
      <ImpactVisualization />
      <StorySection />
      <InteractiveGallery />
      {/* <CurrentProjects /> */}
      <HowToContribute />
      <DonationForm />
      <TestimonialsSection />
      <HelpSection />
    </>
  );
}
