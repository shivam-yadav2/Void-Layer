import { motion } from "framer-motion";

const WORDS = [
  "DESIGN", "ENGINEER", "OPERATE", "SCALE",
  "INNOVATE", "SAAS", "MOBILE", "AI", "CLOUD", "ENTERPRISE",
];
const SEGMENT = WORDS.join("  •  ") + "  •  ";

export function VelocityText() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] bg-black py-5 select-none"
      aria-hidden
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        className="flex whitespace-nowrap"
      >
        <span className="text-[clamp(3rem,9vw,9rem)] font-display font-semibold tracking-tight text-white/[0.13] pr-0">
          {SEGMENT}
        </span>
        {/* duplicate for seamless loop */}
        <span className="text-[clamp(3rem,9vw,9rem)] font-display font-semibold tracking-tight text-white/[0.13]" aria-hidden>
          {SEGMENT}
        </span>
      </motion.div>
    </section>
  );
}
