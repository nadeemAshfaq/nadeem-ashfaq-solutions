import type { ServiceItem } from "@/types/portfolio";

export const servicesData: ServiceItem[] = [
  {
    slug: "google-workspace-addons",
    title: "Google Workspace Add-on Development",
    shortDescription:
      "Custom Google Workspace solutions that extend Gmail, Google Docs, Google Sheets, and Drive with business-specific workflows, automation, and integrations.",
    overview:
      "I design and build custom Google Workspace solutions that transform standard productivity tools into integrated business platforms. By leveraging Google Apps Script, Google Workspace REST APIs, and modern web frameworks, I build solutions that allow your team to access external databases, trigger automated workflows, and generate complex reports without leaving Gmail, Docs, or Sheets.",
    icon: "📑",
    accentColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    targetKeywords: [
      "Google Workspace Add-on Developer",
      "Google Workspace Add-ons",
      "Gmail Add-ons",
      "Google Sheets Add-ons",
      "Google Docs Add-ons",
      "Google Apps Script Developer",
      "Google Drive Integrations"
    ],
    capabilities: [
      "Cross-platform Google Workspace Add-ons running on web and mobile",
      "Gmail add-ons for CRM lead capture, message triage, and automated email processing",
      "Google Sheets automated reporting, custom formulas, and external API data synchronization",
      "Google Docs dynamic contract, proposal, and document generation pipelines",
      "Google Drive automated file management, OCR extraction, and folder organization",
      "Google Apps Script optimization, enterprise quotas management, and script triggers",
      "Google Cloud Platform (GCP) project configuration and OAuth 2.0 permission scoping",
      "AI-powered Workspace workflows embedding OpenAI intelligence directly into documents"
    ],
    businessBenefits: [
      "Eliminates hours of manual data copying between spreadsheets, emails, and external CRMs",
      "Keeps staff inside their daily workspace instead of toggling between dozens of browser tabs",
      "Provides enterprise-controlled data privacy with verified Google OAuth permissions",
      "Accelerates client document turnarounds and invoice dispatch through one-click automation"
    ],
    faqs: [
      {
        question: "Can a Google Workspace Add-on work on both desktop and mobile Gmail?",
        answer:
          "Yes. By building with the modern Google Workspace Add-on framework (using CardService architecture), the add-on runs seamlessly on desktop browsers as well as the native Gmail mobile apps for iOS and Android."
      },
      {
        question: "How do you handle authentication and enterprise security with Google APIs?",
        answer:
          "All solutions leverage Google Cloud Platform (GCP) OAuth 2.0 authentication. We configure least-privilege scopes so the add-on only accesses the specific data it needs, adhering to enterprise security and Google Workspace Marketplace verification standards."
      },
      {
        question: "Can Google Sheets automatically sync with our external SQL or Postgres database?",
        answer:
          "Absolutely. We write custom Google Apps Script or cloud serverless functions that connect Google Sheets to your external REST APIs or SQL databases via secure HTTPS endpoints, supporting both scheduled intervals and on-demand button triggers."
      }
    ],
    relatedProjects: ["google-workspace-productivity-suite", "enterprise-cross-platform-automation"]
  },
  {
    slug: "microsoft-365-development",
    title: "Microsoft 365 Development",
    shortDescription:
      "Enterprise Microsoft 365 solutions connecting business workflows, apps, and services across Word, Excel, Teams, and SharePoint.",
    overview:
      "I architect and develop end-to-end Microsoft 365 solutions that tie together your enterprise ecosystem. From deep Microsoft Graph API integrations to custom cloud orchestrations on Azure, I help organizations unlock the full value of their Microsoft licenses by automating routine processes and connecting disparate business databases.",
    icon: "🪟",
    accentColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    targetKeywords: [
      "Microsoft 365 Developer",
      "Microsoft 365 Solutions Architect",
      "Microsoft Graph Developer",
      "Entra ID Developer",
      "M365 Integration Expert"
    ],
    capabilities: [
      "Comprehensive Microsoft Graph API integrations (mail, calendar, OneDrive, Teams, users)",
      "Microsoft Entra ID (Azure AD) Single Sign-On and multi-tenant authorization",
      "Custom Microsoft Teams apps, bots, and interactive Adaptive Cards",
      "Automated document provisioning and lifecycle management across SharePoint and OneDrive",
      "Hybrid architectures connecting on-premises systems with Microsoft 365 cloud services",
      "Compliance, audit logging, and enterprise governance enforcement via Graph webhooks"
    ],
    businessBenefits: [
      "Maximizes the ROI of existing Microsoft 365 corporate subscriptions",
      "Centralizes business communications, alerts, and approvals inside Microsoft Teams",
      "Provides unified security and role-based access backed by Entra ID",
      "Eliminates disconnected third-party software in favor of integrated native solutions"
    ],
    faqs: [
      {
        question: "What is Microsoft Graph and how does it benefit our company?",
        answer:
          "Microsoft Graph is the unified API gateway to all Microsoft 365 data. It allows custom applications to securely interact with user emails, calendars, Teams chats, SharePoint files, and organizational hierarchies under unified Entra ID permissions."
      },
      {
        question: "Can you integrate our custom software with Microsoft Teams?",
        answer:
          "Yes. We build custom Microsoft Teams apps that display embedded web dashboards, send interactive Adaptive Cards for one-click manager approvals, and notify teams in real-time when external system events occur."
      }
    ],
    relatedProjects: ["office-365-enterprise-addins", "sharepoint-spfx-enterprise-portal"]
  },
  {
    slug: "office-addin-development",
    title: "Office Add-in Development",
    shortDescription:
      "Cross-platform Office Add-ins for Word, Excel, PowerPoint, and Outlook built with Office.js, React, and Microsoft identity.",
    overview:
      "I build custom Office Add-ins for Word, Excel, PowerPoint, and Outlook using modern Office.js APIs and web standards. Unlike legacy COM/VSTO plugins that break across platforms, modern Office Add-ins execute cleanly across Windows, macOS, and Office on the web, giving your employees and customers seamless access to external data right inside their favorite Office documents.",
    icon: "📝",
    accentColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    targetKeywords: [
      "Office Add-in Developer",
      "Office.js Developer",
      "Excel Add-in Developer",
      "Word Add-in Developer",
      "Outlook Add-in Developer"
    ],
    capabilities: [
      "Cross-platform task pane and dialog add-ins built with React, TypeScript, and Fluent UI",
      "High-performance Excel custom formulas (JavaScript functions) and batch computational calculations",
      "Outlook compose and read add-ins for email categorization, CRM lookup, and template injection",
      "Automated Word contract assembly, legal clause insertion, and variable data merging",
      "PowerPoint slide automation and dynamic chart generation from live cloud databases",
      "Microsoft Entra ID (Azure AD) Single Sign-On (SSO) for zero-friction user authentication",
      "Office Store / AppSource marketplace preparation and centralized enterprise tenant deployment"
    ],
    businessBenefits: [
      "Universal compatibility across Windows, macOS, and web browsers with zero installation friction",
      "Dramatically reduces error rates by pulling verified data directly into Word and Excel",
      "Empowers non-technical staff to generate compliant contracts and financial models in seconds",
      "Centralized cloud updates without requiring IT teams to reinstall desktop software"
    ],
    faqs: [
      {
        question: "Why should we migrate our old VSTO/COM add-in to the modern Office.js platform?",
        answer:
          "Legacy VSTO add-ins only work on desktop Windows and frequently break during Office updates. Modern Office.js add-ins run on Windows, Mac, iPad, and web browsers, update centrally without user intervention, and run in isolated web sandboxes for security."
      },
      {
        question: "Can an Excel add-in interact with our proprietary back-end API?",
        answer:
          "Yes. Office.js add-ins are web applications hosted securely on your cloud server. They can make secure REST or GraphQL calls to any internal or external API to fetch data, perform computations, or write back spreadsheet results."
      }
    ],
    relatedProjects: ["office-365-enterprise-addins"]
  },
  {
    slug: "sharepoint-spfx-development",
    title: "SharePoint & SPFx Development",
    shortDescription:
      "Custom SharePoint Framework (SPFx) solutions, custom web parts, intranet portals, and automated document approval pipelines.",
    overview:
      "I specialize in custom SharePoint Framework (SPFx) development for enterprise intranets and business portals. Leveraging modern client-side technologies like React and TypeScript, I create interactive web parts, application extensions, and custom form experiences that turn generic SharePoint sites into powerful operational tools.",
    icon: "🏗️",
    accentColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    targetKeywords: [
      "SharePoint Developer",
      "SPFx Developer",
      "SharePoint Framework Developer",
      "SharePoint Web Parts",
      "SharePoint Intranet Solutions"
    ],
    capabilities: [
      "Client-side SPFx web parts and application customizers built with React and TypeScript",
      "Custom list view command sets, column formatters, and custom field customizers",
      "Microsoft Teams tab extensions powered by SharePoint Framework components",
      "Automated multi-level document approval pipelines tied to Power Automate and Teams",
      "Integration with Microsoft Graph, Azure Function APIs, and internal line-of-business data",
      "Modern SharePoint site provisioning, taxonomy structuring, and metadata architecture"
    ],
    businessBenefits: [
      "Transforms standard document repositories into intuitive enterprise knowledge hubs",
      "Seamless mobile-ready user experiences aligned with Microsoft Fluent UI design guidelines",
      "Ensures maximum performance and security by executing client-side within Microsoft 365 contexts",
      "Reduces internal support overhead with automated self-service forms and document approvals"
    ],
    faqs: [
      {
        question: "What is SPFx and why is it preferred for modern SharePoint development?",
        answer:
          "SPFx (SharePoint Framework) is Microsoft's official development model for SharePoint Online. It supports modern open-source web tooling (React, TypeScript, webpack) and runs in the context of the current user, delivering responsive, secure, and future-proof custom components."
      },
      {
        question: "Can custom SPFx web parts be deployed into Microsoft Teams as tabs?",
        answer:
          "Yes. With SPFx, web parts can be authored once and deployed simultaneously to SharePoint sites and as native tabs or personal apps inside Microsoft Teams."
      }
    ],
    relatedProjects: ["sharepoint-spfx-enterprise-portal"]
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Web & SaaS Engineering",
    shortDescription:
      "Scalable web applications and enterprise platforms built with React, Next.js, TypeScript, Node.js, and .NET.",
    overview:
      "I build scalable, secure, and production-tested web applications for startups, growing companies, and enterprise organizations. Whether you need a customer-facing SaaS product, a high-throughput backend API, or a modernized internal portal, I deliver clean architecture from database design to fluid, accessible user interfaces.",
    icon: "🌐",
    accentColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    targetKeywords: [
      "Full-Stack Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "Node.js Developer",
      ".NET Developer",
      "SaaS Developer"
    ],
    capabilities: [
      "Full-lifecycle web application engineering with React, Next.js (App Router), and TypeScript",
      "High-concurrency backend services with Node.js, Express, and .NET Core",
      "Relational and NoSQL database modeling across PostgreSQL, SQL Server, and MongoDB",
      "Multi-tenant SaaS architectures with role-based access control (RBAC) and tenant isolation",
      "Payment processing, subscription billing, and metered usage workflows via Stripe",
      "Performance optimization, server-side rendering (SSR), and Core Web Vitals optimization"
    ],
    businessBenefits: [
      "High velocity time-to-market with maintainable, well-documented codebases",
      "Scalable infrastructure capable of growing seamlessly from early adopters to enterprise scale",
      "Intuitive, accessible user interfaces that drive customer conversion and retention",
      "Rigorous type safety and automated testing preventing production regressions"
    ],
    faqs: [
      {
        question: "Do you build custom frontends or use templates?",
        answer:
          "Every client solution is tailored to your brand and functional requirements. I construct component libraries using Tailwind CSS and React/Next.js, ensuring blazing-fast performance, accessibility, and unique brand identity."
      },
      {
        question: "How do you ensure our application is secure for enterprise clients?",
        answer:
          "Security is integrated at every tier: JWT/OAuth2 authentication, strict input validation, encrypted data at rest and in transit, protection against OWASP top 10 vulnerabilities, and granular role-based permissions."
      }
    ],
    relatedProjects: ["askx", "socialagent"]
  },
  {
    slug: "ai-development",
    title: "AI Integrations & Autonomous Workflows",
    shortDescription:
      "Practical generative AI applications, OpenAI LLM integrations, RAG knowledge retrieval, and autonomous agents.",
    overview:
      "I help businesses move beyond novelty AI demos and implement practical, high-ROI generative AI systems. By combining OpenAI models and specialized open-source LLMs with Retrieval-Augmented Generation (RAG) and workflow automation, I build AI systems that accurately process your proprietary documentation, automate customer support, and perform multi-step administrative tasks.",
    icon: "🤖",
    accentColor: "border-teal-500/40 text-teal-400 bg-teal-500/10",
    targetKeywords: [
      "AI Integration Developer",
      "AI Automation Developer",
      "OpenAI Developer",
      "LLM Application Developer",
      "RAG Architecture Developer"
    ],
    capabilities: [
      "Custom conversational AI chatbots with domain-specific knowledge base grounding (RAG)",
      "Vector database indexing (Pinecone, pgvector, Weaviate) for fast semantic search",
      "Autonomous multi-step AI agents capable of invoking external APIs and tools",
      "Document intelligence pipelines (automated invoice parsing, contract review, text summarization)",
      "Prompt engineering, context window management, and hallucination reduction guardrails",
      "Embedding AI capabilities directly into Google Workspace and Microsoft 365 workflows"
    ],
    businessBenefits: [
      "Answers customer and employee queries instantly with 100% cited, verifiable internal documentation",
      "Automates repetitive manual document processing and data categorization tasks",
      "Protects proprietary IP with private vector architectures that never train public foundation models",
      "Scales operational capacity without requiring proportional headcount expansion"
    ],
    faqs: [
      {
        question: "How do you prevent the AI from making up false answers (hallucinations)?",
        answer:
          "We implement Retrieval-Augmented Generation (RAG) with strict system instructions and threshold filtering. The LLM is only permitted to generate responses based on relevant text chunks retrieved from your verified source documents, and must provide citations."
      },
      {
        question: "Is our company data kept private when using OpenAI models?",
        answer:
          "Yes. When leveraging enterprise OpenAI APIs or Azure OpenAI Service, your data is encrypted, never stored for model training, and stays strictly within your isolated tenant boundary."
      }
    ],
    relatedProjects: ["askx", "socialagent", "enterprise-cross-platform-automation"]
  },
  {
    slug: "power-platform-development",
    title: "Power Platform & Business Automation",
    shortDescription:
      "Power Apps, Power Automate, and Azure Logic Apps engineered to streamline complex business workflows.",
    overview:
      "I build custom low-code and pro-code automation on the Microsoft Power Platform. By combining Power Apps with Power Automate flows, Dataverse, and custom Azure cloud connectors, I help businesses eliminate manual spreadsheet trackers and fragmented communication in favor of structured, audit-ready operational tools.",
    icon: "⚡",
    accentColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    targetKeywords: [
      "Power Apps Developer",
      "Power Automate Developer",
      "Power Platform Consultant",
      "Microsoft Power Automate Workflows"
    ],
    capabilities: [
      "Custom Canvas and Model-driven Power Apps tailored for desktop and field mobile use",
      "Complex multi-stage approval flows with escalation rules and Teams Adaptive Cards",
      "Robotic Process Automation (RPA) with Power Automate Desktop for legacy software bridges",
      "Custom connector development connecting internal REST APIs to Power Platform flows",
      "Dataverse data modeling, security roles, and business process flow definition"
    ],
    businessBenefits: [
      "Replaces brittle spreadsheet trackers with secure, audited business applications",
      "Drastically reduces operational cycle times for expense, onboarding, and contract approvals",
      "Connects seamlessly with your existing Microsoft 365 licenses with minimal overhead",
      "Enables non-technical department leaders to view real-time process statuses"
    ],
    faqs: [
      {
        question: "Can Power Apps connect to our existing SQL database or cloud API?",
        answer:
          "Yes. Power Apps can connect directly to SQL Server, SharePoint, Dataverse, or any custom REST API via custom connectors with on-premises data gateways where necessary."
      }
    ],
    relatedProjects: ["sharepoint-spfx-enterprise-portal", "enterprise-cross-platform-automation"]
  },
  {
    slug: "api-integration",
    title: "API & System Integration",
    shortDescription:
      "Secure API design, third-party system integrations, microservices, and cross-platform enterprise synchronization.",
    overview:
      "Modern businesses run on dozens of specialized tools. I build reliable, high-performance integration layers that connect your CRMs, ERPs, payment gateways, and custom applications into a cohesive ecosystem. With robust error handling, webhook synchronization, and automated monitoring, your data flows seamlessly across systems with zero manual re-entry.",
    icon: "🔗",
    accentColor: "border-sky-500/40 text-sky-400 bg-sky-500/10",
    targetKeywords: [
      "API Integration Developer",
      "System Integration Architect",
      "REST API Developer",
      "GraphQL Integration Developer",
      "Microservices Developer"
    ],
    capabilities: [
      "RESTful and GraphQL API design, documentation, and versioning",
      "Bidirectional synchronization between CRMs (Salesforce, HubSpot), ERPs, and cloud databases",
      "Webhook ingestion engines with signature verification and asynchronous queue processing",
      "Stripe and payment gateway integration with subscription lifecycle handling",
      "Authentication and authorization architectures using OAuth 2.0, JWT, and API keys",
      "Automated health checks, rate limiting, and fault-tolerant retry queues"
    ],
    businessBenefits: [
      "Ensures business data is unified, up-to-date, and consistent across all corporate systems",
      "Eliminates duplicate manual data entry and human error between departments",
      "Provides automated error logging and alerting before minor hiccups impact operations",
      "Builds an extensible foundation ready for future software additions and partnerships"
    ],
    faqs: [
      {
        question: "How do you handle API rate limits and connection dropouts?",
        answer:
          "We construct fault-tolerant pipelines utilizing exponential backoff, dead-letter message queues, and idempotent webhooks so that momentary third-party outages never cause data loss or duplicate transactions."
      }
    ],
    relatedProjects: ["askx", "google-workspace-productivity-suite", "enterprise-cross-platform-automation"]
  }
];
