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

type AiCustomerSupportGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "📩 LINEで毎週AI知識を配信中";
const lineCtaBody =
  "AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

const keywordTags = ["生成AI カスタマーサポート", "AI FAQ ボット", "CS AI 導入", "問い合わせ対応 AI 自動化"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "first-response", label: "一次対応の自動化" },
  { id: "knowledge-management", label: "ナレッジ管理設計" },
  { id: "quality-management", label: "回答品質管理" },
  { id: "complaint-response", label: "クレーム対応設計" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const faqCoverageRows = [
  {
    theme: "配送・到着",
    sampleQuestion: "いつ届きますか？追跡番号が見当たりません。",
    aiPolicy: "注文情報の取得可否を確認し、確認不可なら有人へ引き継ぐ",
    escalation: "配送遅延が48時間以上 or 再配達交渉が必要なケース",
  },
  {
    theme: "返品・交換",
    sampleQuestion: "返品期限を過ぎていますが交換できますか？",
    aiPolicy: "返品規定の該当条項を引用し、例外条件の有無を提示",
    escalation: "初期不良、個別補償、返金金額の最終判断",
  },
  {
    theme: "契約・請求",
    sampleQuestion: "請求書の再発行と支払い方法変更をしたいです。",
    aiPolicy: "手続き手順を段階で案内し、必要書類を明示",
    escalation: "与信審査、未払い交渉、法務確認が必要なケース",
  },
  {
    theme: "アカウント",
    sampleQuestion: "退会後のデータ削除はどうなりますか？",
    aiPolicy: "削除ポリシーと反映時期を説明し、本人確認を促す",
    escalation: "本人確認不一致、第三者申請、情報開示請求",
  },
] as const;

const qualityMetrics = [
  {
    metric: "一次解決率（FCR）",
    target: "導入前比で+10〜20ptを目安",
    operation: "FAQボットで完結した問い合わせ割合を週次で確認",
  },
  {
    metric: "有人転送率",
    target: "無理に下げず、適切な転送を優先",
    operation: "転送理由タグ（規約外、感情高、判断案件）を必ず記録",
  },
  {
    metric: "平均初回応答時間",
    target: "24時間以内対応を即時応答へ短縮",
    operation: "AI応答と有人応答を分けて可視化し、遅延原因を切り分ける",
  },
  {
    metric: "再問い合わせ率",
    target: "回答公開後に段階的に低下させる",
    operation: "再問い合わせ文面を収集してFAQ不足テーマを特定する",
  },
  {
    metric: "CSAT / NPSコメント",
    target: "数値よりも不満コメント減少を先に確認",
    operation: "不満コメントを毎週3件以上レビューし、回答文を改善する",
  },
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>{lineCtaTitle}</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        {lineCtaButtonLabel}
      </a>
    </div>
  );
}

export default function AiCustomerSupportGuidePage({ faqItems }: AiCustomerSupportGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "カスタマーサポートのAI活用" },
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
                title="カスタマーサポートのAI活用｜一次対応・ナレッジ管理・品質管理の実装ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            カスタマーサポートのAI活用｜一次対応・ナレッジ管理・品質管理の実装ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「問い合わせ対応の工数が増え続け、オペレーターが疲弊している」。この状態を改善するには、単にチャットボットを置くだけでは不十分です。
            先に<span className="font-semibold text-gray-900">一次対応の範囲・ナレッジの更新運用・品質レビュー体制</span>
            を決め、AIと有人対応の境界線を明確にする必要があります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            本記事では、CS現場で使える実装順として「一次対応の自動化（FAQ Bot）」「ナレッジ管理」「回答品質管理」「クレーム対応」の4フェーズを解説します。
            さらに、ChatGPTをそのまま使う運用ではなく、RAGとプロンプト設計で社内FAQに特化させる方法を具体化します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              工数削減の起点は、問い合わせ件数が多い一次対応をFAQ Botで自動化し、判断が必要な案件だけを有人転送する設計です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              汎用チャット単体ではなく、RAGで社内FAQ・手順書・規約を参照させると回答の一貫性が高まりやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              品質管理はプロンプト改善だけでなく、失敗ログの分類、再問い合わせ分析、オペレーター監修をセットで回すのが基本です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              クレーム対応はAI完結にしないことが前提で、感情の高いケースは初期段階でエスカレーションする運用が安全です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        <motion.section
          id="first-response"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            一次対応の自動化は「FAQ Botの守備範囲」を先に固定すると失敗しにくい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            一次対応の自動化で成果を出す条件は、AIに任せる質問と有人判断が必要な質問を分離することです。すべてをAIに任せる設計は、誤回答とクレームを増やしやすく、結果として工数削減に失敗します。
          </p>
          <h3 className="mt-8 text-lg font-semibold text-gray-900">最初に「一次対応20問答」を定義する</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            立ち上げ時は、実際に問い合わせ件数の多い質問を20件選び、回答テンプレートとエスカレーション条件をセットで定義します。20問を先に作ると、社内レビューがしやすく、現場メンバー間の期待値も揃います。
            RAGの仕組みが曖昧な場合は
            <Link href="/academy/blog/what-is-rag" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              what-is-rag
            </Link>
            を先に読むと設計判断が速くなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">問い合わせ群</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">質問例</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">AI回答方針</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">有人転送条件</th>
                </tr>
              </thead>
              <tbody>
                {faqCoverageRows.map((row) => (
                  <tr key={row.theme} className="border-b border-gray-200 align-top">
                    <td className="px-4 py-4 font-semibold text-gray-900">{row.theme}</td>
                    <td className="px-4 py-4">{row.sampleQuestion}</td>
                    <td className="px-4 py-4">{row.aiPolicy}</td>
                    <td className="px-4 py-4">{row.escalation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">「ChatGPT単体」と「RAG対応FAQ Bot」の違い</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ChatGPTをそのまま使う運用は、質問に答える速度は上がっても、社内ルールに沿った回答保証が難しくなります。CS現場で重要なのは、自然な文章ではなく
            <span className="font-semibold text-gray-900">正確で再現可能な回答</span>
            です。RAG対応のFAQ Botでは、参照先を限定し、回答できない場合の定型文も固定できます。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">汎用チャット: 便利だが、根拠文書と回答ルールが運用者依存になりやすい</li>
              <li className="pl-1 marker:text-gray-500">RAG対応FAQ Bot: 根拠文書を固定でき、監査と改善サイクルを設計しやすい</li>
              <li className="pl-1 marker:text-gray-500">
                ノーコードで試すなら
                <Link href="/academy/blog/dify-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  dify-beginner-guide
                </Link>
                の手順がそのまま使える
              </li>
            </ul>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">立ち上げ14日でやること</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Day1-3: 問い合わせログ上位20問を抽出し、回答責任者を決める</li>
            <li className="pl-1 marker:text-gray-500">Day4-7: FAQと手順書をRAG用に整備し、回答できない条件を明文化する</li>
            <li className="pl-1 marker:text-gray-500">Day8-10: 社内限定で試験運用し、誤回答を分類する</li>
            <li className="pl-1 marker:text-gray-500">Day11-14: 顧客向けに段階公開し、有人転送フローを固定する</li>
          </ol>
        </motion.section>

        <motion.section
          id="knowledge-management"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ナレッジ管理は「更新し続ける前提」で設計すると回答精度が安定する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            FAQ Botの精度低下は、モデル性能よりナレッジ運用の崩れで起きることが多いです。更新頻度の違う情報を同じ箱に入れると、古い回答が混ざり、オペレーターが再修正する工数が戻ってきます。
          </p>
          <h3 className="mt-8 text-lg font-semibold text-gray-900">ナレッジは4層に分ける</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">固定ルール層: 返品規約、利用規約、個人情報ポリシーなど変更頻度が低い文書</li>
            <li className="pl-1 marker:text-gray-500">運用手順層: 返金手順、エスカレーション手順、管理画面操作など月次で更新される文書</li>
            <li className="pl-1 marker:text-gray-500">商品情報層: 価格、キャンペーン、在庫条件など週次で更新される情報</li>
            <li className="pl-1 marker:text-gray-500">事例ログ層: 実際の対応履歴から抽出した再発パターンと回答例</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">RAG精度を維持する実務ルール</h3>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">1文書1テーマを徹底し、タイトルに日付と責任部署を含める</li>
              <li className="pl-1 marker:text-gray-500">文書更新時は旧版を無効化し、重複情報を残さない</li>
              <li className="pl-1 marker:text-gray-500">回答不能時は推測せず「担当者確認」を返す指示をプロンプトに明記する</li>
              <li className="pl-1 marker:text-gray-500">週次で「検索ヒットしなかった質問」を収集し、FAQを補強する</li>
            </ul>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            社内ルールの文章化は
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-guideline-template
            </Link>
            を土台にすると早く進みます。工数削減の全体像は
            <Link href="/academy/blog/ai-business-efficiency-cases" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-business-efficiency-cases
            </Link>
            も合わせて確認してください。
          </p>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            LINEでは、無料個別相談とAI活用ロードマップの案内を行っています。現場に合った運用へ調整したい場合は、現在の体制に合わせて進め方を整理できます。
          </p>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
        </motion.section>

        <motion.section
          id="quality-management"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            回答品質管理は「評価指標」と「オペレーター監修」を同時に運用すると改善が続く
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI導入後に品質が不安定になる主因は、精度を測る指標が曖昧なことです。回答の良し悪しを感覚で判断せず、指標を固定し、レビュー会で意思決定できる状態を作ると改善速度が上がります。
          </p>
          <h3 className="mt-8 text-lg font-semibold text-gray-900">最低限追うべき品質指標</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">指標</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">目安</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">運用ポイント</th>
                </tr>
              </thead>
              <tbody>
                {qualityMetrics.map((row) => (
                  <tr key={row.metric} className="border-b border-gray-200 align-top">
                    <td className="px-4 py-4 font-semibold text-gray-900">{row.metric}</td>
                    <td className="px-4 py-4">{row.target}</td>
                    <td className="px-4 py-4">{row.operation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">オペレーター向けプロンプト設計の実務ポイント</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">回答文を生成する前に「該当FAQ ID」を返すようにし、根拠の追跡性を確保する</li>
            <li className="pl-1 marker:text-gray-500">回答トーンは「簡潔・丁寧・断定しすぎない」を定義し、部門で共通化する</li>
            <li className="pl-1 marker:text-gray-500">確信度が低い場合は推測せず、確認中テンプレートへ切り替える</li>
            <li className="pl-1 marker:text-gray-500">新人オペレーター向けに、AI回答のレビュー観点をチェックリスト化する</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">週次レビューを30分で回す型</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">誤回答トップ10を抽出し、原因を「ナレッジ不足」「プロンプト不足」「運用判断」に分類する</li>
            <li className="pl-1 marker:text-gray-500">改善対象を3件に絞り、翌週までに修正責任者を決める</li>
            <li className="pl-1 marker:text-gray-500">修正後の再発率を確認し、改善が弱い場合はFAQ構造自体を見直す</li>
          </ol>
        </motion.section>

        <motion.section
          id="complaint-response"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            クレーム対応は「AIの下書き」と「有人の最終判断」を分離すると安全に運用できる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            クレーム対応を完全自動化すると、感情面への配慮不足や補償判断ミスが起きやすくなります。安全な運用は、AIに任せる作業を「事実整理・履歴要約・返信下書き」までに限定し、顧客への確定回答は担当者が責任を持って行う形です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-green-200 bg-green-50 p-5">
              <h3 className="text-base font-semibold text-green-900">AIに任せる範囲</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">過去対応履歴の要約</li>
                <li className="pl-1">規約該当箇所の抽出</li>
                <li className="pl-1">謝意と事実確認を含む返信下書き</li>
                <li className="pl-1">次の確認項目の整理</li>
              </ul>
            </section>
            <section className="rounded-lg border border-red-200 bg-red-50 p-5">
              <h3 className="text-base font-semibold text-red-900">有人が行う範囲</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">返金・補償・契約変更の最終判断</li>
                <li className="pl-1">法務確認が必要な表現の確定</li>
                <li className="pl-1">再発防止策の社内合意</li>
                <li className="pl-1">顧客への最終返信送信</li>
              </ul>
            </section>
          </div>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">クレーム時の標準フロー</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">感情レベルを判定し、閾値以上は即時エスカレーション</li>
            <li className="pl-1 marker:text-gray-500">AIで時系列を要約し、事実確認項目を抽出</li>
            <li className="pl-1 marker:text-gray-500">担当者が補償可否と案内文を確定</li>
            <li className="pl-1 marker:text-gray-500">顧客返信後、FAQと再発防止ルールへ反映</li>
            <li className="pl-1 marker:text-gray-500">月次で重大クレームを横断レビューし、プロンプトとナレッジを更新</li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            この分離運用を先に決めると、AI導入後も現場の安心感を維持しやすくなります。特に「顧客情報をどこまで扱うか」は、技術判断だけでなく社内規程の整備が必須です。
          </p>
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
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-slate-900">関連リンク</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7">
              <li>
                <Link href="/academy/blog/ai-business-efficiency-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  AI業務効率化事例集
                </Link>
              </li>
              <li>
                <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  生成AIの社内ガイドライン雛形
                </Link>
              </li>
              <li>
                <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  RAG（検索拡張生成）とは？仕組みを解説
                </Link>
              </li>
              <li>
                <Link href="/academy/blog/dify-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  Difyの使い方完全ガイド
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解とキャリアデザイン、仲間と共に学ぶ実践環境までを一体で提供しています。
            CS部門での導入設計を具体化したい方は、まず
            <Link href="/academy/seminars" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              無料セミナー
            </Link>
            で全体像を確認してください。
          </p>
        </motion.section>
      </article>
    </main>
  );
}
