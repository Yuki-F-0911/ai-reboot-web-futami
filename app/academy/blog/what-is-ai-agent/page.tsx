import type { Metadata } from "next";
import WhatIsAiAgentPage from "@/components/academyLanding/blog/what-is-ai-agent/WhatIsAiAgentPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIエージェントとは？2026年3月版の勢力図と実務活用ガイド | AIリブート";
const pageDescription =
  "2026年3月時点のAIエージェントを実務目線で解説。30秒要約、ReAct/Tool use/MemoryのAnswer Box、Operator・Atlas・Manus・Genspark・Claude Computer Use・Claude Codeの勢力図、用途別の使い分けと導入手順を整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/what-is-ai-agent";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-03-05T10:00:00+09:00";

const faqItems = [
  {
    question: "AIエージェントとチャットボットの違いは何ですか？",
    answer:
      "チャットボットは会話応答が中心ですが、AIエージェントは目標達成に向けて計画・実行・観測・修正を繰り返し、複数工程を前進させる点が違いです。",
  },
  {
    question: "2026年3月時点でどのAIエージェントを選べばよいですか？",
    answer:
      "用途で選ぶのが基本です。予約やフォーム入力はOperator、PC操作支援はAtlas/Computer Use系、コーディング自動化はClaude CodeやCopilot Agent系が実務で使い分けしやすいです。",
  },
  {
    question: "ReActループとは何ですか？",
    answer:
      "ReActループは、考える（Reason）と行動する（Act）を繰り返し、途中結果を見て次の行動を更新する仕組みです。長いタスクほどこの反復設計が重要になります。",
  },
  {
    question: "Tool useはなぜ重要ですか？",
    answer:
      "エージェントは会話だけでなく、外部ツールを実行して初めて業務結果を出せます。どのツールをどの権限で呼べるかを明確にしないと、安全に運用できません。",
  },
  {
    question: "メモリ機能はどこに効きますか？",
    answer:
      "過去の判断や設定を再利用できるため、同じ指示を毎回やり直す負荷を減らせます。一方で保持データの範囲設計が曖昧だと情報管理リスクが増えるため注意が必要です。",
  },
  {
    question: "OperatorとAtlasの違いは何ですか？",
    answer:
      "Operatorはブラウザ操作中心の自動化で使われやすく、AtlasはPC文脈での連続操作支援に強みが出るケースがあります。どちらも認証や例外処理の設計が前提です。",
  },
  {
    question: "Claude Computer UseとClaude Codeはどう使い分けますか？",
    answer:
      "Computer Useは画面操作系、Claude Codeは開発作業系に適しています。GUI作業の自動化とコード実装の自動化を分けると運用が安定します。",
  },
  {
    question: "OpenAI Operatorはどんな業務に向いていますか？",
    answer:
      "ブラウザ操作の再現が必要な業務に向いています。特に予約処理、フォーム入力、定型的なWeb操作の自動化で効果が出やすいです。",
  },
  {
    question: "AIエージェント導入で最初に決めるべきことは何ですか？",
    answer:
      "「対象業務」「成功条件」「人の確認ポイント」の3点です。ここが曖昧だと、途中で品質責任が崩れます。",
  },
  {
    question: "2026年時点での現実的な制限は何ですか？",
    answer:
      "ログイン認証や2FAで止まりやすいこと、長時間実行でミスが増えること、重要業務を単独運用するのはまだリスクが高いことです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIエージェント とは",
    "AIエージェント 2026",
    "AIエージェント 2026年3月",
    "ReAct Tool use Memory",
    "OpenAI Operator",
    "OpenAI Atlas",
    "Claude Computer Use",
    "Claude Code",
    "AIエージェント 使い分け",
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

export default function WhatIsAiAgentRoute() {
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
          { name: "AIエージェントとは？", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WhatIsAiAgentPage faqItems={[...faqItems]} />
    </>
  );
}
