import type { Metadata } from "next";
import AiEnglishLearningGuidePage from "@/components/academyLanding/blog/ai-english-learning-guide/AiEnglishLearningGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI英語学習ガイド2026｜ChatGPT英会話・アプリ比較・継続設計 | AIリブート";
const pageDescription =
  "AI英語学習を2026年版で整理。ChatGPT/Gemini英会話の実践プロンプト、Duolingo Max・ELSA Speak・Speakの価格と機能比較、ビジネス英語への落とし込み、学習継続の設計まで社会人向けに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-english-learning-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T16:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "AI英語学習は独学より効果がありますか？",
    answer:
      "会話量を増やし、発音や語彙のフィードバックを即時に受けられる点で効果が出やすいです。特に社会人は、短時間でも毎日アウトプットを回せる仕組み化が重要です。",
  },
  {
    question: "ChatGPTとGeminiは英会話練習でどう使い分けるべきですか？",
    answer:
      "会話ロールプレイの反復はChatGPT、Googleサービス連携前提の実務文脈はGeminiを使うと整理しやすくなります。用途を固定し、同じ評価基準で比較するのが実務的です。",
  },
  {
    question: "Duolingo Maxは2026年時点でどの国で使えますか？",
    answer:
      "公式情報に差分があります。公式ヘルプではUS/UK/IE/CA/AU/NZ、公式ブログでは188か国の記載があります。最新はアプリ内の提供状況で確認してください（確認日: 2026-02-20）。",
  },
  {
    question: "ELSA SpeakとSpeakはどちらが発話練習に向いていますか？",
    answer:
      "発音の可視化と弱点分析を重視するならELSA、会話ターン数を増やしたいならSpeakが向きます。目的を分けて併用すると継続しやすくなります。",
  },
  {
    question: "ビジネス英語を最短で伸ばすには、何から始めるべきですか？",
    answer:
      "会議・メール・商談など業務シーンを1つに絞り、AIで毎日10分のロールプレイを回すのが効果的です。週1回の録音レビューで改善点を可視化すると定着しやすくなります。",
  },
  {
    question: "学習を途中で止めないために、AIをどう設計すればよいですか？",
    answer:
      "30日単位の学習計画を作り、日次実行と週次レビューを固定すると継続率が上がります。進捗記録をAIに要約させ、翌週の計画を自動更新する運用が有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 英語学習 2026",
    "ChatGPT 英会話",
    "Duolingo Max 料金",
    "ELSA Speak 比較",
    "英語 AI アプリ 比較",
    "ビジネス英語 AI",
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
    images: [
      {
        url: pageOgImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageOgImageUrl],
  },
};

export default function AiEnglishLearningGuideRoute() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        imageUrl={pageOgImageUrl}
        articleType="BlogPosting"
      />
      <BreadcrumbStructuredData
        items={[
          { name: "ホーム", url: "https://ai-reboot.io" },
          { name: "アカデミー", url: "https://ai-reboot.io/academy" },
          { name: "ブログ", url: "https://ai-reboot.io/academy/blog" },
          { name: "AI英語学習ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiEnglishLearningGuidePage faqItems={[...faqItems]} />
    </>
  );
}
