import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PRIMARY_NAV } from "@/data/nav";
import { cn } from "@/utils/cn";
import { ArrowUpRight } from "lucide-react";

export function DesktopNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed top-0 inset-x-0 z-40 hidden lg:block">
      <div className="container">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto mt-4 flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass-strong border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
              : "border-transparent bg-transparent",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
           
            <span className="text-[15px] font-semibold tracking-tight">
              Void<span className="text-white/60"> Layer</span>
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            {PRIMARY_NAV.map((item) => {
              const isActive =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-colors",
                    isActive ? "text-white" : "text-white/60 hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-white text-ink-950 px-4 py-2 text-[13.5px] font-semibold transition-transform hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
      <AnimatePresence />
    </header>
  );
}


