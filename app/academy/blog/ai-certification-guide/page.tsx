import type { Metadata } from "next";
import AiCertificationGuidePage from "@/components/academyLanding/blog/ai-certification-guide/AiCertificationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】 | AIリブート";
const pageDescription =
  "「AI資格 おすすめ」「AI資格 一覧」「AI資格 難易度」を1記事で比較。G検定・E資格・AI実装検定・DS検定・AWS/GCP・Python試験を目的別に整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-certification-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-16T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "AI資格は就職・転職に有利ですか？",
    answer:
      "資格単体で採用が決まるケースは限定的ですが、基礎知識の証明としては有効です。特にG検定などで知識を示し、業務での活用実績と組み合わせると評価されやすくなります。",
  },
  {
    question: "文系でもG検定に受かりますか？",
    answer:
      "はい。G検定はビジネス職・企画職にも受験者が多く、数学や実装力よりもAIの概念理解と活用リテラシーが重視されます。",
  },
  {
    question: "プログラミング未経験でも取れる資格は？",
    answer:
      "最初の1つならG検定やDS検定が現実的です。Python 3エンジニア認定データ分析試験も、学習時間を確保すれば未経験から挑戦しやすい資格です。",
  },
  {
    question: "資格とスクール、どちらを先に進めるべきですか？",
    answer:
      "目的次第です。転職で基礎知識を証明したい場合は資格先行、業務改善を急ぐ場合は実務型スクール先行が効率的です。並行して進める場合は、実務テーマを持って学ぶと定着しやすくなります。",
  },
  {
    question: "G検定の合格率は？",
    answer:
      "回ごとに変動します。JDLA公表値では、2026年第1回は受験者8,529名・合格者6,718名で、合格率は約78.8%でした。",
  },
  {
    question: "受験費用を抑える方法はありますか？",
    answer:
      "学生料金の適用、団体割引、社内研修予算の活用が代表的です。学習コスト全体を抑えたい場合は、補助金対象の講座や自治体制度もあわせて確認すると効果的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI資格 おすすめ",
    "AI資格 一覧",
    "AI資格 難易度",
    "G検定 E資格 違い",
    "AI資格 比較 2026",
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

export default function AiCertificationGuideRoute() {
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
          { name: "AI資格ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCertificationGuidePage faqItems={[...faqItems]} />
    </>
  );
}
