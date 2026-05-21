import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export function VelocityText() {
  return (
    <section className="section-tight border-y border-white/[0.06] bg-black">
      <ScrollVelocity
        baseVelocity={8}
        texts={[
          "DESIGN · ENGINEER · OPERATE",
          "SAAS / MOBILE / AI / CLOUD",
        ]}
      />
    </section>
  );
}
