import Link from "next/link";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

const techColors: Record<string, string> = {
  "AI": "border-teal-500/30 bg-teal-500/10 text-teal-300",
  "AI Agents": "border-teal-500/30 bg-teal-500/10 text-teal-300",
  "OpenAI": "border-teal-500/30 bg-teal-500/10 text-teal-300",
  "Google Apps Script": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "Gmail API": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "Sheets API": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "OAuth 2.0": "border-sky-500/30 bg-sky-500/10 text-sky-300",
  "Microsoft 365": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "Microsoft Graph": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "Office.js": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "SharePoint": "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "SPFx": "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  "Power Platform": "border-purple-500/30 bg-purple-500/10 text-purple-300",
  "Power Automate": "border-purple-500/30 bg-purple-500/10 text-purple-300",
  "Entra ID": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "SaaS": "border-purple-500/30 bg-purple-500/10 text-purple-300",
  "React": "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "Next.js": "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "TypeScript": "border-sky-500/30 bg-sky-500/10 text-sky-300",
  "Node.js": "border-lime-500/30 bg-lime-500/10 text-lime-300",
  "Azure": "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  "Social APIs": "border-purple-500/30 bg-purple-500/10 text-purple-300",
  "APIs": "border-slate-700 bg-slate-800/80 text-slate-300",
};

const defaultBadge = "border-slate-700 bg-slate-800/80 text-slate-300";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20">
      <div>
        {/* Top accent pill */}
        <div className="mb-4 inline-flex items-center gap-1.5">
          <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-amber-500" />
        </div>

        <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide ${
                techColors[tech] ?? defaultBadge
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-7 flex items-center gap-3 border-t border-slate-800/80 pt-5">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-950/40 transition-colors hover:bg-emerald-500"
            >
              <span>Live Demo</span>
              <span>↗</span>
            </Link>
          )}

          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View source code of ${project.title}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <span>Source Code</span>
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
