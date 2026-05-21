import { PolicyLayout } from "@/components/PolicyLayout";

export function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" path="/terms" updated="May 2026">
      <Section title="1. Acceptance">
        By using voidlayer.com or any product or service operated by Void Layer,
        you agree to these terms. If you don't agree, please don't use the site.
      </Section>
      <Section title="2. Use of the site">
        You agree not to misuse our services — including by reverse-engineering,
        scraping at scale, or attempting to access data that isn't yours.
      </Section>
      <Section title="3. Intellectual property">
        All content on the site — including copy, designs, code and trademarks —
        is owned by Void Layer or our licensors and protected by applicable IP
        laws.
      </Section>
      <Section title="4. Engagements">
        Specific terms for client engagements are governed by a separate Master
        Services Agreement and corresponding Statements of Work, not this page.
      </Section>
      <Section title="5. Limitation of liability">
        To the maximum extent permitted by law, Void Layer is not liable for any
        indirect, incidental or consequential damages arising from your use of
        the site.
      </Section>
      <Section title="6. Contact">
        Questions about these terms? Email{" "}
        <a href="mailto:legal@voidlayer.com" className="text-white underline">
          legal@voidlayer.com
        </a>
        .
      </Section>
    </PolicyLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-white/65 text-pretty">{children}</p>
    </section>
  );
}
