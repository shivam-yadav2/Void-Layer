import { cn } from "@/utils/cn";

interface AnimatedGridProps {
  className?: string;
}

export function AnimatedGrid({ className }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 grid-bg opacity-60 mask-fade-b",
        className,
      )}
    />
  );
}
