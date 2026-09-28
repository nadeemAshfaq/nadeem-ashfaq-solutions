import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/features/portfolio/data/portfolio-data";

const serviceDetails: Record<
  string,
  {
    icon: string;
    badgeStyle: string;
    borderAccent: string;
    features: string[];
  }
> = {
  "Google Workspace Add-on Development": {
    icon: "📑",
    badgeStyle: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    borderAccent: "group-hover:border-amber-500/50",
    features: [
      "Gmail, Google Docs, Sheets & Drive Add-ons",
      "Google Apps Script & Workspace REST APIs",
      "OAuth 2.0 & secure enterprise permissions",
      "AI-powered Google Workspace workflows",
    ],
  },
  "Microsoft 365 & Office Add-in Development": {
    icon: "🪟",
    badgeStyle: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    borderAccent: "group-hover:border-blue-500/50",
    features: [
      "Office.js Add-ins for Word, Excel, PowerPoint & Outlook",
      "SharePoint Framework (SPFx) web parts & extensions",
      "Microsoft Graph API & Entra ID (Azure AD) identity",
      "Automated cross-app Office document pipelines",
    ],
  },
  "Full-Stack Web & SaaS Engineering": {
    icon: "🌐",
    badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    borderAccent: "group-hover:border-emerald-500/50",
    features: [
      "React, Next.js & modern TypeScript frontends",
      "High-throughput Node.js & .NET backends",
      "Modular microservices & REST / GraphQL APIs",
      "Production-ready multi-tenant SaaS architecture",
    ],
  },
  "AI Integration & Autonomous Workflows": {
    icon: "🤖",
    badgeStyle: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    borderAccent: "group-hover:border-teal-500/50",
    features: [
      "OpenAI GPT-4 & specialized LLM integration",
      "Retrieval-Augmented Generation (RAG) systems",
      "Autonomous task agents & LangChain automation",
      "Intelligent document parsing & summarization",
    ],
  },
  "Power Apps & Power Automate": {
    icon: "⚡",
    badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    borderAccent: "group-hover:border-purple-500/50",
    features: [
      "Custom canvas & model-driven Power Apps",
      "Multi-step Power Automate approval flows",
      "Robotic process automation (RPA) & connectors",
      "Dataverse & on-premise gateway integrations",
    ],
  },
  "Cloud Solutions & Third-Party API Integrations": {
    icon: "☁️",
    badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    borderAccent: "group-hover:border-cyan-500/50",
    features: [
      "Microsoft Azure cloud services & serverless functions",
      "Bidirectional CRM, ERP & third-party API syncing",
      "Docker containerization & CI/CD deployment",
      "Enterprise security, caching & rate limiting",
    ],
  },
};

const defaultDetails = {
  icon: "⚙️",
  badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  borderAccent: "group-hover:border-emerald-500/50",
  features: ["Enterprise delivery", "Performance optimization"],
};

export function Services() {
  return (
    <SectionContainer id="services" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Specialized Services"
        title="Consulting, Architecture & Development Services"
        description="End-to-end solutions spanning custom Google Workspace add-ons, enterprise Microsoft 365 development, full-stack platforms, and embedded AI automation."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const details = serviceDetails[service.title] ?? defaultDetails;
          return (
            <article
              key={service.title}
              className={`group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 ${details.borderAccent}`}
            >
              <div>
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border text-2xl shadow-inner ${details.badgeStyle}`}
                >
                  {details.icon}
                </div>

                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>

                {/* Specific feature highlights */}
                <div className="mt-6 border-t border-slate-800/80 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Capabilities Include
                  </p>
                  <ul className="space-y-2">
                    {details.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
