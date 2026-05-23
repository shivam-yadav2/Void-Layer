import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ShapeProps {
  className?: string;
  style?: CSSProperties;
}

/* ---------------------------- Chrome / B&W ---------------------------- */

export function ChromeSphere({ className, style }: ShapeProps) {
  return (
    <div className={cn("relative rounded-full", className)} style={style} aria-hidden>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #ffffff 0%, #d8d8d8 10%, #6f6f6f 35%, #1a1a1a 70%, #000 100%)",
          boxShadow:
            "inset -8px -10px 30px rgba(0,0,0,0.85), inset 6px 8px 22px rgba(255,255,255,0.35), 0 22px 50px -16px rgba(0,0,0,0.85)",
        }}
      />
      <span
        className="absolute left-[20%] top-[16%] h-[28%] w-[36%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.95), rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
        }}
      />
      <span
        className="absolute bottom-[18%] right-[22%] h-[10%] w-[18%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.6), rgba(255,255,255,0) 70%)",
          filter: "blur(1.5px)",
        }}
      />
    </div>
  );
}

export function SoftBlob({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 400 400">
      <defs>
        <radialGradient id="soft-blob" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#9C9C9C" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#2E2E2E" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
      </defs>
      <path
        fill="url(#soft-blob)"
        d="M200 60 C 260 50 320 100 330 170 C 340 230 300 270 290 305 C 280 345 220 360 175 345 C 130 330 80 305 70 250 C 60 200 90 160 100 125 C 115 80 150 70 200 60 Z"
      />
      <ellipse
        cx="155"
        cy="135"
        rx="40"
        ry="22"
        fill="#FFFFFF"
        opacity="0.18"
        transform="rotate(-25 155 135)"
      />
    </Svg>
  );
}

/* ---------------------------- Vibrant ---------------------------- */

export function PurpleBlob({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 400 400">
      <defs>
        <radialGradient id="purp-blob" cx="32%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#F4ECFF" />
          <stop offset="25%" stopColor="#C9B6FF" />
          <stop offset="55%" stopColor="#8C6CF0" />
          <stop offset="85%" stopColor="#5031C2" />
          <stop offset="100%" stopColor="#2A1880" />
        </radialGradient>
      </defs>
      <path
        fill="url(#purp-blob)"
        d="M210 50 C 280 55 340 110 332 185 C 326 245 290 270 285 320 C 282 360 215 372 165 352 C 110 330 60 285 72 220 C 80 175 110 145 118 100 C 125 65 165 46 210 50 Z"
      />
      <ellipse
        cx="170"
        cy="130"
        rx="55"
        ry="28"
        fill="#FFFFFF"
        opacity="0.35"
        transform="rotate(-22 170 130)"
      />
    </Svg>
  );
}

export function Egg({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 200 200">
      <defs>
        <radialGradient id="yolk" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="35%" stopColor="#FFD23A" />
          <stop offset="80%" stopColor="#F39200" />
          <stop offset="100%" stopColor="#B05B00" />
        </radialGradient>
        <radialGradient id="egg-white" cx="40%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#F1ECE0" />
          <stop offset="100%" stopColor="#D8CFB7" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="105" rx="86" ry="72" fill="url(#egg-white)" />
      <ellipse cx="106" cy="100" rx="30" ry="28" fill="url(#yolk)" />
      <ellipse
        cx="98"
        cy="92"
        rx="9"
        ry="6"
        fill="#FFFFFF"
        opacity="0.65"
        transform="rotate(-30 98 92)"
      />
    </Svg>
  );
}

export function Cactus({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 200 220">
      <defs>
        <linearGradient id="cact-body" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1F6B3B" />
          <stop offset="50%" stopColor="#5DC07A" />
          <stop offset="100%" stopColor="#1F6B3B" />
        </linearGradient>
        <radialGradient id="cact-flower" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFD5E1" />
          <stop offset="60%" stopColor="#FF8FAA" />
          <stop offset="100%" stopColor="#D64B72" />
        </radialGradient>
      </defs>
      {/* arms */}
      <rect x="40" y="100" width="28" height="60" rx="14" fill="url(#cact-body)" />
      <rect x="132" y="80" width="28" height="80" rx="14" fill="url(#cact-body)" />
      {/* body */}
      <rect x="78" y="50" width="44" height="150" rx="22" fill="url(#cact-body)" />
      {/* highlights */}
      <rect
        x="85"
        y="60"
        width="6"
        height="130"
        rx="3"
        fill="#FFFFFF"
        opacity="0.25"
      />
      {/* flowers */}
      <circle cx="100" cy="46" r="12" fill="url(#cact-flower)" />
      <circle cx="86" cy="40" r="9" fill="url(#cact-flower)" />
      <circle cx="116" cy="40" r="10" fill="url(#cact-flower)" />
    </Svg>
  );
}

export function Flame({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 200 240">
      <defs>
        <radialGradient id="flame-grad" cx="50%" cy="65%" r="70%">
          <stop offset="0%" stopColor="#FFF6A8" />
          <stop offset="25%" stopColor="#FFC23A" />
          <stop offset="60%" stopColor="#FF6A1A" />
          <stop offset="100%" stopColor="#B11A00" />
        </radialGradient>
      </defs>
      <path
        fill="url(#flame-grad)"
        d="M100 14 C 130 60 168 95 158 150 C 150 200 120 222 100 222 C 80 222 50 200 42 150 C 34 105 70 80 80 50 C 86 30 92 22 100 14 Z"
      />
      <path
        d="M100 70 C 116 96 130 118 122 148 C 116 172 108 184 100 184 C 92 184 78 168 74 148 C 70 124 88 110 92 90 C 95 80 98 76 100 70 Z"
        fill="#FFD23A"
        opacity="0.75"
      />
    </Svg>
  );
}

export function Donut({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 200 200">
      <defs>
        <radialGradient id="donut-grad" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFE4F0" />
          <stop offset="40%" stopColor="#FF9AC4" />
          <stop offset="100%" stopColor="#9C3866" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#donut-grad)" />
      <circle cx="100" cy="100" r="28" fill="#0A0A0A" />
      <ellipse
        cx="78"
        cy="62"
        rx="28"
        ry="14"
        fill="#FFFFFF"
        opacity="0.45"
        transform="rotate(-30 78 62)"
      />
    </Svg>
  );
}

export function GeoCluster({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 200 200">
      <defs>
        <radialGradient id="geo-ball" cx="32%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#9C9C9C" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
      </defs>
      <g stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.2">
        <line x1="100" y1="100" x2="34" y2="50" />
        <line x1="100" y1="100" x2="166" y2="50" />
        <line x1="100" y1="100" x2="34" y2="150" />
        <line x1="100" y1="100" x2="166" y2="150" />
        <line x1="100" y1="100" x2="100" y2="20" />
        <line x1="100" y1="100" x2="100" y2="180" />
      </g>
      <circle cx="100" cy="100" r="22" fill="url(#geo-ball)" />
      <circle cx="34" cy="50" r="12" fill="url(#geo-ball)" />
      <circle cx="166" cy="50" r="12" fill="url(#geo-ball)" />
      <circle cx="34" cy="150" r="12" fill="url(#geo-ball)" />
      <circle cx="166" cy="150" r="12" fill="url(#geo-ball)" />
      <circle cx="100" cy="20" r="10" fill="url(#geo-ball)" />
      <circle cx="100" cy="180" r="10" fill="url(#geo-ball)" />
    </Svg>
  );
}

export function CyanCrystal({ className, style }: ShapeProps) {
  return (
    <Svg className={className} style={style} viewBox="0 0 200 220">
      <defs>
        <linearGradient id="cyan-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#E4FBFF" />
          <stop offset="50%" stopColor="#4ECDE5" />
          <stop offset="100%" stopColor="#0E5A7A" />
        </linearGradient>
      </defs>
      <path
        fill="url(#cyan-grad)"
        d="M100 12 L170 70 L150 200 L50 200 L30 70 Z"
        opacity="0.95"
      />
      <path
        fill="#FFFFFF"
        opacity="0.45"
        d="M100 12 L170 70 L120 90 L100 12 Z"
      />
    </Svg>
  );
}

/* ---------------------------- helper ---------------------------- */

function Svg({
  children,
  className,
  style,
  viewBox,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  viewBox: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      className={cn("h-full w-full", className)}
      style={style}
      aria-hidden
    >
      {children}
    </svg>
  );
}
