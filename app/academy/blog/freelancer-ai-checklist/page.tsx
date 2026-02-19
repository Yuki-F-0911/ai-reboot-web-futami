import type { Metadata } from "next";
import FreelancerAiChecklistPage from "@/components/academyLanding/blog/freelancer-ai-checklist/FreelancerAiChecklistPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "個人事業主・フリーランスのためのAI活用チェックリスト50｜今日からできること | AIリブート";
const pageDescription =
  "個人事業主・フリーランス・副業会社員向けに、AI活用の実行項目を50個に整理。営業・作業・経理・発信・学習の5カテゴリで、今日から始める順番と運用ルールを具体化した実践チェックリストです。";
const pageUrl = "https://ai-reboot.io/academy/blog/freelancer-ai-checklist";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T12:00:00+09:00";
const modifiedTime = "2026-02-19T12:00:00+09:00";

const faqItems = [
  {
    question: "個人事業主がAI活用を始めるとき、最初の1週間で何から着手すべきですか？",
    answer:
      "最初は営業と作業のチェック項目から着手し、提案書下書き・納品前レビュー・請求文面テンプレの3つを固定します。成果が見えやすく継続しやすい順番です。",
  },
  {
    question: "フリーランスの提案書にChatGPTを使うとき、差別化はどう作ればよいですか？",
    answer:
      "構成と初稿をAIで作り、相手業界の課題、成果指標、実行範囲を必ず人間が上書きします。汎用文のまま提出しないことが差別化の基本です。",
  },
  {
    question: "副業会社員がAIを使う際に、先に確認すべきルールは何ですか？",
    answer:
      "就業規則・機密情報の取り扱い・AI使用範囲の3点を先に明文化してください。業務委託先や勤務先のルールに反しない前提を作ることが最優先です。",
  },
  {
    question: "経理業務でAIを使うとき、どこまで自動化してよいですか？",
    answer:
      "請求文面、入金確認メモ、記帳前の下書き整理までは効率化しやすい領域です。税務申告や最終判断は人間が確認し、制度要件に沿って運用します。",
  },
  {
    question: "AI活用チェックリスト50項目は、どの頻度で見直すべきですか？",
    answer:
      "月1回の見直しを基本にし、受注率・納期遅延・回収遅れなどの指標が悪化したときは即時更新します。チェックリストは運用実績に合わせて更新する前提で管理してください。",
  },
  {
    question: "AIリブートアカデミーの学習は、AIスキル習得以外に何が得られますか？",
    answer:
      "生成AI活用力の習得に加えて、自己理解・キャリアデザインの整理、仲間との対話・協働を通じた継続学習まで含めて実務定着を支援しています。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "個人事業主 生成AI",
    "フリーランス AI チェックリスト",
    "個人事業主 ChatGPT 使い方",
    "ソロ AI 効率化",
    "副業 AI ツール",
    "フリーランス AI 活用",
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

export default function FreelancerAiChecklistRoute() {
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
          { name: "個人事業主・フリーランスのためのAI活用チェックリスト50", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <FreelancerAiChecklistPage faqItems={[...faqItems]} />
    </>
  );
}
