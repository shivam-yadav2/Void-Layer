/**
 * BentoGrid — Aceternity pattern. Asymmetric grid of cards with spotlight
 * hover, designed for varying spans (col-span-1 / col-span-2 / row-span-2).
 */
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 lg:grid-cols-6 auto-rows-[minmax(220px,auto)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: "1" | "2" | "3" | "4" | "6";
  rowSpan?: "1" | "2";
}

export function BentoCard({
  children,
  className,
  span = "2",
  rowSpan = "1",
}: BentoCardProps) {
  const colMap = {
    "1": "lg:col-span-1",
    "2": "lg:col-span-2",
    "3": "lg:col-span-3",
    "4": "lg:col-span-4",
    "6": "lg:col-span-6",
  };
  const rowMap = {
    "1": "",
    "2": "lg:row-span-2",
  };
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/15",
        colMap[span],
        rowMap[rowSpan],
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.06), transparent 65%)",
        }}
      />
      <div className="relative h-full flex flex-col">{children}</div>
    </article>
  );
}
