"use client";

import { Fragment, useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SilverButton from "@/components/SilverButton";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh-TW";

/** Stagger for the brand-intro handoff; see .intro-reveal in globals.css. */
const revealDelay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const withBreaks = (lines: string[]) =>
  lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

/**
 * Hero — the site's most identity-defining screen. Absolute black, an
 * interactive particle field supplied by SpaceBackground, and a scroll-linked
 * exit where the type blurs out, reading as "entering another space".
 *
 * On a first visit the BrandIntro overlay sits on top; as it leaves, the
 * scene fades up and the type sharpens in from blur (CSS keyed off
 * html[data-intro]). Opacity never starts at 0, so LCP isn't held back.
 */
export default function Hero({ locale, copy }: { locale: Locale; copy: Dictionary["hero"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 0.8], [0, 10]);
  const textBlurFilter = useTransform(textBlur, (v) => `blur(${v}px)`);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden"
    >
      {/* scrim guaranteeing the type sits on near-pure black regardless of
          what drifts beneath it */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[70%]"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0) 100%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: textOpacity, filter: textBlurFilter }}
        className="container-yamanawa relative z-10 flex flex-col items-center text-center"
      >
        <span
          style={revealDelay(150)}
          className="caption-label intro-reveal mb-6"
        >
          {copy.caption}
        </span>

        <h1
          style={revealDelay(260)}
          className="intro-reveal text-[length:var(--fs-hero)] font-medium leading-[0.98] tracking-[var(--tracking-tight)] text-white"
        >
          {withBreaks(copy.titleLines)}
        </h1>

        <p
          style={revealDelay(400)}
          className="intro-reveal mt-6 max-w-xl text-[length:var(--fs-body)] leading-relaxed text-[var(--text-body)]"
        >
          {withBreaks(copy.subLines)}
        </p>

        <div
          style={revealDelay(540)}
          className="intro-reveal mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <SilverButton href={localePath(locale, "/work")} variant="ghost">
            {copy.viewWork}
          </SilverButton>
          <SilverButton href={localePath(locale, "/contact")}>
            {copy.startProject}
          </SilverButton>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--text-caption)]">
        <span
          style={revealDelay(900)}
          className="caption-label intro-reveal inline-block"
        >
          {copy.scroll}
        </span>
      </div>
    </section>
  );
}
