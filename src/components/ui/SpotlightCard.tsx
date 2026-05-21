import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/utils/cn";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/20",
        className,
      )}
      style={
        {
          "--mx": "50%",
          "--my": "50%",
          backgroundImage:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(255,255,255,0.06), transparent 60%)",
        } as React.CSSProperties
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(260px circle at var(--mx) var(--my), rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
