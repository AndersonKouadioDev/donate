import { CurrentProjects } from "@/components/home/current-project";
import { DonationForm } from "@/components/home/donationForm-section";
import { FeaturesSection } from "@/components/home/features-section";
import { InteractiveGallery } from "@/components/home/gallery-section";
import { HelpSection } from "@/components/home/Help-section";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactVisualization } from "@/components/home/impact-visualization-section";
import { ProgressSection } from "@/components/home/progress-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProgressSection />
      <ImpactVisualization />
      <InteractiveGallery />
      <CurrentProjects />
      <TestimonialsSection />
      <DonationForm />
      <HelpSection />
    </>
  );
}
