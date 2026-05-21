import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAFooter } from "@/sections/home/CTAFooter";
import { JOBS, PERKS, PRINCIPLES } from "@/data/jobs";
import { fadeUp, stagger } from "@/animations/variants";

export function CareersPage() {
  return (
    <>
      <SEO
        title="Careers"
        path="/careers"
        description="Join a senior team building premium software systems. Remote-first."
      />

      <PageHeader
        eyebrow="Careers"
        title="Senior people. Small teams. Real ownership."
        subtitle="We hire engineers and designers who want to ship — and own the systems they build."
      />

      <section className="section-tight">
        <div className="container">
          <SectionHeading
            eyebrow="Principles"
            title="How we work."
            align="left"
          />
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                variants={fadeUp}
                key={p.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55 text-pretty">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Perks"
            title="What you get when you join."
            align="left"
          />
          <motion.div
            variants={stagger(0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PERKS.map((p) => (
              <motion.div
                variants={fadeUp}
                key={p.title}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <h4 className="text-sm font-semibold">{p.title}</h4>
                <p className="mt-1.5 text-sm text-white/55">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Open roles"
            title="We're hiring."
            align="left"
          />

          <motion.ul
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
          >
            {JOBS.map((j, i) => (
              <motion.li variants={fadeUp} key={i}>
                <Link
                  to="/contact"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-5 transition-colors hover:bg-white/[0.03]"
                >
                  <div>
                    <h3 className="text-base font-semibold">{j.title}</h3>
                    <p className="mt-1 text-xs text-white/45">{j.team}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/55">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      {j.location}
                    </span>
                    <span className="chip text-[10.5px] py-0.5">{j.type}</span>
                    <ArrowUpRight className="size-4 text-white/30 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <p className="mt-8 text-sm text-white/50 text-center">
            Don't see your role? We're always interested in{" "}
            <Link to="/contact" className="text-white underline underline-offset-4">
              meeting great people
            </Link>
            .
          </p>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
