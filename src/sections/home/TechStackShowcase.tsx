import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/data/techStack";
import { fadeUp, stagger } from "@/animations/variants";
import DomeGallery from "@/components/ui/DomeGallery";
import {
  siAuth0,
  siClerk,
  siApachekafka,
  siFramer,
  siGo,
  siGraphql,
  siGooglecloud,
  siGsap,
  siKubernetes,
  siNextdotjs,
  siNodedotjs,
  siOpentelemetry,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRust,
  siStripe,
  siTailwindcss,
  siTerraform,
  siTanstack,
  siTrpc,
  siTypescript,
} from "simple-icons";

type SimpleIcon = { title: string; hex: string; path: string };

const ICON_BY_TECH: Record<string, { title: string; hex: string; path: string } | undefined> = {
  TypeScript: siTypescript,
  React: siReact,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  Go: siGo,
  Rust: siRust,
  Python: siPython,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Kafka: siApachekafka,
  GraphQL: siGraphql,
  tRPC: siTrpc,
  AWS: undefined,
  GCP: siGooglecloud,
  Kubernetes: siKubernetes,
  Terraform: siTerraform,
  OpenTelemetry: siOpentelemetry,
  Tailwind: siTailwindcss,
  "Framer Motion": siFramer,
  GSAP: siGsap,
  TanStack: siTanstack,
  Stripe: siStripe,
  Clerk: siClerk,
  Auth0: siAuth0,
};

const TECH_GALLERY_IMAGES = TECH_STACK.map((tech, index) => createTechArtwork(tech, index));

export function TechStackShowcase() {
  return (
    <section className="section overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Tech we love"
          title="A vibrant dome of the stack we ship with."
          subtitle="The gallery now uses the React Bits DomeGallery component and real brand-mark tiles generated from our stack."
        />
        <motion.div
          variants={stagger(0.02)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14"
        >
          <motion.div
            variants={fadeUp}
            className="relative mx-auto h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-3 sm:h-[36rem] lg:h-[48rem]"
          >
            <DomeGallery
              images={TECH_GALLERY_IMAGES}
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale={false}
              overlayBlurColor="#09090B"
            />
          </motion.div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {TECH_STACK.slice(0, 8).map((item) => (
              <span key={item} className="chip text-[10.5px] py-0.5">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function createTechArtwork(tech: string, index: number) {
  const icon = getIcon(tech);
  const accent = `#${icon?.hex ?? fallbackColorFromIndex(index)}`;
  const label = tech.toUpperCase();
  const title = icon?.title ?? tech;
  const svg = icon
    ? `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="${escapeXml(title)}">
        <defs>
          <linearGradient id="bg-${index}" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${accent}" />
            <stop offset="100%" stop-color="#0B0B0D" />
          </linearGradient>
          <radialGradient id="glow-${index}" cx="40%" cy="32%" r="75%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.28)" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="1200" height="1200" rx="120" fill="url(#bg-${index})" />
        <rect width="1200" height="1200" rx="120" fill="url(#glow-${index})" opacity="0.95" />
        <circle cx="206" cy="184" r="198" fill="rgba(255,255,255,0.12)" />
        <circle cx="980" cy="980" r="260" fill="rgba(255,255,255,0.08)" />
        <g transform="translate(600 520)">
          <path d="${icon.path}" fill="#FFFFFF" transform="translate(-130 -130) scale(10)" />
        </g>
        <text x="86" y="1040" fill="#FFFFFF" font-family="Inter, system-ui, sans-serif" font-size="82" font-weight="700" letter-spacing="4">${escapeXml(label)}</text>
      </svg>
    `
    : `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" role="img" aria-label="${escapeXml(title)}">
        <defs>
          <linearGradient id="bg-${index}" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="${accent}" />
            <stop offset="100%" stop-color="#111114" />
          </linearGradient>
        </defs>
        <rect width="1200" height="1200" rx="120" fill="url(#bg-${index})" />
        <circle cx="220" cy="180" r="210" fill="rgba(255,255,255,0.12)" />
        <text x="104" y="660" fill="#FFFFFF" font-family="Inter, system-ui, sans-serif" font-size="180" font-weight="800">${escapeXml(getInitials(tech))}</text>
        <text x="86" y="1040" fill="#FFFFFF" font-family="Inter, system-ui, sans-serif" font-size="82" font-weight="700" letter-spacing="4">${escapeXml(label)}</text>
      </svg>
    `;

  return {
    src: svgToDataUri(svg),
    alt: title,
  };
}

function getIcon(tech: string): SimpleIcon | undefined {
  return ICON_BY_TECH[tech];
}

function fallbackColorFromIndex(index: number) {
  const palette = ["DFFF4A", "8D6BFF", "FF7DBA", "88F5FF", "FFC46B", "A693F1", "F5F2EE", "7BE495"];
  return palette[index % palette.length];
}

function getInitials(tech: string) {
  return tech
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function svgToDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
