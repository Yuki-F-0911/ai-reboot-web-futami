import type { Metadata } from "next";
import PerplexityPagesGuidePage from "@/components/academyLanding/blog/perplexity-pages-guide/PerplexityPagesGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "Perplexity Pages使い方ガイド｜公開・共有・SEO活用の実務手順【2026年2月最新版】 | AIリブート";
const pageDescription =
  "Perplexity Pagesの使い方を、公開・共有・更新運用の実務手順として整理。2026年2月時点はCreate pageが一時停止のため、Threads/Spacesで検証→Share/Exportで配布→（Convert復活後にPage化）という現実的フローで解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/perplexity-pages-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T21:20:00+09:00";
const modifiedTime = "2026-02-21";

const faqItems = [
  {
    question: "Pagesはいま使えますか？",
    answer:
      "2026年2月21日時点では、公式ヘルプで「Create page」が一時停止と案内されています。本記事では、確実に運用できるThreads/Spaces中心のフローで解説し、Convert復活後にPage化する前提で進めます。",
  },
  {
    question: "ThreadとSpaceは何が違う？",
    answer:
      "Threadは会話の履歴を保持して調査を深掘りする単位、SpaceはThreadsをプロジェクト単位で束ねて共同作業や運用をしやすくする作業場です。",
  },
  {
    question: "公開リンクはデフォルトでオンですか？",
    answer:
      "Threads/Spacesは基本的に非公開で、共有したいときにShareでリンク共有します。公開前に公開範囲を必ず確認してください。",
  },
  {
    question: "公開すると添付ファイルも見られますか？",
    answer:
      "公開したThreadは、リンク閲覧者が添付ファイルを見られる可能性があります。機密が混ざる場合は公開せず、Exportで共有する運用が安全です。",
  },
  {
    question: "無料プランでも運用できますか？",
    answer:
      "無料（Standard）でも基本検索や履歴は使えますが、Pro検索量やファイル周りは制限があります。機能は変更され得るため、最新の公式案内を確認した上で判断してください。",
  },
  {
    question: "共同編集の注意点は？",
    answer:
      "Spaceを共同作業のハブにしつつ、責任者1名と更新履歴の運用を必ず決めてください。特に数値や仕様の記述は更新日を併記し、古い情報の再配布を防ぎます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Perplexity Pages 使い方",
    "Perplexity Pages 公開",
    "Perplexity Pages SEO",
    "Perplexity 共有ページ",
    "Perplexity Threads",
    "Perplexity Spaces",
    "検索AI コンテンツ作成",
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

export default function PerplexityPagesGuideRoute() {
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
          { name: "Perplexity Pages使い方ガイド", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <PerplexityPagesGuidePage faqItems={[...faqItems]} />
    </>
  );
}
