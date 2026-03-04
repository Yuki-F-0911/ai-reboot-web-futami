import type { Metadata } from "next";
import ClaudeCodeBeginnersGuidePage from "@/components/academyLanding/blog/claude-code-beginners-guide/ClaudeCodeBeginnersGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Claude Code完全入門【2026年】インストールから最初のVibe Codingまで｜Cursor・Copilotとの違いも解説 | AIリブート";
const pageDescription =
  "Claude CodeをインストールしてVibe Codingを始めるまでの全手順を解説。GitHub Copilot・Cursorとの「補完 vs 自律実行」の違い、CLAUDE.mdの設定、最初の5タスク、失敗しないためのコスト管理まで。2026年最新版の完全ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-code-beginners-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:00:00+09:00";
const modifiedTime = "2026-03-04";

const faqItems = [
  {
    question: "Claude Codeはプログラミング初心者でも使えますか？",
    answer:
      "ある程度のコマンドライン操作（ターミナルでコマンドを入力できる）があれば使い始められます。完全な未経験者より、基本的なファイル操作やgitを知っている人の方がスムーズに進められます。コード未経験の場合は、まずCursorやv0などUIベースのツールから始めるのがおすすめです。",
  },
  {
    question: "Claude CodeはどのAIモデルで動いていますか？",
    answer:
      "2026年2月時点で、Claude CodeはClaude Opus 4.6をベースモデルとして動作しています。Anthropicのプランによって利用可能なモデルや上限が異なります。最新モデル情報はAnthropic公式ドキュメントを確認してください。",
  },
  {
    question: "Claude CodeとCursorはどちらを選べばよいですか？",
    answer:
      "エディタのGUI上でコードを確認しながら進めたい・既存プロジェクトへの組み込みが目的ならCursor、ターミナル中心で高速にコマンドを回したい・CLIワークフローに慣れているならClaude Codeが向いています。Vibe Codingの入口としてはCursorが始めやすく、Claude Codeは実務での自動化に強みがあります。",
  },
  {
    question: "Claude CodeとGitHub Copilotは何が違いますか？",
    answer:
      "GitHub CopilotはIDEに統合されたリアルタイム補完ツールで、コードを書く際の自動提案に特化しています。Claude Codeは自然言語での指示に基づいてファイル操作・テスト実行・コミットまで一連の作業を自律的に実行するエージェント型ツールです。補完か自律実行かで役割が異なります。",
  },
  {
    question: "Claude CodeでVibe Codingは実現できますか？",
    answer:
      "はい。「〇〇機能を追加して」「このバグを直して」など自然言語で指示するだけで、Claude Codeがファイルの読み書き・テスト実行・修正を繰り返す流れがVibe Codingの典型的な使い方です。ただし意図しないファイル変更リスクに備え、gitのバージョン管理と定期的な差分確認は必須です。",
  },
  {
    question: "Claude Codeの料金はいくらですか？",
    answer:
      "2026年2月時点で、Claude Code利用にはAnthropicのProプラン（$20/月）またはMax 5xプラン（$100/月）・Max 20xプラン（$200/月）が必要です。利用量に応じてプランを選択します。詳細はAnthropic公式サイトの最新料金ページを確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Code 入門",
    "Claude Code 使い方",
    "Claude Code 始め方",
    "AIコーディング 初心者",
    "Vibe Coding Claude Code",
    "Claude Code GitHub Copilot 比較",
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

export default function ClaudeCodeBeginnersGuideRoute() {
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
          { name: "Claude Code入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeCodeBeginnersGuidePage faqItems={[...faqItems]} />
    </>
  );
}
