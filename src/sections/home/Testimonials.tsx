import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What people say"
          title="Trusted by teams who care most."
          italicWord="trusted"
        />
      </div>

      <div className="mt-16 space-y-4">
        <InfiniteMovingCards direction="left" speed="slow">
          {TESTIMONIALS.map((t, i) => (
            <li
              key={`a-${i}`}
              className="relative w-[360px] max-w-full shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-7 py-6 sm:w-[460px]"
            >
              <Quote className="absolute top-5 right-5 size-7 text-white/[0.08]" />
              <blockquote className="text-[15px] leading-relaxed text-white/85 text-pretty">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="size-9 rounded-full bg-white/15 ring-1 ring-white/10" />
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-white/45">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </li>
          ))}
        </InfiniteMovingCards>

        <InfiniteMovingCards direction="right" speed="slow">
          {TESTIMONIALS.slice()
            .reverse()
            .map((t, i) => (
              <li
                key={`b-${i}`}
                className="relative w-[360px] max-w-full shrink-0 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-7 py-6 sm:w-[460px]"
              >
                <Quote className="absolute top-5 right-5 size-7 text-white/[0.08]" />
                <blockquote className="text-[15px] leading-relaxed text-white/85 text-pretty">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="size-9 rounded-full bg-white/15 ring-1 ring-white/10" />
                  <div className="leading-tight">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-white/45">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </li>
            ))}
        </InfiniteMovingCards>
      </div>
    </section>
  );
}
