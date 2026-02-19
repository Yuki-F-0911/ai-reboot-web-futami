import type { Metadata } from "next";
import AiContentSnsGuidePage from "@/components/academyLanding/blog/ai-content-sns-guide/AiContentSnsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする | AIリブート";
const pageDescription =
  "コンテンツ制作に時間がかかる、ネタ切れになる悩みを解消する実践ガイド。ブログ構成・本文、X/Instagram/LinkedIn投稿、YouTube台本をAIで作る手順と、媒体別のコピペ可能プロンプトをまとめて解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-content-sns-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T15:00:00+09:00";
const modifiedTime = "2026-02-19T15:00:00+09:00";

const faqItems = [
  {
    question: "AIでブログを書くとき、最初に決めるべき項目は何ですか？",
    answer:
      "最初は「読者像」「検索意図」「記事の結論」「見出し構成」の4点を固定してください。これを先に決めると、AI生成文の方向がぶれにくくなります。",
  },
  {
    question: "SNS投稿をAIで作ると、どの媒体から始めるのが効率的ですか？",
    answer:
      "短文で試行しやすいXから始めると運用しやすいです。その後、同じ主張をInstagramは図解前提、LinkedInは業務知見前提に変換すると再利用効率が上がります。",
  },
  {
    question: "YouTube台本をAIで作るとき、冗長になるのを防ぐ方法はありますか？",
    answer:
      "冒頭30秒、本編、締めCTAを分割して指示し、各パートの文字数上限を設定すると冗長化を防げます。撮影前に声に出して読んでテンポを確認する運用も有効です。",
  },
  {
    question: "ネタ切れを防ぐために、AIへどんな入力を渡せば良いですか？",
    answer:
      "過去投稿の反応、顧客との会話メモ、最近の業務課題をセットで渡すと、現場に根ざした題材を生成しやすくなります。抽象キーワードだけの入力は避けてください。",
  },
  {
    question: "AI生成の文章品質を上げるチェック項目は何ですか？",
    answer:
      "固有名詞、数値、日付、対象読者との整合を優先して確認してください。さらに「主張と根拠が対応しているか」を見ると説得力が安定します。",
  },
  {
    question: "1人でブログ・SNS・動画を同時運用するとき、現実的な進め方はありますか？",
    answer:
      "週次でテーマを1つ決め、先に長文のブログを作ってからSNS短文とYouTube台本へ展開する順が効率的です。媒体ごとにゼロから作らない運用が継続の鍵です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI ブログ 書き方",
    "SNS AI 活用",
    "YouTube 台本 AI",
    "Instagram AI 投稿",
    "ブログ ChatGPT",
    "コンテンツ制作 AI 効率化",
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

export default function AiContentSnsGuideRoute() {
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
          { name: "AI×ブログ・SNS・YouTube台本の作り方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiContentSnsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
