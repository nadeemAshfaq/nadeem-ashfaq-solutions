import type { Metadata } from "next";

import { SectionContainer } from "@/components/ui/section-container";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Start a Project & Contact | ${siteConfig.name}`,
  description:
    "Get in touch with Nadeem Ashfaq for custom Microsoft 365, Google Workspace, Full-Stack, and AI solutions architecture. Inquire directly via WhatsApp or email.",
  keywords: [
    "Hire Microsoft 365 Developer",
    "Hire Google Workspace Developer",
    "Hire Full-Stack Solutions Architect",
    "Contact Nadeem Ashfaq",
    "Office Add-in Consultant"
  ]
};

export default function ContactPage() {
  return (
    <main className="py-12 sm:py-16">
      <SectionContainer id="contact-page">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Client Inquiries
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start a Project or Schedule a Consultation
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Have a clear project scope or exploring architectural options? Reach out through your preferred channel
            below for a direct, confidential discussion.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Direct Contact Methods */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-white mb-6">Fastest Ways to Connect</h2>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-emerald-500/20"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-2xl text-emerald-400 shadow-inner">
                    💬
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      WhatsApp (Recommended for Quick Replies)
                    </p>
                    <p className="mt-1 text-lg font-bold text-white">{siteConfig.phone}</p>
                    <p className="mt-1 text-xs text-slate-300">
                      Ideal for scoping queries, technical feasibility checks, and scheduling calls.
                    </p>
                  </div>
                  <span className="text-emerald-400 text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("New Project Inquiry — Solutions Architecture")}`}
                  className="group flex items-start gap-4 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 transition-all hover:-translate-y-0.5 hover:border-blue-500/60 hover:bg-blue-500/20"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-2xl text-blue-400 shadow-inner">
                    ✉️
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      Direct Email
                    </p>
                    <p className="mt-1 break-all text-base font-bold text-white">{siteConfig.email}</p>
                    <p className="mt-1 text-xs text-slate-300">
                      Send RFPs, architectural specifications, or detailed project briefs directly.
                    </p>
                  </div>
                  <span className="text-blue-400 text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Escrow-Protected Hiring Platforms */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white mb-2">Prefer Hiring via Platform Escrow?</h3>
              <p className="text-xs text-slate-400 mb-5">
                If your company policies require milestone escrow protection or enterprise billing, you can hire me
                directly through my verified profiles:
              </p>

              <div className="flex flex-col gap-3">
                {siteConfig.profiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white"
                  >
                    <span>Hire on {profile.label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details Guide */}
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-950 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">What Happens When You Reach Out</h2>

              <ul className="space-y-5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                    1
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Initial Review in &lt; 24 Hours</strong>
                    <span>I review your requirements, technical stack, and target timelines personally.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                    2
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Discovery / Feasibility Call</strong>
                    <span>We schedule a direct call to clarify edge cases, API dependencies, and security scopes.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                    3
                  </span>
                  <div>
                    <strong className="text-white block font-semibold">Architectural Plan &amp; Milestone Proposal</strong>
                    <span>You receive a clear breakdown of milestones, architecture deliverables, and transparent pricing.</span>
                  </div>
                </li>
              </ul>

              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Client Guarantees:
                </p>
                <ul className="space-y-1 text-xs text-slate-300">
                  <li>✓ Mutual NDA signed prior to code/data sharing upon request</li>
                  <li>✓ 100% full intellectual property (IP) and codebase ownership handed over</li>
                  <li>✓ Staging environment access with ongoing sprint updates</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800/80 pt-6">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 text-center text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02]"
              >
                Send Message on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
