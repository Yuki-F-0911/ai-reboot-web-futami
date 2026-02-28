import type { Metadata } from "next";
import AiTeacherEducationGuidePage from "@/components/academyLanding/blog/ai-teacher-education-guide/AiTeacherEducationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI講師とは？教育現場での活用・失敗パターン・導入手順を解説 | AIリブート";
const pageDescription =
  "AI講師の定義、教育現場で成果が出る導入条件、失敗パターン、不正利用対策、30日導入チェックリストを一次情報ベースで整理。教員と学習者が実務で使える運用ルールまで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-teacher-education-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AI講師は人間の先生を置き換えますか？",
    answer:
      "置き換えではなく補助用途が前提です。授業目標の設定、評価判断、学習意欲の支援は人間の先生が担い、AI講師は反復説明や教材作成を補助する設計が実務的です。",
  },
  {
    question: "AI講師を導入すると本当に時短できますか？",
    answer:
      "教材下書きや問題生成などの反復業務では時短効果が期待できます。ただし、最終確認と運用ルールがないと品質が下がるため、時短と品質管理をセットで設計する必要があります。",
  },
  {
    question: "学習者のAI不正利用はどう防げますか？",
    answer:
      "提出物の最終回答だけを評価せず、途中草稿や根拠説明、口頭確認を組み合わせると抑制しやすくなります。AI利用申告欄を設ける運用も有効です。",
  },
  {
    question: "どの教科や研修から始めるべきですか？",
    answer:
      "まずは効果測定しやすい業務から始めるのが安全です。例として、復習問題作成、小テストのバリエーション作成、授業後FAQ対応など、範囲を限定して導入します。",
  },
  {
    question: "AI講師導入で最初に作るべきルールは何ですか？",
    answer:
      "任せる業務と任せない業務、一次情報確認の手順、学習者の利用ルール、提出時の申告方式の4点を最初に決めると運用が安定します。",
  },
  {
    question: "学校外の学習でも同じ考え方で使えますか？",
    answer:
      "使えます。個人学習でも、目標設定と進捗レビューは人間側で管理し、AIは説明補助と反復練習に使うと学習効率と理解の両立がしやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI講師 とは",
    "AI家庭教師 使い方",
    "教育現場 生成AI 活用",
    "教師 AI 活用",
    "教育 AI 導入",
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

export default function AiTeacherEducationGuideRoute() {
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
          { name: "AI講師活用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTeacherEducationGuidePage faqItems={[...faqItems]} />
    </>
  );
}
