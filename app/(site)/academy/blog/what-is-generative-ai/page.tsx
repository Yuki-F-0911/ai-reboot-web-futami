import type { Metadata } from "next";
import WhatIsGenerativeAiPage from "@/components/academyLanding/blog/what-is-generative-ai/WhatIsGenerativeAiPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "生成AIとは？初心者向け解説｜ChatGPT・Claude・Gemini比較【2026年版】 | AIリブート";
const pageDescription =
  "生成AIとは何かを、仕組み・できること・できないことの順で初心者向けに解説。ChatGPTや画像生成AIの活用例、注意点、学び始める手順までまとめています。基礎を押さえたら、無料ツール体験と安全ルール確認を同時に進めましょう。理解チェックの観点も載せています。";
const pageUrl = "https://ai-reboot.io/academy/blog/what-is-generative-ai";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-16T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "生成AIと従来のAIの違いは何ですか？",
    answer:
      "従来のAIは分類や予測が中心で、生成AIは文章・画像・コードなど新しいコンテンツを作る点が大きな違いです。どちらもAIですが、目的が異なります。",
  },
  {
    question: "ChatGPT・Claude・Geminiはどれを選べばよいですか？",
    answer:
      "迷ったら、普段使う業務に近いタスクで1週間試して比較するのが確実です。文章の下書き重視ならChatGPT、長文整理ならClaude、Googleサービス連携を重視するならGeminiが選びやすい傾向です。",
  },
  {
    question: "AIチャットツールは無料プランでも十分ですか？",
    answer:
      "学習用途なら無料プランで十分始められます。ただし利用回数、モデル性能、ファイル処理機能に上限があるため、業務で毎日使う段階では有料プランを検討するのが一般的です。",
  },
  {
    question: "プロンプトはどんな形で書けば失敗しにくいですか？",
    answer:
      "「目的」「前提」「制約」「出力形式」を分けて書くと品質が安定します。まずはテンプレートを使い、出力後に修正指示を1つずつ追加する運用が初心者には有効です。",
  },
  {
    question: "仕事で使うときに最初に決めるべきルールはありますか？",
    answer:
      "機密情報を入力しない、出力の事実確認を行う、最終判断は人が行う、の3点を最初に決めると安全に運用しやすくなります。",
  },
  {
    question: "次に何を学べば実務活用につながりますか？",
    answer:
      "まず1つのAIチャットを継続利用し、次に業務タスクを1つAI化し、最後に学習ロードマップで範囲を広げる順番が効率的です。詳しい手順は関連ページで確認できます。",
  },
  {
    question: "生成AIは検索エンジンの代わりになりますか？",
    answer:
      "完全な代替ではありません。生成AIは要約や下書きに強い一方、最新情報や一次情報の確認は検索エンジンや公式資料が必要です。実務では『AIで叩き台を作り、根拠を検索で検証する』併用が安全です。",
  },
  {
    question: "AIの回答をそのまま提出・公開しても問題ありませんか？",
    answer:
      "そのまま使う運用は推奨されません。事実誤認、表現の偏り、著作権リスクを防ぐため、根拠確認と文面調整を必ず行ってください。特に社外公開文書は人の最終編集を通すことで品質と安全性を担保できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI とは わかりやすく",
    "生成AI 仕組み",
    "生成AI 種類",
    "ChatGPT Claude 違い",
    "AIチャット おすすめ 比較",
    "生成AI 初心者",
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

export default function WhatIsGenerativeAiRoute() {
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
          { name: "生成AIとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WhatIsGenerativeAiPage faqItems={[...faqItems]} />
    </>
  );
}
