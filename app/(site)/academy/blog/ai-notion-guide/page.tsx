import type { Metadata } from "next";
import AiNotionGuidePage from "@/components/academyLanding/blog/ai-notion-guide/AiNotionGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Notion AIの使い方完全ガイド｜料金・実務活用・連携術【2026年版】 | AIリブート";
const pageDescription =
  "Notion AIの2026年最新機能、Notion AI Plus 2026の見方、無料版とBusiness/Enterpriseの違い、議事録・タスク管理・文書整理での実務活用、ChatGPT/Gemini連携、データベース活用の制限まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-notion-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T14:30:00+09:00";
const modifiedTime = "2026-02-20T14:30:00+09:00";

const faqItems = [
  {
    question: "Notion AI Plus 2026は、今も単体で契約できますか？",
    answer:
      "2026年2月20日時点の公式情報では、Free/Plusはlimited complimentary AI responses、Business/EnterpriseはNotion AIを本格利用できる案内です。契約形態は更新されるため、契約直前に公式pricingページで確認してください。",
  },
  {
    question: "無料版とBusiness/Enterpriseで、実務上どこが一番違いますか？",
    answer:
      "最も差が出るのは、AIを日常業務フローへ常時組み込めるかどうかです。Free/Plusは試用中心、Business/Enterpriseは運用設計前提で活用を広げやすい構成です。",
  },
  {
    question: "Notion AIは日本語でどこまで実用的ですか？",
    answer:
      "公式ヘルプではNotion AIが日本語を含む複数言語で回答可能と案内されています。実務で使う場合は、用語統一と固有名詞チェックのレビュー工程を固定すると品質が安定します。",
  },
  {
    question: "議事録作成はNotion AI単体で完結できますか？",
    answer:
      "会議ノート要約やアクション抽出までならNotion AIで十分対応できます。社外共有資料にする場合は、日付・数値・決定事項を人が最終確認する運用が必要です。",
  },
  {
    question: "ChatGPTやGeminiと併用するなら、役割分担はどう決めるべきですか？",
    answer:
      "Notion AIは社内ナレッジ整理とDB接続文脈、ChatGPT/Geminiは草案生成や比較検討に分けると再現性が上がります。先に入力データ境界とレビュー責任を決めるのが実務上の優先事項です。",
  },
  {
    question: "エンタープライズで最初に決めるべきAI利用ルールは何ですか？",
    answer:
      "入力禁止情報、権限管理、接続アプリ承認、出力レビュー責任の4点を最初に定義することが基本です。Notion AIはワークスペース権限を尊重するため、権限設計が運用品質を左右します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Notion AI 使い方",
    "Notion AI Plus 2026",
    "Notion 仕事効率化",
    "Notion AI 活用術",
    "Notion AI 料金",
    "Notion AI 日本語",
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

export default function AiNotionGuideRoute() {
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
          { name: "Notion AIの使い方完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiNotionGuidePage faqItems={[...faqItems]} />
    </>
  );
}
