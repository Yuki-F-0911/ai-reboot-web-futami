import type { Metadata } from "next";
import GptVsClaude2026Page from "@/components/academyLanding/blog/gpt-vs-claude-2026/GptVsClaude2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTとClaude比較 2026年版｜GPT-4o vs Claude Sonnet 4.6 / Opus 4.6の選び方 | AIリブート";
const pageDescription =
  "ChatGPTとClaudeを2026年2月基準で比較。GPT-4oとClaude Sonnet 4.6 / Opus 4.6の性能差、料金・無料プラン、コンテキスト窓、日本語運用、o3・o4-miniの使い分けを用途別に整理し、判断チャートで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-vs-claude-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:00:00+09:00";
const modifiedTime = "2026-02-21T09:00:00+09:00";

const faqItems = [
  {
    question: "ChatGPTとClaude、2026年に1つだけ選ぶならどっちですか？",
    answer:
      "標準業務の汎用性とコストのバランスで先に選ぶならGPT-4o、長大コンテキストと高難度推論を重視するならClaude Sonnet 4.6またはOpus 4.6が候補です。最終判断は同一タスクを1週間回した実測で決めるのが安全です。",
  },
  {
    question: "GPT-4oとClaude Sonnet 4.6 / Opus 4.6はコード生成でどちらが有利ですか？",
    answer:
      "反復実装の速度とコスト効率はGPT-4o、長時間の複雑タスクや大規模コードベースはClaude Opus 4.6が強みを出しやすい構図です。Claude Sonnet 4.6はOpusに近い品質をより低コストで狙えるため、まずSonnetで検証し、難案件だけOpusに上げる運用が現実的です。",
  },
  {
    question: "日本語の文章品質はどちらが高いですか？",
    answer:
      "用途で差が出ます。構造化された業務文書やJSON/表形式はGPT-4oが安定しやすく、長文推敲や文脈を跨ぐ整合性はClaude Sonnet 4.6/Opus 4.6が評価されやすい傾向があります。公開の同条件日本語ベンチが少ないため、実タスク比較が必要です。",
  },
  {
    question: "無料プランだけで実用になりますか？",
    answer:
      "学習用途や軽い試用なら無料プランで開始できますが、業務運用では上限到達が早く、モデル選択も制約されます。毎日使うなら有料プラン前提で、API利用量の見積もりまで行うほうが安定します。",
  },
  {
    question: "API利用ならどちらが安いですか？",
    answer:
      "2026-02-21時点の公開価格では、GPT-4oがinput $2.50/1M・output $10/1M、Claude Sonnet 4.6がinput $3/1M・output $15/1M、Claude Opus 4.6がinput $5/1M・output $25/1Mです。実コストは入出力比率で変わるため、業務ログで試算してください。",
  },
  {
    question: "o3やo4-miniはこの比較でどう位置づければよいですか？",
    answer:
      "o3は高難度推論、o4-miniは推論コストを抑えた高速反復向けです。標準運用の主軸をGPT-4oやClaude Sonnet 4.6で回し、難問だけo3へ、量を回す工程はo4-miniへ寄せると費用対効果を出しやすくなります。",
  },
  {
    question: "長文コンテキストを重視するならどちらを選ぶべきですか？",
    answer:
      "1Mコンテキストを必要とする大規模タスクなら、Claude Sonnet 4.6/Opus 4.6が有力です。GPT-4oは128Kで汎用性が高いため、通常業務はGPT-4o、超長文案件はClaude系に切り分ける運用が現実的です。",
  },
  {
    question: "チームで導入する際に最初に決めるべき運用ルールは何ですか？",
    answer:
      "プロンプトテンプレート、出力レビュー基準、入力データ分類、モデル切替条件（例: 標準=GPT-4o、難問=o3、長文=Sonnet/Opus）の4点を先に定義すると品質とコストが安定します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT Claude 比較 2026",
    "GPT-4o vs Claude Sonnet 4.6",
    "Claude Opus 4.6 比較",
    "ChatGPT Claude どっちがいい",
    "AI チャット 比較",
    "o3 o4-mini 使い分け",
    "Claude 料金",
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

export default function GptVsClaude2026Route() {
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
          { name: "ChatGPTとClaude比較 2026年版", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GptVsClaude2026Page faqItems={[...faqItems]} />
    </>
  );
}
