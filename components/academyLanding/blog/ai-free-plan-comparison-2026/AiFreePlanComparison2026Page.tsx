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

const keywordTags = [
  "ChatGPT 無料 できること",
  "Claude 無料プラン",
  "Gemini 無料 比較",
  "AI 無料 2026",
] as const;

const tocItems = [
  { id: "quick-summary", label: "30秒でわかるまとめ" },
  { id: "comparison-table", label: "3サービス徹底比較表" },
  { id: "use-cases", label: "実務シーン別おすすめ" },
  { id: "upgrade-timing", label: "課金すべきタイミングの目安" },
  { id: "first-30min", label: "無料で始める最初の30分ガイド" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "summary", label: "まとめ" },
  { id: "related-links", label: "関連リンク" },
] as const;

const comparisonRows = [
  {
    axis: "利用モデル",
    chatgpt: "GPT-5（制限付き）。上限到達時や混雑時は軽量モデルへ切替される場合あり",
    claude: "Claude Sonnet 4.6（無料でも利用可。上限は利用状況で変動）",
    gemini: "Gemini Flash系（提供モデルは時期・地域で変動。3.1 Proは上位プランで拡張）",
  },
  {
    axis: "1日の利用上限（目安）",
    chatgpt: "利用上限あり（具体値は非公開。需要や利用状況で変動）",
    claude: "利用上限あり（入力の長さ・混雑状況で変動）",
    gemini: "利用上限あり（具体値は非公開。時期・地域で変動）",
  },
  {
    axis: "ファイル添付",
    chatgpt: "画像・PDF・テキストなどアップロード可",
    claude: "PDF・画像・テキストなどアップロード可。Excel/Word/PPT/PDFの生成も対応",
    gemini: "画像・PDFアップロード可。Googleドライブ連携あり",
  },
  {
    axis: "Web検索",
    chatgpt: "対応（検索結果をもとに回答を生成）",
    claude: "対応（Web検索機能を搭載）",
    gemini: "対応（Googleの検索基盤と直結。リアルタイム性が強み）",
  },
  {
    axis: "画像生成",
    chatgpt: "ChatGPTの画像生成機能が利用可（提供モデル名は更新される）",
    claude: "非対応（テキスト特化）",
    gemini: "対応（Googleの画像/動画生成機能が提供される場合あり）",
  },
  {
    axis: "コンテキスト長",
    chatgpt: "非公開（有料版より短い傾向）",
    claude: "200Kトークン（約15万字相当。無料でも長文対応が可能）",
    gemini: "非公開（Flash版は短めだが日常利用には十分）",
  },
  {
    axis: "外部サービス連携",
    chatgpt: "GPT Store（カスタムGPT利用可）",
    claude: "Projects・Artifacts・アプリコネクタ（Notion・Slack・Google Workspace・Figma等）",
    gemini: "Googleサービス全般（Gmail・カレンダー等は無料でも部分的に連携）",
  },
  {
    axis: "日本語対応",
    chatgpt: "高品質。ビジネス文書も自然な日本語",
    claude: "高品質。敬語・文体の使い分けが丁寧",
    gemini: "高品質。Google翻訳の知見を活かした多言語対応",
  },
] as const;

const useCaseRecommendations = [
  {
    scene: "メール・チャットの下書き",
    best: "Claude",
    reason:
      "敬語レベルの調整や文体の統一が丁寧。「もう少しカジュアルに」「より丁寧に」の追加指示にも正確に追従します。",
  },
  {
    scene: "会議の議事録作成",
    best: "Claude",
    reason:
      "200Kトークンの長文コンテキストが強み。会議の文字起こしテキストをまるごと貼り付けて「要点を箇条書きで」と指示するだけで整理できます。",
  },
  {
    scene: "企画・アイデア出し",
    best: "ChatGPT",
    reason:
      "幅広い切り口でアイデアを発散させるのが得意。「10個出して」「別の角度から」と繰り返すだけでブレスト相手になります。",
  },
  {
    scene: "翻訳・多言語対応",
    best: "Gemini / ChatGPT",
    reason:
      "どちらも高品質。Geminiは100以上の言語に対応しGoogleの翻訳知見が強み。ChatGPTはニュアンスの指定がしやすいです。",
  },
  {
    scene: "プレゼン資料の構成",
    best: "Claude",
    reason:
      "Artifactsでスライド構成をその場で生成・プレビューできます。PowerPointファイルの書き出しにも無料で対応。",
  },
  {
    scene: "リサーチ・情報収集",
    best: "Gemini",
    reason:
      "Google検索と直結しているため、最新情報のリサーチに最も強いです。出典リンク付きで回答するため裏取りも容易。",
  },
  {
    scene: "データ分析・Excel整理",
    best: "ChatGPT / Claude",
    reason:
      "ChatGPTはファイルアップロード→分析の流れがスムーズ。Claudeはファイル生成が可能で、加工済みExcelを直接ダウンロードできます。",
  },
  {
    scene: "画像生成",
    best: "ChatGPT / Gemini",
    reason:
      "Claudeは画像生成非対応。ChatGPTはDALL-E 3、GeminiはImagen 3でそれぞれ無料生成が可能です。",
  },
] as const;

const upgradeSignals = [
  {
    signal: "毎日の上限に引っかかる",
    detail:
      "週に3回以上「上限に達しました」が表示されるなら、課金する方が時間効率で得です。待ち時間をなくすだけで1日30分以上節約できます。",
  },
  {
    signal: "上位モデルが必要になった",
    detail:
      "GPT-5、Claude Opus 4.6、Gemini Ultraなど上位モデルは有料限定です。複雑な分析やコード生成で「もう少し賢い回答がほしい」と感じたら検討時です。",
  },
  {
    signal: "業務フローに組み込みたい",
    detail:
      "Slack連携やAPI利用、チームでの共有が必要になったら有料プラン一択です。無料プランは個人利用の範囲で設計されています。",
  },
  {
    signal: "機密情報を扱う必要がある",
    detail:
      "有料プランはデータ学習オプトアウトがデフォルトの場合が多く、セキュリティポリシーも強化されています。社内データを扱うなら有料が安心です。",
  },
] as const;

const first30MinSteps = [
  {
    time: "0〜5分",
    title: "ChatGPTに登録して最初のメッセージを送る",
    steps: [
      "chatgpt.com にアクセスし、Googleアカウントまたはメールで無料登録",
      "入力欄に「こんにちは。AIを使うのは初めてです」と打って送信",
      "返事が来たら「今日のランチのおすすめを3つ教えて」と聞いてみる",
    ],
  },
  {
    time: "5〜15分",
    title: "Claudeに登録して同じ質問を試す",
    steps: [
      "claude.ai にアクセスし、同じように無料登録",
      "ChatGPTと同じ質問を打って、回答の違いを体感する",
      "「この内容を表にまとめて」と追加で指示してみる（Artifactsが動く）",
    ],
  },
  {
    time: "15〜25分",
    title: "Geminiに登録してリサーチ力を体感する",
    steps: [
      "gemini.google.com にアクセス（Googleアカウントがあればすぐ使える）",
      "「今日のニュースで一番話題になっていることは？」と聞いてみる",
      "出典リンク付きの回答が返ることを確認する",
    ],
  },
  {
    time: "25〜30分",
    title: "3つのツールで同じ仕事タスクを比較する",
    steps: [
      "「来週の会議で使う挨拶メールの下書きを作って」のように、実際の仕事で試す",
      "3つの回答を比べて、自分に合うツールの感触をつかむ",
      "一番使いやすかったツールをブックマークしておく",
    ],
  },
] as const;

export default function AiFreePlanComparison2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI無料プラン比較2026" },
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
                title="ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ChatGPT・Claude・Gemini 無料プランでどこまでできる？2026年2月最新比較
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月21日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            「AIを使ってみたいけど、まずは無料で試したい」——その判断は正解です。2026年2月現在、ChatGPT・Claude・Geminiの3大AIツールはいずれも無料プランを提供しており、メール作成・議事録整理・企画・翻訳・リサーチまで、ビジネスの基本タスクは課金なしで十分こなせます。この記事では、3サービスの無料プランを横並びで比較し、あなたの用途に合ったツールの選び方を解説します。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連テーマを先に押さえるなら
          <Link href="/academy/blog/chatgpt-plan-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT料金プラン比較
          </Link>
          ・
          <Link href="/academy/blog/gemini-beginners-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Gemini入門ガイド
          </Link>
          ・
          <Link href="/academy/blog/claude-beginner-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Claude入門ガイド
          </Link>
          ・
          <Link href="/academy/blog/gpt-vs-claude-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            GPTとClaudeの性能比較
          </Link>
          もあわせて読むと、実務へのつながりが明確になります。
        </p>
        <ArticleTOC items={tocItems} />

        {/* 30秒でわかるまとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="quick-summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            30秒でわかるまとめ（結論ファースト）
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              <strong>ChatGPT Free</strong>：万能型。GPT-5（制限付き）で幅広いタスクに対応。画像生成もできる。アイデア出し・汎用作業に
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>Claude Free</strong>：長文・文書特化。200Kトークンのコンテキスト、Artifacts、アプリ連携が無料。議事録・レポート・メール推敲に
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>Gemini Free</strong>：リサーチ・Google連携型。検索直結で最新情報に強い。画像・動画生成も一部無料。情報収集・翻訳に
            </li>
            <li className="pl-1 marker:text-gray-500">
              <strong>おすすめ</strong>：3つとも無料なので全部登録して比較。メインを1つ決めてサブで補完するのが最も実用的
            </li>
          </ul>
        </motion.section>

        {/* Answer Box */}
        <section className="mb-8 rounded-xl border border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">この記事の結論</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            無料プランでも3ツールを使い分ければ、ビジネスの基本タスクの8割はカバーできます。まずは全部登録し、同じ質問を投げて回答の質と使い勝手を比較するのが最短の選び方です。課金は「毎日上限に引っかかるようになってから」で遅くありません。
          </p>
        </section>

        {/* 徹底比較表 */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="comparison-table" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ChatGPT / Claude / Gemini 無料プラン徹底比較表
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年2月時点の無料プランを8つの観点で比較します。料金や機能は変更される可能性があるため、最新情報は各公式サイトでご確認ください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">比較項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ChatGPT Free</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Claude Free</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Gemini Free</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.chatgpt}</td>
                    <td className="py-4 px-4">{row.claude}</td>
                    <td className="py-4 pl-4">{row.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            ※ 利用上限や提供モデルは時期・地域により変動します。2026年2月21日時点の情報です。
          </p>
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
          <MidArticleCtaBox slug="ai-free-plan-comparison-2026" />
        </motion.section>

        {/* 実務シーン別おすすめ */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="use-cases" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            実務シーン別おすすめ（メール・議事録・企画・翻訳・リサーチ等）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            「どれを使えばいい？」は用途で決まります。以下のシーン別ガイドを参考にしてください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">シーン</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">おすすめ</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">理由</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRecommendations.map((row) => (
                  <tr key={row.scene} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.scene}</th>
                    <td className="py-4 px-4 font-semibold text-will-primary">{row.best}</td>
                    <td className="py-4 pl-4">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            迷ったときの判断基準はシンプルです。<strong>文章の品質重視ならClaude、幅広さと手軽さならChatGPT、最新情報ならGemini</strong>。実際に同じプロンプトを3つに投げて比較すれば、自分の用途に合うツールが体感でわかります。
          </p>
        </motion.section>

        {/* 課金すべきタイミング */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="upgrade-timing" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            課金すべきタイミングの目安
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「無料で十分」から「課金した方が得」に変わる4つのサインを紹介します。逆に言えば、これに当てはまらないうちは無料で問題ありません。
          </p>
          <div className="mt-6 space-y-4">
            {upgradeSignals.map((item, i) => (
              <section key={item.signal} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  サイン{i + 1}：{item.signal}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">料金の目安（2026年2月時点）</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-amber-900">
              <li className="pl-1 marker:text-amber-400">ChatGPT Plus：月額20ドル（約3,000円）</li>
              <li className="pl-1 marker:text-amber-400">Claude Pro：月額20ドル（約3,000円）</li>
              <li className="pl-1 marker:text-amber-400">Google AI Pro：月額19.99ドル（約3,000円）</li>
            </ul>
            <p className="mt-2 text-xs text-amber-700">
              ※ 為替レートにより変動します。最新料金は各公式サイトでご確認ください。
            </p>
          </div>
        </motion.section>

        {/* 無料で始める最初の30分ガイド */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="first-30min" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料で始める最初の30分ガイド
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            3つのツールを30分で全部試せます。必要なのはブラウザとメールアドレスだけです。
          </p>
          <div className="mt-8 space-y-6">
            {first30MinSteps.map((block) => (
              <section
                key={block.title}
                className="rounded-xl border-2 border-will-primary/15 bg-will-lighter/30 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-will-primary/10 px-3 py-1 text-xs font-semibold text-will-primary">
                    {block.time}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{block.title}</h3>
                </div>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
                  {block.steps.map((step) => (
                    <li key={step} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            30分後には、3つのAIツールを体験済みの状態になっています。「この質問にはこのツールが合う」という感覚が自然と身についているはずです。
          </p>
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

        {/* まとめ */}
        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="summary" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            まとめ
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            2026年2月現在、ChatGPT・Claude・Geminiの無料プランは「とりあえず試す」レベルを大きく超えた実用性を持っています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">ChatGPT Free：万能型。アイデア出し、画像生成、汎用タスク全般</li>
            <li className="pl-1 marker:text-gray-500">Claude Free：文書特化。長文処理、議事録、メール推敲、ファイル生成</li>
            <li className="pl-1 marker:text-gray-500">Gemini Free：リサーチ型。最新情報検索、Google連携、画像・動画生成</li>
            <li className="pl-1 marker:text-gray-500">3つとも無料なので、まず全部登録して同じ質問で比較するのが最も確実</li>
            <li className="pl-1 marker:text-gray-500">課金は「毎日の上限に引っかかるようになってから」で遅くない</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AIを使い始める最良のタイミングは「今」です。30分あれば3つすべてを体験できます。この記事がその最初の一歩のきっかけになれば幸いです。
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
            title="無料ツールの次のステップを相談しませんか？"
            description="「無料プランを試してみたけど、もっと使いこなしたい」「仕事でAIを本格的に活用する方法を知りたい」——AIリブートアカデミーでは、経産省リスキリング補助金対象の100日間プログラムでAI活用スキルを身につけられます。LINEで気軽にご相談ください。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>

        {/* 関連リンク */}
        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
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
                href="/academy/blog/gpt-vs-claude-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                GPT-5.2とClaude 4.6を比較｜性能・得意分野・料金の違いを解説
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
              <Link
                href="/academy/blog/chatgpt-prompt-beginner"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTプロンプトの書き方入門｜初心者がすぐ使える15の型
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
                href="/academy/blog/claude-beginner-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Claude入門ガイド｜始め方・使い方・ChatGPTとの違い
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-plan-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPT料金プラン比較｜Free・Plus・Proの違い
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/chatgpt-prompt-templates-50"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                ChatGPTプロンプトテンプレート50選｜無料プランで試せる実践例
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-hallucination-fact-check-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIのハルシネーション対策ガイド｜無料利用でも必須の検証手順
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
      </article>
    </main>
  );
}
