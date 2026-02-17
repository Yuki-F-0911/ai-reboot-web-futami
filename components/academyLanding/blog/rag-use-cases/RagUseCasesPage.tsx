"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type RagUseCasesPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["RAG 活用事例", "RAG ユースケース", "検索拡張生成 事例", "社内ナレッジ活用"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "rag-overview", label: "RAGとは？（簡潔に復習）" },
  { id: "use-case-1", label: "活用事例1：社内ナレッジベースの自動応答" },
  { id: "use-case-2", label: "活用事例2：カスタマーサポートの自動化" },
  { id: "use-case-3", label: "活用事例3：法務・コンプライアンス文書検索" },
  { id: "use-case-4", label: "活用事例4：営業支援" },
  { id: "use-case-5", label: "活用事例5：医療・ヘルスケア" },
  { id: "use-case-6", label: "活用事例6：教育・研修" },
  { id: "use-case-7", label: "活用事例7：製造業" },
  { id: "use-case-8", label: "活用事例8：金融" },
  { id: "implementation-steps", label: "RAG導入のステップと注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "AIリブートアカデミーへの誘導" },
] as const;

const useCaseSections = [
  {
    id: "use-case-1",
    title: "活用事例1 – 社内ナレッジベースの自動応答（社内FAQ、マニュアル検索）",
    fit: "社内規程、申請手順、ツール操作など「同じ質問が繰り返される」領域。",
    sources: "社内FAQ、就業規則、マニュアル、手順書、社内Wiki、議事録。",
    output: "質問への回答、参照根拠（引用）、関連リンク、次アクション（申請フォームなど）。",
    caution:
      "根拠となる正本（最新版）を明確にし、参照権限を必ず適用します。回答に根拠リンクを添えると運用レビューが回りやすくなります。",
    smallStart:
      "まずは対象を「よくある質問上位20件」に絞り、検索→根拠提示→一次回答の流れだけをPoCします。",
  },
  {
    id: "use-case-2",
    title: "活用事例2 – カスタマーサポートの自動化（問い合わせ対応、チャットボット）",
    fit: "製品仕様・使い方・トラブルシュートなど、資料が整っている問い合わせ対応。",
    sources: "製品マニュアル、FAQ、リリースノート、過去チケット、テンプレ回答、利用規約。",
    output: "返信案の下書き、根拠の引用、確認事項の質問、担当者への引き継ぎメモ。",
    caution:
      "契約・返金・クレームなど高リスク領域は自動化範囲から外し、明確なエスカレーション基準を設計します。",
    smallStart:
      "まずは「返信案を作るだけ（送信は人が確認）」から始め、一次解決率や対応時間の改善を計測します。",
  },
  {
    id: "use-case-3",
    title: "活用事例3 – 法務・コンプライアンス文書検索（契約書レビュー、規制確認）",
    fit: "条項の参照、社内規程の照会、規制文書の該当箇所探索など、探索コストが高い業務。",
    sources: "契約書ひな形、過去契約、社内規程、監査資料、規制ガイドライン、Q&A集。",
    output: "該当条項の抽出、類似条項の提示、要点要約、確認観点のチェックリスト。",
    caution:
      "法的判断の自動化は避け、あくまで「根拠探索と整理」を支援する設計にします。最終判断は必ず専門家が行う運用が必要です。",
    smallStart:
      "まずは「条項検索（根拠提示）」に限定し、レビューの初動を速くする用途から始めます。",
  },
  {
    id: "use-case-4",
    title: "活用事例4 – 営業支援（提案書自動生成、商品情報検索）",
    fit: "商品・価格・導入事例・競合比較など、提案で参照する情報が多い業務。",
    sources: "製品資料、提案書テンプレ、事例集、価格表、競合比較表、社内ナレッジ。",
    output: "提案骨子、FAQ想定、比較表のたたき台、根拠リンク付きの回答。",
    caution:
      "顧客固有情報の取り扱いルールを明確にし、根拠が取れない場合は推測しない回答方針（回答不可の規約）を定めます。",
    smallStart:
      "まずは「商品情報検索→根拠提示」から始め、次に提案骨子の生成へ段階的に拡張します。",
  },
  {
    id: "use-case-5",
    title: "活用事例5 – 医療・ヘルスケア（診療ガイドライン検索、論文要約）",
    fit: "ガイドラインや学術情報の探索・要約など、根拠文書の参照が重要な領域。",
    sources: "診療ガイドライン、院内マニュアル、薬剤情報、論文、学会資料。",
    output: "該当箇所の引用、要点の整理、比較表、追加で確認すべき観点の提示。",
    caution:
      "医療判断の代替ではなく、参照情報の整理・検索補助に限定します。公開情報と院内情報を分離し、権限と監査ログを必須にします。",
    smallStart:
      "まずは「院内手順書の検索」など閉じた範囲で始め、レビュー体制と安全基準を整えます。",
  },
  {
    id: "use-case-6",
    title: "活用事例6 – 教育・研修（教材検索、パーソナライズ学習）",
    fit: "研修資料や教材が多く、受講者の理解度に応じた復習支援が必要な場面。",
    sources: "研修スライド、教材PDF、社内資格制度の資料、演習問題、FAQ。",
    output: "学習者の質問回答、復習問題の生成、理解度チェック、参照教材の提示。",
    caution:
      "教材の版管理と誤情報の混入対策が重要です。社内の学習コンテンツはアクセス権限を適用し、引用元を明示します。",
    smallStart:
      "まずは「教材検索＋該当ページ提示」から始め、次に演習問題生成などの学習支援へ広げます。",
  },
  {
    id: "use-case-7",
    title: "活用事例7 – 製造業（設備マニュアル検索、品質管理情報）",
    fit: "設備保全、品質手順、異常時対応など、現場で参照すべき文書が多い業務。",
    sources: "設備マニュアル、保全記録、品質手順書、過去トラブル報告、図面・仕様書。",
    output: "手順の提示、注意点の要約、関連記録の参照、点検チェックリスト。",
    caution:
      "誤った手順提示はリスクが高いため、根拠の提示と人の確認フローを必須にします。現場での運用を想定してUI/UXも設計します。",
    smallStart:
      "まずは「マニュアル検索（該当箇所の提示）」に限定し、次に点検チェックリスト生成へ拡張します。",
  },
  {
    id: "use-case-8",
    title: "活用事例8 – 金融（市場レポート分析、規制文書検索）",
    fit: "市場レポートの読み込み、規制・内部規程の参照、顧客向け説明の下書きなど。",
    sources: "市場レポート、社内規程、商品説明資料、規制ガイド、FAQ、過去の分析資料。",
    output: "要点サマリ、比較観点、根拠付きの説明文案、確認すべき制約の提示。",
    caution:
      "誤情報が重大リスクになりやすいため、根拠提示とレビュー体制を強化します。外部共有可能な情報範囲も明確にします。",
    smallStart:
      "まずは「規制文書検索（引用付き）」や「社内規程の照会」など、参照中心の業務から始めると安全です。",
  },
] as const;

const implementationSteps = [
  {
    title: "Step 1. ユースケースと成功条件を決める",
    body: "「誰の、どの業務で、何が速く/正確に/一貫するか」を先に定義します。一次解決率、作業時間、手戻り回数など測れる指標に落とすのが実務的です。",
  },
  {
    title: "Step 2. 参照データ（正本）を棚卸しする",
    body: "正しい最新版がどこにあるかを決め、重複や古い版が混ざらない状態を作ります。版管理が弱いと、検索品質が運用で崩れやすくなります。",
  },
  {
    title: "Step 3. 権限設計とログ方針を先に固める",
    body: "誰が何を検索できるか、結果のフィルタリング、操作ログの保存、個人情報/機密情報の取り扱いルールを決めます。",
  },
  {
    title: "Step 4. 検索品質を評価して改善する",
    body: "検索方式（キーワード/ベクトル/ハイブリッド）を選び、評価セットで「根拠が取れているか」を検証します。生成品質の前に検索品質がボトルネックになりやすい点が重要です。",
  },
  {
    title: "Step 5. 回答フォーマットとガードレールを作る",
    body: "根拠提示、回答不可の条件、エスカレーション、テンプレ回答などを決めます。高リスク領域は自動化せず、人の最終確認を前提にします。",
  },
  {
    title: "Step 6. 小さく運用し、改善サイクルを回す",
    body: "まずは限定ユーザー/限定業務でPoCし、ログから不足データや検索失敗パターンを特定して改善します。全社展開は運用が固まってから段階的に進めます。",
  },
] as const;

const cautionCards = [
  {
    title: "データの鮮度・正本管理",
    body: "古い版や重複が混ざると、検索が正しくても回答が誤ります。更新・削除の反映ルールと責任者を定義します。",
  },
  {
    title: "権限と情報漏えい対策",
    body: "文書権限を検索結果へ確実に反映し、機密区分と入力ルールを周知します。ログと監査も合わせて設計します。",
  },
  {
    title: "評価と運用KPI",
    body: "正確性だけでなく、根拠の妥当性、レイテンシ、コスト、再質問率など運用指標を定めて改善を回します。",
  },
] as const;

export default function RagUseCasesPage({ faqItems }: RagUseCasesPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "RAG活用事例" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            RAG（検索拡張生成）の活用事例8選｜業種・業務別に解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月17日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論: RAGは「参照すべき資料がある業務」で効果が出やすく、社内ナレッジ検索やサポートの一次対応から小さく始めるのが実務的です。
            本記事では、業種・業務別の活用事例8選と、導入ステップ/注意点を要点から整理します。
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
              RAGは「検索で根拠を取り出し、その根拠を参照して回答を生成する」方式で、文書参照が多い業務と相性が良いです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              成果は検索品質とデータ整備に強く依存します。正本管理、権限、ログ、評価を先に設計するのが近道です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最初は「参照中心（根拠提示）」のユースケースから始め、運用が固まってから生成（下書き）へ拡張すると安全です。
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
          <h2 id="rag-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAGとは？（簡潔な復習）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: RAG（検索拡張生成）は「検索で関連文書を取り出し、その内容を根拠としてLLMが回答を生成する」仕組みです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            仕組みの詳細やメリット/限界を先に整理したい場合は、{" "}
            <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              RAG（検索拡張生成）とは？
            </Link>
            を参照してください。RAGは単なる「チャットボット強化」ではなく、検索・データ整備・評価・運用を一体で設計すると、実務で成果が出やすくなります。
          </p>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            なお、RAGを「ツール連携して動く仕組み」として捉える場合は{" "}
            <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは？
            </Link>
            も合わせて読むと全体像がつかみやすくなります。
          </p>
        </motion.section>

        {useCaseSections.map((section) => (
          <motion.section
            key={section.id}
            className="mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id={section.id} className="scroll-mt-28 text-2xl font-bold text-gray-900">
              {section.title}
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-gray-900">結論: {section.fit}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <section className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">向いている業務</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{section.fit}</p>
              </section>
              <section className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">よく使う参照データ</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{section.sources}</p>
              </section>
              <section className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">出力イメージ</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{section.output}</p>
              </section>
              <section className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">運用上の注意</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{section.caution}</p>
              </section>
            </div>
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              <p className="font-semibold text-slate-900">小さく始める方法</p>
              <p className="mt-2">{section.smallStart}</p>
            </div>
          </motion.section>
        ))}

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="implementation-steps" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            RAG導入のステップと注意点
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 先に「ユースケース」「正本（根拠）」「権限」「評価」を決め、検索が当たる状態を作ってから生成を広げるのが最短です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            事例を見たあとに迷いやすいのが「何から手を付けるか」です。法人での進め方の全体像は{" "}
            <Link
              href="/academy/blog/corporate-ai-adoption-guide"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              中小企業の生成AI導入ガイド
            </Link>
            も参考になります。ここではRAGに絞って、実務で失敗しにくい順番をまとめます。
          </p>

          <div className="mt-6 space-y-4">
            {implementationSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cautionCards.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            部門別の一般的な業務改善パターンを先に整理したい場合は、{" "}
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務効率化事例集
            </Link>
            も合わせてご覧ください。
          </p>
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
            よくある質問（FAQ）
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

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/what-is-rag" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                RAG（検索拡張生成）とは？仕組み・メリット・活用事例をわかりやすく解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/what-is-ai-agent"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIエージェントとは？定義・種類・作り方を初心者向けに解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-adoption-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                中小企業の生成AI導入ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集
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
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIリブートアカデミーで学ぶ（体系化して実務へつなげる）
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            RAGは「ユースケース選定」「データ整備」「評価」「運用」まで含めて設計すると成果が出やすくなります。学習から実務適用までを体系的に進めたい方は、アカデミーの案内もご覧ください。
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
              ブログ一覧へ
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
