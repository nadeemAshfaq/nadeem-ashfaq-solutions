import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig, siteUrl } from "@/data/site-config";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-inter"
});

const pageTitle = `${siteConfig.name} | Full-Stack Developer & Microsoft 365 Solutions Architect`;

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
