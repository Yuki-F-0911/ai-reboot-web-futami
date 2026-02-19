import type { Metadata } from "next";
import AiAccountingGuidePage from "@/components/academyLanding/blog/ai-accounting-guide/AiAccountingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "経理・財務部門のAI活用ガイド2026｜仕訳・レポート・予算管理の自動化事例 | AIリブート";
const pageDescription =
  "経理・財務でのAI活用を仕訳確認・経費精算・月次レポート・予算差異分析の4業務で解説。機密データを外部AIに入れる際のリスクと対策、ExcelマクロのAI生成方法、自然言語でのデータ集計まで網羅。社内ガイドライン整備のポイントと3段階の導入ステップ付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-accounting-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "経理でAIを最初に使うなら、何の業務から始めるのがよいですか？",
    answer:
      "月次レポートのコメント文作成や、経費申請への回答文など「定型文章の生成」から始めると、リスクが低く効果が出やすい傾向があります。数値そのものではなく文章を作る業務を起点にすると、機密情報の入力も最小限で済みます。",
  },
  {
    question: "仕訳データや財務数値を生成AIに入力してもよいですか？",
    answer:
      "入力する前に、使用するAIサービスのプランとデータポリシーを確認することが先決です。無料プランでは入力内容が学習に使用される場合があります。取引先名・未公開財務数値・個人情報などは、エンタープライズプランを利用するか、マスキング（〇〇社、X百万円など）してから入力するのが基本です。",
  },
  {
    question: "ExcelマクロをAIで作るには、どのように指示すればよいですか？",
    answer:
      "「やりたいこと（例: A列の金額をB列の部門コード別に集計してC列に出力する）」「対象シート名」「データの開始行」「特記事項」を日本語で書いてAIに渡します。生成されたVBAコードをExcelのVBAエディタ（Alt+F11）に貼り付けるだけで動作します。本番データで使う前に、テスト用のコピーで動作確認を行うことを推奨します。",
  },
  {
    question: "ChatGPTやClaudeでExcelデータを集計するにはどうしますか？",
    answer:
      "ChatGPT（有料プラン）では「データ分析」機能でCSVやExcelを添付して、「部門別の合計を表にして」などと自然言語で指示できます。ClaudeでもデータをテキストやCSVで貼り付けると集計・分析が可能です。機密情報を含む場合は、会社名・個人名・具体的な金額をマスキングしてから使用します。",
  },
  {
    question: "予算差異分析のコメントをAIで作る際、どんなデータを渡せばよいですか？",
    answer:
      "勘定科目名、予算額、実績額、差異額、差異率の一覧と、差異が大きい項目の主因をテキストで渡すと、AIは差異の大きい順にコメントのたたき台を生成します。生成されたコメントは必ず担当者がレビューし、数値の正確性と表現の適切さを確認してから使用します。",
  },
  {
    question: "会計ソフトはAIを導入するときに変える必要がありますか？",
    answer:
      "変える必要はありません。ChatGPTやClaudeなどの汎用AIは、会計ソフトからエクスポートしたCSVや手入力の数値を受け取って処理できます。会計ソフト自体のAI機能強化と、汎用AIによる補助は並行して活用できます。",
  },
  {
    question: "経理部門でAI活用のルールはどう作ればよいですか？",
    answer:
      "入力可能な情報の範囲（禁止事項の列挙）、使用するAIサービスとプラン、出力物のレビュー手順、の3点を先に決めるのが基本です。経理部門固有のルール（仕訳への使用制限、財務数値のマスキング基準など）を一般的なAIガイドラインに追加する形で整備すると、既存のセキュリティポリシーと整合しやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "経理 AI 活用",
    "財務 生成AI 業務効率化",
    "経理 ChatGPT 使い方",
    "仕訳 AI 自動化",
    "経理 AI ツール",
    "月次レポート AI",
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

export default function AiAccountingGuideRoute() {
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
          { name: "経理・財務部門のAI活用ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAccountingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
