import type { Metadata } from "next";
import Ai30daysHonestDiaryPage from "@/components/academyLanding/blog/ai-30days-honest-diary/Ai30daysHonestDiaryPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIと30日間使い続けた正直な記録：速くなったこと、期待外れだったこと、続けて気づいたこと【2026年版】 | AIリブート";
const pageDescription =
  "「AIって本当に使えるの？」その疑問に正直に答えます。30日間、仕事でAIを使い続けて気づいた、良かったこと・悪かったこと・意外な発見を日記形式で正直にまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-30days-honest-diary";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T22:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "毎日使わないと30日チャレンジにならないですか？週3〜4回でも効果はありますか？",
    answer:
      "週3〜4回でも十分効果があります。大切なのは「毎日使う」ことよりも「30日間やめない」こと。週3〜4回でも、1ヶ月継続すれば「自分の仕事に向いている使い方」が見えてきます。むしろ無理に毎日使おうとして挫折するより、週3〜4回を確実に続ける方が長続きします。",
  },
  {
    question: "30日間でどんな仕事に使いましたか？具体的に教えてください。",
    answer:
      "主に使ったのは、①メールの返信文作成（3パターン出してもらい選ぶ）、②会議前の議題・論点整理、③報告書・企画書のたたき台作成、④日々の気づきや悩みの思考整理、⑤英語メールの翻訳と返信案の5つです。特に①と②は毎日使いました。逆に、数値計算・専門的な事実確認・社内事情が絡む判断はAIには向いていないと感じ、3週目以降はほぼ使わなくなりました。",
  },
  {
    question: "AIに頼りすぎて自分のスキルが落ちませんか？",
    answer:
      "30日使った感覚では、むしろ逆でした。AIの出力を評価するために「良い文章とは何か」「この提案の論点は何か」を言語化する機会が増えた。AIはたたき台を作るが、最終判断は常に自分。この姿勢を保てば、自分のスキルを磨くことにつながります。ただし「AIが出した文章をゼロ確認でそのまま使う」習慣は危険です。必ず自分の目で確認・修正することが大前提です。",
  },
  {
    question: "30日経っても全然うまくいかない場合はどうすればいいですか？",
    answer:
      "まず「何がうまくいかないか」を具体化することをおすすめします。「AIの回答が期待外れ」なら質問の仕方を変える練習を。「そもそも何を頼めばいいかわからない」なら今日一番困ったことを1つだけ頼む練習を。「使う機会がない」なら「毎日1つだけ」というルールを設ける。それでも改善しない場合は、同じ状況の人と話せるコミュニティに参加することで突破口が見えることが多いです。",
  },
  {
    question: "有料プランと無料プラン、どちらで試しましたか？",
    answer:
      "最初の2週間は無料プランで試しました。基本的な文章作成・要約・翻訳は無料プランで十分対応できます。3週目に有料プランに切り替えましたが、決め手は「回答速度の向上」と「より長い文章・複雑な作業への対応」でした。まずは無料プランで1〜2週間試してみて、「もっと使いたい」と感じてから有料を検討するのが合理的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 30日間 体験",
    "ChatGPT 使い続けた 感想",
    "AI 仕事 効果 正直",
    "生成AI 使った結果",
    "AI 日記 体験談",
    "ChatGPT 1ヶ月 使って みた",
    "AI 仕事 変化",
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

export default function Ai30daysHonestDiaryRoute() {
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
          { name: "AIと30日間使い続けた正直な記録", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Ai30daysHonestDiaryPage faqItems={[...faqItems]} />
    </>
  );
}
