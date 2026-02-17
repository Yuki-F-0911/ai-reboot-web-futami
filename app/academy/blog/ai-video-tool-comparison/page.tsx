import type { Metadata } from "next";
import AiVideoToolComparisonPage from "@/components/academyLanding/blog/ai-video-tool-comparison/AiVideoToolComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI動画生成ツールおすすめ比較｜用途別の選び方と始め方 | AIリブート";
const pageDescription =
  "主要AI動画生成ツール（Sora/Runway/Pika/Kling/Veo/Luma等）を用途別に比較。ショート動画・プロモ・教育など目的別の選び方、無料で試す手順、著作権/商用利用/品質管理の注意点を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-video-tool-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "AI動画生成ツールは無料で使えますか？",
    answer:
      "多くのツールは無料枠やトライアルがありますが、生成回数・解像度・透かしなどに制限があることが一般的です。料金や提供範囲は頻繁に更新されるため、最新の条件は公式情報で確認してください。",
  },
  {
    question: "テキストから動画、画像から動画、動画編集AIは何が違いますか？",
    answer:
      "テキスト→動画は脚本や指示文から映像を生成し、画像→動画は静止画を動かして映像化します。動画編集AIは、既存素材のカット編集・字幕・要約・ショート化などの後工程を自動化するのが得意です。",
  },
  {
    question: "SNS向けのショート動画なら何を選ぶべきですか？",
    answer:
      "「短尺を量産したい」なら編集AI（自動カット、字幕、縦型化）の比重が高い構成が効率的です。生成AIは素材（カット・背景・B-roll）づくりに使い、最後は編集AIで仕上げると品質が安定しやすいです。",
  },
  {
    question: "商用利用で気をつけるべきポイントは？",
    answer:
      "ツールごとの利用規約（商用可否・クレジット・禁止事項）に加え、第三者の著作権・商標・肖像権、音源やフォントの権利に注意してください。クライアントワークではルールを文書化して運用するのが安全です。",
  },
  {
    question: "業務で使うときの品質管理はどうすればよいですか？",
    answer:
      "目的に対する合格ライン（尺、画質、音声、テロップ、誤情報、ブランド表現）をチェックリスト化し、人の最終確認を前提に運用します。生成物の版管理（元素材・プロンプト・規約）もセットで整えると事故が減ります。",
  },
  {
    question: "初心者が最初に試す順番は？",
    answer:
      "まずは無料枠のあるツールで短尺（5〜10秒）から試し、次に「用途に必要な機能」（縦型、字幕、BGM、商用利用条件）で候補を絞るのが失敗しにくい順番です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 動画生成 おすすめ",
    "AI動画 ツール 比較",
    "動画生成AI",
    "テキストから動画",
    "画像から動画",
    "AI動画編集",
    "Sora",
    "Runway",
    "Pika",
    "Kling",
    "Veo",
    "Luma Dream Machine",
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

export default function AiVideoToolComparisonRoute() {
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
          { name: "AI動画生成ツール比較", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiVideoToolComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
