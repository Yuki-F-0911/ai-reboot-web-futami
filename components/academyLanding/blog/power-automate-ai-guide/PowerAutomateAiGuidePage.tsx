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

type PowerAutomateAiGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "Power Automate 生成AI",
  "Copilot Studio 使い方",
  "AI Builder 活用",
  "Microsoft AI 自動化",
  "Teams / Excel 自動化",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-can-do", label: "Power Automate × 生成AIでできること" },
  { id: "recipes-10", label: "自動化レシピ集（Microsoft環境10選）" },
  { id: "choose-platform", label: "Azure OpenAI vs Copilot Studioの判断フロー" },
  { id: "personal-vs-it", label: "個人でできる範囲とIT部門が必要な範囲" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "article-summary", label: "まとめ" },
  { id: "cta", label: "次のアクション" },
] as const;

const recipeCards = [
  {
    no: "01",
    title: "Teams投稿への一次返信を自動化",
    trigger: "特定チャネルに新規投稿があったとき",
    flow: "キーワード判定 → 定型返信 → 担当者メンション",
    outcome: "問い合わせ初動を標準化し、返信待ち時間を短縮する。",
    scope: "個人主導で開始可（チーム公開時は管理者確認）",
  },
  {
    no: "02",
    title: "TeamsメッセージからTo Do / Plannerタスク化",
    trigger: "「#タスク化」付きメッセージを受信",
    flow: "メッセージ本文抽出 → 期限推定 → タスク登録",
    outcome: "口頭依頼やチャット依頼の取りこぼしを減らす。",
    scope: "個人主導で開始可",
  },
  {
    no: "03",
    title: "Outlookメール仕分け × 生成AI要約",
    trigger: "共有メールボックスに新着メール",
    flow: "件名/本文分類 → Azure OpenAIで要約生成 → 優先度タグ付け → Teams通知",
    outcome: "朝のメール処理を圧縮し、重要案件への着手を早める。",
    scope: "外部AI連携時はIT部門確認推奨",
  },
  {
    no: "04",
    title: "Excelデータの分析レポートを自動生成",
    trigger: "毎週金曜18:00",
    flow: "Excel集計 → 変化点抽出 → AI要約文生成 → Teams配信",
    outcome: "定例会議前の準備時間を削減し、議論を前倒しできる。",
    scope: "個人主導で開始可",
  },
  {
    no: "05",
    title: "SharePoint申請フォームをAI要約して承認者へ送付",
    trigger: "申請アイテム作成時",
    flow: "申請内容整形 → 要約生成 → 承認依頼カード送信",
    outcome: "承認者の読解負荷を下げ、滞留を防ぐ。",
    scope: "組織運用ならIT部門連携が安全",
  },
  {
    no: "06",
    title: "会議録画/議事メモからフォローアップ文を生成",
    trigger: "会議終了後のファイル格納",
    flow: "テキスト抽出 → 決定事項/宿題抽出 → 共有文生成",
    outcome: "会議後の連絡を定型化し、抜け漏れを減らす。",
    scope: "個人主導で開始可",
  },
  {
    no: "07",
    title: "問い合わせ履歴からFAQ候補を自動更新",
    trigger: "同一カテゴリ問い合わせが閾値超過",
    flow: "履歴集計 → 質問文テンプレ化 → 回答案生成 → レビュー依頼",
    outcome: "FAQ更新サイクルを短縮し、自己解決率を高める。",
    scope: "公開前レビュー体制はIT/業務責任者が必要",
  },
  {
    no: "08",
    title: "採用応募メールの一次スクリーニング補助",
    trigger: "採用メール受信時",
    flow: "職務要件照合 → 観点メモ生成 → 担当者に割り当て",
    outcome: "選考初期の観点漏れを減らし、対応速度を上げる。",
    scope: "個人情報ポリシーのためIT/人事部門連携が必要",
  },
  {
    no: "09",
    title: "請求書PDFの項目抽出と台帳登録",
    trigger: "経理用メール受信時",
    flow: "AI Builderで請求書情報抽出 → Excel/Dataverse登録 → 承認通知",
    outcome: "手入力ミスを抑え、締め処理の平準化につなげる。",
    scope: "本番運用はIT部門連携が推奨",
  },
  {
    no: "10",
    title: "Copilot Studioエージェントから社内業務フロー起動",
    trigger: "Copilotへの自然言語依頼",
    flow: "意図判定 → agent flow実行 → Power Automate連携 → 結果返信",
    outcome: "問い合わせ対応を会話起点で統一し、部門横断業務を短縮する。",
    scope: "IT主導（権限設計・監査ログ・接続管理が必要）",
  },
] as const;

const decisionRows = [
  {
    axis: "主な目的",
    copilotStudio: "業務部門が短期間で会話型UIを作りたい",
    azureOpenAi: "アプリ組み込み前提で高度な制御を行いたい",
  },
  {
    axis: "運用主体",
    copilotStudio: "現場担当 + 情シスの軽い支援",
    azureOpenAi: "IT部門/開発チーム主導",
  },
  {
    axis: "強み",
    copilotStudio: "エージェント設計とPower Platform連携が速い",
    azureOpenAi: "モデル選択・セキュリティ・監査統合の自由度が高い",
  },
  {
    axis: "向いている導入フェーズ",
    copilotStudio: "PoC〜部門導入（短期成果が必要）",
    azureOpenAi: "全社基盤化・既存システム統合",
  },
  {
    axis: "注意点",
    copilotStudio: "ライセンス/クレジット設計を先に確認する",
    azureOpenAi: "設計・実装コストと運用責任が増える",
  },
] as const;

const individualScope = [
  "個人・チーム内で使う通知フロー（Teams/Outlook中心）",
  "ExcelやSharePointを使った定型集計と要約の自動化",
  "定型文の一次返信や議事メモ整理など、判断不要の作業",
  "小規模ユーザーでの試行（失敗時の影響範囲が限定される）",
] as const;

const itScope = [
  "個人情報・機密情報・顧客データを扱うフロー",
  "Premium Connectorや外部API（Azure OpenAI/HTTP）を使う構成",
  "全社共有ボット、監査ログ、権限制御が必要な運用",
  "Dataverseや基幹システム連携など停止影響が大きい処理",
] as const;

const consultChecklist = [
  "送信データに個人情報・機密情報が含まれないか",
  "実行ログを誰がレビューし、どの期間保管するか",
  "フロー停止時の代替手順（手作業バックアップ）があるか",
  "ライセンスとクレジットの消費見積もりができているか",
] as const;

const academyPillars = [
  "生成AI活用力: 現場で再現できるフロー設計力を身につける",
  "自己理解・キャリアデザイン: 得意業務をAIで拡張し、次の役割を設計する",
  "仲間と共に学ぶ環境: 運用事例を共有し、失敗を高速で改善できる",
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </div>
  );
}

export default function PowerAutomateAiGuidePage({ faqItems }: PowerAutomateAiGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Power Automate × 生成AI活用" },
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
                title="Power Automate × 生成AI活用｜Microsoft環境の現場自動化レシピ集"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Power Automate × 生成AI活用｜Microsoft環境の現場自動化レシピ集
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Microsoft 365の現場では、Teams・Outlook・Excelをまたぐ定型作業が残り続けます。Power
            AutomateにCopilot StudioやAI Builderを組み合わせると、通知・要約・分類・下書き作成までを業務フローの中で自動化できます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            重要なのは「どこまでを個人で実装し、どこからIT部門に引き継ぐか」を最初に決めることです。本記事は、現場ですぐ使える10レシピと、Azure
            OpenAIとCopilot Studioの判断フローをセットで整理します（確認日: 2026-02-20）。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Power Automateの強みは、<span className="font-semibold text-gray-900">Microsoft 365の既存業務を止めずに自動化を差し込める</span>点です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Copilot Studioは会話体験の構築が速く、Azure OpenAIは高度制御と既存システム統合に向きます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              実務効果を出しやすい順番は「通知自動化 → 分類/要約 → 承認/記録の自動化」です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              プレミアムコネクタ、機密データ、全社展開のいずれかに触れる時点でIT部門連携が必須になります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              クレジット/ライセンス制度は更新が速いため、導入判断は必ず最新ドキュメントで再確認してください。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            titleClassName="text-base font-semibold text-green-800"
          />
        </motion.section>

        <motion.section
          id="what-can-do"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Power Automate × Copilot Studio / AI Builderでできることは「業務の接続」と「判断補助」の両立です
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、Power Automateは「アプリ間をつなぐ自動化」、生成AIは「文章化・分類・要約」の判断補助を担います。両者を組み合わせると、手作業の橋渡しと情報整理を同時に削減できます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            例えば、Outlook受信メールを分類してTeamsへ通知し、担当者向けに要約付きで渡すフローは、Microsoft
            365だけでも構築可能です。さらにCopilot Studioを使えば、利用者はフローの存在を意識せず、チャットから業務依頼を実行できます。
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">現場で効果が出る3パターン</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">通知の自動化:</span>{" "}
              Teams/メール通知の標準化で、見落としと初動遅延を減らす。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">情報整形の自動化:</span>{" "}
              要約・分類・タグ付けで、担当者が判断に使える形に整える。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">承認フローの短縮:</span>{" "}
              申請内容を短文化して承認者へ渡し、判断速度を上げる。
            </li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">導入前に押さえるライセンス論点</h3>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            2026年時点では、Power Automateの標準コネクタで始める範囲なら現場主導で検証しやすい一方、Azure
            OpenAIコネクタなどのPremium Connectorや、Copilot Studio/AI Builderのクレジット消費を伴う構成では、費用と運用ルールの設計が必要です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            特に、AI Builder creditsとCopilot Creditsの扱いは更新頻度が高いため、PoC段階でも「月次の実行量」「本番ユーザー数」「失敗再実行率」を試算しておくと、後から予算超過を避けやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="recipes-10"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            自動化レシピ集（Microsoft環境10選）は「今日動かせる順」で実装すると失敗しにくいです
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            次の10レシピは、Microsoft 365利用企業で再現しやすいものだけを選定しています。最初の3本は個人主導で試しやすく、後半はIT部門連携を前提にした拡張パターンです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recipeCards.map((recipe) => (
              <section key={recipe.no} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold tracking-wider text-will-primary">RECIPE {recipe.no}</p>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-gray-900">{recipe.title}</h3>
                <dl className="mt-4 space-y-2 text-sm leading-7 text-gray-700">
                  <div>
                    <dt className="font-semibold text-gray-900">トリガー</dt>
                    <dd>{recipe.trigger}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">フロー</dt>
                    <dd>{recipe.flow}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">期待効果</dt>
                    <dd>{recipe.outcome}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">導入範囲</dt>
                    <dd>{recipe.scope}</dd>
                  </div>
                </dl>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            実装の優先順位に迷う場合は、まず通知と集計のレシピ（01〜04）から着手し、効果測定の指標を作ってから、承認・台帳連携（05以降）へ進むと失敗が減ります。ワークフロー設計の比較軸は
            <Link
              href="/academy/blog/workflow-automation-comparison"
              className="mx-1 text-will-primary underline underline-offset-4 hover:text-will-primary/80"
            >
              workflow-automation-comparison
            </Link>
            でも整理しています。
          </p>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            titleClassName="text-base font-semibold text-green-800"
          />
        </motion.section>

        <motion.section
          id="choose-platform"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Azure OpenAI vs Copilot Studioは「誰が運用するか」から逆算すると判断しやすいです
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            どちらが上位かではなく、導入主体と統制要件で選ぶのが実務的です。部門が短期間で成果を作るならCopilot Studio、全社基盤や厳密統制を目指すならAzure OpenAIが適しています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">判断軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Copilot Studio寄り</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Azure OpenAI寄り</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.copilotStudio}</td>
                    <td className="py-4 pl-4">{row.azureOpenAi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">判断フロー（3ステップ）</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">業務部門が自走したいか</span>を先に決める。自走優先ならCopilot Studioで小さく始める。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">データ統制要件</span>を確認する。監査・接続制御が厳しいならAzure OpenAI設計をIT主導で進める。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">Power Automate連携範囲</span>
              を定義する。通知だけか、基幹連携まで含むかで構成が変わる。
            </li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Copilot Studio以外のエージェント実装を比較したい場合は
            <Link
              href="/academy/blog/dify-beginner-guide"
              className="mx-1 text-will-primary underline underline-offset-4 hover:text-will-primary/80"
            >
              dify-beginner-guide
            </Link>
            も参照すると、ノーコード実装の設計観点を広く比較できます。
          </p>
        </motion.section>

        <motion.section
          id="personal-vs-it"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            個人でできる範囲とIT部門が必要な範囲を分けると、導入スピードと安全性を両立できます
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            自動化が止まる最大要因は、技術難易度よりも責任範囲の曖昧さです。最初に境界線を決めれば、現場は試行を速く回し、IT部門は必要箇所だけ統制できます。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-green-200 bg-green-50 p-5">
              <h3 className="text-base font-semibold text-green-900">個人主導で始めやすい範囲</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                {individualScope.map((item) => (
                  <li key={item} className="pl-1 marker:text-green-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-lg border border-orange-200 bg-orange-50 p-5">
              <h3 className="text-base font-semibold text-orange-900">IT部門連携が必要な範囲</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                {itScope.map((item) => (
                  <li key={item} className="pl-1 marker:text-orange-700">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">IT相談前のチェックリスト</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {consultChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            導入効果の見せ方に迷う場合は、
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="mx-1 text-will-primary underline underline-offset-4 hover:text-will-primary/80"
            >
              ai-business-efficiency-cases
            </Link>
            と
            <Link
              href="/academy/blog/ai-hr-recruiting"
              className="mx-1 text-will-primary underline underline-offset-4 hover:text-will-primary/80"
            >
              ai-hr-recruiting
            </Link>
            の事例軸を参考に、部門KPIへ接続してください。
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
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <LineCtaBox
              className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
              titleClassName="text-base font-semibold text-green-800"
            />
          </div>
        </motion.section>

        <motion.section
          id="related-links"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">関連リンク</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/workflow-automation-comparison" className="text-will-primary underline underline-offset-4 hover:text-will-primary/80">
                workflow-automation-comparison
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/dify-beginner-guide" className="text-will-primary underline underline-offset-4 hover:text-will-primary/80">
                dify-beginner-guide
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-business-efficiency-cases" className="text-will-primary underline underline-offset-4 hover:text-will-primary/80">
                ai-business-efficiency-cases
              </Link>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-hr-recruiting" className="text-will-primary underline underline-offset-4 hover:text-will-primary/80">
                ai-hr-recruiting
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="article-summary"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            Power Automate × 生成AIの導入では、ツール選定よりも「業務の切り分け」「責任範囲」「運用ルール」が成果を左右します。小さく始めて、効果測定できる単位で拡張することが最短ルートです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。ツールをどの業務に組み込むか、活用の判断軸ごと整理したい方は、学習全体の設計を見直すのが有効です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {academyPillars.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="cta"
          className="mt-14 rounded-xl border border-will-primary/20 bg-will-lighter/40 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            まずはレシピ01〜04の中から1つ選び、1週間で「作成→運用→改善」まで回してください。その実績を持ってIT部門と連携すると、部門導入から全社展開までの意思決定が速くなります。
          </p>
        </motion.section>
      </article>
    </main>
  );
}
