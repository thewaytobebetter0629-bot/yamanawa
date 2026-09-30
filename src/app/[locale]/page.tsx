import type { Metadata } from "next";
import HomeHeroVideo from "@/components/home/HomeHeroVideo";
import Reveal from "@/components/Reveal";
import { alternatesFor, getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return { alternates: alternatesFor(await getLocale(), "/") };
}

export default async function Home() {
  const locale = await getLocale();
  const isEnglish = locale === "en";
  const heroTitle = isEnglish ? ["BUILD IMAGINE", "CREATE REAL"] : ["構建想像", "創作真實"];
  const whyTitle = isEnglish ? ["NOT EVERY FRAME", "NEEDS A STAGE AND MODELS"] : ["不是每個畫面", "都需要場地和模特"];
  const servicesTitle = isEnglish ? ["WE CAN HELP", "BUILD WHAT YOU NEED"] : ["我們可以幫你完成"];
  const messageTitle = isEnglish ? ["BUILD IMAGINE", "CREATE REAL"] : ["構建想像", "創作真實"];

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pb-24 pt-24 sm:pt-28">
        <div className="container-yamanawa relative z-10 flex flex-col items-center text-center">
          <Reveal><p className="caption-label text-[var(--text-caption)]">YAMANAWA</p></Reveal>
          <Reveal delay={0.12}><p className="mt-5 text-[0.7rem] tracking-[0.22em] text-[var(--silver-dark)] uppercase">{isEnglish ? "COMMERCIAL VISUAL STUDIO" : "商業視覺工作室"}</p></Reveal>
          <Reveal delay={0.2}>
            <h1 className="mt-8 max-w-[540px] text-[clamp(2.1rem,3.4vw,3rem)] font-medium leading-[1.04] tracking-[-0.06em] text-white">
              {heroTitle.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-7 max-w-[520px] text-[0.9rem] leading-relaxed text-[var(--text-body)] sm:text-[1rem]">
              {isEnglish ? "We combine commercial photography with AI to turn product imagery into motion, scenes, and digital brand assets that can actually be used." : "我們結合專業攝影與 AI，從產品影像到動畫與品牌網站，幫品牌延伸更多能真正使用的視覺內容。"}
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.64rem] tracking-[0.18em] text-[var(--text-caption)] uppercase"><Reveal delay={0.48}><span>{isEnglish ? "Scroll" : "往下瀏覽"}</span></Reveal></div>
      </section>

      <HomeHeroVideo locale={locale} title={{ "zh-TW": "Nike 形象動畫 - again", en: "Nike Brand Film - again" }} src="/video/yamanawa-home-demo.mp4" />
      <HomeHeroVideo locale={locale} title={{ "zh-TW": "Garmin 產品動畫", en: "Garmin Product Animation" }} src="/video/garmin-product-animation.mp4" />

      <section className="section-padding relative">
        <div className="container-yamanawa flex flex-col items-center text-center">
          <Reveal><p className="caption-label">WHY YAMANAWA</p></Reveal>
          <Reveal delay={0.12}><h2 className="mt-7 max-w-[700px] text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">{whyTitle.map((line) => <span key={line} className="block">{line}</span>)}</h2></Reveal>
          <Reveal delay={0.24}><p className="mt-8 max-w-[700px] text-[0.92rem] leading-relaxed text-[var(--text-body)] sm:text-[1rem]">{isEnglish ? "A commercial image set often involves much more than a camera. Locations, models, props, sets, and production schedules all add complexity. YAMANAWA starts by photographing the product accurately, then uses AI to extend the scenes, people, and motion that matter most. The goal is to keep production resources focused on what really matters and turn one product into more usable visual content." : "一組商業影像，常常不只是一台相機的成本。場地、模特、道具、搭景和檔期，都會讓一次製作變得更複雜。YAMANAWA 先把產品本身拍準，再透過 AI 延伸需要的場景、人物與動態。把製作資源留在真正重要的地方，也讓一個產品能延伸出更多內容。"}</p></Reveal>
          <div className="mt-16 grid w-full max-w-[1100px] gap-8 text-center md:grid-cols-3">
            {[
              { num: "01", title: isEnglish ? "Reduce production" : "減少製作", text: isEnglish ? "Lower dependence on locations, models, props, and staging." : "降低對場地、模特與搭景的依賴。" },
              { num: "02", title: isEnglish ? "Keep it real" : "保留真實", text: isEnglish ? "Product proportions, materials, and details remain grounded in the real capture." : "產品的比例、材質與細節先透過實拍留下來。" },
              { num: "03", title: isEnglish ? "Extend continuously" : "持續延伸", text: isEnglish ? "One product asset can evolve into new scenes, motion, and campaign content over time." : "同一套產品素材，可以持續發展新的畫面與內容。" },
            ].map((item, index) => <Reveal key={item.num} delay={0.1 * index}><div className="border-t border-[var(--border)] pt-6 text-center"><div className="text-[0.68rem] tracking-[0.2em] text-[var(--silver-dark)]">{item.num}</div><h3 className="mt-5 text-[1.08rem] font-medium tracking-[-0.04em] text-white">{item.title}</h3><p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--text-body)]">{item.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-yamanawa flex flex-col items-center text-center">
          <Reveal><p className="caption-label">SERVICES</p></Reveal>
          <Reveal delay={0.12}><h2 className="mt-7 text-[clamp(1.9rem,3vw,2.8rem)] font-medium leading-[1.06] tracking-[-0.055em] text-white">{servicesTitle.map((line) => <span key={line} className="block">{line}</span>)}</h2></Reveal>
          <div className="mt-16 grid w-full max-w-[1100px] gap-6 text-center md:grid-cols-2">
            {[
              { num: "01", title: isEnglish ? "Commercial product imagery" : "產品商業影像", text: isEnglish ? "Product photography and AI-driven commercial scenes." : "產品實拍與 AI 商業情境。" },
              { num: "02", title: isEnglish ? "Product motion" : "產品動畫", text: isEnglish ? "Turn product form and detail into moving visuals." : "讓產品的外型與細節進入動態畫面。" },
              { num: "03", title: isEnglish ? "Product scenario motion" : "產品情境動畫", text: isEnglish ? "Blend product, people, and setting into a complete brand scene." : "結合產品、人物與場景，製作更完整的品牌情境。" },
              { num: "04", title: isEnglish ? "Brand website" : "品牌網站", text: isEnglish ? "Structure and visual direction for a refined digital brand entry." : "從網站架構到視覺呈現，整理品牌完整的數位入口。" },
            ].map((service, index) => <Reveal key={service.num} delay={0.08 * index}><div className="border-t border-[var(--border)] py-7 md:py-8"><div className="text-[0.68rem] tracking-[0.2em] text-[var(--silver-dark)]">{service.num}</div><h3 className="mt-5 text-[clamp(1.2rem,2vw,1.7rem)] font-medium tracking-[-0.04em] text-white">{service.title}</h3><p className="mx-auto mt-3 max-w-[420px] text-[0.88rem] leading-relaxed text-[var(--text-body)]">{service.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-padding relative pb-28">
        <div className="container-yamanawa flex flex-col items-center text-center">
          <Reveal><p className="caption-label text-[var(--text-caption)]">YAMANAWA</p></Reveal>
          <Reveal delay={0.12}><h2 className="mt-7 text-[clamp(2rem,3vw,2.9rem)] font-medium leading-[1.04] tracking-[-0.055em] text-white">{messageTitle.map((line) => <span key={line} className="block">{line}</span>)}</h2></Reveal>
          <Reveal delay={0.24}><p className="mt-7 text-[0.68rem] tracking-[0.22em] text-[var(--silver-dark)] uppercase">PHOTOGRAPHY / AI / MOTION / WEB</p></Reveal>
        </div>
      </section>
    </>
  );
}
