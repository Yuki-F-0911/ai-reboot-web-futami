import type { Metadata } from "next";
import Gpt54MiniNanoGuidePage from "@/components/academyLanding/blog/gpt-5-4-mini-nano-guide/Gpt54MiniNanoGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "GPT-5.4 miniとnanoの違いとは？料金・性能・使い分けを比較【2026年3月】 | AIリブート";
const pageDescription =
  "OpenAIが2026年3月17日にリリースしたGPT-5.4 miniとGPT-5.4 nanoを比較解説。API料金、ベンチマーク、ChatGPT無料ユーザーでの使い方、Claude Haiku・Gemini Flashとの性能差、業務別の使い分け早見表をまとめます。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-5-4-mini-nano-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-18T09:00:00+09:00";
const modifiedTime = "2026-03-18T09:00:00+09:00";

const faqItems = [
  {
    question: "GPT-5.4 mini と GPT-5.4 nano の違いは何ですか？",
    answer:
      "miniは汎用軽量モデルで、コーディング・推論・マルチモーダル処理に対応しChatGPTでも使えます。nanoはAPIのみ提供の超高速・超低コストモデルで、分類・データ抽出・ランキングなど定型的な大量処理に特化しています。",
  },
  {
    question: "GPT-5.4 mini は無料で使えますか？",
    answer:
      "ChatGPTの無料プランでも「Thinking」モードを通じてGPT-5.4 miniが利用できます。ただし1回のメッセージ数には制限があります。API経由では入力100万トークンあたり$0.75（確認日: 2026-03-18）の従量課金です。",
  },
  {
    question: "GPT-5.4 nano はどこで使えますか？",
    answer:
      "GPT-5.4 nanoはAPIのみの提供です（確認日: 2026-03-18）。ChatGPT（Web・アプリ）では現時点で選択できません。OpenAI APIを通じた開発者・企業向けのモデルです。",
  },
  {
    question: "GPT-5.4 mini はフル版のGPT-5.4と比べてどのくらい性能が落ちますか？",
    answer:
      "コーディング（SWE-Bench Pro）では mini 54.4% vs フル版 57.7% と約3ポイントの差です。PC操作（OSWorld）は mini 72.1% vs フル版 75.0% でほぼ同等です。ただし長文処理（64K〜128Kトークン）では mini 47.7% vs フル版 86.0% と大きく差が開くため、長文が多い業務はフル版を検討してください。",
  },
  {
    question: "GPT-5.4 nano と Claude Haiku 4.5 はどちらが安いですか？",
    answer:
      "入力コストはGPT-5.4 nanoが$0.20/M tokens（mini: $0.75）に対し、Claude Haiku 4.5は$1.00/Mと約5倍の差があります（確認日: 2026-03-18、各社公式より）。ただし品質・マルチターン対話・日本語精度は用途によって異なります。",
  },
  {
    question: "GPT-5.4 mini はサブエージェントに使えますか？",
    answer:
      "はい。OpenAIも「コーディングアシスタント・リアルタイムマルチモーダル・サブエージェントへの委任」を主要ユースケースとして明示しています。コストと速度が重要なサブエージェントのタスク委任先として、nanoよりも精度が必要な場面ではminiが適しています。",
  },
  {
    question: "GPT-5.4 mini で長文ドキュメントを処理できますか？",
    answer:
      "コンテキスト窓は400Kトークンで長文の読み込み自体は可能です。ただし64K〜128Kを超える長さで複数の情報を追跡するタスク（MRCR v2）ではフル版GPT-5.4の86.0%に対してminiは47.7%と大きく下がります。大量の資料を横断する作業はフル版またはClaudeへの切り替えを検討してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GPT-5.4 mini 使い方",
    "GPT-5.4 nano 違い",
    "GPT-5.4 mini 無料",
    "軽量AI モデル 比較 2026",
    "GPT-5.4 mini nano 料金",
    "GPT-5.4 nano API",
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

export default function Gpt54MiniNanoGuideRoute() {
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
          { name: "GPT-5.4 miniとnanoの違いとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Gpt54MiniNanoGuidePage faqItems={[...faqItems]} />
    </>
  );
}
