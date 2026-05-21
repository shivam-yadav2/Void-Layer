export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map the problem space, talk to your users, study your stack and pin down the smallest thing that matters most.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We design the system end-to-end: data model, services, UX, security, deploys and the path from MVP to scale.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Cross-functional pods ship in weekly increments, against a clear definition of done and a public changelog.",
  },
  {
    step: "04",
    title: "Harden",
    description:
      "We load-test, instrument, threat-model and tune until the system is boring under load — the highest compliment.",
  },
  {
    step: "05",
    title: "Operate",
    description:
      "We stay close after launch with SLOs, on-call rituals and a roadmap that keeps moving with your business.",
  },
];
