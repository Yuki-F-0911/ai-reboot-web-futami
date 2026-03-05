import type { Metadata } from "next";
import CodexWindowsGuidePage from "@/components/academyLanding/blog/codex-windows-guide/CodexWindowsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "Codex Windows版リリース実践ガイド｜Xの声から学ぶ導入・活用術【2026年3月】 | AIリブート";
const pageDescription =
  "2026年3月4〜5日リリースのOpenAI Codex Windows版を解説。PowerShellサンドボックス・並列エージェント・skills.md活用など、Xの実践者の声をもとにインストールから実務ワークフローまで整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/codex-windows-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-06T09:00:00+09:00";
const modifiedTime = "2026-03-06T09:00:00+09:00";

const faqItems = [
  {
    question: "Windows版はいつから使えますか？",
    answer:
      "2026年3月4〜5日にMicrosoft Storeで公開されました。「OpenAI.Codex」で検索するとインストールできます。ChatGPT Plus / Pro プランへの加入が必要です。",
  },
  {
    question: "ChatGPT PlusとProのどちらが必要ですか？",
    answer:
      "現時点ではChatGPT Plus（月額$20）以上のプランが必要です。Proプランではより高い利用枠が設定されています。最新の提供条件は公式サイトをご確認ください（確認日: 2026-03-06）。",
  },
  {
    question: "macOS版との違いは何ですか？",
    answer:
      "機能面での差異はほぼありません。Windows版はPowerShellサンドボックス上でネイティブ動作します。WSL（Windows Subsystem for Linux）は不要です。",
  },
  {
    question: "skills.mdはどうやって書きますか？",
    answer:
      "プロジェクトルートに skills.md ファイルを作成し、プロジェクトの技術スタック・コーディング規約・よく使うコマンドなどを自然言語で記述します。Codexが参照してタスク実行の精度が上がります。",
  },
  {
    question: "インストールでよくある失敗は？",
    answer:
      "WSL起動を試みた際に権限エラー（exit code=126）が発生するケースが報告されています。Windows版はWSL不要のため、PowerShell環境で直接使用してください。Microsoft Storeからのインストール後はOpenAIアカウントでサインインするだけで動作します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI Codex Windows版",
    "AIコーディング デスクトップ",
    "Codex 実践",
    "Codex インストール",
    "skills.md",
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
          { name: "Codex Windows版実践ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CodexWindowsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
