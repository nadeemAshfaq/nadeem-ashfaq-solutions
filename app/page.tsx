import Image from "next/image";
import Link from "next/link";

import { CTABanner } from "@/components/ui/cta-banner";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clientProcess, homeFaqs, whyWorkWithMe } from "@/data/client-value-data";
import { projectsData } from "@/data/projects-data";
import { servicesData } from "@/data/services-data";
import { siteConfig } from "@/data/site-config";
import { skillCategories } from "@/features/portfolio/data/portfolio-data";

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <main>
      {/* ── 1. Hero Section ── */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#061c10] via-slate-950 to-slate-950"
      >
        {/* Ambient Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
        />

        <div className="relative grid w-full items-center gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pb-24 lg:grid-cols-[1.25fr_0.75fr] xl:grid-cols-[1.35fr_0.65fr] lg:px-14 xl:px-16 2xl:px-20 lg:py-28">
          {/* Left Column: Copy & Actions */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Available for Architecture &amp; Development Projects
              </span>
            </div>

            {/* Main Role Title */}
            <div className="space-y-3">
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {siteConfig.role}
              </h1>
              <p className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300 bg-clip-text text-transparent sm:text-2xl">
                {siteConfig.subRole}
              </p>
            </div>

            {/* Value Proposition */}
            <p className="max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {siteConfig.headline}
            </p>

            <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-950/60 transition-all duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-emerald-400 hover:shadow-emerald-900/40"
              >
                <span>Start a Project</span>
                <span>→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                <span>Explore Services</span>
              </Link>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm font-semibold text-emerald-400 transition-all duration-200 hover:bg-emerald-500/20"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>

            {/* Four Pillars Strip */}
            <div className="grid gap-6 border-t border-slate-800/80 pt-8 sm:grid-cols-2 xl:grid-cols-4">
              {siteConfig.stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-white">{item.value}</p>
                  <p className="text-xs text-emerald-400/90">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Presentation */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* Multi-Color Accent Ring */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-blue-500 via-amber-500 to-purple-600 p-[2px] shadow-2xl shadow-emerald-950/50">
              <div className="relative overflow-hidden rounded-[22px] bg-slate-900">
                <Image
                  src="/Profile.png"
                  alt="Nadeem Ashfaq – Senior Full-Stack Developer & Solutions Architect"
                  width={500}
                  height={580}
                  className="h-auto w-full object-cover"
                  priority
                />

                {/* Bottom Gradient Overlay with Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-16">
                  <p className="text-base font-bold text-white">Nadeem Ashfaq</p>
                  <p className="text-xs font-semibold text-emerald-400">
                    Microsoft 365, Google Workspace &amp; AI Architect
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge: Microsoft 365 */}
            <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-blue-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0078d4] text-[10px] font-black text-white shadow-sm">
                M
              </span>
              <span className="text-xs font-bold text-white">Microsoft 365</span>
            </div>

            {/* Floating Badge: Google Workspace */}
            <div className="absolute -left-3 top-28 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500 text-[10px] font-black text-white shadow-sm">
                G
              </span>
              <span className="text-xs font-bold text-white">Google Workspace</span>
            </div>

            {/* Floating Badge: AI Automation */}
            <div className="absolute -right-3 bottom-24 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500 text-[10px] font-black text-white shadow-sm">
                AI
              </span>
              <span className="text-xs font-bold text-white">AI Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust & Core Ecosystems Strip ── */}
      <section className="border-b border-slate-800/80 bg-slate-950/60 py-8">
        <SectionContainer id="trust-strip">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Architectural Ecosystems:
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              {[
                { label: "Microsoft 365", color: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
                { label: "Google Workspace", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
                { label: "Full-Stack Web & SaaS", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
                { label: "OpenAI & RAG", color: "text-teal-400 border-teal-500/30 bg-teal-500/10" },
                { label: "Azure & Cloud APIs", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" }
              ].map((badge) => (
                <span
                  key={badge.label}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ── 3. Client Services Grid ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80">
        <SectionContainer id="services">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <SectionHeading
                eyebrow="Client Services"
                title="Specialized Architecture & Development Offerings"
                description="Engineered to solve concrete business bottlenecks, connect corporate systems, and build scalable revenue-generating software."
              />
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <span>Explore All 8 Services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.slice(0, 6).map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div>
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border text-2xl shadow-inner ${service.accentColor}`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-800/80 pt-4">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    <span>Read Full Service Blueprint</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 4. Featured Real Projects (Client Evidence) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80 bg-slate-950/60">
        <SectionContainer id="featured-projects">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <SectionHeading
                eyebrow="Case Studies &amp; Evidence"
                title="Real Production Systems Built for High Scale"
                description="No mockups or toy projects. Review actual systems engineered with production RAG, multi-tenancy, Office.js, and Google Workspace APIs."
              />
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <span>View All Case Studies</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-300">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-emerald-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Measurable Client Outcome:
                    </p>
                    <p className="mt-1 text-xs text-slate-200">{project.clientOutcome}</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-700/80 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Inspect Architecture Points</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 5. Why Work With Me (Value & Risk Reversal) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80">
        <SectionContainer id="why-work-with-me">
          <SectionHeading
            eyebrow="Why Work With Me"
            title="Senior Technical Architecture with Business Accountability"
            description="When you engage me, you work directly with a senior solutions architect—not an agency middleman or junior contractor."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyWorkWithMe.map((prop) => (
              <div
                key={prop.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
              >
                <span className="text-3xl mb-4 block">{prop.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-xs leading-relaxed text-slate-300">{prop.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 6. Technologies (6 Structured Pillars) ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80 bg-slate-950/60">
        <SectionContainer id="technologies">
          <SectionHeading
            eyebrow="Technology Foundation"
            title="Structured Architecture &amp; Stack Competencies"
            description="Every technology is selected for long-term maintainability, enterprise security standards, and high concurrency."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-7 backdrop-blur-sm"
              >
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{category.title}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs font-semibold text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 7. Client Working Process ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80">
        <SectionContainer id="client-process">
          <SectionHeading
            eyebrow="Working Process"
            title="How We Work Together: From Scope to Production"
            description="A disciplined, transparent delivery framework designed to eliminate guesswork, control budgets, and hit milestones on schedule."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clientProcess.map((step) => (
              <div
                key={step.step}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-emerald-500/30 mb-4 block font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-300">{step.description}</p>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Milestone Deliverable:
                  </p>
                  <p className="mt-1 text-xs text-slate-200">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 8. Client FAQs ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80 bg-slate-950/60">
        <SectionContainer id="faq">
          <div className="mb-12">
            <SectionHeading
              eyebrow="Client FAQs"
              title="Frequently Asked Questions by Prospective Clients"
              description="Direct answers regarding project kickoff, technology feasibility, platform choices, and contract terms."
            />
          </div>

          <FAQAccordion faqs={homeFaqs} className="max-w-4xl" />
        </SectionContainer>
      </section>

      {/* ── 9. Final CTA Banner ── */}
      <section className="py-20 sm:py-24">
        <SectionContainer id="cta">
          <CTABanner />
        </SectionContainer>
      </section>
    </main>
  );
}
