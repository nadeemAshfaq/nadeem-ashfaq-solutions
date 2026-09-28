import type { Metadata } from "next";

import { CTABanner } from "@/components/ui/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { projectsData } from "@/data/projects-data";
import { siteConfig, siteUrl } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Case Studies & Featured Systems | ${siteConfig.name}`,
  alternates: { canonical: `${siteUrl}/projects` },
  description:
    "Selected software products and platform solutions, including Social Agent, an AI social media content planning and publishing product.",
  keywords: [
    "AskX AI Chatbot",
    "SocialAgent AI",
    "Office Add-in Case Studies",
    "Google Workspace Add-on Examples",
    "SharePoint SPFx Solutions",
    "AI SaaS Architecture"
  ]
};

export default function ProjectsPage() {
  return (
    <main className="py-12 sm:py-16">
      <SectionContainer id="projects-index">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Selected Work
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Products &amp; Software Solutions
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            A selection of products and solutions, with project details limited to publicly shareable information.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <article
              key={project.slug}
              className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 lg:p-12 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                {/* Left details */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400">
                      Case Study 0{index + 1}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-base font-medium text-emerald-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Measurable Client Outcome */}
                  {project.clientOutcome && <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Business Outcome &amp; Value Delivered:
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-slate-200">
                      {project.clientOutcome}
                    </p>
                  </div>}
                </div>

                {/* Right: Architecture & Tech Stack */}
                {(project.architecturePoints?.length || project.techStack?.length || project.caseStudyUrl || project.liveUrl) ? (
                  <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-950/60 p-6 sm:p-8">
                    {project.architecturePoints && project.architecturePoints.length > 0 && <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                        Key Technical Architecture
                      </h3>
                      <ul className="space-y-3">
                        {project.architecturePoints.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-300">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>}

                    {project.techStack && project.techStack.length > 0 && <div className="mt-8 border-t border-slate-800/80 pt-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-slate-700/80 bg-slate-800/90 px-3 py-1.5 text-xs font-semibold text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    </div>}

                    <div className="mt-6 flex flex-wrap gap-4">
                      {project.caseStudyUrl && <a href={project.caseStudyUrl} className="text-sm font-bold text-emerald-400 hover:text-emerald-300">View case study <span aria-hidden="true">→</span></a>}
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-400 hover:text-emerald-300">Visit live product <span aria-hidden="true">↗</span></a>}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20">
          <CTABanner
            title="Have an application or workflow you need built?"
            description="I can help you design the architecture, validate the feasibility, and deliver the complete solution."
          />
        </div>
      </SectionContainer>
    </main>
  );
}
