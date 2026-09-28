import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/features/portfolio/data/portfolio-data";

import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <SectionContainer id="projects" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Featured Solutions"
        title="Production Platforms & Ecosystem Solutions"
        description="Highlights of recent Google Workspace add-ons, Microsoft 365 enterprise solutions, full-stack SaaS platforms, and autonomous AI automation pipelines."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
