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

type RagVsFinetunigGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["RAG ファインチューニング 違い", "社内データ 生成AI", "LLM カスタマイズ 方法"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: まずは選定軸を固定する" },
  { id: "difference", label: "RAGとファインチューニングの違い" },
  { id: "comparison", label: "比較表: コストと難易度を並べる" },
  { id: "flowchart", label: "用途別判断フローチャート（3ステップ）" },
  { id: "implementation", label: "失敗しない実装順序" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "cta", label: "LINEで継続学習する" },
] as const;

const comparisonRows = [
  {
    axis: "コスト構造",
    rag: "初期は比較的低め。検索基盤・データ整備・運用改善に継続費がかかる。",
    fineTuning: "学習データ整備と学習実行の初期費が大きい。要件変更時は再学習コストが発生。",
    note: "更新頻度が高い業務ほどRAGが有利。",
  },
  {
    axis: "適した用途",
    rag: "社内規程、FAQ、製品仕様など「最新文書を参照する回答」。",
    fineTuning: "文体固定、出力フォーマット統一、特定タスク精度の底上げ。",
    note: "知識追加はRAG、振る舞い調整はFine-tuningが基本。",
  },
  {
    axis: "更新頻度への強さ",
    rag: "高い。文書更新を反映しやすい。",
    fineTuning: "低め。更新ごとに再学習判断が必要。",
    note: "頻繁な改訂がある社内データはRAG優先。",
  },
  {
    axis: "精度の作り方",
    rag: "検索品質とプロンプト設計で改善する。根拠提示と相性が良い。",
    fineTuning: "教師データ品質で改善する。出力の一貫性が高い。",
    note: "評価指標を分けて追うことが重要。",
  },
  {
    axis: "実装難易度",
    rag: "検索・権限・データ運用の設計が必要。PoC開始は比較的早い。",
    fineTuning: "データ設計、評価、再学習の運用体制が必要。",
    note: "小さく始めるならRAG先行が現実的。",
  },
] as const;

const flowSteps = [
  {
    title: "Step 1: 回答に最新の社内文書を反映する必要があるか",
    detail:
      "規程、FAQ、製品仕様、契約条件のように更新される情報を扱うなら、まずRAGを選びます。根拠文書を回答に添えやすく、説明責任を持たせやすいからです。",
    result: "YesならRAG先行",
  },
  {
    title: "Step 2: 出力フォーマットや文体を厳密に固定したいか",
    detail:
      "問い合わせ返信、審査コメント、定型文生成など、表現ぶれを強く抑えたい場合はファインチューニング候補です。RAG単体でも近づけられますが、業務負荷次第でFine-tuningを検討します。",
    result: "YesならFine-tuning検討",
  },
  {
    title: "Step 3: 更新頻度と予算に、再学習運用が見合うか",
    detail:
      "データ更新が頻繁で運用チームが小さいならRAG中心、更新が比較的安定し高い再現性が必要ならFine-tuning併用に進みます。",
    result: "迷う場合はRAGで開始し、評価後に併用判断",
  },
] as const;

const implementationPhases = [
  {
    phase: "Phase 1（0〜2週）",
    theme: "RAG最小構成を作る",
    actions: "対象文書を絞る、検索評価10〜20問、根拠提示の形式を固定する。",
  },
  {
    phase: "Phase 2（3〜4週）",
    theme: "運用評価を回す",
    actions: "正答率だけでなく、根拠一致率・回答時間・再実行率を週次で確認する。",
  },
  {
    phase: "Phase 3（5週目以降）",
    theme: "必要ならFine-tuning併用",
    actions: "出力ぶれが残るタスクだけを対象に学習データを作成し、限定導入する。",
  },
] as const;

const decisionChecklist = [
  "社内文書の更新頻度（月次/週次/日次）を明確化した",
  "回答に根拠提示が必要な業務かを確認した",
  "出力様式の固定が必要なタスクを切り分けた",
  "RAGの検索評価セット（最低10問）を作成した",
  "Fine-tuning用の教師データ作成体制を確認した",
  "評価指標（品質・安全性・運用性）を合意した",
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "📩 LINEで毎週AI知識を配信中";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

function LineCtaBox() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-gray-900">{lineCtaTitle}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
      >
        {lineCtaButtonLabel}
      </a>
    </div>
  );
}

export default function RagVsFinetunigGuidePage({ faqItems }: RagVsFinetunigGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "RAGとファインチューニングの判断フレーム" },
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
                title="RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            RAGとファインチューニング、どちらを選ぶ？社内データ活用の判断フレーム
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「社内データを生成AIに使いたいが、RAGとファインチューニングのどちらを選ぶべきか分からない」という相談は、PoC初期で最も多い論点です。ここで判断を誤ると、
            初期は動いても運用で破綻し、コストと時間だけが増えます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、RAGを「辞書を持ち込む」、ファインチューニングを「教育し直す」という比喩で直感的に整理し、比較表と3ステップ判断フローで意思決定できる状態を目指します。
            技術詳細より、非エンジニアが実装方針を決めるための判断軸に絞って解説します。
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
            結論: 迷ったら「RAG先行」で始め、必要条件がそろったらファインチューニングを足す
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">最新の社内情報を扱うなら、RAGの方が更新運用に強く、初期導入も進めやすい。</li>
            <li className="pl-1 marker:text-gray-500">出力様式のぶれを強く抑える必要がある業務は、ファインチューニングが効きやすい。</li>
            <li className="pl-1 marker:text-gray-500">最終形は二択ではなく、RAGで知識を補い、Fine-tuningで振る舞いを整える併用が現実的。</li>
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
          <h2 id="difference" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGとファインチューニングの違いを1分で理解する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            RAGは「必要なときに辞書を持ち込んで回答する方式」、ファインチューニングは「モデルを教育し直して回答傾向を変える方式」です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            つまり、RAGは回答時に外部知識を参照し、ファインチューニングはモデル内部の挙動を変えます。社内規程や製品仕様のように更新される情報はRAGと相性が良く、
            対外返信のフォーマット統一のように「振る舞い固定」が必要な業務はファインチューニングが候補になります。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">RAG（辞書を持ち込む）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li className="pl-1">最新文書を反映しやすい</li>
                <li className="pl-1">根拠提示を付けやすい</li>
                <li className="pl-1">検索品質とデータ整備が成功要因</li>
              </ul>
            </section>
            <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">Fine-tuning（教育し直す）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li className="pl-1">出力形式やトーンを揃えやすい</li>
                <li className="pl-1">特定タスクの再現性を上げやすい</li>
                <li className="pl-1">教師データ作成と再学習運用が必要</li>
              </ul>
            </section>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            RAGの仕組みを先に押さえたい方は
            <Link href="/academy/blog/what-is-rag" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAG（検索拡張生成）とは
            </Link>
            を先に読むと、後続の判断が速くなります。
          </p>

          <div className="mt-8">
            <LineCtaBox />
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
          <h2 id="comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            比較表: コスト・用途・更新頻度・精度・実装難易度を同じ軸で見る
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            導入判断で混乱する原因は、費用だけ、精度だけのように単一軸で比較することです。下表のように5軸を同時に見ると、議論が感覚論から実装論に変わります。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[940px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">RAG</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ファインチューニング</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">判断メモ</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.rag}</td>
                    <td className="py-4 px-4">{row.fineTuning}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            費用の見積もりでは、RAGは「検索基盤と運用改善」、ファインチューニングは「教師データ整備と再学習運用」が主な費用源になります。どちらが安いかではなく、
            自社の更新頻度と運用体制に合うかを優先してください。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            OpenAI系の実装では、RAGはResponses API + File Search、学習はFine-tuning APIという構成が2026年2月時点の基本です。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            なお、料金や機能は更新されるため、実装時は必ず公式ドキュメントを確認してください（確認日: 2026-02-20）。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="flowchart" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別判断フローチャート（3ステップ）: これだけで初期方針を決める
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは会議でそのまま使える3ステップに絞ります。細かい技術比較は後回しにし、先に導入方針を確定することが目的です。
          </p>

          <div className="mt-7 space-y-4">
            {flowSteps.map((step, index) => (
              <section key={step.title} className="rounded-lg border border-emerald-200 bg-white p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-emerald-600 px-2 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.detail}</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-emerald-700">{step.result}</p>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-100 p-5">
            <p className="text-sm leading-7 text-emerald-900">
              部門別に分岐を増やした「用途別判断フローチャート（詳細版）」はLINE特典で配布しています。導入前会議で使う場合は、詳細版を印刷して意思決定項目を揃えると、
              企画・開発・情シスでの合意形成が速くなります。
            </p>
          </div>

          <div className="mt-8">
            <LineCtaBox />
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
          <h2 id="implementation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            失敗しない実装順序: RAG先行で評価し、必要な業務だけFine-tuningを足す
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実務では、最初から大規模なファインチューニング計画を立てるより、RAGの最小構成を短期間で評価し、課題が残る箇所だけを追加学習する方が失敗確率を下げられます。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">フェーズ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">テーマ</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実行内容</th>
                </tr>
              </thead>
              <tbody>
                {implementationPhases.map((phase) => (
                  <tr key={phase.phase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{phase.phase}</th>
                    <td className="py-4 px-4">{phase.theme}</td>
                    <td className="py-4 pl-4">{phase.actions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">導入判断をぶらさない最小チェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {decisionChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            実装イメージは
            <Link href="/academy/blog/rag-use-cases" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAGの活用事例8選
            </Link>
            と
            <Link href="/academy/blog/ai-agent-build-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントの作り方
            </Link>
            、評価設計は
            <Link href="/academy/blog/llm-evaluation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              LLM評価ガイド
            </Link>
            をあわせて読むと、導入から運用まで一気につながります。
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
            FAQ: RAGとファインチューニングの導入判断でよくある質問
          </h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
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
          <h2 id="related-links" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事: 次に読むと判断精度が上がる4本
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？
              </Link>
              : 仕組みの全体像を基礎から整理。
            </li>
            <li>
              <Link href="/academy/blog/rag-use-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGの活用事例8選
              </Link>
              : 業務別に導入イメージを具体化。
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方
              </Link>
              : RAGを含む実装アーキテクチャを把握。
            </li>
            <li>
              <Link href="/academy/blog/llm-evaluation-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの評価（LLM評価）入門
              </Link>
              : PoC止まりを防ぐ評価運用を設計。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーで、AIの判断軸をキャリアの武器に変える
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、ツールの使い方だけを学ぶ場ではありません。実務で使える生成AI活用力に加え、自己理解とキャリア設計、仲間と学ぶ環境を通じて、
            継続的に成果を出せる実装力を育てます。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">生成AI活用力: 業務で再現できる導入・評価・運用スキルを体系化。</li>
            <li className="pl-1 marker:text-gray-500">自己理解・キャリアデザイン: AIを鏡に強みと価値観を整理し、次の役割を設計。</li>
            <li className="pl-1 marker:text-gray-500">仲間と共に学ぶ環境: 実践報告と相互レビューで、定着速度を上げる。</li>
          </ul>
          <div className="mt-8">
            <LineCtaBox />
          </div>
        </motion.section>
      </article>
    </main>
  );
}
