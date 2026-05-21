import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, variant = "primary", children, ...rest }, _ref) => {
    const magRef = useMagnetic<HTMLSpanElement>(0.25);
    return (
      <span ref={magRef} className="inline-block will-change-transform">
        <button
          {...rest}
          className={cn(variant === "primary" ? "btn-primary" : "btn-ghost", className)}
        >
          {children}
        </button>
      </span>
    );
  },
);
MagneticButton.displayName = "MagneticButton";
