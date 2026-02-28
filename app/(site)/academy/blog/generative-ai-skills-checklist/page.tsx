import type { Metadata } from "next";
import GenerativeAiSkillsChecklistPage from "@/components/academyLanding/blog/generative-ai-skills-checklist/GenerativeAiSkillsChecklistPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIスキルを身につける5段階チェックリスト【2026年版】 | AIリブート";
const pageDescription =
  "生成AIスキルを5段階（入門〜プロ）で自己診断できるチェックリスト。各レベルで習得すべきスキル、具体的な練習方法、レベル3以上へ進むための実務設計までを社会人向けに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/generative-ai-skills-checklist";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T11:00:00+09:00";
const modifiedTime = "2026-02-20T11:00:00+09:00";

const faqItems = [
  {
    question: "生成AIスキルを身につけるには、最初に何をチェックすべきですか？",
    answer:
      "最初は「毎回同じ品質で出力を作れるか」を確認してください。プロンプトが場当たり的だと上位レベルへ進みにくくなります。目的・前提・制約・出力形式を固定した指示テンプレを先に作るのが有効です。",
  },
  {
    question: "レベル2とレベル3の違いは何ですか？",
    answer:
      "レベル2は使える状態、レベル3は改善できる状態です。レベル3では出力を評価し、再現できる運用へ修正する力が求められます。",
  },
  {
    question: "AI活用スキルのチェックリストはどれくらいの頻度で見直すべきですか？",
    answer:
      "最低でも月1回、業務内容が変わるタイミングでは即時見直しが有効です。チェックリストは固定ではなく、成果データに合わせて更新してください。",
  },
  {
    question: "生成AIでできることを増やすだけでは不十分ですか？",
    answer:
      "不十分です。実務では「できること」より「品質責任を持って回せること」が重要です。評価基準とレビュー手順を設計して初めて業務価値になります。",
  },
  {
    question: "レベル3以上を目指すとき、独学で限界を感じたらどうすべきですか？",
    answer:
      "実務課題に対する判断軸、継続的なフィードバック、学習仲間との対話を同時に確保できる環境へ移行すると改善しやすくなります。",
  },
  {
    question: "AIリブートアカデミーはどんな目的の人に向いていますか？",
    answer:
      "生成AI活用力の習得に加えて、自己理解・キャリアデザイン、仲間と共に学ぶ環境まで含めて学習設計したい人に向いています。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI スキル 身につける",
    "AI活用スキル チェックリスト",
    "生成AI できること 一覧",
    "AIリテラシー 向上",
    "生成AI レベル診断",
    "AI スキル 学習",
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

export default function GenerativeAiSkillsChecklistRoute() {
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
          { name: "生成AIスキル5段階チェックリスト", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GenerativeAiSkillsChecklistPage faqItems={[...faqItems]} />
    </>
  );
}
