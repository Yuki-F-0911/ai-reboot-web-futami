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

type AiHrRecruitingPageProps = {
  faqItems: readonly FAQItem[];
};

type PromptTemplate = {
  title: string;
  canDo: string;
  prompt: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 人事 採用", "AI 採用活動 活用", "生成AI 人事部門", "HR DX"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "background", label: "AIが注目される背景" },
  { id: "recruiting-use", label: "採用活動でのAI活用" },
  { id: "hr-management-use", label: "人事管理でのAI活用" },
  { id: "tools", label: "主要ツールの考え方" },
  { id: "prompt-examples", label: "すぐ使えるプロンプト例" },
  { id: "cautions", label: "導入時の注意点" },
  { id: "steps", label: "導入ステップ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "次のアクション" },
] as const;

const backgroundItems = [
  {
    title: "人手不足と採用難",
    body: "採用担当者の工数が増える一方で、母集団形成〜面接調整〜候補者対応までの「詰まり」が起こりやすくなっています。AIは定型業務の圧縮に向きます。",
  },
  {
    title: "採用コストの増加",
    body: "求人広告、紹介、スカウトなど複数チャネルの運用が必要になり、文面作成・媒体ごとの最適化・改善サイクルが重くなりがちです。",
  },
  {
    title: "DX推進とデータ活用",
    body: "ATS/HRISに蓄積されるデータ量が増え、要約・分類・傾向抽出の需要が高まっています。AIは「読む/まとめる/比較する」を補助できます。",
  },
] as const;

const recruitingUseCases = [
  {
    title: "求人票・募集要項の作成",
    detail:
      "必須要件/歓迎要件の整理、職務内容の言語化、媒体ごとの文字数制約への調整など、下書き作成を高速化できます。",
  },
  {
    title: "スクリーニングの補助",
    detail:
      "評価軸（例: 必須スキル、経験年数、成果指標）に沿って要約し、比較しやすい形に整えられます。採否判断の自動化ではなく「整理」に限定すると安全です。",
  },
  {
    title: "面接日程調整・連絡文面",
    detail:
      "候補日提示、リマインド、オンライン面接の案内などの定型連絡をテンプレート化し、返信しやすい文面にできます。",
  },
  {
    title: "候補者対応（一次回答）",
    detail:
      "よくある質問への一次回答案、説明の言い換え、辞退兆候の検知（文面のトーン確認）などに使えます。温度感と誠実さを損なわない運用設計が重要です。",
  },
] as const;

const hrManagementUseCases = [
  {
    title: "評価コメントの品質安定",
    detail: "評価コメントの粒度・根拠・次アクションを揃える下書き作成に向きます（最終判断は人が実施）。",
  },
  {
    title: "離職予測・リスク要因の仮説出し",
    detail:
      "エンゲージメントサーベイや面談メモの要約から、リスク要因の仮説を整理できます。属性情報の扱いと偏りチェックが前提です。",
  },
  {
    title: "エンゲージメント分析",
    detail: "自由記述の分類、要因ラベリング、施策案のたたき台作成などで、分析の初速を上げられます。",
  },
  {
    title: "研修・育成の最適化",
    detail: "職種/レベル別の学習計画、教材案、演習設計などを叩き台から作り、運用に合わせて磨けます。",
  },
] as const;

const toolGuidance = [
  {
    title: "ChatGPT / Claude（汎用生成AI）",
    body: "文章の下書き、要約、比較、たたき台作成に強みがあります。まずは「出力形式」と「評価軸」を固定し、レビューしやすい型を作るのがコツです。",
  },
  {
    title: "専用ツール（ATS/HRIS・日程調整・面接記録など）",
    body: "ワークフローやデータ連携が必要な業務で効きます。汎用生成AIで型を作り、効果が見えた部分を専用ツール/連携で自動化すると失敗しにくくなります。",
  },
] as const;

const promptTemplates: readonly PromptTemplate[] = [
  {
    title: "求人票（募集要項）生成",
    canDo: "要件整理→職務内容→魅力訴求まで、求人票のたたき台を短時間で作れます。",
    prompt:
      "あなたは採用広報のプロです。以下の情報から求人票（募集要項）のたたき台を作成してください。\n\n【職種】{例: カスタマーサクセス}\n【事業内容】{一文}\n【ミッション】{この職種が解く課題}\n【必須要件】{箇条書き}\n【歓迎要件】{箇条書き}\n【求める人物像】{箇条書き}\n【働き方】{勤務地/リモート/時間}\n【選考フロー】{例: 書類→一次→最終}\n\n条件:\n- 必須要件と歓迎要件を混ぜない\n- 具体的な業務内容を5〜7項目で列挙\n- 応募者が不安になりやすい点（入社後のイメージ）を補足\n\n出力形式:\n# 仕事概要\n# 具体的な業務内容\n# 必須要件\n# 歓迎要件\n# 求める人物像\n# 働き方/制度\n# 選考フロー",
  },
  {
    title: "面接質問設計（評価軸付き）",
    canDo: "評価軸に沿った面接質問と、合否判断の観点（良い回答/懸念回答）を作れます。",
    prompt:
      "あなたは採用面接官トレーナーです。以下の条件で面接質問を設計してください。\n\n【職種】{職種}\n【レベル】{例: メンバー/リーダー}\n【評価軸】{例: 課題解決力/顧客折衝/主体性}\n【必須経験】{箇条書き}\n\n条件:\n- 評価軸ごとに質問を3つずつ\n- 各質問に「見たいポイント」「深掘り質問」を付ける\n- バイアスを生まないよう、属性に関する質問は入れない\n\n出力形式:\n| 評価軸 | 質問 | 見たいポイント | 深掘り質問 |",
  },
  {
    title: "評価コメント（フィードバック）作成",
    canDo: "評価コメントの粒度・根拠・次アクションを揃えた文章の下書きを作れます。",
    prompt:
      "あなたは人事評価のレビュアーです。以下のメモをもとに、評価コメントの下書きを作成してください。\n\n【対象者の役割】{職種/役割}\n【期間】{YYYY/MM〜YYYY/MM}\n【成果】{箇条書き}\n【行動/プロセス】{箇条書き}\n【課題】{箇条書き}\n\n条件:\n- 事実（成果/行動）と解釈（評価）を分ける\n- 次期に向けた改善アクションを2点提案\n- 断定しすぎず、根拠に基づく表現にする\n\n出力形式:\n# 総評\n# 良かった点（根拠）\n# 改善点（根拠）\n# 次期アクション（2点）",
  },
  {
    title: "研修計画（職種/レベル別）",
    canDo: "研修の目的→カリキュラム→演習→評価までのたたき台を作れます。",
    prompt:
      "あなたは人材開発担当です。以下の条件で研修計画を作成してください。\n\n【対象】{職種/レベル/人数}\n【目的】{研修で到達させたい状態}\n【期間】{例: 4週間}\n【制約】{予算/稼働/オンライン可否}\n\n条件:\n- 週ごとのテーマと学習内容を整理\n- 演習（アウトプット）を必ず入れる\n- 評価方法（チェックテスト/課題/面談）を明記\n\n出力形式:\n# 研修概要\n# 週次カリキュラム\n# 演習課題\n# 評価方法\n# 運用上の注意",
  },
] as const;

const cautionItems = [
  {
    title: "バイアス対策（公平性）",
    body: "評価軸を文章で明確化し、AIは「要約・整理・比較」の補助に限定するのが基本です。偏りが出ていないかを定期的に検証し、説明可能性を担保します。",
  },
  {
    title: "プライバシー・個人情報",
    body: "候補者/従業員の個人情報を入力する範囲を定義し、匿名化やマスキング、社内ルールに沿った利用環境を選びます。ログの扱いも含めて設計します。",
  },
  {
    title: "法的配慮と運用責任",
    body: "選考・評価は最終的に人が責任を負います。社内規程、委託先契約、記録の保管方針を確認し、必要に応じて法務・情報システムと連携します。",
  },
] as const;

const rolloutSteps = [
  {
    title: "小さく始める（1業務×1チーム）",
    body: "求人票作成や定型連絡など、事故リスクが低く効果が測りやすい業務から試します。入力テンプレートとレビュー手順を先に決めます。",
  },
  {
    title: "効果測定（指標を少数に絞る）",
    body: "工数、リードタイム、レビュー回数、問い合わせ対応速度などを導入前後で比較します。現場が納得できる指標を選ぶことが重要です。",
  },
  {
    title: "拡大（型→連携→自動化）",
    body: "うまくいった型をテンプレート化し、必要に応じてATS/HRISと連携して定着させます。自動化範囲と人の最終確認範囲を明確にします。",
  },
] as const;

export default function AiHrRecruitingPage({ faqItems }: AiHrRecruitingPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI × 人事・採用" },
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
                title="AI × 人事・採用｜業務効率化から戦略的活用までの実践ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI × 人事・採用｜業務効率化から戦略的活用までの実践ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            人事・採用のAI活用は、定型業務の削減と判断材料の整理に寄せると、安全に成果が出やすいです。
            本記事では、 採用活動と人事管理の具体的な活用パターン、ツールの選び方、すぐ使えるプロンプト例、導入時の注意点と進め方をまとめます。
            結論から言うと、人事・採用でAIが効くのとは、「候補者体験を損なわずに、定型作業の工数を減らし、判断の材料を整理する」領域です。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            人事・採用のAI活用は、定型業務の削減と判断材料の整理に寄せると、安全に成果が出やすいです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              採用では「求人票作成」「定型連絡」「要約・比較」が始めやすく、候補者対応の品質を保ちながら工数を削減しやすい傾向があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              スクリーニングは自動採否ではなく「評価軸に沿った整理」に限定し、バイアスチェックと人の最終判断を組み込むのが基本です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              成功の鍵は、入力テンプレートとレビュー手順の明文化です。小さく始めて、指標で効果を確認し、段階的に拡大します。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="background" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            人事・採用領域でAIが注目される背景
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            採用スピードと候補者体験を両立するには、まず「文章作成」と「情報整理」のボトルネックにAIを当てるのが近道です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            人事・採用の現場では、業務量が増える一方で、候補者体験の品質も求められます。AIを使うと、定型文の作成や要約・比較が早くなり、連絡の遅延や抜け漏れが起きにくくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {backgroundItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="recruiting-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            採用活動でのAI活用（求人票/スクリーニング/面接調整/候補者対応）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            採用では、求人票のたたき台、候補者情報の要約・比較、面接/連絡文のテンプレ化が最短で効果が出やすいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            採用プロセスは「情報を作る（求人票）」「情報を整理する（スクリーニング）」「やり取りする（調整・連絡）」が多く、AIを入れる場所を見つけやすいのが特徴です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recruitingUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="hr-management-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            人事管理でのAI活用（評価分析/離職予測/エンゲージメント/研修最適化）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            人事管理では、評価コメントや面談メモなどのテキストを「要約・分類・比較」できると、意思決定が一気に進みます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            人事領域では、テキスト情報（評価コメント・面談メモ・サーベイ自由記述など）の比率が高く、要約・分類・比較で効果が出やすい傾向があります。
          </p>
          <div className="mt-6 space-y-4">
            {hrManagementUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="tools" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要AI人事ツール紹介（ChatGPT/Claude活用 + 専用ツール）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            まずは汎用LLMで「文章作成/要約/比較」の型を作り、次に必要に応じて専用ツールや連携に広げるのが失敗しにくいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ツール選定は「文章作成/要約/案出し」なのか、「システム連携を含む業務自動化」なのかで分けて考えると整理しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {toolGuidance.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            実務での使い方は、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              プロンプトテンプレート集
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 id="prompt-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            すぐ使えるプロンプト例（求人票/面接質問/評価コメント/研修計画）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            プロンプトは「評価軸・制約・出力形式」を固定すると安定します。テンプレを埋めるだけで、チームで再現できる状態に近づきます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            そのままコピペして使える形にしています。まずは括弧内（{"{...}"}）を自社の情報に置き換えてください。
          </p>
          <div className="mt-6 space-y-6">
            {promptTemplates.map((template) => (
              <section key={template.title} className="rounded-lg border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">このプロンプトでできること:</span> {template.canDo}
                </p>
                <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
                <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  <code>{template.prompt}</code>
                </pre>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI導入時の注意点（バイアス対策、プライバシー、法的配慮）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            採用・人事でAIを使うときは、バイアス/個人情報/責任分界（最終判断は誰が持つか）を先に決め、AIは補助に限定する運用が安全です。
          </p>
          <div className="mt-6 space-y-4">
            {cautionItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入ステップ（小さく始める→効果測定→拡大）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            ツール選定より先に、業務単位で「入力→出力→レビュー」の型を作ると、現場で定着しやすくなります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ツール導入を先に決めるより、業務単位で「型」を作ってから仕組み化すると、運用ルールや効果測定まで一緒に整えやすくなります。
          </p>
          <div className="mt-6 space-y-4">
            {rolloutSteps.map((step, index) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <p className="text-xs font-semibold tracking-wide text-gray-500">STEP {index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            導入初期に迷いやすいポイントをQ&A形式で整理します。社内ルールや扱うデータの種類によって最適解は変わるため、自社の状況に合わせて読み替えてください。
          </p>
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
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイント | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-adoption-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                中小企業の生成AI導入ガイド｜失敗しない進め方と費用感 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/skills-for-ai-era-career"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI時代に必要なスキルを職種別に解説｜営業・マーケ・管理職の学び方 | AIリブート
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
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">採用では「求人票作成」「定型連絡」「要約・比較」が始めやすく、候補者対応の品質を保ちながら工数を削減しやすい傾向があります。</li>
            <li className="pl-1 marker:text-gray-500">スクリーニングは自動採否ではなく「評価軸に沿った整理」に限定し、バイアスチェックと人の最終判断を組み込むのが基本です。</li>
            <li className="pl-1 marker:text-gray-500">成功の鍵は、入力テンプレートとレビュー手順の明文化です。小さく始めて、指標で効果を確認し、段階的に拡大します。</li>
          </ul>
        </motion.section>
<motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
	        >
	          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
	            次のアクション：AIリブートアカデミーで、採用を「運用」と「価値」へつなげる
	          </h2>
	          <p className="mt-5 text-base font-medium text-gray-900">
	            人事・採用でAIを定着させるには、プロンプトの型、運用ルール、効果測定をセットで整えることが重要です。
	          </p>
	          <p className="mt-4 text-base leading-8 text-gray-700">
	            ツールの使い方だけで終わらせず、「自分（チーム）の強みをどう伸ばすか」まで含めて設計したい方は、アカデミーで全体像を確認できます。採用・人事のユースケースに合わせて、100日間の伴走で手戻りしない進め方を一緒に設計します。
	          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
