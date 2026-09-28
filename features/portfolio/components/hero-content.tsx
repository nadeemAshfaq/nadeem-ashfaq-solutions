import type { ReactNode } from "react";

import { siteConfig } from "@/lib/constants/site";

type HeroContentProps = {
  children: ReactNode;
};

export function HeroContent({ children }: HeroContentProps) {
  return (
    <div className="space-y-6">
      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 shadow-inner">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
          Available for Architecture &amp; Development Roles
        </span>
      </div>

      {/* Main Role Title */}
      <div className="space-y-2">
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {siteConfig.role}
        </h1>
        <p className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300 bg-clip-text text-transparent sm:text-2xl">
          {siteConfig.subRole}
        </p>
      </div>

      {/* Headline */}
      <p className="max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
        {siteConfig.headline}
      </p>

      {/* Description */}
      <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
        {siteConfig.description}
      </p>

      {children}
    </div>
  );
}
