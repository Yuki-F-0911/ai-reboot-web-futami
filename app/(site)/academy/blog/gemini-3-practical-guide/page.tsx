import type { Metadata } from "next";
import Gemini3PracticalGuidePage from "@/components/academyLanding/blog/gemini-3-practical-guide/Gemini3PracticalGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Gemini 3.1 Proの使い方実務ガイド｜3.0との違い・料金・Workspace連携・GPT-5.2比較 | AIリブート";
const pageDescription =
  "Gemini 3.1 Proを2026年最新情報で解説。3.0 Proとの機能差・価格差、Google Workspace連携（Gmail/Docs/Drive）の現状、音声/画像/動画のマルチモーダル対応範囲、ChatGPT GPT-5.2との実務での使い分けを公式情報ベースで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gemini-3-practical-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T11:00:00+09:00";
const modifiedTime = "2026-02-20T11:00:00+09:00";

const faqItems = [
  {
    question: "Gemini 3.1 Proは3.0 Proから必ず乗り換えるべきですか？",
    answer:
      "必ずではありません。公式情報では3.1 Proは推論品質と効率改善が示されていますが、API単価は3.0 Proと同水準です。既存プロンプトで品質改善が出るかを先にA/B検証し、差が出た場合に段階移行するのが実務的です。",
  },
  {
    question: "Gemini 3.1 Proと3.0 Proの料金は違いますか？",
    answer:
      "Gemini API公式料金ページでは、3.1 Proと3.0 ProのInput/Output/Cached Input単価は同額として記載されています（確認日: 2026-02-20）。ただし今後変更される可能性があるため、契約前に必ず公式ページを確認してください。",
  },
  {
    question: "Gemini 3.1 ProはGoogle Workspaceとどう連携しますか？",
    answer:
      "Google Workspace管理者ヘルプには、Gmailのメール下書き支援、Docsの文章生成・リライト、Driveファイル要約などの機能が整理されています。実際の利用範囲は管理者設定、エディション、地域条件で変わるため、社内管理者との確認が前提です。",
  },
  {
    question: "Gemini 3.1 Proで音声出力や動画生成までできますか？",
    answer:
      "Gemini 3.1 Proのモデルカードでは、音声・動画は入力として扱えますが、出力はテキスト中心で音声生成やLive APIは未サポートです（確認日: 2026-02-20）。音声生成はGemini 2.5 TTS系、動画生成はVeo系モデルが公式導線です。",
  },
  {
    question: "ChatGPT GPT-5.2との使い分けはどう決めればいいですか？",
    answer:
      "Google Workspace中心の運用やGemini API連携を優先するならGemini 3.1 Pro、既存のOpenAIエコシステムやGPT系ワークフローを重視するならGPT-5.2が適します。最初に同一タスクで比較し、修正回数とレビュー工数で判断するのが確実です。",
  },
  {
    question: "個人と法人で導入時に最初に決めるべきルールは何ですか？",
    answer:
      "個人は「用途を3つに絞る」「出力検証ルールを決める」「週次レビューを固定する」の3点、法人は「データ分類」「承認フロー」「ログと権限管理」を先に決めるのが基本です。モデル選定より先に運用ルールを明文化すると定着しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Gemini 3.1 使い方",
    "Gemini 3.0 違い",
    "Google Gemini Pro 2026",
    "Gemini 実務活用",
    "Gemini GPT-5.2 比較",
    "Gemini Workspace 連携",
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

export default function Gemini3PracticalGuideRoute() {
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
          { name: "Gemini 3.1 Proの使い方実務ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Gemini3PracticalGuidePage faqItems={[...faqItems]} />
    </>
  );
}
