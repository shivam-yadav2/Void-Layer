/**
 * InfiniteMovingCards — Aceternity pattern. Auto-scrolling row of cards
 * that pauses on hover. Duplicates children for seamless loop.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface InfiniteMovingCardsProps {
  children: ReactNode[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );

    const map = { slow: "140s", normal: "90s", fast: "55s" } as const;
    container.style.setProperty("--animation-duration", map[speed]);

    // Clone children once for the seamless loop and track clones for cleanup
    const appendedClones: HTMLElement[] = [];
    if (scroller.dataset.cloned !== "true") {
      Array.from(scroller.children).forEach((child) => {
        const clone = child.cloneNode(true) as HTMLElement;
        clone.setAttribute("aria-hidden", "true");
        // mark clones so we can clean them up safely later
        (clone as HTMLElement).dataset.imcClone = "true";
        scroller.appendChild(clone);
        appendedClones.push(clone);
      });
      scroller.dataset.cloned = "true";
    }

    setReady(true);

    return () => {
      // remove any clones we appended if they still exist in DOM
      try {
        appendedClones.forEach((clone) => {
          if (clone.parentNode === scroller) {
            scroller.removeChild(clone);
          }
        });
        // clear cloned flag so remounts can re-clone if needed
        if (scroller.dataset.cloned === "true") delete scroller.dataset.cloned;
      } catch (err) {
        // defensive: ignore DOM removal errors to avoid breaking navigation
        // eslint-disable-next-line no-console
        console.warn("InfiniteMovingCards cleanup: could not remove clones", err);
      }
    };
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10 max-w-full overflow-hidden mask-fade-x",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max gap-4 py-4 flex-nowrap shrink-0",
          ready && "animate-imc",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={
          {
            animationDuration: "var(--animation-duration, 40s)",
            animationDirection: "var(--animation-direction, forwards)",
          } as React.CSSProperties
        }
      >
        {children}
      </ul>

      <style>{`
        @keyframes imc-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.5rem)); }
        }
        .animate-imc {
          animation: imc-scroll var(--animation-duration, 40s) linear infinite;
        }
      `}</style>
    </div>
  );
}
