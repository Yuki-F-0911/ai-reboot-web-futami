import type { Metadata } from "next";
import PerplexityAiGuidePage from "@/components/academyLanding/blog/perplexity-ai-guide/PerplexityAiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Perplexity AIの使い方完全ガイド2026｜ChatGPTとの違いと検索AIの活用法 | AIリブート";
const pageDescription =
  "Perplexity AIの使い方を、Google検索との違いを入口に初心者向けに解説。無料と有料の価値、ChatGPTとの役割分担、ハルシネーションを抑える引用確認手順、調査・比較・要約で使える実践プロンプトまで体系的にまとめて解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/perplexity-ai-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "Perplexity AIはGoogle検索と何が違いますか？",
    answer:
      "Google検索は関連ページを幅広く探す用途に強く、Perplexity AIは質問に対する要点整理と引用確認を同時に進める用途に向いています。探索段階ではGoogle、整理段階ではPerplexityを使い分けると効率が上がります。",
  },
  {
    question: "Perplexity AIは日本語でも使えますか？",
    answer:
      "日本語で質問・要約・比較は可能です。実務で使う場合は、日本語の固有名詞や業界用語が意図どおりに処理されているかを引用元で確認する運用が重要です。",
  },
  {
    question: "Perplexity AIの無料プランでどこまでできますか？",
    answer:
      "基本的な検索と要約の活用は無料プランでも始められます。ただし利用回数や高度機能には制限があるため、毎日継続して使う場合は有料プランの検討が現実的です。",
  },
  {
    question: "Perplexity AIの有料プランはどんな人に向いていますか？",
    answer:
      "調査件数が多い人、比較タスクを日常的に行う人、資料をまたいで精度高く要点整理したい人に向いています。価格や機能は更新されるため、公式プランページで最新情報を確認してください（※2026年2月時点）。",
  },
  {
    question: "PerplexityとChatGPTはどちらを使えばよいですか？",
    answer:
      "調査と根拠確認を優先するならPerplexity、文章作成や構成改善を重視するならChatGPTが向いています。実務では、Perplexityで調査してChatGPTで成果物化する併用パターンが再現性の高い運用です。",
  },
  {
    question: "Perplexity AIのプロンプトはどう作ると失敗しにくいですか？",
    answer:
      "「目的」「前提」「指示」「出力形式」を分けて書くと品質が安定します。さらに、引用元を明示する指示を入れることで、調査結果の検証をしやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Perplexity AI 使い方",
    "Perplexity AI 日本語",
    "Perplexity ChatGPT 違い",
    "検索AI 比較",
    "Perplexity 無料 有料",
    "検索AI 活用法",
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

export default function PerplexityAiGuideRoute() {
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
          { name: "Perplexity AIの使い方完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <PerplexityAiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
