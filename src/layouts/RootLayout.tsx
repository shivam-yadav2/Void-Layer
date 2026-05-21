import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileDock } from "@/components/navigation/MobileDock";
import { MobileTopBar } from "@/components/navigation/MobileTopBar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { useLenis } from "@/hooks/useLenis";

export function RootLayout() {
  useLenis();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <DesktopNav />
      <MobileTopBar />

      <main className="relative pt-16 lg:pt-24 pb-28 lg:pb-0">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
      <MobileDock />
    </div>
  );
}
