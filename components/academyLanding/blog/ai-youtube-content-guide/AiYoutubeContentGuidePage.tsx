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

type AiYoutubeContentGuidePageProps = {
  faqItems: readonly FAQItem[];
};

type WorkflowStep = {
  phase: string;
  aiRole: string;
  humanRole: string;
  output: string;
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["YouTube AI 動画制作", "AI 動画編集 2026", "YouTubeショート AI", "動画 台本 AI生成"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "workflow", label: "全工程フロー（企画→台本→編集→サムネ）" },
  { id: "script-prompts", label: "台本生成（ChatGPT/Gemini）" },
  { id: "editing", label: "Descript・CapCut AI比較" },
  { id: "thumbnail", label: "Canva AI・Midjourneyでサムネ制作" },
  { id: "shorts", label: "YouTubeショート向けAI活用術" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "next-step", label: "次のアクション" },
] as const;

const workflowSteps: readonly WorkflowStep[] = [
  {
    phase: "企画",
    aiRole: "視聴者課題、動画テーマ候補、競合トピックを短時間で整理する。",
    humanRole: "自分の経験とチャンネル方針に沿って、扱うテーマを1つに絞る。",
    output: "企画シート（視聴者、狙う行動、動画ゴール）。",
  },
  {
    phase: "台本",
    aiRole: "構成案と初稿を作り、冒頭フックやCTAまで自動下書きする。",
    humanRole: "事実確認、体験談の挿入、過剰表現の調整を行う。",
    output: "撮影可能な台本（長尺/ショート別）。",
  },
  {
    phase: "編集",
    aiRole: "文字起こし、字幕初稿、不要部分の抽出、短尺化候補の抽出。",
    humanRole: "テンポ調整、誤字幕修正、ブランドトーンの最終調整。",
    output: "公開版動画とショート切り抜き。",
  },
  {
    phase: "サムネ",
    aiRole: "背景素材やラフ案の生成、配色バリエーション生成。",
    humanRole: "文字可読性、訴求軸、クリック率観点で最終案を選択。",
    output: "サムネ2〜3案（ABテスト用）。",
  },
  {
    phase: "公開後改善",
    aiRole: "維持率低下ポイントの要約、次回改善案の下書き。",
    humanRole: "改善優先順位を決め、次回の台本と編集ルールに反映。",
    output: "次回改善メモ（再生維持率とクリック率起点）。",
  },
] as const;

const scriptFramework = [
  "目的: 何を伝え、視聴後に何をしてほしいか",
  "視聴者: 初心者/中級者、悩み、前提知識",
  "尺: 長尺（8〜12分）かショート（15〜45秒）か",
  "フック: 冒頭3〜5秒で提示する結論や問題提起",
  "禁則: 誤情報、断定不可表現、外せない注意点",
  "CTA: 最後に促す行動（登録、コメント、関連動画視聴）",
] as const;

const chatgptPrompt = `あなたはYouTube構成作家です。以下の条件で動画台本を作成してください。

【テーマ】{例: YouTube AI動画制作の始め方}
【視聴者】{例: 副業で動画発信を始めたい会社員}
【動画尺】{例: 9分}
【ゴール】{例: 今日中に1本目の企画と台本を作れる状態}
【必須要素】
- 冒頭5秒: 結論を先に提示
- 本編: 3章構成（課題→手順→失敗回避）
- 具体例: 1つ以上
- 注意点: 誤解されやすい点を1つ明示
- 終盤CTA: 次の行動を1つ提案

出力形式:
1. タイトル案（3案）
2. 章立て（H2相当）
3. ナレーション台本（時間目安つき）
4. ショート版30秒要約`;

const geminiPrompt = `YouTubeショート台本を作成してください。目的は再生維持率の改善です。

入力:
- テーマ: {例: AIで台本作成を時短する方法}
- 対象: {例: 初心者YouTuber}
- 尺: 30秒

制約:
- 1文は30文字以内
- 冒頭3秒で結論
- 20秒時点で具体例を1つ
- 最後5秒でコメント誘導
- 誇張表現や断定表現を避ける

出力:
- 0-3秒 / 4-10秒 / 11-20秒 / 21-30秒 の4ブロックで台本を提示
- 各ブロックに表示テロップ案を1行つける`;

const toolComparisonRows = [
  {
    tool: "Descript",
    strengths: "台本ベース編集、文字起こし起点のカット整理、音声補正を一連で扱いやすい。",
    pricing: "Free / Hobbyist $19 / Creator $35 / Business $50（確認日: 2026-02-20）",
    japanese: "文字起こし対応言語一覧に日本語なし。Dub speechは日本語を含む対応あり。",
    freeLimit: "Freeは文字起こし時間やAIクレジットが限定される。長尺量産は有料前提で試算が必要。",
    fit: "解説系・会話系の長尺動画を、台本と字幕で管理したい人。",
  },
  {
    tool: "CapCut AI",
    strengths: "自動字幕、短尺編集、テンプレ適用、ショート量産フローを高速化しやすい。",
    pricing: "Pro価格は地域・端末で差分。固定額はアプリ内購入画面で確認。",
    japanese: "日本語字幕運用は可能だが、機能提供はOS/アプリ版で差が出る。",
    freeLimit: "4K書き出しや一部AI機能は端末・OS・段階ロールアウトの影響を受ける。[要確認: 利用端末の現行制限]",
    fit: "YouTubeショートを週次で継続投稿したい人。",
  },
] as const;

const thumbnailSteps = [
  "YouTube検索結果で埋もれないために、先に訴求軸（悩み解決/比較/実験）を1つ決める。",
  "Midjourneyなどで背景素材を2〜3パターン生成し、人物・文字領域の余白を確保する。",
  "Canva AIで文字要素とレイアウトを調整し、スマホ表示で可読性を確認する。",
  "公開後24〜72時間のクリック率を見て、タイトルとセットで差し替えテストを行う。",
] as const;

const shortsTips = [
  "15〜45秒は「結論→理由1つ→行動提案」の3ブロックで台本を固定すると離脱が減りやすい。",
  "字幕は自動生成後に必ず固有名詞を人手で修正し、読み違いを放置しない。",
  "YouTube自動吹替は公開前に言語ごとのレビュー状態を確認し、誤変換を防ぐ。",
  "Creator Musicは提供範囲に制約があるため、利用可否をチャンネル画面で確認してから企画に組み込む。",
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        毎週1本、実務で使える生成AIの要点を短く整理して配信します。情報収集だけで終わらず、実際に手を動かす順番まで揃えたい方に向いています。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        LINEで週1AI通信を受け取る（無料）
      </a>
    </div>
  );
}

export default function AiYoutubeContentGuidePage({ faqItems }: AiYoutubeContentGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "YouTube AI動画制作ガイド" },
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
                title="YouTube AI動画制作ガイド2026｜企画・台本・編集・サムネを一気通貫で効率化"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            YouTube AI動画制作ガイド2026｜企画・台本・編集・サムネを一気通貫で効率化
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            結論は、YouTube運用をAIで改善するなら、単発の時短テクニックより
            <strong className="font-semibold text-gray-900">工程設計（企画→台本→編集→サムネ→改善）</strong>
            を先に固定する方が成果が安定します。この記事では、台本生成のプロンプト設計、編集ツール比較、ショート向け運用までを確認日付きで整理します。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-600">
            料金・機能・提供地域は更新されるため、変動情報は確認日 `2026-02-20` を基準に記載しています。
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
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">AI動画制作は「どの工程をAI化するか」を先に分けると失敗が減ります。</li>
            <li className="blog-li pl-1 marker:text-gray-500">
              台本は、ChatGPT/Geminiの差よりも「目的・視聴者・尺・禁則」のプロンプト固定で品質差が出ます。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              編集は Descript と CapCut AI の得意領域が異なり、長尺運用かショート量産かで選ぶのが現実的です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              サムネは素材生成とレイアウト編集を分離し、公開後のクリック率で差し替えを回すと改善速度が上がります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            全工程フローを固定すると、YouTube AI動画制作は継続しやすくなる
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            投稿本数が止まる主因は、毎回ゼロから作業していることです。最初に工程を定義し、AI担当と人間担当を分けると、週次運用へ落とし込みやすくなります。
          </p>
          <div className="mt-7 space-y-4">
            {workflowSteps.map((step) => (
              <section key={step.phase} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{step.phase}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">AI:</span> {step.aiRole}
                </p>
                <p className="blog-p mt-1 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">人:</span> {step.humanRole}
                </p>
                <p className="blog-p mt-1 text-sm leading-7 text-emerald-700">
                  <span className="font-semibold">成果物:</span> {step.output}
                </p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            既存記事の
            <Link href="/academy/blog/ai-video-tool-comparison" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画生成ツール比較
            </Link>
            と
            <Link href="/academy/blog/ai-content-sns-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI×コンテンツ制作ガイド
            </Link>
            も併読すると、企画から配信までの設計を統合しやすくなります。
          </p>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        <motion.section
          id="script-prompts"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            動画 台本 AI生成は、ChatGPT/Gemini共通の設計テンプレで再現性を作る
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            プロンプト設計で重要なのは、モデル名より入力定義です。目的、視聴者、尺、禁則、CTAを固定してから生成すると、修正コストが下がります。
          </p>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">共通で固定する6項目</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {scriptFramework.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="blog-h3 mt-10 text-lg font-semibold text-gray-900">ChatGPT向け長尺テンプレート</h3>
          <pre className="mt-4 overflow-x-auto rounded-md bg-gray-900 p-4 text-xs leading-6 text-gray-100">{chatgptPrompt}</pre>

          <h3 className="blog-h3 mt-10 text-lg font-semibold text-gray-900">Gemini向けショートテンプレート</h3>
          <pre className="mt-4 overflow-x-auto rounded-md bg-gray-900 p-4 text-xs leading-6 text-gray-100">{geminiPrompt}</pre>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            台本の質を上げるには、生成後に冒頭5秒と終盤CTAだけを先に修正する運用が効率的です。ショート運用の設計は
            <Link href="/academy/blog/ai-presentation-workflow" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIプレゼン・発信ワークフロー
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          id="editing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AI 動画編集 2026: Descript・CapCut AI比較</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            編集ツール選定は、機能の多さより運用形態で判断すると迷いが減ります。長尺の音声編集と台本同期を重視するならDescript、ショート量産を重視するならCapCut AIが候補です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金・プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語運用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">無料版/制限</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="px-4 py-4">{row.japanese}</td>
                    <td className="px-4 py-4">{row.freeLimit}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            料金は更新頻度が高いため、契約前に公式ページで再確認してください。とくにCapCutは地域差が大きく、[要確認:
            アプリ内表示価格] を前提に判断する必要があります。
          </p>
        </motion.section>

        <motion.section
          className="mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
        </motion.section>

        <motion.section
          id="thumbnail"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            サムネイルは Canva AI・Midjourney を分業するとクリック率改善が速くなる
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            サムネ制作を1ツールで完結させるより、素材生成とレイアウト編集を分けるほうが再現性が高くなります。素材はMidjourney、最終調整はCanva AIで行う構成が実務で扱いやすいです。
          </p>
          <ol className="blog-ol mt-6 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {thumbnailSteps.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ol>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            画像生成の作り分けは
            <Link href="/academy/blog/ai-image-generation-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI画像生成ツール比較
            </Link>
            で補完できます。
          </p>
        </motion.section>

        <motion.section
          id="shorts"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            YouTubeショート AI活用術は「短尺台本」「字幕品質」「多言語運用」の3点で設計する
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            ショート運用では、1本の完成度より継続再現が重要です。台本テンプレと字幕修正ルールを固定し、多言語展開は段階的に追加してください。
          </p>
          <ul className="blog-ul mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {shortsTips.map((tip) => (
              <li key={tip} className="blog-li pl-1 marker:text-gray-500">
                {tip}
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="blog-h3 text-base font-semibold text-gray-900">YouTube機能の確認ポイント（2026-02-20）</h3>
            <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="blog-li pl-1 marker:text-gray-500">Creator Musicは米国YPP中心で段階提供。</li>
              <li className="blog-li pl-1 marker:text-gray-500">自動吹替は日本語を含む対象言語があるが、公開前レビュー設定が必要。</li>
              <li className="blog-li pl-1 marker:text-gray-500">Dream Screenなどの生成機能は地域とアカウントで提供差がある。</li>
            </ul>
          </div>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            実際の運用で相談されやすい論点をまとめました。価格や仕様は更新されるため、導入前に公式の最新情報へ再照合してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-slate-200 bg-slate-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">YouTube AI動画制作は、工程分解して責任分担を明確にすると継続しやすくなります。</li>
            <li className="blog-li pl-1 marker:text-gray-500">台本はプロンプト構造化、編集は用途別ツール選定、サムネはABテスト運用が重要です。</li>
            <li className="blog-li pl-1 marker:text-gray-500">
              ショート運用は多機能より、冒頭フックと字幕品質を毎週改善する仕組みづくりが成果に直結します。
            </li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            次のアクション: AI活用の判断軸とキャリアを同時に設計する
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。
            ツール名ではなく、何を伝え、どの成果指標で改善するかという判断軸を育てたい方に向いた学習設計です。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">生成AI活用力:</span> 実務で再現できる活用手順を体系化する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">自己理解・キャリアデザイン:</span> AIを使って強みを言語化し、次の選択を明確化する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <span className="font-semibold text-gray-900">仲間と共に学ぶ環境:</span> 相互レビューと対話で改善速度を高める
            </li>
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              AIリブートアカデミーを見る
            </Link>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              無料セミナーを見る
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
