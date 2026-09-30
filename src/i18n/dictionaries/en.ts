import type { Dictionary } from "./zh-TW";

/**
 * English. Carries the spec's original English display copy; body copy that
 * only existed in Chinese is written for an English reader rather than
 * translated line by line.
 */
export const en: Dictionary = {
  meta: {
    title: "YAMANAWA — AI Hybrid Brand Visual Studio",
    titleTemplate: "%s — YAMANAWA",
    description:
      "YAMANAWA is an AI Hybrid Brand Visual Studio based in Taiwan, combining professional photography and AI to create product visuals, campaigns and scalable brand content systems.",
    keywords: [
      "YAMANAWA",
      "AI Hybrid Brand Visual Studio",
      "Product Photography",
      "AI Product Imagery",
      "Brand Visual",
      "AI Campaign",
      "Brand Content System",
    ],
    pages: {
      work: { title: "Work", description: "YAMANAWA selected work — case studies coming soon." },
      services: {
        title: "Services",
        description:
          "Product Visual, AI Visual Campaign, and Brand Content System — detail page coming soon.",
      },
      about: { title: "About", description: "Connecting imagination and reality — the YAMANAWA story." },
      pricing: {
        title: "Pricing",
        description:
          "Commercial product imagery, product animation, scene animation and brand websites. Websites from NT$25,000 plus NT$600/month for basic technical maintenance.",
      },
      contact: { title: "Contact", description: "Start a project with YAMANAWA." },
    },
  },
  nav: {
    homeLabel: "YAMANAWA — home",
    links: {
      work: "Work",
      services: "Services",
      about: "About",
      pricing: "Pricing",
      contact: "Contact",
    },
    cta: "Start a Project",
    menu: "Menu",
    close: "Close",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  language: {
    switchLabel: "Switch to Chinese",
  },
  intro: {
    hud: "System Active — Real Capture × AI Creation",
    skip: "Skip Intro",
  },
  hero: {
    caption: "AI Hybrid Brand Visual Studio",
    titleLines: ["Rooted in Reality.", "Created for", "Your Brand."],
    subLines: ["Product photography, AI visuals and motion.", "From product launches to monthly brand content."],
    viewWork: "View Work",
    startProject: "Start a Project",
    scroll: "Scroll",
  },
  realAiBrand: {
    words: ["REAL", "AI", "BRAND"],
    lines: [
      "Photography captures materials and detail.",
      "AI opens up scenes and creative directions.",
      "We bring products, models and motion together",
      "for social, advertising and website content.",
    ],
  },
  limits: {
    caption: "Our Approach",
    titleLines: ["YOUR BRAND NEEDS.", "OUR PRODUCTION PLAN."],
    before: "Understand the Brief",
    after: "Plan the Production",
    limits: ["PRODUCT FEATURES", "BRAND STYLE", "PLATFORMS", "DELIVERABLES", "EXISTING ASSETS", "BUDGET", "TIMELINE"],
    transform: ["PHOTOGRAPHY — MATERIALS AND DETAIL", "AI — MODELS AND SCENES", "CONTENT — STILL AND MOTION"],
    flowCaption: "From Brief to Delivery",
    flow: ["BRIEF", "PLAN", "ASSETS", "CREATE", "DELIVER"],
  },
  work: {
    title: "Selected Work",
    counter: "02 / 08",
    viewAll: "View All Work",
    pending: "Visual Pending",
  },
  servicesSection: {
    caption: "Services",
  },
  buildOnce: {
    titleLines: ["BUILD YOUR ASSETS.", "KEEP", "CREATING."],
    bodyLines: [
      "Keep reusable product assets, scenes and a consistent style.",
      "Add new photography or adapt assets for each release.",
      "Work with us on a single project or a monthly basis.",
    ],
    elements: ["PRODUCT", "MODEL", "SCENE", "STYLE"],
  },
  process: {
    caption: "Five Steps",
    title: "HOW WE WORK",
    steps: [
      { title: "SHARE YOUR BRIEF", description: "Tell us about your brand, usage, budget and timeline." },
      { title: "PLAN THE PRODUCTION", description: "Agree on the visual direction, shoot and deliverables." },
      { title: "PREPARE THE ASSETS", description: "Arrange photography or review your existing materials." },
      { title: "CREATE THE CONTENT", description: "Combine retouching, AI visuals and motion as planned." },
      { title: "DELIVER AND EXTEND", description: "Deliver the agreed formats and discuss future or monthly work." },
    ],
  },
  cta: {
    eyebrow: "Start",
    titleLines: ["YOUR NEXT BRAND VISUAL", "STARTS HERE."],
    subtitle: "Share your brand, intended use and timeline. We will help plan the production.",
    button: "Start a Project",
  },
  footer: {
    tagline: "AI Hybrid Brand Visual Studio",
    location: "Taiwan",
    siteHeading: "Site",
    connectHeading: "Connect",
    slogan: ["CREATE FREELY", "BETWEEN IMAGINATION", "AND REALITY."],
    rights: "All rights reserved.",
    systemLine: "Real Capture × AI Creation × Brand System",
  },
  comingSoon: {
    body: "This page is under construction.",
    back: "Back to Home",
  },
  pages: {
    work: { eyebrow: "Work", title: "SELECTED WORK" },
    services: { eyebrow: "Services", title: "WHAT WE DO" },
    about: { eyebrow: "About", title: "CONNECTING IMAGINATION AND REALITY" },
    pricing: { eyebrow: "Pricing", title: "INVESTMENT" },
  },
  contact: {
    eyebrow: "Contact",
    title: "START A PROJECT",
    body: "Complete the form below to share your brand and goals, and we will shape an initial visual plan and production direction.",
  },
  notFound: {
    eyebrow: "404",
    title: "PAGE NOT FOUND",
    body: "This page may have moved or no longer exists.",
    back: "Back to Home",
  },
};
