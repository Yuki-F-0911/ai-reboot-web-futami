import type { Metadata } from "next";
import FriendlyLP from "@/components/lp/friendly/FriendlyLP";

export const metadata: Metadata = {
  title: "あなたに合うAIツール、無料で診断｜AIリブートアカデミー",
  description:
    "職種・作業・レベルに合わせてあなた専用のAIツールTOP3を無料で診断。LINEに追加して4問答えるだけ。診断結果と攻略本PDFがすぐ届きます。",
  openGraph: {
    title: "あなたに合うAIツール、無料で診断｜AIリブートアカデミー",
    description:
      "職種・作業・レベルに合わせてあなた専用のAIツールTOP3を無料で診断。LINEに追加して4問答えるだけ。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "あなたに合うAIツール、無料で診断",
    description:
      "職種・作業・レベルに合わせてあなた専用のAIツールTOP3を無料で診断。LINEに追加して4問答えるだけ。",
  },
};

export default function FriendlyLPPage() {
  return <FriendlyLP />;
}
