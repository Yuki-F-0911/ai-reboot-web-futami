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

const keywordTags = ["GPT-5.3 使い方", "GPT-5.3 Codex", "OpenAI 料金", "Claude Opus 4.6 比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-gpt53", label: "GPT-5.3とは：GPT-5.2からの変化点" },
  { id: "codex-spark", label: "Codex・Sparkとの使い分け" },
  { id: "business-use", label: "ビジネス実務での活用シーン" },
  { id: "vs-claude", label: "Claude Opus 4.6との比較" },
  { id: "pricing", label: "料金プランの整理" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const changePoints = [
  {
    item: "コード補助精度",
    gpt52: "基本的なコード生成・補完に対応",
    gpt53: "複雑なリファクタリング・テスト生成の精度が向上",
  },
  {
    item: "日本語対応",
    gpt52: "安定しているが長文で一貫性が下がりやすい",
    gpt53: "長文ビジネス文書での一貫性・敬語精度が改善",
  },
  {
    item: "推論モード",
    gpt52: "Auto/Thinkingの2モード中心",
    gpt53: "タスク難易度に応じた自動切り替えが改善",
  },
  {
    item: "API連携",
    gpt52: "Responses API対応済み",
    gpt53: "Codex/Spark経由でのエージェント連携が強化",
  },
] as const;

const codexSparkRows = [
  {
    tool: "GPT-5.3（ChatGPT UI）",
    useCase: "汎用対話・文書作成・分析・壁打ち",
    access: "ChatGPTプラン加入",
    caution: "チームで使う場合はTeamプランの利用上限を設計する",
  },
  {
    tool: "Codex（API）",
    useCase: "コード特化の自動化・CI/CD組み込み・バッチ処理",
    access: "OpenAI API従量課金",
    caution: "権限設計とロギングをコード側で実装する必要がある",
  },
  {
    tool: "Spark",
    useCase: "対話型アシスタント・カスタムGPTs相当の軽量実装",
    access: "OpenAIダッシュボード経由",
    caution: "複雑なフロー制御はResponsesAPIやCodexと組み合わせる",
  },
] as const;

const businessUseCases = [
  {
    title: "文書作成：提案書・メール・議事録",
    body: "「目的・対象・文体・構成」を先に渡し、段落単位でレビューする運用が安定します。GPT-5.3は日本語ビジネス文書の一貫性が改善されており、長文でも誤字・敬語崩れが減少しています。",
  },
  {
    title: "データ分析：集計結果の解釈と報告文生成",
    body: "Excelやスプレッドシートのデータをテキストで貼り付け、「この数値から読み取れる傾向と課題を3点」のように依頼します。コード解析との併用では、Codeインタープリタ機能が有効です。",
  },
  {
    title: "コード補助：実装方針の壁打ちと初稿生成",
    body: "「この関数の責務を分割したい」「TypeScriptで型エラーが出ている」など具体的な課題を渡すと、修正差分の提案精度が上がります。IDE連携が必要な補完作業はGitHub CopilotやCursorとの役割分担が現実的です。",
  },
] as const;

const vsClaudeRows = [
  {
    axis: "コンテキスト長",
    gpt53: "最大128K〜200Kトークン（プランによる）",
    claude: "最大100万トークン（Opus 4.6）",
  },
  {
    axis: "日本語精度",
    gpt53: "GPT-5.3で改善。長文ビジネス文書に対応",
    claude: "高い。複雑な指示の追従性が安定",
  },
  {
    axis: "コード補助",
    gpt53: "Codex連携で開発フロー組み込みが強み",
    claude: "Claude Code経由でエージェント型の自律実行が強み",
  },
  {
    axis: "エコシステム",
    gpt53: "DALL-E・Plugins・Codex・Spark連携",
    claude: "Claude Code・MCP連携・Anthropicツール群",
  },
  {
    axis: "料金（ChatGPT/Claude）",
    gpt53: "Plus $20/月・Pro $200/月（API別途）",
    claude: "Pro $20/月・Max 5x $100/月・Max 20x $200/月",
  },
  {
    axis: "安全性・制約",
    gpt53: "コンテンツポリシーによる制約あり",
    claude: "Constitutional AI設計。倫理的制約の安定性が高い",
  },
] as const;

const pricingRows = [
  {
    plan: "ChatGPT Plus",
    price: "$20/月",
    gpt53: "利用可能（上限あり）",
    note: "個人の日常利用・文書作成向け",
  },
  {
    plan: "ChatGPT Pro",
    price: "$200/月",
    gpt53: "上限拡張で利用可能",
    note: "高頻度利用・ヘビーユーザー向け",
  },
  {
    plan: "OpenAI API",
    price: "従量課金（別請求）",
    gpt53: "モデル名指定で利用",
    note: "ChatGPT契約とは独立した請求体系",
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
        GPT-5.3や最新モデルの変化を、ビジネス判断に使える要点だけで毎週配信しています。
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
            { label: "GPT-5.3 使い方ガイド" },
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
                title="GPT-5.3 使い方ガイド｜Codex・Spark連携・料金・Claude Opus 4.6比較【2026年2月版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            GPT-5.3 使い方ガイド｜Codex・Spark連携・料金・Claude Opus 4.6比較【2026年2月版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            OpenAIはGPT-5.2に続いて2026年2月にGPT-5.3を公開しました。コード補助・日本語対応・エージェント連携の改善が中心で、Codex・Sparkとの役割分担が再整理されています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事は2026年2月21日時点の情報をもとに、GPT-5.3の変化点・使い分け・ビジネス活用・Claude Opus 4.6との比較・料金プランを実務で判断できる形に整理します。
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
              GPT-5.3はGPT-5.2比でコード補助・日本語長文・エージェント連携が改善されたモデルです（2026年2月時点）。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT UIでの汎用対話はGPT-5.3、コード自動化のフロー組み込みはCodex API、軽量アシスタント実装はSparkと役割分担すると効率的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Claude Opus 4.6は100万トークンコンテキスト・指示追従性で優位、GPT-5.3はOpenAIエコシステム連携・コード特化ツールとの統合で優位です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPT契約とOpenAI APIは別請求です。チーム導入時は両方の予算上限を分けて設計してください。
            </li>
          </ul>
          <p className="mt-4 text-xs leading-6 text-gray-500">情報確認日: 2026年2月21日</p>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="what-is-gpt53"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT-5.3とは：GPT-5.2から何が変わったか
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GPT-5.3はGPT-5.2の後継として2026年2月にリリースされました。モデルアーキテクチャの刷新というより、実務での再現性と言語対応品質の改善が中心です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">GPT-5.2</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">GPT-5.3</th>
                </tr>
              </thead>
              <tbody>
                {changePoints.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.gpt52}</td>
                    <td className="py-4 pl-4">{row.gpt53}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            GPT-5.2以前のモデル整理については、
            <Link href="/academy/blog/chatgpt-gpt5-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTとGPT-5の違いを整理した記事
            </Link>
            をあわせて確認してください。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">情報確認日: 2026年2月21日</p>
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
          id="codex-spark"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Codex・Sparkとの使い分け：ChatGPT UIとAPIの役割を分けると設計が明確になる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            OpenAIのエコシステムは「対話インターフェース（ChatGPT）」「コード実行API（Codex）」「軽量アシスタント（Spark）」の3層で構成されています。用途を混同しないことが設計コストを下げるポイントです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">アクセス方法</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {codexSparkRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.useCase}</td>
                    <td className="px-4 py-4">{row.access}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Codex APIを組み込む場合は、
            <Link href="/academy/blog/openai-responses-api-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              OpenAI Responses API実践ガイド
            </Link>
            でエンドポイント設計を先に確認すると実装コストを抑えられます。
          </p>
        </motion.section>

        <motion.section
          id="business-use"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ビジネス実務での活用シーン：文書作成・分析・コード補助の3軸
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GPT-5.3はビジネス実務の3つの領域で特に活用しやすくなっています。ツール選択前に「どの業務に当てるか」を決めることで、プロンプト設計の初速が上がります。
          </p>
          <div className="mt-7 space-y-4">
            {businessUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            業務別のプロンプトテンプレートを体系化したい場合は、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            の型を組み合わせると属人化を防げます。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Claude Opus 4.6との比較：コンテキスト長・エコシステム・料金の3軸で判断する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            GPT-5.3かClaude Opus 4.6かを選ぶ際、「どちらが優れているか」ではなく「どの業務に当てるか」で決めると失敗が減ります。両者は強みが異なるため、併用が現実的です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">GPT-5.3</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude Opus 4.6</th>
                </tr>
              </thead>
              <tbody>
                {vsClaudeRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.gpt53}</td>
                    <td className="py-4 pl-4">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Claude Opus 4.6の詳細については、
            <Link href="/academy/blog/claude-opus-4-6-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Opus 4.6使い方ガイド
            </Link>
            で1Mトークン・Adaptive Thinking・料金を整理しています。
          </p>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">実務での選び方の基準</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
              <li className="pl-1">OpenAIツール（DALL-E・Plugins・Codex）を組み合わせたい → GPT-5.3</li>
              <li className="pl-1">100万トークンを超える長文処理・Claude Code連携 → Claude Opus 4.6</li>
              <li className="pl-1">費用対効果を最大化したい → タスク別に両者を使い分ける</li>
            </ul>
          </div>
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
            GPT-5.3の料金プランを整理する：ChatGPT契約とAPI課金は別管理
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            チーム導入で最も混乱しやすいのが、ChatGPT契約とAPI請求を同じ予算として扱ってしまうことです。2つは独立した請求体系であり、導入計画の段階で分けておくことが重要です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金（目安）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">GPT-5.3利用</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">想定用途</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-4">{row.price}</td>
                    <td className="px-4 py-4">{row.gpt53}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-500">
            料金は2026年2月21日時点の参考値です。最新情報はOpenAI公式料金ページを確認してください。
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
            モデル仕様は更新されるため、以下のQ&Aも確認日つきで運用する前提で読んでください。
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
                ChatGPTとGPT-5の違いを整理｜2026年版モデル選びと使い分けガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-opus-4-6-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Opus 4.6使い方ガイド｜1Mトークン・Adaptive Thinking・料金比較
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/openai-responses-api-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                OpenAI Responses API実践ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">モデル選択より「判断軸」を育てる</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            GPT-5.3やClaude Opus 4.6のどちらが優れているかではなく、業務課題に対してどのツールをどう当てるかを判断できる力が実務価値を高めます。AIリブートアカデミーは、ツール習得と同時に、自己理解・キャリア設計・仲間との学習環境を一体で提供します。
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
