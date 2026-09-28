import Link from "next/link";

type CTAButtonsProps = {
  primaryHref: string;
  secondaryHref: string;
};

export function CTAButtons({ primaryHref, secondaryHref }: CTAButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3.5 pt-2">
      {/* Primary Green Action */}
      <Link
        href={primaryHref}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/60 transition-all duration-200 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-emerald-400 hover:shadow-emerald-900/40"
      >
        <span>View Projects</span>
        <span>→</span>
      </Link>

      {/* Secondary Ghost Action */}
      <Link
        href={secondaryHref}
        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800 hover:text-white"
      >
        <span>Contact Me</span>
      </Link>
    </div>
  );
}
