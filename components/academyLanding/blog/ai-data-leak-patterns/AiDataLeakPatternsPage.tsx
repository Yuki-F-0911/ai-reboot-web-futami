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

type AiDataLeakPatternsPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 情報漏えい", "機密情報", "入力ルール", "チェックリスト"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-leak-happens", label: "なぜ情報漏えいが起きるのか" },
  { id: "ng-patterns", label: "情報漏えい10のNGパターン" },
  { id: "input-checklist", label: "入力前チェックリスト（5項目）" },
  { id: "prevention-measures", label: "組織で実施すべき防止策" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "ルール整備の相談" },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";

const ngPatterns = [
  {
    title: "NG1: 顧客名・連絡先をそのまま入力",
    why: "個人情報・取引先情報がそのまま外部へ送信され、再利用や二次流出のリスクが高まります。",
    alternative: "匿名化（会社A/担当者B）し、必要な条件だけを抽象化して相談します。",
  },
  {
    title: "NG2: 契約書・NDA文面をコピペ",
    why: "契約条件や守秘条項そのものが機密です。条文のまま貼ると、当事者情報や交渉内容まで漏れる可能性があります。",
    alternative: "条文は貼らず、論点（例: 解除条項、損害賠償、準拠法）を箇条書きで整理して質問します。",
  },
  {
    title: "NG3: 社内の売上・財務データを貼り付け",
    why: "未公開の業績・原価・利益率は企業機密です。経営インパクトが大きく、漏えい時の損害が深刻になりやすいです。",
    alternative: "数値はレンジ化（例: 100〜200）し、構造（指標定義・分析手順）だけを相談します。",
  },
  {
    title: "NG4: 採用候補者の個人情報を入力",
    why: "氏名・学歴・職歴・評価コメントなどが個人情報として扱われ、社内外のコンプライアンスリスクになります。",
    alternative: "評価基準のテンプレ化や面接質問の設計など、個人を特定しない形で支援させます。",
  },
  {
    title: "NG5: 社内メールや議事録をそのまま要約依頼",
    why: "メール/議事録は顧客名、単価、交渉状況などが混ざりやすく、本人が気づかない“うっかり漏えい”になりがちです。",
    alternative: "固有名詞をマスクし、要点だけを抜き出して要約・構造化を依頼します。",
  },
  {
    title: "NG6: ソースコードに含まれるAPIキー・認証情報",
    why: "秘密情報が一度漏れると即座に不正アクセスに直結します。最優先で防ぐべき事故の一つです。",
    alternative: "キーは必ず削除/伏字にし、最小限の再現コードやログ（個人情報なし）だけで相談します。",
  },
  {
    title: "NG7: 未公開の製品情報・企画書",
    why: "未発表の戦略・仕様・価格は競争優位に直結します。外部送信された時点で“公開前の漏えい”になり得ます。",
    alternative: "目的と制約（ターゲット、訴求、要件）だけを抽象化して壁打ちし、固有情報は入れません。",
  },
  {
    title: "NG8: 医療・法律の個別相談内容",
    why: "要配慮情報や機微情報が含まれやすく、誤回答のリスクも高い領域です。入力・出力の両面で事故になりやすいです。",
    alternative: "一般論の整理に限定し、個別事案は専門家へ。AIは論点チェックや質問整理までに留めます。",
  },
  {
    title: "NG9: 画像・PDFに含まれるメタデータや個人情報",
    why: "見た目に写っていない情報（メタデータ、埋め込みテキスト、注釈）も含めて外部へ送信される可能性があります。",
    alternative: "アップロード前に個人情報を墨消しし、メタデータ削除・ページ抜粋など“最小化”して扱います。",
  },
  {
    title: "NG10: 他社から預かった情報（受託データ）",
    why: "委託・受託契約上の守秘義務違反になり得ます。自社の判断だけでは例外が作れず、最も揉めやすいパターンです。",
    alternative: "原則入力禁止とし、必要なら契約確認→顧客承認→ログ保存の例外フローを通します。",
  },
] as const;

const inputChecklist = [
  "チェック1: 入力データに個人情報は含まれていないか",
  "チェック2: 社外秘・機密に該当しないか",
  "チェック3: 第三者から預かったデータではないか",
  "チェック4: 匿名化・抽象化で代替可能か",
  "チェック5: 入力先ツールの利用規約・データ取扱いを確認したか",
] as const;

export default function AiDataLeakPatternsPage({ faqItems }: AiDataLeakPatternsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIで情報漏えいが起きるパターン10選" },
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
              <CopyAsMarkdownButton title="生成AIで情報漏えいが起きるパターン10選（2026年版）" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIで情報漏えいが起きるパターン10選｜現場のNG例とルール【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            生成AIの情報漏えいは、多くの場合「出力」ではなく<span className="font-semibold text-gray-900">入力</span>で起きます。
            つまり、ツール選定だけでは防げず、入力ルール・教育・ログの設計が必要です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、現場で起きやすい「10のNGパターン」を具体例で整理し、入力前チェックリストと、組織としての防止策までを一枚にまとめます。
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
            <li className="pl-1 marker:text-gray-500">生成AIの情報漏えいは「入力」で起きる。出力ではなく入力を管理するのが原則</li>
            <li className="pl-1 marker:text-gray-500">10のNGパターンを知り、入力ルールを最低限設計するだけでリスクは大幅に下がる</li>
            <li className="pl-1 marker:text-gray-500">ログと教育を組み合わせて継続的に改善する</li>
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
          <h2 id="why-leak-happens" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜ生成AIで情報漏えいが起きるのか
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 漏えいは「個人の不注意」だけではなく、仕組みと誤解で起きます。まず“入力がどこへ送られるか”を正しく理解することが第一歩です。
          </p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
            <p>
              生成AIに入力したテキストやファイルは、基本的に外部サーバーへ送信されます（ブラウザで使うSaaSは特にそうです）。
              そのため、社内データをそのまま貼ると、社外秘・個人情報・取引先情報が外部へ出ていく構造になります。
            </p>
            <p>
              また、プランや設定によっては、入力データが学習や品質改善に利用される可能性があります。利用規約・データ取扱い・学習設定を確認しないまま使うと、
              「社内完結だと思っていた」という誤解が事故につながります。
            </p>
            <p>
              対策は難しくありません。まずは<span className="font-semibold text-gray-900">入力できるデータの範囲を決める</span>（データ分類）→
              <span className="font-semibold text-gray-900">入力前チェック</span>→
              <span className="font-semibold text-gray-900">ログと教育で改善</span>の順で設計します。
            </p>
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
          <h2 id="ng-patterns" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            情報漏えい10のNGパターン
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ここを押さえるだけで、事故の大半は防げます。各カードの「なぜNG」と「安全な代替方法」を、そのまま社内ルールに落とし込めます。
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {ngPatterns.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900">{item.title}</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-gray-900">なぜNG</p>
                    <p className="mt-1 text-sm leading-7 text-gray-700">{item.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-gray-900">安全な代替方法</p>
                    <p className="mt-1 text-sm leading-7 text-gray-700">{item.alternative}</p>
                  </div>
                </div>
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
          <h2 id="input-checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            入力前チェックリスト（5項目）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            迷ったら、まずこの5つだけ確認してください。現場の“うっかり”を最小化するための、最小セットです。
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {inputChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
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
          <h2 id="prevention-measures" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            組織で実施すべき防止策
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            事故をゼロにするより、「起きにくくする」「起きても止血できる」を先に作る方が現実的です。最低限の運用を5点に絞ります。
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">データ分類の基準策定（公開/社内一般/社外秘/個人情報など）</li>
            <li className="pl-1 marker:text-gray-500">
              入力ルールの明文化（社内共有テンプレ）
              <Link href="/academy/blog/ai-guideline-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                記事#1
              </Link>
              を参照
            </li>
            <li className="pl-1 marker:text-gray-500">ログの取得と定期監査（目的・入力区分・利用ツール・出力用途）</li>
            <li className="pl-1 marker:text-gray-500">
              教育・研修の実施（NG例と判断基準を反復）
              <Link href="/academy/blog/ai-training-curriculum" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                記事#7
              </Link>
              を参照
            </li>
            <li className="pl-1 marker:text-gray-500">インシデント対応フローの整備（記録確認→影響特定→報告→再発防止）</li>
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
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-2xl font-bold text-gray-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-guideline-template" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形（#1）
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/shadow-ai-countermeasures" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                シャドーAI対策（#2）
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
          <p className="mt-4 text-sm leading-7 text-gray-700">
            情報漏えいは、ツールの性能ではなく運用設計で防げます。まずは「NG入力の明文化」「入力前チェック」「ログと教育」を揃え、運用しながら更新していくのが最短ルートです。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            現場で迷いやすいのは「個人情報」「社外秘」「受託データ」です。迷ったら入力せず、匿名化・抽象化で代替し、必要なら例外申請で可視化してください。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ルール整備・研修・導入設計まで一緒に整えます
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ルール整備・研修・導入設計までまとめて進めたい方向けに、無料セミナーと相談窓口を用意しています。
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
