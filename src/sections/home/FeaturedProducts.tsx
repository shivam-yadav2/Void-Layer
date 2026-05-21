import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { cn } from "@/utils/cn";
import { fadeUp, stagger } from "@/animations/variants";

const STATUS_LABEL = {
  live: { label: "Live · Subscribe", className: "bg-white text-black border-white" },
  beta: { label: "Beta", className: "bg-white/10 text-white border-white/20" },
  soon: { label: "Coming Soon", className: "bg-transparent text-white/60 border-white/15" },
} as const;

export function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our SaaS · On subscription"
          title="Software you can subscribe to today."
          italicWord="subscribe"
          subtitle="A growing portfolio of business software — three live, three on the way. Monthly and annual plans available."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <BentoGrid>
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon;
              const span = i === 0 ? "4" : i === 3 ? "4" : "2";
              const status = STATUS_LABEL[p.status];
              const wide = span === "4";
              return (
                <motion.div
                  variants={fadeUp}
                  key={p.slug}
                  className={cn(
                    wide ? "lg:col-span-4" : "lg:col-span-2",
                  )}
                  onMouseMove={(e) => {
                    const target = e.currentTarget as HTMLDivElement;
                    const card = target.querySelector("[data-bento]") as HTMLElement | null;
                    if (!card) return;
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
                  }}
                >
                  <BentoCard span={wide ? "4" : "2"} className="h-full">
                    <div data-bento className="contents" />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]">
                          <Icon className="size-5 text-white" strokeWidth={1.6} />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                          <p className="text-xs text-white/45">{p.category}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap",
                            status.className,
                          )}
                        >
                          {status.label}
                        </span>
                        {p.priceFrom && (
                          <span className="font-mono text-[10.5px] text-white/55 whitespace-nowrap">
                            {p.priceFrom}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-white/70 text-pretty">{p.tagline}</p>

                    {wide && (
                      <p className="mt-2 text-sm text-white/45 text-pretty">
                        {p.description}
                      </p>
                    )}

                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {p.features.slice(0, wide ? 4 : 2).map((f) => (
                          <span key={f} className="chip text-[10.5px] py-0.5">
                            {f}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white"
                      >
                        Explore
                        <ArrowUpRight className="size-3.5" />
                      </Link>
                    </div>
                  </BentoCard>
                </motion.div>
              );
            })}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
