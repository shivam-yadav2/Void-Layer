import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CTAFooter } from "@/sections/home/CTAFooter";
import { SERVICES } from "@/data/services";
import { fadeUp, stagger } from "@/animations/variants";

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        path="/services"
        description="Engineering, design, AI, cloud, mobile and platform services for ambitious teams."
      />

      <PageHeader
        eyebrow="Services"
        title="Everything you need to build, ship and scale."
        subtitle="Pick a single discipline or a full cross-functional pod. Either way, you get senior people."
      />

      <section className="section-tight">
        <div className="container">
          <motion.div
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div variants={fadeUp} key={s.slug} className="h-full">
                  <SpotlightCard className="h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon className="size-5 text-white" strokeWidth={1.6} />
                      </span>
                      <Link
                        to="/contact"
                        className="text-white/30 hover:text-white transition-colors"
                        aria-label={`Contact us about ${s.title}`}
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1 text-xs text-white/45">{s.tagline}</p>
                    <p className="mt-4 text-sm text-white/60 text-pretty">
                      {s.description}
                    </p>

                    <div className="mt-5">
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/35">
                        Outcomes
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {s.outcomes.map((o) => (
                          <li
                            key={o}
                            className="flex items-center gap-2 text-sm text-white/70"
                          >
                            <Check className="size-3.5 text-white" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                      {s.technologies.map((t) => (
                        <span key={t} className="chip text-[10.5px] py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
