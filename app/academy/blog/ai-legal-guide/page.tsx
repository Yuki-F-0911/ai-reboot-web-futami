import type { Metadata } from "next";
import AiLegalGuidePage from "@/components/academyLanding/blog/ai-legal-guide/AiLegalGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "法務の生成AI活用ガイド｜契約レビューを「任せない」運用設計と実践的な使い方 | AIリブート";
const pageDescription =
  "法務で生成AIを安全に使うために、契約レビューをAIへ全面委任しない理由、使える業務/使えない業務、機密情報の扱い、運用フレームワーク、実践プロンプトを体系化。法務活用チェックリスト導入の進め方も解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-legal-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "機密情報をAIに入力しても大丈夫ですか？",
    answer:
      "ツール種別と契約条件で判断が変わります。個人向け無料プランを前提に「大丈夫」とは言えません。法人向けプランでも、入力可能範囲のルール化、匿名化、ログ管理、最小入力の4点を前提に運用する必要があります。",
  },
  {
    question: "契約書レビューはどこまでAIに任せてよいですか？",
    answer:
      "条文要約、論点抽出、比較表作成、ひな形との差分整理までは任せやすい業務です。一方で、最終的な法的評価、交渉方針の決定、承認判断は人間が担うべき領域です。",
  },
  {
    question: "法務で生成AIができることと、できないことは何ですか？",
    answer:
      "できることは、ドラフト補助、条文検索補助、ひな形整備、社内FAQの一次回答です。できないことは、責任主体を伴う最終判断、固有事情を前提にした法的助言の確定、無検証での対外文書確定です。",
  },
  {
    question: "無料版ChatGPTと法人版でリスクはどう違いますか？",
    answer:
      "大きな違いはデータ取扱い、管理機能、監査可能性です。法人版は契約・管理機能が整っている一方、運用設計なしではリスクは残ります。プラン選定と社内ルール整備をセットで行う必要があります。",
  },
  {
    question: "AIの誤回答で契約トラブルが起きた場合、責任は誰が持ちますか？",
    answer:
      "通常、責任主体はツールではなく業務を遂行する企業側です。したがって、AI出力の採否を人間が判断し、レビュー記録を残す統制設計が必要です。",
  },
  {
    question: "法務部門で最初に作るべき運用ルールは何ですか？",
    answer:
      "最初に定めるべきは、1) 入力データ分類、2) タスク分類（補助/要承認/禁止）、3) レビューとログ保存ルールの3点です。これがないまま利用を広げると、監査と改善ができません。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 法務 活用",
    "契約書 AI レビュー",
    "AI 契約書 作成",
    "生成AI リーガル",
    "法務 ChatGPT 使い方",
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

export default function AiLegalGuideRoute() {
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
          { name: "法務の生成AI活用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiLegalGuidePage faqItems={[...faqItems]} />
    </>
  );
}
