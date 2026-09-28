import type { FAQItem, ProcessStep, ValueProp } from "@/types/portfolio";

export const whyWorkWithMe: ValueProp[] = [
  {
    icon: "🎯",
    title: "Specialized Dual-Ecosystem Mastery",
    description:
      "Unlike generic agencies, I specialize directly at the intersection of modern full-stack web platforms and the two dominant workplace platforms: Microsoft 365 and Google Workspace."
  },
  {
    icon: "🏛️",
    title: "Architecture-First Engineering",
    description:
      "I prioritize clean, maintainable, and scalable architecture from day one. Your codebase will be well-documented, type-safe, and built to evolve without costly technical debt."
  },
  {
    icon: "💼",
    title: "Business-Focused Delivery",
    description:
      "Technology is only as good as the business outcome it generates. Every feature is aligned with reducing labor hours, accelerating revenue, or unblocking operational bottlenecks."
  },
  {
    icon: "🛡️",
    title: "Production-Tested Reliability",
    description:
      "From strict OAuth scopes and enterprise SSO to vector embeddings and webhook retry queues, all deliverables are engineered for security, high availability, and compliance."
  }
];

export const clientProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Architecture Blueprint",
    description:
      "We dissect your business requirements, workflow bottlenecks, and technical constraints to establish a clear architectural plan, data schema, and milestone roadmap.",
    outcome: "Clear Scope, Fixed Milestones & Technical Spec"
  },
  {
    step: "02",
    title: "Rapid Prototyping & UX Validation",
    description:
      "I build early interactive prototypes—whether a task pane in Word, an add-on in Gmail, or a Next.js interface—so you validate the flow before full-scale engineering.",
    outcome: "Validated UX & Confirmed Architecture"
  },
  {
    step: "03",
    title: "Agile Development & Integrations",
    description:
      "Iterative bi-weekly sprints with continuous staging deployments. APIs, enterprise security policies, and third-party integrations are built with rigorous type-checking.",
    outcome: "Production Code, Secure APIs & Test Coverage"
  },
  {
    step: "04",
    title: "Deployment, Handover & Ongoing Support",
    description:
      "Seamless launch to production tenants, cloud infrastructure, or marketplace publishing (AppSource / Workspace Marketplace), paired with documentation and warranty support.",
    outcome: "Live Production System & Comprehensive Documentation"
  }
];

export const homeFaqs: FAQItem[] = [
  {
    question: "What types of clients do you typically partner with?",
    answer:
      "I work with B2B SaaS startups, growing companies, consulting firms, and enterprise departments looking for senior architectural leadership. My engagements range from building custom Google Workspace or Office Add-ins to architecting full-stack SaaS platforms and enterprise AI pipelines."
  },
  {
    question: "Do you build both Microsoft 365 and Google Workspace solutions?",
    answer:
      "Yes. I am one of the few architects with deep production experience across both ecosystems. Whether your company or your clients operate on Microsoft 365 (Word, Excel, Outlook, SharePoint) or Google Workspace (Gmail, Docs, Sheets, Drive), I build native solutions that fit their exact environment."
  },
  {
    question: "How do we get started on a project together?",
    answer:
      "Simply reach out via WhatsApp or the contact form with a brief summary of what you want to build or automate. We'll schedule a discovery call to review requirements, feasibility, timelines, and an architecture blueprint."
  },
  {
    question: "Can you take over or modernize an existing codebase?",
    answer:
      "Yes. I frequently audit, refactor, and modernize legacy codebases—such as migrating outdated VSTO plugins to modern Office.js, upgrading legacy React apps to modern Next.js App Router, or integrating modern AI capabilities into existing enterprise tools."
  },
  {
    question: "What are your collaboration and availability terms?",
    answer:
      "I offer milestone-based project contracts, ongoing monthly retainer architecture support, and dedicated consulting arrangements. All work is backed by transparent milestones, clear communication, and production-ready code."
  }
];
