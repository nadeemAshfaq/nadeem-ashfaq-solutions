import type { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    slug: "askx",
    title: "AskX — Enterprise AI Chatbot & Knowledge SaaS",
    subtitle: "Custom AI SaaS platform trained on internal documentation with RAG, multi-tenancy, and subscription billing.",
    description:
      "A production-grade conversational AI platform enabling businesses to train custom chatbots on their websites, PDF manuals, and proprietary knowledge bases using Retrieval-Augmented Generation (RAG).",
    clientOutcome:
      "Drastically reduces customer support ticket volume and internal knowledge search times by delivering instant, citation-backed answers powered by OpenAI LLMs.",
    architecturePoints: [
      "Vector embeddings & RAG pipeline indexing website crawls and document uploads",
      "Robust authentication and single sign-on powered by Keycloak",
      "Multi-tenant team and organization workspace management",
      "Automated subscription tiers, usage metering, and checkout via Stripe",
      "Real-time analytics dashboard tracking query resolution rates and user sentiment",
      "Modern React and TypeScript UI backed by high-throughput REST APIs"
    ],
    techStack: [
      "OpenAI GPT-4",
      "RAG Architecture",
      "React",
      "TypeScript",
      "Node.js",
      "Keycloak",
      "Stripe",
      "Vector Database"
    ],
    tags: ["AI SaaS", "Full-Stack", "RAG / LLMs", "Cloud Architecture"],
    featured: true
  },
  {
    slug: "socialagent",
    title: "SocialAgent — Autonomous Social Automation Platform",
    subtitle: "AI-driven engine automating content ideation, copywriting, multi-platform scheduling, and performance analytics.",
    description:
      "An automated social media copilot that analyzes brand voice, generates high-engagement copy across multiple platforms, schedules distribution, and surfaces actionable performance metrics.",
    clientOutcome:
      "Replaces hours of manual social copywriting and distribution with autonomous AI agents that maintain consistent brand presence 24/7.",
    architecturePoints: [
      "Multi-agent LLM prompt orchestration enforcing specific brand guidelines and tones",
      "Asynchronous job queuing for scheduled content dispatch across social networks",
      "Direct API integrations with LinkedIn, Twitter/X, and social platform webhooks",
      "Engagement telemetry aggregation and automated weekly performance reporting",
      "Scalable Node.js microservices architecture deployed with high availability"
    ],
    techStack: [
      "AI Agents",
      "OpenAI",
      "Node.js",
      "TypeScript",
      "Social Platform APIs",
      "Queue Workers",
      "SaaS"
    ],
    tags: ["AI Automation", "SaaS Platform", "Social APIs"],
    featured: true
  },
  {
    slug: "office-365-enterprise-addins",
    title: "Office Add-ins Suite for Word, Excel & Outlook",
    subtitle: "Cross-platform enterprise Office.js add-ins connecting Microsoft 365 desktop & web apps with core business data.",
    description:
      "A unified suite of custom add-ins extending Word, Excel, and Outlook. Built with modern Office.js, React, and Microsoft Graph to automate financial modeling, contract assembly, and CRM email tagging.",
    clientOutcome:
      "Eliminated manual copy-pasting between external systems and Office files, saving administrative and finance teams hours each week.",
    architecturePoints: [
      "Cross-platform execution on Windows, macOS, and Office on the web via modern manifest schemas",
      "Deep Microsoft Graph integration for calendar sync, email parsing, and OneDrive file handling",
      "Single Sign-On (SSO) with Microsoft Entra ID (Azure Active Directory)",
      "High-speed Excel custom functions and batch calculation processing",
      "Dynamic Word document assembly from cloud templates and live ERP data"
    ],
    techStack: [
      "Office.js",
      "Microsoft Graph",
      "React",
      "TypeScript",
      "Entra ID (Azure AD)",
      "Microsoft 365"
    ],
    tags: ["Microsoft 365", "Office Add-ins", "Enterprise Integration"],
    featured: true
  },
  {
    slug: "google-workspace-productivity-suite",
    title: "Google Workspace Enterprise Add-on Suite",
    subtitle: "Custom Workspace Add-ons extending Gmail, Google Sheets, and Google Docs with automated CRM sync and reporting.",
    description:
      "A production Google Workspace Add-on built with Google Apps Script and Google Workspace REST APIs. Allows teams to trigger business workflows, parse inbound client emails, and generate Google Sheets reports without leaving the browser tab.",
    clientOutcome:
      "Connected day-to-day email and spreadsheet operations directly to cloud databases, eliminating repetitive data entry across sales and operational teams.",
    architecturePoints: [
      "Universal Workspace Add-on compatible across Gmail web and mobile clients",
      "Automated Google Sheets computation, data sanitation, and automated scheduled exports",
      "Google Docs dynamic template population and PDF rendering pipeline",
      "Secure Google OAuth 2.0 authentication with least-privilege enterprise permission scopes",
      "Bidirectional REST API webhooks connecting Workspace events to cloud databases"
    ],
    techStack: [
      "Google Apps Script",
      "Gmail API",
      "Google Sheets API",
      "Google Docs API",
      "OAuth 2.0",
      "REST Webhooks"
    ],
    tags: ["Google Workspace", "Apps Script", "Automation"],
    featured: true
  },
  {
    slug: "sharepoint-spfx-enterprise-portal",
    title: "SharePoint & SPFx Modern Intranet Solutions",
    subtitle: "Custom SharePoint Framework (SPFx) web parts, enterprise application extensions, and Power Automate approval engines.",
    description:
      "Tailored modern SharePoint Framework components that turn standard SharePoint sites into dynamic internal enterprise hubs with document lifecycle management and automated multi-stage approvals.",
    clientOutcome:
      "Modernized internal employee communications and reduced contract turnaround time from days to hours through automated review pipelines.",
    architecturePoints: [
      "Custom SPFx client-side web parts built with React, TypeScript, and Fluent UI",
      "Deep integration with SharePoint REST APIs and Microsoft Graph client libraries",
      "Multi-level approval flows executed via Power Automate and Teams adaptive cards",
      "Granular role-based access control leveraging Microsoft 365 Groups and Entra ID"
    ],
    techStack: [
      "SharePoint Framework (SPFx)",
      "React",
      "Microsoft Graph",
      "Power Automate",
      "Fluent UI",
      "Entra ID"
    ],
    tags: ["SharePoint", "SPFx", "Microsoft 365", "Power Platform"],
    featured: false
  },
  {
    slug: "enterprise-cross-platform-automation",
    title: "Enterprise AI & Business Automation Bridge",
    subtitle: "Autonomous integration pipeline connecting Microsoft 365, Google Workspace, Azure, and OpenAI.",
    description:
      "An end-to-end integration engine that harmonizes data across enterprise silos: monitoring inbound files across SharePoint and Google Drive, applying AI categorization, and synchronizing with SQL databases and ERPs.",
    clientOutcome:
      "Unified disconnected software ecosystems into a synchronized, self-healing pipeline with zero manual intervention.",
    architecturePoints: [
      "Azure Serverless Functions and Event Grid listening for document creation triggers",
      "Automated OCR and LLM text extraction with structured JSON schema output",
      "Bidirectional data exchange between Microsoft 365, Google Drive, and cloud databases",
      "Automated error monitoring, retry queues, and Slack/Teams alert notifications"
    ],
    techStack: [
      "Microsoft Azure",
      "OpenAI",
      "Power Automate",
      "Node.js",
      ".NET",
      "SQL Server",
      "REST APIs"
    ],
    tags: ["AI Automation", "Azure Cloud", "Data Integration"],
    featured: false
  }
];
