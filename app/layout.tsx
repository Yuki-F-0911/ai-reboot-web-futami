import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "AI REBOOT - AIリブート | ウィルフォワード",
  description: "AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する。経済産業省リスキリング支援事業採択プログラム。",
  keywords: "AI, リスキリング, 生成AI, ChatGPT, AI教育, AIコンサルティング, ウィルフォワード",
  openGraph: {
    title: "AI REBOOT - AIリブート",
    description: "AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen pt-16 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}