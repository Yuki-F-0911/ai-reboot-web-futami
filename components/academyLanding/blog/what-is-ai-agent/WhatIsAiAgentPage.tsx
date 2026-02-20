"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type WhatIsAiAgentPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const definitionRows = [
  {
    axis: "目的",
    conventionalAi: "分類・予測・検出など、特定タスクの精度向上",
    aiAgent: "目標達成のために、複数タスクを順に実行して完了まで進める",
  },
  {
    axis: "処理の流れ",
    conventionalAi: "入力に対して1回の推論結果を返す",
    aiAgent: "計画 → 実行 → 観測 → 再計画を反復しながら最適化する",
  },
  {
    axis: "人の関与",
    conventionalAi: "都度の指示が必要になりやすい",
    aiAgent: "事前ルールと境界を決めることで、一定範囲を自律実行できる",
  },
] as const;

const landscapeRows = [
  {
    service: "OpenAI Operator",
    specialty: "ブラウザ操作を含むタスク実行",
    notes: "予約・フォーム入力などのWeb操作に強い。提供開始時はPro限定で展開。",
  },
  {
    service: "OpenAI Atlas（旧 Computer Use相当）",
    specialty: "画面操作を伴うエージェント実行",
    notes: "GUI操作系の流れを受け継ぎ、日常業務での実行性を高める方向で進化。",
  },
  {
    service: "Google Mariner",
    specialty: "Chrome連携型の情報探索・操作支援",
    notes: "ブラウザ文脈を活かした支援が特徴。Googleエコシステムとの相性が高い。",
  },
  {
    service: "Anthropic Computer Use（Claude）",
    specialty: "画面認識と操作の自動化",
    notes: "GUIを跨ぐ作業を支援。開発・検証用途での活用が進む。",
  },
  {
    service: "Manus AI",
    specialty: "マルチエージェントでの分担実行",
    notes: "中国発として注目される新興勢。複数タスクの同時進行に強み。",
  },
  {
    service: "Genspark",
    specialty: "専門特化タスクを狙ったエージェント",
    notes: "用途別の実行体験を前面に出し、調査・比較・生成を一気通貫で支援。",
  },
] as const;

const routingRows = [
  {
    task: "予約・フォーム入力",
    recommended: "OpenAI Operator",
    reason: "ブラウザ操作の再現性が高く、定型手順を標準化しやすい。",
  },
  {
    task: "深掘りリサーチ",
    recommended: "Deep Research",
    reason: "調査計画と情報整理を長文で返せるため、一次情報ベースで意思決定しやすい。",
  },
  {
    task: "コーディング自動化",
    recommended: "Claude Code / GitHub Copilot Agent",
    reason: "コードベースを読みながら修正・検証まで繋げやすく、開発フローに載せやすい。",
  },
] as const;

const introductionSteps = [
  {
    title: "Step 1. 1タスク1成果でテーマを切る",
    body: "まずは「予約完了率」「リサーチ所要時間」など、1つの成果指標だけを追える単位に分解します。",
  },
  {
    title: "Step 2. ツールを役割別に割り当てる",
    body: "ブラウザ操作、調査、コーディングを1つのツールに寄せず、目的に応じて分担させます。",
  },
  {
    title: "Step 3. 成功条件と失敗条件を同時に定義する",
    body: "成功率だけでなく、どの時点で人が引き取るかを先に決めることで事故を防ぎます。",
  },
  {
    title: "Step 4. 2〜4週間の短期PoCでログを取る",
    body: "試行回数、失敗理由、手戻り工数を記録し、再現できる運用手順に落とし込みます。",
  },
  {
    title: "Step 5. 承認フロー付きで横展開する",
    body: "初期成功パターンをテンプレ化し、部門ごとの権限・レビュー手順を付けて展開します。",
  },
] as const;

const cautionItems = [
  {
    title: "ログイン認証・2FAが壁になりやすい",
    body: "ID/パスワード入力や多要素認証は、完全自動化が途切れやすいポイントです。設計時に手動介入前提の工程を置く必要があります。",
  },
  {
    title: "長時間タスクは途中でミスが起きやすい",
    body: "手順が長くなるほど、途中離脱や誤操作の確率が上がります。タスクを短く分割し、チェックポイントを入れる運用が前提です。",
  },
  {
    title: "重要業務への単独適用はまだリスクがある",
    body: "契約、法務、決済など高リスク領域は、エージェント単独で完結させず人の承認を必須にするのが現実的です。",
  },
] as const;

const keywordTags = ["AIエージェントとは", "2026年勢力図", "実践ガイド"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "definition-and-difference", label: "AIエージェントの定義と従来AIとの違い" },
  { id: "landscape-2026", label: "2026年主要AIエージェント勢力図" },
  { id: "selection-guide", label: "エージェントの使い分けガイド" },
  { id: "how-to-build-ai-agent", label: "企業での導入ステップ（小規模から始める方法）" },
  { id: "implementation-cautions", label: "2026年時点の現実的な制限" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function WhatIsAiAgentPage({ faqItems }: WhatIsAiAgentPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIエージェントとは？" },
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
                title="AIエージェントとは？2026年最新勢力図と使い分け実践ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIエージェントとは？2026年最新勢力図と使い分け実践ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            2026年2月時点でAIエージェントは「何でも自動化する魔法」ではなく、用途ごとの使い分けが成果を左右する段階に入りました。
            本記事では基本定義を押さえたうえで、主要プレイヤーの勢力図、実務での使い分け、現実的な制限までを実践目線で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <figure className="my-8">
          <Image src="/images/blog/what-is-ai-agent/slide-1.png" alt="AIエージェント入門" width={800} height={450} className="rounded-lg" />
        </figure>

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
          <p className="mt-5 text-base font-medium text-gray-900">
            AIエージェントは「計画→実行→振り返り」を反復する仕組みです。2026年はツールの性能差より、使い分け設計の巧拙で成果が分かれます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              主要プレイヤーは、OpenAI・Google・Anthropicに加え、Manus AIやGensparkなど新興勢も存在感を増しています。
            </li>
            <li className="pl-1 marker:text-gray-500">
              実務では「予約/フォーム入力はOperator」「深掘りはDeep Research」「開発はClaude Code/Copilot Agent」の分担が現実的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ログイン認証、長時間タスク、重要業務の無人運用には依然リスクがあり、人の承認設計が必須です。
            </li>
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="definition-and-difference" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェントの定義と従来AIとの違い
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            AIエージェントは、目標達成のために「計画し、実行し、結果を見て修正する」流れを持つAIです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            従来型AIが単発の判定や生成を担当するのに対し、AIエージェントは連続処理のオーケストレーションを担います。ここが運用上の最大の違いです。
          </p>

          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-2.png" alt="計画・実行・振り返りループ" width={800} height={450} className="rounded-lg" />
          </figure>
          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-3.png" alt="従来AI「点」vs エージェント「線」" width={800} height={450} className="rounded-lg" />
          </figure>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">従来AI</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">AIエージェント</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.conventionalAi}</td>
                    <td className="py-4 pl-4">{row.aiAgent}</td>
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
          <h2 id="landscape-2026" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年主要AIエージェント勢力図
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            2026年は「汎用1強」ではなく、ブラウザ操作・調査・開発自動化など用途別に選ぶ時代です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            以下は実務導入時に把握しておきたい主要サービスの整理です。強みが重なる部分もありますが、得意領域と運用難易度は明確に違います。
          </p>

          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-4.png" alt="2026年主要AIエージェント勢力図" width={800} height={450} className="rounded-lg" />
          </figure>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主戦場</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">押さえるべきポイント</th>
                </tr>
              </thead>
              <tbody>
                {landscapeRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="py-4 px-4">{row.specialty}</td>
                    <td className="py-4 pl-4">{row.notes}</td>
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
          <h2 id="selection-guide" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            エージェントの使い分けガイド
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            迷ったら「どの作業を自動化したいか」から逆算して選びます。モデル名より、作業特性で選ぶほうが失敗しにくいです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">やりたいこと</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">推奨エージェント</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">理由</th>
                </tr>
              </thead>
              <tbody>
                {routingRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.task}</th>
                    <td className="py-4 px-4">{row.recommended}</td>
                    <td className="py-4 pl-4">{row.reason}</td>
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
          <h2 id="how-to-build-ai-agent" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            企業での導入ステップ（小規模から始める方法）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            2026年の導入は「導入するか」ではなく「どこまで任せるか」を決める設計勝負です。小規模PoCで運用現実を掴みます。
          </p>

          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-5.png" alt="小さく始める" width={800} height={450} className="rounded-lg" />
          </figure>

          <div className="mt-6 space-y-4">
            {introductionSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>

          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-6.png" alt="5ステップロードマップ" width={800} height={450} className="rounded-lg" />
          </figure>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="implementation-cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年AIエージェントの現実的な制限
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            現時点のAIエージェントは強力ですが、無制限に任せられる段階ではありません。制限を前提に設計したチームが成果を出しています。
          </p>

          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-7.png" alt="AIエージェントの現実的な制限" width={800} height={450} className="rounded-lg" />
          </figure>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {cautionItems.map((item) => (
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
          viewport={{ once: true, amount: 0.25 }}
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
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/rag-use-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/multimodal-ai-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                マルチモーダルAIとは？テキスト・画像・音声を横断する次世代AIを解説 | AIリブート
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
          <p className="mt-5 text-base font-medium text-gray-900">
            まずは「どの業務を、どこまで自動化するか」を言語化し、権限とログの設計から始めるのが安全です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIスキルの実務適用だけでなく、自己理解に基づくキャリア設計と、仲間と学ぶ環境づくりまで含めて設計したい場合は、
            無料セミナーで全体像を整理し、個別相談で導入優先順位を確認する進め方が実践的です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーを見る
            </Link>
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

          <figure className="my-8">
            <Image src="/images/blog/what-is-ai-agent/slide-8.png" alt="まとめ" width={800} height={450} className="rounded-lg" />
          </figure>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AIエージェントの本質は、目標に対して計画・実行・修正を反復するオーケストレーション能力です。</li>
            <li className="pl-1 marker:text-gray-500">2026年は、Operator・Deep Research・Claude Code/Copilot Agentのように用途別で使い分けるのが実務最適です。</li>
            <li className="pl-1 marker:text-gray-500">ログイン認証、長時間実行、重要業務の無人化には限界があるため、人の承認設計を前提に導入する必要があります。</li>
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
            AIスキルの習得、自己理解にもとづくキャリアデザイン、仲間と学ぶ実践環境まで含めて、次の一歩を選べます。
          </p>

          <figure className="my-8">
            <Link href="/academy/seminars">
              <Image src="/images/blog/what-is-ai-agent/slide-9.png" alt="無料セミナー・個別相談のご案内" width={800} height={450} className="rounded-lg" />
            </Link>
          </figure>

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
