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

type GenerativeAiSkillsChecklistPageProps = {
  faqItems: readonly FAQItem[];
};

type LevelSection = {
  id: string;
  level: string;
  title: string;
  state: string;
  canDo: readonly string[];
  mustLearn: readonly string[];
  practice: readonly string[];
};

type DiagnosisQuestion = {
  question: string;
  scoreGuide: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";

const keywordTags = ["生成AI スキル 身につける", "AI活用スキル チェックリスト", "AIリテラシー 向上"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "checklist", label: "5段階チェックリスト" },
  { id: "diagnosis", label: "あなたは今どのレベル？" },
  { id: "practice-plan", label: "レベル別の練習方法" },
  { id: "academy-cta", label: "レベル3以上を目指す方へ" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const levelSections: readonly LevelSection[] = [
  {
    id: "level-1",
    level: "Lv1 入門",
    title: "まずは使ってみる段階",
    state: "AIを開いて質問できるが、出力品質が毎回ばらつく状態",
    canDo: ["単発の質問・要約・言い換え", "メール下書きやアイデア出し", "検索代替としての利用"],
    mustLearn: ["目的・前提・制約・出力形式を明示する基本指示", "事実確認の最低ルール", "入力情報の機密判定"],
    practice: [
      "毎日15分、同じタスクを同じ型で指示して再現性を確認する",
      "生成結果をそのまま使わず、3点（正確性/具体性/実用性）で採点する",
    ],
  },
  {
    id: "level-2",
    level: "Lv2 実用初級",
    title: "定型業務で再利用できる段階",
    state: "複数の業務でAIを使えるが、改善ループが弱く伸び悩みやすい状態",
    canDo: ["議事録・メール・提案下書きなどの時短", "テンプレ化した指示の再利用", "自分用のプロンプトメモ管理"],
    mustLearn: ["プロンプトを工程分割する設計", "レビュー観点の固定", "業務ログの記録方法"],
    practice: [
      "週2回、同じ業務をAIあり/なしで比較し工数差を記録する",
      "失敗した出力を3件残し、改善指示で再実行する",
    ],
  },
  {
    id: "level-3",
    level: "Lv3 実務中級",
    title: "評価・改善できる段階",
    state: "出力を作るだけでなく、品質を評価して改善できる状態",
    canDo: ["目的別にプロンプト戦略を使い分ける", "AI出力のリスクを見抜いて修正する", "チーム共有できる運用テンプレを作る"],
    mustLearn: ["評価指標（正確性・網羅性・再現性）の設計", "根拠確認フロー", "ツール選定基準（精度/速度/コスト/管理）"],
    practice: [
      "1つの成果物に対し、評価基準を作って3回改善サイクルを回す",
      "業務課題ごとに『どのツールを使わないか』まで明文化する",
    ],
  },
  {
    id: "level-4",
    level: "Lv4 上級",
    title: "部門運用を設計できる段階",
    state: "個人活用を越えて、チームの再現可能な運用へ展開できる状態",
    canDo: ["役割分担を含むAI運用フローの設計", "品質事故を防ぐガイドライン整備", "教育計画とオンボーディング設計"],
    mustLearn: ["ガバナンス（権限/ログ/監査）の基本", "利用ポリシーと例外対応の設計", "教育と評価を連動させる運用"],
    practice: [
      "部門内の1業務で運用ルール案を作り、2週間の試行を実施する",
      "失敗事例をナレッジ化し、再発防止ルールを更新する",
    ],
  },
  {
    id: "level-5",
    level: "Lv5 プロ",
    title: "組織成果とキャリア価値を接続できる段階",
    state: "AI活用を事業成果に変換し、他者にも再現可能な形で伝達できる状態",
    canDo: ["経営・事業指標とAI活用を接続して提案する", "複数部門横断で運用を標準化する", "成果と学習を循環させる仕組みを作る"],
    mustLearn: ["成果指標設計（ROIだけでなく品質/リスクも含む）", "育成設計と評価設計の統合", "キャリア戦略への落とし込み"],
    practice: [
      "四半期で改善テーマを定義し、成果指標と運用施策をセットで運用する",
      "個人の実績をポートフォリオ化し、社内外に説明できる形へ編集する",
    ],
  },
] as const;

const diagnosisQuestions: readonly DiagnosisQuestion[] = [
  {
    question: "AI出力の良し悪しを、明確な評価基準で説明できますか？",
    scoreGuide: "できる: 2点 / なんとなく: 1点 / できない: 0点",
  },
  {
    question: "同じ業務で、再現可能な指示テンプレを運用していますか？",
    scoreGuide: "運用中: 2点 / 一部あり: 1点 / なし: 0点",
  },
  {
    question: "誤情報・機密漏えい・品質事故を防ぐ手順を決めていますか？",
    scoreGuide: "決めている: 2点 / 検討中: 1点 / 未着手: 0点",
  },
  {
    question: "AI活用の成果を、工数や品質指標で記録していますか？",
    scoreGuide: "記録あり: 2点 / 不定期: 1点 / なし: 0点",
  },
  {
    question: "自分のAI活用をキャリア戦略に接続して説明できますか？",
    scoreGuide: "説明できる: 2点 / 一部できる: 1点 / できない: 0点",
  },
] as const;

function LineCtaBox({ className }: { className: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-gray-900">{lineCtaTitle}</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AI活用の最新トピックを、週1本で実務目線で整理して届けています。学習優先順位の見直しに使ってください。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </section>
  );
}

function scoreRangeLabel(total: number) {
  if (total <= 3) {
    return "Lv1〜Lv2（入門〜実用初級）";
  }
  if (total <= 6) {
    return "Lv2〜Lv3（実用初級〜実務中級）";
  }
  if (total <= 8) {
    return "Lv3〜Lv4（実務中級〜上級）";
  }
  return "Lv4〜Lv5（上級〜プロ）";
}

export default function GenerativeAiSkillsChecklistPage({ faqItems }: GenerativeAiSkillsChecklistPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AIスキル5段階チェックリスト" },
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
                title="生成AIスキルを身につける5段階チェックリスト【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIスキルを身につける5段階チェックリスト【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            すでにAIを使っていても、「自分はどこまでできているのか」が曖昧なままだと、学習優先順位を決められません。実務では、使えることより改善できることが価値になります。
            この記事は、生成AIスキルを5段階で自己診断し、次に伸ばすべき能力を明確にするための実践チェックリストです。
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            参照基準の確認日: 2026-02-20（EU AI Act Article 4、NIST GenAI Profile、OpenAI/Anthropic/Microsoft公式ドキュメント）
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">生成AIスキルは、入門〜プロまで5段階で評価すると学習優先順位を決めやすくなります。</li>
            <li className="blog-li pl-1 marker:text-gray-500">レベル3の分岐点は「使えるか」ではなく「評価・改善できるか」です。</li>
            <li className="blog-li pl-1 marker:text-gray-500">
              レベル4以降は個人活用を超え、品質責任・運用設計・キャリア接続の設計力が必要になります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" />
        </motion.section>

        <motion.section
          id="checklist"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            生成AIスキル5段階チェックリスト（入門〜プロ）
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            下の5段階は、利用頻度ではなく「成果の再現性」と「品質責任」を軸に設計しています。現在地を把握したうえで、次の1段だけ上げる設計で進めてください。
          </p>
          <div className="mt-8 space-y-6">
            {levelSections.map((section) => (
              <section key={section.id} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-xl font-semibold text-gray-900">
                  {section.level}: {section.title}
                </h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">現在地の目安: {section.state}</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">できること</p>
                    <ul className="blog-ul mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                      {section.canDo.map((item) => (
                        <li key={item} className="blog-li pl-1 marker:text-gray-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">習得すべきスキル</p>
                    <ul className="blog-ul mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                      {section.mustLearn.map((item) => (
                        <li key={item} className="blog-li pl-1 marker:text-gray-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">具体的な練習方法</p>
                    <ul className="blog-ul mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                      {section.practice.map((item) => (
                        <li key={item} className="blog-li pl-1 marker:text-gray-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            指示設計を強化したい場合は
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプト入門
            </Link>
            、ツール選定軸を作る場合は
            <Link href="/academy/blog/ai-coding-tool-comparison-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディングツール比較2026
            </Link>
            、キャリア接続の観点は
            <Link href="/academy/blog/ai-career-change-cases" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIキャリア転換事例
            </Link>
            を併読すると整理しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="diagnosis"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">あなたは今どのレベル？自己診断（5問）</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-blue-900">
            各設問を0〜2点で採点し、合計点から現在地を判定します。自己採点は厳しめに行うと、改善テーマが明確になります。
          </p>
          <ol className="blog-ol mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-blue-900">
            {diagnosisQuestions.map((item) => (
              <li key={item.question} className="blog-li pl-1">
                <p className="font-semibold">{item.question}</p>
                <p className="mt-1 text-blue-800">{item.scoreGuide}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-md border border-blue-300 bg-white p-4">
            <p className="text-sm font-semibold text-gray-900">判定目安</p>
            <ul className="blog-ul mt-2 space-y-1 text-sm leading-7 text-gray-700">
              <li>0〜3点: {scoreRangeLabel(3)}</li>
              <li>4〜6点: {scoreRangeLabel(6)}</li>
              <li>7〜8点: {scoreRangeLabel(8)}</li>
              <li>9〜10点: {scoreRangeLabel(10)}</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="practice-plan"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">レベル別に伸ばすための実行プラン</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            レベルを上げるときは、知識追加より「評価と改善の習慣化」を優先してください。次の4ステップで1か月サイクルを作れます。
          </p>
          <ol className="blog-ol mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1">最初の週に、現場で使う業務を1つに限定する。</li>
            <li className="blog-li pl-1">2週目で評価基準を明文化し、毎回同じ観点でレビューする。</li>
            <li className="blog-li pl-1">3週目で失敗ログを分析し、テンプレと運用手順を更新する。</li>
            <li className="blog-li pl-1">4週目で成果を可視化し、次の1段階の学習テーマを決める。</li>
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-emerald-900">
            レベル3以上を目指す人へ: AI活用の判断軸とキャリアを同時に設計する
          </h2>
          <p className="blog-p mt-4 text-sm leading-7 text-emerald-900">
            レベル3を超える段階では、個人スキルだけでなく、実務価値を継続的に出せる学習設計が必要になります。AIリブートアカデミーでは次の3本柱を一体で扱います。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-emerald-900">
            <li className="blog-li pl-1">
              <span className="font-semibold">生成AI活用力:</span> 業務課題に応じて使い分ける判断力を育てる
            </li>
            <li className="blog-li pl-1">
              <span className="font-semibold">自己理解・キャリアデザイン:</span> 強みと価値観を言語化し、次の役割へ接続する
            </li>
            <li className="blog-li pl-1">
              <span className="font-semibold">仲間と共に学ぶ環境:</span> 対話と協働で継続率と改善速度を高める
            </li>
          </ul>
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-white p-6" />
          </div>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>
      </article>
    </main>
  );
}
