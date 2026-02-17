import type { Metadata } from "next";
import SkillsForAiEraCareerPage from "@/components/academyLanding/blog/skills-for-ai-era-career/SkillsForAiEraCareerPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI時代に必要なスキルを職種別に解説｜2026年版キャリア戦略 | AIリブート";
const pageDescription =
  "AI時代に必要なスキルを職種別（営業/マーケ/管理職/事務/クリエイティブ）に整理。共通基礎→職種別活用→成果物づくりの順で、今の仕事で価値を上げる学習順序と具体例を解説。何から始めるか迷う人向けチェック付き。無料セミナー/個別相談の案内付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/skills-for-ai-era-career";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2025-10-04T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "AI時代に必要なスキルは何から学べばよいですか？",
    answer:
      "最初はAIツールの操作よりも、業務課題の言語化と情報整理から始めるのが効果的です。次に職種別の活用スキルへ進むと実務に接続しやすくなります。",
  },
  {
    question: "文系職種でもAI時代のキャリアを築けますか？",
    answer:
      "はい。多くの職種では、開発知識よりも課題設定・検証・意思決定の力が重視されます。職種に合ったAI活用パターンを持てば十分に競争力を高められます。",
  },
  {
    question: "「AIに奪われる仕事」が不安です。何を意識すべきですか？",
    answer:
      "奪われる前提で考えるより、AIで成果を拡張できる業務を特定する視点が重要です。作業の代替ではなく、提案品質や判断速度の向上に焦点を当てると方向性が明確になります。",
  },
  {
    question: "管理職が最初に取り組むべきAI導入アクションは何ですか？",
    answer:
      "導入目的、対象業務、品質責任の3点を明確にすることです。加えて、小さな検証テーマを設定してチームに成功体験を作ると定着が進みやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI時代 必要なスキル",
    "AI時代 キャリア",
    "AIスキル 職種別",
    "AIキャリア戦略",
    "生成AI 活用スキル",
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

export default function SkillsForAiEraCareerRoute() {
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
          { name: "AI時代の必須スキル", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <SkillsForAiEraCareerPage faqItems={[...faqItems]} />
    </>
  );
}
