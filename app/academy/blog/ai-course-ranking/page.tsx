import type { Metadata } from "next";
import AiCourseRankingPage from "@/components/academyLanding/blog/ai-course-ranking/AiCourseRankingPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI講座ランキング2026｜選び方の基準と目的別おすすめを解説 | AIリブート";
const pageDescription =
  "AI講座を「目的適合」で比較したい方向けに、評価5軸と目的別の選び方、失敗パターン、補助金確認ポイントを整理。転職・副業・業務効率化のどれを優先すべきかが1枚でわかります。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-course-ranking";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "AI講座ランキングは何を基準に見ればよいですか？",
    answer:
      "カリキュラム充実度、実務接続性、サポート体制、コストパフォーマンス、受講者評価の5軸で比較すると、目的に合う講座を選びやすくなります。",
  },
  {
    question: "転職目的と業務効率化目的で選び方は変わりますか？",
    answer:
      "変わります。転職目的なら成果物作成とキャリア支援の強さを重視し、業務効率化目的なら現職に直結する課題設計と短期実装支援を優先すると失敗しにくくなります。",
  },
  {
    question: "補助金対応の講座を選ぶときの注意点はありますか？",
    answer:
      "対象条件、申請期限、受講前手続きの有無を必ず確認してください。後から申請できないケースがあるため、申込み前の要件確認が重要です。",
  },
  {
    question: "オンライン講座と通学講座はどちらがよいですか？",
    answer:
      "学習継続しやすい形式を選ぶことが最優先です。時間の自由度を重視するならオンライン、強制力と対面フィードバックを重視するなら通学が向いています。",
  },
  {
    question: "短期間で受講を終えれば成果は出ますか？",
    answer:
      "受講期間の短さだけでは成果は決まりません。実務への適用計画と復習時間を確保できる設計かどうかを確認することが重要です。",
  },
  {
    question: "AIリブートアカデミーはどんな人に向いていますか？",
    answer:
      "資格取得だけでなく、現場で使える運用までつなげたい方に向いています。講義の理解だけで終わらせず、実務への定着を重視したい場合に適しています。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI講座 ランキング",
    "AI講座 おすすめ",
    "AIスクール 選び方",
    "AI講座 比較基準",
    "AI講座 失敗しない選び方",
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

export default function AiCourseRankingRoute() {
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
          { name: "AI講座ランキング2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiCourseRankingPage faqItems={[...faqItems]} />
    </>
  );
}
