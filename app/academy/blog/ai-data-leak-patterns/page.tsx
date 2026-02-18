import type { Metadata } from "next";
import AiDataLeakPatternsPage from "@/components/academyLanding/blog/ai-data-leak-patterns/AiDataLeakPatternsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール【2026年版】";
const pageDescription =
  "ChatGPT・Claude等の生成AIで情報漏えいが起きる10のパターンを現場のNG例で解説。入力ルール、チェックリスト、防止策を実務向けに整理。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-data-leak-patterns";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "ChatGPTに社内データを入力すると学習に使われますか？",
    answer:
      "OpenAIのAPIは原則として入力データが学習に使われません（明示的なオプトインを除く）。またChatGPTのEnterprise/Teamなど法人向けプランも、既定で学習に利用されないとされています。一方、個人向けChatGPTは設定（Data Controls）で学習への提供をオフにできます。いずれもプラン/設定は変更され得るため、導入時点の公式ポリシーを必ず確認してください。",
  },
  {
    question: "情報漏えいが発覚した場合どう対応すべきですか？",
    answer:
      "入力内容の記録確認→影響範囲の特定→関係者への報告→再発防止策の策定を順に進めます。インシデント対応フローを事前に定めておくことが重要です。",
  },
  {
    question: "コピペチェックだけで漏えいは防げますか？",
    answer:
      "コピペだけでなく、口頭で聞いた情報の入力や、ファイルアップロードも対象です。入力経路を網羅したルール設計が必要です。",
  },
  {
    question: "個人情報をAIに入力するのは違法ですか？",
    answer:
      "一律に違法と断定はできません。外部AIサービスに個人情報を入力すると、個人情報保護法上の委託/第三者提供/国外事業者への提供（越境移転）などの論点が生じます。実務では原則入力禁止・匿名化/仮名化を基本にし、例外は法務/情シス承認とログ管理で運用するのが安全です。",
  },
  {
    question: "ログを取っていれば安全ですか？",
    answer:
      "ログは事後調査には有効ですが、漏えい自体を防ぐものではありません。入力前のチェック（予防）とログ（検知・事後対応）の両方が必要です。",
  },
  {
    question: "画像やPDFのアップロードも漏えいリスクがありますか？",
    answer:
      "はい。画像内のメタデータ、PDFに含まれる社内情報・個人情報も入力と同じ扱いです。ファイルアップロード時のルールも定める必要があります。",
  },
  {
    question: "社外向けの文章をAIで作成する場合の注意点は？",
    answer:
      "機密情報がプロンプトに含まれていないか確認し、生成物に第三者の権利侵害や事実誤認がないかを人がレビューする工程を設けます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["生成AI 情報漏えい", "機密情報 ChatGPT", "AI 情報漏洩 対策", "生成AI セキュリティ"],
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

export default function AiDataLeakPatternsRoute() {
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
          { name: "生成AIで情報漏えいが起きるパターン10選", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiDataLeakPatternsPage faqItems={[...faqItems]} />
    </>
  );
}
