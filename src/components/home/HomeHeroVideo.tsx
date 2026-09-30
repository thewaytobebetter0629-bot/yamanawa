"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";

type HomeHeroVideoProps = {
  locale: Locale;
  title: { "zh-TW": string; en: string };
  src: string;
};

export default function HomeHeroVideo({ locale, title, src }: HomeHeroVideoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  const [needsSound, setNeedsSound] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const playWhenVisible = (entries: IntersectionObserverEntry[]) => {
      if (!entries[0]?.isIntersecting) {
        video.pause();
        return;
      }

      video.muted = false;
      video.play().catch(() => {
        video.muted = true;
        setMuted(true);
        setNeedsSound(true);
        video.play().catch(() => {
          setNeedsSound(true);
        });
      });

    };
    const observer = new IntersectionObserver(playWhenVisible, { threshold: 0.35 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const enableSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().then(() => {
      setMuted(false);
      setNeedsSound(false);
    }).catch(() => {
      video.muted = true;
      setMuted(true);
      setNeedsSound(true);
    });
  };

  return (
    <section ref={sectionRef} className="section-padding relative border-y border-[var(--border-soft)]">
      <div className="container-yamanawa">
        <div className="mb-10 flex flex-col items-center gap-6 text-center">
          <div>
            <p className="caption-label">{locale === "en" ? "DEMO FILM" : "示範影片"}</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-medium leading-tight tracking-[var(--tracking-tight)] text-white">
              {title[locale]}
            </h2>
          </div>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[var(--text-body)]">
            {locale === "en" ? "A closer look at what we can create." : "看看我們如何把產品與想像延伸成完整畫面。"}
          </p>
        </div>
        <div className="relative overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            src={src}
            loop
            playsInline
            preload="metadata"
            aria-label={locale === "en" ? "YAMANAWA demonstration video" : "YAMANAWA 示範影片"}
            onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
          />
          {needsSound && (
            <button
              type="button"
              onClick={enableSound}
              className="caption-label absolute bottom-4 right-4 border border-white/30 bg-black/60 px-4 py-3 text-white backdrop-blur-sm transition-colors hover:border-white"
            >
              {muted ? "開啟聲音 / SOUND ON" : "播放影片 / PLAY"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
