/**
 * Brand intro (logo particle animation) — the contract shared by the
 * pre-paint boot script in <head>, the BrandIntro overlay, and the CSS in
 * globals.css that drives the Hero/nav handoff off `html[data-intro]`:
 *
 *   play → overlay up, page scroll-locked, Hero held blurred
 *   exit → overlay fading out, Hero and nav sharpening in (staggered)
 *   done → overlay removed
 *   skip → not shown this session (already seen, reduced motion, Save-Data)
 */
export type IntroState = "play" | "exit" | "done" | "skip";

export const INTRO_ATTR = "data-intro";
export const INTRO_STORAGE_KEY = "yamanawa:intro-seen";
export const INTRO_SRC = "/logo/yamanawa-intro.mp4";
/** Settled-wordmark frame, shown only if the browser refuses autoplay. */
export const INTRO_POSTER = "/logo/yamanawa-intro-poster.jpg";
/** Seconds into the clip to start leaving: the wordmark resolves ~3.2s and is settled by ~3.7s. */
export const INTRO_EXIT_AT = 3.9;

/** Decides play/skip before first paint. Plain ES5: it runs before any bundle. */
export const introBootScript = `(function(){var d=document.documentElement,s="skip";try{var c=navigator.connection;if(!sessionStorage.getItem(${JSON.stringify(INTRO_STORAGE_KEY)})&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&!(c&&c.saveData))s="play"}catch(e){}d.setAttribute(${JSON.stringify(INTRO_ATTR)},s)})()`;

/**
 * Starts the clip while the HTML is still parsing instead of waiting for
 * hydration. Must be rendered immediately after the <video>.
 */
export const introVideoKickScript = `(function(){try{if(document.documentElement.getAttribute(${JSON.stringify(INTRO_ATTR)})!=="play")return;var v=document.currentScript&&document.currentScript.previousElementSibling;if(!v||v.tagName!=="VIDEO")return;v.muted=true;v.preload="auto";var p=v.play();if(p&&p.catch)p.catch(function(){})}catch(e){}})()`;

/** Same decision as introBootScript, for use after hydration. */
export function readIntroState(): "play" | "skip" {
  try {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    if (sessionStorage.getItem(INTRO_STORAGE_KEY)) return "skip";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "skip";
    if (conn?.saveData) return "skip";
    return "play";
  } catch {
    return "skip";
  }
}

export function setIntroState(state: IntroState) {
  document.documentElement.setAttribute(INTRO_ATTR, state);
}
