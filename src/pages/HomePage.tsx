import { SEO } from "@/components/SEO";
import { Hero } from "@/sections/home/Hero";
import { TrustedTech } from "@/sections/home/TrustedTech";
import { VelocityText } from "@/sections/home/VelocityText";
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
import { ProductShowcase } from "@/sections/home/ProductShowcase";
import { ResponsiveShowcase } from "@/sections/home/ResponsiveShowcase";
import { ServicesShowcase } from "@/sections/home/ServicesShowcase";

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <ProductShowcase />
      <VelocityText />
      {/* <ResponsiveShowcase /> */}
      <ServicesShowcase />
      <TrustedTech />
      {/* <HorizontalShowc÷ase /> */}
      {/* <Statement /> */}
      {/* <FeaturedProducts /> */}
      {/* <Stats /> */}
      {/* <WhyChooseUs /> */}
      <ProcessTimeline />
      <TechStackShowcase />
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      <CTAFooter />
    </>
  );
}
