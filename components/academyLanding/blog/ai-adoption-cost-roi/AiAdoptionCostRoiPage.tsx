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

type AiAdoptionCostRoiPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 導入費用", "ROI", "PoC予算", "投資回収"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "cost-overview", label: "3つの導入方法と相場" },
  { id: "cost-breakdown", label: "費用の内訳" },
  { id: "roi-calculation", label: "ROIの計算方法" },
  { id: "poc-budget", label: "PoC予算の決め方" },
  { id: "roi-simulation", label: "投資回収シミュレーション" },
  { id: "cost-management", label: "コスト管理ポイント" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const roiSheetTemplate = `# ROI試算シート（コピペ用／月次）

| 項目 | 数値 | メモ |
|---|---:|---|
| 対象業務 |  | 例: カスタマーサポート（一次回答） |
| 対象人数 |  |  |
| 1人あたり削減時間（h/月） |  | 例: 10 |
| 時給換算（円） |  | 例: 3,000 |
| 削減コスト（円/月） | =人数×削減時間×時給 |  |
| 売上増加（円/月） |  | 例: CV改善、対応速度向上など |
| SaaS/ツール費（円/月） |  |  |
| APIコスト（円/月） |  |  |
| 開発・インテグレ費（円/月） |  | 例: 初期費用を月割りして記載 |
| 教育・研修費（円/月） |  |  |
| セキュリティ・監査費（円/月） |  |  |
| 運用保守費（円/月） |  |  |
| 導入総コスト（円/月） | =上記コスト合計 |  |
| 純効果（円/月） | =削減コスト+売上増加-導入総コスト |  |
| ROI（%） | =純効果÷導入総コスト×100 |  |
| 投資回収（ヶ月） | =初期費用÷純効果（月） |  |
`;

export default function AiAdoptionCostRoiPage({ faqItems }: AiAdoptionCostRoiPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI導入の費用相場とROI" },
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
                title="生成AI導入の費用相場とROIの考え方｜PoC予算の決め方まで【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AI導入の費用相場とROIの考え方｜PoC予算の決め方まで【2026年版】
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「生成AIを導入したいが、稟議で一番詰まるのは費用と投資対効果（ROI）」という相談が増えています。ポイントは、相場を知るだけではなく、
            <span className="font-semibold text-gray-900">費用を分解し、PoCで効果を測れる形に落とす</span>ことです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、導入方法別の費用相場（SaaS/API/フルカスタム）、コスト内訳、ROIの計算式、PoC予算の決め方、投資回収シミュレーションをまとめます。
            そのまま使える<span className="font-semibold text-gray-900">ROI試算シート（コピペ用）</span>も付けています。
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
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              導入方法は3タイプ: <span className="font-semibold text-gray-900">SaaS型 / API開発型 / フルカスタム</span>。予算と目的で選択
            </li>
            <li className="pl-1 marker:text-gray-500">
              ROIは「削減コスト＋売上増」÷「導入総コスト」で算出。<span className="font-semibold text-gray-900">定性効果</span>も評価する
            </li>
            <li className="pl-1 marker:text-gray-500">
              PoCは<span className="font-semibold text-gray-900">50万〜300万円</span>が目安。まず小さく始めて効果検証が鉄則
            </li>
          </ul>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-orange-700">最初の判断軸</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">誰の何分を減らすか（工数）を先に固定し、費用は後から積み上げます。</p>
            </section>
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-orange-700">稟議で見る数字</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">月次の純効果（円）と回収期間（ヶ月）まで出すと通りやすくなります。</p>
            </section>
            <section className="rounded-lg border border-orange-200 bg-white p-5">
              <h3 className="text-sm font-semibold tracking-wide text-orange-700">失敗回避</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">隠れコスト（教育・セキュリティ・運用）を先に入れて、後出しを防ぎます。</p>
            </section>
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
          <h2 id="cost-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AI導入の3つの方法と費用相場
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初のPoCは<span className="font-semibold">SaaS型</span>で「小さく・早く」試し、効果が見えたら<span className="font-semibold">API開発型</span>へ拡張するのが低リスクです。
            ただし、要件（セキュリティ・連携・データ）が強い場合は最初から設計が必要です。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">導入方法</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">費用相場</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">SaaS型</th>
                  <td className="py-4 px-4">月額1〜10万円/人</td>
                  <td className="py-4 pl-4">
                    すぐに使い始めたい、全社で標準化したい（ChatGPT Business（旧Team）, Claude Team, Microsoft 365 Copilot等）
                  </td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">API開発型</th>
                  <td className="py-4 px-4">月額数十万〜数百万円</td>
                  <td className="py-4 pl-4">社内システムと連携したい、業務フローに埋め込みたい（APIコスト＋開発人件費）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">フルカスタム</th>
                  <td className="py-4 px-4">初期500万〜数千万円</td>
                  <td className="py-4 pl-4">独自データ・検索・権限を強く統制したい（RAG構築、ファインチューニング等）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-gray-500">
            注意: 上記はあくまで目安です。実際の費用は「対象業務の数」「利用人数」「セキュリティ要件」「連携先（CRM/FAQ/社内ポータル等）」で大きく変動します。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cost-breakdown" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            費用の内訳を理解する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「APIの単価」だけ見ても予算は決まりません。稟議で揉めやすいのは、<span className="font-semibold">開発・運用・教育・セキュリティ</span>が後から追加されることです。
            先に全体像を分解して見積もります。
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">APIコスト（トークン課金の仕組み）</li>
            <li className="pl-1 marker:text-gray-500">開発・インテグレーション費用（UI/連携/認証/ログ）</li>
            <li className="pl-1 marker:text-gray-500">教育・研修費用（使い方＋運用ルール）</li>
            <li className="pl-1 marker:text-gray-500">セキュリティ・コンプライアンス費用（監査、権限、データ分類）</li>
            <li className="pl-1 marker:text-gray-500">運用保守費用（プロンプト更新、評価、障害対応）</li>
          </ul>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">区分</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">代表例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">見落としやすいポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">APIコスト</th>
                  <td className="py-4 px-4">トークン課金、画像/音声の追加課金</td>
                  <td className="py-4 pl-4">利用量上限がないと予算超過しやすい（部署横断で増える）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">開発・連携</th>
                  <td className="py-4 px-4">CRM/FAQ/社内DB連携、SSO、権限、ログ</td>
                  <td className="py-4 pl-4">ログ/監査・権限設計が後回しだと作り直しが発生</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">教育・研修</th>
                  <td className="py-4 px-4">研修設計、マニュアル、FAQ整備</td>
                  <td className="py-4 pl-4">「使い方」だけでなく「事故らない運用」研修が必要</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">セキュリティ</th>
                  <td className="py-4 px-4">データ分類、DLP、監査、法務レビュー</td>
                  <td className="py-4 pl-4">個人情報・機微情報の扱いを曖昧にすると利用停止リスクが増える</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">運用保守</th>
                  <td className="py-4 px-4">評価、改善、障害対応、プロンプト更新</td>
                  <td className="py-4 pl-4">運用担当が不明確だと、効果が頭打ちになりやすい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">隠れコスト一覧（見落としがちなもの）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">隠れコスト</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">回避のコツ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">教育・研修</th>
                  <td className="py-4 px-4">オンボーディング、社内FAQ、運用ルール周知</td>
                  <td className="py-4 pl-4">最初から対象業務を絞り、運用ルールはテンプレ化</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">データ整備</th>
                  <td className="py-4 px-4">社内文書の棚卸し、重複/古い情報の整理</td>
                  <td className="py-4 pl-4">「答えがあるデータ」から着手（FAQ/手順書など）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">セキュリティ対策</th>
                  <td className="py-4 px-4">権限設計、ログ、監査、個人情報取り扱い</td>
                  <td className="py-4 pl-4">ガイドラインとセットで運用開始（後付けしない）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">運用保守</th>
                  <td className="py-4 px-4">評価、改善、プロンプト更新、障害対応</td>
                  <td className="py-4 pl-4">「誰が改善するか」を担当と頻度で固定（四半期など）</td>
                </tr>
              </tbody>
            </table>
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
          <h2 id="roi-calculation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ROIの計算方法
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ROIは「削減コスト」と「売上増」を足し、導入総コストを引いてから、コストで割ります。重要なのは、まず定量（工数・人件費）で土台を作り、
            定性（品質・満足度）を補助評価として乗せることです。
          </p>

          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">ROI計算式</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              ROI（%） = (導入による削減コスト + 売上増加分 - 導入総コスト) ÷ 導入総コスト × 100%
            </p>
            <p className="mt-2 text-xs leading-6 text-gray-500">
              まずは月次で計算し、回収期間（ヶ月）まで出すと意思決定が速くなります。
            </p>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">具体例（工数削減で試算）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            例: 5人のチームで、1人あたり月10時間削減、時給3,000円、導入総コストが月20万円の場合。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">削減コスト = 5人 × 10h/月 × 3,000円 = 150,000円/月</li>
            <li className="pl-1 marker:text-gray-500">純効果 = 150,000円 - 200,000円 = -50,000円/月（この条件では赤字）</li>
            <li className="pl-1 marker:text-gray-500">
              改善余地: 対象業務の見直し（削減時間を増やす）/ ツール費と運用費の最適化 / 対象人数の調整
            </li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">定量効果と定性効果の扱い</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-emerald-700">定量効果（数字にしやすい）</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">作業時間削減（人件費削減）</li>
                <li className="pl-1 marker:text-gray-500">処理速度向上（対応件数増）</li>
                <li className="pl-1 marker:text-gray-500">外注費の削減（一次対応/下書き作成など）</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-indigo-700">定性効果（評価指標を先に決める）</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">品質向上（誤字・漏れの減少、回答品質の安定）</li>
                <li className="pl-1 marker:text-gray-500">従業員満足度（不毛作業の削減）</li>
                <li className="pl-1 marker:text-gray-500">イノベーション促進（企画案の数、試作回数）</li>
              </ul>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">業種別ROIのイメージ（よくある導入領域）</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">カスタマーサポート</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                一次回答・要約・分類で工数削減が出やすい。品質指標（一次解決率/CS）も合わせて追う。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">マーケティング</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                記事/広告文の下書きで時間短縮。売上増の指標（CVR/CPA）を先に定義するとブレない。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">法務・契約</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                要約・条文比較で時短しやすいが、機微情報の扱いが重要。権限・ログ・レビューを前提に設計する。
              </p>
            </section>
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
          <h2 id="poc-budget" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            PoC予算の決め方
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            PoCの目的は「すごいデモ」ではなく、<span className="font-semibold">費用対効果を測れる形で再現性を出すこと</span>です。期間は1〜3ヶ月、予算は50万〜300万円を目安に設計します。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">PoC予算の構成要素</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">API/ツール費（PoC期間分）</li>
            <li className="pl-1 marker:text-gray-500">開発人件費（要件整理、実装、簡易UI、ログ）</li>
            <li className="pl-1 marker:text-gray-500">評価コスト（KPI設計、検証、運用テスト）</li>
          </ul>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">規模</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">予算目安</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">想定（例）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">小</th>
                  <td className="py-4 px-4">50万円</td>
                  <td className="py-4 pl-4">SaaSで特定業務を試す。KPIを決めて効果検証に集中。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">中</th>
                  <td className="py-4 px-4">100万円</td>
                  <td className="py-4 pl-4">APIで簡易連携・ログを入れる。現場で使える形まで作る。</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">大</th>
                  <td className="py-4 px-4">300万円</td>
                  <td className="py-4 pl-4">RAGの小規模版や権限設計も含める。次フェーズの要件確定まで。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            PoCの成功判定基準（KPI）設計は、以下の記事の手順を使うとブレません。
            <Link href="/academy/blog/ai-poc-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              PoCの進め方ガイド（成功判定基準の作り方）
            </Link>
          </p>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">予算申請書に入れるべき5つの項目</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">対象業務（何を、誰が、どれだけやっているか）</li>
            <li className="pl-1 marker:text-gray-500">期待効果（削減時間/売上増の仮説）</li>
            <li className="pl-1 marker:text-gray-500">費用内訳（ツール、開発、評価、セキュリティ、運用）</li>
            <li className="pl-1 marker:text-gray-500">成功判定基準（KPI）と検証方法</li>
            <li className="pl-1 marker:text-gray-500">次フェーズへの判断条件（拡大/停止の基準）</li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="roi-simulation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            投資回収シミュレーション
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            稟議で強いのは「何ヶ月で回収できるか」です。ここでは典型ケースを3つ並べ、回収の考え方を揃えます。
          </p>

          <div className="mt-6 space-y-4">
            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">ケース1: カスタマーサポートにAI導入（月20万円→6ヶ月で回収）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                月20万円の運用コストに対し、一次回答・要約・分類で月あたり約35万円の工数削減が出た想定（純効果15万円/月）。初期費用90万円なら約6ヶ月で回収。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">ケース2: 社内文書作成にAI導入（月5万円→3ヶ月で回収）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                SaaS型で月5万円、提案書・議事録の下書きで月あたり20万円の工数削減（純効果15万円/月）。初期費用45万円なら約3ヶ月で回収。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">ケース3: RAG型社内検索システム構築（初期300万円→12ヶ月で回収）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                初期300万円、運用月15万円。問い合わせ削減・自己解決率向上で純効果25万円/月なら約12ヶ月で回収。データ整備と運用保守の工数を先に入れるのがコツ。
              </p>
            </section>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">試算シートの使い方（コピペして埋めるだけ）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            まずは「対象業務」と「削減時間（h/月）」を固定し、コストは月次で積み上げます。初期費用がある場合は月割りして比較すると判断がしやすいです。
          </p>
          <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-md bg-slate-900 p-5 text-xs leading-6 text-slate-100">
            <code>{roiSheetTemplate}</code>
          </pre>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cost-management" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            失敗しないためのコスト管理ポイント
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            予算超過は「利用量の増加」「運用の肥大化」「ベンダーロックイン」で起きます。上限とレビュー頻度を決めて、段階的に拡大します。
          </p>

          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">利用量の上限設定（部署別の上限、アラート）</li>
            <li className="pl-1 marker:text-gray-500">段階的な投資拡大（PoC→限定展開→全社）</li>
            <li className="pl-1 marker:text-gray-500">定期的なROIレビュー（四半期ごと）</li>
            <li className="pl-1 marker:text-gray-500">ベンダーロックインの回避（モデル/プロバイダ差し替え余地）</li>
          </ul>
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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            費用は「導入方法」と「運用要件」で大きく変わります。よくある疑問をQ&Aで整理します。
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
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-poc-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                PoCの進め方ガイド | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形 | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド | AIリブート
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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            費用相場を「導入方法別」に押さえた上で、PoCで効果を測れる形に落とすと、稟議は通りやすくなります。最初は小さく始め、四半期ごとにROIをレビューしながら投資を拡大しましょう。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            もし「どの業務から始めるとROIが出やすいか」「費用内訳をどう書けば稟議が通るか」で詰まっている場合は、無料セミナーやLINE相談も活用してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料で相談・学べる導線
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            予算とROIの整理は「対象業務の固定」と「KPI設計」で一気に進みます。まずは情報収集からでもOKです。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINEで相談する
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
