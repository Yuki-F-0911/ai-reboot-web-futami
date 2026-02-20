import type { Metadata } from "next";
import OpenaiDeepResearchGuidePage from "@/components/academyLanding/blog/openai-deep-research-guide/OpenaiDeepResearchGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "OpenAI Deep Research使い方ガイド｜市場調査・競合分析の実務手順【2026年版】 | AIリブート";
const pageDescription =
  "OpenAI Deep Researchの使い方を2026年2月20日時点で整理。通常検索との違い、ChatGPT Plus/Pro/Business(旧Team)/Enterpriseでの起動手順、2026年2月10日のMCP接続アップデート、市場調査・競合分析での活用法と誤情報対策まで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/openai-deep-research-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T18:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "OpenAI Deep Researchは通常のWeb検索と何が違いますか？",
    answer:
      "通常検索が短時間で候補情報を探す行為であるのに対し、Deep Researchは複数ソースを横断し、要点と引用付きでレポート化する調査フローです。処理時間は長くなりますが、意思決定に使える粒度で整理しやすくなります。",
  },
  {
    question: "PlusとProで使い方に違いはありますか？",
    answer:
      "起動手順は同じです。違いは主に利用上限と運用設計です。業務で継続運用する場合は、月間の実行回数を使用量ページで確認し、案件単位で予算管理する方法が実務的です。",
  },
  {
    question: "TeamプランでもMCP接続は使えますか？",
    answer:
      "2026年2月時点の公式情報では、Plus/Pro/Business（旧Team）/Enterprise/Eduでcustom connectors（MCP）が案内されています。組織設定や管理者の権限ポリシーで利用可否が変わるため、管理画面で確認が必要です。",
  },
  {
    question: "1回の調査にかかる時間とコストの目安はどれくらいですか？",
    answer:
      "OpenAI公式の目安では、1回の調査は5〜30分程度です。1回あたりの固定課金は公式に明記されていないため、月額費用を実行回数で割る形で実効コストを管理するのが一般的です。",
  },
  {
    question: "競合分析で誤情報を減らすには何を確認すべきですか？",
    answer:
      "数値・固有名詞・更新日・引用元URLの4点を必ず検証し、反証クエリを1回追加して矛盾を確認してください。レポート本文だけで判断せず、引用ソースまで遡る運用が必要です。",
  },
  {
    question: "PerplexityやGemini Deep Researchとどう使い分けるべきですか？",
    answer:
      "速度重視ならPerplexity、Google Workspace連携重視ならGemini、MCPを含む社内データ接続と長い調査レポート重視ならOpenAI Deep Researchが候補になります。意思決定では接続要件と監査要件を優先して選定してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI Deep Research 使い方",
    "ChatGPT ディープリサーチ",
    "調査AI 2026",
    "Deep Research MCP",
    "市場調査 AI",
    "競合分析 AI",
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

export default function OpenaiDeepResearchGuideRoute() {
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
          { name: "OpenAI Deep Research使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OpenaiDeepResearchGuidePage faqItems={[...faqItems]} />
    </>
  );
}
