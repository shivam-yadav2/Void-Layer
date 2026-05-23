import { motion } from "framer-motion";
import { PROCESS } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger } from "@/animations/variants";
import { ArrowRight, Sparkles, CircleCheckBig } from "lucide-react";
import { cn } from "@/utils/cn";

const PILLARS = [
  "weekly demos",
  "clear definition of done",
  "architecture before aesthetics",
  "launch-ready operations",
];

export function ProcessTimeline() {
  return (
    <section className="relative isolate overflow-hidden section">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-[#DFFF4A]/8 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[-12%] h-[28rem] w-[28rem] rounded-full bg-[#B996FF]/8 blur-[160px]"
      />

      <div className="container">
        <SectionHeading
          eyebrow="How we build"
          title="A process designed to ship, not stall."
          subtitle="Five phases, one shared rhythm, and a system that keeps the work moving from first conversation to live operation."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6">
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(223,255,74,0.14),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(185,150,255,0.12),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_56%)]" />
            <div className="relative z-10">
              <span className="chip inline-flex">
                <Sparkles className="size-3.5 text-[#DFFF4A]" />
                Delivery rhythm
              </span>

              <h3 className="mt-6 max-w-sm text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                We keep the work moving with a simple, visible cadence.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/55 text-pretty sm:text-base">
                The process stays lean on purpose: discover the problem, shape the system,
                build in increments, harden before launch, and keep operating after.
              </p>

              <div className="mt-8 space-y-3">
                {PILLARS.map((pill) => (
                  <div
                    key={pill}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <CircleCheckBig className="size-4 shrink-0 text-[#DFFF4A]" />
                    <span className="text-sm text-white/75">{pill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">
                  Always in view
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Scope, status and next steps stay visible so nobody has to guess where the project stands.
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.ol
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {PROCESS.map((p, index) => {
              const featured = index === 2;
              return (
                <motion.li
                  variants={fadeUp}
                  key={p.step}
                  className={cn(
                    "group relative overflow-hidden rounded-[1.75rem] border p-5 transition-transform duration-300 hover:-translate-y-1",
                    featured
                      ? "border-[#DFFF4A]/20 bg-[#DFFF4A] text-black sm:col-span-2"
                      : "border-white/10 bg-white/[0.03] text-white",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 opacity-100",
                      featured
                        ? "bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.45),transparent_22%),linear-gradient(135deg,rgba(0,0,0,0.02),transparent_58%)]"
                        : "bg-[radial-gradient(circle_at_75%_20%,rgba(223,255,74,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_58%)]",
                    )}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className={cn(
                            "font-mono text-xs uppercase tracking-[0.28em]",
                            featured ? "text-black/60" : "text-white/50",
                          )}
                        >
                          Step {p.step}
                        </span>
                        <h3 className={cn("mt-3 text-2xl font-semibold tracking-tight", featured ? "text-black" : "text-white")}>
                          {p.title}
                        </h3>
                      </div>

                      <div
                        className={cn(
                          "inline-flex size-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
                          featured
                            ? "border-black/10 bg-black/5 text-black"
                            : "border-white/10 bg-white/[0.04] text-white/80",
                        )}
                      >
                        {p.step}
                      </div>
                    </div>

                    <p className={cn("mt-4 text-sm leading-6 text-pretty", featured ? "text-black/70" : "text-white/58")}>
                      {p.description}
                    </p>

                    <div className={cn("mt-6 h-px w-14 bg-gradient-to-r", featured ? "from-black/30 to-transparent" : "from-white/50 to-transparent")} />

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em]",
                          featured ? "bg-black/5 text-black/60" : "bg-white/[0.04] text-white/55",
                        )}
                      >
                        {index === 0 ? "Discovery" : index === 1 ? "Planning" : index === 2 ? "Build" : index === 3 ? "Quality" : "Operations"}
                      </span>
                      <ArrowRight className={cn("size-4 transition-transform group-hover:translate-x-0.5", featured ? "text-black/50" : "text-white/45")} />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-5 sm:px-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-white/40">
                What happens next
              </p>
              <p className="mt-2 text-sm text-white/65">
                Every phase ends with something tangible: a decision, a design, a shipped increment, or a production-ready system.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="chip text-[10.5px] py-0.5">Weekly demos</span>
              <span className="chip text-[10.5px] py-0.5">Shared backlog</span>
              <span className="chip text-[10.5px] py-0.5">Clear ownership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
