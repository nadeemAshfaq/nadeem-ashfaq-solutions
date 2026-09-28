import type { FAQItem } from "@/types/portfolio";

type FAQAccordionProps = {
  faqs: FAQItem[];
  className?: string;
};

export function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-colors hover:border-emerald-500/40"
        >
          <summary className="flex cursor-pointer items-center justify-between text-base font-bold text-white transition-colors group-open:text-emerald-400">
            <span>{faq.question}</span>
            <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-sm font-bold text-slate-300 transition-transform duration-200 group-open:rotate-180 group-open:border-emerald-500/50 group-open:text-emerald-400">
              ↓
            </span>
          </summary>
          <p className="mt-4 border-t border-slate-800/80 pt-4 text-sm leading-relaxed text-slate-300">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
