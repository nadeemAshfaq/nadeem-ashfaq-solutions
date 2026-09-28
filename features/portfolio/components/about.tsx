import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: "�",
    label: "Microsoft 365 & Office Add-ins",
    desc: "SPFx, Office.js (Word, Excel, Outlook), Graph API, Power Platform",
  },
  {
    icon: "📑",
    label: "Google Workspace Add-ons",
    desc: "Google Apps Script, Gmail, Docs, Sheets, Drive APIs & OAuth",
  },
  {
    icon: "🌐",
    label: "Full-Stack Web Engineering",
    desc: "React, Next.js, TypeScript, Node.js, and .NET web applications",
  },
  {
    icon: "🤖",
    label: "AI Integrations & Automation",
    desc: "OpenAI LLM applications, RAG architectures, and autonomous workflows",
  },
];

const techTags = [
  { label: "Microsoft 365", color: "border-blue-500/30 bg-blue-500/10 text-blue-300" },
  { label: "SharePoint / SPFx", color: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300" },
  { label: "Office.js (Word/Excel/Outlook)", color: "border-blue-500/30 bg-blue-500/10 text-blue-300" },
  { label: "Google Workspace Add-ons", color: "border-amber-500/30 bg-amber-500/10 text-amber-300" },
  { label: "Google Apps Script", color: "border-amber-500/30 bg-amber-500/10 text-amber-300" },
  { label: "React / Next.js", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" },
  { label: "TypeScript", color: "border-sky-500/30 bg-sky-500/10 text-sky-300" },
  { label: "Node.js / .NET", color: "border-lime-500/30 bg-lime-500/10 text-lime-300" },
  { label: "Microsoft Graph & Entra ID", color: "border-blue-500/30 bg-blue-500/10 text-blue-300" },
  { label: "Power Platform", color: "border-purple-500/30 bg-purple-500/10 text-purple-300" },
  { label: "OpenAI & LLMs", color: "border-teal-500/30 bg-teal-500/10 text-teal-300" },
  { label: "Azure & Cloud", color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300" },
];

export function About() {
  return (
    <SectionContainer id="about" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Professional Positioning"
        title="Full-Stack Engineering meets Microsoft 365 & Google Workspace"
        description="A specialized, dual-ecosystem solutions architect delivering enterprise add-ons, full-stack web applications, and autonomous AI pipelines across productivity and cloud platforms."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Bio Card */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/30 lg:col-span-2">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-xl text-white shadow-lg shadow-emerald-500/20">
              👨‍💻
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Nadeem Ashfaq</h3>
              <p className="text-sm font-medium text-emerald-400">
                Senior Full-Stack Developer &amp; Solutions Architect
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              I bridge the gap between high-performance web applications and enterprise productivity suites.
              On the web front, I engineer robust SaaS platforms and internal portals utilizing{" "}
              <strong className="font-semibold text-white">React, Next.js, TypeScript, Node.js, and .NET</strong>.
            </p>
            <p>
              My specialized architectural expertise centers on extending the two dominant workplace platforms:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>
                <strong className="text-blue-300">Microsoft 365:</strong> Enterprise-grade solutions for Word, Excel,
                PowerPoint, Outlook, and SharePoint built with{" "}
                <span className="text-white font-medium">Office.js, SPFx, Microsoft Graph, and Entra ID</span>, alongside
                Power Apps and Power Automate workflows.
              </li>
              <li>
                <strong className="text-amber-300">Google Workspace:</strong> Tailored Workspace Add-ons extending{" "}
                <span className="text-white font-medium">Gmail, Google Docs, Sheets, and Google Drive</span> via Google
                Apps Script, Google Workspace REST APIs, and OAuth 2.0 authentication.
              </li>
            </ul>
            <p>
              I infuse both environments with{" "}
              <strong className="font-semibold text-teal-300">OpenAI and modern LLM capabilities</strong>, building
              RAG pipelines, AI agents, and intelligent automated workflows that eliminate repetitive business overhead.
            </p>
          </div>

          {/* Tech tags */}
          <div className="mt-8 border-t border-slate-800/80 pt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Expertise &amp; Technology Stack
            </p>
            <div className="flex flex-wrap gap-2.5">
              {techTags.map((tech) => (
                <span
                  key={tech.label}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-transform hover:scale-105 ${tech.color}`}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Highlights Card */}
        <article className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 p-8 shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white">The Four Pillars</h3>
            <p className="mt-1 text-xs text-slate-400">Core delivery domains</p>

            <ul className="mt-6 space-y-4">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-base">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Status Badge */}
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-300">
              Open to consulting, architecture &amp; freelance projects
            </span>
          </div>
        </article>
      </div>
    </SectionContainer>
  );
}
