import type { Metadata } from "next";
import ReskillingOver40Page from "@/components/academyLanding/blog/reskilling-over-40/ReskillingOver40Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法 | AIリブート";
const pageDescription =
  "「40代 リスキリング」「50代 学び直し」「AI 独学 挫折」をテーマに、年代別の現実的な学習アプローチ、挫折回避のコツ、学習手段の比較までを整理した実践ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/reskilling-over-40";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T09:00:00+09:00";

const faqItems = [
  {
    question: "40代・50代からAIを学び始めても実務に活かせますか？",
    answer:
      "はい。これまでの業務経験とAI活用を組み合わせることで、業務改善や提案力強化につなげやすくなります。新しい職種だけでなく、現職で価値を高める学び方も有効です。",
  },
  {
    question: "40代と50代で学習の進め方は変えるべきですか？",
    answer:
      "目標に応じて調整するのが実践的です。40代はキャリア拡張を前提にした実装寄りの学習、50代は経験知の体系化と再現性を重視した学習が進めやすい傾向があります。",
  },
  {
    question: "AI独学で挫折しやすいのはなぜですか？",
    answer:
      "目的が曖昧なまま情報収集を続けてしまうこと、成果の確認機会がないこと、相談相手がいないことが主な要因です。小さな実務課題に結び付ける設計が重要です。",
  },
  {
    question: "仕事や家庭と両立しながら学ぶコツはありますか？",
    answer:
      "学習時間を長く取るより、生活リズムに合わせて継続できる単位に分けることが重要です。短い時間でも、入力と出力をセットで回すと定着しやすくなります。",
  },
  {
    question: "独学と講座受講はどちらが向いていますか？",
    answer:
      "費用を抑えて始めるなら独学、学習設計やフィードバックを重視するなら講座受講が向いています。自分の継続課題に合わせて選ぶのが失敗しにくい方法です。",
  },
  {
    question: "受講前に確認しておくべきポイントは何ですか？",
    answer:
      "学習目的、受講後に作る成果物、質問環境、学習サポートの範囲を先に確認してください。目的と支援内容が一致しているかを確認すると選びやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["40代 リスキリング", "50代 学び直し", "AI 独学 挫折", "AI 学習 継続", "ミドル世代 AI活用"],
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

export default function ReskillingOver40Route() {
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
          { name: "40代・50代からのAIリスキリング完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ReskillingOver40Page faqItems={[...faqItems]} />
    </>
  );
}
