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

type AiFreelanceWorkGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const promptExamples = [
  {
    title: "提案書の初稿を20分で作るプロンプト",
    prompt:
      "あなたはBtoB案件の提案書作成アシスタントです。\n目的: クライアント向け提案書の初稿作成\n前提: 以下の案件情報を使用\n- 業種: {業種}\n- 依頼内容: {依頼内容}\n- 現状課題: {課題}\n- 希望納期: {納期}\n制約:\n- A4で2ページ相当\n- 構成は「課題整理→対応方針→実行ステップ→成果指標→体制→費用概算」\n- あいまい語を避け、具体的な動詞で記述\n出力形式:\n1. 提案サマリー（150字以内）\n2. 本文（見出し付き）\n3. クライアントに確認すべき質問5つ",
    note: "提案の骨子を固定し、案件ごとの差分だけを上書きする用途に向いています。",
  },
  {
    title: "見積書の工数分解を作るプロンプト",
    prompt:
      "あなたは業務委託の見積作成アシスタントです。\n目的: 作業範囲ごとの工数と金額を算出する\n前提:\n- 業務内容: {業務内容}\n- 納品物: {納品物}\n- 想定単価(時給): {単価}\n制約:\n- 作業を5〜8工程に分解\n- 各工程に「作業内容 / 想定時間 / リスク / 確認ポイント」を付与\n- 金額は税抜で算出\n出力形式:\n- Markdown表（工程, 時間, 小計, 備考）\n- 合計工数と合計金額\n- 見積前提条件と除外項目の文章案",
    note: "見積の妥当性を説明しやすくなり、値引き交渉時の論点整理にも使えます。",
  },
  {
    title: "失注後の再提案を作るプロンプト",
    prompt:
      "あなたはフリーランス営業の改善アシスタントです。\n目的: 失注理由を反映した再提案文を作成\n前提:\n- 初回提案文: {提案文}\n- 失注理由メモ: {失注理由}\n- 今回の改善方針: {改善方針}\n制約:\n- 謝罪ではなく改善提案に焦点を当てる\n- 長さは500字以内\n- 相手の意思決定負荷を下げる比較軸を入れる\n出力形式:\n1. 再提案メール本文\n2. 改善点3つの箇条書き\n3. 次回商談で確認する質問3つ",
    note: "営業履歴を学習させるより、失注理由を明示して再提案に変換した方が再現性が高くなります。",
  },
] as const;

const executionPipeline = [
  {
    step: "1. リサーチ整理",
    humanTask: "論点設定、一次情報の選定、調査範囲の確定",
    aiTask: "資料要約、比較表下書き、論点漏れの洗い出し",
    checkpoint: "根拠URLと更新日が記録されているか",
  },
  {
    step: "2. 文章・資料の下書き",
    humanTask: "読者像の設定、伝える順序の判断、最終表現の決定",
    aiTask: "初稿作成、構成案展開、見出し候補生成",
    checkpoint: "主張と根拠が1対1で対応しているか",
  },
  {
    step: "3. 納品前レビュー",
    humanTask: "数値・固有名詞の確認、トーン調整、責任範囲の明確化",
    aiTask: "誤字脱字検出、重複表現検出、想定質問の生成",
    checkpoint: "誤情報・過剰表現・機密混入がないか",
  },
] as const;

const billingOps = [
  {
    title: "請求書の文面と条件をAIで標準化する",
    detail:
      "案件ごとの請求書で毎回迷うのは、請求条件、支払期限、備考文の書き方です。AIで雛形を持ち、案件固有の条件だけ更新すると作成時間を短縮できます。",
  },
  {
    title: "入金管理と督促文をワークフロー化する",
    detail:
      "入金遅延の確認を手作業で行うと漏れやすくなります。AIで督促文の下書きを作り、入金ステータスの確認タスクを週次で固定すると管理しやすくなります。",
  },
  {
    title: "案件終了時に次回提案メモを残す",
    detail:
      "納品直後に「何が評価されたか」「どこで工数超過したか」を3行で記録すると、次回提案の精度が上がります。AIに議事録を要約させると記録習慣を続けやすくなります。",
  },
] as const;

const weeklyWorkflowRows = [
  {
    duration: "20分",
    task: "案件獲得タスク",
    operation: "提案書下書きと見積条件の更新",
    output: "今週提出する提案2本のドラフト",
  },
  {
    duration: "35分",
    task: "実作業タスク",
    operation: "リサーチ要約、本文初稿、レビュー指摘抽出",
    output: "納品予定タスクの進捗更新",
  },
  {
    duration: "20分",
    task: "請求・管理タスク",
    operation: "請求書文面確認、入金状況確認、督促文下書き",
    output: "請求ステータス一覧の更新",
  },
  {
    duration: "15分",
    task: "改善タスク",
    operation: "失注理由と納品フィードバックを記録",
    output: "来週の提案改善メモ",
  },
] as const;

const operationRules = [
  "就業規則・契約条件を確認し、AI使用範囲を案件ごとに言語化する",
  "機密情報・個人情報を入力しない。必要時は匿名化したテキストで代替する",
  "AI出力をそのまま納品しない。根拠確認と責任者レビューを通す",
  "案件終了時に改善メモを残し、提案品質と見積精度を継続改善する",
] as const;

const keywordTags = ["フリーランス AI 活用", "副業 AI 効率化", "個人事業主 AI ツール"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "acquire-projects", label: "案件獲得: 提案書・見積書をAIで作る" },
  { id: "delivery-work", label: "実作業: リサーチ・生成・レビューを分業する" },
  { id: "billing-management", label: "請求・管理: 請求書と記録をAIで回す" },
  { id: "weekly-workflow", label: "週次運用: 90分のAIワークフロー実例" },
  { id: "operation-rules", label: "運用ルール: 品質と信頼を落とさない方法" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

export default function AiFreelanceWorkGuidePage({ faqItems }: AiFreelanceWorkGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "フリーランス・副業のAI活用術" },
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
                title="フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            フリーランス・副業のAI活用術｜提案・作業・請求まで効率化する実践ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            フリーランスのAI活用は、文章生成の速さだけでは成果につながりません。案件獲得、実作業、請求・管理の3段階で役割を分けると、時短と品質を両立しやすくなります。
            この記事では、提案書・見積書のコピペ可能プロンプト、納品前レビューの型、請求管理の運用まで具体手順で整理します。
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
            <li className="pl-1 marker:text-gray-500">案件獲得では、提案書と見積の初稿をAIで作り、案件文脈は人間が上書きする運用が有効です。</li>
            <li className="pl-1 marker:text-gray-500">実作業では、リサーチ整理・下書き・納品前チェックの工程を分けると品質が安定します。</li>
            <li className="pl-1 marker:text-gray-500">請求・管理では、請求文面、入金確認、改善メモを定型化すると翌月の営業効率が上がります。</li>
            <li className="pl-1 marker:text-gray-500">副業会社員は就業規則と情報管理ルールを先に固定し、AI利用範囲を案件単位で明示してください。</li>
          </ul>
        </motion.section>

        <motion.section
          id="acquire-projects"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            案件獲得フェーズは、提案書と見積書をAIで分業すると短時間でも具体性を出せる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            提案の成否は、文章の流暢さより「課題理解」「成果指標」「実行範囲」の明確さで決まります。AIは構成と初稿に使い、案件特有の背景は人間が追記する形が実務向きです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            とくに副業案件では提案準備に使える時間が限られます。そこで、提案書と見積書の型を持ち、毎回ゼロから書かない運用に切り替えると、応募本数を増やしながら品質を維持できます。
            まずは
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            の型を参考に、営業用途に合わせてテンプレを再設計してください。
          </p>

          <div className="mt-8 space-y-6">
            {promptExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700">{example.prompt}</pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{example.note}</p>
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
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="delivery-work"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実作業フェーズは、リサーチ・生成・レビューを分離すると納品品質を落とさず効率化できる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「AIに書かせる」だけで終わると、根拠不足や文脈ズレが起こりやすくなります。実作業は工程を3つに分け、AIと人間の責任を先に決めると安定します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            具体的には、1) リサーチ整理、2) 下書き生成、3) 納品前レビューの順に固定します。生成精度を上げるコツは、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTを仕事で使いこなす実践テクニック集
            </Link>
            で解説しているように、目的・制約・出力形式を毎回明記することです。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">工程</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">人間の担当</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AIの担当</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">チェックポイント</th>
                </tr>
              </thead>
              <tbody>
                {executionPipeline.map((row) => (
                  <tr key={row.step} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.step}</th>
                    <td className="py-4 px-4">{row.humanTask}</td>
                    <td className="py-4 px-4">{row.aiTask}</td>
                    <td className="py-4 pl-4">{row.checkpoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            この分業を導入すると、作業時間だけでなく修正往復の回数も減らせます。クライアントへの説明責任を保つために、AI出力を採用した理由と不採用にした理由を短く残す運用も有効です。
          </p>
        </motion.section>

        <motion.section
          id="billing-management"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            請求・管理フェーズは、請求書作成と記録運用をAI化すると月末処理の負担を下げられる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            納品後の請求処理を後回しにすると、売上管理と税務準備が崩れます。請求文面、入金確認、次回提案メモの3点をテンプレ化し、案件終了時に同時処理するのが実務的です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            制度面では、副業・兼業のルール確認（厚労省）に加えて、取引条件明示や報酬支払期日などを定める「特定受託事業者に係る取引の適正化等に関する法律（フリーランス法、2024年11月1日施行）」、帳簿と書類保存（国税庁）の確認が基礎になります。制度情報の確認日: 2026年2月20日。
          </p>
          <div className="mt-7 space-y-4">
            {billingOps.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">情報管理の補足（確認日: 2026年2月20日）</p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              ChatGPT利用とAPI利用ではデータ取り扱いの前提が異なるため、案件ごとに入力ルールを分けてください。顧客情報を扱う案件では、匿名化テキストで検討し、最終文面だけを人間側で戻し込む運用が安全です。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="weekly-workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            週次運用フェーズは、90分の固定ワークフローを回すと案件獲得と納品改善を継続しやすい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI活用は単発の時短より、毎週同じ順序で回せるかが重要です。副業と本業を両立するなら、週1回90分で営業・制作・管理・改善をまとめて更新する形が現実的です。
          </p>
          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">時間</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">タスク</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">実行内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">成果物</th>
                </tr>
              </thead>
              <tbody>
                {weeklyWorkflowRows.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.duration}</th>
                    <td className="py-4 px-4">{row.task}</td>
                    <td className="py-4 px-4">{row.operation}</td>
                    <td className="py-4 pl-4">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            副業をこれから本格化する方は
            <Link href="/academy/blog/ai-side-business-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              副業でAIを活用する始め方ガイド
            </Link>
            、実績の見せ方を強化したい方は
            <Link href="/academy/blog/ai-portfolio-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIスキルのポートフォリオ作り方
            </Link>
            を併せて確認すると、受注導線まで設計しやすくなります。
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
          id="operation-rules"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            運用ルールフェーズは、品質・情報管理・期待値調整を先に固定するとトラブルを減らせる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AIを使った案件で評価されるのは、出力速度ではなく安定品質です。クライアントとの合意事項を言語化し、レビュー手順を固定してから運用を始めてください。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {operationRules.map((rule) => (
              <li key={rule} className="pl-1 marker:text-gray-500">
                {rule}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーの学習方針</p>
            <p className="mt-3 text-sm leading-7 text-blue-800">
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを使って自己理解・キャリアデザインを深め、仲間と共に学ぶ環境で実務定着を進めることを重視しています。
              実装スキルだけで終わらせず、キャリアの意思決定までつなぐ設計です。
            </p>
          </div>
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            運用で詰まりやすいのは、品質基準と情報管理ルールの線引きです。まず小さく運用し、週次で調整する前提で読み進めてください。
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
            <LineCtaBox />
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-side-business-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                副業でAIを活用する始め方ガイド｜学習から案件獲得までの現実的な進め方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-portfolio-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIスキルのポートフォリオ作り方2026｜転職・副業・社内評価につながる実績のまとめ方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集｜メール・議事録・資料作成をAIで効率化
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-advanced-tips" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTを仕事で使いこなす実践テクニック集｜基本から応用まで50のTips
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
