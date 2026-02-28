import type { Metadata } from "next";
import LlmCostOptimizationGuidePage from "@/components/academyLanding/blog/llm-cost-optimization-guide/LlmCostOptimizationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "LLM APIコスト最適化ガイド｜トークン節約・モデル選定・キャッシュ設計【2026年版】 | AIリブート";
const pageDescription =
  "LLM APIの費用削減を、導入ROIの一般論ではなく運用実装に絞って解説。トークン節約、モデルルーティング、キャッシュ、監視指標を2026年2月時点で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/llm-cost-optimization-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:10:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "LLM APIのコストはどこから増えやすいですか？",
    answer:
      "主に入力トークン、出力トークン、不要な再実行の3点で増えます。まずリクエストログを分解し、どの処理が費用を押し上げているかを可視化するのが最初の一歩です。",
  },
  {
    question: "まず最初にやるべき節約施策は何ですか？",
    answer:
      "プロンプト短縮と出力長制限です。難しい設計変更を先に行うより、入力の重複削減と `max_tokens` の上限設定を先に実施すると早く効果を確認できます。",
  },
  {
    question: "高性能モデルと軽量モデルはどう使い分けますか？",
    answer:
      "タスク難易度で分岐します。分類や要約など定型処理は軽量モデル、判断が難しいケースのみ高性能モデルに回すルーティングが実務で再現しやすい運用です。",
  },
  {
    question: "キャッシュはどんなケースで有効ですか？",
    answer:
      "同じ入力が繰り返し発生するFAQ、テンプレ文生成、定期レポートで有効です。入力ハッシュをキーにして短時間キャッシュを置くだけでもAPI呼び出し回数を抑えられます。",
  },
  {
    question: "コスト最適化で品質を落とさないための基準はありますか？",
    answer:
      "品質指標を先に固定することが重要です。正答率、再編集率、ユーザー満足度のいずれかを基準にし、費用だけでなく成果指標も同時に監視してください。",
  },
  {
    question: "ChatGPT契約があればAPI費用は不要になりますか？",
    answer:
      "不要にはなりません。ChatGPTのサブスクリプションとOpenAI APIの課金は別管理です。運用設計ではUI利用コストとAPI利用コストを分けて予算化する必要があります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "LLM API コスト最適化",
    "ChatGPT API 費用削減",
    "トークン節約",
    "モデル選定",
    "LLM キャッシュ",
    "LLM 運用コスト",
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

export default function LlmCostOptimizationGuideRoute() {
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
          { name: "LLM APIコスト最適化ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <LlmCostOptimizationGuidePage faqItems={[...faqItems]} />
    </>
  );
}

