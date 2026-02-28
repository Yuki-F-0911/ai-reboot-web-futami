import type { Metadata } from "next";
import AiWritingToolPage from "@/components/academyLanding/blog/ai-writing-tool/AiWritingToolPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI文章作成ツール比較2026｜ChatGPT・Claude・Jasper・Copy.ai・Notion AI | AIリブート";
const pageDescription =
  "AI文章作成ツールを2026年版で比較。ChatGPT・Claude・Jasper・Copy.ai・Notion AIの料金、日本語対応、用途別おすすめ、AIらしい文章を防ぐ編集手順、日本語運用の注意点まで実務目線で解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-writing-tool";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T09:00:00+09:00";
const modifiedTime = "2026-02-20T09:00:00+09:00";

const faqItems = [
  {
    question: "AI文章作成ツールは無料プランだけでも実務で使えますか？",
    answer:
      "下書きやアイデア整理なら無料枠でも開始できます。ただし継続運用では、文字数上限、モデル制限、チーム共有機能の差が効いてくるため、配信頻度や担当人数に応じて有料プランを検討するのが現実的です。",
  },
  {
    question: "ChatGPTとClaudeは文章用途だとどう使い分けるべきですか？",
    answer:
      "短い反復や複数案の高速生成はChatGPT、長文の再構成や文脈を保った編集はClaudeが選ばれやすい傾向です。最終的には、実データで同じプロンプトを試し、出力の安定性と編集工数で判断してください。",
  },
  {
    question: "JasperとCopy.aiは日本企業でも導入しやすいですか？",
    answer:
      "どちらも日本語出力は可能で、チーム運用向け機能が強みです。一方で料金体系は席数基準かつ海外SaaS前提のため、契約通貨、権限管理、承認フローを事前に確認した上で導入すると運用しやすくなります。",
  },
  {
    question: "Notion AIはライティング専用ツールの代替になりますか？",
    answer:
      "議事録、ドキュメント、タスクを同じ場所で扱いたい場合は有効です。コピー最適化や大量テンプレ運用では、JasperやCopy.aiなど専門ライティング型を併用した方が成果が安定するケースがあります。",
  },
  {
    question: "AIが書いた文章らしさを減らす最短の改善手順は何ですか？",
    answer:
      "固有情報（数値、固有名詞、期間）を追加し、段落ごとに主張を1つに絞ることです。最後に音読で違和感を除去すると、機械的な反復や抽象語の多用を減らせます。",
  },
  {
    question: "GPTZeroなどのAI検出ツールはどこまで信用できますか？",
    answer:
      "検出ツールは統計的推定であり、100%の断定には使えません。補助指標として参照しつつ、一次情報照合、編集履歴、責任者レビューを品質管理の中心に置く運用が必要です。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 文章作成 ツール 比較",
    "AI ライティング 2026",
    "ChatGPT 文章",
    "Claude 文章生成",
    "コピーライティング AI",
    "Notion AI 文章作成",
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

export default function AiWritingToolRoute() {
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
          { name: "AI文章作成ツール比較2026", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiWritingToolPage faqItems={[...faqItems]} />
    </>
  );
}
