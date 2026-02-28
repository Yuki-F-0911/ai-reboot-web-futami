import type { Metadata } from "next";
import AiStudyLearningGuidePage from "@/components/academyLanding/blog/ai-study-learning-guide/AiStudyLearningGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI×勉強・資格・語学学習完全ガイド｜ChatGPTで最短合格する方法 | AIリブート";
const pageDescription =
  "AI学習を続けるコツは、資格勉強・語学・業務スキルを別管理せず同じ学習ループで回すことです。問題生成、誤答分析、会話練習、週次レビュー、30日計画の更新まで、社会人が継続しやすい実行順を具体化しています。独学で止まりやすいポイントの回避策も併記します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-study-learning-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "AIを使った勉強は、独学の挫折対策になりますか？",
    answer:
      "はい。AIで学習計画を小さな単位に分解し、毎日の振り返りまで仕組み化すると、独学で止まりやすいポイントを減らせます。特に社会人は、短時間学習の継続設計が効果的です。",
  },
  {
    question: "資格勉強でAIを使う場合、最初にやるべきことは何ですか？",
    answer:
      "最初は、試験範囲を単元ごとに分解して問題演習に使うことです。AIでミニ問題集を作り、正答率と誤答理由を記録すると、弱点の優先順位が明確になります。",
  },
  {
    question: "語学学習でAIはどこまで実用的ですか？",
    answer:
      "会話練習、表現の言い換え、発音改善の観点では実用性が高いです。対話の場数を増やせるため、学習初期のアウトプット不足を補いやすくなります。",
  },
  {
    question: "ChatGPTのプロンプトは長いほど効果がありますか？",
    answer:
      "長さよりも構造が重要です。目的、前提、出力形式、評価基準を先に固定すると短文でも精度が安定します。最初はテンプレを使い、不足条件を追記する運用が現実的です。",
  },
  {
    question: "AI学習計画はどのくらいの期間で作るのがよいですか？",
    answer:
      "初回は30日単位が扱いやすいです。週ごとにテーマと確認指標を置き、週末に振り返る設計にすると、仕事と並行しながらでも調整しやすくなります。",
  },
  {
    question: "AIリブートアカデミーはどんな人に向いていますか？",
    answer:
      "AI活用力を実務で定着させたい方、自己理解とキャリア設計を同時に進めたい方、仲間との対話で学習を加速させたい方に向いています。独学で継続が難しい人ほど相性がよいです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI 勉強 活用", "ChatGPT 勉強法", "AI 語学 学習", "生成AI 資格勉強", "AI 問題集 作成"],
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

export default function AiStudyLearningGuideRoute() {
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
          { name: "AI×勉強・資格・語学学習完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiStudyLearningGuidePage faqItems={[...faqItems]} />
    </>
  );
}
