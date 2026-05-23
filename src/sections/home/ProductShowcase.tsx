import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/utils/cn";
import { fadeUp, stagger } from "@/animations/variants";
import {
  Cactus,
  ChromeSphere,
  CyanCrystal,
  Donut,
  Egg,
  Flame,
  GeoCluster,
  PurpleBlob,
  SoftBlob,
} from "@/components/ui/Shapes3D";

type DecorKind =
  | "vault"
  | "plotline"
  | "atrium"
  | "salonix"
  | "storefront"
  | "bazaar";

type PanelTone = "lime" | "purple" | "pink" | "cyan" | "orange" | "ink";

interface Panel {
  span: string;
  productIndex: number;
  number: string;
  eyebrow: string;
  previewLabel: string;
  tone: PanelTone;
  decor: DecorKind;
  featured?: boolean;
}

const PANELS: Panel[] = [
  {
    span: "lg:col-span-7",
    productIndex: 0,
    number: "01",
    eyebrow: "Live product",
    previewLabel: "Screenshot slot for the software page",
    tone: "lime",
    decor: "vault",
    featured: true,
  },
  {
    span: "lg:col-span-5",
    productIndex: 1,
    number: "02",
    eyebrow: "Operations app",
    previewLabel: "Add the future web app image here",
    tone: "purple",
    decor: "plotline",
    featured: true,
  },
  {
    span: "lg:col-span-4",
    productIndex: 2,
    number: "03",
    eyebrow: "HR system",
    previewLabel: "Wide enough for a dashboard screenshot",
    tone: "orange",
    decor: "atrium",
  },
  {
    span: "lg:col-span-4",
    productIndex: 3,
    number: "04",
    eyebrow: "Service software",
    previewLabel: "Perfect for a product UI render",
    tone: "pink",
    decor: "salonix",
  },
  {
    span: "lg:col-span-4",
    productIndex: 4,
    number: "05",
    eyebrow: "Commerce layer",
    previewLabel: "Future software page goes in this frame",
    tone: "cyan",
    decor: "storefront",
  },
  {
    span: "lg:col-span-8",
    productIndex: 5,
    number: "06",
    eyebrow: "Marketplace stack",
    previewLabel: "Long-form page preview with room to breathe",
    tone: "lime",
    decor: "bazaar",
    featured: true,
  },
  {
    span: "lg:col-span-4",
    productIndex: 0,
    number: "07",
    eyebrow: "More on the way",
    previewLabel: "This tile can become a new product later",
    tone: "ink",
    decor: "vault",
  },
];

const TONE_CLASSES: Record<PanelTone, { card: string; badge: string; frame: string; text: string }> = {
  lime: {
    card: "bg-[#DFFF4A] text-black",
    badge: "bg-black text-[#DFFF4A]",
    frame: "border-black/10 bg-[#060606]",
    text: "text-black/70",
  },
  purple: {
    card: "bg-[#BEA7FF] text-black",
    badge: "bg-black text-[#BEA7FF]",
    frame: "border-black/10 bg-[#090412]",
    text: "text-black/70",
  },
  pink: {
    card: "bg-[#FFB0D3] text-black",
    badge: "bg-black text-[#FFB0D3]",
    frame: "border-black/10 bg-[#0B0507]",
    text: "text-black/70",
  },
  cyan: {
    card: "bg-[#88F5FF] text-black",
    badge: "bg-black text-[#88F5FF]",
    frame: "border-black/10 bg-[#031013]",
    text: "text-black/70",
  },
  orange: {
    card: "bg-[#FFC46B] text-black",
    badge: "bg-black text-[#FFC46B]",
    frame: "border-black/10 bg-[#100704]",
    text: "text-black/70",
  },
  ink: {
    card: "border border-white/10 bg-white/[0.03] text-white",
    badge: "bg-[#DFFF4A] text-black",
    frame: "border-white/10 bg-[#090909]",
    text: "text-white/55",
  },
};

export function ProductShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-18 sm:py-22 lg:py-26">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-bg opacity-25" />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise-overlay opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-[-8%] h-80 w-80 rounded-full bg-[#DFFF4A]/18 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[16%] h-72 w-72 rounded-full bg-[#8D6BFF]/18 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-14%] left-[18%] h-72 w-72 rounded-full bg-[#FF7DBA]/12 blur-[140px]"
      />

      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger(0.08)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="chip inline-flex">
            <Sparkles className="size-3.5 text-[#DFFF4A]" />
            Product section
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-display-lg font-semibold tracking-tight text-balance text-white"
          >
            A vibrant shelf for software pages, launches and future screenshots.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-white/55 text-pretty">
            This block is ready for product imagery later. For now, it uses bold color,
            3D SVG shapes and rich placeholder frames so the section still feels complete.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap justify-center gap-2">
            <span className="chip bg-[#DFFF4A] text-black">Future screenshot slots</span>
            <span className="chip">3D SVG ornaments</span>
            <span className="chip">Bright launch cards</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger(0.06)}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6"
        >
          {PANELS.map((panel) => {
            const product = PRODUCTS[panel.productIndex];
            const tone = TONE_CLASSES[panel.tone];
            const featured = panel.featured ?? false;

            return (
              <motion.div key={panel.number} variants={fadeUp} className={panel.span}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-3 transition-transform duration-300 hover:-translate-y-1",
                    tone.card,
                  )}
                >
                  <div className="flex items-start justify-between gap-3 px-2 pt-2">
                    <div>
                      <p
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-[0.34em]",
                          featured ? "text-black/65" : tone.text,
                        )}
                      >
                        {panel.eyebrow}
                      </p>
                      <h3
                        className={cn(
                          "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
                          featured ? "text-black" : "text-current",
                        )}
                      >
                        {product.name}
                      </h3>
                      <p className={cn("mt-1 text-sm", featured ? "text-black/65" : tone.text)}>
                        {product.category}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.28em]",
                          tone.badge,
                        )}
                      >
                        {product.status === "live" ? "Live" : "Soon"}
                      </span>
                      <span
                        className={cn(
                          "font-mono text-sm tracking-tight",
                          featured ? "text-black/70" : "text-[#DFFF4A]",
                        )}
                      >
                        /{panel.number}
                      </span>
                    </div>
                  </div>

                  <p className={cn("mt-5 max-w-xl text-sm sm:text-base", featured ? "text-black/75" : tone.text)}>
                    {product.tagline}
                  </p>

                  <div
                    className={cn(
                      "relative mt-6 overflow-hidden rounded-[1.6rem] border p-4 sm:p-5",
                      tone.frame,
                    )}
                    style={{
                      boxShadow: featured
                        ? "inset 0 1px 0 rgba(255,255,255,0.15), 0 24px 60px -30px rgba(0,0,0,0.5)"
                        : "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 60px -30px rgba(0,0,0,0.65)",
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.1),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_65%)]" />
                    <div className="absolute inset-0 grid-bg opacity-20" />

                    <div className="relative z-10 flex items-center gap-2 border-b border-white/10 pb-3 text-[10px] uppercase tracking-[0.32em] text-white/45">
                      <span className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-white/20" />
                        <span className="size-2 rounded-full bg-white/20" />
                        <span className="size-2 rounded-full bg-white/20" />
                      </span>
                      <span className="hidden truncate sm:inline">voidlayer.com/products</span>
                      <span className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] tracking-[0.24em] text-white/55">
                        screenshot slot
                      </span>
                    </div>

                    <div className="relative z-10 min-h-[15rem] overflow-hidden pt-4 sm:min-h-[17rem]">
                      <ProductArt decor={panel.decor} />

                      <div className="absolute left-4 top-4 max-w-[58%] rounded-2xl border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md sm:px-4">
                        <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
                          Placeholder for software image
                        </p>
                        <p className="mt-1 text-sm text-white/80">
                          Drop the product page capture here later.
                        </p>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                        <p className="max-w-xs text-xs text-white/55 text-pretty">
                          {panel.previewLabel}
                        </p>
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                          <span className="size-2 rounded-full bg-[#DFFF4A]" />
                          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">
                            Ready for art direction
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "mt-4 flex flex-wrap items-center justify-between gap-3 px-2 pb-2",
                      featured ? "text-black" : "text-white",
                    )}
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {product.features.slice(0, featured ? 4 : 3).map((feature) => (
                        <span
                          key={feature}
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium tracking-tight",
                            featured
                              ? "bg-black/10 text-black/75"
                              : "border border-white/10 bg-white/[0.04] text-white/70",
                          )}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/products"
                      className={cn(
                        "inline-flex items-center gap-1 text-xs font-semibold transition-colors",
                        featured ? "text-black/75 hover:text-black" : "text-white/65 hover:text-white",
                      )}
                    >
                      Open product
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductArt({ decor }: { decor: DecorKind }) {
  switch (decor) {
    case "vault":
      return (
        <>
          <SoftBlob className="absolute left-[-2%] top-[8%] h-[74%] w-[42%] opacity-95" />
          <ChromeSphere className="absolute right-[8%] top-[10%] h-24 w-24 sm:h-28 sm:w-28" />
          <Flame className="absolute right-[28%] bottom-[2%] h-24 w-20 sm:h-32 sm:w-28" />
        </>
      );
    case "plotline":
      return (
        <>
          <GeoCluster className="absolute left-[8%] top-[14%] h-[68%] w-[54%] opacity-95" />
          <Donut className="absolute right-[10%] top-[18%] h-28 w-28 sm:h-32 sm:w-32" />
          <ChromeSphere className="absolute left-[42%] bottom-[10%] h-16 w-16" />
        </>
      );
    case "atrium":
      return (
        <>
          <PurpleBlob className="absolute left-[6%] top-[12%] h-[76%] w-[40%]" />
          <Egg className="absolute right-[22%] top-[20%] h-28 w-28 sm:h-32 sm:w-32" />
          <Cactus className="absolute right-[4%] bottom-[8%] h-32 w-28 sm:h-40 sm:w-32" />
        </>
      );
    case "salonix":
      return (
        <>
          <Flame className="absolute left-[6%] top-[14%] h-[72%] w-[36%]" />
          <CyanCrystal className="absolute right-[8%] top-[16%] h-[66%] w-[36%]" />
          <ChromeSphere className="absolute left-[42%] bottom-[10%] h-16 w-16" />
        </>
      );
    case "storefront":
      return (
        <>
          <CyanCrystal className="absolute left-[10%] top-[16%] h-[70%] w-[44%]" />
          <Donut className="absolute right-[8%] bottom-[10%] h-28 w-28 sm:h-32 sm:w-32" />
          <ChromeSphere className="absolute left-[44%] bottom-[12%] h-14 w-14" />
        </>
      );
    case "bazaar":
      return (
        <>
          <GeoCluster className="absolute left-[6%] top-[16%] h-[72%] w-[42%]" />
          <PurpleBlob className="absolute right-[10%] top-[12%] h-[76%] w-[28%]" />
          <SoftBlob className="absolute left-[42%] bottom-[4%] h-28 w-28" />
        </>
      );
  }
}