import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";
import { cn } from "@/utils/cn";
import { fadeUp, stagger } from "@/animations/variants";
import { ChromeSphere, Flame, GeoCluster, PurpleBlob, SoftBlob } from "@/components/ui/Shapes3D";

const FEATURE_TAGS = ["Animations", "Plugins", "Services"];

export function ServicesShowcase() {
  const topServices = SERVICES.slice(0, 2);
  const bottomServices = SERVICES.slice(2, 6);

  return (
    <section className="relative isolate overflow-hidden bg-black py-18 sm:py-22 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-20" />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise-overlay opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-12%] top-[-8%] h-[30rem] w-[30rem] rounded-full bg-[#DFFF4A]/10 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[22%] h-[28rem] w-[28rem] rounded-full bg-[#B996FF]/10 blur-[160px]"
      />

      <div className="container relative">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 lg:grid-cols-12 lg:gap-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:pt-4">
            <span className="chip inline-flex">
              <Sparkles className="size-3.5 text-[#DFFF4A]" />
              What we build
            </span>

            <h2 className="mt-6 max-w-xl text-display-lg font-semibold leading-[0.95] tracking-tight text-balance text-white sm:text-[3.2rem] lg:text-[4.1rem]">
              Top-notch features,
              <br />
              built for you
            </h2>

            <div className="mt-7 flex flex-wrap gap-2">
              {FEATURE_TAGS.map((tag) => (
                <span key={tag} className="chip text-[11px]">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-lg text-sm leading-6 text-white/55 sm:text-base">
              Void Layer packages product design, engineering and motion into one
              system. Each service card is an entry point into the way we ship.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/38 sm:text-[15px]">
              It’s flexible, future-proof and easy to customize around any brand or
              launch shape.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 lg:pt-2">
            <HeroPanel services={topServices} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-4 lg:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <LargeServiceCard service={topServices[0]} mode="dark" />
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <LargeServiceCard service={topServices[1]} mode="lime" />
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-4">
            <MiniServiceCard service={bottomServices[0]} tone="violet" />
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <MiniServiceCard service={bottomServices[1]} tone="paper" />
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <MiniServiceCard service={bottomServices[2]} tone="dark" />
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <MiniServiceCard service={SERVICES[6]} tone="violet" compact />
          </motion.div>
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <MiniServiceCard service={SERVICES[7]} tone="paper" compact={false} wide />
          </motion.div>
        </motion.div>

        <p className="mt-7 text-center text-sm text-white/40">
          + and much more +
        </p>
      </div>
    </section>
  );
}

function HeroPanel({ services }: { services: (typeof SERVICES)[number][] }) {
  const [primaryService, secondaryService] = services as [
    (typeof SERVICES)[number],
    (typeof SERVICES)[number],
  ];
  return (
    <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-5 shadow-[0_30px_100px_-45px_rgba(0,0,0,0.95)] sm:min-h-[30rem] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(223,255,74,0.14),transparent_24%),radial-gradient(circle_at_68%_20%,rgba(185,150,255,0.14),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(255,125,186,0.1),transparent_28%)]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/45">
            <span className="size-2 rounded-full bg-white/20" />
            Capabilities
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-white/55">
            Our services
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
            <p className="text-lg font-semibold text-white sm:text-xl">Dynamic &amp; stylish design</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/55">
              Modern, eye-catching layouts crafted to make your brand stand out and
              keep visitors engaged.
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {primaryService.technologies.slice(0, 3).map((tag) => (
                <span key={tag} className="chip text-[10px] py-0.5">
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative mt-8 aspect-[1.4] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(135deg,#181818,#2d2840_55%,#0f0f10)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_25%,rgba(223,255,74,0.22),transparent_18%),radial-gradient(circle_at_20%_70%,rgba(185,150,255,0.14),transparent_22%)]" />
              <SoftBlob className="absolute left-[-8%] top-[10%] h-24 w-24 opacity-70" />
              <ChromeSphere className="absolute right-[8%] top-[8%] h-16 w-16" />
              <Flame className="absolute bottom-[-8%] right-[10%] h-28 w-20" />

              <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {secondaryService.title}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/50">
                  {secondaryService.tagline}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#DFFF4A] p-5 text-black">
            <div className="absolute right-[-1.25rem] top-[-1.25rem]">
              <GeoCluster className="h-24 w-24 opacity-80" />
            </div>
            <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[9px] uppercase tracking-[0.24em]">
              Interactive
            </div>

            <div className="mt-12">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">Dark / light mode</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em]">
                  Theme Choice
                </span>
                <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em]">
                  Responsive
                </span>
              </div>
              <p className="mt-5 max-w-[18rem] text-sm leading-6 text-black/70">
                Switch effortlessly between light and dark modes for a user-friendly
                experience.
              </p>
            </div>

            <div className="mt-8 flex items-end justify-end gap-3 pr-2">
              <CloudIcon className="h-20 w-20" />
              <SunCloudIcon className="h-24 w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LargeServiceCard({
  service,
  mode,
}: {
  service: (typeof SERVICES)[number];
  mode: "dark" | "lime";
}) {
  const Icon = service.icon;
  const dark = mode === "dark";
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-[1.75rem] p-5 sm:p-6",
        dark ? "bg-[#191919] text-white" : "bg-[#DFFF4A] text-black",
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          dark
            ? "bg-[radial-gradient(circle_at_70%_24%,rgba(185,150,255,0.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_56%)]"
            : "bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.4),transparent_22%),linear-gradient(135deg,rgba(0,0,0,0.03),transparent_56%)]",
        )}
      />
      <div className="relative z-10 grid h-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col">
          <h3 className="max-w-xs text-[2.2rem] font-semibold leading-[0.95] tracking-tight text-balance sm:text-[2.7rem]">
            {service.title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.technologies.slice(0, 3).map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.22em]",
                  dark ? "border-white/18 bg-white/[0.03] text-white/70" : "border-black/10 bg-black/[0.04] text-black/70",
                )}
              >
                {item}
              </span>
            ))}
          </div>

          <p className={cn("mt-4 max-w-md text-sm leading-6", dark ? "text-white/55" : "text-black/65")}>
            {service.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.outcomes.slice(0, 3).map((outcome) => (
              <span
                key={outcome}
                className={cn(
                  "rounded-full px-3 py-1 text-[10px] font-medium tracking-tight",
                  dark ? "bg-white/[0.04] text-white/70" : "bg-black/[0.06] text-black/70",
                )}
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[16rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0E0E0E]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.09),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_68%)]" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          <IconArt icon={Icon} accent={dark ? "lime" : "dark"} />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">{service.tagline}</p>
            <p className="mt-1 text-sm text-white/80">{service.slug.replace(/-/g, " ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniServiceCard({
  service,
  tone,
  compact = false,
  wide = false,
}: {
  service: (typeof SERVICES)[number];
  tone: "violet" | "paper" | "dark";
  compact?: boolean;
  wide?: boolean;
}) {
  const Icon = service.icon;
  const styles =
    tone === "violet"
      ? "bg-[#A693F1] text-white"
      : tone === "paper"
        ? "bg-[#F5F2EE] text-black"
        : "bg-[#171717] text-white";

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-[1.5rem] p-5",
        styles,
        wide ? "min-h-[18rem]" : compact ? "min-h-[15rem]" : "min-h-[17rem]",
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="max-w-[10rem] text-2xl font-semibold tracking-tight leading-[0.95] text-balance">
              {service.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {service.technologies.slice(0, 2).map((item) => (
                <span
                  key={item}
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.22em]",
                    tone === "paper"
                      ? "border-black/10 bg-black/[0.02] text-black/65"
                      : tone === "violet"
                        ? "border-white/15 bg-white/[0.06] text-white/75"
                        : "border-white/12 bg-white/[0.04] text-white/65",
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <ArrowUpRight className={cn("size-4", tone === "paper" ? "text-black/45" : "text-white/45")} />
        </div>

        <p className={cn("mt-4 text-sm leading-6", tone === "paper" ? "text-black/65" : "text-current/70")}>
          {service.tagline}
        </p>

        <div className="relative mt-auto flex min-h-[8rem] items-end justify-end pt-4">
          <IconArt icon={Icon} accent={tone === "paper" ? "dark" : tone === "violet" ? "lime" : "light"} compact />
        </div>
      </div>
    </div>
  );
}

function IconArt({
  icon: Icon,
  accent,
  compact,
}: {
  icon: (typeof SERVICES)[number]["icon"];
  accent: "lime" | "dark" | "light";
  compact?: boolean;
}) {
  return (
    <div className={cn("relative", compact ? "h-24 w-24" : "h-36 w-36 sm:h-44 sm:w-44")}>
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-2xl",
          accent === "lime"
            ? "bg-[#DFFF4A]/25"
            : accent === "dark"
              ? "bg-black/25"
              : "bg-white/20",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-[2rem] border",
          accent === "light"
            ? "border-white/10 bg-white/[0.04]"
            : accent === "lime"
              ? "border-black/10 bg-[#DFFF4A]/8"
              : "border-white/10 bg-white/[0.03]",
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className={cn("size-12 sm:size-16", accent === "dark" ? "text-white" : "text-current")} strokeWidth={1.4} />
      </div>
      <ChromeSphere className="absolute right-[-8%] top-[-8%] h-10 w-10 opacity-70" />
    </div>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden>
      <defs>
        <linearGradient id="cloud-a" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFE36A" />
          <stop offset="100%" stopColor="#FF8D00" />
        </linearGradient>
      </defs>
      <circle cx="34" cy="30" r="14" fill="url(#cloud-a)" />
      <circle cx="49" cy="25" r="16" fill="#FFF4B7" />
      <circle cx="64" cy="31" r="12" fill="#FFD84A" />
      <circle cx="42" cy="42" r="18" fill="#FFF5D2" />
      <circle cx="58" cy="42" r="18" fill="#EAEAF5" />
    </svg>
  );
}

function SunCloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle cx="84" cy="28" r="16" fill="#FFC93A" />
      <circle cx="35" cy="67" r="22" fill="#F5F7FF" />
      <circle cx="58" cy="56" r="28" fill="#EEF1F8" />
      <circle cx="80" cy="64" r="22" fill="#C9D0F0" />
      <circle cx="53" cy="72" r="28" fill="#FFFFFF" />
    </svg>
  );
}
