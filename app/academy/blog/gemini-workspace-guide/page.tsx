import type { Metadata } from "next";
import GeminiWorkspaceGuidePage from "@/components/academyLanding/blog/gemini-workspace-guide/GeminiWorkspaceGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Gemini for Google Workspace使い方｜料金・活用・Copilot比較【2026】 | AIリブート";
const pageDescription =
  "Gemini for Google Workspaceの使い方を法人向けに解説。Business Standard/Plus/Enterpriseの違い、Gmail・Docs・Sheets・Meet活用、導入コストとROI、Copilot比較、日本語環境での評価手順を整理します。";
const pageUrl = "https://ai-reboot.io/academy/blog/gemini-workspace-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T14:00:00+09:00";
const modifiedTime = "2026-02-20T14:00:00+09:00";

const faqItems = [
  {
    question: "Gemini for Google WorkspaceはBusiness Standardでも使えますか？",
    answer:
      "2026年2月20日時点では、Google Workspace Business Standard/PlusおよびEnterprise系でGemini機能が提供されています。利用機能は管理者設定や提供地域で変わるため、導入前に管理コンソールで対象機能を確認してください。",
  },
  {
    question: "GmailとDocsで最初に効果が出やすい業務は何ですか？",
    answer:
      "Gmailは返信下書きと要点整理、Docsは議事録要約と文書リライトで効果が出やすい傾向です。まずは作業時間が長い定型業務を選び、1週間単位で削減時間を計測すると判断しやすくなります。",
  },
  {
    question: "料金は月額いくらで、円換算するとどのくらいですか？",
    answer:
      "Business Standardは年契約で$14/ユーザー/月、Business Plusは$22/ユーザー/月が目安です（2026年2月20日時点）。1 USD=149.57円換算では、Standardが約2,094円、Plusが約3,290円です。実請求は契約通貨と税で変動します。",
  },
  {
    question: "日本法人向けにデータ保存地域を日本へ固定できますか？",
    answer:
      "公開ドキュメント上、Workspaceのデータリージョンは米国/欧州の選択が基本で、日本固定は明示されていません（2026年2月20日時点）。要件が厳しい場合は、契約前にGoogle担当へ個別確認するのが安全です。",
  },
  {
    question: "Microsoft 365 Copilotと比較すると何を基準に選ぶべきですか？",
    answer:
      "既存業務基盤がGoogle Workspace中心ならGemini、Microsoft 365中心ならCopilotが運用コストを抑えやすいです。ツール単体価格ではなく、ベースライセンス込みの総額と管理ポリシーの整備工数で比較してください。",
  },
  {
    question: "日本語品質を評価するにはどう進めればよいですか？",
    answer:
      "メール下書き、議事録要約、表計算の式提案など実タスクでA/B比較します。評価軸は正確性、文体適合、修正回数、レビュー時間の4項目を固定し、2週間で判断すると現実的です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Gemini for Google Workspace 使い方",
    "Google Workspace AI 2026",
    "Gemini Gmail 活用",
    "Google Docs AI",
    "Gemini 料金",
    "Microsoft 365 Copilot 比較",
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

export default function GeminiWorkspaceGuideRoute() {
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
          { name: "Gemini for Google Workspace使い方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <GeminiWorkspaceGuidePage faqItems={[...faqItems]} />
    </>
  );
}
