import { Marquee } from "@/components/ui/Marquee";
import { TECH_STACK } from "@/data/techStack";

export function TrustedTech() {
  return (
    <section className="section-tight">
      <div className="container">
        <p className="text-center text-xs font-mono uppercase tracking-[0.3em] text-white/40">
          Built with the tools the best teams already trust
        </p>
        <div className="mt-10">
          <Marquee speed={160} repeat={3}>
            {TECH_STACK.map((t) => (
              <span
                key={t}
                className="text-sm font-medium text-white/45 hover:text-white/80 transition-colors whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
