import type { Metadata } from "next";
import GptVsClaudeComparisonPage from "@/components/academyLanding/blog/gpt-vs-claude-comparison/GptVsClaudeComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説【2026年版】 | AIリブート";
const pageDescription =
  "GPT-4とClaudeを文章/コード/分析/要約で比較し、用途別おすすめと併用のコツを整理。料金（無料/個人/API）の考え方も、迷いにくい比較軸で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-vs-claude-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "GPT-4とClaudeは結局どちらを選べばよいですか？",
    answer:
      "迷ったら、業務での汎用性と外部ツール連携を重視するならGPT-4系、長文の推敲・要約や丁寧な文体を重視するならClaudeから試すのが分かりやすいです。最終的には「あなたの用途（入力の長さ / 目的 / 制約）」で相性が決まるため、本記事の比較軸で検証するのが最短です。",
  },
  {
    question: "ChatGPTで選べるモデルと、APIのモデルは同じですか？",
    answer:
      "同じ名称でも、提供形態（ChatGPT / API）や選択できるモデル、機能（ツール呼び出し、ファイル扱いなど）が異なる場合があります。まずは「どのプロダクトで使うか」を決め、その上でモデルと機能を比較するのがおすすめです。",
  },
  {
    question: "コード生成はどちらが向いていますか？",
    answer:
      "どちらも得意ですが、実務では「要件の整理→設計→実装→テスト」の各段階で相性が分かれます。まずは同じ仕様書（短め）を渡し、出力の再現性、修正指示への追従、エッジケースの扱いを比較すると判断しやすくなります。",
  },
  {
    question: "長い資料を扱うならどちらがよいですか？",
    answer:
      "長文の扱いは、単純なトークン上限だけでなく、要約の一貫性、引用の正確さ、構造化（見出し・箇条書き・表）で差が出ます。長い資料は「章ごとに要約→統合→結論」の分割手順にすると、どちらでも品質が安定しやすいです。",
  },
  {
    question: "料金はどちらが安いですか？",
    answer:
      "個人向けは月額制（無料/有料）で、APIは入力・出力の量に応じた従量課金が基本です。料金体系は頻繁に更新されるため、最終判断は公式の最新情報で確認しつつ、実際の利用量（文字数・回数・チーム人数）で試算するのが確実です。",
  },
  {
    question: "両方使うのは無駄ですか？",
    answer:
      "無駄ではありません。実務では「アイデア発散→構造化→推敲」「実装→レビュー→リファクタ」のように工程が分かれるため、工程ごとに相性の良いモデルへ切り替えると成果が出やすいです。",
  },
  {
    question: "法人導入前に最小コストで比較する方法は？",
    answer:
      "同じ業務サンプル3件（文書作成・要約・コード修正など）を固定し、同一プロンプトでGPT系とClaudeを並走させます。品質だけでなく修正追従回数と1件あたり処理時間を記録すると、好みではなく運用コストで判断できます。",
  },
  {
    question: "併用する場合、どこで切り替えると効果が出ますか？",
    answer:
      "下書き・構造化はGPT系、最終推敲・トーン統一はClaudeのように工程で分けると再現性が上がります。実装タスクでも「実装はGPT系、レビューはClaude」と役割を固定すると、チーム内の引き継ぎが楽になります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GPT-4 Claude 性能比較",
    "ChatGPT Claude 違い 2026",
    "AIモデル 比較",
    "GPT-4 Claude 料金",
    "GPT-4 Claude 得意分野",
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

export default function GptVsClaudeComparisonRoute() {
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
          { name: "GPT-4とClaude徹底比較", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GptVsClaudeComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
