import type { Metadata } from "next";
import Link from "next/link";

import { SectionContainer } from "@/components/ui/section-container";
import { siteConfig, siteUrl } from "@/data/site-config";

const pageTitle = "Social Agent | AI Social Media Content Planning Platform | Nadeem Ashfaq";
const pageDescription =
  "Social Agent is an AI social media content platform for market research, topic planning, content generation, review, approvals, and publishing workflows.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/projects/socialagent` },
  openGraph: {
    type: "article",
    url: `${siteUrl}/projects/socialagent`,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Social Agent AI social media content planning platform" }]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"]
  }
};

const capabilities = [
  "AI market and competitor research",
  "Topic and content planning",
  "AI-generated captions and visuals",
  "Quality assurance and brand-tone review",
  "Human approval and client approval through magic links",
  "Multi-brand agency workspace",
  "Publishing to Instagram, Facebook, LinkedIn, and X",
  "Scheduled publishing"
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/projects` },
    { "@type": "ListItem", position: 3, name: "Social Agent", item: `${siteUrl}/projects/socialagent` }
  ]
};

export default function SocialAgentProjectPage() {
  return (
    <main className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }}
      />
      <SectionContainer id="socialagent-project">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/projects" className="hover:text-emerald-400">Projects</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-emerald-400">Social Agent</span>
        </nav>

        <header className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-12">
          <p className="text-sm font-bold uppercase text-emerald-400">Public Product</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Social Agent — AI Social Media Content Planning Platform
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Social Agent is a platform for researching a brand’s market, planning content, generating posts and visuals, checking content, and managing approval and publishing workflows from one workspace.
          </p>
          <a
            href="https://socialagent.pro/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
          >
            Visit Social Agent <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section aria-labelledby="socialagent-capabilities" className="mt-16">
          <h2 id="socialagent-capabilities" className="text-2xl font-bold text-white sm:text-3xl">What the product does</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <li key={capability} className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 text-sm leading-relaxed text-slate-200">
                {capability}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="socialagent-workflow" className="mt-16 border-l-2 border-emerald-500 pl-6">
          <h2 id="socialagent-workflow" className="text-xl font-bold text-white sm:text-2xl">Content workflow</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300">
            Research and planning feed into content creation and review. Teams can route drafts through human and client approvals before scheduling or publishing to supported social channels.
          </p>
        </section>

        <nav aria-label="Related services" className="mt-16 border-t border-slate-800 pt-10">
          <h2 className="text-xl font-bold text-white">Related Services</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            <li><Link href="/services/ai-development" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">AI Development <span aria-hidden="true">→</span></Link></li>
            <li><Link href="/services/full-stack-development" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">Full-Stack Development <span aria-hidden="true">→</span></Link></li>
            <li><Link href="/services/api-integration" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">API Integration <span aria-hidden="true">→</span></Link></li>
          </ul>
        </nav>

        <section aria-labelledby="socialagent-cta" className="mt-16 rounded-3xl border border-emerald-500/30 bg-slate-900 p-8 text-center sm:p-12">
          <h2 id="socialagent-cta" className="text-2xl font-extrabold text-white sm:text-3xl">Building an AI-powered product or workflow?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Let’s discuss the product requirements, systems, and integrations involved.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500">
            Discuss a project <span aria-hidden="true">→</span>
          </Link>
        </section>
      </SectionContainer>
    </main>
  );
}
