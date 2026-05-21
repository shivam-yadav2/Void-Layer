import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/data/techStack";
import { fadeUp, stagger } from "@/animations/variants";

export function TechStackShowcase() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Tech we love"
          title="A pragmatic, modern toolbox."
          subtitle="We pick boring tech for boring problems and exciting tech where it earns its keep."
        />

        <motion.div
          variants={stagger(0.02)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 flex flex-wrap justify-center gap-2"
        >
          {TECH_STACK.map((t) => (
            <motion.span
              variants={fadeUp}
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 backdrop-blur-md transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
