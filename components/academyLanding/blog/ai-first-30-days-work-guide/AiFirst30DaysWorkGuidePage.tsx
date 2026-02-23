"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["生成AI 仕事 始め方", "AI 最初の30日", "ChatGPT 業務活用"] as const;

const tocItems = [
  { id: "answer-box", label: "この記事で分かること / 結論" },
  { id: "roadmap", label: "30日ロードマップ早見表" },
  { id: "week1", label: "Week 1：AIに聞く習慣をつける" },
  { id: "week2", label: "Week 2：定番タスクにAIを組み込む" },
  { id: "week3", label: "Week 3：AIの限界を知る" },
  { id: "week4", label: "Week 4：チーム・会社に広げる" },
  { id: "before-after", label: "30日後ビフォーアフター" },
  { id: "common-mistakes", label: "よくある失敗と対処法5選" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const roadmapTable = [
  { week: "Week 1", theme: "AIに聞く習慣をつける", goal: "1日1回AIに質問する習慣を作る" },
  { week: "Week 2", theme: "定番タスクにAIを組み込む", goal: "議事録・メール・調査の3タスクでAIを使う" },
  { week: "Week 3", theme: "AIの限界を知る", goal: "ハルシネーション対策とツール使い分けを身につける" },
  { week: "Week 4", theme: "チーム・会社に広げる", goal: "上司に成果報告し、チーム勉強会を企画する" },
] as const;

const week1Steps = [
  {
    day: "Day 1〜2",
    title: "アカウント作成と最初の質問",
    detail: "ChatGPT（chat.openai.com）またはClaude（claude.ai）で無料アカウントを作成。まずは「今日の天気を教えて」「自己紹介して」など、プレッシャーのない質問から始めます。操作画面に慣れることが目的です。",
  },
  {
    day: "Day 3〜4",
    title: "メールの下書きを頼んでみる",
    detail: "実際に送る予定のメールをAIに下書きさせます。「取引先への納期確認メール」「社内への会議案内」など、失敗しても影響が小さいものから。出力をそのまま使うのではなく、必ず自分で修正してから送信する習慣をつけます。",
  },
  {
    day: "Day 5〜7",
    title: "追加質問のコツを覚える",
    detail: "AIの回答が微妙なとき、「もっと具体的に」「箇条書きにして」「初心者向けに書き直して」と追加で指示を出す練習をします。1回の質問で完璧を目指さず、会話を重ねて回答を磨くのがコツです。",
  },
] as const;

const week1Prompts = [
  {
    label: "メール下書き",
    prompt: `あなたはビジネスメールの作成を手伝うアシスタントです。

以下の条件で取引先への納期確認メールを作成してください。

【条件】
・目的：納品予定日の確認
・相手：取引先の担当者（名前は「ご担当者様」で可）
・トーン：丁寧・簡潔
・文字数：200文字以内
・署名は不要`,
  },
  {
    label: "情報の整理",
    prompt: `以下のメモを、上司に報告できる形に整理してください。

【メモ】
（ここに箇条書きのメモを貼り付ける）

【出力形式】
・要点：3行以内
・詳細：箇条書き
・次のアクション：1〜2項目`,
  },
] as const;

const week2Tasks = [
  {
    task: "議事録の要約",
    detail: "会議後のメモやテキスト書き起こしをAIに渡して、「決定事項」「次のアクション」「未解決の論点」に分類させます。固有名詞は仮名に置き換えてから入力してください。",
  },
  {
    task: "プロンプトテンプレートを3つ作る",
    detail: "自分がよく使うタスクを3つ選び、それぞれのプロンプトをテンプレート化します。メモアプリやスプレッドシートに保存し、次回はコピペで使えるようにします。",
  },
  {
    task: "調べものをAIに手伝わせる",
    detail: "「〇〇について教えて」ではなく、「〇〇のメリットとデメリットを3つずつ、根拠付きで表にして」のように出力形式を指定すると、実務で使いやすい形で返ってきます。",
  },
] as const;

const week2Prompts = [
  {
    label: "議事録の要約",
    prompt: `以下の会議メモを整理してください。

【会議メモ】
（ここに会議メモを貼り付ける。人名はA氏・B氏などに置換済み）

【出力形式】
## 決定事項
- （箇条書き）

## 次のアクション
| 担当 | タスク | 期限 |

## 未解決の論点
- （箇条書き）`,
  },
  {
    label: "プロンプトのテンプレート化",
    prompt: `以下のタスクをAIに頼むためのプロンプトテンプレートを作ってください。

【タスク】
（例：週次報告メールの作成）

【テンプレートの要件】
・{変数}の形で、毎回変わる部分を穴埋めにする
・出力形式を固定する
・1回コピペすれば使える形にする`,
  },
  {
    label: "比較調査の依頼",
    prompt: `以下のテーマについて、メリットとデメリットを比較してください。

【テーマ】
（例：リモートワークとオフィスワーク）

【出力形式】
| 観点 | メリット | デメリット |
の表形式で、各3〜5項目。
それぞれ1行30文字以内で簡潔に。`,
  },
] as const;

const week3Topics = [
  {
    title: "ハルシネーション（もっともらしいウソ）を見抜く",
    detail: "AIは存在しない論文、架空の統計データ、間違った法律条文を自信たっぷりに出力することがあります。「本当にこの情報は正しいか？」と必ず一次情報源で裏を取る習慣をつけましょう。数字・固有名詞・日付が出てきたら特に注意です。",
    tip: "Perplexityなど検索特化AIを使うと、出典リンク付きで回答が返るため、ファクトチェックの手間を減らせます。",
  },
  {
    title: "ツールの使い分けを覚える",
    detail: "2026年2月時点の主要ツールの得意分野：ChatGPT（汎用・GPTs拡張が豊富）、Claude（長文処理・日本語の自然さ）、Gemini（Google連携・マルチモーダル）、Perplexity（検索・出典付き回答）。最初の1ヶ月はメインツール1つに絞り、余裕が出てきたら2つ目を試すのがおすすめです。",
    tip: "「同じ質問を2つのAIに投げて回答を比較する」と、ハルシネーション対策にもなります。",
  },
  {
    title: "AIに任せていい仕事・自分でやるべき仕事の線引き",
    detail: "AIが得意なのは「下書き・整理・変換・要約」。苦手なのは「最新情報の正確な取得・社内事情を踏まえた判断・感情を伴うコミュニケーション」。AIの出力は常に「素材」であり、最終判断は自分が行う——この原則を30日で体に染み込ませます。",
    tip: "迷ったら「この出力をそのまま上司に見せられるか？」と自問してみてください。Noなら自分で手を入れるポイントがあるはずです。",
  },
] as const;

const week3Prompts = [
  {
    label: "ファクトチェック依頼",
    prompt: `あなたは事実確認の専門家です。
以下の文章に含まれる「数字」「固有名詞」「日付」を抜き出し、
それぞれについて正誤の判定と確認すべき一次情報源を教えてください。

【確認対象の文章】
（ここにAIが生成した文章を貼り付ける）

【出力形式】
| 項目 | 記載内容 | 正誤 | 確認先 |`,
  },
  {
    label: "AIに任せる判断",
    prompt: `以下のタスクについて、「AIに任せてよい部分」と
「自分で判断すべき部分」に分けてください。

【タスク】
（例：来週の営業会議の資料作成）

【出力形式】
## AIに任せてよい部分
- （箇条書き＋理由）

## 自分で判断すべき部分
- （箇条書き＋理由）`,
  },
] as const;

const week4Actions = [
  {
    title: "上司への成果報告を用意する",
    detail: "30日間でAIを使って効率化できたタスクと、削減できた時間の概算をまとめます。「議事録整理が30分→10分になった」のように、具体的な数字で伝えると説得力が出ます。",
  },
  {
    title: "チーム勉強会を企画する",
    detail: "15分のランチ勉強会でOK。「私が30日やってみて分かったこと」というテーマで、うまくいったプロンプト3つと失敗談1つを共有するだけで、チームのAI活用が一気に進みます。",
  },
  {
    title: "セキュリティルールを整理する",
    detail: "自分が30日間で学んだ「入力してはいけない情報」「仮名化のやり方」「出力の確認手順」を1枚のチェックリストにまとめます。チーム共有用の資料にもなります。",
  },
] as const;

const week4Prompts = [
  {
    label: "成果報告メモの作成",
    prompt: `以下の情報をもとに、上司向けのAI活用成果報告メモを作成してください。

【報告内容】
・期間：直近1ヶ月
・使用ツール：（例：ChatGPT）
・効率化できたタスク：
  1.（例：議事録整理 30分→10分）
  2.（例：メール下書き 15分→5分）
  3.（例：調査まとめ 60分→20分）

【出力形式】
・A4半ページ程度
・冒頭に要約3行
・具体的な時間削減の数字を含める
・今後の展開案を1〜2行`,
  },
  {
    label: "勉強会スライド案",
    prompt: `15分のチーム勉強会用スライド構成を作ってください。

【テーマ】生成AIを30日使ってみて分かったこと
【対象】AIをまだ使ったことがない同僚5〜10人
【含めたい内容】
・AIでできること・できないことの実感
・うまくいったプロンプト例3つ
・失敗談1つと対処法
・明日から試せるアクション1つ

【出力形式】
スライドごとに「タイトル／内容／想定時間」を表形式で`,
  },
] as const;

const beforeAfterItems = [
  {
    task: "メールの下書き",
    before: "1通15〜20分。文面を一から考え、敬語のチェックに時間がかかる",
    after: "1通3〜5分。AIの下書きを修正するだけ。敬語チェックもAIに頼める",
  },
  {
    task: "議事録の整理",
    before: "30分〜1時間。メモの読み返しと構造化に苦戦",
    after: "10〜15分。メモを貼り付ければ「決定事項・次アクション・論点」に自動分類",
  },
  {
    task: "調べもの・情報整理",
    before: "検索結果を10ページ読んで自分でまとめる。1件30〜60分",
    after: "AIに要点と比較表を出させて確認・修正。1件10〜20分",
  },
  {
    task: "プレゼン資料の構成",
    before: "白紙から構成を考えるのに1〜2時間",
    after: "AIにアウトライン案を出させて調整。30分〜1時間",
  },
  {
    task: "分からないことの質問",
    before: "先輩に聞くタイミングを伺って待つ。半日〜1日かかることも",
    after: "まずAIに聞いて概要を把握→先輩には具体的な確認だけ。即時〜数分",
  },
] as const;

const commonMistakes = [
  {
    mistake: "最初からプロンプトの完璧を目指す",
    why: "「正しい書き方」を調べるのに時間を使いすぎて、肝心の業務が進まない。",
    fix: "まずは日本語でざっくり指示。うまくいかなければ「もう少し〇〇にして」と追加指示するだけでOK。完璧な1回より、雑な3往復の方が良い結果になります。",
  },
  {
    mistake: "AIの回答をそのまま提出する",
    why: "事実誤認・表現の不自然さ・社内事情との齟齬に気づかないまま提出し、信頼を損なう。",
    fix: "AIの出力は「たたき台」。提出前に必ず事実確認と自分の言葉への書き換えを行う。特に数字・固有名詞・日付は要チェック。",
  },
  {
    mistake: "機密情報をそのまま入力する",
    why: "顧客名・案件金額・未発表情報を入力すると、情報漏えいリスクが発生する。",
    fix: "固有名詞は「A社」「Xプロジェクト」に置き換えてから入力。社内ルールを確認し、承認済みツールを使うのが基本。",
  },
  {
    mistake: "一度に複数ツールを試す",
    why: "ChatGPT・Claude・Gemini・Perplexityを同時に使い始めて、どれも中途半端になる。",
    fix: "最初の30日はメインツール1つに絞る。操作に慣れてから2つ目を比較検討する方が定着しやすい。",
  },
  {
    mistake: "うまくいったプロンプトを保存しない",
    why: "次回また同じ試行錯誤を繰り返し、「AIは手間がかかる」と感じて使わなくなる。",
    fix: "うまくいったプロンプトはメモアプリやスプレッドシートに即保存。週1回見返して改良すると、自分専用のプロンプト資産になる。",
  },
] as const;

export default function AiFirst30DaysWorkGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "生成AI最初の30日ガイド" },
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
                title="生成AIを仕事で使い始めた人の「最初の30日」完全ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            生成AIを仕事で使い始めた人の「最初の30日」完全ガイド
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIを使ってみたいけど、何から始めればいいか分からない」——そんなあなたに向けた、最初の30日間のロードマップです。
            週ごとにやることを区切り、コピペで使えるプロンプト例つきで解説します。
            先輩が後輩に「まずこれやってみて」と渡すつもりで書きました。30日後には「AIが使える人」として周囲から頼られる存在になれます。
          </p>
        </motion.header>

        <motion.section
          id="answer-box"
          className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-xl font-bold text-gray-900">この記事で分かること</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">生成AIを仕事で使い始める最初の30日を、週単位で迷わず進めるロードマップ</li>
            <li className="pl-1 marker:text-gray-500">メール・議事録・調査でそのまま使える実務向けプロンプトテンプレート</li>
            <li className="pl-1 marker:text-gray-500">途中で挫折しやすい失敗パターンと、続けるための具体的な対処法</li>
          </ul>
          <h3 className="mt-6 text-base font-semibold text-gray-900">この記事の結論</h3>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            30日で成果を出す鍵は、難しいことを学ぶより「毎日1回使う習慣」を先に作ることです。完璧なプロンプトは不要で、短い質問と追加指示を重ねるだけで、
            AIは実務で使える武器になります。
          </p>
        </motion.section>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            非エンジニア向けAI活用
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプロンプト入門
          </Link>
          ・
          <Link href="/academy/blog/ai-study-learning-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI勉強法ガイド
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* ロードマップ早見表 */}
        <motion.section
          id="roadmap"
          className="mt-10 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-lg font-bold text-slate-900">30日ロードマップ早見表</h2>
          <table className="mt-4 w-full min-w-[500px] border-collapse text-left text-sm leading-7 text-gray-700">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="py-2 pr-4 font-semibold text-gray-900">期間</th>
                <th className="py-2 px-4 font-semibold text-gray-900">テーマ</th>
                <th className="py-2 pl-4 font-semibold text-gray-900">ゴール</th>
              </tr>
            </thead>
            <tbody>
              {roadmapTable.map((row) => (
                <tr key={row.week} className="border-b border-slate-200 align-top">
                  <th className="py-3 pr-4 font-semibold text-gray-900 whitespace-nowrap">{row.week}</th>
                  <td className="py-3 px-4">{row.theme}</td>
                  <td className="py-3 pl-4">{row.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        {/* Week 1 */}
        <motion.section
          id="week1"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Week 1：AIに聞く習慣をつける
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最初の1週間は「とにかく毎日1回AIに何か聞く」だけでOKです。上手に使おうとしなくて大丈夫。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIは使えば使うほど「どう聞けばいい回答が返るか」が分かってきます。
            最初の1週間は質の高いプロンプトを書くことより、AIとのやり取りそのものに慣れることが目標です。
            LINEで友達にメッセージを送る感覚で始めてみてください。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">Day別の3ステップ</h3>
          <div className="mt-5 space-y-4">
            {week1Steps.map((item, index) => (
              <div key={item.day} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.day}：{item.title}
                  </p>
                </div>
                <p className="mt-3 pl-10 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">コピペで使えるプロンプト例</h3>
          <div className="mt-5 space-y-5">
            {week1Prompts.map((p) => (
              <div key={p.label} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-base font-semibold text-gray-900">{p.label}</h4>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700 border border-gray-100 whitespace-pre-wrap">
{p.prompt}
                </pre>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            ChatGPTとClaudeの違いや使い分けは、
            <Link
              href="/academy/blog/chatgpt-claude-beginners-guide"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              ChatGPT vs Claude 初心者向け比較ガイド
            </Link>
            で詳しく解説しています。
          </p>
        </motion.section>

        {/* Mid CTA #1 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-first-30-days-work-guide" />
        </motion.section>

        {/* Week 2 */}
        <motion.section
          id="week2"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Week 2：定番タスクにAIを組み込む
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            2週目は「毎日やってる作業」にAIを組み込みます。議事録・メール・調査の3つが鉄板です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Week 1で「AIと会話すること」に慣れたら、次は実際の業務で使ってみます。
            ポイントは「AIにゼロから作らせる」のではなく、「自分の素材（メモ・情報）をAIに整理させる」こと。
            この使い方なら、固有名詞を仮名に変えるだけで安全に業務活用できます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">Week 2でやる3つのこと</h3>
          <div className="mt-5 space-y-4">
            {week2Tasks.map((item, index) => (
              <div key={item.task} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-harmony text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-gray-900">{item.task}</p>
                </div>
                <p className="mt-3 pl-10 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">コピペで使えるプロンプト例</h3>
          <div className="mt-5 space-y-5">
            {week2Prompts.map((p) => (
              <div key={p.label} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-base font-semibold text-gray-900">{p.label}</h4>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700 border border-gray-100 whitespace-pre-wrap">
{p.prompt}
                </pre>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            業務別のプロンプトテンプレートをもっと見たい方は、
            <Link
              href="/academy/blog/prompt-template-for-work"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              仕事で使えるプロンプトテンプレート集
            </Link>
            も参考にしてください。
          </p>
        </motion.section>

        {/* Week 3 */}
        <motion.section
          id="week3"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Week 3：AIの限界を知る
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            3週目は「AIにできないこと」を知る週です。限界を知ることで、逆にAIを安全に使いこなせるようになります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIを2週間使うと「便利だな」と感じる反面、「あれ、この情報は本当？」「思ったのと違う回答が返ってきた」と気づく場面が増えてきます。
            それは正常な成長のサインです。Week 3ではAIの弱点を理解し、安全な使い方を身につけます。
          </p>

          <div className="mt-6 space-y-6">
            {week3Topics.map((topic) => (
              <div key={topic.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{topic.detail}</p>
                <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3">
                  <p className="text-xs leading-6 text-amber-800">
                    <span className="font-semibold">実践Tip：</span>
                    {topic.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">コピペで使えるプロンプト例</h3>
          <div className="mt-5 space-y-5">
            {week3Prompts.map((p) => (
              <div key={p.label} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-base font-semibold text-gray-900">{p.label}</h4>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700 border border-gray-100 whitespace-pre-wrap">
{p.prompt}
                </pre>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mid CTA #2 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-first-30-days-work-guide" />
        </motion.section>

        {/* Week 4 */}
        <motion.section
          id="week4"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Week 4：チーム・会社に広げる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            最後の週は「自分だけのAI活用」から「チームのAI活用」へステップアップします。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            30日間のAI活用で得た知見を、上司への報告とチームへの共有という形でアウトプットします。
            「AIを使えます」と言うだけでなく、具体的な成果を数字で示せると、周囲からの信頼度が格段に上がります。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">Week 4でやる3つのこと</h3>
          <div className="mt-5 space-y-4">
            {week4Actions.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-will-secondary text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                </div>
                <p className="mt-3 pl-10 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">コピペで使えるプロンプト例</h3>
          <div className="mt-5 space-y-5">
            {week4Prompts.map((p) => (
              <div key={p.label} className="rounded-lg border border-gray-200 p-5">
                <h4 className="text-base font-semibold text-gray-900">{p.label}</h4>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-3 text-xs leading-6 text-gray-700 border border-gray-100 whitespace-pre-wrap">
{p.prompt}
                </pre>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-700">
            社内へのAI導入提案の書き方は、
            <Link
              href="/academy/blog/ai-adoption-proposal-template"
              className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI導入提案書テンプレート
            </Link>
            に詳しくまとめています。
          </p>
        </motion.section>

        {/* ビフォーアフター */}
        <motion.section
          id="before-after"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            30日後ビフォーアフター
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            30日間AIを使い続けると、日常業務の進め方がこれだけ変わります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">タスク</th>
                  <th className="py-3 px-4 font-semibold text-red-700">Before（AI活用前）</th>
                  <th className="py-3 pl-4 font-semibold text-green-700">After（30日後）</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfterItems.map((row) => (
                  <tr key={row.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900 whitespace-nowrap">{row.task}</th>
                    <td className="py-4 px-4">{row.before}</td>
                    <td className="py-4 pl-4">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            あくまで目安ですが、定型業務だけで1日30分〜1時間の時間短縮が期待できます。
            浮いた時間を「考える仕事」や「人とのコミュニケーション」に使えるのが、AI活用の本当のメリットです。
          </p>
        </motion.section>

        {/* よくある失敗と対処法 */}
        <motion.section
          id="common-mistakes"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            よくある失敗と対処法5選
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            30日間で多くの人がやりがちな失敗パターンです。事前に知っておくだけで回避できます。
          </p>
          <div className="mt-6 space-y-4">
            {commonMistakes.map((item, index) => (
              <div key={item.mistake} className="rounded-lg border border-red-100 bg-red-50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-red-800">{item.mistake}</p>
                </div>
                <div className="mt-3 pl-9 space-y-2">
                  <p className="text-xs leading-6 text-gray-700">
                    <span className="font-semibold text-red-700">なぜ起きる：</span>
                    {item.why}
                  </p>
                  <div className="rounded-md border border-green-200 bg-white px-4 py-3">
                    <p className="text-xs leading-6 text-gray-700">
                      <span className="font-semibold text-green-700">対処法：</span>
                      {item.fix}
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
        </motion.section>

        {/* まとめ */}
        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Week 1は「毎日1回AIに聞く」だけでOK。まずは操作に慣れることが最優先。</li>
            <li className="pl-1 marker:text-gray-500">Week 2で議事録・メール・調査の3タスクにAIを組み込み、プロンプトテンプレートを3つ作る。</li>
            <li className="pl-1 marker:text-gray-500">Week 3でハルシネーション対策とツール使い分けを学び、AIの限界を理解する。</li>
            <li className="pl-1 marker:text-gray-500">Week 4で上司に成果を数字で報告し、チーム勉強会で知見を共有する。</li>
            <li className="pl-1 marker:text-gray-500">AIの出力は「たたき台」。事実確認と最終判断は必ず自分で行う。</li>
            <li className="pl-1 marker:text-gray-500">うまくいったプロンプトは即保存。30日で「自分専用のプロンプト資産」を作る。</li>
          </ul>
        </motion.section>

        {/* LINE CTA（まとめ後） */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="30日後のさらに先へ——AIスキルを本格的に身につけたい方へ"
            description="この記事の内容を実践して「もっと深く学びたい」と感じた方へ。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラム。まずはLINEで気軽にご相談ください。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/chatgpt-claude-beginners-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT vs Claude 初心者向け比較ガイド
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
                href="/academy/blog/new-employee-ai-starter-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                新入社員のAI活用スタートガイド
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
                href="/academy/blog/what-is-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIとは？初心者向けにわかりやすく解説
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
          </ul>
        </section>

        {/* 次のアクション */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            この記事を読んだ「今日」が、あなたのDay 1です。まずはAIに1つ質問するところから始めてみてください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              LINEで無料相談する（30秒）
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
