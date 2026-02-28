import type { Metadata } from "next";
import EnterpriseAiCostGovernance2026Page from "@/components/academyLanding/blog/enterprise-ai-cost-governance-2026/EnterpriseAiCostGovernance2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIのコストガバナンス完全ガイド2026：CFO・情シスが押さえるべきコスト最適化と予算設計";
const pageDescription =
  "企業の生成AI投資を可視化するコストガバナンスの手法を解説。API費用・ライセンス・人件費の実態と、ROI計測・コスト圧縮の具体策。稟議書のキーポイントも掲載。";
const pageUrl = "https://ai-reboot.io/academy/blog/enterprise-ai-cost-governance-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T22:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "生成AIのコストガバナンスは、何から始めればいいですか？",
    answer:
      "最初は「可視化」からです。部門別のAPI費用、ライセンス費用、人件費、運用保守費を一つの月次台帳にまとめ、誰がどの用途で使っているかを見える化します。可視化なしで削減施策を実行すると、必要な投資まで止まりやすくなります。",
  },
  {
    question: "生成AIの予算は、どの勘定で管理するべきですか？",
    answer:
      "実務では、SaaSライセンスは情報システム費、API従量課金はクラウド利用費、教育・運用改善は人材開発費に分けて管理する方式が再現性があります。月次の財務報告では「固定費」と「変動費」を分けると予実差異の説明がしやすくなります。",
  },
  {
    question: "API費用が急増する一番の原因は何ですか？",
    answer:
      "最も多いのは、利用上限と承認フローがないまま部署ごとに利用が拡大するケースです。対策として、モデル別単価の上限、月次クォータ、異常利用アラートを先に設定しておくと急増を抑えられます。",
  },
  {
    question: "ROIはどの単位で計測するべきですか？",
    answer:
      "全社一括ではなく、業務ユースケース単位で測るのが基本です。例えば「営業提案書作成」「CS一次回答」「議事録要約」などに分け、削減時間・品質改善・売上寄与をそれぞれ計測します。ユースケースごとのROIが分かると、投資継続/停止の判断が速くなります。",
  },
  {
    question: "コスト最適化をすると品質が下がりませんか？",
    answer:
      "コストだけをKPIにすると品質が落ちます。正答率、再編集率、差し戻し率を同時に監視し、品質閾値を下回る施策は停止する運用が必要です。最適化は「安くすること」ではなく「費用対効果を最大化すること」です。",
  },
  {
    question: "稟議で通りやすい資料にするコツはありますか？",
    answer:
      "稟議では、(1)現状コスト、(2)投資後の削減見込み、(3)回収期間、(4)リスク対策、(5)運用責任者を一枚にまとめると通りやすくなります。特に「やらない場合の機会損失」まで示すと意思決定が進みやすくなります。",
  },
  {
    question: "Azure OpenAI・Bedrock・Vertex AIは何で選ぶべきですか？",
    answer:
      "単価比較だけでなく、既存クラウド基盤との整合性、ガバナンス機能、監査ログ、データ所在ポリシーで選ぶべきです。既存基盤との親和性が高いほど、実装・監査コストを抑えられます。",
  },
  {
    question: "まず30日で実行すべき最小アクションは何ですか？",
    answer:
      "30日でやるべきは5つです。費用可視化、ユースケース棚卸し、利用上限設定、ROIテンプレ導入、月次レビュー体制の確立。ここまで整えると、翌月から費用増加と効果不足の両方を管理できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI コスト",
    "企業AI 予算",
    "AI ROI",
    "コストガバナンス 生成AI",
    "生成AI 投資 企業",
    "ChatGPT 企業 コスト",
    "Azure OpenAI コスト",
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

export default function EnterpriseAiCostGovernance2026Route() {
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
          { name: "生成AIコストガバナンス完全ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <EnterpriseAiCostGovernance2026Page faqItems={[...faqItems]} />
    </>
  );
}
