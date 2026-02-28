import type { Metadata } from "next";
import AiBeginnersGuideOver50Page from "@/components/academyLanding/blog/ai-beginners-guide-over-50/AiBeginnersGuideOver50Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "50代60代から始めるAI入門｜スマホだけでできるChatGPT活用ガイド【2026年版】 | AIリブート";
const pageDescription =
  "50代60代の方向けに、スマホだけでChatGPTを始める手順を1ステップずつ丁寧に解説。音声入力の使い方、健康相談・旅行計画・趣味・町内会文書作成など生活に直結する7つの活用シナリオ、よくある失敗と対処法まで。人生経験がAI活用の武器になります。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-beginners-guide-over-50";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T16:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPTを使うのにお金はかかりますか？",
    answer:
      "基本的な機能は無料で使えます。アプリのダウンロードもアカウント登録も無料です。無料プランでもGPT-5.2が5時間あたり10回利用でき、制限後もGPT-5 miniで継続して利用可能です。まずは無料で試してみて、もっと使いたいと感じたら有料プラン（月額約3,000円）を検討すればよいでしょう。",
  },
  {
    question: "スマホの操作が苦手ですが、本当に使えますか？",
    answer:
      "LINEでメッセージを送れる方なら、ChatGPTも必ず使えます。操作は「メッセージを入力して送信する」だけです。さらに音声入力を使えば、スマホに話しかけるだけでAIと会話できます。文字を打つ必要すらありません。",
  },
  {
    question: "個人情報を入力しても大丈夫ですか？",
    answer:
      "名前・住所・電話番号・マイナンバー・クレジットカード番号などの個人情報は入力しないでください。AIに入力した内容は学習に使われる可能性があります。ChatGPTの設定で「チャット履歴とトレーニング」をオフにすることもできます。病気の相談をするときも、「60代男性、膝が痛い」のように個人を特定できない形で聞きましょう。",
  },
  {
    question: "AIの回答は信用していいですか？",
    answer:
      "AIは非常に有能な「相談相手」ですが、間違えることもあります。特に医療・法律・税金などの重要な判断は、AIの回答を参考にしつつ、最終的には専門家（医師・弁護士・税理士）や公的機関に確認してください。日常的な質問（旅行プラン・料理レシピ・文章作成など）は安心して活用できます。",
  },
  {
    question: "家族に内緒で使っても大丈夫ですか？",
    answer:
      "もちろん大丈夫です。ChatGPTは個人のスマホアプリですので、他の人に会話内容が見られることはありません。ただ、ぜひご家族にも教えてあげてください。「お父さん（お母さん）がAI使ってるの？すごい！」と喜ばれるかもしれません。",
  },
  {
    question: "子どもや孫に教えてもらったほうがいいですか？",
    answer:
      "もちろんご家族に聞いてもいいですが、この記事の手順に沿えば一人でも始められます。「自分でできた！」という達成感は、誰かに教わるよりずっと大きいものです。まずは一人でチャレンジしてみて、わからないところだけ聞くのがおすすめです。",
  },
  {
    question: "60代後半でも遅くないですか？",
    answer:
      "まったく遅くありません。AIに「遅すぎる」はありません。スマホが使える方なら何歳からでも始められます。実際に70代・80代でAIを活用されている方もいらっしゃいます。大切なのは年齢ではなく、「ちょっと試してみよう」という気持ちです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 50代 始め方",
    "ChatGPT シニア 使い方",
    "50代 AI入門",
    "生成AI 初心者 60代",
    "ChatGPT 簡単 始める",
    "ChatGPT スマホ 始め方",
    "AI 定年後 活用",
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

export default function AiBeginnersGuideOver50Route() {
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
          { name: "50代60代から始めるAI入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiBeginnersGuideOver50Page faqItems={[...faqItems]} />
    </>
  );
}
