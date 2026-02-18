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

type ShadowAiCountermeasuresPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["シャドーAI 対策", "生成AI 統制", "ログ/監査", "禁止しない運用"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-shadow-ai", label: "シャドーAIとは何か？" },
  { id: "why-ban-fails", label: "「禁止」が失敗する理由" },
  { id: "control-framework", label: "統制設計の4段階" },
  { id: "checklist", label: "統制チェックリスト" },
  { id: "roadmap", label: "導入ロードマップ（30日）" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "CTA" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const controlChecklist = [
  { item: "利用実態把握", owner: "情シス", done: "アンケート/ログ調査で主要ツール・用途・対象部署が把握できている" },
  { item: "公式ツール選定", owner: "情シス", done: "承認済みツール（アカウント体系/データ保持方針含む）が決まっている" },
  { item: "入力ルール策定", owner: "法務/情シス", done: "データ分類に基づく入力OK/NGと例外条件が文書化されている" },
  { item: "権限設計", owner: "情シス", done: "役割別の権限（機能制限/共有/外部連携）が設計されている" },
  { item: "ログ設計", owner: "情シス/監査", done: "監査に必要なログ項目・保管期間・閲覧権限が定義されている" },
  { item: "教育実施", owner: "現場/人事", done: "入力ルールとNG例がオンボーディング/定期研修に組み込まれている" },
  { item: "例外申請フロー", owner: "情シス/法務", done: "例外の申請/承認/期限/ログ保存の運用が回っている" },
  { item: "インシデント対応", owner: "情シス/法務", done: "初動（止血）手順と連絡先、ログ保全の手順が整備されている" },
  { item: "定期レビュー体制", owner: "情シス", done: "四半期〜半期のレビュー会（改定責任者含む）が定例化されている" },
  { item: "KPI設定", owner: "情シス/経営", done: "利用率/インシデント等の指標を四半期で追跡し改善に使っている" },
] as const;

export default function ShadowAiCountermeasuresPage({ faqItems }: ShadowAiCountermeasuresPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "シャドーAI対策の進め方" },
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
                title={'シャドーAI対策の進め方｜"禁止"せず安全に使わせる統制設計【2026年版】'}
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            シャドーAI対策の進め方｜&quot;禁止&quot;せず安全に使わせる統制設計【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「社内でAI利用を止めたい。でも、止めても現場は使い続ける」——この矛盾が、シャドーAI対策の本質です。
            現実的な答えは、全面禁止ではなく<span className="font-semibold text-gray-900">利用を認めた上で統制する</span>ことです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、シャドーAIを<span className="font-semibold text-gray-900">発見→可視化→ルール設計→監査</span>の4段階で進めるフレームワークと、
            すぐに使える統制チェックリスト（10項目）、30日導入ロードマップをまとめます。
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
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              シャドーAIは<span className="font-semibold text-gray-900">禁止で消えない</span>。統制設計で安全に活用させる方が現実的
            </li>
            <li className="pl-1 marker:text-gray-500">
              「発見→可視化→ルール設計→監査」の<span className="font-semibold text-gray-900">4段階</span>で進める
            </li>
            <li className="pl-1 marker:text-gray-500">
              ルール設計は
              <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ガイドライン雛形
              </Link>
              と連動させると導入が早い
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="what-is-shadow-ai" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            シャドーAIとは何か？なぜ生まれるのか
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            シャドーAIとは、<span className="font-semibold">組織未承認のAIツールが業務で使われている状態</span>です。個人アカウントのChatGPTやMicrosoft Copilot（旧Bing Chat/Bing AI）などが代表例です。
          </p>

          <h3 className="mt-8 text-lg font-semibold text-gray-900">発生原因：ツール未整備／代替策なし／便利さが勝つ</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">公式ツールが未整備、あるいは申請が重くて使えない</li>
            <li className="pl-1 marker:text-gray-500">「禁止」だけが先に出て、現場の代替策が用意されない</li>
            <li className="pl-1 marker:text-gray-500">便利さ（速度/品質/競争優位）が勝ち、個人端末/ブラウザ経由で使われる</li>
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-gray-900">主なリスク：情報漏えい／品質不均一／コンプライアンス違反</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">情報漏えい</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                顧客情報・契約情報・未公開の社内情報が個人アカウントへ入力され、回収不能になる。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">品質不均一</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                人によってプロンプト/ツール/レビュー基準がバラバラで、成果物の再現性と説明責任が落ちる。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h4 className="text-sm font-semibold tracking-wide text-gray-900">コンプライアンス違反</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                監査ログや承認がないまま外部送信・二次利用が起き、社内規程や契約条項に抵触する。
              </p>
            </section>
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
          <h2 id="why-ban-fails" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            「禁止」が失敗する3つの理由
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            禁止は「使われない前提」の設計です。現場が既に使っている場合、禁止は地下化を促し、リスクが見えなくなります。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">理由1：個人端末・ブラウザで回避される</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                会社ネットワークを外れれば、監視もブロックも難しくなります。禁止は「見えない利用」を増やします。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">理由2：生産性が落ち、不満が蓄積する</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                代替策なしの禁止は、業務の手戻りとストレスを増やします。結果としてルール順守が崩れます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">理由3：禁止の実効性を監査できない</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                何がどこで使われているかが把握できないと、監査も改善もできません。禁止は統制の代わりになりません。
              </p>
            </section>
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
          <h2 id="control-framework" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            統制設計の4段階フレームワーク
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            対策は「禁止」ではなく、<span className="font-semibold">管理できる状態</span>を作ることです。以下の4段階で、現場の利便性を落とさずにリスクを下げます。
          </p>

          <div className="mt-8 grid gap-4">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 1：発見（利用実態アンケート、ネットワークログ）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                まずは「何がどこで使われているか」を把握します。アンケートで用途を取り、ログで実態を裏取りすると精度が上がります。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 2：可視化（ツール一覧、リスク評価マトリクス）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                ツールを一覧化し、用途・取り扱いデータ・権限・外部送信の有無などでリスク評価します。判断の軸を固定すると、例外対応がブレません。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 3：ルール設計（入力ルール、権限、承認フロー）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                ルールは「入力ルール（データ分類）」「権限」「ログ/監査」「例外申請」「インシデント初動」が最小セットです。
                まずは
                <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                  ガイドライン雛形
                </Link>
                に落とし込み、暫定運用→改善で進めます。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Step 4：監査（定期レビュー、利用率モニタリング、改善）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                四半期ごとに「シャドーAI利用率」「公式ツール利用率」「インシデント件数」を追い、必要に応じてルールとツールを更新します。
              </p>
            </section>
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
          <h2 id="checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            統制チェックリスト（10項目）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「禁止」ではなく「統制」で進めるための、最低限のチェック項目です。担当と完了基準をセットで決めると、運用が止まりません。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">チェック項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">担当</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">完了基準</th>
                </tr>
              </thead>
              <tbody>
                {controlChecklist.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 px-4">{row.owner}</td>
                    <td className="py-4 pl-4">{row.done}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 id="roadmap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            導入ロードマップ（30日）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            30日で「暫定運用→モニタリング開始」まで持っていくための最短ルートです。完璧を目指さず、まず回して改善します。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 1：利用実態調査・リスク評価</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">アンケートとログ調査で主要ツールと用途を把握</li>
                <li className="pl-1 marker:text-gray-500">ツール一覧とリスク評価マトリクスを作成</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 2：ルール策定・ツール選定</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">入力ルール（データ分類）とNG例を最小セットで決める</li>
                <li className="pl-1 marker:text-gray-500">公式ツール・アカウント・権限・ログ方針を決定</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 3：教育・周知・パイロット</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">現場向けの短い教育（入力ルール/NG例/レビュー）を実施</li>
                <li className="pl-1 marker:text-gray-500">一部部署でパイロット運用し、例外と詰まりを拾う</li>
              </ul>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Week 4：運用開始・モニタリング開始</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">例外申請・インシデント初動の導線を整える</li>
                <li className="pl-1 marker:text-gray-500">KPIを設定し、四半期レビューで改善サイクルに入れる</li>
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          className="mt-14 border-t border-slate-200 pb-4 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-2xl font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形（#1）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-data-leak-patterns" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの情報漏えいパターン集（#3）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/corporate-ai-adoption-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                中小企業の生成AI導入ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </motion.section>

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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            シャドーAIは「止める」より「管理する」課題です。まずは発見と可視化で現状を押さえ、最小ルールで暫定運用を始め、ログとKPIで改善してください。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            ルール設計を最短で進めたい場合は、
            <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ガイドライン雛形
            </Link>
            を叩き台にし、現場・法務・情シスの三者で「決めること」を固定するのがおすすめです。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            CTA
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            社内統制の叩き台づくり、研修、運用設計まで一気に進めたい方向けに、無料セミナーと相談窓口を用意しています。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナー（/academy/seminars）
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINE相談
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
