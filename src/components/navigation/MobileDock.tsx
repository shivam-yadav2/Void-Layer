import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PRIMARY_NAV } from "@/data/nav";
import { cn } from "@/utils/cn";

export function MobileDock() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden pointer-events-none"
      aria-label="Primary"
    >
      <div className="px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="liquid-glass pointer-events-auto relative mx-auto flex max-w-md items-center justify-between gap-1 rounded-[28px] p-1.5"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden"
          >
            <div className="absolute -inset-px rounded-[28px] opacity-40 bg-gradient-to-r from-white/15 via-transparent to-white/15 blur-md" />
          </div>

          {PRIMARY_NAV.map((item) => {
            const isActive =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium text-white/60"
                aria-label={item.label}
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-active"
                    className="absolute inset-0 rounded-2xl bg-white/12 backdrop-blur-md"
                    style={{
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.4)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                  />
                )}
                <span
                  className={cn(
                    "relative flex items-center justify-center transition-colors",
                    isActive ? "text-white" : "text-white/60",
                  )}
                >
                  <Icon className="size-5" strokeWidth={2} />
                </span>
                <span
                  className={cn(
                    "relative transition-colors",
                    isActive ? "text-white" : "text-white/55",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
}
