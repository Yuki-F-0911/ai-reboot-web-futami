"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type GptVsClaudeComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["GPT-4 Claude 性能比較", "ChatGPT Claude 違い 2026", "AIモデル 比較"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "basics", label: "基本情報（開発元・モデル・時期）" },
  { id: "performance", label: "性能比較（文章/コード/分析/要約/創造性）" },
  { id: "strengths", label: "得意分野の違い" },
  { id: "pricing", label: "料金プラン比較（無料/個人/API）" },
  { id: "recommendations", label: "用途別おすすめ" },
  { id: "combine", label: "両方使いこなすコツ" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "AIリブートで学ぶ" },
] as const;

const basicInfoRows = [
  {
    label: "開発元",
    gpt: "OpenAI（ChatGPT / API などの形で提供）",
    claude: "Anthropic（Claude / API などの形で提供）",
  },
  {
    label: "代表的なモデル系統（例）",
    gpt: "GPT系（例: GPT-5 / GPT-5.2 など。提供名や選択肢は時期により変動）",
    claude: "Claude系（例: Claude 4.5 Sonnet / Claude 4.6 Opus など。提供名や選択肢は時期により変動）",
  },
  {
    label: "リリース時期（目安）",
    gpt: "GPT-4は2023年以降に一般向けで広く利用が進んだ系統（その後も継続的にモデル更新）",
    claude: "Claude 3は2024年以降に一般向けで広く利用が進んだ系統（その後も継続的にモデル更新）",
  },
  {
    label: "注意点",
    gpt: "同じ名称でも、プロダクト/プランで機能や上限が異なる場合がある",
    claude: "同じ名称でも、プロダクト/プランで機能や上限が異なる場合がある",
  },
] as const;

const performanceAxes = [
  {
    axis: "文章生成（下書き/整形）",
    gpt: "用途の汎用性が高く、指示の粒度を上げるほど出力をコントロールしやすい傾向。",
    claude: "文体の整え方や推敲が得意なケースが多く、読みやすさを重視する用途と相性が良い。",
  },
  {
    axis: "コード生成（実装/修正）",
    gpt: "設計→実装→デバッグの往復を短いサイクルで回しやすい。周辺ツールとの組み合わせもしやすい。",
    claude: "仕様理解とリファクタ/説明の丁寧さが強みになりやすい。差分レビュー用途でも使いやすい。",
  },
  {
    axis: "分析（整理/比較/意思決定支援）",
    gpt: "比較軸を増やした整理、前提の明文化、検討案の分解などに強い。",
    claude: "論点の抜け漏れ検出や、文章での説明を丁寧にする用途に向くことが多い。",
  },
  {
    axis: "要約（長文/会議/資料）",
    gpt: "構造化（箇条書き・表）を指定すると安定しやすい。分割要約との相性が良い。",
    claude: "読みやすい日本語での要約や、文脈を保った統合要約が得意なケースがある。",
  },
  {
    axis: "創造性（発想/コピー/企画）",
    gpt: "幅広い切り口の発散がしやすい。制約条件を与えると企画の収束も進めやすい。",
    claude: "コンセプトの一貫性や、トーンを保った言語表現に強みが出やすい。",
  },
] as const;

const strengths = [
  {
    title: "GPT-4系が強いこと（傾向）",
    items: [
      "汎用性が高く、幅広いタスクに対応しやすい",
      "プロンプトで出力形式を厳密に指定したときの追従",
      "外部ツール連携やワークフロー化（運用設計）との相性",
    ],
  },
  {
    title: "Claudeが強いこと（傾向）",
    items: [
      "長文の推敲・整形（読みやすさの最終仕上げ）",
      "要約や説明文を丁寧にまとめる作業",
      "文章のトーン統一（社外向け/顧客向け）",
    ],
  },
] as const;

const pricingRows = [
  {
    axis: "無料枠",
    point:
      "まずは無料で比較し、同じプロンプトで「出力品質」と「上限（回数/速度）」の体感差を確認するのが現実的です。",
  },
  {
    axis: "個人プラン（サブスク）",
    point:
      "月額制の有料プランで上限や機能が増えるのが一般的です。毎日使うか、業務の基幹用途かが判断材料になります。",
  },
  {
    axis: "チーム/法人",
    point:
      "共有、管理、セキュリティ要件が入るため、個人の価格比較だけでなく運用コスト（ルール/教育/監査）も含めて検討します。",
  },
  {
    axis: "API料金",
    point:
      "入力・出力の量（トークン）で従量課金が基本です。PoCでは「1タスクあたりの文字量×回数」で概算し、ログで実績計測するのが確実です。",
  },
] as const;

const useCaseRecommendations = [
  {
    title: "ビジネス文書（提案書/メール/議事録）",
    recommendation:
      "構造化と論点整理はGPT-4系、文章の推敲とトーン調整はClaudeが相性良いことが多いです。1つの文章を「下書き→推敲」で分業すると失敗が減ります。",
  },
  {
    title: "プログラミング（実装/レビュー）",
    recommendation:
      "実装スピード重視ならGPT-4系、レビュー/改善提案や説明の丁寧さ重視ならClaudeを比較。どちらもテスト観点の指示を入れると品質が上がります。",
  },
  {
    title: "学習（理解/要点整理）",
    recommendation:
      "どちらでも可能ですが、教材の章ごとに要約→質問→小テスト化、のように手順化すると学習効果が上がります。分からない点は前提から分解して質問します。",
  },
  {
    title: "クリエイティブ（企画/コピー）",
    recommendation:
      "発散はGPT-4系、コンセプトの統一や表現の磨き込みはClaude、のように工程で切り替えると完成度が上がりやすいです。",
  },
] as const;

const combinePatterns = [
  {
    title: "パターン1: 発散→構造化→推敲",
    detail:
      "GPT-4系でアイデアを多めに出し、章立てや比較軸で構造化した後、Claudeで文章を推敲して読みやすく仕上げます。",
  },
  {
    title: "パターン2: 実装→レビュー→リファクタ",
    detail:
      "GPT-4系でまず動く実装を作り、Claudeで差分レビューと改善案を出し、最後にもう一度GPT-4系で修正してテストまで回します。",
  },
  {
    title: "パターン3: 1つのプロンプトを共通化",
    detail:
      "「目的/前提/入力/出力形式/制約」をテンプレ化し、同じ入力で両者を比較できるようにします。比較が早く、社内で再利用できます。",
  },
  {
    title: "パターン4: 長文は分割して扱う",
    detail:
      "長い資料は章ごとに要約し、最後に統合要約→結論の順でまとめます。どちらでも品質が安定しやすく、引用ミスも減ります。",
  },
] as const;

export default function GptVsClaudeComparisonPage({ faqItems }: GptVsClaudeComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "GPT-4とClaude徹底比較" },
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
            GPT-4とClaude徹底比較｜性能・得意分野・料金の違いを解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            比較記事を読んでも「結局どれが自分に合うのか」が決めきれないのが普通です。結論: 汎用性とワークフロー化を重視するならGPT-4系、長文の推敲や丁寧な説明を重視するならClaudeが相性良いことが多いです。
            筆者は短い仕様メモを両方に渡し、出力の再現性と修正への追従で判断しました（モデル名・機能・料金は更新されるため、最終判断は用途での同一条件比較が確実です）。
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
              比較は「文章/コード/分析/要約/創造性」の5軸で見ると、得意不得意が整理しやすいです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              料金は「個人（サブスク）」と「API（従量）」で考え方が違うため、用途別に評価します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              実務では、工程で切り替える併用（下書き→推敲、実装→レビュー）が最も成果につながりやすいです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              最終判断は、同じ短い仕様メモ（目的/入力例/出力形式）で両方を試し、「再現性」と「修正への追従」をチェックするのが確実です。
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
          <h2 id="basics" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            GPT-4とClaudeの基本情報（開発元、モデル、リリース時期）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 「モデル名そのもの」よりも、プロダクト（ChatGPT/Claude）とAPI、選べるモデル、利用上限/機能の組み合わせで体験が変わります。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            「GPT-4 vs Claude」と言っても、実際はプロダクト（ChatGPT/Claude）とAPI、選択できるモデル、利用上限や機能の組み合わせで体験が変わります。ここでは“系統”としての違いを整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">GPT-4系（ChatGPT / API）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude（Claude / API）</th>
                </tr>
              </thead>
              <tbody>
                {basicInfoRows.map((row) => (
                  <tr key={row.label} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.label}</th>
                    <td className="py-4 px-4">{row.gpt}</td>
                    <td className="py-4 pl-4">{row.claude}</td>
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
          <h2 id="performance" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            性能比較（文章生成/コード生成/分析/要約/創造性）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: どちらが“上”かではなく、「あなたのタスクで勝つか」を見るのが正解です。同じ入力（プロンプト・素材）を渡し、出力の再現性と修正指示への追従で判断しましょう。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">観点</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">GPT-4系</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Claude</th>
                </tr>
              </thead>
              <tbody>
                {performanceAxes.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.gpt}</td>
                    <td className="py-4 pl-4">{row.claude}</td>
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
          <h2 id="strengths" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            得意分野の違い（GPT-4が強い領域 vs Claudeが強い領域）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: 速度が必要な工程（発散/試作/実装）にGPT系、文章の最終品質に影響する工程（推敲/トーン調整/レビュー）にClaudeを置くと、強みを活かしやすいです。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {strengths.map((block) => (
              <section key={block.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{block.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {block.items.map((item) => (
                    <li key={item} className="pl-1 marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            目安として、成果物の“最後の品質”に影響する工程（推敲/トーン調整/レビュー）にClaudeを置き、工程を回す“速度”が必要な場面（発散/試作/実装）にGPT-4系を置くと、両方の強みを活かしやすくなります。
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
          <h2 id="pricing" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            料金プラン比較（無料枠/個人プラン/API料金）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 料金は頻繁に更新されるため、ここでは「比較の考え方」を中心に整理します。個人はサブスク、APIは従量という前提で、あなたの利用量で試算するのが安全です。
          </p>
          <div className="mt-6 space-y-4">
            {pricingRows.map((row) => (
              <section key={row.axis} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{row.axis}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{row.point}</p>
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
          <h2 id="recommendations" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別おすすめ（ビジネス文書/プログラミング/学習/クリエイティブ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: まずは最重要の1タスクで両方を比較し、「修正指示への追従」と「再現性」が高い方を主軸に置くのが失敗しにくいです。
          </p>
          <div className="mt-6 space-y-4">
            {useCaseRecommendations.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.recommendation}</p>
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
          <h2 id="combine" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            両方使いこなすコツ（併用の実践パターン）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            結論: 併用のポイントは「工程で分ける」「同じ入力で比較できる状態を作る」「長文は分割する」の3つです。以下のパターンをベースに、あなたの業務フローへ落とし込みましょう。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {combinePatterns.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
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
            関連記事（内部リンク）
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/what-is-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIとは？初心者向けにわかりやすく解説
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/gemini-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Google Gemini完全入門ガイド｜使い方・ChatGPTとの違い・無料で始める方法
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-agent-build-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントの作り方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門（非エンジニア向け）
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
            AIリブートアカデミーで「使い分け」を実務に落とす
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            GPT-4とClaudeの比較は、結局「あなたの業務にどう組み込むか」で成果が決まります。AIリブートアカデミーでは、目的設定からプロンプトの型、運用ルールまで、実務で再現できる形に落とし込みます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              アカデミーを見る
            </Link>
            <Link
              href="/academy/blog"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              他の記事も読む
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
