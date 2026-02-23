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

type AiNotionGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Notion AI 使い方", "Notion AI Plus 2026", "Notion 仕事効率化", "Notion AI 活用術"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "latest-features", label: "2026年の最新機能" },
  { id: "pricing", label: "料金とプラン差" },
  { id: "use-cases", label: "実務での使いどころ" },
  { id: "integration", label: "ChatGPT/Gemini連携" },
  { id: "database", label: "データベース活用術" },
  { id: "limits", label: "日本語対応と企業制限" },
  { id: "faq", label: "よくある質問" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "Notion AIは2026年も更新頻度が高く、モデル選択やInstant tasksなど実務向け機能が拡張されています。",
  "料金はPlus/Businessで差が大きく、Free/Plusはlimited complimentary AI responses、Business/Enterpriseは本格運用向けという整理が実務判断で有効です。",
  "議事録・タスク管理・文書整理は、Notion AI単体でも改善余地が大きい領域です。最初にテンプレを決めると定着しやすくなります。",
  "ChatGPT/Geminiとの併用は有効ですが、入力データ境界と最終レビュー責任を先に決めないと品質が不安定になります。",
] as const;

const featureRows = [
  {
    point: "複数モデルの選択肢拡張",
    detail: "2026-01-20のリリースでGPT-5.2、Claude Opus 4.5、Gemini 3など複数モデルの選択が案内。",
    businessImpact: "業務タイプ別にモデルを切り替える設計がしやすい。",
  },
  {
    point: "Instant Notion AI tasks",
    detail: "メニュー経由で短いAI処理を即時実行しやすいUIへ更新。",
    businessImpact: "小さな作業を都度回す運用に向く。",
  },
  {
    point: "AI blocks in templates",
    detail: "テンプレートにAIブロックを組み込み、実行導線を固定可能。",
    businessImpact: "チーム内で出力形式を統一しやすい。",
  },
  {
    point: "モデル追加の継続",
    detail: "2026年2月のリリース一覧でも、Notion AIのモデル更新が継続して案内。",
    businessImpact: "リリース追従を前提に、運用ルールを固定化しておく必要がある。",
  },
] as const;

const pricingRows = [
  {
    plan: "Free",
    usd: "$0",
    jpy: "¥0",
    aiScope: "limited complimentary AI responses",
    fit: "試用と評価向け",
  },
  {
    plan: "Plus",
    usd: "$10〜$12/seat/month（請求条件・地域で変動）",
    jpy: "約¥1,550〜¥1,860",
    aiScope: "limited complimentary AI responses",
    fit: "個人利用の土台整備向け",
  },
  {
    plan: "Business",
    usd: "$20〜$24/seat/month（請求条件・地域で変動）",
    jpy: "約¥3,100〜¥3,720",
    aiScope: "Notion AIを本格運用しやすい",
    fit: "チーム運用・部門導入向け",
  },
  {
    plan: "Enterprise",
    usd: "Contact sales",
    jpy: "要見積り",
    aiScope: "大規模運用と統制向け",
    fit: "権限管理・監査要件がある組織向け",
  },
] as const;

const useCaseRows = [
  {
    task: "議事録",
    before: "会議後に手作業で要点整理、担当者決めに時間がかかる",
    after: "会議ノートから要点・決定事項・次アクションを先に抽出してレビューする運用へ",
    kpi: "会議後整理時間、タスク化までの時間",
  },
  {
    task: "タスク管理",
    before: "タスク説明がばらつき、優先度判断が属人化する",
    after: "タスクDBにAIで要約列と優先度メモ列を追加し、レビュー観点を固定する",
    kpi: "未着手滞留件数、期限超過率",
  },
  {
    task: "ドキュメント整理",
    before: "資料が散在し、誰が何を参照すべきか分かりにくい",
    after: "長文ページを章ごとに要約し、業務単位で参照ページを束ねる",
    kpi: "情報探索時間、引き継ぎ時間",
  },
] as const;

const integrationPatterns = [
  {
    title: "パターン1: ChatGPT/Geminiで草案生成、Notionで運用定着",
    body: "外部LLMで案を作り、NotionページとDBに格納してレビュー履歴を残します。書く作業と管理作業を分離することで、運用が安定します。",
  },
  {
    title: "パターン2: Notionで会議情報を整理し、外部LLMで比較検討を実行",
    body: "Notion内で会議ログを構造化し、必要な範囲のみを外部LLMに渡して施策比較を行います。入力データ境界を先に定義することが前提です。",
  },
  {
    title: "パターン3: Notion APIでDB同期し、定型レポートを自動化",
    body: "Notion APIを使ってDB項目を抽出し、定型レポートの下書きを生成します。最終承認は人が行う設計にすると品質を維持しやすくなります。",
  },
] as const;

const dbLimitRows = [
  {
    area: "データベースオートメーション",
    limitation: "複雑なプロパティ構成では、期待する自動抽出結果にならないケースがある",
    workaround: "重要判定はレビュー列を追加し、AI出力を人が確認する運用にする",
  },
  {
    area: "翻訳処理",
    limitation: "長文を一括で処理すると文脈欠落が起きやすい",
    workaround: "長文は章単位で分割し、語彙統一ルールを先に設定",
  },
  {
    area: "Enterprise Search接続",
    limitation: "接続管理はworkspace ownerの承認が必要",
    workaround: "接続対象アプリと利用目的を先に申請テンプレ化",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "ツール名ではなく業務課題を軸に、何を自動化し何を人が判断するかを設計する力を体系的に育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AI活用を通じて、自分の強みと価値提供の領域を明確化し、次のキャリア設計へつなげます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話とレビューを継続し、変化が続くAI環境でも学習を止めない土台を作ります。",
  },
] as const;

export default function AiNotionGuidePage({ faqItems }: AiNotionGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Notion AIの使い方完全ガイド" },
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
                title="Notion AIの使い方完全ガイド｜料金・実務活用・連携術【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Notion AIの使い方完全ガイド｜料金・実務活用・連携術【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Notion AIは、文章生成ツールとして使うだけでは効果が限定されます。2026年時点では、モデル更新スピード、データベース連携、外部AIとの併用設計まで含めて運用することで、議事録・タスク管理・文書整理の品質が安定しやすくなります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、Notion AI Plus 2026という検索語で混乱しやすい料金整理、無料版との差、実務での使い方、ChatGPT/Gemini連携、エンタープライズ利用時の制限を確認日つきで整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">情報確認日: 2026年2月20日（料金・仕様は更新されるため、契約時に再確認してください）</p>
        </motion.section>

        <motion.section
          id="latest-features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年版Notion AIの最新機能は、「モデル選択」と「定型作業の短縮」に寄っている
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            直近の更新を見ると、単純な文章生成よりも「作業導線の短縮」と「用途別モデル選択」が強化されています。操作の自由度が上がった分、チーム内で出力フォーマットを固定しておかないと成果がばらつきます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">更新ポイント</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務インパクト</th>
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row) => (
                  <tr key={row.point} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.point}</th>
                    <td className="px-4 py-4">{row.detail}</td>
                    <td className="py-4 pl-4">{row.businessImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Notion AIの導入前に、全体の業務設計を確認したい場合は
            <Link href="/academy/blog/ai-business-efficiency-cases" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI業務効率化事例集
            </Link>
            とあわせて、改善対象業務を3つに絞る進め方が有効です。
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
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            料金とプラン差は、「Notion AI Plus」という名称より「どの利用範囲が解放されるか」で見る
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            2026年2月時点の公式情報では、Free/Plusはlimited complimentary AI responses、Business/EnterpriseはNotion AIを本格利用できる案内になっています。検索語として「Notion AI Plus 2026」が使われても、契約判断は現在の価格ページを基準にするのが安全です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">USD</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">円換算目安</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">AI利用範囲</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている利用</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-4">{row.usd}</td>
                    <td className="px-4 py-4">{row.jpy}</td>
                    <td className="px-4 py-4">{row.aiScope}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            為替目安: 1 USD = 155円前後（2026-02-20時点のUSD/JPY参照値を四捨五入）。決済時点で変動します。
          </p>
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            議事録・タスク管理・ドキュメント整理は、Notion AIの効果を最も検証しやすい領域
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            実務導入で失敗しにくい方法は、全社展開より先に3業務へ限定し、前後比較できるKPIを設定することです。個人利用でも、週次レビューに同じ指標を使うと改善が見えやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">業務</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">導入前</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">導入後の型</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">追跡KPI</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.task}</th>
                    <td className="px-4 py-4">{row.before}</td>
                    <td className="px-4 py-4">{row.after}</td>
                    <td className="py-4 pl-4">{row.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            ワークフロー全体の自動化まで広げる場合は
            <Link href="/academy/blog/workflow-automation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Make・Zapier・n8n比較
            </Link>
            を参照し、Notion AIで処理する範囲と外部フローで処理する範囲を分離しておくと、保守が軽くなります。
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
          id="integration"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT/Gemini連携は、役割分担を決めてから運用すると品質と速度の両立がしやすい
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            連携で成果が出るかは、モデル性能より運用設計で決まります。Notion側に履歴と構造を残し、外部LLMには比較検討や草案生成を任せる構成が実務で安定します。
          </p>
          <div className="mt-7 space-y-4">
            {integrationPatterns.map((pattern) => (
              <section key={pattern.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{pattern.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{pattern.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            プロンプト設計の品質を上げる場合は
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT実践テクニック集
            </Link>
            、情報整理のワークフローを深める場合は
            <Link href="/academy/blog/notebooklm-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              NotebookLMガイド
            </Link>
            が併用しやすいです。
          </p>
        </motion.section>

        <motion.section
          id="database"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Notionデータベースとの組み合わせは有効だが、制約を前提に設計する必要がある
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Notion AIはデータベースの要約・抽出・洞察提示で強みがあります。一方で、オートメーションや翻訳、接続管理には制約があるため、例外処理の設計を先に決めるべきです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">領域</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">制限事項</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務上の回避策</th>
                </tr>
              </thead>
              <tbody>
                {dbLimitRows.map((row) => (
                  <tr key={row.area} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.area}</th>
                    <td className="px-4 py-4">{row.limitation}</td>
                    <td className="py-4 pl-4">{row.workaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="limits"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            日本語対応とエンタープライズ運用では、「精度」より「境界線の管理」が成果を左右する
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            公式ヘルプでは日本語UIとNotion AIの日本語回答対応が案内されています。実務では、出力精度そのものより、どのデータをAIに渡してよいかの境界線を明確にできるかが重要です。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              日本語対応: Notion AIは日本語回答に対応。実務では固有名詞と業界用語のレビュー工程を固定すると安定しやすい。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              データ扱い: Notion AIの学習方針は「顧客データをモデル学習に使わない」と明記。権限はワークスペース設定を尊重。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              企業統制: Enterprise Search接続はworkspace ownerの管理前提。接続可能アプリと利用目的を先に承認フロー化する必要あり。
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">情報確認日: 2026年2月20日</p>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、特定ツールの操作習得ではなく、業務課題に対してAIをどう使い分けるかという判断軸を軸に学習を設計しています。
          </p>
          <div className="mt-5 space-y-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-blue-100 bg-white p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            料金、プラン、機能更新は変動するため、以下の回答も確認日つきで運用してください。
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
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/workflow-automation-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ワークフロー自動化ツール比較｜Make・Zapier・n8nを徹底比較【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-business-efficiency-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI業務効率化事例集
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
