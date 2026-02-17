import type { Metadata } from "next";
import CorporateAiTrainingInternalPage from "@/components/academyLanding/blog/corporate-ai-training-internal/CorporateAiTrainingInternalPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "社内AI研修の始め方と定着の進め方｜DX人材を育てる実務ガイド | AIリブート";
const pageDescription =
  "「AI 研修 社内」「DX人材 リスキリング」を検討する法人担当者向けに、社内研修の立ち上げ手順、外部研修との違い、定着施策を整理したガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/corporate-ai-training-internal";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "社内AI研修はどの部署から始めるのがよいですか？",
    answer:
      "一般的には、業務で文章作成や情報整理が多い部署から始めると効果を確認しやすい傾向があります。最初は対象業務を絞ることが重要です。",
  },
  {
    question: "外部研修と社内研修はどちらが向いていますか？",
    answer:
      "基礎知識の獲得を短期間で進めるなら外部研修、業務フローに合わせて運用まで定着させるなら社内研修が向いています。多くの企業では併用が現実的です。",
  },
  {
    question: "研修対象者は全員にするべきですか？",
    answer:
      "一度に全員へ広げるより、業務影響の大きい職種から段階的に拡大するほうが定着しやすい傾向があります。役割ごとの学習目標を分けるのが効果的です。",
  },
  {
    question: "研修効果はどのように測定できますか？",
    answer:
      "満足度だけでなく、作業時間、再作業の頻度、レビュー回数など業務指標で前後比較する方法が実務ではよく使われます。",
  },
  {
    question: "社内定着に失敗しやすい原因は何ですか？",
    answer:
      "研修後の運用責任者が曖昧なまま進めると活用が止まりやすくなります。OJT連携、勉強会、効果確認の運用設計を研修前に決めておくことが重要です。",
  },
  {
    question: "法人向けに相談するタイミングはいつがよいですか？",
    answer:
      "目的設定と対象者の整理ができた段階で相談すると、研修設計の比較がしやすくなります。要件が曖昧な段階でも、初期設計の壁打ちは有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 研修 社内",
    "DX人材 リスキリング",
    "社内AI研修",
    "法人 AI研修",
    "AI研修 定着",
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

export default function CorporateAiTrainingInternalRoute() {
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
          { name: "社内AI研修の始め方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CorporateAiTrainingInternalPage faqItems={[...faqItems]} />
    </>
  );
}
