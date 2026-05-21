import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function MobileTopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 lg:hidden">
      <div
        className="glass border-b border-white/[0.06] px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2.5 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#000000" stroke="rgba(255,255,255,0.1)" />
            <path
              d="M14 16 L32 48 L50 16 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="28" r="3" fill="#FFFFFF" />
          </svg>
          <span className="text-sm font-semibold tracking-tight">Void Layer</span>
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 rounded-full bg-white text-ink-950 px-3 py-1.5 text-xs font-semibold"
        >
          Start
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </header>
  );
}
