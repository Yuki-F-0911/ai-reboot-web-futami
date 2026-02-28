import type { Metadata } from "next";
import PowerAutomateAiGuidePage from "@/components/academyLanding/blog/power-automate-ai-guide/PowerAutomateAiGuidePage";
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
  FAQStructuredData,
} from "@/components/seo/StructuredData";

const pageTitle =
  "Power Automate × 生成AI活用｜Microsoft環境の現場自動化レシピ集 | AIリブート";
const pageDescription =
  "Power AutomateとCopilot Studio・AI Builder・Azure OpenAIの実務連携を解説。Teams/Outlook/Excelの自動化レシピ、agent flow導入判断、個人運用とIT部門連携の境界を整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/power-automate-ai-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "Power Automateと生成AI連携は何から始めるべきですか？",
    answer:
      "最初はTeamsまたはOutlookを起点にした2〜3ステップの小さなフローから始めるのが安全です。たとえば「受信メールを分類してTeamsへ通知」のように効果が測りやすい業務を選び、次にAI要約や返信下書きを追加すると定着しやすくなります。",
  },
  {
    question: "Copilot StudioとAzure OpenAIはどちらを選べばよいですか？",
    answer:
      "業務部門主導でボット体験を短期間で作るならCopilot Studio、既存システム連携や厳密な制御・監査を重視するならAzure OpenAIが向いています。最終判断は「誰が運用するか」「どのデータを扱うか」「監査要件がどこまで必要か」で決めるのが実務的です。",
  },
  {
    question: "Power AutomateでOpenAI系モデル連携はできますか？",
    answer:
      "可能です。Power AutomateではAzure OpenAIコネクタやHTTPアクションを使って生成AI処理を組み込めます。運用前にコネクタ種別（標準/プレミアム）とライセンス要件、送信データの取り扱い方針を確認してください。",
  },
  {
    question: "Teamsへの自動返信は個人でも作れますか？",
    answer:
      "個人でも作成できます。Teamsのメッセージトリガーと投稿アクションを使えば、ルールベースの一次返信や担当者メンション通知は比較的簡単に実装できます。ただし全社展開やチャネル全体ポリシー適用はIT部門との調整が必要です。",
  },
  {
    question: "Excel分析レポート自動生成はどこまで実用的ですか？",
    answer:
      "週次・月次の定型レポートでは高い効果が出ます。Power Automateでデータ取得・整形・要約生成を自動化し、人は数値確認と最終コメントに集中できます。非定型分析や原因特定は人の判断を残す運用が現実的です。",
  },
  {
    question: "IT部門に相談すべきタイミングはいつですか？",
    answer:
      "機密情報・個人情報を扱う、プレミアムコネクタを使う、外部API接続を行う、共有運用に拡張する、のいずれかに該当した時点でIT部門へ相談してください。個人運用のまま進めると、後で権限や監査要件に引っかかることが多いです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Power Automate 生成AI",
    "Power Automate AI連携",
    "Copilot Studio 使い方",
    "Microsoft AI 自動化",
    "Power Automate OpenAI 連携",
    "AI Builder 活用",
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

export default function PowerAutomateAiGuideRoute() {
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
          { name: "Power Automate × 生成AI活用", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <PowerAutomateAiGuidePage faqItems={[...faqItems]} />
    </>
  );
}
