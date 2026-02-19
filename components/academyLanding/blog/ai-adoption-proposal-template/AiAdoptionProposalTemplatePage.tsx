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

type AiAdoptionProposalTemplatePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 稟議 書き方", "導入計画書", "PoC提案", "全社展開"] as const;

const tocItems = [
  { id: "why-not-approved", label: "なぜ稟議が通らないのか" },
  { id: "one-page-framework", label: "1枚計画書のフレームワーク" },
  { id: "copy-ready-sentences", label: "コピペ可の記載サンプル" },
  { id: "poc-proposal", label: "小さく始めるPoC提案" },
  { id: "fullscale-proposal", label: "全社展開提案" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const onePageTemplate = `# 生成AI導入計画書（A4一枚版）

## 1. 導入目的（なぜ今やるか）
- 対象業務:
- 現状課題:
- 目的（3ヶ月後に達成したい状態）:

## 2. 期待効果（定量・定性）
- 定量KPI（工数/件数/品質）:
- 定性効果（顧客体験/従業員負荷）:
- 効果測定方法:

## 3. リスクと対策
- 主要リスク（情報漏えい/誤情報/権限逸脱）:
- 対策（ルール/承認/ログ/教育）:
- 担当部門と責任者:

## 4. 費用と前提
- 費用区分（ツール/運用/教育/セキュリティ）:
- 期間:
- 上限予算:
- 見直し条件:

## 5. 導入ロードマップ
- フェーズ1（PoC）:
- フェーズ2（限定展開）:
- フェーズ3（全社展開）:
- 各フェーズの継続/停止判定基準:`;

const frameworkRows = [
  {
    item: "導入目的",
    question: "何の業務を、どの課題解決のために改善するのか",
    point: "課題を1つに絞り、対象業務を具体名で書く",
  },
  {
    item: "期待効果",
    question: "どの数字が改善すれば成功と判断するのか",
    point: "工数・処理件数・品質指標を先に固定する",
  },
  {
    item: "リスクと対策",
    question: "事故が起きるポイントをどう防ぎ、どう監査するのか",
    point: "ガイドライン、承認フロー、ログ、教育までセットで示す",
  },
  {
    item: "費用",
    question: "何にいくら使うか。上振れ条件は何か",
    point: "費用区分と前提条件を分け、上限と見直し条件を明記する",
  },
  {
    item: "ロードマップ",
    question: "いつ、誰が、何を判断して次に進むのか",
    point: "PoC→限定展開→全社展開の判断ゲートを置く",
  },
] as const;

type LineCtaBoxProps = {
  className?: string;
};

function LineCtaBox({ className }: LineCtaBoxProps) {
  return (
    <section className={className ?? "mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6"}>
      <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </section>
  );
}

export default function AiAdoptionProposalTemplatePage({ faqItems }: AiAdoptionProposalTemplatePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "稟議が通る生成AI導入計画書の作り方" },
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
                title="稟議が通る生成AI導入計画書の作り方｜目的・リスク・費用を1枚で整理"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            稟議が通る生成AI導入計画書の作り方｜目的・リスク・費用を1枚で整理
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AI導入の稟議が止まる理由は、技術不足より「意思決定に必要な情報不足」です。役員が見ているのは、ツールの新しさではなく、
            <span className="font-semibold text-gray-900">目的、効果、リスク、費用、判断タイミング</span>が一枚で読めるかどうかです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、承認者の不安を分解し、A4一枚で説明できる導入計画書のフレームワークを提示します。さらに、稟議書の各項目をそのまま使える記載例付きで解説し、
            小さく始めるPoC提案と全社展開提案の2パターンを示します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="why-not-approved"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">生成AI導入の稟議が通らない理由は「判断材料の不足」に集約される</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            稟議が通らない本質は「反対されている」のではなく、「承認してよい条件が書かれていない」ことです。承認者は失敗時の責任を負うため、判断の根拠が薄い提案を通せません。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">目的が抽象的:</span> 「AIを導入したい」だけで、対象業務と成果指標がない
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">リスク説明が弱い:</span> 情報漏えい・誤情報・権限管理の対策責任が曖昧
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">費用の見通しがない:</span> 初期費用だけ記載し、運用・教育・監査費が漏れている
            </li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            経済産業省のAI事業者ガイドライン（第1.1版）とNIST AI RMFの共通点は、導入時点からガバナンスと監督責任を設計することです。
            個人情報保護委員会の注意喚起も、目的とデータ取り扱いの事前整理を強く求めています。つまり稟議段階で必要なのは、
            <span className="font-semibold text-gray-900">「何をやるか」だけでなく「どう安全に運用するか」</span>の明文化です。
          </p>
          <p className="mt-4 text-xs leading-6 text-gray-500">制度・ガイドラインの確認日: 2026年2月19日</p>
        </motion.section>

        <LineCtaBox className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6" />

        <motion.section
          id="one-page-framework"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">稟議が通る1枚計画書は「目的・効果・リスク・費用・ロードマップ」の5項目で作る</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            1枚に圧縮する目的は、情報を削ることではなく、意思決定の順番を揃えることです。承認者は「実行してよいか」「どの条件で止めるか」を見ます。
            この5項目で整理すれば、稟議の差し戻しを大きく減らせます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">承認者の確認ポイント</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">書き方のコツ</th>
                </tr>
              </thead>
              <tbody>
                {frameworkRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 px-4">{row.question}</td>
                    <td className="py-4 pl-4">{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            リスク統制の作り方は
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの社内ガイドライン雛形
            </Link>
            と
            <Link href="/academy/blog/shadow-ai-countermeasures" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              シャドーAI対策
            </Link>
            を先に読んでおくと、稟議内の対策欄が一貫します。
          </p>
        </motion.section>

        <motion.section
          id="copy-ready-sentences"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">稟議書の各項目は「コピペ可サンプル文」で先に下書きを作ると通りやすい</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            稟議はゼロから作文するより、骨格を固定して修正した方が速く正確です。以下はそのまま貼って調整できる記載例です。
          </p>

          <div className="mt-7 space-y-5">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">1. 目的の書き方（例）</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{`【導入目的】
営業部の提案書作成業務において、初稿作成時間を短縮し、顧客提案までのリードタイムを短縮する。
対象業務は「提案構成案の作成」「既存資料の要約」「Q&A下書き作成」に限定する。`}
              </pre>
            </section>

            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">2. 期待効果の書き方（例）</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{`【期待効果】
定量効果: 対象者10名の提案書作成工数を月20%削減する（測定期間: 導入後3ヶ月）。
定性効果: 下書き品質のばらつきを抑え、レビュー指摘回数の削減を目指す。`}
              </pre>
            </section>

            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">3. リスクと対策の書き方（例）</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{`【主要リスクと対策】
リスク1: 機密情報入力
対策: 入力禁止データを定義し、違反時は利用停止と報告を義務化する。

リスク2: 誤情報の外部提出
対策: 対外文書は必ず人手レビューを通し、承認者を記録する。

リスク3: 無断ツール利用
対策: 利用ツールを承認制にし、利用ログを月次監査する。`}
              </pre>
            </section>

            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">4. 費用の書き方（例）</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{`【費用計画】
費用区分: ツール利用料 / 導入支援 / 社内教育 / セキュリティ運用
期間: 3ヶ月PoC
予算上限: 300万円
見直し条件: 月次でKPI未達が2回続いた場合はスコープを再設定する。`}
              </pre>
            </section>

            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">5. ロードマップの書き方（例）</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{`【導入ロードマップ】
第1段階（1〜3ヶ月）: PoC実施（対象部署限定）
第2段階（4〜6ヶ月）: 成果確認後、関連2部署へ展開
第3段階（7ヶ月以降）: 全社展開判断（経営会議で継続可否を決定）`}
              </pre>
            </section>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            上記5項目をA4一枚へ収めるテンプレートを用意すると、役員レビューでの読み取り負荷が下がります。導入全体の設計観点は
            <Link href="/academy/blog/corporate-ai-adoption-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              中小企業の生成AI導入ガイド
            </Link>
            で補強できます。
          </p>
        </motion.section>

        <motion.section
          className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold text-gray-900">A4一枚版テンプレ（Google Docs形式イメージ）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            下記の構成をそのままGoogle Docsで運用できる形に整えたテンプレートをLINE特典で配布しています。社内フォーマットに合わせて即日で稟議に転用できます。
          </p>
          <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-md bg-slate-900 p-5 text-xs leading-6 text-slate-100">
            <code>{onePageTemplate}</code>
          </pre>
        </motion.section>

        <LineCtaBox className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6" />

        <motion.section
          id="poc-proposal"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">提案パターンA: 実績がない組織は「小さく始めるPoC提案」で承認率を上げる</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            導入実績がない段階で全社提案を出すと、承認者はリスクを見積もれません。最初は対象業務と期間を限定し、効果と課題を可視化するPoC提案が現実的です。
          </p>
          <div className="mt-6 space-y-4">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">PoC提案の最小構成</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">対象業務: 1業務に限定（例: 提案書初稿、FAQ回答下書き）</li>
                <li className="pl-1 marker:text-gray-500">対象人数: 5〜20名程度</li>
                <li className="pl-1 marker:text-gray-500">期間: 4〜12週間</li>
                <li className="pl-1 marker:text-gray-500">評価指標: 工数、品質、再作業率、事故件数</li>
                <li className="pl-1 marker:text-gray-500">継続条件: KPI達成時のみ次フェーズへ進む</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">PoC提案のサンプル文</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">
{`本申請は、営業提案書初稿作成業務に限定した生成AI活用PoC（3ヶ月）を対象とする。
KPIは「作成時間20%削減」「レビュー差戻し率10%改善」「情報取り扱い違反ゼロ」とし、
未達の場合は拡大展開を行わず、対象業務と運用ルールを再設計する。`}
              </pre>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="fullscale-proposal"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">提案パターンB: 利用実績がある組織は「全社展開提案」を段階導入で設計する</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            既に部門利用が進んでいる場合、稟議の主題は「導入可否」ではなく「統制と拡大順序」です。全社展開提案では、フェーズごとの責任者と停止条件を先に定義します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">フェーズ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目的</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">責任部門</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">判断基準</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">段階1: 標準化</th>
                  <td className="py-4 px-4">利用ルールと承認ツールを統一する</td>
                  <td className="py-4 px-4">情シス / 法務</td>
                  <td className="py-4 pl-4">違反件数の低減、監査運用開始</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">段階2: 部門展開</th>
                  <td className="py-4 px-4">優先部門へ展開し、効果測定を統一する</td>
                  <td className="py-4 px-4">事業部門 / 経営企画</td>
                  <td className="py-4 pl-4">KPI達成、教育完了率、運用定着率</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">段階3: 全社化</th>
                  <td className="py-4 px-4">全社導入と継続改善体制を確立する</td>
                  <td className="py-4 px-4">経営会議 / 各部門責任者</td>
                  <td className="py-4 pl-4">費用対効果、リスク指標、監査結果</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            社内教育費や助成制度を含めた設計を行う場合は
            <Link href="/academy/blog/ai-training-subsidy-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI研修助成金ガイド
            </Link>
            も併せて参照し、予算設計と社内説明を一体化すると通しやすくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            また、推進時に起きやすい無断利用や統制漏れは
            <Link href="/academy/blog/shadow-ai-countermeasures" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              シャドーAI対策
            </Link>
            の設計を同時に進めることで予防できます。
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
            承認フェーズで出る質問は、事前に回答を仕込むほど通りやすくなります。下記6問を稟議資料に転記しておくと、差し戻し対応の時間を減らせます。
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

        <LineCtaBox className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6" />

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/shadow-ai-countermeasures" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                シャドーAI対策の進め方 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-training-subsidy-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI研修助成金ガイド | AIリブート
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">稟議を通す鍵は、ツール説明より判断材料の整理です。</li>
            <li className="pl-1 marker:text-gray-500">1枚計画書は「目的・効果・リスク・費用・ロードマップ」の5項目で作ります。</li>
            <li className="pl-1 marker:text-gray-500">実績がなければPoC提案、実績があれば段階導入の全社展開提案が有効です。</li>
            <li className="pl-1 marker:text-gray-500">テンプレとサンプル文を先に作ると、差し戻し対応を減らせます。</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、実務で使える
            <span className="font-semibold text-gray-900">生成AI活用力</span>
            だけでなく、
            <span className="font-semibold text-gray-900">自己理解・キャリアデザイン</span>
            と
            <span className="font-semibold text-gray-900">仲間と共に学ぶ環境</span>
            の3軸で、導入後の定着まで支援しています。
          </p>
        </motion.section>
      </article>
    </main>
  );
}
