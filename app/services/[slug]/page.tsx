import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionContainer } from "@/components/ui/section-container";
import { clientProcess } from "@/data/client-value-data";
import { servicePagesData } from "@/data/service-pages-data";
import { siteConfig, siteUrl } from "@/data/site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePagesData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePagesData.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `${siteUrl}/services/${service.slug}`,
      siteName: siteConfig.name,
      title: service.seoTitle,
      description: service.seoDescription,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: service.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: ["/opengraph-image"]
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicePagesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    .map((relatedSlug) => servicePagesData.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);
  const breadcrumbItems = [
    { name: "Home", item: siteUrl },
    { name: "Services", item: `${siteUrl}/services` },
    { name: service.title, item: `${siteUrl}/services/${service.slug}` }
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/services/${service.slug}#service`,
        name: service.title,
        description: service.seoDescription,
        url: `${siteUrl}/services/${service.slug}`,
        provider: { "@id": `${siteUrl}/#professional-service` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item
        }))
      },
      ...(service.faqs.length > 0
        ? [{
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer }
            }))
          }]
        : [])
    ]
  };

  return (
    <main className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SectionContainer id="service-page">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/services" className="hover:text-emerald-400">Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-emerald-400">{service.title}</span>
        </nav>

        <header className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl sm:p-12">
          <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border text-2xl ${service.accentColor}`} aria-hidden="true">
            {service.icon}
          </div>
          <p className="text-sm font-semibold text-emerald-400">Development services</p>
          <h1 className="mt-2 max-w-4xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {service.pageHeading}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {service.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-emerald-500">
              Discuss your requirements <span aria-hidden="true">→</span>
            </Link>
            <Link href="#capabilities" className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white">
              Explore capabilities
            </Link>
          </div>
        </header>

        <section aria-labelledby="what-i-build" className="mt-16">
          <h2 id="what-i-build" className="text-2xl font-bold text-white sm:text-3xl">What I Build</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.whatIBuild.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">{item}</li>
            ))}
          </ul>
        </section>

        <section id="capabilities" aria-labelledby="capabilities-heading" className="mt-16">
          <h2 id="capabilities-heading" className="text-2xl font-bold text-white sm:text-3xl">Capabilities</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {service.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-slate-800 pb-4 text-sm leading-relaxed text-slate-300">
                <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {service.architectureFlow && (
          <section aria-labelledby="architecture-flow" className="mt-16">
            <h2 id="architecture-flow" className="text-2xl font-bold text-white sm:text-3xl">{service.architectureFlow.title}</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {service.architectureFlow.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">{index + 1}</span>
                  <span className="text-sm text-slate-200">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section aria-labelledby="who-this-is-for" className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="who-this-is-for" className="text-2xl font-bold text-white sm:text-3xl">Who This Is For</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">This service can fit teams with needs such as:</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.whoFor.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="technologies" className="mt-16">
          <h2 id="technologies" className="text-2xl font-bold text-white sm:text-3xl">Technologies &amp; Platforms</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">The tools below are selected to fit the product, environment, and integration requirements.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {service.technologyGroups.map((group) => (
              <section key={group.title} aria-label={group.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-base font-bold text-white">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="existing-applications" className="mt-16 border-l-2 border-emerald-500 pl-6">
          <h2 id="existing-applications" className="text-xl font-bold text-white sm:text-2xl">Working With Existing Applications</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300">{service.existingApplicationNote}</p>
        </section>

        <section aria-labelledby="how-i-work" className="mt-16">
          <h2 id="how-i-work" className="text-2xl font-bold text-white sm:text-3xl">How I Work</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {clientProcess.map((step) => (
              <li key={step.step} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-xs font-bold text-emerald-400">{step.step}</p>
                <h3 className="mt-2 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {service.relevantWork.length > 0 && (
          <section aria-labelledby="relevant-work" className="mt-16">
            <h2 id="relevant-work" className="text-2xl font-bold text-white sm:text-3xl">Relevant Work</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {service.relevantWork.map((work) => (
                <article key={work.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                  <h3 className="text-lg font-bold text-white">{work.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{work.description}</p>
                  <a href={work.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300">
                    {work.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {service.faqs.length > 0 && (
          <section aria-labelledby="service-faqs" className="mt-16">
            <h2 id="service-faqs" className="mb-6 text-2xl font-bold text-white sm:text-3xl">Frequently Asked Questions</h2>
            <FAQAccordion faqs={service.faqs} />
          </section>
        )}

        {relatedServices.length > 0 && (
          <nav aria-label="Related services" className="mt-16 border-t border-slate-800 pt-10">
            <h2 className="text-xl font-bold text-white">Related Services</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link href={`/services/${related.slug}`} className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">{related.title} <span aria-hidden="true">→</span></Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <section aria-labelledby="service-cta" className="mt-16 rounded-3xl border border-emerald-500/30 bg-slate-900 p-8 text-center sm:p-12">
          <h2 id="service-cta" className="text-2xl font-extrabold text-white sm:text-3xl">{service.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">{service.ctaDescription}</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </section>
      </SectionContainer>
    </main>
  );
}
