import type { Metadata } from "next";
import ShadowAiCountermeasuresPage from "@/components/academyLanding/blog/shadow-ai-countermeasures/ShadowAiCountermeasuresPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "シャドーAI対策の進め方｜\"禁止\"せず安全に使わせる統制設計【2026年版】";
const pageDescription =
  "社員の無断AI利用（シャドーAI）を禁止ではなく統制で解決する方法。発見・可視化・ルール設計・監査の4段階フレームワークと、統制チェックリスト付き。";
const pageUrl = "https://ai-reboot.io/academy/blog/shadow-ai-countermeasures";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-18";
const modifiedTime = "2026-02-18";

const faqItems = [
  {
    question: "シャドーAIとは何ですか？",
    answer:
      "組織が把握・承認していないAIツールを社員が業務で使用している状態です。個人アカウントのChatGPTやBing AIなどが代表例です。",
  },
  {
    question: "なぜ「全面禁止」では解決しないのですか？",
    answer:
      "禁止しても利便性の高いツールは個人端末経由で使われ続けるため、統制が効かないまま情報漏えいリスクが残ります。",
  },
  {
    question: "まず何から始めればよいですか？",
    answer:
      "現状の利用実態を可視化するアンケートまたはログ調査が第一歩です。禁止より先に「何がどこで使われているか」を把握します。",
  },
  {
    question: "統制と禁止の違いは？",
    answer:
      "禁止は利用そのものを止める方針、統制は利用を認めつつルール・権限・ログで安全に管理する方針です。",
  },
  {
    question: "小規模企業でも対策は必要ですか？",
    answer:
      "規模に関わらず、顧客情報や契約情報を扱う業務があれば対策は必要です。まず入力ルールの最小セットから始めるのが現実的です。",
  },
  {
    question: "どの部署が主導すべきですか？",
    answer:
      "情報システム部門が主導し、法務・現場部門と三者で進めるのが一般的です。責任者を1名明確にすることが重要です。",
  },
  {
    question: "統制の効果をどう測定しますか？",
    answer:
      "シャドーAI利用率の変化、公式ツール利用率、インシデント件数を四半期ごとに追跡するのが基本です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["シャドーAI 対策", "生成AI 統制", "シャドーIT AI", "生成AI 利用 管理"],
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

export default function ShadowAiCountermeasuresRoute() {
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
          { name: "シャドーAI対策の進め方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <ShadowAiCountermeasuresPage faqItems={[...faqItems]} />
    </>
  );
}

