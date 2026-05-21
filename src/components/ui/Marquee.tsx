import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  repeat?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({ children, speed = 180, repeat = 2, className, reverse }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max gap-12 animate-marquee will-change-transform"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex gap-12 items-center">
          {Array.from({ length: repeat }).map((_, i) => (
            <span key={`set-0-${i}`} className="flex gap-12 items-center">
              {children}
            </span>
          ))}
        </div>
        <div className="flex gap-12 items-center" aria-hidden>
          {Array.from({ length: repeat }).map((_, i) => (
            <span key={`set-1-${i}`} className="flex gap-12 items-center">
              {children}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
