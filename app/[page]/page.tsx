import { notFound } from "next/navigation";

const pages = {
  work: { label: "WORK", title: "內容要被看見，\n也要走向下一步。", body: "我們把產品故事、動態節奏與數位體驗放進同一個品牌視野。新的案例正在持續整理中；如果你正在規劃下一次發表、改版或內容升級，現在就可以開始對話。", note: "VISUAL / MOTION / WEB" },
  about: { label: "ABOUT YAMANAWA", title: "從內容出發，\n把品牌往前推。", body: "YAMANAWA 是一間品牌內容與數位系統工作室。我們相信一個好成果，不只讓人覺得好看，也應該讓溝通、使用與下一次創作變得更容易。", note: "CONTENT & SYSTEMS" },
  services: { label: "SERVICES / PRICING", title: "依你的目標，\n組合真正需要的能力。", body: "Visual、Motion、Web 與 Automation 可以獨立合作，也能成為一條完整的品牌路徑。每一項合作會依內容量、製作方式、交付範圍與上線需求報價；先理解問題，再給清楚的製作建議。", note: "VISUAL · MOTION · WEB · AUTOMATION" },
  automation: { label: "AUTOMATION", title: "把重複工作，\n交給更好的流程。", body: "我們正在開發給品牌與創意團隊使用的自動化服務，聚焦內容整理、素材流轉、表單回應與日常工作串接。技術開發中，歡迎帶著你的真實情境來聊。", note: "● TECHNOLOGY IN DEVELOPMENT" },
  contact: { label: "CONTACT", title: "讓下一次製作，\n從一段對話開始。", body: "告訴我們你的品牌、目標、預計時程與目前卡住的地方。我們會先一起釐清最適合的內容或系統方向。", note: "hello@yamanawa.studio" },
} as const;

export function generateStaticParams() { return Object.keys(pages).map((page) => ({ page })); }

export default async function DetailPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const content = pages[page as keyof typeof pages];
  if (!content) notFound();
  return <main className="detail"><header className="nav wrap"><a className="logo" href="/">YAMANAWA<span>®</span></a><a className="nav-cta" href="/">回到首頁 ↗</a></header><section className="detail-hero wrap"><p className="eyebrow">{content.label}</p><h1>{content.title.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h1><p>{content.body}</p><div className="detail-note">{content.note}</div>{page === "contact" ? <a className="button lime" href="mailto:hello@yamanawa.studio">寄信給我們 ↗</a> : <a className="button lime" href="/contact">開始對話 ↗</a>}</section><footer className="wrap"><span>© {new Date().getFullYear()} YAMANAWA</span><span>CONTENT &amp; SYSTEMS</span></footer></main>;
}
