import type { Metadata } from "next";
import RagUseCasesPage from "@/components/academyLanding/blog/rag-use-cases/RagUseCasesPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説 | AIリブート";
const pageDescription =
  "RAG（検索拡張生成）の実務ユースケースを知りたい方向けに、社内ナレッジ検索、サポート自動化、法務、営業、医療、教育、製造、金融の活用事例8選と、導入ステップ・注意点を要点から整理しました。";
const pageUrl = "https://ai-reboot.io/academy/blog/rag-use-cases";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "RAGはどんな業務から始めるのがよいですか？",
    answer:
      "まずは「参照すべき資料が明確で、問い合わせや確認が繰り返される業務」から始めるのが実務的です。例として、社内FAQ、マニュアル検索、規程検索などが挙げられます。",
  },
  {
    question: "RAGを導入すればハルシネーションはなくなりますか？",
    answer:
      "減らせる可能性はありますが、ゼロにはなりません。検索で適切な根拠が取得できない場合や、文書が古い/不正確な場合は誤りが残るため、根拠提示・評価・レビュー手順が重要です。",
  },
  {
    question: "社内データでRAGを作るときに最初に決めるべきことは？",
    answer:
      "権限（誰が何を参照できるか）、参照対象データ（正本となる文書）、更新/削除の反映方法、ログ（検索クエリと参照文書）の保存方針を最初に決めることが重要です。",
  },
  {
    question: "RAGとファインチューニングはどちらを選ぶべきですか？",
    answer:
      "最新の知識や社内文書を根拠として参照したい場合はRAGが向き、文章のトーンや手順の型を固定したい場合はファインチューニングが向くことが多いです。実務では併用する設計もあります。",
  },
  {
    question: "導入後に品質を保つには何を見ればよいですか？",
    answer:
      "検索の適合率、参照根拠の妥当性、回答の正確性、レイテンシ、コスト、ユーザーの再質問率などを追い、根拠が取れていないケースをログで特定して改善する運用が有効です。",
  },
  {
    question: "セキュリティ面で特に注意すべき点は？",
    answer:
      "機密区分と入力ルール、文書のアクセス権限、検索結果のフィルタリング、操作ログ、外部連携先への送信可否を明文化することが重要です。個人情報や契約情報は取り扱い境界を固定します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["RAG 活用事例", "RAG ユースケース", "検索拡張生成 事例", "RAG 導入", "社内ナレッジ RAG", "RAG 業務活用"],
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

export default function RagUseCasesRoute() {
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
          { name: "RAG活用事例", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <RagUseCasesPage faqItems={[...faqItems]} />
    </>
  );
}
