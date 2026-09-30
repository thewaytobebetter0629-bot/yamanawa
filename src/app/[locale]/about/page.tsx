import type { Metadata } from "next";
import SilverButton from "@/components/SilverButton";
import { pick } from "@/data/business";
import { getLocale, pageMetadata } from "@/i18n/server";
import { localePath } from "@/i18n/config";
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("about", "/about");
}
export default async function AboutPage() {
  const locale = await getLocale();
  const p = (z: string, e: string) => pick(locale, z, e);
  const values = [
    [
      "理解工作，再選工具。",
      "Understand the work before choosing tools.",
      "先看人如何協作、資料如何流動，找出真正值得改善的問題。",
      "Start with how people collaborate and how information moves to find the problem worth solving.",
    ],
    [
      "好看，也要好用。",
      "Make it clear and usable.",
      "延續視覺設計的判斷，把複雜流程整理成清楚、容易使用的介面。",
      "Apply visual design judgment to make complex processes clear and approachable.",
    ],
    [
      "交付之後，仍能成長。",
      "Build for what comes next.",
      "留下文件、清楚的操作方式與維護範圍，依實際使用持續改善。",
      "Provide documentation, operating guidance and a defined maintenance scope, then improve from real use.",
    ],
  ];
  return (
    <>
      <section className="container-yamanawa pb-20 pt-36 md:pt-48">
        <p className="caption-label">ABOUT YAMANAWA</p>
        <h1 className="mt-7 max-w-4xl text-4xl md:text-6xl leading-tight">
          {p(
            "連結想法、工具，與真正的工作。",
            "Connect ideas, tools and real work.",
          )}
        </h1>
        <p className="mt-9 max-w-3xl text-lg leading-loose text-[var(--text-body)]">
          {p(
            "YAMANAWA 是位於台灣的小型工作室，從攝影、品牌影像與網站製作出發，將設計與製作能力延伸到自動化工作流及數位產品。",
            "YAMANAWA is a small studio based in Taiwan. With roots in photography, brand visuals and websites, we are extending our design and production practice into automation and digital products.",
          )}
        </p>
        <p className="mt-5 max-w-3xl leading-loose text-[var(--text-body)]">
          {p(
            "我們關心的是：你每天花時間處理的事情，能不能更順？客戶使用你的服務時，能不能更容易？工具與市場持續改變，我們以實際問題與使用成果決定服務的下一步。",
            "We ask whether everyday work could flow better and whether customers could use your service more easily. As tools and markets evolve, real problems and observed outcomes guide our services.",
          )}
        </p>
      </section>
      <section className="container-yamanawa grid gap-8 pb-24 md:grid-cols-3">
        {values.map((v, i) => (
          <article key={v[0]} className="border-t border-[var(--border)] pt-8">
            <span className="caption-label">0{i + 1}</span>
            <h2 className="mt-5 text-2xl">{p(v[0], v[1])}</h2>
            <p className="mt-5 leading-loose text-[var(--text-body)]">
              {p(v[2], v[3])}
            </p>
          </article>
        ))}
      </section>
      <section className="container-yamanawa pb-28">
        <SilverButton href={localePath(locale, "/contact")}>
          {p("從一個問題開始聊", "Start with a problem")}
        </SilverButton>
      </section>
    </>
  );
}
