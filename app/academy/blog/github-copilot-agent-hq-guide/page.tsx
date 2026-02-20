import type { Metadata } from "next";
import GithubCopilotAgentHqGuidePage from "@/components/academyLanding/blog/github-copilot-agent-hq-guide/GithubCopilotAgentHqGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "GitHub Copilot Agent HQ使い方ガイド｜Issue→PR自動化とClaude Code使い分け【2026年版】 | AIリブート";
const pageDescription =
  "GitHub Copilot Agent HQの使い方を2026年2月時点で解説。Claude + Codex統合後の位置づけ、GitHub.comでの起動方法、Issue→PR自動化ワークフロー、Copilot Workspaceとの違い、権限設計、Claude Codeとの使い分けまで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/github-copilot-agent-hq-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T11:00:00+09:00";
const modifiedTime = "2026-02-20T18:00:00+09:00";

const faqItems = [
  {
    question: "GitHub Copilot Agent HQはどこから起動できますか？",
    answer:
      "GitHub.comの対象リポジトリでIssueやPR画面を開き、Copilot関連のアクションからAgent実行を開始できます。IDEを開かなくてもWeb上で起点を作れる点が特徴です。",
  },
  {
    question: "Copilot Agent HQとCopilot Workspaceの違いは何ですか？",
    answer:
      "Agent HQはIssue起点で実装とPR作成までをつなぐ実行系、Workspaceは提案内容を先に整理する計画系として使い分けると運用しやすくなります。",
  },
  {
    question: "IssueからPRまで本当に自動で進みますか？",
    answer:
      "可能ですが、対象リポジトリと権限設定が前提です。生成された差分は必ず人がレビューし、テスト結果を確認してからマージ判断する必要があります。",
  },
  {
    question: "Claude Copilot連携とは何を指しますか？",
    answer:
      "2026年2月時点では、Copilot体験内で利用可能なモデルと補助フローが広がり、Claude系とCodex系をタスク特性で選ぶ運用が実務で増えています。実際の利用可否は契約プランと組織設定で確認してください。",
  },
  {
    question: "セキュリティ上の最小設定は何ですか？",
    answer:
      "許可リポジトリを限定し、フォークや外部公開リポジトリを初期対象から外し、レビュー必須ルールをブランチ保護で固定するのが基本です。",
  },
  {
    question: "Claude Codeとどちらを先に導入すべきですか？",
    answer:
      "GitHub中心でIssue運用が整っている組織はAgent HQから、ローカル開発とCLI自動化を重視する個人・小規模チームはClaude Codeから始めると導入が滑らかです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GitHub Copilot Agent HQ 使い方",
    "Copilot Agent",
    "Claude Copilot連携",
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
          { name: "GitHub Copilot Agent HQ使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GithubCopilotAgentHqGuidePage faqItems={[...faqItems]} />
    </>
  );
}
