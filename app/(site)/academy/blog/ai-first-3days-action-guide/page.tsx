import type { Metadata } from "next";
import AiFirst3DaysActionGuidePage from "@/components/academyLanding/blog/ai-first-3days-action-guide/AiFirst3DaysActionGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI入門、最初の3日間でやるべき5つのこと【今日から始める完全アクションガイド2026】 | AIリブート";
const pageDescription =
  "「AIを始めたいけど何からやればいい?」その答えがここにあります。ChatGPT・Gemini・Claudeを使った最初の3日間の具体的なアクションプランを、AI初心者向けに分かりやすく解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-first-3days-action-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T15:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "スマホだけでも大丈夫ですか？",
    answer:
      "はい、スマホだけで十分始められます。ChatGPT・Gemini・Claudeはすべてスマホのブラウザまたは公式アプリで利用できます。PCがあればより快適ですが、最初の3日間のアクションはスマホだけで完全に実行可能です。",
  },
  {
    question: "有料プランにしないと使えませんか？",
    answer:
      "いいえ、全て無料プランで始められます。ChatGPT・Gemini・Claudeはいずれも無料プランが用意されており、AI入門の最初の3日間で行うことはすべて無料で体験できます。まず無料で使い始め、「もっと使いたい」と感じたら有料プランを検討するのが賢い順番です。",
  },
  {
    question: "英語が分からなくても使えますか？",
    answer:
      "はい、日本語で使えます。ChatGPT・Gemini・Claudeはすべて日本語での質問に対応しており、日本語で回答してくれます。英語の知識は一切不要です。普通の日本語で話しかけるだけでOKです。",
  },
  {
    question: "個人情報が漏れたりしませんか？",
    answer:
      "AIに入力した内容は各サービスの学習データとして使われる可能性があります。そのため、本名・住所・会社の機密情報などの個人情報は入力しないことをおすすめします。「明日の朝食レシピを教えて」「この文章を短くして」など、個人情報が含まれない使い方なら安心して使えます。",
  },
  {
    question: "どのAI（ChatGPT・Gemini・Claude）から始めればいいですか？",
    answer:
      "どれでも大丈夫ですが、最初の一択としてはChatGPT（chatgpt.com）が最も情報量が多くておすすめです。日本語の解説記事も豊富で、困ったときに調べやすいのが特徴です。「どれにするか」で迷うより、1つ決めてすぐ使い始めることが大切です。",
  },
  {
    question: "3日で終わったら、次は何をすればいいですか？",
    answer:
      "3日間で「使ってみた→役に立った→習慣の一部にした」という体験ができたら、次は「プロンプトの書き方」を少し深めるのがおすすめです。AIへの伝え方を工夫するだけで、回答の質が大きく変わります。AIリブートアカデミーでは、初心者から実務活用まで体系的に学べる環境を提供しています。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 始め方 初心者 2026",
    "ChatGPT 始め方 スマホ",
    "生成AI 入門 最初",
    "AI アカウント作り方",
    "ChatGPT 使い方 初めて",
    "生成AI 初日",
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

export default function AiFirst3DaysActionGuideRoute() {
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
          { name: "AI入門、最初の3日間でやるべき5つのこと", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFirst3DaysActionGuidePage faqItems={[...faqItems]} />
    </>
  );
}
