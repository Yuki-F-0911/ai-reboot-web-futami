"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCodingToolComparison2026PageProps = {
  faqItems: readonly FAQItem[];
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "AIコーディングツール 比較 2026",
  "Cursor vs Claude Code vs Copilot",
  "Vibe Coding ツール",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "selection", label: "3強比較の結論" },
  { id: "feature-comparison", label: "機能比較（Agent/Composer/モデル）" },
  { id: "vibe-coding", label: "Vibe Coding対応力" },
  { id: "pricing", label: "料金比較（年間コスト）" },
  { id: "use-cases", label: "用途別おすすめ" },
  { id: "agent-hq", label: "Copilot Agent HQ最新機能" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related", label: "関連記事" },
  { id: "academy-cta", label: "AIリブートアカデミーのご案内" },
] as const;

const featureRows = [
  {
    axis: "Agent / Composer",
    cursor: "Agent機能を中心に継続強化。Background agent・Subagents・Skillsを展開。",
    claudeCode: "CLI Agentとして自律実行に特化。権限ルールと承認フローを細かく設計可能。",
    copilot: "エディタ補完中心からAgent HQへ拡張。coding agentを含む並列タスク実行が可能。",
  },
  {
    axis: "コンテキスト長",
    cursor: "通常200k。Max modeで一部モデルは1Mコンテキスト対応。",
    claudeCode: "モデル選択で`sonnet[1m]`を利用可能（契約条件に依存）。",
    copilot: "固定値公開ではなく、選択モデルと機能（Chat/Agent）依存で運用。",
  },
  {
    axis: "モデル選択",
    cursor: "OpenAI・Anthropic・Google系を横断して使い分け可能。",
    claudeCode: "`/model`でClaudeファミリーを切替（Sonnet/Opus等）。",
    copilot: "GPT系に加えClaude/Gemini/Codex系モデルをタスク別に選択可能。",
  },
  {
    axis: "導入しやすさ",
    cursor: "VS Code利用者は移行しやすい。UIベースで着手しやすい。",
    claudeCode: "CLI運用が前提。開発者には強力だが初学者は慣れが必要。",
    copilot: "GitHubとIDE連携が強く、既存開発チームに導入しやすい。",
  },
] as const;

const vibeRows = [
  {
    tool: "Cursor",
    score: "高い",
    reason: "自然言語で画面修正を反復しやすく、非エンジニアでも初稿を作りやすい。",
    caution: "上位モデル連打でコストが増えやすいため、タスク粒度を絞る必要がある。",
  },
  {
    tool: "Claude Code",
    score: "中",
    reason: "自動化能力は高いが、ターミナル・権限・実行ログの理解が必要。",
    caution: "CLI前提のため、非エンジニアは最初の学習負荷が高くなりやすい。",
  },
  {
    tool: "GitHub Copilot",
    score: "中",
    reason: "補完体験は強いが、既存コードベース前提で価値が最大化しやすい。",
    caution: "初学者はAgent機能とモデル選択の概念を同時に覚える必要がある。",
  },
] as const;

const personalPricingRows = [
  {
    tool: "Cursor",
    free: "Hobby",
    paid: "Pro $20/月 / Pro+ $60/月 / Ultra $200/月",
    annual: "$240 / $720 / $2,400",
  },
  {
    tool: "Claude Code（Claudeプラン経由）",
    free: "Claude Free",
    paid: "Pro $20/月（年払い$17相当） / Max $100・$200/月",
    annual: "$200〜$240 / $1,200〜$2,400",
  },
  {
    tool: "GitHub Copilot",
    free: "Copilot Free",
    paid: "Pro $10/月（年$100） / Pro+ $39/月（年$390）",
    annual: "$100〜$120 / $390〜$468",
  },
] as const;

const teamPricingRows = [
  { tool: "Cursor", plan: "Teams", monthly: "$40 / user", annual: "$480 / user" },
  { tool: "Claude", plan: "Team Standard", monthly: "$25 / user（年契約で$20相当）", annual: "$240〜$300 / user" },
  { tool: "GitHub Copilot", plan: "Business / Enterprise", monthly: "$19 / $39 per user", annual: "$228 / $468 per user" },
] as const;

const useCaseCards = [
  {
    title: "Webアプリ開発",
    recommendation: "Cursor中心 + Copilot補完",
    reason:
      "UI確認しながら複数ファイルを編集する場面が多いため、Cursorの対話編集が効きやすい。既存リポジトリではCopilot補完を併用すると速度が安定する。",
  },
  {
    title: "スクリプト自動化",
    recommendation: "Claude Code中心",
    reason:
      "CLI上で要件定義から実行、修正まで一気に回しやすい。定期バッチ・ログ整形・移行スクリプトなど、ターミナル主体の作業と相性が高い。",
  },
  {
    title: "コードレビュー",
    recommendation: "GitHub Copilot中心",
    reason:
      "GitHub連携とPR文脈で使えるため、レビュー導線に組み込みやすい。Agent HQを活用すると、レビュー前の下処理タスクも委任しやすい。",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
  slug: string;
  bonusId: string;
  bonusTitle?: string;
  bonusDescription?: string;
};

function LineCtaBox({
  className,
  slug,
  bonusId,
  bonusTitle = "AI導入ROI試算シート",
  bonusDescription = "AIツール導入時の費用対効果を見える化できる、LINE登録限定シートを無料配布しています。",
}: LineCtaBoxProps) {
  const lineHref = `${lineUrl}?${new URLSearchParams({
    src: "blog",
    slug,
    bonus: bonusId,
  }).toString()}`;

  return (
    <div className={className}>
      <p className="text-base font-semibold text-gray-900">LINE登録で{bonusTitle}を受け取る</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{bonusDescription}</p>
      <a
        href={lineHref}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで特典を受け取る（無料）
      </a>
    </div>
  );
}

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
                title="AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIコーディングツール比較 2026年版｜Cursor・Claude Code・GitHub Copilotの選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日（確認日ベース）</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            2026年2月時点で、AIコーディングツールの実務選定は「どのモデルが強いか」だけでは決まりません。結論は、Webアプリ実装中心ならCursor、CLI自動化中心ならClaude
            Code、GitHub運用中心ならGitHub Copilotが軸になります。本記事では、Agent/Composer機能、コンテキスト長、モデル選択、Vibe
            Coding対応力、料金、用途別おすすめ、Copilot Agent HQの最新情報まで一気に整理します。
          </p>
        </motion.header>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">2026年版Cursor・Claude Code・GitHub CopilotをAgent機能・コンテキスト・料金で比較</li>
            <li className="pl-1">Vibe Coding対応力と用途別おすすめの判断基準</li>
            <li className="pl-1">非エンジニアが最初に選ぶべきツールと理由</li>
            <li className="pl-1">チーム導入時に先に決めるべき運用ルール5点</li>
          </ul>
        </section>

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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              Cursorは、対話しながら複数ファイルを編集する開発で強く、Vibe Codingの初速を作りやすいです。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              Claude CodeはCLIの自律実行が強く、スクリプト自動化やタスク分解運用で効率が出ます。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              GitHub Copilotは既存GitHubフローとの接続が強く、Copilot Agent HQによりAgent運用が拡張されました。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              料金比較は月額だけでなく、プレミアムリクエストや上位モデル利用の変動費まで確認する必要があります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className=""
            slug="ai-coding-tool-comparison-2026"
            bonusId="bonus03"
            bonusTitle="AI導入ROI試算シート"
          />
        </motion.section>

        <motion.section
          id="selection"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            3強比較の結論: 選定は「作業の主戦場」で決める
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            3ツールの差は、モデル品質よりも「どの環境で何を最短化したいか」に表れます。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            画面を見ながら構成と実装を往復するならCursor、ターミナルで作業を自動化したいならClaude Code、GitHub上のレビューや運用導線を重視するならCopilotが選びやすいです。
            特に乗り換え検討では、すべてを一度に切り替えるより「今のボトルネック1つ」を潰す順で導入したほうが失敗しにくくなります。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            基礎から整理したい場合は
            <Link href="/academy/blog/ai-coding-for-beginners" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディング入門
            </Link>
            と、
            <Link href="/academy/blog/vibe-coding-beginner-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Vibe Coding入門
            </Link>
            を先に確認すると、比較軸がぶれにくくなります。
          </p>
        </motion.section>

        <motion.section
          id="feature-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            機能比較: Agent/Composer・コンテキスト長・モデル選択
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            2026年2月時点では、3ツールとも「チャット補助」から「タスク実行」へ重心が移っています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Cursor</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Claude Code</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">GitHub Copilot</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.cursor}</td>
                    <td className="py-4 px-4">{row.claudeCode}</td>
                    <td className="py-4 pl-4">{row.copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-xs leading-6 text-gray-500">
            出典: Cursor公式Pricing/Changelog、Anthropic Claude Code docs、GitHub Copilot plans/docs（確認日: 2026-02-20）
          </p>
        </motion.section>

        <motion.section
          id="vibe-coding"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Vibe Coding対応力: 非エンジニアでも使えるか
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Vibe Coding文脈では、最初の成果物を出す速度と、継続運用できる設計の両立が評価軸になります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">初速評価</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {vibeRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.score}</td>
                    <td className="py-4 px-4">{row.reason}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            非エンジニアが最初に成果を出すなら、Cursorで小さく画面を作り、必要に応じてClaude
            Codeで自動化を追加し、GitHub運用に入る段階でCopilotを活かす流れが現実的です。単一ツールで完結させるより、工程ごとに役割を分けるほうが再現性は高まります。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">料金比較: Free/有料プランと年間コスト</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            料金は必ず「固定費」と「変動費」を分けて見てください。確認日は2026-02-20です。
          </p>
          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">個人向け比較</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料枠</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主要有料プラン</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">年間目安（税別）</th>
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
          <h3 className="blog-h3 mt-10 text-xl font-semibold text-gray-900">チーム向け比較（1席）</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
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
          <p className="blog-p mt-6 text-xs leading-6 text-gray-500">
            [要確認: Cursor無料枠の細かな利用上限、Copilot Agent HQの追加課金細目] 価格・上限は変更されるため、契約前に公式ページを再確認してください。
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
          <MidArticleCtaBox
            slug="ai-coding-tool-comparison-2026"
            bonusId="bonus03"
            bonusTitle="AI活用ROI試算シート"
            bonusDescription="ツール比較後にそのまま導入判断へ進める、ROI試算テンプレートをLINE登録で受け取れます。"
          />
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
            用途別おすすめ: Webアプリ開発・スクリプト自動化・コードレビュー
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            1ツールですべて解決するより、用途で主役を分けたほうが運用が安定します。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {useCaseCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                <p className="mt-2 text-sm font-medium text-orange-700">{card.recommendation}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.reason}</p>
              </div>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            詳細な実践手順は
            <Link href="/academy/blog/cursor-ai-coding-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Cursor活用ガイド
            </Link>
            、
            <Link href="/academy/blog/claude-code-intro" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code解説
            </Link>
            、
            <Link href="/academy/blog/github-copilot-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GitHub Copilotガイド
            </Link>
            を参照してください。
          </p>
        </motion.section>

        <motion.section
          id="agent-hq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            GitHub Copilot Agent HQ最新機能: Claude+Codex統合の意味
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            GitHub公式は2026年2月10日に、Copilot coding agentとAgent mode（MCP対応）をPublic Previewとして発表しました。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              GitHub上で複数のバックグラウンドタスクを並列実行し、Agent HQで状況管理できる構成に進化しました。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              Claude Opus系とOpenAI Codex系を含む複数モデル選択が可能になり、タスク難度で使い分けやすくなっています。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              coding agentのセッションはプレミアムリクエスト消費対象のため、コスト設計を事前に決めることが重要です。
            </li>
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            ここで重要なのは、機能が増えたこと自体よりも、チーム側の運用基準です。どのタスクをAgentへ委任するか、どのレビュー段階で人が承認するか、どこまでを自動マージ対象にするかを先に決めると、導入後の混乱を抑えられます。
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
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className=""
            slug="ai-coding-tool-comparison-2026"
            bonusId="bonus03"
            bonusTitle="AI導入ROI試算シート"
          />
        </motion.section>

        <motion.section
          id="related"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-coding-for-beginners" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/cursor-ai-coding-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/claude-code-intro" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/github-copilot-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            ツール選定で成果差が出る本質は、機能差より「どの業務課題にどう当てるか」の判断です。AIリブートアカデミーでは、生成AI活用力の習得に加え、
            AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりを一体で設計しています。特定ツールの操作に閉じず、実務アウトプットと次のキャリア判断をつなげたい方に向いた学習設計です。
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
