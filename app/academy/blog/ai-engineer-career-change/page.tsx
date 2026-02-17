import type { Metadata } from "next";
import AiEngineerCareerChangePage from "@/components/academyLanding/blog/ai-engineer-career-change/AiEngineerCareerChangePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "未経験からAIエンジニアへの転職ロードマップ｜学習手順と準備を解説 | AIリブート";
const pageDescription =
  "未経験からAIエンジニア転職を目指す方向けに、必要スキル、学習ロードマップ、学習手段、評価されるポートフォリオの作り方を整理。遠回りしない学び方と応募準備の順番がわかります。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-engineer-career-change";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-17T09:00:00+09:00";
const modifiedTime = "2026-02-18T12:00:00+09:00";

const faqItems = [
  {
    question: "未経験・文系でもAIエンジニアに転職できますか？",
    answer:
      "可能です。最初から高度な研究開発を目指すより、Python基礎、データ前処理、API活用など実務で使う範囲を固めて成果物を作る方が現実的です。",
  },
  {
    question: "数学はどこまで必要ですか？",
    answer:
      "まずは統計の基礎（平均、分散、相関）と線形代数の初歩を押さえれば十分に学習を進められます。実務では数式そのものより、前提を説明できる力が重要です。",
  },
  {
    question: "転職活動は学習開始からいつ始めるべきですか？",
    answer:
      "ポートフォリオの骨子が1つできた段階で求人要件の確認を始めるのが効率的です。応募準備と学習を並行すると、必要スキルの優先順位が明確になります。",
  },
  {
    question: "ポートフォリオは何を作れば評価されやすいですか？",
    answer:
      "課題設定、データ処理、実装、評価、改善提案までを一連で示せる成果物が評価されやすい傾向があります。完成度より、思考過程の再現性を重視してください。",
  },
  {
    question: "30代・40代でも未経験転職は可能ですか？",
    answer:
      "可能です。年齢より、これまでの業務経験をAI活用に接続できるかが重要です。現職ドメインとAIスキルを掛け合わせる戦略が現実的です。",
  },
  {
    question: "現職を続けながら学習する場合のコツはありますか？",
    answer:
      "平日と休日で学習目的を分けると継続しやすくなります。平日は理解、休日は実装という形で固定し、進捗を可視化する運用が有効です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AIエンジニア 転職 未経験",
    "未経験 AIエンジニア なるには",
    "AIエンジニア 学習ロードマップ",
    "AIエンジニア ポートフォリオ",
    "AIエンジニア キャリアチェンジ",
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

export default function AiEngineerCareerChangeRoute() {
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
          { name: "未経験からAIエンジニアへの転職ロードマップ", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiEngineerCareerChangePage faqItems={[...faqItems]} />
    </>
  );
}
