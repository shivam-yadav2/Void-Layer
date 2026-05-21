import { TextReveal } from "@/components/ui/TextReveal";

export function Statement() {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            What we believe
          </p>
          <div className="mt-6">
            <TextReveal text="Premium software isn't built with more meetings or more frameworks — it's built with senior people, sharp taste, and the discipline to ship every week." />
          </div>
        </div>
      </div>
    </section>
  );
}
