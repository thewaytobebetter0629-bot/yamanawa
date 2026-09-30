import Link from "next/link";
import type { ReactNode } from "react";

type SilverButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  arrow?: boolean;
  className?: string;
};

/**
 * The site's one CTA shape: square corners (0–4px), 1px silver border,
 * black fill that inverts to silver on hover with a light sweep. No pills,
 * no drop shadows. Used for every "START A PROJECT" / "VIEW WORK" style CTA.
 */
export default function SilverButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: SilverButtonProps) {
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-[var(--radius-md)] px-7 py-4 text-sm tracking-[0.08em] uppercase transition-colors duration-[var(--duration-fast)] ease-[var(--ease-precise)]";

  const variantClass =
    variant === "primary"
      ? "border border-[var(--silver-dark)] bg-black text-white hover:text-black"
      : "border border-[var(--border)] bg-transparent text-[var(--text-secondary)] hover:text-black hover:border-[var(--silver-bright)]";

  return (
    <Link href={href} className={`${base} ${variantClass} ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[var(--silver-bright)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-precise)] group-hover:translate-x-0"
      />
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="relative z-10 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-precise)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      )}
    </Link>
  );
}
