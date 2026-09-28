import type { Metadata } from "next";
import Link from "next/link";

import { SectionContainer } from "@/components/ui/section-container";
import { servicePagesData } from "@/data/service-pages-data";
import { siteConfig, siteUrl } from "@/data/site-config";

const pageTitle = `Services | Software Development & Microsoft 365 Solutions | ${siteConfig.name}`;
const pageDescription =
  "Full-stack web applications, Microsoft 365, Copilot, Dynamics 365 integration, SharePoint and SPFx, Office Add-ins, Google Workspace, Power Platform, AI, WhatsApp bots, browser extensions, and APIs.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/services`,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Development services by Nadeem Ashfaq" }]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"]
  }
};

const clientNeeds = [
  { question: "Need a custom business or SaaS application?", slug: "full-stack-development" },
  { question: "Need Microsoft 365 connected to an existing system?", slug: "microsoft-365-development" },
  { question: "Need a Microsoft Copilot integration?", slug: "microsoft-copilot-development" },
  { question: "Need Dynamics 365 connected to another business system?", slug: "dynamics-365-development" },
  { question: "Need a SharePoint or SPFx solution?", slug: "sharepoint-spfx-development" },
  { question: "Need an add-in for Word, Excel, Outlook, or PowerPoint?", slug: "office-add-in-development" },
  { question: "Need a Gmail, Sheets, Docs, or Workspace integration?", slug: "google-workspace-add-on-development" },
  { question: "Need Power Apps or Power Automate?", slug: "power-platform-development" },
  { question: "Need AI added to an application or workflow?", slug: "ai-development" },
  { question: "Need an AI-powered WhatsApp workflow?", slug: "whatsapp-ai-bot-development" },
  { question: "Need a browser extension for Chrome or Edge?", slug: "browser-extension-development" },
  { question: "Need APIs or third-party systems connected?", slug: "api-integration" }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` }
  ]
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Development Services",
  itemListElement: servicePagesData.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${siteUrl}/services/${service.slug}`
  }))
};

export default function ServicesPage() {
  return (
    <main className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceListSchema]).replace(/</g, "\\u003c") }}
      />
      <SectionContainer id="services-overview">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-emerald-400">Services</span>
        </nav>

        <header className="mb-14 max-w-4xl space-y-5">
          <p className="text-sm font-bold uppercase text-emerald-400">Services</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Software Development &amp; Microsoft 365 Solutions
          </h1>
          <p className="text-lg leading-relaxed text-slate-300">
            I build full-stack web applications and solutions across Microsoft 365, Copilot integrations, Dynamics 365, SharePoint and SPFx, Office Add-ins, Google Workspace, Power Platform, Python, AI applications, WhatsApp workflows, browser extensions, and APIs. The approach starts with your requirements and existing systems, then shapes the right application and integration work around them.
          </p>
        </header>

        <section aria-labelledby="available-services" className="grid gap-6 md:grid-cols-2">
          <h2 id="available-services" className="sr-only">Available services</h2>
          {servicePagesData.map((service) => (
            <article key={service.slug} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-7">
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{service.shortDescription}</p>
              <Link href={`/services/${service.slug}`} className="mt-6 flex w-full items-center justify-between gap-4 border-t border-slate-800 pt-4 text-sm font-bold text-emerald-400 hover:text-emerald-300">
                <span>Explore {service.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>

        <section aria-labelledby="how-i-can-help" className="mt-20 border-t border-slate-800 pt-12">
          <h2 id="how-i-can-help" className="text-2xl font-bold text-white sm:text-3xl">How I Can Help</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {clientNeeds.map((need) => (
              <li key={need.slug} className="border-b border-slate-800 pb-4">
                <Link href={`/services/${need.slug}`} className="flex w-full items-center justify-between gap-4 text-sm font-medium text-slate-200 transition-colors hover:text-emerald-400">
                  <span>{need.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-emerald-400">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="services-cta" className="mt-20 rounded-3xl border border-emerald-500/30 bg-slate-900 p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="services-cta" className="text-2xl font-extrabold text-white sm:text-3xl">Have a project in mind?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Share the business need, the systems involved, and what you want to improve. We can discuss a suitable technical approach.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 self-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500 sm:self-auto">
            Discuss a project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </SectionContainer>
    </main>
  );
}
