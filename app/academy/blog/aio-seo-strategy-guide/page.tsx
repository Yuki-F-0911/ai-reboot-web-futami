import type { Metadata } from "next";
import AioSeoStrategyGuidePage from "@/components/academyLanding/blog/aio-seo-strategy-guide/AioSeoStrategyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI Overviews時代のSEO完全ガイド｜「AIに引用される」コンテンツ設計チェック | AIリブート";
const pageDescription =
  "AI Overviews・Perplexity・ChatGPT Searchで引用されるためのAIO SEO実装ガイド。従来SEOとの違い、3行要約・比較表・FAQSchemaの設計、15項目チェックリストまで具体的に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/aio-seo-strategy-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "LLMOとGEOは同じ意味ですか？SEOとは何が違いますか？",
    answer:
      "どちらも生成AI検索で引用される情報設計を重視する考え方で、従来SEOの順位最適化を補完する位置づけです。SEOがページ全体評価に強いのに対し、LLMO/GEOは質問単位で再利用される情報ブロックの設計を重視します。",
  },
  {
    question: "AI Overviews対策は、まず何から着手するのが効率的ですか？",
    answer:
      "最初は既存記事に3行要約を追加し、各H2の先頭に結論1文を置く作業から始めるのが効率的です。その後に比較表とFAQを追加すると、引用されやすい構造へ短期間で改善できます。",
  },
  {
    question: "FAQSchemaを入れれば必ずAIに引用されますか？",
    answer:
      "いいえ。FAQSchemaは引用されやすい構造を補強しますが、本文の品質や根拠の明確さが不足している場合は効果が限定的です。本文とQ&Aを一致させ、更新時に差分を管理する運用が前提です。",
  },
  {
    question: "PerplexityやChatGPT Search向けに、robots設定はどう考えるべきですか？",
    answer:
      "クロール制御は許可/拒否を意図的に設計する必要があります。特にOAI-SearchBotやGPTBotの設定を誤ると、引用対象から外れる可能性があるため、robots.txtとメタ設定を定期監査してください。",
  },
  {
    question: "既存記事をAIO対応にリライトする場合、最短で効果が出る順番はありますか？",
    answer:
      "推奨順は「見出しの結論化」「冒頭3行要約」「比較表追加」「FAQ整備」「構造化データ整合確認」です。この順番だと、短時間で引用単位の情報が増え、改善効果を観測しやすくなります。",
  },
  {
    question: "AIO対応を進めると、従来SEOの順位改善は悪化しませんか？",
    answer:
      "適切に設計すれば悪化しません。むしろ見出しと要約が明確になるため、読者理解と滞在品質が上がり、従来SEOにもプラスに働くことが多いです。順位施策と引用施策を分断しない運用が重要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "LLMO GEO とは",
    "AI Overviews 対策",
    "AIO SEO",
    "AI検索 コンテンツ 最適化",
    "Perplexity SEO 対策",
    "AIに引用される コンテンツ設計",
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

export default function AioSeoStrategyGuideRoute() {
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
          { name: "AI Overviews時代のSEO完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AioSeoStrategyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
