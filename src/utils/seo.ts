export const SITE = {
  name: "Void Layer",
  url: "https://voidlayer.com",
  tagline: "Engineering Digital Systems Beyond Limits",
  description:
    "Void Layer designs and engineers premium SaaS, web, mobile, AI and cloud systems for ambitious companies.",
  twitter: "@voidlayer",
} as const;

export function pageTitle(title?: string) {
  return title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
}
