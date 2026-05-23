import { cn } from "@/utils/cn";

interface MarqueePillProps {
  items: string[];
  speed?: number;
  className?: string;
  bg?: string;
  fg?: string;
}

/**
 * MarqueePill — inline pill-shaped capsule with marquee text inside.
 * Sized to match the surrounding display heading line-height so it can
 * sit inline between other words in an h1.
 */
export function MarqueePill({
  items,
  speed = 18,
  className,
  bg = "#C6F24E",
  fg = "#0A0A0A",
}: MarqueePillProps) {
  const half = [...items, ...items];

  return (
    <span
      className={cn(
        "relative inline-flex h-[1em] items-center overflow-hidden rounded-full align-middle",
        className,
      )}
      style={{
        backgroundColor: bg,
        width: "clamp(14rem, 42vw, 40rem)",
      }}
    >
      <span
        className="flex shrink-0 items-center animate-marquee will-change-transform"
        style={{ animationDuration: `${speed}s`, gap: "0.6em", paddingLeft: "0.4em" }}
      >
        {[0, 1].map((set) => (
          <span
            key={set}
            aria-hidden={set === 1}
            className="flex shrink-0 items-center"
            style={{ gap: "0.6em", paddingRight: "0.6em" }}
          >
            {half.map((item, i) => (
              <span
                key={i}
                className="inline-flex shrink-0 items-center whitespace-nowrap font-display font-semibold"
                style={{ color: fg, gap: "0.4em" }}
              >
                <Sparkle4 className="size-[0.5em] shrink-0" color={fg} />
                <span className="leading-none">{item}</span>
              </span>
            ))}
          </span>
        ))}
      </span>
    </span>
  );
}

function Sparkle4({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} aria-hidden>
      <path d="M12 0 C12.6 6.4 17.6 11.4 24 12 C17.6 12.6 12.6 17.6 12 24 C11.4 17.6 6.4 12.6 0 12 C6.4 11.4 11.4 6.4 12 0 Z" />
    </svg>
  );
}
