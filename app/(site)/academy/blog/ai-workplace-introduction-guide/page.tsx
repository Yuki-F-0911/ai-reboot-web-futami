import type { Metadata } from "next";
import AiWorkplaceIntroductionGuidePage from "@/components/academyLanding/blog/ai-workplace-introduction-guide/AiWorkplaceIntroductionGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "職場でAIを広めたい：上司・同僚を説得する実践的な方法と、社内導入でつまずかないための準備【2026年版】 | AIリブート";
const pageDescription =
  "「自分だけAIを使っていて、職場に広められない...」そんな悩みを持つ方へ。上司への提案の仕方、抵抗感のある同僚への伝え方、社内ルール整備の始め方まで、具体的に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-workplace-introduction-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T21:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "上司がAIを嫌いな場合、どうすればいいですか？",
    answer:
      "まず「なぜ嫌いなのか」を把握することが大切です。「仕事が奪われる」「情報漏洩が怖い」「使いこなせない」——理由によって伝え方が変わります。いきなり「使いましょう」ではなく、上司の懸念に正面から応える形で話を進めましょう。特に「小さく始めて成果を見せる」アプローチは、懐疑的な上司にも効果的です。",
  },
  {
    question: "社内ガイドラインができるまで、AIを使わない方がいいですか？",
    answer:
      "個人情報や機密情報を入力しない範囲であれば、使い続けても問題ないケースが多いです。ただし、社外秘情報や顧客データを扱う業務では慎重さが必要です。並行してガイドライン整備を提案しながら、安全な範囲で使い続けることをおすすめします。",
  },
  {
    question: "小さな会社でも社内AI推進ができますか？",
    answer:
      "むしろ小さな会社の方がやりやすいです。意思決定のスピードが速く、全社員に顔が見える環境では、一人の行動が組織全体に与える影響が大きくなります。「社長に直接相談する」「チーム全員でまず1週間試してみる」といったアプローチが現実的です。",
  },
  {
    question: "競合他社がAIを使っているという情報は、上司説得に使えますか？",
    answer:
      "使えますが、慎重に。「競合に遅れる」という焦らせる言い方は逆効果になりがちです。「○○社がAIで○○の効率化に成功した」という具体的な事例として紹介し、「うちでも同様の効果が見込める」という形で提示する方が効果的です。",
  },
  {
    question: "AIを使いこなせない同僚をどうフォローすればいいですか？",
    answer:
      "「教える」のではなく「一緒にやる」姿勢が大切です。「この作業、一緒にAIで試してみませんか？」と声をかけ、横に座って一緒に操作してみましょう。独力でやらせると躓いて諦めるケースが多いですが、最初の成功体験を一緒に作ることで、その後は自分で動き始める人がほとんどです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "職場 AI 導入 方法",
    "社内 AI 普及",
    "上司 AI 説得",
    "職場 ChatGPT 使い方",
    "AI 社内ルール 作り方",
    "職場 AI 広め方",
    "AI 同僚 説得",
    "社内 AI 推進",
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

export default function AiWorkplaceIntroductionGuideRoute() {
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
          {
            name: "職場でAIを広めたい：上司・同僚を説得する方法",
            url: pageUrl,
          },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiWorkplaceIntroductionGuidePage faqItems={[...faqItems]} />
    </>
  );
}
