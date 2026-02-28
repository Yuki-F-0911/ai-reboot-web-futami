import type { Metadata } from "next";
import AiJobHuntingGuidePage from "@/components/academyLanding/blog/ai-job-hunting-guide/AiJobHuntingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI×転職完全ガイド｜職務経歴書・面接対策・企業研究の実践テクニック | AIリブート";
const pageDescription =
  "転職活動でAIを使うなら、職務経歴書・企業研究・面接対策を分断せずに設計するのが近道です。応募書類の下書きから企業比較、想定Q&Aの改善、面接で評価される伝え方まで、3フェーズで再利用できる実務手順を解説します。在職中でも回せる時短設計と注意点も示します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-job-hunting-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T18:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "転職活動でAIはどのフェーズから使うのが効果的ですか？",
    answer:
      "最初は職務経歴書の棚卸しから使うのが効果的です。自分の経験を構造化できると、企業研究や面接対策にも同じ情報を再利用できるため、転職準備の全体効率が上がります。",
  },
  {
    question: "ChatGPTで職務経歴書を作るときに最初に入力すべき情報は何ですか？",
    answer:
      "担当業務、成果、使用ツール、改善したプロセスの4点です。特に成果は「売上」「工数」「品質」など数値で示せると、採用側が評価しやすい内容になります。",
  },
  {
    question: "AIで作った職務経歴書はそのまま提出して問題ありませんか？",
    answer:
      "そのまま提出するのは推奨されません。事実確認、表現の調整、応募企業向けのカスタマイズが必要です。AIは下書き作成と構造化に使い、最終版は自分の言葉で整えるのが安全です。",
  },
  {
    question: "AIを使った企業研究では何を比較すると面接に強くなりますか？",
    answer:
      "事業モデル、収益源、競合との違い、直近の採用方針の4点を比較すると面接での回答精度が上がります。比較結果を志望動機に接続すると、準備の深さが伝わります。",
  },
  {
    question: "面接の想定Q&Aはどのように作れば実践的になりますか？",
    answer:
      "応募職種の求人票、職務経歴書、企業研究メモをAIに渡して質問を生成させると実践的になります。深掘り質問と逆質問も同時に作ると、面接本番での対応力が高まります。",
  },
  {
    question: "AI活用経験を転職先にアピールするには何を伝えるべきですか？",
    answer:
      "使用ツール名より、課題・実行手順・成果の順で伝えることが重要です。『何時間削減したか』『どの品質指標が改善したか』など、再現可能な実績として示すと評価につながります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "転職 AI 活用",
    "ChatGPT 職務経歴書",
    "AI 面接 対策",
    "AI 企業研究",
    "転職活動 生成AI",
    "AI活用 転職準備",
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

export default function AiJobHuntingGuideRoute() {
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
          { name: "AI×転職完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiJobHuntingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
