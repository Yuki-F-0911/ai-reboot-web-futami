import type { Metadata } from "next";
import AiTrainingKpiPage from "@/components/academyLanding/blog/ai-training-kpi/AiTrainingKpiPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "研修が\"やりっぱなし\"で終わる理由｜KPI設計と現場タスク化のコツ【2026年版】";
const pageDescription =
  "AI研修が定着しない原因とKPI設計の方法を解説。研修後の現場タスク化、効果測定の仕組み、KPIシートテンプレート付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-training-kpi";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "研修のKPIはどう設計しますか？",
    answer:
      "「行動変容」を中心に設計します。研修直後の理解度テスト、1ヶ月後の業務適用率、3ヶ月後の生産性変化の3段階で測定するのが基本です。",
  },
  {
    question: "研修が定着しない一番の理由は？",
    answer:
      "研修後に「具体的に何をすべきか」が不明確なことです。30日以内のOJTタスクを事前に設計し、上長の巻き込みが定着の鍵です。",
  },
  {
    question: "効果測定はいつ行うべきですか？",
    answer:
      "研修直後（理解度）、1ヶ月後（行動変容）、3ヶ月後（成果・ROI）の3回が推奨です。",
  },
  {
    question: "上長の協力が得られない場合は？",
    answer:
      "上長向けの15分ブリーフィングを実施し、部下のKPIを上長の評価項目に組み込むのが効果的です。",
  },
  {
    question: "研修後のフォローアップはどうすべきですか？",
    answer:
      "月1回の勉強会、社内チャットでの質問チャネル、成功事例の共有会の3つを組み合わせます。",
  },
  {
    question: "小規模企業でKPI管理は必要ですか？",
    answer:
      "規模が小さくても最低限「研修後に何を実践するか」のOJTタスクと、月1回の振り返りは設定すべきです。",
  },
  {
    question: "研修の費用対効果はどう報告しますか？",
    answer:
      "作業時間削減額、エラー削減率、従業員満足度の3指標を経営層に四半期ごとに報告するフォーマットを用意します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI研修 KPI", "生成AI 研修 定着", "AI研修 効果測定", "研修 やりっぱなし"],
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

export default function AiTrainingKpiRoute() {
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
          { name: "研修KPI設計と定着", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTrainingKpiPage faqItems={[...faqItems]} />
    </>
  );
}

