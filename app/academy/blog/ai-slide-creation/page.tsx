import type { Metadata } from "next";
import AiSlideCreationPage from "@/components/academyLanding/blog/ai-slide-creation/AiSlideCreationPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIプレゼンスライド自動生成ツール比較2026｜Gamma・Beautiful.ai・Copilot・Google Slides AI | AIリブート";
const pageDescription =
  "AIプレゼンスライド自動生成を2026年基準で比較。Gamma・Beautiful.ai・PowerPoint Copilot・Google Slides AIの違い、Gamma無料プランの試し方、デザイン不要で仕上げるコツと手動微調整ポイントを解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-slide-creation";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AIでプレゼンスライドはどこまで自動生成できますか？",
    answer:
      "テキスト入力から章立て、各スライドの見出しと本文の叩き台まで自動化できます。最終品質を上げるには、数値・固有名詞・結論と根拠の整合を人が確認する工程が必要です。",
  },
  {
    question: "Gamma無料プランは何枚まで作れますか？",
    answer:
      "2026年2月20日時点のGamma公式ヘルプでは、Freeプランは月400 AI creditsで、1回の生成は最大10 cardsです。10枚を超える資料は、章ごとに分けて生成する運用が実務的です。",
  },
  {
    question: "Beautiful.aiは日本語で実務利用できますか？",
    answer:
      "公式には100以上の言語への翻訳機能と、CJKフォント運用手順が案内されています。一方でUI日本語化の範囲やプロンプト入力時の挙動は運用前に確認が必要です。",
  },
  {
    question: "PowerPoint Copilotを使うには何のライセンスが必要ですか？",
    answer:
      "Copilot for Microsoft 365の契約に加え、Business Standard/PremiumまたはMicrosoft 365 E3/E5などの対象ライセンスが必要です。Microsoft 365 Personal/Familyは対象外です。",
  },
  {
    question: "Google Slides AIは無料の個人アカウントでも使えますか？",
    answer:
      "Gemini in Slidesは対象のGoogle Workspaceエディションで提供される機能です。個人向け無料アカウントでの同等機能可否は契約条件と提供状況の確認が必要です。",
  },
  {
    question: "AI生成後に人が必ず直すべきポイントはどこですか？",
    answer:
      "優先度は、1) 主張と根拠の一致、2) 数値・固有名詞の事実確認、3) 1スライド1メッセージへの圧縮、4) 会社テンプレートやブランド表現の統一です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI プレゼン スライド 自動生成",
    "Gamma AI 使い方",
    "Beautiful.ai",
    "PowerPoint AI",
    "プレゼン 時短 AI",
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

export default function AiSlideCreationRoute() {
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
          { name: "AIプレゼンスライド自動生成ツール比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiSlideCreationPage faqItems={[...faqItems]} />
    </>
  );
}

