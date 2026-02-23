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

type AssistantsApiMigrationChecklist2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Assistants API 移行 2026",
  "Assistants API sunset",
  "OpenAI Responses API 移行",
  "Chat Completions 移行",
] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "background", label: "移行が必要な背景" },
  { id: "checklist", label: "移行チェックリスト（10項目）" },
  { id: "pitfalls", label: "よくある落とし穴と対策" },
  { id: "schedule", label: "移行スケジュールの考え方" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerBoxPoints = [
  "OpenAI公式ではAssistants APIのtarget shutdown dateが2026年8月26日と案内されています。",
  "移行先はResponses APIが推奨されますが、Chat Completions APIも継続サポート対象です。",
  "期限直前の一括移行は高リスクです。機能棚卸し→段階切替→運用更新の順で進めてください。",
  "移行成功の鍵は、API置換より先に運用責任と監査要件を明確化することです。",
] as const;

const backgroundCards = [
  {
    title: "背景1: Assistants APIはdeprecated",
    body: "OpenAI公式ガイドでAssistants APIのdeprecatedが明示され、target shutdown dateは2026-08-26と案内されています。",
  },
  {
    title: "背景2: 機能統合が進んでいる",
    body: "Responses APIはツール連携や会話状態管理を一貫して扱える設計で、今後の拡張を見据えた基準になっています。",
  },
  {
    title: "背景3: 運用リスクは技術以外でも発生する",
    body: "エンドポイント変更だけでなく、監査ログ、運用手順、権限設計、人員教育も再設計が必要です。",
  },
] as const;

const migrationChecklist = [
  {
    step: "1. 対象機能を棚卸しする",
    detail: "Assistants API依存機能（会話、ツール、ファイル検索、実行ジョブ）を一覧化し、優先順位を決める。",
  },
  {
    step: "2. Assistants→Responses/Chat Completionsのマッピング表を作る",
    detail: "OpenAI公式の移行ガイドを基準に、機能単位で置き換え先を確定する。",
  },
  {
    step: "3. SDKとモデル対応を固定する",
    detail: "SDKバージョン差による挙動差を避けるため、対象バージョンとサポートモデルを固定して検証する。",
  },
  {
    step: "4. 会話ステート管理を再設計する",
    detail: "`previous_response_id` や会話IDの保持ルールを明確化し、履歴崩れを防ぐ。",
  },
  {
    step: "5. ツール権限を最小化する",
    detail: "web search / file search / function calling の利用範囲を用途ごとに分離し、過剰権限を防ぐ。",
  },
  {
    step: "6. 出力フォーマットを固定する",
    detail: "JSON schemaや固定テンプレートで後続処理の破綻を防ぎ、移行前後で比較しやすくする。",
  },
  {
    step: "7. 監査ログとメトリクスを追加する",
    detail: "失敗率、再実行率、平均処理時間、手動復旧件数を追跡可能にし、運用改善につなげる。",
  },
  {
    step: "8. ロールバック手順を先に用意する",
    detail: "不具合発生時に旧処理へ戻す条件と復旧手順を定義し、切替リスクを下げる。",
  },
  {
    step: "9. 運用ドキュメントと社内規程を更新する",
    detail: "API仕様変更に合わせて、データ取扱い・レビュー責任・障害対応フローを更新する。",
  },
  {
    step: "10. 利用部門への説明と教育を実施する",
    detail: "利用者が変更点を理解していないと運用事故が増えるため、仕様変更の周知を必ず行う。",
  },
] as const;

const pitfallRows = [
  {
    issue: "パラメータ対応の不一致",
    symptom: "移行後にリクエストエラーが増える",
    solution: "移行先APIの正式パラメータへ置換し、モデル対応表をチェックする",
  },
  {
    issue: "会話ステート引き継ぎ漏れ",
    symptom: "文脈が失われ、回答品質が不安定になる",
    solution: "会話ID保存と再送処理を統合テストで検証する",
  },
  {
    issue: "ツール権限の過剰設定",
    symptom: "不要な外部アクセスや監査不能な処理が発生する",
    solution: "最小権限と目的別分離を徹底し、許可リスト運用にする",
  },
  {
    issue: "期限直前の一括移行",
    symptom: "テスト不足のまま本番切替になり障害が増える",
    solution: "機能単位で段階移行し、各段階で品質ゲートを通す",
  },
  {
    issue: "ChatGPT契約とAPI課金の混同",
    symptom: "予算管理と責任範囲が曖昧になる",
    solution: "契約・請求・管理責任者を分離し、部門別に費用管理する",
  },
] as const;

const schedulePhases = [
  {
    phase: "Phase 1（今すぐ〜2週間）",
    goal: "現状把握と優先順位決定",
    actions: [
      "Assistants API利用箇所の棚卸し",
      "移行対象の優先順位付け",
      "関係者（開発・運用・監査）の役割定義",
    ],
  },
  {
    phase: "Phase 2（3〜6週間）",
    goal: "段階移行と検証",
    actions: [
      "低リスク機能からResponses APIへ移行",
      "会話ステートとツール権限の統合テスト",
      "移行前後の品質・コスト比較",
    ],
  },
  {
    phase: "Phase 3（7週間以降）",
    goal: "本番展開と運用定着",
    actions: [
      "高リスク機能の切替と監視強化",
      "ロールバック手順の演習",
      "社内規程・教育資料の最終更新",
    ],
  },
] as const;

const scheduleNotes = [
  "sunset日（2026-08-26）から逆算して、最低2か月前に本番切替を終える計画が安全",
  "機能ごとにGo/No-Go判定を置き、失敗時は次フェーズへ進まない",
  "経営報告には、期限リスク・業務影響・コスト見通しを1枚で可視化する",
] as const;

export default function AssistantsApiMigrationChecklist2026Page({ faqItems }: AssistantsApiMigrationChecklist2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Assistants API移行チェックリスト2026" },
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
                title="Assistants API移行チェックリスト2026｜Responses API/Chat Completions移行手順"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Assistants API移行チェックリスト2026｜Responses API/Chat Completions移行手順
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            Assistants APIのsunsetに向けて、法人AI担当者とエンジニアが最短で移行計画を立てられるよう、公式情報ベースでチェックリストを整理しました。期限直前の一括移行を避け、段階的に安全移行するための実務手順をまとめています。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">結論（Answer Box）</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {answerBoxPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-xs leading-6 text-gray-500">確認日: 2026-02-21（sunset日・仕様は公式更新により変更される可能性があります）</p>
        </motion.section>

        <motion.section
          id="background"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">移行が必要な背景: sunset予定とAPI設計の変化</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            移行は「将来検討」ではなく、期限付きの運用課題です。OpenAIの公式情報を基準に、移行理由を技術と運用の両面で理解しておく必要があります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {backgroundCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Responses APIの基礎仕様は
            <Link href="/academy/blog/openai-responses-api-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              OpenAI Responses API実装ガイド
            </Link>
            で先に確認しておくと、移行作業の見積もりがしやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="checklist"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">移行チェックリスト（10項目）: 期限までに完了すべき実務作業</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            次の10項目を上から順に完了させると、移行リスクを段階的に下げられます。技術作業と運用作業を必ずセットで進めてください。
          </p>
          <div className="mt-6 space-y-4">
            {migrationChecklist.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            社内のAI利用ルール整備が未着手の場合は、
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIガイドライン雛形
            </Link>
            を併用して、API移行と運用ルール更新を同時に進める形が有効です。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="pitfalls"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある移行の落とし穴と対策: 失敗パターンを先に潰す</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            失敗の多くは「コードを書き換えたら終わり」という認識から起きます。事前に発生しやすい症状を把握しておくと、障害対応コストを大きく下げられます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">落とし穴</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">症状</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">対策</th>
                </tr>
              </thead>
              <tbody>
                {pitfallRows.map((row) => (
                  <tr key={row.issue} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.issue}</th>
                    <td className="px-4 py-4">{row.symptom}</td>
                    <td className="py-4 pl-4">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="schedule"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">移行スケジュールの考え方: sunset日から逆算して段階切替する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            2026年8月26日を締切と見なすだけでは遅れます。検証・本番展開・運用安定化の期間を確保するため、逆算スケジュールで管理することが必須です。
          </p>
          <div className="mt-6 space-y-4">
            {schedulePhases.map((phase) => (
              <section key={phase.phase} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">
                  {phase.phase}: {phase.goal}
                </h3>
                <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {phase.actions.map((action) => (
                    <li key={action} className="blog-li pl-1 marker:text-gray-500">
                      {action}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <ul className="blog-ul mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {scheduleNotes.map((note) => (
              <li key={note} className="blog-li pl-1 marker:text-gray-500">
                {note}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            API運用の全体像を見直す場合は、
            <Link href="/academy/blog/ai-agent-operations-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェント運用ガイド
            </Link>
            も参考になります。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="mb-4 scroll-mt-28 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/openai-responses-api-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Responses API実装ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/openai-operator-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Operator使い方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIガイドライン雛形
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                法人向けAI導入ガイド
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="blog-h2 mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定APIの操作習得を目的にした場ではありません。生成AI活用力を実務に接続し、自己理解とキャリアデザインを深めながら、仲間と共に学び続ける環境を一体で設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">生成AI活用力: 業務要件に合わせてAI活用を判断し、実務成果へつなげる</li>
            <li className="blog-li pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を可視化し、次のキャリアを具体化する</li>
            <li className="blog-li pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で改善サイクルを継続する</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
