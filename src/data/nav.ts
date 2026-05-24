import {
  Home as HomeIcon,
  Layers,
  Boxes,
  Briefcase,
  Mail,
  Info,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", to: "/", icon: HomeIcon },
  { label: "Services", to: "/services", icon: Layers },
  { label: "Products", to: "/products", icon: Boxes },
  { label: "About", to: "/about", icon: Info },
  // { label: "Careers", to: "/careers", icon: Briefcase },
  { label: "Contact", to: "/contact", icon: Mail },
];

export const FOOTER_NAV = {
  Company: [
    { label: "About", to: "/about" },
    // { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
  ],
  Work: [
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
  ],
  Legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Cookies", to: "/cookies" },
  ],
} as const;
