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

type GeminiBeginnersguidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Gemini使い方", "GeminiとChatGPTの違い", "無料で始める"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-gemini", label: "Geminiとは？（Google AI概要）" },
  { id: "gemini-vs-chatgpt-claude", label: "Gemini vs ChatGPT vs Claude（比較表）" },
  { id: "getting-started", label: "Geminiの始め方（ステップバイステップ）" },
  { id: "work-use-cases", label: "業務での活用パターン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "free-seminar-consultation", label: "無料セミナー / 個別相談" },
] as const;

const conclusionPoints = [
  "Geminiは、Googleが提供する生成AIの仕組み/体験の一部として位置づけられ、Googleアカウントで試しやすいのが特徴です。",
  "ChatGPT/Claudeとの違いは「得意な作業」と「あなたの業務環境（Google Workspace等）との相性」で決まります。まずは同じ課題で比較するのが確実です。",
  "無料で始められる場合が多い一方、機能・利用回数・提供条件は変更されるため、業務利用前に最新条件と社内ルールを確認しましょう。",
] as const;

const geminiDefinitionPoints = [
  "文章の下書き、要約、アイデア出し、チェックリスト作成などを自然文で依頼できる",
  "Googleアカウントで利用しやすく、Googleのサービス群と相性がよい設計になりやすい",
  "画像/ファイルなど複数形式の入力に対応する機能が提供される場合がある（提供範囲はプラン/地域で変動）",
] as const;

const comparisonRows = [
  {
    service: "Gemini",
    freePlan: "無料で試せる場合あり（条件は変更されます）",
    strength: "Googleアカウント/Googleサービス中心の業務に馴染ませやすい",
    caution: "機能や連携可否が環境・契約・地域で変わる場合がある",
    fit: "Google Workspace中心のチーム/個人",
  },
  {
    service: "ChatGPT",
    freePlan: "無料で試せる場合あり（条件は変更されます）",
    strength: "汎用性が高く、文章作成〜整理まで幅広いテンプレ化がしやすい",
    caution: "目的を決めないと使い方が散らばりやすい",
    fit: "まず1つのAIチャットで習慣化したい人",
  },
  {
    service: "Claude",
    freePlan: "無料で試せる場合あり（条件は変更されます）",
    strength: "長文の読解・要約・構成整理など文章業務に強い傾向",
    caution: "タスクによっては追加の条件指定（再指示）が必要になることがある",
    fit: "企画書、議事録、レポートなど長文業務が多い人",
  },
] as const;

const gettingStartedFlow = [
  {
    step: "Step 1. Googleアカウントを用意する",
    body: "Geminiの利用はGoogleアカウントが前提になることが一般的です。個人利用と業務利用でアカウントを分けるか（ログ、履歴、管理ポリシー）を先に決めると安全です。",
  },
  {
    step: "Step 2. まずは無料で触る（可能な範囲で）",
    body: "最初は「1タスクだけ」決めて試します（例: メール返信の下書き、会議メモの要約）。機能や利用回数の上限は変更されるため、画面の案内に従って範囲を確認してください。",
  },
  {
    step: "Step 3. プロンプトの型を作る",
    body: "出力が安定するのは「目的・前提・制約・出力形式」を分ける書き方です。短い質問 → 追質問で改善、の順に進めると学習コストが下がります。",
  },
  {
    step: "Step 4. 必要なら上位プラン（例: Google AI Pro / Ultra）を検討する",
    body: "上位プランが提供される場合、より高性能なモデルや追加機能が含まれることがあります（名称は更新されることがあります）。契約前に、あなたの地域/契約での最新のプラン名・料金・提供範囲を公式案内で確認してください。",
  },
] as const;

const workUseCases = [
  {
    title: "Google Workspace連携で「作業の前後」を短縮する",
    body: "メール/文書/表計算などの前処理（要約、論点整理、ドラフト作成）をAIに寄せると、手戻りが減ります。連携可否は組織設定や契約で変わるため、管理者ポリシーの確認が前提です。",
  },
  {
    title: "検索・調査は「一次情報に戻る前提」で回す",
    body: "AIの回答は誤り得ます。調査では、結論だけでなく「確認すべき観点」「確認先の候補」「反証ポイント」を出させ、最後は一次情報を確認する運用が安全です。",
  },
  {
    title: "マルチモーダルは「説明の補助」に使う",
    body: "画像やファイル入力が使える場合、説明のたたき台やチェックリスト作成に向きます。ただし、機密データの投入可否は契約と社内ルールに従って判断してください。",
  },
] as const;

export default function GeminiBeginnersguidePage({ faqItems }: GeminiBeginnersguidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Gemini完全入門ガイド" },
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
              <CopyAsMarkdownButton
                title="Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Geminiを触ってみたものの、どこから始めるか・何ができるかが分かりにくいのが最初の壁です。
            このガイドでは、無料で始める手順、ChatGPT/Claudeとの違い、仕事で再現しやすい使い方を結論先出しで整理します。
            筆者はまず「社内FAQの下書き→チェックリスト化」で試し、Googleサービス連携の強みが出る場面を掴みました（機能/料金/提供条件は更新されるため、実際の画面・公式案内もあわせて確認してください）。
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
            {conclusionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
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
          <h2 id="what-is-gemini" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Geminiとは？（Google AI概要）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: Geminiは、文章生成や要約などを自然文で依頼できるGoogleの生成AIの一つです。Googleアカウントで試しやすく、Googleのサービスを使う人ほど運用に組み込みやすい傾向があります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">初心者が押さえるポイント</h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {geminiDefinitionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
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
          <h2 id="gemini-vs-chatgpt-claude" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Gemini vs ChatGPT vs Claude（比較表）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: どれが正解というより「あなたの業務タスク」と「利用環境」に合うかで選ぶのが正解です。まずは同じ依頼文で出力を比較すると判断が早くなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">比較情報の更新日: 2026年2月17日（提供条件は変動します）</p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">得意領域</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.freePlan}</td>
                    <td className="py-4 px-4">{row.strength}</td>
                    <td className="py-4 px-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">初心者向けの選び方（迷ったら）</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">普段の業務タスクを1つだけ決める（例: 返信文、要約、議事録）。</li>
              <li className="pl-1 marker:text-gray-500">同じ依頼文を3サービスに投げ、出力と修正しやすさを比べる。</li>
              <li className="pl-1 marker:text-gray-500">「続けられるほう」を1つ選んで1週間使い、必要に応じて乗り換える。</li>
            </ol>
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
          <h2 id="getting-started" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Geminiの始め方（ステップバイステップ）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            結論: 初心者は「Googleアカウントで触る → 1タスクで試す → 型を作る → 必要なら上位プラン検討」の順に進めると迷いません。注: 画面構成や提供条件は変更されます。
          </p>
          <div className="mt-6 space-y-4">
            {gettingStartedFlow.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-10 text-xl font-semibold text-gray-900">まずはこのテンプレで質問する</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
目的: 何を達成したいか
前提: 背景・対象者・文脈
制約: 文字数、トーン、NG事項
出力形式: 箇条書き、表、見出し付き文書 など
          </pre>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="work-use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            業務での活用パターン
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 生成AIは「考える時間」を増やすために、前処理（要約・整理・下書き）を肩代わりさせるのが最も効果的です。最初は小さく始め、うまくいった型を横展開します。
          </p>
          <div className="mt-6 space-y-4">
            {workUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
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
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/notebooklm-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                NotebookLMの使い方完全ガイド｜AIで情報整理・学習を効率化する方法 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとは？検索拡張生成の仕組みと活用例をわかりやすく解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方ガイド｜業務で使える設計と導入手順 | AIリブート
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
            Geminiを業務で使うべきか、ChatGPT/Claudeとどう使い分けるべきか迷う場合は、無料セミナーで基本方針を整理し、個別相談で業務内容に合った導入順序を確認する方法が実践的です。
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
            <li className="pl-1 marker:text-gray-500">Geminiは、文章生成や要約などを自然文で依頼できるGoogleの生成AIの一つです。</li>
            <li className="pl-1 marker:text-gray-500">どれが正解というより「あなたの業務タスク」と「利用環境」に合うかで選ぶのが正解です。</li>
            <li className="pl-1 marker:text-gray-500">初心者は「Googleアカウントで触る → 1タスクで試す → 型を作る → 必要なら上位プラン検討」の順に進めると迷いません。</li>
            <li className="pl-1 marker:text-gray-500">生成AIは「考える時間」を増やすために、前処理（要約・整理・下書き）を肩代わりさせるのが最も効果的です。</li>
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
