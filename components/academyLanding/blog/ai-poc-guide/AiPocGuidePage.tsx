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

type AiPocGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI PoC", "30日テンプレ", "成功基準", "失敗パターン"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-poc", label: "PoCとは？なぜ必要？" },
  { id: "poc-template", label: "30日PoCテンプレート" },
  { id: "success-criteria", label: "成功基準の設計" },
  { id: "failure-patterns", label: "失敗パターンと対策" },
  { id: "decision-flow", label: "PoC後の判断フロー" },
  { id: "plan-template", label: "PoC計画書テンプレ" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "CTA" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const kpiExampleRows = [
  { metric: "作業時間削減率", definition: "1件あたりの処理時間の短縮", target: "30%以上削減" },
  { metric: "正答率/品質", definition: "期待する回答の一致率・誤り率", target: "正答率90%以上（用途により調整）" },
  { metric: "処理件数", definition: "一定期間に処理できた件数", target: "現状比1.5倍" },
  { metric: "コスト削減額", definition: "工数削減を金額換算（人件費等）", target: "月◯万円以上" },
] as const;

const planTemplateRows = [
  {
    item: "目的",
    content: "何を検証し、何を決めるためのPoCか",
    example: "問い合わせ対応の初動（一次回答）の自動化可否を検証する",
  },
  {
    item: "対象業務",
    content: "業務範囲・対象データ・対象ユーザー",
    example: "FAQ/マニュアルに基づく一次回答（社外向け）",
  },
  {
    item: "成功基準",
    content: "定量KPI/定性評価と合格ライン",
    example: "作業時間30%削減、正答率90%以上、満足度4.2/5以上",
  },
  {
    item: "期間",
    content: "開始日〜終了日（30日以内推奨）",
    example: "2/18〜3/19（4週間）",
  },
  {
    item: "予算",
    content: "ツール費・外注費・社内工数の上限",
    example: "ツール5万円/月、外注なし、社内工数40h",
  },
  {
    item: "担当者",
    content: "責任者（意思決定者）と実務担当",
    example: "責任者: DX推進（課長）、実務: CS 2名、情シス1名",
  },
  {
    item: "評価方法",
    content: "計測の仕方・サンプル数・比較方法",
    example: "同一100件で人手対応 vs AI支援の処理時間・正答率を比較",
  },
  {
    item: "セキュリティ対策",
    content: "入力データ方針、権限、ログ、持ち出し対策",
    example: "機微情報は入力禁止、会社管理アカウント、ログ保管90日",
  },
] as const;

export default function AiPocGuidePage({ faqItems }: AiPocGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI PoCの進め方" },
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
                title="生成AI PoCの進め方（30日テンプレ）｜成功条件と失敗パターンを先に潰す【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AI PoCの進め方（30日テンプレ）｜成功条件と失敗パターンを先に潰す【2026年版】
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIの検証は、やり方を間違えると「便利そうだった」で終わり、社内の疲弊と不信だけが残ります。逆に言うと、最初に<span className="font-semibold text-gray-900">成功条件と失敗パターン</span>
            を固定できれば、PoC→本格導入の確率は大きく上がります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、30日で完了するPoCテンプレート、成功/失敗の判定基準の作り方、よくある失敗5パターンと対策、PoC計画書テンプレ（8項目）をまとめます。
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
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">PoCは30日以内で完了が鉄則。短期集中で成否を判定</li>
            <li className="pl-1 marker:text-gray-500">成功基準は定量KPIで事前設定。「なんとなく試す」は失敗の最大原因</li>
            <li className="pl-1 marker:text-gray-500">失敗パターンを先に潰す設計で、PoC→本格導入の確率を上げる</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-poc" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            PoCとは？なぜ必要なのか
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            PoC（概念実証）は「できる/できない」を早く見極めるための小規模検証です。ここでのゴールは、完成品を作ることではなく、
            <span className="font-semibold text-gray-900">本格導入の可否（Go/Pivot/Stop）を判断できる材料</span>を揃えることです。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">PoC</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">技術的・業務的に成立するかを小さく検証（判断材料づくり）。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">パイロット</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">限定部署で実運用に近い形で試し、運用課題を洗い出す。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">MVP</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">最低限の価値を提供するプロダクトを作り、市場/社内で検証する。</p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">PoCが必要な3つの理由</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">リスク検証:</span> 精度・幻覚・運用事故（入力/出力）を小さく潰す
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">コスト検証:</span> ツール費・人件費・運用負荷が投資に見合うかを見積もる
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">社内合意形成:</span> 反対されやすい論点（精度/セキュリティ/ROI）をデータで議論する
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">PoCなしで導入するリスク</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            いきなり本格導入すると、精度の限界やセキュリティ要件に後から気づき、手戻りが大きくなります。結果として「AIは使えない」という社内評価になりやすいのが落とし穴です。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="poc-template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            30日PoCテンプレート
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            30日PoCは「短い」からこそ、成果が出ます。週ごとにやることを固定し、Week 4でGo/Pivot/Stopを判断できる状態に持ち込みます。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 1</h3>
              <p className="mt-1 text-sm font-semibold text-orange-700">計画策定</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">目的定義（何を決めるPoCか）</li>
                <li className="pl-1 marker:text-gray-500">業務選定（定型×大量を優先）</li>
                <li className="pl-1 marker:text-gray-500">KPI設計（定量/定性）</li>
                <li className="pl-1 marker:text-gray-500">チーム編成（現場を必ず入れる）</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 2</h3>
              <p className="mt-1 text-sm font-semibold text-orange-700">環境構築・初期検証</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">ツール選定（費用/データ保持/権限）</li>
                <li className="pl-1 marker:text-gray-500">データ準備（範囲と品質）</li>
                <li className="pl-1 marker:text-gray-500">プロンプト設計（評価用の型）</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 3</h3>
              <p className="mt-1 text-sm font-semibold text-orange-700">本格検証</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">業務適用（小さく回す）</li>
                <li className="pl-1 marker:text-gray-500">定量データ収集（時間/精度/件数）</li>
                <li className="pl-1 marker:text-gray-500">課題抽出（例外と失敗を記録）</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 4</h3>
              <p className="mt-1 text-sm font-semibold text-orange-700">評価・報告</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">KPI達成度の評価</li>
                <li className="pl-1 marker:text-gray-500">本格導入判定（Go/Pivot/Stop）</li>
                <li className="pl-1 marker:text-gray-500">報告書作成（意思決定用）</li>
              </ul>
            </section>
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
          <h2 id="success-criteria" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            成功基準の設計方法
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            成功基準は「後から作る」とほぼ失敗します。PoC開始前に、定量KPIと定性評価を決め、Week 4で判断できる形に落とします。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">定量KPIの例（最初に決める）</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">KPI</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">定義</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">目標例</th>
                </tr>
              </thead>
              <tbody>
                {kpiExampleRows.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.metric}</th>
                    <td className="py-4 px-4">{row.definition}</td>
                    <td className="py-4 pl-4">{row.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">定性評価の例（満足度・操作性・セキュリティ）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ユーザー満足度（5段階アンケートなど）</li>
            <li className="pl-1 marker:text-gray-500">運用のしやすさ（教育コスト、例外対応の頻度）</li>
            <li className="pl-1 marker:text-gray-500">セキュリティ（入力データ方針、権限、ログ）</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">判定マトリクス（Go / Pivot / Stop）</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">判定</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">状態</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">次のアクション</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Go</th>
                  <td className="py-4 px-4">定量KPIを満たし、運用/セキュリティ要件もクリア</td>
                  <td className="py-4 pl-4">本格導入（予算申請、展開計画、運用設計）へ</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Pivot</th>
                  <td className="py-4 px-4">一部KPI未達・運用課題あり（改善余地が明確）</td>
                  <td className="py-4 pl-4">対象業務/ツール/データ範囲を変えて再PoC</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">Stop</th>
                  <td className="py-4 px-4">コストが見合わない/精度限界/セキュリティ要件を満たせない</td>
                  <td className="py-4 pl-4">中止し、別アプローチ（業務変更・別ツール）を検討</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="failure-patterns" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗パターン5選と対策
          </h2>
          <div className="mt-8 grid gap-4">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">パターン1：ゴールが曖昧で評価できない</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策: KPIを数値で事前設定し、Week 4で判断できる形に固定します（例: 作業時間30%削減、正答率90%以上）。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">パターン2：対象業務が複雑すぎる</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策: 定型×大量の業務を選びます（FAQ一次回答、文書要約、データ入力など）。効果が測りやすく、成功体験を見せやすいのが強みです。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">パターン3：期間が長引きグダグダ</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策: 30日上限を厳守します。長期化するとコストが膨らみ、検証の焦点がぼやけます。「やらないこと」も計画に入れてください。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">パターン4：現場の巻き込み不足</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策: 実務担当者を検証チームに入れます。現場がいないPoCは、評価が現実に合わず、導入フェーズで崩れます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">パターン5：セキュリティ後回し</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                対策: ガイドラインと並行設計します。PoC段階で「入力データ方針・権限・ログ」を決めておくと、本格導入の手戻りが激減します。
                <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  ガイドライン雛形（#1）
                </Link>
                を叩き台にすると早いです。
              </p>
            </section>
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
          <h2 id="decision-flow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            PoC後の判断フロー
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            PoCの成果は「成功/失敗」ではなく、「次に何をするか」です。Week 4の判断は、Go / Pivot / Stop の3段階で決めてください。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Go</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">本格導入へ（予算申請、全社展開計画、運用設計）。</p>
            </section>
            <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Pivot</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">対象業務やツールを変えて再PoC（改善ポイントを明確に）。</p>
            </section>
            <section className="rounded-lg border border-rose-200 bg-rose-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Stop</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">中止して別のアプローチを検討（業務設計/別技術）。</p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">判断フローチャート（簡易）</h3>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-gray-700">
            <li className="rounded-lg border border-gray-200 p-4">
              1. セキュリティ要件を満たす？（入力データ方針、権限、ログ）
              <span className="ml-2 text-gray-500">→</span> 満たさないなら <span className="font-semibold text-gray-900">Stop</span>
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              2. 定量KPIを満たす？（時間/精度/件数/コスト）
              <span className="ml-2 text-gray-500">→</span> 満たすなら <span className="font-semibold text-gray-900">Go</span>
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              3. 未達でも改善余地が明確？
              <span className="ml-2 text-gray-500">→</span> 明確なら <span className="font-semibold text-gray-900">Pivot</span>（再PoC）
            </li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="plan-template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            PoC計画書テンプレート（8項目）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            PoCを最短で進めるコツは、計画書を「薄く・速く」作り、検証で更新することです。最低限この8項目だけは先に固定してください。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">記載内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">記入例</th>
                </tr>
              </thead>
              <tbody>
                {planTemplateRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 px-4">{row.content}</td>
                    <td className="py-4 pl-4">{row.example}</td>
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
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
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

        <motion.section
          className="mt-14 border-t border-slate-200 pb-4 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-2xl font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-adoption-cost-roi" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI導入の費用とROI（#5）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形（#1）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            生成AI PoCは「短期で結論を出す設計」が成功条件です。30日で完了させ、事前にKPIを定め、失敗パターンを先に潰すことで、本格導入までの確度が上がります。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            特にセキュリティ要件で手戻りしやすいので、
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ガイドライン雛形
            </Link>
            と並行で「入力データ方針・権限・ログ」を固めてから検証に入るのがおすすめです。
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
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            CTA
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            PoCの設計（成功基準/KPI）、業務選定、ガイドライン整備までまとめて進めたい方向けに、無料セミナーと相談窓口を用意しています。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナー（/academy/seminars）
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINE相談
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

