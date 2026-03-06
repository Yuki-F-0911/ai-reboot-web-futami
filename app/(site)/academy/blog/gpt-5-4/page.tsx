import type { Metadata } from "next";
import Gpt54Page from "@/components/academyLanding/blog/gpt-5-4/Gpt54Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "GPT-5.4とは？【2026年3月速報】3つのモデルの違い・性能・今すぐ使える方法を解説 | AIリブート";
const pageDescription =
  "OpenAIが2026年3月5日にリリースしたGPT-5.4を解説。標準・Thinking・Proの3モデルの使い分け、GPT-5.2からの性能改善（エラー率33%減）、プラン別の利用方法、ビジネス現場での活用シーンを速報記事として整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gpt-5-4";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-03-06T09:00:00+09:00";
const modifiedTime = "2026-03-06T09:00:00+09:00";

const faqItems = [
  {
    question: "GPT-5.4はChatGPT無料プランで使えますか？",
    answer:
      "GPT-5.4（標準モデル）はChatGPT Freeプランでも利用可能です。ただし利用枠に制限があります。GPT-5.4 ThinkingはPlus・Team・Proプラン、GPT-5.4 ProはPro・Enterpriseプランに限定されます。最新のプラン対応状況はChatGPT公式料金ページをご確認ください（確認日: 2026-03-06）。",
  },
  {
    question: "GPT-5.4 ThinkingとGPT-5.4 Proはどう違いますか？",
    answer:
      "GPT-5.4 Thinkingは難度の高い推論タスク（複雑な分析・コード問題・専門的な判断）向けに設計された推論型モデルです。GPT-5.4 ProはPro・Enterprise向けの最高性能版で、さらに精度・処理能力が高い設計とされています。Plusプランならまずはい Thinkingから試してみてください。",
  },
  {
    question: "GPT-5.2 ThinkingはGPT-5.4 Thinkingに置き換えられますか？",
    answer:
      "はい。OpenAIの発表によると、GPT-5.2 ThinkingはGPT-5.4 Thinkingに置き換えられ、3ヶ月後に廃止される予定です。現在GPT-5.2 Thinkingを利用している場合は、GPT-5.4 Thinkingへの移行を検討してください。",
  },
  {
    question: "GPT-5.4の1Mトークンコンテキストとは何ですか？",
    answer:
      "API版のGPT-5.4は最大100万トークン（約70〜75万字相当）を1リクエストで処理できます。数百ページの契約書・技術仕様書・大量のコードベースをまるごと分析するのに使えます。ChatGPT（Webアプリ）のコンテキスト上限はAPIとは異なります。",
  },
  {
    question: "GPT-5.4のコンピュータ操作（Computer Use）機能とは何ですか？",
    answer:
      "コンピュータ操作機能は、GPT-5.4がスクリーンショットを読み取りながら仮想的にマウスやキーボードを操作する機能です。フォーム入力・データ転記・ウェブ上の繰り返し作業などを自動実行できます。OSWorld-Verifiedのスコア75.0%で人間（72.4%）を超えています。主にAPIやCodexから利用可能です。",
  },
  {
    question: "GPT-5.4のAPIの料金はいくらですか？",
    answer:
      "サードパーティ情報ではインプット$2.50/1Mトークン、アウトプット$20/1Mトークンとされていますが、公式料金は変動する可能性があります。最新の公式料金はOpenAI API料金ページ（openai.com/api/pricing/）を必ずご確認ください（確認日: 2026-03-06）[要確認]。",
  },
  {
    question: "GPT-5.4は日本語でも精度が向上していますか？",
    answer:
      "GPT-5.4は全体としてエラー率33%減（GPT-5.2比）を達成しており、日本語の長文処理・要約・翻訳でも精度向上が期待できます。日本語UIはChatGPTの設定（Settings → Language → 日本語）から切り替え可能です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GPT-5.4 とは",
    "GPT-5.4 使い方",
    "GPT-5.4 性能",
    "OpenAI 最新モデル",
    "GPT5.4 日本語",
    "ChatGPT 最新モデル 2026",
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
    publishedTime,
    modifiedTime,
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

export default function Gpt54Route() {
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
          { name: "GPT-5.4とは？【2026年3月速報】", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <Gpt54Page faqItems={[...faqItems]} />
    </>
  );
}
