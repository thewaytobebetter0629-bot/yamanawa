const services = [
  ["01", "VISUAL", "產品影像、品牌視覺與 AI 輔助製作。把想像變成可被使用、可被記住的畫面。"],
  ["02", "MOTION", "從商品節奏到品牌敘事，製作能停住目光、也能說清楚價值的動態內容。"],
  ["03", "WEB", "品牌網站、作品展示與數位落地頁。讓內容有一個清楚、好用的目的地。"],
  ["04", "AUTOMATION", "串接內容、表單與日常流程，減少重複工作。技術開發中，歡迎先聊你的情境。"],
] as const;

const projects = [
  ["PRODUCT STORIES", "產品不只被看見，也被理解", "Visual / Motion"],
  ["DIGITAL PRESENCE", "為品牌建立更清楚的線上入口", "Web"],
  ["WORK BETTER", "讓創意工作不被重複流程卡住", "Automation"],
] as const;

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return <main>
    <header className="nav wrap">
      <a className="logo" href="#top" aria-label="Yamanawa 首頁">YAMANAWA<span>®</span></a>
      <nav aria-label="主要選單"><a href="/services">服務</a><a href="/work">作品方向</a><a href="/about">關於</a><a href="/contact">聯絡</a></nav>
      <a className="nav-cta" href="/contact">開始合作 <Arrow /></a>
    </header>

    <section className="hero wrap" id="top">
      <p className="eyebrow">YAMANAWA V2 — CONTENT &amp; SYSTEMS</p>
      <h1>製作內容，<br />也改善工作方式。</h1>
      <p className="lead">YAMANAWA 是品牌內容與數位系統工作室。我們用視覺、動態、網站與自動化，讓品牌更容易被看見，也更容易往前走。</p>
      <div className="hero-actions"><a className="button lime" href="#services">探索服務 <Arrow /></a><a className="text-link" href="#work">查看作品方向 <Arrow /></a></div>
      <div className="hero-field" aria-hidden="true"><i /><b /><em /><strong /></div>
    </section>

    <section className="intro wrap" id="about">
      <p className="eyebrow">WHY YAMANAWA</p>
      <h2>不只是做一個好看的成品。</h2>
      <p>我們從品牌真正要解決的事情開始：一個畫面要帶來什麼感受？一支影片要說清楚什麼？一個網站要讓誰更容易行動？把內容和系統放在一起思考，成果才不只停在交件那天。</p>
    </section>

    <section className="services" id="services"><div className="wrap">
      <div className="section-heading"><p className="eyebrow">WHAT WE DO</p><h2>四種能力，一條清楚的合作路徑。</h2></div>
      <div className="service-grid">{services.map(([number, title, text]) => <article className="service-card" key={title}><p className="number">{number}</p><h3>{title}</h3><p>{text}</p><a href="#contact">了解更多 <Arrow /></a>{title === "AUTOMATION" && <small>TECHNOLOGY IN DEVELOPMENT</small>}</article>)}</div>
    </div></section>

    <section className="feature wrap"><p className="eyebrow">VISUAL + MOTION</p><h2>從一張畫面，延伸成一段能被記住的品牌感受。</h2><p>產品、人物、場景與節奏可以一起被設計。需要真實拍攝的地方就好好拍；需要 AI 提升效率與可能性的地方，就讓它成為更自由的創作工具。</p><a className="text-link" href="#contact">聊聊你的內容需求 <Arrow /></a></section>

    <section className="work" id="work"><div className="wrap"><div className="section-heading"><p className="eyebrow">SELECTED DIRECTIONS</p><h2>正在累積的品牌工作。</h2></div><div className="project-grid">{projects.map(([label, title, type], index) => <article className={`project p${index + 1}`} key={label}><div className="project-art" aria-hidden="true"><span /></div><p>{label}</p><h3>{title}</h3><small>{type}</small></article>)}</div></div></section>

    <section className="automation wrap" id="automation"><div><p className="eyebrow">AUTOMATION</p><h2>把重複的事，交給更好的流程。</h2></div><div><p>我們正在開發適合品牌工作現場的自動化服務：內容整理、素材流轉、表單回應與團隊日常。現在仍在技術開發階段，但你的工作卡點會決定它接下來該長成什麼樣子。</p><p className="developing">● TECHNOLOGY IN DEVELOPMENT</p><a className="button dark" href="#contact">告訴我們你的情境 <Arrow /></a></div></section>

    <section className="process wrap"><p className="eyebrow">HOW WE WORK</p><h2>從問題開始，留下真的能繼續使用的成果。</h2><div className="steps"><p><b>01</b> 對焦目標</p><p><b>02</b> 定義內容與路徑</p><p><b>03</b> 製作與迭代</p><p><b>04</b> 上線、交接、持續優化</p></div></section>

    <section className="contact" id="contact"><div className="wrap"><p className="eyebrow">START A CONVERSATION</p><h2>有一件想做好、<br />也想做得更順的事嗎？</h2><p>告訴我們你的品牌、目標與目前卡住的地方。我們會一起找出最合適的下一步。</p><a className="button lime" href="mailto:hello@yamanawa.studio">hello@yamanawa.studio <Arrow /></a></div></section>
    <footer className="wrap"><span>© {new Date().getFullYear()} YAMANAWA</span><span>CONTENT &amp; SYSTEMS</span><a href="#top">回到頂部 ↑</a></footer>
  </main>;
}
