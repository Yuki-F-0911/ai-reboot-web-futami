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

type AiTrainingSubsidyGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "📩 LINEで毎週AI知識を配信中";
const lineCtaBody =
  "「AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。」";
const lineCtaButtonText = "今すぐ無料で登録する（30秒）";

const keywordTags = ["AI研修 助成金 申請", "リスキリング 補助金 法人", "人材開発支援助成金 AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "gap", label: "なぜ情報ギャップが起きるのか" },
  { id: "scheme-overview", label: "代表制度の全体像" },
  { id: "application-flow", label: "申請フロー5ステップ" },
  { id: "pitfalls", label: "よくある落とし穴" },
  { id: "pre-checklist", label: "申請前チェックリスト" },
  { id: "official-sources", label: "参照した公式情報" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "summary", label: "まとめ" },
  { id: "cta", label: "次のアクション" },
] as const;

const schemeRows = [
  {
    scheme: "人材開発支援助成金（事業展開等リスキリング支援コース）",
    target:
      "新規事業・事業転換などに伴うデジタル人材育成。生成AI活用の実務訓練は設計次第で対象になり得る。",
    support:
      "令和7年度資料では、経費助成率が中小企業75%、大企業60%。賃金助成は1人1時間あたり中小1,000円、大企業500円。",
    caution:
      "計画届の提出は訓練開始前。期限を過ぎると対象外になりやすいため、研修発注前に申請工程を固定する。",
  },
  {
    scheme: "人材開発支援助成金（人への投資促進コース）",
    target:
      "高度デジタル人材向け訓練、定額制訓練（サブスク型eラーニング）など。継続学習を前提に設計しやすい。",
    support:
      "訓練区分ごとに助成率・上限が異なる。定額制訓練は受講管理要件（LMSや受講履歴管理）が明確に求められる。",
    caution:
      "eラーニングは「対象」でも、出欠・進捗・受講回数要件が不足すると不支給リスク。運用ログ設計を先に決める。",
  },
  {
    scheme: "自治体の人材育成助成（例: 東京都 事業外スキルアップ助成金）",
    target:
      "都道府県や外郭団体が実施する研修助成。AI・DX研修を対象に含む自治体もあるため、国制度と並行確認が有効。",
    support: "例として東京都制度では、受講料等の一部助成（年度・事業規模・受講時間要件あり）。",
    caution: "同一経費の二重申請は不可。国制度との併用可否は申請前に窓口確認が必要。",
  },
] as const;

const flowSteps = [
  {
    step: "STEP 1",
    title: "制度選定と対象要件の照合",
    description:
      "まず研修目的を「どの業務の何を改善する訓練か」まで具体化し、対象コースを絞ります。生成AI研修という名称だけでは判定できないため、訓練内容・時間・受講者・実施形式を制度要件に合わせて照合します。",
    documents: "研修計画案、受講対象者一覧、講座シラバス、見積書（案）",
  },
  {
    step: "STEP 2",
    title: "事前申請（計画届提出）",
    description:
      "訓練開始前に計画届を提出します。令和7年度の見直し資料では、計画届提出期間は「訓練開始日から起算して6か月前〜1か月前」と整理されています。社内稟議と申請期限がずれると、そのまま対象外になるので最優先で管理します。",
    documents: "計画届、訓練実施計画、対象者情報、事業所情報",
  },
  {
    step: "STEP 3",
    title: "研修実施と証憑管理",
    description:
      "訓練中は、出欠・受講進捗・経費証憑を同時に管理します。特にeラーニングは「受けた証明」が曖昧になりやすいため、LMSログ、受講完了記録、受講回数など要件に沿った証跡を残します。",
    documents: "出欠表、LMSログ、受講完了記録、請求書・領収書、支払い証明",
  },
  {
    step: "STEP 4",
    title: "支給申請（実績報告）",
    description:
      "訓練終了後、期限内に支給申請を行います。事業展開等リスキリング支援コース詳細版では、支給申請期限を「訓練終了日の翌日から2か月以内」と明記しています。書類の整合を取り、対象外経費を除いて提出します。",
    documents: "支給申請書、実績報告書、経費内訳、賃金関連証憑",
  },
  {
    step: "STEP 5",
    title: "審査対応と次年度運用への反映",
    description:
      "審査中の照会対応に備えて、申請根拠をすぐ提示できる状態を維持します。支給決定後は、今回の要件差分と書類不備を社内ナレッジ化し、次回申請を短縮できる運用に更新します。",
    documents: "照会対応メモ、修正履歴、次年度用チェックリスト",
  },
] as const;

const pitfallItems = [
  {
    title: "1. 事前申請を後回しにして研修発注を先に進める",
    detail:
      "最も多い失敗です。訓練開始後は対象外になるケースがあるため、申請工程を先に確定しない限り、研修契約を確定しない運用が安全です。",
  },
  {
    title: "2. 「外部委託のみ対象等」の思い込みで制度を誤認する",
    detail:
      "コースごとに対象訓練区分が異なります。外部委託が必要な区分もあれば、社内実施でも対象になる区分もあるため、記事や噂ではなく年度要領で判定します。",
  },
  {
    title: "3. eラーニングは受講ログ不要と誤解する",
    detail:
      "eラーニングは対象になり得ますが、受講管理要件が明記されています。受講完了証明と進捗証跡がないと、支給申請で不利になります。",
  },
  {
    title: "4. 経費区分を混在させる",
    detail:
      "対象経費と対象外経費を同じ請求単位で処理すると整合確認に時間がかかります。発注段階で経費区分を分離しておくと支給申請が安定します。",
  },
  {
    title: "5. 申請期限をカレンダー管理していない",
    detail:
      "「訓練終了日基準で2か月以内」など期限起算日が制度で異なります。共通カレンダーに申請期限と社内締切を二重登録してください。",
  },
  {
    title: "6. 制度変更を前年資料で判断する",
    detail:
      "助成率・提出書類・運用は年度で見直されます。必ず『今年度版』の要領・パンフレット・申請様式で最終確認します。",
  },
] as const;

const checklistRows = [
  {
    phase: "研修企画前",
    checks: "対象コース、対象者、訓練区分、訓練時間、経費範囲を確認",
    owner: "人事/総務 + 経営層",
  },
  {
    phase: "事前申請前",
    checks: "計画届締切、社内稟議期限、添付資料（見積・シラバス）の整合を確認",
    owner: "人事/総務 + 経理",
  },
  {
    phase: "研修実施中",
    checks: "出欠、受講進捗、支払い証憑、委託契約書を日次/週次で回収",
    owner: "研修運営担当",
  },
  {
    phase: "支給申請前",
    checks: "対象外経費の除外、帳票の数値一致、提出期限までの逆算スケジュール",
    owner: "人事/総務 + 経理 + 社労士",
  },
  {
    phase: "申請後",
    checks: "照会対応体制、改定差分メモ、次回運用テンプレ化",
    owner: "人事/総務",
  },
] as const;

export default function AiTrainingSubsidyGuidePage({ faqItems }: AiTrainingSubsidyGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI研修の助成金活用" },
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
                title="生成AI研修に助成金を使う手順｜対象条件・落とし穴・申請フロー完全版"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AI研修に助成金を使う手順｜対象条件・落とし穴・申請フロー完全版
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日（2026年2月時点の情報）</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            社員向けの生成AI研修を検討している企業でも、「AI研修に助成金を使える」こと自体が共有されていないケースが少なくありません。
            結果として、研修予算を先に確定してから制度を調べ、申請期限を過ぎてしまうパターンが起きます。この記事は、
            <span className="font-semibold text-gray-900">人材開発支援助成金を中心に、申請順序と要件を最短で把握するための実務ガイド</span>
            です。個別要件は最終的に管轄労働局と社労士等の専門家へ確認してください。
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
              生成AI研修は、制度要件に合えば人材開発支援助成金の対象になり得ます。まずは「対象コースの見極め」が最優先です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              申請の基本は「事前申請→研修実施→支給申請」。順番を逆にすると、研修内容が良くても助成対象外になり得ます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              2026年2月時点の確認では、計画届期限やeラーニング要件など実務で詰まりやすい論点が明確です。年度要件を必ず最新版で照合してください。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm leading-7 text-emerald-900">
            申請前の進め方に迷う場合は、LINEの無料個別相談で状況を整理できます。AI活用ロードマップの案内もあるため、稟議と申請準備を進めやすくなります。
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">{lineCtaTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            {lineCtaButtonText}
          </a>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="gap" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            なぜ「AI研修に使える助成金」は見落とされるのか
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            見落としの最大要因は、助成金を「研修会社を選んだ後」に調べる運用です。助成金は後付けの値引きではなく、
            <span className="font-semibold text-gray-900">申請順序と証憑管理を含むプロジェクト設計</span>
            です。制度名だけ知っていても、期限・訓練区分・対象経費を外せば不支給になります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            また、法人向け助成金と個人向け給付金が混同されることも多いです。法人のAI研修なら、まず
            <Link href="/academy/blog/dx-reskilling-subsidy-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              DXリスキリング助成金ガイド
            </Link>
            を起点に全体を整理し、個人受講の制度は
            <Link href="/academy/blog/education-training-benefit-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              教育訓練給付金の記事
            </Link>
            と切り分けて判断すると誤認を防げます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            研修設計そのものが未定の場合は、
            <Link href="/academy/blog/corporate-ai-training" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法人向けAI研修の設計ガイド
            </Link>
            で対象者とKPIを先に固定してから制度適合を見るのが最短です。
          </p>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">見落としを生む4つの典型パターン</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">予算先行型:</span> 研修予算だけ先に決め、助成金を後追いで調べるため、事前申請期限を逃す。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">制度名依存型:</span> 「AI研修なら全部使える」と誤解し、訓練区分や対象経費の要件確認が抜ける。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">担当分断型:</span> 人事・経理・現場で証憑管理の責任が分かれておらず、提出直前に書類不一致が発覚する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">前年踏襲型:</span> 前年度要件をそのまま流用し、改定後の申請様式・提出期限に対応できない。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="scheme-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AI研修で検討すべき代表制度（人材開発支援助成金中心）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まず結論として、法人の生成AI研修で最初に確認すべき制度は人材開発支援助成金です。特に事業展開等リスキリング支援コースは、
            DXに伴う人材育成と接続しやすく、実務で使われる頻度が高い区分です。加えて、人への投資促進コースや自治体助成を併用候補として比較すると、実行可能性が上がります。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">制度</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">対象イメージ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">助成の考え方</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務上の注意点</th>
                </tr>
              </thead>
              <tbody>
                {schemeRows.map((row) => (
                  <tr key={row.scheme} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.scheme}</th>
                    <td className="py-4 px-4">{row.target}</td>
                    <td className="py-4 px-4">{row.support}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            助成率・上限額・対象経費は年度改定で変動します。必ず最新の公式資料で確認し、最終申請前に管轄労働局へ照会してください。
          </p>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">制度選定で先に見るべき判断軸</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">訓練目的の整合:</span> 研修内容が「業務変革に必要なスキル習得」として説明できるか。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">対象者と雇用区分:</span> 受講対象者の雇用要件を満たしているか。派遣・有期などの扱いを先に確認する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">訓練形式:</span> 集合研修・オンライン・eラーニングのどれで実施するか。形式によって要件と提出証憑が変わる。
            </li>
            <li className="pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">実績管理負荷:</span> 要件を満たす運用ログを社内で継続管理できるか。ここが未整備だと不支給リスクが高い。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="application-flow" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            申請フロー完全版（事前申請→研修実施→支給申請）を5ステップで整理
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            申請で失敗しない企業は、制度理解より先にフローを固定しています。以下の5ステップを社内標準にすると、書類不備と期限超過を大幅に減らせます。
          </p>
          <div className="mt-6 space-y-4">
            {flowSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-700">{item.description}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  主要書類: <span className="font-medium text-gray-900">{item.documents}</span>
                </p>
              </section>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            経営層への提案時は、費用対効果の説明を
            <Link href="/academy/blog/ai-adoption-proposal-template" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI導入提案テンプレート
            </Link>
            に沿って作ると、申請と予算承認を同時に進めやすくなります。
          </p>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">5ステップを30〜45日で回す進行例</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              1週目: 研修目的と対象業務を確定し、助成金コースを仮決定する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              2週目: 計画届案を作成し、見積・シラバス・対象者情報を揃えて事前確認を行う。
            </li>
            <li className="pl-1 marker:text-gray-500">
              3〜6週目: 研修実施と同時に、出欠・進捗・証憑を週次で締める。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最終週: 支給申請書類を作成し、提出前チェックを経理と二重確認する。
            </li>
            <li className="pl-1 marker:text-gray-500">
              提出後: 照会対応を想定して根拠資料をフォルダ化し、次回の申請テンプレートに反映する。
            </li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm leading-7 text-emerald-900">
            事前申請の進め方は、LINEの無料個別相談で現状に合わせて整理できます。AI活用ロードマップの案内を使うと、社内回覧に必要な項目を揃えやすくなります。
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900">{lineCtaTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            {lineCtaButtonText}
          </a>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="pitfalls" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある落とし穴（事前申請漏れ・外部委託誤認・証憑不足）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            不支給の多くは「制度が難しい」より「運用設計がない」ことが原因です。以下の落とし穴を先に潰しておくと、申請通過率と社内工数の両方を改善できます。
          </p>
          <div className="mt-6 space-y-4">
            {pitfallItems.map((item) => (
              <section key={item.title} className="rounded-lg border border-rose-200 bg-rose-50 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            特に「事前申請が必須」という一点は、どの業種でも共通の最重要ポイントです。研修会社との契約前に、申請スケジュールを逆算して社内承認ラインに乗せる運用を徹底してください。
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
          <h2 id="pre-checklist" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            申請前に社内で揃えるチェックリスト（人事・経理・現場の分担）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            申請フローを回すには、担当部署をまたぐ分担が不可欠です。担当者を曖昧にしたまま進めると、証憑不足や期限超過が起きやすくなります。以下の表を社内運用の最小単位として使ってください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">フェーズ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">必須チェック</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">主担当</th>
                </tr>
              </thead>
              <tbody>
                {checklistRows.map((row) => (
                  <tr key={row.phase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.phase}</th>
                    <td className="py-4 px-4">{row.checks}</td>
                    <td className="py-4 pl-4">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            本記事は制度理解のための一般情報です。個別申請の可否判断は、必ず社労士等の専門家と管轄窓口に確認してください。
          </p>
          <h3 className="mt-10 text-lg font-semibold text-gray-900">社内合意を通すための説明ポイント</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            申請実務では、制度要件より先に「なぜこの研修を今やるのか」を社内で説明できないと止まります。経営層には投資対効果、人事には運用負荷、現場には業務改善の具体像をそれぞれ分けて示すのが有効です。1枚でまとめる場合は、目的、対象部署、期待効果、申請スケジュール、必要工数、未実施時の機会損失を同時に記載すると意思決定が早くなります。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            重要なのは「助成金があるから研修する」順番にしないことです。まず業務課題に対する研修設計を定義し、次に助成金で実行可能性を高めるという順番にすると、承認者の納得を得やすく、研修後の定着率も上がります。
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
          <h2 id="official-sources" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            参照した公式情報（2026年2月20日確認）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            制度情報は毎年度見直しが入るため、以下の一次情報を基準にしています。本記事の数値は主に令和7年度資料に基づくため、令和8年度版の公開後は必ず差分確認を行ってください。実運用では、最新の公表資料と管轄労働局の案内で最終確認する前提です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                人材開発支援助成金｜厚生労働省
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://www.mhlw.go.jp/content/11800000/001514283.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                事業展開等リスキリング支援コースのご案内（詳細版）
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://www.mhlw.go.jp/content/11800000/001514282.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                人への投資促進コースのご案内（詳細版）
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://www.mhlw.go.jp/content/11800000/001469655.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                令和7年4月1日見直しリーフレット
              </a>
            </li>
            <li className="pl-1 marker:text-gray-500">
              <a
                href="https://www.koyokankyo.shigotozaidan.or.jp/jigyo/skillup/skill-R7jigyogai.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                令和7年度 事業外スキルアップ助成金｜東京しごと財団
              </a>
            </li>
          </ul>
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
          <p className="mt-5 text-base leading-8 text-gray-700">
            申請前に問い合わせが多い論点をQ&Aで整理しました。制度の最新解釈は必ず管轄窓口に確認してください。
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
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/dx-reskilling-subsidy-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                DXリスキリング助成金ガイド｜対象条件・申請手順・併用可否を解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/education-training-benefit-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                教育訓練給付金でAI講座を受講するガイド｜制度比較と費用の考え方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/corporate-ai-training"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                法人向けAI研修で成果を出す完全ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-adoption-proposal-template"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AI導入提案書テンプレート｜社内決裁を通す構成と作り方
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            生成AI研修に助成金を使う実務は、制度名を知っているかどうかより「申請順序を守れるか」で結果が決まります。特に人材開発支援助成金は、
            事前申請、訓練記録、支給申請期限の3点を外さなければ、研修投資の実質負担を下げながら社内のAI活用基盤を作れます。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            まずは5ステップで社内運用を設計し、年度要件を確認したうえで申請準備に着手してください。制度運用は毎年更新されるため、2026年2月時点の情報を起点に、最新版資料で最終確認する姿勢が重要です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            研修そのものの品質は、助成金申請の通過だけでは測れません。研修後に現場で使える状態まで設計し、業務KPIと接続して初めて投資対効果が可視化されます。助成金はそのための推進装置として使う、という位置づけが実務では最も機能します。
          </p>
        </motion.section>

        <motion.section
          className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            申請フローを実務に落とし込むときは、制度確認と同時に研修設計を進めると失敗を減らせます。AIリブートアカデミーでは、
            <span className="font-semibold text-gray-900">生成AI活用力の習得</span>に加え、
            <span className="font-semibold text-gray-900">自己理解・キャリアデザイン</span>、
            <span className="font-semibold text-gray-900">仲間と共に学ぶ環境</span>
            を通じて、継続できる学習基盤づくりを支援しています。
          </p>
          <h3 className="mt-4 text-2xl font-bold text-gray-900">{lineCtaTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
          >
            {lineCtaButtonText}
          </a>
        </motion.section>
      </article>
    </main>
  );
}
