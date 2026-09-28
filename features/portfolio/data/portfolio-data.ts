import type {
  Project,
  Service,
  SkillCategory
} from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Microsoft 365",
    items: [
      "SharePoint",
      "SPFx",
      "Office.js",
      "Microsoft Graph",
      "Power Apps",
      "Power Automate",
      "Entra ID"
    ]
  },
  {
    title: "Google Workspace",
    items: [
      "Workspace Add-ons",
      "Google Apps Script",
      "Gmail API",
      "Google Docs API",
      "Google Sheets API",
      "Google Drive API",
      "OAuth 2.0"
    ]
  },
  {
    title: "Full-Stack Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Node.js",
      ".NET",
      "REST APIs",
      "GraphQL"
    ]
  },
  {
    title: "AI & Automation",
    items: [
      "OpenAI",
      "Python",
      "LLMs",
      "RAG Architecture",
      "AI Agents",
      "LangChain",
      "Workflow Automation"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "Microsoft Azure",
      "Vercel",
      "Docker",
      "CI/CD Pipelines",
      "SaaS Architecture"
    ]
  },
  {
    title: "Data & Integration",
    items: [
      "PostgreSQL",
      "MongoDB",
      "SQL Server",
      "Redis",
      "Third-Party APIs"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "AskX",
    description: "Enterprise AI chatbot and conversational SaaS platform integrating OpenAI LLMs with custom enterprise knowledge bases.",
    techStack: ["OpenAI", "Next.js", "TypeScript", "SaaS"]
  },
  {
    title: "Google Workspace Productivity Suite",
    description: "Multi-app Google Workspace Add-on enhancing Gmail, Docs, and Sheets with automated reporting, data extraction, and CRM syncing.",
    techStack: ["Google Apps Script", "Gmail API", "Sheets API", "OAuth 2.0"]
  },
  {
    title: "Office 365 Enterprise Add-ins",
    description: "Cross-platform Office Add-ins for Word, Excel, and Outlook built with Office.js and Microsoft Graph for automated document generation.",
    techStack: ["Office.js", "Microsoft Graph", "React", "TypeScript"]
  },
  {
    title: "SharePoint & SPFx Solutions",
    description: "Custom enterprise SharePoint Framework (SPFx) web parts, intranet portals, and automated document approval pipelines.",
    techStack: ["SharePoint", "SPFx", "Power Automate", "Entra ID"]
  },
  {
    title: "Social Agent — AI Social Media Content Planning Platform",
    description: "A platform for AI-assisted market research, content planning and generation, review, approvals, and publishing workflows.",
    techStack: [],
    liveUrl: "https://socialagent.pro/"
  },
  {
    title: "Enterprise AI & Business Automation",
    description: "Unified cross-platform workflow automating operations across Microsoft 365, Google Workspace, Azure, and OpenAI.",
    techStack: ["Azure", "OpenAI", "Power Platform", "APIs"]
  }
];

export const services: Service[] = [
  {
    title: "Google Workspace Add-on Development",
    description:
      "Custom Google Workspace solutions extending Gmail, Google Docs, Google Sheets, and Drive with business-specific workflows, Google Apps Script automation, Google APIs, and OAuth authentication."
  },
  {
    title: "Microsoft 365 & Office Add-in Development",
    description:
      "Custom Microsoft 365 solutions for Word, Excel, PowerPoint, Outlook, and SharePoint built with Office.js, SPFx, Microsoft Graph, React, TypeScript, and Entra ID identity."
  },
  {
    title: "Full-Stack Web & SaaS Engineering",
    description:
      "Modern scalable web applications, client portals, and SaaS platforms engineered with React, Next.js, TypeScript, Node.js, and .NET with clean microservices architecture."
  },
  {
    title: "AI Integration & Autonomous Workflows",
    description:
      "Custom generative AI implementations, OpenAI and LLM integrations, RAG knowledge retrieval, and autonomous agents embedded into everyday productivity platforms."
  },
  {
    title: "Power Apps & Power Automate",
    description:
      "Low-code enterprise applications, approval processes, robotic process automation, and system bridges built on the Microsoft Power Platform and Azure Logic Apps."
  },
  {
    title: "Cloud Solutions & Third-Party API Integrations",
    description:
      "Secure cloud infrastructure on Microsoft Azure and Vercel, RESTful and GraphQL API development, and bidirectional data integrations across enterprise tools."
  }
];
