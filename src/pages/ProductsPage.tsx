import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plug, Sparkles, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedProducts } from "@/sections/home/FeaturedProducts";
import { CTAFooter } from "@/sections/home/CTAFooter";
import { ProductShowcaseGrid } from "@/sections/home/ProductShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import VariableProximity from "@/components/ui/VariableProximity";
import { fadeUp, stagger } from "@/animations/variants";

const INTEGRATIONS = [
  "Slack",
  "Linear",
  "GitHub",
  "Notion",
  "Stripe",
  "PagerDuty",
  "Datadog",
  "Zendesk",
  "Salesforce",
  "HubSpot",
  "Segment",
  "Snowflake",
];

const ARCH_PILLARS = [
  {
    icon: Zap,
    title: "Built for scale",
    body: "Every product is multi-tenant from day one with horizontal scalability designed in, not bolted on.",
  },
  {
    icon: Plug,
    title: "API-first",
    body: "Public, typed APIs ship with every product. Webhooks, SDKs and docs included.",
  },
  {
    icon: Sparkles,
    title: "AI-native",
    body: "RAG, agents and evals are part of the core, not an add-on tab.",
  },
];

function IntegrationPill({ label }: { label: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="group rounded-xl border border-white/[0.08] bg-white/[0.02] py-6 text-center text-xl  text-white/70 transition-colors hover:border-white/15"
      style={{ position: "relative" }}
    >
      <VariableProximity
        label={label}
        className="uppercase tracking-[0.3em] text-white/70 transition-colors group-hover:text-white"
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 900, 'opsz' 36"
        containerRef={containerRef}
        radius={90}
        falloff="gaussian"
      />
    </div>
  );
}

export function ProductsPage() {
  return (
    <>
      <SEO
        title="Products"
        path="/products"
        description="Void Layer's SaaS portfolio — gym management, project management, HRMS, salon, e-commerce and multi-vendor marketplace. On subscription."
      />

      <PageHeader
        eyebrow="Products · On subscription"
        title="Business software you can subscribe to today."
        italicWord="subscribe"
      />
      <section className="">
        <div className="container">
          <Marquee speed={140} className="py-6">
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Gym
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              CRMs
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              HRMS
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Salon
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              E-Commerce
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Marketplace
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Hotel Management And More
            </span>
              <span className="text-white/30">✦</span>
          </Marquee>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductShowcaseGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Integrations"
            title="Lives in the tools your team already uses."
          />
          <motion.div
            variants={stagger(0.03)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {INTEGRATIONS.map((i) => (
              <motion.div
                variants={fadeUp}
                key={i}
              >
                <IntegrationPill label={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/45">
              Pricing
            </p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">
              Simple <span className="italic-serif">monthly</span> &amp; annual plans.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/55 text-pretty">
              Every product is billed on a monthly or annual subscription with team
              and enterprise tiers. Annual billing saves 20%. Need a demo,
              early access, or a custom quote?
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Talk to us
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
