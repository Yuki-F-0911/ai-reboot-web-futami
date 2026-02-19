import type { Metadata } from "next";
import GoogleAiStudioGuidePage from "@/components/academyLanding/blog/google-ai-studio-guide/GoogleAiStudioGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Google AI Studio使い方完全ガイド｜Geminiモデルをすぐ試せるAI開発環境 | AIリブート";
const pageDescription =
  "Google AI Studioとは何か、GeminiアプリやChatGPTとの違い、無料で始める10ステップ、プロンプトテスト・画像入力・会話テストの実務的な使い方までを非エンジニア向けに整理した入門ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/google-ai-studio-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "Google AI Studioとは何ですか？",
    answer:
      "Google AI Studioは、Geminiモデルをブラウザ上で試し、プロンプト検証やAPIキー発行、コード生成まで行える開発向けワークスペースです。日常用途の会話アプリではなく、AI機能を実装する前段の検証に向いています。",
  },
  {
    question: "Google AI Studioは無料で使えますか？",
    answer:
      "公式のGemini APIドキュメントではFree tierとPaid tierが案内されており、Google AI Studioは無料で試せる設計です。ただし、AI Studio内で有料APIキーを紐づけて利用する場合は課金対象になり得るため、最新条件を必ず確認してください（確認日: 2026-02-19）。",
  },
  {
    question: "Google AI Studioは日本語で使えますか？",
    answer:
      "日本語のプロンプト入力と日本語応答は実運用で問題なく使えるケースが多いです。UIの一部は英語表記ですが、実務で使うテキスト生成・要約・比較は日本語で運用できます。",
  },
  {
    question: "GeminiアプリとGoogle AI Studioの違いは何ですか？",
    answer:
      "Geminiアプリは日常利用向けの対話サービスで、Google AI Studioは開発・検証向けツールです。AI Studioではモデル選択、プロンプトの再現テスト、APIキー発行、コード取得など実装寄りの作業ができます。",
  },
  {
    question: "非エンジニアでもGoogle AI Studioを使えますか？",
    answer:
      "プロンプト検証や画像入力テスト、会話設計までは非エンジニアでも十分可能です。一方で、社内ツール連携や本番アプリ化にはAPI・認証・ログ管理の理解が必要になるため、段階的に学ぶのが安全です。",
  },
  {
    question: "Google AI Studioの次に学ぶべきことは何ですか？",
    answer:
      "入門段階で操作に慣れたら、App Build機能で簡易アプリ化まで進むのが効果的です。UIとロジックの分離、ユーザー入力設計、出力の品質評価を実践すると、業務導入の再現性が上がります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Google AI Studio 使い方",
    "Google AI Studio とは",
    "Gemini API 始め方",
    "Google AI Studio 無料",
    "Google AI Studio 日本語",
    "Gemini モデル テスト",
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

export default function GoogleAiStudioGuideRoute() {
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
          { name: "Google AI Studio使い方完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GoogleAiStudioGuidePage faqItems={[...faqItems]} />
    </>
  );
}
