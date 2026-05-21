export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  hint?: string;
}

export const STATS: Stat[] = [
  { value: 38, suffix: "+", label: "Products shipped", hint: "across SaaS, mobile and AI" },
  { value: 99.97, suffix: "%", label: "Avg uptime", hint: "across operated workloads" },
  { value: 12, suffix: "wks", label: "Median delivery", hint: "discovery to GA" },
  { value: 4, suffix: ".9★", label: "Client rating", hint: "across 50+ engagements" },
];
