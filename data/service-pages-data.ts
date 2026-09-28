import type { FAQItem } from "@/types/portfolio";
import { additionalServicePagesData } from "@/data/additional-service-pages-data";

export type ServiceTechnologyGroup = {
  title: string;
  items: string[];
};

export type ServicePageContent = {
  slug: string;
  title: string;
  pageHeading: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  overview: string;
  icon: string;
  accentColor: string;
  whatIBuild: string[];
  capabilities: string[];
  whoFor: string[];
  technologyGroups: ServiceTechnologyGroup[];
  architectureFlow?: { title: string; steps: string[] };
  existingApplicationNote: string;
  relatedServices: string[];
  relevantWork: { title: string; description: string; href: string; linkLabel: string }[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
};

const askxWork = [
  {
    title: "AskX",
    description: "AI-powered SaaS chatbot and knowledge platform.",
    href: "https://askx.io/",
    linkLabel: "Visit AskX"
  }
];

const coreServicePagesData: ServicePageContent[] = [
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    pageHeading: "Full-Stack Development Services",
    seoTitle: "Full-Stack Development Services | Nadeem Ashfaq",
    seoDescription:
      "Custom full-stack web application development using React, Next.js, TypeScript, Node.js, .NET, databases, APIs, and modern cloud platforms.",
    shortDescription:
      "Custom web applications built across frontend, backend, data, APIs, and deployment.",
    overview:
      "I build complete web applications across the frontend, backend, APIs, databases, authentication, integrations, and deployment. The technical approach is chosen around the product requirements, users, and systems already in place.",
    icon: "🌐",
    accentColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    whatIBuild: [
      "Custom web applications",
      "SaaS applications",
      "Business applications and internal tools",
      "Dashboards and administration systems",
      "API-driven applications",
      "AI-enabled web applications",
      "Third-party integrations"
    ],
    capabilities: [
      "Frontend and backend application development",
      "Application and database architecture",
      "Authentication and authorization flows",
      "REST and GraphQL API development",
      "Data modeling across relational and document databases",
      "Cloud deployment and application integration",
      "Python backend services, REST APIs, automation scripts, and data processing"
    ],
    whoFor: [
      "Startups building a new product",
      "SaaS companies extending an application",
      "Businesses replacing manual processes with internal tools",
      "Teams needing additional application engineering capacity",
      "Organizations connecting existing systems"
    ],
    technologyGroups: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Responsive interfaces", "Component-based architecture"] },
      { title: "Backend & APIs", items: ["Node.js", "Express", "Python", ".NET", "REST APIs", "GraphQL", "Authentication and authorization"] },
      { title: "Data", items: ["PostgreSQL", "SQL Server", "MongoDB"] },
      { title: "Cloud & delivery", items: ["Azure", "Vercel", "Docker", "CI/CD"] }
    ],
    existingApplicationNote:
      "I can work with an existing React or Next.js frontend, Node.js or .NET backend, database, API, or deployment setup. The first step is understanding the current architecture and the change you need.",
    relatedServices: ["ai-development", "api-integration", "browser-extension-development", "microsoft-365-development", "google-workspace-add-on-development"],
    relevantWork: askxWork,
    faqs: [
      { question: "What does a full-stack developer build?", answer: "A full-stack developer can build the user-facing application and the supporting backend, data layer, APIs, authentication, and integrations that make it work as a complete product." },
      { question: "Can you build a complete SaaS application?", answer: "Yes. A SaaS application can include its frontend, backend, data model, user access, integrations, and deployment. The scope and architecture depend on the product requirements." },
      { question: "Can you work with an existing codebase?", answer: "Yes. Work can begin with reviewing the current application, architecture, and requirements before planning changes or new features." },
      { question: "Can you integrate third-party APIs?", answer: "Yes. Applications can connect to third-party APIs using the authentication, data handling, and integration approach supported by the service and project requirements." },
      { question: "Can you build both the frontend and backend?", answer: "Yes. The work can cover frontend interfaces, backend services, databases, APIs, authentication, and deployment as needed." }
    ],
    ctaTitle: "Planning a web application or SaaS product?",
    ctaDescription: "Share the product goal, current systems, and technical constraints. We can discuss a practical full-stack approach."
  },
  {
    slug: "microsoft-365-development",
    title: "Microsoft 365 Development",
    pageHeading: "Microsoft 365 Development Services",
    seoTitle: "Microsoft 365 Development Services | Nadeem Ashfaq",
    seoDescription:
      "Microsoft 365 development services covering Microsoft Graph, SharePoint, Teams, Office Add-ins, Entra ID, Power Platform, and custom business integrations.",
    shortDescription:
      "Applications and integrations connecting business workflows across Microsoft 365.",
    overview:
      "I build applications and integrations around the Microsoft 365 ecosystem. Solutions can connect SharePoint, Office, Teams, Microsoft Graph, identity, and Power Platform with existing business applications and workflows.",
    icon: "🪟",
    accentColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    whatIBuild: [
      "Microsoft Graph integrations",
      "SharePoint solutions",
      "Office Add-ins",
      "Teams applications and extensions",
      "Microsoft identity integrations",
      "Power Platform solutions",
      "Connections between Microsoft 365 and business systems"
    ],
    capabilities: [
      "Microsoft Graph access to mail, calendar, OneDrive, SharePoint, users, and Teams data where permitted",
      "Entra ID and MSAL authentication flows",
      "OAuth 2.0, single sign-on, delegated and application permissions",
      "Microsoft 365 integrations for existing applications",
      "Workflow connections across Microsoft 365 and external services"
    ],
    whoFor: [
      "Organizations extending Microsoft 365 workflows",
      "Product teams integrating Microsoft 365 with a SaaS application",
      "Businesses connecting SharePoint, Office, or Teams to other systems",
      "Teams planning a custom Microsoft 365 application or integration"
    ],
    technologyGroups: [
      { title: "Microsoft services", items: ["Microsoft Graph", "SharePoint Online", "Microsoft Teams", "OneDrive", "Office Add-ins"] },
      { title: "Identity & access", items: ["Microsoft Entra ID", "MSAL", "OAuth 2.0", "Single sign-on", "Delegated permissions", "Application permissions"] },
      { title: "Application technologies", items: ["React", "TypeScript", "Office.js", "SPFx", "Power Apps", "Power Automate"] }
    ],
    existingApplicationNote:
      "Microsoft 365 integrations can be planned around an existing tenant, SaaS product, API, or line-of-business application. Available data and actions depend on consent, permissions, and the Microsoft APIs involved.",
    relatedServices: ["microsoft-copilot-development", "dynamics-365-development", "sharepoint-spfx-development", "office-add-in-development", "power-platform-development", "api-integration"],
    relevantWork: [],
    faqs: [
      { question: "What is Microsoft 365 development?", answer: "Microsoft 365 development means building applications, extensions, and integrations that work with services such as SharePoint, Office, Teams, and Microsoft Graph." },
      { question: "Can you integrate Microsoft Graph with a custom application?", answer: "Yes. A custom application can use Microsoft Graph for supported Microsoft 365 data and actions, subject to the required permissions, user consent, and API availability." },
      { question: "Can you build Microsoft 365 integrations for an existing SaaS product?", answer: "Yes. Microsoft 365 capabilities can be connected to an existing SaaS product through supported APIs and identity flows, with scope based on the product and tenant requirements." },
      { question: "Can you implement Microsoft Entra ID authentication?", answer: "Authentication can be implemented using Microsoft Entra ID and MSAL, with delegated or application permissions selected for the application’s access needs." },
      { question: "Can Microsoft 365 connect with external business systems?", answer: "Yes. Microsoft 365 services can be integrated with external applications and APIs when supported by the relevant API, permissions, and security requirements." }
    ],
    ctaTitle: "Need a Microsoft 365 solution around an existing workflow?",
    ctaDescription: "Describe the Microsoft 365 services, users, and business systems involved, and we can discuss the integration requirements."
  },
  {
    slug: "sharepoint-spfx-development",
    title: "SharePoint & SPFx Development",
    pageHeading: "SharePoint & SPFx Development",
    seoTitle: "SharePoint & SPFx Development Services | Nadeem Ashfaq",
    seoDescription:
      "SharePoint Online and SPFx development for custom web parts, extensions, business applications, Microsoft Graph integrations, and modern intranets.",
    shortDescription:
      "SharePoint Online solutions, SPFx components, and Microsoft 365 integrations.",
    overview:
      "I build SharePoint Online solutions using the SharePoint Framework, React, TypeScript, and Microsoft APIs. This can include web parts, extensions, custom interfaces, and connections to Microsoft Graph or business systems.",
    icon: "🏗️",
    accentColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    whatIBuild: [
      "SharePoint Online solutions",
      "SPFx web parts and extensions",
      "Custom SharePoint interfaces and forms",
      "SharePoint business applications",
      "Microsoft Graph integrations",
      "Data-connected web parts",
      "Intranet and department experiences"
    ],
    capabilities: [
      "SPFx components built with React and TypeScript",
      "SharePoint API and Microsoft Graph integrations",
      "Fluent UI-based interfaces",
      "Custom views for business processes and data",
      "Integration with Power Platform and external APIs"
    ],
    whoFor: [
      "Organizations extending SharePoint Online",
      "Teams replacing manual or disconnected SharePoint processes",
      "Businesses building internal portals or department tools",
      "Microsoft 365 teams connecting SharePoint to external data"
    ],
    technologyGroups: [
      { title: "SharePoint development", items: ["SharePoint Online", "SharePoint Framework (SPFx)", "Web parts", "Extensions", "SharePoint APIs"] },
      { title: "Frontend & Microsoft APIs", items: ["React", "TypeScript", "Fluent UI", "Microsoft Graph", "Power Automate"] }
    ],
    existingApplicationNote:
      "Work can be scoped around an existing SharePoint Online tenant, site structure, permissions, APIs, and Microsoft 365 environment. Deployment and access requirements are reviewed before selecting an approach.",
    relatedServices: ["microsoft-365-development", "power-platform-development", "office-add-in-development", "api-integration"],
    relevantWork: [],
    faqs: [
      { question: "What is SPFx?", answer: "The SharePoint Framework (SPFx) is Microsoft’s client-side development model for building SharePoint web parts and extensions using modern web technologies." },
      { question: "Can you build custom SharePoint web parts?", answer: "Yes. Custom SPFx web parts can present business data, forms, dashboards, and workflow interfaces within SharePoint Online." },
      { question: "Can SPFx connect to Microsoft Graph?", answer: "Yes. An SPFx solution can call supported Microsoft Graph endpoints when the required API permissions and consent are configured." },
      { question: "Can you customize SharePoint Online?", answer: "Yes. SharePoint Online can be extended with SPFx web parts, extensions, and custom interfaces, subject to platform capabilities and tenant policies." },
      { question: "Do SPFx solutions work with modern SharePoint?", answer: "SPFx is designed for modern SharePoint experiences. Specific features and deployment behavior should be checked against the target tenant and requirements." }
    ],
    ctaTitle: "Planning a SharePoint or SPFx solution?",
    ctaDescription: "Share your SharePoint environment, users, and workflow needs so we can identify the right extension or integration approach."
  },
  {
    slug: "office-add-in-development",
    title: "Office Add-in Development",
    pageHeading: "Microsoft Office Add-in Development",
    seoTitle: "Office Add-in Development | Word, Excel, Outlook & PowerPoint",
    seoDescription:
      "Custom Microsoft Office Add-ins for Word, Excel, Outlook, and PowerPoint using Office.js, React, TypeScript, Microsoft Graph, and business APIs.",
    shortDescription:
      "Custom Office Add-ins for Word, Excel, Outlook, and PowerPoint using web technologies.",
    overview:
      "I build custom Microsoft Office Add-ins for Word, Excel, Outlook, and PowerPoint using Office.js and web technologies. Add-ins can bring business data, APIs, and workflow actions into Office, with compatibility planned for the target clients and required API sets.",
    icon: "📝",
    accentColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    whatIBuild: [
      "Word Add-ins",
      "Excel Add-ins",
      "Outlook Add-ins",
      "PowerPoint Add-ins",
      "Task pane and dialog experiences",
      "Office workflows connected to APIs and business systems"
    ],
    capabilities: [
      "Office.js task pane and dialog add-ins",
      "Excel custom functions and data-connected workflows",
      "Word document automation and content-control workflows",
      "Outlook read and compose experiences",
      "PowerPoint workflows connected to data or services",
      "Microsoft Graph and external API integration",
      "Authentication and deployment planning"
    ],
    whoFor: [
      "Businesses bringing existing data into Word, Excel, Outlook, or PowerPoint",
      "SaaS teams extending their product into Office workflows",
      "Organizations automating document, spreadsheet, email, or presentation tasks",
      "Teams planning a new add-in or evaluating an existing Office extension"
    ],
    technologyGroups: [
      { title: "Office clients", items: ["Word", "Excel", "Outlook", "PowerPoint"] },
      { title: "Development", items: ["Office.js", "React", "TypeScript", "Fluent UI"] },
      { title: "Integrations & identity", items: ["Microsoft Graph", "Microsoft Entra ID", "MSAL", "OAuth 2.0", "REST APIs"] }
    ],
    existingApplicationNote:
      "An add-in can connect to an existing SaaS product, API, or Microsoft 365 environment. Requirements are checked against target Office clients, supported Office.js APIs, authentication needs, and tenant deployment policies.",
    relatedServices: ["microsoft-365-development", "sharepoint-spfx-development", "api-integration"],
    relevantWork: [],
    faqs: [
      { question: "What is a Microsoft Office Add-in?", answer: "An Office Add-in is a web-based extension that adds functionality to Office applications such as Word, Excel, Outlook, and PowerPoint using web technologies and Office.js APIs." },
      { question: "Can you build Excel Add-ins?", answer: "Yes. Excel Add-ins can provide task panes, connect to APIs, work with workbook data, and use custom functions where supported by the target Excel clients." },
      { question: "Can you build Word Add-ins?", answer: "Yes. Word Add-ins can support document workflows, insert or manage content, and connect documents to business services, depending on the requirements and available APIs." },
      { question: "Can you build Outlook Add-ins?", answer: "Yes. Outlook Add-ins can provide experiences for supported read or compose scenarios, such as displaying contextual information or connecting an email workflow to a business system." },
      { question: "Can you build PowerPoint Add-ins?", answer: "Yes. PowerPoint Add-ins can support custom presentation workflows and connect to data or external services, subject to the Office.js APIs available in target clients." },
      { question: "Can an Office Add-in connect to an external API?", answer: "Yes. An add-in can call an external API when network access, authentication, CORS, and deployment requirements are configured appropriately." },
      { question: "Can an Office Add-in use Microsoft Graph?", answer: "Yes. Microsoft Graph can be integrated when the required identity flow, API permissions, consent, and supported Office client requirements are addressed." },
      { question: "Do Office Add-ins work on Windows, Mac, and the web?", answer: "Office Add-ins use web technologies and can target supported Office environments. Compatibility depends on the Office client, required API set, manifest, and deployment requirements." }
    ],
    ctaTitle: "Need a custom Word, Excel, Outlook, or PowerPoint Add-in?",
    ctaDescription: "Tell me what the add-in should do, which Office clients it must support, and what systems it needs to connect to."
  },
  {
    slug: "google-workspace-add-on-development",
    title: "Google Workspace Add-on Development",
    pageHeading: "Google Workspace Add-on Development",
    seoTitle: "Google Workspace Add-on Development | Gmail, Sheets & Docs",
    seoDescription:
      "Custom Google Workspace Add-ons and integrations for Gmail, Google Sheets, Docs, Drive, and business workflows using Workspace APIs, Apps Script, and OAuth.",
    shortDescription:
      "Google Workspace Add-ons and integrations for Gmail, Docs, Sheets, and Drive.",
    overview:
      "I develop Google Workspace Add-ons and integrations for Gmail, Google Sheets, Docs, and Drive. Solutions can connect Workspace tools with business APIs and workflows, using Apps Script or Workspace APIs where they fit the requirements.",
    icon: "📑",
    accentColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    whatIBuild: [
      "Gmail Add-ons",
      "Google Sheets integrations",
      "Google Docs integrations",
      "Google Drive integrations",
      "Workspace automation",
      "External API integrations",
      "Business data synchronization",
      "AI-enabled Workspace workflows"
    ],
    capabilities: [
      "Add-on experiences for Gmail and other supported Workspace surfaces",
      "Apps Script automation and event-driven workflows",
      "Google Workspace API integrations",
      "OAuth 2.0 authentication and permission scope planning",
      "Data exchange between Workspace and external business applications"
    ],
    whoFor: [
      "Teams using Google Workspace for daily business workflows",
      "Businesses connecting Gmail, Sheets, Docs, or Drive to other systems",
      "Product teams adding Workspace integrations to a SaaS product",
      "Organizations automating repetitive Workspace tasks"
    ],
    technologyGroups: [
      { title: "Workspace products", items: ["Gmail", "Google Sheets", "Google Docs", "Google Drive"] },
      { title: "Development & APIs", items: ["Google Workspace APIs", "Google Apps Script", "OAuth 2.0", "REST APIs"] }
    ],
    existingApplicationNote:
      "Workspace integrations can be designed around an existing Google Workspace environment, business API, or SaaS product. Available features depend on the Workspace surface, API scopes, user consent, and Google platform requirements.",
    relatedServices: ["api-integration", "ai-development", "full-stack-development"],
    relevantWork: [],
    faqs: [
      { question: "What is a Google Workspace Add-on?", answer: "A Google Workspace Add-on extends supported Workspace applications with contextual interfaces and actions that can connect to business data or services." },
      { question: "Can you build Gmail Add-ons?", answer: "Yes. Gmail Add-ons can support email-related workflows and integrations, subject to Gmail’s platform requirements and the scopes the application needs." },
      { question: "Can Google Sheets connect to an external API?", answer: "Yes. Google Sheets can connect to an external API using Apps Script or an application backend, with authentication and data access configured for the use case." },
      { question: "Can Workspace Add-ons use OAuth?", answer: "Workspace integrations can use OAuth 2.0 where required. Scopes and consent should be limited to the data and actions the solution needs." },
      { question: "Can AI be integrated into Google Workspace?", answer: "AI features can be connected to Workspace workflows through APIs, subject to data handling, user consent, security, and the requirements of the AI provider." }
    ],
    ctaTitle: "Need a Gmail, Sheets, Docs, or Drive integration?",
    ctaDescription: "Describe the Workspace workflow, the external systems involved, and the data permissions the solution will need."
  },
  {
    slug: "power-platform-development",
    title: "Power Platform Development",
    pageHeading: "Power Apps & Power Automate Development",
    seoTitle: "Power Apps & Power Automate Development | Nadeem Ashfaq",
    seoDescription:
      "Custom Power Apps and Power Automate solutions for business applications, workflow automation, data integration, and Microsoft 365 processes.",
    shortDescription:
      "Power Apps and Power Automate solutions for business workflows and applications.",
    overview:
      "I build Power Apps and Power Automate solutions for business applications and workflows. Apps and flows can use SharePoint, Microsoft 365, supported APIs, and other connected data sources based on licensing, environment, and access requirements.",
    icon: "⚡",
    accentColor: "border-orange-500/40 text-orange-400 bg-orange-500/10",
    whatIBuild: [
      "Canvas apps",
      "Internal business applications and tools",
      "Forms and data-driven apps",
      "Approval workflows",
      "Microsoft 365 automation",
      "Notifications and process automation",
      "API-connected workflows",
      "Data synchronization flows"
    ],
    capabilities: [
      "Power Apps interfaces for business processes",
      "Power Automate workflows and approvals",
      "SharePoint and Microsoft 365 integrations",
      "Custom connectors for supported REST APIs",
      "Data and permissions planning for Power Platform environments"
    ],
    whoFor: [
      "Teams replacing spreadsheet-based processes",
      "Departments needing a focused internal application",
      "Organizations automating Microsoft 365 workflows",
      "Businesses connecting Power Platform to existing data and APIs"
    ],
    technologyGroups: [
      { title: "Power Platform", items: ["Power Apps", "Power Automate", "Custom connectors"] },
      { title: "Connected services", items: ["SharePoint", "Microsoft 365", "Microsoft Graph", "REST APIs"] }
    ],
    existingApplicationNote:
      "An existing Power Platform application or flow can be extended after reviewing its environment, connectors, data sources, permissions, and licensing constraints.",
    relatedServices: ["microsoft-365-development", "sharepoint-spfx-development", "api-integration"],
    relevantWork: [],
    faqs: [
      { question: "What can Power Apps be used for?", answer: "Power Apps can be used to build business applications such as forms, internal tools, and data-driven interfaces, depending on the selected app type and connected services." },
      { question: "Can Power Apps connect to SharePoint?", answer: "Yes. Power Apps can use SharePoint as a data source when the environment, permissions, connectors, and licensing support the intended scenario." },
      { question: "Can Power Automate integrate with external APIs?", answer: "Power Automate can connect to external services through available connectors or custom connectors, subject to authentication, licensing, and API requirements." },
      { question: "Can you automate Microsoft 365 workflows?", answer: "Yes. Power Automate can coordinate workflows involving supported Microsoft 365 services, with permissions and trigger/action support depending on the scenario." },
      { question: "Can you work with an existing Power Platform application?", answer: "Yes. Existing apps and flows can be reviewed and extended based on their environment, data model, connectors, and requirements." }
    ],
    ctaTitle: "Need a Power App or automated workflow?",
    ctaDescription: "Share the current process, data sources, users, and environment constraints so we can scope a suitable Power Platform solution."
  },
  {
    slug: "ai-development",
    title: "AI Development",
    pageHeading: "AI Development & AI-Powered Applications",
    seoTitle: "AI Development Services | AI Applications, RAG & AI Agents",
    seoDescription:
      "AI development for chatbots, RAG applications, AI agents, knowledge bases, LLM integrations, workflow automation, and AI-powered SaaS products.",
    shortDescription:
      "AI applications, knowledge systems, LLM integrations, and workflow automation.",
    overview:
      "I build AI features and applications that connect language models to useful product and business workflows. Depending on the use case, this can include chatbots, retrieval-augmented generation (RAG), document processing, API-connected actions, or AI-enabled SaaS features.",
    icon: "🤖",
    accentColor: "border-teal-500/40 text-teal-400 bg-teal-500/10",
    whatIBuild: [
      "AI chatbots",
      "RAG applications and knowledge-based search",
      "LLM integrations",
      "AI agents with defined tools and actions",
      "AI features for SaaS products",
      "Document and data processing workflows",
      "API-connected AI systems",
      "Business workflow automation"
    ],
    capabilities: [
      "Connect model APIs to application workflows",
      "Retrieve relevant content from supplied knowledge sources",
      "Design prompt, context, and response handling",
      "Connect AI features to APIs and business systems",
      "Define human review and approval points for consequential actions",
      "Plan data handling, access, evaluation, and failure behavior"
    ],
    whoFor: [
      "Product teams adding AI features to an existing application",
      "Businesses exploring chat over internal knowledge sources",
      "SaaS companies integrating LLM capabilities",
      "Teams automating defined document or information workflows"
    ],
    technologyGroups: [
      { title: "Models & application integration", items: ["Python", "OpenAI", "LLM APIs", "TypeScript", "Node.js", "REST APIs"] },
      { title: "Knowledge retrieval", items: ["RAG", "Embeddings", "Vector search", "Knowledge bases"] },
      { title: "Workflow controls", items: ["Tool calling", "Human review", "Evaluation", "Access controls"] }
    ],
    existingApplicationNote:
      "AI can be added to an existing web application, SaaS product, or business workflow. Integration planning should account for data access, provider terms, latency, evaluation, human approval, and failure handling.",
    relatedServices: ["full-stack-development", "api-integration", "whatsapp-ai-bot-development", "microsoft-copilot-development", "microsoft-365-development", "google-workspace-add-on-development"],
    relevantWork: askxWork,
    faqs: [
      { question: "What is a RAG application?", answer: "Retrieval-augmented generation (RAG) retrieves relevant information from a knowledge source and provides it as context to a language model when generating a response." },
      { question: "Can you build an AI chatbot using company documents?", answer: "A chatbot can be connected to approved document sources using a retrieval pipeline. The design should account for document access, indexing, answer quality, and how the system handles missing information." },
      { question: "Can AI connect to an existing SaaS application?", answer: "Yes. AI capabilities can be integrated into an existing SaaS application through model APIs and the product’s backend, with data permissions and user experience defined for the use case." },
      { question: "What is an AI agent?", answer: "An AI agent is an application pattern in which a model selects from a defined set of tools or actions to complete a task, usually within limits set by the system." },
      { question: "Can AI agents call APIs?", answer: "Yes. An agent can be given access to specific API-backed tools. Authentication, permissions, input validation, action limits, and human approval should be designed explicitly." },
      { question: "Can AI be integrated into an existing application?", answer: "Yes. AI can be added as a focused feature or workflow in an existing application, subject to the architecture, data access, user needs, and provider requirements." }
    ],
    ctaTitle: "Have an AI feature or workflow to build?",
    ctaDescription: "Let’s clarify the use case, data sources, expected behavior, and where human review belongs before choosing an AI approach."
  },
  {
    slug: "api-integration",
    title: "API Integration",
    pageHeading: "API Integration & Custom API Development",
    seoTitle: "API Integration & Custom API Development | Nadeem Ashfaq",
    seoDescription:
      "Custom API development and third-party integrations using REST, GraphQL, webhooks, authentication, data synchronization, and business system integrations.",
    shortDescription:
      "APIs and integrations connecting applications, platforms, and business systems.",
    overview:
      "I build APIs and integrations that help applications exchange data and coordinate workflows. The approach can include REST or GraphQL APIs, webhooks, authentication, validation, and synchronization between services, based on the systems involved.",
    icon: "🔗",
    accentColor: "border-sky-500/40 text-sky-400 bg-sky-500/10",
    whatIBuild: [
      "REST APIs",
      "GraphQL APIs",
      "Third-party API integrations",
      "Webhook-based workflows",
      "Data synchronization",
      "Authentication and authorization flows",
      "Business system integrations",
      "API-connected AI workflows"
    ],
    capabilities: [
      "API design and implementation",
      "OAuth, API-key, and token-based access patterns",
      "Webhook validation and event handling",
      "Input validation and authorization checks",
      "Rate-limit handling and retry strategies",
      "Secure secret management and integration monitoring"
    ],
    whoFor: [
      "Businesses connecting two or more existing systems",
      "Product teams adding integrations to a SaaS application",
      "Organizations synchronizing data between platforms",
      "Teams building or extending an API for internal or external use"
    ],
    technologyGroups: [
      { title: "API patterns", items: ["REST", "GraphQL", "Python REST APIs", "Webhooks", "JSON"] },
      { title: "Authentication & security", items: ["OAuth 2.0", "API keys", "Access tokens", "Authorization", "Validation", "Rate limiting"] },
      { title: "Common integration surfaces", items: ["Microsoft Graph", "Google APIs", "Stripe", "Databases", "Custom SaaS APIs"] }
    ],
    existingApplicationNote:
      "Integrations can be added around existing applications, APIs, databases, and SaaS platforms. The first step is documenting ownership, authentication, data contracts, rate limits, and failure behavior for each system.",
    relatedServices: ["full-stack-development", "ai-development", "whatsapp-ai-bot-development", "browser-extension-development", "dynamics-365-development", "microsoft-365-development", "google-workspace-add-on-development"],
    relevantWork: [],
    faqs: [
      { question: "What is API integration?", answer: "API integration connects software systems through their application programming interfaces so they can exchange data or trigger actions." },
      { question: "Can you integrate two existing systems?", answer: "Yes. Existing systems can be connected when they provide suitable APIs or other integration methods and the required access is available." },
      { question: "Can you build a custom REST API?", answer: "Yes. A REST API can be designed around the application’s resources, data contracts, authentication, authorization, and operational requirements." },
      { question: "Can you integrate third-party APIs?", answer: "Yes. Third-party API integrations can be implemented with the provider’s authentication, rate limits, data formats, and usage terms in mind." },
      { question: "Can webhooks support near-real-time synchronization?", answer: "Webhooks can notify an application when supported events occur, allowing it to process changes without constant polling. Delivery guarantees and retry behavior depend on the source system." }
    ],
    ctaTitle: "Need two systems to work together?",
    ctaDescription: "Share the systems, data that needs to move, and how current workflows behave. We can map an integration approach and its constraints."
  }
];

const serviceOrder = [
  "full-stack-development",
  "microsoft-365-development",
  "microsoft-copilot-development",
  "dynamics-365-development",
  "sharepoint-spfx-development",
  "office-add-in-development",
  "google-workspace-add-on-development",
  "power-platform-development",
  "ai-development",
  "whatsapp-ai-bot-development",
  "browser-extension-development",
  "api-integration"
];

export const servicePagesData: ServicePageContent[] = [
  ...coreServicePagesData,
  ...additionalServicePagesData
].sort((first, second) => serviceOrder.indexOf(first.slug) - serviceOrder.indexOf(second.slug));
