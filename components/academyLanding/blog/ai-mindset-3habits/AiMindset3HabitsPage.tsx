"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 活用 思考法", "生成AI うまく使う コツ", "AI 使いこなせない 原因", "AI思考習慣", "AIリテラシー 高める"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-struggle", label: "AIがうまくいかない本当の理由" },
  { id: "ai-alignment-trap", label: "あなたはAIに「合わせて」いませんか？" },
  { id: "habit-1-draft", label: "思考習慣1：AIはラフ案の達人" },
  { id: "habit-2-context", label: "思考習慣2：AIは忘れっぽい助手" },
  { id: "habit-3-explore", label: "思考習慣3：「失敗を楽しむ」マインドに切り替える" },
  { id: "thirty-day-plan", label: "30日AIマインドプラン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const struggleReasons = [
  {
    id: "reason-prompt",
    label: "「プロンプトが難しくてわからない」",
    truth: "プロンプトの書き方は関係ない。最初から正確な指示を出そうとする「一発解決思考」が問題。",
  },
  {
    id: "reason-question",
    label: "「何を聞けばいいかわからない」",
    truth: "何を聞くかではなく「何を整理したいか」から始める習慣がないだけ。",
  },
  {
    id: "reason-answer",
    label: "「AIの答えが微妙で使えない」",
    truth: "AIは「完成品」を出すツールではなく「たたき台」を出すツール。その前提が違う。",
  },
] as const;

const threeHabits = [
  {
    id: "habit-1",
    number: "01",
    title: "AIはラフ案の達人",
    subtitle: "完成品を求めず、60点を80点に育てる",
    core: `AIに「完璧な答え」を求めると、必ずがっかりします。
それは、AIが完璧な答えを出すツールではないからです。

AIが本当に得意なのは「ゼロから60点のたたき台を一瞬で作ること」。
そしてあなたが得意なのは、「60点を自分の知識と経験で80点・90点に育てること」。

この役割分担を理解するだけで、AIの使い方がガラリと変わります。`,
    examples: [
      {
        scene: "週次報告書の作成",
        before: "「週次報告書を作って」と送って、何も知らないAIが出してきた空っぽのテンプレートを見て「使えない」と判断する",
        after: "「今週の営業実績を報告する週次報告書の骨子を作って。売上目標80%達成、主な課題は新規顧客獲得の遅れ、来週は既存客フォローに注力する予定」と伝え、出てきた骨子を自分の言葉で肉付けする",
      },
      {
        scene: "メールの下書き",
        before: "「お断りメールを書いて」と送り、出てきた汎用文をそのまま使って先方に失礼な印象を与える",
        after: "「3年付き合いのある取引先への予算不足によるお断りメール。角が立たない表現で、今後の関係を維持できる文面で」と具体的に伝え、出てきた下書きを自分のトーンに合わせて調整する",
      },
      {
        scene: "アイデア出し",
        before: "「新しいアイデアを教えて」と聞き、的外れな提案に「AIって使えない」と思う",
        after: "「社内の若手向けAI研修の企画アイデアを10個出して。参加者は20〜30代の非エンジニア、目標は日常業務での活用イメージを掴むこと」と送り、10案から3案を選んで自分で詳細化する",
      },
    ],
    insight: `完璧主義はAI活用の最大の壁です。
「もう少し短くして」「もっとカジュアルな表現にして」「3番目のアイデアを深掘りして」——こうした追加指示を重ねながら、一緒に答えを作っていく感覚。
これが「AIをラフ案の達人として使う」ということです。`,
  },
  {
    id: "habit-2",
    number: "02",
    title: "AIは忘れっぽい助手",
    subtitle: "毎回背景を渡す習慣が、思考の整理にもなる",
    core: `ChatGPTやClaudeを開いて、前回の会話を続けようとしたとき——「あれ、前に話したのに覚えてない」と感じたことはありませんか？

これはバグでも欠陥でもありません。現在のAIは、会話セッションをまたいだ記憶を持たない設計になっています（一部の有料機能を除く）。
つまり、AIは毎回「初対面」の状態で話しかけてきます。

この仕様を知らずに使うと、毎回ゼロから説明し直すことへのストレスが積み重なります。
逆に知っていると、「背景を渡す習慣」を最初から身につけられます。`,
    examples: [
      {
        scene: "仕事の相談を始めるとき",
        before: "「提案書を改善したい」とだけ送る→AIが的外れな汎用アドバイスを返す→「なんで自分の状況をわかってくれないの」と感じる",
        after: "「私はIT系中小企業の営業職（35歳）です。来週、既存顧客への追加提案を行います。提案書の構成改善について相談したいです」と冒頭に入れる→AIが文脈を踏まえた具体的な提案を返してくれる",
      },
      {
        scene: "長期プロジェクトの活用",
        before: "毎回一から説明し直すのが面倒で、AIを使うのをやめてしまう",
        after: "ChatGPTの「プロジェクト機能」やClaudeの「プロジェクト機能」を使ってシステムプロンプトに「私の基本情報・仕事の文脈・よく使う表現スタイル」をあらかじめ書いておく",
      },
    ],
    insight: `「背景を渡す習慣」には、思わぬ副産物があります。
相手に状況を説明するために「何が課題で、何を解決したいのか」を整理する過程で、自分自身の思考がクリアになっていくのです。

AIに相談を持ちかけるために言語化する作業そのものが、問題解決の半分を担ってくれています。
「AIとのコミュニケーション能力」とは、実は「自分の考えを整理する能力」と同義です。`,
  },
  {
    id: "habit-3",
    number: "03",
    title: "「失敗を楽しむ」マインドに切り替える",
    subtitle: "試行錯誤は「失敗」ではなく「探索」",
    core: `AIでうまくいかなかったとき、「やっぱり自分には無理だ」「AIって使えない」と感じたことはありませんか？

その感覚、一度リフレーミングしてみてください。

AIとのやりとりで「思った答えが出なかった」——これは失敗ではなく、「このアプローチでは出ない」という情報が手に入った瞬間です。
何回かの試行錯誤を経て「こう聞けば出る」というパターンが見つかる。それがAI活用における「探索」です。

うまくいかない体験をしている間、あなたはすでにAIを「使いこなしている途中」にいます。`,
    examples: [
      {
        scene: "プロンプトがうまくいかなかったとき",
        before: "「やっぱりAIは難しい」と思って、しばらくAIを開かなくなる",
        after: "「今日試したこと：○○。うまくいかなかった→次は△△を試してみる」と一行メモを残す。3週間後に振り返ると、自分だけの「うまくいくパターン集」になっている",
      },
      {
        scene: "1週間でやめた人と3ヶ月続けた人の差",
        before: "「すごい人はプロンプトを一発で決めてる」と思い込み、うまくいかない自分を責める",
        after: "「AIが得意な人も、最初は試行錯誤してた」と知り、うまくいかない体験を「コレクション」として楽しむ",
      },
    ],
    insight: `3ヶ月後にAIを日常的に使いこなしている人と、1週間でやめた人の差は「才能」でも「センス」でもありません。

差は一つだけ。
「うまくいかなかったときに、もう一度試したかどうか」。

AIは練習を要求しません。プロンプトを覚える必要もありません。
ただ、「また試してみよう」という小さな意欲が続くかどうか。それだけです。`,
  },
] as const;

const thirtyDayPlan = [
  {
    week: "1週目",
    theme: "まず使う（完璧でなくていい）",
    goal: "とにかく毎日1回AIに話しかける。良い回答が返ってこなくても気にしない",
    tasks: [
      "今日の仕事で困っていることを1つAIに相談する",
      "「もう少し〇〇して」という追加指示を1回出してみる",
      "AIの回答を「下書き」として使い、自分で手を加えてみる",
    ],
    mindset: "完璧な回答を期待しない。ラフ案をもらう感覚で。",
  },
  {
    week: "2週目",
    theme: "対話を増やす（1往復→3往復）",
    goal: "1つの話題で最低3回やりとりする習慣をつける",
    tasks: [
      "AIの回答に対して「もっと具体的に」「別の視点から」と追加指示する",
      "「これについてどう思う？」とAIの意見を聞いてみる",
      "「もし〇〇な場合は？」と条件を変えて再質問する",
    ],
    mindset: "AIとのやりとりは「会話」。一問一答ではなく対話として使う。",
  },
  {
    week: "3週目",
    theme: "コンテキストを渡す習慣",
    goal: "毎回の相談の冒頭に「自分の状況」を1〜2文で添える",
    tasks: [
      "「私は〇〇の仕事をしています。今日は〜について相談です」のテンプレを作る",
      "プロジェクト機能（ChatGPT・Claude）を試してみる",
      "うまくいった相談のパターンをメモに残す",
    ],
    mindset: "背景を渡すほど、AIの回答は的確になる。整理することで自分も頭がクリアになる。",
  },
  {
    week: "4週目",
    theme: "振り返って「得意な使い方」を発見する",
    goal: "3週間の試行錯誤を振り返り、自分にとって有効な使い方を言語化する",
    tasks: [
      "「この1ヶ月でAIが一番役に立ったのはどんな場面か」を書き出す",
      "「逆にAIがあまり使えなかった場面」も正直に書き出す",
      "来月の「マイAI活用リスト」を3つ作る",
    ],
    mindset: "「正解の使い方」は一つじゃない。自分の仕事・生活に合った使い方を見つけるのがゴール。",
  },
] as const;

const voiceComments = [
  {
    role: "30代・マーケティング職",
    quote:
      "最初の2週間は「なんか微妙」な回答ばかりで使うのをやめかけてました。でも『60点をもらって自分で育てる』という考え方を聞いてから変わって。今は企画書の下書きは必ずAIから始めるようになりました。作業時間が体感で半分になった。",
  },
  {
    role: "40代・管理職",
    quote:
      "背景を最初に渡す習慣、これが一番効いた。『私は製造業の課長で、部下10名のマネジメントについて相談したい』と一言添えるだけで、回答の質が全然違う。AIに相談するために状況を整理する過程で、自分の頭も整理されるのが意外な発見でした。",
  },
  {
    role: "20代・フリーランス",
    quote:
      "失敗が怖くて最初は慎重に使ってたんですが、そもそもAIに失敗はないんですよね。うまくいかなかったら別の聞き方を試せばいい。この気づきから急速に活用が進みました。今は毎日30分はAIと対話してます。",
  },
  {
    role: "50代・会社員",
    quote:
      "正直、プロンプトを勉強しようと思って本を買ったんですが読む気になれなくて。でも『プロンプトより考え方が先』と知って、本を読む前にとにかく使い始めたら、3週間で自然と使えるようになってました。考えすぎずに触ることが大事でした。",
  },
] as const;

export default function AiMindset3HabitsPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI時代に「使いこなせる人」になるための3つの思考習慣" },
          ]}
        />

        {/* ヘッダー */}
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AI時代に「使いこなせる人」になるための3つの思考習慣【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI時代に「使いこなせる人」になるための3つの思考習慣【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ChatGPTを使っているのに、なんかうまくいかない——その正体は、実はツールじゃなかった。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIがうまく使えない理由としてよく聞こえてくるのは、「プロンプトが難しくてわからない」「何を聞けばいいかわからない」「AIの答えが微妙で使えない」という声です。
            しかしこれらは、ツールの問題ではありません。すべて「思考の癖」から来ています。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            使い方より先に考え方を変える。それだけで、同じChatGPTが劇的に使いやすくなります。
            この記事では、AIを日常的に活用している人に共通する3つの思考習慣と、それを30日で身につけるための具体的なアクションをお伝えします。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            あなたがうまくいかないのは、AIのせいでも、あなたのせいでもありません。思考の切り替えが必要なだけです。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-anxiety-overcome-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの不安を乗り越えるガイド
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/how-to-ask-ai-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIへの聞き方完全入門
          </Link>
          ・
          <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIの学び方ロードマップ
          </Link>
          ・
          <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI活用をぐっと伸ばす7つのコツ
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ（結論先出し）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIがうまく使えない原因の9割は「ツールの問題」ではなく「思考の問題」。プロンプトを覚えるより先に考え方を変える
            </li>
            <li className="pl-1 marker:text-gray-500">
              思考習慣1：AIに「完成品」を求めない。60点のラフ案をもらって、自分で80点に育てる役割分担を意識する
            </li>
            <li className="pl-1 marker:text-gray-500">
              思考習慣2：AIは毎回「初対面」。相談の冒頭に状況・背景を1〜2文で添えるだけで、回答の質が格段に上がる
            </li>
            <li className="pl-1 marker:text-gray-500">
              思考習慣3：うまくいかない体験は「失敗」ではなく「探索」。小さなメモを残す習慣が、3ヶ月後に大きな差を生む
            </li>
            <li className="pl-1 marker:text-gray-500">
              30日プランで「考え方の癖」を身につけることができる。最初の1週間は完璧でなくていい、とにかく毎日使う
            </li>
          </ul>
        </motion.section>

        {/* AIがうまくいかない本当の理由 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-struggle" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIがうまくいかない本当の理由
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「AIを導入したが、思ったより活用されていない」——企業でも個人でも、よく聞こえてくる声です。
            2025年のBCG「AI at Work」調査によると、AIを日常業務で積極的に活用している日本人は全体の51%で、アジア太平洋地域の中で最も低い水準でした。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            なぜ日本ではAIの定着率が低いのか。原因としてよく挙げられるのが「プロンプトの難しさ」「何を聞けばいいかわからない」「回答が使えない」の3つです。
            しかしこれらをよく見ると、どれもツールの問題ではありません。
          </p>
          <div className="mt-8 space-y-4">
            {struggleReasons.map((reason) => (
              <div key={reason.id} className="rounded-lg border border-gray-200 bg-white p-5">
                <p className="text-base font-semibold text-gray-900">
                  よくある「困った」：<span className="text-will-primary">{reason.label}</span>
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-700">本当の原因：</span>
                  {reason.truth}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            プロンプトの書き方を覚えることより先に、<strong>AIとの向き合い方の「前提」を変えることが重要</strong>です。
            ツールの使い方より、思考の切り替えが先——これが、AIを日常的に活用している人と、そうでない人の最大の違いです。
          </p>
          <p className="mt-3 text-xs text-gray-500">
            参照：
            <a
              href="https://web-assets.bcg.com/80/28/18c9f7e44966a7c286adae9a8e00/20250613-ai-at-work-2025-slides-japanese.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 underline hover:text-gray-700"
            >
              BCG: AI at Work 2025 日本語版
            </a>
          </p>
        </motion.section>

        {/* あなたはAIに合わせていませんか？ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ai-alignment-trap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            あなたはAIに「合わせて」いませんか？
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            多くの人がやってしまう罠があります。それは、<strong>「AIに合わせようとする」</strong>こと。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「正しいプロンプトを書かなければ」「専門用語を使わなければ」「英語の方がいいのかな」——こうした気づかいは、実はAIを使いにくくする原因です。
            AIは、あなたが遠慮することを前提に設計されていません。
          </p>
          <div className="mt-6 rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
            <h3 className="text-lg font-bold text-gray-900">「一発で正解を求める」vs「対話しながら磨く」</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-red-50 p-4">
                <p className="text-sm font-semibold text-red-700">一発解決型（うまくいかない）</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  完璧な指示を一度で書こうとする→うまくいかない→「自分には無理」と結論づける
                </p>
              </div>
              <div className="rounded-lg bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-700">対話探索型（うまくいく）</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  まず荒削りな質問を投げる→返ってきた答えを見て追加指示する→3往復で形になる
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIへの相談は、「優秀な上司への質問」ではなく「頭の良い新入社員との壁打ち」に近いです。
            上司には一発で完璧な質問をしなければいけない気がする。でも新入社員に対しては、「まずこれで考えてみて、あとで一緒に直そう」という感覚で気軽に依頼できますよね。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            その感覚でAIを使えるようになると、一気に使いやすくなります。そのために必要な3つの思考習慣を、一つずつ見ていきましょう。
          </p>
        </motion.section>

        {/* LINE CTA（前半） */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）"
            description="「思考の切り替え方がわかった」次は実践あるのみ。AIリブートのLINEでは、週1本・仕事ですぐ使えるAI活用のコツとニュース解説をお届けしています。登録無料です。"
            buttonLabel="LINEで週1AI通信を受け取る（無料）"
          />
        </motion.section>

        {/* 3つの思考習慣 */}
        <div className="mt-14 space-y-16">
          {threeHabits.map((habit, idx) => (
            <motion.section
              key={habit.id}
              id={idx === 0 ? "habit-1-draft" : idx === 1 ? "habit-2-context" : "habit-3-explore"}
              className="scroll-mt-28"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionReveal}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-gray-900">
                  思考習慣{habit.number}：{habit.title}
                </h2>
              <p className="mt-3 text-base font-medium text-will-primary">{habit.subtitle}</p>

              <div className="mt-5 whitespace-pre-line text-base leading-8 text-gray-700">{habit.core}</div>

              {/* Before/After 例 */}
              <h3 className="mt-8 text-xl font-bold text-gray-900">具体的なBefore / After</h3>
              <div className="mt-4 space-y-6">
                {habit.examples.map((ex, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 p-5">
                    <p className="text-sm font-bold text-gray-700">場面：{ex.scene}</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg bg-red-50 p-3">
                        <p className="text-xs font-semibold text-red-600">Before（思考習慣なし）</p>
                        <p className="mt-2 text-sm leading-7 text-gray-700">{ex.before}</p>
                      </div>
                      <div className="rounded-lg bg-green-50 p-3">
                        <p className="text-xs font-semibold text-green-600">After（思考習慣あり）</p>
                        <p className="mt-2 text-sm leading-7 text-gray-700">{ex.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">この習慣のポイント</p>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-amber-900">{habit.insight}</p>
              </div>

              {/* 習慣2のあとにMidCTA */}
              {idx === 1 && (
                <div className="mt-10">
                  <MidArticleCtaBox slug="ai-mindset-3habits" />
                </div>
              )}
            </motion.section>
          ))}
        </div>

        {/* ユーザーの声 */}
        <motion.section
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">思考習慣を変えた人たちの声</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実際に「ツールより考え方を変えた」ことでAI活用が変わったという声を紹介します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {voiceComments.map((comment) => (
              <blockquote key={comment.role} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm font-semibold text-will-primary">{comment.role}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700 before:content-['「'] after:content-['」']">
                  {comment.quote}
                </p>
              </blockquote>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※ AIリブートが収集した学習者・利用者の声をもとに、プライバシーに配慮して再構成したエピソードです。
          </p>
        </motion.section>

        {/* 30日AIマインドプラン */}
        <motion.section
          className="mt-16"
          id="thirty-day-plan"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            具体的な「AI思考習慣」の身につけ方——30日プラン
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3つの思考習慣は、一度に全部身につけようとしなくて大丈夫です。
            週単位でテーマを絞って取り組むことで、無理なく習慣化できます。
          </p>
          <div className="mt-8 space-y-6">
            {thirtyDayPlan.map((week) => (
              <section key={week.week} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{week.week}：{week.theme}</h3>
                  <p className="mt-1 text-sm text-gray-600">{week.goal}</p>
                </div>
                <ul className="mt-4 space-y-2 pl-4">
                  {week.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-7 text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-will-primary" />
                      {task}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-white p-3 shadow-subtle">
                  <p className="text-xs font-semibold text-gray-500">今週のマインドセット</p>
                  <p className="mt-1 text-sm leading-7 text-gray-700">{week.mindset}</p>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            30日後、あなたは「AIを使った回数」より「AIとの対話から何を学んだか」を語れるようになっているはずです。
            それが、本当の意味でAIを「使いこなせる人」への第一歩です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            プロンプトの書き方をもっと体系的に学びたい方は、
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプトの書き方入門
            </Link>
            もあわせてご覧ください。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* LINE CTA（FAQ後） */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）"
            description="思考習慣を変えた次は、実践的なAI活用の知識を継続的にインプット。毎週1本、現場で使えるAI活用のコツとニュース解説をLINEでお届けします。登録は無料です。"
            buttonLabel="LINEで週1AI通信を受け取る（無料）"
          />
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          id="summary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：ツールより先に思考を変える——それが、AI時代の本当の始め方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事では、AIを使いこなせる人に共通する3つの思考習慣を整理しました。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>思考習慣1</strong>：AIに「完成品」を求めない。60点のラフ案から始めて、自分で80点に育てる
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>思考習慣2</strong>：AIは毎回初対面。背景・文脈を毎回1〜2文で添える習慣をつける
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>思考習慣3</strong>：うまくいかない体験は「失敗」ではなく「探索」。小さなメモを積み重ねる
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            これらはどれも、AIの機能や仕様の話ではありません。あなたの「AIへの向き合い方」の話です。
            だから、どのAIツールを使っていても同じように効きます。ChatGPTでも、Claudeでも、Geminiでも。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIが得意な人は、最初から得意だったわけではありません。
            使いながら「あ、こうすればいいのか」という気づきを積み重ね、少しずつ自分なりの使い方を発見していった人たちです。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            今日から30日間、完璧でなくていいのでAIと毎日向き合ってみてください。1ヶ月後の自分が、きっと「あの時始めてよかった」と思えるはずです。
          </p>
        </motion.section>

        {/* CTA：アカデミーへ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            思考習慣をキャリアの力に変えたい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            「思考習慣が変わった、次はこれをキャリアの次の一歩につなげたい」——そう感じた方は、学習プロセス全体を見直すことが有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              生成AIの学び方ロードマップを読む
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AIリブートアカデミーを見る
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-ask-ai-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTに何を聞けばいい？｜AIへの質問・相談の仕方がわかる完全入門ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-mastery-tips-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                初心者がAI活用をぐっと伸ばす7つのコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI最初の30日ガイド｜仕事で使い始めるためのロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
