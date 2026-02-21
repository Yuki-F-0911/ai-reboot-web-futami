import type { Metadata } from "next";
import Gpt53GuidePage from "@/components/academyLanding/blog/gpt-5-3-guide/Gpt53GuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "OpenAI最新モデルの使い分けガイド【2026年2月版】 | AIリブート";
const pageDescription =
  "GPT-4o / GPT-4o mini / o3 / o4-mini / GPT-5.3-codex（Codex CLI専用）の使い分けを、文書・分析・コード・推論タスク別に整理。2026年2月21日時点でGPT-5.3は一般公開モデルとして存在しない点も明記します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-5-3-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:00:00+09:00";
const modifiedTime = "2026-02-21";

const faqItems = [
  {
    question: "GPT-5.3というモデルは2026年2月時点で使えますか？",
    answer:
      "2026年2月21日時点で「GPT-5.3」という一般公開モデル名は確認できません。利用対象として整理すべきなのはGPT-4o / GPT-4o mini / o3 / o4-miniと、Codex CLI専用のGPT-5.3-codexです。",
  },
  {
    question: "GPT-4oとGPT-4o miniはどう使い分けるべきですか？",
    answer:
      "品質重視の対話・要約・資料作成はGPT-4o、速度とコスト効率を重視する日常処理はGPT-4o miniが基本です。まず4o miniで下書きを作り、重要アウトプットだけ4oで仕上げる運用が実務では安定します。",
  },
  {
    question: "o3とo4-miniはどんなタスクに向いていますか？",
    answer:
      "判断根拠の明示や多段の推論が必要な課題はo3、推論の質と速度のバランスを取りたい日常業務はo4-miniが使いやすいです。意思決定や検証タスクを優先する場合は推論モデルを先に試すのが有効です。",
  },
  {
    question: "GPT-5.3-codexはどこで使うモデルですか？",
    answer:
      "GPT-5.3-codexはCodex CLIでのコード生成・修正・リファクタリング支援に特化したモデルです。一般的なChatGPTのモデル選択一覧で使う前提ではなく、開発ワークフロー側で利用を設計するのが基本です。",
  },
  {
    question: "Claude Opus 4.6との比較はどう考えるべきですか？",
    answer:
      "OpenAI側は4o系・o系・Codex系を用途で分離しやすく、Claude Opus 4.6は長文読解や一貫した文章生成で強みがあります。単純な優劣ではなく、業務単位で併用設計するほうが実運用では成果が出やすいです。",
  },
  {
    question: "導入時に最初に決めるべき運用ルールは何ですか？",
    answer:
      "モデル名ではなく業務カテゴリ（文書・分析・コード・推論）で選択ルールを決めることが重要です。加えて、品質レビューの責任者と再実行基準を先に決めると、モデル変更があっても運用が崩れにくくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI 最新モデル",
    "GPT-4o GPT-4o mini",
    "o3 o4-mini",
    "GPT-5.3-codex",
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
          { name: "OpenAI最新モデルの使い分けガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Gpt53GuidePage faqItems={[...faqItems]} />
    </>
  );
}
