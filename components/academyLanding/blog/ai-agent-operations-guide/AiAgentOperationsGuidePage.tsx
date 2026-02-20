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

type AiAgentOperationsGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AIエージェント 導入", "AI業務自動化 始め方", "権限設計", "承認フロー"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: 導入は順番で成否が決まる" },
  { id: "scope-design", label: "導入前の業務選定フレーム" },
  { id: "template", label: "【コピペ可】導入チェックシート" },
  { id: "roadmap", label: "30日導入プラン" },
  { id: "risk-management", label: "権限・承認・停止手順の実務" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "cta", label: "AIリブートアカデミーで次のステップへ" },
] as const;

const automationStageRows = [
  {
    stage: "参照",
    examples: "ナレッジ検索、要約、分類、タグ付け",
    risk: "低",
    guard: "入力制限 + ログ保存",
  },
  {
    stage: "下書き",
    examples: "メール草案、議事録草案、FAQ候補作成",
    risk: "中",
    guard: "担当者レビュー + 変更履歴",
  },
  {
    stage: "実行",
    examples: "顧客送信、データ更新、外部連携実行",
    risk: "高",
    guard: "承認ID必須 + 監査ログ + ロールバック",
  },
] as const;

const rolloutChecklistRows = [
  {
    category: "業務選定",
    item: "対象業務を参照/下書き/実行の3区分で定義した",
    done: "高リスク操作を後回しにした導入順序を説明できる",
  },
  {
    category: "業務選定",
    item: "開始業務を2件以内に絞り、成功条件を数値化した",
    done: "処理時間・品質・事故件数の目標値が決まっている",
  },
  {
    category: "権限",
    item: "最小権限（PoLP）でロールと操作範囲を定義した",
    done: "Delete/外部送信がデフォルトで実行不可",
  },
  {
    category: "権限",
    item: "一時権限昇格（TTL）と自動剥奪ルールを設計した",
    done: "昇格履歴が監査ログに残る",
  },
  {
    category: "承認",
    item: "低/中/高リスクで承認者を固定した",
    done: "承認待ちと緊急停止の導線がある",
  },
  {
    category: "承認",
    item: "ヒューマンインザループの設置ポイントを定義した",
    done: "対外送信・削除・大量更新は必ず人が確認する",
  },
  {
    category: "監査",
    item: "入力/出力/実行者/時間/根拠/承認IDを記録する",
    done: "事故時に5分以内で実行履歴を追跡できる",
  },
  {
    category: "監査",
    item: "ログ保持期間と保管先の責任者を決めた",
    done: "監査要求に対して履歴を提出できる",
  },
  {
    category: "停止手順",
    item: "キルスイッチ（緊急停止）を実装した",
    done: "誤動作時に実行を即時停止できる",
  },
  {
    category: "停止手順",
    item: "ロールバック手順と復旧責任者を定義した",
    done: "誤更新を差し戻す手順が手順書化されている",
  },
] as const;

const setupTemplate = `# AI業務自動化 導入前シート（最小版）

## 1. 対象業務
- 業務名:
- 業務目的:
- 現在の処理時間:
- 失敗時の影響:
- 自動化区分: 参照 / 下書き / 実行

## 2. 権限設計
- 利用ロール:
- 利用ツール:
- 許可操作（CRUD）:
- 禁止操作:
- 一時権限昇格（TTL）:

## 3. 承認設計
- 低リスク（自動承認）:
- 中リスク（担当者承認）:
- 高リスク（上長承認）:
- 承認ID採番ルール:

## 4. 監査ログ
- 保存項目（入力/出力/実行者/時間/根拠/承認ID）:
- 保管先:
- 保持期間:
- 閲覧権限:

## 5. 緊急対応
- キルスイッチ実行方法:
- ロールバック手順:
- 連絡先（責任者）:
`;

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function AiAgentOperationsGuidePage({ faqItems }: AiAgentOperationsGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI業務自動化の始め方" },
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
                title="AI業務自動化の始め方｜AIエージェント導入を失敗させない運用設計ガイド【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI業務自動化の始め方｜AIエージェント導入を失敗させない運用設計ガイド【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIエージェント導入は、ツール選定より「どの業務から、どの順番で自動化するか」で結果が大きく変わります。多くの失敗は、導入初期に高リスク業務へ
            直接入ってしまうことと、承認・ログ・停止手順が未設計なことが原因です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、AI業務自動化の始め方を<span className="font-semibold text-gray-900">業務選定、権限設計、承認フロー、監査ログ、緊急停止</span>の順に整理します。
            チェックシートを埋めながら進めれば、現場で回る導入計画を作れます。
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
            結論: AIエージェント導入は「業務選定→権限→承認→監視」の順で進める
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            いきなり高度な自動化を狙うほど失敗しやすくなります。最初は低リスク業務で検証し、承認が必要な範囲を明確化し、ログで振り返る運用を先に作ることが
            最短ルートです。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">導入初期は「参照・下書き」中心で失敗コストを抑える。</li>
            <li className="pl-1 marker:text-gray-500">対外送信や削除は承認付き実行に限定する。</li>
            <li className="pl-1 marker:text-gray-500">事故対応のためにキルスイッチとロールバックを必ず用意する。</li>
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
          <h2 id="scope-design" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入前の業務選定フレーム: 参照・下書き・実行で分類する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI業務自動化の成否は、対象業務の切り方で決まります。業務を3段階に分けると、どこまで自動化できるかと、どこで人が介入すべきかを明確にできます。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">3分類の設計テーブル</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">自動化段階</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">業務例</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">リスク</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">必要ガード</th>
                </tr>
              </thead>
              <tbody>
                {automationStageRows.map((row) => (
                  <tr key={row.stage} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.stage}</th>
                    <td className="py-4 px-4">{row.examples}</td>
                    <td className="py-4 px-4">{row.risk}</td>
                    <td className="py-4 pl-4">{row.guard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">最初に選ぶべき業務の条件</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">毎週発生し、手作業が多い業務である。</li>
            <li className="pl-1 marker:text-gray-500">失敗しても即時に復旧できる（ロールバック可能）業務である。</li>
            <li className="pl-1 marker:text-gray-500">成果を時間短縮や品質改善で数値化しやすい。</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">失敗しやすい始め方</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">社内ルールがないまま顧客向け送信を自動化する。</li>
            <li className="pl-1 marker:text-gray-500">運用責任者を決めずにツールだけ導入する。</li>
            <li className="pl-1 marker:text-gray-500">ログが残らず、問題が起きても原因分析できない。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="template" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            【コピペ可】導入前チェックシート（権限・承認・監査）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            以下のシートを案件単位で作成すれば、導入前に必要な意思決定を漏れなく確認できます。最初は1案件1シートで十分です。
          </p>
          <div className="mt-5 overflow-x-auto rounded-lg bg-gray-900 p-4">
            <pre className="min-w-[760px] whitespace-pre-wrap break-words text-xs leading-6 text-gray-100">
              <code>{setupTemplate}</code>
            </pre>
          </div>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">導入前チェックリスト（10項目）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">カテゴリ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">チェック項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">完了基準</th>
                </tr>
              </thead>
              <tbody>
                {rolloutChecklistRows.map((row, index) => (
                  <tr key={`${row.category}-${index}`} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.category}</th>
                    <td className="py-4 px-4">{row.item}</td>
                    <td className="py-4 pl-4">{row.done}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
                今すぐ無料で登録する（30秒）
              </a>
              <Link
                href="/academy/blog/ai-agent-deployment-checklist"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
              >
                導入チェックリスト（詳細版）を見る
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
          <h2 id="roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            30日導入プラン: PoCから運用定着まで
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            30日で成果を出すには、開発より運用設計を先行させます。各フェーズで「誰が判断するか」を固定し、属人化を避けます。
          </p>

          <div className="mt-8 space-y-4">
            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">0〜10日: 小さく始める（参照・下書き）</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">対象業務を2件以内に限定し、現状時間を測定する。</li>
                <li className="pl-1 marker:text-gray-500">権限はRead/Create中心で開始し、Delete/送信は禁止する。</li>
                <li className="pl-1 marker:text-gray-500">
                  導入背景を社内共有する際は
                  <Link href="/academy/blog/what-is-ai-agent" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    AIエージェントとは？
                  </Link>
                  の基礎説明を使うと合意形成しやすい。
                </li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">11〜20日: 承認付き実行へ拡張する</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">中リスク操作に担当者承認を導入し、承認IDをログへ記録する。</li>
                <li className="pl-1 marker:text-gray-500">監査ログで失敗ケースを収集し、しきい値を調整する。</li>
                <li className="pl-1 marker:text-gray-500">
                  権限・承認の詳細設計は
                  <Link href="/academy/blog/ai-agent-deployment-checklist" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    AIエージェント導入チェックリスト
                  </Link>
                  を併用する。
                </li>
              </ul>
            </section>

            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">21〜30日: 監視と改善を定例化する</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">週次で処理時間、再実行率、承認介入率、事故件数をレビューする。</li>
                <li className="pl-1 marker:text-gray-500">キルスイッチとロールバックを実際に演習し、復旧時間を測る。</li>
                <li className="pl-1 marker:text-gray-500">
                  業務フロー比較は
                  <Link href="/academy/blog/workflow-automation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                    ワークフロー自動化ツール比較
                  </Link>
                  で適材適所を整理する。
                </li>
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
          <h2 id="risk-management" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            権限・承認・停止手順の実務: 導入後の事故を最小化する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実運用では「失敗しない」より「失敗しても止められる」設計が重要です。特に高リスク操作の扱いは、導入前に文書化しておく必要があります。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">高リスク操作の境界線を固定する</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">顧客への送信、データ削除、大量更新、外部共有を高リスクとして固定する。</li>
            <li className="pl-1 marker:text-gray-500">高リスク操作は上長承認が取れるまで実行不可にする。</li>
            <li className="pl-1 marker:text-gray-500">承認なしで実行された場合は自動停止して監査アラートを出す。</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">インシデント初動を「5分以内」で回せるようにする</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Step 1: キルスイッチで即時停止。</li>
            <li className="pl-1 marker:text-gray-500">Step 2: 対象ログを保全し、影響範囲を確定。</li>
            <li className="pl-1 marker:text-gray-500">Step 3: ロールバックして業務復旧。</li>
            <li className="pl-1 marker:text-gray-500">Step 4: 原因分類と再発防止を翌営業日までに反映。</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">評価運用を併設して改善速度を上げる</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            エージェント運用は、評価がなければ改善しません。品質と安全性の両面評価は
            <Link href="/academy/blog/llm-evaluation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの評価（LLM評価）入門
            </Link>
            の指標を併用すると統一しやすくなります。
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
          <p className="mt-5 text-base leading-8 text-gray-700">導入初期に出やすい質問を、運用設計の観点で整理しました。</p>
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
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-deployment-checklist" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェント導入チェックリスト
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/workflow-automation-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ワークフロー自動化ツール比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形
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
            導入できるだけでなく、運用し続けられる体制を作る
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIリブートアカデミーは、生成AI活用力の習得だけでなく、自己理解・キャリアデザインを通じて実務への落とし込みを進め、仲間と共に学ぶ環境で
            継続的な改善を回せる学習設計を提供しています。業務導入を前に進めたい方は、アカデミー情報とLINE配信を活用してください。
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
              今すぐ無料で登録する（30秒）
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
