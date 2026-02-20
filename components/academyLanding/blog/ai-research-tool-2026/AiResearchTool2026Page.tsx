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

type AiResearchTool2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "AI情報収集 ツール 比較 2026",
  "Perplexity vs Deep Research",
  "Genspark AI",
  "リサーチ AI おすすめ",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "landscape", label: "2026年の全体像（3類型）" },
  { id: "tool-comparison", label: "主要3ツール詳細比較" },
  { id: "use-case-chart", label: "用途別選択チャート" },
  { id: "pricing", label: "料金比較と無料枠" },
  { id: "cautions", label: "注意点（精度・鮮度・引用）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の学習アクション" },
] as const;

const summaryPoints = [
  "2026年のAI情報収集ツールは、リアルタイム検索型、深掘り型、専門特化型に分けると選びやすくなります。",
  "Perplexityは高速検索と引用確認、ChatGPT Deep Researchは時間をかけた調査レポート、GensparkはSparkpagesを使った特化タスクで強みが出ます。",
  "用途が「速報」「深掘り」「競合調査」「学術」「旅行計画」のどれかを最初に決めると、選定ミスと再調査コストを減らせます。",
  "料金比較では月額だけでなく、実行上限・連携機能・引用検証の工数を含めて実効単価で判断する必要があります。",
  "どのツールでも、ハルシネーション対策として確認日・引用元URL・更新日・反証クエリの固定運用が必須です。",
] as const;

const landscapeRows = [
  {
    type: "リアルタイム検索型",
    core: "短時間で情報を探索し、引用を確認しながら更新差分を追う",
    tools: "Perplexity",
    bestFor: "速報、トレンド確認、軽い比較検討",
  },
  {
    type: "深掘り型",
    core: "調査計画から統合レポート作成までを連続処理する",
    tools: "ChatGPT Deep Research",
    bestFor: "競合調査、意思決定資料、長文調査",
  },
  {
    type: "専門特化型",
    core: "特定領域向け機能と情報統合UIで初動を速める",
    tools: "Genspark",
    bestFor: "領域特化調査、Sparkpages、旅行計画",
  },
] as const;

const toolCards = [
  {
    name: "Perplexity",
    title: "リアルタイム検索と引用付き回答で、短いサイクルの確認を回しやすい",
    strengths: [
      "検索と要約の往復が速く、速報確認の実務サイクルに合わせやすい",
      "引用元にすぐ遷移できるため、誤情報の一次確認を短時間で実施しやすい",
      "2026年2月はResearch機能の統合とDeep Researchモデル更新が継続",
    ],
    watch: "短時間運用では便利だが、長文の調査報告は別ツールでの再編集が必要になることがある",
    link: "/academy/blog/perplexity-ai-guide",
    linkLabel: "Perplexityの実務運用を詳しく見る",
  },
  {
    name: "ChatGPT Deep Research",
    title: "時間をかけた深掘り調査とMCP接続で、調査報告の再現性を作りやすい",
    strengths: [
      "調査計画→情報収集→レポート統合まで一連で処理しやすい",
      "2026-02-10更新でMCP接続、連携アプリ参照、対象サイト指定が強化",
      "根拠を付けた長文出力を業務レポートに転用しやすい",
    ],
    watch: "処理時間が長めになるため、速報用途だけで使うと運用コストが上がりやすい",
    link: "/academy/blog/openai-deep-research-guide",
    linkLabel: "Deep Researchの起動手順を詳しく見る",
  },
  {
    name: "Genspark",
    title: "Sparkpagesを軸に、領域特化の情報統合を素早く作る用途で使いやすい",
    strengths: [
      "Sparkpagesで調査結果を一枚に整理しやすい",
      "旅行計画など領域特化タスクで実行テンポを作りやすい",
      "チームプランは公式価格が公開され、導入判断を進めやすい",
    ],
    watch: "個人向け有料価格は取得しにくい場面があるため、契約前にUI表示の再確認が必要",
    link: "/academy/blog/genspark-guide",
    linkLabel: "Gensparkの基本と注意点を詳しく見る",
  },
] as const;

const detailRows = [
  {
    axis: "主な役割",
    perplexity: "リアルタイム検索と引用確認",
    openai: "深掘り調査レポート作成",
    genspark: "領域特化型の統合整理",
  },
  {
    axis: "処理時間の傾向",
    perplexity: "短い（速報向き）",
    openai: "中〜長い（深掘り向き）",
    genspark: "用途依存（特化タスク向き）",
  },
  {
    axis: "引用確認のしやすさ",
    perplexity: "高い",
    openai: "高い（調査設計依存）",
    genspark: "中〜高（画面設計依存）",
  },
  {
    axis: "社内データ接続",
    perplexity: "ワークスペース機能中心",
    openai: "MCPと連携アプリ対応",
    genspark: "プラン・機能依存",
  },
  {
    axis: "向いている担当",
    perplexity: "マーケ担当、広報、リサーチ初動",
    openai: "研究者、戦略担当、企画責任者",
    genspark: "新規探索担当、領域別オペレーション担当",
  },
] as const;

const useCaseRows = [
  {
    useCase: "速報",
    recommendation: "Perplexity",
    reason: "更新差分を短時間で追跡し、引用確認を回しやすい",
    operation: "朝会前に5分で主要ソースを再チェック",
  },
  {
    useCase: "深掘り",
    recommendation: "ChatGPT Deep Research",
    reason: "調査設計と統合レポート出力を一本化しやすい",
    operation: "論点と除外条件を先に指定して5〜30分で調査",
  },
  {
    useCase: "競合調査",
    recommendation: "Deep Research + Perplexity",
    reason: "深掘りで叩き台を作り、Perplexityで引用再検証すると精度が安定",
    operation: "最終提出前に価格・機能・更新日を二重確認",
  },
  {
    useCase: "学術",
    recommendation: "Deep Research（補助でPerplexity）",
    reason: "複数文献の比較整理を行いやすく、反証クエリとの相性が良い",
    operation: "原著論文リンクを必ず併記し、二次要約をそのまま採用しない",
  },
  {
    useCase: "旅行計画",
    recommendation: "Genspark",
    reason: "領域特化の実行フローと統合表示が使いやすい",
    operation: "行程案作成後に公式サイトで料金・営業時間を確認",
  },
] as const;

const pricingRows = [
  {
    tool: "ChatGPT",
    freePlan: "Freeあり",
    paidPlan: "Plus $20 / Pro $200 / Business $25-$30/席（確認日: 2026-02-20）",
    note: "Deep Researchは有料系プランで提供。利用上限はusage側で確認。",
  },
  {
    tool: "Perplexity",
    freePlan: "Freeあり",
    paidPlan: "Pro $20 / Max $40 / Enterprise Pro $40/席（確認日: 2026-02-20）",
    note: "ProはResearch Queriesなど上限が明示され、運用見積もりを立てやすい。",
  },
  {
    tool: "Genspark",
    freePlan: "Freeあり（規約ベースで確認）",
    paidPlan: "Team $30/席（月）または$24/席（年）を確認。個人プラン価格は[要確認]。",
    note: "Teamは価格公開。個人向け有料価格は契約前にUI上で再確認が必要。",
  },
] as const;

const freeTierChecklist = [
  "速報だけなら無料枠でも成立しやすいが、深掘り用途は上限に達しやすい",
  "週次の調査回数を先に数え、月間実行回数ベースで有料化判断を行う",
  "無料枠でテストする際は、同一クエリを3日連続で回して再現性を確認する",
  "チーム導入前に、誰が引用確認の責任を持つかをルール化する",
] as const;

const hallucinationChecks = [
  "重要主張ごとに一次情報URLを1件以上紐づける",
  "数値や割合は元データの算出条件を確認する",
  "反証クエリを必ず1本追加し、都合のよい結論に偏らないかを点検する",
] as const;

const freshnessChecks = [
  "確認日（YYYY-MM-DD）を本文と資料に明記する",
  "製品アップデート履歴を月1回チェックし、古い前提を更新する",
  "価格表はスクリーンショットではなく一次ソースURLで管理する",
] as const;

const citationChecks = [
  "引用元のタイトル・公開日・更新日を記録する",
  "要約だけでなく原典ページへ遷移して文脈を確認する",
  "社内共有時は引用元を最低2件添付して再検証可能にする",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "実務で再現できる判断軸を持ち、ツール選定と業務接続を自分で設計できる状態を目指します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを使った内省を通じて強みと価値観を言語化し、次のキャリア選択を具体化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話で実践知を蓄積し、継続できる学習ループを作ります。",
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

export default function AiResearchTool2026Page({ faqItems }: AiResearchTool2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI情報収集ツール比較2026" },
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
                title="AI情報収集ツール比較2026｜Perplexity・Deep Research・Gensparkの選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI情報収集ツール比較2026｜Perplexity・Deep Research・Gensparkの選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日（確認日: 2026-02-20）</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI情報収集ツールは、機能数よりも用途の定義で選ぶと失敗が減ります。2026年時点では、Perplexityのようなリアルタイム検索型、ChatGPT Deep
            Researchのような深掘り型、Gensparkのような専門特化型で役割が分かれています。最初に役割を固定すれば、調査品質と工数の両方を管理しやすくなります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、3ツールの詳細比較、用途別の選択チャート、料金と無料枠の実務評価、ハルシネーション対策までを一つの判断フレームで整理します。
          </p>
        </motion.header>

        <section className="mt-8 rounded-lg border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-base font-bold text-gray-900">この記事でわかること</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1">AI情報収集ツールはリアルタイム検索型・深掘り型・専門特化型の3分類で選ぶと判断が早い</li>
            <li className="pl-1">Perplexity・ChatGPT Deep Research・Gensparkの用途別比較</li>
            <li className="pl-1">無料枠での実務運用可否の目安と有料化の判断基準</li>
            <li className="pl-1">ハルシネーション・引用ミスを防ぐ4点の固定ルール</li>
          </ul>
        </section>

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
          id="landscape"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年のAI情報収集ツール全体像。リアルタイム検索型・深掘り型・専門特化型の3分類で整理する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ツール比較で混乱する主因は、同じ評価軸で全製品を測ろうとすることです。情報収集の現場では、まず「速報を取りたいのか」「調査報告を作りたいのか」「特化領域を回したいのか」を切り分ける必要があります。
            3分類で考えると、選定理由と運用ルールをチームで共有しやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">類型</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">中核価値</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">代表ツール</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {landscapeRows.map((row) => (
                  <tr key={row.type} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.type}</th>
                    <td className="px-4 py-3">{row.core}</td>
                    <td className="px-4 py-3">{row.tools}</td>
                    <td className="py-3 pl-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            深掘り調査の接続要件を先に確認したい場合は、
            <Link href="/academy/blog/what-is-mcp" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              MCP解説記事
            </Link>
            も併読すると判断基準をそろえやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="tool-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要3ツール詳細比較。Perplexityは速報、Deep Researchは深掘り、Gensparkは特化タスクで分ける
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Perplexity・ChatGPT Deep Research・Gensparkは同じ「調査AI」でも運用前提が異なります。単純な優劣比較ではなく、業務プロセスにどこで組み込むかを明確にすると、導入後の手戻りを抑えられます。
          </p>
          <div className="mt-6 grid gap-4">
            {toolCards.map((card) => (
              <section key={card.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="text-lg font-semibold text-gray-900">{card.name}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-gray-900">{card.title}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {card.strengths.map((strength) => (
                    <li key={strength} className="pl-1 marker:text-gray-500">
                      {strength}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-7 text-gray-700">注意点: {card.watch}</p>
                <p className="mt-4 text-sm leading-7 text-gray-700">
                  <Link href={card.link} className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    {card.linkLabel}
                  </Link>
                </p>
              </section>
            ))}
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Perplexity</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ChatGPT Deep Research</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Genspark</th>
                </tr>
              </thead>
              <tbody>
                {detailRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-3">{row.perplexity}</td>
                    <td className="px-4 py-3">{row.openai}</td>
                    <td className="py-3 pl-4">{row.genspark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="use-case-chart"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別最適ツール選択チャート。速報・深掘り・競合調査・学術・旅行計画で選び分ける
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実運用では、担当者ごとにツールを固定するより、用途ごとに選択基準を固定するほうが再現性が高まります。以下のチャートをチーム運用ルールに落とし込むと、調査品質のばらつきを抑制できます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">選定理由</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用メモ</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.useCase} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.useCase}</th>
                    <td className="px-4 py-3">{row.recommendation}</td>
                    <td className="px-4 py-3">{row.reason}</td>
                    <td className="py-3 pl-4">{row.operation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            競合調査のテンプレート化を進める場合は、
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIガイドラインテンプレート
            </Link>
            と合わせて、引用確認の責任範囲を文書化する運用が有効です。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            料金比較と無料枠の使い勝手。月額だけでなく実行上限と再検証工数で評価する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            価格は導入時の判断材料ですが、情報収集ツールでは上限と運用工数の影響が大きくなります。確認日を固定し、月額費用を実行回数で割った実効単価で比較すると、予算計画が現実的になります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">無料プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">有料プラン（2026-02-20時点）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務メモ</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top last:border-b-0">
                    <th className="py-3 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-3">{row.freePlan}</td>
                    <td className="px-4 py-3">{row.paidPlan}</td>
                    <td className="py-3 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {freeTierChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            [要確認: Genspark個人向け有料プランの最新価格とクレジット上限は、ログイン状態の公式UIで最終確認してください。]
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="cautions"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            注意点。ハルシネーション・情報鮮度・引用精度の3点を固定手順で管理する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ツールの性能差より、レビュー手順の有無が成果を左右します。誤情報を減らすには、担当者の経験に依存しないチェック項目を固定し、提出物に確認ログを残すことが必要です。
          </p>
          <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">ハルシネーション対策</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {hallucinationChecks.map((item) => (
                <li key={item} className="pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">情報鮮度管理</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {freshnessChecks.map((item) => (
                <li key={item} className="pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="text-base font-semibold text-gray-900">引用精度管理</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {citationChecks.map((item) => (
                <li key={item} className="pl-1 marker:text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </section>
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
          <h2 className="text-2xl font-bold text-orange-900">AI活用の判断軸とキャリア設計を、学習プロセスごと整える</h2>
          <p className="mt-4 text-sm leading-7 text-orange-900/90">
            AIリブートアカデミーは、特定ツールの操作習得を目的にした場ではありません。生成AIを仕事で活かすための判断軸、自己理解にもとづくキャリア設計、
            仲間と学び続ける環境を一体で整え、実務での再現性と次のキャリア行動につなげることを重視しています。
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
