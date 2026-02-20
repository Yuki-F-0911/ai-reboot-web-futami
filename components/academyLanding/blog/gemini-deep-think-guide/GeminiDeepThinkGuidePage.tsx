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

type GeminiDeepThinkGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const infoCheckedDate = "2026-02-20";
const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

const keywordTags = [
  "Gemini Deep Think 使い方",
  "Gemini 3 Deep Think",
  "Google AI Ultra",
  "推論AI 2026",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-deep-think", label: "Gemini 3 Deep Thinkとは" },
  { id: "benchmarks", label: "ベンチマーク結果の読み方" },
  { id: "model-split", label: "Gemini 1.5/2.0との使い分け" },
  { id: "ai-ultra", label: "Google AI Ultraの料金と入手方法" },
  { id: "practice", label: "数学・科学・コードでの活用手順" },
  { id: "comparison", label: "Claude Opus 4.6・GPT-5.2比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "Gemini 3 Deep Thinkは2026年2月12日に公開され、2026年2月20日時点ではGoogle AI Ultra向けに提供されています。",
  "ARC-AGI-2で84.6という高い結果が公開されていますが、評価条件をそろえない単純比較は危険です。",
  "CodeforcesやAIMEなどの数値は推論能力の参考になりますが、実務では検証設計とレビュー工程の有無が成果を左右します。",
  "Gemini 1.5系は終了済み項目が多く、2.0系も段階的終了が予定されているため、今からの新規運用は3系中心が現実的です。",
] as const;

const availabilityRows = [
  {
    topic: "公開日",
    value: "2026-02-12",
    note: "Google公式記事で公開日を明記",
  },
  {
    topic: "利用条件",
    value: "GeminiアプリでGoogle AI Ultra加入者向け",
    note: "全プラン解放ではなく上位プラン前提",
  },
  {
    topic: "API提供",
    value: "信頼できるテスター向け先行提供",
    note: "一般公開の時期は今後の更新依存",
  },
  {
    topic: "実務での位置づけ",
    value: "高難度推論向けの専用モード",
    note: "通常タスクは低遅延モデルと使い分ける",
  },
] as const;

const benchmarkRows = [
  {
    metric: "ARC-AGI-2（Deep Think）",
    score: "84.6",
    meaning: "新しい抽象問題への適応力を測る高難度推論指標",
    implication: "要件定義が曖昧な問題で仮説生成の質を上げやすい",
  },
  {
    metric: "Codeforces（Gemini 3.1 Pro Thinking）",
    score: "84.0",
    meaning: "アルゴリズム問題での正答率/解法設計の安定性を見る",
    implication: "競技系に近い。業務コードは保守性・テスト設計を別評価する",
  },
  {
    metric: "AIME 2025（Gemini 3.1 Pro Thinking）",
    score: "92.0",
    meaning: "計算を伴う数学推論の正確性を確認する指標",
    implication: "数式処理が多い分析業務の初期推論に有効",
  },
  {
    metric: "GPQA Diamond（Deep Think）",
    score: "88.0",
    meaning: "理系の専門知識問題での推論精度を確認する指標",
    implication: "科学領域では根拠説明の整合性確認を必ず併用する",
  },
  {
    metric: "LiveCodeBench v6（Deep Think）",
    score: "80.4",
    meaning: "実装系問題でのコーディング推論力を測る",
    implication: "コード生成後のテスト自動化とセットで価値が出る",
  },
] as const;

const modelSplitRows = [
  {
    axis: "Gemini 1.5系",
    status: "提供終了済み項目が多い（API deprecations参照）",
    bestUse: "既存資産の保守確認のみ",
    recommendation: "新規用途は避け、3系への移行計画を作る",
  },
  {
    axis: "Gemini 2.0 Flash",
    status: "2026-08-26に段階終了予定（公式）",
    bestUse: "低遅延・軽量タスクの一時運用",
    recommendation: "長期運用前提なら2.5/3系へ移行を開始する",
  },
  {
    axis: "Gemini 3 Deep Think",
    status: "2026-02-12公開、AI Ultra向け",
    bestUse: "数学・科学・高度コーディングなど難問推論",
    recommendation: "高価値タスクに限定し、検証ログを標準化する",
  },
] as const;

const ultraRows = [
  {
    item: "料金（米国公表価格）",
    value: "$249.99 / 月（税別）",
    note: "確認日: 2026-02-20。地域・税・キャンペーンで変動",
  },
  {
    item: "Deep Think提供条件",
    value: "Google AI Ultra加入が前提",
    note: "Geminiアプリで段階展開される場合あり",
  },
  {
    item: "API利用",
    value: "先行アクセス申請ベース",
    note: "一般公開範囲は公式更新を都度確認",
  },
] as const;

const signupSteps = [
  "GoogleアカウントでGoogle Oneのプラン画面に入り、AI Ultraの対象国・価格表示を確認する。",
  "契約後にGeminiアプリ側でDeep Thinkが有効か確認し、反映待ちが必要な場合は時間を置いて再確認する。",
  "最初に高難度タスクだけを3〜5件選び、Deep Think利用時の回答品質とレビュー工数をログ化する。",
] as const;

const practiceCards = [
  {
    title: "数学問題（証明・場合分け）",
    objective: "途中式の抜け漏れを減らし、誤答の原因を追跡する",
    prompt:
      "次の問題を解いてください。解答は『方針→途中式→検算→別解の有無』の順で出力し、各ステップで成立条件を明記してください。最後に、誤りが起きやすいポイントを3つ挙げてください。",
    checklist: [
      "途中式の前提条件が省略されていないか",
      "検算が別ルートで実施されているか",
      "別解の妥当性が説明されているか",
    ],
  },
  {
    title: "科学問題（実験解釈・因果推論）",
    objective: "データからの結論飛躍を防ぎ、反証可能性を確保する",
    prompt:
      "以下の観測データをもとに、仮説を2案提示してください。各仮説について『根拠データ』『反証シナリオ』『追加実験案』を表で示し、どちらを先に検証すべきか理由を添えてください。",
    checklist: [
      "データと結論の対応関係が明示されているか",
      "反証シナリオが具体的か",
      "追加実験のコストと期待値が整理されているか",
    ],
  },
  {
    title: "コード問題（アルゴリズム + 実装）",
    objective: "正答だけでなく、保守しやすい実装へ落とす",
    prompt:
      "次の仕様を満たす実装を作成してください。『計算量の根拠』『境界ケース一覧』『ユニットテストケース』『失敗時のデバッグ手順』を必須で出力し、最後に改善余地を3点示してください。",
    checklist: [
      "計算量とメモリ使用量の説明があるか",
      "境界ケース（空入力、上限値、重複）を網羅しているか",
      "テストケースが仕様と一対一対応しているか",
    ],
  },
] as const;

const comparisonRows = [
  {
    metric: "ARC-AGI-2",
    gemini: "77.1（3.1 Pro Thinking）/ 84.6（Deep Think公開値）",
    claude: "8.6（Opus 4.6 Thinking）",
    gpt: "33.2（GPT-5.2）",
    note: "Deep Think値は専用条件。通常Thinking比較と混同しない",
  },
  {
    metric: "Codeforces",
    gemini: "84.0",
    claude: "84.6",
    gpt: "93.4（GPT-5.2 Pro）",
    note: "競技課題の強さ。業務実装品質は別評価が必要",
  },
  {
    metric: "AIME 2025",
    gemini: "92.0",
    claude: "77.3",
    gpt: "98.9（GPT-5.2 Pro）",
    note: "数理推論の比較に有効。計算予算差に注意",
  },
  {
    metric: "GPQA Diamond",
    gemini: "88.0",
    claude: "84.8",
    gpt: "88.4",
    note: "科学推論では僅差。出力根拠の監査設計が重要",
  },
  {
    metric: "Humanity's Last Exam",
    gemini: "25.2",
    claude: "21.6",
    gpt: "24.4",
    note: "長尾の難問群。単独指標での序列化は避ける",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "モデル名に振り回されず、業務課題に対して適切なAIを選ぶ判断軸を体系化します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AI活用を通じて自分の強みと価値提供領域を明確化し、次のキャリア戦略へ接続します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話と実践レビューで、学習を継続し成果へ変換します。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>AIリブート通信</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function GeminiDeepThinkGuidePage({ faqItems }: GeminiDeepThinkGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Gemini Deep Think使い方ガイド" },
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
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Gemini Deep Think使い方ガイド｜ARC-AGI-2・Codeforces・Google AI Ultra料金・推論AI比較
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="Gemini Deep Think使い方ガイド｜ARC-AGI-2・Codeforces・Google AI Ultra料金・推論AI比較"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Gemini 3 Deep Thinkは、通常のチャット利用では解きにくい数学・科学・コーディング問題向けに設計された推論特化モードです。この記事では、公開情報ベースで
            Deep Thinkの提供条件、ARC-AGI-2やCodeforcesの数値解釈、Gemini 1.5/2.0との使い分け、Google AI Ultraの費用感、Claude Opus
            4.6・GPT-5.2との比較まで実務目線で整理します。
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
          <p className="mt-4 text-xs text-blue-800">※確認日: {infoCheckedDate}。料金・仕様・提供範囲は公式更新で変わる可能性があります。</p>
        </motion.section>

        <motion.section
          id="what-is-deep-think"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Gemini 3 Deep Thinkとは何か（2026-02-12公開）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Deep Thinkは、複数の推論経路を同時に検討して回答を組み立てるモードとして公開されました。公開日と提供形態は公式に明記されており、2026年2月20日時点では
            Google AI Ultra加入者向けの導線が中心です。軽い要約や定型作業では通常モードを使い、難問だけDeep Thinkに切り替える設計がコスト効率を保ちやすくなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">項目</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">内容</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">実務メモ</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {availabilityRows.map((row) => (
                  <tr key={row.topic}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.topic}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.value}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="benchmarks"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ARC-AGI-2・Codeforcesなど主要ベンチマーク結果と読み方</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ベンチマークは「どの問題で強いか」を把握するための地図ではなく、配点のある診断票です。数値の比較だけで導入を決めず、評価条件と自社タスクの距離を確認することで判断の再現性が上がります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">指標</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">公開値</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">何を測るか</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">実務への意味</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {benchmarkRows.map((row) => (
                  <tr key={row.metric}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.metric}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.score}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.meaning}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.implication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            評価設計の考え方は
            <Link href="/academy/blog/llm-evaluation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              LLM評価ガイド
            </Link>
            を先に読むと整理しやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="model-split"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Gemini 1.5/2.0との使い分け（提供状況込み）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            使い分けは性能だけでなく、サポート継続性で決める必要があります。1.5系はすでに終了済み機能が多く、2.0 Flashも終了予定が公表されています。新規運用の主軸を3系へ寄せるほど、将来の移行コストを抑えられます。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">モデル系統</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">提供状況</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">向く用途</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">判断ポイント</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {modelSplitRows.map((row) => (
                  <tr key={row.axis}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.axis}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.status}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.bestUse}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.recommendation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Gemini全体像の整理には
            <Link href="/academy/blog/gemini-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Gemini入門ガイド
            </Link>
            を併読すると導入判断が早くなります。
          </p>
        </motion.section>

        <motion.section
          id="ai-ultra"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Google AI Ultraの料金と入手方法（2026年2月時点）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            2026年2月20日時点でGoogle公式が公表している米国の標準価格は月額249.99ドルです。契約時は国・通貨・キャンペーンで表示が変わるため、最終的には購入画面の金額で判断してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">項目</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">内容</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {ultraRows.map((row) => (
                  <tr key={row.item}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.item}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.value}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {signupSteps.map((step) => (
              <li key={step} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            API検証を始める場合は、
            <Link href="/academy/blog/google-ai-studio-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Google AI Studioガイド
            </Link>
            でテスト環境を先に整えると進めやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="practice"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">数学・科学・コード問題での実践手順</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Deep Thinkを活かす鍵は、プロンプトを長くすることではなく、検証工程を一緒に要求することです。以下の3パターンは中級者が再現しやすい基本形として使えます。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {practiceCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">目的: {card.objective}</p>
                <p className="mt-3 text-xs leading-6 text-gray-600">推奨プロンプト例</p>
                <p className="mt-1 rounded-md bg-white p-3 text-xs leading-6 text-gray-700">{card.prompt}</p>
                <p className="mt-3 text-xs leading-6 text-gray-600">確認ポイント</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-6 text-gray-700">
                  {card.checklist.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            重要なのは「正解らしい回答」を採用することではなく、検証ログと再現条件を残すことです。モデルの更新が入っても再検証できる状態を先に作ると、運用が崩れにくくなります。
          </p>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Claude Opus 4.6・GPT-5.2との推論比較</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            同一ページの比較表で見ると、GeminiはARC-AGI-2と科学系指標で強みがあり、GPT-5.2はCodeforces/AIMEで高い値を示します。Claude Opus 4.6は指標ごとの差が大きく、用途選定の粒度が重要です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">指標</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Gemini</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Claude Opus 4.6</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">GPT-5.2</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">読み方</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.metric}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.metric}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gemini}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.claude}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.gpt}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            比較軸を広く見たい場合は
            <Link href="/academy/blog/gpt-vs-claude-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTとClaude比較 2026年版
            </Link>
            も併読してください。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次の一歩</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            高性能モデルの比較だけでは、業務成果は安定しません。必要なのは、モデル選定を含む判断軸と、継続的に改善できる学習設計です。AIリブートアカデミーでは、次の3本柱で実務への定着を支援しています。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-white/80 bg-white p-4">
                <h3 className="text-sm font-semibold text-will-primary">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth"
            >
              アカデミーの詳細を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-will-primary/30 px-6 py-3 text-sm font-semibold text-will-primary transition-colors hover:border-will-primary hover:bg-white"
            >
              無料相談を予約する
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

