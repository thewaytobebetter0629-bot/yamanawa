import type { Config } from "tailwindcss";

// Design-system tokens registered as real Tailwind utilities (bg-black,
// text-silver-bright, font-sans, …) in addition to the CSS custom
// properties in globals.css, which arbitrary-value classes (bg-[var(--x)])
// read from directly. Values are kept in sync by hand — see globals.css.
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "black-secondary": "#070707",
        surface: "#0d0d0d",
        "surface-raised": "#121212",
        "silver-bright": "#e3e3e3",
        silver: "#b9bcc1",
        "silver-dark": "#72767d",
        "text-secondary": "#e5e5e5",
        "text-body": "#b3b3b3",
        "text-muted": "#777777",
        "text-caption": "#646464",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-tc)", "sans-serif"],
        tc: ["var(--font-tc)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
