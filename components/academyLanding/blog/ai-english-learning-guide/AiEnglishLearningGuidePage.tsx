"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiEnglishLearningGuidePageProps = {
  faqItems: readonly FAQItem[];
};

type MethodItem = {
  id: string;
  number: string;
  title: string;
  lead: string;
  body: string[];
  promptLabel: string;
  prompt: string;
  effect: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 英語学習", "ChatGPT 英語 勉強", "AI 英語 初心者", "英語学習 AI 方法"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "intro", label: "はじめに：正直な話をします" },
  { id: "method-1", label: "方法1：AIを「添削の先生」として使う" },
  { id: "method-2", label: "方法2：AIを「会話相手」として使う" },
  { id: "method-3", label: "方法3：単語を「文脈つき」で覚える" },
  { id: "method-4", label: "方法4：好きなコンテンツを「解説付き」で理解する" },
  { id: "method-5", label: "方法5：翻訳ではなく「理解」に使う" },
  { id: "honest-review", label: "正直な効果と限界" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学び方そのものを改善したい方へ" },
] as const;

const quickSummaryPoints = [
  "AIだけで英語がペラペラになるわけではない。でも「続けやすくなる」のは本当です。",
  "最も効果が出やすいのは「書く・読む」領域。英文添削・単語学習・コンテンツ理解に強い。",
  "会話練習もできるが、本格的に話せるようになるには人間との会話も必要。",
  "どの方法も「プロンプト（頼み方）」を工夫するだけで格段に使いやすくなる。",
  "まず1つの方法を選んで毎日5分から始めることが、挫折しない唯一の方法。",
];

const methods: readonly MethodItem[] = [
  {
    id: "method-1",
    number: "方法1",
    title: "AIを「添削の先生」として使う",
    lead: "「英語を書いたけど、これで合ってるか不安」。その不安を即座に解消してくれるのが、AIによる英文添削です。",
    body: [
      "従来、英文添削を受けるには英会話スクールに通うか、ネイティブの知人に頼むしかありませんでした。費用も時間もかかり、気軽に頼めない。そのせいで「書いた英語を放置」してしまい、上達の機会を逃している人は多いはずです。",
      "AIを使えば、自分が書いた英語をいつでも即座に添削してもらえます。しかも「なぜ間違っているか」「どういう表現の方が自然か」まで丁寧に説明してくれます。これは単に答えを教えるだけの翻訳とは大きく異なります。",
      "添削を繰り返すことで「自分が間違いやすいパターン」が見えてきます。三単現のs、前置詞の選び方、冠詞の使い方…。こうした反復が、確実な英語力の底上げにつながります。",
    ],
    promptLabel: "コピペして使えるプロンプト例",
    prompt: `この英文を自然な英語に直して、どこが不自然だったか教えてください：
[英文をここに貼り付け]

直してほしい観点：
1. 文法の間違い
2. ネイティブが使わない不自然な表現
3. もっと自然な言い回しがあれば提案

日本語で説明してください。`,
    effect:
      "一人で書いて放置するより格段に上達が速い。「間違えても恥ずかしくない」環境なので、どんどん書く練習ができる。",
  },
  {
    id: "method-2",
    number: "方法2",
    title: "AIを「会話相手」として使う（テキストベース）",
    lead: "「英会話スクールに行くほどじゃないけど、少し話せるようになりたい」。そんな人に最適なのが、AIとのテキスト会話練習です。",
    body: [
      "英語で話すのが怖い人の多くは、「間違えたら恥ずかしい」「相手に迷惑をかけるかも」という心理的ハードルを持っています。AIにはその心配がまったくありません。何度間違えても笑わず、怒らず、根気よく付き合ってくれます。",
      "テキストベースなので、スピーキングの訓練とは少し異なりますが、「英語で考えて、英語で表現する」練習としては非常に有効です。シチュエーションを設定することで、実際の場面に近い会話練習ができます。",
      "例えば「カフェの店員役として英語で会話してください」と設定すれば、注文の場面を想定した練習ができます。旅行前の準備や、特定のシーン（自己紹介、ビジネスメール確認など）に合わせた練習が、自分のペースでできます。",
    ],
    promptLabel: "コピペして使えるプロンプト例",
    prompt: `カフェの店員として、私の注文を英語で受けてください。

ルール：
・私が英語で話しかけるので、英語で答えてください
・私が文法を間違えたら、さりげなく正しい英語を使って返してください（指摘はしなくていい）
・1往復ごとに、私の英語で気になった点を1つだけ優しく教えてください

では始めます。`,
    effect:
      "実際の会話シーンを想定した練習ができる。「英語で考える」習慣がつく。人間相手と違い、何度でも同じシーンを繰り返せる。",
  },
  {
    id: "method-3",
    number: "方法3",
    title: "単語・表現を「文脈つきで」覚える",
    lead: "単語帳を眺めても覚えられない。その理由は「文脈なし」で単語を詰め込もうとしているからかもしれません。",
    body: [
      "人間の記憶は「文脈」と強く結びついています。単語の意味だけを丸暗記するより、「その単語がどんな状況で使われるか」を一緒に理解した方が、圧倒的に記憶に残りやすくなります。",
      "AIを使えば、気になった単語をすぐに「複数の文脈で例文とともに説明」してもらえます。しかもビジネスシーン、日常会話、フォーマルな文章など、目的に合わせた使い方で覚えることができます。",
      "さらに「日本語と英語でニュアンスが違う単語」「似た意味で使い分けが難しい単語」なども、AIに聞けばわかりやすく解説してもらえます。辞書より踏み込んだ説明が、理解を深めます。",
    ],
    promptLabel: "コピペして使えるプロンプト例",
    prompt: `"sophisticated" という単語を、3つの異なる文脈で例文を作って説明してください。

文脈：
1. ビジネス（会議・プレゼンで使う場合）
2. 日常会話（友人との会話で使う場合）
3. 文学・フォーマル文（文章表現で使う場合）

各文脈で：
・英語の例文（1〜2文）
・日本語訳
・なぜその文脈でこの単語が使われるかの説明

日本語で説明してください。`,
    effect:
      "単語帳より記憶に残りやすい。「どんな場面で使うか」までセットで覚えられるので、実際に使いやすくなる。",
  },
  {
    id: "method-4",
    number: "方法4",
    title: "好きな英語コンテンツを「解説付き」で理解する",
    lead: "英語の映画、ドラマ、歌の歌詞。「好きだけど意味が全部わからない」をAIが解決してくれます。",
    body: [
      "英語学習が続かない理由の一つは「楽しくないから」。教科書の例文より、自分が好きなコンテンツを通して学んだ方が、モチベーションが続きます。",
      "映画のセリフ、ドラマのワンシーン、音楽の歌詞…これらをAIに貼り付けて「解説してください」と頼むだけで、意味だけでなく文化的背景やニュアンスまで教えてもらえます。辞書では出てこない「生きた英語」を学べます。",
      "特に効果的なのが「スラングや口語表現」の理解です。日常英語では教科書に載っていない表現が多く使われます。AIはこうした表現も「どんな場面で使うか」「失礼ではないか」まで含めて説明してくれます。",
    ],
    promptLabel: "コピペして使えるプロンプト例",
    prompt: `この英語のセリフの意味と、日本語的に難しいニュアンスを説明してください：
[セリフや歌詞をここに貼り付け]

教えてほしいこと：
1. 直訳と自然な日本語訳の両方
2. 日本語に訳しにくいニュアンスや文化的背景
3. 似た表現と使い分け
4. このセリフをどんな場面で使うか

できるだけわかりやすく日本語で説明してください。`,
    effect:
      "好きなコンテンツを通して自然と英語に触れる習慣がつく。「楽しみながら学ぶ」サイクルができ、継続しやすくなる。",
  },
  {
    id: "method-5",
    number: "方法5",
    title: "翻訳ではなく「理解」に使う",
    lead: "「日本語に訳す」ことと「英語のまま理解する」ことは、似ているようで全く違います。",
    body: [
      "英語を日本語に訳すことはAIが最も得意なことの一つです。でも「翻訳に頼り続ける」のは、英語力の向上という観点からは逆効果になることがあります。",
      "目指すべきは「英語を英語のまま理解できる状態」です。そのためには「なぜこういう意味になるのか」「英語圏の人はこの表現でどんなイメージを持つか」を理解することが大切です。",
      "AIを使うときは「翻訳して」ではなく「英語のまま理解したい」という目標を伝えて使いましょう。単に日本語訳を教えるのではなく、英語の発想法・考え方を教えてくれる使い方に変えることで、長期的な英語力につながります。",
    ],
    promptLabel: "コピペして使えるプロンプト例",
    prompt: `この英文をそのまま訳すのではなく、英語圏の人がどういう気持ちでこう言うかを教えてください：
[英文をここに貼り付け]

教えてほしいこと：
1. この表現を英語圏の人が使うシチュエーション
2. 話し手はどんな感情・意図を持っているか
3. 日本語感覚と違う部分はどこか
4. 似た場面で日本語話者が間違いやすいこと

「翻訳ではなく理解」を目的として教えてください。`,
    effect:
      "「英語を英語で理解する」感覚が育つ。長期的に見ると最も英語力が上がる使い方。",
  },
];

const honestReviewPoints = [
  {
    category: "AIが特に強い領域",
    items: [
      "英文の添削・チェック：即座にフィードバックをもらえる。コスト０で何度でも試せる",
      "テキストベースの会話練習：「間違えるのが怖い」人の心理的ハードルを下げる",
      "単語・表現の文脈理解：複数の例文で覚えることで記憶定着が高まる",
      "コンテンツ理解のサポート：好きな素材を使った学習で継続モチベーションが上がる",
    ],
  },
  {
    category: "AIが苦手な・限定的な領域",
    items: [
      "スピーキング（話す）：音声入力を使えば練習できるが、本格的な発音改善には限界がある",
      "リスニング（聞く）：AIとのテキスト会話ではリスニング訓練にならない",
      "ネイティブのリアルなニュアンス：AIが生成する英語はやや「きれいすぎる」場合がある",
      "人間関係の中での英語使用：実際のコミュニケーションは人間との実践でしか磨けない",
    ],
  },
];

const continuationTips = [
  "5分から始める：「今日は5分だけ」と決めると始めやすい。始めてしまえば続く",
  "完璧を求めない：間違えながら使うのが正しい学び方。AIは失敗を歓迎してくれる",
  "1つの方法を3週間続ける：あれこれ試すより、1つを徹底した方が効果が見えやすい",
  "学習記録をAIに残す：「今日の練習で気づいたこと」をAIに話すと振り返りになる",
];

function MethodSection({ method }: { method: MethodItem }) {
  return (
    <motion.section
      id={method.id}
      className="mt-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">{method.title}</h2>
      <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">{method.lead}</p>
      <div className="mt-4 space-y-3">
        {method.body.map((paragraph, i) => (
          <p key={i} className="blog-p text-base leading-8 text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
        <p className="text-xs font-semibold tracking-wide text-gray-500">{method.promptLabel}</p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-6 text-slate-100">
          <code>{method.prompt}</code>
        </pre>
      </div>
      <div className="mt-4 rounded-lg border border-will-primary/20 bg-will-lighter px-5 py-4">
        <p className="text-sm font-semibold text-will-primary">この方法の効果</p>
        <p className="mt-1 text-sm leading-7 text-gray-700">{method.effect}</p>
      </div>
    </motion.section>
  );
}

export default function AiEnglishLearningGuidePage({ faqItems }: AiEnglishLearningGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIを使った英語学習：5つの方法と正直な効果" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AIを使った英語学習：初心者でも続けられる5つの方法と正直な効果【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIを使った英語学習：初心者でも続けられる5つの方法と正直な効果【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月24日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            英語、また挫折しそう…と思っている方、AIがその壁を少し低くしてくれるかもしれません。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            ただし正直に言います：<strong>AIだけで英語が話せるようになるわけではありません。</strong>でも、英語学習の継続コストを下げてくれることは確かです。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            この記事では、ChatGPTやClaudeを使って「確かに役立つ」と感じられる5つの方法を、実際のプロンプト例とともに紹介します。誇張なし、正直な効果レポートつきでお届けします。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          AIの基本的な使い方から始めたい方は
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            スマホでChatGPTを始めるガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            仕事で使えるプロンプトテンプレート集
          </Link>
          もあわせてご覧ください。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {quickSummaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* はじめに */}
        <motion.section
          id="intro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">はじめに：AIは英語学習の「壁を低くする」ツール</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            英語学習を何度も挫折してきた人の多くは、「続かないこと」が問題です。テキストや教材が悪いのではなく、「続けるコスト」が高すぎるのです。スクールに行く時間、ネイティブの先生に予約する手間、間違えた時の恥ずかしさ…。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            AIはこれらの「摩擦」を大幅に減らしてくれます。いつでも使える、何度でも間違えられる、費用がほぼかからない。この3点が揃っているのは、英語学習の歴史の中で初めてのことです。
          </p>
          <p className="blog-p mt-4 text-base leading-8 text-gray-700">
            ただし、AIはあくまで「練習の場」を提供するツールです。英語力そのものは、実際に使う回数を積み重ねることでしか育ちません。AIは「その回数を増やしやすくするためのインフラ」だと考えてください。
          </p>
          <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-5">
            <p className="text-sm font-semibold text-amber-800">この記事を読む前に確認してほしいこと</p>
            <ul className="mt-3 space-y-2 pl-1 text-sm leading-7 text-amber-700">
              <li>✓ 「AIで英語がペラペラになる」という期待は持たないでください</li>
              <li>✓ どの方法も「使い続けること」が前提です。魔法の方法はありません</li>
              <li>✓ 人間との会話と組み合わせることで、効果が最大化されます</li>
            </ul>
          </div>
        </motion.section>

        {/* 方法1〜5 */}
        {methods.map((method) => (
          <MethodSection key={method.id} method={method} />
        ))}

        <LineCtaBox />

        {/* 正直な効果と限界 */}
        <motion.section
          id="honest-review"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">正直な効果と限界：AIで英語学習は「ここまでできる、ここはできない」</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            ここからは、AIを使った英語学習の「本当のところ」をお伝えします。誇張なく、できることとできないことを整理します。
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {honestReviewPoints.map((section) => (
              <section
                key={section.category}
                className={`rounded-xl border p-5 ${section.category === "AIが特に強い領域" ? "border-green-200 bg-green-50" : "border-red-100 bg-red-50"}`}
              >
                <h3 className={`blog-h3 text-base font-semibold ${section.category === "AIが特に強い領域" ? "text-green-900" : "text-red-900"}`}>
                  {section.category}
                </h3>
                <ul className="mt-3 space-y-2 pl-1">
                  {section.items.map((item) => (
                    <li key={item} className={`text-sm leading-7 ${section.category === "AIが特に強い領域" ? "text-green-800" : "text-red-800"}`}>
                      {section.category === "AIが特に強い領域" ? "✓ " : "△ "}{item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="blog-h3 text-xl font-semibold text-gray-900">AIを使った英語学習を続けるための4つのコツ</h3>
            <p className="blog-p mt-3 text-base leading-8 text-gray-700">
              方法がわかっても続かない人が多いのは、始め方が間違っているからです。以下の点を意識するだけで、継続率が大幅に変わります。
            </p>
            <ul className="mt-4 space-y-3">
              {continuationTips.map((tip, i) => (
                <li key={i} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <p className="text-sm leading-7 text-gray-700">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            英語以外のAI活用法も広げたい方は、
            <Link href="/academy/blog/ai-study-learning-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI×勉強・資格・語学学習完全ガイド
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <LineCtaBox />

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox />

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                スマホでChatGPTを始める方法｜初心者向けステップガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者完全ガイド｜どっちを使うべき？
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜コピペですぐ使える
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-learning-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×勉強・資格・語学学習完全ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT上級テクニック｜仕事の質を上げる使い方
              </Link>
            </li>
          </ul>
        </section>

        {/* Academy CTA */}
        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AIを使いながら、学び方そのものを改善したい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            英語学習でAIをうまく使えた人は、他の学習・仕事でもAIを活かせるようになっています。共通しているのは「AIに何を頼むか」「どう指示するか」という判断力です。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、英語に限らず「仕事で使えるAI活用力」を、自分のペースで身につけられる環境を提供しています。英語学習で感じた「AIと学ぶ楽しさ」を、キャリア全体に広げてみませんか。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "実践的なAI活用スキル",
                body: "英語添削や会話練習で使ったプロンプト設計の考え方を、仕事全般に応用できるよう体系的に学べます。",
              },
              {
                title: "続けられる学習環境",
                body: "挫折しやすい独学の弱点を補う、仲間との学習コミュニティと定期的な振り返りの仕組みがあります。",
              },
              {
                title: "キャリアへの接続",
                body: "AI活用力を自分のキャリアにどう活かすかを、自己理解とセットで設計するサポートをしています。",
              },
            ].map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
