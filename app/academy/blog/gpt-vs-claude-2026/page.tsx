import type { Metadata } from "next";
import GptVsClaude2026Page from "@/components/academyLanding/blog/gpt-vs-claude-2026/GptVsClaude2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTとClaude比較 2026年版｜GPT-5.2 vs Claude 3.7の選び方 | AIリブート";
const pageDescription =
  "ChatGPTとClaudeを2026年基準で比較。GPT-5.2とClaude 3.7 Sonnetの性能差、料金・無料プラン、コンテキスト窓、日本語の使い勝手を用途別に整理し、どちらを選ぶべきか判断チャートで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-vs-claude-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T18:00:00+09:00";

const faqItems = [
  {
    question: "ChatGPTとClaude、2026年に1つだけ選ぶならどっちですか？",
    answer:
      "文章とコードを幅広く回し、API単価も重視するならGPT-5.2を選びやすいです。長文の執筆支援や丁寧な日本語推敲を中心に使うならClaude 3.7 Sonnetが合う場面があります。最終判断は同一タスクで1週間比較すると精度が上がります。",
  },
  {
    question: "GPT-5.2とClaude 3.7 Sonnetはコード生成でどちらが有利ですか？",
    answer:
      "公開ベンチではGPT-5.2の数値が高く出る指標がありますが、計測条件が異なるため単純比較はできません。実務では、同じ仕様書・同じテスト観点で出力再現性と修正追従を比較するのが確実です。",
  },
  {
    question: "日本語の文章品質はどちらが高いですか？",
    answer:
      "用途で差が出ます。構造化された業務文書や表形式の出力はGPT-5.2が扱いやすい場面があり、自然な文体の推敲や長文の読みやすさはClaude 3.7 Sonnetが好まれるケースがあります。公開の同条件日本語ベンチが少ないため、実タスク比較が必要です。",
  },
  {
    question: "無料プランだけで実用になりますか？",
    answer:
      "学習用途やライト利用なら無料プランで始められます。ただし利用上限やモデル選択の制約があるため、毎日業務で使う段階では有料プランを検討したほうが運用は安定します。",
  },
  {
    question: "API利用ならどちらが安いですか？",
    answer:
      "2026-02-20時点の公開価格では、代表値でGPT-5.2はinput $1.25/1M・output $10/1M、Claude 3.7 Sonnetはinput $3/1M・output $15/1Mです。実コストは入出力比率で変わるため、業務ログで試算する必要があります。",
  },
  {
    question: "乗り換えと併用はどちらが現実的ですか？",
    answer:
      "多くの個人ユーザーには、完全乗り換えより工程分業での併用が現実的です。たとえば下書きとコードはChatGPT、最終推敲はClaudeのように役割を分けると、精度と速度を両立しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT Claude 比較 2026",
    "GPT-5.2 vs Claude 3.7",
    "ChatGPT Claude どっちがいい",
    "AI チャット 比較",
    "ChatGPT 料金",
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
