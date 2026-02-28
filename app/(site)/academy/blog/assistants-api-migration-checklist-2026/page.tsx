import type { Metadata } from "next";
import AssistantsApiMigrationChecklist2026Page from "@/components/academyLanding/blog/assistants-api-migration-checklist-2026/AssistantsApiMigrationChecklist2026Page";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Assistants API移行チェックリスト2026｜Responses API/Chat Completions移行手順 | AIリブート";
const pageDescription =
  "Assistants API sunset（target: 2026-08-26）に向けた移行チェックリストを解説。Responses API・Chat Completionsへの移行背景、落とし穴と対策、移行スケジュール、FAQを法人AI担当者とエンジニア向けに整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/assistants-api-migration-checklist-2026";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-21T09:30:00+09:00";
const modifiedTime = "2026-02-21T13:00:00+09:00";

const faqItems = [
  {
    question: "Assistants APIのsunset日は確定ですか？",
    answer:
      "OpenAIの公式ページでは、Assistants APIはdeprecatedで、target shutdown dateが2026年8月26日と案内されています。最新情報はOpenAIのdeprecationsページを都度確認してください。",
  },
  {
    question: "移行先はResponses APIだけですか？",
    answer:
      "新規実装の推奨はResponses APIですが、OpenAIの案内ではChat Completions APIが引き続きサポートされることも明記されています。要件に応じて選択可能です。",
  },
  {
    question: "なぜ早めの移行が必要ですか？",
    answer:
      "移行作業はコード置換だけでなく、ステート管理、ツール権限、監査ログ、運用手順の更新が必要だからです。期限直前に集中すると検証不足のまま本番切替になりやすくなります。",
  },
  {
    question: "Assistants APIの概念はどう置き換えればよいですか？",
    answer:
      "OpenAI公式には、Assistants APIの主要要素はResponses APIのPromptsやtoolsへマッピング可能と示されています。まずは機能単位で対照表を作る方法が安全です。",
  },
  {
    question: "Chat Completionsへ移す判断はどんな場合ですか？",
    answer:
      "単純なテキスト生成中心で、複雑なツール連携や会話状態管理が不要な場合はChat Completionsも有効です。将来の拡張を見込むならResponses APIの方が一貫運用しやすくなります。",
  },
  {
    question: "移行で最も多いトラブルは何ですか？",
    answer:
      "モデルとパラメータ対応の不一致、会話ステートの引き継ぎ不備、ストリーミング時の挙動差、権限設計の漏れが多いです。公式ガイドとSDKバージョンを揃えて検証してください。",
  },
  {
    question: "移行チェックリストは何項目あれば十分ですか？",
    answer:
      "最低8項目は必要です。実務では、対象機能棚卸し、マッピング設計、SDK更新、テスト、監査、運用手順、ロールバック、教育まで含めると10項目前後になります。",
  },
  {
    question: "法人導入で経営層に説明するポイントは？",
    answer:
      "期限付き変更である点、移行しない場合の運用停止リスク、段階移行でのコスト平準化、監査対応の強化をセットで示すと合意が取りやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Assistants API 移行 2026",
    "Assistants API sunset",
    "OpenAI Responses API 移行",
    "Chat Completions 移行",
    "法人AI導入",
    "API移行チェックリスト",
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

export default function AssistantsApiMigrationChecklist2026Route() {
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
          { name: "Assistants API移行チェックリスト2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AssistantsApiMigrationChecklist2026Page faqItems={[...faqItems]} />
    </>
  );
}
