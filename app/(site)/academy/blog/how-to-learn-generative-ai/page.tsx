import type { Metadata } from "next";
import HowToLearnGenerativeAiPage from "@/components/academyLanding/blog/how-to-learn-generative-ai/HowToLearnGenerativeAiPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ | AIリブート";
const pageDescription =
  "生成AIの学び方を、初心者が迷わない5ステップで解説。無料ツールの触り方、プロンプト練習、実務への落とし込み、継続のコツまで具体的に整理しています。今日の30分で学習ルーティンを作り、独学とスクールの判断軸も整えましょう。週次で見直せる型も紹介しています。";
const pageUrl = "https://ai-reboot.io/academy/blog/how-to-learn-generative-ai";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-20T10:00:00+09:00";
const modifiedTime = "2026-02-20T10:00:00+09:00";

const faqItems = [
  {
    question: "生成AIは何から学べばいいですか？",
    answer:
      "最初は「基礎ステージ」で、生成AIの仕組み理解とプロンプトの基本型を固めるのが効果的です。いきなり多機能ツールへ広げるより、1つのツールで業務タスクを再現できる状態を先に作ると学習効率が上がります。",
  },
  {
    question: "社会人は1日どれくらい学習すれば実務で使えるようになりますか？",
    answer:
      "平日30〜45分を週4日、週末に60〜90分の振り返りを1回入れる設計が現実的です。3ステージを12週間で回すと、実務接続まで到達しやすくなります。",
  },
  {
    question: "生成AIは独学とスクールのどちらが向いていますか？",
    answer:
      "独学は費用を抑えやすい反面、順序設計とフィードバックを自力で確保する必要があります。短期間で実務定着まで進めたい、学習継続に不安がある場合はスクールの伴走が有効です。",
  },
  {
    question: "2026年におすすめの生成AI学習リソースはありますか？",
    answer:
      "無料ではOpenAI Academy、Microsoft Learn、Google Cloud Skills Boostが使いやすく、有料ではCoursera Plusや国内スクールの伴走型講座が候補です。料金や提供内容は更新されるため、確認日付きで公式ページを必ず再確認してください。",
  },
  {
    question: "キャリア転換を見据える場合、どの段階で学習を見直すべきですか？",
    answer:
      "応用ステージに入った時点で、学習テーマを『できること』ではなく『提供価値』に置き換えるのが有効です。成果物と振り返りログを使って、自分の強みと市場ニーズの接点を言語化してください。",
  },
  {
    question: "AIリブートアカデミーはどんな人に向いていますか？",
    answer:
      "単発のツール操作ではなく、生成AI活用力の習得、自己理解・キャリアデザイン、仲間と共に学ぶ環境まで含めて学習基盤を作りたい社会人に向いています。",
  },
  {
    question: "学習記録はどの形式で残すと定着しやすいですか？",
    answer:
      "1日1ページのログ形式が実用的です。『試したプロンプト』『出力の良し悪し』『次回の改善点』の3項目だけでも十分です。週次で見返して再利用テンプレを作ると、学習が知識で終わらず業務資産になります。",
  },
  {
    question: "忙しい週に学習が止まったときは、どう再開すればよいですか？",
    answer:
      "再開時は新しい教材を増やさず、直近で使った1テーマに戻るのが効果的です。15分の短時間で『前回テンプレを1本改善する』だけに絞ると復帰しやすく、挫折の連鎖を防げます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "生成AI 学び方",
    "生成AI 勉強法",
    "生成AI 独学",
    "AI スキル 習得 方法",
    "社会人 AI 学習",
    "キャリア転換 AI学習",
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

export default function HowToLearnGenerativeAiRoute() {
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
          { name: "生成AIの学び方", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <HowToLearnGenerativeAiPage faqItems={[...faqItems]} />
    </>
  );
}
