import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import StaggeredMenu from "@/components/navigation/StaggeredMenu";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { useLenis } from "@/hooks/useLenis";
import CircularText from "@/components/ui/CircularText";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PRIMARY_NAV } from "@/data/nav";

export function RootLayout() {
  useLenis();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <StaggeredMenu
        isFixed
        position="right"
        displaySocials={false}
        items={PRIMARY_NAV.map((item) => ({
          label: item.label,
          ariaLabel: item.label,
          link: item.to,
        }))}
          colors={["#0b0b0b", "#111111"]}
        headerRightSlot={
          <Link
            to="/contact"
            className="sm-cta group relative inline-flex items-center gap-1.5 rounded-full bg-white text-ink-950 px-4 py-2 text-[13.5px] font-semibold transition-transform hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        }
        showLabel={false}
        menuButtonColor="#e9e9ef"
        openMenuButtonColor="#111"
        changeMenuColorOnOpen
        accentColor="#5227FF"
        logo={
          <Link to="/" className="flex items-center gap-2.5">
          
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Void<span className="text-white/60"> Layer</span>
            </span>
          </Link>
        }
      />

      <main className="relative pt-0 pb-28 lg:pb-0">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleScrollTop}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          <CircularText
            text="SCROLL*TO*TOP*"
            onHover="speedUp"
            spinDuration={18}
            className="w-[160px] h-[160px] text-slate-200/90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <ArrowUp className="h-6 w-6 text-white" aria-hidden />
          </span>
        </div>
      </button>
    </div>
  );
}
