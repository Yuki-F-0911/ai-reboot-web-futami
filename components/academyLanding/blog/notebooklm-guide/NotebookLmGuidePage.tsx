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

type NotebookLmGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["NotebookLM 使い方", "Google AI 学習ツール", "資料の要約・整理"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-notebooklm", label: "NotebookLMとは？（概要と位置づけ）" },
  { id: "getting-started", label: "NotebookLMの始め方（アカウント・初期設定）" },
  { id: "basic-usage", label: "基本的な使い方（ソース追加→質問→要約）" },
  { id: "work-study-use-cases", label: "仕事・学習での活用シーン" },
  { id: "audio-overview", label: "音声概要（Audio Overview）の活用法" },
  { id: "tool-comparison", label: "NotebookLMと他のAIツールの使い分け" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "cta", label: "AIリブートアカデミーへ" },
] as const;

const conclusionPoints = [
  "NotebookLMは「自分の資料（ソース）に基づいて」要約・Q&A・論点整理を進めるのが得意なAIノートです。",
  "最短ルートは、(1)ソースを入れる → (2)質問で要点を抽出 → (3)根拠箇所を確認してノート化、の3ステップです。",
  "汎用のチャットAIは発想や文章作成に強い一方、NotebookLMは「資料の読み込み・学習・整理」を回す用途で使い分けると効果が出やすくなります。",
] as const;

const notebookLmDefinitionPoints = [
  "あなたが追加したソースを前提に、要約・質問・整理を行う（ソースに基づく回答を得やすい）",
  "調査や学習で「資料の要点→論点→次の確認事項」を素早く作れる",
  "機能や対応形式は更新されるため、実際の画面で最新の対応範囲を確認する必要がある",
] as const;

const gettingStartedFlow = [
  {
    step: "Step 1. Googleアカウントでアクセスする",
    body: "NotebookLMの利用にはGoogleアカウントが必要になることが一般的です。業務利用なら、アカウントの扱い（個人/組織）や社内ルールを先に確認しておくと安全です。",
  },
  {
    step: "Step 2. 新しいノートブックを作成する",
    body: "テーマ（例: 競合調査、社内手順書、試験対策）ごとにノートブックを分けると、ソースと会話の文脈が混ざりにくくなります。",
  },
  {
    step: "Step 3. ソースを追加する",
    body: "まずは3〜10本程度の「信頼できる資料」に絞って投入するのがコツです。量を増やす前に、要約・質問で期待どおりに整理できるかを確認します。",
  },
  {
    step: "Step 4. 目的別のテンプレ質問を用意する",
    body: "「要点」「用語集」「反論・リスク」「次に読むべき資料」など、決まった型の質問を作ると毎回の品質が安定します。",
  },
] as const;

const basicUsagePatterns = [
  {
    title: "ソース要約（最初に全体像を掴む）",
    prompt: "このソースの要点を3行で。重要用語を5つと、その定義も。",
    note: "最初に要点と用語を固定すると、後のQ&Aのズレが減ります。",
  },
  {
    title: "質問→根拠確認（結論の裏取り）",
    prompt: "この資料群から、結論Aの根拠となる箇所を整理して。反証になりそうな点も。",
    note: "重要な判断は、回答をそのまま採用せず、元資料の該当箇所を確認します。",
  },
  {
    title: "学習ノート化（復習しやすい形に整える）",
    prompt: "この内容を、試験対策のQ&A形式（10問）にして。難易度も付けて。",
    note: "学習の目的（理解/暗記/応用）に合わせて出力形式を指定します。",
  },
] as const;

const workStudyUseCases = [
  {
    title: "リサーチ（調査メモの統合）",
    body: "結論を急がず、まずは「論点の一覧」「前提の揺れ」「追加で確認すべき一次情報」を作る用途が向いています。",
  },
  {
    title: "報告書・提案書の整理（根拠の抜け漏れチェック）",
    body: "既存の下書きをソースとして入れ、主張と根拠の対応を点検します。論点の飛躍や未検証の前提を洗い出すのに有効です。",
  },
  {
    title: "学習ノート（講義資料・読書メモの復習）",
    body: "資料から用語集、要点、練習問題を作り、復習サイクルを短縮します。重要な箇所は元資料の該当ページに戻って確認する運用が前提です。",
  },
] as const;

const audioOverviewTips = [
  "Audio Overviewが利用できる場合、ソースの要点を「耳で復習」でき、通勤・移動時間のインプットに向きます。",
  "音声は理解の入口として使い、引用や最終判断は必ず元資料を参照します。",
  "作る前に「誰向けに・何分で・何を覚えたいか」を短く指定すると、復習用の密度を上げやすくなります。",
] as const;

const toolComparisonRows = [
  {
    tool: "NotebookLM",
    strength: "自分の資料（ソース）に基づく要約・学習・論点整理",
    fit: "リサーチ、学習、社内資料の理解、根拠の整理",
    caution: "ソースが不十分だと結論が偏るため、投入する資料の品質が重要",
  },
  {
    tool: "ChatGPT",
    strength: "汎用的な文章作成・発想・会話による壁打ち",
    fit: "メール下書き、企画案、説明文、手順の叩き台",
    caution: "資料ベースの厳密な裏取りは、参照元の確認運用が必須",
  },
  {
    tool: "Claude",
    strength: "文章の読解・要約・構成整理などの長文業務",
    fit: "レポート整理、長文の改善、要約の比較検討",
    caution: "最終的な対外文書は、事実確認と人の編集を前提にする",
  },
  {
    tool: "Gemini",
    strength: "Googleアカウント/Googleサービス中心の業務と相性がよい場合がある",
    fit: "Google環境に寄せた業務改善、一般的な下書き・整理",
    caution: "機能や連携可否は環境・契約・地域で変わる場合がある",
  },
] as const;

export default function NotebookLmGuidePage({ faqItems }: NotebookLmGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "NotebookLMの使い方ガイド" },
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
              <CopyAsMarkdownButton title="NotebookLMの使い方完全ガイド" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">NotebookLMの使い方完全ガイド</h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            NotebookLMとは、「資料を根拠に整理する」タイプなので、使い始めにソースの入れ方で迷いがちです。
            このガイドでは、取り込み→要約→質問→アウトプットまでの手順と、仕事/学習での使い分けを結論先出しでまとめます。
            筆者はまず社内の議事メモと要件メモを入れ、報告書の骨子を作る用途で効果を実感しました。
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
          <h2 id="what-is-notebooklm" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            NotebookLMとは？（概要、Googleの位置づけ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: NotebookLMは「自分の資料を前提にして学ぶ/整理する」ためのAIツールです。手元のソースを起点に会話とノート作成を回しやすい設計になっています。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {notebookLmDefinitionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            生成AI全体の基本を押さえたい場合は、
            <Link
              href="/academy/blog/what-is-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIとは？（基礎解説）
            </Link>
            も先に読むと理解が早くなります。
          </p>
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
            NotebookLMの始め方（アカウント作成、初期設定）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: まず「ノートブックを作り、少数の信頼できるソースを入れる」だけで始められます。最初から大量に入れず、小さく検証するのが最短です。
          </p>
          <div className="mt-6 space-y-4">
            {gettingStartedFlow.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            業務の導入手順まで含めて整えたい場合は、
            <Link
              href="/academy/blog/corporate-ai-adoption-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              企業の生成AI導入ガイド
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="basic-usage" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            基本的な使い方（ソースのアップロード、質問、要約）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: NotebookLMは「ソースを入れてから質問する」順番を守ると成果が安定します。最初に要約で全体像を作り、その後にQ&Aで論点を深掘りするのが基本です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {basicUsagePatterns.map((pattern) => (
              <section key={pattern.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{pattern.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">例:</span> {pattern.prompt}
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{pattern.note}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            「質問の型」を増やして効率化したい場合は、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレ集
            </Link>
            も合わせて活用してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="work-study-use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            仕事・学習での活用シーン（リサーチ、報告書整理、学習ノート）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: NotebookLMは「資料がある」業務・学習で真価が出ます。資料が曖昧な段階では、先に論点整理や追加調査の設計をする使い方が向いています。
          </p>
          <div className="mt-6 space-y-4">
            {workStudyUseCases.map((item) => (
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
          <h2 id="audio-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            音声概要（Audio Overview）の活用法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 音声概要は「復習の入口」を作るのに向いています。あとから元資料で確認する運用にすると、学習効率が上がります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {audioOverviewTips.map((tip) => (
              <li key={tip} className="pl-1 marker:text-gray-500">
                {tip}
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
          <h2 id="tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            NotebookLMと他のAIツールの使い分け（ChatGPT/Claude/Geminiとの違い）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: NotebookLMは「資料に基づく整理・学習」、チャットAIは「発想・文章作成・壁打ち」に強みがあります。出力の安定性と運用のしやすさで選ぶのが現実的です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">得意</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">向く用途</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.strength}</td>
                    <td className="py-4 px-4">{row.fit}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            Geminiについて先に整理したい場合は、
            <Link
              href="/academy/blog/gemini-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              Gemini完全入門ガイド
            </Link>
            も参考になります。
          </p>
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
          <p className="mb-4 text-sm leading-7 text-slate-700">
            <span className="font-semibold text-slate-900">結論:</span> NotebookLMは「資料起点の整理」が得意なので、プロンプトの型と基礎知識を合わせて読むと定着が早くなります。
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIの学び方ガイド
              </Link>
            </li>
          </ul>
        </section>

        
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
            <li className="pl-1 marker:text-gray-500">NotebookLMは「自分の資料を前提にして学ぶ/整理する」ためのAIツールです。</li>
            <li className="pl-1 marker:text-gray-500">まず「ノートブックを作り、少数の信頼できるソースを入れる」だけで始められます。</li>
            <li className="pl-1 marker:text-gray-500">NotebookLMは「ソースを入れてから質問する」順番を守ると成果が安定します。</li>
            <li className="pl-1 marker:text-gray-500">NotebookLMは「資料がある」業務・学習で真価が出ます。</li>
            <li className="pl-1 marker:text-gray-500">音声概要は「復習の入口」を作るのに向いています。</li>
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
            AIリブートアカデミーで、業務に落とし込む
          </h2>
          <p className="mt-4 text-base font-medium leading-8 text-gray-900">
            結論: NotebookLMを「触って終わり」にせず、業務の情報整理・学習の型として定着させるには、対象業務と資料体系に合わせた運用設計が重要です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            無料セミナーで全体像を整理し、必要なら個別相談で導入手順を具体化できます。
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

        <section className="mt-14 border-t border-gray-200 pt-10 text-sm leading-7 text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">監修:</span> AIリブートアカデミー編集部
          </p>
          <p className="mt-2">
            <span className="font-semibold text-gray-900">最終更新日:</span> 2026年2月18日
          </p>
        </section>
      </article>
    </main>
  );
}
