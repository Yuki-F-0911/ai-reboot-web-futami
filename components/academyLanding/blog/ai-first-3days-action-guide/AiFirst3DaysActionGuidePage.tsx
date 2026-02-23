"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

const lineUrl = "https://bexn9pao.autosns.app/line";

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

const keywordTags = ["AI 始め方 初心者 2026", "ChatGPT 始め方 スマホ", "生成AI 入門 最初"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "before-start", label: "始める前に知っておきたいこと" },
  { id: "day1", label: "1日目（今日！）：アカウントを作って最初の一言" },
  { id: "day2", label: "2日目：仕事・日常で試してみる" },
  { id: "day3", label: "3日目：学習の習慣を作る" },
  { id: "after-3days", label: "3日後のあなたへ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次のステップ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const day1Actions = [
  {
    number: "Action 1",
    title: "ChatGPT（またはGemini）のアカウントを無料で作る",
    time: "約5〜10分",
    body: "まずはchatgpt.com（またはgemini.google.com）にアクセスして「サインアップ」をクリック。メールアドレスまたはGoogleアカウントで登録できます。どちらを選んでも大丈夫——「迷ったらChatGPT」と覚えておけばOKです。アカウント作成は無料で、クレジットカードも不要です。",
    tip: "ChatGPT・Gemini・Claude、どれでも大丈夫です。「どれにするか」で迷うより、1つ決めてすぐ使い始めることが大切です。",
  },
  {
    number: "Action 2",
    title: "最初の質問をしてみる",
    time: "約5分",
    body: "アカウントができたら、すぐに何か質問してみましょう。難しく考えなくて大丈夫。「明日の朝食のレシピを教えて」「今週末に東京で楽しめることを3つ教えて」など、なんでもOK。重要なのは「使ってみた」という体験をすることです。回答が完璧でなくてもOK。まず使うことが大事です。",
    tip: "回答が思っていたのと違っても、がっかりしないでください。「へえ、こういう感じか」と受け取るだけでOKです。",
  },
] as const;

const day2Actions = [
  {
    number: "Action 3",
    title: "自分の仕事や日常の悩みを1つAIに相談してみる",
    time: "約10〜15分",
    body: "今日の仕事や日常の中で「ちょっと面倒だな」と思っていることを1つ、AIに頼んでみましょう。下のプロンプト例をコピーして使ってみてください。「役に立った！」という体験が、続けるモチベーションになります。",
    prompts: [
      "「〇〇さんへの返信メールを手伝ってください。内容は〇〇です。丁寧な敬語で書いてください」",
      "「〇〇（例：サブスクリプション、Claude）を初心者向けにわかりやすく説明してください」",
      "「今週やるべきタスクリストを整理するのを手伝ってください。やること：〇〇、〇〇、〇〇」",
    ],
  },
  {
    number: "Action 4",
    title: "気に入ったAIを「1週間使い続ける」と決める",
    time: "1分で決断するだけ",
    body: "1日目・2日目で使ってみたAIを、とりあえず1週間使い続けることを心の中で決めましょう。複数のAIを行ったり来たりすると、どれも中途半端になります。まず1つに絞って慣れることが、上達の近道です。",
    tip: "「もっと良いAIがあるかも」と思っても、今は気にしなくてOK。1週間後に比較しても十分間に合います。",
  },
] as const;

const day3Actions = [
  {
    number: "Action 5",
    title: "毎日5分AIを使う時間を決める",
    time: "今日から継続",
    body: "AIを習慣にするコツは、「いつ使うか」を事前に決めておくことです。朝の通勤中にスマホで使う、昼休みの最初の5分に使う、夜寝る前に今日の疑問を聞いてみる——どんな時間帯でも構いません。「今日困ったことをAIに聞くだけでいい」という低いハードルで続けましょう。",
    tips: [
      "難しく考えない。「今日の夕食に何を作ろうか」でも立派なAI活用",
      "完璧な質問を考えるより、思いついたことをそのまま入力してみる",
      "回答が7割使えれば十分。残り3割は自分で直せばいい",
      "週に1回、「今週AIで助かったこと」を振り返ると続けやすい",
    ],
  },
] as const;

export default function AiFirst3DaysActionGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI入門、最初の3日間でやるべき5つのこと" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="AI入門、最初の3日間でやるべき5つのこと【今日から始める完全アクションガイド2026】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI入門、最初の3日間でやるべき5つのこと【今日から始める完全アクションガイド2026】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIって聞くけど、何から始めればいいの?」——その疑問、ものすごくよくわかります。情報が多すぎて、何が正解かわからない。「まず勉強してから」と思っているうちに、なんとなく使わないまま時間が過ぎていく。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            この記事を読み終わったら、<strong>今日のうちにAIを使い始められます。</strong>
            複雑な勉強も、特別な知識も不要です。必要なのは5〜15分の時間と、スマホかPCと、ちょっとの好奇心だけ。3日間で5つのアクションを実行するだけで、「AIを使ったことがある人」になれます。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/what-is-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AIとは？初心者向け解説
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTをスマホで始める方法
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT・Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-try-fail-breakthrough-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AIを何度試しても続かなかった理由
          </Link>
          ・続けるコツは
          <Link href="/academy/blog/ai-study-continue-habits" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI習慣化の7つのコツ
          </Link>
          もあわせて読むと、実践への道筋が明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div id="summary" className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">要点まとめ（結論先出し）</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-gray-700">
              <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-will-primary">✓</span><span>必要なものはスマホかPC・メールアドレス・好奇心だけ。全部無料で始められる</span></li>
              <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-will-primary">✓</span><span>1日目：アカウントを作って最初の一言（Action 1・2）</span></li>
              <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-will-primary">✓</span><span>2日目：仕事や日常の悩みを1つAIに相談する（Action 3・4）</span></li>
              <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-will-primary">✓</span><span>3日目：毎日5分使う時間を決めて習慣化する（Action 5）</span></li>
              <li className="flex gap-2"><span className="mt-0.5 shrink-0 text-will-primary">✓</span><span>完璧を求めない。「7割使えれば十分」という感覚で続けるのが鉄則</span></li>
            </ul>
          </div>
        </motion.section>

        {/* 始める前に知っておきたいこと */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="before-start" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            始める前に知っておきたいこと
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを始めるのに、特別な知識も準備も必要ありません。ただ、最初に心構えを1つだけ持っておくと、ぐっと楽になります。
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900">「完璧を求めない」ことが最大のコツ</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                AIの回答は必ずしも完璧ではありません。でも、それでいいんです。「7割使えれば十分」「3割は自分で直せばいい」——このくらいのゆるさで始めるのが、長続きする秘訣です。完璧な回答を求めて使うのをやめてしまうより、7割の回答を活用し続けるほうが、圧倒的に価値があります。
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900">必要なものは3つだけ</h3>
              <ul className="mt-3 space-y-1 text-sm leading-7 text-gray-700">
                <li>📱 スマホまたはPC（どちらでも可）</li>
                <li>📧 メールアドレス（Gmailでも何でも可）</li>
                <li>🌟 好奇心（これだけあれば十分）</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                クレジットカードも、専門知識も、英語力も不要です。全部無料で始められます。
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-gray-900">「試すことが大事」——まず使ってみる</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                「ちゃんと勉強してから使おう」は、AIに限っては逆効果です。プロンプトの書き方は使いながら自然に身につくものです。まず使ってみて、うまくいかなければ少し直してみる。このサイクルを繰り返すことが、最速の上達法です。
              </p>
            </div>
          </div>
        </motion.section>

        {/* 1日目 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="day1" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            1日目（今日！）：アカウントを作って最初の一言
          </h2>
          <p className="mt-3 text-base leading-8 text-gray-700">
            今日の目標は、<strong>「使ってみた」という体験をする</strong>こと。それだけです。
          </p>

          <div className="mt-6 space-y-5">
            {day1Actions.map((action) => (
              <div key={action.number} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">{action.title}</h3>
                <p className="mt-1 text-xs font-medium text-gray-400">⏱ {action.time}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{action.body}</p>
                {action.tip && (
                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                    <p className="text-xs leading-6 text-blue-700">💡 {action.tip}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-5">
            <p className="text-sm font-bold text-green-800">1日目の目標チェック</p>
            <ul className="mt-2 space-y-1 text-sm leading-7 text-green-700">
              <li>☑ ChatGPT（またはGemini・Claude）のアカウントを作った</li>
              <li>☑ 何か1つ質問してみた</li>
            </ul>
            <p className="mt-2 text-sm text-green-700">これだけで、あなたは「AIを使い始めた人」になりました。おめでとうございます。</p>
          </div>
        </motion.section>

        {/* 2日目 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="day2" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2日目：仕事・日常で試してみる
          </h2>
          <p className="mt-3 text-base leading-8 text-gray-700">
            今日の目標は、<strong>AIが「役に立った」という体験をする</strong>こと。昨日は「すごいかも」という感触だったとしたら、今日は「これ使える！」という実感を得る日です。
          </p>

          <div className="mt-6 space-y-5">
            {day2Actions.map((action) => (
              <div key={action.number} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">{action.title}</h3>
                <p className="mt-1 text-xs font-medium text-gray-400">⏱ {action.time}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{action.body}</p>
                {"prompts" in action && action.prompts && (
                  <div className="mt-4 space-y-3">
                    <p className="text-xs font-bold text-gray-500">📋 コピペで使えるプロンプト例</p>
                    {action.prompts.map((prompt, i) => (
                      <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                        <p className="text-xs leading-6 text-gray-700 font-mono">{prompt}</p>
                      </div>
                    ))}
                  </div>
                )}
                {"tip" in action && action.tip && (
                  <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                    <p className="text-xs leading-6 text-blue-700">💡 {action.tip}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-5">
            <p className="text-sm font-bold text-green-800">2日目の目標チェック</p>
            <ul className="mt-2 space-y-1 text-sm leading-7 text-green-700">
              <li>☑ 仕事や日常の悩みを1つAIに相談してみた</li>
              <li>☑ 1週間使い続けるAIを1つ決めた</li>
            </ul>
          </div>
        </motion.section>

        {/* 3日目 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="day3" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            3日目：学習の習慣を作る
          </h2>
          <p className="mt-3 text-base leading-8 text-gray-700">
            今日の目標は、<strong>AIが「習慣の一部」になること</strong>。3日間続けた今、AIは「試してみたもの」から「日常のツール」へと変わり始めています。
          </p>

          <div className="mt-6 space-y-5">
            {day3Actions.map((action) => (
              <div key={action.number} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">{action.title}</h3>
                <p className="mt-1 text-xs font-medium text-gray-400">⏱ {action.time}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{action.body}</p>
                {"tips" in action && action.tips && (
                  <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 p-4">
                    <p className="text-xs font-bold text-amber-800 mb-2">続けるコツ</p>
                    <ul className="space-y-1">
                      {action.tips.map((tip, i) => (
                        <li key={i} className="text-xs leading-6 text-amber-700">• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-5">
            <p className="text-sm font-bold text-green-800">3日目の目標チェック</p>
            <ul className="mt-2 space-y-1 text-sm leading-7 text-green-700">
              <li>☑ 毎日AIを使う時間帯を1つ決めた</li>
              <li>☑ 「今日困ったことをAIに聞く」というルールを自分に課した</li>
            </ul>
          </div>
        </motion.section>

        {/* 3日後のあなたへ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="after-3days" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            3日後のあなたへ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3日間の5つのアクションを実行した今、あなたは「AIを使ったことがある人」になっています。これは、意外と大きな一歩です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            多くの人が「そのうちやろう」と思いながら使わないまま時間が過ぎていきます。あなたはすでに、その状態を抜け出しています。
          </p>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-base font-bold text-gray-900">次のステップ：AIをもっと深める方法</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-will-primary font-bold">→</span>
                <span><strong>プロンプトの書き方を少し深める</strong>：AIへの伝え方を工夫するだけで、回答の質が大きく変わります。「誰に・何を・どんな形式で」を伝えることを意識してみましょう。</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-will-primary font-bold">→</span>
                <span><strong>仕事の繰り返し作業にAIを組み込む</strong>：週報・日報・メール下書きなど、毎週必ずやる作業からAIを使い始めると、使用頻度が自然に維持されます。</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-will-primary font-bold">→</span>
                <span><strong>体系的に学んでみる</strong>：「もっとちゃんと使いこなしたい」と感じたら、体系的な学習環境に入ることを検討してみてください。一人での独学より、格段に速く・確実に身につきます。</span>
              </li>
            </ul>
          </div>
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
            title="AIリブートのLINEを追加して、今日から使えるプロンプト集を受け取る"
            description="「最初の3日間」を終えたら、次は実務で使えるプロンプトテンプレートを手に入れましょう。AIリブートのLINEでは、すぐ使えるプロンプト集と週1本のAI活用コンテンツを配信しています。登録無料。"
            buttonLabel="LINEで無料のプロンプト集を受け取る"
            href={lineUrl}
          />
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
          <h2 className="text-2xl font-bold text-gray-900">まとめ：今日から始めましょう</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを始めるのに、完璧な準備は必要ありません。必要なのは「今日の5分」だけです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500"><strong>1日目</strong>：アカウントを作って最初の一言（Action 1・2）</li>
            <li className="pl-1 marker:text-gray-500"><strong>2日目</strong>：仕事や日常の悩みを1つAIに相談（Action 3・4）</li>
            <li className="pl-1 marker:text-gray-500"><strong>3日目</strong>：毎日5分使う時間を決めて習慣化（Action 5）</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3日後には、「AIを使ったことがある人」になっています。そこからどう深めるかは、あなたのペースで決めていけばいい。今日、最初の一歩を踏み出してください。
          </p>
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
            もっと体系的に学びたい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            3日間のアクションで感触をつかめたら、次は「仕事で本当に使いこなせるレベル」を目指しませんか。AIリブートアカデミーでは、生成AIの基礎から実務活用まで体系的に学べる環境を提供しています。プログラミングや専門知識は不要。一人では続かなかった方にこそ、仲間と学べる環境を体験してほしいと思っています。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/blog/ai-learning-roadmap-2026"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              AI学習ロードマップ2026を読む
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
              <Link href="/academy/blog/chatgpt-claude-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPT・Claude初心者ガイド：最初の一週間でやるべきこと
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-try-fail-breakthrough-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIを何度試しても続かなかった私が、やっと使いこなせた理由
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-study-continue-habits" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIを続けるための習慣デザイン｜初心者が3ヶ月後も使い続けられる7つのコツ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-learning-roadmap-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI学習ロードマップ2026：ゼロから100日間で仕事に使えるようになるまでの完全地図
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
