import type { Metadata } from "next";
import "../globals.css";
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';

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

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`antialiased ${notoSansJP.variable} ${notoSerifJP.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}