import type { Metadata } from "next";
import RagVsFinetunigGuidePage from "@/components/academyLanding/blog/rag-vs-finetuning-guide/RagVsFinetunigGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム | AIリブート";
const pageDescription =
  "RAGとファインチューニングの選び方を、用途・更新頻度・コスト・運用体制で比較。Responses API / File SearchとFine-tuning APIの最新前提を踏まえ、非エンジニアでも判断できる3ステップと実装順序を提示します。";
const pageUrl = "https://ai-reboot.io/academy/blog/rag-vs-finetuning-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "RAGとファインチューニングの一番の違いは何ですか？",
    answer:
      "RAGは外部データを検索して回答時に参照する方式、ファインチューニングはモデル自体を再学習して振る舞いを変える方式です。更新性はRAG、出力スタイル固定はファインチューニングが得意です。",
  },
  {
    question: "社内データ活用はまずRAGから始めるべきですか？",
    answer:
      "多くのケースではRAG先行が現実的です。社内文書の更新頻度が高く、最新情報に追従したい場合はRAGの方が変更を反映しやすく、PoCも進めやすいです。",
  },
  {
    question: "ファインチューニングの費用はどのように見積もるべきですか？",
    answer:
      "学習時の初期費用だけでなく、評価データ作成、再学習、運用監視、推論単価まで含めて見積もる必要があります。特にモデルや業務要件変更時の再調整費が見落とされやすいです。",
  },
  {
    question: "RAG実装コストはどこで増えやすいですか？",
    answer:
      "検索精度の改善フェーズで増えやすいです。文書整備、チャンク設計、メタデータ付与、アクセス権限、評価ループの設計に工数がかかります。",
  },
  {
    question: "RAGだけで精度が足りない場合はどうすればよいですか？",
    answer:
      "まず検索品質とプロンプト設計を改善し、それでも改善幅が小さい場合にファインチューニング併用を検討します。実務ではRAGで知識、ファインチューニングで出力様式を整える組み合わせが有効です。",
  },
  {
    question: "非エンジニアでも判断できる最小チェックポイントは何ですか？",
    answer:
      "3点です。1) 最新社内情報を回答に反映する必要があるか、2) 出力スタイルを厳密に固定したいか、3) データ更新頻度と運用予算が見合うか。これで初期方針を決められます。",
  },
  {
    question: "RAG導入時に最初に見るべき評価指標は何ですか？",
    answer:
      "正答率だけでなく、根拠文書の一致率と回答再実行率を同時に見るのが重要です。根拠が不一致のまま正答率だけを追うと、実運用で説明責任を満たせず手戻りが増えます。",
  },
  {
    question: "RAGとファインチューニングの併用はどのタイミングで始めるべきですか？",
    answer:
      "RAGで検索品質と運用フローが安定し、それでも出力形式のぶれが業務上のボトルネックになった時点が併用開始の目安です。先にFine-tuningへ進むより、RAG基盤を整えてから限定タスクで追加するほうが投資対効果を高めやすくなります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "RAG ファインチューニング 違い",
    "社内データ 生成AI",
    "LLM カスタマイズ 方法",
    "ファインチューニング 費用",
    "RAG 実装 コスト",
    "RAG 社内活用",
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

export default function RagVsFinetuningGuideRoute() {
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
          { name: "RAGとファインチューニングの判断フレーム", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <RagVsFinetunigGuidePage faqItems={[...faqItems]} />
    </>
  );
}
