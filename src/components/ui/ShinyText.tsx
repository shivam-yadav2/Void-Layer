/**
 * ShinyText — React Bits pattern. Light shimmer sweeps across the text.
 * Use sparingly for callouts; not for body copy.
 */
import { cn } from "@/utils/cn";

interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function ShinyText({ text, speed = 5, className, as: Tag = "span" }: ShinyTextProps) {
  return (
    <Tag
      className={cn("shiny-text inline-block", className)}
      style={
        {
          color: "rgba(255,255,255,0.55)",
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 70%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `shine ${speed}s linear infinite`,
        } as React.CSSProperties
      }
    >
      {text}
    </Tag>
  );
}
