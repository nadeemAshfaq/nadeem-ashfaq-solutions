import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTABanner } from "@/components/ui/cta-banner";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionContainer } from "@/components/ui/section-container";
import { projectsData } from "@/data/projects-data";
import { servicesData } from "@/data/services-data";
import { siteConfig } from "@/data/site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const pageTitle = `${service.title} | ${siteConfig.name}`;

  return {
    title: pageTitle,
    description: service.shortDescription,
    keywords: service.targetKeywords,
    openGraph: {
      title: pageTitle,
      description: service.shortDescription,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) =>
    service.relatedProjects.includes(p.slug)
  );

  // Schema.org Structured Data: Service + FAQPage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        provider: {
          "@type": "Person",
          name: siteConfig.name,
          jobTitle: siteConfig.role,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <SectionContainer id="service-hero">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-emerald-400">Services</Link>
          <span>/</span>
          <span className="text-emerald-400">{service.title}</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-12 backdrop-blur-sm shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-3xl shadow-inner ${service.accentColor}`}
            >
              {service.icon}
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                Specialized Service
              </span>
              <p className="mt-1 text-xs text-slate-400">Enterprise Engineering &amp; Solutions Architecture</p>
            </div>
          </div>

          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {service.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/60 transition-all hover:-translate-y-0.5 hover:from-emerald-500 hover:to-emerald-400"
            >
              <span>Discuss Your Requirements</span>
              <span>→</span>
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white"
            >
              <span>Quick WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* 2-Column: Capabilities & Business Benefits */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Capabilities */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-2">Technical Capabilities</h2>
            <p className="text-xs text-slate-400 mb-6">What I architect and build for your team</p>

            <ul className="space-y-3.5">
              {service.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    ✓
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 sm:p-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-2">Business ROI &amp; Outcomes</h2>
            <p className="text-xs text-slate-400 mb-6">Why clients invest in this service</p>

            <ul className="space-y-4">
              {service.businessBenefits.map((benefit, i) => (
                <li key={benefit} className="flex items-start gap-3.5 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                    0{i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-200">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Relevant Case Studies / Evidence */}
        {relatedProjects.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                Proof of Delivery
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                Relevant Real-World Project Examples
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Concrete implementations demonstrating this exact architectural capability
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{project.description}</p>

                  <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Client Outcome:
                    </p>
                    <p className="mt-1 text-xs text-slate-300">{project.clientOutcome}</p>
                  </div>

                  <div className="mt-5 border-t border-slate-800/80 pt-4">
                    <p className="mb-2 text-xs font-bold text-slate-400">Architecture Highlights:</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.architecturePoints.slice(0, 3).map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="text-emerald-400">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                Common Questions from Potential Clients
              </h2>
            </div>

            <FAQAccordion faqs={service.faqs} />
          </div>
        )}

        {/* Final CTA Banner */}
        <div className="mt-20">
          <CTABanner
            title={`Ready to start your ${service.title} project?`}
            description="Let's review your exact workflow, technical architecture, and milestones."
          />
        </div>
      </SectionContainer>
    </main>
  );
}
