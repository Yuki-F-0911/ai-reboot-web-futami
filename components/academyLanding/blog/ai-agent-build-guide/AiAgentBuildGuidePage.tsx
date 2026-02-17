"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiAgentBuildGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AIエージェント 作り方", "AIエージェント 開発", "自律型AI 構築"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "definition", label: "AIエージェントとは？" },
  { id: "architecture", label: "基本アーキテクチャ（ループ構造）" },
  { id: "five-steps", label: "開発の5ステップ" },
  { id: "frameworks", label: "主要フレームワーク比較" },
  { id: "no-code", label: "ノーコードで作る方法" },
  { id: "use-cases", label: "実務での活用パターン" },
  { id: "cautions", label: "開発時の注意点" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "AIリブートで学ぶ" },
] as const;

const loopSteps = [
  {
    title: "1) 計画（Plan）",
    body: "目的を分解し、次に何をするか（情報収集/作業/確認）を決めます。",
  },
  {
    title: "2) 実行（Act）",
    body: "ツール実行や外部API呼び出しなど、環境に作用するアクションを行います。",
  },
  {
    title: "3) 観察（Observe）",
    body: "実行結果（ログ/数値/エラー）を読み、成功/失敗の状態を更新します。",
  },
  {
    title: "4) 修正（Reflect/Revise）",
    body: "必要なら再計画し、条件分岐・再試行・人の確認へ切り替えます。",
  },
] as const;

const fiveSteps = [
  {
    title: "Step 1. 目的定義（ゴール/境界/成功条件）",
    body: "「何をやるか」より先に「何をやらないか」を決めます。入力できる情報、実行してよい操作、最終的に人が確認する箇所を明確にし、成功条件はKPI（時間削減、一次解決率、精度など）で定義します。",
  },
  {
    title: "Step 2. ツール選定（どこまで自動化するか）",
    body: "メール/カレンダー/CRM/社内DBなど、実務のボトルネックに直結するツールから選びます。最初は「読み取り中心」→「限定的な書き込み」→「承認付き実行」の順に段階的に権限を広げると安全です。",
  },
  {
    title: "Step 3. プロンプト設計（役割/制約/出力/ツール仕様）",
    body: "システム指示で役割と禁止事項を固定し、ツール入出力の形式を厳密にします。ハルシネーション対策として「根拠提示」「不確実なら質問」「出典がない場合は推測と明記」をルール化します。",
  },
  {
    title: "Step 4. テスト（再現性/評価/失敗パターンの収集）",
    body: "代表ケースだけでなく、例外・曖昧入力・権限エラー・タイムアウトを含むテストを用意します。失敗ログを分類し、再試行戦略（回数、温度、別ルート）と人の介入条件を決めます。",
  },
  {
    title: "Step 5. 運用（監視/コスト上限/改善サイクル）",
    body: "成功率・人の介入率・平均コスト・危険操作のブロック回数を可視化し、毎週の改善サイクルを回します。実務では「運用が8割」なので、ログと権限設計を最初から作り込みます。",
  },
] as const;

const frameworkRows = [
  {
    name: "LangChain（+ LangGraph等）",
    strengths: "ツール実行・チェーン・状態管理など実装の選択肢が広い",
    bestFor: "ワークフロー型から段階的に拡張したいケース",
    cautions: "抽象度が高く、設計の一貫性がないと複雑化しやすい",
  },
  {
    name: "AutoGen",
    strengths: "複数エージェントの会話/役割分担を作りやすい",
    bestFor: "レビューや協調（作成→検証→修正）の構造が欲しいケース",
    cautions: "会話が長くなりやすく、コスト/収束設計が重要",
  },
  {
    name: "CrewAI",
    strengths: "役割（Role）とタスク分割の型がわかりやすい",
    bestFor: "業務プロセスを「役割×タスク」で表現したいケース",
    cautions: "ツールと評価の設計が甘いと、出力品質が安定しない",
  },
  {
    name: "OpenAI Responses API",
    strengths: "実行基盤を任せつつ、アプリ側は体験設計に集中できる",
    bestFor: "チャット体験にエージェント動作を組み込みたいケース",
    cautions: "要件次第で実装の自由度（状態/評価/ツール制御）に制約が出る。旧Assistants APIは非推奨のため、新規はResponses API前提で検討する",
  },
] as const;

const noCodeCards = [
  {
    name: "Dify",
    body: "ワークフロー/ナレッジ/RAGを統合して、業務向けエージェントを組み立てやすい選択肢です。まずは「社内FAQ→回答生成」のように情報源が明確な領域から始めると安定します。",
  },
  {
    name: "Zapier",
    body: "既存SaaS連携の自動化に強く、営業/CS/バックオフィスの反復作業を短時間でつなげられます（AI Actions等の機能を含む）。誤操作防止のため、最初はドラフト作成や通知に限定するのが安全です。",
  },
  {
    name: "GPTs",
    body: "プロンプトとナレッジで「型」を作りやすく、社内の相談窓口やテンプレ生成に向きます。権限の強い操作（書き込み/送信）は、人の確認と組み合わせて運用します。",
  },
] as const;

const useCaseCards = [
  {
    title: "リサーチ自動化",
    body: "情報収集→要点整理→社内フォーマット化までを短縮し、意思決定スピードを上げます。",
  },
  {
    title: "カスタマーサポート",
    body: "問い合わせ分類、一次回答、担当振り分けを自動化し、対応品質のばらつきを減らします。",
  },
  {
    title: "データ分析/レポート",
    body: "集計→グラフ→示唆→コメント案までを生成し、定例レポート作成の工数を削減します。",
  },
  {
    title: "ワークフロー自動化",
    body: "申請、承認、通知、タスク登録などの反復作業をつなぎ、手戻りを減らします。",
  },
] as const;

const cautionItems = [
  {
    title: "安全性（権限と境界）",
    body: "書き込み系の操作は特に危険です。「何を実行してよいか」「誰が承認するか」「ログをどう残すか」を最初に固定し、権限は最小から始めます。",
  },
  {
    title: "コスト管理（上限と停止）",
    body: "入力長・再試行回数・ツール呼び出し回数を制限し、タスク単位で上限コストを設定します。要約・キャッシュ・早期停止を組み込むと安定します。",
  },
  {
    title: "ハルシネーション対策（検証と根拠）",
    body: "根拠提示、検証ステップ、失敗時の質問返しを設計します。重要判断は二重チェック（別プロンプト/別エージェント）や人の確認を前提にします。",
  },
] as const;

export default function AiAgentBuildGuidePage({ faqItems }: AiAgentBuildGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIエージェントの作り方" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月17日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論: AIエージェント開発は「目的・境界を決める → 小さく作る → ログで改善する」が最短ルートです。まずは1つの業務で
            計画→実行→観察→修正のループを回し、安定したら権限と範囲を広げましょう。
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
              AIエージェントは、目標達成に向けて「計画→実行→観察→修正」を反復するAIシステムです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              開発は「目的定義 → ツール選定 → プロンプト設計 → テスト → 運用」の5ステップで進めると迷いにくくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              成否は実装よりも「安全性（権限と境界）」「コスト上限」「ログ設計」で決まります。
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
          <h2 id="definition" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェントとは？
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            復習: AIエージェントとは、目標を与えると「次の行動を決めて、実行し、結果を見て調整する」流れを自律的に回せるAIです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            重要なのは「回答するAI」ではなく「仕事を前に進めるAI」という点です。情報取得が必要ならRAGを組み合わせ、実行が必要ならツール連携を
            組み込むことで、実務で使える品質に近づきます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            まず概念を整理したい場合は{" "}
            <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは？
            </Link>{" "}
            を先に読むと全体像が掴みやすくなります。
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
          <h2 id="architecture" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェントの基本アーキテクチャ（計画→実行→観察→修正のループ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: AIエージェントは「計画→実行→観察→修正」を回すループ構造で、状態・評価・ガードレールを足して運用品質を作ります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            基本形は「ループ」です。これに、ツール（外部システム操作）・状態（メモリ）・評価（検証）・ガードレール（安全境界）が加わります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {loopSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">実装でよく使う部品</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">Planner: タスク分解と次アクション選択</li>
              <li className="pl-1 marker:text-gray-500">Tooling: 検索/DB/メール/CRMなどの実行手段（関数呼び出し）</li>
              <li className="pl-1 marker:text-gray-500">Memory/State: 進捗、前提、参照情報、失敗理由の保持</li>
              <li className="pl-1 marker:text-gray-500">Evaluator: 出力の検証（形式/整合性/ルール遵守）</li>
              <li className="pl-1 marker:text-gray-500">Guardrails: 権限、危険操作のブロック、個人情報の取り扱い</li>
            </ul>
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
          <h2 id="five-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェント開発の5ステップ（目的定義→ツール選定→プロンプト設計→テスト→運用）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 最初から「自律」を目指さず、境界を決めたワークフローから始めると成功率が上がります。
          </p>
          <div className="mt-6 space-y-4">
            {fiveSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            実装そのものに不安がある場合は{" "}
            <Link
              href="/academy/blog/ai-coding-for-beginners"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIコーディング入門
            </Link>{" "}
            を併読すると、ツール選定やテストの考え方が補強できます。
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
          <h2 id="frameworks" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要フレームワーク比較（LangChain/AutoGen/CrewAI/OpenAI Responses API）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 最初から複雑な協調にせず、ワークフロー型で小さく作り、必要になった「状態管理・評価・再試行・役割分担」を足していくのが安全です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            どれが正解というより、必要な「協調の型」と「運用のしやすさ」で選びます。なお、AutoGPTのような“自律実行”系のプロジェクトもありますが、実務では権限と停止条件（どこで止めるか）を前提に設計するのが基本です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">選択肢</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">向いているケース</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {frameworkRows.map((row) => (
                  <tr key={row.name} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.name}</th>
                    <td className="py-4 px-4">{row.strengths}</td>
                    <td className="py-4 px-4">{row.bestFor}</td>
                    <td className="py-4 pl-4">{row.cautions}</td>
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
          <h2 id="no-code" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ノーコードで作るAIエージェント（Dify/Zapier/GPTs）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 実務で成果を出す最短ルートは、ノーコードで仮説検証し、必要な部分だけコード化する進め方です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            まずは「入力が決まっている」「出力の正解がある」タスクから始めると、運用が安定しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {noCodeCards.map((card) => (
              <section key={card.name} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
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
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実務での活用パターン（リサーチ自動化/カスタマーサポート/データ分析/ワークフロー自動化）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 最初は「品質が測れる」「失敗しても被害が小さい」領域から始めると安全です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            特に、情報収集やドラフト作成は導入効果が出やすいです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCaseCards.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm font-semibold text-gray-900">情報取得が鍵になる場合</p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              ナレッジ検索や社内資料の参照が必要なら、RAGの仕組みを組み合わせると品質が安定します。詳しくは{" "}
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとは？
              </Link>{" "}
              を参照してください。
            </p>
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
          <h2 id="cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            開発時の注意点（安全性、コスト管理、ハルシネーション対策）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 事故を防ぐ鍵は「危険操作のブロック」「上限（コスト/回数/権限）」「検証（テスト/バリデーション）」を最初に組み込むことです。
          </p>
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
              <Link
                href="/academy/blog/what-is-ai-agent"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントとは？（定義を復習）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAGとは？（情報取得の基本）
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-coding-for-beginners"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディング入門（実装の進め方）
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
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
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーで「実務で動く」エージェント設計を学ぶ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIエージェントは作るだけではなく、業務に合わせた境界設計・運用・改善が成果の差になります。AIリブートアカデミーでは、実務に直結する
            ユースケースから、設計と改善サイクルまで体系的に学べます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーに参加する
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
