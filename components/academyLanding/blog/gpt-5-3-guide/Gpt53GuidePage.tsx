"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

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

const keywordTags = ["GPT-5.2", "thinkingレベル", "GPT-5.3-codex", "Claude Opus 4.6比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "model-map", label: "3モデルの役割マップ" },
  { id: "thinking-levels", label: "GPT-5.2のthinkingレベル差" },
  { id: "use-case-table", label: "用途別の使い分け表" },
  { id: "codex-cli", label: "GPT-5.3-codexの使いどころ" },
  { id: "vs-claude", label: "Claude Opus 4.6との比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const modelRows = [
  {
    model: "GPT-5.2（standard）",
    category: "汎用モード",
    strengths: "応答速度と品質のバランスがよく、日常の業務タスクを安定して回しやすい",
    usage: "文書下書き、要約、壁打ち、通常のQ&A",
  },
  {
    model: "GPT-5.2（thinking）",
    category: "深い推論モード",
    strengths: "前提整理・論点分解・判断理由の明示が必要な課題で精度を上げやすい",
    usage: "要件整理、比較検討、意思決定前の論点設計",
  },
  {
    model: "GPT-5.3-codex",
    category: "コード特化モデル（Codex CLI専用）",
    strengths: "実装、修正、リファクタリング、テスト補助など開発タスクに特化",
    usage: "Codex CLIでのコード生成・変更提案・検証フロー",
  },
] as const;

const thinkingLevelRows = [
  {
    level: "standard",
    fit: "通常の業務処理をテンポよく回したいとき",
    output: "十分な品質を短い往復で得やすい",
    caution: "論点が多い課題では検討の深さが不足する場合がある",
  },
  {
    level: "thinking",
    fit: "判断根拠や比較軸まで明示したいとき",
    output: "前提確認と推論プロセスが丁寧になりやすい",
    caution: "standardより応答に時間がかかる前提で運用する",
  },
  {
    level: "extended thinking（提供時）",
    fit: "最難度の課題を時間をかけて検討したいとき",
    output: "深い検討が期待できるが、利用可否は環境依存",
    caution: "名称・提供範囲はプランやUI更新で変わるため公式情報を都度確認する",
  },
] as const;

const useCaseRows = [
  {
    task: "日常の文書・コミュニケーション",
    recommended: "GPT-5.2（standard）",
    operation: "まずstandardで初稿を作成し、レビュー基準だけ人間側で固定する",
  },
  {
    task: "重要判断を伴う企画・分析",
    recommended: "GPT-5.2（thinking）",
    operation: "判断理由と前提を明示する指示を追加し、根拠つきで出力させる",
  },
  {
    task: "コード生成・改修",
    recommended: "GPT-5.3-codex（Codex CLI）",
    operation: "要件と制約を先に与え、差分レビュー前提で運用する",
  },
  {
    task: "高難度タスクの再検証",
    recommended: "GPT-5.2（thinking）",
    operation: "standard結果を下書きに使い、品質不足時のみthinkingへ昇格させる",
  },
] as const;

const codexFlowRows = [
  {
    step: "1. タスク定義",
    detail: "変更目的、制約、受け入れ条件を先に渡す（GPT-5.2で要件整理してから渡すと安定）",
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
    openai: "GPT-5.2のstandard/thinkingを同一系統で切り替え、コードはGPT-5.3-codexへ分離しやすい",
    claude: "長文読解や一貫した文章生成を中心に設計しやすい",
  },
  {
    axis: "コードワークフロー",
    openai: "GPT-5.3-codexをCodex CLIで使う開発導線を作りやすい",
    claude: "Claude Codeを起点にした実装・検証フローを組みやすい",
  },
  {
    axis: "推論業務",
    openai: "GPT-5.2 thinkingを起点に、必要に応じてthinkingレベルを調整しやすい",
    claude: "長文前提の思考整理や説明生成で安定した運用がしやすい",
  },
  {
    axis: "導入判断",
    openai: "standard→thinking→codexの昇格ルールを定義すると再現性が高い",
    claude: "長文中心の業務では優先候補として検討しやすい",
  },
] as const;

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
            { label: "GPT-5.2使い分けガイド" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="GPT-5.2使い方ガイド｜thinkingレベルとGPT-5.3-codexの使い分け【2026年2月版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GPT-5.2使い方ガイド｜thinkingレベルとGPT-5.3-codexの使い分け【2026年2月版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            本記事は2026年2月21日時点の公開情報を前提に、GPT-5.2（standard / thinking）と、Codex CLI専用の
            GPT-5.3-codexの役割を整理します。モデル名を追うより、業務ごとに固定ルールを作るほうが実務成果につながります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            特に重要なのは、GPT-5.2のthinkingレベル差を理解してstandardとthinkingを使い分けることです。コード作業は
            GPT-5.3-codexへ分離し、品質と速度を両立する運用を作ります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              本記事の主軸はGPT-5.2（standard / thinking）とGPT-5.3-codexの3モデル構成です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              通常業務はGPT-5.2 standard、重要判断はGPT-5.2 thinking、コード変更はGPT-5.3-codexで分離すると運用が安定します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              thinkingレベル（standard / thinking / extended thinking相当）の名称や提供範囲は変わるため、都度公式情報を確認してください。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Claude Opus 4.6との比較は優劣ではなく、業務特性に応じた併用設計で判断するのが実践的です。
            </li>
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">情報確認日: 2026年2月21日</p>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="model-map"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">3モデルの役割マップ（2026年2月時点）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            モデル選定は「最強モデル」探しではなく、業務カテゴリごとの配備で考えると失敗が減ります。以下の3モデルを基準に運用ルールを作るのが実務的です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
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
              ChatGPTとGPT-5系モデルの整理記事
            </Link>
            もあわせて参照してください。
          </p>
        </motion.section>

        <motion.section
          id="thinking-levels"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">GPT-5.2のthinkingレベル差（standard / thinking / extended thinking相当）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GPT-5.2は、同じモデル系統でも思考量の設定によって挙動が変わります。まずstandardを既定値にし、必要時のみthinking側へ上げる運用が実務では扱いやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">レベル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている場面</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">期待できる出力傾向</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用上の注意</th>
                </tr>
              </thead>
              <tbody>
                {thinkingLevelRows.map((row) => (
                  <tr key={row.level} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.level}</th>
                    <td className="px-4 py-4">{row.fit}</td>
                    <td className="px-4 py-4">{row.output}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-6 text-gray-500">
            注記: レベル名称・提供可否・上限は変動するため、実際の運用時はOpenAI公式ヘルプとモデルセレクター表示を必ず確認してください（確認日: 2026-02-21）。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="use-case-table"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別の使い分け表（GPT-5.2 standard/thinking + GPT-5.3-codex）</h2>
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
          viewport={{ once: true, amount: 0.05 }}
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="vs-claude"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
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
          viewport={{ once: true, amount: 0.055 }}
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
            <LineCtaBox />
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
