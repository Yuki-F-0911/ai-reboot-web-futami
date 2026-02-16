import type { Metadata } from "next";
import CorporateAiTrainingPage from "@/components/academyLanding/blog/corporate-ai-training/CorporateAiTrainingPage";
import { ArticleStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "法人向けAI研修サービス｜社内定着・研修設計・導入相談 | AIリブートジャーナル";
const pageDescription =
  "「AI研修 法人向け」の比較検討向けに、研修形式の選び方、研修設計の要点、社内定着の進め方、法人プラン比較を整理した完全ガイド。";
const pageUrl = "https://ai-reboot.io/academy/blog/corporate-ai-training";
const publishedTime = "2026-02-16T09:00:00+09:00";
const modifiedTime = "2026-02-16T09:00:00+09:00";

const faqItems = [
  {
    question: "法人向けAI研修は何名から実施できますか？",
    answer:
      "多くの企業では10名前後から開始するケースが一般的ですが、導入初期は部門単位の小規模実施でも十分です。まずは対象業務を明確にして開始規模を決めるのが効果的です。",
  },
  {
    question: "オンラインと対面はどちらが効果的ですか？",
    answer:
      "基礎理解を短期間で広げるならオンライン、実務演習を重視するなら対面が有効です。多くの企業では、基礎をオンライン、実践を対面で行うハイブリッド型が定着しやすい傾向です。",
  },
  {
    question: "研修成果はどのように評価すべきですか？",
    answer:
      "受講満足度だけでなく、作業時間、再作業率、提案速度など業務KPIで評価することが重要です。研修前後で同じ指標を測ると効果を説明しやすくなります。",
  },
  {
    question: "補助金や助成金の活用は可能ですか？",
    answer:
      "制度要件に合致すれば活用できる可能性があります。対象条件や申請時期の確認が必要なため、導入計画と並行して早めに確認することをおすすめします。",
  },
  {
    question: "研修後に社内定着させるには何が必要ですか？",
    answer:
      "質問窓口、運用レビュー、テンプレート更新の3点をセットで設計すると定着率が上がります。単発研修より、一定期間の伴走支援を組み込むほうが実運用につながりやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI研修 法人向け",
    "法人向け AI研修",
    "企業 AI研修",
    "AI研修 社内定着",
    "AI研修 導入相談",
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
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function CorporateAiTrainingRoute() {
  return (
    <>
      <ArticleStructuredData
        title={pageTitle}
        description={pageDescription}
        url={pageUrl}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CorporateAiTrainingPage faqItems={[...faqItems]} />
    </>
  );
}
