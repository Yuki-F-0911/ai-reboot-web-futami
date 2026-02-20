import type { Metadata } from "next";
import AiTrainingSubsidyGuidePage from "@/components/academyLanding/blog/ai-training-subsidy-guide/AiTrainingSubsidyGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AI研修に助成金を使う手順｜対象条件・落とし穴・申請フロー完全版 | AIリブート";
const pageDescription =
  "社員向け生成AI研修で助成金を活用する企業向けに、人材開発支援助成金を中心とした申請5ステップと実務上の注意点を整理。年度改定に対応する確認手順、必要証憑の揃え方、不支給を避ける運用ポイント、窓口照会の進め方を解説し、申請準備の優先順位も示します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-training-subsidy-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "生成AI研修はすべて助成金の対象になりますか？",
    answer:
      "すべてが対象になるわけではありません。訓練区分、実施形式、対象経費、申請期限などの要件を満たす必要があり、制度・コースごとに判定されます。",
  },
  {
    question: "研修後にまとめて申請できますか？",
    answer:
      "人材開発支援助成金では事前の計画届提出が前提です。訓練開始後の申請は対象外になることがあるため、必ず開始前に手続きを進めてください。",
  },
  {
    question: "eラーニングやサブスク型講座も対象になりますか？",
    answer:
      "対象になるコースはありますが、LMSでの受講管理や受講回数など追加要件が設定されています。講座選定時に制度要件との整合確認が必要です。",
  },
  {
    question: "外部委託研修だけが対象で、社内研修は対象外ですか？",
    answer:
      "一律ではありません。コースごとに対象訓練の定義が異なり、社内実施でも対象になる場合があります。逆に外部委託や講師要件が求められる区分もあるため、要領確認が必要です。",
  },
  {
    question: "不支給になりやすい書類不備は何ですか？",
    answer:
      "計画届の期限超過、出欠・受講記録の不足、経費証憑の不整合、対象外経費の混在が典型です。申請前に書類の整合表を作ると防ぎやすくなります。",
  },
  {
    question: "最終的に誰へ相談すべきですか？",
    answer:
      "制度解釈や自社ケースの可否は、管轄労働局と社労士などの専門家へ確認するのが安全です。本記事は一般的な制度理解のための情報提供です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI研修 助成金 申請",
    "リスキリング 補助金 法人",
    "人材開発支援助成金 AI",
    "社員研修 補助金",
    "生成AI 研修 助成金 対象",
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

export default function AiTrainingSubsidyGuideRoute() {
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
          { name: "生成AI研修に助成金を使う手順", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiTrainingSubsidyGuidePage faqItems={[...faqItems]} />
    </>
  );
}
