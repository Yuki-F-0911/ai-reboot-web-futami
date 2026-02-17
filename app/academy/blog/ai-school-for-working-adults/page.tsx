import type { Metadata } from "next";
import AiSchoolForWorkingAdultsPage from "@/components/academyLanding/blog/ai-school-for-working-adults/AiSchoolForWorkingAdultsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "社会人向けAIスクールの選び方ガイド｜失敗しない比較ポイントを解説 | AIリブート";
const pageDescription =
  "社会人向けAIスクールを比較する5基準（形式・カリキュラム・サポート・費用・修了後活用）を整理。オンライン/通学の違い、目的別の選び方、補助金・給付金の見分け方まで、失敗しないチェック順を解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-school-for-working-adults";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "社会人はオンライン講座と通学型のどちらが向いていますか？",
    answer:
      "仕事と両立しやすさを優先するならオンラインが選ばれやすく、学習習慣の強制力を重視するなら通学型が向いています。まずは平日の可処分時間と通学可能な距離を確認しましょう。",
  },
  {
    question: "未経験でもAIスクールに入れますか？",
    answer:
      "未経験から始められる講座は多くあります。重要なのは、入門前提のカリキュラムか、質問サポートや課題フィードバックがあるかを事前に確認することです。",
  },
  {
    question: "費用だけで選んでも問題ありませんか？",
    answer:
      "費用は重要ですが、学習目的に合わない講座だと結果的に遠回りになりやすいです。内容、サポート、修了後の活用まで含めて総合的に比較するのが安全です。",
  },
  {
    question: "転職目的なら何を重視すべきですか？",
    answer:
      "転職目的では、ポートフォリオ支援、キャリア相談、面接対策などの転職支援項目を重視するのが一般的です。募集要件と学習内容の接続も確認してください。",
  },
  {
    question: "補助金・給付金対象かどうかはどう見分けますか？",
    answer:
      "講座ページに制度名が明記されているか、対象条件と申請手順が説明されているかを確認します。最終的には運営窓口で最新条件を確認するのが確実です。",
  },
  {
    question: "修了後に学習が止まらないためのコツはありますか？",
    answer:
      "修了前から業務や副業で使うテーマを1つ決め、毎週の実践タスクに落とし込むと継続しやすくなります。卒業後コミュニティやメンター相談の有無も確認しておくと安心です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIスクール 社会人 おすすめ",
    "オンライン AI講座",
    "社会人 AI学習",
    "AIスクール 選び方",
    "AI講座 補助金",
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

export default function AiSchoolForWorkingAdultsRoute() {
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
          { name: "社会人向けAIスクールの選び方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSchoolForWorkingAdultsPage faqItems={[...faqItems]} />
    </>
  );
}
