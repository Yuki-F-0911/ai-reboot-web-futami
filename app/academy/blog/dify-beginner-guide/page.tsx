import type { Metadata } from "next";
import DifyBeginnerGuidePage from "@/components/academyLanding/blog/dify-beginner-guide/DifyBeginnerGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Difyの使い方完全ガイド｜ノーコードでAI業務ボットを最短で作る方法【2026年版】 | AIリブート";
const pageDescription =
  "DifyとはどんなLLMアプリ開発プラットフォームか、料金・プランの選び方から社内FAQボット作成の5ステップ、業種別5事例、失敗しない3つのポイントまで解説。Difyスターターテンプレ（5ユースケース）配布中。";
const pageUrl = "https://ai-reboot.io/academy/blog/dify-beginner-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-19T09:00:00+09:00";

const faqItems = [
  {
    question: "Difyは無料で使えますか？",
    answer:
      "はい、クラウド版のSandboxプランは無料で利用を開始できます。利用できるメッセージ数やチームメンバー数に上限があるため、本格運用では有料プランまたは制限のないセルフホスト版（OSSで無料）を検討してください。最新のプラン詳細はDify公式サイトをご確認ください。",
  },
  {
    question: "Difyはプログラミングの知識がなくても使えますか？",
    answer:
      "基本的な業務ボットはノーコードで作成できます。チャットボット構築とRAG（ナレッジ検索）設定はGUIのみで完結し、プログラミング不要です。高度なAPI連携や外部システム統合には一定の技術知識が役立ちます。",
  },
  {
    question: "ChatGPTのカスタムGPTとDifyの違いは何ですか？",
    answer:
      "カスタムGPTはOpenAIのサービス上で動作し、GPT系モデル固定です。DifyはOpenAI以外のモデル（Claude・Gemini・ローカルモデル等）を自由に選択でき、自社サーバーへのセルフホストも可能です。API連携の柔軟性やデータのセキュリティ制御が必要な業務用途ではDifyが適しています。",
  },
  {
    question: "Difyのセルフホスト版とクラウド版、どちらを選ぶべきですか？",
    answer:
      "個人学習や小規模な検証ならクラウド版の無料プランが最短です。社内機密情報を扱う場合や利用規模が大きい法人にはセルフホスト版が適しています。Dockerが動く環境があれば無料で利用でき、データが自社サーバー内に留まります。",
  },
  {
    question: "Difyでどんな業務を自動化できますか？",
    answer:
      "社内FAQの自動回答、問い合わせ一次対応、営業資料の下書き作成、定例レポートの要約・生成、採用書類のスクリーニング補助などが代表的です。社内文書やマニュアルが整っている業務ほど精度が出やすい傾向があります。",
  },
  {
    question: "Difyで作ったボットはSlackや自社サイトに連携できますか？",
    answer:
      "DifyはAPIエンドポイントとWebウィジェット（埋め込みコード）を提供します。Webサイトへの埋め込みはコードを貼るだけで完結します。SlackやLINEへの連携はDifyのAPIを各プラットフォームのBot設定と組み合わせる形で実現できます。",
  },
  {
    question: "Difyで情報漏えいリスクを防ぐには？",
    answer:
      "セルフホスト版を社内ネットワーク内に閉じて運用する、外部LLMへ送信するデータの分類ルールを設ける（個人情報・機密情報は除外）、APIキーをシークレット管理ツールで管理する、の3点が基本対策です。LLMプロバイダーのデータ利用規約も確認してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Dify 使い方",
    "Dify とは",
    "Dify 料金",
    "Dify 事例",
    "Dify 日本語",
    "ノーコード AIボット 作り方",
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

export default function DifyBeginnerGuideRoute() {
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
          { name: "Difyの使い方完全ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <DifyBeginnerGuidePage faqItems={[...faqItems]} />
    </>
  );
}
