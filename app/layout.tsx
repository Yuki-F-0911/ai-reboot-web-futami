import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import MainWrapper from "@/components/layout/MainWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://ai-reboot.io'),
  title: "AI REBOOT - AIリブート | ウィルフォワード",
  description: "AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する。経済産業省リスキリング支援事業採択プログラム。",
  keywords: "AI, リスキリング, 生成AI, ChatGPT, AI教育, AIコンサルティング, ウィルフォワード",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "AI REBOOT - AIリブート",
    description: "AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI REBOOT - AIリブート",
    description: "AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する",
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
        <GoogleAnalytics />
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
