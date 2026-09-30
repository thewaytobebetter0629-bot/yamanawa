"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

type Props = {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  locale: Locale;
  nav: Dictionary["nav"];
  switchLabel: string;
};

export default function MobileMenu({ open, onClose, links, locale, nav, switchLabel }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-black md:hidden"
        >
          <div className="container-yamanawa flex h-20 items-center justify-between">
            <Logo width={148} />
            <button
              type="button"
              onClick={onClose}
              className="text-xs tracking-[0.12em] uppercase text-white"
              aria-label={nav.closeMenu}
            >
              {nav.close}
            </button>
          </div>

          <nav className="container-yamanawa flex flex-1 flex-col justify-center gap-2">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-[var(--border-soft)] py-5 text-3xl tracking-[-0.02em] text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="container-yamanawa pb-6">
            <LanguageSwitcher locale={locale} switchLabel={switchLabel} className="text-sm" />
          </div>

          <div className="container-yamanawa pb-10">
            <Link
              href={localePath(locale, "/contact")}
              onClick={onClose}
              className="block w-full border border-[var(--silver-dark)] py-4 text-center text-xs tracking-[0.08em] uppercase text-white"
            >
              {nav.cta}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
