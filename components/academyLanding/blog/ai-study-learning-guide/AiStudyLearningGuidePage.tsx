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

type AiStudyLearningGuidePageProps = {
  faqItems: readonly FAQItem[];
};

type PromptItem = {
  title: string;
  purpose: string;
  prompt: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["AI 勉強 活用", "ChatGPT 勉強法", "AI 語学 学習", "生成AI 資格勉強"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "why-ai-study-works", label: "独学で続かない理由とAIで変わる点" },
  { id: "ai-for-certification", label: "資格勉強でのAI活用" },
  { id: "ai-for-language", label: "語学学習でのAI活用" },
  { id: "ai-for-skill-up", label: "スキルアップ学習でのAI活用" },
  { id: "thirty-day-plan", label: "30日学習プランテンプレ" },
  { id: "academy-support", label: "独学を卒業する学習環境" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const painPoints = [
  {
    title: "計画が曖昧で、何を先に学ぶか決まらない",
    solution:
      "AIで到達目標を逆算し、1日単位の学習タスクに分解すると、着手の迷いを減らせます。特に平日30分学習のような制約条件を先に入れると計画が現実的になります。",
  },
  {
    title: "問題演習をしても、弱点が整理されない",
    solution:
      "誤答ログをAIに要約させ、単元別に再出題させると、弱点の再発防止がしやすくなります。勉強時間の大半を得意分野に使ってしまう偏りも抑えられます。",
  },
  {
    title: "一人学習で対話機会が少なく、アウトプット不足になる",
    solution:
      "AIを会話相手として使うと、資格の口頭説明や語学の発話練習を毎日回せます。短時間でも発話回数を増やせるため、理解定着の速度が上がります。",
  },
] as const;

const certificationPrompts: readonly PromptItem[] = [
  {
    title: "プロンプト1: 単元別ミニ問題集を作る",
    purpose:
      "試験範囲を小分けにして反復することで、インプット偏重を防ぎます。毎日10問ずつ回す運用に向いています。",
    prompt: `あなたは資格試験対策の講師です。
対象試験: {試験名}
対象単元: {単元名}
難易度: {初級/中級/本番レベル}
問題数: 10問

以下の形式で出力してください。
1. 4択問題を10問
2. 各問題の正解
3. 正解の理由（2〜3行）
4. 不正解選択肢が誤りである理由（簡潔に）
5. この単元で次に復習すべき論点を3つ`,
  },
  {
    title: "プロンプト2: 弱点分析と再学習優先順位を出す",
    purpose:
      "間違えた理由を分類して、次に何を復習するかを明確化します。勉強時間が限られる社会人向けです。",
    prompt: `以下は私の直近30問の演習結果です。
{誤答ログを貼り付け}

次の手順で分析してください。
1. 誤答を「知識不足」「読み違い」「計算/手順ミス」に分類
2. 頻度順に上位3つの弱点を特定
3. 明日から7日間の復習計画を作成（1日30分）
4. 7日後に再テストすべき確認問題を6問作成`,
  },
  {
    title: "プロンプト3: 記述・口頭説明の練習を行う",
    purpose:
      "理解したつもりを防ぐには、説明できるかの確認が有効です。面接や口頭試験の準備にも使えます。",
    prompt: `あなたは試験官です。対象資格は{試験名}です。
{テーマ}について、口頭試問形式で5問出題してください。

条件:
- 1問ずつ出題し、私の回答を待つ
- 回答後に100点満点で採点
- 改善点を3つ提示
- 最後に総合評価と次の学習課題を示す`,
  },
] as const;

const languagePrompts: readonly PromptItem[] = [
  {
    title: "プロンプト1: 1日10分の会話ロールプレイ",
    purpose:
      "語学学習は毎日の発話回数が定着率を左右します。短時間でも会話ターン数を確保できる設計です。",
    prompt: `あなたは{学習言語}の会話コーチです。
私のレベルは{CEFR目安や学習歴}です。
テーマ: {仕事/旅行/面接など}

次のルールでロールプレイしてください。
- 会話は10往復
- 私の発言のあとに、自然な言い換え例を1つ示す
- 文法ミスと語彙改善を1行で指摘
- 最後に復習用フレーズを5つ提示`,
  },
  {
    title: "プロンプト2: 発音フィードバック用スクリプト作成",
    purpose:
      "音読練習用の短い台本を作ると、発音チェックツールとの併用がしやすくなります。通勤前の学習に向きます。",
    prompt: `私は{学習言語}の発音を改善したいです。
以下の条件で音読練習セットを作ってください。
- テーマ: {業務紹介/自己紹介/日常会話}
- 1文15語以内で10文
- 日本語訳を各文に付ける
- 発音で注意すべき音を文ごとに1点記載
- 最後に「よく詰まる箇所」チェックリストを作る`,
  },
  {
    title: "プロンプト3: 語彙テスト自動生成",
    purpose:
      "覚えた語彙を文脈で使えるかを確認できます。単語暗記だけで終わらない運用に有効です。",
    prompt: `以下の単語リストを使ってテストを作ってください。
{単語リスト}

出力条件:
1. 穴埋め問題10問
2. 同義語・類義語を選ぶ問題5問
3. 実務シーンの短文作成問題3問
4. 解答と解説
5. 明日復習すべき単語トップ10`,
  },
] as const;

const skillUpPrompts: readonly PromptItem[] = [
  {
    title: "プロンプト1: 30日学習計画を作る",
    purpose:
      "目標を日次タスクへ落とし込むことで、忙しい社会人でも継続しやすくなります。進捗確認基準まで先に定義します。",
    prompt: `あなたは学習設計コーチです。
目標: {目標}
現在地: {現在のスキル}
使える時間: 平日{分}、休日{分}
期間: 30日

次の形式で計画を作成してください。
- 週ごとの到達目標
- 毎日の学習タスク（具体的行動）
- 週1回のチェック項目
- 失速したときのリカバリープラン`,
  },
  {
    title: "プロンプト2: 学習内容を業務に接続する",
    purpose:
      "学んだ知識を仕事に結びつけると、記憶定着と成果実感が高まります。学習の目的が明確になります。",
    prompt: `以下は今週学んだ内容です。
{学習メモ}

この内容を私の業務（{職種/業務内容}）に適用してください。
1. すぐ試せる業務改善案を3つ
2. 期待効果（時間短縮・品質向上など）を定量で仮置き
3. 実行手順を3ステップで提示
4. 実施後に記録する評価指標を提案`,
  },
  {
    title: "プロンプト3: 週次レビューを自動化する",
    purpose:
      "学習は振り返りまで行って初めて改善が回ります。計画修正の判断を毎週行えるフォーマットです。",
    prompt: `以下は今週の学習ログです。
{学習ログ}

次の順でレビューしてください。
1. できたこと/できなかったことを要約
2. 原因を「計画」「環境」「難易度」の観点で分析
3. 来週の計画を再設計（優先順位つき）
4. モチベーションに依存しない実行ルールを3つ提案`,
  },
] as const;

const thirtyDayPlan = [
  {
    week: "1週目",
    focus: "現状把握と学習設計",
    actions: "目標設定、学習時間の固定、最初のプロンプトテンプレ作成",
    output: "30日学習カレンダー（初版）",
  },
  {
    week: "2週目",
    focus: "問題演習と会話練習を習慣化",
    actions: "資格ミニ問題集を毎日実施、語学ロールプレイを10分実施",
    output: "弱点ログと発話ログ",
  },
  {
    week: "3週目",
    focus: "弱点補強と業務接続",
    actions: "誤答分析、重要単元の再学習、業務適用タスクを1つ実施",
    output: "改善前後の比較メモ",
  },
  {
    week: "4週目",
    focus: "総復習と次月計画",
    actions: "再テスト、週次レビュー、次の30日計画へ更新",
    output: "次月版ロードマップ",
  },
] as const;

function PromptCard({ title, purpose, prompt }: PromptItem) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-700">{purpose}</p>
      <p className="mt-4 text-xs font-semibold tracking-wide text-gray-500">コピペ用プロンプト</p>
      <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
        <code>{prompt}</code>
      </pre>
    </section>
  );
}

function LineCtaBox({ className = "mt-10" }: { className?: string }) {
  return (
    <motion.section
      className={`${className} rounded-lg border border-gray-200 bg-gray-50 p-6`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-sm font-semibold text-gray-900">📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
        >
          LINEで無料個別相談する
        </a>
      </div>
    </motion.section>
  );
}

export default function AiStudyLearningGuidePage({ faqItems }: AiStudyLearningGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI×勉強・資格・語学学習完全ガイド" },
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
                title="AI×勉強・資格・語学学習完全ガイド｜ChatGPTで最短合格する方法"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI×勉強・資格・語学学習完全ガイド｜ChatGPTで最短合格する方法
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論として、独学が続かない最大要因は「計画不足」と「振り返り不足」です。AIを使うと、資格勉強の問題演習、語学の会話練習、
            スキルアップの学習設計を一つの流れで回せます。
            <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AI学習ロードマップ
            </Link>
            で全体像を確認しつつ、本記事でコピペ可能な実行テンプレを導入してください。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/how-to-learn-generative-ai" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI学習ロードマップ
          </Link>
          ・
          <Link href="/academy/blog/ai-certification-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI資格ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-first-30-days-work-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            生成AI最初の30日ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
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
              AI学習で成果を出すには、試験対策・語学・業務スキルを別々に管理せず、同じ学習ループで回すことが有効です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              資格勉強は「問題生成→誤答分析→再出題」、語学学習は「会話練習→フィードバック→再発話」の順で進めると定着しやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              30日計画を週次で見直し、進捗に合わせてプロンプトを更新すれば、忙しい社会人でも継続しやすい学習設計を作れます。
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
          <h2 id="why-ai-study-works" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            独学で続かない理由とAIで変わる点
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            独学の失速は、意志の強さより設計不足で起きることが多いです。AIを活用すると、計画・実行・振り返りを短い単位で回せるため、学習の停滞を減らせます。
            特に社会人は、毎日まとまった時間を確保しにくいため、1回30分の学習パッケージ化が効果的です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {painPoints.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.solution}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            先に学習全体の流れを整えたい場合は、
            <Link href="/academy/blog/reskilling-over-40" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              40代・50代の学び直しガイド
            </Link>
            も参考にしてください。年代に応じた継続設計の考え方を確認できます。
          </p>
        </motion.section>

        <LineCtaBox />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ai-for-certification" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            資格勉強でのAI活用は「問題集生成」と「弱点分析」の自動化が効果的
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            資格学習では、教材を読む時間より「解く→直す→再挑戦」の反復回数が合格率に直結します。AIでミニ問題集を作り、誤答分析まで一体で回すと、
            勉強時間が限られる社会人でも改善速度を上げられます。
            <Link href="/academy/blog/ai-certification-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI資格ガイド
            </Link>
            や
            <Link href="/academy/blog/generative-ai-passport-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIパスポート合格法
            </Link>
            と併読すると、目標試験の選定まで含めて判断しやすくなります。
          </p>
          <div className="mt-8 space-y-4">
            {certificationPrompts.map((item) => (
              <PromptCard key={item.title} {...item} />
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
          <h2 id="ai-for-language" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            語学学習でのAI活用は「会話回数」と「発音フィードバック」を増やす設計が有効
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            語学はインプットだけでは伸びにくく、発話回数を増やす仕組みが必要です。AIを会話コーチとして使うと、1日10分でも実践量を確保できます。
            特に「その場で言い換えを提案してもらう」運用は、表現の幅を広げるのに有効です。
          </p>
          <div className="mt-8 space-y-4">
            {languagePrompts.map((item) => (
              <PromptCard key={item.title} {...item} />
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
          <h2 id="ai-for-skill-up" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            スキルアップ学習でのAI活用は「計画作成」と「週次レビュー」の固定化が重要
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            スキルアップ学習では、教材選びよりも継続できる学習サイクルを作ることが成果につながります。AIに学習コーチの役割を持たせると、
            目標分解、進捗レビュー、計画修正を短時間で回せます。学習ログをそのまま渡して分析させると、自己評価の偏りを抑えやすくなります。
          </p>
          <div className="mt-8 space-y-4">
            {skillUpPrompts.map((item) => (
              <PromptCard key={item.title} {...item} />
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
          <h2 id="thirty-day-plan" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            30日学習プランテンプレは「週単位の目標」と「日次タスク」のセットで作ると回りやすい
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            30日計画は、1週間ごとのテーマと毎日の最小行動を先に固定するのが実務的です。以下のひな形をそのまま使い、資格・語学・スキルアップの配分を調整してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">週</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">重点テーマ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">実行タスク</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">成果物</th>
                </tr>
              </thead>
              <tbody>
                {thirtyDayPlan.map((row) => (
                  <tr key={row.week} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.week}</th>
                    <td className="py-4 px-4">{row.focus}</td>
                    <td className="py-4 px-4">{row.actions}</td>
                    <td className="py-4 pl-4">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            LINEでは、毎週の学習改善ヒントに加えて、無料個別相談とAI活用ロードマップの案内をしています。自分に合う学習の進め方を整理したい方は活用してください。
          </p>
        </motion.section>

        <LineCtaBox />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="academy-support" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            独学を卒業する学習環境は「活用力・自己理解・仲間」の3要素で選ぶと継続しやすい
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            学習環境を選ぶ際は、単にツール操作を教える場かどうかではなく、実務に使える形で定着する設計になっているかを確認してください。
            <Link href="/academy" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIリブートアカデミー
            </Link>
            は、次の3要素を軸に学習を設計しています。
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">生成AI活用力:</span>{" "}
              実務で即使えるAIスキルを体系的に習得し、業務成果へ接続する運用まで設計します。
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">自己理解・キャリアデザイン:</span>{" "}
              AIを使って強みと価値観を言語化し、次のキャリア選択へつなげます。
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">仲間と共に学ぶ環境:</span>{" "}
              同じ目標を持つ仲間との対話と協働で、継続と実践の速度を高めます。
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
            導入前に迷いやすいポイントを先に確認すると、学習計画の停滞を減らせます。現場で相談が多い論点を簡潔にまとめました。
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
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ｜0→100日で実務活用レベルへ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-certification-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI資格おすすめ一覧｜難易度・費用・活かせる仕事を徹底比較【2026年版】
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/generative-ai-passport-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIパスポート試験の合格法2026｜勉強時間・おすすめ教材・出題傾向まとめ
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド｜経験を強みに学び直す方法
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
