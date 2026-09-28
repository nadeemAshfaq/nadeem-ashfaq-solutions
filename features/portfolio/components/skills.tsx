import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/features/portfolio/data/portfolio-data";

const categoryStyles: Record<
  string,
  {
    icon: string;
    border: string;
    badge: string;
    indicator: string;
  }
> = {
  "Microsoft 365": {
    icon: "🪟",
    border: "hover:border-blue-500/50",
    badge: "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
    indicator: "bg-[#0078d4]",
  },
  "Google Workspace": {
    icon: "📑",
    border: "hover:border-amber-500/50",
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20",
    indicator: "bg-amber-500",
  },
  "Full-Stack Development": {
    icon: "🌐",
    border: "hover:border-emerald-500/50",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20",
    indicator: "bg-emerald-500",
  },
  "AI & Automation": {
    icon: "🤖",
    border: "hover:border-teal-500/50",
    badge: "border-teal-500/30 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20",
    indicator: "bg-teal-400",
  },
  "Cloud & Infrastructure": {
    icon: "☁️",
    border: "hover:border-cyan-500/50",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20",
    indicator: "bg-cyan-500",
  },
  "Data & Integration": {
    icon: "🗄️",
    border: "hover:border-purple-500/50",
    badge: "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20",
    indicator: "bg-purple-500",
  },
};

const defaultStyle = {
  icon: "⚙️",
  border: "hover:border-emerald-500/50",
  badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  indicator: "bg-emerald-500",
};

export function Skills() {
  return (
    <SectionContainer id="skills" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Core Competencies"
        title="Technical Toolkit & Architecture Stack"
        description="Structured across six specialized domains: enterprise productivity suites, modern web engineering, AI workflow orchestration, cloud infrastructure, and data systems."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const style = categoryStyles[category.title] ?? defaultStyle;
          return (
            <article
              key={category.title}
              className={`group rounded-2xl border border-slate-800 bg-slate-900/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 ${style.border}`}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <span className={`h-8 w-1.5 rounded-full ${style.indicator}`} />
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/80 text-xl shadow-inner">
                  {style.icon}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 hover:scale-105 ${style.badge}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionContainer>
  );
}
