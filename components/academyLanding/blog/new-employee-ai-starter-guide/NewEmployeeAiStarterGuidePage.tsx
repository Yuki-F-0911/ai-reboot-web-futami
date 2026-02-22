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

type NewEmployeeAiStarterGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const tocItems = [
  { id: "before-you-start", label: "使い始める前に確認すること" },
  { id: "week1-basics", label: "第1週：生成AIの基礎を30分でつかむ" },
  { id: "week2-workplace-rules", label: "第2週：職場のAIルールと情報管理マナー" },
  { id: "week3-daily-tasks", label: "第3週：日常業務でAIを試す" },
  { id: "week4-habit", label: "第4週：プロンプトを磨いて習慣化する" },
  { id: "ai-usage-manners", label: "職場でやってはいけないAI活用6パターン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
  { id: "article-summary", label: "まとめ" },
] as const;

const keywordTags = ["新入社員 AI活用", "職場 生成AI マナー", "新社会人 ChatGPT"] as const;

const beforeStartChecklist = [
  "会社でAIツールの使用が許可されているか確認した",
  "利用可能なAIツール（社内承認済みのもの）を把握した",
  "業務上の機密情報・顧客情報をAIに入力しないことを理解した",
  "AIで作成した成果物は必ず自分で確認してから提出することを決めた",
  "不明点は上司・情報システム部門に確認する意識を持った",
] as const;

const week1Tasks = [
  {
    day: "1〜2日目",
    task: "アカウント作成と基本操作",
    detail: "ChatGPT または Claude の無料プランを開き、「こんにちは、自己紹介してください」など負荷の低い質問から始める。",
  },
  {
    day: "3〜4日目",
    task: "メール文面の下書き補助",
    detail: "実際の業務メール（固有名詞を仮名に置き換えた上で）を題材に、返信案を作成させて比較する。",
  },
  {
    day: "5〜7日目",
    task: "1タスクをAIで完了させる",
    detail: "議事録の整理、説明文のまとめなど、日常業務から1つ選んでAIを使って完成させる。修正を加えて提出。",
  },
] as const;

const informationRiskTable = [
  {
    category: "絶対に入力しない",
    examples: "顧客名・連絡先・取引金額、社員の個人情報、未発表の製品・戦略情報",
    reason: "外部サーバーに送信され、学習データに使われる可能性がある",
  },
  {
    category: "仮名化すれば入力可",
    examples: "「A社向けの提案書を要約して」（固有名詞を置換済み）、社内議事録（案件名・人名を伏せた状態）",
    reason: "具体的な機密情報が含まれない形なら、文章補助として活用しやすい",
  },
  {
    category: "問題なく入力できる",
    examples: "一般的な業務文書の型・テンプレート、公開情報の要約依頼、一般的な質問や学習用の確認",
    reason: "固有の機密情報を含まないため、利用リスクが低い",
  },
] as const;

const week3PromptExamples = [
  {
    task: "メール返信の下書き",
    prompt: "目的: 取引先への返信文を作る\n前提: 納期を2日延長したい\n制約: 丁寧語、150文字以内\n出力形式: 本文1案",
    point: "固有名詞（社名・担当者名）は入力せず、「先方」「担当者様」などの汎称に置き換えて使う。",
  },
  {
    task: "会議の議事録整理",
    prompt: "目的: 会議メモを共有用に整理する\n前提: 箇条書きのメモを渡す（人名・案件名は伏字済み）\n制約: 重要論点・決定事項・次アクションを分ける\n出力形式: 見出し付きMarkdown",
    point: "メモを貼り付ける前に、固有名詞を「〇〇担当者」「△△プロジェクト」などに置き換える手順を習慣にする。",
  },
  {
    task: "社内向け説明文の草案",
    prompt: "目的: 新しい業務フローを社内向けに説明する文章を作る\n前提: 対象はIT知識が少ない部門のメンバー\n制約: 200字以内、専門用語なし\n出力形式: 読みやすい段落形式",
    point: "AIの出力をそのまま使わず、自社の実態に合わせた修正・補足を必ず加える。",
  },
] as const;

const week4HabitTips = [
  "今週うまくいったプロンプトをメモアプリやスプレッドシートに保存する",
  "毎朝始業前の5分を「1タスクAIで試す時間」に固定する",
  "同期や先輩と「AIでこんなことができた」を週1回共有する",
  "定型業務が1つAI化できたら、次の業務タスクに範囲を広げる",
] as const;

const ngPatterns = [
  {
    pattern: "顧客名・案件名をそのまま貼り付ける",
    risk: "情報漏えいリスク。利用規約上、入力データが学習に使われる可能性がある。",
    alternative: "固有名詞を「A社」「プロジェクトX」などに置き換えてから入力する。",
  },
  {
    pattern: "AIの出力を確認せずにそのまま送信・提出する",
    risk: "事実誤認・不自然な表現・内容の欠落が起きても気づかない。",
    alternative: "必ず読み直し、事実確認と表現の調整を行ってから使う。",
  },
  {
    pattern: "会社が承認していないAIツールをこっそり使う",
    risk: "セキュリティポリシー違反になる可能性がある。発覚した場合のリスクが大きい。",
    alternative: "まず上司・情報システム部門に利用可否を確認する。",
  },
  {
    pattern: "複数のAIツールを同時に試して「どれも中途半端」になる",
    risk: "操作に慣れないまま終わり、業務への組み込みができない。",
    alternative: "最初の1ヶ月は1ツールだけに絞り、使い方を固めてから比較する。",
  },
  {
    pattern: "AIに頼りすぎて自分の判断を省略する",
    risk: "思考力・判断力の低下。誤った出力をそのまま採用するリスク。",
    alternative: "AIの出力は「素材」として扱い、自分の知識と照らし合わせて最終判断を行う。",
  },
  {
    pattern: "AI活用の成果を記録せず、再現できない",
    risk: "次回また同じ試行錯誤を繰り返す。習慣化につながらない。",
    alternative: "うまくいったプロンプトは保存し、週1回振り返る習慣をつける。",
  },
] as const;

const monthScheduleSummary = [
  { week: "第1週", focus: "AI基礎の理解と最初の1タスク", goal: "1つのAIチャットで1つの業務タスクを完了させる" },
  { week: "第2週", focus: "職場ルールの把握と情報管理マナー", goal: "入力してよい情報・してはいけない情報の基準を決める" },
  { week: "第3週", focus: "日常業務でのAI活用実践", goal: "メール・議事録など3タスクでAIを使った処理を経験する" },
  { week: "第4週", focus: "プロンプト磨きと習慣化", goal: "自分専用のプロンプトを1本作り、毎日使うルーティンを確立する" },
] as const;

export default function NewEmployeeAiStarterGuidePage({ faqItems }: NewEmployeeAiStarterGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "新入社員のAI活用スタートガイド" },
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
                title="新入社員のAI活用スタートガイド2026｜最初の1ヶ月でやること完全版"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            新入社員のAI活用スタートガイド2026｜最初の1ヶ月でやること完全版
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年4月1日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIを使いたいけど、職場で何をやっていいか分からない」という新入社員向けのガイドです。
            ツール選定より先に「職場でのAI活用マナー・情報管理の基本ルール」を把握する順序が重要です。
            このページでは、入社後の最初の1ヶ月を4週に区切り、週ごとのやることと注意点を具体的に整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        {/* 1ヶ月スケジュール早見表 */}
        <motion.section
          className="mt-10 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold text-slate-700">最初の1ヶ月スケジュール早見表</p>
          <table className="mt-4 w-full min-w-[500px] border-collapse text-left text-sm leading-7 text-gray-700">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-2 pr-4 font-semibold text-gray-900">期間</th>
                <th className="py-2 px-4 font-semibold text-gray-900">テーマ</th>
                <th className="py-2 pl-4 font-semibold text-gray-900">目標</th>
              </tr>
            </thead>
            <tbody>
              {monthScheduleSummary.map((row) => (
                <tr key={row.week} className="border-b border-slate-200 align-top">
                  <th className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{row.week}</th>
                  <td className="py-3 px-4">{row.focus}</td>
                  <td className="py-3 pl-4">{row.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* H2-1: 使い始める前に確認すること */}
        <motion.section
          id="before-you-start"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            使い始める前に確認すること
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初にやることは「ツールを入れる」より「職場のAIルールを確認する」ことです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            2026年時点では多くの企業が生成AIの利用ガイドラインを整備しています。一方で、明文化されていない会社もまだあります。
            ルールを知らずに使い始めると、意図せず情報セキュリティ上の問題を起こすリスクがあります。
            新入社員として最初にすべきことは、自社のAI利用方針を把握することです。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">入社後1週目に確認するチェックリスト</h3>
          <ul className="mt-5 space-y-3">
            {beforeStartChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-7 text-gray-700">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-harmony-light bg-harmony-lighter text-xs font-bold text-harmony">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            利用ガイドラインが見つからない場合は、上司または情報システム部門に「AIツールはどのように使えばいいですか？」と確認するのが最善です。
            積極的に確認する姿勢は、AI活用に前向きな職場では好意的に受け取られることが多いです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            生成AIの基本的な仕組みが分からない場合は、先に
            <Link
              href="/academy/blog/what-is-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              生成AIとは何か（初心者向け解説）
            </Link>
            を読んでおくと、ルール確認の際に担当者と話しやすくなります。
          </p>
        </motion.section>

        {/* LINE CTA #1 */}
        <motion.section
          className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-green-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* H2-2: 第1週 */}
        <motion.section
          id="week1-basics"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            第1週：生成AIの基礎を30分でつかむ
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            第1週の目標は「1つのAIチャットで1つの業務タスクを完了させる」ことです。複数ツールを同時に試すと習熟が散漫になります。まず1つに絞ります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            「どのツールを使えばいいか」で迷う時間が長くなりがちですが、最初は職場で承認されているツールを優先し、なければChatGPT（無料プラン）から始めるのが最も手間が少ないです。
            どれが「最強か」より「使い続けられるか」が定着の鍵です。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">第1週の3ステップ</h3>
          <div className="mt-5 space-y-4">
            {week1Tasks.map((item, index) => (
              <div key={item.day} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-will-primary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-gray-900">
                    {item.day}：{item.task}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-700 pl-10">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            この段階では「上手く使えない」と感じることも多いですが、それは正常です。
            AIへの指示（プロンプト）は練習を重ねるほど精度が上がります。
            最初は出力の良し悪しを判断する経験を積む期間と位置づけてください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            非エンジニアでもAIを使いこなすための心構えは、
            <Link
              href="/academy/blog/ai-for-non-engineers"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              文系・非エンジニアのAI活用ガイド
            </Link>
            に詳しくまとめています。
          </p>
        </motion.section>

        {/* H2-3: 第2週 */}
        <motion.section
          id="week2-workplace-rules"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            第2週：職場のAIルールと情報管理マナー
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「機密情報をAIに入力しない」「出力を事実確認せずに提出しない」の2点を守れば、リスクの大半は回避できます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            生成AIのチャットサービスは、入力したテキストが外部のサーバーに送信される仕組みです。
            多くのサービスではオプトアウト設定（学習に使わせない設定）も提供されていますが、
            顧客情報・社員の個人情報・未発表の事業計画などは、設定に関わらず入力しないのが基本です。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">入力情報の3分類</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">分類</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">具体例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">理由</th>
                </tr>
              </thead>
              <tbody>
                {informationRiskTable.map((row) => (
                  <tr key={row.category} className="border-b border-gray-200 align-top">
                    <th
                      className={`py-4 pr-4 font-semibold whitespace-nowrap ${
                        row.category === "絶対に入力しない"
                          ? "text-red-700"
                          : row.category === "仮名化すれば入力可"
                          ? "text-amber-700"
                          : "text-green-700"
                      }`}
                    >
                      {row.category}
                    </th>
                    <td className="py-4 px-4">{row.examples}</td>
                    <td className="py-4 pl-4">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            「機密情報かどうか分からない」と感じた場合は、入力しない判断が安全側です。
            確認が取れていない情報をAIに入れるより、業務を少し手動で処理する方が組織への影響は小さくなります。
          </p>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800">実践：仮名置換テンプレート</p>
            <pre className="mt-3 overflow-x-auto rounded bg-white p-3 text-xs leading-6 text-gray-700 border border-amber-100">
{`【置換前】
「株式会社〇〇の田中様より、2026年4月末まで
に新製品Aの提案書を送るよう依頼が来ています」

【置換後】
「A社のB様より、1ヶ月後までに製品提案書を
送るよう依頼が来ています」`}
            </pre>
            <p className="mt-3 text-xs leading-6 text-amber-800">
              会社名・個人名・製品名・日付を汎称に変えてから入力すると、同等の補助を受けられます。
            </p>
          </div>
        </motion.section>

        {/* LINE CTA #2 */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base font-semibold text-orange-800">
            📩 LINEで毎週AI知識を配信中
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
          >
            今すぐ無料で登録する（30秒）
          </a>
        </motion.section>

        {/* H2-4: 第3週 */}
        <motion.section
          id="week3-daily-tasks"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            第3週：日常業務でAIを試す（メール・議事録・調査）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            第3週は「再現性のあるタスク」でAIを使います。毎日繰り返す業務から1つを選び、AIでの処理手順を固めます。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            新入社員の日常業務で特にAIとの相性が良いのは、メール返信・議事録整理・情報収集の3タスクです。
            これらは「素材（メモ・事実）を整える」作業が多く、AIが補助しやすい特性があります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">業務別プロンプト例</h3>
          <div className="mt-5 space-y-6">
            {week3PromptExamples.map((example, index) => (
              <div key={example.task} className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                    {index + 1}
                  </span>
                  <h4 className="text-base font-semibold text-gray-900">{example.task}</h4>
                </div>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700 border border-gray-100">
{example.prompt}
                </pre>
                <div className="mt-3 flex items-start gap-2">
                  <span className="text-xs font-semibold text-will-primary">ポイント</span>
                  <p className="text-xs leading-6 text-gray-700">{example.point}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            プロンプトの書き方の基本と業務別テンプレートは、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            にカテゴリ別でまとめています。コピーして使えるテンプレートを参考にしてください。
          </p>
        </motion.section>

        {/* H2-5: 第4週 */}
        <motion.section
          id="week4-habit"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            第4週：プロンプトを磨いて習慣化する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            第4週は「プロンプトを磨く」週です。同じタスクを違う指示で試し、自分専用のテンプレートを1本作ります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIの習熟度は「使った回数」より「試行と記録のサイクルを回した数」で決まります。
            うまくいったプロンプトをメモに残し、再利用する習慣が1ヶ月後の差につながります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">習慣化のための4つのアクション</h3>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
            {week4HabitTips.map((tip) => (
              <li key={tip} className="pl-1 marker:text-gray-500">
                {tip}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            1ヶ月後に「AIで何ができるようになったか」を振り返り、次の3ヶ月の学習プランを考えると実務活用が加速します。
            学習の全体像は
            <Link
              href="/academy/blog/how-to-learn-generative-ai"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              社会人のための生成AI学習ロードマップ
            </Link>
            で確認できます。
          </p>
        </motion.section>

        {/* H2-6: NG パターン */}
        <motion.section
          id="ai-usage-manners"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            職場でやってはいけないAI活用6パターン
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            新入社員がやりがちなNG行動を事前に把握しておくことで、入社後のトラブルを防げます。
          </p>
          <div className="mt-6 space-y-4">
            {ngPatterns.map((item, index) => (
              <div key={item.pattern} className="rounded-lg border border-red-100 bg-red-50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                    NG{index + 1}
                  </span>
                  <p className="text-sm font-semibold text-red-800">{item.pattern}</p>
                </div>
                <div className="mt-3 pl-9 space-y-2">
                  <p className="text-xs leading-6 text-gray-700">
                    <span className="font-semibold text-red-700">リスク：</span>
                    {item.risk}
                  </p>
                  <div className="rounded-md border border-green-200 bg-white px-4 py-3">
                    <p className="text-xs leading-6 text-gray-700">
                      <span className="font-semibold text-green-700">対処法：</span>
                      {item.alternative}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
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

          {/* LINE CTA #3（FAQ末尾） */}
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <p className="text-base font-semibold text-green-800">
              📩 LINEで毎週AI知識を配信中
            </p>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
            </p>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
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
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-for-non-engineers"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link
                href="/academy"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIリブートアカデミー TOP
              </Link>
            </li>
            <li>
              <Link
                href="/academy/seminars"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                無料セミナー一覧
              </Link>
            </li>
          </ul>
        </section>

        {/* まとめ */}
        <motion.section
          id="article-summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">AIを使い始める前に、職場のAI利用ガイドラインと情報管理ルールを確認する。</li>
            <li className="pl-1 marker:text-gray-500">第1週は1つのAIチャットで1つの業務タスクを完了させることだけを目標にする。</li>
            <li className="pl-1 marker:text-gray-500">機密情報・顧客情報・未発表情報は絶対に入力しない。固有名詞を仮名に置き換えてから活用する。</li>
            <li className="pl-1 marker:text-gray-500">第3週からメール・議事録・調査の3タスクでAIを実務に組み込む。</li>
            <li className="pl-1 marker:text-gray-500">AIの出力は必ず自分で読んで確認し、最終的な判断は自分が行う。</li>
            <li className="pl-1 marker:text-gray-500">うまくいったプロンプトを記録し、1ヶ月で自分専用テンプレートを1本作る。</li>
          </ul>
        </motion.section>

        {/* 次のアクション */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="cta" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            AI活用をさらに前に進めたい方へ。無料セミナーやアカデミーの全体像から、次の一歩を選べます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              アカデミーTOPへ
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
