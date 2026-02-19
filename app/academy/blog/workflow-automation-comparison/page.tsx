import type { Metadata } from "next";
import WorkflowAutomationComparisonPage from "@/components/academyLanding/blog/workflow-automation-comparison/WorkflowAutomationComparisonPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】 | AIリブート";
const pageDescription =
  "Make・Zapier・n8nを料金・機能・難易度・セキュリティの4軸で徹底比較。部門別おすすめ活用パターン5選、最初のフロー作成3ステップ、よくある失敗と対処法も解説。5業種対応スターターテンプレ配布中。";
const pageUrl = "https://ai-reboot.io/academy/blog/workflow-automation-comparison";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-26T09:00:00+09:00";
const modifiedTime = "2026-02-26T09:00:00+09:00";

const faqItems = [
  {
    question: "Make・Zapier・n8nの無料プランでできることの違いは何ですか？",
    answer:
      "Zapierの無料プランは月100タスクまで、2ステップのZapのみ利用可能です。Makeの無料プランは月1,000オペレーションが使え、マルチステップのシナリオも作れます。n8nのクラウド版は14日間トライアルのみで、以降は有料ですが、セルフホスト版（Docker）は無料で無制限に使えます。個人検証ならMakeかn8nセルフホスト版が費用対効果で優れています。",
  },
  {
    question: "プログラミング知識なしでワークフロー自動化ツールを使えますか？",
    answer:
      "ZapierとMakeはノーコードで操作でき、プログラミング知識は不要です。ドラッグ＆ドロップで接続アプリとトリガー・アクションを設定するだけでフローが完成します。n8nはビジュアルエディタを持ちますが、条件分岐や複雑な変換にはJavaScript式を書く場面があり、初心者には若干のハードルがあります。まずZapierから始めて、コスト最適化の段階でMakeやn8nに移行する方法がおすすめです。",
  },
  {
    question: "MakeとZapierはどちらを選ぶべきですか？",
    answer:
      "シンプルさと接続アプリ数を優先するならZapier（7,000以上のアプリ対応）、コスト効率と複雑なシナリオを優先するならMakeが適しています。Zapierは月のタスク数が多くなると費用が急増しますが、Makeはオペレーション単位の課金でコスト予測がしやすい構造です。接続したいSaaSがZapierにしかない場合はZapierを選んでください。",
  },
  {
    question: "n8nはDockerやサーバー知識がないと使えませんか？",
    answer:
      "n8nのクラウド版（n8n.io）はアカウント登録だけで使えます。ただし本番運用コストを抑えたい場合はセルフホスト版が有利で、Dockerの基本知識（docker-compose up）があれば自社サーバーや自宅PCに30分程度で構築できます。Dockerに不慣れな場合は、まずn8nクラウドのトライアルかMakeから始めるのが現実的です。",
  },
  {
    question: "社内の個人情報を含むフローでセキュリティは大丈夫ですか？",
    answer:
      "ZapierとMakeはUS/EUのクラウドサーバーを使うため、個人情報や機密データを流すには各社のデータ処理規約と自社のプライバシーポリシーの整合確認が必要です。最も安全なのは、n8nをオンプレミス（社内ネットワーク）でセルフホストする構成でデータが外部サーバーに出ません。機密性の高い業務フローにはn8nセルフホスト版を強く推奨します。",
  },
  {
    question: "kintone・Notion・Salesforceなど国内SaaSとも連携できますか？",
    answer:
      "Zapierはkintone・Salesforceに公式コネクタがあります。Makeはkintoneの公式モジュールに加え、HTTPリクエストモジュールで任意のAPIに接続できます。n8nはHTTPノードを使えばREST APIに対応した国内SaaS（kintone・Notionなど）と接続可能です。公式コネクタがない場合でも、各SaaSのAPIドキュメントを参照してHTTPノードで実装できます。",
  },
  {
    question: "DifyとMake・n8nを組み合わせるとどうなりますか？",
    answer:
      "Difyで作成したAIエージェントはAPIエンドポイントを提供するため、Make・n8nのHTTPリクエストノードから呼び出せます。例えば「新着メール受信（n8nトリガー）→Dify AIで要約・分類→Slackに投稿（n8nアクション）」のような連携が可能です。ワークフロー自動化ツールを「配管」、DifyをAI処理エンジンとして組み合わせると、業務フロー全体を自動化できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ワークフロー自動化 ツール比較",
    "Make vs Zapier",
    "n8n 使い方",
    "ノーコード 自動化",
    "業務効率化 ツール",
    "RPA 比較",
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

export default function WorkflowAutomationComparisonRoute() {
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
          { name: "ワークフロー自動化ツール比較", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <WorkflowAutomationComparisonPage faqItems={[...faqItems]} />
    </>
  );
}
