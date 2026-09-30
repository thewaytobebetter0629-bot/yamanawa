"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";
import { NAV_ROUTES } from "@/lib/site";

export default function Navigation({
  locale,
  nav,
  switchLabel,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  switchLabel: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = NAV_ROUTES.map((route) => ({
    label: nav.links[route],
    href: localePath(locale, `/${route}`),
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="intro-reveal-nav fixed inset-x-0 top-0 z-50 transition-all duration-[var(--duration-base)] ease-[var(--ease-precise)]"
        style={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
        }}
      >
        <nav className="container-yamanawa flex h-20 items-center justify-between">
          <Link
            href={localePath(locale, "/")}
            aria-label={nav.homeLabel}
            className="transition-opacity duration-[var(--duration-fast)] hover:opacity-70"
          >
            <Logo width={168} preload />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.02em] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <LanguageSwitcher locale={locale} switchLabel={switchLabel} />
            <Link
              href={localePath(locale, "/contact")}
              className="border border-[var(--silver-dark)] px-5 py-2.5 text-xs tracking-[0.08em] uppercase text-white transition-colors duration-[var(--duration-fast)] hover:border-[var(--silver-bright)] hover:bg-[var(--silver-bright)] hover:text-black"
            >
              {nav.cta}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-xs tracking-[0.12em] uppercase text-white md:hidden"
            aria-label={nav.openMenu}
          >
            {nav.menu}
          </button>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        locale={locale}
        nav={nav}
        switchLabel={switchLabel}
      />
    </>
  );
}
