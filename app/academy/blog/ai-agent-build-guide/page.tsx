import type { Metadata } from "next";
import AiAgentBuildGuidePage from "@/components/academyLanding/blog/ai-agent-build-guide/AiAgentBuildGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説 | AIリブート";
const pageDescription =
  "「AIエージェント 作り方」「AIエージェント 開発」「自律型AI 構築」で調べる方向けに、AIエージェントの基本構造（計画→実行→観察→修正）、開発5ステップ、主要フレームワーク比較、ノーコード実装、実務の活用例と注意点までをまとめた実装ガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-agent-build-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-17T09:00:00+09:00";

const faqItems = [
  {
    question: "AIエージェントを作るとき、最初に決めるべきことは何ですか？",
    answer:
      "最初に決めるべきは「目的（何を達成するか）」「成功条件（どう測るか）」「人が確認する境界（どこで止めるか）」の3つです。ここが曖昧だと、実装が進んでも運用に乗らず、改善サイクルが回りません。",
  },
  {
    question: "AIエージェントとRAG（検索拡張生成）は同じものですか？",
    answer:
      "別物です。RAGは「正しい情報を取りにいく仕組み」で、AIエージェントは「目標達成のために計画・実行・観察・修正を繰り返す仕組み」です。実務では、エージェントの情報取得手段としてRAGを組み合わせることが多いです。",
  },
  {
    question: "フレームワーク（LangChain/AutoGen/CrewAI等）は必須ですか？",
    answer:
      "必須ではありません。最初は「単機能のワークフロー＋ツール実行（関数呼び出し）」で十分なことも多いです。一方、複数役割の協調や状態管理、評価・再試行などが必要になると、フレームワークを使うメリットが出ます。",
  },
  {
    question: "ハルシネーション（誤り）を減らす実装上のコツはありますか？",
    answer:
      "重要な判断は「根拠（出典/ログ/数値）」の提出を必須にし、ツール実行前後の検証（バリデーション/整合性チェック）を入れるのが効果的です。また、最終出力に至る前にレビュー用の中間成果物を残す設計にすると、運用中の事故を減らせます。",
  },
  {
    question: "コスト管理はどう設計すればよいですか？",
    answer:
      "最初に「1タスクあたりの上限コスト」「最大再試行回数」「ツール実行の上限」を決め、ログで可視化します。長文入力や無制限の再試行はコストが膨らみやすいので、要約・キャッシュ・早期停止を組み込みます。",
  },
  {
    question: "本番運用で必要な監視項目は何ですか？",
    answer:
      "少なくとも「成功率」「人の介入率」「平均コスト」「失敗理由の内訳」「危険操作のブロック回数」を監視します。トラブル時に原因を追えるよう、プロンプト・ツール入力・ツール出力・判断結果を紐づけて保存する設計が重要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIエージェント 作り方",
    "AIエージェント 開発",
    "自律型AI 構築",
    "AIエージェント アーキテクチャ",
    "LangChain",
    "AutoGen",
    "CrewAI",
    "OpenAI Assistants API",
    "Dify",
    "Zapier AI",
    "GPTs",
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

export default function AiAgentBuildGuideRoute() {
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
          { name: "AIエージェントの作り方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAgentBuildGuidePage faqItems={[...faqItems]} />
    </>
  );
}

