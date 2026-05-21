import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FOOTER_NAV } from "@/data/nav";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 64 64">
                <rect width="64" height="64" rx="14" fill="#000000" stroke="rgba(255,255,255,0.1)" />
                <path
                  d="M14 16 L32 48 L50 16 Z"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <circle cx="32" cy="28" r="3" fill="#FFFFFF" />
              </svg>
              <span className="text-base font-semibold">Void Layer</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Premium IT services & software solutions. We design, engineer and
              operate digital systems for ambitious companies.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                <Twitter className="size-4" />
              </SocialLink>
              <SocialLink href="https://github.com" aria-label="GitHub">
                <Github className="size-4" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
            </div>
          </div>

          {Object.entries(FOOTER_NAV).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Void Layer. All rights reserved.</p>
          <p className="font-mono">
            Engineered with intent · v0.1
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  "aria-label": string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 hover:text-white hover:border-white/20 transition-colors"
      {...rest}
    >
      {children}
    </a>
  );
}
