import { Link } from "@tanstack/react-router";
import { SEO } from "@/components/SEO";

export function NotFoundPage() {
  return (
    <>
      <SEO title="Not found" path="/404" />
      <section className="container py-32 lg:py-48 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          Error · 404
        </p>
        <h1 className="mt-6 text-display-xl font-semibold gradient-text">
          Lost in the void.
        </h1>
        <p className="mt-5 mx-auto max-w-md text-white/60">
          The page you're looking for doesn't exist, or has been moved into
          another dimension entirely.
        </p>
        <Link to="/" className="btn-primary mt-10 inline-flex">
          Back home
        </Link>
      </section>
    </>
  );
}
