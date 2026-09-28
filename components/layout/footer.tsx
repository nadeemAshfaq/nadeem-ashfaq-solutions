import { siteConfig } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950">
      {/* Top Emerald Gradient Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="w-full px-6 py-12 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-sm font-black text-white shadow-md shadow-emerald-500/20">
                N
              </span>
              <span className="text-base font-bold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm font-semibold text-emerald-400">{siteConfig.role}</p>
            <p className="text-xs text-slate-300">{siteConfig.subRole}</p>
            <p className="text-xs text-slate-400">
              Available for full-time roles, contract consulting, and enterprise architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {["About", "Skills", "Services", "Projects", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Direct Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block break-all text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="block text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {siteConfig.phone}
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
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          {/* Dual Ecosystem Indicators */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            {/* Microsoft */}
            <div className="flex items-center gap-1.5">
              <span title="Word" className="h-2 w-2 rounded-full bg-[#185abd]" />
              <span title="Excel" className="h-2 w-2 rounded-full bg-[#107c41]" />
              <span title="PowerPoint" className="h-2 w-2 rounded-full bg-[#c43e1c]" />
              <span title="Teams" className="h-2 w-2 rounded-full bg-[#6264a7]" />
              <span>Microsoft 365</span>
            </div>
            <span className="text-slate-600">•</span>
            {/* Google Workspace */}
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
