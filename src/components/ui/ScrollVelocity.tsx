/**
 * ScrollVelocity — React Bits pattern. Big text rails that translate
 * horizontally based on scroll velocity (via Framer's useScroll + useVelocity).
 * Opposite rows scroll opposite directions for a kinetic editorial feel.
 */
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { cn } from "@/utils/cn";

interface ScrollVelocityProps {
  texts: string[];
  baseVelocity?: number;
  className?: string;
}

export function ScrollVelocity({
  texts,
  baseVelocity = 20,
  className,
}: ScrollVelocityProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-4 select-none",
        className,
      )}
      aria-hidden
    >
      {texts.map((t, i) => (
        <VelocityRow key={i} baseVelocity={i % 2 === 0 ? baseVelocity : -baseVelocity}>
          {t}
        </VelocityRow>
      ))}
    </section>
  );
}

interface RowProps {
  baseVelocity: number;
  children: string;
}

function VelocityRow({ baseVelocity, children }: RowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 60,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap leading-none">
      <motion.div
        style={{ x }}
        className="flex whitespace-nowrap flex-nowrap gap-10"
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "text-[clamp(3.5rem,12vw,11rem)] font-display font-semibold tracking-tight",
              idx % 2 === 1 ? "text-stroke-thick" : "text-white",
            )}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
