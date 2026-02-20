"use client";

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

type ClaudeOpus46GuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["Claude Opus 4.6 使い方", "Claude 4.6 新機能", "Anthropic 最新モデル", "1Mトークン Claude"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（確認日: 2026-02-20）" },
  { id: "overview", label: "Claude Opus 4.6の概要と提供範囲" },
  { id: "new-features", label: "新機能: 1Mトークン・Adaptive Thinking・effort" },
  { id: "benchmark", label: "ベンチ比較: 4.6と旧世代の見方" },
  { id: "pricing", label: "料金比較とclaude.ai利用制限" },
  { id: "use-cases", label: "実務活用シーンと導入手順" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const summaryPoints = [
  "Claude Opus 4.6は2026年2月5日に公開されたAnthropicの上位モデルで、Claude.aiとAPIの両方で利用できます。",
  "主要アップデートは1Mトークンコンテキスト（beta）、Adaptive Thinking、effort controls（alpha）です。",
  "API価格は入力$15/MTok、出力$75/MTok（確認日: 2026-02-20）で、単価だけでなく品質差を含めて判断する必要があります。",
  "Claude 3.5 Sonnetとの比較は指標が揃わないため、同一ベンチの社内検証を前提に意思決定するのが安全です。",
] as const;

const overviewRows = [
  {
    axis: "リリース日",
    detail: "2026-02-05（Anthropic公式ニュース）",
  },
  {
    axis: "提供チャネル",
    detail: "Claude.ai（Pro/Max/Team/Enterprise）とAnthropic API",
  },
  {
    axis: "通常コンテキスト",
    detail: "200Kトークン",
  },
  {
    axis: "拡張コンテキスト",
    detail: "1Mトークン（beta、APIではアクセス申請制）",
  },
  {
    axis: "API価格",
    detail: "入力$15/MTok、出力$75/MTok",
  },
] as const;

const featureCards = [
  {
    title: "1Mトークンコンテキスト（beta）",
    what: "長大なリポジトリ、契約書束、数十本の議事録を1セッションで扱える拡張コンテキスト。",
    impact: "分割要約の前処理を減らし、全体整合を保った分析がしやすくなる。",
    practice: "長文をそのまま投げる前に、目的・評価軸・禁止事項を先頭で固定すると精度が安定する。",
    caution: "beta機能のため提供条件が変わりやすい。上限付近では遅延・コスト増が起こりやすい。",
  },
  {
    title: "Adaptive Thinking",
    what: "難度が高い問いで推論を深め、単純タスクでは過剰推論を抑える調整機構。",
    impact: "考えるべきタスクに計算資源を寄せやすく、運用時の品質ムラを減らしやすい。",
    practice: "同一入力で結果が揺れる場合は、出力フォーマットと評価基準を先に固定する。",
    caution: "「必ず高品質になる」機能ではない。入力品質が低いと改善幅は限定される。",
  },
  {
    title: "effort controls（alpha）",
    what: "推論の深さを制御するパラメーター。2026-02-20時点でalpha表記。",
    impact: "速度優先と精度優先をAPI呼び出しごとに調整しやすくなる。",
    practice: "本番は`low/medium/high`相当を固定せず、タスク分類ごとにA/Bテストで最適化する。",
    caution: "alpha仕様のため、正式名・値域・挙動は更新される可能性がある。",
  },
] as const;

const benchmarkRows = [
  {
    metric: "Terminal Coding Benchmark",
    opus46: "44.8%",
    baseline: "Opus 4.1: 35.5%",
    note: "公式比較。エージェント型コーディングの改善指標。",
  },
  {
    metric: "OSWorld",
    opus46: "38.4%",
    baseline: "Opus 4.1: 31.3%",
    note: "公式比較。GUIタスク実行系での改善。",
  },
  {
    metric: "MRCR（Reasoning）",
    opus46: "76.5%",
    baseline: "Sonnet 4.5: 18.5%",
    note: "公式ニュース記載。比較対象がSonnet系。",
  },
  {
    metric: "Internal Tool Evaluation",
    opus46: "—",
    baseline: "Sonnet 3.7: 64% / Sonnet 3.5: 38%",
    note: "3.5比較は3.7発表時の別指標。Opus 4.6と同一条件ではない。",
  },
] as const;

const pricingRows = [
  {
    provider: "Anthropic",
    model: "Claude Opus 4.6",
    input: "$15.00 / MTok",
    output: "$75.00 / MTok",
    context: "200K（1M betaあり）",
    note: "深い推論・長文処理向け。確認日: 2026-02-20",
  },
  {
    provider: "OpenAI",
    model: "GPT-5",
    input: "$1.25 / MTok",
    output: "$10.00 / MTok",
    context: "公開価格表を参照",
    note: "価格参照用。機能差を含むため単純比較は不可。",
  },
  {
    provider: "Google",
    model: "Gemini 2.5 Pro",
    input: "$1.25 / MTok（<=200K）",
    output: "$10.00 / MTok（<=200K）",
    context: "200K超で単価上昇",
    note: "価格帯比較用。入出力条件で変動。",
  },
] as const;

const claudeAiPlanRows = [
  {
    axis: "無料プラン",
    detail: "使用量は固定件数でなく、会話長・添付ファイル・混雑状況で変動。セッション制限は5時間単位で管理。",
  },
  {
    axis: "Proプラン",
    detail: "通常$20/月。無料比で利用量増、モデル選択、優先アクセス、新機能先行が提供。",
  },
  {
    axis: "Proの利用目安",
    detail: "短い会話なら少なくとも45メッセージ/5時間が目安（公式ヘルプ記載）。",
  },
] as const;

const claudeAiSteps = [
  "Claude.aiで対象プランを確認し、モデルセレクターでOpus 4.6を選択する。",
  "最初の評価タスクは1つに固定し、入力データ・期待出力・禁止事項を明示する。",
  "必要に応じて思考設定（Adaptive Thinking/effort controlsの提供範囲）を確認して実行する。",
  "結果を品質・処理時間・コストで記録し、Sonnet系と比較して採用範囲を決める。",
] as const;

const usageLimitTips = [
  "長いスレッドを延命しすぎると、claude.aiでは上限到達が早くなる傾向がある。",
  "添付ファイルが多い検証は、会話を分割して評価ログを分けると再現性が上がる。",
  "運用ルールには「確認日」を必ず残し、プラン改定時に更新差分を追跡する。",
] as const;

const useCases = [
  {
    title: "長文分析: 調査資料と議事録を一括で読み、意思決定メモへ圧縮する",
    detail:
      "1Mコンテキストを活かす代表例です。分割要約を繰り返すより、判断軸を定義したうえで一括解析する方が結論の整合性を保ちやすくなります。",
    prompt:
      "目的: 投資判断メモを作成\n入力: 市場レポート、競合資料、議事録をまとめて投入\n制約: 事実と推定を分離、リスクは根拠付き\n出力: 1ページ要約 + 意思決定チェックリスト",
  },
  {
    title: "コード生成・レビュー: 実装案だけでなくレビュー観点を同時に作る",
    detail:
      "Adaptive Thinkingとeffort controlsは、難易度が高いコードレビューで効果が出やすい領域です。生成結果だけでなく、欠陥検知の観点を先に出させると実務価値が上がります。",
    prompt:
      "目的: PRレビュー支援\n入力: 変更差分と要件定義\n制約: セキュリティ、性能、可読性の3観点で指摘\n出力: 優先度付きレビューリスト + 修正提案",
  },
  {
    title: "リサーチ: 仮説検証の「反証」まで含めて設計する",
    detail:
      "高性能モデルは肯定根拠を集めるだけでなく、反証可能性まで整理させると信頼性が上がります。結論を急がず、反対仮説の扱いを明示する運用が有効です。",
    prompt:
      "目的: 新規市場の参入可否を評価\n入力: 市場規模、競合、規制情報\n制約: 賛成根拠と反証根拠を同数提示\n出力: 推奨方針 + 不確実性リスト",
  },
  {
    title: "マルチエージェント: Planner/Executor/Reviewerの分担で品質を安定化する",
    detail:
      "Opus 4.6をPlannerまたはReviewerに置き、軽量モデルをExecutorに使う設計はコスト効率と品質の両立に向きます。役割分離が曖昧だと高単価モデルを浪費しやすくなります。",
    prompt:
      "目的: 週次レポート自動化フロー\n役割: Planner=Opus 4.6, Executor=軽量モデル, Reviewer=Opus 4.6\n制約: 監査ログ必須、失敗時フォールバック定義\n出力: 実行手順と品質ゲート一覧",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        ClaudeやOpenAI、Geminiの仕様更新を、実務判断に必要な粒度で整理して配信しています。変化の早いモデル運用の情報を追跡したい方向けの無料チャンネルです。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </section>
  );
}

export default function ClaudeOpus46GuidePage({ faqItems }: ClaudeOpus46GuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Opus 4.6使い方ガイド" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Claude Opus 4.6使い方ガイド｜1Mトークン・料金・実務活用【2026年2月】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claude Opus 4.6使い方ガイド｜1Mトークン・料金・実務活用【2026年2月】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Claude Opus 4.6は高性能ですが、実務で成果が出るかは「どの業務に当てるか」と「どの制限を前提に運用するか」で決まります。本記事では公式情報のみを基点に、
            仕様・料金・制限・導入手順を中級者向けに整理します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            API実装の基礎を先に確認したい場合は
            <Link href="/academy/blog/openai-responses-api-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              API設計の記事
            </Link>
            と併読すると、比較検証の設計が進めやすくなります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（確認日: 2026-02-20）</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Claude Opus 4.6とは何か: 2026-02-05リリースの上位モデル</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Opus 4.6は、難易度の高い推論・長文処理・コーディング支援を想定したAnthropicの上位モデルです。まず把握すべきは、通常200Kと拡張1M（beta）の2段階コンテキスト設計と、
            claude.ai/APIでの利用条件です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">内容</th>
                </tr>
              </thead>
              <tbody>
                {overviewRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 pl-4">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Claude全体の役割分担を先に整理したい場合は、
            <Link href="/academy/blog/gpt-vs-claude-2026" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GPTとClaudeの比較記事
            </Link>
            を参照すると、Opusを使うべき業務境界が明確になります。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="new-features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude 4.6の新機能: 1Mトークン・Adaptive Thinking・effort controls
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            新機能は「高性能化」ではなく「運用設計の選択肢拡張」と捉える方が実務では有効です。とくにeffort controlsはalpha段階なので、導入時は可用性と再現性を優先して扱います。
          </p>
          <div className="mt-6 space-y-5">
            {featureCards.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">仕様:</span> {item.what}
                </p>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">実務効果:</span> {item.impact}
                </p>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">使い方:</span> {item.practice}
                </p>
                <p className="blog-p mt-2 text-xs leading-6 text-gray-600">
                  <span className="font-semibold text-gray-800">注意:</span> {item.caution}
                </p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-xs leading-6 text-gray-500">
            [要確認: effort controlsの正式GA時期] 2026-02-20時点の公開情報ではalpha表記。
          </p>
        </motion.section>

        <motion.section
          id="benchmark"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            ベンチマーク比較: Opus 4.6の改善点とClaude 3.5比較時の注意点
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            公開ベンチだけで「最強モデル」と断定するのは危険です。Opus 4.6は4.1比の改善指標が多く、3.5 Sonnet比較は別発表の別指標に分かれています。比較前に指標の揃い方を確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">指標</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Opus 4.6</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">比較対象</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">読み方</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.metric}</th>
                    <td className="px-4 py-4">{row.opus46}</td>
                    <td className="px-4 py-4">{row.baseline}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            LLM評価設計の作法は
            <Link href="/academy/blog/llm-evaluation-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              LLM評価ガイド
            </Link>
            で詳しく扱っています。モデル比較を社内合意に使う場合は、精度だけでなく再現率・レビュー工数も指標に含めてください。
          </p>
        </motion.section>

        <motion.section
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">料金比較とclaude.ai利用制限: 単価だけでなく運用条件まで確認する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            価格比較は必要ですが、推論品質と処理失敗率を無視した単価比較は現場で機能しません。API単価、プラン制限、用途適合の3点セットで判断するのが実務的です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">提供元</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">入力単価</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">出力単価</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">コンテキスト</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注記</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={`${row.provider}-${row.model}`} className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4 font-semibold text-gray-900">{row.provider}</td>
                    <td className="px-4 py-4">{row.model}</td>
                    <td className="px-4 py-4">{row.input}</td>
                    <td className="px-4 py-4">{row.output}</td>
                    <td className="px-4 py-4">{row.context}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">claude.aiでの使い方と制限（実務向け）</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {claudeAiSteps.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ul>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {claudeAiPlanRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 pl-4">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {usageLimitTips.map((tip) => (
              <li key={tip} className="blog-li pl-1 marker:text-gray-500">
                {tip}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-4 text-xs leading-6 text-gray-500">価格・制限・比較の確認日: 2026-02-20</p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            実務活用シーン: 長文分析・コード生成・リサーチ・マルチエージェントで使い分ける
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Opus 4.6は万能用途で常時使うより、難度が高い工程へ限定投入する方が費用対効果が高くなります。まず4つの代表シナリオで検証し、効果が出た工程だけを定着させる設計が現実的です。
          </p>
          <div className="mt-6 space-y-5">
            {useCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
                <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{item.prompt}
                </pre>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            プロンプトとコンテキスト設計をさらに深掘りする場合は
            <Link href="/academy/blog/context-engineering-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              コンテキストエンジニアリング解説
            </Link>
            が有効です。導入判断を早めたいチームは、上記シナリオを2週間単位で回して比較ログを残してください。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionReveal}>
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="mb-4 scroll-mt-28 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTとClaude比較 2026年版
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/openai-responses-api-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Responses API実装ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/llm-evaluation-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                LLM評価ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/context-engineering-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                コンテキストエンジニアリングとは？
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="blog-h2 mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得を目的にした場ではありません。生成AI活用力を実務に接続しながら、自己理解とキャリアデザインを深め、仲間と継続して学べる環境を一体で設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">生成AI活用力: 業務課題に適切なAI活用を判断し、成果へ接続する</li>
            <li className="blog-li pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次のキャリア選択を具体化する</li>
            <li className="blog-li pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で実践の継続率と改善速度を高める</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
