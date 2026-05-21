export interface Job {
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
}

export const JOBS: Job[] = [
  {
    title: "Senior Product Engineer",
    team: "Product",
    location: "Remote · Worldwide",
    type: "Full-time",
  },
  {
    title: "Staff Backend Engineer (Go / Node)",
    team: "Platform",
    location: "Remote · Worldwide",
    type: "Full-time",
  },
  {
    title: "Motion & Interaction Designer",
    team: "Design",
    location: "Remote · APAC / EU",
    type: "Full-time",
  },
  {
    title: "AI Engineer (RAG / Agents)",
    team: "AI",
    location: "Remote · Worldwide",
    type: "Full-time",
  },
  {
    title: "DevOps / Platform Engineer",
    team: "Platform",
    location: "Remote · Worldwide",
    type: "Full-time",
  },
  {
    title: "Frontend Engineering Intern",
    team: "Product",
    location: "Remote",
    type: "Internship",
  },
];

export const PERKS = [
  { title: "Remote-first", body: "Hire the best — wherever they are. No core-hours theatre." },
  { title: "Senior pods", body: "Small teams of senior people. No layers, no proxies." },
  { title: "Real ownership", body: "Equity for everyone. Decisions made by the people doing the work." },
  { title: "Learning budget", body: "Annual stipend for books, courses and conferences." },
  { title: "Top-tier gear", body: "M-series MacBooks, 4K monitors, mechanical keyboards." },
  { title: "Time off that means it", body: "Minimum vacation, not maximum. We check." },
];

export const PRINCIPLES = [
  { title: "Ship small. Ship often.", body: "Tiny PRs, weekly releases, public changelogs." },
  { title: "Boring tech for boring problems.", body: "Pick exciting tech only where it earns its keep." },
  { title: "Design and engineering are one thing.", body: "Motion, copy and code reviewed together." },
  { title: "Leave the campsite cleaner.", body: "Refactor the path you walked. Always." },
];
