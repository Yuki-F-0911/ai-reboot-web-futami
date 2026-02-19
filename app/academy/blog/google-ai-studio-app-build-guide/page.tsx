import type { Metadata } from "next";
import GoogleAiStudioAppBuildGuidePage from "@/components/academyLanding/blog/google-ai-studio-app-build-guide/GoogleAiStudioAppBuildGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Google AI StudioのApp Build機能とは？アプリ作成の始め方と活用法 | AIリブート";
const pageDescription =
  "Google AI StudioのApp Build機能に特化し、準備から作成手順、業務アプリ3パターン（FAQ Bot・プロンプト整形・データ要約）の作り方、ノーコード運用の限界まで実務目線で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/google-ai-studio-app-build-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "Google AI StudioのApp Build機能とは何ですか？",
    answer:
      "Google AI Studio内で、自然言語の指示からWebアプリの試作、修正、共有まで進めるための機能です。App Build単体でUIと基本ロジックの検証を行い、必要に応じて実装環境へ引き継げます。",
  },
  {
    question: "Google AI Studio App Buildは無料で使えますか？",
    answer:
      "Google AI Studioは無料で試せる設計ですが、利用するモデル、APIキーの運用方法、関連するGoogle Cloud設定によって課金が発生する場合があります。最新条件は公式のPricing/Billing情報を確認してください（確認日: 2026-02-19）。",
  },
  {
    question: "コードを書かずにアプリを作れますか？",
    answer:
      "試作段階なら、要件を自然言語で指示してノーコードで進めることは可能です。ただし、認証、監査ログ、既存システム連携など本番運用の要件が増えると、エンジニアによる実装調整が必要になるケースが多いです。",
  },
  {
    question: "どんな人に向いていますか？",
    answer:
      "業務課題を言語化できる非エンジニア、PoCを短期間で回したい担当者、プロンプト改善を繰り返せる人に向いています。逆に、要件が固まらないまま一度で完成形を狙う使い方には向きません。",
  },
  {
    question: "作ったアプリは社内利用できますか？",
    answer:
      "用途次第で社内利用は可能ですが、公開設定、アクセス制御、入力データの取り扱い、APIキー管理を運用ルールに落とし込む必要があります。試作の成功と本番運用の安全性は別に評価してください。",
  },
  {
    question: "App Buildでうまく動かないときは何を見直せばよいですか？",
    answer:
      "要件を細かく分けて再指示する、1変更ごとにPreviewで確認する、失敗した状態を保存して戻せるようにする、の3点を優先してください。コミュニティでも大きな変更を一度に加えるほど不安定になりやすいという報告があります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Google AI Studio App Build 使い方",
    "Google AI Studio アプリ作成",
    "AI アプリ 作成 ノーコード",
    "Gemini アプリ 開発",
    "Google AI Studio 機能",
    "Google AI Studio App Build",
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

export default function GoogleAiStudioAppBuildGuideRoute() {
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
          { name: "Google AI StudioのApp Build機能ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GoogleAiStudioAppBuildGuidePage faqItems={[...faqItems]} />
    </>
  );
}
