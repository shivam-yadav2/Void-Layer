import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { fadeUp, stagger } from "@/animations/variants";
import { cn } from "@/utils/cn";

const vault = PRODUCTS[0];
const plotline = PRODUCTS[1];

interface CardConfig {
  product: typeof vault;
  number: string;
  badge: string;
  dotColor: string;
  accentColor: string;
  hoverShadow: string;
  tags: string[];
  preview: "vault" | "plotline";
}

const CARDS: CardConfig[] = [
  {
    product: vault,
    number: "01",
    badge: "Live Project",
    dotColor: "#abd600",
    accentColor: "#abd600",
    hoverShadow: "0 0 80px rgba(171,214,0,0.07), 0 24px 48px rgba(0,0,0,0.65)",
    tags: ["CRM", "Scheduling", "Billing"],
    preview: "vault",
  },
  {
    product: plotline,
    number: "02",
    badge: "SaaS App",
    dotColor: "#c8bfff",
    accentColor: "#c8bfff",
    hoverShadow: "0 0 80px rgba(200,191,255,0.07), 0 24px 48px rgba(0,0,0,0.65)",
    tags: ["Agile", "Roadmaps", "Teams"],
    preview: "plotline",
  },
];

export function HomeProductCards() {
  return (
    <section className="relative bg-black py-20 lg:py-28">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[#abd600]/[0.035] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] top-[25%] h-96 w-96 rounded-full bg-[#c8bfff]/[0.04] blur-[120px]"
      />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.08)}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.32em] text-[#abd600]"
          >
            <span className="inline-block h-px w-6 bg-[#abd600]" />
            Products
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            Software we build to launch and scale.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg text-base leading-relaxed text-white/40"
          >
            A focused set of platforms we design and ship end to end.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.1)}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {CARDS.map((card) => (
            <motion.div key={card.number} variants={fadeUp} className="flex">
              <ProductCard card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ card }: { card: CardConfig }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -7 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/[0.07] cursor-default"
      style={{
        borderLeftWidth: "2px",
        borderLeftColor: hovered ? `${card.accentColor}90` : `${card.accentColor}55`,
        boxShadow: hovered
          ? `${card.hoverShadow}, inset 0 1px 0 rgba(255,255,255,0.06)`
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
        transition: "box-shadow 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div className="flex flex-col flex-1 p-6 sm:p-8">
        {/* Badge row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-[7px] w-[7px] shrink-0">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-55"
                style={{ backgroundColor: card.dotColor }}
              />
              <span
                className="relative inline-flex h-[7px] w-[7px] rounded-full"
                style={{ backgroundColor: card.dotColor }}
              />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              {card.badge}
            </span>
          </div>
          <span className="font-mono text-4xl font-bold leading-none text-white/[0.045] transition-[color] duration-300 group-hover:text-white/[0.08]">
            /{card.number}
          </span>
        </div>

        {/* Name + category */}
        <h3 className="mt-7 font-display text-[1.9rem] font-bold tracking-tight text-white leading-[1.12]">
          {card.product.name}
        </h3>
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
          {card.product.category}
        </p>

        {/* Preview box */}
        <div
          className="relative mt-7 overflow-hidden rounded-xl bg-[#161616] border border-white/[0.05]"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
        >
          <div className="absolute inset-0 grid-bg opacity-[0.08]" />
          {card.preview === "vault" ? (
            <VaultPreview accentColor={card.accentColor} />
          ) : (
            <PlotlinePreview accentColor={card.accentColor} />
          )}
        </div>

        {/* Tagline */}
        <p className="mt-5 text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/55">
          {card.product.tagline}
        </p>

        {/* Tags + link */}
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35 transition-all duration-300 group-hover:border-white/[0.14] group-hover:text-white/55"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            to="/products"
            className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 transition-all duration-300 hover:text-white/70 group-hover:text-white/45"
          >
            Open
            <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/** Vault GYM — mini stats dashboard preview */
function VaultPreview({ accentColor }: { accentColor: string }) {
  return (
    <div className="relative z-10 p-6 sm:p-7 min-h-[210px]">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Members", value: "2,481", fill: 72 },
          { label: "Check-ins", value: "148", fill: 45 },
        ].map(({ label, value, fill }, i) => (
          <div
            key={label}
            className={cn(
              "rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-4",
              "transition-transform duration-500 ease-out",
              i === 0
                ? "group-hover:-translate-y-1.5"
                : "group-hover:-translate-y-1 group-hover:delay-75",
            )}
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/30">
              {label}
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-white">{value}</p>
            <div className="mt-3 h-[2px] w-full rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out group-hover:opacity-100"
                style={{ width: `${fill}%`, backgroundColor: accentColor, opacity: 0.7 }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Floating orb accent */}
      <div
        aria-hidden
        className="absolute bottom-5 right-6 h-12 w-12 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1.5"
        style={{
          background: `radial-gradient(circle at 35% 28%, ${accentColor}cc 0%, ${accentColor}44 55%, transparent 100%)`,
          boxShadow: `0 0 24px ${accentColor}30`,
        }}
      />
    </div>
  );
}

/** Plotline — mini kanban task preview */
function PlotlinePreview({ accentColor }: { accentColor: string }) {
  const tasks = [
    { label: "Design system audit", done: true },
    { label: "Sprint planning", done: true },
    { label: "API integration", done: false },
  ];

  return (
    <div className="relative z-10 p-6 sm:p-7 min-h-[210px]">
      <div className="flex flex-col gap-2.5">
        {tasks.map((task, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-3 rounded-xl border border-white/[0.05] bg-[#0d0d0d] px-4 py-3",
              "transition-transform duration-500 ease-out",
              i === 0
                ? "group-hover:-translate-y-1.5"
                : i === 1
                  ? "group-hover:-translate-y-1 group-hover:delay-75"
                  : "group-hover:-translate-y-0.5 group-hover:delay-100",
            )}
          >
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
              style={{
                borderColor: task.done ? `${accentColor}80` : "rgba(255,255,255,0.12)",
                backgroundColor: task.done ? `${accentColor}18` : "transparent",
              }}
            >
              {task.done && (
                <svg viewBox="0 0 8 8" className="h-2.5 w-2.5" fill="none">
                  <path
                    d="M1.5 4L3 5.5L6.5 2"
                    stroke={accentColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span
              className={cn(
                "text-xs leading-snug transition-colors duration-300",
                task.done ? "text-white/30 line-through" : "text-white/60",
              )}
            >
              {task.label}
            </span>
          </div>
        ))}
      </div>
      {/* Floating ring accent */}
      <div
        aria-hidden
        className="absolute bottom-4 right-5 h-11 w-11 rounded-full border-[2.5px] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-y-1"
        style={{
          borderColor: `${accentColor}40`,
          boxShadow: `0 0 18px ${accentColor}1a, inset 0 0 10px ${accentColor}0a`,
        }}
      />
    </div>
  );
}
