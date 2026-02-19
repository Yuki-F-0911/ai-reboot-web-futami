"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type ChatgptClaudeBeginnersGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gettingStartedFlow = [
  {
    step: "1. アカウントを作成する",
    body: "公式サイトで登録し、利用規約とプライバシー設定を確認します。業務利用を想定する場合は、組織ルールも先に確認しておくと安心です。",
  },
  {
    step: "2. 最初の目的を1つ決める",
    body: "最初から多用途に広げず、要約やメール下書きなど1つの用途に絞ると操作に慣れやすくなります。",
  },
  {
    step: "3. 最初の質問を投げる",
    body: "「目的」「前提」「出力形式」を分けて入力します。1回で完成を目指すより、追質問で調整する前提で進めるのが基本です。",
  },
  {
    step: "4. ChatGPTとClaudeの両方で同じ質問を試す",
    body: "同一プロンプトで比較すると、回答の傾向差を把握しやすくなります。特定ツールに固定せず、用途に応じて使い分ける姿勢が実践的です。",
  },
] as const;

const planComparison = [
  {
    axis: "できること",
    freePlan: "基本的な対話、要約、文章下書き、アイデア整理などを試しやすい。",
    paidPlan: "利用上限や応答安定性、追加機能の幅が広がることが多い。",
  },
  {
    axis: "向いている人",
    freePlan: "まずは日常業務で使い方を確認したい初心者。",
    paidPlan: "毎日継続利用し、機能要件が明確になっている人。",
  },
  {
    axis: "判断タイミング",
    freePlan: "使い方の型を作る初期段階で十分なケースが多い。",
    paidPlan: "無料範囲で不足を感じた後に比較検討するのが一般的。",
  },
] as const;

const firstWeekUseCases = [
  {
    title: "1. 記事・資料の要約",
    detail: "社内資料（数〜10ページ程度）を「結論/根拠/論点」の形で要約し、会議前のインプット時間を短縮します。",
  },
  {
    title: "2. メール下書き作成",
    detail: "丁寧さやトーンを指定して、返信文の初稿を作ります。",
  },
  {
    title: "3. 質問の壁打ち",
    detail: "分からない概念を段階的に質問し、理解を深めます。",
  },
  {
    title: "4. ブレスト（アイデア発散）",
    detail: "企画案や見出し案を複数出し、選択肢を広げます。",
  },
  {
    title: "5. 議事録の整理",
    detail: "箇条書きメモを貼り付け、「要点/決定事項/未決/次アクション」に分解して整理します。",
  },
  {
    title: "6. 文章の言い換え",
    detail: "社内向け・顧客向けなど、対象に合わせて文体を調整します。",
  },
  {
    title: "7. タスク分解",
    detail: "大きな作業を小さな実行単位に分け、着手しやすくします。",
  },
] as const;

const beginnerMistakes = [
  {
    mistake: "質問が曖昧で、期待と違う回答になる",
    countermeasure: "目的・前提・出力形式をセットで書くと改善しやすくなります。",
  },
  {
    mistake: "1回の回答で完了させようとしてしまう",
    countermeasure: "追質問で精度を上げる前提にすると、実用的な結果に近づきます。",
  },
  {
    mistake: "回答を確認せずにそのまま利用する",
    countermeasure: "事実確認と最終編集を人が行う運用を徹底します。",
  },
  {
    mistake: "最初から有料プランを固定してしまう",
    countermeasure: "無料プランで使い方を固めてから、必要機能を比較して選ぶのが安全です。",
  },
] as const;

const keywordTags = ["ChatGPT 使い方 初心者", "Claude 使い方 初心者", "AI基礎知識"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "getting-started-flow", label: "アカウント作成から最初の質問まで" },
  { id: "free-vs-paid", label: "無料プランと有料プランの違い" },
  { id: "first-week-usage", label: "最初の1週間で試す7つの使い方" },
  { id: "beginner-mistakes", label: "初心者の失敗と対策" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function ChatgptClaudeBeginnersGuidePage({ faqItems }: ChatgptClaudeBeginnersGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ChatGPT・Claude初心者ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
              <CopyAsMarkdownButton title="ChatGPT・Claude初心者ガイド｜最初の1週間でできること" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPT・Claude初心者ガイド｜最初の1週間でできること
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            初心者は、アカウント作成後に用途を1つ決めて、短い質問と追質問で使い方を習得するのが効果的です。
            初めての生成AIとは、何を聞けばいいか・何が正解かでつまずきがちです。
            最初の1週間で「基本操作」と「実務に使える型」を作ると、迷いが一気に減ります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              初心者は、アカウント作成後に用途を1つ決めて、短い質問と追質問で使い方を習得するのが効果的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              無料プランで基本運用を試し、必要機能が明確になってから有料プランを比較する流れが一般的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPTとClaudeは同じ質問で比較し、目的に合う出力を選ぶスタンスが実務で使いやすくなります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="getting-started-flow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            アカウント作成から最初の質問までの手順（ChatGPT / Claude共通）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初は「アカウント作成 → 1つの用途で試す → 同じ質問で比較」の順に進めると、最短で使い分けの感覚が掴めます。
          </p>
          <div className="mt-6 space-y-4">
            {gettingStartedFlow.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-vs-paid" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料プランでできること・有料プランとの違い
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            最初から有料を前提にせず、無料範囲で利用目的を固めるのが堅実です。用途と利用頻度が明確になった段階で、各プランを比較して選びましょう。
            例として、ChatGPT（Plus/Pro、地域によってはGoなど）やClaude（Pro/Maxなど）のように、個人向けにも複数の有料プランが用意されることがあります（2026年2月時点、名称/料金/提供内容は更新されます）。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料プラン</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">有料プラン</th>
                </tr>
              </thead>
              <tbody>
                {planComparison.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.freePlan}</td>
                    <td className="py-4 pl-4">{row.paidPlan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="first-week-usage" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            最初の1週間で試すべき7つの使い方
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            1週間で幅広く試しておくと、自分の業務に合う活用パターンが見つけやすくなります。以下の7つは初心者でも着手しやすい基本用途です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {firstWeekUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="beginner-mistakes" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある初心者の失敗と対策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            失敗の多くは「曖昧な質問」と「1回で終わらせようとする運用」から起きます。型（目的・前提・出力形式）と追質問を前提にすると、安定して成果が出ます。
          </p>
          <div className="mt-6 space-y-4">
            {beginnerMistakes.map((item) => (
              <section key={item.mistake} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.mistake}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.countermeasure}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-generative-ai" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIとは？初心者向けにわかりやすく解説｜ChatGPT・Claude・Geminiの違いと始め方【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gemini-beginners-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められる開発の基本と進め方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとは？検索拡張生成の仕組みと活用例をわかりやすく解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="free-seminar-consultation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料セミナー / 個別相談
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ChatGPTとClaudeのどちらを中心に使うべきか迷う場合は、無料セミナーで基本方針を整理し、個別相談で業務内容に合った導入順序を確認する方法が実践的です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">初心者は、アカウント作成後に用途を1つ決めて、短い質問と追質問で使い方を習得するのが効果的です。</li>
            <li className="pl-1 marker:text-gray-500">無料プランで基本運用を試し、必要機能が明確になってから有料プランを比較する流れが一般的です。</li>
            <li className="pl-1 marker:text-gray-500">ChatGPTとClaudeは同じ質問で比較し、目的に合う出力を選ぶスタンスが実務で使いやすくなります。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI活用を最短で前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
</article>
    </main>
  );
}
