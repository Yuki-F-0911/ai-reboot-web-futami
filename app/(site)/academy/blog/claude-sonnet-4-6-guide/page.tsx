import type { Metadata } from "next";
import ClaudeSonnet46GuidePage from "@/components/academyLanding/blog/claude-sonnet-4-6-guide/ClaudeSonnet46GuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Claude Sonnet 4.6使い方ガイド｜料金・Opus 4.6比較・API実装【2026年2月】 | AIリブート";
const pageDescription =
  "Claude Sonnet 4.6の使い方を2026年2月時点で解説。公開日、Opus 4.6との使い分け、API呼び出し例、文書作成・要約・コード補助の実務活用、Claude.aiとAPIの料金比較、FAQをまとめた中級者向けガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-sonnet-4-6-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:00:00+09:00";
const modifiedTime = "2026-02-21T12:30:00+09:00";

const faqItems = [
  {
    question: "Claude Sonnet 4.6はいつ公開されましたか？",
    answer:
      "Anthropic公式情報では2026年2月17日に公開されています。価格や機能提供範囲は更新される可能性があるため、利用前に公式ページの更新日も確認してください。",
  },
  {
    question: "Sonnet 4.6とOpus 4.6はどちらを使うべきですか？",
    answer:
      "コスト効率と応答速度を重視する日常業務はSonnet 4.6、難易度が高い推論や長文文脈での精度を優先する工程はOpus 4.6が基本です。業務単位で使い分けると費用対効果が安定します。",
  },
  {
    question: "Claude Sonnet 4.6のAPI料金はいくらですか？",
    answer:
      "2026年2月21日時点のAnthropic公開情報では、Sonnet 4.6は入力$3/MTok・出力$15/MTok（200Kまで）です。200K超の長文コンテキストでは入力$6/MTok・出力$22.50/MTokに上がります。",
  },
  {
    question: "Claude.aiでもSonnet 4.6を使えますか？",
    answer:
      "はい。公式ページではSonnet 4.6がFreeとProのデフォルトモデルとして案内されています。実際の利用上限は会話長や混雑状況などで変動します。",
  },
  {
    question: "API実装はMessages APIでよいですか？",
    answer:
      "はい。Anthropic APIではMessages API経由で `model: \"claude-sonnet-4-6\"` を指定する実装が基本です。まずは最小構成で応答を返し、その後に入出力形式や監査ログを追加する流れが安全です。",
  },
  {
    question: "Sonnet 4.6の主な用途は何ですか？",
    answer:
      "文書ドラフト、会議ログ要約、社内FAQ整備、コードレビュー補助など、日常頻度が高く量が多い業務に向いています。高コストモデルを常時使う前の標準モデルとして有効です。",
  },
  {
    question: "Opus 4.6との比較はベンチマークだけで判断できますか？",
    answer:
      "ベンチマークは参考になりますが、業務ごとの入力品質や評価軸で結果が変わります。社内データで品質・処理時間・コストの3軸をログ化して比較する方法が実務的です。",
  },
  {
    question: "法人導入時に最初に決めるべきことは何ですか？",
    answer:
      "機密データの取り扱いルール、モデル選定基準（Sonnet/Opus切替条件）、人間レビュー責任者、予算上限の4点を先に決めることが重要です。PoCより先に運用ルールを固定すると事故を減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Sonnet 4.6 使い方",
    "Claude Sonnet 4.6 料金",
    "Claude Sonnet 4.6 vs Opus 4.6",
    "Claude Sonnet 4.6 API",
    "Anthropic Claude.ai",
    "法人AI導入",
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

export default function ClaudeSonnet46GuideRoute() {
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
          { name: "Claude Sonnet 4.6使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeSonnet46GuidePage faqItems={[...faqItems]} />
    </>
  );
}
