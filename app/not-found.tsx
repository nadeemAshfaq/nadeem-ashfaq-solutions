import type { Metadata } from "next";
import Link from "next/link";

import { SectionContainer } from "@/components/ui/section-container";

export const metadata: Metadata = {
  title: "Page Not Found | Nadeem Ashfaq",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center py-20">
      <SectionContainer id="not-found">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-emerald-400">404 · Page not found</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            This page isn&apos;t available.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            The address may have changed, or the page may no longer exist.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
          >
            Return to homepage <span aria-hidden="true">→</span>
          </Link>
        </div>
      </SectionContainer>
    </main>
  );
}