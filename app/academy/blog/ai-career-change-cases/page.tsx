import type { Metadata } from "next";
import AiCareerChangeCasesPage from "@/components/academyLanding/blog/ai-career-change-cases/AiCareerChangeCasesPage";
import { FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI時代のキャリアチェンジ - 5つのルートと準備すべきこと | AIリブートジャーナル";
const pageDescription =
  "AI時代にキャリアチェンジを考える人向けに、5つの現実的なルートと事前準備を整理。架空の転職事例ではなく、実行可能なパターンガイドとして解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-career-change-cases";

const faqItems = [
  {
    question: "AI時代のキャリアチェンジは未経験でも可能ですか？",
    answer:
      "可能です。重要なのは職種を完全に変えることだけではなく、現職でAI活用を進める選択肢も含めて、自分の経験を活かせる移行ルートを選ぶことです。",
  },
  {
    question: "どの程度のAIスキルがあればキャリアチェンジに活かせますか？",
    answer:
      "まずは業務課題を整理し、生成AIを使って調査、要約、資料作成を改善できる実務レベルが目安です。高度な開発スキルが必須とは限りません。",
  },
  {
    question: "副業から始める場合は何を準備すべきですか？",
    answer:
      "本業との時間配分、提供できる業務範囲、成果物の品質基準を先に決めることが重要です。小さな案件で検証しながら段階的に広げるとリスクを抑えられます。",
  },
  {
    question: "転職活動前に相談しておくべきことはありますか？",
    answer:
      "市場で求められる役割、年収レンジ、働き方の条件を整理し、キャリアアドバイザーや信頼できる実務者に早めに相談することをおすすめします。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI時代 キャリアチェンジ",
    "AI キャリアパス",
    "AI活用人材",
    "キャリアチェンジ 準備",
    "副業 キャリア移行",
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

export default function AiCareerChangeCasesRoute() {
  return (
    <>
      <FAQStructuredData items={[...faqItems]} />
      <AiCareerChangeCasesPage faqItems={[...faqItems]} />
    </>
  );
}
