/**
 * HorizontalShowcase — GSAP ScrollTrigger pinned horizontal-scroll section.
 * Five service panels translate left as the user scrolls vertically.
 */
import { useEffect, useRef } from "react";
import { registerGSAP, gsap, ScrollTrigger } from "@/animations/gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/data/services";

export function HorizontalShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return;

    registerGSAP();

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  const panels = SERVICES.slice(0, 6);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      <div className="container pt-24 lg:pt-32">
        <SectionHeading
          eyebrow="What we ship"
          title="A capability for every layer of the stack."
          italicWord="every"
          align="left"
        />
      </div>

      <div
        ref={trackRef}
        className="mt-16 flex w-max gap-6 px-5 sm:px-8 lg:px-16 pb-24"
      >
        {panels.map((s, i) => {
          const Icon = s.icon;
          return (
            <article
              key={s.slug}
              className="relative h-[60vh] min-h-[420px] w-[78vw] max-w-[640px] shrink-0 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 lg:w-[520px] lg:p-10"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {String(i + 1).padStart(2, "0")} · {s.tagline}
              </span>

              <Icon className="absolute top-6 right-6 size-7 text-white/30" strokeWidth={1.4} />

              <h3 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-display font-semibold tracking-tight text-balance">
                {s.title}
              </h3>

              <p className="mt-6 max-w-md text-sm sm:text-base text-white/55 text-pretty">
                {s.description}
              </p>

              <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-1.5">
                {s.technologies.map((t) => (
                  <span key={t} className="chip text-[10.5px] py-0.5">
                    {t}
                  </span>
                ))}
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -right-32 size-72 rounded-full blur-3xl bg-white/[0.05]"
              />
            </article>
          );
        })}

        <div className="flex h-[60vh] min-h-[420px] w-[60vw] lg:w-[420px] shrink-0 flex-col justify-center rounded-3xl border border-white/15 bg-white p-10 text-black">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-black/50">
            More
          </p>
          <h3 className="mt-6 text-3xl sm:text-4xl font-display font-semibold tracking-tight text-balance">
            Everything else you need to ship.
          </h3>
          <a href="/services" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
            See all services →
          </a>
        </div>
      </div>
    </section>
  );
}
