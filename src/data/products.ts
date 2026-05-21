import {
  Dumbbell,
  KanbanSquare,
  Users,
  Scissors,
  ShoppingBag,
  Store,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  status: "live" | "beta" | "soon";
  priceFrom?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "vault-gym",
    name: "Vault GYM",
    category: "Gym & Fitness",
    tagline: "The complete operating system for modern gyms.",
    description:
      "Members, classes, billing, biometric check-in, trainer rosters and analytics — every part of a gym, in one place. Sold on monthly or annual subscription.",
    features: ["Member CRM", "Class scheduling", "Subscription billing", "Biometric check-in", "Trainer payroll"],
    icon: Dumbbell,
    status: "live",
    priceFrom: "From $39/mo",
  },
  {
    slug: "plotline-pm",
    name: "Plotline",
    category: "Project Management",
    tagline: "Lightweight project management without the bloat.",
    description:
      "Tasks, sprints, dependencies, time tracking and dashboards. Built for product teams who want speed without lock-in. Sold on per-seat subscription.",
    features: ["Sprints + backlogs", "Time tracking", "Dependencies", "Dashboards", "Slack + GitHub"],
    icon: KanbanSquare,
    status: "live",
    priceFrom: "From $9/user/mo",
  },
  {
    slug: "atrium-hrms",
    name: "Atrium HRMS",
    category: "HR & Payroll",
    tagline: "Modern HR, payroll and leave for growing teams.",
    description:
      "Employee profiles, attendance, leave, payroll, onboarding workflows and performance reviews — replacing four spreadsheets with one platform. Subscription with annual savings.",
    features: ["Attendance", "Leave management", "Payroll", "Onboarding", "Performance reviews"],
    icon: Users,
    status: "live",
    priceFrom: "From $4/employee/mo",
  },
  {
    slug: "salonix",
    name: "Salonix",
    category: "Salon & Spa",
    tagline: "Appointments and POS for premium salons.",
    description:
      "Online booking, stylist rosters, inventory, POS, gift cards and loyalty — built for salons, spas and barbershops. Launching soon.",
    features: ["Online booking", "POS", "Inventory", "Loyalty", "Stylist rosters"],
    icon: Scissors,
    status: "soon",
  },
  {
    slug: "storefront",
    name: "Storefront",
    category: "E-commerce",
    tagline: "Headless commerce for brands that move fast.",
    description:
      "Storefront, cart, checkout, admin and analytics — Stripe-native, themable, with a mobile-first admin app. Launching soon.",
    features: ["Headless API", "Themable storefront", "Stripe checkout", "Mobile admin", "Multi-currency"],
    icon: ShoppingBag,
    status: "soon",
  },
  {
    slug: "bazaar-marketplace",
    name: "Bazaar",
    category: "Multi-vendor Marketplace",
    tagline: "Launch your own marketplace in weeks, not months.",
    description:
      "Vendor portals, payouts, escrow, reviews, disputes and multi-region pricing — every primitive your marketplace needs. Launching soon.",
    features: ["Vendor portals", "Escrow + payouts", "Reviews", "Disputes", "Multi-region"],
    icon: Store,
    status: "soon",
  },
];
