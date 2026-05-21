import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { ShinyText } from "@/components/ui/ShinyText";
import { useGsapParallax } from "@/hooks/useGsapParallax";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-12 lg:pt-20 pb-28">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-bg opacity-50"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise-overlay" />

      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.span variants={chipVariants} className="chip">
            <Sparkles className="size-3.5 text-white/85" />
            <ShinyText text="AI-native engineering pods are live" speed={8} />
          </motion.span>

          <motion.h1
            variants={lineVariants}
            className="mt-7 text-display-2xl font-display font-semibold tracking-tight text-balance text-white"
          >
            <span className="block">We engineer</span>
            <span className="block">
              <span className="italic-serif text-white/95">digital</span>{" "}
              systems beyond
            </span>
            <span className="block text-stroke">the&nbsp;limit.</span>
          </motion.h1>

          <motion.p
            variants={lineVariants}
            className="mx-auto mt-8 max-w-xl text-lg text-white/55 text-pretty"
          >
            Void Layer designs, builds and operates premium SaaS, web, mobile,
            AI and cloud systems for ambitious teams — at studio quality,
            startup speed.
          </motion.p>

          <motion.div
            variants={lineVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link to="/contact">
              <MagneticButton variant="primary">
                Start a project
                <ArrowRight className="size-4" />
              </MagneticButton>
            </Link>
            <Link to="/products">
              <MagneticButton variant="ghost">Explore products</MagneticButton>
            </Link>
          </motion.div>

          <motion.div
            variants={lineVariants}
            className="mt-14 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60 backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-white" />
            </span>
            Currently shipping for 8 clients · 2 open pod slots
          </motion.div>
        </motion.div>

        <FloatingPanel />
      </div>
    </section>
  );
}

const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};
const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function FloatingPanel() {
  const parallaxRef = useGsapParallax<HTMLDivElement>({ y: -80, scale: 0.98 });
  return (
    <motion.div
      ref={parallaxRef}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-20 mx-auto max-w-5xl will-change-transform"
    >
      <div className="relative liquid-glass rounded-3xl p-1.5 shadow-glow-soft">
        <div className="relative rounded-[20px] bg-black overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <div className="flex-1 mx-4 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] px-3 text-[11px] font-mono text-white/45 flex items-center">
              voidlayer.com
            </div>
          </div>
          <div className="relative grid grid-cols-12 gap-px bg-white/[0.04] p-px">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.15, 0.6, 0.15] }}
                transition={{
                  duration: 4,
                  delay: (i * 0.07) % 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="aspect-square"
                style={{
                  background:
                    i % 7 === 0
                      ? "rgba(255,255,255,0.85)"
                      : i % 11 === 0
                        ? "rgba(255,255,255,0.35)"
                        : i % 5 === 0
                          ? "rgba(255,255,255,0.10)"
                          : "rgba(8,8,8,1)",
                }}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
