import { motion } from "framer-motion";
import { ArrowUpRight, Grid2X2, LaptopMinimal, Smartphone, TabletSmartphone } from "lucide-react";
import { fadeUp, stagger } from "@/animations/variants";
import { cn } from "@/utils/cn";
import { ChromeSphere, PurpleBlob, SoftBlob } from "@/components/ui/Shapes3D";

const DEVICES = [
  { label: "Smartphone", icon: Smartphone },
  { label: "Tablet", icon: TabletSmartphone },
  { label: "Laptop", icon: LaptopMinimal },
  { label: "Desktop", icon: Grid2X2 },
] as const;

export function ResponsiveShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-18 sm:py-22 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-20" />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise-overlay opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-12%] top-[8%] h-96 w-96 rounded-full bg-[#DFFF4A]/10 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] bottom-[-12%] h-[30rem] w-[30rem] rounded-full bg-[#B996FF]/10 blur-[160px]"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger(0.08)}
            className="lg:col-span-5"
          >
            <motion.span variants={fadeUp} className="chip inline-flex">
              <span className="size-1.5 rounded-full bg-[#DFFF4A]" />
              Responsive by default
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 max-w-xl text-display-lg font-semibold tracking-tight text-balance text-white"
            >
              Fully responsive and pixel-perfect across every screen.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg text-white/55 text-pretty"
            >
              Void Layer designs the layout, spacing and motion systems so the same
              product feels intentional on mobile, tablet, laptop and desktop.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {DEVICES.map((device, index) => {
                const Icon = device.icon;
                return (
                  <div
                    key={device.label}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-2xl border px-4 py-4 text-center",
                      index === 0
                        ? "border-white/18 bg-white/[0.04] text-white"
                        : "border-white/10 bg-white/[0.02] text-white/55",
                    )}
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                      <Icon className="size-5 text-[#DFFF4A]" strokeWidth={1.6} />
                    </span>
                    <span className="text-[11px] font-medium tracking-wide">{device.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Explore our build process
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger(0.08)}
            className="relative lg:col-span-7"
          >
            <div className="relative min-h-[36rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111111] p-5 shadow-[0_30px_100px_-45px_rgba(0,0,0,0.9)] sm:min-h-[42rem] sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(223,255,74,0.15),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(185,150,255,0.16),transparent_28%),radial-gradient(circle_at_60%_82%,rgba(255,122,180,0.12),transparent_35%)]" />
              <div className="absolute inset-0 grid-bg opacity-25" />

              <div className="relative z-10 grid h-full grid-rows-[auto_1fr] gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Responsive preview
                    </p>
                    <p className="mt-2 text-sm text-white/55">
                      Layouts that hold up when the viewport changes.
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/60">
                    mobile to desktop
                  </span>
                </div>

                <div className="relative flex items-end justify-end overflow-hidden rounded-[2rem] border border-white/8 bg-[#0C0C0C] p-6 sm:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.05),transparent_45%)]" />

                  <div className="relative z-10 flex w-full max-w-[34rem] items-end justify-between gap-4 sm:gap-6">
                    <motion.div
                      variants={fadeUp}
                      className="relative hidden h-[30rem] w-[15rem] shrink-0 rounded-[2rem] border-[10px] border-[#1E1E1E] bg-[#050505] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.95)] md:block"
                    >
                      <div className="absolute inset-x-0 top-0 flex items-center justify-center py-3">
                        <div className="h-1.5 w-12 rounded-full bg-white/10" />
                      </div>
                      <DeviceScreen tone="dark" />
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      className="relative z-20 h-[30rem] w-[15rem] shrink-0 -rotate-[18deg] rounded-[2rem] border-[10px] border-[#F0EDE8] bg-[#101010] shadow-[0_30px_70px_-28px_rgba(0,0,0,0.95)]"
                    >
                      <div className="absolute inset-x-0 top-0 flex items-center justify-center py-3">
                        <div className="h-1.5 w-12 rounded-full bg-black/15" />
                      </div>
                      <DeviceScreen tone="light" />
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      className="absolute bottom-6 right-6 hidden w-[13rem] rounded-[1.75rem] border-[10px] border-[#171717] bg-[#090909] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] sm:block"
                      style={{ height: "22rem" }}
                    >
                      <div className="absolute inset-x-0 top-0 flex items-center justify-center py-3">
                        <div className="h-1.5 w-12 rounded-full bg-white/10" />
                      </div>
                      <DeviceScreen tone="dark" secondary />
                    </motion.div>

                    <div className="absolute left-0 top-10 hidden max-w-[14rem] rounded-[1.5rem] border border-white/10 bg-black/40 p-4 backdrop-blur-md lg:block">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        Responsive rules
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        Spacing, typographic scale and layout priority shift per breakpoint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-8 top-8 hidden sm:block">
                <SoftBlob className="h-24 w-24 opacity-40" />
              </div>
              <div className="absolute right-8 top-12 hidden sm:block">
                <ChromeSphere className="h-20 w-20 opacity-70" />
              </div>
              <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
                <PurpleBlob className="h-24 w-24 opacity-45" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DeviceScreen({ tone, secondary }: { tone: "light" | "dark"; secondary?: boolean }) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[1.45rem]",
        light ? "bg-[#F8F4EE] text-black" : "bg-[#101010] text-white",
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          light
            ? "bg-[radial-gradient(circle_at_75%_20%,rgba(255,201,61,0.55),transparent_20%),radial-gradient(circle_at_50%_50%,rgba(164,133,255,0.18),transparent_40%),linear-gradient(180deg,#F7F2EA,#EFE8DC)]"
            : "bg-[radial-gradient(circle_at_70%_18%,rgba(223,255,74,0.1),transparent_18%),linear-gradient(180deg,#141414,#0A0A0A)]",
        )}
      />

      <div className="relative z-10 flex h-full flex-col p-4">
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em] opacity-70">
          <span>rayo</span>
          <span className="rounded-full border border-current/10 px-2 py-1">Say Hello</span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="max-w-[72%]">
            <p className={cn("font-display text-2xl font-semibold leading-none", secondary && "text-[1.35rem]")}>Design, tech and some magic</p>
            <p className={cn("mt-2 text-[10px] leading-4 opacity-75", light ? "text-black/70" : "text-white/65")}>
              Pixel-tight layouts with a clear hierarchy, breathable spacing and lively color.
            </p>
          </div>
          <div className="size-8 rounded-full border border-current/10 bg-current/5" />
        </div>

        <div className="mt-auto grid grid-cols-2 gap-2">
          <div className={cn("rounded-[1rem] p-3", light ? "bg-black/5" : "bg-white/[0.04]") }>
            <p className="text-[9px] uppercase tracking-[0.22em] opacity-60">Responsive</p>
            <p className="mt-2 text-xs font-medium">Mobile-first spacing</p>
          </div>
          <div className={cn("rounded-[1rem] p-3", light ? "bg-black/5" : "bg-white/[0.04]") }>
            <p className="text-[9px] uppercase tracking-[0.22em] opacity-60">Motion</p>
            <p className="mt-2 text-xs font-medium">Soft, intentional transitions</p>
          </div>
          <div className={cn("rounded-[1rem] p-3 col-span-2", light ? "bg-black/5" : "bg-white/[0.04]") }>
            <div className="flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.22em] opacity-60">Capability</p>
              <span className={cn("text-[9px]", light ? "text-black/55" : "text-white/50")}>3D SVG + UI</span>
            </div>
            <div className="mt-3 flex items-end gap-2">
              <div className="h-12 flex-1 rounded-xl bg-gradient-to-tr from-[#DFFF4A] via-[#FF7DBA] to-[#8D6BFF]" />
              <div className="h-16 flex-1 rounded-xl bg-gradient-to-tr from-[#111111] via-[#2A2A2A] to-[#727272]" />
            </div>
          </div>
        </div>

        {secondary && (
          <div className="absolute right-3 top-20 hidden rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-white/55 md:block">
            More capabilities
          </div>
        )}
      </div>
    </div>
  );
}