"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type ClaudeDispatchComputerUse2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const externalLinkClassName = "blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700";

const keywordTags = [
  "Claude Dispatch",
  "Claude Computer Use",
  "Anthropic 最新発表",
  "Claude Code",
] as const;

const tocItems = [
  { id: "answer-box", label: "結論（Answer Box）" },
  { id: "overview", label: "2026年3月の全体像" },
  { id: "computer-use", label: "Computer Useとは何か" },
  { id: "dispatch", label: "Dispatchとは何か" },
  { id: "recent-launches", label: "その他の主要発表" },
  { id: "trend-and-limits", label: "全体トレンドと制約" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerBoxPoints = [
  "Computer Useは2024年10月22日にAPI betaとして始まり、2026年3月はClaude DesktopのCowork / Claude Codeで使い道が一気に具体化した段階です。",
  "Dispatchは2026年3月17日にrelease notesで案内された、スマホとデスクトップをまたぐpersistent thread機能です。3月23日の公式ブログでComputer Useとの組み合わせが強く打ち出されました。",
  "2026年2〜3月のAnthropicは、モデル強化だけでなく、1M context、Code Review、Interactive Visualizations、web search改善までまとめて投入しています。",
  "流れの本質は、AIが返答するだけの段階から、PCを触ってバックグラウンドで仕事を進める段階へ移ったことです。",
] as const;

const timelineRows = [
  {
    date: "2026-02-05",
    update: "Claude Opus 4.6",
    note: "最上位モデルを更新。高難度推論とコーディングの上限を引き上げた。",
  },
  {
    date: "2026-02-17",
    update: "Claude Sonnet 4.6 / dynamic filtering",
    note: "Sonnet 4.6でcomputer use、agent planning、long contextが強化。同日にweb searchのdynamic filteringも公開。",
  },
  {
    date: "2026-02-25",
    update: "Vercept買収 / Scheduled Tasks",
    note: "Computer Useの知覚・操作精度強化に向けてVerceptを買収。Coworkには定期実行も追加。",
  },
  {
    date: "2026-03-09",
    update: "Code Review for Claude Code",
    note: "PRごとに複数エージェントが並列レビューする機能をTeam / Enterprise向けにresearch previewで提供。",
  },
  {
    date: "2026-03-12",
    update: "Interactive Visualizations",
    note: "チャット内でそのままインタラクティブな図表やダイアグラムを生成できるようになった。",
  },
  {
    date: "2026-03-13",
    update: "1M context GA",
    note: "Opus 4.6 / Sonnet 4.6の1M contextが一般提供になり、長文プレミアム料金が撤廃された。",
  },
  {
    date: "2026-03-17",
    update: "Dispatch",
    note: "スマホとデスクトップをまたぐpersistent threadをMax先行で開始。Proは2日以内に展開。",
  },
  {
    date: "2026-03-23",
    update: "Dispatch + Computer Use総合発表",
    note: "ClaudeがPCを操作し、外出中に投げたタスクを進める働き方を公式ブログで明確化。",
  },
] as const;

const computerUseRows = [
  {
    item: "何ができるか",
    detail: "画面を見て、クリック、スクロール、入力、アプリ起動、ブラウザ操作まで進められる。",
  },
  {
    item: "どこで使うか",
    detail: "2026年3月24日時点ではClaude Desktop上のCoworkとClaude Codeで利用可能。",
  },
  {
    item: "どう動くか",
    detail: "まずコネクタ、次にブラウザ、最後に画面操作を使う。最も正確な手段を優先する設計。",
  },
  {
    item: "許可の仕組み",
    detail: "新しいアプリに触れる前に、ユーザーの明示的な許可が必要。",
  },
  {
    item: "現在の制約",
    detail: "research previewで、macOSのみ。画面操作はコネクタより遅く、複雑な作業は再試行が必要になることがある。",
  },
  {
    item: "安全上の前提",
    detail: "金融、医療、法務などの機密性が高いアプリには使わない前提で案内されている。",
  },
] as const;

const computerUsePhases = [
  {
    title: "1. 画面を画像として認識する",
    body: "Claudeはスクリーンショットを見て、どこにボタンや入力欄があるかを判断します。API版ではこの流れをagent loopとして実装します。",
  },
  {
    title: "2. 次の行動を計画する",
    body: "今の画面から何をすべきかを考え、クリック、スクロール、入力、ショートカットなどの操作を順番に組み立てます。",
  },
  {
    title: "3. マウスとキーボードを制御する",
    body: "人間がPCを触るのと同じUI層で実行するため、APIや専用連携がないソフトでも自動化候補にできます。",
  },
] as const;

const computerUseCases = [
  {
    title: "開発: IDEを開いて修正し、テストしてPRまで進める",
    body: "Claude Codeと組み合わせると、コード修正だけでなく、テスト実行やブラウザ確認まで同じ流れで進めやすくなります。",
  },
  {
    title: "事務: ブラウザ調査からExcel集計、PDF化までつなぐ",
    body: "コネクタで取れない画面でも、画面操作で情報収集し、表計算ソフトや社内ツールに転記する流れを作れます。",
  },
  {
    title: "日常業務: メール確認、ファイル整理、レポート準備",
    body: "細かい手作業が多い仕事ほど恩恵があります。朝のルーティンや週次の定型整理に向いています。",
  },
] as const;

const recentLaunchCards = [
  {
    title: "Opus 4.6 / Sonnet 4.6",
    date: "2026-02-05 / 2026-02-17 / 2026-03-13",
    body:
      "2月はモデル自体の刷新、3月13日は1M contextの一般提供が焦点です。betaだった1M contextが正式になり、長文プレミアム料金がなくなりました。",
  },
  {
    title: "Code Review for Claude Code",
    date: "2026-03-09",
    body:
      "PRごとにエージェントのチームを走らせて深くレビューする機能です。平均レビュー時間は約20分で、Team / Enterprise向けresearch previewとして案内されています。",
  },
  {
    title: "Interactive Visualizations",
    date: "2026-03-12",
    body:
      "チャット中にその場で図表、フローチャート、インタラクティブな可視化を作れるようになりました。全プラン対象で、説明のわかりやすさを底上げします。",
  },
  {
    title: "Web search精度向上",
    date: "2026-02-17",
    body:
      "dynamic filteringにより、Claudeが検索結果を読み込む前にコードで情報を絞り込むようになりました。Anthropicの公表値では平均11%精度向上、入力トークンは24%削減です。",
  },
] as const;

const availabilityRows = [
  {
    feature: "Cowork本体",
    plans: "Pro / Max / Team / Enterprise",
    status: "利用可",
    note: "Claude Desktopでの有料プラン機能。Scheduled Tasksも同じ有料帯で利用可能。",
  },
  {
    feature: "Dispatch persistent thread",
    plans: "Pro / Max",
    status: "research preview",
    note: "2026-03-17にMax先行、Proは2日以内に段階展開。",
  },
  {
    feature: "Computer Use in Cowork / Claude Code",
    plans: "Pro / Max",
    status: "research preview",
    note: "2026-03-24時点ではmacOSのみ。Windowsはcoming soon。Team / Enterpriseは未対応。",
  },
  {
    feature: "Code Review for Claude Code",
    plans: "Team / Enterprise",
    status: "research preview",
    note: "GitHub PRに対してマルチエージェントで自動レビューを行う。",
  },
  {
    feature: "Interactive Visualizations",
    plans: "全プラン",
    status: "利用可",
    note: "チャット内表示に対応。図解や可視化の理解補助に向く。",
  },
  {
    feature: "1M context",
    plans: "Claude Platform / Claude Code Max・Team・Enterprise（一部）",
    status: "一般提供",
    note: "2026-03-13にGA。Opus 4.6はClaude Codeでも自動1M化が案内されている。",
  },
] as const;

const progressionPoints = [
  "Chatbot: 文章で答える",
  "Tool Use: APIやコネクタで外部ツールを使う",
  "Computer Use: GUIそのものを操作する",
  "Dispatch: その作業を外出中にも非同期で回す",
] as const;

const limitationPoints = [
  "画面操作はコネクタより遅く、複雑なタスクはやり直しが必要になることがある",
  "Claude Desktopアプリが起動していて、PCがスリープしていない必要がある",
  "明示的な許可やブロックリストはあるが、機密アプリには使わない前提で運用すべき",
  "Windows対応は公式にcoming soon。LinuxのClaude Desktop正式対応は2026-03-24時点で確認できない",
  "いきなり全自動化を狙うより、低リスク業務から段階導入する方が現実的",
] as const;

export default function ClaudeDispatchComputerUse2026Page({ faqItems }: ClaudeDispatchComputerUse2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Dispatch / Computer Use 2026まとめ" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Claude Dispatch / Computer Use 2026まとめ｜Anthropic最新発表【2026年3月】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claude Dispatch / Computer Use 2026まとめ｜Anthropic最新発表【2026年3月】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年3月24日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            2026年3月のClaudeで一番大きい変化は、AIが文章を返すだけでなく、PCを実際に操作して、しかも外出中でも仕事を進められる形が見えてきたことです。
            Anthropicは2026年2月から3月にかけて、
            <a href="https://www.anthropic.com/news/claude-sonnet-4-6" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              Claude Sonnet 4.6
            </a>
            、
            <a href="https://claude.com/blog/1m-context-ga" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              1M contextの一般提供
            </a>
            、
            <a href="https://claude.com/blog/code-review" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              Code Review for Claude Code
            </a>
            、
            <a href="https://claude.com/blog/claude-builds-visuals" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              Interactive Visualizations
            </a>
            まで連続で投入しました。本記事では、その中心にあるComputer UseとDispatchを軸に、初心者にもわかる形で全体像を整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">結論（Answer Box）</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {answerBoxPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-xs leading-6 text-gray-500">
            確認日: 2026-03-24。プラン提供範囲とresearch previewの条件は今後変わる可能性があります。
          </p>
        </motion.section>

        <motion.section
          id="overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">2026年3月の全体像: Claudeは「答えるAI」から「仕事を進めるAI」へ寄っている</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Anthropicの直近アップデートを並べると、単なるモデル比較ではなく、AIが継続的に業務を持つ方向へ製品が組み替わっていることが見えてきます。3月だけを見ても、会話、可視化、コードレビュー、長文処理、スマホからのタスク委譲が一本につながっています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">日付</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">発表</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">意味</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row) => (
                  <tr key={`${row.date}-${row.update}`} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.date}</th>
                    <td className="px-4 py-4">{row.update}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Claudeの基本像から整理したい場合は、
            <Link href="/academy/blog/claude-beginner-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude入門ガイド
            </Link>
            と、
            <Link href="/academy/blog/what-is-ai-agent" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIエージェントとは何か
            </Link>
            を先に読むと、今回の発表群の意味がつかみやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="computer-use"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Computer Useとは何か: APIがなくても、画面を見てPCを操作する</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Computer Useは、Claudeが画面を見て、どこを押すか考え、実際にマウスやキーボードを動かす機能です。Anthropicは
            <a
              href="https://www.anthropic.com/news/3-5-models-and-computer-use?lang=us"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClassName}
            >
              2024年10月22日
            </a>
            にこれをAPI betaとして公開し、2026年3月にはClaude Desktop上のCoworkとClaude Codeで、より実務に近い使い方を打ち出しました。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">内容</th>
                </tr>
              </thead>
              <tbody>
                {computerUseRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="py-4 pl-4">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {computerUsePhases.map((phase) => (
              <section key={phase.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{phase.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{phase.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            技術的には「screen perception」と「agent loop」が肝です。Anthropicの
            <a
              href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool"
              target="_blank"
              rel="noopener noreferrer"
              className={externalLinkClassName}
            >
              computer use docs
            </a>
            では、スクリーンショット取得、座標クリック、キー入力を反復してタスクを進める仕組みとして説明されています。利用者目線では「APIがないGUIも対象にできる」のが最大の違いです。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {computerUseCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            2026年2月25日には
            <a href="https://www.anthropic.com/news/acquires-vercept" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              Vercept買収
            </a>
            が発表され、AnthropicはOSWorldでの成績が2024年後半の15%未満から72.5%まで上がったと説明しました。まだ人間より速いわけではありませんが、単なる実験から「どの業務で使えるかを見極める段階」に入ったと見てよいです。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            Claude Codeでの活用イメージを先に見たい場合は、
            <Link href="/academy/blog/claude-code-intro" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Code入門
            </Link>
            も参照してください。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="dispatch"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Dispatchとは何か: スマホから仕事を投げて、デスクトップのClaudeに進めさせる</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Dispatchは、外出中でもClaudeに仕事を任せ続けるための受け渡し機能です。
            <a href="https://support.claude.com/en/articles/12138966-release-notes" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              release notes
            </a>
            では2026年3月17日にpersistent threadとして案内され、
            <a href="https://claude.com/blog/dispatch-and-computer-use" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              3月23日の公式ブログ
            </a>
            でComputer Useとの組み合わせが詳しく説明されました。
          </p>
          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">Dispatchで起きること</h3>
            <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="blog-li pl-1 marker:text-gray-500">Claudeアプリからタスクを送る</li>
              <li className="blog-li pl-1 marker:text-gray-500">同じ会話スレッドがデスクトップ側でも継続する</li>
              <li className="blog-li pl-1 marker:text-gray-500">PCが起きていれば、CoworkやClaude Codeがバックグラウンドで作業を進める</li>
              <li className="blog-li pl-1 marker:text-gray-500">戻ったときに、結果を同じスレッドで受け取れる</li>
            </ul>
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            ここで重要なのは、Dispatch単体ではただの「スマホからの指示送信」に見えても、Computer Useと組み合わせると意味が変わることです。Anthropicは公式ブログの中で、通勤中の朝ブリーフ、IDEでの修正からテスト・PR、3Dプリント進行管理などを例に出しています。つまり、会話の継続だけでなく、実際の作業継続が始まっています。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">通勤中に朝ブリーフを依頼</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                スマホから「今日のメール、Slack、カレンダーをまとめて」と投げて、出社前に下書きを受け取る流れです。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">外出中にIDE作業を進める</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                修正指示を送っておき、Claude Codeがローカル環境で変更、テスト、PR準備まで進める形が見えてきました。
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">週末に資料づくりを任せる</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                競合調査、表計算、図表作成を連鎖させると、単発プロンプトよりもまとまった成果物に近づきます。
              </p>
            </section>
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            なお、定期実行そのものは
            <a href="https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork" target="_blank" rel="noopener noreferrer" className={externalLinkClassName}>
              Scheduled Tasks
            </a>
            が担当します。Dispatchは「今この場で投げる」、Scheduled Tasksは「毎朝・毎週回す」と整理すると混乱しません。
          </p>
        </motion.section>

        <motion.section
          id="recent-launches"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">その他の主要発表: モデル強化だけでなく、周辺機能が一気に厚くなった</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            DispatchとComputer Useが目立ちますが、直近1〜2か月のAnthropicは、その周辺を支える機能も同時に強化しています。ここを一緒に見ると、単発機能ではなく「仕事を預けるための土台」を作っていると理解しやすくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recentLaunchCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-will-primary">{card.date}</p>
                <h3 className="blog-h3 mt-2 text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            モデルの詳細を追いたい場合は、
            <Link href="/academy/blog/claude-sonnet-4-6-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Sonnet 4.6ガイド
            </Link>
            と
            <Link href="/academy/blog/claude-opus-4-6-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Claude Opus 4.6ガイド
            </Link>
            で個別に確認できます。
          </p>
        </motion.section>

        <motion.section
          id="trend-and-limits"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">全体トレンドと制約: Chatbot → Tool Use → Computer Use → Dispatch</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            今回の流れを一言でまとめるなら、Claudeは「質問に答えるAI」から「ツールを選び、GUIも触り、途中で放っておいても仕事を進めるAI」へ進んでいます。これが2026年3月時点の一番重要な変化です。
          </p>
          <ol className="blog-ol mt-6 list-decimal space-y-3 pl-5 text-sm leading-7 text-gray-700">
            {progressionPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ol>
          <div className="mt-8 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">機能</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">対象プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">現状</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">補足</th>
                </tr>
              </thead>
              <tbody>
                {availabilityRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.feature}</th>
                    <td className="px-4 py-4">{row.plans}</td>
                    <td className="px-4 py-4">{row.status}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="blog-ul mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {limitationPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            ここまで来ると、Computer Useは将来的にRPAを置き換えるのか、という疑問が出てきます。現時点では、完全置き換えとまでは言えません。速度も安定性もまだ人間より弱いからです。ただし、従来のRPAが苦手だった「例外処理」「画面の読み取り」「複数ツールをまたぐ判断」をClaudeが担当できるなら、RPAの上位レイヤーや代替候補になる土台は見えてきました。
          </p>
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

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="mb-4 scroll-mt-28 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/claude-sonnet-4-6-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Sonnet 4.6使い方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-opus-4-6-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Opus 4.6使い方ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Code入門
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/what-is-ai-agent" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIエージェントとは何か
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="blog-h2 mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作だけを学ぶ場ではありません。生成AI活用力を実務で使える判断軸に変えながら、自己理解とキャリアデザインを深め、仲間と共に学び続ける環境まで一体で設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">生成AI活用力: どの業務にAIを当てるべきかを判断し、成果につなげる</li>
            <li className="blog-li pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を整理し、次の一歩を設計する</li>
            <li className="blog-li pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働を通じて、実務変化を継続しやすくする</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの学習設計を見る
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
