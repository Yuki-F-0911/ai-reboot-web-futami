import type { Metadata } from "next";
import AiSideBusinessGuidePage from "@/components/academyLanding/blog/ai-side-business-guide/AiSideBusinessGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "副業でAIを活用する始め方ガイド｜学習から案件獲得までの現実的な進め方 | AIリブート";
const pageDescription =
  "AIを活用した副業を始めたい方向けに、副業タイプ、学習ステップ、必要スキルの目安、就業規則・確定申告・期待値調整などの注意点を整理。まず「何を売るか」を決めて小さく実績を作る進め方がわかります。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-side-business-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "AI副業は未経験から始められますか？",
    answer:
      "可能ですが、いきなり高単価案件を狙うより、既存スキルと組み合わせて小さな実績を積む進め方が現実的です。基礎学習と成果物作成を並行すると進みやすくなります。",
  },
  {
    question: "どのような副業ジャンルから始めるのがよいですか？",
    answer:
      "一般的には、現在の職務経験に近い領域から始めるほうが受注しやすい傾向があります。たとえば、文章業務経験があるならライティング支援から始める方法があります。",
  },
  {
    question: "副業でAIを使う場合、どこまで説明すべきですか？",
    answer:
      "クライアントとの期待値を揃えるため、AI活用の範囲と最終的な品質担保の方法を事前に共有することが重要です。納品責任は受注者側にあります。",
  },
  {
    question: "副業開始前に確認すべき社内ルールはありますか？",
    answer:
      "就業規則の副業可否、競業避止、情報持ち出し制限は必ず確認してください。会社ごとに条件が異なるため、自己判断だけで進めないことが重要です。",
  },
  {
    question: "確定申告はいつ準備すべきですか？",
    answer:
      "副業収入が発生した段階で、経費管理と記帳の運用を始めるのが安全です。年度末にまとめるより、月次で整理するほうが負担を抑えられます。",
  },
  {
    question: "副業からフリーランス独立を目指す場合の注意点は？",
    answer:
      "単発受注だけで判断せず、継続案件比率、業務範囲、稼働時間の再現性を確認することが重要です。安定運用できる体制を整えてから判断するのが現実的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "副業 AI 始め方",
    "フリーランス AI 仕事",
    "AI副業",
    "AI活用 副業",
    "AIスキル キャリア",
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

export default function AiSideBusinessGuideRoute() {
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
          { name: "副業でAIを活用する始め方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSideBusinessGuidePage faqItems={[...faqItems]} />
    </>
  );
}
