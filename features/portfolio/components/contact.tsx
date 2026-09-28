import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/constants/site";

export function Contact() {
  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Nadeem, I'd like to discuss a project."
  )}`;

  return (
    <SectionContainer id="contact" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's build something impactful together"
        description="Whether you need a custom Microsoft 365 solution, full-stack product development, or AI automation consulting, feel free to reach out directly."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {/* WhatsApp Card */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Contact Nadeem on WhatsApp at ${siteConfig.phone}`}
          className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20"
        >
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-2xl text-emerald-400 shadow-inner">
              💬
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Direct Messaging
            </p>
            <h3 className="mt-1 text-2xl font-bold text-white">{siteConfig.phone}</h3>
            <p className="mt-2 text-sm text-slate-300">
              Quick response for project inquiries, consulting, and availability.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-emerald-400">
            <span>Start a conversation on WhatsApp</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </div>
        </a>

        {/* Email Card */}
        <a
          href={`mailto:${siteConfig.email}`}
          aria-label={`Email Nadeem at ${siteConfig.email}`}
          className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20"
        >
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-2xl text-blue-400 shadow-inner">
              ✉️
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Direct Email
            </p>
            <h3 className="mt-1 break-all text-xl font-bold text-white">{siteConfig.email}</h3>
            <p className="mt-2 text-sm text-slate-300">
              Send scopes, RFP details, or architectural requirements directly.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-400">
            <span>Send an email inquiry</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </div>
        </a>
      </div>

      {/* Professional Profiles */}
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
          Professional Freelance &amp; Social Profiles
        </p>
        <div className="flex flex-wrap gap-3">
          {siteConfig.profiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-slate-800 hover:text-white hover:shadow-lg"
            >
              <span>{profile.label}</span>
              <span className="text-xs text-slate-400">↗</span>
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
