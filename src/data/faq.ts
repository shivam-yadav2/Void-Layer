export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "How do engagements with Void Layer work?",
    answer:
      "We work in cross-functional pods — design, engineering and product — on weekly cycles with a public changelog. Most engagements start with a 2-week discovery sprint, then move into delivery.",
  },
  {
    question: "Do you take on fixed-scope projects?",
    answer:
      "Yes for well-defined surfaces, no for vague briefs. If the problem is fuzzy, we'll lock down scope in a paid discovery phase before quoting fixed.",
  },
  {
    question: "Can you work alongside our in-house team?",
    answer:
      "Most of our best work is embedded. We pair, code-review and onboard your engineers so we leave the codebase healthier than we found it.",
  },
  {
    question: "What tech stacks do you specialize in?",
    answer:
      "TypeScript everywhere, React/Next/React Native on the front, Node/Go on the back, Postgres-first data layer, AWS/GCP infra. We're pragmatic — we pick boring tech for boring problems.",
  },
  {
    question: "How do you price?",
    answer:
      "Senior pods on monthly retainers, or milestone-based fixed pricing for tightly-scoped work. Either way, we share velocity and burn weekly so there are no surprises.",
  },
  {
    question: "Can you help with AI features?",
    answer:
      "Yes — production AI features with retrieval, evals, guardrails and clear human-in-the-loop touchpoints. Not demos.",
  },
];
