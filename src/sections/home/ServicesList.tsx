import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { fadeUp, stagger } from "@/animations/variants";

// Accent color per service
const ACCENTS: Record<string, string> = {
  "web-development":      "#abd600",
  "saas-development":     "#abd600",
  "mobile-apps":          "#c8bfff",
  "ui-ux-design":         "#c8bfff",
  "cloud-solutions":      "#61f9e9",
  "ai-integration":       "#c8bfff",
  "devops":               "#abd600",
  "enterprise-software":  "#61f9e9",
  "automation-systems":   "#abd600",
  "api-development":      "#c8bfff",
};

export function ServicesList() {
  return (
    <section className="relative bg-black py-20 lg:py-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-[-5%] h-[500px] w-[500px] rounded-full bg-[#abd600]/[0.03] blur-[150px]"
      />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.08)}
          className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.32em] text-[#abd600]"
            >
              <span className="inline-block h-px w-6 bg-[#abd600]" />
              All Capabilities
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-[3.2rem] lg:leading-[1.08]"
            >
              Every layer, covered.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-xs text-sm leading-relaxed text-white/38 md:text-right"
          >
            One focused team across design, engineering, cloud and AI — no hand-offs.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Service rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.045)}
        >
          {SERVICES.map((service, i) => (
            <ServiceRow
              key={service.slug}
              service={service}
              index={i}
              accent={ACCENTS[service.slug] ?? "#abd600"}
            />
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/25">
            {SERVICES.length} services · Full-stack delivery
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35 transition-colors duration-200 hover:text-[#abd600]"
          >
            Start a project
            <ArrowUpRight className="size-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
  accent,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div variants={fadeUp}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ x: 6 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="group relative border-b border-white/[0.06]"
        style={{
          backgroundColor: hovered ? "rgba(255,255,255,0.018)" : "transparent",
          transition: "background-color 0.25s ease",
        }}
      >
        {/* Accent left bar — slides in on hover */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-300"
          style={{
            backgroundColor: accent,
            opacity: hovered ? 1 : 0,
          }}
        />

        <div className="flex items-center gap-5 py-5 pl-5 pr-2 sm:gap-6 sm:py-6 sm:pl-6">
          {/* Number */}
          <span className="w-7 shrink-0 font-mono text-xs leading-none text-white/[0.18] transition-colors duration-300 group-hover:text-white/35">
            {num}
          </span>

          {/* Icon */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300"
            style={{
              borderColor: hovered ? `${accent}35` : "rgba(255,255,255,0.07)",
              backgroundColor: hovered ? `${accent}12` : "transparent",
            }}
          >
            <Icon
              className="size-[18px] transition-colors duration-300"
              style={{ color: hovered ? accent : "rgba(255,255,255,0.38)" }}
              strokeWidth={1.6}
            />
          </div>

          {/* Title + tagline */}
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-bold tracking-tight text-white/80 transition-colors duration-200 group-hover:text-white sm:text-lg">
              {service.title}
            </p>
            <p className="mt-0.5 text-sm text-white/28 transition-colors duration-200 group-hover:text-white/45">
              {service.tagline}
            </p>
          </div>

          {/* Tech stack — hidden on mobile */}
          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            {service.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/28 transition-all duration-300 group-hover:border-white/[0.12] group-hover:text-white/44"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Outcomes — hidden on smaller screens */}
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            {service.outcomes.slice(0, 2).map((o) => (
              <span
                key={o}
                className="text-[11px] text-white/20 transition-colors duration-300 group-hover:text-white/38"
              >
                {o}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <ArrowUpRight
            className="size-4 shrink-0 transition-all duration-300"
            style={{
              color: hovered ? accent : "rgba(255,255,255,0.15)",
              transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
