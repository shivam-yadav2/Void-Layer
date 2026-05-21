import { cn } from "@/utils/cn";

interface MarqueeBigProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  italicEvery?: number;
  repeat?: number;
  className?: string;
}

/**
 * MarqueeBig — display-size word loop with dot separators, in the Rayo-style
 * editorial agency vibe. Every Nth word can be rendered in italic-serif.
 */
export function MarqueeBig({
  items,
  speed = 120,
  reverse = false,
  italicEvery = 2,
  repeat = 2,
  className,
}: MarqueeBigProps) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max gap-12 will-change-transform animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((set) => (
          <ul
            key={set}
            aria-hidden={set === 1}
            className="flex items-center gap-12 pr-12"
          >
            {Array.from({ length: repeat })
              .map(() => items)
              .flat()
              .map((it, i) => {
                const italic = italicEvery > 0 && i % italicEvery === 1;
                return (
                  <li
                    key={`${set}-${i}`}
                    className="flex items-center gap-12 whitespace-nowrap"
                  >
                    <span
                      className={cn(
                        "text-[clamp(2.25rem,7vw,6rem)] font-display font-semibold tracking-[-0.035em] text-white",
                        italic && "italic-serif text-white/85",
                      )}
                    >
                      {it}
                    </span>
                    <span
                      aria-hidden
                      className="inline-block size-2 rounded-full bg-white/40"
                    />
                  </li>
                );
              })}
          </ul>
        ))}
      </div>
    </div>
  );
}
