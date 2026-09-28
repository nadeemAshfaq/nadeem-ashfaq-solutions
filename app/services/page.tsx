import type { Metadata } from "next";
import Link from "next/link";

import { CTABanner } from "@/components/ui/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesData } from "@/data/services-data";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: `Specialized Architecture & Development Services | ${siteConfig.name}`,
  description:
    "Explore enterprise engineering services: Google Workspace Add-ons, Microsoft 365 & Office Add-in development, Full-Stack web applications, and AI automation.",
  keywords: [
    "Google Workspace Add-on Development",
    "Microsoft 365 Development",
    "Office Add-in Development",
    "SharePoint SPFx Development",
    "Full-Stack Development",
    "AI Development",
    "Power Platform Consulting",
    "API Integration Services"
  ]
};

export default function ServicesPage() {
  return (
    <main className="py-12 sm:py-16">
      <SectionContainer id="services-overview">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Client Services
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Specialized Development &amp; Architecture Services
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            I help businesses, agencies, and SaaS founders build production-grade software that extends
            workplace productivity suites, modernizes web infrastructure, and automates manual operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-3xl shadow-inner ${service.accentColor}`}
                  >
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Enterprise Service
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-300">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.overview}
                </p>

                {/* Capabilities list */}
                <div className="mt-6 border-t border-slate-800/80 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2">
                    {service.capabilities.slice(0, 4).map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-5">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  <span>Explore Service Details</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-emerald-500/50 hover:bg-slate-800"
                >
                  Request Quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20">
          <CTABanner
            title="Have a custom requirement across these services?"
            description="Let's schedule a call to review your architecture, API dependencies, and delivery milestones."
          />
        </div>
      </SectionContainer>
    </main>
  );
}
