import type { Metadata } from "next";
import DarkTechLP from "@/components/lp/dark/DarkTechLP";

export const metadata: Metadata = {
  title: "あなたに合うAIツール、無料で診断｜AIリブートアカデミー",
  description:
    "職種・作業・レベルに合わせてあなた専用のAIツールTOP3を無料で診断。LINEに追加して4問答えるだけ。診断結果と攻略本PDFがすぐ届きます。",
  openGraph: {
    title: "あなたに合うAIツール、無料で診断｜AIリブートアカデミー",
    description:
      "職種・作業・レベルに合わせてあなた専用のAIツールTOP3を無料で診断。LINEに追加して4問答えるだけ。",
    type: "website",
    images: [
      {
        url: "/images/lp/line-diagnostic/hero-popart.png",
        width: 1200,
        height: 630,
        alt: "AIツール無料診断｜AIリブートアカデミー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あなたに合うAIツール、無料で診断",
    description:
      "職種・作業・レベルに合わせてあなた専用のAIツールTOP3を無料で診断。LINEに追加して4問答えるだけ。",
  },
};

export default function DarkTechLPPage() {
  return <DarkTechLP />;
}
