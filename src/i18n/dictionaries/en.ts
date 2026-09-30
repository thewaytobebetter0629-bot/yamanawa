import type { Dictionary } from "./zh-TW";

/**
 * English. Carries the spec's original English display copy; body copy that
 * only existed in Chinese is written for an English reader rather than
 * translated line by line.
 */
export const en: Dictionary = {
  meta: {
    title: "YAMANAWA | Automation & Digital Products",
    titleTemplate: "%s — YAMANAWA",
    description:
      "Automation workflows, custom apps and brand websites for brands and small teams. From process discovery and prototypes to launch and ongoing improvement.",
    keywords: [
      "YAMANAWA",
      "workflow automation",
      "custom apps",
      "web apps",
      "brand websites",
    ],
    pages: {
      work: {
        title: "Work",
        description:
          "Photography, visual design and motion portfolio from YAMANAWA.",
      },
      services: {
        title: "Services",
        description:
          "Workflow automation, custom apps, brand websites and AI content.",
      },
      about: {
        title: "About",
        description:
          "A Taiwan-based studio connecting design, automation and digital products.",
      },
      pricing: {
        title: "Pricing",
        description:
          "Discovery, scoped implementation and ongoing care. Costs and acceptance criteria are agreed before work begins.",
      },
      contact: {
        title: "Contact",
        description: "Start a project with YAMANAWA.",
      },
    },
  },
  nav: {
    homeLabel: "YAMANAWA — home",
    links: {
      work: "Work",
      services: "Services",
      about: "About",
      pricing: "Engagement",
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
    hud: "WORKFLOWS × APPS × DESIGN",
    skip: "Skip Intro",
  },
  hero: {
    caption: "AI Hybrid Brand Visual Studio",
    titleLines: ["Rooted in Reality.", "Created for", "Your Brand."],
    subLines: [
      "Product photography, AI visuals and motion.",
      "From product launches to monthly brand content.",
    ],
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
    limits: [
      "PRODUCT FEATURES",
      "BRAND STYLE",
      "PLATFORMS",
      "DELIVERABLES",
      "EXISTING ASSETS",
      "BUDGET",
      "TIMELINE",
    ],
    transform: [
      "PHOTOGRAPHY — MATERIALS AND DETAIL",
      "AI — MODELS AND SCENES",
      "CONTENT — STILL AND MOTION",
    ],
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
      {
        title: "SHARE YOUR BRIEF",
        description: "Tell us about your brand, usage, budget and timeline.",
      },
      {
        title: "PLAN THE PRODUCTION",
        description: "Agree on the visual direction, shoot and deliverables.",
      },
      {
        title: "PREPARE THE ASSETS",
        description: "Arrange photography or review your existing materials.",
      },
      {
        title: "CREATE THE CONTENT",
        description: "Combine retouching, AI visuals and motion as planned.",
      },
      {
        title: "DELIVER AND EXTEND",
        description:
          "Deliver the agreed formats and discuss future or monthly work.",
      },
    ],
  },
  cta: {
    eyebrow: "Start",
    titleLines: ["What should work", "better first?"],
    subtitle: "Tell us your goal and where work gets stuck.",
    button: "Start a Project",
  },
  footer: {
    tagline: "Automation & digital products",
    location: "Taiwan",
    siteHeading: "Site",
    connectHeading: "Connect",
    slogan: ["Connect ideas.", "Make work flow."],
    rights: "All rights reserved.",
    systemLine: "WORKFLOWS × APPS × DESIGN",
  },
  comingSoon: {
    body: "This page is under construction.",
    back: "Back to Home",
  },
  pages: {
    work: { eyebrow: "Work", title: "SELECTED WORK" },
    services: { eyebrow: "Services", title: "WHAT WE DO" },
    about: { eyebrow: "About", title: "CONNECTING IMAGINATION AND REALITY" },
    pricing: { eyebrow: "Pricing", title: "How we work together" },
  },
  contact: {
    eyebrow: "Contact",
    title: "What should work better?",
    body: "Tell us about your process, tools or product idea. We will clarify the scope together. You can also email yamanawamugu@gmail.com.",
  },
  notFound: {
    eyebrow: "404",
    title: "PAGE NOT FOUND",
    body: "This page may have moved or no longer exists.",
    back: "Back to Home",
  },
};
