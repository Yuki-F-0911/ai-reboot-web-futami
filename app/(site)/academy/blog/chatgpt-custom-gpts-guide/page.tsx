import type { Metadata } from "next";
import ChatgptCustomGptsGuidePage from "@/components/academyLanding/blog/chatgpt-custom-gpts-guide/ChatgptCustomGptsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "ChatGPTのGPTs（カスタムGPT）完全入門2026｜無料で使える便利GPT15選と自分専用GPTの作り方 | AIリブート";
const pageDescription =
  "ChatGPTのGPTs（カスタムGPT）とは何かを初心者向けにわかりやすく解説。GPT Storeの場所、今すぐ使えるおすすめGPT15選をカテゴリ別に紹介。自分専用GPTの作り方や注意点まで2026年最新情報でまとめました。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-custom-gpts-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T09:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "GPTsは無料で使えますか？",
    answer:
      "GPT Storeを閲覧して他の人が作ったGPTを使うには、無料プランでも利用できます。ただし無料プランは1日の利用回数に制限があります。自分でGPTを作成（カスタマイズ）する機能はPlusプラン（月額$20）以上が必要です。",
  },
  {
    question: "自分でGPTを作るのにプログラミングの知識が必要ですか？",
    answer:
      "不要です。「GPT Builder」という対話形式のツールを使い、日本語で「どんなGPTにしたいか」を会話するだけで自動的に設定してくれます。プログラミングの知識がなくても、30分あればオリジナルGPTが作れます。",
  },
  {
    question: "GPT Storeはどこにありますか？",
    answer:
      "ChatGPTにログインした状態で、左上の「GPT Storeを探索する」または「Explore GPTs」をクリックするとアクセスできます。スマホアプリの場合は画面下部のメニューからアクセスできます。",
  },
  {
    question: "GPTsはスマホでも使えますか？",
    answer:
      "はい、iOSおよびAndroidの公式ChatGPTアプリでGPTsを利用できます。アプリ下部のメニューから「GPTを探索」を選べばGPT Storeにアクセスできます。",
  },
  {
    question: "カスタムGPTは自分だけが使えますか？公開することもできますか？",
    answer:
      "作成時に「自分だけ」「リンクを知っている人全員」「全員に公開（GPT Storeに掲載）」の3種類から選べます。まず自分専用で作って試し、満足したら公開するという流れがおすすめです。",
  },
  {
    question: "GPTsのデータはOpenAIに学習されますか？",
    answer:
      "設定 → Data Controls → 「Improve the model for everyone」をオフにすれば、会話内容がAIの学習に使われません。また、GPTsに個人情報や機密情報を入力しないことが基本ルールです。",
  },
  {
    question: "おすすめのGPTはどれですか？",
    answer:
      "目的によって異なりますが、初心者に特に人気なのは「Web Browsing（最新情報の検索）」「PDF Analyzer（PDFの要約・分析）」「Canva（デザイン作成）」「Code Interpreter（データ分析）」などです。本文のおすすめ15選も参考にしてください。",
  },
  {
    question: "GPTsと通常のChatGPTはどう使い分ければいいですか？",
    answer:
      "日常的なチャットや雑談には通常のChatGPT、特定の目的（英語学習・料理レシピ・コード作成など）があるときはその目的に特化したGPTを使うのが効率的です。慣れてきたら自分の業務に合わせてオリジナルGPTを作るとさらに便利です。",
  },
  {
    question: "カスタムGPTの作成にPlusプランが必要ですか？",
    answer:
      "GPTの作成（カスタマイズ）はPlusプラン以上が必要です。ただし、他の人が公開したGPTを使うだけなら無料プランでも可能です（利用回数に制限あり）。",
  },
  {
    question: "GPTsが使えない場合はどうすればいいですか？",
    answer:
      "国や地域によっては一部のGPTが利用できない場合があります。また、一時的なサーバー負荷でアクセスできないこともあります。ブラウザを変える、アプリを再起動する、しばらく時間をおいてから試すなどをお試しください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GPTs 使い方",
    "カスタムGPT 作り方",
    "GPT Store",
    "ChatGPT GPTs 初心者",
    "おすすめ GPT",
    "カスタムGPT 無料",
    "GPTs とは",
    "ChatGPT Plus GPTs",
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

export default function ChatgptCustomGptsGuideRoute() {
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
          { name: "ChatGPTのGPTs完全入門2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptCustomGptsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
