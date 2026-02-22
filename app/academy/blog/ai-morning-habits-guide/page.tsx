import type { Metadata } from "next";
import AiMorningHabitsGuidePage from "@/components/academyLanding/blog/ai-morning-habits-guide/AiMorningHabitsGuidePage";
import { ArticleStructuredData, BreadcrumbStructuredData, FAQStructuredData } from "@/components/seo/StructuredData";

const pageTitle =
  "AIを朝の5分ルーティンに入れるだけで1日が変わる！毎朝続けたいAI活用習慣術 | AIリブート";
const pageDescription =
  "朝5分でできるAI活用ルーティン6選を詳しく解説。TODOの整理・振り返り日記・ニュースまとめ・気分に合わせたアドバイス・学習1問1答・目標宣言まで、毎朝コピペして使えるプロンプトテンプレート付き。1週間続けたら何が変わるか・習慣化のコツ・ChatGPTカスタム指示の活用法まで、続けやすい朝のAI習慣術を初心者向けに解説。";
const pageUrl = "https://ai-reboot.io/academy/blog/ai-morning-habits-guide";
const pageOgImageUrl = "https://ai-reboot.io/images/ogp-default.webp";
const publishedTime = "2026-02-22T18:00:00+09:00";
const modifiedTime = "2026-02-22";

const faqItems = [
  {
    question: "朝のAIルーティンに必要な時間はどれくらい？",
    answer:
      "最短1〜2分から始められます。「今日のTODOを3つ書いてChatGPTに整理してもらう」だけなら2分以内で完了します。慣れてきたら5〜10分で複数のルーティンをこなせるようになります。完璧にやろうとせず、「今日は1つだけ」でも十分です。",
  },
  {
    question: "スマホだけで朝のAIルーティンはできますか？",
    answer:
      "はい、全てスマホで完結できます。ChatGPTアプリ（iOS・Android）やClaude.aiアプリを使えば、移動中・朝食を食べながら・ベッドの中でも利用できます。スマホのホーム画面の一番見えやすい場所にChatGPTアプリを置くと、開く頻度が自然と上がります。",
  },
  {
    question: "無料プランでも朝のAIルーティンはできますか？",
    answer:
      "できます。ChatGPT無料プランとClaude無料プランでも、TODOの整理・振り返り日記・学習1問1答・目標宣言など、この記事のほとんどのルーティンが使えます。ニュースまとめのリアルタイム検索機能のみChatGPT Plus以上が必要です。まずは無料プランから試してみてください。",
  },
  {
    question: "毎日同じ質問をしても意味がある？",
    answer:
      "あります。毎日「今日のTODOを整理して」と聞いても、その日の状況・気持ち・課題が違うため、返ってくる回答も毎回違います。むしろ「毎日同じ質問をする」ことが習慣化の本質です。毎朝歯磨きをするのと同じように、毎朝AIに一言打つことで、脳が「1日の始まり」を認識するトリガーになります。",
  },
  {
    question: "AI習慣が続かないときはどうすればいい？",
    answer:
      "「続かなくて当然」と思うことが最初のステップです。3日続いたらOK、1週間続いたらすごい、という基準に変えましょう。続かなくなったとき、「また今日から」と再スタートすることが大切です。AIはいつでも待っていてくれます。また「最低限これだけ（例：ChatGPTを開くだけ）」という最小単位の行動を決めておくと、再開しやすくなります。",
  },
  {
    question: "ChatGPTとClaudeどちらを使えばいい？",
    answer:
      "どちらでも朝のルーティンには使えます。ChatGPTはアプリの使いやすさ・カスタム指示機能・メモリ機能が充実しており、朝の習慣化には向いています。Claudeは会話の自然さ・長文への対応が強く、振り返り日記やアドバイスの質が高い傾向があります。まず両方を無料で試してみて、自分が「続けやすい」と感じる方を選ぶのが正解です。",
  },
  {
    question: "朝だけでなく夜のルーティンにも使えますか？",
    answer:
      "もちろんです。夜の活用としては「今日の振り返り1分日記」「明日のTODOを先に整理する」「今日モヤモヤしたことをAIに打ち明ける」などが効果的です。朝のルーティンが定着したら、夜の締めくくりにも取り入れると、PDCAサイクルが完成します。",
  },
  {
    question: "子育て中・主婦でも使えますか？",
    answer:
      "特におすすめです。子育て中は「まとまった時間が取れない」という悩みがありますが、AIルーティンは1〜2分で完結します。「今日の子どもの行事のチェック」「夕食の献立をAIに提案してもらう」「育児の悩みをAIに打ち明ける」など、日常に即したルーティンも作れます。スマホ1台あれば使えるので、子育てのすきま時間にぴったりです。",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI 朝活",
    "ChatGPT 朝ルーティン",
    "AI 習慣化",
    "毎朝 AI 活用",
    "朝 生産性 AI",
    "AI 朝5分",
    "ChatGPT 毎日 習慣",
    "AI 習慣 続け方",
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

export default function AiMorningHabitsGuideRoute() {
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
          { name: "AIを朝の5分ルーティンに入れるだけで1日が変わる！", url: pageUrl },
        ]}
      />
      <FAQStructuredData items={[...faqItems]} />
      <AiMorningHabitsGuidePage faqItems={[...faqItems]} />
    </>
  );
}
