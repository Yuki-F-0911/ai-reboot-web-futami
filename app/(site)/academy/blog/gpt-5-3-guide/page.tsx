import type { Metadata } from "next";
import Gpt53GuidePage from "@/components/academyLanding/blog/gpt-5-3-guide/Gpt53GuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "GPT-5.3とは？ChatGPTの最新モデルの違い・使い方・無料で使えるか【2026年2月】 | AIリブート";
const pageDescription =
  "OpenAIのGPT-5系最新モデル（GPT-5.2・GPT-5.3-codex）の違いをわかりやすく解説。「どれを使えばいい？」に答える用途別の選び方、Claude Opus 4.6との比較、無料・有料プランの差を2026年2月時点でまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-5-3-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:00:00+09:00";
const modifiedTime = "2026-02-21";

const faqItems = [
  {
    question: "GPT-5.2のstandardとthinkingはどう使い分けますか？",
    answer:
      "日常の文書作成や短い往復が中心ならstandard、前提整理や判断根拠の明確化まで必要なタスクはthinkingが向いています。まずstandardで試し、品質不足時だけthinkingへ上げる運用が現実的です。",
  },
  {
    question: "extended thinkingは必ず使えますか？",
    answer:
      "extended thinking相当の段階は、プランやUIの提供状況によって利用可否や表記が変わる可能性があります。運用前にOpenAIのモデルセレクターとヘルプ更新日を確認してください。",
  },
  {
    question: "GPT-5.3-codexはどこで使うモデルですか？",
    answer:
      "GPT-5.3-codexはCodex CLIでのコード生成・修正・リファクタリング支援に特化したモデルです。一般チャットの主力としてではなく、開発ワークフロー専用として分離運用する前提で使います。",
  },
  {
    question: "GPT-5.2とClaude Opus 4.6はどう比較すべきですか？",
    answer:
      "GPT-5.2はstandardとthinkingを同一運用の中で切り替えやすい点が強みです。Claude Opus 4.6は長文の一貫性や深い検討で比較対象になりやすいため、同一タスクで実測比較して選定するのが安全です。",
  },
  {
    question: "導入時に最初に決めるべき運用ルールは何ですか？",
    answer:
      "まず業務カテゴリごとに初期モデルを固定し、標準はGPT-5.2 standard、品質要件が高い案件はGPT-5.2 thinking、コード変更はGPT-5.3-codexという昇格ルールを定義します。確認日付きで運用ルールを残すことも重要です。",
  },
  {
    question: "この記事の情報はいつ時点のものですか？",
    answer:
      "本記事は2026年2月21日時点の公開情報を前提に整理しています。モデル名称・提供範囲・上限は変わり得るため、実運用時は必ず最新ヘルプの更新日とUI表示を確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GPT-5.2 使い方",
    "GPT-5.2 thinking",
    "GPT-5.2 standard",
    "GPT-5.3-codex",
    "Codex CLI",
    "モデル使い分け",
    "Claude Opus 4.6 比較",
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

export default function Gpt53GuideRoute() {
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
          { name: "GPT-5.3使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Gpt53GuidePage faqItems={[...faqItems]} />
    </>
  );
}
