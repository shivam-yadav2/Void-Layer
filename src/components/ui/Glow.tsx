import { cn } from "@/utils/cn";

interface GlowProps {
  className?: string;
  intensity?: "soft" | "medium" | "strong";
}

export function Glow({ className, intensity = "medium" }: GlowProps) {
  const opacity = {
    soft: "bg-white/[0.06]",
    medium: "bg-white/[0.10]",
    strong: "bg-white/[0.16]",
  }[intensity];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-[120px]",
        opacity,
        className,
      )}
    />
  );
}
