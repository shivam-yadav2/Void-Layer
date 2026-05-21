import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import { Brain, Gauge, Layers, ShieldCheck, Workflow, Zap } from "lucide-react";

const REASONS = [
  {
    icon: Brain,
    title: "Senior pods, no proxies",
    body: "Every engagement is staffed with senior product, design and engineering. No layers, no juniors learning on you.",
  },
  {
    icon: Gauge,
    title: "Performance is a feature",
    body: "We measure what we ship. p95 latency, bundle size and motion budgets are written into our DoD.",
  },
  {
    icon: Layers,
    title: "Architecture-first",
    body: "We design the system before the screen. Boring infra, typed boundaries, and a clear path from MVP to scale.",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade by default",
    body: "Observability, security, RBAC, audit logs and tests aren't add-ons — they're scaffolded on day one.",
  },
  {
    icon: Workflow,
    title: "Ship weekly, in public",
    body: "Public changelogs, weekly demos and a shared backlog. You'll never wonder where we are.",
  },
  {
    icon: Zap,
    title: "Motion as language",
    body: "Animation is treated as part of the design system, not decoration — used to teach, guide and delight.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Void Layer"
          title="The standard, raised."
          subtitle="We chose every part of how we work because we got tired of how most agencies work."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <motion.div
                variants={fadeUp}
                key={r.title}
                className="relative bg-ink-900/60 p-7 transition-colors hover:bg-ink-900/90"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Icon className="size-5 text-white" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/55 text-pretty">{r.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
