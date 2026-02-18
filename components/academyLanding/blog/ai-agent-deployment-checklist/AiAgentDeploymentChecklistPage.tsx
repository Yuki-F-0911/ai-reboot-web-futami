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

type AiAgentDeploymentChecklistPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AIエージェント 導入", "権限設計", "ログ管理", "承認フロー"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-agent", label: "AIエージェントとは？" },
  { id: "permission-design", label: "権限設計の基本" },
  { id: "logging-design", label: "ログ管理の設計" },
  { id: "approval-flow", label: "承認フローの設計" },
  { id: "security", label: "セキュリティ対策" },
  { id: "checklist", label: "導入チェックリスト" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "CTA" },
] as const;

const permissionRows = [
  {
    resource: "社内データ（閲覧）",
    operations: "Read",
    example: "社内Wiki/ナレッジの検索・要約",
    guard: "対象データ区分 + 参照範囲の固定",
  },
  {
    resource: "業務データ（作成/更新）",
    operations: "Create / Update",
    example: "CRMにドラフト作成、チケット更新（下書き）",
    guard: "下書き限定 + 担当者レビュー",
  },
  {
    resource: "破壊的操作（削除/外部送信）",
    operations: "Delete / Export",
    example: "レコード削除、顧客への送信、外部ストレージ共有",
    guard: "高リスク扱い + 上長承認 + ロールバック",
  },
  {
    resource: "一時的な権限昇格",
    operations: "Elevate (TTL)",
    example: "限定期間だけの書き込み許可",
    guard: "時間制限 + 監査ログ + 期限切れ自動剥奪",
  },
] as const;

const logItems = [
  { title: "入力内容（Input）", body: "ユーザー入力・参照データの識別子（機密度に応じてマスキング）" },
  { title: "出力内容（Output）", body: "ユーザーへ返した結果・作成した下書きの差分" },
  { title: "使用ツール（Tools）", body: "呼び出したAPI/DB/外部サービス名とパラメータ（必要最小限）" },
  { title: "実行時間（Time）", body: "開始/終了、タイムアウト、再試行回数" },
  { title: "実行者（Actor）", body: "ユーザー/サービスアカウント、セッションID、権限ロール" },
  { title: "判断根拠（Rationale）", body: "なぜその操作を行ったか（ルール/承認ID/参照根拠）" },
] as const;

const checklistRows = [
  {
    category: "権限",
    item: "対象業務ごとにPoLP（最小権限）でロールを定義している",
    done: "業務→必要ツール→必要操作（CRUD）が表で説明できる",
  },
  {
    category: "権限",
    item: "CRUDを分離し、Delete/外部送信は別ロール（または原則禁止）にしている",
    done: "削除・送信がデフォルトで実行できず、例外は承認必須",
  },
  {
    category: "権限",
    item: "リソース別（顧客/契約/請求/社内文書など）の権限マトリクスを用意している",
    done: "どのデータに触れるかを説明でき、監査で追える",
  },
  {
    category: "権限",
    item: "一時的な権限昇格（TTL）と自動剥奪が設計されている",
    done: "期限切れで自動的に権限が戻り、昇格履歴が残る",
  },
  {
    category: "ログ",
    item: "最小6項目（入力/出力/ツール/時間/実行者/根拠）を記録している",
    done: "事故時に「誰が何を根拠に何をしたか」を再現できる",
  },
  {
    category: "ログ",
    item: "ログレベル（INFO/WARN/ERROR/AUDIT）と監査ログの分離ができている",
    done: "監査ログが改ざん耐性のある保管先に集約される",
  },
  {
    category: "ログ",
    item: "保存期間・アーカイブ・削除のポリシーが定義されている",
    done: "機密度/法務要件に応じた保持期間が決まっている",
  },
  {
    category: "承認",
    item: "リスクレベル（低/中/高）と承認方式（自動/担当者/上長）が決まっている",
    done: "実行前にリスク判定でき、承認者が明確",
  },
  {
    category: "承認",
    item: "ヒューマンインザループの設置ポイント（対外送信/削除/重要更新）が固定されている",
    done: "重要操作は必ず人の確認で止まる",
  },
  {
    category: "承認",
    item: "エスカレーション（代理承認/時間切れ/緊急停止）のルールがある",
    done: "承認待ちで業務が止まらず、緊急停止できる",
  },
  {
    category: "セキュリティ",
    item: "プロンプトインジェクション対策（命令分離/ツール制約/出力検査）を実装している",
    done: "悪意ある入力でも危険操作が実行されない",
  },
  {
    category: "セキュリティ",
    item: "入出力バリデーション（PII/機微データ/禁止語）とマスキング方針がある",
    done: "機密情報が外部へ出ない/ログに残らない設計になっている",
  },
  {
    category: "セキュリティ",
    item: "APIキー/シークレット管理（Vault/環境変数/権限分離）ができている",
    done: "鍵がコード・プロンプト・ログに混入しない",
  },
  {
    category: "運用",
    item: "ロールバック手順（取り消し/差し戻し/復旧）を用意している",
    done: "誤操作時に復旧でき、責任分界が明確",
  },
  {
    category: "運用",
    item: "監視（成功率/介入率/危険操作ブロック/コスト）と改善サイクルがある",
    done: "定例でログを見て改善できる",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function AiAgentDeploymentChecklistPage({ faqItems }: AiAgentDeploymentChecklistPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIエージェント導入チェックリスト" },
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
                title="AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIエージェント導入チェックリスト｜権限・ログ・承認フローの作り方【2026年版】
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AIエージェントは、ツールを使って<span className="font-semibold text-gray-900">環境に作用する</span>ため、チャットAIよりも事故の影響が大きくなります。
            だからこそ、導入前に「権限・ログ・承認」を設計し、最小構成で安全に回せる状態を作ることが重要です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、エージェントの統制設計（権限/ログ/承認）をひと通り整理し、最後に導入チェックリスト（15項目）をテーブルでまとめます。
            小規模チームでも、そのまま導入判断に使えるように書きました。
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
            要点まとめ：AIエージェント導入は「権限・ログ・承認」で安全性が決まる
          </h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIエージェントは自律的に動くため、チャットAI以上に<span className="font-semibold text-gray-900">「権限・ログ・承認」</span>の設計が重要
            </li>
            <li className="pl-1 marker:text-gray-500">
              最小権限原則（PoLP）とヒューマンインザループで、安全性と運用可能性を両立する
            </li>
            <li className="pl-1 marker:text-gray-500">チェックリストで導入前に抜け漏れを防ぎ、事故時に止血できる状態にする</li>
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
          <h2 id="what-is-agent" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェントとは？なぜ統制が必要なのか
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIエージェントは、目標に向けて「計画 → 実行 → 観察 → 修正」を繰り返しながら、ツールを使ってタスクを完了に近づける仕組みです。
            重要なのは、<span className="font-semibold text-gray-900">出力するだけでなく、実行する</span>点です。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">チャットボット/Copilotとの違い</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            定義と導入ステップの全体像は
            <Link href="/academy/blog/what-is-ai-agent" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは？
            </Link>
            にまとめています。本記事では「統制」をテーマに、権限・ログ・承認に絞って整理します。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">エージェント特有のリスク</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { title: "連鎖実行", body: "小さな判断が次の操作を呼び、想定外の連続アクションになる。" },
              { title: "権限エスカレーション", body: "強い権限を持つツールがあると、意図せず高リスク操作に到達する。" },
              { title: "プロンプトインジェクション", body: "悪意ある入力でルール逸脱を誘発し、ツール操作を乗っ取られる。" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-sm font-semibold tracking-wide text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
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
          <h2 id="permission-design" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            権限設計の基本
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            権限設計は「どこまで自動化できるか」を決める設計です。最初から強い権限を渡すのではなく、読み取り中心 → 下書き作成 → 承認付き実行の順に段階的に広げます。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">最小権限原則（PoLP）とCRUD分離</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Read / Create / Update / Delete を分け、Deleteは原則「別ロール＋承認」にします。</li>
            <li className="pl-1 marker:text-gray-500">外部送信（メール送信、ファイル共有、API連携）は「高リスク操作」として扱います。</li>
            <li className="pl-1 marker:text-gray-500">リソース単位（顧客・契約・請求・社内文書など）でアクセス範囲を固定します。</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">権限設計テーブル（例）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">リソース</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">操作</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">ガード（最低限）</th>
                </tr>
              </thead>
              <tbody>
                {permissionRows.map((row) => (
                  <tr key={row.resource} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.resource}</th>
                    <td className="py-4 px-4">{row.operations}</td>
                    <td className="py-4 px-4">{row.example}</td>
                    <td className="py-4 pl-4">{row.guard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">時間制限付き権限（昇格はTTLで管理）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            「必要なときだけ強い権限」を実現するには、期限付きトークン/一時ロール（TTL）を使い、期限切れで自動的に剥奪する設計が効果的です。
            恒常的な強権限は、運用で必ず破綻します。
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
          <h2 id="logging-design" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ログ管理の設計
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            エージェント運用で最も重要なのは「再現できること」です。事故が起きたとき、誰が・何を・なぜ実行したかが追えないと、止血も改善もできません。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">最低限記録すべき6項目</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {logItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-sm font-semibold tracking-wide text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">ログレベル（INFO/WARN/ERROR/AUDIT）</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">INFO:</span> 通常のタスク実行（成功）を記録
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">WARN:</span> 想定外入力・再試行・バリデーション失敗（ブロック含む）
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">ERROR:</span> 実行失敗（タイムアウト、権限不足、ツール障害）
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">AUDIT:</span> 承認付き実行・権限昇格・外部送信・削除など（改ざん耐性が重要）
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">保存期間とアーカイブ方針</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ログは「何でも長期保存」が正解ではありません。機密度・法務要件・コストに応じて、保存期間とアーカイブ（集計/匿名化）を設計します。
            監査ログ（AUDIT）は、改ざん検知とアクセス制御を前提に別保管するのが安全です。
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
          <h2 id="approval-flow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            承認フローの設計
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            承認フローは「事故をゼロにする」ためではなく、<span className="font-semibold text-gray-900">事故の芽を重要ポイントで止める</span>ための仕組みです。
            リスクレベルでルールを固定すると、現場の迷いが減り、運用も回ります。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">リスクレベル別（低/中/高）の基本形</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "低リスク",
                badge: "自動承認",
                body: "閲覧・要約・下書き作成など。環境を壊さず、外部送信しない。",
              },
              {
                title: "中リスク",
                badge: "担当者承認",
                body: "更新を伴う操作（下書き→反映）、顧客に影響する変更の提案など。",
              },
              {
                title: "高リスク",
                badge: "上長承認",
                body: "削除・外部送信・大量更新・権限昇格など。ロールバック前提で設計する。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold tracking-wide text-gray-900">{item.title}</h4>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">{item.badge}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">承認フロー図（最小構成）</h3>
          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <ol className="grid gap-3 text-sm leading-7 text-gray-700 sm:grid-cols-3">
              <li className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-xs font-semibold tracking-wide text-gray-500">Step 1</div>
                <div className="mt-1 font-semibold text-gray-900">リスク判定</div>
                <div className="mt-2">操作種別（CRUD/送信/削除）と対象データで自動分類</div>
              </li>
              <li className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-xs font-semibold tracking-wide text-gray-500">Step 2</div>
                <div className="mt-1 font-semibold text-gray-900">承認（必要時）</div>
                <div className="mt-2">中: 担当者 / 高: 上長（承認IDを発行）</div>
              </li>
              <li className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-xs font-semibold tracking-wide text-gray-500">Step 3</div>
                <div className="mt-1 font-semibold text-gray-900">実行 + 監査ログ</div>
                <div className="mt-2">実行結果と根拠をAUDITに保存し、ロールバック導線を残す</div>
              </li>
            </ol>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">ヒューマンインザループの設置ポイント</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">顧客への送信（メール/チャット/請求/契約）</li>
            <li className="pl-1 marker:text-gray-500">削除・大量更新・権限昇格など不可逆/影響範囲が広い操作</li>
            <li className="pl-1 marker:text-gray-500">不確実な判断（根拠不足、データ不整合、例外申請）</li>
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
          <h2 id="security" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            セキュリティ対策
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            セキュリティの本質は「エージェントを賢くする」ことではなく、「危険な操作に到達させない」ことです。権限・入力・ネットワークの境界で守ります。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">プロンプトインジェクション対策</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">命令（ポリシー）とデータ（ユーザー入力/外部文書）を分離し、データ側の命令を無効化する</li>
            <li className="pl-1 marker:text-gray-500">ツール呼び出しは許可リスト方式にし、パラメータを検査してから実行する</li>
            <li className="pl-1 marker:text-gray-500">危険操作は常に承認を挟み、実行前後で整合性チェックを行う</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">データの入出力バリデーション</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            入力は機密区分（PII/機微/社外秘）で判定し、必要に応じてマスキングします。出力は「対外送信してよい情報か」を検査し、違反があれば自動でブロックします。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">APIキーとシークレットの管理</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            シークレットはコード・プロンプト・ログに混入しない設計が前提です。環境変数/Vault等で管理し、権限分離（読み取り専用/書き込み専用）と定期ローテーションを行います。
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">ネットワーク分離とサンドボックス</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            実行環境は最小限のネットワーク到達性にし、危険な外部アクセスや未承認ドメインへの通信を遮断します。可能ならサンドボックスでツール実行を隔離し、被害半径を小さくします。
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
          <h2 id="checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入チェックリスト（15項目）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「導入できるか」ではなく「運用できるか」を確認します。エージェントは事故後の対応コストが高いので、最低限の項目だけでも先に埋めてから進めるのが安全です。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">カテゴリ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">チェック項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">完了基準</th>
                </tr>
              </thead>
              <tbody>
                {checklistRows.map((row, index) => (
                  <tr key={`${row.category}-${index}`} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.category}</th>
                    <td className="py-4 px-4">{row.item}</td>
                    <td className="py-4 pl-4">{row.done}</td>
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
          <p className="mt-5 text-base leading-8 text-gray-700">導入相談で多い質問を、統制（権限・ログ・承認）の観点でまとめます。</p>

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
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方｜仕組み・開発手順・活用パターンを解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-mcp" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                MCP（Model Context Protocol）とは？
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                アカデミーTOP
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
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              AIエージェントは自律的に動くため、導入前に<span className="font-semibold text-gray-900">権限・ログ・承認</span>の設計が必要です。
            </li>
            <li className="pl-1 marker:text-gray-500">PoLP（最小権限）とヒューマンインザループで、運用可能な安全性を作れます。</li>
            <li className="pl-1 marker:text-gray-500">チェックリスト（15項目）を埋めれば、少人数でも事故後に止血できる運用に近づきます。</li>
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
            まずは「安全に動く導入設計」から整えましょう
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            エージェントは「作れる」よりも「運用できる」が難しい領域です。権限・ログ・承認の設計から、導入ロードマップや社内合意形成までまとめて進めたい方は、
            無料セミナーや相談窓口をご活用ください。
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
              LINEで相談する
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

