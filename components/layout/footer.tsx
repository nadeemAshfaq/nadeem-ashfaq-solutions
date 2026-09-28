import Link from "next/link";

import { servicePagesData } from "@/data/service-pages-data";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950">
      {/* Top Emerald Gradient Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="w-full px-6 py-14 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-xs font-extrabold text-white shadow-md shadow-emerald-500/20">NA</span>
              <span className="text-base font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm font-semibold text-emerald-400">{siteConfig.role}</p>
            <p className="text-xs text-slate-300">{siteConfig.subRole}</p>
            <p className="text-xs text-slate-400">
              Architecting production web platforms, custom Microsoft 365 solutions, Google Workspace add-ons, and AI automation.
            </p>
          </div>

          {/* Core Services (Internal SEO Links) */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Specialized Services
            </p>
            <ul className="space-y-2 text-xs">
              {servicePagesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 transition-colors hover:text-emerald-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 transition-colors hover:text-emerald-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 transition-colors hover:text-emerald-400">
                  Case Studies &amp; Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 transition-colors hover:text-emerald-400">
                  About &amp; Methodology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 transition-colors hover:text-emerald-400">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Profiles */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Client Inquiries
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block break-all text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              <span><span aria-hidden="true">💬</span> Direct WhatsApp</span>
            </a>
            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.profiles.map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-300 transition-colors hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white"
                >
                  {p.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          {/* Dual Ecosystem Indicators */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span title="Word" className="h-2 w-2 rounded-full bg-[#185abd]" />
              <span title="Excel" className="h-2 w-2 rounded-full bg-[#107c41]" />
              <span title="PowerPoint" className="h-2 w-2 rounded-full bg-[#c43e1c]" />
              <span title="Teams" className="h-2 w-2 rounded-full bg-[#6264a7]" />
              <span>Microsoft 365</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <span title="Gmail" className="h-2 w-2 rounded-full bg-[#ea4335]" />
              <span title="Drive" className="h-2 w-2 rounded-full bg-[#34a853]" />
              <span title="Sheets" className="h-2 w-2 rounded-full bg-[#0f9d58]" />
              <span title="Docs" className="h-2 w-2 rounded-full bg-[#4285f4]" />
              <span>Google Workspace</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
