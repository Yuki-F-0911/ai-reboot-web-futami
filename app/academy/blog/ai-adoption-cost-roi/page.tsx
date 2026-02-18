import type { Metadata } from "next";
import AiAdoptionCostRoiPage from "@/components/academyLanding/blog/ai-adoption-cost-roi/AiAdoptionCostRoiPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AI導入の費用相場とROIの考え方｜PoC予算の決め方まで【2026年版】";
const pageDescription =
  "生成AI導入にかかる費用の相場（APIコスト・ツール費・人件費）とROI算出方法を解説。PoC予算の決め方、投資回収シミュレーション、ROI試算シート付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-adoption-cost-roi";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "生成AI導入にいくらかかりますか？",
    answer:
      "規模と方法により大きく異なります。SaaS型ツール導入なら月額1万〜10万円/人、API開発なら月額数十万〜数百万円、フルカスタムなら初期費用500万〜数千万円が目安です。",
  },
  {
    question: "PoCの予算はどれくらい見ればよいですか？",
    answer:
      "一般的に50万〜300万円（1〜3ヶ月）が目安です。APIコスト、開発人件費、評価コストを含めて見積もります。",
  },
  {
    question: "ROIはどう計算しますか？",
    answer:
      "(導入による削減コスト + 売上増加分 - 導入総コスト) ÷ 導入総コスト × 100%で算出します。定量効果に加え、品質向上や従業員満足度などの定性効果も評価します。",
  },
  {
    question: "APIコストはどう見積もりますか？",
    answer:
      "トークン単価×想定利用量で試算します。GPT-4oは入力$2.50/100万トークン、Claude 3.5 Sonnetは入力$3/100万トークンが目安です（2026年2月時点）。",
  },
  {
    question: "投資回収までどれくらいかかりますか？",
    answer: "SaaS型なら3〜6ヶ月、API開発型なら6〜12ヶ月、フルカスタムなら12〜24ヶ月が一般的な回収期間の目安です。",
  },
  {
    question: "隠れコストにはどんなものがありますか？",
    answer:
      "教育・研修費用、セキュリティ対策費用、データ整備費用、運用保守費用、ガイドライン策定の人件費などが見落とされがちです。",
  },
  {
    question: "小規模に始めるならどの方法がおすすめですか？",
    answer:
      "まずSaaS型ツール（ChatGPT Team, Claude for Business等）で月額1〜3万円/人から始め、効果を実証してからAPI開発に移行するのが低リスクです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["生成AI 導入 費用", "生成AI ROI", "生成AI コスト", "AI導入 予算"],
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

export default function AiAdoptionCostRoiRoute() {
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
          { name: "生成AI導入の費用相場とROI", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAdoptionCostRoiPage faqItems={[...faqItems]} />
    </>
  );
}

