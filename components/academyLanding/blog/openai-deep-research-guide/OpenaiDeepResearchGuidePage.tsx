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

type OpenaiDeepResearchGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["OpenAI Deep Research 使い方", "ChatGPT ディープリサーチ", "調査AI 2026", "Deep Research MCP"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is", label: "Deep Researchとは何か" },
  { id: "how-to-start", label: "起動手順（Plus/Pro/Business/Enterprise）" },
  { id: "use-cases", label: "実務での使いどころ" },
  { id: "mcp-update", label: "2026-02-10 MCPアップデート" },
  { id: "quality-control", label: "レポート活用と誤情報対策" },
  { id: "comparison", label: "Perplexity・Geminiとの比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を継続するための次の一歩" },
] as const;

const summaryPoints = [
  "Deep Researchは通常の検索補助ではなく、複数ソースを横断して調査レポートを作るエージェント機能です。",
  "2026年2月10日の更新で、接続アプリ・MCPサーバー・対象サイト指定がDeep Researchに統合されました。",
  "市場調査や競合分析で使うときは、最初に調査範囲と出力形式を固定し、最後に引用元を検証する運用が必要です。",
  "1回の調査時間は5〜30分が目安で、実効コストは月額費用を実行回数で割って管理するのが実務的です。",
] as const;

const differenceRows = [
  {
    axis: "処理の前提",
    search: "質問→即時回答が中心",
    deepResearch: "調査計画→情報収集→統合レポート",
  },
  {
    axis: "所要時間",
    search: "秒〜数十秒",
    deepResearch: "数分〜数十分（目安5〜30分）",
  },
  {
    axis: "根拠の見せ方",
    search: "回答中心で根拠が薄くなりやすい",
    deepResearch: "引用付きレポートで検証しやすい",
  },
  {
    axis: "向いている用途",
    search: "単発の確認、簡易調査",
    deepResearch: "市場調査、競合分析、論点整理、意思決定支援",
  },
] as const;

const planRows = [
  {
    plan: "Plus",
    availability: "Deep Research利用可",
    mcp: "カスタムMCP対応（設定依存）",
    note: "個人利用で調査品質を上げたい場合に有効",
  },
  {
    plan: "Pro",
    availability: "Deep Research利用可",
    mcp: "カスタムMCP対応（設定依存）",
    note: "実行回数が多い個人・プロ利用向け",
  },
  {
    plan: "Business（旧Team）",
    availability: "Deep Research利用可",
    mcp: "カスタムMCP対応",
    note: "社内ナレッジ接続とチーム運用を想定",
  },
  {
    plan: "Enterprise",
    availability: "Deep Research利用可",
    mcp: "カスタムMCP対応",
    note: "監査・統制を含む全社運用向け",
  },
] as const;

const launchSteps = [
  {
    title: "Step 1. チャット画面でDeep Researchを選択する",
    body: "ChatGPTの入力欄でDeep Researchを有効化し、通常モードと混在しないように開始時点でモードを固定します。",
  },
  {
    title: "Step 2. 調査目的と評価基準を先に指定する",
    body: "目的、対象期間、比較軸、除外条件を最初に書くことで、途中で調査が拡散するリスクを減らせます。",
  },
  {
    title: "Step 3. 必要なら接続データを明示する",
    body: "Google DriveやGitHubなど既存コネクタ、またはMCP接続を使う場合は、どのデータを参照するかを明示します。",
  },
  {
    title: "Step 4. 完了後に引用元と数値を検証する",
    body: "レポート本文だけで採用せず、引用元URL、数値の算出元、更新日を確認してから意思決定に使います。",
  },
] as const;

const useCaseRows = [
  {
    useCase: "市場調査",
    prompt:
      "国内SaaS型ナレッジ管理市場を2024-2026で調査。市場規模、成長率、主要プレイヤー、根拠URLを表形式で整理。",
    output: "市場規模の推移、成長ドライバー、上位企業比較表",
    check: "調査対象地域と年度が混在していないかを確認",
  },
  {
    useCase: "競合分析",
    prompt:
      "競合3社の料金改定、主機能、導入事例、採用メッセージを比較。自社に影響する差分を優先順位付きで出力。",
    output: "競合差分サマリー、影響度ランキング、打ち手候補",
    check: "料金・機能の更新日を必ず再確認",
  },
  {
    useCase: "論文要約",
    prompt:
      "指定分野の主要論文5本を選び、研究目的・手法・限界・実務応用を比較。分野外読者向けに平易に説明。",
    output: "論文比較マトリクス、共通傾向、実務示唆",
    check: "二次解説ではなく原文リンクを優先して確認",
  },
  {
    useCase: "投資リサーチ",
    prompt:
      "対象企業の決算説明、業界ニュース、競合動向を統合し、想定シナリオを3つ提示。前提条件の違いを明記。",
    output: "シナリオ別論点、前提条件、モニタリング指標",
    check: "投資助言に該当する断定表現を排除",
  },
] as const;

const mcpRows = [
  {
    update: "接続アプリ参照",
    before: "手動で資料URLを渡す運用が中心",
    after: "接続済みアプリの情報をDeep Researchに直接渡せる",
  },
  {
    update: "MCP連携",
    before: "標準コネクタ中心",
    after: "任意のMCPサーバー経由で独自データも調査対象にできる",
  },
  {
    update: "対象サイト指定",
    before: "調査範囲を文章で指定するのみ",
    after: "レポート作成時に参照サイトを絞り込める",
  },
] as const;

const qualityChecklist = [
  "レポートの主張ごとに、引用元URLと日付をセットで確認する",
  "数値・割合・ランキングは再計算または一次資料で再確認する",
  "反証クエリを1回追加し、都合のよい結論だけを採用しない",
  "社内共有時は「確認日」と「未検証項目」を明記する",
] as const;

const comparisonRows = [
  {
    axis: "調査速度",
    openai: "5〜30分目安で深めのレポート",
    perplexity: "2〜4分目安で高速",
    gemini: "通常5〜10分",
  },
  {
    axis: "根拠表示",
    openai: "引用付きレポートで長文整理しやすい",
    perplexity: "出典提示が速く、短時間比較に強い",
    gemini: "Google系情報との連携前提で使いやすい",
  },
  {
    axis: "社内データ接続",
    openai: "コネクタ + MCP（Plus/Pro/Business/Enterprise/Edu）",
    perplexity: "Spaces連携中心",
    gemini: "Google Workspace連携が強み",
  },
  {
    axis: "適した用途",
    openai: "意思決定向けの調査報告",
    perplexity: "高速な比較検討と速報確認",
    gemini: "Google業務基盤での調査補助",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "実務で再現できるAI活用の判断基準を身につけ、業務成果へ接続する力を高めます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを使いながら自分の強みと価値観を整理し、次のキャリア選択を具体化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話と実践共有を通じ、学習を継続可能な習慣へ変えます。",
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
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）
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

export default function OpenaiDeepResearchGuidePage({ faqItems }: OpenaiDeepResearchGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OpenAI Deep Research使い方ガイド" },
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
                title="OpenAI Deep Research使い方ガイド｜市場調査・競合分析の実務手順【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            OpenAI Deep Research使い方ガイド｜市場調査・競合分析の実務手順【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAI Deep Researchは、短時間で答えを返す通常チャットとは役割が異なります。調査計画を立て、複数ソースを横断し、引用付きレポートまで作るため、
            市場調査や競合分析のような「判断根拠が必要な仕事」に向いています。確認日: 2026-02-20。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、起動手順、実務ユースケース、2026年2月10日のMCPアップデート、誤情報対策、Perplexity・Geminiとの比較までを実務目線で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="what-is"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            OpenAI Deep Researchとは何か。通常の検索と違い「レポート化」までを1つの処理で実行する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            通常の検索は、候補情報を素早く探す用途で有効です。一方Deep Researchは、複数の情報源を時間をかけて比較し、主張ごとに根拠を残しながら調査結果をまとめます。
            そのため、結論だけでなく意思決定の前提をチーム共有しやすい点が実務上の強みです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">通常検索</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Deep Research</th>
                </tr>
              </thead>
              <tbody>
                {differenceRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-3">{row.search}</td>
                    <td className="py-3 pl-4">{row.deepResearch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            調査エージェントの全体像を整理したい場合は、
            <Link href="/academy/blog/what-is-ai-agent" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント解説
            </Link>
            も併読すると理解しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="how-to-start"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPTでの起動手順。Plus/Pro/Business（旧Team）/Enterpriseで同じ流れで開始できる
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年2月時点で、Deep Researchは有料プランで利用できます。MCPによるカスタム接続はPlus/Pro/Business（旧Team）/Enterprise/Eduで案内されています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Deep Research</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">MCP接続</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務上の目安</th>
                </tr>
              </thead>
              <tbody>
                {planRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-3">{row.availability}</td>
                    <td className="px-4 py-3">{row.mcp}</td>
                    <td className="py-3 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4">
            {launchSteps.map((step) => (
              <section key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            プランの使い分けを先に整理したい場合は、
            <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプラン比較記事
            </Link>
            が参考になります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

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
            実務での使いどころ。市場調査・競合分析・論文要約・投資リサーチの4領域で再現しやすい
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            調査AIは、入力の粒度で成果が大きく変わります。まず「何を比較し、何を除外し、どの形式で提出するか」を固定してから実行すると、同じ品質を再現しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">入力テンプレ例</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">期待出力</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">最終チェック</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.useCase} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.useCase}</th>
                    <td className="px-4 py-3">{row.prompt}</td>
                    <td className="px-4 py-3">{row.output}</td>
                    <td className="py-3 pl-4">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="mcp-update"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年2月10日のMCP接続アップデート。Deep Researchのデータ接続範囲が大きく拡張された
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026-02-10の更新で、Deep Researchは接続データの扱いが変わりました。接続済みアプリの参照に加え、MCP経由の独自データ接続、対象サイトの絞り込みが可能になり、
            調査の根拠管理と再現性を確保しやすくなっています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">更新項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">更新前</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">更新後</th>
                </tr>
              </thead>
              <tbody>
                {mcpRows.map((row) => (
                  <tr key={row.update} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.update}</th>
                    <td className="px-4 py-3">{row.before}</td>
                    <td className="py-3 pl-4">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            MCPの基本とガバナンスを確認したい場合は、
            <Link href="/academy/blog/what-is-mcp" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              MCP解説記事
            </Link>
            を先に読むと、接続設計の前提を揃えられます。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="quality-control"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            出力レポートを業務で使うには、ハルシネーション対策をレビュー手順として固定する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            調査AIの価値は、生成速度だけでは決まりません。最終的な意思決定に使うには、誤情報対策を個人の感覚ではなく、チーム共通の手順として固定する必要があります。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {qualityChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            社内ルールの整備が未着手なら、
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIガイドラインテンプレート
            </Link>
            とセットで運用設計すると、導入後のトラブルを抑えやすくなります。
          </p>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            なお、1回の調査時間は5〜30分程度が公式目安です。コストは固定従量課金ではなく、月額プラン費用を実行回数で割った実効単価で管理する方法が現実的です。
          </p>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Perplexity・Gemini Deep Researchとの比較。速度だけでなく接続要件で選定する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            調査AIを選ぶとき、速度だけで決めると運用段階で差が出ます。社内データ接続、監査要件、既存業務基盤との整合まで含めて比較してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">OpenAI Deep Research</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Perplexity</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Gemini Deep Research</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-3">{row.openai}</td>
                    <td className="px-4 py-3">{row.perplexity}</td>
                    <td className="py-3 pl-4">{row.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ツール比較の見方を広げたい場合は、
            <Link href="/academy/blog/perplexity-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Perplexity活用ガイド
            </Link>
            と
            <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              主要LLM比較記事
            </Link>
            もあわせて確認すると判断しやすくなります。
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-orange-900">AI活用の判断軸とキャリア設計を、実務と同時に磨く</h2>
          <p className="mt-4 text-sm leading-7 text-orange-900/90">
            AIリブートアカデミーでは、特定ツールの操作習得ではなく、生成AIを仕事で活かすための判断軸、自己理解にもとづくキャリア設計、
            そして仲間と学び続ける環境づくりを一体で設計しています。
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
