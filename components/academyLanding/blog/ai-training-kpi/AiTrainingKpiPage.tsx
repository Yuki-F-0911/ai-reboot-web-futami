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

type AiTrainingKpiPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI研修 KPI", "研修 定着", "効果測定", "現場タスク化"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-fails", label: "なぜ研修は\"やりっぱなし\"になるのか" },
  { id: "kpi-framework", label: "KPI設計の3段階フレームワーク" },
  { id: "task-design", label: "現場タスク化のコツ" },
  { id: "manager-involvement", label: "上長の巻き込み戦略" },
  { id: "measurement", label: "効果測定とレポーティング" },
  { id: "kpi-template", label: "KPIシートテンプレート" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "CTA" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const kpiExampleRows = [
  {
    level: "Level 1: 理解度",
    kpi: "理解度テストの正答率 / 自己評価（できる・できない）",
    method: "小テスト、演習課題、自己評価フォーム",
    timing: "研修直後",
  },
  {
    level: "Level 2: 行動変容",
    kpi: "業務適用率 / 週あたりのAI利用回数 / 成果物の提出率",
    method: "OJTタスク提出、利用ログ、上長レビュー",
    timing: "1ヶ月後",
  },
  {
    level: "Level 3: 成果",
    kpi: "作業時間削減率 / エラー削減率 / 生産性（処理件数など）",
    method: "業績データ、工数計測、品質指標",
    timing: "3ヶ月後",
  },
] as const;

const kpiSheetRows = [
  {
    kpi: "理解度テスト結果",
    method: "小テスト正答率 / 演習課題の採点",
    target: "正答率80%以上（部門平均）",
    timing: "研修直後",
    owner: "研修担当",
  },
  {
    kpi: "AI業務適用率",
    method: "対象業務のうちAI活用した割合（上長レビュー＋自己申告）",
    target: "適用率50%以上（対象者の平均）",
    timing: "1ヶ月後",
    owner: "上長＋本人",
  },
  {
    kpi: "作業時間削減率",
    method: "研修前後で同一作業の所要時間を比較（サンプル計測）",
    target: "20%削減（対象業務）",
    timing: "3ヶ月後",
    owner: "現場責任者",
  },
  {
    kpi: "エラー削減率",
    method: "差し戻し回数 / 再作業率 / 品質検査NG率",
    target: "10%削減（対象業務）",
    timing: "3ヶ月後",
    owner: "品質/業務責任者",
  },
  {
    kpi: "従業員満足度",
    method: "アンケート（業務負荷、使いやすさ、支援体制）",
    target: "満足度4.0/5以上",
    timing: "1ヶ月後（継続）",
    owner: "人事/研修担当",
  },
  {
    kpi: "研修NPS",
    method: "NPS（推奨度）アンケート",
    target: "+20以上",
    timing: "研修直後",
    owner: "研修担当",
  },
] as const;

export default function AiTrainingKpiPage({ faqItems }: AiTrainingKpiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "研修KPI設計と定着" },
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
                title={'研修が"やりっぱなし"で終わる理由｜KPI設計と現場タスク化のコツ【2026年版】'}
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            研修が&quot;やりっぱなし&quot;で終わる理由｜KPI設計と現場タスク化のコツ【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>

          <p className="mt-6 text-base leading-8 text-gray-700">
            研修を実施したのに、現場で使われない。数週間で元に戻る。成果が見えないので次回が予算化されない——このパターンは、内容の良し悪しよりも
            <span className="font-semibold text-gray-900">「研修後の行動設計（OJTタスク）」と「測り方（KPI）」</span>
            の欠落で起きやすくなります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、理解度→行動変容→成果の3段階でKPIを設計し、30日以内に現場タスク化するコツ、上長の巻き込み、効果測定とレポーティングまでをテンプレート付きで整理します。
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
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">研修が定着しない最大の理由は「研修後の行動設計」がないこと</li>
            <li className="pl-1 marker:text-gray-500">KPIは理解度→行動変容→成果の3段階で設計する</li>
            <li className="pl-1 marker:text-gray-500">現場タスク化と上長の巻き込みが定着率を決める</li>
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
          <h2 id="why-fails" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜ研修は&quot;やりっぱなし&quot;になるのか
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 研修は「学ぶイベント」になりやすく、業務に落とす設計がないと日常業務に負けます。研修前に「研修後30日で何をやるか」まで決めると、定着率が大きく変わります。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">原因1: 研修後のアクションプランがない</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">知識があっても「次に何を出すか」が決まっていないと、現場で再現できません。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">原因2: 上長が関与しない</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">上長が確認しないと、優先順位が上がらず「忙しいので後で」に流れます。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">原因3: 効果が見えないので継続意欲が下がる</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">成果が数値化されないと、本人も組織も「やっている感」で終わりやすくなります。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">原因4: 研修内容と実務のギャップ</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">ケースが自社業務から離れるほど、現場で使うタイミングが見えなくなります。</p>
            </section>
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
          <h2 id="kpi-framework" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            KPI設計の3段階フレームワーク
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 研修KPIは「理解できたか」だけで終わらせず、行動と成果まで追います。最低でも「直後/1ヶ月/3ヶ月」の3点で定点観測すると、定着の打ち手が作れます。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">Level 1: 理解度</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">研修直後のテスト、自己評価で「最低限できる」を確認。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">Level 2: 行動変容</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">1ヶ月後の業務適用率、利用頻度、提出物で「使った」を測る。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-gray-900">Level 3: 成果</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">3ヶ月後の生産性、品質、コストで「効いた」を測る。</p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">カークパトリックモデルとの対応</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            研修評価の有名モデル（Reaction / Learning / Behavior / Results）に当てはめると、Level 1がLearning、Level 2がBehavior、Level 3がResultsに相当します。
            Reaction（満足度）は参考指標として扱い、「満足した＝業務で使える」ではない点に注意します。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">具体的なKPI例（最小セット）</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">段階</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">KPI例</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">測定方法</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">推奨時期</th>
                </tr>
              </thead>
              <tbody>
                {kpiExampleRows.map((row) => (
                  <tr key={row.level} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.level}</th>
                    <td className="py-4 px-4">{row.kpi}</td>
                    <td className="py-4 px-4">{row.method}</td>
                    <td className="py-4 pl-4">{row.timing}</td>
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
          <h2 id="task-design" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            現場タスク化のコツ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 定着は「タスクの設計」で決まります。研修直後に、SMART基準でOJTタスクを用意し、提出物と上長レビューまでセットにすると実務で回りやすくなります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">OJTタスクの設計方法（SMART）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Specific: 何を作る/改善するかを明確にする（成果物ベース）</li>
            <li className="pl-1 marker:text-gray-500">Measurable: 合否や達成条件を数値・チェック項目で定義する</li>
            <li className="pl-1 marker:text-gray-500">Achievable: 30日以内に終わる難易度にする（分割も可）</li>
            <li className="pl-1 marker:text-gray-500">Relevant: 実務の頻出業務に直結させる（やらないと困る仕事）</li>
            <li className="pl-1 marker:text-gray-500">Time-bound: 提出期限とレビュー日を先に決める</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">職種別タスク例（営業/マーケ/バックオフィス/エンジニア）</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">営業</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">提案書の叩き台→上長レビュー→顧客別に再利用できるテンプレ化まで作る。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">マーケ</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">LP構成案・広告文案を3パターン出し、ABテストの仮説と計測指標までセットで提出する。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">バックオフィス</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">定型メール・稟議文・議事録の自動化テンプレを作り、差し戻し削減を狙う。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">エンジニア</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">ユニットテスト追加、リファクタ案、レビュー観点チェックリストをセットで運用する。</p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">難易度の段階設定（初級→中級→上級）</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">初級</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">テンプレに沿って「まず1回出す」。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">中級</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">レビューを受けて改善し、再利用できる形にする。</p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-white p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">上級</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">チーム標準として共有し、運用ルールに組み込む。</p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">タスク進捗の追跡方法</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            進捗は「提出物」「レビュー」「再利用」の3点で追うと、主観評価になりにくくなります。おすすめは、Notion/スプレッドシートで「タスク / 期限 / 提出URL / 上長コメント / 次回改善点」を1行で管理する形です。
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
          <h2 id="manager-involvement" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            上長の巻き込み戦略
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 上長の関与を「お願い」ではなく「設計」で作ります。15分ブリーフィングで役割を明確にし、部下KPIを上長の評価項目に連動させると回りやすくなります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">上長向けブリーフィング（15分）の設計</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">目的: 「部下が研修後に何を提出するか」と「上長が何を確認するか」を揃える</li>
            <li className="pl-1 marker:text-gray-500">共有物: OJTタスク一覧、提出物例、レビュー観点（NG例を含む）</li>
            <li className="pl-1 marker:text-gray-500">合意: 1on1での確認タイミング（例: 週1 or 隔週）</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">部下のKPIを上長の評価項目に連動</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            例: 「部下のOJTタスク提出率」「1on1でのレビュー実施率」「成功事例の共有数」を、上長側の評価・目標管理に入れると、優先順位が上がります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">1on1での進捗確認テンプレート</h3>
          <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">今週: 何をAIで試したか（提出物URL）</li>
              <li className="pl-1 marker:text-gray-500">詰まり: どこで止まったか（データ/手順/権限/品質）</li>
              <li className="pl-1 marker:text-gray-500">改善: 次回は何を変えるか（プロンプト/入力データ/確認工程）</li>
              <li className="pl-1 marker:text-gray-500">次回: 提出期限とレビュー日時</li>
            </ul>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">成功事例の共有で動機づけ</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            上長が「良い例」を一つ褒めて横展開すると、組織の空気が変わります。小さな成果（5分短縮でもOK）を拾って共有する運用が、継続利用のトリガーになります。
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
          <h2 id="measurement" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            効果測定とレポーティング
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 測定は「直後/1ヶ月/3ヶ月」の3回が基本です。直後は理解度、1ヶ月後は行動、3ヶ月後は成果・ROIを見ます。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">測定のタイミング（直後/1ヶ月/3ヶ月）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">研修直後: 理解度（テスト/演習）と次のOJTタスクを確定</li>
            <li className="pl-1 marker:text-gray-500">1ヶ月後: 行動変容（業務適用率/提出物/利用頻度）</li>
            <li className="pl-1 marker:text-gray-500">3ヶ月後: 成果（工数/品質/コスト）とROI</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">データ収集方法（アンケート/ログ/業績データ）</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">アンケート</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">理解度・満足度・支援体制の課題を拾う（主観）。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">ログ</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">利用頻度、テンプレ利用、提出物URLなど（行動）。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">業績データ</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">工数、差し戻し、処理件数など（成果）。</p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">経営層向けレポートフォーマット</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">結論（1枚目）: KPIの推移と次の打ち手（継続/拡大/改善点）</li>
            <li className="pl-1 marker:text-gray-500">根拠（2枚目）: 直後/1ヶ月/3ヶ月のデータ（理解度→行動→成果）</li>
            <li className="pl-1 marker:text-gray-500">意思決定（3枚目）: 次四半期の対象範囲、予算、運用体制</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">ROI算出方法</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ROIは「削減できた工数 × 人件費単価」で算定し、エラー削減や満足度の改善は補助指標で添えると説明しやすくなります。法人向け研修の全体設計（KPI・フォロー含む）は
            <Link href="/academy/blog/corporate-ai-training" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              こちらの記事
            </Link>
            も参照してください。
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
          <h2 id="kpi-template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            KPIシートテンプレート
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 迷うポイントは「誰が、いつ、どう測るか」です。以下の表をそのまま自社用に置き換えると、運用が崩れにくくなります。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">KPI</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">測定方法</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目標値</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">測定時期</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">担当</th>
                </tr>
              </thead>
              <tbody>
                {kpiSheetRows.map((row) => (
                  <tr key={row.kpi} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.kpi}</th>
                    <td className="py-4 px-4">{row.method}</td>
                    <td className="py-4 px-4">{row.target}</td>
                    <td className="py-4 px-4">{row.timing}</td>
                    <td className="py-4 pl-4">{row.owner}</td>
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
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-2xl font-bold text-gray-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-training-curriculum" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                研修カリキュラム（#7） | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-poc-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                PoCの進め方（#6） | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-training" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI研修で成果を出す完全ガイド | AIリブート
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">研修は「研修後30日」の行動設計（OJTタスク）まで含めて初めて定着に向かいます。</li>
            <li className="pl-1 marker:text-gray-500">KPIは理解度→行動変容→成果の3段階で設計し、直後/1ヶ月/3ヶ月で測ります。</li>
            <li className="pl-1 marker:text-gray-500">上長の巻き込み（ブリーフィング＋評価連動）を設計すると継続利用が回りやすくなります。</li>
            <li className="pl-1 marker:text-gray-500">レポートは四半期単位で「3指標（時間・品質・満足度）」を軸に経営層へ報告します。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            CTA
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            研修設計・KPI設計・現場定着までまとめて進めたい方向けに、無料セミナーとLINE相談の導線を用意しています。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINE相談に進む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
