import { motion } from "framer-motion";
import { STATS } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUp, stagger } from "@/animations/variants";

export function Stats() {
  return (
    <section className="section-tight">
      <div className="container">
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              variants={fadeUp}
              key={s.label}
              className="bg-ink-900/70 p-8"
            >
              <div className="text-4xl font-semibold tracking-tight gradient-text">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-white/80">{s.label}</p>
              {s.hint && <p className="mt-1 text-xs text-white/45">{s.hint}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
