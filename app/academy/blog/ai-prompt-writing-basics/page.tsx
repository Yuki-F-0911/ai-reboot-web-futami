import type { Metadata } from "next";
import AiPromptWritingBasicsPage from "@/components/academyLanding/blog/ai-prompt-writing-basics/AiPromptWritingBasicsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIプロンプトの書き方入門：初心者が知っておくべき10のコツ【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPTやClaudeへの「聞き方」で、AIの答えは劇的に変わります。初心者向けにAIプロンプトの基本的な書き方・コツを10個まとめました。NG例→OK例の比較で、今日からすぐ使える実践的な方法を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-prompt-writing-basics";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T17:00:00+09:00";
const modifiedTime = "2026-02-24";

const faqItems = [
  {
    question: "プロンプトに文字数制限はありますか？",
    answer:
      "ChatGPTやClaudeにはコンテキストウィンドウ（処理できるテキスト量の上限）がありますが、通常の会話では気にする必要はありません。ただし、同じ会話を長く続けると初期の内容が参照されにくくなります。長い文書を分析する際は、要点を絞って貼り付けるか、複数回に分けて送るのが効果的です。",
  },
  {
    question: "日本語と英語、どちらでプロンプトを書く方が良いですか？",
    answer:
      "日本語ユーザーは日本語でプロンプトを書くのが基本で構いません。ChatGPTやClaudeは日本語を十分理解しています。ただし、技術的な内容や英語情報が多いトピックでは、英語で書いた方が詳細な回答が得られることもあります。まず日本語で試して、物足りなければ英語で試す運用が現実的です。",
  },
  {
    question: "うまくいかないプロンプトはどう改善すればいいですか？",
    answer:
      "最初の回答が期待外れだった場合は、「もっと具体的に」「もう少し短く」「別の角度から」などと続けて対話してみてください。それでも改善しない場合は、プロンプト自体を見直し、「具体的に・役割・形式・文脈」の4点が入っているか確認するのが有効です。一発で完璧を求めず、対話しながら改善する意識が重要です。",
  },
  {
    question: "プロンプトの書き方を学ぶのに、どのくらいの時間がかかりますか？",
    answer:
      "基本の10のコツを身につけるだけなら、1週間も使えば感覚がつかめます。ただし、自分の業務や目的に特化したプロンプトを磨くには継続的な試行錯誤が必要です。「うまくいったプロンプトを保存しておく」習慣をつけると、1〜2ヶ月で自分だけのテンプレート集が育ってきます。",
  },
  {
    question: "ChatGPTとClaudeでプロンプトの書き方は変わりますか？",
    answer:
      "基本的な書き方（具体的に・役割・形式・文脈）はどちらでも共通して効果的です。細かな個性の違いはありますが、初心者段階では気にする必要はほとんどありません。まずはどちらか一方で10のコツを練習してから、使い勝手の違いを感じてみるのがおすすめです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "プロンプト 書き方 初心者",
    "ChatGPT プロンプト コツ",
    "AI 聞き方 上手",
    "プロンプトエンジニアリング 基本",
    "ChatGPT 使い方 コツ",
    "AI プロンプト テンプレート",
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

export default function AiPromptWritingBasicsRoute() {
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
          { name: "AIプロンプトの書き方入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPromptWritingBasicsPage faqItems={[...faqItems]} />
    </>
  );
}
