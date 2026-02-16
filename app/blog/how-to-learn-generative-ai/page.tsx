import type { Metadata } from "next";
import HowToLearnGenerativeAiPage from "@/components/blog/how-to-learn-generative-ai/HowToLearnGenerativeAiPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "社会人のための生成AI学習ロードマップ（0→100日） | AIリブートジャーナル";
const pageDescription =
  "生成AIの学び方を、社会人向けに100日ロードマップで整理。基礎理解から業務活用、応用実践まで、段階的に進める方法を解説します。";
const pageUrl = "https://ai-reboot.io/blog/how-to-learn-generative-ai";

const faqItems = [
  {
    question: "生成AIの学習は未経験からでも始められますか？",
    answer:
      "はい。まずは基本操作と考え方を身につけるところから始めれば、未経験でも段階的に進められます。最初の1か月はツール操作と用語理解に集中するのがおすすめです。",
  },
  {
    question: "社会人は1日どれくらい学習時間を確保すればよいですか？",
    answer:
      "平日は短時間でも継続し、週末にまとめて復習する形が現実的です。毎日30分から60分を目安に、業務に近い課題で手を動かすと定着しやすくなります。",
  },
  {
    question: "ChatGPTとClaudeとGeminiは全部学ぶべきですか？",
    answer:
      "最初から全部を深く学ぶ必要はありません。まずは1つを軸に使い方を固め、比較のために他ツールを試す順序にすると混乱を減らせます。",
  },
  {
    question: "独学と講座受講はどちらが向いていますか？",
    answer:
      "自分で計画を立てて検証できる人は独学でも進めやすいです。一方で、短期間で実務適用まで進めたい場合や、伴走サポートが必要な場合は講座受講が有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 学び方",
    "社会人 生成AI 学習",
    "生成AI ロードマップ",
    "ChatGPT 学習方法",
    "Claude 学習方法",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function HowToLearnGenerativeAiRoute() {
  return (
    <>
      <FAQStructuredData items={[...faqItems]} />
      <HowToLearnGenerativeAiPage faqItems={[...faqItems]} />
    </>
  );
}
