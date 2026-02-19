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

type LlmEvaluationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["LLM 評価", "生成AI 品質 テスト", "AI出力評価 指標", "運用監視"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: 評価は業務リスクで設計する" },
  { id: "metric-layer", label: "品質・安全性・運用性の3レイヤー" },
  { id: "scorecard-template", label: "【コピペ可】評価シート" },
  { id: "roadmap-30days", label: "30日運用ロードマップ" },
  { id: "department-practice", label: "部門別の実務設計" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "cta", label: "アカデミーで運用力を固める" },
] as const;

const metricRows = [
  {
    layer: "品質",
    purpose: "回答が業務要件に合うか",
    metrics: "正確性、再現性、根拠提示率、フォーマット遵守率",
    threshold: "正確性90%以上、根拠提示率95%以上",
  },
  {
    layer: "安全性",
    purpose: "事故や規約違反を防げるか",
    metrics: "機密情報混入率、禁止操作ブロック率、著作権リスク検知率",
    threshold: "機密混入0件、危険操作ブロック率100%",
  },
  {
    layer: "運用性",
    purpose: "現場で回し続けられるか",
    metrics: "平均処理時間、承認介入率、再実行率、1件あたりコスト",
    threshold: "再実行率10%未満、コストは基準値以内",
  },
] as const;

const weeklyChecklist = [
  "高頻度タスク20件以上の評価セットを更新した",
  "正確性・根拠提示率・危険出力ブロック率を記録した",
  "承認が必要な出力に承認IDが紐づいている",
  "失敗ケースを3件以上レビューし、原因分類した",
  "モデル/プロンプト/ツール変更の影響を比較した",
  "1件あたりコストと処理時間を先週比で確認した",
  "部門責任者と改善優先度を合意した",
  "週次の運用ルール改定点を記録した",
] as const;

const scorecardTemplate = `# LLM評価スコアカード（週次）

## 1. 評価対象
- 対象業務:
- 対象モデル:
- 対象期間:
- 評価責任者:

## 2. 指標（品質）
- 正確性（%）:
- 根拠提示率（%）:
- フォーマット遵守率（%）:
- 再現性（同一入力の一致率）:

## 3. 指標（安全性）
- 機密情報混入件数:
- 禁止操作ブロック率:
- 著作権/ライセンス要確認件数:
- バイアス・不適切表現検知件数:

## 4. 指標（運用性）
- 平均処理時間（秒）:
- 承認介入率（%）:
- 再実行率（%）:
- 1件あたりコスト（円）:

## 5. 判定
- 判定: Go / Conditional Go / Hold
- 判定理由:
- 次週の改善項目（上位3件）:

## 6. インシデント・例外
- 発生日:
- 内容:
- 影響範囲:
- 初動対応:
- 再発防止策:
`;

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function LlmEvaluationGuidePage({ faqItems }: LlmEvaluationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIの評価（LLM評価）入門" },
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
                title="生成AIの評価（LLM評価）入門｜“任せていい品質”を測る指標と運用【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIの評価（LLM評価）入門｜“任せていい品質”を測る指標と運用【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIを導入した企業が次に詰まるのは、「使えるかどうか」ではなく「任せてよい品質か」を説明できない点です。現場では便利でも、決裁者・法務・情シスが
            了承できる評価設計がなければ本番運用には進めません。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、LLM評価を<span className="font-semibold text-gray-900">品質・安全性・運用性</span>の3レイヤーで設計する方法、週次運用にそのまま使えるコピペ
            テンプレ、30日で評価運用を定着させる手順をまとめます。PoCで止まらず、現場で回る運用体制を作ることが目的です。
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
            結論: LLM評価は「正答率」ではなく「業務リスク」で設計する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            正答率が高くても、機密混入や誤送信が起きるなら本番では使えません。逆に、正答率が90%未満でも、承認と再実行導線があり事故を止められるなら運用は可能です。
            まずは「何を防ぎ、何を任せるか」を決めてから指標を置くのが実務の順番です。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">先に決めるべき3点（用途・失敗コスト・責任者）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">用途:</span> 要約、下書き、検索、分類など対象業務を固定する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">失敗コスト:</span> 間違えたときの損失を定義する（信用、法務、金銭、工数）。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">責任者:</span> 評価の判定者と改善責任者を分けて明確化する。
            </li>
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">評価設計の失敗例</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">精度だけを追い、ログ設計がないため事故時に原因追跡できない。</li>
            <li className="pl-1 marker:text-gray-500">部署ごとに基準がバラバラで、承認可否が担当者依存になる。</li>
            <li className="pl-1 marker:text-gray-500">評価はしたが改善サイクルがなく、2週間で形骸化する。</li>
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
          <h2 id="metric-layer" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            品質・安全性・運用性の3レイヤーで評価指標を設計する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            LLM評価を実務で機能させるには、1つの総合点ではなく複数レイヤーで判定します。品質だけを見ると安全性が漏れ、安全性だけを見ると業務速度が落ちます。
            3レイヤーを並べることで「どこを改善すれば前に進めるか」が分かります。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">評価レイヤー早見表</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">レイヤー</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目的</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主要指標</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">目安しきい値</th>
                </tr>
              </thead>
              <tbody>
                {metricRows.map((row) => (
                  <tr key={row.layer} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.layer}</th>
                    <td className="py-4 px-4">{row.purpose}</td>
                    <td className="py-4 px-4">{row.metrics}</td>
                    <td className="py-4 pl-4">{row.threshold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">品質評価: 正確性と再現性を分けて測る</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            品質評価で多い失敗は「正しい回答が1回出た」で終わることです。実務では同じ入力で結果が揺れるとオペレーションが崩れます。正確性に加えて、
            再現性と根拠提示率を必ず併記してください。評価セットは
            <Link href="/academy/blog/ai-poc-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AI PoCの進め方
            </Link>
            で使う実データを再利用すると効率的です。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">安全性評価: 事故を止める設計があるかを確認する</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            安全性は「ルールがあるか」ではなく「違反を止められるか」で評価します。機密情報の入力防止、著作権リスクの検知、禁止操作のブロックは必須です。
            社内ルールの土台が未整備なら
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの社内ガイドライン雛形
            </Link>
            を先に整えると評価基準が安定します。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">運用性評価: 現場が回るかを数字で確認する</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            正解でも遅い、安くても承認介入が多すぎる、という状態は現場で継続できません。運用性では処理時間、再実行率、承認介入率、コストを週次で見ます。
            ここを見ないと「PoCでは成功したのに本番で使われない」状態になります。
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
          <h2 id="scorecard-template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            【コピペ可】LLM評価スコアカード（週次運用テンプレ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            下記テンプレは、週次レビューで最低限必要な項目だけに絞っています。最初はすべて埋めるより、毎週欠かさず更新することを優先してください。
          </p>
          <div className="mt-5 overflow-x-auto rounded-lg bg-gray-900 p-4">
            <pre className="min-w-[760px] whitespace-pre-wrap break-words text-xs leading-6 text-gray-100">
              <code>{scorecardTemplate}</code>
            </pre>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">週次レビューのチェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {weeklyChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
            <p className="text-sm leading-7 text-gray-700">
              AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                LINEで週1AI通信を受け取る（無料）
              </a>
              <Link
                href="/academy/blog/ai-agent-deployment-checklist"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                エージェント導入チェックリストを見る
              </Link>
            </div>
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
          <h2 id="roadmap-30days" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            30日で評価運用を立ち上げるロードマップ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            評価は1回作って終わりではなく、改善ループを回して初めて意味があります。30日を3フェーズに分け、短いサイクルで定着させます。
          </p>

          <div className="mt-8 space-y-4">
            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">0〜7日: 評価対象と基準値を固定する</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">高頻度かつ失敗コストが明確な業務を2〜3件選定する。</li>
                <li className="pl-1 marker:text-gray-500">現状手作業の処理時間と品質を測り、比較の基準値にする。</li>
                <li className="pl-1 marker:text-gray-500">評価責任者と判定会議（週1、30分）を固定する。</li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">8〜14日: しきい値と承認フローを実装する</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">品質・安全性・運用性のしきい値を数値で定義する。</li>
                <li className="pl-1 marker:text-gray-500">高リスク操作は承認ID必須にし、ログへ紐付ける。</li>
                <li className="pl-1 marker:text-gray-500">
                  情報漏えいの防止策は
                  <Link href="/academy/blog/ai-data-leak-patterns" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    情報漏えいパターン10選
                  </Link>
                  を参照してチェックリスト化する。
                </li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">15〜30日: 監視と改善を週次運用に落とす</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">週次で失敗ケースを3件選び、原因と改善を記録する。</li>
                <li className="pl-1 marker:text-gray-500">モデル変更時は同一評価セットでAB比較し、差分を可視化する。</li>
                <li className="pl-1 marker:text-gray-500">改善後はGo/Conditional Go/Holdで明示判定し、関係部署へ共有する。</li>
              </ul>
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
          <h2 id="department-practice" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            部門別の実務設計（営業・人事・CS）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            同じモデルでも、部門が違えば評価軸は変わります。共通指標は維持しつつ、部門特有のリスクを追加して運用してください。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">営業: 提案書下書きは品質、対外送信は安全性を重視</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            営業は「文章品質が高い」だけでは不十分です。顧客名、単価、契約条件が混入していないかを必ず評価し、対外送信前に承認を入れます。
            実装前の導入全体像は
            <Link href="/academy/blog/corporate-ai-adoption-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              中小企業の生成AI導入ガイド
            </Link>
            が参考になります。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">人事: バイアスと説明責任を評価項目に含める</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            人事業務では、評価コメントや候補者判断の説明責任が重要です。判断根拠が残らない出力は採用しない運用にし、推奨理由の透明性を評価指標に入れてください。
            機密情報の扱いは社内規程との整合を最優先にします。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">CS: 応答速度と再実行率を同時に追う</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            CSでは速度改善だけ追うと誤回答が増えます。初回応答時間、一次解決率、再実行率を同時に見て、品質と効率のバランスを調整します。
            FAQや定型回答の更新頻度をログ化すると、改善の再現性が高まります。
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">評価設計で相談が多い質問を実務向けにまとめました。</p>
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
          <h2 id="related-links" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            関連リンク
          </h2>
          <ul className="mt-5 space-y-2 text-sm leading-7 text-gray-700">
            <li>
              <Link href="/academy/blog/ai-poc-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI PoCの進め方（30日テンプレ）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-deployment-checklist" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェント導入チェックリスト
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIで情報漏えいが起きるパターン10選
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
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            評価設計を「運用できる状態」まで進める
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、実務で使える生成AI活用力を鍛えるだけでなく、自己理解・キャリアデザインを深め、仲間と共に学ぶ環境の中で導入判断と運用設計を
            進められます。評価設計と運用ルールを現場で実装したい場合は、以下から次の一歩に進んでください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーで学習プランを見る
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINEで週1AI通信を受け取る（無料）
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
