import type { Metadata } from "next";
import GithubCopilotAgentHqGuidePage from "@/components/academyLanding/blog/github-copilot-agent-hq-guide/GithubCopilotAgentHqGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "GitHub Copilot Coding Agent使い方ガイド｜Issue→PR自動化とClaude Code使い分け【2026年版】 | AIリブート";
const pageDescription =
  "GitHub Copilotのcoding agent運用を2026年2月時点で解説。GitHub.comでの起動方法、Issue→PR自動化ワークフロー、Copilot Workspaceとの違い、権限設計、Claude Codeとの使い分けまで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/github-copilot-agent-hq-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T11:00:00+09:00";
const modifiedTime = "2026-02-20T18:00:00+09:00";

const faqItems = [
  {
    question: "GitHub Copilot coding agentはどこから起動できますか？",
    answer:
      "GitHub.comの対象リポジトリでIssueやPR画面を開き、Copilot関連の導線からagent実行を開始できます。機能の表示位置はプラン・組織設定・ロールアウト段階で変わるため、最新UIは公式ドキュメントを確認してください。詳細はGitHub公式サイトをご確認ください（確認日: 2026-02-21）。",
  },
  {
    question: "Copilot coding agentとCopilot Workspaceの違いは何ですか？",
    answer:
      "coding agentはIssue起点で実装とPR作成までをつなぐ実行系、Workspaceは提案内容を先に整理する計画系として使い分けると運用しやすくなります。",
  },
  {
    question: "IssueからPRまで本当に自動で進みますか？",
    answer:
      "可能ですが、対象リポジトリと権限設定が前提です。生成された差分は必ず人がレビューし、テスト結果を確認してからマージ判断する必要があります。",
  },
  {
    question: "Claudeなどモデルの利用可否はどう確認すればよいですか？",
    answer:
      "Copilotで使えるモデルは機能提供範囲や契約プラン、組織設定で変わります。記事内の情報は固定仕様ではないため、利用可能モデルは都度GitHub公式ドキュメントで確認してください。詳細はGitHub公式サイトをご確認ください（確認日: 2026-02-21）。",
  },
  {
    question: "セキュリティ上の最小設定は何ですか？",
    answer:
      "許可リポジトリを限定し、フォークや外部公開リポジトリを初期対象から外し、レビュー必須ルールをブランチ保護で固定するのが基本です。",
  },
  {
    question: "Claude Codeとどちらを先に導入すべきですか？",
    answer:
      "GitHub中心でIssue運用が整っている組織はCopilot coding agentから、ローカル開発とCLI自動化を重視する個人・小規模チームはClaude Codeから始めると導入が滑らかです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GitHub Copilot coding agent 使い方",
    "Copilot Agent",
    "Copilot モデル設定",
    "Issue PR 自動化",
    "AIコーディング 2026",
    "Copilot Workspace 比較",
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

export default function GithubCopilotAgentHqGuideRoute() {
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
          { name: "GitHub Copilot Coding Agent使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GithubCopilotAgentHqGuidePage faqItems={[...faqItems]} />
    </>
  );
}
