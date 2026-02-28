import type { Metadata } from "next";
import AiRealEstateGuidePage from "@/components/academyLanding/blog/ai-real-estate-guide/AiRealEstateGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI不動産活用ガイド2026｜査定・物件探し・業務効率化・投資分析 | AIリブート";
const pageDescription =
  "AI不動産活用を2026年時点で整理。AI査定サービスの使い方、物件マッチング、不動産会社の業務効率化、投資リサーチでのエリア分析・家賃相場予測、精度限界と補正ポイントまで実務目線で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-real-estate-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:00:00+09:00";
const modifiedTime = "2026-02-20T21:00:00+09:00";

const faqItems = [
  {
    question: "AI査定は訪問査定の代わりになりますか？",
    answer:
      "代替ではなく、相場感をつかむ入口として使うのが実務的です。最終価格は、室内状態やリフォーム履歴、接道条件など現地要素を加味した訪問査定で補正する必要があります。",
  },
  {
    question: "SUUMOとHOME'Sの査定サービスはどう使い分ければよいですか？",
    answer:
      "SUUMOは複数社への一括査定で市場感を取り、HOME'Sプライスマップは地図ベースで周辺価格を短時間で把握する用途が向いています。目的に応じて併用すると判断精度が上がります。",
  },
  {
    question: "AI査定の誤差が大きくなりやすい物件はどんな条件ですか？",
    answer:
      "取引事例が少ない立地、個別性の高い間取り、築古や再建築不可など制約の強い物件は誤差が広がりやすい傾向があります。近隣事例の更新頻度も確認が必要です。",
  },
  {
    question: "不動産会社は最初にどの業務からAI導入すべきですか？",
    answer:
      "最初は定型作業の多い査定書作成、物件説明文作成、一次問い合わせ対応から始めると効果が測りやすいです。面談品質など高判断領域は人が主導する設計が現実的です。",
  },
  {
    question: "AIで家賃相場を予測するとき、最低限確認すべきデータは何ですか？",
    answer:
      "直近成約賃料、空室率、人口動態、駅距離、災害リスク、再開発計画の6点は最低限確認したい指標です。単一指標ではなく、複数データの重ね合わせが必要です。",
  },
  {
    question: "AI活用を続けても成果が出ないとき、何を見直すべきですか？",
    answer:
      "ツール選定より先に、どの業務指標を改善したいかを明確にすることが重要です。入力データ品質、評価基準、担当者の運用ルールを揃えると改善しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 不動産 活用",
    "不動産 AI 査定 2026",
    "物件探し AI",
    "不動産 業務効率化 AI",
    "不動産投資 AI 分析",
    "家賃相場 予測 AI",
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

export default function AiRealEstateGuideRoute() {
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
          { name: "AI不動産活用ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiRealEstateGuidePage faqItems={[...faqItems]} />
    </>
  );
}

