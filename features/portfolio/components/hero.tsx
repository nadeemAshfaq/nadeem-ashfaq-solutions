import Image from "next/image";

import { CTAButtons } from "./cta-buttons";
import { HeroContent } from "./hero-content";

const stats = [
  { label: "Full-Stack Web", sub: "React · Next.js · Node.js · .NET" },
  { label: "Microsoft 365", sub: "SharePoint · SPFx · Office.js · Graph" },
  { label: "Google Workspace", sub: "Apps Script · Add-ons · Gmail · Sheets" },
  { label: "AI & Cloud", sub: "OpenAI · LLMs · Azure · Power Platform" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#061c10] via-slate-950 to-slate-950">
      {/* Background Ambient Glows */}
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
        <div className="space-y-10">
          <HeroContent>
            <CTAButtons primaryHref="#projects" secondaryHref="#contact" />
          </HeroContent>

          {/* 4 Core Pillars Strip */}
          <div className="grid gap-6 border-t border-slate-800/80 pt-8 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="text-xs font-medium leading-relaxed text-emerald-400/90">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Presentation */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          {/* Multi-Color Microsoft + Google Accent Ring */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-blue-500 via-amber-500 to-purple-600 p-[2px] shadow-2xl shadow-emerald-950/50">
            <div className="relative overflow-hidden rounded-[22px] bg-slate-900">
              <Image
                src="/Profile.png"
                alt="Nadeem Ashfaq – Senior Full-Stack Developer & Solutions Architect"
                width={500}
                height={580}
                className="h-auto w-full object-cover"
                priority
              />

              {/* Bottom Gradient Overlay with Label */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-16">
                <p className="text-base font-bold text-white">Nadeem Ashfaq</p>
                <p className="text-xs font-semibold text-emerald-400">
                  Microsoft 365, Google Workspace &amp; AI Architect
                </p>
              </div>
            </div>
          </div>

          {/* Floating Badge: Microsoft 365 */}
          <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-blue-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0078d4] text-[10px] font-black text-white shadow-sm">
              M
            </span>
            <span className="text-xs font-bold text-white">Microsoft 365</span>
          </div>

          {/* Floating Badge: Google Workspace */}
          <div className="absolute -left-3 top-28 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500 text-[10px] font-black text-white shadow-sm">
              G
            </span>
            <span className="text-xs font-bold text-white">Google Workspace</span>
          </div>

          {/* Floating Badge: AI Automation */}
          <div className="absolute -right-3 bottom-24 flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-emerald-500 text-[10px] font-black text-white shadow-sm">
              AI
            </span>
            <span className="text-xs font-bold text-white">AI Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
