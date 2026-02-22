import type { Metadata } from "next";
import AiJobInterviewPrepGuidePage from "@/components/academyLanding/blog/ai-job-interview-prep-guide/AiJobInterviewPrepGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIで面接対策が変わる！ChatGPTを使った自己分析・想定質問・模擬面接の完全ガイド【2026年版】 | AIリブート";
const pageDescription =
  "ChatGPTを使った面接対策を初心者向けに完全解説。自己分析・自己PR磨き・志望動機の作り方・ChatGPTを面接官にした模擬面接・STAR法での回答構造化・業界別想定質問リスト作成・面接後の振り返りまで、就職・転職活動に使えるプロンプト付きで丁寧に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-job-interview-prep-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T15:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTで自己PRを書いてもらえますか？",
    answer:
      "はい、可能です。ただし「自己PRを書いて」と一言頼んで出てきた文章をそのまま使うのは避けた方がよいです。ChatGPTが作った文章は「それらしい」が、あなたの実際の経験に基づいていないため、面接で深掘りされたときに対応できません。「こういう経験がある（素材）→これを自己PRの形に整えて→3パターン出して」という使い方で、自分の経験を言語化する素材として使うのが正解です。",
  },
  {
    question: "ChatGPTで企業研究もできますか？",
    answer:
      "ある程度は可能ですが、企業の最新情報（直近の業績・ニュース・採用動向）はChatGPTの学習データに含まれていない場合があります。企業のIR情報・プレスリリース・採用ページを自分で収集して、その内容をChatGPTに貼り付けて「要約して・分析して」と依頼する使い方が最も精度が高いです。",
  },
  {
    question: "ChatGPTの無料プランで面接対策はできますか？",
    answer:
      "はい、無料プランでも十分に使えます。自己分析・自己PR作成・模擬面接・想定質問リスト作成など、この記事で紹介している方法のほとんどは無料プランで実践できます。会話の長さや回数に制限がある場合がありますが、基本的な面接対策には無料プランで問題ありません。",
  },
  {
    question: "面接が苦手で声に出して練習できません。ChatGPTだけでもいいですか？",
    answer:
      "テキストでのやりとりでも十分に練習になりますが、最終的には声に出す練習もしておくことをおすすめします。面接は声・表情・テンポも重要なため、ChatGPTとのテキスト練習で内容を固めたら、鏡の前や録音アプリを使って声に出す練習も加えると効果的です。最初は1分だけでも声に出して練習するだけで大きく変わります。",
  },
  {
    question: "転職活動中ですが、内定が決まった後もAIは使えますか？",
    answer:
      "もちろんです。内定後も、入社前の自己学習・業界知識の習得・入社後の仕事でのAI活用など、AI活用の場面は広がっていきます。面接対策をきっかけにAIに慣れておくことは、入社後の仕事の生産性向上にもつながります。",
  },
  {
    question: "AIが作った回答を暗記して面接に臨むのはいいですか？",
    answer:
      "「AIの文章をそのまま暗記する」のは避けた方がよいです。面接官の深掘り質問に対応できなくなるためです。AIが作った回答は「骨格・方向性」として参考にして、自分の言葉で言い直す練習をしてください。「この表現、自分が本当に言えるか？」と毎回チェックしながら、徐々に自分のものにしていく作業が大切です。",
  },
  {
    question: "就活生（新卒）にもAI面接対策は有効ですか？",
    answer:
      "非常に有効です。新卒就活で難しいのは「仕事経験がない中で自己PRを語る」ことです。AIを使った自己分析で「学生時代の経験から強みを言語化する」練習が特に効果的です。また、「学生時代に力を入れたこと（ガクチカ）」「なぜ弊社を選んだか」などの頻出質問へのAI練習も有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 面接対策",
    "ChatGPT 就活",
    "ChatGPT 転職",
    "自己分析 AI",
    "模擬面接 ChatGPT",
    "AI 自己PR",
    "STAR法 面接",
    "面接 練習 AI",
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

export default function AiJobInterviewPrepGuideRoute() {
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
          { name: "AIで面接対策完全ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiJobInterviewPrepGuidePage faqItems={[...faqItems]} />
    </>
  );
}
