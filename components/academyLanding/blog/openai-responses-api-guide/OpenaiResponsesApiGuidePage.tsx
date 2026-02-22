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

type OpenaiResponsesApiGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["OpenAI Responses API 使い方", "Chat Completions 移行", "function calling 実装"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "q1", label: "Q1. Responses APIとChat Completionsの違い" },
  { id: "q2", label: "Q2. 最短で動かす実装手順" },
  { id: "q3", label: "Q3. function callingとtools設計" },
  { id: "q4", label: "Q4. 会話ステート管理の実務" },
  { id: "q5", label: "Q5. Background mode運用" },
  { id: "q6", label: "Q6. 移行で詰まりやすいポイント" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続するための次の一歩" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

const summaryPoints = [
  "新規実装はResponses API前提で進めるほうが、tools・state・非同期処理を一本化しやすくなります。",
  "最初は単発応答の成功を作り、次にfunction calling、最後に会話ステートとBackground modeへ段階拡張すると失敗が減ります。",
  "移行時はモデル対応差・JSON schema・streaming時の状態引き継ぎで詰まりやすいため、検証環境で先に潰す運用が必須です。",
  "ChatGPT契約とAPI課金は別管理なので、実装前に予算と責任範囲を分けて設計する必要があります。",
] as const;

const comparisonRows = [
  {
    axis: "APIの設計思想",
    responses: "応答生成に加え、tools・会話状態・長時間処理を含めて統合的に扱える",
    chatCompletions: "テキスト生成中心で、周辺機能は別実装になりやすい",
    decision: "新規機能はResponses API、既存維持は段階移行",
  },
  {
    axis: "ツール連携",
    responses: "built-in toolsとfunction callingを同じ設計で扱える",
    chatCompletions: "function calling中心で、運用拡張時に構成が増えやすい",
    decision: "将来拡張を見込むならResponses API寄りで設計",
  },
  {
    axis: "会話状態",
    responses: "`previous_response_id` と `conversation` で状態管理しやすい",
    chatCompletions: "履歴配列をアプリ側で都度管理する前提が強い",
    decision: "会話継続が要件ならResponses APIの優位性が高い",
  },
  {
    axis: "非同期運用",
    responses: "Background modeで長時間処理を扱える",
    chatCompletions: "非同期設計はアプリ側実装依存",
    decision: "長時間ジョブがあるならResponses APIを優先",
  },
] as const;

const implementationSteps = [
  {
    title: "Step 1. 単発レスポンスを返す最小構成を通す",
    detail:
      "まずは入力1つ、出力1つで成功パターンを作ります。ここでモデル指定・エラーハンドリング・ログ出力を固定すると後工程が安定します。",
    snippet: `const response = await client.responses.create({
  model: "gpt-5.2",
  input: "社内向けAI利用ルールの骨子を5項目で出力してください"
});`,
  },
  {
    title: "Step 2. 出力形式を固定して再現性を上げる",
    detail:
      "free-form出力のまま本番投入すると後段処理が壊れやすくなります。JSON schemaや固定見出しで受け口を先に決めます。",
    snippet: `const response = await client.responses.create({
  model: "gpt-5.2",
  input: "生成AI利用ルールをJSONで出力",
  text: {
    format: {
      type: "json_schema",
      name: "policy_outline",
      schema: {
        type: "object",
        properties: {
          title: { type: "string" },
          rules: { type: "array", items: { type: "string" } }
        },
        required: ["title", "rules"],
        additionalProperties: false
      }
    }
  }
});`,
  },
  {
    title: "Step 3. function callingと監査ログを追加する",
    detail:
      "外部連携は1つずつ追加し、呼び出し成否・リトライ・採用可否をログで追える状態にします。最終判断をAIへ丸投げしない設計が基本です。",
    snippet: `const response = await client.responses.create({
  model: "gpt-5.2",
  input: "今週のSaaSニュースを3件要約",
  tools: [{ type: "web_search_preview" }]
});`,
  },
] as const;

const toolDesignRules = [
  {
    title: "ツールごとに責任境界を分ける",
    body: "検索、ファイル参照、実行系ツールを同時に開けず、目的別に権限を分割します。",
  },
  {
    title: "戻り値をそのまま採用しない",
    body: "ツール結果は一次情報の抜粋として扱い、採用前に人が確認するフローを固定します。",
  },
  {
    title: "失敗時のフォールバックを明示する",
    body: "ツール失敗時に再実行する条件、手動代替に切り替える基準、通知先を先に決めます。",
  },
] as const;

const stateChecklist = [
  "レスポンスIDを保存し、追跡可能な単位（ユーザー/案件/スレッド）と紐づける",
  "`previous_response_id` を使うケースと、新規会話を開始するケースを明確に分離する",
  "streaming時に履歴引き継ぎが壊れたときの再送ロジックを用意する",
  "会話ログは機密区分に応じて保持期間を分ける",
] as const;

const backgroundModeRules = [
  {
    title: "導入対象を限定する",
    body: "最初から全処理を非同期化せず、5秒を超える重い処理だけをBackground modeに寄せます。",
  },
  {
    title: "状態監視を先に実装する",
    body: "ポーリング間隔、タイムアウト、失敗通知を先に決めることで、ジョブ取りこぼしを防げます。",
  },
  {
    title: "運用KPIを決める",
    body: "平均処理時間、失敗率、手動復旧件数を追い、週次で改善する形にすると定着しやすくなります。",
  },
] as const;

const pitfallRows = [
  {
    issue: "モデルとパラメータの対応不一致",
    symptom: "JSON schema指定でエラーになる、または期待形式で返らない",
    action: "モデルごとの対応パラメータを公式リファレンスで事前確認する",
  },
  {
    issue: "会話ステートの引き継ぎ不備",
    symptom: "前ターン文脈が失われる、応答が突然初期化される",
    action: "ID保存ロジックと再送ロジックを統合テストで確認する",
  },
  {
    issue: "tools権限の過剰付与",
    symptom: "不要な外部アクセスや監査不能な処理が発生する",
    action: "用途別にtoolsを分離し、最小権限で運用する",
  },
  {
    issue: "ChatGPT課金とAPI課金の混同",
    symptom: "予算超過、部門間で責任の押し付けが発生する",
    action: "契約と請求を分離し、管理責任者を明確にする",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "実務で再現可能なAI活用の判断軸を整理し、業務へ落とすための思考プロセスを身につけます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして自分の強みと価値観を言語化し、次のキャリア選択へつなげます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話と実践共有を通じて、学習を継続可能な形にします。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function OpenaiResponsesApiGuidePage({ faqItems }: OpenaiResponsesApiGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OpenAI Responses API実装ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            OpenAI Responses API実装ガイド｜Chat Completionsからの移行・function calling・運用設計
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="OpenAI Responses API実装ガイド｜Chat Completionsからの移行・function calling・運用設計"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAI API実装をこれから始めるなら、まずResponses APIを基準に設計するのが安全です。この記事では、単発応答の最小実装から、function
            calling、会話ステート管理、Background modeまでを順番に整理し、移行時に壊れやすいポイントを先に潰す手順を示します。確認日: 2026-02-20。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="q1"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q1. OpenAI Responses APIとChat Completionsの違い</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            違いは単純なエンドポイント名ではなく、運用設計の前提です。Responses APIは、ツール呼び出しや会話状態、長時間処理まで含めて一貫管理しやすい構造になっています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Responses API</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Chat Completions</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">実務判断</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="align-top">
                    <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">{row.axis}</th>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row.responses}</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row.chatCompletions}</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            API以前の運用整理が必要な場合は、
            <Link href="/academy/blog/chatgpt-gpt5-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTとAPIの使い分けガイド
            </Link>
            も先に読むと判断しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="q2"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q2. 最短で動かす実装手順（単発応答→JSON出力）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            最初に全機能を組み込むと、問題切り分けができなくなります。下記3ステップで「確実に動く最小単位」を積み上げる形が実務向きです。
          </p>
          <div className="mt-6 space-y-5">
            {implementationSteps.map((step) => (
              <section key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.detail}</p>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-800">
{step.snippet}
                </pre>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            開発全体像を俯瞰したい場合は、
            <Link href="/academy/blog/ai-agent-build-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント構築ガイド
            </Link>
            の設計フローも参考になります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="q3"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q3. function calling / built-in toolsを安全に組み込む方法</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            toolsは便利ですが、権限設計と監査設計を先に作らないと運用事故につながります。まずは1ツール単位で導入し、目的と責任範囲を固定します。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {toolDesignRules.map((rule) => (
              <section key={rule.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{rule.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{rule.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            外部連携を増やす際は、接続設計の安全面として
            <Link href="/academy/blog/what-is-mcp" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              MCPの落とし穴解説
            </Link>
            を併読すると設計漏れを減らせます。
          </p>
        </motion.section>

        <motion.section
          id="q4"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q4. conversation stateとprevious_response_idで履歴を壊さない運用</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            会話品質の劣化はモデル精度より、状態管理ミスが原因のことが多くあります。ID管理、再送ルール、ログ保持をセットで設計してください。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {stateChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            チーム運用へ広げる場合は、
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              社内ガイドライン雛形
            </Link>
            で責任分担を先に定義しておくと崩れにくくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="q5"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q5. Background modeで長時間処理を回す実務設計</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            レポート生成や大規模要約のように処理時間が長いタスクは、同期処理のままだとタイムアウトや再実行事故を起こします。Background modeへ切り分ける基準を先に決めます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {backgroundModeRules.map((rule) => (
              <section key={rule.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{rule.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{rule.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="q6"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q6. 移行時につまずくポイントとチェックリスト</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            コード変換だけで移行を終えると、実運用で不具合が出やすくなります。事前に発生しやすい症状と回避策を整理しておくと、PoCから本番への移行速度が上がります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">詰まりポイント</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">症状</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">回避策</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {pitfallRows.map((row) => (
                  <tr key={row.issue} className="align-top">
                    <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">{row.issue}</th>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row.symptom}</td>
                    <td className="border-b border-gray-200 px-4 py-3 text-gray-700">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">API選定だけでなく、AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-orange-900/90">
            AIリブートアカデミーでは、特定ツールの操作習得ではなく、AIを仕事に活かすための判断軸を体系化し、キャリア設計と学習継続まで一体で整えることを重視しています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-orange-200 bg-white p-4">
                <h3 className="text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
