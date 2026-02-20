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

type AiEnglishLearningGuidePageProps = {
  faqItems: readonly FAQItem[];
};

type PromptCardItem = {
  title: string;
  purpose: string;
  prompt: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

const keywordTags = ["AI 英語学習 2026", "ChatGPT 英会話", "Duolingo AI", "英語 AI アプリ 比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "trend-2026", label: "2026年トレンド" },
  { id: "chatgpt-gemini-practice", label: "ChatGPT/Gemini英会話実践" },
  { id: "app-comparison", label: "Duolingo/ELSA/Speak比較" },
  { id: "business-english", label: "ビジネス英語への実装" },
  { id: "continuity-design", label: "学習継続の設計" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "学習を次のキャリアへつなぐ" },
] as const;

const trendCards = [
  {
    title: "会話量を増やす設計へシフト",
    body: "2026年の中心は、単語暗記より会話ターン数の確保です。AI相手のロールプレイを毎日回す運用で、短時間でも発話回数を増やせます。",
  },
  {
    title: "発音をスコアで可視化",
    body: "ELSA系の発音分析を併用し、聞こえたつもりを減らす運用が主流です。弱点音を特定して、翌日の練習文に反映する流れが定着しています。",
  },
  {
    title: "業務シーン起点で学ぶ",
    body: "社会人は会議・メール・商談など使用場面を先に固定した方が続きます。汎用英語ではなく、必要な場面に合わせてAI練習を設計します。",
  },
] as const;

const quickSummaryPoints = [
  "AI英語学習は、1回の長時間学習より「毎日の会話量」と「週次レビュー」を固定した方が成果が出やすいです。",
  "ChatGPT/Geminiは英会話練習相手として有効ですが、誤り訂正を鵜呑みにせず、定期的に人の教材で照合する運用が必要です。",
  "Duolingo Max・ELSA Speak・Speakは強みが異なるため、アプリ単体で選ぶより、目的別に組み合わせる方が実務的です。",
  "ビジネス英語は、業務シーンを1つに絞って毎日10分のロールプレイを回す設計が最短ルートです。",
];

const promptPlaybook: readonly PromptCardItem[] = [
  {
    title: "プロンプト1: 会議ロールプレイ（ChatGPT/Gemini共通）",
    purpose: "発話の瞬発力を上げるため、短いターンで反復するテンプレです。",
    prompt: `あなたはビジネス英語コーチです。
私のレベルは {CEFRレベル} です。
テーマは {定例会議/進捗報告/提案説明} です。

次のルールで英会話ロールプレイしてください。
1. 1ターンずつ質問する
2. 私の回答に対して、自然な言い換えを1つ提示する
3. 文法/語彙/丁寧さを各1行で改善提案する
4. 合計10往復で終了し、最後に復習フレーズ5つを提示する`,
  },
  {
    title: "プロンプト2: メール添削（丁寧さ調整）",
    purpose: "日本語直訳の硬い英語を、相手別の自然な文に整えるためのテンプレです。",
    prompt: `以下の英語メールを添削してください。
目的: {依頼/お礼/納期調整}
相手: {社外クライアント/社内上司/海外チーム}
文体: {丁寧/標準/カジュアル}

出力形式:
- 改善後の英文
- 変更点の理由（3点）
- 失礼に見える可能性のある表現
- 次回使える定型文3つ`,
  },
  {
    title: "プロンプト3: 商談想定Q&A",
    purpose: "想定問答の反復で、会話中の詰まりを減らす設計です。",
    prompt: `あなたは海外顧客です。私は営業担当です。
商談テーマ: {サービス提案内容}
想定相手の懸念: {価格/納期/セキュリティ}

手順:
1. 相手役として質問を1つ出す
2. 私の回答を待つ
3. 回答を100点満点で採点
4. より説得力のある返答例を提示
5. 合計8問で終了`,
  },
] as const;

const appComparisonRows = [
  {
    app: "Duolingo Max",
    strength: "ロールプレイと解説機能で日次学習を回しやすい",
    caution: "提供国・価格情報に公式ページ間差分あり。最新はアプリ内確認が必要",
    pricing: "公式ヘルプ: 年額$167.99（個人）/ 年額$239.99（家族）",
    fit: "習慣化を重視する初中級者",
  },
  {
    app: "ELSA Speak",
    strength: "発音分析と弱点音の可視化に強い",
    caution: "価格はキャンペーンと地域で変動。継続課金前に期間を比較する",
    pricing: "公式Pricing目安: Pro $8.33/月（年額請求）",
    fit: "発音改善を数値で管理したい人",
  },
  {
    app: "Speak",
    strength: "会話ターン中心でスピーキング量を増やしやすい",
    caution: "サブスク単価は地域差が大きい。月額/年額の回収期間を確認する",
    pricing: "US App Store表示例: $19.99/月、$99.99/年",
    fit: "短時間で会話量を増やしたい人",
  },
] as const;

const businessScenarios: readonly PromptCardItem[] = [
  {
    title: "シーン1: 英語会議の進捗報告",
    purpose: "情報を短く整理して伝える練習に使います。",
    prompt: `次の日本語メモを、90秒で話せる英語進捗報告に変換してください。
{日本語メモ}

条件:
- 結論→理由→次アクションの順
- B2レベルの語彙
- 会議で使える締めの一文を追加`,
  },
  {
    title: "シーン2: 海外顧客へのメール返信",
    purpose: "依頼・調整・謝意を失礼なく伝える文体に整えます。",
    prompt: `以下の下書きを、海外顧客向けに調整してください。
{下書き}

出力:
1. 件名案3つ
2. 本文（120語以内）
3. 丁寧度を1段階上げた別案`,
  },
  {
    title: "シーン3: 交渉時の代替案提示",
    purpose: "Yes/Noだけで終わらない交渉英語を準備します。",
    prompt: `あなたは交渉コーチです。
論点: {価格/納期/範囲}
私の希望条件: {条件}

次を作成してください。
- 断る時に関係を維持する表現5つ
- 代替案の提示フレーズ5つ
- 合意確認の締めフレーズ3つ`,
  },
] as const;

const continuityPlanRows = [
  {
    week: "1週目",
    objective: "学習設計を固定する",
    action: "毎日の実施時間を10分で固定し、会話テーマを3つ決める",
    checkpoint: "実施率70%以上",
  },
  {
    week: "2週目",
    objective: "会話量を増やす",
    action: "ロールプレイを毎日10往復、録音を週2回保存する",
    checkpoint: "総発話ターン70以上",
  },
  {
    week: "3週目",
    objective: "業務文脈へ接続する",
    action: "会議・メール・商談のうち1シーンに集中して練習する",
    checkpoint: "業務文で再利用した表現10個以上",
  },
  {
    week: "4週目",
    objective: "振り返りと再設計",
    action: "弱点を再分類し、次の30日計画へ更新する",
    checkpoint: "次月の行動計画を1枚で作成",
  },
] as const;

const reviewChecklist = [
  "今週の発話回数は先週より増えたか",
  "同じ間違い（時制・前置詞・語順）が繰り返されていないか",
  "業務で実際に使った英語表現は何個あったか",
  "来週はどのシーンを優先するか",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "英語学習でも、何をどの順でAIに任せるかを設計できると成果が安定します。業務課題に合わせた活用判断を身につけます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして、自分の強みや伝え方の癖を言語化し、次の役割に必要な英語運用力を再設計します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "独学で止まりやすい振り返りを、仲間との対話で継続しやすくします。学習を単発で終わらせず実務へ接続します。",
  },
] as const;

function PromptCard({ title, purpose, prompt }: PromptCardItem) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="blog-h3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{purpose}</p>
      <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
      <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-xs leading-6 text-slate-100">
        <code>{prompt}</code>
      </pre>
    </section>
  );
}

function LineCtaBox({ className }: { className: string }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-gray-900">{lineCtaTitle}</p>
      <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
        仕様変更の早いAI学習領域を、毎週の要点だけで追えるように整理して配信しています。仕事で英語を使う社会人向けの運用ノウハウも扱います。
      </p>
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

export default function AiEnglishLearningGuidePage({ faqItems }: AiEnglishLearningGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI英語学習ガイド2026" },
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
              <CopyAsMarkdownButton title="AI英語学習ガイド2026｜ChatGPT英会話・アプリ比較・継続設計" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI英語学習ガイド2026｜ChatGPT英会話・アプリ比較・継続設計
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            2026年のAI英語学習は、「どのアプリを選ぶか」より「どの順番で使い、どう継続するか」が成果を分けます。社会人が限られた時間で伸ばすには、会話量の確保、発音の可視化、業務シーンへの接続を同時に設計することが重要です。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、ChatGPT/Geminiでの英会話練習手順、Duolingo Max・ELSA Speak・Speakの比較、ビジネス英語への落とし込み、30日継続設計までを確認日付きで整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {quickSummaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="trend-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">2026年のAI英語学習トレンドは「会話量」「発音可視化」「業務接続」の3点に集約される</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            学習アプリは増え続けていますが、実務で成果に直結するのは、毎日の発話ターンを積み上げる仕組みを持てるかどうかです。研究でも、モバイル語学学習とAI支援の組み合わせは一定の改善傾向が示されています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trendCards.map((card) => (
              <section key={card.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-subtle">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            社会人向けの全体設計は
            <Link href="/academy/blog/ai-study-learning-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI×勉強・資格・語学学習完全ガイド
            </Link>
            も合わせて確認すると、継続運用まで設計しやすくなります。
          </p>
          <p className="mt-3 text-xs leading-6 text-gray-500">
            研究参照: Frontiers (2024), Education and Information Technologies (2024), Duolingo Research (AERA 2017)。対象と条件により効果は変動。
          </p>
        </motion.section>

        <motion.section
          id="chatgpt-gemini-practice"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">ChatGPT/Geminiで英会話練習するなら、目的別プロンプトを固定して反復する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            AI英会話で最も効果が出るのは、毎回違う聞き方をすることではなく、同じ型で反復して改善差分を追う方法です。以下のテンプレを業務シーンに合わせて使ってください。
          </p>
          <div className="mt-6 grid gap-5">
            {promptPlaybook.map((item) => (
              <PromptCard key={item.title} title={item.title} purpose={item.purpose} prompt={item.prompt} />
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            実務で使うプロンプトの作り方は、
            <Link href="/academy/blog/prompt-template-for-work" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            も参考になります。
          </p>
          <p className="blog-p mt-3 text-xs leading-6 text-gray-500">
            ChatGPT Voiceの提供範囲はOpenAI公式で更新されるため、利用前に最新仕様を確認してください（確認日: 2026-02-20）。
          </p>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-green-200 bg-green-50 p-6" />

        <motion.section
          id="app-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Duolingo Max・ELSA Speak・Speakの比較は、価格より学習目的を先に決める</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            3アプリは得意領域が異なります。会話習慣、発音分析、短時間反復のどこを重視するかを先に決めると、課金の無駄を減らせます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[780px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">アプリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">参考価格</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {appComparisonRows.map((row) => (
                  <tr key={row.app} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.app}</th>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Duolingo Maxの提供国は公式内で差分があります。ヘルプ記事では6か国、公式ブログでは188か国の記載があり、最新はアプリ内表示で確認するのが安全です。
          </p>
          <p className="blog-p mt-2 text-xs leading-6 text-gray-500">
            ※2026年2月20日時点。価格・提供国・機能は変更される可能性があります。`[要確認: 日本向け実売価格と提供状況]`
          </p>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6" />

        <motion.section
          id="business-english"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">ビジネス英語は「会議・メール・商談」の3シーンに分けてAI練習する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            社会人の英語学習は、教材中心に進めるより、実際に使う場面を起点にした方が継続しやすく成果も出やすくなります。以下はそのまま使える実務向けテンプレです。
          </p>
          <div className="mt-6 grid gap-5">
            {businessScenarios.map((item) => (
              <PromptCard key={item.title} title={item.title} purpose={item.purpose} prompt={item.prompt} />
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            仕事でのAI活用精度そのものを上げたい場合は、
            <Link href="/academy/blog/chatgpt-advanced-tips" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPT活用の上級テクニック記事
            </Link>
            も併読すると、英語以外の業務改善にも展開しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="continuity-design"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">学習継続は30日サイクルで設計し、週次レビューをAIに任せる</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            学習が止まる理由は意志の弱さではなく、振り返り設計がないことです。日次実行と週次レビューを固定し、次の1週間を自動で更新できる仕組みにします。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">週</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">目的</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実行項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">チェック指標</th>
                </tr>
              </thead>
              <tbody>
                {continuityPlanRows.map((row) => (
                  <tr key={row.week} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.week}</th>
                    <td className="px-4 py-4">{row.objective}</td>
                    <td className="px-4 py-4">{row.action}</td>
                    <td className="py-4 pl-4">{row.checkpoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">週次レビューで確認する4項目</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {reviewChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            社会人の学び直し全体を見直したい方は、
            <Link href="/academy/blog/ai-school-for-working-adults" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              社会人向けAIスクールの選び方
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6" />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">英語学習を「成果」と「キャリア」に接続したい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            学習アプリを使い分けるだけでは、仕事で使える英語力に定着しないことがあります。重要なのは、どの業務課題にAI学習を当てるかという判断軸と、続けられる学習設計です。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、次の3本柱を一体で設計し、学びを実務と次のキャリアへつなげることを重視しています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
