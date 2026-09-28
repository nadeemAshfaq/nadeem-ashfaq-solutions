import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { servicePagesData } from "@/data/service-pages-data";
import { siteConfig, siteUrl } from "@/data/site-config";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter"
});

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const pageTitle = `${siteConfig.name} | Full-Stack Developer & Microsoft 365 Solutions Architect`;

const targetedSkills = [
  "Full-Stack Web Development",
  "Microsoft 365 Development",
  "Microsoft 365 Solutions Architect",
  "Microsoft 365 Copilot Integrations",
  "Dynamics 365 Integrations",
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
  "Python",
  "Python REST APIs",
  "WhatsApp AI Bots",
  "Chrome Extensions",
  "Microsoft Edge Extensions",
  "Manifest V3",
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
      jobTitle: siteConfig.role,
      description: siteConfig.description,
      url: siteUrl,
      knowsAbout: targetedSkills
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteConfig.name,
      description: siteConfig.headline,
      publisher: { "@id": personId }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: siteConfig.name,
      url: siteUrl,
      description: siteConfig.description,
      email: siteConfig.email,
      founder: { "@id": personId },
      knowsAbout: targetedSkills,
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
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} | Senior Full-Stack Developer & Microsoft 365 Solutions Architect`,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: pageTitle,
    description: siteConfig.description,
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} | Full-Stack Developer & Solutions Architect` }]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: ["/opengraph-image"]
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
