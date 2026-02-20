import type { Metadata } from "next";
import OpenaiOperatorGuidePage from "@/components/academyLanding/blog/openai-operator-guide/OpenaiOperatorGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "OpenAI Operator使い方ガイド｜Atlasとの違い・日本での始め方・安全な自動操作【2026】 | AIリブート";
const pageDescription =
  "OpenAI Operator（現agent mode）の使い方を2026年2月時点で整理。Atlasとの違い、日本での利用開始時期と料金、フォーム入力・予約・EC操作・データ収集の実例、制限サイトとセキュリティ設定、Anthropic/Google比較まで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/openai-operator-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T19:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Operatorは2026年2月時点で単体提供されていますか？",
    answer:
      "OpenAIのChatGPT agent FAQでは、operator.chatgpt.comの単体提供は終了し、agent modeへ統合された案内になっています。現在はChatGPT内のagent機能として使う前提です（確認日: 2026年2月20日）。",
  },
  {
    question: "日本ではOperatorを使うのにChatGPT Proが必須ですか？",
    answer:
      "当初のOperator研究プレビューはPro向けでしたが、その後のagent mode統合でPlus・Pro・Business等へ拡大しました。最新の対象プランは利用時点で公式FAQを確認してください。",
  },
  {
    question: "パスワードや決済情報はどう扱うべきですか？",
    answer:
      "ログイン、パスワード入力、決済操作はTake over modeで人が直接入力する運用が前提です。共有端末ではセッションを残さず、業務アカウントを分離して管理してください。",
  },
  {
    question: "どんなサイトでも完全自動化できますか？",
    answer:
      "すべてのサイトで同じ精度で動くわけではありません。OpenAI FAQでも一部サイトはアクセス制限され、メール・金融などは監視モードの対象とされています。重要操作は必ず人が最終確認してください。",
  },
  {
    question: "AtlasとOperatorはどう使い分けるべきですか？",
    answer:
      "Atlasはブラウザ体験そのものをAI化する製品で、Operator/agent modeはタスクを自動実行する機能です。情報収集中心ならAtlas、明確な作業手順の委任ならagent modeが合わせやすいです。",
  },
  {
    question: "Anthropic Computer Use・Google Marinerとの違いは？",
    answer:
      "OpenAI agent modeはChatGPT製品内で使う形、Anthropic Computer UseはAPI経由の実装前提、Google Marinerは米国中心の段階提供という違いがあります。運用主体（個人利用か開発組み込みか）で選ぶのが実務的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI Operator 使い方",
    "ChatGPT Operator ブラウザ自動化",
    "OpenAI エージェント",
    "ChatGPT Pro 自動操作",
    "Atlas Operator 違い",
    "AI ブラウザ 自動化",
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

export default function OpenaiOperatorGuideRoute() {
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
          { name: "OpenAI Operator使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OpenaiOperatorGuidePage faqItems={[...faqItems]} />
    </>
  );
}
