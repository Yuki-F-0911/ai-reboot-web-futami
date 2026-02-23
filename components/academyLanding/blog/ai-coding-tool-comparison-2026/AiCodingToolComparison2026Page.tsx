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

type AiCodingToolComparison2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AIコーディングツール 比較 2026",
  "Copilot Agent HQ / Codex App",
  "Cursor Continue Windsurf",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "selection", label: "5ツール比較の結論" },
  { id: "feature-comparison", label: "機能比較（Agent/モデル/導入性）" },
  { id: "pricing", label: "料金比較（2026年2月）" },
  { id: "use-cases", label: "用途別おすすめ" },
  { id: "agent-hq", label: "Copilot Agent HQ最新機能" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related", label: "関連記事" },
  { id: "academy-cta", label: "AIリブートアカデミーのご案内" },
] as const;

const featureRows = [
  {
    axis: "主な強み",
    copilot: "GitHub上でcoding agentを運用しやすく、PR/レビュー導線に接続しやすい。",
    codex: "OpenAI Codex CLIで実装から検証までをターミナルで一気通貫に回せる。",
    cursor: "IDE内で対話編集を高速反復しやすく、画面修正の初速が高い。",
    continueTool: "OSSベースで拡張性が高く、モデル・実行基盤を自前統制しやすい。",
    windsurf: "低価格で始めやすく、Flow/Tab中心の生成体験で初学者の初速が出やすい。",
  },
  {
    axis: "Agent実行",
    copilot: "Agent mode + coding agent + Agent HQでタスク並列と進捗管理が可能。",
    codex: "CLI上で指示、編集、実行、再計画を反復。スクリプト運用と相性が高い。",
    cursor: "Background agentや複数モデル呼び分けでIDE内作業を自動化しやすい。",
    continueTool: "実行基盤は構成依存。自社環境に合わせたAgent設計が可能。",
    windsurf: "Cascade/Flowで実装補助を行いやすいが、組織統制は要検証。",
  },
  {
    axis: "モデル選択",
    copilot: "OpenAI/Anthropic/Google系を含む複数モデルから選択可能。",
    codex: "OpenAIモデル中心。難問は推論系、反復は軽量モデルに切替えやすい。",
    cursor: "OpenAI/Anthropic/Googleなど横断で選択可能。",
    continueTool: "ローカル/クラウドを含め自由度が高い（運用者の設計力が必要）。",
    windsurf: "主要クラウドモデル対応。詳細はプランと提供時期で変動。",
  },
  {
    axis: "導入しやすさ",
    copilot: "GitHub利用組織では最も導入しやすい。",
    codex: "CLI前提のため開発者向け。自動化志向のチームに適合。",
    cursor: "VS Code利用者は移行しやすく、非エンジニアでも触り始めやすい。",
    continueTool: "セットアップ自由度が高い反面、設計と保守の手間が必要。",
    windsurf: "低価格で試しやすいが、大規模運用要件は事前確認が必要。",
  },
] as const;

const personalPricingRows = [
  {
    tool: "GitHub Copilot",
    free: "Copilot Free",
    paid: "Pro $10/月, Pro+ $39/月",
    annual: "$100〜$468",
  },
  {
    tool: "OpenAI Codex App",
    free: "ChatGPT Free / Goで試用可能（提供条件あり）",
    paid: "ChatGPT Plus $20/月, Pro $200/月（プラン連動）",
    annual: "$240〜$2,400",
  },
  {
    tool: "Cursor",
    free: "Hobby",
    paid: "Pro $20/月, Ultra $200/月",
    annual: "$240〜$2,400",
  },
  {
    tool: "Continue",
    free: "Solo（無料）",
    paid: "Team $20/seat/月（クレジット付き）",
    annual: "$0〜$240/seat + API従量",
  },
  {
    tool: "Windsurf",
    free: "Free",
    paid: "Pro $15/月",
    annual: "$180",
  },
] as const;

const teamPricingRows = [
  { tool: "GitHub Copilot", plan: "Business / Enterprise", monthly: "$19 / $39 per user", annual: "$228 / $468 per user" },
  { tool: "OpenAI Codex App", plan: "ChatGPT Business / Enterprise連携", monthly: "契約見積り", annual: "契約見積り" },
  { tool: "Cursor", plan: "Teams", monthly: "$40 / user", annual: "$480 / user" },
  { tool: "Continue", plan: "Team", monthly: "$20 / seat + API", annual: "$240 / seat + API" },
  { tool: "Windsurf", plan: "Teams", monthly: "$30 / user", annual: "$360 / user" },
] as const;

const useCaseCards = [
  {
    title: "GitHub中心のチーム開発",
    recommendation: "GitHub Copilot Agent HQ",
    reason:
      "既存のIssue/PR/レビュー導線にAgentを接続しやすく、導入直後の運用負荷を抑えやすい。組織導入の最初の1本として失敗しにくい。",
  },
  {
    title: "CLI自動化・バッチ運用",
    recommendation: "OpenAI Codex App",
    reason:
      "ターミナル中心で実行と修正を繰り返す運用に強い。スクリプト化・検証・再実行のループを短くできる。",
  },
  {
    title: "画面改修の高速反復",
    recommendation: "Cursor",
    reason:
      "IDE内で複数ファイルを対話編集しやすく、UI改修と微修正を素早く回せる。非エンジニアとの共同作業にも向きやすい。",
  },
  {
    title: "自前統制・低コスト重視",
    recommendation: "Continue / Windsurf",
    reason:
      "Continueは構成自由度が高く統制設計に向く。Windsurfは低価格で試しやすく、個人導入の初期コストを抑えやすい。",
  },
] as const;

export default function AiCodingToolComparison2026Page({ faqItems }: AiCodingToolComparison2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIコーディングツール比較 2026" },
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
                title="AIコーディングツール比較 2026｜Copilot Agent HQ・Codex App・Cursor・Continue・Windsurf"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIコーディングツール比較 2026｜Copilot Agent HQ・Codex App・Cursor・Continue・Windsurf
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日（確認日ベース）</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            2026年2月時点の選定ポイントは「どのモデルが強いか」より「どの業務導線にAgentを接続するか」です。本記事では、
            GitHub Copilot Agent HQ、OpenAI Codex App、Cursor、Continue、Windsurfの5ツールを、機能・料金・導入性で比較します。
          </p>
        </motion.header>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">Copilot Agent HQ・Codex Appを含む5ツール比較</li>
            <li className="pl-1">Cursor・Continue・Windsurfの違いと選定基準</li>
            <li className="pl-1">2026年2月時点の料金目安と見落としやすい変動費</li>
            <li className="pl-1">チーム導入時に先に決めるべき運用ルール</li>
          </ul>
        </section>

        <section className="mb-8 mt-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Answer Box</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2026年の実務選定は、GitHub中心ならCopilot Agent HQ、CLI自動化ならCodex App、IDEでの高速改修ならCursorが主軸です。
            Continueは自前統制、Windsurfは低価格導入に強みがあります。最初は1本を主軸にし、足りない工程だけ2本目で補う段階導入が最も失敗しにくいです。
          </p>
        </section>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Copilot Agent HQはチーム運用との接続が強く、組織導入で安定しやすい。</li>
            <li className="pl-1 marker:text-gray-500">Codex AppはCLI実行の反復と自動化ワークフローに強い。</li>
            <li className="pl-1 marker:text-gray-500">Cursorは画面改修の初速、Continueは統制設計、Windsurfは低価格導入が強み。</li>
            <li className="pl-1 marker:text-gray-500">料金比較は固定費だけでなく、モデル利用とAgent実行の従量部分まで確認する。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="selection"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">5ツール比較の結論: 「主戦場」で主軸を決める</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            5ツールの差はモデル品質より、どの業務導線を短縮できるかに表れます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            GitHub中心のチームはCopilot、CLI中心はCodex App、IDE中心はCursorが軸になりやすいです。ContinueとWindsurfは、統制重視か低価格重視かで使い分けると判断しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="feature-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">機能比較: Agent/モデル/導入性</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            2026年2月時点では、全ツールが「補完」から「タスク実行」へ重心を移しています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[1200px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Copilot Agent HQ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Codex App</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Cursor</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Continue</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Windsurf</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.copilot}</td>
                    <td className="py-4 px-4">{row.codex}</td>
                    <td className="py-4 px-4">{row.cursor}</td>
                    <td className="py-4 px-4">{row.continueTool}</td>
                    <td className="py-4 pl-4">{row.windsurf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-6 text-gray-500">
            出典: GitHub Docs/Blog、OpenAI Codex、Cursor Pricing、Continue Pricing、Windsurf Pricing（確認日: 2026-02-21）
          </p>
        </motion.section>

        <motion.section
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">料金比較（2026年2月）: 固定費と変動費を分ける</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            比較時は月額料金だけでなく、上位モデル利用、プレミアムリクエスト、API従量を分離して計算してください。
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">個人向け比較</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料枠</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主要有料プラン</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">年額目安（税別）</th>
                </tr>
              </thead>
              <tbody>
                {personalPricingRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.free}</td>
                    <td className="py-4 px-4">{row.paid}</td>
                    <td className="py-4 pl-4">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">チーム向け比較（1席）</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">プラン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">月額（税別）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">年額目安（税別）</th>
                </tr>
              </thead>
              <tbody>
                {teamPricingRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.plan}</td>
                    <td className="py-4 px-4">{row.monthly}</td>
                    <td className="py-4 pl-4">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs leading-6 text-gray-500">価格・上限は頻繁に更新されるため、契約前に各公式ページで再確認してください。</p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-coding-tool-comparison-2026" />
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別おすすめ</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            1ツールで完結させるより、工程ごとに主役を分けるほうが定着しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {useCaseCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                <p className="mt-2 text-sm font-medium text-orange-700">{card.recommendation}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.reason}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            実装の基礎整理には
            <Link href="/academy/blog/ai-coding-for-beginners" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディング入門
            </Link>
            を、Cursor活用は
            <Link href="/academy/blog/cursor-ai-coding-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Cursorガイド
            </Link>
            を参照してください。
          </p>
        </motion.section>

        <motion.section
          id="agent-hq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">GitHub Copilot Agent HQ最新機能（2026年対応）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GitHubは2026年2月10日に、Copilot coding agentとAgent mode（MCP対応）をPublic Previewとして発表しました。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Issueからcoding agentを起動し、バックグラウンドでタスク処理を進められる。</li>
            <li className="pl-1 marker:text-gray-500">Agent HQで複数セッションの進捗を集約して確認しやすい。</li>
            <li className="pl-1 marker:text-gray-500">モデル選択の幅が拡張され、タスク難度ごとに使い分けしやすい。</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            重要なのは機能の多さより運用ルールです。どのタスクをAgentに委任し、どこで人間承認を挟むかを先に決めると、品質事故とコスト超過を防ぎやすくなります。
          </p>
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
              <section key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="related"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/cursor-ai-coding-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/github-copilot-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GitHub Copilotの使い方｜導入・設定・効率化のコツ
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ツール選定の本質は、機能差より業務課題との接続です。AIリブートアカデミーでは、生成AI活用力の習得に加え、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりを一体で設計しています。
          </p>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              AIリブートアカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
