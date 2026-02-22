import type { Metadata } from "next";
import AiResultsGapHonestGuidePage from "@/components/academyLanding/blog/ai-results-gap-honest-guide/AiResultsGapHonestGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIで成果が出る人・出ない人の本当の差｜使い方よりも大切な3つのマインドセット | AIリブート";
const pageDescription =
  "「AIを使っても何かが違う...」そのモヤモヤには理由があります。ツールの問題ではなく、思考の問題。成果を出している人が実践している3つのマインドセットを、具体的な事例と共に解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-results-gap-honest-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T12:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIを使って成果が出ない最大の理由は何ですか？",
    answer:
      "最も多い原因は「完璧な答えを一発で求めること」です。AIは対話を重ねることで回答の質が上がるツールです。最初の返答が70点でも「もう少し具体的にして」「この部分を変えて」と追加指示を重ねることで、最終的に使える成果物になります。",
  },
  {
    question: "「AIは使える」という人と「使えない」という人の一番の差は何ですか？",
    answer:
      "AIとの向き合い方です。「使える人」はAIを「一緒に考えてくれる相談相手」として扱い、対話を積み重ねます。「使えない人」は「正解を教えてくれる検索エンジン」として扱い、一度使って終わりにしてしまいます。ツールの差より、使い方の差が成果に直結します。",
  },
  {
    question: "プロンプトが下手でも成果は出せますか？",
    answer:
      "はい。最初から上手なプロンプトを書ける必要はありません。「下手なプロンプトを投げて → AIの回答を見て → 追加で修正指示を出す」という対話プロセスを繰り返すことで、プロンプトが下手でも最終的に使える成果物が出来上がります。重要なのは「一発で決めようとしない」姿勢です。",
  },
  {
    question: "AIで成果を出している人は1日どれくらい使っていますか？",
    answer:
      "頻度より習慣化の方が重要です。毎日1〜2つのタスクにAIを使う人は、週に1回2時間使う人より早く習熟します。「メールの返信はとりあえずAIに下書きしてもらう」「会議の準備はAIと壁打ちする」という日常的な使い方が、成果を出すための最短ルートです。",
  },
  {
    question: "「AIに任せすぎ」はよくないですか？",
    answer:
      "AIの出力をそのまま使うのではなく、人間が判断・編集するプロセスを残すことが大切です。AIは下書きを作るのが得意ですが、最終判断は人間が行うのが基本です。「AIと一緒に考える」という意識で使うと、質も責任感も保てます。",
  },
  {
    question: "AIを使い始めたものの続かなかった経験があります。どうすれば習慣化できますか？",
    answer:
      "「新しいツールを使う」という心構えをやめることです。代わりに「今日の仕事の中でAIが役に立てる場面を1つ探す」という意識で使いましょう。メールを書く前にAIに下書きを頼む、会議の前にAIと論点を整理する——既存の仕事の流れにAIを組み込むと、自然と続きます。",
  },
  {
    question: "失敗してもいいとわかっていても、変な回答が来ると不安になります。どう向き合えばよいですか？",
    answer:
      "AIの変な回答は「試行錯誤のヒント」と捉えましょう。「この角度から聞くとこういう回答が来るんだ」という発見として記録すると、次に活かせます。失敗を「探索コスト」として受け入れられると、AIとの対話が楽しくなってきます。",
  },
  {
    question: "業種によってAIで成果が出やすい・出にくい分野はありますか？",
    answer:
      "テキストを多く扱う職種（ライター・マーケター・営業・人事・企画）は成果が出やすい傾向があります。一方、対人スキルやフィジカルな作業が中心の職種では、補助的な使い方（資料作成・情報収集）から始めるのが現実的です。どの業種でも「文章を書く・要約する・調べる」という作業には活用できます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 成果 出ない 理由",
    "生成AI 活用 できない",
    "ChatGPT うまく使えない",
    "AI マインドセット",
    "生成AI 使いこなし 差",
    "AI 思考習慣",
    "ChatGPT 成果 出る 方法",
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

export default function AiResultsGapHonestGuideRoute() {
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
          { name: "AIで成果が出る人・出ない人の本当の差", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiResultsGapHonestGuidePage faqItems={[...faqItems]} />
    </>
  );
}
