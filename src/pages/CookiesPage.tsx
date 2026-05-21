import { PolicyLayout } from "@/components/PolicyLayout";

const COOKIES = [
  {
    name: "vl_session",
    purpose: "Maintains your session across pages.",
    duration: "Session",
    type: "Essential",
  },
  {
    name: "vl_theme",
    purpose: "Remembers your interface preferences.",
    duration: "1 year",
    type: "Functional",
  },
  {
    name: "_anon_analytics",
    purpose: "Anonymized, aggregated analytics. No PII.",
    duration: "30 days",
    type: "Analytics",
  },
];

export function CookiesPage() {
  return (
    <PolicyLayout title="Cookie Policy" path="/cookies" updated="May 2026">
      <Section title="1. What are cookies?">
        Cookies are small text files stored on your device when you visit a
        website. They help the site remember things about your visit — like
        your preferences — and help us understand how the site is used.
      </Section>
      <Section title="2. Cookies we use">
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] text-left text-xs font-medium uppercase tracking-[0.15em] text-white/45">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Purpose</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {COOKIES.map((c) => (
                <tr key={c.name}>
                  <td className="px-4 py-3 font-mono text-xs text-white/85">
                    {c.name}
                  </td>
                  <td className="px-4 py-3 text-white/65">{c.purpose}</td>
                  <td className="px-4 py-3 text-white/65">{c.duration}</td>
                  <td className="px-4 py-3 text-white/65">{c.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="3. Managing cookies">
        You can change your cookie preferences at any time via your browser
        settings. Essential cookies cannot be disabled without affecting site
        functionality.
      </Section>
      <Section title="4. Contact">
        Questions? Email{" "}
        <a href="mailto:privacy@voidlayer.com" className="text-white underline">
          privacy@voidlayer.com
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
      <div className="mt-3 text-white/65 text-pretty">{children}</div>
    </section>
  );
}
