import type { Metadata } from "next";
import SkillsForAiEraCareerPage from "@/components/academyLanding/blog/skills-for-ai-era-career/SkillsForAiEraCareerPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI時代に必要なスキルを職種別に解説 | AIリブートジャーナル";
const pageDescription =
  "AI時代に必要なスキルを職種別に整理。営業・管理部門・企画・エンジニア・マネジメントそれぞれで求められる力と、共通して重要な3つの力を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/skills-for-ai-era-career";

const faqItems = [
  {
    question: "AI時代に必要なスキルは、まず何から身につけるべきですか？",
    answer:
      "最初はツール操作そのものよりも、業務課題を言語化する力と、AIに渡す情報を整理する力から始めると実務につながりやすくなります。",
  },
  {
    question: "文系職種でもAI活用スキルは身につきますか？",
    answer:
      "はい。多くの職種で必要なのは高度な開発知識ではなく、課題設定、情報整理、出力判断といった実務で使える基礎スキルです。",
  },
  {
    question: "職種ごとの学び分けは本当に必要ですか？",
    answer:
      "必要です。共通する基礎力はありますが、営業と管理部門、企画とエンジニアではAIの使いどころが異なるため、職種ごとの重点を持つ方が成果に直結しやすくなります。",
  },
  {
    question: "チームでAI活用を進めるときに最初に決めるべきことは何ですか？",
    answer:
      "導入の目的、活用する業務範囲、検証と最終判断の担当を最初に明確にすることが重要です。これにより現場での混乱を減らしやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI時代 必要なスキル",
    "AIスキル 職種別",
    "AI活用 スキル",
    "AI時代 キャリア",
    "AIリテラシー",
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
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function SkillsForAiEraCareerRoute() {
  return (
    <>
      <FAQStructuredData items={[...faqItems]} />
      <SkillsForAiEraCareerPage faqItems={[...faqItems]} />
    </>
  );
}
