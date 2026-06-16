import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { MarqueePill } from "@/components/ui/MarqueePill";

const marqueeItems = ["your work", "your brand", "your team", "your vision"];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 22 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative isolate overflow-hidden bg-black pt-16 lg:pt-24 pb-24 lg:pb-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-bg opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise-overlay"
      />

      {/* <WarmSphere springX={springX} springY={springY} />
      <NeonRing springX={springX} springY={springY} /> */}

      <div className="container mt-5 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.15 },
            },
          }}
          className="relative mx-auto max-w-6xl text-center"
        >
          <motion.h1
            variants={lineVariants}
            className="font-display font-semibold tracking-[-0.045em] text-white text-balance"
            style={{ fontSize: "clamp(2.75rem, 9vw, 8.5rem)", lineHeight: 1.02 }}
          >
            <span className="flex flex-wrap items-center justify-center gap-x-[0.25em] gap-y-2">
              <span>Make</span>
              <MarqueePill items={marqueeItems} />
            </span>
            <span className="mt-1 flex items-center justify-center gap-[0.25em]">
              <Sparkle4Outline className="size-[0.7em] shrink-0 text-white" />
              <span>stand out</span>
            </span>
          </motion.h1>

          <motion.p
            variants={lineVariants}
            className="mx-auto mt-10 max-w-2xl text-lg text-white/55 text-pretty"
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
        </motion.div>
      </div>
    </section>
  );
}

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

type SpringProps = {
  springX: MotionValue<number>;
  springY: MotionValue<number>;
};

/** Faceted void crystal gem — left-side 3D decoration */
function VoidCrystal({ springX, springY }: SpringProps) {
  const rotateX = useTransform(springY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-22, 22]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.8, x: -60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="pointer-events-none absolute left-[-4%] top-[12%] hidden h-[20rem] w-[20rem] md:block lg:left-[1%] lg:top-[18%] lg:h-[26rem] lg:w-[26rem]"
      style={{ perspective: "900px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        <div className="animate-float h-full w-full">
          <svg
            viewBox="0 0 400 480"
            className="h-full w-full"
            style={{
              filter:
                "drop-shadow(0 0 32px rgba(139,92,246,0.4)) drop-shadow(0 0 80px rgba(109,40,217,0.18))",
            }}
          >
            <defs>
              <linearGradient id="cf1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0d7ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="cf2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#1a0533" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="cf3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#2e1065" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="cf4" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f0720" stopOpacity="1" />
                <stop offset="100%" stopColor="#5b21b6" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="cf5" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ddd6fe" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="cf6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b0764" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Top-left face (brightest — catches light) */}
            <polygon points="200,55 95,205 200,225" fill="url(#cf1)" />
            {/* Top-right face (dark side) */}
            <polygon points="200,55 305,205 200,225" fill="url(#cf2)" />
            {/* Mid-left face */}
            <polygon points="95,205 200,225 118,338" fill="url(#cf3)" />
            {/* Mid-right face (darkest) */}
            <polygon points="305,205 200,225 282,338" fill="url(#cf4)" />
            {/* Bottom face */}
            <polygon points="118,338 200,225 282,338 200,422" fill="url(#cf5)" />
            {/* Top girdle cap */}
            <polygon points="165,55 200,55 238,85 200,75" fill="url(#cf6)" opacity="0.65" />

            {/* Facet edge lines */}
            <line x1="200" y1="55" x2="200" y2="225" stroke="rgba(196,181,253,0.28)" strokeWidth="1.5" />
            <line x1="200" y1="225" x2="200" y2="422" stroke="rgba(139,92,246,0.18)" strokeWidth="1" />
            <line x1="95" y1="205" x2="305" y2="205" stroke="rgba(196,181,253,0.14)" strokeWidth="1" />
            <line x1="118" y1="338" x2="282" y2="338" stroke="rgba(109,40,217,0.18)" strokeWidth="1" />
            <line x1="95" y1="205" x2="118" y2="338" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
            <line x1="305" y1="205" x2="282" y2="338" stroke="rgba(109,40,217,0.12)" strokeWidth="1" />

            {/* Primary specular highlight */}
            <ellipse
              cx="170"
              cy="132"
              rx="24"
              ry="10"
              fill="white"
              opacity="0.28"
              transform="rotate(-30 170 132)"
            />
            {/* Secondary micro-highlight */}
            <ellipse
              cx="148"
              cy="168"
              rx="11"
              ry="4"
              fill="white"
              opacity="0.14"
              transform="rotate(-22 148 168)"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Ringed planet — right-side 3D decoration with proper ring occlusion */
function RingedPlanet({ springX, springY }: SpringProps) {
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-16, 16]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="pointer-events-none absolute right-[2%] top-[8%] hidden h-40 w-40 md:block md:h-56 md:w-56 lg:right-[5%] lg:top-[10%] lg:h-72 lg:w-72"
      style={{ perspective: "700px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        <div className="animate-float h-full w-full" style={{ animationDelay: "1.5s" }}>
          <svg
            viewBox="0 0 320 300"
            className="h-full w-full"
            style={{ overflow: "visible" }}
          >
            <defs>
              <radialGradient id="planet-grad" cx="37%" cy="32%" r="65%">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="20%" stopColor="#6366f1" />
                <stop offset="48%" stopColor="#1e1b4b" />
                <stop offset="78%" stopColor="#07060f" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
              <radialGradient id="planet-atmo" cx="50%" cy="50%" r="50%">
                <stop offset="78%" stopColor="transparent" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
              </radialGradient>
              {/* Ring gradients — fade to transparent at both ends */}
              <linearGradient id="rg1" x1="22" y1="0" x2="298" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                <stop offset="16%" stopColor="#818cf8" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#c7d2fe" stopOpacity="0.95" />
                <stop offset="84%" stopColor="#818cf8" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="rg2" x1="10" y1="0" x2="310" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="18%" stopColor="#6366f1" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#a5b4fc" stopOpacity="0.55" />
                <stop offset="82%" stopColor="#6366f1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
              <filter id="planet-glow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── Ring back half (behind planet) — top arc, sweep CCW ── */}
            <path
              d="M 22,150 A 138,40 0 0,0 298,150"
              fill="none"
              stroke="url(#rg1)"
              strokeWidth="11"
            />
            <path
              d="M 10,150 A 150,44 0 0,0 310,150"
              fill="none"
              stroke="url(#rg2)"
              strokeWidth="4"
            />

            {/* ── Planet sphere ── */}
            <circle cx="160" cy="150" r="90" fill="url(#planet-grad)" filter="url(#planet-glow)" />
            {/* Atmosphere glow rim */}
            <circle cx="160" cy="150" r="90" fill="url(#planet-atmo)" />
            {/* Primary specular highlight */}
            <ellipse
              cx="132"
              cy="115"
              rx="30"
              ry="16"
              fill="white"
              opacity="0.22"
              transform="rotate(-22 132 115)"
              style={{ filter: "blur(4px)" }}
            />
            {/* Micro highlight */}
            <ellipse
              cx="116"
              cy="103"
              rx="13"
              ry="7"
              fill="white"
              opacity="0.38"
              transform="rotate(-28 116 103)"
            />

            {/* ── Ring front half (in front of planet) — bottom arc, sweep CW ── */}
            <path
              d="M 22,150 A 138,40 0 0,1 298,150"
              fill="none"
              stroke="url(#rg1)"
              strokeWidth="11"
            />
            <path
              d="M 10,150 A 150,44 0 0,1 310,150"
              fill="none"
              stroke="url(#rg2)"
              strokeWidth="4"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Sparkle4Outline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z" />
    </svg>
  );
}
