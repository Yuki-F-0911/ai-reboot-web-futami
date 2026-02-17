import type { Metadata } from "next";
import AiForNonEngineersPage from "@/components/academyLanding/blog/ai-for-non-engineers/AiForNonEngineersPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "文系・非エンジニアのAI活用ガイド｜不安を解消して学び始める方法 | AIリブート";
const pageDescription =
  "「文系 AI 学び方」「非エンジニア AI 活用」をテーマに、AIが怖いと感じる理由を整理し、プログラミング不要で始める実践ステップを解説。誤解と事実もFAQ付きでまとめます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-for-non-engineers";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "文系・非エンジニアでもAIを仕事で使えますか？",
    answer:
      "使えます。一般的には、文章作成、情報整理、議事録要約、企画の下書きなど、日常業務に近い領域から活用を始めるケースが多く見られます。",
  },
  {
    question: "プログラミングができないとAI学習は難しいですか？",
    answer:
      "最初の段階では必須ではありません。ノーコードツールや対話型AIの活用で、業務改善に必要な基礎を先に身につける進め方が一般的です。",
  },
  {
    question: "AIを使うと仕事がなくなるのではと不安です。",
    answer:
      "一般的には、業務そのものが消えるより、作業手順や求められる役割が変化するケースが多いとされています。変化に合わせて活用スキルを持つことが重要です。",
  },
  {
    question: "AIの回答が間違っていた場合はどう対応すべきですか？",
    answer:
      "重要なのは、出力をそのまま使わず、根拠確認と最終判断を人が行うことです。情報源の確認手順を先に決めておくと運用しやすくなります。",
  },
  {
    question: "何から学べば挫折しにくいですか？",
    answer:
      "一般的には、日常業務で頻度が高い作業を1つ選び、プロンプト改善と検証を繰り返す方法が継続しやすい傾向があります。目的を限定するのがポイントです。",
  },
  {
    question: "AIに苦手意識がある場合でも学習を続けるコツはありますか？",
    answer:
      "小さな成功体験を積む設計が有効です。短時間で完了するタスクから始め、使い方をテンプレート化して再利用すると心理的負担を減らせます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "文系 AI 学び方",
    "非エンジニア AI 活用",
    "AI 怖い",
    "AI 不安 解消",
    "プログラミング不要 AI 学習",
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

export default function AiForNonEngineersRoute() {
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
          { name: "文系・非エンジニアのAI活用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiForNonEngineersPage faqItems={[...faqItems]} />
    </>
  );
}
