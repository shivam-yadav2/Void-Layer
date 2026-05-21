import { PolicyLayout } from "@/components/PolicyLayout";

export function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy" path="/privacy" updated="May 2026">
      <Section title="1. Who we are">
        Void Layer ("we", "us") is a software studio. This policy explains what
        personal data we collect when you use our website, what we do with it,
        and the rights you have over that data.
      </Section>
      <Section title="2. What we collect">
        We collect information you give us directly (e.g. via our contact form:
        name, email, company, message), and limited technical information
        (e.g. browser type, anonymized analytics) when you visit voidlayer.com.
      </Section>
      <Section title="3. How we use it">
        We use your information to respond to enquiries, to operate and improve
        our website, and to send service-related communications. We do not sell
        your data to third parties.
      </Section>
      <Section title="4. Cookies">
        We use a small number of essential cookies and privacy-respecting
        analytics. See our <a href="/cookies" className="text-white underline">cookie policy</a> for the full list.
      </Section>
      <Section title="5. Your rights">
        You have the right to access, correct, port and delete your personal
        data. Email <a href="mailto:privacy@voidlayer.com" className="text-white underline">privacy@voidlayer.com</a> and
        we'll respond within 30 days.
      </Section>
      <Section title="6. Changes">
        We may update this policy. When we do, we'll change the "last updated"
        date at the top. Material changes will be highlighted.
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
