import type { Metadata } from "next";
import AiBusinessEfficiencyCasesPage from "@/components/academyLanding/blog/ai-business-efficiency-cases/AiBusinessEfficiencyCasesPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説 | AIリブート";
const pageDescription =
  "「AI 業務効率化 事例」「生成AI ビジネス 活用」をテーマに、営業・マーケティング・経理総務・カスタマーサポートでの一般的な活用パターンを整理。導入前の設計ポイントと失敗回避策も解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-business-efficiency-cases";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "AI業務効率化はどの部門から始めるべきですか？",
    answer:
      "一般的には、定型業務が多く、改善前後を比較しやすい業務から始めると進めやすい傾向があります。まずは小さな対象で運用手順を固めるのが現実的です。",
  },
  {
    question: "生成AIの導入に高額な初期投資は必要ですか？",
    answer:
      "必ずしも高額な初期投資は必要ではありません。既存業務を見直し、無料または低コストで試せる範囲から検証して、必要性に応じて拡張する進め方が一般的です。",
  },
  {
    question: "AIマーケティング活用で最初に取り組みやすい業務は何ですか？",
    answer:
      "一般的には、記事構成のたたき台作成、広告文案の複数案作成、レポート要約など、反復作業で一定の型がある業務が取り組みやすいとされています。",
  },
  {
    question: "AI営業活用は対面営業でも効果がありますか？",
    answer:
      "あります。商談準備、提案骨子の整理、議事録要約など、対面前後の準備と振り返り工程で活用しやすい傾向があります。顧客接点そのものを置き換えるのではなく、補助として使うのが基本です。",
  },
  {
    question: "導入効果はどのように測定すればよいですか？",
    answer:
      "作業時間、手戻り回数、対応件数、レビュー工数など、業務に合った指標を事前に決めて比較する方法が一般的です。指標は少数に絞ると判断しやすくなります。",
  },
  {
    question: "AI導入が現場に定着しない場合はどうすればよいですか？",
    answer:
      "利用ルールが曖昧なままだと定着しにくいため、対象業務、入力テンプレート、レビュー手順を明文化することが有効です。現場が使える運用単位に分けることが重要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 業務効率化 事例",
    "生成AI ビジネス 活用",
    "AI マーケティング 活用",
    "AI 営業 活用",
    "AI 導入 失敗 対策",
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

export default function AiBusinessEfficiencyCasesRoute() {
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
          { name: "AI業務効率化事例集", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiBusinessEfficiencyCasesPage faqItems={[...faqItems]} />
    </>
  );
}
