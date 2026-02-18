import type { Metadata } from "next";
import AiAgentDeploymentChecklistPage from "@/components/academyLanding/blog/ai-agent-deployment-checklist/AiAgentDeploymentChecklistPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方【2026年版】";
const pageDescription =
  "AIエージェントを安全に導入するためのチェックリスト。権限設計、ログ管理、承認フロー、セキュリティ対策を網羅。権限設計チェックリスト付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-agent-deployment-checklist";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "AIエージェントとチャットボットの違いは？",
    answer:
      "チャットボットは定型応答が中心ですが、AIエージェントは目標に基づいて自律的にタスクを実行できます。外部ツール連携やマルチステップ処理が可能です。",
  },
  {
    question: "AIエージェントに与えてよい権限の範囲は？",
    answer:
      "「読み取り」「作成」「更新」「削除」を業務ごとに最小権限で設計します。特に削除や外部送信は厳格な承認フローを設けます。",
  },
  {
    question: "ログは何を記録すべきですか？",
    answer:
      "入力内容、出力内容、使用ツール、実行時間、実行者、判断根拠の6項目が最小セットです。機密度に応じて保存期間を設定します。",
  },
  {
    question: "承認フローはどう設計しますか？",
    answer: "リスクレベル（低/中/高）に応じて自動承認/担当者承認/上長承認の3段階に分けるのが基本です。",
  },
  {
    question: "AIエージェントが誤った判断をした場合の対処は？",
    answer:
      "人間のレビューポイント（ヒューマンインザループ）を重要な判断の前に設置し、ロールバック手順を事前に準備します。",
  },
  {
    question: "セキュリティ上の最大のリスクは？",
    answer: "プロンプトインジェクション（悪意ある入力による操作乗っ取り）と、過剰な権限付与による意図しないデータアクセスです。",
  },
  {
    question: "小規模チームでもチェックリストは必要ですか？",
    answer:
      "規模に関わらず、エージェントが自律的に動く以上、最低限の権限設計とログ管理は必須です。事故後の対応コストの方が高くつきます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AIエージェント 導入", "AIエージェント セキュリティ", "AIエージェント 権限", "AIエージェント チェックリスト"],
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

export default function AiAgentDeploymentChecklistRoute() {
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
          { name: "AIエージェント導入チェックリスト", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAgentDeploymentChecklistPage faqItems={[...faqItems]} />
    </>
  );
}

