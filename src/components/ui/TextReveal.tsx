/**
 * TextReveal — Aceternity classic. Reveals text word-by-word as user scrolls
 * past it. Each word fades from white/20 to white/100.
 */
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <p
        className={cn(
          "flex flex-wrap text-2xl sm:text-3xl lg:text-5xl font-display font-medium leading-[1.15] tracking-tight gap-x-2 gap-y-1",
        )}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative inline-block">
      <span className="absolute inset-0 text-white/15">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
}
