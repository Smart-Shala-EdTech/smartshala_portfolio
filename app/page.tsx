import { Footer } from "@/components/common/Footer";
import { NavBar } from "@/components/common/NavBar";
import { PageLoadAnimation } from "@/components/common/PageLoadAnimation";
import { ScrollRevealProvider } from "@/components/common/ScrollRevealProvider";
import { ContactSection } from "@/components/marketing/ContactSection";
import { FAQSection } from "@/components/marketing/FAQSection";
import { FeaturedProjectsSection } from "@/components/marketing/FeaturedProjectsSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { ProcessSection } from "@/components/marketing/ProcessSection";
import { ServicesSection } from "@/components/marketing/ServicesSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";
import { WhyChooseSection } from "@/components/marketing/WhyChooseSection";
import { organizationJsonLd, websiteJsonLd } from "@/data/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
        }}
      />
      <PageLoadAnimation />
      <ScrollRevealProvider />
      <NavBar />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <FeaturedProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
