import type { Metadata } from "next";
import AiFirstMonthHonestDiaryPage from "@/components/academyLanding/blog/ai-first-month-honest-diary/AiFirstMonthHonestDiaryPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを始めて1ヶ月、正直に日記にしてみた｜戸惑いから小さな奇跡まで全部書いた | AIリブート";
const pageDescription =
  "「AIって難しそう」から始まった私の1ヶ月。最初の混乱、小さな感動、失敗、そして習慣になる瞬間まで正直に記録しました。AIを始めようか迷っているあなたへ、飾らない等身大の体験談をお届けします。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-first-month-honest-diary";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T15:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AI初心者はどんなことから始めるのがいいですか？",
    answer:
      "「今日困っていること」を1つAIに相談することが一番の近道です。「メールの返信に悩んでいる」「会議の資料をまとめたい」など具体的な用途から入ると、最初の成功体験が得やすいです。学習と考えず、「ちょっと詳しい同僚に聞く」感覚で使い始めましょう。",
  },
  {
    question: "ChatGPTは無料プランでも始められますか？",
    answer:
      "はい。2026年2月時点では、文章作成・要約・翻訳・アイデア出し・画像認識などの基本機能が無料で利用できます。まずは無料プランで1〜2週間試してみて、毎日使いたくなってから有料プランを検討するのが合理的です。",
  },
  {
    question: "プロンプトが下手でも使えますか？",
    answer:
      "使えます。最初から「完璧な指示」を書こうとしなくて大丈夫です。ふつうの日本語で話しかけて、返ってきた答えに「もっと短くして」「もう少しカジュアルに」と追加指示を出す——この対話の積み重ねがプロンプトを磨く一番の近道です。",
  },
  {
    question: "AIが間違ったことを言ったらどうすれば？",
    answer:
      "「それは違います」と率直に伝えれば大丈夫です。AIは怒りませんし、謝って修正してくれます。重要な数字・固有名詞・事実関係は必ず一次ソース（公式サイトや公的資料）で確認する習慣をつけると安全に使えます。",
  },
  {
    question: "AIを使い続けるコツはありますか？",
    answer:
      "「毎日1つ、仕事でAIに頼む」と決めることです。メールの下書き・議事録の要約・アイデアの壁打ちなど、日常の小さな作業から始めると、気づいたら習慣になります。学習だと思わず「便利な同僚に相談する」感覚で続けると長続きします。",
  },
  {
    question: "1ヶ月でどのくらい使えるようになれますか？",
    answer:
      "1週間後：基本的な質問と回答ができる。2週間後：追加指示で答えを磨けるようになる。1ヶ月後：自分の仕事で役立つ使い方が2〜3個定着する——これが多くの初心者の実感値です。「使いこなす」より「使い続ける」を目標にすると自然に上達します。",
  },
  {
    question: "職場でAIを使うことを上司に相談した方がいいですか？",
    answer:
      "会社や業種によって方針が異なります。機密情報や顧客データを入力しない範囲で個人の学習として使う分には問題になりにくいですが、業務アウトプットにAIを使う場合は社内のAI利用ガイドラインを確認することをおすすめします。ガイドラインがない場合は、直属の上司に確認しましょう。",
  },
  {
    question: "ChatGPT以外のAIも試した方がいいですか？",
    answer:
      "1ヶ月目はChatGPT1本に集中することをおすすめします。複数ツールを同時に試すと混乱します。ChatGPTに慣れてから、Claude（文章の質が高い）やGemini（Googleサービスとの連携が便利）を比較してみると、自分に合ったツールが見つかります。",
  },
  {
    question: "AIを使っていることを周りに言うのが恥ずかしいのですが…",
    answer:
      "最初は多くの人がそう感じます。でも、AIを使っていることを公言している人はどんどん増えています。職場で「AIを使って効率化した」と話せるようになった頃には、むしろ頼られる存在になっていることが多いです。まずは信頼できる1〜2人に話してみるところから始めましょう。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 始め方 体験談",
    "生成AI 初心者 1ヶ月",
    "ChatGPT リアル感想",
    "AI 初めて 正直",
    "生成AI 使い続けた 体験",
    "AI 日記 初心者",
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

export default function AiFirstMonthHonestDiaryRoute() {
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
          { name: "AIを始めて1ヶ月、正直に日記にしてみた", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFirstMonthHonestDiaryPage faqItems={[...faqItems]} />
    </>
  );
}
