import type { Metadata } from "next";
import LlmEvaluationGuidePage from "@/components/academyLanding/blog/llm-evaluation-guide/LlmEvaluationGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIの評価（LLM評価）入門｜“任せていい品質”を測る指標と運用【2026年版】";
const pageDescription =
  "LLM評価を正答率だけで終わらせず、品質・安全性・運用性で設計する実務ガイド。コピペで使える評価シート、30日運用ロードマップ、部門別の評価設計を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/llm-evaluation-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19";
const modifiedTime = "2026-02-19";

const faqItems = [
  {
    question: "LLM評価は何件サンプルを用意すればよいですか？",
    answer:
      "最初は高頻度業務を中心に20〜30件で十分です。重要なのは件数より、実務で起きる失敗パターンを含めることです。運用開始後に毎週追加して評価セットを育てます。",
  },
  {
    question: "正答率だけでは評価として不十分ですか？",
    answer:
      "不十分です。業務運用では正答率に加えて、機密情報の扱い、承認フロー遵守、再現性、処理時間、コストまで見ないと意思決定できません。",
  },
  {
    question: "幻覚はどう定義すると運用しやすいですか？",
    answer:
      "「根拠提示不可の断定」「参照データにない事実の生成」「数値や固有名詞の誤り」を明確に定義し、検知時の対応（差し戻し、要確認タグ付け）をルール化すると運用しやすくなります。",
  },
  {
    question: "承認フローはどこに入れるべきですか？",
    answer:
      "対外送信、削除、大量更新、契約・請求など影響が大きい操作に必ず入れます。下書き作成や要約など低リスク領域は自動化し、承認コストを抑えます。",
  },
  {
    question: "週次で最低限見るべき指標は何ですか？",
    answer:
      "正確性、根拠提示率、危険出力ブロック率、承認介入率、再実行率、1件あたりコストの6指標が最低ラインです。改善の優先順位が明確になります。",
  },
  {
    question: "小規模チームでも評価運用は回せますか？",
    answer:
      "可能です。最初は2〜3業務に絞り、評価指標を6項目に限定して毎週30分のレビューを回せば、十分に実務で機能します。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["LLM 評価", "生成AI 品質 テスト", "AI出力評価 指標", "LLM 運用監視", "生成AI ガバナンス 企業"],
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

export default function LlmEvaluationGuideRoute() {
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
          { name: "生成AIの評価（LLM評価）入門", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <LlmEvaluationGuidePage faqItems={[...faqItems]} />
    </>
  );
}
