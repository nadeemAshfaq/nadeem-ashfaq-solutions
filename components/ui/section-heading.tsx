type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 space-y-3 ${centered ? "text-center" : ""}`}>
      {/* Eyebrow badge */}
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {eyebrow}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={`text-base leading-relaxed text-slate-300 sm:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
