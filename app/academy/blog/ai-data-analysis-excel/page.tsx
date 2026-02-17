import type { Metadata } from "next";
import AiDataAnalysisExcelPage from "@/components/academyLanding/blog/ai-data-analysis-excel/AiDataAnalysisExcelPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIでExcelデータ分析を効率化する方法｜関数・グラフ・レポート作成まで | AIリブート";
const pageDescription =
  "AIでExcel分析を効率化する手順を、関数生成→整形→可視化→レポート作成まで解説。ChatGPT/Claudeのプロンプト例と検算のポイント、Copilot in Excelの使いどころもまとめます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-data-analysis-excel";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "AIで作ったExcel関数はそのまま使って大丈夫ですか？",
    answer:
      "そのまま貼り付けず、参照範囲・条件・戻り値が意図どおりかを必ず確認してください。サンプルデータで検算し、想定外の空白や型（文字列/数値）で崩れないかをチェックすると安全です。",
  },
  {
    question: "ChatGPTとClaudeはどちらがExcel分析に向いていますか？",
    answer:
      "どちらでも可能です。重要なのは、目的（集計/可視化/レポート）・前提（列名、期間、粒度）・出力形式（関数/手順/表）を明確にすることです。同じ入力で両方を試し、品質が安定する方を選ぶのが実務的です。",
  },
  {
    question: "機密データをAIに貼っても問題ありませんか？",
    answer:
      "社内規程と契約、利用するAIサービスの設定（学習利用の扱い、組織管理機能など）に依存します。原則は匿名化・集計値化・サンプル化し、個人情報や取引先情報を含む生データの貼り付けは避ける運用が安全です。",
  },
  {
    question: "Excelのどの工程が一番AIで速くなりますか？",
    answer:
      "関数作成、データ整形の手順化、グラフの提案、レポート文章の下書きが速くなりやすいです。逆に、元データの正しさ（欠損・重複・定義の揺れ）を整える作業は人の確認が欠かせません。",
  },
  {
    question: "ピボットテーブルもAIで作れますか？",
    answer:
      "ピボットテーブル自体の作成はExcel操作が必要ですが、AIに「目的と列構成」を伝えることで、配置（行/列/値/フィルター）や集計方法の設計案を作れます。結果は必ず手元の数値で検算してください。",
  },
  {
    question: "分析結果を上司向けに短くまとめるコツは？",
    answer:
      "結論→根拠（主要数値）→示唆→次アクションの順に固定すると伝わりやすくなります。AIには“1スライド相当”“箇条書き5行以内”など制約を先に渡すと、要約品質が安定します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI データ分析 Excel", "ChatGPT Excel 活用", "生成AI データ分析", "Excel 関数 生成AI", "Copilot in Excel"],
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

export default function AiDataAnalysisExcelRoute() {
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
          { name: "AIでExcelデータ分析を効率化する方法", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiDataAnalysisExcelPage faqItems={[...faqItems]} />
    </>
  );
}
