import { SEO } from "@/components/SEO";
import { Hero } from "@/sections/home/Hero";
import { TrustedTech } from "@/sections/home/TrustedTech";
import { VelocityText } from "@/sections/home/VelocityText";
import { ServicesPreview } from "@/sections/home/ServicesPreview";
import { HorizontalShowcase } from "@/sections/home/HorizontalShowcase";
import { Statement } from "@/sections/home/Statement";
import { FeaturedProducts } from "@/sections/home/FeaturedProducts";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { ProcessTimeline } from "@/sections/home/ProcessTimeline";
import { TechStackShowcase } from "@/sections/home/TechStackShowcase";
import { Stats } from "@/sections/home/Stats";
import { Testimonials } from "@/sections/home/Testimonials";
import { FAQ } from "@/sections/home/FAQ";
import { CTAFooter } from "@/sections/home/CTAFooter";

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <TrustedTech />
      <VelocityText />
      <ServicesPreview />
      <HorizontalShowcase />
      <Statement />
      <FeaturedProducts />
      <Stats />
      <WhyChooseUs />
      <ProcessTimeline />
      <TechStackShowcase />
      <Testimonials />
      <FAQ />
      <CTAFooter />
    </>
  );
}
