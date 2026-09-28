import Link from "next/link";

import { siteConfig } from "@/data/site-config";

type CTABannerProps = {
  title?: string;
  description?: string;
};

export function CTABanner({
  title = "Ready to Build or Modernize Your Platform?",
  description = "Whether you need a custom Google Workspace add-on, an enterprise Microsoft 365 integration, a high-scale full-stack web application, or custom AI workflows, let's architect a solution that delivers.",
}: CTABannerProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16 shadow-2xl">
      {/* Decorative ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Accepting New Client Projects &amp; Consulting
          </span>
        </div>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-950/60 transition-all duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-emerald-400 hover:shadow-emerald-900/40"
          >
            <span>Start a Project</span>
            <span>→</span>
          </Link>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-7 py-4 text-base font-semibold text-emerald-300 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-emerald-500/20"
          >
            <span>💬 Chat on WhatsApp</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="mt-6 text-xs text-slate-400">
          Direct architect communication • Confidential NDA upon request • Typical response in under 24 hours
        </p>
      </div>
    </div>
  );
}
