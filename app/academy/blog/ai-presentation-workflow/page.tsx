import type { Metadata } from "next";
import AiPresentationWorkflowPage from "@/components/academyLanding/blog/ai-presentation-workflow/AiPresentationWorkflowPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIでプレゼン資料を効率的に作る方法｜構成・デザイン・推敲まで | AIリブート";
const pageDescription =
  "AIを使ってプレゼン資料作成（構成→スライド原稿→デザイン→推敲）を効率化する手順を解説。ChatGPT/Claudeのアウトライン作成、Gamma/Canva/Beautiful.aiの活用、プロンプト例、よくある質問までまとめます。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-presentation-workflow";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";
const faqItems = [
  {
    question: "AIでプレゼン資料を作るとき、最初に何から始めればいいですか？",
    answer:
      "最初は「目的・聞き手・制約（時間/分量/トーン）」を明文化し、アウトライン（章立て）をAIで作るのが最短です。構成が固まると、各スライド原稿・デザイン・推敲の工程が一気に進めやすくなります。",
  },
  {
    question: "ChatGPTとClaudeはプレゼン作成でどう使い分ければよいですか？",
    answer:
      "基本はどちらでも進められます。まずは同じ条件でアウトラインを出して比較し、出力の好みや得意な表現の傾向で選ぶのが現実的です。重要なのは、ツールよりも「目的と出力形式」を明確に指示することです。",
  },
  {
    question: "AIで作ったスライド原稿をそのまま使っても問題ないですか？",
    answer:
      "そのまま利用せず、事実確認と表現の最終調整を人が行うのが基本です。特に数値、固有名詞、契約条件、社外向け表現は誤りの影響が大きいため、最終確認の工程を必ず入れてください。",
  },
  {
    question: "デザインもAIに任せられますか？",
    answer:
      "レイアウト案や配色のたたき台はAIツールで作れますが、ブランド/社内テンプレートの整合や読みやすさ（文字量・余白・強調）は人の判断が重要です。最終的にはPowerPointやGoogle Slidesで整える前提にすると品質が安定します。",
  },
  {
    question: "おすすめのAIスライド作成ツールはどれですか？",
    answer:
      "用途で選ぶのが確実です。短時間で見栄え良く作るならGamma、テンプレートと素材の幅ならCanva、構成から自動生成したいならBeautiful.aiなどが候補になります。企業の定型フォーマット運用ならPowerPoint/Google Slidesも相性が良いです。",
  },
  {
    question: "プレゼン作成を効率化するプロンプトのコツはありますか？",
    answer:
      "「聞き手」「目的」「時間」「枚数」「主張（結論）」「根拠（データ/事例）」「トーン」「出力形式」をセットで渡すと精度が安定します。まずアウトライン→各スライド原稿→推敲の順に段階化すると、やり直しが減ります。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["AI プレゼン資料 作成", "AI パワポ 作成", "生成AI プレゼン", "AI スライド 作成", "プレゼン プロンプト"],
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

export default function AiPresentationWorkflowRoute() {
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
          { name: "AIプレゼン資料作成ワークフロー", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiPresentationWorkflowPage faqItems={[...faqItems]} />
    </>
  );
}

