import type { ServicePageContent } from "@/data/service-pages-data";

export const additionalServicePagesData: ServicePageContent[] = [
  {
    slug: "microsoft-copilot-development",
    title: "Microsoft Copilot Development & Integration",
    pageHeading: "Microsoft Copilot Development & Integration",
    seoTitle: "Microsoft Copilot Development & Integration | Nadeem Ashfaq",
    seoDescription:
      "Microsoft Copilot development and integration for Microsoft 365 workflows, business data, AI experiences, Microsoft Graph, and connected applications.",
    shortDescription:
      "Copilot-related integrations connecting Microsoft 365 workflows, business data, and applications.",
    overview:
      "I help connect Microsoft Copilot-related experiences and Microsoft 365 workflows with business data and applications. The approach depends on the Copilot surface, available extensibility, Graph permissions, tenant configuration, and systems involved.",
    icon: "✦",
    accentColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    whatIBuild: [
      "Copilot-related business workflow integrations",
      "Microsoft Graph connectivity for supported data and actions",
      "Custom AI experiences connected to Microsoft applications",
      "Business data integrations",
      "Connections between Microsoft 365 and external applications"
    ],
    capabilities: [
      "Assess Copilot extensibility options for a defined use case",
      "Connect supported Microsoft 365 data using Microsoft Graph",
      "Plan Entra ID identity, permissions, and consent",
      "Integrate AI experiences with existing business applications",
      "Define user review and access controls for business workflows"
    ],
    whoFor: [
      "Organizations evaluating Copilot-related workflow extensions",
      "Teams connecting Microsoft 365 context to business applications",
      "Product teams adding AI experiences to Microsoft workflows",
      "Businesses assessing Copilot and Microsoft Graph integration options"
    ],
    technologyGroups: [
      { title: "Microsoft ecosystem", items: ["Microsoft 365 Copilot", "Microsoft Graph", "Microsoft 365", "SharePoint"] },
      { title: "Identity & application integration", items: ["Microsoft Entra ID", "MSAL", "OAuth 2.0", "REST APIs", "AI/LLM APIs"] }
    ],
    existingApplicationNote:
      "Copilot-related work can connect with an existing Microsoft 365 tenant, business application, or API. Extensibility, data access, and deployment depend on licensing, tenant settings, permissions, and the Copilot experience involved.",
    relatedServices: ["microsoft-365-development", "dynamics-365-development", "power-platform-development", "ai-development", "api-integration"],
    relevantWork: [],
    faqs: [
      { question: "What is Microsoft Copilot development?", answer: "Microsoft Copilot development and integration connects supported Copilot experiences with Microsoft 365 workflows, business data, and applications using the available Microsoft extensibility options." },
      { question: "Can Microsoft Copilot connect to business data?", answer: "Copilot-related experiences can use business data when an appropriate integration is available and the data source, identity, permissions, and tenant configuration are set up for it." },
      { question: "Can Copilot work with Microsoft Graph?", answer: "Microsoft Graph can provide access to supported Microsoft 365 data and actions. The specific integration depends on the Copilot surface, permissions, consent, and API availability." },
      { question: "Can you integrate AI into an existing Microsoft 365 workflow?", answer: "Yes. AI can be integrated into a Microsoft 365 workflow using supported APIs and extensibility options, with access controls and human review designed for the use case." },
      { question: "Can Copilot-related solutions connect with external systems?", answer: "External systems can be connected through supported APIs or integration services when the selected Copilot experience allows it and authentication, permissions, and data handling are addressed." }
    ],
    ctaTitle: "Exploring a Copilot integration?",
    ctaDescription: "Share the Copilot experience, business data, tenant requirements, and workflow you want to connect so I can assess the available options."
  },
  {
    slug: "dynamics-365-development",
    title: "Dynamics 365 Integration & Business Applications",
    pageHeading: "Dynamics 365 Development & Integration",
    seoTitle: "Dynamics 365 Development & Integration | Nadeem Ashfaq",
    seoDescription:
      "Dynamics 365 development and integration for business applications, APIs, Microsoft services, custom workflows, and connected business systems.",
    shortDescription:
      "Connect Dynamics 365 and Dataverse with business applications, workflows, and APIs.",
    overview:
      "I focus on Dynamics 365 integration and connected business application work: linking Dynamics data and workflows with Microsoft services, Power Platform, custom applications, and external APIs. Scope depends on the Dynamics products, environment, and integration requirements.",
    icon: "↔",
    accentColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    whatIBuild: [
      "Dynamics 365 integrations with external applications",
      "Dataverse integrations",
      "Custom business workflows",
      "REST and API integrations",
      "Power Platform-connected processes",
      "Business data synchronization",
      "Microsoft Graph integrations where relevant"
    ],
    capabilities: [
      "Connect Dynamics 365 with APIs and business systems",
      "Plan Dataverse data access and integration flows",
      "Build Power Platform workflows around connected data",
      "Integrate Microsoft services where supported by the use case",
      "Design synchronization, validation, and failure handling"
    ],
    whoFor: [
      "Teams connecting Dynamics 365 to another business system",
      "Organizations automating workflows around Dynamics data",
      "Businesses integrating Dataverse with applications or APIs",
      "Product teams connecting Microsoft business data with a SaaS product"
    ],
    technologyGroups: [
      { title: "Microsoft business applications", items: ["Dynamics 365", "Dataverse", "Power Apps", "Power Automate"] },
      { title: "Integration technologies", items: ["REST APIs", "Microsoft Graph", "OAuth 2.0", "Webhooks", "Data synchronization"] }
    ],
    existingApplicationNote:
      "Integration work can be scoped around an existing Dynamics 365 environment, Dataverse setup, API, or business application. Product-specific APIs, licensing, permissions, and data ownership are reviewed before selecting an approach.",
    relatedServices: ["microsoft-365-development", "microsoft-copilot-development", "power-platform-development", "api-integration"],
    relevantWork: [],
    faqs: [
      { question: "Do you offer Dynamics 365 integration?", answer: "Yes. The focus is connecting Dynamics 365 and Dataverse with applications, APIs, Microsoft services, and business workflows based on the products and environment involved." },
      { question: "Can Dynamics 365 connect to an external API?", answer: "Dynamics-related workflows can connect to external APIs through supported integration methods, with authentication, permissions, data mapping, and platform limits considered." },
      { question: "Can Dataverse integrate with Power Platform?", answer: "Dataverse can be used with Power Apps and Power Automate where the environment, permissions, connectors, and licensing support the intended solution." },
      { question: "Can you synchronize Dynamics data with another system?", answer: "Data synchronization can be designed when both systems provide suitable integration methods. The design should define data ownership, update direction, conflict handling, and retry behavior." },
      { question: "Is this a full Dynamics 365 customization service?", answer: "This service focuses on integration and connected business application development. Product-specific customization requirements should be reviewed to confirm fit and platform constraints." }
    ],
    ctaTitle: "Need Dynamics 365 connected to another system?",
    ctaDescription: "Tell me which Dynamics products and data are involved, the systems to connect, and how the workflow should behave."
  },
  {
    slug: "whatsapp-ai-bot-development",
    title: "WhatsApp AI Bot Development",
    pageHeading: "WhatsApp AI Bot Development",
    seoTitle: "WhatsApp AI Bot Development | WhatsApp API & AI Integration",
    seoDescription:
      "Custom WhatsApp AI bots using the WhatsApp Business Platform, AI models, APIs, automation workflows, and business system integrations.",
    shortDescription:
      "WhatsApp Business Platform workflows connected to AI, APIs, and business systems.",
    overview:
      "I build WhatsApp-based AI workflows that connect the WhatsApp Business Platform with AI models, APIs, business systems, and automation services. Implementation depends on the approved WhatsApp API setup, messaging policies, data sources, and where human handoff is required.",
    icon: "◉",
    accentColor: "border-green-500/40 text-green-400 bg-green-500/10",
    whatIBuild: [
      "AI-powered WhatsApp chatbots",
      "Customer support and FAQ flows",
      "Knowledge-base question answering",
      "Lead qualification workflows",
      "CRM and business API integrations",
      "Automated notifications",
      "Human handoff workflows",
      "AI-assisted business processes"
    ],
    capabilities: [
      "WhatsApp Business Platform integration planning",
      "Webhook-based message handling",
      "Connect AI models to approved knowledge and APIs",
      "CRM and business-system workflow integration",
      "Human escalation and review paths",
      "Message policy, consent, security, and error handling"
    ],
    whoFor: [
      "Businesses automating customer questions or support triage",
      "Teams qualifying incoming leads through WhatsApp",
      "Organizations connecting messaging workflows with a CRM",
      "Product teams adding conversational AI to an approved WhatsApp channel"
    ],
    technologyGroups: [
      { title: "Messaging & backend", items: ["WhatsApp Business Platform", "Webhooks", "Python", "Node.js"] },
      { title: "AI & integrations", items: ["AI/LLM APIs", "Knowledge bases", "REST APIs", "CRM integrations", "Human handoff"] }
    ],
    architectureFlow: {
      title: "A typical WhatsApp AI workflow",
      steps: ["Customer", "WhatsApp Business Platform", "Webhook and backend", "Python or Node.js service", "AI model and approved tools", "Knowledge base or business APIs", "Response or human handoff"]
    },
    existingApplicationNote:
      "A bot can connect to an existing CRM, database, API, or support process. The design must account for WhatsApp Business account approval, messaging policies, consent, data privacy, rate limits, and escalation to a person.",
    relatedServices: ["ai-development", "api-integration", "dynamics-365-development", "browser-extension-development"],
    relevantWork: [],
    faqs: [
      { question: "Can you build an AI bot for WhatsApp?", answer: "Yes. A WhatsApp workflow can connect the WhatsApp Business Platform with an AI model, approved knowledge sources, APIs, and business processes, subject to platform approval and messaging policies." },
      { question: "Can a WhatsApp bot answer questions from a knowledge base?", answer: "A bot can retrieve relevant information from an approved knowledge source and use it to draft a response. The design should handle missing or uncertain answers and offer escalation when needed." },
      { question: "Can a WhatsApp AI bot connect to a CRM?", answer: "Yes. A bot can exchange data with a CRM through supported APIs, with user consent, access controls, data mapping, and the CRM’s integration limits considered." },
      { question: "Can a WhatsApp bot hand a conversation to a person?", answer: "Yes. Human handoff can be included so a person can take over when the bot cannot answer, the user requests help, or a workflow requires review." },
      { question: "Does a WhatsApp bot require the WhatsApp Business Platform?", answer: "Business messaging automation generally requires an approved WhatsApp Business Platform setup or an authorized provider. Account eligibility, templates, and messaging policies apply." }
    ],
    ctaTitle: "Planning a WhatsApp AI workflow?",
    ctaDescription: "Share the customer journey, WhatsApp account setup, data sources, integrations, and handoff rules you need to support."
  },
  {
    slug: "browser-extension-development",
    title: "Browser Extension Development",
    pageHeading: "Browser Extension Development",
    seoTitle: "Browser Extension Development | Chrome & Edge Extensions",
    seoDescription:
      "Custom browser extension development for Chrome and Edge using JavaScript, TypeScript, React, Manifest V3, APIs, authentication, and business integrations.",
    shortDescription:
      "Chrome and Edge extensions for productivity, workflows, APIs, and AI features.",
    overview:
      "I build custom browser extensions that add business functionality directly to the browser, from productivity tools and workflow automation to API-connected applications and AI-powered features. Browser permissions, data access, and store requirements are considered during design.",
    icon: "⊞",
    accentColor: "border-sky-500/40 text-sky-400 bg-sky-500/10",
    whatIBuild: [
      "Chrome extensions",
      "Microsoft Edge extensions",
      "Manifest V3 extensions",
      "Productivity and business workflow extensions",
      "API-connected extensions",
      "AI-powered browser tools",
      "Internal business extensions",
      "SaaS companion extensions"
    ],
    capabilities: [
      "Popup, settings, and options interfaces",
      "Content scripts and page-context interactions",
      "Background service-worker logic and extension messaging",
      "Browser storage and context-menu actions",
      "REST API and backend connections",
      "Authentication and permissions planning",
      "Manifest V3 design and packaging"
    ],
    whoFor: [
      "SaaS companies adding a browser companion to a product",
      "Businesses streamlining browser-based tasks",
      "Teams connecting web workflows to business APIs",
      "Product teams exploring browser-based AI assistance"
    ],
    technologyGroups: [
      { title: "Extension development", items: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Manifest V3"] },
      { title: "Browser APIs & integrations", items: ["Chrome Extensions APIs", "Microsoft Edge Extensions APIs", "REST APIs", "OAuth 2.0", "Node.js", "AI/LLM APIs"] }
    ],
    existingApplicationNote:
      "An extension can act as a companion to an existing SaaS product or call its backend APIs. Permissions, authentication, content-script scope, browser policies, and secure handling of tokens and data must be planned carefully.",
    relatedServices: ["full-stack-development", "ai-development", "api-integration", "whatsapp-ai-bot-development"],
    relevantWork: [],
    faqs: [
      { question: "What is a browser extension?", answer: "A browser extension is a small application that adds features, interfaces, or integrations to a web browser and its workflows." },
      { question: "Can you build Chrome extensions?", answer: "Yes. Chrome extensions can be built using JavaScript or TypeScript and supported extension APIs, including Manifest V3 where appropriate." },
      { question: "Can you build Microsoft Edge extensions?", answer: "Yes. Chromium-based Edge extensions can use many of the same technologies and APIs as Chrome extensions, subject to browser-specific policies and requirements." },
      { question: "Can a browser extension connect to an API?", answer: "Yes. An extension can communicate with backend APIs and external services when permissions, authentication, browser policies, and security controls are configured correctly." },
      { question: "Can you build AI-powered browser extensions?", answer: "Yes. An extension can connect to an AI backend or API for tasks such as summarization, content analysis, writing support, or business workflows, with data access and privacy considered." },
      { question: "Can a browser extension integrate with a SaaS application?", answer: "Yes. An extension can provide a browser interface to a SaaS product or communicate with its APIs, depending on the product’s authentication and integration capabilities." }
    ],
    ctaTitle: "Have a browser workflow worth extending?",
    ctaDescription: "Describe the browser task, target browsers, pages or data involved, and any APIs or products the extension should connect to."
  }
];
