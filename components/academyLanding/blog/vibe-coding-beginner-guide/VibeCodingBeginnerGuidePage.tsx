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

type VibeCodingBeginnerGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Vibe Coding 入門", "バイブコーディング 使い方", "AIコーディング 非エンジニア", "Cursor Claude Code 初心者"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ（2026-02-20時点）" },
  { id: "what-is-vibe-coding", label: "Vibe Codingとは何か" },
  { id: "difference", label: "従来開発・ノーコードとの違い" },
  { id: "tools", label: "おすすめツール5選と使い分け" },
  { id: "tutorial", label: "非エンジニア向けWebアプリ作成手順" },
  { id: "limits-security", label: "限界とセキュリティ注意点" },
  { id: "trends-2026", label: "2026年トレンドと将来性" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const summaryPoints = [
  "Vibe Codingは、自然言語で要件を伝え、AIにコード生成と修正を繰り返させる開発スタイルです。",
  "非エンジニアでも試作までは到達しやすい一方、認証・課金・個人情報処理などは専門レビューが必要です。",
  "2026年は「席数課金」より「使用量課金」の比重が高まり、ツール選定ではコスト上限設計が重要になります。",
  "学習ポイントは文法暗記より、要件定義・検証・運用ルール設計へ移っています。",
] as const;

const approachRows = [
  {
    axis: "主な作り方",
    traditional: "仕様を設計して、コードを人が実装・テスト・修正する",
    nocode: "GUIやワークフローを組み合わせて構築する",
    vibe: "自然言語で要件を伝え、AI生成コードを検証しながら改善する",
  },
  {
    axis: "初期学習コスト",
    traditional: "高い（文法・設計・開発環境の習得が必要）",
    nocode: "低い（GUI中心で始めやすい）",
    vibe: "中程度（コード知識は少なくても、指示力と検証力が必要）",
  },
  {
    axis: "自由度",
    traditional: "最も高い",
    nocode: "プラットフォーム仕様に依存しやすい",
    vibe: "高めだが、AI出力品質と運用設計に依存する",
  },
  {
    axis: "失敗しやすい点",
    traditional: "開発速度が上がるまで時間がかかる",
    nocode: "複雑要件や外部連携で限界が見えやすい",
    vibe: "動くが保守しにくいコードが蓄積しやすい",
  },
] as const;

const toolRows = [
  {
    tool: "Cursor",
    price: "Pro $20/月 / Business $40/ユーザー/月 / Ultra $200/月",
    fit: "IDEで画面を見ながら実装・修正したい人",
    caution: "使いすぎると従量課金が増えるため、タスク単位で上限を決める",
  },
  {
    tool: "Claude Code",
    price: "Pro $20/月、Max 5x $100/月、Max 20x $200/月（ほかTeam/Enterprise）",
    fit: "CLI中心で高速に変更を回したい人",
    caution: "権限設定を誤ると意図しないコマンド実行リスクがある",
  },
  {
    tool: "v0",
    price: "Free（5 messages/日）/ Premium $20/月 / Team $30/メンバー/月",
    fit: "UIの叩き台を短時間で作りたい人",
    caution: "UI初速は速いが、業務ロジックは別途設計が必要",
  },
  {
    tool: "Replit",
    price: "Core $25/月、Teams $40/ユーザー/月（クレジット消費モデル）",
    fit: "環境構築なしで動かしながら学びたい人",
    caution: "長期運用は構成管理とリファクタリング方針が必要",
  },
  {
    tool: "Bolt.new",
    price: "Free 150k tokens/日、Pro $20/月（10M tokens）ほか上位プラン",
    fit: "ブラウザ完結でフルスタック試作したい人",
    caution: "トークン上限を越えると作業継続性が落ちるため、設計を小分けにする",
  },
] as const;

const workflowSteps = [
  {
    step: "Step 1. 作るものを1文で固定する",
    body: "例: 「問い合わせ内容を登録し、優先度で絞り込めるWebアプリを作る」。最初の1文が曖昧だと、以降のAI出力がぶれます。",
  },
  {
    step: "Step 2. 必須機能を3つに絞る",
    body: "登録、一覧表示、検索/絞り込みの3機能だけに限定します。機能を増やしすぎると、初回で破綻する確率が上がります。",
  },
  {
    step: "Step 3. 画面要件を自然言語で渡す",
    body: "入力項目、一覧テーブル、ステータス色分けなど、UI要件を箇条書きで渡します。v0やBolt.newはこの段階の初速が高いです。",
  },
  {
    step: "Step 4. 動作確認をテストケースで回す",
    body: "「空入力」「長文入力」「同じデータ重複」など、最低5ケースの確認をAIに先に作らせてから実行します。",
  },
  {
    step: "Step 5. 保存先と権限を明示する",
    body: "ローカル保存か、DB保存かを明確にし、個人情報はダミーデータで検証します。本番データを先に入れないのが基本です。",
  },
  {
    step: "Step 6. エラー時は再現条件を固定して再指示する",
    body: "「何を入力したら、どう壊れたか」を1セットで渡し、修正差分だけを出させます。丸ごと作り直しは避けます。",
  },
  {
    step: "Step 7. 公開前チェックを通してから共有する",
    body: "認証、ログ、依存ライブラリ、例外処理、利用規約を確認します。ここを飛ばすと、公開後の手戻りコストが大きくなります。",
  },
] as const;

const promptExamples = [
  {
    title: "最初の要件定義プロンプト",
    code: `あなたはプロダクト実装アシスタントです。
目的: 問い合わせ管理のミニWebアプリを作る
対象: 非エンジニアが1日で試作する
必須機能:
- 問い合わせの登録（件名/本文/優先度）
- 一覧表示
- 優先度フィルタ
制約:
- 個人情報は保存しない
- 画面は日本語
- スマホでも崩れない
出力:
1) 画面構成
2) 実装手順（5ステップ）
3) 初期コード`,
  },
  {
    title: "エラー修正プロンプト",
    code: `不具合を修正してください。
症状: 登録ボタンを押すと一覧が更新されない
再現手順:
1. 件名と本文を入力
2. 優先度を「高」に設定
3. 登録を押す
期待結果: 一覧の先頭に新規行が追加される
実際: 画面変化なし
出力:
- 原因候補を3つ
- 最小修正差分
- 再テスト手順`,
  },
  {
    title: "公開前チェックプロンプト",
    code: `このアプリを社内公開する前提で、リスクチェックをしてください。
確認観点:
- 入力値検証
- エラーログ
- 認証・権限
- 依存ライブラリ
- 機密情報の扱い
出力:
1) 重大リスク
2) 中リスク
3) 今すぐ直す順序`,
  },
] as const;

const limitPoints = [
  "「動くデモ」は作れても、「長期保守できる構成」になるとは限らない",
  "決済、個人情報、外部API課金を含む機能は、設計レビューなしで公開すべきではない",
  "要件が増えるほど、AIの出力差分管理と責務分離が難しくなる",
  "研究でも、AI活用が常に時間短縮につながるとは限らない結果が示されている",
] as const;

const securityChecklist = [
  "Prompt Injectionを想定し、外部入力をそのまま実行指示に使わない",
  "秘密情報（APIキー、個人情報）をプロンプトや公開ログに入れない",
  "依存パッケージのライセンスと脆弱性を公開前に確認する",
  "本番環境へ反映する前に、人によるコードレビューとテストを通す",
] as const;

const trendCards = [
  {
    title: "トレンド1: エージェント化の加速",
    body: "単発生成より、実装→テスト→修正を連続で回すエージェント型が主流になっています。非エンジニアでも、作業分解ができる人ほど成果が出やすい傾向です。",
  },
  {
    title: "トレンド2: 使用量課金の比重増",
    body: "2026年は多くのツールで、月額固定だけでなくクレジット/トークン消費が実コストを左右します。予算の上限管理を先に決める運用が重要です。",
  },
  {
    title: "トレンド3: 仕様設計スキルの重要化",
    body: "コードを書く量より、要件を分解して検証可能な指示に変換する力が成果差を作ります。職種を問わず、言語化能力が生産性に直結します。",
  },
  {
    title: "トレンド4: ガバナンス前提の運用",
    body: "導入初期から、入力禁止情報、レビュー責任者、公開チェックのルールを定義するチームが増えています。速度と安全性の両立が評価軸になっています。",
  },
] as const;

export default function VibeCodingBeginnerGuidePage({ faqItems }: VibeCodingBeginnerGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Vibe Coding入門" },
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
                title="Vibe Coding入門｜非エンジニアがAIでWebアプリを作る手順とツール比較【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Vibe Coding入門｜非エンジニアがAIでWebアプリを作る手順とツール比較【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            Vibe Codingは、自然言語でAIに実装を進めさせる新しい開発スタイルです。非エンジニアでも最初のアプリは作れますが、公開品質まで到達するには「指示の粒度」と「検証手順」が欠かせません。
            本記事では、語源・比較・ツール選定から、実際のWebアプリ作成手順、セキュリティ注意点、2026年のトレンドまでを1本で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（2026-02-20時点）</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-xs leading-6 text-gray-500">
            料金・仕様の確認日: 2026-02-20（最新情報は各公式ページを再確認してください）
          </p>
        </motion.section>

        <motion.section
          id="what-is-vibe-coding"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Vibe Codingとは何か: 自然言語でAIに実装を委任する開発スタイル</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Vibe Codingの本質は「コードを全部自分で書く」から「要件を言語化してAIへ渡す」への重心移動です。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            2025年2月にAndrej Karpathyが使い始めた表現として広まり、2026年には非エンジニア向け学習文脈でも一般化しました。実装作業そのものはAIに任せられても、要件定義と品質判断は人間側の責務として残ります。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            まず基礎的なAIコーディングの流れを押さえたい方は、
            <Link href="/academy/blog/ai-coding-for-beginners" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIコーディング入門
            </Link>
            を先に読むと、この記事のチュートリアルを実行しやすくなります。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="difference"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">従来開発・ノーコード・Vibe Codingの違いを1表で比較</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            非エンジニアの選択肢は「どれが上か」ではなく、「どのフェーズに何を当てるか」で決めるほうが失敗を減らせます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[840px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較軸</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">従来開発</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ノーコード</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Vibe Coding</th>
                </tr>
              </thead>
              <tbody>
                {approachRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="px-4 py-4">{row.traditional}</td>
                    <td className="px-4 py-4">{row.nocode}</td>
                    <td className="py-4 pl-4">{row.vibe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            「コードは書けないが、業務課題は持っている」層では、まずVibe Codingで試作し、必要に応じて従来開発へ接続する流れが現実的です。
            背景整理が必要な場合は、
            <Link href="/academy/blog/ai-for-non-engineers" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              文系・非エンジニア向けAI活用ガイド
            </Link>
            も併読してください。
          </p>
        </motion.section>

        <motion.section
          id="tools"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            おすすめツール5選（Cursor・Claude Code・v0・Replit・Bolt.new）の特徴と使い分け
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            5ツールは競合というより役割分担で使うと効果が高くなります。比較情報は2026-02-20時点の公式料金を基準にしています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な料金（確認日基準）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {toolRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.price}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-7 space-y-4 rounded-lg border border-gray-200 p-5">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">非エンジニア向けの最初の選び方</h3>
            <ul className="blog-ul list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="blog-li pl-1 marker:text-gray-500">UIの叩き台を最短で作る: `v0` or `Bolt.new`</li>
              <li className="blog-li pl-1 marker:text-gray-500">動かしながら改修したい: `Replit`</li>
              <li className="blog-li pl-1 marker:text-gray-500">本格的に開発フローへ近づける: `Cursor` or `Claude Code`</li>
            </ul>
            <p className="blog-p text-sm leading-7 text-gray-700">
              CursorとClaude Codeの差分を深掘りしたい方は、
              <Link href="/academy/blog/cursor-ai-coding-guide" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor実践ガイド
              </Link>
              と
              <Link href="/academy/blog/claude-code-intro" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Code入門
              </Link>
              を用途別に確認すると判断しやすくなります。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="tutorial"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">非エンジニア向けチュートリアル: 1日でミニWebアプリを作る手順</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            ここでは「問い合わせ管理ミニアプリ」を題材に、自然言語だけで試作を完成させる流れを示します。重要なのは、1回で完成させることではなく、検証可能な単位で進めることです。
          </p>
          <div className="mt-6 space-y-4">
            {workflowSteps.map((item) => (
              <section key={item.step} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.step}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 space-y-5">
            {promptExamples.map((example) => (
              <section key={example.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{example.title}</h3>
                <pre className="mt-3 overflow-x-auto rounded bg-gray-50 p-4 text-xs leading-6 text-gray-700">{example.code}</pre>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            プロンプトの型を業務全般へ展開したい場合は、
            <Link href="/academy/blog/prompt-template-for-work" className="mx-1 blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            の形式に合わせると、属人化を抑えた運用に移行できます。
          </p>
        </motion.section>

        <motion.section className="mt-14" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={sectionReveal}>
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="limits-security"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">限界とセキュリティ注意点: 「作れる」と「運用できる」は別物</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Vibe Codingで最も起きやすい失敗は、試作成功をそのまま本番運用に持ち込むことです。公開前のチェック設計までを開発の一部として扱う必要があります。
          </p>
          <h3 className="blog-h3 mt-7 text-lg font-semibold text-gray-900">非エンジニアが先に知っておくべき限界</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {limitPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <h3 className="blog-h3 mt-7 text-lg font-semibold text-gray-900">公開前セキュリティチェック（最低限）</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {securityChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            特に業務データを扱う場合は、個人の判断で公開せず、レビュー責任者を決めたうえで進めることが安全です。
          </p>
        </motion.section>

        <motion.section
          id="trends-2026"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">2026年のVibe Codingトレンドと将来性</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            2026年は「AIに書かせる」段階から、「AIを前提にどう運用するか」を設計できる人材が評価される局面に入っています。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {trendCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{card.body}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            つまり将来性は「AIツール名を知っていること」ではなく、業務課題を構造化して、検証可能な指示に落とせるかで決まります。
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
              <Link href="/academy/blog/ai-coding-for-beginners" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIコーディング入門｜非エンジニアでも始められるコード生成AIの使い方
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/cursor-ai-coding-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Cursor × AIコーディング入門｜非エンジニアでも使える実践ガイド
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/claude-code-intro" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Claude Codeとは？使い方・料金・始め方を完全解説
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-for-non-engineers" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                文系・非エンジニアのAI活用ガイド
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-14 rounded-2xl border border-will-primary/20 bg-will-lighter p-8">
          <p className="text-sm font-semibold tracking-[0.08em] text-will-primary">AIリブートアカデミー</p>
          <h2 className="blog-h2 mt-3 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得を目的にした場ではありません。生成AIを実務で活かす力を磨きながら、自己理解とキャリア設計を深め、仲間と学び続ける環境を一体で設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-will-primary">生成AI活用力: 実務で使える判断軸と活用設計を身につける</li>
            <li className="blog-li pl-1 marker:text-will-primary">自己理解・キャリアデザイン: 強みと価値観を言語化し、次の選択を具体化する</li>
            <li className="blog-li pl-1 marker:text-will-primary">仲間と共に学ぶ環境: 対話と協働で実践の継続率を高める</li>
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
