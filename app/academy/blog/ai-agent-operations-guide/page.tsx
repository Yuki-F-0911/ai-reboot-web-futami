import type { Metadata } from "next";
import AiAgentOperationsGuidePage from "@/components/academyLanding/blog/ai-agent-operations-guide/AiAgentOperationsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI業務自動化の始め方｜AIエージェント導入を失敗させない運用設計ガイド【2026年版】";
const pageDescription =
  "AIエージェント導入を業務選定、権限設計、承認フロー、監査ログ、リスク管理まで実務手順で解説。コピペ可能な導入チェックシートと30日運用プラン付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-agent-operations-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-19";
const modifiedTime = "2026-02-19";

const faqItems = [
  {
    question: "AI業務自動化はどの業務から始めるべきですか？",
    answer:
      "まずは参照系や下書き作成など、失敗時に被害が限定される業務から着手します。削除や外部送信など不可逆操作は、承認設計が固まるまで後回しにします。",
  },
  {
    question: "いきなり本番運用しても問題ないですか？",
    answer:
      "推奨しません。少なくとも2週間は限定範囲のPoCを行い、ログと承認フローを検証してから本番へ移行する方が安全です。",
  },
  {
    question: "承認フローは何段階で設計するのが現実的ですか？",
    answer:
      "低リスクは自動承認、中リスクは担当者承認、高リスクは上長承認の3段階が実務的です。判断基準を操作種別とデータ区分で固定すると運用しやすくなります。",
  },
  {
    question: "人の確認はどこに残すべきですか？",
    answer:
      "対外送信、削除、大量更新、契約・請求など影響範囲が大きい操作に残します。下書きや要約など低リスク領域は自動化して速度を確保します。",
  },
  {
    question: "導入効果は何で測ればよいですか？",
    answer:
      "処理時間短縮、再実行率、承認介入率、事故件数、1件あたりコストの5指標が基本です。品質面は別途評価指標を設けて同時管理します。",
  },
  {
    question: "小規模企業でもエージェント運用は可能ですか？",
    answer:
      "可能です。対象業務を1〜2件に絞り、権限マトリクスと承認フローを最小構成で作れば、少人数でも安全に運用を始められます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AIエージェント 導入", "AI業務自動化 始め方", "AIエージェント 権限設計", "AIガバナンス 企業", "AIエージェント 承認フロー"],
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

export default function AiAgentOperationsGuideRoute() {
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
          { name: "AI業務自動化の始め方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiAgentOperationsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
