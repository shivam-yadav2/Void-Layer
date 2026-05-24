import { useEffect, useRef } from "react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { Stats } from "@/sections/home/Stats";
import { CTAFooter } from "@/sections/home/CTAFooter";
import { registerGSAP, gsap } from "@/animations/gsap";
import {
  ChromeSphere,
  CyanCrystal,
  Donut,
  Flame,
  GeoCluster,
  PurpleBlob,
} from "@/components/ui/Shapes3D";


const PRINCIPLE_CARDS = [
  {
    title: "Architecture-first",
    body: "We design the system before the screens so the product can scale without rewrites.",
    tone: "bg-[#DFFF4A] text-black",
    badge: "bg-black text-[#DFFF4A]",
    decor: "lime",
  },
  {
    title: "Motion as language",
    body: "Every interaction tells a story — motion, copy and UI are designed as one.",
    tone: "bg-[#BEA7FF] text-black",
    badge: "bg-black text-[#BEA7FF]",
    decor: "violet",
  },
  {
    title: "Boring infra",
    body: "We pick battle-tested tools so your team ships every week without anxiety.",
    tone: "bg-[#FFB0D3] text-black",
    badge: "bg-black text-[#FFB0D3]",
    decor: "pink",
  },
  {
    title: "Senior pods",
    body: "No layers, no handoffs. You work with senior operators from day one.",
    tone: "bg-[#88F5FF] text-black",
    badge: "bg-black text-[#88F5FF]",
    decor: "cyan",
  },
  {
    title: "Public progress",
    body: "Weekly shipping, visible momentum, measurable outcomes and documented decisions.",
    tone: "bg-[#FFC46B] text-black",
    badge: "bg-black text-[#FFC46B]",
    decor: "amber",
  },
];

export function AboutPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = marqueeRef.current;
    if (!track || !container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    registerGSAP();

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth / 2;
      const duration = Math.max(totalWidth / 80, 18);
      gsap.set(track, { x: 0 });
      gsap.to(track, {
        x: -totalWidth,
        duration,
        ease: "none",
        repeat: -1,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Void Layer is a studio + lab building premium software for ambitious teams."
      />

      <PageHeader
        eyebrow="About us"
        title="A studio of engineers who design like designers."
        
      />

      <section>
        <div className="container">
          <Marquee speed={20} className="py-6">
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Studio
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Product Lab
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Engineering
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Motion
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Design Systems
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Product Strategy
            </span>
            <span className="text-white/30">✦</span>
          </Marquee>
        </div>
      </section>


      <section className="section-tight">
        <div className="container">
          <SectionHeading eyebrow="Pillars" title="Studio principles, applied daily." />
          <div ref={marqueeRef} className="relative mt-10 overflow-hidden mask-fade-x">
            <div ref={trackRef} className="flex w-max gap-6 pr-6">
              {[0, 1].map((set) => (
                <div key={set} className="flex gap-6">
                  {PRINCIPLE_CARDS.map((card, index) => (
                    <article
                      key={`${card.title}-${set}`}
                      className={` w-[320px] sm:w-[380px] shrink-0 overflow-hidden rounded-[1rem] border border-black/10 p-6 shadow-[0_26px_60px_-40px_rgba(0,0,0,0.7)] ${card.tone}`}
                    >
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">{card.title}</h3>
                      <p className="mt-3 text-sm text-black/70 text-pretty">{card.body}</p>

                      <PrincipleDecor kind={card.decor} />
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Stats />


      <CTAFooter />
    </>
  );
}

function PrincipleDecor({ kind }: { kind: (typeof PRINCIPLE_CARDS)[number]["decor"] }) {
  switch (kind) {
    case "lime":
      return (
        <Donut className="absolute -right-6 -top-8 h-28 w-28 opacity-90" />
      );
    case "violet":
      return (
        <PurpleBlob className="absolute -right-8 -top-10 h-32 w-32 opacity-95" />
      );
    case "pink":
      return (
        <Flame className="absolute -right-6 -top-10 h-28 w-28 opacity-95" />
      );
    case "cyan":
      return (
        <CyanCrystal className="absolute -right-6 -top-10 h-28 w-28 opacity-95" />
      );
    case "amber":
      return (
        <GeoCluster className="absolute -right-6 -top-10 h-28 w-28 opacity-90" />
      );
    default:
      return <ChromeSphere className="absolute -right-6 -top-10 h-28 w-28 opacity-90" />;
  }
}
