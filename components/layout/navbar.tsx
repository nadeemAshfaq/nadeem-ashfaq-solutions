"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems, siteConfig } from "@/data/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-emerald-900/30 bg-slate-950/90 shadow-xl shadow-black/40 backdrop-blur-md"
          : "border-b border-slate-800/40 bg-slate-950/75 backdrop-blur-sm"
      }`}
    >
      {/* Microsoft 4-Color Accent Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[#f25022] via-[#ffb900] via-[#7fba00] via-[#00a4ef] to-[#7719aa]" />

      <nav className="flex w-full items-center justify-between px-6 py-3.5 sm:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-sm font-black text-white shadow-md shadow-emerald-500/25 transition-transform duration-200 group-hover:scale-105">
            N
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold text-white transition-colors group-hover:text-emerald-300">
              {siteConfig.name}
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-emerald-400 sm:block">
              M365 · Google Workspace · Full-Stack · AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10"
                      : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-emerald-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-md shadow-emerald-950/40 transition-all duration-200 hover:scale-105 hover:from-emerald-500 hover:to-emerald-400 md:block"
          >
            Start a Project
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 text-white transition-colors hover:border-slate-700 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden border-t border-slate-800/80 bg-slate-950/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-900 hover:text-emerald-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-2.5 text-center text-sm font-bold text-white shadow-md shadow-emerald-950/40"
            >
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
