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

type ManusAiGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Manus AI 使い方",
  "Manus とは",
  "Manus AI 日本語",
  "Manus vs ChatGPT",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-manus", label: "Manus AIとは？ChatGPTとの違い" },
  { id: "what-is-ai-agent", label: "AIエージェントをやさしく理解する" },
  { id: "how-to-use-manus", label: "Manus AIの使い方（初期設定〜実行）" },
  { id: "business-automation-cases", label: "ビジネス自動化シーン" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";

const summaryPoints = [
  "Manus AIは、質問応答だけでなくタスク実行まで進めるAIエージェントとして設計されています。",
  "ChatGPTが対話中心であるのに対し、Manusは「調べる・整理する・出力する」を連続処理しやすい点が実務上の差分です。",
  "無料プランはありますが、クレジット消費を見ながら対象業務を絞る運用が必要です（確認日: 2026年2月20日）。",
  "日本語での指示・出力は可能ですが、UI言語や利用可能機能は時期やアカウント条件で差があります。導入時は権限管理とログ監査を必ず併用します。",
] as const;

const manusVsChatgptRows = [
  {
    axis: "主な使い方",
    manus: "タスク完了までの実行フローを任せる",
    chatgpt: "対話しながら下書き・要約・発想を進める",
    recommendation: "実行を早めるならManus、仕上げるならChatGPT",
  },
  {
    axis: "得意な場面",
    manus: "リサーチ収集、比較整理、作業ステップの自動実行",
    chatgpt: "文章品質改善、構成調整、壁打ち",
    recommendation: "初稿はManus、最終稿はChatGPTの分業が安定",
  },
  {
    axis: "コスト管理",
    manus: "クレジット消費量の管理が重要",
    chatgpt: "プラン上限・モデル選択を管理",
    recommendation: "週次で利用量を見える化して運用判断する",
  },
  {
    axis: "導入時の注意",
    manus: "権限設定と実行範囲を先に制限する",
    chatgpt: "機密情報の入力ルールを先に固定する",
    recommendation: "どちらもガイドラインとレビュー工程が前提",
  },
] as const;

const agentConceptCards = [
  {
    title: "1. ゴールを決める",
    body: "AIエージェントは、単発回答ではなく「最終成果物」を目標に設定して動きます。たとえば「競合調査を行い、比較表を作る」までを一連の作業として扱えます。",
  },
  {
    title: "2. 計画して実行する",
    body: "タスクを小さな工程に分割し、必要な操作を順に実行します。人が毎回細かく指示しなくても、同じ型の仕事を繰り返し処理しやすくなります。",
  },
  {
    title: "3. 結果を見て調整する",
    body: "途中結果を確認して、必要なら再計画する前提で使うのが実務向きです。1回で完璧を狙わず、確認サイクルを組み込むことで品質が安定します。",
  },
] as const;

const gettingStartedSteps = [
  {
    title: "Step 1. まずは低リスク業務を1つ決める",
    body: "「週次の市場調査を要点3つにまとめる」など、入力と出力を定義しやすいタスクから始めます。いきなり高リスク業務を任せないことが失敗回避の基本です。",
  },
  {
    title: "Step 2. 出力形式を固定した指示を作る",
    body: "目的、前提、出力形式を分けて指示すると再現性が上がります。例: 「競合3社の機能・料金・導入難易度を表で出力し、参考URLを最後に列挙」。",
  },
  {
    title: "Step 3. クレジット消費と品質を同時に確認する",
    body: "料金やプランは変動するため、利用量を週単位で見える化します。時間短縮だけでなく、誤り率や手戻り時間も併せて評価するのが実務的です。",
  },
  {
    title: "Step 4. 最終判断は人が行う境界を決める",
    body: "社外送信、契約、請求など影響の大きい工程は人が確認する運用を固定します。AIを使う範囲を先に決めると、導入後のトラブルを抑えられます。",
  },
] as const;

const commonMistakes = [
  "タスク定義が広すぎて、出力が毎回ぶれる。",
  "検証前に本番データを投入してしまう。",
  "クレジット上限を決めずに運用し、費用対効果を把握できない。",
  "AIの結果をそのまま顧客向け文書に使い、確認工数が後ろ倒しになる。",
] as const;

const businessCaseCards = [
  {
    title: "シーン1: リサーチ自動化（市場・競合調査）",
    detail:
      "毎週の業界ニュース収集や競合比較を、同じフォーマットで回す用途です。Manusで情報収集と一次整理を行い、重要な数値だけ人が原典確認すると、調査初稿の作成時間を短縮しやすくなります。",
    output: "成果物例: 競合比較表、週次トレンドメモ、意思決定用の要点サマリー",
  },
  {
    title: "シーン2: 文書作成自動化（下書き作成）",
    detail:
      "提案書の構成案、会議メモの要約、社内説明文の下書きなど、文章作成の初動に向いています。下書き段階をManusで作り、表現調整はChatGPTで仕上げると精度と速度を両立できます。",
    output: "成果物例: 提案書骨子、報告書ドラフト、FAQ原稿",
  },
  {
    title: "シーン3: データ収集と整形（定型作業の短縮）",
    detail:
      "複数サイトの公開情報を収集し、比較しやすい形式に整える用途です。収集対象、更新頻度、除外条件を明示すれば、反復タスクとして運用しやすくなります。",
    output: "成果物例: 価格比較一覧、求人動向まとめ、候補リスト整形データ",
  },
] as const;

const secureOperationChecklist = [
  "外部サービス連携は最小権限アカウントで開始する。",
  "本番データの投入前に、匿名化・マスキング手順を決める。",
  "クレジット上限と運用予算を月次で固定する。",
  "対外公開資料は必ず人間レビューを通す。",
  "ログ保存と差し戻し手順を事前に定義する。",
] as const;

function LineCtaBox({ tone }: { tone: "gray" | "green" | "orange" }) {
  const className =
    tone === "green"
      ? "mt-10 rounded-lg border border-green-200 bg-green-50 p-6"
      : tone === "orange"
        ? "mt-10 rounded-lg border border-orange-200 bg-orange-50 p-6"
        : "mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6";

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
        >
          今すぐ無料で登録する（30秒）
        </a>
      </div>
    </motion.section>
  );
}

export default function ManusAiGuidePage({ faqItems }: ManusAiGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Manus AIガイド" },
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
                title="Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Manus AIとは？使い方と活用シーン解説｜AIエージェントで仕事を自動化する
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Manus AIは、チャットで回答を得るだけでなく、タスクの完了まで進めることを狙ったAIエージェントサービスです。要点は「質問して終わり」ではなく、
            「作業を進める」工程まで扱えるかどうかにあります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、まず「Manusとは何か」「ChatGPTと何が違うのか」を明確にし、その後でAIエージェントの考え方、使い方、業務での自動化シーンまで
            実務目線で整理します。料金・仕様・対応言語などの変動項目は
            <span className="font-semibold text-gray-900">確認日: 2026年2月20日</span>
            を明記しています。
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
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Manusは「AIに相談する」段階から「AIで業務を進める」段階へ移行したい人に向いた選択肢です。導入初期は対象業務を絞り、コストと品質を同時管理すると
            失敗を抑えられます。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox tone="gray" />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-manus" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Manus AIとは？ChatGPTとの違いを最短で理解する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Manusは「一般的なAIエージェント」として提供され、会話の先にある作業完了を重視している点が特徴です。ChatGPTは対話中心で汎用性が高く、Manusは
            実行フローまで含めた運用に向いています。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            参考情報の確認日: 2026年2月20日（Manus公式サイト・Help Center・Docs）
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Manus</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ChatGPT</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務での使い分け</th>
                </tr>
              </thead>
              <tbody>
                {manusVsChatgptRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.manus}</td>
                    <td className="py-4 px-4">{row.chatgpt}</td>
                    <td className="py-4 pl-4">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            ChatGPT側の基本整理は
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT・Claude初心者ガイド
            </Link>
            も先に読んでおくと、ツール選定の軸を作りやすくなります。
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
          <h2 id="what-is-ai-agent" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIエージェントとは何かをやさしく整理する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AIエージェントは「質問に答えるAI」ではなく、「目標達成までの工程を順に実行するAI」です。仕事に置き換えると、調査、比較、出力作成といった複数工程を
            まとめて扱えることが価値になります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            仕組みを深く理解したい場合は、
            <Link href="/academy/blog/what-is-ai-agent" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは？
            </Link>
            の基礎記事で全体像を先に押さえると、Manusの位置づけを誤解しにくくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {agentConceptCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
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
          <h2 id="how-to-use-manus" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Manus AIの使い方（初期設定〜最初の自動化）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            使い方のコツは、最初から大きな自動化を狙わないことです。対象業務を1つに絞り、出力形式を固定して反復すると、短期間で運用の型を作れます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            プラン・クレジット・言語設定などの仕様は更新されるため、必ず公式情報を再確認してください（確認日: 2026年2月20日）。
          </p>
          <div className="mt-7 space-y-4">
            {gettingStartedSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">つまずきやすいポイント</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {commonMistakes.map((mistake) => (
              <li key={mistake} className="pl-1 marker:text-gray-500">
                {mistake}
              </li>
            ))}
          </ul>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="business-automation-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ビジネスで使える自動化シーン（リサーチ・文書作成・データ収集）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            会社員や副業者が成果を出しやすいのは、「手順が定型化できる業務」です。リサーチ、文書作成、データ整形の3領域は、Manus導入の初期対象として再現性が
            高くなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {businessCaseCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.detail}</p>
                <p className="mt-3 text-xs leading-6 text-gray-600">{card.output}</p>
              </section>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">導入時の最小チェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {secureOperationChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            実装寄りの運用設計は
            <Link
              href="/academy/blog/ai-agent-operations-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務自動化の始め方
            </Link>
            と
            <Link
              href="/academy/blog/workflow-automation-comparison"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ワークフロー自動化ツール比較
            </Link>
            を併読すると、選定と運用の両面を整理しやすくなります。
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
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは、導入前によく聞かれる疑問を短く整理します。料金・日本語対応・セキュリティは更新されるため、運用開始前に公式ヘルプの最新情報を確認してください。
          </p>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">関連リンク</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">基礎理解と実務運用をつなげるために、次の関連記事を順番に確認してください。</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは？定義・種類・作り方を解説
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/chatgpt-advanced-tips"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTを仕事で使いこなす実践テクニック集（公開準備中）
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得に加えて、自己理解とキャリアデザイン、そして仲間と学ぶ環境を一体で設計しています。ツールの使い方だけでなく、
            明日からの仕事の進め方まで再設計したい方は、関連ガイドから順に学ぶのが効果的です。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />
      </article>
    </main>
  );
}
