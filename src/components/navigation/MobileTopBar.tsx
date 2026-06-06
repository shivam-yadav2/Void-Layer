import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/images/logo.png";

export function MobileTopBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 lg:hidden">
      <div
        className="glass border-b border-white/[0.06] px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2.5 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Void Layer" className="h-7 w-auto" />
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
