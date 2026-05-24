import { useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/PageHeader";
import { Marquee } from "@/components/ui/Marquee";
import VariableProximity from "@/components/ui/VariableProximity";

const BUDGETS = ["< $25k", "$25k – $75k", "$75k – $200k", "$200k+"] as const;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
const emailRef = useRef<HTMLAnchorElement | null>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Start a project, ask a question, or just say hello."
      />

      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building."
        subtitle="We respond to every inbound within one business day."
      />

      <section>
        <div className="container">
          <Marquee speed={20} className="py-6">
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Contact
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Inquiry
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Say hello
            </span>
            <span className="text-white/30">✦</span>
            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.3em] text-white/70">
              Let's talk
            </span>
            <span className="text-white/30">✦</span>
          </Marquee>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6">
             <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
  Let's talk. <br />
  <a
    href="mailto:hello@voidlayer.in"
    ref={emailRef as React.RefObject<HTMLAnchorElement>}
    className="inline-flex cursor-pointer text-[80px] leading-[1.05]"
    onMouseEnter={() => setIsEmailHovered(true)}
    onMouseLeave={() => setIsEmailHovered(false)}
  >
    <div >
      <VariableProximity
        label="hello@voidlayer.in"
        className="leading-none transition-colors cursor-pointer"
        fromFontVariationSettings="'wght' 400, 'opsz' 12"
        toFontVariationSettings="'wght' 900, 'opsz' 36"
        containerRef={emailRef}
        style={{ color: "#c6f24e" }}
        radius={90}
        falloff="gaussian"
      />
    </div>
  </a>
</h1>
              <ContactCard
                icon={<MapPin className="size-5" />}
                title="Studio"
                lines={["Remote-first", "Bengaluru · Berlin · Singapore"]}
              />
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-3 text-sm text-white/65">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[10px] font-semibold">
                      1
                    </span>
                    A founding partner reads your message — not a bot.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[10px] font-semibold">
                      2
                    </span>
                    We come back within 24h with three concrete approaches.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[10px] font-semibold">
                      3
                    </span>
                    If there's a fit, we scope a 2-week discovery.
                  </li>
                </ol>
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 lg:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <span className="inline-flex size-14 items-center justify-center rounded-full bg-white text-black ring-1 ring-white">
                      <Check className="size-6" />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold">Message received.</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/60">
                      We'll come back within one business day. Thanks for thinking
                      of Void Layer.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your name" name="name" placeholder="Ada Lovelace" required />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="ada@company.com"
                        required
                      />
                    </div>
                    <Field label="Company" name="company" placeholder="Void Industries" />

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                        Budget
                      </label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {BUDGETS.map((b) => (
                          <label key={b} className="cursor-pointer">
                            <input
                              type="radio"
                              name="budget"
                              value={b}
                              className="peer sr-only"
                            />
                            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/70 transition-colors peer-checked:bg-white peer-checked:text-ink-950 peer-checked:border-white">
                              {b}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium uppercase tracking-[0.18em] text-white/45"
                      >
                        What are you building?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="A bit about the product, the team and the deadline..."
                        className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-white/30 focus:bg-white/[0.05]"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send message
                    </button>
                    <p className="text-center text-[11px] text-white/40">
                      We'll never share your details. By submitting you agree to our{" "}
                      <a href="/privacy" className="underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-[0.18em] text-white/45"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-white/30 focus:bg-white/[0.05]"
      />
    </div>
  );
}

function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80">
        {icon}
      </span>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
          {title}
        </h3>
        <div className="mt-2 space-y-0.5 text-sm text-white/85">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
