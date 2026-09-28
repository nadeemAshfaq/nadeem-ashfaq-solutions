import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { servicesData } from "@/data/services-data";
import { siteConfig } from "@/data/site-config";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter"
});

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;
const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl.startsWith("http") ? configuredSiteUrl : `https://${configuredSiteUrl}`).origin
  : undefined;
const personId = siteUrl ? `${siteUrl}/#person` : "#person";
const pageTitle = `${siteConfig.name} | ${siteConfig.role} — ${siteConfig.subRole}`;

const targetedSkills = [
  "Full-Stack Web Development",
  "Microsoft 365 Development",
  "Microsoft 365 Solutions Architect",
  "SharePoint",
  "SPFx Developer",
  "Office.js",
  "Office Add-ins",
  "Word Add-ins",
  "Excel Add-ins",
  "PowerPoint Add-ins",
  "Outlook Add-ins",
  "Microsoft Graph",
  "Entra ID",
  "Power Apps",
  "Power Automate",
  "Google Workspace Add-ons",
  "Google Workspace Developer",
  "Gmail Add-ons",
  "Google Sheets Add-ons",
  "Google Docs Add-ons",
  "Google Drive Integrations",
  "Google Apps Script",
  "Google Workspace APIs",
  "OAuth 2.0 Authentication",
  "AI Integrations",
  "OpenAI LLM Applications",
  "RAG Architecture",
  "AI Agents",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  ".NET",
  "Microsoft Azure",
  "SaaS Product Development"
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      jobTitle: `${siteConfig.role} (${siteConfig.subRole})`,
      description: siteConfig.description,
      ...(siteUrl ? { url: siteUrl } : {}),
      knowsAbout: targetedSkills
    },
    {
      "@type": "WebSite",
      ...(siteUrl ? { "@id": `${siteUrl}/#website`, url: siteUrl } : {}),
      name: pageTitle,
      description: siteConfig.headline,
      publisher: { "@id": personId }
    },
    ...servicesData.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
      provider: { "@id": personId }
    }))
  ]
};

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: siteUrl } } : {}),
  title: pageTitle,
  description: siteConfig.description,
  keywords: [
    "Full-Stack Developer",
    "Solutions Architect",
    "Microsoft 365 Developer",
    "Microsoft 365 Solutions Architect",
    "Office Add-in Developer",
    "SharePoint Developer",
    "SPFx Developer",
    "Google Workspace Add-on Developer",
    "Google Workspace Add-ons",
    "Gmail Add-ons",
    "Google Sheets Add-ons",
    "Google Docs Add-ons",
    "Google Apps Script Developer",
    "Microsoft Graph Developer",
    "Office.js Developer",
    "Power Apps Developer",
    "Power Automate Developer",
    "AI Integration Developer",
    "AI Automation Developer",
    "SaaS Developer"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: pageTitle,
    description: siteConfig.description,
    ...(siteUrl ? { url: siteUrl } : {})
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: siteConfig.description
  }
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${manrope.className} bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
