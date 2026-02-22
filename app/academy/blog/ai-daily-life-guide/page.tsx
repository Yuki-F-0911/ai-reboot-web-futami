import type { Metadata } from "next";
import AiDailyLifeGuidePage from "@/components/academyLanding/blog/ai-daily-life-guide/AiDailyLifeGuidePage";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const pageTitle =
  "AIで暮らしが変わる｜日常生活×生成AI活用術20選【2026年版】 | AIリブート";
const pageDescription =
  "日常生活で使える生成AI活用術20選を、献立・健康・子育て・趣味の場面別に解説。ChatGPT・Claude・Geminiの無料プランですぐ試せるプロンプト付き。まずは気になる1項目から実践し、今日の家事と情報整理を一気にラクにしましょう。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-daily-life-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T18:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIに個人情報を入力しても大丈夫ですか？",
    answer:
      "名前・住所・電話番号などの個人情報は入力しないことをおすすめします。「4人家族、東京都在住」のように、個人を特定できない範囲の情報で十分です。ChatGPT・Claude・Geminiはいずれも、無料プランでの入力データを学習に使わないオプトアウト設定が可能です。",
  },
  {
    question: "スマホだけでも使えますか？",
    answer:
      "はい、スマホだけで十分使えます。ChatGPT・Claude・GeminiはすべてiOS/Android対応のアプリがあり、ブラウザからも利用可能です。料理中に音声入力で話しかけることもできます。",
  },
  {
    question: "子どもに使わせても大丈夫ですか？",
    answer:
      "ChatGPTは13歳以上、保護者の同意があれば利用可能です（OpenAIの利用規約）。お子さんが使う場合は、保護者と一緒に使い始めることをおすすめします。「答えを教えて」ではなく「ヒントを出して」という使い方を教えると、学習効果も高まります。",
  },
  {
    question: "AIの回答を鵜呑みにしても大丈夫？",
    answer:
      "AIは時に間違った情報を返すことがあります（ハルシネーション）。特にレシピの分量、医療情報、金額に関する回答は、他の情報源でも確認することをおすすめします。AIの回答は「参考意見」として活用し、最終判断は自分で行う習慣をつけましょう。",
  },
  {
    question: "医療の相談をAIにしても問題ありませんか？",
    answer:
      "「何科に行くべきか」「症状の整理」にはとても便利ですが、AIは医療行為はできません。正確な診断と治療方針は必ず医師に相談してください。緊急性のある症状（激しい痛み、呼吸困難、意識障害など）の場合は、AIに相談する前に119番または最寄りの救急病院に連絡してください。",
  },
  {
    question: "無料でどこまで使えますか？",
    answer:
      "2026年2月時点で、ChatGPTはGPT-5.2が5時間あたり10回（制限後はGPT-5 miniで継続利用可能）、ClaudeはSonnet 4.6が無料、GeminiはGemini 3 Flashが回数無制限で使えます。この記事で紹介した20の活用術はすべて無料プランで実践できます。",
  },
  {
    question: "高齢の親にも勧められますか？",
    answer:
      "はい、特にスマホの音声入力との相性が抜群です。「話しかけるだけ」で使えるため、キーボード入力が苦手な方にも向いています。詳しくは「50代60代から始めるAI入門」の記事もご覧ください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 日常生活 活用",
    "ChatGPT 生活 便利",
    "AI 暮らし 使い方",
    "ChatGPT 日常 活用例",
    "AI できること 日常",
    "AI 献立 レシピ",
    "AI 子育て 活用",
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

export default function AiDailyLifeGuideRoute() {
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
          {
            name: "日常生活×生成AI活用術20選",
            url: pageUrl,
          },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiDailyLifeGuidePage faqItems={[...faqItems]} />
    </>
  );
}
