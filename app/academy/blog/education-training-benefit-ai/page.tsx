import type { Metadata } from "next";
import EducationTrainingBenefitAiPage from "@/components/academyLanding/blog/education-training-benefit-ai/EducationTrainingBenefitAiPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方 | AIリブート";
const pageDescription =
  "「教育訓練給付金 AI講座」「AI講座 費用 相場」「AIスクール コスパ」を調べる方向けに、制度概要、リスキリング補助金との違い、実質負担の考え方を整理したガイドです。";
const pageUrl = "https://ai-reboot.io/academy/blog/education-training-benefit-ai";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "教育訓練給付金はAI講座でも使えますか？",
    answer:
      "制度対象の教育訓練として指定されている講座であれば活用できる可能性があります。対象講座かどうかは申込前に必ず確認してください。",
  },
  {
    question: "教育訓練給付金にはどのような種類がありますか？",
    answer:
      "一般教育訓練、特定一般教育訓練、専門実践教育訓練の3種類があります。要件や支援内容は区分ごとに異なります。",
  },
  {
    question: "給付率や上限額は固定ですか？",
    answer:
      "固定ではありません。制度改定や年度更新で変更される可能性があるため、最新の公的情報で確認することが重要です。",
  },
  {
    question: "リスキリング補助金との違いは何ですか？",
    answer:
      "教育訓練給付金は雇用保険制度に基づく個人向け制度として整理されることが多く、リスキリング補助金は別制度枠で提供されるケースがあります。申請主体と手続きが異なるため、制度を分けて確認してください。",
  },
  {
    question: "AI講座の費用相場はどう見ればよいですか？",
    answer:
      "価格だけでなく、学習期間、サポート範囲、成果物支援の有無まで含めて比較するのが実務的です。費用の安さだけで選ぶと、必要な支援が不足することがあります。",
  },
  {
    question: "コスパの良いAIスクールを選ぶ基準はありますか？",
    answer:
      "目的との一致、カリキュラムの実務接続性、質問・レビュー体制、受講後支援の4点を基準にすると判断しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "教育訓練給付金 AI講座",
    "AI講座 費用 相場",
    "AIスクール 安い",
    "AIスクール コスパ",
    "リスキリング補助金 違い",
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

export default function EducationTrainingBenefitAiRoute() {
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
          { name: "教育訓練給付金でAI講座を受講するガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <EducationTrainingBenefitAiPage faqItems={[...faqItems]} />
    </>
  );
}
