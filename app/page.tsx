import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clientProcess, homeFaqs, whyWorkWithMe } from "@/data/client-value-data";
import { servicePagesData } from "@/data/service-pages-data";
import { siteConfig, siteUrl } from "@/data/site-config";
import { skillCategories } from "@/features/portfolio/data/portfolio-data";

const homepageServiceOrder = [
  "full-stack-development",
  "microsoft-365-development",
  "sharepoint-spfx-development",
  "office-add-in-development",
  "google-workspace-add-on-development",
  "power-platform-development",
  "ai-development",
  "api-integration"
];

const expertiseGroups = [
  {
    title: "Product Engineering",
    services: [
      { label: "Full-Stack Development", slug: "full-stack-development" },
      { label: "Browser Extensions", slug: "browser-extension-development" },
      { label: "API Integration", slug: "api-integration" }
    ]
  },
  {
    title: "Microsoft Ecosystem",
    services: [
      { label: "Microsoft 365", slug: "microsoft-365-development" },
      { label: "Copilot", slug: "microsoft-copilot-development" },
      { label: "Dynamics 365", slug: "dynamics-365-development" },
      { label: "SharePoint & SPFx", slug: "sharepoint-spfx-development" },
      { label: "Office Add-ins", slug: "office-add-in-development" },
      { label: "Power Platform", slug: "power-platform-development" }
    ]
  },
  {
    title: "AI & Automation",
    services: [
      { label: "Python & AI", slug: "ai-development" },
      { label: "WhatsApp AI", slug: "whatsapp-ai-bot-development" },
      { label: "AI Development", slug: "ai-development" }
    ]
  },
  {
    title: "Google Workspace",
    services: [
      { label: "Workspace Add-ons", slug: "google-workspace-add-on-development" }
    ]
  }
];

const pageTitle = `${siteConfig.name} | Full-Stack Developer & Microsoft 365 Solutions Architect`;
const pageDescription =
  "Full-stack development and solutions architecture across Microsoft 365, Copilot, Dynamics 365 integrations, Python, Google Workspace, AI, WhatsApp workflows, browser extensions, and SaaS.";
const homepageSkills = [
  "Microsoft 365 Development",
  "Microsoft Graph API",
  "Office Add-ins (Office.js)",
  "SharePoint Framework (SPFx)",
  "Microsoft Entra ID",
  "Power Platform",
  "Google Workspace Add-ons",
  "Full-Stack Web Development",
  "AI/LLM Integrations"
];
const homepageSchemaImage = new URL("/opengraph-image", siteUrl).toString();
const homepageProfileLinks = [
  "https://www.linkedin.com/in/nadeem-ashfaq-3274a7264/",
  "https://www.upwork.com/freelancers/nadeema59",
  "https://www.fiverr.com/nadeem141117",
  "https://github.com/nadeemashfaq"
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} | Full-Stack Developer & Solutions Architect` }]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"]
  }
};

type HomepageProject = {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  href?: string;
  linkLabel?: string;
  external: boolean;
  caseStudyUrl?: string;
};

const homepageProjects: HomepageProject[] = [
  {
    title: "AskX",
    subtitle: "AI-powered SaaS platform",
    description:
      "A business-focused AI chatbot platform combining knowledge bases, AI conversations, analytics, integrations, and customer handoff.",
    techStack: ["React", "TypeScript", "Node.js", "AI/LLM", "Stripe", "Keycloak"],
    href: "https://askx.io/",
    linkLabel: "View AskX",
    external: true
  },
  {
    title: "Social Agent",
    subtitle: "AI social media content planning platform",
    description:
      "Research, plan, create, review, approve, and publish social content from a multi-brand workspace.",
    techStack: [],
    href: "https://socialagent.pro/",
    linkLabel: "Visit Social Agent",
    external: true,
    caseStudyUrl: "/projects/socialagent"
  },
  {
    title: "Office Add-ins",
    subtitle: "Microsoft Office productivity solutions",
    description:
      "Custom solutions for Word, Excel, PowerPoint, and Outlook using Office.js, React, TypeScript, Microsoft Graph, authentication, and business APIs.",
    techStack: ["Office.js", "React", "TypeScript", "Microsoft Graph", "Business APIs"],
    href: "/services/office-add-in-development",
    linkLabel: "View Office Add-ins",
    external: false
  }
];

const clientTestimonials = [
  {
    client: "Kilelrono",
    service: "Microsoft Office Add-in Development — Outlook & Word",
    quote:
      "Nadeem Ashfaq did an outstanding job developing custom add-ins for Outlook and Word. Office add-in development can be notoriously tricky with manifest configurations and cross-client compatibility (web vs. desktop), but he handled it effortlessly. He delivered clean, well-documented code, integrated our required APIs seamlessly and communicated clearly throughout the process. Highly recommend Nadeem for any Office.js or Microsoft ecosystem development.",
    rating: "5.0 / 5.0"
  },
  {
    client: "Elz",
    service: "Outlook Add-in Development & API Integration — Germany",
    quote:
      "I enjoyed working with Nadeem. He found good solutions, communicated well and finished the project successfully. I will work again with Nadeem.",
    rating: "5.0 / 5.0"
  },
  {
    client: "Word Add-in Client",
    service: "Microsoft Word Add-in Development",
    quote:
      "Great job. I had a great experience working with this freelancer. I will be doing more work with him in future.",
    rating: "5.0 / 5.0"
  },
  {
    client: "Private Client",
    service: "Custom Development Project",
    quote:
      "Good guy and a pleasure to deal with. I had to pull out of the project as my plans had changed and the project was no longer required. He gave me all the files and refunded all the money too.",
    rating: "5.0 / 5.0"
  },
  {
    client: "Xfinitive",
    service: "AskX & SocialAgent — AI SaaS Product Development",
    quote:
      "Nadeem has been an integral part of our product development, contributing across the frontend, backend, AI integrations, and overall product architecture. He understands complex requirements quickly and consistently turns them into practical, production-ready solutions.",
    rating: "Full-Stack Development · AI · SaaS · Product Engineering"
  }
];

export default function Home() {
  const homepageServices = [...servicePagesData]
    .filter((service) => homepageServiceOrder.includes(service.slug))
    .sort((first, second) => homepageServiceOrder.indexOf(first.slug) - homepageServiceOrder.indexOf(second.slug));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                name: siteConfig.name,
                jobTitle: siteConfig.role,
                description: siteConfig.description,
                url: siteUrl,
                image: homepageSchemaImage,
                sameAs: homepageProfileLinks,
                areaServed: "Worldwide",
                knowsAbout: homepageSkills
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: siteConfig.name,
                description: siteConfig.headline,
                publisher: { "@id": `${siteUrl}/#person` }
              },
              {
                "@type": "ProfessionalService",
                "@id": `${siteUrl}/#professional-service`,
                name: siteConfig.name,
                url: siteUrl,
                description: siteConfig.description,
                email: siteConfig.email,
                image: homepageSchemaImage,
                sameAs: homepageProfileLinks,
                areaServed: "Worldwide",
                founder: { "@id": `${siteUrl}/#person` },
                knowsAbout: homepageSkills,
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Professional Services",
                  itemListElement: servicePagesData.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: service.title,
                      description: service.shortDescription,
                      url: `${siteUrl}/services/${service.slug}`
                    }
                  }))
                }
              },
              {
                "@type": "WebPage",
                "@id": `${siteUrl}/#webpage`,
                url: siteUrl,
                name: pageTitle,
                description: pageDescription,
                isPartOf: { "@id": `${siteUrl}/#website` },
                about: { "@id": `${siteUrl}/#person` },
                mainEntity: { "@id": `${siteUrl}/#person` }
              }
            ]
          }).replace(/</g, "\\u003c")
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer }
            }))
          }).replace(/</g, "\\u003c")
        }}
      />
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
            {/* Main Role Title */}
            <div className="space-y-3">
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {siteConfig.role}
              </h1>
              <p className="max-w-4xl text-xl font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300 bg-clip-text text-transparent sm:text-2xl">
                {siteConfig.headline}
              </p>
            </div>

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
                href="#featured-projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 hover:text-white"
              >
                <span>Explore My Work</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Profile Presentation */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* Multi-Color Accent Ring */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-blue-500 via-amber-500 to-purple-600 p-[2px] shadow-2xl shadow-emerald-950/50">
              <div className="relative overflow-hidden rounded-[22px] bg-slate-900">
                <Image
                  src="/Profile.png"
                  alt="Portrait of Nadeem Ashfaq, Senior Full-Stack Developer and Solutions Architect"
                  width={500}
                  height={580}
                  className="h-auto w-full object-cover"
                  priority
                />

                {/* Bottom Gradient Overlay with Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-16">
                  <p className="text-base font-bold text-white">Nadeem Ashfaq</p>
                  <p className="text-xs font-semibold text-emerald-400">
                    Full-Stack Developer &amp; Solutions Architect
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge: Microsoft 365 */}
            <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-blue-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <span aria-hidden="true" className="h-5 w-5 rounded bg-[#0078d4] shadow-sm" />
              <span className="text-xs font-bold text-white">Microsoft 365</span>
            </div>

            {/* Floating Badge: Google Workspace */}
            <div className="absolute -left-3 top-28 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <span aria-hidden="true" className="h-5 w-5 rounded bg-amber-500 shadow-sm" />
              <span className="text-xs font-bold text-white">Google Workspace</span>
            </div>

            {/* Floating Badge: AI Automation */}
            <div className="absolute -right-3 bottom-24 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
              <span aria-hidden="true" className="h-5 w-5 rounded bg-emerald-500 shadow-sm" />
              <span className="text-xs font-bold text-white">AI Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Expertise ── */}
      <section className="border-b border-slate-800/80 bg-slate-950/60 py-8">
        <SectionContainer id="trust-strip">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Expertise across connected product and business ecosystems:
            </p>
            <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {expertiseGroups.map((group) => (
                <section key={group.title} aria-label={group.title}>
                  <h2 className="text-xs font-bold uppercase text-slate-300">{group.title}</h2>
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                    {group.services.map((service) => (
                      <li key={`${group.title}-${service.label}`}>
                        <Link href={`/services/${service.slug}`} className="text-xs text-emerald-300 underline decoration-emerald-500/30 underline-offset-4 hover:text-white">
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ── 3. Services ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80">
        <SectionContainer id="services">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <SectionHeading
                eyebrow="Services"
                title="Solutions built around real business requirements"
                description="From full-stack applications and productivity add-ons to AI workflows and system integrations."
              />
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <span>Explore All Services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homepageServices.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div>
                  <div
                    aria-hidden="true"
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
                        <span aria-hidden="true" className="text-emerald-400 font-bold">✓</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex w-full items-center justify-between gap-3 text-xs font-bold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    <span>Explore Service</span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 4. Featured Work ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80 bg-slate-950/60">
        <SectionContainer id="featured-projects">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
            <div>
              <SectionHeading
                eyebrow="Featured Work"
                title="Products and solutions I've helped build"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {homepageProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-8 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-300">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-emerald-400">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-5">
                  {project.techStack.length > 0 && <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-700/80 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>}

                  {project.href && project.linkLabel && (
                    project.external ? (
                      <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                        <span>{project.linkLabel}</span><span>↗</span>
                      </a>
                    ) : (
                      <Link href={project.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                        <span>{project.linkLabel}</span><span>→</span>
                      </Link>
                    )
                  )}
                  {project.caseStudyUrl && (
                    <Link href={project.caseStudyUrl} className="ml-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                      <span>View case study</span><span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 5. What Clients Say ── */}
      <section className="border-b border-slate-800/80 bg-slate-950/60 py-20 sm:py-24">
        <SectionContainer id="client-testimonials">
          <div className="mb-12">
            <SectionHeading
              eyebrow="What Clients Say"
              title="Trusted by teams building products, workflows, and productivity tools"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {clientTestimonials.map((testimonial) => (
              <article
                key={`${testimonial.client}-${testimonial.service}`}
                className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.client}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-400">{testimonial.service}</p>
                  </div>
                  <span aria-label="Client rating" className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-300">
                    {testimonial.rating}
                  </span>
                </div>

                <blockquote className="flex-1 text-sm leading-relaxed text-slate-300 before:content-['“'] before:text-emerald-400 before:mr-1 before:font-bold after:content-['”'] after:text-emerald-400 after:ml-1 after:font-bold">
                  {testimonial.quote}
                </blockquote>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 6. Microsoft 365 and Google Workspace ── */}
      <section className="border-b border-slate-800/80 py-20 sm:py-24">
        <SectionContainer id="productivity-platforms">
          <SectionHeading
            eyebrow="Connected Productivity Platforms"
            title="Building solutions across the platforms businesses already use"
            description="I work across Microsoft 365 and Google Workspace, helping organizations extend their existing productivity platforms rather than adding disconnected systems to their workflows."
          />
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl border border-blue-500/30 bg-slate-900/80 p-8">
              <h3 className="text-xl font-bold text-white">Microsoft 365</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">SharePoint, SPFx, Office.js, Microsoft Graph, Entra ID, Power Apps, and Power Automate.</p>
            </article>
            <article className="rounded-3xl border border-amber-500/30 bg-slate-900/80 p-8">
              <h3 className="text-xl font-bold text-white">Google Workspace</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">Gmail, Google Docs, Google Sheets, Google Drive, Google Workspace APIs, and Apps Script.</p>
            </article>
          </div>
        </SectionContainer>
      </section>

      {/* ── 6. AI and Automation ── */}
      <section className="border-b border-slate-800/80 bg-slate-950/60 py-20 sm:py-24">
        <SectionContainer id="ai-automation">
          <SectionHeading
            eyebrow="Python, AI & Automation"
            title="Turning AI capabilities into practical business software"
            description="I integrate AI into existing products and workflows rather than treating it as a standalone feature."
          />
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "AI chatbots",
              "Python backend services",
              "Knowledge-base and RAG systems",
              "LLM integrations",
              "AI agents",
              "Business workflow automation",
              "Document and data processing",
              "AI-powered SaaS features",
              "API-connected AI workflows"
            ].map((item) => (
              <li key={item} className="border-b border-slate-800 pb-3 text-sm text-slate-200">{item}</li>
            ))}
          </ul>
        </SectionContainer>
      </section>

      <section className="border-b border-slate-800/80 py-20 sm:py-24">
        <SectionContainer id="common-questions">
          <SectionHeading
            eyebrow="Common Questions"
            title="Practical answers before we start"
          />
          <FAQAccordion faqs={homeFaqs} columns={2} />
        </SectionContainer>
      </section>

      {/* ── 7. Why Work With Me ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80">
        <SectionContainer id="why-work-with-me">
          <SectionHeading
            eyebrow="Why Work With Me"
            title="From business requirement to production system"
            description="I can work across the full path: understanding the requirement, shaping the architecture, building the product, and connecting it to the systems your business uses."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyWorkWithMe.map((prop) => (
              <div
                key={prop.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
              >
                <span aria-hidden="true" className="text-3xl mb-4 block">{prop.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                <p className="text-xs leading-relaxed text-slate-300">{prop.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ── 8. Technology Expertise ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80 bg-slate-950/60">
        <SectionContainer id="technologies">
          <SectionHeading
            eyebrow="Technology Expertise"
            title="Technologies across the stack"
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

      {/* ── 9. Delivery Approach ── */}
      <section className="py-20 sm:py-24 border-b border-slate-800/80">
        <SectionContainer id="client-process">
          <SectionHeading
            eyebrow="Delivery Approach"
            title="From requirements to production"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* ── 10. Final CTA ── */}
      <section className="py-20 sm:py-24">
        <SectionContainer id="cta">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Have a product, integration, or technical challenge?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">Let's discuss what you're building and determine the right technical approach.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-emerald-500">
              Start a Project <span>→</span>
            </Link>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}
