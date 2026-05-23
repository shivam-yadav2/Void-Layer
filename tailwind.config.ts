import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#070707",
          800: "#0C0C0C",
          700: "#111111",
          600: "#171717",
          500: "#1F1F1F",
          400: "#2A2A2A",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          strong: "rgba(255,255,255,0.07)",
          border: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Instrument Serif",
          "Times New Roman",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.045em" }],
        "display-xl": ["clamp(2.5rem, 6.5vw, 6rem)", { lineHeight: "1.0", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2rem, 4.5vw, 4.25rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
      },
      backgroundImage: {
        "shine":
          "linear-gradient(120deg, rgba(255,255,255,0.45) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.45) 70%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(255,255,255,0.45)",
        "glow-soft": "0 0 60px -30px rgba(255,255,255,0.35)",
        "inset-glow": "inset 0 1px 0 rgba(255,255,255,0.12), 0 1px 0 rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-14px,0) rotate(3deg)" },
        },
        "shine": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "beam": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "spotlight": {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 180s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "shine": "shine 4s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "beam": "beam 3s linear infinite",
        "spotlight": "spotlight 2s ease 0.2s 1 forwards",
      },
    },
  },
  plugins: [],
};

export default config;
