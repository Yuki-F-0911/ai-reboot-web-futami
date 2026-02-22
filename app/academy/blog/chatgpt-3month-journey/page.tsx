import type { Metadata } from "next";
import Chatgpt3MonthJourneyPage from "@/components/academyLanding/blog/chatgpt-3month-journey/Chatgpt3MonthJourneyPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTを3ヶ月使い続けたら、こんな変化が起きた｜AI初心者が正直に語る体験記【2026年版】 | AIリブート";
const pageDescription =
  "「AIを使ってみたいけど続けられるか不安」という方へ。AI初心者がChatGPTを3ヶ月使い続けて感じたリアルな変化を正直に語ります。1週間後の小さな驚き、1ヶ月後の活用シーン15例、3ヶ月後の思考の変化、続けるコツを体験談形式で解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-3month-journey";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T10:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIって使い続けても飽きませんか？",
    answer:
      "飽きにくいです。なぜなら、AIへの質問は毎日変わる仕事や生活の困りごとと連動しているから。「今日のこの問題をAIに投げてみよう」という感覚で使っていると、日々新しい発見があります。毎日同じことをするツールではなく、今日の困りごとに合わせて形が変わる相棒のような感覚です。",
  },
  {
    question: "どれくらいで使いこなせるようになりますか？",
    answer:
      "「使いこなせている」という感覚が生まれるのは、個人差はありますが概ね2〜4週間で感じる方が多いです。ただし「完全に使いこなす」というゴールはなく、使えば使うほど新しい使い方が見つかります。焦らず、毎日1つの困りごとから始めれば十分です。",
  },
  {
    question: "無料プランでも十分ですか？",
    answer:
      "最初の3ヶ月は無料プランで十分です。ChatGPTの無料プランではGPT-4oモデルが利用でき、文章作成・要約・翻訳・アイデア出しなど日常的な用途はカバーできます。「毎日使って利用上限に引っかかるようになった」と感じたら、有料プランを検討するタイミングです。",
  },
  {
    question: "セキュリティは大丈夫ですか？",
    answer:
      "基本ルールを守れば安全に使えます。①名前・住所・電話番号・クレジットカード番号などの個人情報は入力しない、②会社の機密情報や顧客情報は入力しない、③設定からデータ学習をオフにする——この3点を守れば、日常的な利用は問題ありません。詳細なプライバシー設定の手順は「生成AIに個人情報を入れても大丈夫？」の記事をご覧ください。",
  },
  {
    question: "どの種類のAIから始めればいい？",
    answer:
      "迷ったらChatGPTから始めるのが最もスムーズです。日本語対応が充実しており、スマートフォンの公式アプリも使いやすく、無料プランでも十分な機能があります。慣れてきたらClaudeやGeminiも試してみると、それぞれの得意分野が見えてきます。",
  },
  {
    question: "ChatGPTの回答をそのまま仕事で使っていいですか？",
    answer:
      "下書きや素材として使い、最終確認は必ず人が行うのが基本です。事実確認が必要な数字や固有名詞は公式サイトで裏取りしてください。「AIが作った＝完成品」ではなく「AIが作った叩き台を自分が仕上げる」という使い方が、品質と安全性を両立させます。",
  },
  {
    question: "AIを使い始めて「続けられなかった」人はどのくらいいますか？",
    answer:
      "明確な統計は出ていませんが、「1回使って満足してやめた」という方は多いようです。続けられるコツは、学習目的で使うのをやめること。「今日の困りごとを1つ聞く」という実利目的に切り替えると、自然と続きます。習慣化のコツについては記事内の「習慣の棚に乗せる」を参考にしてください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 使い続けた 変化",
    "AI 生活 変わった",
    "生成AI 体験談",
    "ChatGPT 続けるコツ",
    "AI習慣化",
    "ChatGPT 3ヶ月",
    "AI 初心者 体験",
    "ChatGPT 効果",
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

export default function Chatgpt3MonthJourneyRoute() {
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
          { name: "ChatGPTを3ヶ月使い続けた体験記", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Chatgpt3MonthJourneyPage faqItems={[...faqItems]} />
    </>
  );
}
