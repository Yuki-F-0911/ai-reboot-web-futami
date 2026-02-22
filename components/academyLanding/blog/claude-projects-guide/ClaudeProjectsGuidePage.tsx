"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import MidArticleCtaBox from "@/components/blog/MidArticleCtaBox";
import LineCtaBox from "@/components/blog/LineCtaBox";
import {
  ArticleH2,
  ArticleH3,
  SummaryBox,
  RichTable,
  RichFAQ,
  Callout,
} from "@/components/blog/ArticleBody";

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

const keywordTags = [
  "Claude Projects",
  "Claude Pro 使い方",
  "AI コンテキスト管理",
  "GPTs 比較",
  "AI 仕事術",
] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-projects", label: "Claude Projectsとは？" },
  { id: "vs-normal-chat", label: "通常の会話との違い" },
  { id: "how-to-start", label: "始め方（Pro限定機能）" },
  { id: "how-to-use", label: "実際の使い方：ステップバイステップ" },
  { id: "use-cases", label: "特に役立つシーン8選" },
  { id: "vs-gpts", label: "ChatGPT GPTsとの比較" },
  { id: "best-practices", label: "ベストプラクティス5つ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
] as const;

const summaryItems = [
  "Claude Projectsはプロジェクト単位でファイル・指示・会話を一元管理できるPro限定機能。毎回資料をアップロードする手間がゼロになる",
  "通常の会話は「その場かぎり」。Projectsは文脈を保ったまま何度でも続きから作業できる",
  "プロジェクト作成→ナレッジ追加→システムプロンプト設定の3ステップで即使える",
  "書籍執筆・法務レビュー・研究・採用など継続的な作業に絶大な効果を発揮",
  "GPTsとの違いは「自分の資料を読み込ませる深さ」。外部APIが不要な業務はProjectsが最適",
] as const;

const comparisonRows = [
  {
    item: "コンテキストの持続",
    normal: "会話終了でリセット",
    projects: "プロジェクトが続く限り保持",
  },
  {
    item: "資料のアップロード",
    normal: "毎回手動でアップロード",
    projects: "一度追加すれば自動で参照",
  },
  {
    item: "カスタム指示",
    normal: "都度入力が必要",
    projects: "プロジェクトに永続的に保存",
  },
  {
    item: "会話の整理",
    normal: "すべて同一リストに混在",
    projects: "プロジェクト別に分類・管理",
  },
  {
    item: "チーム共有",
    normal: "不可",
    projects: "Team・Enterpriseプランで可能",
  },
  {
    item: "利用可能プラン",
    normal: "無料・Pro両方",
    projects: "Pro・Max・Team・Enterprise限定",
  },
] as const;

const useCaseRows = [
  {
    scene: "書籍・論文執筆",
    detail: "原稿・参考文献をナレッジに追加し、章ごとに続きから執筆",
    effect: "文脈のブレがなくなり一貫したトーンを維持",
  },
  {
    scene: "法務文書レビュー",
    detail: "契約書テンプレート・社内ガイドラインを登録して逐次確認",
    effect: "チェックリストを毎回渡す手間が不要",
  },
  {
    scene: "市場調査・リサーチ",
    detail: "調査レポート・競合分析資料を蓄積しながら深堀り",
    effect: "新しい情報を追加するたびに全体像を再整理",
  },
  {
    scene: "採用・面接設計",
    detail: "求人票・評価基準・過去の面接メモをひとまとめ",
    effect: "一貫した採用基準で評価コメントを作成",
  },
  {
    scene: "コードレビュー",
    detail: "コーディング規約・過去のPRコメントを登録",
    effect: "プロジェクト固有のルールに従ったレビューが毎回可能",
  },
  {
    scene: "マーケティング企画",
    detail: "ブランドガイドライン・ペルソナ・過去のコピーを保存",
    effect: "ブランドボイスを外さないコンテンツを量産",
  },
  {
    scene: "翻訳・ローカライズ",
    detail: "用語集・トーン指針・過去の翻訳例を蓄積",
    effect: "表記ゆれなく大量の翻訳を高速処理",
  },
  {
    scene: "顧客対応QA",
    detail: "FAQ・製品仕様書・クレーム対応履歴を登録",
    effect: "根拠ある回答案を即座に生成",
  },
] as const;

const vsGptsRows = [
  {
    axis: "主な用途",
    projects: "自分の資料・ドキュメントを読み込ませた継続作業",
    gpts: "外部APIやカスタムアクション連携",
  },
  {
    axis: "外部連携",
    projects: "なし（ナレッジのみ）",
    gpts: "WebブラウジングやAPI呼び出しが可能",
  },
  {
    axis: "共有・公開",
    projects: "基本は個人（Teamで共有可）",
    gpts: "ChatGPT Storeで公開可能",
  },
  {
    axis: "ファイル容量",
    projects: "最大200,000トークン",
    gpts: "ファイルサイズの上限あり（詳細はOpenAI仕様参照）",
  },
  {
    axis: "学習曲線",
    projects: "低い（UIから直感的に設定）",
    gpts: "中程度（Action設定にやや技術知識が必要）",
  },
  {
    axis: "費用",
    projects: "Claude Pro（約3,000円/月）",
    gpts: "ChatGPT Plus（約3,000円/月）",
  },
] as const;

const bestPractices = [
  {
    num: "01",
    title: "1プロジェクト＝1テーマに絞る",
    body: "書籍執筆と採用管理を同じプロジェクトに混在させると、Claudeの参照コンテキストが散漫になります。用途ごとに別プロジェクトを作ることで、より的確な回答が得られます。",
  },
  {
    num: "02",
    title: "システムプロンプトで「AI像」を定義する",
    body: "「あなたは私の法務専門アシスタントです。日本の商慣習を踏まえ、契約書のリスクを指摘してください」のように役割・制約・出力形式を明記すると回答品質が大きく向上します。",
  },
  {
    num: "03",
    title: "ナレッジは「最新版」だけを残す",
    body: "古いバージョンの資料が混在すると、Claudeが誤った情報を参照するリスクがあります。更新のたびに古いファイルを削除して、常にナレッジを最新の状態に保ちましょう。",
  },
  {
    num: "04",
    title: "会話ごとに目的を明確にする",
    body: "Projectsでは複数の会話スレッドを作れます。「第3章の執筆」「参考文献の整理」「タイトル案の検討」と目的別にスレッドを分けると、後から見返したときに作業の流れが追いやすくなります。",
  },
  {
    num: "05",
    title: "定期的に「プロジェクトレビュー」をする",
    body: "月1回、Projectのナレッジ・システムプロンプト・会話履歴を見直す時間を作りましょう。不要なファイルの整理とシステムプロンプトのアップデートが、長期的な活用の質を維持するコツです。",
  },
] as const;

const stepItems = [
  {
    step: "STEP 1",
    title: "Proプランに加入する",
    body: "claude.ai にアクセスし、左下のメニューから「Upgrade to Pro」を選択します。月額約20ドル（約3,000円）のProプランにアップグレードしてください。クレジットカードで即日開始できます。",
  },
  {
    step: "STEP 2",
    title: "新しいProjectを作成する",
    body: "左サイドバーに「Projects」メニューが表示されます。「+ New Project」をクリックし、プロジェクト名（例：「マーケティング企画2026」）を入力して作成します。",
  },
  {
    step: "STEP 3",
    title: "ナレッジにファイルを追加する",
    body: "プロジェクト画面の「Project Knowledge」タブを開きます。PDFや.txt・.docxなどのファイルをドラッグ＆ドロップでアップロードします。テキストを直接貼り付けることも可能です。",
  },
  {
    step: "STEP 4",
    title: "カスタム指示（システムプロンプト）を設定する",
    body: "「Custom Instructions」にClaude への役割や制約を書き込みます。例：「あなたは私のマーケティングアシスタントです。出力は必ず箇条書きで、各項目100字以内にしてください」",
  },
  {
    step: "STEP 5",
    title: "「+ New Conversation」で会話を開始する",
    body: "プロジェクト内で新しい会話を始めます。ナレッジに追加したファイルの内容が自動的にコンテキストに含まれているため、「先ほど追加した資料の3章についてまとめて」のように指示できます。",
  },
] as const;

export default function ClaudeProjectsGuidePage({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Claude Projectsとは？完全ガイド" },
          ]}
        />

        {/* ヘッダー */}
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
                title="Claude Projectsとは？使い方から活用術まで完全ガイド"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Claude Projectsとは？使い方から活用術まで完全ガイド
            <span className="mt-2 block text-2xl text-gray-700 sm:text-3xl">
              長い資料や仕事を一元管理する新習慣
            </span>
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月22日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Claudeを使っていて「毎回同じ資料をアップロードするのが面倒」「昨日の会話の続きからやりたいのに文脈がない」と感じたことはありませんか？
            そのストレスを一気に解消するのが、<strong>Claude Projects（プロジェクト）</strong>機能です。
            資料・指示・会話をプロジェクト単位でまとめることで、まるで専任のAIアシスタントを雇ったように継続的に仕事を進められます。
            この記事では、Projectsの仕組みから実際の始め方、特に効果的な8つのシーン、ChatGPTのGPTsとの違いまで、初心者にもわかりやすく解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          Claudeについてさらに学ぶなら
          <Link href="/academy/blog/claude-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Claude初心者ガイド
          </Link>
          ・
          <Link href="/academy/blog/gpt-vs-claude-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            GPT vs Claude 2026年比較
          </Link>
          ・
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPTプラン比較
          </Link>
          ・
          <Link href="/academy/blog/ai-tool-cost-guide-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            AI有料プラン費用対効果比較2026
          </Link>
          もあわせてご覧ください。
        </p>

        <ArticleTOC items={tocItems} />

        {/* 要点まとめ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div id="conclusion" className="scroll-mt-28">
            <SummaryBox title="要点まとめ（AIO向け：結論先出し）" items={summaryItems} />
          </div>
        </motion.section>

        {/* Claude Projectsとは？ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="what-is-projects">
            Claude Projectsとは？「プロジェクト」という概念でAIを使う革命
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Claude Projects（2024年6月リリース）は、Anthropicが提供するClaude Proプラン以上のユーザー向けに搭載された、<strong>AIとの作業をプロジェクト単位で管理する機能</strong>です。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            従来のClaude（および多くのAIチャットツール）は「会話セッション」ごとにコンテキストがリセットされる仕組みでした。新しいチャットを始めると、Claudeは直前の会話の内容を覚えていません。資料を使いたければ毎回アップロードし直し、どんなトーンや役割で答えてほしいかを毎回説明しなければなりませんでした。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Projectsはこの「リセット問題」を根本的に解決します。プロジェクトを作成してファイル（ナレッジ）を追加し、カスタム指示（システムプロンプト）を設定すると、そのプロジェクト内のすべての会話で<strong>共通のコンテキスト</strong>が自動的に適用されます。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            イメージとしては、「その仕事の資料と背景を全部把握している専任のAIアシスタントを、プロジェクトごとに用意できる」感覚です。書籍を書くなら「編集アシスタント」、法律事務所で働くなら「契約書レビュー専門AI」を、自分の資料を学習させた上で持てるのです。
          </p>

          <ArticleH3>Projectsの3要素</ArticleH3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "ナレッジ",
                icon: "📄",
                desc: "PDF・テキストファイルなどの資料。プロジェクト内の全会話で自動参照される",
              },
              {
                label: "カスタム指示",
                icon: "✏️",
                desc: "AIへの役割・制約・出力形式の指定。「〇〇の専門家として回答せよ」などを永続設定",
              },
              {
                label: "会話スレッド",
                icon: "💬",
                desc: "プロジェクト内で目的別に複数作成可能。ナレッジと指示を共有しながら整理できる",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-3xl">{item.icon}</div>
                <p className="mt-2 font-bold text-gray-900">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 通常の会話との違い */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="vs-normal-chat">
            通常のClaude会話とProjectsの違い
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「普通のClaude会話で十分では？」と思う方も多いはず。下の比較表で違いを確認してみてください。
          </p>
          <RichTable>
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">比較項目</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">通常の会話</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-will-primary">Projects</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row) => (
                <tr key={row.item} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                  <td className="px-4 py-3 text-gray-600">{row.normal}</td>
                  <td className="px-4 py-3 text-gray-800">{row.projects}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <p className="mt-4 text-base leading-8 text-gray-700">
            特に大きな差は「コンテキストの持続」と「資料のアップロード」です。数十ページのPDFを毎回アップロードする手間がなくなるだけで、作業効率は大きく変わります。
          </p>
          <Callout type="tip" title="Projectsが特に向く仕事の特徴">
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>同じ資料を繰り返し参照する（マニュアル・規約・議事録など）</li>
              <li>複数セッションにまたがる継続作業（執筆・調査・設計など）</li>
              <li>特定の役割・トーンを毎回指定したい（翻訳、法務チェック、コードレビューなど）</li>
            </ul>
          </Callout>
        </motion.section>

        {/* 始め方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-to-start">
            Projects機能の始め方（Pro限定機能の説明）
          </ArticleH2>
          <Callout type="info" title="利用可能プランについて">
            Claude Projectsは<strong>Claude Pro・Max・Team・Enterprise</strong>プランで利用できます。
            無料プランでは使用できません。Proプランは月額約20ドル（約3,000円）です。
            まず無料プランで1週間ほどClaude自体を試し、使用頻度が増えてきたタイミングでProへのアップグレードを検討するのがおすすめです。
          </Callout>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Proプランに加入したら、以下のステップでProjectsを始めましょう。
          </p>
          <div className="mt-6 space-y-4">
            {stepItems.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-gray-200 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-will-primary text-sm font-bold text-white">
                  {item.step.replace("STEP ", "")}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 中間CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="claude-projects-guide" />
        </motion.section>

        {/* 実際の使い方 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="how-to-use">
            実際の使い方：ステップバイステップ（例：マーケティング企画プロジェクト）
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ここでは「マーケティング企画プロジェクト」を例に、実際のワークフローを追ってみましょう。
          </p>

          <ArticleH3>1. プロジェクトを作成して資料を追加する</ArticleH3>
          <p className="mt-2 text-base leading-8 text-gray-700">
            左サイドバーの「Projects」から「+ New Project」をクリックし、「マーケティング企画2026」と名前をつけます。作成後、「Project Knowledge」に以下をアップロードします：
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-400">自社のブランドガイドライン（PDF）</li>
            <li className="pl-1 marker:text-gray-400">2025年度の顧客ペルソナ資料（PDF）</li>
            <li className="pl-1 marker:text-gray-400">競合他社分析シート（テキスト貼り付けでも可）</li>
            <li className="pl-1 marker:text-gray-400">過去にヒットしたコピー例集（テキスト）</li>
          </ul>

          <ArticleH3>2. カスタム指示でAIの役割を定義する</ArticleH3>
          <div className="mt-2 rounded-lg bg-gray-900 p-5">
            <p className="text-xs font-semibold text-gray-400">カスタム指示の例（コピーして使えます）</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-green-400">
              {`あなたは私のマーケティングコピーライター兼企画パートナーです。

【役割と制約】
・ブランドガイドラインに必ず準拠すること
・ターゲットは添付のペルソナ資料に記載の「30代働く女性A子さん」を中心に想定
・競合他社と差別化した表現を心がける
・出力はまず「企画骨子」を箇条書きで、次に「コピー案」を3パターン提示すること

【出力形式】
・文体：親しみやすくプロフェッショナル
・文字数：コピー案は各100字以内`}
            </p>
          </div>

          <ArticleH3>3. 会話スレッドを目的別に作成する</ArticleH3>
          <p className="mt-2 text-base leading-8 text-gray-700">
            プロジェクト内で「+ New Conversation」を押すたびに新しいスレッドが作成されます。ナレッジとカスタム指示はすべての会話で共有されるので、スレッドは目的別に分けましょう。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { thread: "3月施策アイデア出し", desc: "春のキャンペーン企画をブレスト" },
              { thread: "SNSコピー量産", desc: "Instagram用テキストを20本生成" },
              { thread: "プレスリリース草稿", desc: "新商品発表文を作成" },
              { thread: "広告レビュー", desc: "既存の広告文をブランドガイドラインでチェック" },
            ].map((t) => (
              <div key={t.thread} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm font-semibold text-gray-900">💬 {t.thread}</p>
                <p className="mt-1 text-xs text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            このように、すべての会話で「ブランドガイドライン」「ペルソナ」「競合情報」が共有されているため、毎回背景を説明する手間が一切不要になります。
          </p>
        </motion.section>

        {/* 活用シーン8選 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="use-cases">
            Projectsが特に役立つシーン8選
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            継続的な作業、大量の資料を扱う仕事、特定の役割を持たせたいケースで効果が大きく出ます。
          </p>
          <RichTable>
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">活用シーン</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">登録するナレッジ例</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">得られる効果</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {useCaseRows.map((row) => (
                <tr key={row.scene} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.scene}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{row.detail}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.effect}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
        </motion.section>

        {/* GPTsとの比較 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="vs-gpts">
            ChatGPTのGPTsとの比較：どちらをいつ使うか
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「ChatGPTのGPTs（カスタムGPT）と何が違うの？」という疑問を持つ方も多いはずです。両者を正直に比べます。
          </p>
          <RichTable>
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">比較軸</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-will-primary">Claude Projects</th>
                <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-700">ChatGPT GPTs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vsGptsRows.map((row) => (
                <tr key={row.axis} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-medium text-gray-800">{row.axis}</td>
                  <td className="px-4 py-3 text-gray-800">{row.projects}</td>
                  <td className="px-4 py-3 text-gray-600">{row.gpts}</td>
                </tr>
              ))}
            </tbody>
          </RichTable>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Callout type="tip" title="Projectsを選ぶべきケース">
              自分の資料（マニュアル・契約書・過去の原稿）を読み込ませて継続的に作業したい。外部APIは不要で、シンプルに使いたい。
            </Callout>
            <Callout type="info" title="GPTsを選ぶべきケース">
              Webブラウジングや外部サービスとの連携が必要。作ったカスタムGPTをチームや一般公開したい。
            </Callout>
          </div>
        </motion.section>

        {/* ベストプラクティス */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="best-practices">
            Projectsを使う際のベストプラクティス5つ
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Projectsを使い始めた方の多くが「なんとなく作ったけど、効果が出ない」という経験をします。以下のポイントを押さえると、活用の質が大きく変わります。
          </p>
          <div className="mt-6 space-y-4">
            {bestPractices.map((item) => (
              <div key={item.num} className="flex gap-4 rounded-xl border border-gray-200 bg-gray-50/50 p-5">
                <div className="shrink-0 text-3xl font-bold text-will-primary/30">{item.num}</div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="faq">よくある質問（FAQ）</ArticleH2>
          <RichFAQ items={faqItems} />
        </motion.section>

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ArticleH2 id="summary">
            まとめ：Claude Projectsで「毎回説明する」ムダをなくす
          </ArticleH2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            この記事でご紹介した内容を振り返ります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Claude Projectsは、資料・指示・会話を一元管理するPro限定の生産性機能
            </li>
            <li className="pl-1 marker:text-gray-500">
              通常の会話と最大の違いは「コンテキストの持続」と「資料の自動参照」
            </li>
            <li className="pl-1 marker:text-gray-500">
              5ステップで簡単に始められ、カスタム指示の設定が活用品質を左右する
            </li>
            <li className="pl-1 marker:text-gray-500">
              書籍執筆・法務レビュー・採用・マーケティングなど継続作業に特に効果大
            </li>
            <li className="pl-1 marker:text-gray-500">
              GPTsとは「目的」が違う。資料を読み込ませる深い作業にはProjectsが最適
            </li>
            <li className="pl-1 marker:text-gray-500">
              1テーマ1プロジェクト、システムプロンプトの充実、定期レビューがベストプラクティス
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIとの仕事は、「毎回同じ説明をしなければならない道具」から「文脈を理解してくれる専任アシスタント」へと進化しています。Claude Projectsは、その進化の一歩を今日から体験できる機能です。
          </p>
          <p className="mt-4 text-base font-semibold leading-8 text-gray-900">
            まずはProプランで1つ、プロジェクトを作ってみてください。「こんなに楽になるのか」という発見が待っています。
          </p>
        </motion.section>

        {/* LINE CTA */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIを使った仕事の効率化、もっと知りたい方へ"
            description="AIリブートのLINE公式アカウントでは、Claude Projectsのような実践的なAI活用ヒントを毎週お届けしています。「どこから始めればいい？」という相談も大歓迎。まずは気軽に登録してみてください。"
            buttonLabel="LINEで無料登録する"
          />
        </motion.section>

        {/* 次のステップ */}
        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-gray-900">次のステップ：さらにClaudeを活用する</h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Projectsを使いこなしたら、次はプロンプトの精度を上げることで回答品質がさらに向上します。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/blog/claude-beginner-guide"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              Claude初心者ガイドを読む
            </Link>
            <Link
              href="/academy/blog/chatgpt-prompt-beginner"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              プロンプト入門を学ぶ
            </Link>
          </div>
        </motion.section>

        {/* 関連リンク */}
        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/claude-beginner-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude初心者ガイド｜始め方・プロンプト・活用シーン
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/gpt-vs-claude-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                GPT vs Claude 2026年版比較｜どちらを使うべきか
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-tool-cost-guide-2026" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI有料プランの費用対効果を正直比較2026
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-plan-comparison" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプラン比較｜無料・Plus・Pro・Teamの違い
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-first-30-days-work-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                生成AI最初の30日ガイド｜仕事で使える実践ロードマップ
              </Link>
            </li>
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
