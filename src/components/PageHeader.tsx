import { motion } from "framer-motion";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Glow } from "@/components/ui/Glow";
import { fadeUp, stagger } from "@/animations/variants";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, italicWord, subtitle }: PageHeaderProps) {
  const parts = italicWord ? splitOnce(title, italicWord) : null;
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28">
      <AnimatedGrid />
      <Glow intensity="medium" className="-top-32 left-1/4 h-[420px] w-[420px]" />
      <Glow intensity="soft" className="top-10 -right-20 h-[360px] w-[360px]" />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="visible"
        className="container relative text-center"
      >
        {eyebrow && (
          <motion.span variants={fadeUp} className="chip">
            <span className="size-1 rounded-full bg-white/80" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-display-xl font-semibold tracking-tight text-white text-balance"
        >
          {parts ? (
            <>
              {parts[0]}
              <span className="italic-serif text-white/95">{italicWord}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/55 text-pretty"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

function splitOnce(s: string, sep: string): [string, string] {
  const i = s.indexOf(sep);
  if (i === -1) return [s, ""];
  return [s.slice(0, i), s.slice(i + sep.length)];
}
