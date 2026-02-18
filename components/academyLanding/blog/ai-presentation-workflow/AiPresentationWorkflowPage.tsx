"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiPresentationWorkflowPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI プレゼン資料 作成", "AI パワポ 作成", "生成AI プレゼン"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "workflow-overview", label: "全体ワークフロー" },
  { id: "step1-outline", label: "Step 1: 構成案" },
  { id: "step2-script", label: "Step 2: スライド原稿" },
  { id: "step3-design", label: "Step 3: デザイン" },
  { id: "step4-review", label: "Step 4: 推敲・改善" },
  { id: "tool-comparison", label: "用途別ツール比較" },
  { id: "prompt-examples", label: "プロンプト例" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "cta", label: "学び方" },
] as const;

const workflowSteps = [
  {
    step: "1. 構成（アウトライン）",
    goal: "伝える順番を決める",
    detail:
      "目的・聞き手・時間・枚数を固定し、章立てと各スライドの主張（Key Message）を作ります。ここが曖昧だと後工程の修正が増えます。",
  },
  {
    step: "2. スライド原稿",
    goal: "各スライドの文章を作る",
    detail:
      "見出し、箇条書き、スピーカーノート（話す原稿）を分けて生成すると、情報量の調整がしやすくなります。読み上げ想定の文章は別で作るのがコツです。",
  },
  {
    step: "3. デザイン",
    goal: "読みやすい形に整える",
    detail:
      "Gamma / Canva / Beautiful.aiで叩き台を作り、最終的にPowerPointやGoogle Slidesで会社テンプレートや表現ルールに合わせて整えると品質が安定します。",
  },
  {
    step: "4. 推敲・改善",
    goal: "論理と表現の精度を上げる",
    detail:
      "主張と根拠の対応、重複、言い回し、誤字をAIでチェックし、人が最終確認します。特に数値や固有名詞はAIだけで確定しない運用が安全です。",
  },
] as const;

const outlinePrompt = `あなたはプレゼン資料の構成作家です。
目的: {目的}
聞き手: {聞き手}
想定時間: {分}
スライド枚数: {枚}
トーン: {丁寧/カジュアル/硬め}

テーマ: {テーマ}
前提情報:
- {前提1}
- {前提2}

出力してほしいもの:
1) 全体構成（章立て）
2) スライドごとの「タイトル」と「一言で言う主張（Key Message）」
3) 聞き手が疑問に思いそうな点（想定Q&A）`;

const scriptPrompt = `以下のアウトラインをもとに、スライド原稿を作ってください。

条件:
- 1スライドあたりの箇条書きは最大5行
- 1行は全角30文字以内を目安
- 専門用語は必要最小限にし、初出は補足を付ける

出力形式（スライドごと）:
## Slide {番号}
Title:
Bullets:
- ...
Speaker notes:
- ...`;

const reviewPrompt = `あなたは編集者です。以下のプレゼン原稿を、読み手が誤解しないように推敲してください。

チェック観点:
- 主張→根拠→結論のつながり（飛躍がないか）
- 重複や冗長表現の削除
- 数値/固有名詞/前提条件のあいまいさの指摘（不明点は質問として列挙）
- 用語の統一（表記ゆれ）
- 1スライドの情報量（詰め込みすぎの指摘）

出力:
1) 修正提案（箇条書き）
2) 直した後の原稿（必要な範囲）`;

const toolRecommendations = [
  {
    useCase: "ビジネス提案（顧客向け）",
    tools: "PowerPoint（社内テンプレート） / Copilot in PowerPoint（下書き支援）",
    why: "ブランド整合、フォント/配色ルール、細かな調整が必要になりやすい。",
    tip: "AIは構成と原稿に集中させ、最終体裁はテンプレート運用で揃える。",
  },
  {
    useCase: "社内報告（定例・共有）",
    tools: "Google Slides / Canva（素材・テンプレ）",
    why: "スピード優先で、共有・共同編集が多い。",
    tip: "結論→根拠→次アクションの型を固定して、毎回同じ流れで作る。",
  },
  {
    useCase: "セミナー（登壇・ウェビナー）",
    tools: "Gamma / Canva / Beautiful.ai",
    why: "見栄えの良い叩き台を短時間で作りやすい。",
    tip: "話す原稿（Speaker notes）を別で作り、スライドは情報量を絞る。",
  },
] as const;

export default function AiPresentationWorkflowPage({ faqItems }: AiPresentationWorkflowPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIプレゼン資料作成ワークフロー" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">AIでプレゼン資料を効率的に作る方法</h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月18日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            プレゼン資料は「構成が固まらない」「スライドが長文化する」「見た目が整わない」で手戻りが起きやすい作業です。
            この記事では、構成→原稿→デザイン→推敲の4工程を分けて回す手順と、各工程での入力・出力の型を結論先出しで整理します。
            筆者はまずアウトライン（章立て）を固定してから作り込むと、最終的な修正が激減すると感じています。プロンプトの型は
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              プロンプトテンプレート集
            </Link>
            でも解説しています。
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
          <p className="mt-5 text-base font-medium text-gray-900">
            最短で品質を上げるコツは、1回で完成を狙わず「構成→原稿→デザイン→推敲」を順番に回すことです。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">まずはアウトラインをAIで作り、各スライドの主張（Key Message）を固定します。</li>
            <li className="pl-1 marker:text-gray-500">次に、スライド本文と話す原稿（Speaker notes）を分けて生成すると情報量が整います。</li>
            <li className="pl-1 marker:text-gray-500">デザインはAIツールで叩き台を作り、最終的にPowerPoint / Google Slidesで整えます。</li>
            <li className="pl-1 marker:text-gray-500">推敲はAIにチェックさせつつ、数値・固有名詞・条件は人が最終確認します。</li>
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
          <h2 id="workflow-overview" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AIプレゼン資料作成の全体ワークフロー（構成→スライド→デザイン→推敲）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            最短で品質を上げるには、1回で完成を狙わず「4工程を順番に回す」ことが重要です。構成→原稿→デザイン→推敲の順で精度を上げます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workflowSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.step}</h3>
                <p className="mt-2 text-xs font-semibold tracking-wide text-gray-500">{item.goal}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            具体的な業務効率化の考え方は
            <Link
              href="/academy/blog/ai-business-efficiency-cases"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI業務効率化事例集
            </Link>
            も参考になります。
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
          <h2 id="step1-outline" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Step 1 – AIで構成案を作る（ChatGPT/Claudeでのアウトライン生成）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            まず「目的・聞き手・時間・枚数」を揃えてからアウトラインを出すと、後工程の手戻りが減ります。アウトラインができれば、スライドは半分できたも同然です。
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-700">
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">入力に入れると効く情報:</span> 目的、聞き手の役職/知識レベル、制約（時間・枚数）、トーン、前提、伝えたい結論
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <span className="font-semibold text-gray-900">出力で固定する項目:</span> スライドごとのタイトル、Key Message、想定Q&A（突っ込まれポイント）
            </li>
          </ul>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">アウトライン生成プロンプト（コピペ用）</h3>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4 text-xs leading-6 text-gray-700">
              <code>{outlinePrompt}</code>
            </pre>
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
          <h2 id="step2-script" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Step 2 – スライド原稿を生成する（各スライドのテキスト作成）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            スライド原稿は「見せる文章」と「話す文章」に分けると、文字量の暴走を防げます。スライドは短く、話す原稿で補足する設計が分かりやすさに直結します。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900">スライド原稿生成の指示例</h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              アウトラインの後は、各スライドの出力形式をテンプレ化すると再利用できます。以下の形式で依頼し、必要なら「専門用語を噛み砕いて」「例を1つ追加して」など追質問で調整してください。
            </p>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">
              <code>{scriptPrompt}</code>
            </pre>
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
          <h2 id="step3-design" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Step 3 – デザインに落とし込む（Gamma, Canva AI, Beautiful.ai等）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            デザイン工程は「見栄え」よりも「読みやすさ」と「統一感」を優先すると失敗しにくいです。AIツールは叩き台に使い、最終調整はPowerPoint / Google Slidesで行うと運用しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">Gamma</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">アウトラインから短時間でスライドを生成しやすく、叩き台作りに向きます。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">Canva（Canva AI）</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">テンプレートや素材が豊富で、図版やアイコンを含めて整えやすいのが特徴です。</p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-base font-semibold text-gray-900">Beautiful.ai</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                レイアウトの自動整形に強く、資料を「一定の見栄え」に寄せるのに向きます。
              </p>
            </section>
          </div>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-gray-900">仕上げでよく使うツール</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700">
              <li className="rounded-md bg-white p-3">
                <span className="font-semibold text-gray-900">PowerPoint:</span> テンプレート運用・細かな体裁調整・社内共有に強い。Copilot in PowerPointは下書き作成の補助に使えます。
              </li>
              <li className="rounded-md bg-white p-3">
                <span className="font-semibold text-gray-900">Google Slides:</span> 共同編集や共有が多いチーム運用で扱いやすい。
              </li>
            </ul>
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
          <h2 id="step4-review" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Step 4 – AIで推敲・改善する（論理チェック、冗長表現の除去）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            最後にAIで「論理の飛躍」「表記ゆれ」「詰め込みすぎ」をチェックすると、短時間で読みやすさが上がります。最終判断は人が行い、事実関係は必ず確認してください。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-gray-900">推敲プロンプト（コピペ用）</h3>
            <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700">
              <code>{reviewPrompt}</code>
            </pre>
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
          <h2 id="tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別おすすめツール比較（ビジネス提案/社内報告/セミナー）
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            ツール選定は「見栄え」より「運用・共有・テンプレート」の相性で決めると失敗しにくいです。無理のない組み合わせから始めましょう。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">用途</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">おすすめツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">向いている理由</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">使い方のコツ</th>
                </tr>
              </thead>
              <tbody>
                {toolRecommendations.map((row) => (
                  <tr key={row.useCase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.useCase}</th>
                    <td className="py-4 px-4">{row.tools}</td>
                    <td className="py-4 px-4">{row.why}</td>
                    <td className="py-4 pl-4">{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionReveal}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 id="prompt-examples" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プレゼン資料作成で使えるプロンプト例
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            プロンプトは「工程ごと」に分けてテンプレ化すると再現性が上がります。まずアウトライン→原稿→推敲の3点を揃えると、どのツールでも使い回しやすくなります。
          </p>
          <div className="mt-6 space-y-6">
            <section className="rounded-lg border border-gray-100 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">1) アウトライン作成</h3>
              <pre className="mt-3 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                <code>{outlinePrompt}</code>
              </pre>
            </section>
            <section className="rounded-lg border border-gray-100 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">2) スライド原稿作成</h3>
              <pre className="mt-3 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                <code>{scriptPrompt}</code>
              </pre>
            </section>
            <section className="rounded-lg border border-gray-100 bg-gray-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">3) 推敲・改善</h3>
              <pre className="mt-3 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                <code>{reviewPrompt}</code>
              </pre>
            </section>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            生成AIの学び方そのものは
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AI学習ロードマップ
            </Link>
            で体系的にまとめています。
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論: つまずきやすいのは「目的/聞き手の未固定」「文字量」「事実確認」です。よくある質問をQ&Aで整理します。
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
              <Link href="/academy/blog/prompt-template-for-work" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集｜営業・マーケ・管理部門の活用ポイントを解説 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-image-generation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI画像生成おすすめツール比較｜Google Gemini・Midjourney・ChatGPT画像生成の使い方と選び方【2026年版】 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-video-tool-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画生成ツールおすすめ比較｜用途別の選び方と始め方 | AIリブート
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT・Claude初心者ガイド｜最初の1週間でできること | AIリブート
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="editorial-notes" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            監修・更新情報
          </h2>
          <p className="text-sm leading-7 text-gray-700">
            監修: AIリブートアカデミー 編集部 / 最終更新日: 2026年2月18日
          </p>
        </section>

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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">まずはアウトラインをAIで作り、各スライドの主張（Key Message）を固定します。</li>
            <li className="pl-1 marker:text-gray-500">次に、スライド本文と話す原稿（Speaker notes）を分けて生成すると情報量が整います。</li>
            <li className="pl-1 marker:text-gray-500">デザインはAIツールで叩き台を作り、最終的にPowerPoint / Google Slidesで整えます。</li>
            <li className="pl-1 marker:text-gray-500">推敲はAIにチェックさせつつ、数値・固有名詞・条件は人が最終確認します。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプト設計を体系的に学ぶなら
          </h2>
          <p className="mt-5 text-base font-medium text-gray-900">
            ツール名より「入力の設計（前提・制約・出力形式）」で成果が決まります。AIリブートアカデミーでは、業務別テンプレートの作り方と再現性のあるプロンプト設計を体系的に学べます。
          </p>
          <ul className="mt-6 space-y-2 text-sm leading-7 text-gray-700">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミーを見る
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/prompt-template-for-work"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                仕事で使えるプロンプトテンプレート集を読む
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集を読む
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AI学習ロードマップを読む
              </Link>
            </li>
          </ul>
        </motion.section>

      </article>
    </main>
  );
}
