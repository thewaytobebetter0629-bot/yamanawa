import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YAMANAWA — Content & Systems",
  description: "品牌內容與數位系統工作室。Visual, Motion, Web, Automation.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
