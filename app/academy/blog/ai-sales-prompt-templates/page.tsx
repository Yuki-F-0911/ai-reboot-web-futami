import type { Metadata } from "next";
import AiSalesPromptTemplatesPage from "@/components/academyLanding/blog/ai-sales-prompt-templates/AiSalesPromptTemplatesPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "営業の生成AIプロンプト20選｜提案書・メール・ヒアリング設計まで | AIリブート";
const pageDescription =
  "営業の生成AI活用を事前準備・提案書・メール・振り返りの4カテゴリで解説。提案書AI作成、営業メールAI生成、商談メモ要約まで、コピペで使える営業プロンプト20選と機密情報リスク対策をまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-sales-prompt-templates";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "営業初心者は20個のうちどれから使うべきですか？",
    answer:
      "まずは「商談前の企業研究」「ヒアリング項目設計」「商談後メモ要約」の3つから始めると効果が見えやすいです。準備と振り返りの時間が短くなり、提案精度も上げやすくなります。",
  },
  {
    question: "営業メールAI生成で不自然な文面になるときはどう直せばいいですか？",
    answer:
      "相手属性、目的、トーン、文字数、禁止表現を明示してください。特に「誰に」「何を」「いつまでに」を固定すると、テンプレ感の強い文面を避けやすくなります。",
  },
  {
    question: "提案書AI作成はどこまで任せていいですか？",
    answer:
      "構成案、初稿、要約までは任せやすい一方、顧客固有事情に基づく判断や最終メッセージは人が仕上げるのが安全です。意思決定に関わる箇所は必ずレビューしてください。",
  },
  {
    question: "商談メモ要約だけでも営業成果に影響はありますか？",
    answer:
      "影響があります。決定事項、未決事項、次アクションが即時に整理されるため、フォロー漏れと認識ズレを減らせます。結果として案件進行の停滞を防ぎやすくなります。",
  },
  {
    question: "ChatGPTに顧客情報を入れる場合の最低ルールは何ですか？",
    answer:
      "顧客名、個人情報、未公開金額、契約条件など特定可能情報は原則入力しないでください。必要な場合は匿名化し、利用中プランのデータ取り扱い方針と社内規程を先に確認することが前提です。",
  },
  {
    question: "営業チームでAI活用を定着させる最短手順はありますか？",
    answer:
      "頻出業務3つを決め、共通テンプレを作り、週次で改善ログを回す流れが実務的です。個人最適で終わらせず、レビュー観点をチームで共有すると再現性が上がります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 営業 活用",
    "営業 プロンプト テンプレ",
    "提案書 AI 作成",
    "営業メール AI 生成",
    "ChatGPT 営業 使い方",
    "営業 AI 活用 事例",
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

export default function AiSalesPromptTemplatesRoute() {
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
          { name: "営業の生成AIプロンプト20選", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSalesPromptTemplatesPage faqItems={[...faqItems]} />
    </>
  );
}
