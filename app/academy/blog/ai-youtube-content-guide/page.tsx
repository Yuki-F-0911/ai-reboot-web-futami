import type { Metadata } from "next";
import AiYoutubeContentGuidePage from "@/components/academyLanding/blog/ai-youtube-content-guide/AiYoutubeContentGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "YouTube AI動画制作ガイド2026｜企画・台本・編集・サムネを一気通貫で効率化 | AIリブート";
const pageDescription =
  "YouTube AI動画制作を、企画・台本・編集・サムネの全工程で整理。ChatGPT/Geminiの台本プロンプト設計、Descript・CapCut AI比較、Canva AI・Midjourney活用、YouTubeショート向けAI運用を確認日付きで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-youtube-content-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T19:30:00+09:00";

const faqItems = [
  {
    question: "YouTube AI動画制作は初心者でも始められますか？",
    answer:
      "始められます。まずは企画と台本をAIで作り、編集は1本あたりの作業時間を計測しながら最小フローを固定すると再現性が上がります。",
  },
  {
    question: "動画 台本 AI生成はChatGPTとGeminiのどちらが向いていますか？",
    answer:
      "どちらも有効です。結論はツールよりも、目的・視聴者・尺・禁則・CTAをテンプレ化してプロンプトに固定できるかで品質差が出ます。",
  },
  {
    question: "Descriptは2026年時点で日本語運用できますか？",
    answer:
      "確認日2026年2月20日時点で、文字起こし対応言語一覧には日本語が見当たりません。一方でDub speech機能は日本語を含む翻訳音声に対応しており、用途別に検証が必要です。",
  },
  {
    question: "CapCut AI無料版の制限は何ですか？",
    answer:
      "高解像度書き出しや一部AI機能は端末・OS・ロールアウト状況で利用可否が変わります。Pro無料トライアルも対象地域があり、詳細はアプリ内表示で確認するのが確実です。",
  },
  {
    question: "YouTubeショート AI活用で最初に見るべき指標は？",
    answer:
      "最優先は冒頭の視聴維持率です。次に完視聴率、保存率、クリック率を見て、冒頭3秒のフックと字幕の改善を繰り返してください。",
  },
  {
    question: "Creator Musicや自動吹替は日本でも使えますか？",
    answer:
      "Creator Musicは米国YPP中心で段階提供です。自動吹替は日本語を含む言語に対応していますが、公開前に言語ごとのレビュー設定を確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "YouTube AI 動画制作",
    "AI 動画編集 2026",
    "YouTubeショート AI",
    "動画 台本 AI生成",
    "Descript 料金 2026",
    "CapCut AI 無料版",
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

export default function AiYoutubeContentGuideRoute() {
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
          { name: "YouTube AI動画制作ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiYoutubeContentGuidePage faqItems={[...faqItems]} />
    </>
  );
}
