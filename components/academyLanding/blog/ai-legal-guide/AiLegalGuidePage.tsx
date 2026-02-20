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

type AiLegalGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 法務 活用", "契約書 AI レビュー", "リーガルチェック", "法務 ChatGPT 使い方"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-no-full-delegate", label: "全部任せてはいけない理由" },
  { id: "can-cannot", label: "使える場面・使えない場面" },
  { id: "framework", label: "任せない運用フレームワーク" },
  { id: "practice", label: "実践手順とプロンプト例" },
  { id: "faq", label: "FAQ" },
] as const;

const canUseCases = [
  {
    title: "契約書ドラフト補助",
    body: "既存ひな形を前提に、条項の言い回し候補や不足条項の洗い出しを行う。起案速度を上げる用途。",
  },
  {
    title: "条文検索・論点整理",
    body: "契約条項ごとの論点を分類し、確認観点のリスト化を行う。読み漏れ防止に有効。",
  },
  {
    title: "ひな形整備",
    body: "NDA、業務委託、利用規約などのテンプレ差分を整理し、更新候補を一覧化する。",
  },
  {
    title: "内部FAQの一次回答",
    body: "社内ルールに基づく一次回答案を生成し、法務担当者が最終承認して展開する。",
  },
] as const;

const cannotUseCases = [
  {
    title: "最終法的判断の確定",
    body: "法的責任は組織に残るため、AI出力のみで合否判断を確定する運用は不適切。",
  },
  {
    title: "個別事情を踏まえた交渉方針の最終決定",
    body: "取引関係、過去経緯、社内方針を総合した意思決定は人間の責務。",
  },
  {
    title: "無検証での対外文書確定",
    body: "通知文・回答書・契約最終版をノーチェックで利用すると誤記載リスクが高い。",
  },
  {
    title: "機密情報の無条件入力",
    body: "個人情報・営業秘密・取引先情報をルールなしで入力する行為は避けるべき。",
  },
] as const;

const frameworkLayers = [
  {
    title: "Layer 1: データ分類",
    body: "公開情報、社内一般、機密、個人情報に分け、入力可否を先に決める。迷ったデータは入力しない。",
    checks: ["公開済み情報か", "個人情報や営業秘密を含まないか", "匿名化で代替できるか"],
  },
  {
    title: "Layer 2: タスク分類",
    body: "業務を「補助可」「要承認」「禁止」に分ける。契約レビューは補助可、最終承認は要承認に固定する。",
    checks: ["成果物が対外利用されるか", "最終判断が必要か", "誤り時の影響が大きいか"],
  },
  {
    title: "Layer 3: レビュー・ログ・例外",
    body: "AI出力の採否理由、確認者、利用データ区分を記録する。例外利用は申請制で証跡を残す。",
    checks: ["誰がレビューしたか", "どのデータ区分で利用したか", "例外承認の根拠が残っているか"],
  },
] as const;

const rolloutSteps = [
  {
    title: "Week 1: 利用範囲を決める",
    body: "法務の現行業務を棚卸しし、AIで補助するタスクを3つに限定する。最初から全業務に広げない。",
  },
  {
    title: "Week 2: ルールとプロンプトを整備",
    body: "入力禁止データ、承認ルート、ログ項目を決め、定型プロンプトを運用台帳に登録する。",
  },
  {
    title: "Week 3: 小規模運用とレビュー",
    body: "NDAや業務委託契約など限定領域で試行し、レビュー時間と修正率を記録する。",
  },
  {
    title: "Week 4: 標準運用化",
    body: "改善点を反映し、部門内ガイドラインとして公開する。定期監査と教育を月次運用に組み込む。",
  },
] as const;

function LineCtaBox({ withChecklistNote = false }: { withChecklistNote?: boolean }) {
  return (
    <section className="blog-cta-box mt-10 rounded-lg border border-green-200 bg-green-50 p-6">
      {withChecklistNote && (
        <p className="text-sm leading-7 text-green-900">
          法務活用チェックリスト（リスク管理観点）は、LINE登録後に案内しています。
        </p>
      )}
      <p className="mt-2 text-base font-semibold text-green-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-green-900">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          LINEで週1AI通信を受け取る（無料）
        </a>
      </div>
    </section>
  );
}

export default function AiLegalGuidePage({ faqItems }: AiLegalGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "法務の生成AI活用ガイド" },
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
                title="法務の生成AI活用ガイド｜契約レビューを「任せない」運用設計と実践的な使い方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            法務の生成AI活用ガイド｜契約レビューを「任せない」運用設計と実践的な使い方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論から言うと、法務で生成AIを使うときに最も重要なのは、契約レビューを「任せる」ことではなく、契約レビューを
            <span className="font-semibold text-gray-900">「任せない前提で設計する」</span>ことです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            AIは、条文の要約、論点の洗い出し、ひな形差分の整理では高い生産性を出せます。一方で、最終的な法的評価、交渉判断、責任の所在を伴う決裁は人が担う必要があります。
            この境界を曖昧にすると、品質・情報管理・説明責任の3点で運用が崩れます。
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
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">契約レビューの最終判断は法務担当者が行う。AIは補助に限定する。</li>
            <li className="blog-li pl-1 marker:text-gray-500">
              使える業務（ドラフト補助・検索・ひな形整備・FAQ）と使えない業務（最終法的判断・承認）は分離する。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              安全運用の要点は、データ分類、タスク分類、レビュー/ログ/例外申請の3層で設計すること。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              「機密情報を入れてもよいか」は、ツール種別ではなく契約条件・設定・社内ルールで判断する。
            </li>
          </ul>
        </motion.section>

        <LineCtaBox withChecklistNote />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="why-no-full-delegate" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            法務でAIに契約レビューを全部任せてはいけない理由
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            生成AIは有効ですが、法務業務の責任主体を代替しません。契約レビューを全面委任すると、判断根拠と説明責任が失われます。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">責任主体はAIではなく組織に残る</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            契約判断の責任は、サービス提供者ではなく契約を締結する企業側に残ります。したがって「AIがそう言った」は根拠になりません。
            出力を採用するかどうか、誰がどの基準で承認したかを記録できる運用が必要です。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">もっともらしい誤りは法務業務で致命的になりやすい</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            生成AIは文面として自然でも、条項解釈、法域、前提事実の取り違えを起こすことがあります。法務では「自然な文」に見える誤りほど検出が遅れます。
            そのため、AI出力は必ず一次資料（原契約、社内規程、法令、判例DB）との照合を前提に扱うべきです。
          </p>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">個人情報・営業秘密・守秘義務との衝突が起きやすい</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            個人情報保護委員会の注意喚起（2023年6月2日）でも、生成AI利用時は入力データと利用規約の確認が求められています。契約書には取引先名、単価、スキーム、個人情報が含まれやすく、
            無加工で入力すると守秘義務や個人情報規制の論点が同時に発生します。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            2026年2月20日時点では、日本国内はAI専用の単独法でなく、著作権法・個人情報保護法・不正競争防止法など既存法の組み合わせで判断する実務が続いています。EUではAI
            Actの段階適用が進行中で、次の主要適用日である2026年8月2日を見据えた対応計画が必要です。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            詳細な情報管理ルールは、
            <Link href="/academy/blog/ai-data-leak-patterns" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIで情報漏えいが起きるパターン10選
            </Link>
            で具体例を確認してください。
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
          <h2 id="can-cannot" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            法務でAIが使える場面と使えない場面を先に分ける
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            法務活用で失敗しない条件は、「ツール比較」より先に業務分類をすることです。どこまで補助にするかを決めれば、品質と安全性を両立しやすくなります。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-green-200 bg-green-50 p-5">
              <h3 className="blog-h3 text-lg font-semibold text-green-900">使える場面（補助ツールとして有効）</h3>
              <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-green-900">
                {canUseCases.map((item) => (
                  <li key={item.title} className="blog-li pl-1 marker:text-green-700">
                    <span className="font-semibold">{item.title}</span>: {item.body}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-lg border border-rose-200 bg-rose-50 p-5">
              <h3 className="blog-h3 text-lg font-semibold text-rose-900">使えない場面（人間判断が必要）</h3>
              <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-rose-900">
                {cannotUseCases.map((item) => (
                  <li key={item.title} className="blog-li pl-1 marker:text-rose-700">
                    <span className="font-semibold">{item.title}</span>: {item.body}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">業務</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">AIの役割</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">最終責任</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用区分</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">契約書ドラフト</th>
                  <td className="px-4 py-4">条項候補、表現の整文</td>
                  <td className="px-4 py-4">法務担当者</td>
                  <td className="py-4 pl-4">補助可</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">契約レビュー</th>
                  <td className="px-4 py-4">差分抽出、論点列挙</td>
                  <td className="px-4 py-4">法務責任者</td>
                  <td className="py-4 pl-4">要承認</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">契約承認</th>
                  <td className="px-4 py-4">承認根拠の整理補助</td>
                  <td className="px-4 py-4">決裁権者</td>
                  <td className="py-4 pl-4">AI単独禁止</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="py-4 pr-4 font-semibold text-gray-900">社内相談FAQ</th>
                  <td className="px-4 py-4">一次回答草案</td>
                  <td className="px-4 py-4">法務チーム</td>
                  <td className="py-4 pl-4">補助可</td>
                </tr>
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
          <h2 id="framework" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            「任せない」ための運用設計フレームワーク（法務向け3層）
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            実務で再現性を出すには、個人の注意ではなく運用設計が必要です。法務では、データ分類、タスク分類、レビュー/ログの3層を固定すると統制が安定します。
          </p>

          <div className="mt-8 space-y-4">
            {frameworkLayers.map((layer) => (
              <section key={layer.title} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{layer.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{layer.body}</p>
                <ul className="blog-ul mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {layer.checks.map((check) => (
                    <li key={check} className="blog-li pl-1 marker:text-gray-500">
                      {check}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            ガイドライン雛形は
            <Link href="/academy/blog/ai-guideline-template" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの社内ガイドライン雛形
            </Link>
            を、組織統制は
            <Link href="/academy/blog/shadow-ai-countermeasures" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              シャドーAI対策
            </Link>
            を参照すると設計しやすくなります。
          </p>
        </motion.section>

        <LineCtaBox withChecklistNote />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="practice" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            現場で使う実践手順とプロンプト例
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            導入時は、対象契約を絞って小さく開始し、レビュー精度と修正率を計測する運用が有効です。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rolloutSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{step.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>

          <h3 className="blog-h3 mt-10 text-lg font-semibold text-gray-900">契約レビュー補助プロンプト（差分抽出）</h3>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-800">
            <code>{`あなたは企業法務アシスタントです。以下の2文書を比較し、法務レビュー観点で差分を整理してください。

[文書A] 当社標準ひな形
[文書B] 取引先提示案

出力要件:
1. 差分一覧（条項番号、変更前、変更後）
2. リスク評価（高/中/低）
3. 当社に不利な可能性がある論点
4. 交渉候補文案（日本語）
5. 「最終判断は人間レビューが必要」と明記`}</code>
          </pre>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">内部FAQプロンプト（法務一次回答）</h3>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-800">
            <code>{`あなたは社内法務FAQの一次回答作成アシスタントです。
以下の社内規程を前提に、質問への回答案を作成してください。

[社内規程抜粋]
- 契約書締結前のレビュー必須条件
- 電子契約の承認フロー
- NDA締結基準

出力要件:
- 回答案（200字以内）
- 根拠条項番号
- 不足情報（確認すべき点）
- 法務確認が必要か（Yes/No）`}</code>
          </pre>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">関連リンク</h3>
          <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-guideline-template" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの社内ガイドライン雛形｜禁止事項・権限・ログまで1枚で設計
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/shadow-ai-countermeasures" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                シャドーAI対策の進め方｜禁止せず安全に使わせる統制設計
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-data-leak-patterns" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIで情報漏えいが起きるパターン10選
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-copyright-commercial-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AIの著作権・商用利用ガイド
              </Link>
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
          <h2 id="faq" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
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

          <p className="blog-p mt-8 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、自己理解・キャリアデザイン、仲間と共に学ぶ環境の3本柱で実務定着を支援しています。
          </p>
        </motion.section>

        <LineCtaBox withChecklistNote />
      </article>
    </main>
  );
}
