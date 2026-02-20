"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type GithubCopilotAgentHqGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=github-copilot-agent-hq-guide&bonus=bonus03";

const keywordTags = [
  "GitHub Copilot Agent HQ 使い方",
  "Copilot Agent",
  "Claude Copilot連携",
  "AIコーディング2026",
] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "what-is-agent-hq", label: "Agent HQとは何か" },
  { id: "how-to-launch", label: "GitHub.comでの起動方法" },
  { id: "issue-to-pr", label: "Issue→PR自動化ワークフロー" },
  { id: "workspace-vs-hq", label: "Copilot Workspaceとの使い分け" },
  { id: "security-settings", label: "セキュリティ設定の実務ポイント" },
  { id: "hq-vs-claude-code", label: "Agent HQ vs Claude Code比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "2026年2月時点でのAgent HQは、Issue起点で実装とPR作成までをつなぐ「GitHub上の実行レイヤー」です。",
  "Claude + Codex統合の流れで、モデル性能の比較より「どの工程を任せるか」を先に決める運用が重要になっています。",
  "Copilot Workspaceは計画整理、Agent HQは実装実行で使い分けると手戻りを減らせます。",
  "本番運用では、許可リポジトリ限定・PRレビュー必須・ブランチ保護をセットで設定してください。",
] as const;

const launchSteps = [
  {
    step: "Step 1. 対象Issueを明確化する",
    body: "要件・受け入れ条件・除外条件をIssueに書き切ります。ここが曖昧だとAgent出力のズレが増えます。",
  },
  {
    step: "Step 2. GitHub.com上でAgent実行を開始する",
    body: "IssueまたはPR画面からCopilotの実行導線を開き、対象ブランチと作業範囲を選択して開始します。",
  },
  {
    step: "Step 3. 変更差分とテスト結果を確認する",
    body: "差分確認では仕様逸脱とセキュリティ影響を先にチェックします。レビュー時にテスト観点を明示すると再修正が減ります。",
  },
  {
    step: "Step 4. PRテンプレに沿って最終承認する",
    body: "PR説明・検証結果・ロールバック案を残して承認します。Agent実装でも責任境界は人側に残る前提です。",
  },
] as const;

const workflowRows = [
  {
    phase: "Issue準備",
    owner: "Tech Lead / 担当者",
    output: "目的、非機能要件、受け入れ条件",
    checkpoint: "再現条件とDone定義が書かれているか",
  },
  {
    phase: "Agent実行",
    owner: "Copilot Agent HQ",
    output: "実装差分、コミット、PR草案",
    checkpoint: "対象ファイル範囲が意図と一致しているか",
  },
  {
    phase: "レビュー",
    owner: "レビュー担当",
    output: "修正指示、承認/差し戻し",
    checkpoint: "仕様・セキュリティ・テストの3点を満たすか",
  },
  {
    phase: "マージ後検証",
    owner: "運用担当",
    output: "本番反映確認、監視結果",
    checkpoint: "障害時のロールバック手順が動くか",
  },
] as const;

const workspaceDiffRows = [
  {
    axis: "主目的",
    workspace: "方針整理と実装計画の可視化",
    agentHq: "Issueを起点に実装・PR作成まで進める",
  },
  {
    axis: "使うタイミング",
    workspace: "実装前に合意形成したい段階",
    agentHq: "合意済みIssueを実装に落とす段階",
  },
  {
    axis: "向いているチーム",
    workspace: "要件調整が多いプロジェクト",
    agentHq: "GitHub運用が定着しているチーム",
  },
  {
    axis: "失敗しやすい点",
    workspace: "計画だけ作って実装に接続しない",
    agentHq: "実行範囲を広げすぎて差分が肥大化する",
  },
] as const;

const securityChecklist = [
  "許可リポジトリを限定し、初期は高リスク領域を除外する",
  "ブランチ保護ルールで直接push禁止・レビュー必須を固定する",
  "シークレットをIssue本文に貼らない。環境変数管理を徹底する",
  "依存パッケージ更新を自動実行させる場合は脆弱性確認を追加する",
  "監査ログの保存期間と責任者を先に決める",
] as const;

const comparisonRows = [
  {
    axis: "得意領域",
    agentHq: "GitHub上のIssue→PR自動化",
    claudeCode: "ローカル/CLIでの実装・検証・反復",
  },
  {
    axis: "入口",
    agentHq: "GitHub.com",
    claudeCode: "ターミナル",
  },
  {
    axis: "チーム運用",
    agentHq: "Issue/PR中心のチームと相性が高い",
    claudeCode: "個人開発や細かい反復改善に強い",
  },
  {
    axis: "ガバナンス",
    agentHq: "GitHub権限で制御しやすい",
    claudeCode: "ローカル実行権限管理を明示する必要がある",
  },
] as const;

export default function GithubCopilotAgentHqGuidePage({ faqItems }: GithubCopilotAgentHqGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GitHub Copilot Agent HQ使い方ガイド" },
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
                title="GitHub Copilot Agent HQ使い方ガイド｜Issue→PR自動化とClaude Code使い分け【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GitHub Copilot Agent HQ使い方ガイド｜Issue→PR自動化とClaude Code使い分け【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            GitHub Copilot Agent HQは、エディタ補完の延長ではなく、Issue駆動の開発フロー全体を前提にした運用レイヤーです。2026年2月のClaude + Codex統合の流れで、
            モデル比較より「どの工程を任せるか」を設計できるチームが成果を出しています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、GitHub.comでの起動手順、Issue→PR自動化の実務フロー、Copilot WorkspaceやClaude Codeとの使い分け、セキュリティ設定まで判断軸を整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="what-is-agent-hq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Agent HQとは何か。2026年は「補完ツール」ではなく「Issue駆動実行基盤」として扱う
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Agent HQの価値は、コード生成そのものより、GitHubのIssue・PR・レビュー運用を一つの流れで扱える点にあります。複数人の開発で重要なのは、実装速度より追跡可能性です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            そのため、導入時は「どのIssueを任せるか」「どの条件で人が最終判断するか」を先に固定してください。ここを決めずに実行回数だけ増やすと、差分は増えても品質は安定しません。
          </p>
        </motion.section>

        <motion.section
          id="how-to-launch"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">GitHub.comでの起動方法（実務向け4ステップ）</h2>
          <div className="mt-6 space-y-4">
            {launchSteps.map((item) => (
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            title="LINE登録で「AI導入ROI試算シート」を受け取る"
            description="Agent導入前に、工数削減とレビュー負荷を同時に見積もるROI試算シート（特典03）を無料配布しています。"
            href={lineUrl}
          />
        </motion.section>

        <motion.section
          id="issue-to-pr"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Issue→PR自動化ワークフローの実際</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「Issueを渡せば全部完了する」前提で運用すると事故が起きます。実務では、工程ごとに責任者と確認ポイントを固定したほうが安定します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">工程</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">担当</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な成果物</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                {workflowRows.map((row) => (
                  <tr key={row.phase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.phase}</th>
                    <td className="px-4 py-4">{row.owner}</td>
                    <td className="px-4 py-4">{row.output}</td>
                    <td className="py-4 pl-4">{row.checkpoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="workspace-vs-hq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Copilot Workspaceとの使い分け</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Copilot Workspace</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Copilot Agent HQ</th>
                </tr>
              </thead>
              <tbody>
                {workspaceDiffRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.workspace}</td>
                    <td className="py-4 pl-4">{row.agentHq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="security-settings"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">セキュリティ設定（許可リポジトリ限定）の実務ポイント</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {securityChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="hq-vs-claude-code"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">GitHub Copilot Agent HQ vs Claude Code 比較</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Copilot Agent HQ</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Code</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.agentHq}</td>
                    <td className="py-4 pl-4">{row.claudeCode}</td>
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
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
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
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説【2026年版】
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-coding-tool-comparison-2026"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/workflow-automation-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Agent HQは「Issue駆動でPRまで進める運用層」として使うと価値が出ます。</li>
            <li className="pl-1 marker:text-gray-500">Workspaceは計画、Agent HQは実行で分けると開発フローが安定します。</li>
            <li className="pl-1 marker:text-gray-500">導入効果を高める鍵は、モデル比較より権限設計とレビュー責任の明確化です。</li>
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-emerald-200 bg-emerald-50 p-6"
            title="LINE登録で「AI導入ROI試算シート」を受け取る"
            description="チーム導入前に、工数・コスト・レビュー負荷を見える化できる特典03を配布しています。"
            buttonLabel="LINEで特典を受け取る（無料）"
            href={lineUrl}
          />
        </motion.section>
      </article>
    </main>
  );
}
