import {
  Code2,
  Server,
  Smartphone,
  Palette,
  Cloud,
  Sparkles,
  Workflow,
  Building2,
  Cog,
  Plug,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
  outcomes: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Production-grade web platforms",
    description:
      "We design and engineer high-performance web platforms — from marketing sites to complex dashboards — with motion-rich UI and rigorous architecture.",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "tRPC"],
    outcomes: ["Sub-second TTI", "SEO ready", "Design system baked in"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Multi-tenant products that scale",
    description:
      "End-to-end SaaS engineering: auth, billing, RBAC, observability, multi-tenant data isolation and admin tooling — built for growth from day one.",
    icon: Server,
    technologies: ["Node", "PostgreSQL", "Prisma", "Stripe", "Clerk"],
    outcomes: ["Multi-tenant ready", "Billing in days", "Audit logs"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    tagline: "Native-feel, cross-platform",
    description:
      "Cross-platform mobile apps that look native, feel instant and ship simultaneously to iOS and Android with shared business logic.",
    icon: Smartphone,
    technologies: ["React Native", "Expo", "Swift", "Kotlin"],
    outcomes: ["60fps interactions", "OTA updates", "App Store ready"],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    tagline: "Interfaces with intent",
    description:
      "Research-led product design that turns ambitious ideas into focused, beautiful interfaces — design tokens, motion language and accessibility built in.",
    icon: Palette,
    technologies: ["Figma", "Framer", "Design Tokens"],
    outcomes: ["Design system", "Motion language", "WCAG AA+"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    tagline: "Infra you can sleep on",
    description:
      "Cloud-native architectures on AWS, GCP and Azure with infra-as-code, autoscaling, multi-region failover and tight cost discipline.",
    icon: Cloud,
    technologies: ["AWS", "GCP", "Terraform", "Kubernetes"],
    outcomes: ["IaC from day 1", "Autoscaling", "Cost-tuned"],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    tagline: "Real products, real outcomes",
    description:
      "Embed LLMs, RAG pipelines, agents and vector search into your product — with guardrails, evals and a path to production, not demos.",
    icon: Sparkles,
    technologies: ["OpenAI", "Anthropic", "LangChain", "pgvector"],
    outcomes: ["RAG pipelines", "Agentic workflows", "Eval harnesses"],
  },
  {
    slug: "devops",
    title: "DevOps",
    tagline: "Ship safely, ship often",
    description:
      "Pipelines, observability and platform engineering so your team ships ten times a day with confidence — not pages.",
    icon: Workflow,
    technologies: ["GitHub Actions", "Argo", "Grafana", "OpenTelemetry"],
    outcomes: ["Blue/green deploys", "p95 SLOs", "On-call calm"],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    tagline: "Built for the long road",
    description:
      "Custom enterprise platforms with SSO, fine-grained permissions, audit trails and integration into legacy estates.",
    icon: Building2,
    technologies: ["SAML/OIDC", "Kafka", "Java", "Go"],
    outcomes: ["SSO + SCIM", "Audit trails", "Legacy bridges"],
  },
  {
    slug: "automation-systems",
    title: "Automation Systems",
    tagline: "Replace repetitive work",
    description:
      "Workflow automation, internal tools and intelligent agents that take ops work off your team — measured in hours saved, not features shipped.",
    icon: Cog,
    technologies: ["Temporal", "n8n", "Airflow", "Custom agents"],
    outcomes: ["Hours saved/week", "Zero-touch runs", "SLA-backed"],
  },
  {
    slug: "api-development",
    title: "API Development",
    tagline: "APIs developers love",
    description:
      "REST, GraphQL and gRPC APIs that are typed end-to-end, versioned, documented and benchmarked under realistic load.",
    icon: Plug,
    technologies: ["GraphQL", "tRPC", "OpenAPI", "gRPC"],
    outcomes: ["Typed clients", "Versioned", "Load-tested"],
  },
];
