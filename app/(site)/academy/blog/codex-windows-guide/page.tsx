import type { Metadata } from "next";
import CodexWindowsGuidePage from "@/components/academyLanding/blog/codex-windows-guide/CodexWindowsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "Codex Windows版の使い方完全ガイド【2026年3月】インストール・機能・実務活用まで | AIリブート";
const pageDescription =
  "OpenAI Codex Windows版（2026年3月4日リリース）の使い方を解説。Microsoft Storeからのインストール手順、Automations・Skills・Worktrees機能、AGENTS.mdの書き方、Cursor・Copilotとの使い分けまで実務視点で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/codex-windows-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-06T09:00:00+09:00";
const modifiedTime = "2026-03-16T09:00:00+09:00";

const faqItems = [
  {
    question: "Codex Windows版はどのプランから使えますか？",
    answer:
      "ChatGPT Free（無料プラン）を含む全プランで利用できます。有料プラン（Plus・Pro・Business・Enterprise・Edu）では利用枠が大きくなります。OpenAI APIキーでのサインインにも対応しています。最新の提供条件は公式サイトをご確認ください（確認日: 2026-03-16）。",
  },
  {
    question: "Windows版のインストールにWSL（Windows Subsystem for Linux）は必要ですか？",
    answer:
      "不要です。Codex Windows版はPowerShellとWindowsネイティブサンドボックスで動作するため、WSLなしで使い始められます。必要であればWSL連携も設定できますが、標準的な用途ではWSL不要です。",
  },
  {
    question: "macOS版と機能的な違いはありますか？",
    answer:
      "主要機能（Automations・Skills・Worktrees）は同等です。Windows版はPowerShellとWindowsサンドボックスを使用する点がmacOS版（Apple Siliconサンドボックス）と異なります。サンドボックスのコードはGitHubでオープンソース公開されています。",
  },
  {
    question: "AGENTS.mdとは何ですか？どう書けばいいですか？",
    answer:
      "AGENTS.mdはCodexに対してプロジェクトのルールや技術スタックを伝えるためのマークダウンファイルです。プロジェクトのGitルートに置くと、Codexが作業前に自動で読み込みます。「使用技術スタック」「コーディング規約」「よく使うコマンド」「PR作成ルール」などを自然言語で記述するだけで精度が向上します。",
  },
  {
    question: "Automationsとはどのような機能ですか？",
    answer:
      "Automationsはスケジュール実行や条件トリガーで繰り返し作業をCodexに委任できる機能です。「毎朝テストを実行して結果をinboxに届ける」「新しいIssueがあれば対応案を生成する」といった定型業務を自動化できます。Skills（エージェント拡張）と組み合わせて使うと効果的です。",
  },
  {
    question: "CursorやGitHub Copilotと何が違うのですか？",
    answer:
      "Codexはデスクトップで複数AIエージェントを非同期並列実行できる点が特徴で、長時間タスクや繰り返し作業の自動化に向いています。CursorはIDE統合でリアルタイムに対話しながらコードを書く用途に強く、GitHub CopilotはVS Code等のエディタ内補完が主な強みです。3ツールを使い分けるのが2026年の実務標準になりつつあります。",
  },
  {
    question: "無料プランだと何ができますか？使用制限はありますか？",
    answer:
      "無料プランでもインストールと基本的なコーディングタスクの実行は可能です。並列エージェント数や月間利用枠には制限があります。具体的な上限は公式の料金ページをご確認ください（確認日: 2026-03-16）。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Codex Windows 使い方",
    "OpenAI Codex デスクトップ",
    "Codex アプリ Windows",
    "AIコーディング Windows",
    "AGENTS.md 書き方",
    "Codex インストール",
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
    publishedTime,
    modifiedTime,
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

export default function CodexWindowsGuideRoute() {
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
          { name: "Codex Windows版の使い方完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CodexWindowsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
