import type { Metadata } from "next";
import AiResearchTool2026Page from "@/components/academyLanding/blog/ai-research-tool-2026/AiResearchTool2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI情報収集ツール比較2026｜Perplexity・Deep Research・Gensparkの選び方 | AIリブート";
const pageDescription =
  "2026年2月時点のAI情報収集ツール比較。Perplexity・ChatGPT Deep Research・Gensparkを、リアルタイム検索型/深掘り型/専門特化型の3分類で整理し、用途別選択チャート、料金と無料枠、ハルシネーション対策まで中級者向けに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-research-tool-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T20:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "AI情報収集ツールは2026年にどう分類すると選びやすいですか？",
    answer:
      "リアルタイム検索型、深掘り型、専門特化型の3分類で整理すると判断しやすくなります。速報確認はリアルタイム検索型、意思決定資料の作成は深掘り型、領域特化タスクは専門特化型が適しています。",
  },
  {
    question: "PerplexityとChatGPT Deep Researchの違いは何ですか？",
    answer:
      "Perplexityは高速検索と引用確認の反復に強く、ChatGPT Deep Researchは時間をかけた調査レポート作成とMCP連携に強みがあります。短時間の比較検討か、深い調査報告かで選ぶと運用しやすくなります。",
  },
  {
    question: "Gensparkはどんな用途で使うと効果が出ますか？",
    answer:
      "GensparkはSparkpagesによる情報統合や、旅行計画などの領域特化タスクで初動を速めたいときに有効です。最終判断には引用元確認を組み合わせる運用が前提になります。",
  },
  {
    question: "無料枠だけで実務運用できますか？",
    answer:
      "速報確認や短い探索なら無料枠でも運用可能ですが、継続的な深掘り調査では上限に達しやすくなります。実運用前に1週間の試行で回数と必要品質を測定し、有料化基準を定めることが有効です。",
  },
  {
    question: "料金比較で見るべき項目は何ですか？",
    answer:
      "月額金額だけでなく、1日あたりの実行上限、Deep Research相当機能の利用可否、ファイル連携・MCP連携、チーム課金の最小単位を確認してください。実効単価は月額を実行回数で割って評価します。",
  },
  {
    question: "ハルシネーションと引用ミスを防ぐには何を固定すべきですか？",
    answer:
      "確認日、引用元URL、元データ更新日、反証クエリの4点をレビュー項目として固定してください。出力本文だけで判断せず、一次情報に戻る手順を必須化すると誤判定を減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI情報収集 ツール 比較 2026",
    "Perplexity vs Deep Research",
    "Genspark AI",
    "リサーチ AI おすすめ",
    "AI調査ツール 比較",
    "AI情報収集",
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

export default function AiResearchTool2026Route() {
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
          { name: "AI情報収集ツール比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiResearchTool2026Page faqItems={[...faqItems]} />
    </>
  );
}
