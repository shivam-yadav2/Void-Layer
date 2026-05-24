import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoLoop, type LogoItem } from "@/components/ui/LogoLoop";
import { CTAFooter } from "@/sections/home/CTAFooter";
import { LargeServiceCard, MiniServiceCard } from "@/sections/home/ServicesShowcase";
import { SERVICES } from "@/data/services";
import { fadeUp, stagger } from "@/animations/variants";
import {
  siBootstrap,
  siCss,
  siFigma,
  siFirebase,
  siFlutter,
  siFramer,
  siGsap,
  siHtml5,
  siJavascript,
  siKotlin,
  siLaravel,
  siMysql,
  siPhp,
  siPostgresql,
  siReact,
  siSpring,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const TONE_CYCLE: Array<"violet" | "paper" | "dark"> = ["violet", "paper", "dark"];

type SimpleIcon = { title: string; hex: string; path: string; viewBox?: string };

const TECH_LOGOS: LogoItem[] = [
  createTechLogo(siReact, "React JS", "https://react.dev"),
  createTextLogo("NextJs", "https://nextjs.org/", "#000000"),
  createTextLogo("Nest", "https://nestjs.com", "#C40909"),
  createTechLogo(siHtml5, "HTML", "https://developer.mozilla.org/docs/Web/HTML"),
  createTechLogo(siCss, "CSS", "https://developer.mozilla.org/docs/Web/CSS"),
  createTechLogo(siTailwindcss, "Tailwind", "https://tailwindcss.com"),
  createTechLogo(siJavascript, "JavaScript", "https://developer.mozilla.org/docs/Web/JavaScript"),
  createTechLogo(siTypescript, "TypeScript", "https://www.typescriptlang.org"),
  createTechLogo(siGsap, "GSAP", "https://gsap.com"),
  createTechLogo(siFlutter, "Flutter", "https://flutter.dev"),
  createTechLogo(siKotlin, "Kotlin", "https://kotlinlang.org"),
  createTechLogo(siPhp, "PHP", "https://www.php.net"),
  createTechLogo(siLaravel, "Laravel", "https://laravel.com"),
  createTechLogo(siSpring, "Spring", "https://spring.io"),
  createTechLogo(siMysql, "MySQL", "https://www.mysql.com"),
  createTechLogo(siPostgresql, "PostgreSQL", "https://www.postgresql.org"),
  createTextLogo("AWS", "https://aws.amazon.com", "#FF9900"),
  createTechLogo(siFigma, "Figma", "https://www.figma.com"),
  createTechLogo(siFirebase, "Firebase", "https://firebase.google.com"),
  createTextLogo("Java", "https://www.java.com/en/", "#E76F00"),
  createTechLogo(siFramer, "Framer Motion", "https://www.framer.com/motion"),
  createTechLogo(siBootstrap, "Bootstrap", "https://getbootstrap.com"),
];

export function ServicesPage() {
  const topServices = SERVICES.slice(0, 2);
  const restServices = SERVICES.slice(3,6);
  const otherServices = SERVICES.slice(7,9);
  return (
    <>
      <SEO
        title="Services"
        path="/services"
        description="Engineering, design, AI, cloud, mobile and platform services for ambitious teams."
      />

      <PageHeader
        eyebrow="Services"
        title="Everything you need to build, ship and scale."
        subtitle="Pick a single discipline or a full cross-functional pod. Either way, you get senior people."
      />

      <section className="section-tight">
        <div className="container">
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 lg:grid-cols-12"
          >
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <LargeServiceCard service={topServices[0]} mode="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <LargeServiceCard service={topServices[1]} mode="lime" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {restServices.map((service, index) => (
              
              <motion.div variants={fadeUp} key={service.slug}>
                <MiniServiceCard service={service} tone={TONE_CYCLE[index % TONE_CYCLE.length]} />
              </motion.div>
           
            ))}
          </motion.div>

             <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid mt-6 gap-4 lg:grid-cols-12"
          >
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <LargeServiceCard service={otherServices[0]} mode="dark" />
            </motion.div>
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <LargeServiceCard service={otherServices[1]} mode="lime" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <SectionHeading
            eyebrow="Tools & Technologies"
            title="Everything we build with, kept in motion."
            
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-10  p-6"
          >
            <div className="relative h-[150px] overflow-hidden">
              <LogoLoop
                logos={TECH_LOGOS}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={44}
                hoverSpeed={24}
                scaleOnHover
                fadeOut
                ariaLabel="Tools and technologies"
                renderItem={(item, key) => {
                  const label = "title" in item
                    ? item.title
                    : ("alt" in item ? item.alt ?? "" : "");
                  const content = "node" in item ? (
                    item.node
                  ) : (
                    <img
                      className="h-[var(--logoloop-logoHeight)] w-auto block object-contain"
                      src={item.src}
                      srcSet={item.srcSet}
                      sizes={item.sizes}
                      width={item.width}
                      height={item.height}
                      alt={item.alt ?? ""}
                      title={item.title}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  );

                  return (
                    <div key={key} className="group/item flex flex-col items-center gap-2">
                      <span className="transition-transform duration-300 ease-out group-hover/item:scale-125">
                        {content}
                      </span>
                      {label && (
                        <span className="text-[11px] uppercase tracking-[0.24em] text-white/60">
                          {label}
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}

function createTechLogo(icon: SimpleIcon, label: string, href: string): LogoItem {
  return {
    node: (
      <span className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-2.5 py-2 ring-1 ring-white/10 shadow-[0_16px_34px_rgba(0,0,0,0.35)]">
        <svg
          role="img"
          aria-label={label}
          viewBox={icon.viewBox ?? "0 0 24 24"}
          className="h-[1em] w-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)]"
          style={{ fill: `#${icon.hex}` }}
        >
          <title>{label}</title>
          <path d={icon.path} />
        </svg>
      </span>
    ),
    title: label,
    ariaLabel: label,
    href,
  };
}

function createTextLogo(text: string, href: string, color: string, label?: string): LogoItem {
  const accessibleLabel = label ?? text;
  return {
    node: (
      <span className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10 shadow-[0_16px_34px_rgba(0,0,0,0.35)]">
        <svg
          role="img"
          aria-label={accessibleLabel}
          viewBox="0 0 120 60"
          className="h-[1em] w-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.45)]"
        >
          <title>{accessibleLabel}</title>
          <rect x="2" y="2" width="116" height="56" rx="14" fill="rgba(255,255,255,0.04)" />
          <text
            x="60"
            y="38"
            textAnchor="middle"
            fontSize="28"
            fontWeight="700"
            fill={color}
            fontFamily="Space Grotesk, ui-sans-serif, system-ui, sans-serif"
            letterSpacing="1.5"
          >
            {text}
          </text>
        </svg>
      </span>
    ),
    title: accessibleLabel,
    ariaLabel: accessibleLabel,
    href,
  };
}
