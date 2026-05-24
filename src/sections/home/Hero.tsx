import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { MarqueePill } from "@/components/ui/MarqueePill";

const marqueeItems = ["your work", "your brand", "your team", "your vision"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-16 lg:pt-24 pb-24 lg:pb-32">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-bg opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 noise-overlay"
      />

      <BlobShape />
      <ChromeSphere />

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

/** Soft B&W organic blob — left-side decoration */
function BlobShape() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.92, x: -40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="pointer-events-none absolute left-[-4%] top-[18%] hidden h-[22rem] w-[22rem] md:block lg:left-[2%] lg:top-[22%] lg:h-[28rem] lg:w-[28rem]"
    >
      <div className="animate-float h-full w-full">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <radialGradient id="blob-grad" cx="38%" cy="32%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#9C9C9C" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#2E2E2E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1" />
            </radialGradient>
            <filter id="blob-blur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>
          <path
            filter="url(#blob-blur)"
            fill="url(#blob-grad)"
            d="M200 60 C 260 50 320 100 330 170 C 340 230 300 270 290 305 C 280 345 220 360 175 345 C 130 330 80 305 70 250 C 60 200 90 160 100 125 C 115 80 150 70 200 60 Z"
          />
          <ellipse
            cx="155"
            cy="135"
            rx="40"
            ry="22"
            fill="#FFFFFF"
            opacity="0.18"
            transform="rotate(-25 155 135)"
          />
        </svg>
      </div>
    </motion.div>
  );
}

/** Chrome reflective sphere — right-side decoration (astronaut-helmet vibe) */
function ChromeSphere() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="pointer-events-none absolute right-[2%] top-[8%] hidden h-32 w-32 md:block md:h-44 md:w-44 lg:right-[6%] lg:top-[14%] lg:h-56 lg:w-56"
    >
      <div className="animate-float h-full w-full" style={{ animationDelay: "1.5s" }}>
        <div
          className="relative h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #ffffff 0%, #d8d8d8 10%, #6f6f6f 35%, #1a1a1a 70%, #000000 100%)",
            boxShadow:
              "inset -8px -10px 30px rgba(0,0,0,0.85), inset 6px 8px 22px rgba(255,255,255,0.35), 0 30px 60px -20px rgba(0,0,0,0.8)",
          }}
        >
          <span
            className="absolute left-[20%] top-[18%] h-[26%] w-[34%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)",
              filter: "blur(2px)",
            }}
          />
          <span
            className="absolute bottom-[18%] right-[24%] h-[10%] w-[18%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.55), rgba(255,255,255,0) 70%)",
              filter: "blur(1.5px)",
            }}
          />
        </div>
      </div>
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
