import type { Metadata } from "next";
import AiGuidelineTemplatePage from "@/components/academyLanding/blog/ai-guideline-template/AiGuidelineTemplatePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計【2026年版】";
const pageDescription =
  "生成AI（ChatGPT・Claude・Copilot等）の社内利用ガイドラインをコピペ可能な1枚雛形で設計。禁止事項・入力ルール・権限・ログ・例外申請・インシデント対応まで30日導入ステップ付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-guideline-template";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "生成AI（ChatGPT等）に社内情報を入力しても大丈夫ですか？",
    answer:
      "原則はデータ分類で判断します。社外秘・個人情報・機微情報は入力禁止とし、例外が必要な場合は申請/承認フロー（目的・対象データ・代替策・ログ保存）を通して判断します。",
  },
  {
    question: "ガイドラインは「禁止」中心にした方が安全では？",
    answer:
      "禁止だけだと現場のシャドーAIが増えやすく、結果的に統制不能になります。安全に使える範囲を定義し、ログと権限で統制する方が現実的です。",
  },
  {
    question: "ガイドラインに最低限入れるべき項目は何ですか？",
    answer:
      "「入力ルール（データ分類）」「禁止事項（NG例）」「権限」「ログ/監査」「例外申請」「インシデント対応」の6点が最小セットです。",
  },
  {
    question: "生成物（文章/画像/コード）はそのまま社外に出してよいですか？",
    answer:
      "原則は人の確認を必須にし、第三者権利・機密混入・誤情報のチェック工程を定義します。用途により承認レベルを分けて運用します。",
  },
  {
    question: "どの部署がガイドラインの責任者になるべきですか？",
    answer:
      "情シス/セキュリティ、法務、現場（利用部門）の三者で役割分担し、最終責任（改定責任者）を1名に明確化します。",
  },
  {
    question: "どれくらいの頻度で見直すべきですか？",
    answer:
      "原則は四半期〜半期で定期レビューし、ツール変更・事故発生・法令/社内規程変更があれば随時改定します。",
  },
  {
    question: "まず何日で導入できますか？",
    answer:
      "1枚雛形での暫定運用は最短1〜2週間、ログ/権限/教育まで含めた運用定着は30日を目安に設計します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["生成AI 社内ガイドライン", "生成AI 利用ルール", "生成AI ガイドライン 雛形", "ChatGPT 社内利用 ルール"],
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

export default function AiGuidelineTemplateRoute() {
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
          { name: "生成AIの社内ガイドライン雛形", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiGuidelineTemplatePage faqItems={[...faqItems]} />
    </>
  );
}

