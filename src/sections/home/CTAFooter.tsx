import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Glow } from "@/components/ui/Glow";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

export function CTAFooter() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 px-8 py-16 sm:px-12 sm:py-20 lg:py-28 text-center"
        >
          <AnimatedGrid className="opacity-40" />
          <BackgroundBeams className="opacity-50" />
          <Glow intensity="strong" className="-top-32 left-1/4 h-[420px] w-[420px]" />
          <Glow intensity="soft" className="-bottom-32 right-1/4 h-[420px] w-[420px]" />

          <span className="chip relative z-10">
            <span className="size-1.5 rounded-full bg-white shadow-[0_0_10px_2px] shadow-white/40" />
            Ready when you are
          </span>
          <h2 className="relative z-10 mt-6 text-display-lg font-semibold text-balance text-white">
            Let's build something{" "}
            <span className="italic-serif">worth</span> shipping.
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-xl text-white/60 text-pretty">
            Tell us about your product. We'll come back within 24 hours with
            three concrete ways we'd approach it.
          </p>
          <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Start a conversation
              <ArrowRight className="size-4" />
            </Link>
            <Link to="/services" className="btn-outline">
              Browse services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
