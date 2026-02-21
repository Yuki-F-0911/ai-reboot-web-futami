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

type OpenaiCodexAppGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=openai-codex-app-guide";

const keywordTags = ["Codex App 使い方", "OpenAI Codex", "macOS AIコーディング", "Codex 運用"] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "what-is-codex-app", label: "macOS版Codex Appとは" },
  { id: "spark-vs-classic", label: "運用モードの整理（本記事ラベル）" },
  { id: "local-security", label: "ローカル読み取りとセキュリティ" },
  { id: "setup", label: "インストール〜初回使用手順" },
  { id: "tool-chart", label: "Cursor/Claude Codeとの使い分け" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "Codex Appは、2026年2月時点でmacOS向けAIコーディング実行アプリとして注目されています。",
  "本記事では便宜上、探索フェーズと実装フェーズを分けて解説しています（Spark/Classicは記事内ラベル）。",
  "ローカルコードの取り扱いは「対象ディレクトリ限定」「除外ルール」「監査ログ確認」をセットで設計するのが基本です。",
  "CursorやClaude Codeと競合ではなく、IDE補完・CLI自動化・デスクトップ実行を役割分担すると実務で再現性が出ます。",
] as const;

const sparkClassicRows = [
  {
    axis: "主な役割",
    spark: "要件探索・アイデア展開・複数案の提示",
    classic: "実装反復・差分修正・安定運用",
  },
  {
    axis: "向いている工程",
    spark: "設計初期、仕様揺れが大きい段階",
    classic: "仕様確定後の修正と検証",
  },
  {
    axis: "出力の傾向",
    spark: "幅広い提案を短時間で返しやすい",
    classic: "一貫した形式で出力しやすい",
  },
  {
    axis: "運用のコツ",
    spark: "比較観点を指定して提案を絞る",
    classic: "対象ファイルと完了条件を固定する",
  },
] as const;

const securityChecklist = [
  "読み取り対象ディレクトリをプロジェクト単位で限定する",
  "`.env` や秘密鍵ファイルを除外パターンへ登録する",
  "初期は読み取り専用で開始し、編集権限を段階解放する",
  "操作ログを残し、誰が何を実行したか追跡できる状態にする",
  "社外持ち出し不可データの分類ルールを先に決める",
] as const;

const setupSteps = [
  {
    step: "Step 1. macOS版Codex Appをインストール",
    body: "配布ページからアプリを導入し、初回起動時にアカウント連携を行います。利用規約と組織ポリシーを先に確認してください。",
  },
  {
    step: "Step 2. プロジェクトルートと権限を設定",
    body: "作業対象フォルダを選択し、読み取り/編集権限を決めます。最初は編集範囲を絞ると意図しない変更を防げます。",
  },
  {
    step: "Step 3. 探索フェーズで要件案、実装フェーズで差分化する",
    body: "要件候補を比較した後、受け入れ条件を固定して実装へ落とす流れが安定します。",
  },
  {
    step: "Step 4. 差分確認とテストで完了条件を満たす",
    body: "出力をそのまま採用せず、差分レビュー・テスト・ロールバック案の確認までを1セットで実施します。",
  },
] as const;

const toolRows = [
  {
    tool: "Codex App",
    bestFor: "macOS上でプロジェクト単位の実装タスクを進める",
    strength: "デスクトップ実行と権限設定の一体運用",
  },
  {
    tool: "Cursor",
    bestFor: "IDE内で補完・編集・レビューを高速に回す",
    strength: "視覚的にコードを追いながら改善しやすい",
  },
  {
    tool: "Claude Code",
    bestFor: "CLI中心で実装・テスト・修正を連続実行する",
    strength: "複数ファイル横断の反復に強い",
  },
] as const;

export default function OpenaiCodexAppGuidePage({ faqItems }: OpenaiCodexAppGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Codex App使い方ガイド" },
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
                title="Codex App使い方ガイド｜macOS版の始め方と運用ポイント【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Codex App使い方ガイド｜macOS版の始め方と運用ポイント【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Codex Appは、macOS上で要件整理から実装補助までを一気通貫で扱える新しい実行体験として注目されています。単純なコード補完ツールではなく、
            作業単位でAIに任せる運用へ移行するチームが増えています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では運用フェーズごとの使い分け、ローカルコード読み取りの安全設計、初回セットアップ手順、CursorやClaude Codeとの役割分担を整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="what-is-codex-app"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">2026年2月時点のmacOS版Codex Appとは</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Codex Appは、エディタ拡張単体ではなく、プロジェクト単位の実行タスクを管理しやすい形で提供される点が特徴です。要件を与えて差分を確認する流れが明確なため、
            タスク管理とコード修正を同じ文脈で進められます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            ただし生産性はツール名では決まりません。対象範囲、完了条件、レビュー手順を固定して初めて実務で再現性が出ます。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            Codex AppはmacOS向け提供です。CLI・IDE・webなど他導線の提供範囲は別管理のため、詳細は公式サイトをご確認ください（確認日: 2026-02-21）。
          </p>
        </motion.section>

        <motion.section
          id="spark-vs-classic"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">運用モードの整理（本記事ラベル）</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">探索フェーズ（記事内ラベル）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実装フェーズ（記事内ラベル）</th>
                </tr>
              </thead>
              <tbody>
                {sparkClassicRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.spark}</td>
                    <td className="py-4 pl-4">{row.classic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            ※「Spark」「Classic」は本記事内の便宜上ラベルです。詳細は公式サイトをご確認ください（確認日: 2026-02-21）。
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            href={lineUrl}
          />
        </motion.section>

        <motion.section
          id="local-security"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ローカルコード読み取りの仕組みとセキュリティ</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ローカルコード活用で最も重要なのは、AI性能より情報境界です。読ませる範囲を限定し、出してはいけない情報を先に除外する設定が必要です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {securityChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="setup"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">インストール〜初回使用の手順</h2>
          <div className="mt-6 space-y-4">
            {setupSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="tool-chart"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Cursor / Claude Codeとの使い分けチャート</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている作業</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">強み</th>
                </tr>
              </thead>
              <tbody>
                {toolRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.bestFor}</td>
                    <td className="py-4 pl-4">{row.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIコーディング全体の比較は
            <Link
              href="/academy/blog/ai-coding-tool-comparison-2026"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIコーディングツール比較 2026年版
            </Link>
            も参考にしてください。
          </p>
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
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Codex AppはmacOS上でタスク単位のAI実装を進めたいユーザーと相性が高いです。</li>
            <li className="pl-1 marker:text-gray-500">探索フェーズと実装フェーズを工程で分けると、試行錯誤と仕上げの両立がしやすくなります。</li>
            <li className="pl-1 marker:text-gray-500">ローカルコード運用は、技術選定より権限境界と監査設計を先に整えることが重要です。</li>
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-emerald-200 bg-emerald-50 p-6"
            href={lineUrl}
          />
        </motion.section>
      </article>
    </main>
  );
}
