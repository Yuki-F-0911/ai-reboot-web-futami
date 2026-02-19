import type { Metadata } from "next";
import AiAdoptionProposalTemplatePage from "@/components/academyLanding/blog/ai-adoption-proposal-template/AiAdoptionProposalTemplatePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "稟議が通る生成AI導入計画書の作り方｜目的・リスク・費用を1枚で整理 | AIリブート";
const pageDescription =
  "生成AI導入の稟議が通らない理由を、承認者視点で整理。目的・期待効果・リスク対策・費用・導入ロードマップを1枚に落とす方法と、PoC提案/全社展開提案の書き分けを解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-adoption-proposal-template";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19";
const modifiedTime = "2026-02-19";

const faqItems = [
  {
    question: "生成AI導入の稟議が通らない最大の理由は何ですか？",
    answer:
      "最も多いのは、目的・効果・リスク・費用のつながりが曖昧なことです。承認者は「何を実現し、何を防ぎ、いくらで、いつ判断できるか」が見えないと承認しにくくなります。",
  },
  {
    question: "1枚計画書には最低何を書けば承認判断できますか？",
    answer:
      "最低限「目的」「期待効果（KPI）」「主要リスクと対策」「費用内訳」「導入ロードマップ（判断ゲート付き）」の5項目です。加えて責任者を明記すると判断が速くなります。",
  },
  {
    question: "費用はどこまで詳細に書くべきですか？",
    answer:
      "固定金額を断定するより、費用区分（ツール/運用/教育/セキュリティ）と前提条件を明示する方が実務的です。稟議では上限・期間・見直し条件まで書くと通りやすくなります。",
  },
  {
    question: "リスク対策はガイドライン作成だけで十分ですか？",
    answer:
      "不十分です。ガイドラインに加えて、承認フロー、権限管理、ログ監査、教育まで運用設計に落とす必要があります。文書だけでなく実行手順があるかが重要です。",
  },
  {
    question: "PoC提案と全社展開提案はどう使い分ければいいですか？",
    answer:
      "実績がない場合はPoC提案で小さく検証し、数値と運用課題を可視化してから全社展開提案に進むのが安全です。既に利用実績がある組織は、段階導入型の全社計画が適します。",
  },
  {
    question: "社内で推進する際、最初に巻き込むべき部署はどこですか？",
    answer:
      "事業部門（利用現場）、情シス/セキュリティ、法務、経営企画の4者を初期から巻き込むのが基本です。後工程で合流させると差し戻しが増えるため、最初に役割分担を決めます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 稟議 書き方",
    "生成AI 導入 計画書",
    "AI導入 承認",
    "生成AI 稟議 通し方",
    "AI 導入 稟議書 テンプレ",
    "生成AI PoC 稟議",
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

export default function AiAdoptionProposalTemplateRoute() {
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
          { name: "稟議が通る生成AI導入計画書の作り方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAdoptionProposalTemplatePage faqItems={[...faqItems]} />
    </>
  );
}
