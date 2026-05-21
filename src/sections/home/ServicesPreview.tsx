import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { fadeUp, stagger } from "@/animations/variants";

export function ServicesPreview() {
  const top = SERVICES.slice(0, 6);
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="Engineering across the full stack of modern software."
          subtitle="From ideation to operation — we build the full system, not just slides."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {top.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.slug} variants={fadeUp}>
                <Link to="/services">
                  <SpotlightCard className="h-full">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                        <Icon className="size-5 text-white" strokeWidth={1.6} />
                      </span>
                      <ArrowUpRight className="size-4 text-white/30 transition-colors group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">{s.tagline}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="chip text-[10.5px] py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-ghost">
            See all services
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
