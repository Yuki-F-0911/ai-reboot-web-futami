import type { Metadata } from "next";
import ChatgptStartGuideSmartphonePage from "@/components/academyLanding/blog/chatgpt-start-guide-smartphone/ChatgptStartGuideSmartphonePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド | AIリブート";
const pageDescription =
  "ChatGPTをスマホで始めたい方向けに、公式アプリの入れ方、ログイン、初期設定、iPhone/Android別のつまずきポイントを手順で解説。無料/有料の違いも確認できます。";
const pageUrl = "https://ai-reboot.io/academy/blog/chatgpt-start-guide-smartphone";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T18:00:00+09:00";

const faqItems = [
  {
    question: "ChatGPTはスマホだけで使えますか？",
    answer:
      "はい。スマホアプリ（公式アプリ）またはブラウザ版で利用できます。スマホとPCは同じアカウントで連携できるため、状況に応じて使い分けるのが便利です。",
  },
  {
    question: "公式アプリの見分け方はありますか？",
    answer:
      "アプリストアの検索結果には似た名前のアプリが並ぶことがあります。インストール前に、提供元がOpenAIであること、レビューや説明が不自然でないことを確認するのが安全です。",
  },
  {
    question: "iPhoneで音声入力を使うにはどうすればいいですか？",
    answer:
      "アプリ内の音声機能が利用できる場合は、その機能を有効化して会話できます。対応していない場合でも、iPhoneのキーボードにあるマイク（音声入力）でテキスト入力できます。",
  },
  {
    question: "無料プランだけでも十分に使えますか？",
    answer:
      "はい。要約、買い物リスト作成、メール下書き、翻訳などの基本用途は無料でも試しやすいです。利用頻度や必要な機能が増えたら有料プランを比較すると無理がありません。",
  },
  {
    question: "スマホから有料プランに課金できますか？",
    answer:
      "多くの場合、アプリ内課金（Apple/Googleの決済）で申し込めます。請求や解約の管理は、App Store/Google Playのサブスクリプション設定から行うのが一般的です。",
  },
  {
    question: "家族の端末に入れて使っても大丈夫ですか？",
    answer:
      "個人情報や履歴が混在しやすいため、基本は各自のアカウントで利用するのがおすすめです。共有端末で使う場合は、ログアウトや履歴設定などを必ず確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 始め方 スマホ",
    "ChatGPT iPhone 使い方",
    "ChatGPT Android 使い方",
    "ChatGPT アプリ 始め方",
    "生成AI 初心者",
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

export default function ChatgptStartGuideSmartphoneRoute() {
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
          { name: "ChatGPTをスマホで始める方法", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ChatgptStartGuideSmartphonePage faqItems={[...faqItems]} />
    </>
  );
}
