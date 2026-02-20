import type { Metadata } from "next";
import AiMedicalNursingGuidePage from "@/components/academyLanding/blog/ai-medical-nursing-guide/AiMedicalNursingGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI医療・看護活用ガイド2026｜診断支援・記録自動化・電子カルテ連携の実務 | AIリブート";
const pageDescription =
  "医療現場でのAI活用を医師・看護師・医療事務向けに整理。画像診断・投薬管理・記録自動化、看護師が使える文書支援、電子カルテ連携（富士フイルム・オムロン・EMR各社）の動向と個人情報・責任・精度リスク対策を解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-medical-nursing-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20";

const faqItems = [
  {
    question: "PMDA承認済みの医療AIソフトウェアはどこで確認できますか？",
    answer:
      "PMDAの「プログラム医療機器の承認等情報」と、公開されている製造販売承認品目一覧で確認できます。承認番号、承認日、申請者名、適応領域をセットで確認するのが実務上の基本です。",
  },
  {
    question: "看護師がAIで引き継ぎ記録を作るときに最初に決めるべきことは何ですか？",
    answer:
      "最初に決めるべきは、入力してよい情報範囲と最終確認者です。患者特定情報の扱い、記録の責任者、訂正ルールを決めないまま使い始めると、監査対応で問題が起きやすくなります。",
  },
  {
    question: "電子カルテとAIを連携する際の最初のチェック項目は何ですか？",
    answer:
      "連携方式、監査ログ、権限制御、データ保存場所、ベンダー契約上のデータ利用条件の5点です。特に医療情報システム安全管理ガイドラインとの整合を先に確認してください。",
  },
  {
    question: "診断支援AIの精度はどの指標で評価すべきですか？",
    answer:
      "感度・特異度・陽性的中率・陰性的中率に加え、実運用では再検査率、再作業率、見逃し再発率を追うことが重要です。導入前後で同条件比較できるよう測定設計を固定してください。",
  },
  {
    question: "無料AIツールを医療業務に使ってもよいですか？",
    answer:
      "一律に可否を判断できません。利用規約、学習利用設定、契約条件、院内ポリシー、個人情報保護法との整合を確認し、業務用途の可否を組織として決定する必要があります。",
  },
  {
    question: "医療現場でAI導入効果を測るKPIは何から始めるべきですか？",
    answer:
      "まずは記録作成時間、修正率、差し戻し件数、説明文作成時間、患者待ち時間の5指標から始めると効果判定しやすくなります。診療安全に関わる指標も同時に追跡してください。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI 医療 看護 活用", "医療 AI 2026", "看護師 AI ツール", "電子カルテ AI", "医療 診断支援"],
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

export default function AiMedicalNursingGuideRoute() {
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
          { name: "AI医療・看護活用ガイド2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiMedicalNursingGuidePage faqItems={[...faqItems]} />
    </>
  );
}
