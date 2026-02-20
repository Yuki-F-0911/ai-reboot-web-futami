import type { Metadata } from "next";
import PerplexityPagesGuidePage from "@/components/academyLanding/blog/perplexity-pages-guide/PerplexityPagesGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年版】 | AIリブート";
const pageDescription =
  "Perplexity Pagesの使い方を、一般的な検索AIの解説から切り分けて整理。Pagesの作成、公開設定、共同編集、SEOを意識した構成設計まで2026年2月時点で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/perplexity-pages-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:20:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Perplexity Pagesは通常のPerplexity回答と何が違いますか？",
    answer:
      "通常回答が一問一答中心なのに対し、Pagesは複数セクションで構成した公開ドキュメントを作る機能です。調査メモを共有資料に変換しやすい点が実務での違いです。",
  },
  {
    question: "Perplexity Pagesは無料プランでも使えますか？",
    answer:
      "機能提供範囲はプラン更新で変わる可能性があるため、最新の公式プランページ確認が必要です。本記事では運用設計に焦点を置き、利用可否は作成前に必ず公式情報を確認する前提で解説しています。",
  },
  {
    question: "Pagesを公開する際に最初に決めるべきことは何ですか？",
    answer:
      "対象読者、公開範囲、更新頻度の3点です。ここが曖昧だと、公開後に情報粒度やトーンがぶれ、運用負荷が上がりやすくなります。",
  },
  {
    question: "SEOを意識するならどこを最適化すべきですか？",
    answer:
      "タイトル、導入要約、見出し構造、FAQの4点です。最初の3行で結論を提示し、見出しごとに問いを明確化すると検索意図との一致率を高めやすくなります。",
  },
  {
    question: "社内で共同編集する場合の注意点はありますか？",
    answer:
      "更新責任者を決め、改訂履歴を残す運用が必要です。特に数値情報は更新日を必ず併記し、古い情報の再配布を防ぐルールを先に決めてください。",
  },
  {
    question: "Perplexity Pagesとブログ記事はどう使い分けるべきですか？",
    answer:
      "Pagesは調査結果を素早く共有する用途、ブログは検索流入を継続獲得する用途に向いています。Pagesで検証した構成を、後でブログへ展開する二段構えが実務では有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Perplexity Pages 使い方",
    "Perplexity Pages 公開",
    "Perplexity Pages SEO",
    "Perplexity 共有ページ",
    "検索AI コンテンツ作成",
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

export default function PerplexityPagesGuideRoute() {
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
          { name: "Perplexity Pages使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <PerplexityPagesGuidePage faqItems={[...faqItems]} />
    </>
  );
}

