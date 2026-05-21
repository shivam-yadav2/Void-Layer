import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeUp, stagger } from "@/animations/variants";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const parts = italicWord ? splitOnce(title, italicWord) : null;
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "relative",
        align === "center" ? "mx-auto text-center max-w-3xl" : "text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="chip mb-5 inline-flex">
          <span className="size-1 rounded-full bg-white/80" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-display-lg font-semibold text-balance text-white"
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
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-white/55 text-pretty"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

function splitOnce(s: string, sep: string): [string, string] {
  const i = s.indexOf(sep);
  if (i === -1) return [s, ""];
  return [s.slice(0, i), s.slice(i + sep.length)];
}
