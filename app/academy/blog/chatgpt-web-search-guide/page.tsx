import type { Metadata } from "next";
import ChatgptWebSearchGuidePage from "@/components/academyLanding/blog/chatgpt-web-search-guide/ChatgptWebSearchGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTの検索機能が超便利！使い方・活用術を初心者向けに解説【2026年最新】 | AIリブート";
const pageDescription =
  "ChatGPTのウェブ検索機能（Search）を初心者向けに徹底解説。無料プランでも使える方法・Googleとの使い分け・日常活用ユースケース8選・ハルシネーション対策・もっと便利に使う5つのコツをわかりやすく紹介。情報収集の質と速度を劇的に改善できます。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-web-search-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T15:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "ChatGPT検索は無料プランで使えますか？",
    answer:
      "はい、2026年2月時点では無料プランでもChatGPTのウェブ検索機能を利用できます。ただし、1日あたりの利用回数に上限があり、混雑時に制限がかかることがあります。頻繁に使いたい方はPlus（月額約3,000円）への移行が快適です。",
  },
  {
    question: "ChatGPT検索とGoogleはどう使い分ければいいですか？",
    answer:
      "「複数の情報をまとめて理解したい・要約してほしい」場面にはChatGPT検索が向いています。一方、「リアルタイムの株価・価格比較・特定の公式サイトへのアクセス・地図検索」にはGoogleが向いています。どちらが優れているかではなく、目的に応じて使い分けるのが正解です。",
  },
  {
    question: "ChatGPT検索はどうやって使いますか？特別な設定が必要ですか？",
    answer:
      "基本的に特別な設定は不要です。チャット入力欄に地球儀アイコンや「Search」ボタンが表示されていれば、通常どおり質問を送信するだけでウェブ検索が行われます。表示されない場合は入力欄の「+」アイコンから「Search the web」をオンにしてください。",
  },
  {
    question: "ChatGPT検索の回答は信頼できますか？",
    answer:
      "基本的には参照したウェブサイトの内容に基づいた回答ですが、ハルシネーション（事実と異なる情報の生成）は完全にはなくなりません。特に医療・法律・金融など重要な判断に関わる情報は、回答に含まれる引用元リンクを確認し、公式サイトや専門家への相談を忘れずに。",
  },
  {
    question: "スマホでも検索機能を使えますか？",
    answer:
      "ChatGPTの公式アプリ（iOS・Android）でもウェブ検索機能は利用できます。スマホアプリ版でも、入力欄の「+」アイコンか地球儀アイコンから検索機能をオンにして使えます。",
  },
  {
    question: "ChatGPT検索はどんな情報が苦手ですか？",
    answer:
      "リアルタイムの株価・為替・天気・速報ニュース（発生直後）などの秒単位で変わる情報は苦手です。また、非常にローカルな情報（特定の地域の最新イベント・営業時間など）は精度が下がることがあります。こうした情報は専門サービスを使うのが確実です。",
  },
  {
    question: "回答に含まれる引用元リンクはどうやって確認しますか？",
    answer:
      "回答の末尾や文中に「出典：〇〇」「[1][2]」のような注釈が付きます。そのリンクをクリックすると参照したウェブページに飛べます。もし引用元が表示されない場合は「その情報の出典を教えてください」と追加で聞いてみましょう。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 検索機能",
    "ChatGPT Search 使い方",
    "ChatGPT ウェブ検索",
    "ChatGPT Google 違い",
    "ChatGPT Search 無料",
    "ChatGPT 最新情報",
    "AI 検索 活用術",
    "ChatGPT 初心者",
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

export default function ChatgptWebSearchGuideRoute() {
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
          { name: "ChatGPT検索機能ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptWebSearchGuidePage faqItems={[...faqItems]} />
    </>
  );
}
