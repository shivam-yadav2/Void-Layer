import { motion } from "framer-motion";
import { PROCESS } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";

export function ProcessTimeline() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="How we build"
          title="A process designed to ship — not stall."
          subtitle="Five phases, weekly demos, clear definition of done."
        />

        <motion.ol
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-5"
        >
          {PROCESS.map((p) => (
            <motion.li
              variants={fadeUp}
              key={p.step}
              className="relative bg-ink-900/60 p-7 transition-colors hover:bg-ink-900/90"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-white/60">
                {p.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/55 text-pretty">{p.description}</p>
              <div className="mt-6 h-px w-12 bg-gradient-to-r from-white/60 to-transparent" />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
