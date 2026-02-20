import type { Metadata } from "next";
import AiPmToolsGuidePage from "@/components/academyLanding/blog/ai-pm-tools-guide/AiPmToolsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIプロジェクト管理ツール比較2026｜Asana AI・Linear・Notion・Jira | AIリブート";
const pageDescription =
  "AI搭載PMツールを2026年基準で比較。Asana AI・Linear・Notion Projects・Jira AIの対応プラン、価格、強み、導入判断軸を法人向けに整理し、定着率を上げる運用設計まで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-pm-tools-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AIプロジェクト管理ツールは結局どれを選べばいいですか？",
    answer:
      "最初に「何を自動化したいか」を決めて選ぶのが確実です。開発チームの課題振り分け重視ならLinear、部門横断の運用と可視化重視ならAsanaやJira、ドキュメント一体運用重視ならNotion Projectsが選びやすいです。",
  },
  {
    question: "Asana AIとJira AIの違いは何ですか？",
    answer:
      "Asana AIはステータス要約やリスクレポートなど業務整理の支援が中心で、Jira AIは課題要約・関連課題探索・依存関係把握など開発フローでの情報探索支援が強みです。どちらもAIクレジットやプラン条件を確認して運用設計する必要があります。",
  },
  {
    question: "Linear AIは非エンジニア部門でも使えますか？",
    answer:
      "利用自体は可能ですが、情報モデルが開発ワークフロー寄りです。非エンジニア部門が主利用なら、Linearを開発専用にし、全社管理はAsanaやNotionと分担する構成が定着しやすいです。",
  },
  {
    question: "Notion ProjectsはPM専用ツールの代替になりますか？",
    answer:
      "要件次第です。ドキュメントとプロジェクト情報を一体管理する用途では有効ですが、高度なワークフロー制御や開発トラッキングが必要なら専用PMツールとの併用が現実的です。",
  },
  {
    question: "AIの進捗予測やリスク検出はどこまで信用できますか？",
    answer:
      "一次判断には有効ですが、最終判断は人が行う前提が必要です。特に依存関係・優先度変更・対外影響が大きい案件は、AI出力をレビュー会議で検証する運用をセットにしてください。",
  },
  {
    question: "導入後にチーム定着率を上げるには何から始めるべきですか？",
    answer:
      "機能説明より先に、会議・進捗報告・優先順位会議の運用フローにAI機能を埋め込むことが重要です。30日間で対象業務を限定し、利用率・再編集率・遅延検知率を追うと定着しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI プロジェクト管理 ツール",
    "Asana AI 2026",
    "Linear AI",
    "Jira AI 活用",
    "PM ツール 比較",
    "Notion Projects AI",
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

export default function AiPmToolsGuideRoute() {
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
          { name: "AIプロジェクト管理ツール比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPmToolsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
