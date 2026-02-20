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

type AiTaxAccountingGuidePageProps = {
  faqItems: readonly FAQItem[];
};

type PromptTemplate = {
  title: string;
  canDo: string;
  prompt: string;
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["税務 AI 活用", "会計 生成AI 業務効率化", "税理士 ChatGPT 使い方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "scope", label: "税務・会計でAIを使う適用範囲" },
  { id: "use-cases", label: "効果が出やすい実務ユースケース" },
  { id: "prompts", label: "説明文・差異コメントのプロンプト例" },
  { id: "governance", label: "情報管理とレビュー体制" },
  { id: "rollout", label: "導入ステップ（3段階）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "次のアクション" },
] as const;

const useCaseItems = [
  {
    title: "顧客向け説明文の初稿作成",
    detail:
      "税制改正や申告方針の説明は、要点を短く伝える文章力が必要です。AIで初稿を作り、顧客固有条件と最終表現を担当者が調整する運用が有効です。",
  },
  {
    title: "月次差異コメントのたたき台作成",
    detail:
      "部門別の差異データから、増減要因と次月の確認ポイントを短時間で整理できます。数値整合は人間が確認する前提で、分析説明の起点として使います。",
  },
  {
    title: "面談メモの要約と論点整理",
    detail:
      "顧客面談後の議事録を要約し、次回までの宿題を構造化できます。所内共有の速度が上がり、担当者ごとの記録品質の差を縮めやすくなります。",
  },
  {
    title: "レビュー観点チェックリストの整備",
    detail:
      "申告前の確認観点をテンプレ化すると、繁忙期でも抜け漏れを減らせます。制度要件、期限、添付書類の観点をAIで初期案化し、実務運用に合わせて更新します。",
  },
] as const;

const promptTemplates: readonly PromptTemplate[] = [
  {
    title: "顧客向け説明文の下書き",
    canDo: "制度変更や申告方針の説明を、顧客に伝わる文章へ整理できます。",
    prompt:
      "あなたは税務実務の文章作成アシスタントです。以下の情報をもとに、顧客向け説明文の初稿を作成してください。\n\n【テーマ】{例: 電子帳簿保存法対応の運用見直し}\n【対象顧客】{例: 年商3億円規模の中小企業}\n【伝えるべき事実】{箇条書きで入力}\n【顧客が不安に思っている点】{箇条書きで入力}\n\n条件:\n- 事実と推奨事項を分けて記載する\n- 断定を避け、確認が必要な点は「要確認」と明示する\n- 300〜400字\n- 最後に「次回までの確認事項」を3つ示す",
  },
  {
    title: "月次差異コメントの作成",
    canDo: "会議用のコメント下書きを短時間で作成できます。",
    prompt:
      "あなたは会計レビュー担当です。以下の月次差異データから、報告コメントを作成してください。\n\n【対象月】{YYYY年MM月}\n【主要勘定】{売上、売上原価、販管費、営業利益}\n【差異データ】{勘定科目, 予算, 実績, 差異, 差異率}\n【補足情報】{案件遅延、前倒し投資、一時費用など}\n\n条件:\n- 差異の大きい順に3項目を説明\n- 各項目で「事実」「要因仮説」「次月確認事項」を1文ずつ示す\n- 250〜350字\n- 数値の再計算は行わず、与えられた値を参照して記述する",
  },
] as const;

const governanceRules = [
  "入力禁止情報を先に定義する（顧客名、個人番号、未公開数値、口座情報など）",
  "利用ツールとプランを固定し、設定変更時は確認日を記録する",
  "AI出力は必ず担当者レビューを通し、無検証で顧客提出しない",
  "制度要件・期限・税区分は一次情報で最終確認する",
] as const;

const rolloutSteps = [
  {
    title: "文章業務から始める",
    body: "顧客説明文、面談後フォローメール、月次コメントの下書き作成に限定して試します。数値判断ではなく文章整形を中心にするとリスクを抑えられます。",
  },
  {
    title: "チェックリスト運用を追加する",
    body: "AIの提案をそのまま採用せず、レビュー項目をテンプレ化します。担当者が同じ観点で確認できるよう、所内運用に組み込みます。",
  },
  {
    title: "所内ルールとして定着させる",
    body: "入力範囲、レビュー責任、更新手順を文書化し、繁忙期でも再現できる運用へ移行します。ツール仕様の更新時にはルール更新日を必ず残します。",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        毎週1本、実務で使えるAI活用の要点を短く整理して配信します。確認コストを下げながら、現場で試す順序を揃えたい方に向いています。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </div>
  );
}

export default function AiTaxAccountingGuidePage({ faqItems }: AiTaxAccountingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "税務・会計業務のAI活用ガイド" },
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
                title="税務・会計業務のAI活用ガイド2026｜申告前レビューと説明文作成を効率化"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            税務・会計業務のAI活用ガイド2026｜申告前レビューと説明文作成を効率化
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            税務・会計領域でAIを使うときは、判断そのものを置き換えるより、説明文作成やレビュー準備を効率化する方が成果が安定します。
            本記事では、税理士・経理担当者が実務に落とし込めるように、適用範囲、プロンプト例、情報管理ルール、導入ステップを整理します。
            制度やサービス仕様は更新されるため、本文の確認日は `2026-02-20` として記載します。
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
            要点まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              税務・会計でのAI活用は、申告判断の代替ではなく、説明文作成・論点整理・レビュー準備に寄せると安全です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              顧客名や未公開数値などの機密情報は、そのまま入力せず、入力ルールとマスキング手順を先に決める必要があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              効果を出すには、AI出力をそのまま使わず、担当者レビューを必須化する運用設計が前提です。
            </li>
            <li className="pl-1 marker:text-gray-500">運用は「文章業務→レビュー体制→所内ルール化」の3段階で進めると定着しやすくなります。</li>
          </ul>
        </motion.section>

        <motion.section
          id="scope"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            税務・会計でAIを使う範囲は、「判断」ではなく「準備」と「説明」に切り分ける
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            申告内容や税務判断の最終責任は、担当者または有資格者が持ちます。AIはその手前の工程で使うと、品質と速度のバランスを取りやすくなります。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">使い分けの基本</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">AIに任せる: 説明文初稿、論点整理、チェック観点の抽出</li>
              <li className="pl-1 marker:text-gray-500">人が担う: 数値確定、制度適用判断、顧客提出前の最終レビュー</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">効果が出やすい実務ユースケースは、定型文章とレビュー準備に集中している</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            繁忙期に成果が出やすいのは、繰り返し発生する文書業務です。判断が必要な工程と分離し、短時間で品質を揃える設計にします。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {useCaseItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="prompts"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">説明文・差異コメントはプロンプトを固定すると再現性が上がる</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            指示内容を毎回ゼロから考えると品質がばらつきます。入力項目と出力形式を固定したテンプレートを使うと、所内で再利用しやすくなります。
          </p>
          <div className="mt-7 space-y-6">
            {promptTemplates.map((template) => (
              <section key={template.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{template.canDo}</p>
                <pre className="mt-4 overflow-x-auto rounded-md bg-gray-900 p-4 text-xs leading-6 text-gray-100">
                  {template.prompt}
                </pre>
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
          <LineCtaBox className="rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
        </motion.section>

        <motion.section
          id="governance"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">情報管理とレビュー体制は、導入前に最小ルールを決めておく</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            生成速度より先に、情報管理と責任分担を固めることが重要です。入力ルールとレビュー責任が曖昧なまま導入すると、後から運用負荷が増えます。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {governanceRules.map((rule) => (
              <li key={rule} className="pl-1 marker:text-gray-500">
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            制度の解釈や申告判断は
            <span className="mx-1 font-semibold text-gray-900">必ず一次情報と担当者判断で確定</span>
            し、AI出力は補助資料として扱ってください。
          </p>
        </motion.section>

        <motion.section
          id="rollout"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">導入ステップは、3段階で小さく始めると定着しやすい</h2>
          <ol className="mt-6 space-y-4">
            {rolloutSteps.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-gray-200 bg-white p-5">
                <p className="text-sm font-semibold text-will-primary">STEP {index + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            あわせて、
            <Link href="/academy/blog/ai-accounting-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              経理・財務部門のAI活用ガイド
            </Link>
            や
            <Link href="/academy/blog/ai-legal-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法務の生成AI活用ガイド
            </Link>
            も確認すると、部門横断での運用設計がしやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            税務・会計でのAI活用は、適用範囲とレビュー責任を明確にした時に安定します。運用前に確認したい質問をまとめました。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <LineCtaBox className="rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-slate-200 bg-slate-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">税務・会計でのAI導入は、説明業務とレビュー準備の効率化から始めると安全です。</li>
            <li className="pl-1 marker:text-gray-500">機密情報の取り扱い、レビュー責任、一次情報確認の3点を運用ルールとして固定してください。</li>
            <li className="pl-1 marker:text-gray-500">効果は「速さ」より「再現性」で評価し、繁忙期でも回る運用に育てることが重要です。</li>
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
            次のアクション: AI活用の判断軸とキャリアを同時に設計する
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、
            仲間と共に学ぶ環境づくりまで一体で設計しています。ツール名ではなく「どの業務課題にどう当てるか」という判断軸を磨き、
            実務とキャリアの次の一歩へ接続する学習プロセスを重視しています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">生成AI活用力:</span> 実務で再現できる使い方を体系的に整理する
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">自己理解・キャリアデザイン:</span> AIを鏡に強みを言語化し、次の選択を明確にする
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">仲間と共に学ぶ環境:</span> 対話と相互レビューで改善速度を高める
            </li>
          </ul>
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
