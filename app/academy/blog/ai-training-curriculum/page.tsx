import type { Metadata } from "next";
import AiTrainingCurriculumPage from "@/components/academyLanding/blog/ai-training-curriculum/AiTrainingCurriculumPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI研修カリキュラム例（職種別）｜社内定着まで見据えた設計【2026年版】";
const pageDescription =
  "生成AI研修のカリキュラムを職種別に設計する方法。営業・マーケ・バックオフィス・エンジニア向けの具体的なプログラム例と、社内定着まで見据えた研修企画書テンプレート付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-training-curriculum";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "AI研修は全社員対象にすべきですか？",
    answer: "まず部門横断の基礎研修（1〜2時間）を全社員対象で実施し、その後職種別の応用研修に分けるのが効果的です。",
  },
  {
    question: "研修期間はどれくらい必要ですか？",
    answer: "基礎研修は半日〜1日、職種別応用研修は2〜4回（各2時間程度）、定着支援は1〜3ヶ月のOJTを含めて設計します。",
  },
  {
    question: "外部講師と社内講師のどちらがよいですか？",
    answer:
      "基礎研修は外部講師（専門性と新鮮さ）、応用研修は社内講師（業務理解）のハイブリッドが効果的です。社内講師の養成も重要です。",
  },
  {
    question: "研修で一番重要なポイントは？",
    answer:
      "「自分の業務でどう使うか」を具体的に体験させることです。ツールの操作方法だけでなく、実務タスクでのハンズオンが不可欠です。",
  },
  {
    question: "研修後の定着率を上げるには？",
    answer:
      "研修後30日以内にOJTタスクを設定し、月1回のフォローアップ勉強会を実施します。KPIで効果を可視化すると継続意欲が高まります。",
  },
  {
    question: "非エンジニア向けの研修で気をつけることは？",
    answer:
      "技術用語を避け、業務改善の視点から入ることです。「プロンプト＝AIへの質問の書き方」のように日常語に置き換えます。",
  },
  {
    question: "研修費用の相場は？",
    answer:
      "外部研修は1人あたり2〜10万円/回、社内研修は企画・講師育成に20〜100万円、eラーニングは月額5千〜3万円/人が目安です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI研修 カリキュラム", "生成AI 研修 内容", "AI研修 プログラム", "生成AI 社内研修"],
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

export default function AiTrainingCurriculumRoute() {
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
          { name: "AI研修カリキュラム例（職種別）", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTrainingCurriculumPage faqItems={[...faqItems]} />
    </>
  );
}

