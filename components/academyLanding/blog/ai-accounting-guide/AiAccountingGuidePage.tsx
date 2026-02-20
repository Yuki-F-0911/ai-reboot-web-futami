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

type AiAccountingGuidePageProps = {
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

const keywordTags = ["経理 AI 活用", "財務 生成AI 業務効率化", "仕訳 AI 自動化", "経理 ChatGPT"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "where-ai-works", label: "経理でAIが効く業務の整理" },
  { id: "journal-expense", label: "仕訳・経費精算での活用" },
  { id: "monthly-report", label: "月次レポート・予算差異分析" },
  { id: "data-risk", label: "機密データのリスクと対策" },
  { id: "excel-macro", label: "ExcelマクロをAIで生成する方法" },
  { id: "data-analysis", label: "自然言語でデータを集計する方法" },
  { id: "steps", label: "導入ステップ（3段階）" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "次のアクション" },
] as const;

const backgroundItems = [
  {
    title: "定型業務の工数増加",
    body: "月次決算・経費精算・レポート作成など、繰り返しの多い文章業務が積み重なり、担当者の工数を圧迫しています。AIは「型がある業務」の処理速度を上げられます。",
  },
  {
    title: "データ量の増加とレポーティング負荷",
    body: "会計システムに蓄積されるデータ量が増える一方、経営会議向けのコメント作成や差異説明に時間がかかります。AIは数値から文章を生成する補助が得意です。",
  },
  {
    title: "人材不足と繁忙期の集中",
    body: "年度末・月末に業務が集中する経理部門では、少ない人数で大量の処理をこなす必要があります。マクロ生成・テンプレート作成でAIは工数削減に貢献できます。",
  },
] as const;

const journalUseCases = [
  {
    title: "勘定科目の候補提示",
    detail:
      "取引内容や摘要文をAIに渡すと、適切な勘定科目の候補を提示させられます。最終判断は経理担当者が行う前提で、検証ステップを省かずに導入するのが基本です。",
  },
  {
    title: "経費申請の確認・質問対応",
    detail:
      "経費規程を学習させたAIに「この領収書は精算可能か」を確認するフローを作ると、担当者への問い合わせを一次回答レベルで整理できます。規程を定期的に更新する運用も必要です。",
  },
  {
    title: "仕訳パターンの標準化",
    detail:
      "よく使う仕訳パターンをプロンプトテンプレートに落とし込むと、新人教育や引き継ぎ時の標準化に使えます。会計ソフトとの二重管理にならないよう入力手順を明確にします。",
  },
  {
    title: "規定外経費の照合確認",
    detail:
      "経費精算データと社内規程をAIに渡し、「規定外の可能性がある行を抽出して」と指示すると、確認漏れのリスクを下げられます。最終確認は担当者が行います。",
  },
] as const;

const reportUseCases = [
  {
    title: "月次レポートのコメント文生成",
    detail:
      "予算・実績・差異の数値をAIに渡すと、コメント文のたたき台を数分で作れます。文章起草にかかる時間を削減し、担当者はレビューと修正に集中できます。",
  },
  {
    title: "予算差異のサマリー作成",
    detail:
      "勘定科目別の差異一覧から、「差異が大きい順に3項目の原因と対策をまとめて」と指示すると、経営会議向けの説明資料のたたき台になります。",
  },
  {
    title: "経営会議資料のたたき台",
    detail:
      "財務データの要約、前期比・前月比のポイント整理、注意すべき傾向の抽出などをAIに任せると、資料作成の初速が上がります。最終的な数値確認は必ず担当者が行います。",
  },
] as const;

const dataRiskItems = [
  {
    title: "外部送信・学習データへの利用",
    body: "無料・標準プランのAIサービスでは、入力内容がサービス改善に利用される場合があります。2026年2月時点の公開ポリシーでは、ChatGPT Business/EnterpriseやClaudeの商用プランで学習利用に関する方針が明示されています。実際の運用可否は契約プランの仕様を必ず確認してください。",
  },
  {
    title: "入力禁止情報の例",
    body: "顧客名・取引先名・個人名・銀行口座番号・未公開の財務数値（売上・利益）・契約金額・社員の給与情報などは、外部AIへの入力を禁止するか、事前にマスキング（〇〇社、X百万円など）してから入力するルールを作ります。",
  },
  {
    title: "対策の4つの選択肢",
    body: "①エンタープライズプランを利用する（学習無効・SOC2対応など）。②匿名化・マスキングして入力する。③社内LLMやAzure OpenAI（データが外部送信されない環境）を検討する。④社内AIガイドラインを整備し、入力可能情報を明文化する。",
  },
] as const;

const macroPrompt: PromptTemplate = {
  title: "Excelマクロ（VBA）生成",
  canDo: "やりたいことを日本語で書くだけで、コピペして使えるVBAコードを生成できます。",
  prompt:
    "あなたはExcel VBAの専門家です。以下の条件でマクロを作成してください。\n\n【やりたいこと】{例: A列の金額をB列の部門コード別に集計してC列に出力する}\n【対象シート名】{例: 仕訳データ}\n【出力先シート/セル】{例: 集計シートのA1から}\n【データの開始行】{例: 2行目（1行目はヘッダー）}\n【特記事項・除外条件】{例: 「消費税」を含む行は除く}\n\n条件:\n- コードには日本語コメントを行ごとに入れる\n- On Error GoToによるエラー処理を含める\n- 実行前にMsgBoxで確認メッセージを表示する\n- 変数は宣言してから使う（Option Explicit前提）\n\n出力形式:\nコードのみを出力し、説明はコード内コメントに含める",
};

const reportPromptTemplates: readonly PromptTemplate[] = [
  {
    title: "月次レポートのコメント文生成",
    canDo: "予算・実績・差異の数値を渡すだけで、経営会議向けのコメント文のたたき台を作れます。",
    prompt:
      "あなたは経理の専門家です。以下のデータをもとに、月次レポートのコメント文を作成してください。\n\n【対象月】{YYYY年MM月}\n【売上高】予算{X}円 / 実績{Y}円 / 差異{Z}円（{差異率%}）\n【売上原価】予算{X}円 / 実績{Y}円 / 差異{Z}円\n【販管費】予算{X}円 / 実績{Y}円 / 差異{Z}円\n【営業利益】予算{X}円 / 実績{Y}円 / 差異{Z}円\n\n差異が大きい項目の主因: {例: 広告費の前倒し執行、特定顧客案件の売上翌月繰越}\n\n条件:\n- 重要な差異を差異金額の大きい順に説明する\n- 各項目の原因と今後の見込みを一文ずつ書く\n- 全体で200〜300字に収める\n- 断定的すぎる表現は避け、根拠に基づく記述にする",
  },
  {
    title: "予算差異分析サマリー",
    canDo: "差異一覧から経営会議向けの優先説明事項を抽出・整理できます。",
    prompt:
      "あなたは財務分析の専門家です。以下の予算差異データをもとに、経営会議向けのサマリーを作成してください。\n\n【データ】\n{勘定科目, 予算, 実績, 差異, 差異率の一覧をCSV形式で貼り付け}\n\n条件:\n- 差異が大きい順にTOP3〜5項目を抽出する\n- 各項目について「差異の内容」「考えられる原因」「対応の方向性」を簡潔に書く\n- 全体として楽観/悲観の傾向も一言でまとめる\n- 事実と推測を区別した表現にする（「〜の可能性があります」「〜と考えられます」）",
  },
] as const;

const dataAnalysisTips = [
  {
    title: "CSVを添付して部門別集計",
    prompt: "このCSVの「部門コード」列ごとに「金額」列の合計を計算して、表形式で出してください。",
    note: "会計システムからエクスポートした経費データや仕訳データをそのまま渡せます。機密情報を含む場合はマスキングしてから使用します。",
  },
  {
    title: "前月比・前年比の差異を抽出",
    prompt: "このデータで前月比の増減が10%以上の勘定科目をリストアップし、増加/減少/変化率を表にしてください。",
    note: "数値の計算と整理をAIに任せ、担当者はコメント作成と検証に集中できます。",
  },
  {
    title: "自然言語での集計・可視化",
    prompt: "月別の売上推移を折れ線グラフで表示して。凡例に前年度も入れてください。",
    note: "ChatGPT（有料プラン）のデータ分析機能では、グラフ生成や可視化も可能です。",
  },
] as const;

const rolloutSteps = [
  {
    title: "文章生成業務から始める（リスク低・効果高）",
    body: "月次レポートのコメント文、経費申請への回答文、社内向け説明文など、「書くのに時間がかかる定型文章」から試します。数値や固有情報は最小限にして入力を絞ると安全です。",
  },
  {
    title: "Excel・データ分析に広げる",
    body: "マクロ生成や、CSVデータの集計・差異抽出に使います。入力するデータの機密度に応じて、マスキングルールやエンタープライズプランへの切り替えを検討します。",
  },
  {
    title: "社内ルールを整備して定着させる",
    body: "入力可能な情報の範囲、使用するAIサービスとプラン、レビュー手順を社内AIガイドラインに明文化します。経理部門固有のルール（仕訳への使用制限など）を追記することで、安全に活用範囲を広げられます。",
  },
] as const;

export default function AiAccountingGuidePage({ faqItems }: AiAccountingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "経理・財務部門のAI活用ガイド" },
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
                title="経理・財務部門のAI活用ガイド2026｜仕訳・レポート・予算管理の自動化事例"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            経理・財務部門のAI活用ガイド2026｜仕訳・レポート・予算管理の自動化事例
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            経理・財務部門でAIを使うとき、多くの担当者がぶつかる壁が「機密データを外部サービスに入れていいのか」という問いです。
            この記事では、仕訳確認・経費精算・月次レポート・予算差異分析での具体的な活用方法と、
            データリスクへの対処法、ExcelマクロのAI生成、自然言語によるデータ集計まで、
            経理の現場で使える知識を実務の流れに沿ってまとめます。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
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
          <p className="mt-5 text-base font-medium text-gray-900">
            経理でのAI活用は「文章生成」と「データ分析」の2軸に整理すると、始める業務を選びやすくなります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              月次レポートのコメント文、予算差異サマリー、経費申請への回答文など「定型文章の生成」から始めると、リスクを抑えつつ効果が出やすい。
            </li>
            <li className="pl-1 marker:text-gray-500">
              機密情報（取引先名・未公開財務数値）は外部AIに入力する前に、入力可能な情報範囲を社内で明文化する必要がある。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ExcelマクロはAIで生成できる。「やりたいことを日本語で書く→AIにコードを作らせる→Excelに貼る」の3ステップでプログラミング不要。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ChatGPTやClaudeにCSVを添付すると、自然言語での集計・差異抽出・グラフ生成が可能。数値確認の作業を圧縮しやすい。
            </li>
          </ul>
        </motion.section>

        {/* LINE CTA 1: H2-1直後 */}
        <motion.section
          className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。
            講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <div className="mt-4">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              LINEで週1AI通信を受け取る（無料）
            </a>
          </div>
        </motion.section>

        {/* AIが効く業務の整理 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="where-ai-works" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            経理・財務部門でAIが効く業務の整理
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            経理業務を「文章を作る」「数字を集計・分析する」「確認・照合する」の3種類に分けると、AIの入れ場所が見えやすくなります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AIが得意なのは、①定型文章の下書き生成、②大量データの要約・分類・比較、③パターンに基づく候補提示、の3領域です。
            仕訳の最終入力や数値の確定判断など「責任が伴う判断」は人が担い、AIは「下書きと整理」に使うという位置づけが、経理部門に最も合っています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {backgroundItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            部門を横断した業務効率化の事例は、
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務効率化事例集
            </Link>
            も参考になります。
          </p>
        </motion.section>

        {/* 仕訳・経費精算 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="journal-expense" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            仕訳・経費精算でのAI活用（勘定科目提示・規定照合・申請回答）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            仕訳でAIを使うなら、最終判断は人が行うことを前提に「候補提示」と「確認補助」の範囲に限定すると安全です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            勘定科目の自動仕訳は会計ソフト側の機能として進化していますが、汎用AIを使えば社内独自の勘定体系や摘要の命名ルールに対応した候補提示も実現できます。
            また、経費規程の確認作業はAIに一次照合を任せることで、担当者への問い合わせ件数を減らせます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            2026年2月時点では、freee会計の「AI決算書スキャン」、マネーフォワード クラウド会計の「AI-OCRから入力」、弥生の「スマート取引取込/スマート証憑管理」など、会計ソフト側のAI補助機能も拡充が続いています。機能名や対応範囲はプランで異なるため、導入前に最新版ヘルプの確認が必要です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {journalUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* 月次レポート・予算差異分析 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="monthly-report" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            月次レポート・予算差異分析でのAI活用
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            数値から「コメント文のたたき台」を作る業務は、AIで最も効率化しやすい経理タスクのひとつです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            月次レポートの作成では、数値の正確性の確認とコメント文の起草に多くの時間がかかります。
            AIに予算・実績・差異の数値を渡すと、コメントのたたき台を数分で生成できます。
            担当者はAIの文章を検証・修正することに集中でき、レポート作成の工数を大幅に削減できます（工数削減幅は業務規模や運用によって異なります）。
          </p>
          <div className="mt-6 space-y-4">
            {reportUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
        </motion.section>

        {/* LINE CTA 中盤 */}
        <motion.section
          className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。
            講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <div className="mt-4">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              LINEで週1AI通信を受け取る（無料）
            </a>
          </div>
        </motion.section>

        {/* 機密データのリスクと対策 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="data-risk" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            機密データを外部AIに入れる前に確認すること
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            経理部門でAIを使う前に、「入力可能な情報の範囲」を先に決めることが、安全な活用の前提です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            経理・財務部門が扱うデータは機密度が高く、取引先の情報・未公開の財務数値・個人情報などが含まれます。
            外部のAIサービスに入力するリスクには3つの種類があります：
            ①サービス改善のための学習データへの利用、②外部への送信とログ保存、③不正アクセス時の情報漏えい。
            これらへの対処は「禁止」ではなく「ルールを作ること」で、現場の安全な活用につながります。
          </p>
          <div className="mt-6 space-y-4">
            {dataRiskItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            社内のAIガイドライン整備については、
            <Link
              href="/academy/blog/ai-guideline-template"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIの社内ガイドライン雛形
            </Link>
            に入力ルールのテンプレートを掲載しています。
          </p>
        </motion.section>

        {/* Excelマクロ生成 */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 id="excel-macro" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ExcelマクロをAIで生成する方法（プログラミング不要）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            VBAを知らなくても、「やりたいことを日本語で書く→AIにコードを作らせる→Excelに貼る」の3ステップでマクロを動かせます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ExcelのVBAはテキスト形式のプログラミング言語で、AIが最も得意とするコード生成対象のひとつです。
            毎月繰り返しているデータ集計や転記、書式整形などの作業を自動化するのに向いています。
            作成したマクロは、ExcelのVBAエディタ（Alt+F11）を開いて標準モジュールに貼り付けるだけで動作します。
          </p>
          <div className="mt-6">
            <section className="rounded-lg border border-gray-100 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">{macroPrompt.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                <span className="font-semibold text-gray-900">このプロンプトでできること:</span> {macroPrompt.canDo}
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
              <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                <code>{macroPrompt.prompt}</code>
              </pre>
            </section>
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">実行前の確認ポイント</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-800">
              <li className="pl-1">生成されたコードは、テスト用のコピーデータで動作確認をしてから本番データに使う</li>
              <li className="pl-1">
                コードの内容が理解できない場合は「このコードが何をしているか日本語で説明して」と追加質問できる
              </li>
              <li className="pl-1">
                Excelのバージョン（365/2019など）を指定すると、互換性の高いコードを生成してもらいやすい
              </li>
            </ul>
          </div>
        </motion.section>

        {/* 自然言語でデータを集計する方法 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="data-analysis" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            自然言語でデータを集計する方法（月次レポート・差異分析のプロンプト例）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            ChatGPT・Claudeに数値データを貼り付けるか、CSVを添付すると、日本語で集計・分析・グラフ生成を指示できます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ChatGPT（有料プラン）のデータ分析機能では、CSVやExcelファイルをアップロードして自然言語で集計できます。
            Claudeも同様にテキストやCSVデータを貼り付けると、分析してくれます。
            機密情報を含む場合は、会社名・個人名・具体的な金額をマスキング（〇〇社、X百万円など）してから使用します。
          </p>
          <div className="mt-6 space-y-4">
            {dataAnalysisTips.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-xs font-semibold tracking-wide text-gray-500">プロンプト例</p>
                <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  <code>{item.prompt}</code>
                </pre>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.note}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">月次レポート・差異分析のプロンプトテンプレート</h3>
            {reportPromptTemplates.map((template) => (
              <section key={template.title} className="rounded-lg border border-gray-100 bg-gray-50 p-5">
                <h4 className="text-base font-semibold text-gray-900">{template.title}</h4>
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
          <p className="mt-6 text-sm leading-7 text-gray-700">
            業務別のプロンプト例をさらに確認したい場合は、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            も参考にしてください。
          </p>
        </motion.section>

        {/* 導入ステップ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            経理部門でのAI導入ステップ（3段階）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            入力ルールを先に決め、文章生成から始めて、段階的にデータ分析と自動化に広げる順序が、失敗しにくいです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            ツールを先に決めて全社展開するよりも、業務単位で「型→測定→拡大」の順で進める方が、現場で定着しやすい傾向があります。
            経理部門の場合、まずリスクが低く効果が出やすい文章生成から始め、データ扱いのルールを整えながら活用範囲を広げていくのが現実的な進め方です。
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

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            経理・財務部門でAI活用を始める前に迷いやすいポイントをQ&amp;A形式で整理します。
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

        {/* LINE CTA: FAQ末尾 */}
        <motion.section
          className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。
            講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <div className="mt-4">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              LINEで週1AI通信を受け取る（無料）
            </a>
          </div>
        </motion.section>

        {/* 関連リンク */}
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
                href="/academy/blog/ai-guideline-template"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計 | AIリブート
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
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              経理でのAI活用は「文章生成」と「データ分析」の2軸から始めると、効果が出やすく、リスクも管理しやすい。
            </li>
            <li className="pl-1 marker:text-gray-500">
              月次レポートのコメント文・予算差異サマリーはAIで短時間に下書きを作れ、担当者はレビューと修正に集中できる。
            </li>
            <li className="pl-1 marker:text-gray-500">
              機密データの外部AI入力は、エンタープライズプラン・マスキング・社内ルール策定の3つで管理する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              ExcelマクロはAIで生成できる。テスト確認を挟むことで、プログラミング知識がなくても安全に導入できる。
            </li>
            <li className="pl-1 marker:text-gray-500">
              導入の入り口は「文章生成業務」から。ルールを整えながら、データ分析・自動化へ段階的に広げていく。
            </li>
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション：AIリブートアカデミーで、経理・財務の実務にAIを定着させる
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            プロンプトを一度作れば繰り返し使える「型」にできます。部門ルールと組み合わせると、チーム全体の効率化につながります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「経理の仕事でどこにAIを入れるか」「どのリスクをどう管理するか」まで含めて考えたい方には、アカデミーで自己理解・キャリアデザインと生成AI活用力を組み合わせながら実務への接続を設計できます。
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
