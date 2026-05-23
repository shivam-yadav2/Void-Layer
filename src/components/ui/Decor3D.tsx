/**
 * Decor3D — Lightweight inline SVG decorations that imitate the 3D-render
 * vibe (radial gradients + soft highlights). Used as placeholder ornaments
 * inside ProductShowcase cards until real 3D renders / screenshots arrive.
 */
import { cn } from "@/utils/cn";

type DecorProps = { className?: string };

/** Metallic B&W sphere (astronaut-helmet vibe). */
export function ChromeOrb({ className }: DecorProps) {
  return (
    <div
      className={cn("relative rounded-full", className)}
      style={{
        background:
          "radial-gradient(circle at 32% 28%, #ffffff 0%, #d8d8d8 10%, #6f6f6f 35%, #1a1a1a 70%, #000000 100%)",
        boxShadow:
          "inset -6px -8px 22px rgba(0,0,0,0.85), inset 5px 6px 18px rgba(255,255,255,0.32), 0 18px 40px -16px rgba(0,0,0,0.7)",
      }}
    >
      <span
        className="absolute left-[20%] top-[18%] h-[26%] w-[34%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

/** Purple toroidal / pretzel blob — vibrant accent. */
export function PurpleBlob({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="pb-grad" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#E5D4FF" />
          <stop offset="40%" stopColor="#B196E8" />
          <stop offset="80%" stopColor="#6E4FB0" />
          <stop offset="100%" stopColor="#2F1F55" />
        </radialGradient>
        <radialGradient id="pb-shine" cx="35%" cy="25%" r="35%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <path
        fill="url(#pb-grad)"
        d="M100 22 C 150 18 178 60 170 110 C 162 158 130 184 92 178 C 50 172 22 138 28 92 C 34 50 60 26 100 22 Z M100 70 C 80 70 70 86 72 100 C 74 116 90 124 102 122 C 118 120 124 104 122 90 C 120 76 110 70 100 70 Z"
      />
      <ellipse
        cx="78"
        cy="58"
        rx="22"
        ry="12"
        fill="url(#pb-shine)"
        transform="rotate(-30 78 58)"
      />
    </svg>
  );
}

/** Peach / cream rounded sphere with bottom shadow. */
export function PeachSphere({ className }: DecorProps) {
  return (
    <div
      className={cn("relative rounded-full", className)}
      style={{
        background:
          "radial-gradient(circle at 34% 30%, #FFE8D2 0%, #FFB888 35%, #C97950 75%, #5C2E1B 100%)",
        boxShadow:
          "inset -6px -8px 22px rgba(0,0,0,0.45), inset 5px 6px 18px rgba(255,255,255,0.45), 0 16px 30px -12px rgba(0,0,0,0.55)",
      }}
    >
      <span
        className="absolute left-[22%] top-[18%] h-[24%] w-[30%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

/** Lime ring / donut shape (matches headline pill accent). */
export function LimeRing({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="lr-grad" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#EAFFB0" />
          <stop offset="45%" stopColor="#C6F24E" />
          <stop offset="85%" stopColor="#7BA02B" />
          <stop offset="100%" stopColor="#2B3A0E" />
        </radialGradient>
      </defs>
      <path
        fill="url(#lr-grad)"
        fillRule="evenodd"
        d="M100 14 C 147 14 186 53 186 100 C 186 147 147 186 100 186 C 53 186 14 147 14 100 C 14 53 53 14 100 14 Z M100 66 C 81 66 66 81 66 100 C 66 119 81 134 100 134 C 119 134 134 119 134 100 C 134 81 119 66 100 66 Z"
      />
      <ellipse
        cx="78"
        cy="50"
        rx="22"
        ry="10"
        fill="rgba(255,255,255,0.55)"
        transform="rotate(-30 78 50)"
      />
    </svg>
  );
}

/** Fried-egg style — yellow yolk on cream white. */
export function EggShape({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="egg-white" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#F3EBD6" />
          <stop offset="100%" stopColor="#A89876" />
        </radialGradient>
        <radialGradient id="egg-yolk" cx="38%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#FFF1A8" />
          <stop offset="50%" stopColor="#FFC93A" />
          <stop offset="100%" stopColor="#A56A07" />
        </radialGradient>
      </defs>
      <path
        fill="url(#egg-white)"
        d="M40 90 C 30 60 70 28 110 38 C 150 24 188 62 178 100 C 192 130 160 168 122 162 C 96 184 50 176 38 142 C 16 122 30 96 40 90 Z"
      />
      <circle cx="108" cy="100" r="34" fill="url(#egg-yolk)" />
      <ellipse
        cx="100"
        cy="92"
        rx="12"
        ry="6"
        fill="rgba(255,255,255,0.7)"
        transform="rotate(-25 100 92)"
      />
    </svg>
  );
}

/** Stylised flame — orange / red gradient. */
export function FlameShape({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="fl-grad" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#FFE08A" />
          <stop offset="35%" stopColor="#FF9A2D" />
          <stop offset="75%" stopColor="#E63E1A" />
          <stop offset="100%" stopColor="#5E0E04" />
        </radialGradient>
      </defs>
      <path
        fill="url(#fl-grad)"
        d="M100 18 C 110 50 142 62 138 102 C 154 100 158 124 152 142 C 144 168 118 184 96 182 C 64 180 40 156 42 122 C 44 96 70 90 70 70 C 70 56 86 50 92 38 C 96 30 98 22 100 18 Z"
      />
      <path
        d="M96 90 C 112 92 122 110 116 130 C 110 148 90 152 80 138 C 70 122 78 102 96 90 Z"
        fill="rgba(255,255,255,0.35)"
      />
    </svg>
  );
}

/** Mint succulent / cactus-leaf cluster. */
export function MintLeaf({ className }: DecorProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <radialGradient id="ml-grad" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#D6FFE3" />
          <stop offset="45%" stopColor="#7FD49D" />
          <stop offset="85%" stopColor="#2F6A48" />
          <stop offset="100%" stopColor="#0F2B1C" />
        </radialGradient>
      </defs>
      <path
        fill="url(#ml-grad)"
        d="M100 18 C 130 28 152 60 148 102 C 158 100 168 116 166 138 C 172 142 178 158 168 168 C 156 178 124 178 100 168 C 76 178 44 178 32 168 C 22 158 28 142 34 138 C 32 116 42 100 52 102 C 48 60 70 28 100 18 Z"
      />
      <path
        d="M100 32 C 116 56 116 92 100 130 C 84 92 84 56 100 32 Z"
        fill="rgba(255,255,255,0.18)"
      />
    </svg>
  );
}
