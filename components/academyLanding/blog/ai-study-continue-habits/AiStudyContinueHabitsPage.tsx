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

const keywordTags = ["生成AI 続けられない", "AI 習慣化 方法", "ChatGPT 継続 コツ", "AI 学習 モチベーション", "生成AI 初心者 続け方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-cant-continue", label: "続かない3パターンと本当の原因" },
  { id: "common-traits", label: "続けられた人の共通点" },
  { id: "seven-habits", label: "7つの習慣化テクニック" },
  { id: "roadmap", label: "月別変化ロードマップ（1〜3ヶ月）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const whyCantContinuePatterns = [
  {
    pattern: "パターン1：「何をすればいいかわからなくなった」",
    description:
      "AIを入れたはいいが、日常のどの作業に使えばいいかわからなくなるケースです。最初の「文章を要約してみた」「メールを書いてみた」から先が続かない。使い道が自分の中で定着していない状態です。",
  },
  {
    pattern: "パターン2：「毎日使おうと思ったけど3日で終わった」",
    description:
      "意気込んで始めたものの、3日目ごろに飽きるか忘れてしまうパターンです。「AI活用」という漠然した目標を立てて、具体的なトリガーがなかったことが原因の多くを占めます。",
  },
  {
    pattern: "パターン3：「結局自分には向いていないのかも」",
    description:
      "AIの回答が期待を下回り、「自分のやり方が悪いのか」「そもそもAIが苦手な自分には無理なのか」と判断してしまうケースです。向いていないのではなく、指示（プロンプト）の渡し方が合っていないだけの場合がほとんどです。",
  },
] as const;

const commonTraits = [
  {
    title: "「今日困っていること」を相談窓口として使っている",
    body: "「AI活用」を目的にするのではなく、「今日の仕事の困りごと解決手段」としてAIを位置づけています。「この提案書の構成が決まらない」「このメールをどう断ればいいか」——具体的な問題があるから使い続けられます。",
  },
  {
    title: "60点の回答で先へ進む",
    body: "完璧な回答を求めず、AIの出力を「たたき台」として使います。「ここは直す」「この部分は使える」という判断をするのは自分。この役割分担が明確になると、AIを使うハードルが下がります。",
  },
  {
    title: "使った記録を残している",
    body: "NotionやメモアプリにAIとのやり取りを残している人は、3ヶ月後も使い続けやすいというパターンがあります。記録は振り返りの材料になるだけでなく、「自分はこれだけ使ってきた」という自信にもつながります。",
  },
  {
    title: "同じ目線で話せる仲間がいる",
    body: "AIの話ができる職場の同僚、オンラインコミュニティ、学習グループのどれかひとつでもあると継続率が上がります。「先週はこれに使った」「こういう指示が効いた」という会話が、次の一手を生みます。",
  },
] as const;

const sevenHabits = [
  {
    number: "01",
    title: "5分ルール——完璧より継続",
    body: "毎日5分だけAIを使うことを目標にします。「5分で何かを完成させる」のではなく、「5分触れる」でいい。週に21回触れれば、3ヶ月で60回以上の接触になります。量が質より先に来るのがAI習慣化の特徴です。",
  },
  {
    number: "02",
    title: "既存の習慣にくっつける（習慣スタッキング）",
    body: "「朝コーヒーを入れる→AIに今日の優先タスクを整理してもらう」「昼食後の10分→AIで明日の会議資料を一行メモにする」——すでにある行動のあとにAI使用をつなげます。意思力を使わず動き出せます。",
  },
  {
    number: "03",
    title: "アウトプット先を1つ決める",
    body: "Notionのページ、スマホのメモアプリ、Slackの自分用チャンネルなど、AIとのやり取りを保存する場所を1つ決めます。記録が蓄積すると「自分の使い方の型」が見えてきます。",
  },
  {
    number: "04",
    title: "週1回の5分振り返り",
    body: "週末か月曜朝に「今週AIを何に使ったか」を5分で振り返ります。「使えた場面」「使えなかった場面」「次に試したいこと」を1行ずつメモするだけで、次の週の使い方が具体的になります。",
  },
  {
    number: "05",
    title: "「今日の困りごと1つ」ルール",
    body: "AIを使う目的を「AI活用の練習」ではなく「今日の困りごとを1つ解決すること」に切り替えます。「会議の議事録をまとめたい」「返信に迷っているメールがある」——具体的なゴールがあると自然と使い始められます。",
  },
  {
    number: "06",
    title: "「下手でもOK」宣言",
    body: "AIへの指示（プロンプト）は最初から上手く書く必要がありません。「うまく答えてくれなかった」「的外れだった」は経験値です。「このくらいの精度で返ってくるんだ」という感触をつかむことが、最初の3週間の目標です。",
  },
  {
    number: "07",
    title: "仲間・コミュニティに入る",
    body: "一人でやめないために、同じくAIを学んでいる仲間の存在は効果的です。職場の同僚に「一緒に使ってみない？」と声をかける、オンラインコミュニティを覗いてみる——人の目があると動き続けられます。",
  },
] as const;

const roadmap = [
  {
    month: "1ヶ月目：なじむ",
    theme: "「AIを使うことへの抵抗感をなくす」",
    goals: [
      "毎日1回、何かに使う（5分ルール）",
      "仕事の困りごと3つにAIを試す",
      "「うまくいかなかった体験」を2〜3回経験する（これが財産になる）",
    ],
    milestone: "「AIに話しかけることが自然になった」という感覚が生まれれば1ヶ月目成功です。",
  },
  {
    month: "2ヶ月目：広げる",
    theme: "「自分の使い道を5つ見つける」",
    goals: [
      "定番タスク（メール・議事録・要約など）にAIを組み込む",
      "週1振り返りを習慣化する",
      "「AIに任せる仕事」と「自分でやる仕事」の境界を感じ始める",
    ],
    milestone: "「AIを使った日と使わなかった日の差」が体感できれば2ヶ月目成功です。",
  },
  {
    month: "3ヶ月目：型をつくる",
    theme: "「自分のAI活用パターンが定まる」",
    goals: [
      "「これはAIに任せる」という判断が反射的にできるようになる",
      "自分なりのプロンプトのパターンが3〜5つできている",
      "誰かにAIの使い方を教えられるくらいの解像度になる",
    ],
    milestone: "「AIなしで戻れない仕事が1つ以上できた」なら3ヶ月目成功です。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=ai-study-continue-habits&bonus=bonus06";

export default function AiStudyContinueHabitsPage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIを続けるための習慣デザイン" },
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
                title="生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「ChatGPTを入れたけど、続かなかった」——この経験、あなただけではありません。
            AIを始めた人が3ヶ月後も使い続けている割合は、実感として多くない。使い続けている人と、途中でやめてしまう人。その差はAIの能力でも頭の良さでも、ITリテラシーでもありません。
            <strong>「習慣の設計」にあります。</strong>この記事では、続けられなかった理由を正直に整理したうえで、今日から始められる7つの習慣化テクニックと3ヶ月のロードマップを紹介します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          まだ始めていない方は
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？初心者向け解説
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTスマホ開始ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
          から先に読むと理解が深まります。
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
            <li className="pl-1 marker:text-gray-500">AIが続かない主因は意欲不足ではなく「使う場面・トリガーの設計不足」</li>
            <li className="pl-1 marker:text-gray-500">続けられる人は「今日の困りごと」を入り口にし、60点の回答を受け入れている</li>
            <li className="pl-1 marker:text-gray-500">「5分ルール」と「習慣スタッキング」で意思力に頼らない仕組みを作る</li>
            <li className="pl-1 marker:text-gray-500">3ヶ月のロードマップで段階的に「自分の型」をつくる</li>
            <li className="pl-1 marker:text-gray-500">一人でやめないためにコミュニティの活用が有効</li>
          </ul>
        </motion.section>

        {/* 続かない3パターンと本当の原因 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-cant-continue" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「続けられない」3パターンと、本当の原因
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まず、なぜ続かないのかを整理します。AI習慣化に挫折したとき、多くの人が「自分の意欲が足りなかった」「AIが難しすぎた」と考えます。しかし実際には、<strong>習慣設計の問題が原因の大半</strong>を占めます。
          </p>
          <div className="mt-8 space-y-6">
            {whyCantContinuePatterns.map((item) => (
              <section key={item.pattern} className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-base font-bold text-gray-900">{item.pattern}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">習慣形成の仕組みから見ると</p>
            <p className="mt-3 text-sm leading-7 text-blue-900">
              習慣研究（Charles Duhigg『The Power of Habit』参照）によると、習慣は「トリガー（きっかけ）→ルーティン（行動）→報酬」のループで形成されます。AIを続けられない人に共通しているのは、<strong>「トリガーが設定されていない」</strong>こと。「毎日使おう」という意思だけでは、トリガーが曖昧すぎて行動が起きません。
            </p>
          </div>
        </motion.section>

        {/* 続けられた人の共通点 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="common-traits" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            続けられた人の共通点（4つの特徴）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIリブートのコミュニティやアカデミー参加者の声をもとに、3ヶ月以上継続できた人に見られる共通点を整理しました。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {commonTraits.map((item) => (
              <section key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※ AIリブートが収集したコミュニティ参加者の声をもとに、プライバシーに配慮して構成した内容です。
          </p>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-study-continue-habits" />
        </motion.section>

        {/* 7つの習慣化テクニック */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="seven-habits" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            今日から始められる7つの習慣化テクニック
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下の7つは「意志力に頼らない」ことを前提に設計されています。全部やろうとせず、まず自分がやりやすいものを1〜2つ選んで試してください。
          </p>
          <div className="mt-8 space-y-5">
            {sevenHabits.map((item) => (
              <section key={item.number} className="rounded-xl border-l-4 border-will-primary bg-white p-5 shadow-subtle">
                <div className="flex items-start gap-4">
                  <span className="min-w-[2rem] text-2xl font-bold text-will-primary/40">{item.number}</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 月別変化ロードマップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            月別変化ロードマップ（1〜3ヶ月）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI習慣化には段階があります。1ヶ月目、2ヶ月目、3ヶ月目でやることと目指す状態が異なります。自分が今どの段階にいるかを確認しながら進みましょう。
          </p>
          <div className="mt-8 space-y-6">
            {roadmap.map((item) => (
              <section key={item.month} className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.month}</h3>
                  <span className="rounded-full bg-will-primary/10 px-3 py-1 text-xs font-semibold text-will-primary">{item.theme}</span>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {item.goals.map((goal) => (
                    <li key={goal} className="pl-1 marker:text-gray-400">{goal}</li>
                  ))}
                </ul>
                <div className="mt-4 rounded-lg bg-white p-3 shadow-subtle">
                  <p className="text-sm font-semibold text-will-primary">
                    ✓ マイルストーン: <span className="font-normal text-gray-700">{item.milestone}</span>
                  </p>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            3ヶ月後のあなたは、AIの「使い方」より「判断軸」を持っている状態になっています。どのタスクをAIに渡し、どこを自分でやるか——この判断が速くなることが、AI習慣化の本当のゴールです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            学習の方向性を整理したい方は
            <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの学び方【2026年版】
            </Link>
            もあわせて参考にしてください。
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ：続けることが「習慣」になるまで
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを続けられない原因は、あなたの意欲や能力ではありません。トリガーの設計と、期待値の調整の問題です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">続けられない3パターンの根本は「習慣設計の欠如」</li>
            <li className="pl-1 marker:text-gray-500">続けられる人は「今日の困りごと」を入り口にし、60点でOKと割り切っている</li>
            <li className="pl-1 marker:text-gray-500">7つのテクニックは意志力ではなく「仕組み」で動く</li>
            <li className="pl-1 marker:text-gray-500">3ヶ月のロードマップで段階的に自分の型をつくる</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            今日からできることはひとつだけ：「今日の仕事で困っていることをAIに1つ相談する」だけです。完璧な使い方は3ヶ月後に自然とついてきます。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIリブートのLINEを追加して、あなただけの30日プランを受け取る"
            description="「何から始めればいいか」「自分に合った学習の進め方がわからない」——そんな方のために、AIリブートのLINEでは30日学習プランテンプレートを配布しています。週1本のAI学習コンテンツ＋ニュース解説も届きます。登録無料。"
            buttonLabel="LINEで30日学習プランを受け取る（無料）"
            href={lineUrl}
          />
        </motion.section>

        {/* アカデミーCTA */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI活用力とキャリアを同時に設計する
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            習慣化を超えて「AIを自分のキャリアにどう活かすか」を考えたくなったら、AIリブートアカデミーが一つの選択肢になります。
            生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            「続ける仕組み」が自分の外にある環境で学びたい方は、一度のぞいてみてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AI学習ロードマップを見る
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
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTをスマホで始める方法｜iPhone・Android対応の初期設定ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI最初の30日ガイド｜仕事で使い始める人のロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/how-to-learn-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの学び方【2026年版】社会人向け3ステージ学習ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型とNG/OK例
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-anxiety-overcome-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                「AIが怖い・難しい」を乗り越える安心スタートガイド2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-3month-journey" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを3ヶ月使い続けたら、こんな変化が起きた
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
