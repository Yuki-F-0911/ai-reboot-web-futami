import type { Metadata } from "next";
import AiEnglishLearningGuidePage from "@/components/academyLanding/blog/ai-english-learning-guide/AiEnglishLearningGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを使った英語学習：初心者でも続けられる5つの方法と正直な効果【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPTやClaudeを使った英語学習の方法を初心者向けに解説。「英語学習にAIって本当に使えるの？」という疑問に正直に答えます。続けやすく効果が出やすい5つの活用法を紹介します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-english-learning-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T13:00:00+09:00";
const modifiedTime = "2026-02-24";

const faqItems = [
  {
    question: "AIとの英語会話は本物の会話練習の代わりになりますか？",
    answer:
      "完全な代わりにはなりませんが、練習の「量」を増やす点では非常に効果的です。AIは24時間対応で、間違えても恥ずかしくないという心理的安全性があります。ただし、ネイティブとのニュアンスの違いや、リアルな会話のスピード感はAIだけでは補えません。「AIで練習量を増やしながら、月1回でも人間と話す機会を作る」という使い方が現実的です。",
  },
  {
    question: "ChatGPTで英語を勉強するのに、有料版が必要ですか？",
    answer:
      "無料版（GPT-4o mini）でも基本的な英語添削・会話練習は十分できます。有料版（ChatGPT Plus、月額$20）は、より長い文章の処理や、音声会話機能（Voice Mode）を使いたい場合に価値が出ます。まずは無料版から始めて、「もっと使いたい」と感じてから有料版の検討をおすすめします。",
  },
  {
    question: "英語ができない状態でもAIに英語で質問できますか？",
    answer:
      "日本語で質問しても問題ありません。「英語で説明してください」と日本語で頼めば、英語で返してくれます。また、自分で英語を書けなくても「こう言いたいのですが、英語でどう言いますか：[日本語]」という使い方が最も始めやすいです。英語力ゼロから始めてもAIは親切に対応してくれます。",
  },
  {
    question: "AIで英語学習を始めるのに最適な時間帯・頻度は？",
    answer:
      "「毎日5〜10分」が続けやすい目安です。時間帯は朝（通勤前）または夜（就寝前）など、習慣化している別の行動に紐づけると続きやすいです。週5回以上を目標にしつつ、週3回でも続けることの方が、週1回の長時間より効果的です。最初から高頻度を狙うより、まず「低負荷で続ける」ことを優先しましょう。",
  },
  {
    question: "小学生の子どもにもAI英語学習は使えますか？",
    answer:
      "活用できますが、保護者のサポートが必要です。ChatGPTには年齢制限（13歳以上）があるため、小学生が単独で使うには保護者のアカウントで一緒に使う形が適切です。「英語で絵本を読んでもらう」「好きなキャラクターの英語名を教えてもらう」など、楽しい文脈で使うと子どもも興味を持ちやすいです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 英語学習",
    "ChatGPT 英語 勉強",
    "AI 英語 初心者",
    "生成AI 英語学習",
    "ChatGPT 英語 練習",
    "AI 英語 添削",
    "英語学習 AI 方法",
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

export default function AiEnglishLearningGuideRoute() {
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
          { name: "AIを使った英語学習：初心者でも続けられる5つの方法", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiEnglishLearningGuidePage faqItems={[...faqItems]} />
    </>
  );
}
