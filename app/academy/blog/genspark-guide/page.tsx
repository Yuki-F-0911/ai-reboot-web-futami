import type { Metadata } from "next";
import GensparkGuidePage from "@/components/academyLanding/blog/genspark-guide/GensparkGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Gensparkとは？AI検索の新世代ツールを徹底解説｜Perplexityとの違いと使い分け | AIリブート";
const pageDescription =
  "Gensparkの使いどころを知りたい人向けに、Perplexityとの違い、情報収集での使い分け、引用確認を含む実務フロー、無料枠と日本語運用の注意点、社内導入時の確認ポイント、比較表テンプレート活用まで2026年2月時点の情報で整理したガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/genspark-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T12:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Gensparkとは何ですか？",
    answer:
      "Gensparkは、複数ソースを統合して回答を作るAIエージェント型の検索サービスです。リンク一覧を追うだけでなく、要点整理と追加深掘りを対話で進める用途に向いています。",
  },
  {
    question: "GensparkとPerplexityの違いは何ですか？",
    answer:
      "どちらもAI検索ですが、Gensparkはエージェント型の調査フローを強く打ち出し、Perplexityは検索回答と引用確認の定番運用がしやすい設計です。実務では、問いの粒度と必要な再現性で使い分けるのが有効です。",
  },
  {
    question: "Gensparkは無料で使えますか？",
    answer:
      "無料で開始できます。公式規約とヘルプでは、無料利用には機能制限や日次クレジット制限があると明示されています。最新条件は公式ページで確認してください（確認日: 2026-02-20）。",
  },
  {
    question: "Gensparkは日本語でも使えますか？",
    answer:
      "日本語の質問と要約は実用可能です。ただし固有名詞や業界用語は誤読が混ざる場合があるため、重要な意思決定では原典確認を前提に運用することが重要です。",
  },
  {
    question: "Gensparkはビジネスの情報収集でどう使うと効果的ですか？",
    answer:
      "市場調査や競合比較では、先に調査観点を指定して要点を集約し、次に引用元で事実確認する2段階運用が効果的です。調査結果をそのまま提出せず、社内用途に合わせて再編集すると再現性が上がります。",
  },
  {
    question: "Perplexityと併用する場合のおすすめ手順はありますか？",
    answer:
      "まずGensparkで論点の広い下調べを行い、次にPerplexityで引用確認と比較の精度を上げる流れが実務で扱いやすいです。最後はChatGPTなどで提出物の体裁に整えると工数を減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Genspark 使い方",
    "Genspark とは",
    "Genspark Perplexity 違い",
    "AI検索 比較 2026",
    "Genspark 無料",
    "AI検索ツール",
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

export default function GensparkGuideRoute() {
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
          { name: "Gensparkとは？AI検索の新世代ツールを徹底解説", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GensparkGuidePage faqItems={[...faqItems]} />
    </>
  );
}
