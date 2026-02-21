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

type Gpt53GuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["OpenAI最新モデル", "GPT-4o / o3", "GPT-5.3-codex", "Claude Opus 4.6比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "notice", label: "重要注記：GPT-5.3について" },
  { id: "model-map", label: "OpenAIモデル全体マップ" },
  { id: "use-case-table", label: "用途別の使い分け表" },
  { id: "codex-cli", label: "GPT-5.3-codexの使いどころ" },
  { id: "vs-claude", label: "Claude Opus 4.6との比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const modelRows = [
  {
    model: "GPT-4o",
    category: "汎用モデル",
    strengths: "文章生成、要約、説明、日常業務の幅広いタスクを高品質に処理しやすい",
    usage: "提案書、メール、議事録、顧客向け文面の作成",
  },
  {
    model: "GPT-4o mini",
    category: "軽量・高速モデル",
    strengths: "処理速度とコスト効率が高く、繰り返し実行の多い業務に向く",
    usage: "下書き、分類、短文整形、FAQ初稿作成",
  },
  {
    model: "o3",
    category: "推論モデル",
    strengths: "多段の思考が必要な課題で根拠整理や判断プロセスを明確化しやすい",
    usage: "要件定義、意思決定支援、複雑な原因分析",
  },
  {
    model: "o4-mini",
    category: "軽量推論モデル",
    strengths: "推論品質と速度のバランスがよく、日常の検討業務に組み込みやすい",
    usage: "簡易分析、仮説検証、レビュー観点の抽出",
  },
  {
    model: "GPT-5.3-codex",
    category: "コード特化モデル（Codex CLI専用）",
    strengths: "実装、修正、リファクタリング、テスト補助など開発タスクに特化",
    usage: "Codex CLIでのコード生成・変更提案・検証フロー",
  },
] as const;

const useCaseRows = [
  {
    task: "ビジネス文書",
    recommended: "GPT-4o（初稿量産はGPT-4o mini）",
    operation: "4o miniで叩き台を作り、最終版だけ4oで品質調整する",
  },
  {
    task: "データ分析",
    recommended: "o4-mini（複雑な判断はo3）",
    operation: "日次レポートはo4-mini、意思決定を伴う論点整理はo3に切り替える",
  },
  {
    task: "コード生成・改修",
    recommended: "GPT-5.3-codex（Codex CLI）",
    operation: "要件と制約を先に与え、差分レビュー前提で運用する",
  },
  {
    task: "推論タスク",
    recommended: "o3（速度優先時はo4-mini）",
    operation: "論点分解と前提確認を明示し、結論だけでなく判断根拠も出力させる",
  },
] as const;

const codexFlowRows = [
  {
    step: "1. タスク定義",
    detail: "変更目的、制約、受け入れ条件を先に渡す",
  },
  {
    step: "2. 実装生成",
    detail: "GPT-5.3-codexに差分案を作らせる",
  },
  {
    step: "3. 検証",
    detail: "型チェック・テスト・レビューで妥当性を確認する",
  },
  {
    step: "4. 反映",
    detail: "採用差分のみを取り込み、変更理由を記録する",
  },
] as const;

const vsClaudeRows = [
  {
    axis: "使い分けのしやすさ",
    openai: "4o系・o系・Codex系に分けて運用設計しやすい",
    claude: "長文読解や一貫した文章生成を中心に設計しやすい",
  },
  {
    axis: "コードワークフロー",
    openai: "GPT-5.3-codexをCodex CLIで使う開発導線を作りやすい",
    claude: "Claude Codeを起点にした実装・検証フローを組みやすい",
  },
  {
    axis: "推論業務",
    openai: "o3 / o4-miniで難易度に応じて段階的に使い分けしやすい",
    claude: "長文前提の思考整理や説明生成で安定した運用がしやすい",
  },
  {
    axis: "導入判断",
    openai: "業務カテゴリ別にモデルを固定すると再現性が高い",
    claude: "長文中心の業務では優先候補として検討しやすい",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">
        AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）
      </p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        OpenAIモデルの更新点と実務運用の判断軸を、毎週わかりやすく整理して配信しています。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </section>
  );
}

export default function Gpt53GuidePage({ faqItems }: Gpt53GuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "OpenAI最新モデルの使い分けガイド" },
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
                title="OpenAI最新モデルの使い分けガイド【2026年2月版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            OpenAI最新モデルの使い分けガイド【2026年2月版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAIのモデル選択は「最新名」を追うより、業務別に固定ルールを作るほうが成果につながります。本記事では
            GPT-4o / GPT-4o mini / o3 / o4-mini / GPT-5.3-codex を、実務の用途に沿って整理します。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            2026年2月21日時点で誤解されやすい点として、「GPT-5.3」は一般公開モデル名ではありません。この前提を明確にしたうえで、
            文書・分析・コード・推論タスクの使い分けを解説します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              2026年2月21日時点で「GPT-5.3」という一般公開モデル名は存在しません。
            </li>
            <li className="pl-1 marker:text-gray-500">
              実務での主要選択肢は GPT-4o / GPT-4o mini / o3 / o4-mini と、Codex CLI専用の GPT-5.3-codex です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              文書は4o系、推論はo系、コードはGPT-5.3-codexと役割分担すると再現性が上がります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Claude Opus 4.6との比較は優劣ではなく、業務特性に応じた併用設計で判断するのが実践的です。
            </li>
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">情報確認日: 2026年2月21日</p>
        </motion.section>

        <motion.section
          id="notice"
          className="mt-10 rounded-lg border border-red-200 bg-red-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-xl font-bold text-red-900">重要注記：GPT-5.3について</h2>
          <p className="mt-3 text-sm leading-7 text-red-800">
            2026年2月21日時点で「GPT-5.3」は一般公開モデルとして確認できません。本記事では誤解を避けるため、
            実在するモデル名のみを扱います。コード用途での「GPT-5.3-codex」はCodex CLI専用モデルとして整理します。
          </p>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="model-map"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">OpenAIモデル全体マップ</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モデル選定は「最強モデル」探しではなく、業務カテゴリごとの配備で考えると失敗が減ります。以下の5モデルを基準に運用ルールを作るのが実務的です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">分類</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">主な用途</th>
                </tr>
              </thead>
              <tbody>
                {modelRows.map((row) => (
                  <tr key={row.model} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.model}</th>
                    <td className="px-4 py-4">{row.category}</td>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="py-4 pl-4">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            モデルの変遷全体を確認したい場合は、
            <Link href="/academy/blog/chatgpt-gpt5-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTとGPT系モデルの整理記事
            </Link>
            もあわせて参照してください。
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="use-case-table"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別の使い分け表（文書 / 分析 / コード / 推論）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モデル名で迷う時間を減らすために、まず業務タイプで入口を固定します。以下はチームで運用しやすい最小ルールです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">業務カテゴリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨モデル</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用ルール</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.task}</th>
                    <td className="px-4 py-4">{row.recommended}</td>
                    <td className="py-4 pl-4">{row.operation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            プロンプトの標準化まで含めて運用したい場合は、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            を組み合わせると、担当者差を抑えやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="codex-cli"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT-5.3-codexの使いどころ：Codex CLIでコード業務を分離する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GPT-5.3-codexは、コード生成と修正を主目的にした運用で効果を出しやすいモデルです。一般チャット用途と混在させず、
            Codex CLIのフローとして分離すると品質管理がしやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[700px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ステップ</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務ポイント</th>
                </tr>
              </thead>
              <tbody>
                {codexFlowRows.map((row) => (
                  <tr key={row.step} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.step}</th>
                    <td className="py-4 pl-4">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-6 text-gray-500">
            モデル提供範囲や利用条件は更新されるため、導入前に必ず公式情報を再確認してください（確認日: 2026-02-21）。
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="vs-claude"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Claude Opus 4.6との比較</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            比較の目的は勝敗を決めることではなく、業務の再現性を高めることです。OpenAIとClaudeをタスク単位で併用する運用が、現場では最も安定しやすい選択です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">OpenAI側</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Opus 4.6側</th>
                </tr>
              </thead>
              <tbody>
                {vsClaudeRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.openai}</td>
                    <td className="py-4 pl-4">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Claude Opus 4.6の詳細は、
            <Link href="/academy/blog/claude-opus-4-6-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Opus 4.6使い方ガイド
            </Link>
            で整理しています。
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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モデル名や提供範囲は更新されるため、運用では確認日を必ず残してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/chatgpt-gpt5-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTとGPT系モデルの違いを整理したガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-opus-4-6-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Opus 4.6使い方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/openai-responses-api-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Responses API実践ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPTとClaudeの比較記事
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">モデル選定を超えて、実務で変化を起こす力へ</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、生成AI活用力を実務レベルで身につけるだけでなく、AIを鏡にした自己理解とキャリアデザイン、
            そして仲間と共に学ぶ環境を一体で提供します。単なるツール習得で終わらない学習設計で、次のキャリア行動までつなげます。
          </p>
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
