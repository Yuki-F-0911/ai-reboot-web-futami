import type { Metadata } from "next";
import AiMindset3HabitsPage from "@/components/academyLanding/blog/ai-mindset-3habits/AiMindset3HabitsPage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle = "AI時代に「使いこなせる人」になるための3つの思考習慣【2026年版】 | AIリブート";
const pageDescription =
  "AIがうまく使えない原因はツールではなく思考の癖。「60点のラフ案を育てる」「背景を毎回渡す」「失敗を探索と捉える」3つの思考習慣と、30日で身につけるプランを具体的なBefore/After例とともに解説します。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-mindset-3habits";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T12:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "AIがうまく使えない人の共通点は何ですか？",
    answer:
      "最も多い共通点は「一発で完璧な回答を求めること」です。AIはたたき台（60点）を一瞬で出すのが得意なツール。それを自分で80点・90点に育てる役割分担を理解していないと、回答が「微妙」に見えてしまいます。次に多いのが「背景を渡さずに質問すること」です。AIはあなたの業種・立場・目的を知らないまま答えるため、的外れな回答になりやすい。この2点を変えるだけで、大半の人は活用の質が上がります。",
  },
  {
    question: "プロンプトの勉強は必要ですか？",
    answer:
      "最初はまったく不要です。プロンプトの書き方を覚えるより先に、「AIと対話しながら答えを育てる」感覚をつかむことが先決です。3往復のやりとりをしてみる、追加指示を出してみる——これを繰り返しているうちに、自然と「効く聞き方」が身についてきます。プロンプトの体系的な学習は、日常的にAIを使えるようになってからで十分です。",
  },
  {
    question: "どのAIから始めるのがおすすめですか？",
    answer:
      "ChatGPTの無料版が最もおすすめです。2026年現在、無料プランでもGPT-4oモデルが利用でき、文章作成・要約・翻訳・アイデア出しなど日常的な用途に十分対応しています。Googleアカウントをお持ちの方はGeminiも試しやすいです。「どれが最強か」より「毎日触れるか」の方が重要なので、まず一つ決めて使い続けることをすすめます。",
  },
  {
    question: "AIを使う時間がない場合はどうすればいいですか？",
    answer:
      "1日3分で十分です。「今日の仕事でもやもやしていること」を一言AIに投げかけるだけでOK。完璧な質問でなくていいです。「来週の会議の資料、どこから手をつければいいかな」と雑に話しかけるだけでも、アイデアが整理されます。「勉強する時間」ではなく「ちょっと相談する時間」として捉えると、日常に組み込みやすくなります。",
  },
  {
    question: "AI活用が上手な人と下手な人の差は何ですか？",
    answer:
      "一言で言えば「うまくいかなかったときに、もう一度試したかどうか」です。スキルでも才能でもありません。上手な人は「この聞き方では出なかった」という情報を次に活かします。下手な人は「AIって使えない」で止まります。もう一つの差は「文脈を渡す習慣」の有無。自分の状況・背景・目的をAIに伝える人は、回答の質が高くなります。どちらも思考の癖の問題で、気づいた瞬間から変えられます。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 活用 思考法",
    "生成AI うまく使う コツ",
    "AI 使いこなせない 原因",
    "AI思考習慣",
    "AIリテラシー 高める",
    "ChatGPT うまく使えない",
    "AI プロンプト 勉強 必要",
    "AI 始め方 考え方",
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

export default function AiMindset3HabitsRoute() {
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
          { name: "AI時代に「使いこなせる人」になるための3つの思考習慣", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiMindset3HabitsPage faqItems={[...faqItems]} />
    </>
  );
}
