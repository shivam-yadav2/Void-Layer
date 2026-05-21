import type { ReactNode } from "react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";

interface PolicyLayoutProps {
  title: string;
  path: string;
  updated: string;
  children: ReactNode;
}

export function PolicyLayout({ title, path, updated, children }: PolicyLayoutProps) {
  return (
    <>
      <SEO title={title} path={path} />
      <PageHeader eyebrow="Legal" title={title} subtitle={`Last updated · ${updated}`} />
      <section className="section-tight">
        <div className="container">
          <article className="prose-policy mx-auto max-w-3xl text-white/75 space-y-6 leading-relaxed">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
