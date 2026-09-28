import type { Metadata } from "next";
import Link from "next/link";

import { CTABanner } from "@/components/ui/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { siteConfig, siteUrl } from "@/data/site-config";

export const metadata: Metadata = {
  title: `About Nadeem Ashfaq | Senior Full-Stack Developer & Solutions Architect`,
  alternates: { canonical: `${siteUrl}/about` },
  description:
    "Learn about Nadeem Ashfaq's engineering philosophy, architecture-first approach, and specialized expertise in Microsoft 365, Google Workspace, and AI solutions.",
  keywords: [
    "About Nadeem Ashfaq",
    "Solutions Architect Profile",
    "Senior Full-Stack Developer",
    "Microsoft 365 Specialist",
    "Google Workspace Specialist"
  ]
};

export default function AboutPage() {
  return (
    <main className="py-12 sm:py-16">
      <SectionContainer id="about-profile">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Background &amp; Philosophy
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering High-Impact Systems with Architecture-First Rigor
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            I help startups, corporate teams, and software businesses build reliable platforms and enterprise add-ons
            grounded in clean architecture, strong security, and measurable operational outcomes.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6 text-base leading-relaxed text-slate-300">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 backdrop-blur-sm space-y-5">
              <h2 className="text-2xl font-bold text-white">Who I Am &amp; How I Work</h2>
              <p>
                I am a Senior Full-Stack Developer and Solutions Architect specializing in scalable web applications,
                custom Microsoft 365 solutions, Google Workspace Add-ons, and AI automation.
              </p>
              <p>
                Throughout my career, I observed that most engineering teams fall into one of two camps: they are either
                traditional web engineers who don&apos;t understand corporate productivity suites, or low-code developers
                who lack deep software architecture discipline.
              </p>
              <p>
                My practice bridges that exact divide. I bring modern full-stack software standards—strong TypeScript
                types, clean microservices, automated testing, and secure OAuth scopes—into both the web and the everyday
                workplace environments where businesses spend their working hours: Word, Excel, Outlook, SharePoint, Gmail,
                Docs, and Google Sheets.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 backdrop-blur-sm space-y-5">
              <h2 className="text-2xl font-bold text-white">Core Engineering Principles</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-emerald-400">01. Architecture Before Code</h3>
                  <p className="text-sm text-slate-300">
                    Before writing a line of code, we align on database models, API contracts, security permissions,
                    and edge-case boundaries. This eliminates costly rewrites down the road.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-blue-400">02. No Generic Fluff</h3>
                  <p className="text-sm text-slate-300">
                    I believe in transparency. No inflated timelines or fabricated client metrics. Every recommendation
                    is backed by practical engineering reality and business ROI.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-amber-400">03. Dual-Platform Fluency</h3>
                  <p className="text-sm text-slate-300">
                    Whether your organization relies on Microsoft 365 or Google Workspace, you get native architectural
                    mastery without having to hire separate vendors.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-teal-400">04. Responsible AI Engineering</h3>
                  <p className="text-sm text-slate-300">
                    I build AI systems that solve real business problems with grounded RAG pipelines and strict citations,
                    avoiding brittle chatbots or unverified hallucinations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Facts & Engagement Options */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Client Engagement Models</h3>
              <ul className="space-y-5 text-sm">
                <li className="border-b border-slate-800/80 pb-4">
                  <strong className="text-white block font-bold">Milestone-Based Fixed Projects</strong>
                  <span className="text-slate-300 text-xs">
                    Defined scope, clear deliverables, fixed deadlines, and guaranteed warranty. Ideal for add-on
                    development, platform MVPs, and integrations.
                  </span>
                </li>

                <li className="border-b border-slate-800/80 pb-4">
                  <strong className="text-white block font-bold">Monthly Architecture Retainer</strong>
                  <span className="text-slate-300 text-xs">
                    Ongoing engineering, feature sprints, and architectural guidance for growing platforms and corporate
                    IT teams.
                  </span>
                </li>

                <li>
                  <strong className="text-white block font-bold">Codebase &amp; Security Audits</strong>
                  <span className="text-slate-300 text-xs">
                    Comprehensive technical audits of existing add-ins, legacy codebases, and API pipelines before
                    scaling.
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-3 text-center text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02]"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            {/* Verified Platforms */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Verified Freelance Profiles
              </p>
              <div className="flex flex-col gap-2.5">
                {siteConfig.profiles.map((p) => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-colors hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white"
                  >
                    <span>{p.label} Verified Profile</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <CTABanner
            title="Let's build software that moves your business forward"
            description="Direct architect collaboration, transparent milestone pricing, and production-tested deliverables."
          />
        </div>
      </SectionContainer>
    </main>
  );
}
