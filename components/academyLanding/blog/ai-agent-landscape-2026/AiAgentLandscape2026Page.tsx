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

type AiAgentLandscape2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const infoCheckedDate = "2026-02-20";
const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "AIエージェント 比較 2026",
  "ChatGPT Operator",
  "Google Mariner",
  "Manus AI",
  "Claude エージェント",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "landscape", label: "AIエージェント勢力図（3カテゴリ）" },
  { id: "comparison-table", label: "主要エージェント比較表" },
  { id: "use-cases", label: "用途別おすすめ" },
  { id: "risk-security", label: "導入リスクとセキュリティ設計" },
  { id: "outlook", label: "2026年後半の展望" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const summaryPoints = [
  "2026年2月時点の比較軸は、モデル性能より「どこまで実行を任せるか」と「監査しやすさ」です。",
  "Big Tech系は提供範囲と統合力が強く、独立系は実行速度と新機能投入の速さが強みです。",
  "開発者向けエージェントは、IDE内補助からissue単位の実行委譲へ進化し、レビュー設計が重要になりました。",
  "比較表は「対応タスク・料金・日本語対応・自律度」で揃えると、導入判断の抜け漏れを減らせます。",
  "価格と提供地域は更新頻度が高いため、運用前に必ず公式ページの最新情報を再確認してください。",
] as const;

const categoryCards = [
  {
    title: "1. Big Tech系",
    tools: "OpenAI（Operator/Atlas/ChatGPT agent）、Google（Mariner/Deep Research）、Anthropic（Computer Use）",
    feature: "既存プロダクトとの統合、管理機能、継続的な機能アップデートが強み。",
  },
  {
    title: "2. 独立系",
    tools: "Manus AI、Genspark、（比較軸上の独立枠として）Atlas",
    feature: "タスク完了速度とUIの軽さが強み。クレジット課金や契約条件の確認が導入前提。",
  },
  {
    title: "3. 開発者向け",
    tools: "Claude Code、GitHub Copilot Agent、Cursor Agent",
    feature: "コード生成だけでなく、issue分解・修正提案・PR化まで含む実装フローに最適化。",
  },
] as const;

const comparisonRows = [
  {
    agent: "OpenAI ChatGPT agent",
    category: "Big Tech",
    task: "Web操作を含む複数ステップ実行、調査、下書き作成",
    pricing: "ChatGPTプラン内で段階提供（要最新確認）",
    japanese: "日本語運用可。supported countries基準で提供",
    autonomy: "中〜高",
  },
  {
    agent: "OpenAI Atlas",
    category: "Big Tech / ブラウザ統合軸",
    task: "閲覧中ページの要約、質問、フォーム入力補助",
    pricing: "Free/有料プラン別に機能差（更新頻度高）",
    japanese: "日本語入力可。段階展開のため機能差あり",
    autonomy: "中",
  },
  {
    agent: "Google Deep Research",
    category: "Big Tech",
    task: "深掘りリサーチ、ソース付きレポート生成",
    pricing: "Gemini上位プラン中心",
    japanese: "多言語展開済み（45+言語案内）",
    autonomy: "中",
  },
  {
    agent: "Google Project Mariner",
    category: "Big Tech",
    task: "ブラウザ操作の自律実行",
    pricing: "AI Ultra枠の限定提供（米国先行）",
    japanese: "[要確認] 日本での一般提供時期",
    autonomy: "高",
  },
  {
    agent: "Anthropic Computer Use",
    category: "Big Tech",
    task: "API経由の画面操作自動化、業務システム連携",
    pricing: "API従量課金 + 実装コスト",
    japanese: "Claude提供国にJapan記載。実装運用で品質差あり",
    autonomy: "高",
  },
  {
    agent: "Manus AI",
    category: "独立系",
    task: "リサーチ収集、文書下書き、作業フロー実行",
    pricing: "Free + クレジット型有料プラン",
    japanese: "日本語UI切替案内あり。契約条件は都度確認",
    autonomy: "高",
  },
  {
    agent: "Genspark Super Agent",
    category: "独立系",
    task: "検索、比較、要約、ブラウザ上での作業補助",
    pricing: "Free / Plus / Team（クレジット制）",
    japanese: "日本語利用可能。法人契約条件は要個別確認",
    autonomy: "中〜高",
  },
  {
    agent: "Claude Code",
    category: "開発者向け",
    task: "CLIで実装、修正、テスト補助、コード理解",
    pricing: "Claude有料プラン体系に連動",
    japanese: "日本語指示可。英語ドキュメント中心",
    autonomy: "中〜高",
  },
  {
    agent: "GitHub Copilot Agent",
    category: "開発者向け",
    task: "issue起点での実装提案、PR作成、修正反復",
    pricing: "Free/Pro/Business/Enterprise + premium request",
    japanese: "日本語コメント運用可",
    autonomy: "中",
  },
  {
    agent: "Cursor Agent",
    category: "開発者向け",
    task: "IDE内実装、複数ファイル修正、Background Agent",
    pricing: "Pro/Business + usageベース",
    japanese: "日本語指示可。運用ガイドは英語中心",
    autonomy: "中〜高",
  },
] as const;

const useCaseCards = [
  {
    title: "ブラウザ自動化",
    recommendation: "Atlas / Mariner / Computer Use",
    reason:
      "画面遷移を伴う業務は、ブラウザ統合型や画面操作API型が適します。承認ポイントを残す運用設計を先に決めると事故を抑えられます。",
  },
  {
    title: "リサーチ",
    recommendation: "Deep Research / Manus / Genspark",
    reason:
      "情報収集と要約の初稿を高速化しやすい領域です。原典確認のフローを必ず残し、意思決定資料は人間レビューで確定します。",
  },
  {
    title: "コーディング",
    recommendation: "Claude Code / Copilot Agent / Cursor Agent",
    reason:
      "開発フローとの親和性が最優先です。GitHub中心ならCopilot、ローカル反復ならCursor、CLI主導ならClaude Codeを先に検証します。",
  },
  {
    title: "業務フロー",
    recommendation: "ChatGPT agent / Manus / Computer Use",
    reason:
      "複数工程をまたぐ業務は、タスク分解と再実行のしやすさで選びます。停止条件とエスカレーション設計を定義してから本番化します。",
  },
] as const;

const riskItems = [
  "権限過多: 高権限アカウント連携により誤操作時の影響が拡大する。",
  "コスト暴騰: クレジット制やpremium request制で予算超過が起きやすい。",
  "根拠不整合: リサーチ結果の引用元が不十分なまま意思決定に使われる。",
  "監査不能: 誰が何を実行したか追跡できず、内部統制に抵触する。",
  "責任境界不明: 自動実行と人の承認境界が曖昧なまま運用される。",
] as const;

const securityControlRows = [
  {
    control: "権限設計",
    minimum: "最小権限・環境分離・共有アカウント禁止",
    owner: "情シス / 管理者",
  },
  {
    control: "承認フロー",
    minimum: "外部送信・決裁・顧客提出は人の最終承認を必須化",
    owner: "各部門責任者",
  },
  {
    control: "監査ログ",
    minimum: "操作ログ保存、変更履歴、差し戻し手順を事前定義",
    owner: "情報セキュリティ担当",
  },
  {
    control: "データ制限",
    minimum: "機密情報・個人情報の入力基準を明文化",
    owner: "法務 / 情シス",
  },
  {
    control: "コスト管理",
    minimum: "月次予算上限、利用量アラート、停止手順",
    owner: "事業責任者 / 経理",
  },
] as const;

const outlookPoints = [
  "比較対象は「モデル名」から「運用設計テンプレート」へ移行する。",
  "エージェント単体の精度より、承認・監査・再実行を含む再現性が評価軸になる。",
  "開発者向けはIDE補助を超え、issue単位の実行委譲が標準化する。",
  "ブラウザ自動化はUI変化耐性と停止制御を備えた運用が前提になる。",
  "経営判断では、削減工数だけでなく統制コストを含むROI算定が必須になる。",
] as const;

const first90Days = [
  "0〜30日: 用途を1つに絞って小規模検証（成功指標と停止条件を定義）",
  "31〜60日: 承認フローとログ監査を実装し、2部署へ横展開",
  "61〜90日: 予算上限と品質指標を固定し、運用ルールを標準化",
] as const;

const academyPillars = [
  "生成AI活用力: 実務で使える判断軸を体系化する",
  "自己理解・キャリアデザイン: AIを鏡に強みと価値観を言語化する",
  "仲間と共に学ぶ環境: 対話と協働で学習継続率を高める",
] as const;

function LineCtaBox({ tone }: { tone: "gray" | "green" | "orange" }) {
  const className =
    tone === "green"
      ? "blog-cta-box mt-10 rounded-lg border border-green-200 bg-green-50 p-6"
      : tone === "orange"
        ? "blog-cta-box mt-10 rounded-lg border border-orange-200 bg-orange-50 p-6"
        : "blog-cta-box mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6";

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-gray-900">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">
        価格変更や提供状況の更新を、導入判断で使える要点に絞って配信しています。導入検討の情報更新を追いかけたい方向けの無料チャンネルです。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function AiAgentLandscape2026Page({ faqItems }: AiAgentLandscape2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIエージェント比較2026" },
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
                title="AIエージェント比較2026｜主要プレイヤーの勢力図・料金・日本対応を整理"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIエージェント比較2026｜主要プレイヤーの勢力図・料金・日本対応を整理
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            2025年は「エージェント元年」と呼ばれましたが、2026年2月時点では「実務で運用できるか」を問う段階に入りました。いま必要なのは、
            機能の多さより、対象業務に対してどこまで実行を任せるか、そして監査できる設計があるかの見極めです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、Big Tech系・独立系・開発者向けの3カテゴリで主要エージェントを整理し、対応タスク・料金・日本語対応・自律度を同一軸で比較します。価格と提供範囲は
            変動するため、確認日（{infoCheckedDate}）を前提に読んでください。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">情報確認日: {infoCheckedDate}</p>
        </motion.section>

        <LineCtaBox tone="gray" />

        <motion.section
          id="landscape"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年2月のAIエージェント勢力図は「統合力」「実行力」「開発フロー適合」で3分される
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            主要プレイヤーを並べると、導入判断で見るべき違いが明確になります。Big Techは基盤統合、独立系は実行速度、開発者向けは実装現場への接続が主戦場です。
          </p>
          <div className="mt-7 grid gap-4">
            {categoryCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">主要サービス:</span> {card.tools}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{card.feature}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            個別サービスの詳細は、
            <Link href="/academy/blog/openai-atlas-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              OpenAI Atlasガイド
            </Link>
            や
            <Link href="/academy/blog/manus-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Manus AIガイド
            </Link>
            で確認できます。
          </p>
        </motion.section>

        <motion.section
          id="comparison-table"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要エージェント比較表は「対応タスク・料金・日本語対応・自律度」を横並びで見ると判断しやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            下表は導入判断に必要な最小情報を1枚にまとめたものです。価格や提供条件は更新されるため、契約前に必ず公式ページで再確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[1080px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">エージェント</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">カテゴリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">対応タスク</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金（代表値）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語/日本提供</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">自律度</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.agent} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.agent}</th>
                    <td className="px-4 py-4">{row.category}</td>
                    <td className="px-4 py-4">{row.task}</td>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="px-4 py-4">{row.japanese}</td>
                    <td className="py-4 pl-4">{row.autonomy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            注記: Marinerの日本提供時期、Genspark法人契約条件などは公開情報の粒度差があるため、本文中では[要確認]を残しています。
          </p>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別おすすめは「自動化対象の境界」を先に決めると選定を誤りにくい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            同じエージェントでも、目的が異なると評価が逆転します。最初に「何を自動化し、何を人が確認するか」を固定して比較してください。
          </p>
          <div className="mt-7 grid gap-4">
            {useCaseCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">おすすめ:</span> {card.recommendation}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{card.reason}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            開発用途は
            <Link href="/academy/blog/claude-code-intro" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code入門
            </Link>
            、
            <Link href="/academy/blog/github-copilot-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GitHub Copilotガイド
            </Link>
            、
            <Link href="/academy/blog/cursor-ai-coding-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Cursor活用ガイド
            </Link>
            の3本を並べて比較すると実装イメージを作りやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="risk-security"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入時のリスクは「権限」「監査」「コスト」を同時設計しないと顕在化しやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            エージェントは便利さだけで導入すると、運用で破綻します。最低限の統制設計を先に決めることで、速度と安全性を両立できます。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {riskItems.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">導入前に定義すべき最低コントロール</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">管理項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">最低基準</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">責任者</th>
                </tr>
              </thead>
              <tbody>
                {securityControlRows.map((row) => (
                  <tr key={row.control} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.control}</th>
                    <td className="px-4 py-4">{row.minimum}</td>
                    <td className="py-4 pl-4">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            具体的な運用チェックは
            <Link href="/academy/blog/ai-agent-operations-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント運用ガイド
            </Link>
            と
            <Link href="/academy/blog/ai-agent-deployment-checklist" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              導入チェックリスト
            </Link>
            で補完できます。
          </p>
        </motion.section>

        <motion.section
          id="outlook"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年後半は「単体比較」より「運用設計の再現性」が導入成否を決める
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {outlookPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">導入判断を進める90日ロードマップ</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {first90Days.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AI活用の判断軸とキャリアを同時に設計するには</p>
            <p className="mt-3 text-sm leading-7 text-blue-800">
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境を一体で設計しています。特定ツール名ではなく、業務課題に対する判断軸を育てたい方に向いた学習設計です。
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-blue-800">
              {academyPillars.map((pillar) => (
                <li key={pillar} className="pl-1 marker:text-blue-600">
                  {pillar}
                </li>
              ))}
            </ul>
            <Link
              href="/academy"
              className="mt-5 inline-flex items-center justify-center rounded-lg border border-blue-700 px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
            >
              AIリブートアカデミーの詳細を見る
            </Link>
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
          <div className="mt-6">
            <LineCtaBox tone="green" />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/openai-atlas-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Atlasとは？AIブラウザの使い方と活用シーン完全解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/manus-ai-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Manus AIとは？使い方と活用シーン解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-operations-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェント運用ガイド｜導入前に決めるべき承認・権限・監査
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
