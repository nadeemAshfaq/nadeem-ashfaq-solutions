import type { NavItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Nadeem Ashfaq",
  role: "Senior Full-Stack Developer & Solutions Architect",
  subRole: "Microsoft 365, Google Workspace & AI Solutions",
  headline:
    "Architecting scalable web applications, custom Microsoft 365 solutions, Google Workspace Add-ons, and AI-powered business automations.",
  description:
    "End-to-end full-stack engineering with React, Next.js, TypeScript, Node.js, and .NET, paired with deep architecture in Office.js, SharePoint SPFx, Microsoft Graph, Google Apps Script, Workspace APIs, Azure, and OpenAI LLM integrations.",
  phone: "+923450609006",
  email: "nadeemashfaq.it@gmail.com",
  profiles: [
    { label: "Fiverr", url: "https://www.fiverr.com/users/nadeem141117/seller_dashboard" },
    { label: "Upwork", url: "https://www.upwork.com/freelancers/nadeema59" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nadeem-ashfaq-3274a7264/" }
  ]
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
