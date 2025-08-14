import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Noto_Sans_JP, Noto_Serif_JP, JetBrains_Mono, Anton } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
  weight: ['400', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
  weight: '400',
});

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
    images: [
      {
        url: "/images/ogp/default-ogp.jpg",
        width: 1200,
        height: 630,
        alt: "AI REBOOT - あなたの物語を、AIは待っている",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI REBOOT - AIリブート",
    description: "AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する",
    images: ["/images/ogp/default-ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`antialiased ${notoSansJP.variable} ${notoSerifJP.variable} ${jetBrainsMono.variable} ${anton.variable}`} suppressHydrationWarning>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen pt-16 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}