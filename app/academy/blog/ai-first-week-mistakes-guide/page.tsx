import type { Metadata } from "next";
import AiFirstWeekMistakesGuidePage from "@/components/academyLanding/blog/ai-first-week-mistakes-guide/AiFirstWeekMistakesGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AIを使い始めた最初の1週間でやりがちな5つのミス【2026年版】今からでも遅くない正しい使い方 | AIリブート";
const pageDescription =
  "「ChatGPTを試してみたけど、思ったほど使えない...」そう感じているなら、最初の使い方に少し問題があるかもしれません。多くのAI初心者が最初の1週間でやりがちなミスを正直に解説し、今日からできる正しい使い方を提示します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-first-week-mistakes-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-23T20:00:00+09:00";
const modifiedTime = "2026-02-23";

const faqItems = [
  {
    question: "ChatGPTが嘘をついた。信用していいの？",
    answer:
      "AIが事実と異なる情報を出力する「ハルシネーション」は起こり得ます。特に数字・日付・固有名詞は必ず公式サイトで裏取りする習慣をつけましょう。「要約して」「整理して」「箇条書きにして」のような整理系タスクは精度が高く、初心者の練習に最適です。AIを「下書き機械」として使い、最終確認は自分でする——この分業意識が大切です。",
  },
  {
    question: "プロンプトを詳しく書くのが面倒です。もっと楽な方法は？",
    answer:
      "慣れてくると、詳しいプロンプトを書くこと自体が速くなります。とはいえ、最初は「テンプレート」を用意しておくのが一番楽です。よく使う場面（メール作成・アイデア出し・要約など）ごとに「使えた指示文」をメモしておけば、次回はコピペするだけ。ChatGPT・Claudeともに、チャット画面で「前回使った指示をベースに」と伝えればアレンジもできます。",
  },
  {
    question: "何度も入力するのが時間のムダに感じます",
    answer:
      "最初の数回は確かに手間に感じます。ただ、1回のやりとりで得られる質は限られます。10回のやりとりで完成したアウトプットは、1回で作ったものより確実に質が高い。最終的にかかる時間は「往復した方が短い」ことがほとんどです。また、慣れてくると「2〜3往復で完成させる」コツも身につきます。焦らず練習を続けましょう。",
  },
  {
    question: "最初の1週間の理想的な練習スケジュールを教えて",
    answer:
      "Day1：ChatGPTを開いて「今日の夕食のレシピを3つ提案して」と聞く（所要10分）。Day2：仕事や生活の中で「面倒だな」と感じたことをAIに頼む（所要15分）。Day3：AIの回答を自分で編集・修正してみる。Day4：「もっと丁寧に」「もう少し短く」と指示を変えて比べる。Day5：別のAI（ClaudeかGemini）を試す。Day6〜7：1週間で一番役に立ったタスクを振り返り、それを「定番の使い方」にする。",
  },
  {
    question: "他のAIツールへの移行のタイミングはいつ？",
    answer:
      "最初の1〜2週間はChatGPTに集中するのがおすすめです。1つのツールで「AIとの会話の感覚」を掴んでから他を試す方が、比較もしやすくなります。「ChatGPTで試したけどなんかしっくりこない」と感じ始めたら、Claudeを試すタイミングです。Claudeは長文の読み書きや思慮深い回答が得意です。Geminiはリアルタイムの情報やGoogleサービスとの連携が強みです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ChatGPT 使い方 間違い",
    "AI 初心者 失敗",
    "生成AI うまくいかない 理由",
    "ChatGPT 使いこなせない",
    "AI 最初 つまずき",
    "ChatGPT 使い方 コツ",
    "AI 初心者 ミス",
    "AI 初心者 使い方",
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

export default function AiFirstWeekMistakesGuideRoute() {
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
          { name: "最初の1週間でやりがちな5つのミス", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiFirstWeekMistakesGuidePage faqItems={[...faqItems]} />
    </>
  );
}
