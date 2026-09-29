import type { NavItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Nadeem Ashfaq",
  title: "Nadeem Ashfaq | Senior Full-Stack Developer & Solutions Architect",
  role: "Senior Full-Stack Developer & Solutions Architect",
  url: "https://nadeemashfaq.dev",
  subRole: "Full-Stack Development, Microsoft 365, Google Workspace & AI",
  tagline: "Web and Microsoft business solutions, Python backends, AI products, integrations, and automation.",
  headline:
    "I build scalable web applications, Microsoft 365 and business solutions, AI-powered products, Python backends, integrations, and automation workflows.",
  description:
    "I design and build software across modern web technologies, Microsoft 365, SharePoint, Office Add-ins, Power Platform, Google Workspace, Python, AI/LLM systems, business applications, and third-party integrations.",
  phone: "+923450609006",
  email: "nadeemashfaq.it@gmail.com",
  whatsappUrl: `https://wa.me/923450609006?text=${encodeURIComponent(
    "Hi Nadeem, I reviewed your website and would like to discuss a project."
  )}`,
  profiles: [
    { label: "Upwork", url: "https://www.upwork.com/freelancers/nadeema59" },
    { label: "Fiverr", url: "https://www.fiverr.com/nadeem141117" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nadeem-ashfaq-3274a7264/" }
  ],
  stats: [
    { label: "Production Platforms", value: "Multi-Tenant SaaS & Web", detail: "React, Next.js, Node.js, .NET" },
    { label: "Enterprise Ecosystems", value: "M365 & Google Workspace", detail: "Office.js, SPFx, Apps Script, APIs" },
    { label: "Intelligent Workflows", value: "Generative AI & Automation", detail: "OpenAI, RAG, Power Automate" },
    { label: "Delivery Model", value: "Architecture-First", detail: "Robust, Secure, Production-Tested" }
  ]
};

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

export const siteUrl = new URL(
  configuredSiteUrl
    ? configuredSiteUrl.startsWith("http")
      ? configuredSiteUrl
      : `https://${configuredSiteUrl}`
    : siteConfig.url
).origin;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
