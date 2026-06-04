import { Link } from "@tanstack/react-router";
import { FOOTER_NAV } from "@/data/nav";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/[0.06] bg-[#111111]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <FooterBackdrop />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(223,255,74,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%)]" />
      </div>

      <div className="container relative py-12 sm:py-16 lg:py-20">
        {/* Main grid: brand full-width on mobile, 4-col on lg */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">

          {/* Brand column */}
          <div className="sm:max-w-xs">
            <p className="text-base font-semibold tracking-tight text-white">
              Void Layer
            </p>
            <p className="mt-0.5 text-sm text-white/45">
              Designing systems, products and motion.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/55 text-pretty">
              A compact studio footer with a strong bottom wordmark, built to keep
              the page feeling finished without needing extra content.
            </p>
          </div>

          {/* Nav groups: 3 equal columns on mobile/tablet, each its own lg-grid column */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8 lg:contents">
            {Object.entries(FOOTER_NAV).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {heading}
                </h4>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative mt-10 sm:mt-14 border-t border-white/[0.06] pt-6 sm:pt-8">
          <div className="overflow-hidden">
            <h2 className="font-display text-[clamp(2rem,10vw,11rem)] font-semibold leading-none tracking-[-0.08em] text-white">
              VoidLayer
            </h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.35em] text-white/35">
              FROM VOID TO VISION.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-col gap-1.5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Void Layer. All rights reserved.</p>
            <p className="font-mono">Built with intent and a little glow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterBackdrop() {
  return (
    <svg viewBox="0 0 1440 520" className="absolute inset-x-0 bottom-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="footer-wave" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="35%" stopColor="#0E0E0E" />
          <stop offset="100%" stopColor="#090909" />
        </linearGradient>
        <linearGradient id="footer-glow" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(223,255,74,0.0)" />
          <stop offset="50%" stopColor="rgba(223,255,74,0.18)" />
          <stop offset="100%" stopColor="rgba(185,150,255,0.0)" />
        </linearGradient>
        <filter id="footer-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <rect width="1440" height="520" fill="url(#footer-wave)" />
      <path
        d="M0 330 C 160 260 250 230 390 280 C 510 322 650 420 790 396 C 940 370 1000 250 1130 246 C 1270 242 1360 300 1440 278 L 1440 520 L 0 520 Z"
        fill="#1A1A1A"
        opacity="0.92"
      />
      <path
        d="M0 360 C 180 300 270 280 430 330 C 590 380 680 450 830 420 C 960 394 1040 300 1180 286 C 1290 274 1365 320 1440 344"
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="2"
        filter="url(#footer-soft)"
      />
      <path
        d="M0 392 C 160 350 320 370 460 418 C 610 470 740 480 870 440 C 1010 398 1110 332 1240 330 C 1335 328 1395 350 1440 362"
        fill="none"
        stroke="url(#footer-glow)"
        strokeWidth="3"
      />
    </svg>
  );
}
