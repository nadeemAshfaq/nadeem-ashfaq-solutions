import type { NavItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Nadeem Ashfaq",
  title: "Nadeem Ashfaq | Senior Full-Stack Developer & Solutions Architect",
  role: "Senior Full-Stack Developer & Solutions Architect",
  subRole: "Microsoft 365, Google Workspace & AI Solutions",
  tagline: "High-performance web applications, enterprise productivity add-ons, and AI automation built for client growth.",
  headline:
    "Building scalable web applications, custom Microsoft 365 solutions, Google Workspace Add-ons, AI-powered products, and seamless business integrations.",
  description:
    "I partner with founders, businesses, and enterprise teams to architect production-ready software: React, Next.js, TypeScript, Node.js, and .NET web platforms; custom Office.js & SPFx add-ins; Google Workspace Add-ons; and OpenAI LLM automation.",
  phone: "+923450609006",
  email: "nadeemashfaq.it@gmail.com",
  whatsappUrl: `https://wa.me/923450609006?text=${encodeURIComponent(
    "Hi Nadeem, I reviewed your website and would like to discuss a project."
  )}`,
  profiles: [
    { label: "Upwork", url: "https://www.upwork.com/freelancers/nadeema59" },
    { label: "Fiverr", url: "https://www.fiverr.com/users/nadeem141117/seller_dashboard" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nadeem-ashfaq-3274a7264/" }
  ],
  stats: [
    { label: "Production Platforms", value: "Multi-Tenant SaaS & Web", detail: "React, Next.js, Node.js, .NET" },
    { label: "Enterprise Ecosystems", value: "M365 & Google Workspace", detail: "Office.js, SPFx, Apps Script, APIs" },
    { label: "Intelligent Workflows", value: "Generative AI & Automation", detail: "OpenAI, RAG, Power Automate" },
    { label: "Delivery Model", value: "Architecture-First", detail: "Robust, Secure, Production-Tested" }
  ]
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
