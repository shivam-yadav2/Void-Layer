import { SEO } from "@/components/SEO";
import { Hero } from "@/sections/home/Hero";
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
import { HomeProductCards } from "@/sections/home/HomeProductCards";
import { ResponsiveShowcase } from "@/sections/home/ResponsiveShowcase";
import { ServicesShowcase } from "@/sections/home/ServicesShowcase";
import { ServicesList } from "@/sections/home/ServicesList";

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <VelocityText />
      {/* <ProductShowcase /> */}
      <HomeProductCards />
      {/* <ResponsiveShowcase /> */}
      <ServicesShowcase />
      {/* <ServicesList /> */}
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
