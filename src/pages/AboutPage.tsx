import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stats } from "@/sections/home/Stats";
import { CTAFooter } from "@/sections/home/CTAFooter";
import { fadeUp, stagger } from "@/animations/variants";
import { PRINCIPLES } from "@/data/jobs";

const STORY = [
  {
    year: "2023",
    title: "A studio is born",
    body: "Void Layer started as a small group of senior engineers and designers tired of agency-grade software. We rebuilt how an engagement should feel.",
  },
  {
    year: "2024",
    title: "First SaaS shipped",
    body: "Nebula went live, followed by Orbit. We learned the discipline of running products and brought that mindset into client work.",
  },
  {
    year: "2025",
    title: "AI-native engineering",
    body: "We embedded LLMs, RAG and agents into our product practice — not as demos, but as real production features with evals and HITL.",
  },
  {
    year: "Today",
    title: "Studio + Lab",
    body: "We operate as a studio for clients and a lab for our own SaaS — each side sharpening the other.",
  },
];

const PILLARS = [
  {
    title: "Mission",
    body: "Help ambitious teams ship software that feels inevitable — fast, premium, durable.",
  },
  {
    title: "Vision",
    body: "A world where every team has access to studio-grade engineering, not just FAANG.",
  },
  {
    title: "Philosophy",
    body: "Architecture-first. Motion as language. Boring infra. Public progress.",
  },
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Void Layer is a studio + lab building premium software for ambitious teams."
      />

      <PageHeader
        eyebrow="About us"
        title="A studio of engineers who design like designers."
        subtitle="We're a small, senior team building premium software systems — half studio, half product lab."
      />

      <section className="section-tight">
        <div className="container">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5 md:grid-cols-3"
          >
            {PILLARS.map((p) => (
              <motion.div
                variants={fadeUp}
                key={p.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8"
              >
                <h3 className="text-base font-semibold text-white/95">{p.title}</h3>
                <p className="mt-3 text-sm text-white/55 text-pretty">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our story"
            title="From small idea to operating studio."
            align="left"
          />

          <motion.ol
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative mt-14 space-y-8 border-l border-white/[0.08] pl-8"
          >
            {STORY.map((s) => (
              <motion.li variants={fadeUp} key={s.year} className="relative">
                <span className="absolute -left-[34px] top-1.5 size-3 rounded-full bg-white ring-4 ring-black" />
                <div className="font-mono text-xs tracking-[0.2em] text-white/45">
                  {s.year}
                </div>
                <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-white/60 text-pretty">{s.body}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <Stats />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Principles"
            title="The rules we run by."
          />
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-4 sm:grid-cols-2"
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                variants={fadeUp}
                key={p.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
