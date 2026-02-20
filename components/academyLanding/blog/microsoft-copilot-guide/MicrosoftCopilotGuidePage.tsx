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

type MicrosoftCopilotGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaButtonLabel = "LINEで週1AI通信を受け取る（無料）";

const keywordTags = ["Microsoft Copilot 使い方 2026", "Windows Copilot", "Microsoft 365 Copilot", "Copilot 無料版 有料版"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "types", label: "Q1. Copilotの種類を整理" },
  { id: "free", label: "Q2. 無料版で今すぐできること" },
  { id: "pro", label: "Q3. Copilot Proで増えること" },
  { id: "office", label: "Q4. Word/Excel/PPT/Outlook活用例" },
  { id: "compare", label: "Q5. ChatGPT・Geminiとの使い分け" },
  { id: "enterprise", label: "Q6. 企業契約の条件と導入手順" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "Microsoft Copilotは「無料版（Windows/Edge/Web）」「Copilot Pro」「Microsoft 365 Copilot（法人）」で用途が分かれます。",
  "無料版は今すぐ試せますが、AIクレジット上限があるため継続運用では有料差分の見極めが必要です。",
  "法人導入はライセンス単価だけでなく、入力ルール・レビュー体制・KPI設計まで先に決めると定着しやすくなります。",
] as const;

const typeRows = [
  {
    plan: "無料版（Windows/Edge/Web）",
    price: "0円",
    feature: "Windowsアプリ、Edgeサイドパネル、WebでCopilotを利用開始できる",
    fit: "まず個人で試したい、部門で小さく検証したい",
  },
  {
    plan: "Copilot Pro",
    price: "月額3,200円",
    feature: "AIクレジット増加、混雑時の優先アクセス、Microsoft 365アプリ連携の強化",
    fit: "Word/PowerPointを日常的に使う個人・少人数チーム",
  },
  {
    plan: "Microsoft 365 Copilot（Business）",
    price: "4,497円/ユーザー/月（年契約）",
    feature: "組織アカウント前提でMicrosoft 365データを跨いだ業務支援",
    fit: "社内導入を管理者統制付きで進めたい企業",
  },
] as const;

const freeUseRows = [
  {
    place: "Windows 11アプリ",
    canDo: "質問応答、要約、下書き、日常タスク支援",
    caution: "無料でも使えるが、クレジット上限に注意",
  },
  {
    place: "Microsoft Edge",
    canDo: "閲覧ページを参照した要約、比較、文案作成",
    caution: "ブラウザ文脈に依存するため、最終確認が必要",
  },
  {
    place: "Copilot on Web",
    canDo: "リサーチ、文章叩き台、質問ベースの整理",
    caution: "モデルと応答速度は混雑時に変動しやすい",
  },
] as const;

const officeRows = [
  {
    app: "Word",
    scenario: "議事録や提案書の下書きを作成し、構成を整える",
    kpi: "初稿作成時間、レビュー往復回数",
  },
  {
    app: "Excel",
    scenario: "表データの要点抽出、式の提案、分析観点の列挙",
    kpi: "集計開始までの時間、計算ミス件数",
  },
  {
    app: "PowerPoint",
    scenario: "構成案からスライド骨子を短時間で作る",
    kpi: "1本目ドラフト作成時間、修正ラウンド数",
  },
  {
    app: "Outlook",
    scenario: "長文メールの要約と返信下書き",
    kpi: "返信作成時間、再修正回数",
  },
] as const;

const compareRows = [
  {
    axis: "強みが出る環境",
    copilot: "Windows/Microsoft 365に密接",
    chatgpt: "汎用タスクと柔軟な対話",
    gemini: "Google Workspace連携",
    decision: "日常で使う業務基盤に合わせて選ぶ",
  },
  {
    axis: "業務文書の下書き",
    copilot: "Office作業と連動しやすい",
    chatgpt: "長文要約と構成提案が得意",
    gemini: "Google Docs/Meet運用で強い",
    decision: "既存の文書作成フローとの親和性で判断",
  },
  {
    axis: "導入時のつまずき",
    copilot: "契約条件と管理設定の理解差",
    chatgpt: "利用ポリシーと運用ルールの未整備",
    gemini: "エディション差分と管理設定の見落とし",
    decision: "まず対象業務を3つに絞って検証する",
  },
] as const;

const rolloutSteps = [
  {
    phase: "Step 1（1週目）",
    action: "対象業務を3つに固定（文書、表計算、メール）",
    output: "評価表（時間・品質・修正回数）を作成",
  },
  {
    phase: "Step 2（2〜3週目）",
    action: "無料版/有料版でA/B検証し、実データを記録",
    output: "1タスクあたり削減時間と品質差を可視化",
  },
  {
    phase: "Step 3（4週目）",
    action: "契約条件と統制ルールを確定して展開範囲を決める",
    output: "導入判断メモ（継続・拡張・見送り）を提出",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "ツール名ではなく業務課題に対して、何を自動化し何を人が判断するかを設計する力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡に自分の強みと価値観を言語化し、次のキャリア選択につながる行動計画へ落とし込みます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話と振り返りで、学んだ内容を実務で継続できる形に定着させます。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass = tone === "green" ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6" : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="text-base font-semibold text-gray-900">{lineCtaBody}</h3>
      <p className="mt-2 text-sm leading-7 text-gray-700">毎週、実務で再利用しやすいAI活用テンプレートとニュース要点をまとめて配信しています。</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        {lineCtaButtonLabel}
      </a>
    </motion.section>
  );
}

export default function MicrosoftCopilotGuidePage({ faqItems }: MicrosoftCopilotGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Microsoft Copilot使い方ガイド" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span key={tag} className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Microsoft Copilot使い方ガイド｜無料版・有料版・M365比較【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 更新
            </p>
            <CopyAsMarkdownButton title="Microsoft Copilot使い方ガイド｜無料版・有料版・M365比較【2026年版】" sourceSelector="[data-blog-article-body]" />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Microsoft Copilotを調べ始めると、無料版、Copilot Pro、Microsoft 365 Copilotが混在していて判断しづらくなりがちです。
            本記事では、<span className="font-semibold text-gray-900">どのプランを誰が選ぶべきか、無料版でどこまで試せるか、法人導入で何を先に決めるべきか</span>を1ページで整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            ※2026年2月20日時点の公式情報を基準に整理。料金・機能・モデル提供は更新される可能性があります。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="types"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q1. Microsoft Copilotの種類を先に整理（Windows/Pro/M365）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            最初に整理すべきポイントは、Copilotが1つの料金体系ではないことです。個人の学習・日常利用なら無料版やPro、企業展開ならMicrosoft 365 Copilotという切り分けで考えると迷いにくくなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">種別</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">価格目安</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">主な機能</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {typeRows.map((row) => (
                  <tr key={row.plan}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.plan}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.price}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.feature}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            法人向けの全体像は
            <Link href="/academy/blog/corporate-ai-adoption-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              企業のAI導入ガイド
            </Link>
            も合わせて確認すると、契約以外の論点（社内ルール、教育、運用設計）を整理しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="free"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q2. 無料版で今すぐできること（Windows 11統合AI・Edge・Web）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            無料版の価値は「すぐ始められること」です。Windowsアプリ、Edge、Webの3導線で実業務に近い検証ができるため、まずは小さく試して有料化の判断材料を作るのが実務的です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">利用場所</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">今すぐできること</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {freeUseRows.map((row) => (
                  <tr key={row.place}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.place}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.canDo}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            無料版はAIクレジット制です。検証時は「1日何回使うと上限に近づくか」を記録し、上限到達前提の運用にしないことが重要です。
            また、モデルについてはGPT-5展開方針は公開されていますが、<span className="font-semibold text-gray-900">[要確認: GPT-5.2の無料版明示提供]</span> は一次情報で確認できません。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="pro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q3. Copilot Pro（月額3,200円）でできること</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Copilot Proで差が出るのは、利用枠と混雑時の体験です。日常的にWordやPowerPointで下書き作業が多い人ほど、処理待ちや上限のストレスが減りやすくなります。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AIクレジットが拡張され、同じタスクをより継続しやすい</li>
            <li className="pl-1 marker:text-gray-500">高需要時間帯で優先アクセスが案内される</li>
            <li className="pl-1 marker:text-gray-500">Word/Excel/PowerPoint/Outlookなどでの利用体験が強化される</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            価格表記はCopilot ProサポートページとMicrosoft 365個人向け上位プランで見え方が異なるため、契約画面で最終確認してください（いずれも2026-02-20時点で月額3,200円帯）。
          </p>
        </motion.section>

        <motion.section
          id="office"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q4. Word・Excel・PowerPoint・Outlookでの具体的なAI活用例</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            使い方のコツは、最初から高度な自動化を狙わないことです。各アプリで「下書き」「要約」「比較」のような定型作業から始めると、効果を測定しやすくなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">アプリ</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">最初の活用例</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">見るべきKPI</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {officeRows.map((row) => (
                  <tr key={row.app}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.app}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.scenario}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Excel活用を深掘りする場合は
            <Link href="/academy/blog/ai-data-analysis-excel" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIでExcel分析を効率化する方法
            </Link>
            、PowerPointの構成づくりは
            <Link href="/academy/blog/ai-presentation-workflow" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIプレゼン資料ワークフロー
            </Link>
            が実務導線としてつながります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="compare"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q5. ChatGPT・Geminiとの使い分け判断基準</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            どのツールが最強かではなく、既存の業務基盤にどれだけ自然に入るかで選ぶのが現実的です。Microsoft環境中心ならCopilot、Google環境中心ならGemini、基盤を問わない汎用対話はChatGPTが選びやすい傾向です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">比較軸</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Copilot</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">ChatGPT</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">判断ポイント</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {compareRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.copilot}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.chatgpt}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Google環境での比較は
            <Link href="/academy/blog/gemini-workspace-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Gemini for Workspaceガイド
            </Link>
            、開発系Copilotの運用は
            <Link href="/academy/blog/github-copilot-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              GitHub Copilot使い方
            </Link>
            が参考になります。
          </p>
        </motion.section>

        <motion.section
          id="enterprise"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q6. 企業向けM365 Copilotの最低契約数・条件と導入手順</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            企業導入の論点は「価格」より「前提条件」です。Business向けページでは1〜300ユーザー運用と対象Microsoft 365契約の必要性が示されます。Enterprise条件は見積依存の部分があるため、契約前の確認が必須です。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ライセンス: Microsoft 365 Copilotは追加契約。対象M365プランが前提</li>
            <li className="pl-1 marker:text-gray-500">ユーザー数: Business表記は1〜300ユーザー</li>
            <li className="pl-1 marker:text-gray-500">契約条件: [要確認: Enterpriseでの最小席数と契約下限]</li>
            <li className="pl-1 marker:text-gray-500">運用条件: 入力データ範囲、承認フロー、レビュー責任者を先に決める</li>
          </ul>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {rolloutSteps.map((step) => (
              <div key={step.phase} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{step.phase}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{step.action}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">{step.output}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14 rounded-lg border border-slate-200 bg-slate-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-semibold text-gray-900">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">関連記事（内部リンク）</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/academy/blog/github-copilot-guide"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">GitHub Copilotの使い方</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">Copilot系ツールを実務に定着させる運用設計を整理。</p>
            </Link>
            <Link
              href="/academy/blog/ai-data-analysis-excel"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">AIでExcelデータ分析を効率化する方法</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">Excel業務を中心にAI活用を広げたい方向け。</p>
            </Link>
            <Link
              href="/academy/blog/ai-presentation-workflow"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">AIプレゼン資料作成ワークフロー</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">PowerPoint資料作成の時間短縮手順を実務目線で整理。</p>
            </Link>
            <Link
              href="/academy/blog/gemini-workspace-guide"
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-will-primary/40"
            >
              <p className="text-sm font-semibold text-gray-900">Gemini for Workspace使い方ガイド</p>
              <p className="mt-2 text-sm leading-7 text-gray-700">Microsoft系とGoogle系の比較検討に使える記事。</p>
            </Link>
          </div>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ツール比較で終わらず、仕事の成果と次のキャリアに接続するためには、判断軸を言語化して継続できる環境が必要です。AIリブートアカデミーでは次の3本柱で学習プロセスを設計しています。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {academyPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{pillar.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{pillar.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの詳細を見る
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
