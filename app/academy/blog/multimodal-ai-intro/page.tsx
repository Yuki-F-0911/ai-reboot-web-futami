import type { Metadata } from "next";
import MultimodalAiIntroPage from "@/components/academyLanding/blog/multimodal-ai-intro/MultimodalAiIntroPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説 | AIリブート";
const pageDescription =
  "「マルチモーダルAI とは」「マルチモーダル AI 活用」を知りたい方向けに、定義、従来のAIとの違い、仕組み（テキスト/画像/音声の統合処理）、代表モデル（GPT-4o/Gemini 2.5 Pro/Claude Sonnet 4 など）、ビジネス活用シーン、始め方、注意点までをわかりやすく整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/multimodal-ai-intro";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T12:00:00+09:00";

const faqItems = [
  {
    question: "マルチモーダルAIとは何ですか？",
    answer:
      "マルチモーダルAIは、テキスト・画像・音声など複数の情報（モダリティ）を統合して理解・推論・生成するAIです。1種類の入力だけに限定せず、状況全体をまとめて扱える点が特徴です。",
  },
  {
    question: "画像認識AIと何が違いますか？",
    answer:
      "画像認識AIは画像の分類や検出など「画像だけ」を扱うことが中心ですが、マルチモーダルAIは画像とテキストを同時に扱い、画像の内容を文章で説明したり、指示文に沿って画像を分析したりできます。",
  },
  {
    question: "マルチモーダルAIはどんな業務で効果が出やすいですか？",
    answer:
      "問い合わせ対応（スクリーンショット/写真の状況説明）、製造・保全（不具合画像の一次診断）、営業/マーケ（資料・競合LPの要約）、会議（音声→議事録）など、複数の情報を行き来する業務で効果が出やすいです。",
  },
  {
    question: "無料で試すなら何から始めれば良いですか？",
    answer:
      "まずは手元の画像や音声を使い、説明文作成や要約など“出力が検証しやすい”タスクから始めます。次に、社内ルール（入力可否・確認ポイント）を決めて、限定業務で小さく運用します。",
  },
  {
    question: "注意すべきリスクはありますか？",
    answer:
      "個人情報/機密情報の扱い、誤認識や幻覚（もっともらしい誤り）、入力データの偏り、ログ管理、権限分離が主な論点です。運用ルールを先に決め、重要判断は人が確認する設計が安全です。",
  },
  {
    question: "導入時に必要なデータ整備はありますか？",
    answer:
      "画像や音声の品質（解像度、ノイズ、撮影条件）と、説明文/ラベルの整合性が精度に大きく影響します。評価用の例（正解データ）を用意し、どの条件で誤りが増えるかを先に把握すると導入が進めやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "マルチモーダルAI とは",
    "マルチモーダル AI 活用",
    "画像認識AI テキスト",
    "マルチモーダル AI 仕組み",
    "マルチモーダル AI モデル",
    "GPT-4o",
    "Gemini 2.5 Pro",
    "Claude Sonnet 4",
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

export default function MultimodalAiIntroRoute() {
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
          { name: "マルチモーダルAIとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <MultimodalAiIntroPage faqItems={[...faqItems]} />
    </>
  );
}
