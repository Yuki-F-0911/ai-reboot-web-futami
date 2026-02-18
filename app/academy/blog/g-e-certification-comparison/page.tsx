import type { Metadata } from "next";
import GECertificationComparisonPage from "@/components/academyLanding/blog/g-e-certification-comparison/GECertificationComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "G検定とE検定の違いを徹底比較｜難易度・費用・向いている人を解説 | AIリブート";
const pageDescription =
  "G検定とE検定の違いを、対象者・範囲・難易度・受験資格・費用・形式で比較。結論先出しで「どちらを先に取るべきか」まで整理し、学習計画の立て方もわかります。";
const pageUrl = "https://ai-reboot.io/academy/blog/g-e-certification-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "G検定とE検定の一番大きな違いは？",
    answer:
      "G検定はAIの仕組み・活用・倫理などを広く学ぶ「ビジネス寄りの基礎リテラシー」、E検定は深層学習の理論と設計理解を問う「エンジニア寄りの専門資格」という位置づけです。",
  },
  {
    question: "どっちが難しい？",
    answer:
      "一般にE検定のほうが難易度が高いです。G検定は概念理解・用語整理が中心になりやすい一方、E検定は理論理解や前提知識（数学・機械学習の基礎）が求められます。",
  },
  {
    question: "E検定の受験資格はありますか？",
    answer:
      "あります。E検定は原則としてJDLA認定プログラムの修了が必要です。最新要件は公式案内で確認してください。",
  },
  {
    question: "文系・非エンジニアでもG検定に受かりますか？",
    answer:
      "はい。G検定は非エンジニアの受験者も多く、暗記だけでなく「業務でどう使うか」の観点で理解すると合格しやすくなります。",
  },
  {
    question: "学習期間の目安は？",
    answer:
      "目安としてG検定は1〜2か月、E検定は3〜6か月（前提知識や経験によって変動）です。短期合格を狙う場合は、出題範囲の優先順位付けが重要です。",
  },
  {
    question: "結局どちらを先に取るべき？",
    answer:
      "非エンジニアやAIの全体像から入りたい人はG検定から、AIエンジニアとして理論を体系化したい人はE検定が近道です。迷う場合はG検定→E検定の順が学習コストを抑えやすいです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["G検定 E検定 違い", "AI資格 比較", "JDLA 検定", "G検定 難易度", "E検定 難易度", "AI資格 おすすめ"],
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

export default function GECertificationComparisonRoute() {
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
          { name: "G検定とE検定の違い", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GECertificationComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
