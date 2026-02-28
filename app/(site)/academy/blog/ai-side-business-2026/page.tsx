import type { Metadata } from "next";
import AiSideBusiness2026Page from "@/components/academyLanding/blog/ai-side-business-2026/AiSideBusiness2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI副業の稼ぎ方2026｜初心者が月5万円を目指す3分野と6か月ロードマップ | AIリブート";
const pageDescription =
  "AI副業を2026年基準で解説。記事生成代行・SNS運用代行・データ分析レポート代行の始め方、0〜6か月の収益化ロードマップ、月5万円の匿名事例、ChatGPT/Claude/Dify/n8nの使い分け、税務と確定申告の注意点まで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-side-business-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AI副業は初心者から始めても月5万円を目指せますか？",
    answer:
      "可能です。最初は単価より再現性を優先し、記事生成代行・SNS運用代行・データ分析レポート代行のいずれか1分野に絞ると進めやすくなります。小さな実績を3件作ってから単価を上げる流れが現実的です。",
  },
  {
    question: "2026年のAI副業は2025年と何が違いますか？",
    answer:
      "違いは、AI出力そのものより要件定義と検収設計の価値が上がっている点です。発注側は『AIで作ったか』より『目的に合う品質で納品できるか』を重視する傾向が強まっています。",
  },
  {
    question: "ChatGPTとClaudeは副業でどう使い分けるべきですか？",
    answer:
      "短い反復作業や構造化はChatGPT、長文推敲や文脈調整はClaudeが使いやすい傾向です。実際は同じ案件で両方を試し、修正回数と所要時間で判断するのが最適です。",
  },
  {
    question: "Difyやn8nを使うAIエージェント副業は非エンジニアでも可能ですか？",
    answer:
      "可能ですが、ノーコード操作だけでなく業務フローの分解力と例外処理の設計力が必要です。まずは1業務1フローの小規模案件から始め、保守運用の範囲を契約前に明確化してください。",
  },
  {
    question: "副業所得が20万円以下なら確定申告は一切不要ですか？",
    answer:
      "給与所得者の場合、所得税の確定申告は不要となるケースがありますが、住民税申告が必要な場合があります。国税庁の基準と居住地自治体の案内を分けて確認してください。",
  },
  {
    question: "会社員がAI副業を始める前に確認すべきことは何ですか？",
    answer:
      "就業規則の副業可否、競業避止、情報持ち出し制限、勤務時間管理を最初に確認してください。受注前に契約条件と納品責任を明文化すると、後のトラブルを減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI副業 2026 稼ぎ方",
    "AI副業 おすすめ 月5万",
    "AIエージェント 副業",
    "在宅副業 AI 初心者",
    "AI副業 確定申告",
    "AI副業 ロードマップ",
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

export default function AiSideBusiness2026Route() {
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
          { name: "AI副業の稼ぎ方2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSideBusiness2026Page faqItems={[...faqItems]} />
    </>
  );
}
