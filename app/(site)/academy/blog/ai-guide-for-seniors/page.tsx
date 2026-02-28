import type { Metadata } from "next";
import AiGuideForSeniorsPage from "@/components/academyLanding/blog/ai-guide-for-seniors/AiGuideForSeniorsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "60代・70代がはじめてAIを使う：シニア世代のための優しいAI入門ガイド | AIリブート";
const pageDescription =
  "60代・70代のシニア世代がはじめてAIを使うための入門ガイドです。「AIって難しそう」という不安を解消し、スマートフォンさえあれば今日から使える方法を丁寧に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-guide-for-seniors";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-24T15:00:00+09:00";
const modifiedTime = "2026-02-24";

const faqItems = [
  {
    question: "AIを使うのに月額料金はかかりますか？",
    answer:
      "ChatGPTやClaude（クロード）などの主要なAIは、基本機能であれば無料で使えます。スマートフォンにアプリをダウンロードして、メールアドレスで登録するだけで今日からすぐに始められます。有料プランもありますが、日常的な使い方（調べ物、手紙の文章を考える、趣味のアドバイスをもらうなど）には無料版で十分です。最初は無料で試して、「もっと使いたい」と感じてから有料版を検討すれば大丈夫です。",
  },
  {
    question: "スマートフォンの機種は古くても使えますか？",
    answer:
      "iPhoneであればiOS 16以降（iPhone 8以降の機種）、Androidであれば比較的新しい機種（2018年以降）であれば、ほとんどの場合問題なく使えます。機種が古くてアプリが使えない場合でも、スマートフォンのブラウザ（SariやChromeなど）からWebサイトにアクセスするだけでAIを使えます。アプリが使えなくてもあきらめないでください。",
  },
  {
    question: "日本語が下手でもAIは理解してくれますか？",
    answer:
      "大丈夫です。AIは多少の誤字脱字があっても、文章の意味を正確に読み取ってくれます。「こんにちは、最近ひざがいたいのですが、どうすればいいですか」のような短い文章でも、きちんと答えてくれます。難しい言葉を使う必要はまったくありません。普段の会話と同じように、話しかけるつもりで入力してみてください。",
  },
  {
    question: "AIに話しかけることに慣れるまで、どのくらいかかりますか？",
    answer:
      "多くの方が、2〜3回使うだけで「なんとなくわかってきた」と感じています。最初の1回は戸惑うかもしれませんが、2回目、3回目と使ううちに自然に慣れてきます。「こういうときはこう聞けばいいんだ」という感覚がつかめると、あとはどんどん使いやすくなります。焦らず、1日1〜2回のペースで気軽に試してみてください。",
  },
  {
    question: "AIと話すことで認知症予防になりますか？",
    answer:
      "AIとの会話は、毎日新しいことを考えたり言葉にしたりする「脳の刺激」という意味では、良い習慣のひとつになりえます。昔の記憶を整理したり、俳句を考えたり、気になるニュースについて調べたりする作業は、積極的に頭を使う活動です。ただし「AIを使えば認知症を確実に予防できる」と断言できるものではありません。AIとの会話を楽しみながら、同時に人とのコミュニケーションや適度な運動も大切にしてください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "シニア AI 入門",
    "高齢者 ChatGPT 使い方",
    "60代 AI 初めて",
    "シニア 生成AI",
    "70代 AI 使い方",
    "お年寄り AI 簡単",
    "シニア スマホ AI",
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

export default function AiGuideForSeniorsRoute() {
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
          { name: "60代・70代がはじめてAIを使う：シニア世代のための優しいAI入門ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiGuideForSeniorsPage faqItems={[...faqItems]} />
    </>
  );
}
