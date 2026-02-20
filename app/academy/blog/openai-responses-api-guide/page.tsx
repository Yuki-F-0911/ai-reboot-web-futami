import type { Metadata } from "next";
import OpenaiResponsesApiGuidePage from "@/components/academyLanding/blog/openai-responses-api-guide/OpenaiResponsesApiGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "OpenAI Responses API実装ガイド｜移行・function calling・運用設計 | AIリブート";
const pageDescription =
  "OpenAI Responses APIの始め方を2026年2月時点で整理。Chat Completionsからの移行手順、function callingとbuilt-in toolsの設計、previous_response_idでの会話管理、Background mode運用まで実務目線で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/openai-responses-api-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T15:30:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Responses APIはChat Completionsと何が違いますか？",
    answer:
      "Responses APIは、テキスト生成だけでなくtools連携、会話ステート管理、長時間処理まで統合しやすい構造です。新規実装ではResponses APIを基準に設計する方が運用を一本化しやすくなります。",
  },
  {
    question: "既存のChat Completionsコードは全部書き直す必要がありますか？",
    answer:
      "一括置換は不要です。単発応答の置き換えから始め、次にtools連携、会話ステート、非同期処理の順で段階移行するとリスクを抑えられます。",
  },
  {
    question: "function callingとbuilt-in toolsは同時に使えますか？",
    answer:
      "用途を分ければ併用できます。ただし権限を広げすぎると監査が難しくなるため、目的単位でtoolsを分離し、採用前レビューを必ず入れる運用が必要です。",
  },
  {
    question: "previous_response_idは毎回保存すべきですか？",
    answer:
      "会話を継続する要件があるなら保存が必要です。ユーザー単位や案件単位で管理し、再送時の復旧ルールまで定義しておくと履歴崩れを防ぎやすくなります。",
  },
  {
    question: "Background modeはどの処理から導入するべきですか？",
    answer:
      "まずはタイムアウトしやすい長時間処理だけに限定して導入するのが実務的です。全処理へ一気に広げず、監視と通知の運用が固まってから拡張してください。",
  },
  {
    question: "ChatGPT有料契約があればAPI料金は不要ですか？",
    answer:
      "不要にはなりません。ChatGPT契約とOpenAI API利用は課金体系が別です。予算管理はプロダクト利用とAPI利用を分けて設計する必要があります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "OpenAI Responses API 使い方",
    "Chat Completions 移行",
    "function calling 実装",
    "previous_response_id",
    "Background mode",
    "OpenAI API 運用設計",
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

export default function OpenaiResponsesApiGuideRoute() {
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
          { name: "OpenAI Responses API実装ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <OpenaiResponsesApiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
