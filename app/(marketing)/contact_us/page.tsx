import ContactContentSection from "@/components/contact_us/contact-content-section";
import HeroSection from "@/components/contact_us/hero-section";
import { DonationForm } from "@/components/home/donationForm-section";
import { HelpSection } from "@/components/home/Help-section";
import HowToContribute from "@/components/home/HowToContribute";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ContactContentSection />
      <HowToContribute />
      <DonationForm />
      <TestimonialsSection />
      <HelpSection />
    </>
  );
}
