import type { FAQItem, ProcessStep, ValueProp } from "@/types/portfolio";

export const whyWorkWithMe: ValueProp[] = [
  {
    icon: "🎯",
    title: "Work across connected ecosystems",
    description:
      "Full-stack development, Microsoft 365, Google Workspace, AI, and integrations come together in one engineering practice."
  },
  {
    icon: "🏛️",
    title: "Architecture through delivery",
    description:
      "Work can span the complete path from understanding requirements and shaping architecture to building and integrating a production system."
  },
  {
    icon: "💼",
    title: "Built around business requirements",
    description:
      "Solutions are shaped around the business problem, existing tools, users, and technical requirements."
  },
  {
    icon: "🛡️",
    title: "Products, platforms, and integrations",
    description:
      "Build SaaS products, extend Microsoft and Google productivity platforms, add AI capabilities, and connect third-party systems."
  }
];

export const clientProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Clarify the business problem, users, existing systems, and technical requirements.",
    outcome: "A shared understanding of the requirements"
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design the application structure, integrations, data model, authentication, and deployment approach.",
    outcome: "A technical approach aligned with the requirements"
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop the product using maintainable, production-oriented technologies.",
    outcome: "The application and its core capabilities"
  },
  {
    step: "04",
    title: "Integrate",
    description:
      "Connect APIs, business platforms, AI services, Microsoft 365, Google Workspace, and third-party systems.",
    outcome: "Connected services and workflows"
  },
  {
    step: "05",
    title: "Deliver & Improve",
    description:
      "Deploy, test, monitor, and iterate based on real-world requirements.",
    outcome: "A system ready to evolve with its requirements"
  }
];

export const homeFaqs: FAQItem[] = [
  {
    question: "What kinds of software projects do you take on?",
    answer:
      "Projects include full-stack web applications, SaaS products, Microsoft 365 and Google Workspace extensions, AI-enabled applications, and API integrations."
  },
  {
    question: "Can you build solutions for both Microsoft 365 and Google Workspace?",
    answer:
      "Yes. Solutions can extend Microsoft 365 tools such as SharePoint, Word, Excel, Outlook, and Teams, as well as Google Workspace tools such as Gmail, Docs, Sheets, and Drive."
  },
  {
    question: "Can you connect an application to our existing systems?",
    answer:
      "Yes. Integrations can connect applications and productivity platforms with APIs, SaaS products, and other business systems, based on the project requirements."
  },
  {
    question: "How do we discuss a project?",
    answer:
      "Use the contact page to share the goal, relevant systems, and constraints. I'll respond with scope guidance and a suitable technical approach."
  }
];
