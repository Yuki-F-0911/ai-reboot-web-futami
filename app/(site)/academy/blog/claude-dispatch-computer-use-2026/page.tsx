import type { Metadata } from "next";
import ClaudeDispatchComputerUse2026Page from "@/components/academyLanding/blog/claude-dispatch-computer-use-2026/ClaudeDispatchComputerUse2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Claude Dispatch / Computer Use 2026まとめ｜Anthropic最新発表【2026年3月】 | AIリブート";
const pageDescription =
  "Claude Dispatch / Computer Useを軸に、Anthropicの2026年2〜3月の主要発表を整理。Computer Useの仕組み、Dispatchの使い方、Opus / Sonnet 4.6、1M context、Code Review、Interactive Visualizationsまで初心者向けに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/claude-dispatch-computer-use-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-24T09:00:00+09:00";
const modifiedTime = "2026-03-24T09:00:00+09:00";

const faqItems = [
  {
    question: "Claude Dispatchはいつ始まりましたか？",
    answer:
      "Claudeのrelease notesでは2026年3月17日にpersistent thread付きのDispatchが案内されています。Claudeの公式ブログでは2026年3月23日にComputer Useとの組み合わせが詳しく紹介されました。",
  },
  {
    question: "Claude Computer Useは何ができる機能ですか？",
    answer:
      "Claudeが画面を見ながら、クリック、スクロール、入力、アプリ操作を行う機能です。コネクタやAPIがないツールでも、GUIを通じてタスクを進められる点が特徴です。",
  },
  {
    question: "Computer Useはどのプランで使えますか？",
    answer:
      "2026年3月24日時点で、Claude DesktopのComputer UseはProとMax向けresearch previewです。macOSのみ対応で、Windowsはcoming soonと案内されています。",
  },
  {
    question: "DispatchとScheduled Tasksは何が違いますか？",
    answer:
      "Dispatchはスマホとデスクトップをまたぐ継続会話の受け渡しに強く、Scheduled Tasksは定期実行に向いています。外出中に指示を投げるならDispatch、毎朝・毎週の定型実行ならScheduled Tasksが使い分けやすいです。",
  },
  {
    question: "1M contextは2月発表時点で正式提供だったのですか？",
    answer:
      "いいえ。Sonnet 4.6発表時点では1M contextはbetaでした。正式な一般提供は2026年3月13日で、そのタイミングで長文プレミアム課金も廃止されています。",
  },
  {
    question: "Code Review for Claude Codeは誰向けですか？",
    answer:
      "2026年3月24日時点ではTeamとEnterprise向けresearch previewです。GitHub PRごとに複数エージェントが並列にレビューする設計で、深いレビューを自動化したい開発組織向けです。",
  },
  {
    question: "今すぐ仕事で導入するならどの業務から試すべきですか？",
    answer:
      "まずは機密性が低く、失敗しても戻しやすい業務から始めるのが安全です。例としては朝の情報収集、社内レポート下書き、ブラウザ調査、テスト実行、ファイル整理などが向いています。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Claude Dispatch",
    "Claude Computer Use",
    "Claude Computer Use Dispatch 2026",
    "Anthropic 最新発表",
    "Claude Code Code Review",
    "Claude 1M context",
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

export default function ClaudeDispatchComputerUse2026Route() {
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
          { name: "Claude Dispatch / Computer Use 2026まとめ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ClaudeDispatchComputerUse2026Page faqItems={[...faqItems]} />
    </>
  );
}
