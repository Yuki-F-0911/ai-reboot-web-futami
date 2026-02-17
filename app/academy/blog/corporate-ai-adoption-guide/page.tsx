import type { Metadata } from "next";
import CorporateAiAdoptionGuidePage from "@/components/academyLanding/blog/corporate-ai-adoption-guide/CorporateAiAdoptionGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート";
const pageDescription =
  "中小企業の生成AI導入を失敗しない順番で進める5段階ロードマップ。費用感（無料検証〜有料SaaS〜研修）、部門別の活用例、ガバナンス/セキュリティの要点をまとめ、稟議に使える形で整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/corporate-ai-adoption-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-16T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "中小企業は何人規模から生成AI導入を始めるべきですか？",
    answer:
      "まずは1部門2〜5名の小規模チームでPoCを行うのが現実的です。対象業務を1つに絞り、工数削減と品質の変化を測定してから展開範囲を広げると失敗しにくくなります。",
  },
  {
    question: "導入効果はどの指標で測ればよいですか？",
    answer:
      "代表的な指標は、作業時間、再作業率、提出までのリードタイムです。部門ごとに1〜3指標に絞ると、稟議や経営報告で説明しやすくなります。",
  },
  {
    question: "セキュリティ面で最初に決めるべきことは？",
    answer:
      "入力禁止情報、レビュー責任者、ログ管理の3点を最初に定義してください。特に顧客情報や機密情報の取り扱いルールは、導入前に明文化しておくことが重要です。",
  },
  {
    question: "無料ツールだけで本格導入は可能ですか？",
    answer:
      "初期検証は無料ツールでも可能ですが、運用段階では権限管理や監査ログが必要になるケースが多く、有料SaaSの検討が現実的です。",
  },
  {
    question: "導入前に研修は必要ですか？",
    answer:
      "定着率を高めるためには研修を併用するのが有効です。特に部門展開時は、操作説明よりも業務シナリオベースの研修を組み込むと成果につながりやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 導入 企業",
    "中小企業 生成AI 活用",
    "生成AI 導入ステップ",
    "企業 AI活用 事例",
    "生成AI 導入 費用",
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

export default function CorporateAiAdoptionGuideRoute() {
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
          { name: "企業AI導入ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <CorporateAiAdoptionGuidePage faqItems={[...faqItems]} />
    </>
  );
}
