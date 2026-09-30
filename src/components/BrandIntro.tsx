"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import InlineScript from "./InlineScript";
import {
  INTRO_ATTR,
  INTRO_EXIT_AT,
  INTRO_POSTER,
  INTRO_SRC,
  INTRO_STORAGE_KEY,
  introVideoKickScript,
  readIntroState,
  setIntroState,
} from "@/lib/intro";

const EXIT_MS = 1100; // keep in sync with the .brand-intro transition in globals.css
const EXIT_FAST_MS = 550; // .brand-intro[data-fast]
const REVEAL_SETTLE_MS = 1900; // longest Hero reveal: 540ms stagger + 1200ms transition
const START_TIMEOUT_MS = 2000; // not playing by then (slow network) → don't make anyone wait
const MAX_MS = 7500; // hard ceiling, e.g. playback stalls mid-clip
const POSTER_HOLD_MS = 900; // autoplay refused (e.g. iOS Low Power Mode) → brief static wordmark

/**
 * Brand intro — the logo particle animation as a first-load overlay that
 * hands off into the Hero. Plays once per session; a click, key, wheel or
 * touch skips it. Visibility, the scroll lock and the Hero's blur-in are all
 * CSS keyed off html[data-intro], which introBootScript sets before first
 * paint, so returning visitors never see it flash and nothing waits on
 * hydration.
 */
export default function BrandIntro({ hud, skipLabel }: { hud: string; skipLabel: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const exiting = useRef(false);
  const detach = useRef<() => void>(() => {});
  const [gone, setGone] = useState(false);

  const exit = useCallback((fast: boolean) => {
    if (exiting.current) return;
    exiting.current = true;
    detach.current();
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // storage unavailable: the intro simply plays again next load
    }
    // before the state flip, so this transition already uses the fast timing
    if (fast) rootRef.current?.setAttribute("data-fast", "");
    setIntroState("exit");
    const leave = fast ? EXIT_FAST_MS : EXIT_MS;
    window.setTimeout(() => setGone(true), leave + 50);
    window.setTimeout(() => setIntroState("done"), Math.max(leave, REVEAL_SETTLE_MS));
  }, []);

  // Re-apply the boot script's decision: React's dev Strict Mode remount
  // resets <html> attributes it doesn't own. A no-op in production. When
  // skipping there's nothing to unmount: CSS hides the overlay and the
  // preload="none" video never fetches.
  useLayoutEffect(() => {
    setIntroState(readIntroState());
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;
    if (document.documentElement.getAttribute(INTRO_ATTR) !== "play") return;

    const timers: number[] = [];
    let raf = 0;
    let started = false;
    let fellBack = false;

    const tick = () => {
      const t = video.currentTime;
      root.style.setProperty("--intro-progress", String(Math.min(1, t / INTRO_EXIT_AT)));
      if (t >= INTRO_EXIT_AT || video.ended) {
        exit(false);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    const onPlaying = () => {
      if (started) return;
      started = true;
      raf = requestAnimationFrame(tick);
    };
    const onRefused = () => {
      if (started || fellBack) return;
      fellBack = true;
      video.poster = INTRO_POSTER;
      timers.push(window.setTimeout(() => exit(true), POSTER_HOLD_MS));
    };
    const onError = () => exit(true);
    const skip = () => exit(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.metaKey || e.ctrlKey || e.altKey) return;
      // don't let the skipping keypress also jump the page it reveals
      if ([" ", "ArrowDown", "PageDown", "End"].includes(e.key)) e.preventDefault();
      skip();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("error", onError);
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });

    detach.current = () => {
      cancelAnimationFrame(raf);
      timers.forEach((id) => clearTimeout(id));
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("error", onError);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };

    video.muted = true;
    video.preload = "auto";
    // the inline kick script may already have it running before hydration
    if (!video.paused && video.currentTime > 0) onPlaying();
    video.play().then(onPlaying, onRefused);
    timers.push(
      window.setTimeout(() => {
        if (!started && !fellBack) exit(true);
      }, START_TIMEOUT_MS),
    );
    timers.push(window.setTimeout(() => exit(true), MAX_MS));

    return () => detach.current();
  }, [exit]);

  if (gone) return null;

  return (
    <div ref={rootRef} className="brand-intro" onPointerDown={() => exit(true)}>
      <video
        ref={videoRef}
        className="brand-intro__video"
        src={INTRO_SRC}
        width={720}
        height={720}
        preload="none"
        muted
        playsInline
        disablePictureInPicture
        aria-hidden="true"
        tabIndex={-1}
        suppressHydrationWarning
      />
      <InlineScript html={introVideoKickScript} />
      <span className="brand-intro__hud caption-label" aria-hidden="true">
        {hud}
      </span>
      <button
        type="button"
        className="brand-intro__skip caption-label"
        onClick={() => exit(true)}
      >
        {skipLabel}
      </button>
      <span className="brand-intro__progress" aria-hidden="true" />
    </div>
  );
}
