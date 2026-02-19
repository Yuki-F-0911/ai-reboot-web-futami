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

type AiJobHuntingGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["転職 AI 活用", "ChatGPT 職務経歴書", "AI 面接 対策"] as const;

const tocItems = [
  { id: "phase-map", label: "転職活動でAIを使う3フェーズの全体像" },
  { id: "resume-with-chatgpt", label: "ChatGPTで職務経歴書を作る実践手順" },
  { id: "ai-company-research", label: "AIで企業研究を深める実践手順" },
  { id: "ai-interview-prep", label: "AIで面接対策を仕上げる実践手順" },
  { id: "showcase-ai-usage", label: "AI活用を転職先にアピールする方法" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const phaseRows = [
  {
    phase: "職務経歴書",
    objective: "経験と成果を構造化し、応募職種に合わせて再編集する",
    aiUsage: "経験棚卸し、成果の数値化、求人票に合わせた表現調整",
    output: "応募先ごとに最適化した職務経歴書",
  },
  {
    phase: "企業研究",
    objective: "企業の事業と採用背景を理解し、志望動機の精度を上げる",
    aiUsage: "IR情報の要約、競合比較、求人票の期待役割の言語化",
    output: "面接で使える企業研究メモ",
  },
  {
    phase: "面接対策",
    objective: "想定質問への回答を準備し、深掘り質問にも対応する",
    aiUsage: "想定Q&A生成、逆質問の作成、回答の改善フィードバック",
    output: "回答集と想定問答シート",
  },
] as const;

const resumeSteps = [
  {
    title: "Step 1: 実績の材料を先に集める",
    body: "直近3〜5年の業務を「担当範囲」「成果」「使用ツール」に分けて箇条書きで出します。最初から文章化しないことで、漏れと重複を減らせます。",
  },
  {
    title: "Step 2: STARで骨組みを作る",
    body: "Situation・Task・Action・Resultの順で並べると、採用担当が読んだときに背景と成果を短時間で把握できます。AIに変換を依頼すると作業速度が上がります。",
  },
  {
    title: "Step 3: 数値化できる成果を優先する",
    body: "売上、工数、対応件数、エラー率など、比較できる指標を優先して記載します。数値がない実績は、改善前後の状態を具体化して補います。",
  },
  {
    title: "Step 4: 求人票ごとに文脈を合わせる",
    body: "同じ経験でも、応募企業が重視する観点に合わせて見出しと順序を調整します。職務経歴書は1本で固定せず、応募先ごとに更新する前提で運用します。",
  },
  {
    title: "Step 5: 事実確認と読みやすさを最終チェックする",
    body: "AI出力には事実誤認や誇張が混ざることがあります。年次、社名表記、実績数字を原資料で再確認し、1文を短くして読みやすさを整えます。",
  },
] as const;

const resumePrompts = [
  {
    title: "プロンプト1: 経験棚卸しを構造化する",
    prompt: `あなたは転職支援のキャリアアドバイザーです。
以下の業務メモを「担当業務 / 課題 / 取り組み / 成果 / 使用ツール」に整理してください。
成果は可能な限り数値化の候補も提案してください。

[業務メモ]
（ここに箇条書きで入力）`,
  },
  {
    title: "プロンプト2: STAR形式に変換する",
    prompt: `以下の実績を職務経歴書向けにSTAR形式で再構成してください。
各項目は200〜260文字で、採用担当が読みやすい日本語にしてください。

[実績]
（Step1で整理した内容を貼り付け）`,
  },
  {
    title: "プロンプト3: 数値表現を改善する",
    prompt: `以下の職務経歴書ドラフトから、成果が弱い表現を抽出してください。
「何を、どれだけ、どう改善したか」が伝わる表現に書き換え案を3案ずつ提示してください。`,
  },
  {
    title: "プロンプト4: 求人票に合わせて最適化する",
    prompt: `以下の求人票の要件に合わせて、職務経歴書の自己PRと実績見出しを再編集してください。
優先順位は「必須要件」「歓迎要件」「応募企業の事業特性」です。
誇張は禁止し、元情報にない実績は追加しないでください。`,
  },
] as const;

const researchSteps = [
  "企業HP・採用ページ・IR資料・ニュースの4系統を分けて要約する",
  "競合2〜3社と比較し、差別化要素を1枚のメモに統合する",
  "募集背景を推定し、「このポジションで求める成果」を文章化する",
  "志望動機を『企業課題→自分の経験→入社後の貢献』の順で作る",
] as const;

const researchPrompts = [
  {
    title: "企業理解の要点抽出",
    prompt: `次の情報から、面接で押さえるべき企業理解ポイントを整理してください。
出力は「事業モデル / 主要顧客 / 競争優位 / 今後の注力領域 / 採用背景」の5項目。

[企業URL・IR要約・ニュースメモ]`,
  },
  {
    title: "競合比較のフレーム化",
    prompt: `対象企業と競合2社を比較し、違いを表で整理してください。
列は「提供価値 / 収益源 / 強み / リスク / この企業を選ぶ理由」にしてください。`,
  },
  {
    title: "志望動機の精度向上",
    prompt: `以下の職務経歴書要約と企業研究メモを使って、志望動機を300文字で作成してください。
抽象表現を避け、入社後90日で取り組む行動案を最後に1文入れてください。`,
  },
] as const;

const interviewPrompts = [
  {
    title: "想定質問を幅広く生成する",
    objective: "一次面接〜最終面接までの質問を先に洗い出す",
    prompt: `あなたは採用面接官です。以下の職務経歴書と求人票を読み、面接質問を20個作成してください。
分類は「経験確認」「行動特性」「課題解決」「AI活用経験」「カルチャーフィット」に分けてください。`,
  },
  {
    title: "深掘り質問を作る",
    objective: "回答の薄いポイントに対して追質問を準備する",
    prompt: `以下の回答草案に対して、面接官が深掘りしそうな質問を10個作成してください。
各質問に対して、回答の改善ポイントを1行で添えてください。`,
  },
  {
    title: "逆質問を設計する",
    objective: "入社後のミスマッチを防ぎつつ意欲を示す",
    prompt: `以下の企業研究メモを元に、逆質問を8個作成してください。
「事業戦略」「組織体制」「評価制度」「AI活用方針」の4カテゴリで各2問ずつ。`,
  },
  {
    title: "回答の論理チェックをする",
    objective: "話が長い・結論不明瞭などの弱点を修正する",
    prompt: `以下の面接回答を評価し、改善案を提示してください。
評価軸は「結論の明確さ」「根拠」「具体性」「再現性」「1分で話せる長さ」です。
最後に改善後の1分回答を提示してください。`,
  },
  {
    title: "本番想定の模擬面接を行う",
    objective: "実戦に近い形式で反復練習する",
    prompt: `あなたは[業界名]の採用責任者です。これから私に面接をしてください。
1問ずつ質問し、私の回答後に「良かった点」と「改善点」を簡潔にフィードバックしてください。
10問終了後、総評と次回までの改善課題を3つ提示してください。`,
  },
] as const;

const appealFramework = [
  {
    title: "1. 課題",
    description: "どの業務のどこが非効率だったかを具体的に示す（例: 週次レポート作成に毎回3時間）。",
  },
  {
    title: "2. 実行",
    description: "どのAIをどの手順で使ったかを説明する（例: ChatGPTで要約下書き→人間が事実確認）。",
  },
  {
    title: "3. 成果",
    description: "時間・品質・件数など定量または比較可能な形で示す（例: 3時間→45分に短縮）。",
  },
  {
    title: "4. 再現",
    description: "チームや別業務でも再利用できるかを述べる（例: 手順をテンプレ化して他部署へ展開）。",
  },
] as const;

export default function AiJobHuntingGuidePage({ faqItems }: AiJobHuntingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI×転職完全ガイド" },
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
                title="AI×転職完全ガイド｜職務経歴書・面接対策・企業研究の実践テクニック"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI×転職完全ガイド｜職務経歴書・面接対策・企業研究の実践テクニック
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            転職活動でAIを使うなら、職務経歴書だけに限定せず、企業研究と面接対策まで一気通貫で設計するのが効率的です。
            本記事では「職務経歴書・企業研究・面接対策」の3フェーズで、実際に使えるChatGPTプロンプトと作業手順をまとめます。
            最後に、AI活用経験を転職先へ評価される形で伝えるテンプレートも用意しました。
          </p>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">先に要点</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li className="pl-1 marker:text-slate-500">AI活用は「職務経歴書→企業研究→面接対策」の順に進めると再利用効率が高い。</li>
              <li className="pl-1 marker:text-slate-500">職務経歴書はChatGPTで下書きし、数値化と事実確認を人間側で仕上げる。</li>
              <li className="pl-1 marker:text-slate-500">面接ではツール名より「課題・実行・成果・再現性」の順で語ると評価につながる。</li>
            </ul>
          </div>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="phase-map"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">転職活動でAIを使う3フェーズの全体像</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、転職活動のAI活用は「職務経歴書を作る工程」で終わらせないことが重要です。3フェーズを連動させると、準備時間を短縮しながら回答の一貫性を高められます。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              転職で評価されるのは、書類・面接・企業理解が同じストーリーでつながっている状態です。職務経歴書だけAIで整えても、
              面接回答が薄い、企業研究が浅い、志望動機が抽象的という状態だと選考通過率は上がりません。
            </p>
            <p>
              まず職務経歴書で経験を構造化し、その情報を使って企業研究の視点を作り、最後に面接Q&Aへ落とし込む流れを作ると、
              1回の準備が複数フェーズに再利用されます。特に在職中の転職活動では、この再利用設計が時間管理の鍵になります。
            </p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">フェーズ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目的</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">AIの使い方</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">成果物</th>
                </tr>
              </thead>
              <tbody>
                {phaseRows.map((row) => (
                  <tr key={row.phase} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.phase}</th>
                    <td className="py-4 px-4">{row.objective}</td>
                    <td className="py-4 px-4">{row.aiUsage}</td>
                    <td className="py-4 pl-4">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            関連記事として、
            <Link href="/academy/blog/skills-for-ai-era-career" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI時代に必要なスキルを職種別に解説
            </Link>
            も合わせて確認すると、応募職種に必要なスキル整理が進みます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>

        <motion.section
          id="resume-with-chatgpt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ChatGPTで職務経歴書を作る実践手順</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            職務経歴書でAIを使うときの要点は、文章生成ではなく「経験の構造化」に使うことです。下書き生成は速くても、評価されるのは事実と成果の精度です。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              ChatGPTにいきなり「職務経歴書を書いて」と依頼すると、一般論が混ざりやすくなります。先に経験メモを整理してから段階的に依頼すると、誇張や曖昧な表現を減らせます。
              実務では「材料収集→骨組み作成→数値改善→求人別編集」の4段階で進める方法が安定します。
            </p>
            <p>
              書類選考で通過率を左右するのは、業務の難易度よりも「成果が再現可能かどうか」です。成果を定量化しにくい職種でも、
              「誰に、どの課題に、どう対応して、何が変わったか」を記述すれば評価可能な情報になります。
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {resumeSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">職務経歴書で使えるChatGPTプロンプト例</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            以下の4本を順番に使うと、初稿から応募用の仕上げまで一貫して進められます。入力情報は必ず実データで更新してください。
          </p>
          <div className="mt-6 space-y-6">
            {resumePrompts.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  {item.prompt}
                </pre>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-700">
            職務経歴書の実績をポートフォリオで補強したい場合は、
            <Link href="/academy/blog/ai-portfolio-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIスキルのポートフォリオ作り方ガイド
            </Link>
            も有効です。書類と成果物URLが一致すると、面接での説明負荷を下げられます。
          </p>
        </motion.section>

        <motion.section
          id="ai-company-research"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIで企業研究を深める実践手順</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            企業研究でAIを使う目的は情報量を増やすことではなく、志望動機の解像度を上げることです。要約と比較を分けて実行すると、面接で話せる内容に変換しやすくなります。
          </p>
          <div className="mt-6 space-y-4 rounded-lg border border-gray-200 p-5">
            <p className="text-sm font-semibold text-gray-900">企業研究の進め方（4ステップ）</p>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {researchSteps.map((step) => (
                <li key={step} className="pl-1 marker:text-gray-500">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              企業研究でよく起きる失敗は、情報を集めるだけで終わることです。面接では情報量そのものより、「なぜその企業を選ぶのか」が問われます。
              そのため、収集した情報を志望動機に変換する工程を必ず入れてください。
            </p>
            <p>
              もう一つのポイントは、競合比較です。比較対象がないと、志望理由が一般論になりやすくなります。競合2〜3社を固定し、差分を明確にすると面接官が評価しやすい説明になります。
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">企業研究に使うプロンプト例</h3>
          <div className="mt-4 space-y-6">
            {researchPrompts.map((item) => (
              <div key={item.title} className="rounded-lg border border-blue-200 bg-blue-50 p-5">
                <p className="text-sm font-semibold text-blue-900">{item.title}</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  {item.prompt}
                </pre>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-700">
            職種転換を伴う転職では、実際の検討パターンを
            <Link href="/academy/blog/ai-career-change-cases" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI時代のキャリアチェンジ事例
            </Link>
            で確認してから企業研究すると、志望理由の一貫性を作りやすくなります。
          </p>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>

        <motion.section
          id="ai-interview-prep"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AIで面接対策を仕上げる実践手順</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            面接対策でAIを使う最大のメリットは、質問の想定幅を広げて反復回数を増やせることです。想定Q&Aは「質問生成」と「回答改善」を分けて実行すると精度が上がります。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              面接で詰まる原因は、知識不足より準備不足であることが多くあります。特に転職では、応募理由と過去実績の接続が弱いと、回答の説得力が落ちます。
              そのため、企業研究メモと職務経歴書をAIに渡して、質問を具体化する工程が有効です。
            </p>
            <p>
              生成された回答は必ず声に出して確認してください。読みやすい文章でも、口頭では長すぎることがあります。1分回答の型に整えるだけで、本番の回答品質は安定します。
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">想定Q&A生成プロンプト（5例）</h3>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            以下の5例を用途別に使い分けると、一次面接から最終面接までの準備を網羅できます。
          </p>
          <div className="mt-6 space-y-6">
            {interviewPrompts.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-1 text-xs leading-6 text-gray-600">目的: {item.objective}</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  {item.prompt}
                </pre>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">面接対策でAIを使うときの注意点</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-900">
              <li className="pl-1 marker:text-amber-700">会社名、実績数値、役職名などは必ず原資料で再確認する。</li>
              <li className="pl-1 marker:text-amber-700">想定回答を丸暗記せず、キーワードで覚えて自然に話せる形にする。</li>
              <li className="pl-1 marker:text-amber-700">AIの提案が自分の経験とずれる場合は、経験事実を優先して修正する。</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="showcase-ai-usage"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">AI活用を転職先にアピールする方法</h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            面接でAI活用を評価につなげるには、ツールの知識量ではなく、業務成果に変換した経験として語ることが必要です。伝える順序を固定すると、説得力が上がります。
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-700">
            <p>
              「ChatGPTを使えます」という表現だけでは、採用側は業務貢献を判断できません。評価されるのは、課題を定義し、AIを適切に使い、成果を出し、再現可能な形にした経験です。
              以下のフレームで整理すると、職種を問わず説明しやすくなります。
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {appealFramework.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">面接でそのまま使える回答テンプレート</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              「前職では〇〇業務に毎週△時間かかっていました。そこでChatGPTを使って初稿作成を自動化し、私が事実確認と最終編集を行う運用に変更しました。
              結果として作業時間を△時間から□時間に短縮し、レビュー品質も維持できました。手順を文書化したため、チーム内でも再現できる状態です。」
            </p>
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-700">
            40代以降で転職準備を進める場合は、
            <Link href="/academy/blog/reskilling-over-40" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              40代・50代からのAIリスキリング完全ガイド
            </Link>
            の学習設計と併用すると、経験を活かしたアピール軸を作りやすくなります。
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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            転職活動でのAI活用について、実務でよく相談されるポイントをQ&A形式でまとめました。
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
              <Link href="/academy/blog/skills-for-ai-era-career" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代に必要なスキルを職種別に解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-career-change-cases" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI時代のキャリアチェンジ事例集
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-portfolio-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIスキルのポートフォリオ作り方2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/reskilling-over-40" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                40代・50代からのAIリスキリング完全ガイド
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-10 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">📩 LINEで毎週AI知識を配信中</p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            LINEで週1AI通信を受け取る（無料）
          </a>
        </motion.section>
      </article>
    </main>
  );
}
