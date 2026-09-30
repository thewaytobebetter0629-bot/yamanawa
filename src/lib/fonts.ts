import { Inter, Noto_Sans_TC } from "next/font/google";

// English: Inter stands in for the spec's Neue Montreal / Suisse Intl / SF Pro
// Display list — same geometric, neutral-technical character, freely licensed.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Chinese: Noto Sans TC, as specified.
export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-tc",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});
