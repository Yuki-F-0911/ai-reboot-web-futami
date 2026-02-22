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
  "Perplexity 使い方",
  "AI 情報収集 比較",
  "Perplexity ChatGPT 比較",
  "生成AI 検索 2026",
  "ChatGPT ウェブ検索",
] as const;

const tocItems = [
  { id: "answer-box", label: "冒頭アンサーボックス" },
  { id: "why-ai-search", label: "Google検索との本質的な違い" },
  { id: "tool-basics", label: "4ツール基本情報（料金・特徴・デバイス）" },
  { id: "experiment", label: "同じ質問で比較実験" },
  { id: "perplexity", label: "Perplexityの強みと弱み" },
  { id: "chatgpt", label: "ChatGPT（ウェブ検索）の強みと弱み" },
  { id: "gemini", label: "Geminiの強みと弱み" },
  { id: "copilot", label: "Microsoft Copilotの強みと弱み" },
  { id: "use-cases", label: "用途別使い分けガイド" },
  { id: "starter-steps", label: "初心者向け3ステップ" },
  { id: "faq", label: "FAQ（10問）" },
  { id: "summary", label: "まとめ・LINE CTA" },
] as const;

const toolBasics = [
  {
    tool: "Perplexity",
    pricing: "無料プランあり / Proあり",
    feature: "検索特化。回答と同時に引用元リンクを確認しやすい。",
    devices: "Web / iOS / Android / macOS",
  },
  {
    tool: "ChatGPT（Search）",
    pricing: "無料プランあり / Plus・Proあり",
    feature: "会話で深掘りしながら検索。要約・整理・文章化まで一気通貫。",
    devices: "Web / iOS / Android / macOS / Windows",
  },
  {
    tool: "Gemini",
    pricing: "無料プランあり / Google One AI Premiumあり",
    feature: "Googleサービス連携が強い。検索文脈を活かして調査しやすい。",
    devices: "Web / iOS / Android",
  },
  {
    tool: "Microsoft Copilot",
    pricing: "無料範囲あり / Copilot Pro・Microsoft 365 Copilotあり",
    feature: "Microsoft 365・Windowsとの統合。業務文書への接続がしやすい。",
    devices: "Web / iOS / Android / Windows",
  },
] as const;

const experimentRows = [
  {
    tool: "Perplexity",
    firstResponse: "最短で要点が返り、引用リンクが即表示。速報確認に強い。",
    strength: "情報源を追いやすいので、裏取りの初動が速い。",
    caution: "深い議論は追質問を増やさないと浅くなることがある。",
  },
  {
    tool: "ChatGPT",
    firstResponse: "要点整理が自然で、追加質問で論点を掘り下げやすい。",
    strength: "検索結果を踏まえた比較・仮説整理が得意。",
    caution: "出典の明示を指示しないと抽象的にまとまる場合がある。",
  },
  {
    tool: "Gemini",
    firstResponse: "Google文脈の情報整理が安定。関連トピックへ広げやすい。",
    strength: "Google検索との接続感が高く、馴染みやすい。",
    caution: "回答の粒度が広めで、結論を短く指定する必要がある。",
  },
  {
    tool: "Copilot",
    firstResponse: "ビジネス寄りの言い回しで、実務向けに整理されやすい。",
    strength: "Officeと併用すると調査メモの再利用がしやすい。",
    caution: "単体検索では他ツールより個性が見えにくい場面がある。",
  },
] as const;

const scoreRows = [
  { axis: "速さ", perplexity: 9, chatgpt: 8, gemini: 8, copilot: 7 },
  { axis: "正確さ（裏取りしやすさ込み）", perplexity: 8, chatgpt: 8, gemini: 7, copilot: 7 },
  { axis: "無料範囲の実用性", perplexity: 8, chatgpt: 7, gemini: 8, copilot: 8 },
  { axis: "日本語での使いやすさ", perplexity: 8, chatgpt: 9, gemini: 8, copilot: 7 },
  { axis: "引用元確認のしやすさ", perplexity: 10, chatgpt: 7, gemini: 7, copilot: 6 },
] as const;

const totalScores = {
  perplexity: scoreRows.reduce((sum, row) => sum + row.perplexity, 0),
  chatgpt: scoreRows.reduce((sum, row) => sum + row.chatgpt, 0),
  gemini: scoreRows.reduce((sum, row) => sum + row.gemini, 0),
  copilot: scoreRows.reduce((sum, row) => sum + row.copilot, 0),
};

const useCaseGuide = [
  {
    scene: "仕事（企画・提案・調査メモ）",
    best: "ChatGPT + Perplexity",
    reason: "Perplexityで一次情報を拾い、ChatGPTで比較表と提案骨子に変換すると速い。",
  },
  {
    scene: "学習（資格・業界理解・要点整理）",
    best: "ChatGPT + Gemini",
    reason: "会話で理解を深めるChatGPTと、Google文脈で広げるGeminiの相性が良い。",
  },
  {
    scene: "趣味（旅行・買い物・ライフログ）",
    best: "Gemini or ChatGPT",
    reason: "身近な質問への日本語応答が自然で、対話しながら決めやすい。",
  },
  {
    scene: "最新ニュース確認",
    best: "Perplexity",
    reason: "速報確認と引用リンクの追跡が最短でできる。誤読防止に向いている。",
  },
] as const;

const starterSteps = [
  {
    title: "ステップ1：まず1つだけ選ぶ（PerplexityかChatGPT）",
    body: "最初から4つ全部を触る必要はありません。最初の3日間は1ツール固定で使い、操作に慣れることを優先します。",
  },
  {
    title: "ステップ2：毎日1テーマを同じ型で調べる",
    body: "質問テンプレは「結論3行→理由3つ→引用元→次にやること」。この型を固定すると、比較しやすくなります。",
  },
  {
    title: "ステップ3：2つ目のツールで同じ質問を投げて差分を見る",
    body: "同じ質問を別ツールに投げると、得意・不得意が体感でわかります。ここで初めて“使い分け”が始まります。",
  },
] as const;

export default function AiSearchToolComparison2026Page({ faqItems }: Props) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6 markdown-content" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "情報収集AIツール比較 2026" },
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
                title="情報収集はどのAIが最強？2026年版：Perplexity・ChatGPT・Gemini・Copilotを実際に使って比べた"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            情報収集はどのAIが最強？2026年版：Perplexity・ChatGPT・Gemini・Copilotを実際に使って比べた
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">公開日: 2026年2月23日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            以前の私は、調べものと言えばGoogleで10タブ以上開くのが当たり前でした。けれど2026年の今は、AIで「最初の叩き台」を一気に作ってから必要箇所だけ原典を確認する流れに変わっています。
            本記事では、Perplexity・ChatGPT・Gemini・Microsoft Copilotを同じ質問で比較し、初心者が最初に失敗しにくい選び方をまとめます。
          </p>
        </motion.header>

        <p data-seo-internal-links="true" className="mt-4 text-sm leading-7 text-gray-700">
          関連記事として、
          <Link href="/academy/blog/chatgpt-web-search-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            ChatGPT検索機能ガイド
          </Link>
          ・
          <Link href="/academy/blog/perplexity-ai-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            Perplexity活用ガイド
          </Link>
          ・
          <Link href="/academy/blog/ai-overview-map-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
            2026年AI全体マップ
          </Link>
          をあわせて読むと、全体像を掴みやすくなります。
        </p>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">冒頭アンサーボックス：最初に試すならPerplexityかChatGPT</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            結論を先に言うと、初めての情報収集AIは<strong>PerplexityかChatGPT</strong>のどちらかから始めるのが最短です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-blue-500">Perplexity：引用元を追いやすく、速報確認が速い。</li>
            <li className="pl-1 marker:text-blue-500">ChatGPT：会話で深掘りしながら理解を整理しやすい。</li>
            <li className="pl-1 marker:text-blue-500">Gemini：Google連携が自然で、検索から作業への流れが作りやすい。</li>
            <li className="pl-1 marker:text-blue-500">Copilot：Windows・Office文脈で実務に直結しやすい。</li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            4つを同時に覚えるより、1つを使って「速い」「楽」「抜け漏れが減る」を体験するほうが、情報収集AIの定着率は上がります。
          </p>
        </motion.section>

        <motion.section
          id="why-ai-search"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">なぜ情報収集にAIを使うのか：Google検索との本質的な違い</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Google検索が「リンクを探す体験」だとすると、情報収集AIは「仮説を作り、要点を整理してもらう体験」です。違いは、速さだけではありません。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Google検索中心</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">キーワードを変えながらページを探す</li>
                <li className="pl-1">複数サイトを自力で比較する</li>
                <li className="pl-1">要点をメモ化する工程が重い</li>
              </ul>
            </section>
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">AI検索中心</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">最初に結論と論点を提示してもらえる</li>
                <li className="pl-1">追質問で比較軸を深掘りできる</li>
                <li className="pl-1">必要なときだけ原典に戻れる</li>
              </ul>
            </section>
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ただし、AIは万能ではありません。<strong>ハルシネーション（もっともらしい誤答）</strong>の可能性があるため、数値・法律・料金など重要情報は必ず公式ページで再確認する前提で使うことが重要です。
          </p>
        </motion.section>

        <motion.section
          id="tool-basics"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">4つのAI検索ツールの基本情報（料金・特徴・対応デバイス）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            まずは全体像を揃えます。ここを曖昧にすると、比較の結論がぶれます。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">料金の目安</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">主な特徴</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">対応デバイス</th>
                </tr>
              </thead>
              <tbody>
                {toolBasics.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.pricing}</td>
                    <td className="py-4 px-4">{row.feature}</td>
                    <td className="py-4 pl-4">{row.devices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">※ 料金や機能は更新されるため、契約前に公式ページで再確認してください（確認日: 2026-02-22）。</p>
        </motion.section>

        <motion.section
          id="experiment"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            同じ質問で比較実験：「2026年の生成AIトレンドを教えて」で4つを比べると？
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            実験では4ツールすべてに同じ質問を投げ、最初の回答速度・要点のまとまり・引用確認のしやすさを比較しました。私が感じた差は次のとおりです。
          </p>
          <div className="mt-6 space-y-4">
            {experimentRows.map((row) => (
              <section key={row.tool} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{row.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">第一印象：</span>
                  {row.firstResponse}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">良かった点：</span>
                  {row.strength}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">注意点：</span>
                  {row.caution}
                </p>
              </section>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold text-gray-900">10点満点の比較表（実利用ベース）</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">評価軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Perplexity</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">ChatGPT</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Gemini</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Copilot</th>
                </tr>
              </thead>
              <tbody>
                {scoreRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.perplexity}/10</td>
                    <td className="py-4 px-4">{row.chatgpt}/10</td>
                    <td className="py-4 px-4">{row.gemini}/10</td>
                    <td className="py-4 pl-4">{row.copilot}/10</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <th className="py-4 pr-4 text-base font-bold text-gray-900">総合</th>
                  <td className="py-4 px-4 text-base font-bold text-gray-900">{totalScores.perplexity}/50</td>
                  <td className="py-4 px-4 text-base font-bold text-gray-900">{totalScores.chatgpt}/50</td>
                  <td className="py-4 px-4 text-base font-bold text-gray-900">{totalScores.gemini}/50</td>
                  <td className="py-4 pl-4 text-base font-bold text-gray-900">{totalScores.copilot}/50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            点数は「どれが絶対に上」ではなく、初心者の情報収集導線における使いやすさの目安です。用途が変われば最適解も変わります。
          </p>
        </motion.section>

        <motion.section
          id="perplexity"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Perplexityの強みと弱み：最新情報・引用元表示・情報収集特化</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Perplexityの強みは、答えと根拠の距離が近いことです。回答のすぐ横で出典リンクを確認できるので、「本当にそう書いてあるか」を追いやすい。最新情報を追うときの初速は4ツール中で最も高いと感じました。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">強み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">引用元確認が最短でできる</li>
                <li className="pl-1">ニュース・市場動向の初期調査が速い</li>
                <li className="pl-1">比較軸を指定すると一覧化が得意</li>
              </ul>
            </section>
            <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">弱み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">対話の文脈保持はChatGPTより浅くなる場面がある</li>
                <li className="pl-1">長文の思考整理は追加指示が必要</li>
                <li className="pl-1">「結論だけ」を指定しないと情報量が多くなりやすい</li>
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="chatgpt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">ChatGPT（ウェブ検索機能）の強みと弱み：会話×検索の組み合わせ</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            ChatGPTの強みは、検索結果をそのまま終わらせず、会話で理解を深められる点です。「このトレンドはなぜ重要？」「初心者向けに言い換えて」と続けると、調査メモがそのまま学習ノートや企画骨子になります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">強み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">会話による深掘りが自然</li>
                <li className="pl-1">要約・比較表・文章化まで一連で進めやすい</li>
                <li className="pl-1">日本語の表現調整がしやすい</li>
              </ul>
            </section>
            <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">弱み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">出典を明示する指示を入れないと根拠が薄く見える</li>
                <li className="pl-1">無料枠は混雑や回数制限の影響を受けやすい</li>
                <li className="pl-1">速報チェックはPerplexityほど直線的ではない</li>
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MidArticleCtaBox slug="ai-search-tool-comparison-2026" />
        </motion.section>

        <motion.section
          id="gemini"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Gemini（Google検索連携）の強みと弱み：Googleエコシステムとの統合</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Google検索に慣れている人ほど、Geminiは入りやすいツールです。検索の延長で使え、Gmail・Docsなど日常業務と接続しやすいので、「調べる→まとめる→共有する」の流れを作りやすいのが魅力です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">強み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">Googleユーザーにとって導入障壁が低い</li>
                <li className="pl-1">関連情報への展開がスムーズ</li>
                <li className="pl-1">学習用途の広い探索に向く</li>
              </ul>
            </section>
            <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">弱み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">結論を短く出すにはプロンプト設計が必要</li>
                <li className="pl-1">引用の見せ方はPerplexityほど直感的ではない</li>
                <li className="pl-1">実務テンプレ化はChatGPTのほうが進めやすい場面がある</li>
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="copilot"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Microsoft Copilotの強みと弱み：Office連携・Windows統合</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            Copilotは「調べた情報をその後どう使うか」に強みがあります。特にWord・Excel・PowerPointに戻す運用では、検索結果を業務成果へつなげやすいのが利点です。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">強み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">Microsoft 365文書への接続が強い</li>
                <li className="pl-1">Windows環境での導線がわかりやすい</li>
                <li className="pl-1">ビジネス文脈の表現が比較的安定</li>
              </ul>
            </section>
            <section className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-lg font-semibold text-gray-900">弱み</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1">純粋な検索体験だけだと差が伝わりにくい</li>
                <li className="pl-1">高度機能は契約プラン依存になりやすい</li>
                <li className="pl-1">引用確認は追加で丁寧に行う必要がある</li>
              </ul>
            </section>
          </div>
        </motion.section>

        <motion.section
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">用途別使い分けガイド（仕事・学習・趣味・最新ニュース）</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            情報収集AIは「1位を決める」より「場面で使い分ける」ほうが成果が出ます。最初は下の4パターンで十分です。
          </p>
          <div className="mt-6 space-y-4">
            {useCaseGuide.map((row) => (
              <section key={row.scene} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{row.scene}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold">おすすめ：</span>
                  {row.best}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{row.reason}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="starter-steps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">初心者向け情報収集AIの始め方3ステップ</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            初心者がつまずく理由は、ツールの多さより「使い方の順番」が曖昧なことです。順番を固定すると、短期間で成果が出ます。
          </p>
          <div className="mt-6 space-y-4">
            {starterSteps.map((step) => (
              <section key={step.title} className="rounded-lg border border-will-primary/20 bg-will-lighter/40 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            この3ステップを1週間続けると、「AIで調べる」が日常化します。ここまで来れば、情報収集は苦手業務ではなく、最初の成功体験になります。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">FAQ（10問）</h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ：AI情報収集は、最初の成功体験を作る最短ルート</h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「Googleで調べるのが普通」だった人にとって、情報収集AIは単なる検索代替ではありません。調査の型を作り、考える時間を取り戻すための基盤です。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">まずはPerplexityかChatGPTのどちらか1つを使う</li>
            <li className="pl-1 marker:text-gray-500">同じ質問を別ツールに投げて差分を体感する</li>
            <li className="pl-1 marker:text-gray-500">用途ごとに使い分けることで、調査品質と速度が安定する</li>
          </ul>
          <p className="mt-5 text-base leading-8 text-gray-700">
            情報収集ができるようになると、次は「仕事でどう価値に変えるか」という段階に進めます。AIリブートアカデミーでは、生成AI活用力に加え、自己理解・キャリアデザイン、仲間と共に学ぶ環境を通じて、実務で使い続ける力を育てます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            title="AIで情報収集できるようになったら、次は仕事に活かす方法を学びませんか"
            description="情報収集だけでなく、仕事全体にAIを活用したい方へ。AIリブートアカデミーは経産省リスキリング補助金対象の100日間プログラムです。LINEで無料相談を受け付けています。"
            buttonLabel="LINEで無料相談する（登録無料）"
          />
        </motion.section>
      </article>
    </main>
  );
}
