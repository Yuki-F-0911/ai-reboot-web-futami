import type { Metadata } from "next";
import AiPocGuidePage from "@/components/academyLanding/blog/ai-poc-guide/AiPocGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AI PoCの進め方（30日テンプレ）｜成功条件と失敗パターンを先に潰す【2026年版】";
const pageDescription =
  "生成AI PoCを30日で完了するテンプレートと進め方。成功判定基準の設計、よくある失敗パターンと対策、PoC計画書テンプレート付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-poc-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "PoCとは何ですか？",
    answer:
      "Proof of Concept（概念実証）の略で、生成AIが自社業務に有効かを小規模に検証する取り組みです。本格導入前にリスクと効果を見極めます。",
  },
  {
    question: "PoCはどれくらいの期間が必要ですか？",
    answer:
      "一般的に2〜4週間（30日以内）が推奨です。長引くとコストが膨らみ、検証の焦点もぼやけるため、短期集中が鉄則です。",
  },
  {
    question: "PoCの成功/失敗の判定基準は？",
    answer:
      "「業務時間の何%削減」「正答率何%以上」「ユーザー満足度何点以上」など、定量的なKPIを事前に設定して判定します。",
  },
  {
    question: "PoCで失敗する一番の原因は？",
    answer:
      "ゴール設定が曖昧で「なんとなくAIを試してみた」で終わるケースが最多です。事前に成功基準を決めないと評価できません。",
  },
  {
    question: "どの業務でPoCをすべきですか？",
    answer:
      "定型的かつ大量にある業務（FAQ回答、文書要約、データ入力等）が最適です。効果が測りやすく、成功体験を社内に見せやすい業務を選びます。",
  },
  {
    question: "PoC後に本格導入に進めないケースは？",
    answer:
      "コストが見合わない、精度が基準に達しない、セキュリティ要件を満たせないの3パターンが典型的です。いずれもPoCで事前に判明するのが重要です。",
  },
  {
    question: "PoC計画書に最低限入れるべき項目は？",
    answer:
      "目的・対象業務・成功基準・期間・予算・担当者・評価方法・セキュリティ対策の8項目が最小セットです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["生成AI PoC 進め方", "生成AI 導入 手順", "AI PoC テンプレート", "生成AI 実証実験"],
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

export default function AiPocGuideRoute() {
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
          { name: "生成AI PoCの進め方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPocGuidePage faqItems={[...faqItems]} />
    </>
  );
}

