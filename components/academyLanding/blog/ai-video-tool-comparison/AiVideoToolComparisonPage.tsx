"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";

type FAQItem = {
  question: string;
  answer: string;
};

type AiVideoToolComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 動画生成 おすすめ", "AI動画 ツール 比較", "動画生成AI"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "what-is-ai-video-generation", label: "AI動画生成とは？（3カテゴリ）" },
  { id: "tool-comparison", label: "主要AI動画生成ツール比較" },
  { id: "recommended-by-purpose", label: "用途別おすすめツール" },
  { id: "getting-started", label: "AI動画生成の始め方（無料から）" },
  { id: "ai-video-editing", label: "AI動画編集ツールの活用" },
  { id: "business-use", label: "ビジネスでのAI動画活用シーン" },
  { id: "cautions", label: "注意点（著作権・品質管理・商用利用）" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連リンク" },
  { id: "next-step", label: "次の一歩を決めたい方へ" },
] as const;

const promptStarter = [
  "目的: 何の動画か（SNS/プレゼン/広告/教育など）",
  "尺: 何秒か（5〜10秒から試すと失敗しにくい）",
  "縦横: 9:16（縦）/16:9（横）/1:1 など",
  "内容: シーンの流れ（冒頭→中盤→締め）や台詞の有無",
  "動き: カメラワーク（固定/パン/ズーム）と被写体の動き",
  "画: テイスト（実写風/アニメ/3D/抽象）と雰囲気（明るい/シネマ調）",
  "制約: NG要素（ロゴ/特定人物/誤情報）と商用利用条件",
] as const;

const toolComparisonRows = [
  {
    tool: "Sora",
    strengths: "高品質な映像表現を狙いやすく、テキスト指示からストーリー性のある映像を作る用途に向きます。",
    howToStart: "提供UIで短尺から試し、目的（広告/教育/SNS）に合わせて尺と構図を固定して反復します。",
    caution: "提供状況・利用条件・出力仕様は更新されるため、公式情報で確認してください。",
    fit: "品質を優先し、少数の動画を丁寧に作り込みたい人。",
  },
  {
    tool: "Runway",
    strengths: "生成だけでなく編集フロー（合成・カット・スタイル調整）まで一連で扱いやすいのが強みです。",
    howToStart: "既存素材（画像/動画）を用意し、まずは画像→動画や短尺生成でテストしてから編集工程に接続します。",
    caution: "料金体系や商用利用条件、機能提供は変わることがあるため公式で確認してください。",
    fit: "制作フロー全体（生成→編集→書き出し）をまとめたい人。",
  },
  {
    tool: "Pika",
    strengths: "短尺のアイデア出しやSNS向け素材づくりに使いやすく、試行回数を増やしやすい傾向です。",
    howToStart: "縦型/横型の比率を決め、同じプロンプトの型で複数案を生成して比較します。",
    caution: "解像度・尺・透かしなどはプランで変わることがあるため公式で確認してください。",
    fit: "SNS素材の試作を高速に回したい人。",
  },
  {
    tool: "Kling",
    strengths: "動きや質感にこだわった映像表現を狙う用途で候補になりやすいツールです。",
    howToStart: "短尺で「動き」と「カメラ」を分けて検証し、当たりパターンをテンプレ化します。",
    caution: "提供地域や利用条件は変わる可能性があるため、最新の公式情報を確認してください。",
    fit: "動きのあるB-rollや印象的なカットを作りたい人。",
  },
  {
    tool: "Veo",
    strengths: "テキストから動画生成の選択肢として検討されやすく、用途に応じた表現の幅を狙えます。",
    howToStart: "目的と禁則（NG要素）を最初に明記し、尺・比率・シーン構成を固定して反復します。",
    caution: "提供状況や利用条件、出力品質は更新されるため公式で確認してください。",
    fit: "複数案を比較しながら、方向性の合う映像を探したい人。",
  },
  {
    tool: "Luma Dream Machine",
    strengths: "画像→動画を含む素材生成の選択肢として検討されやすく、映像のたたき台づくりに使えます。",
    howToStart: "まずは1シーンの短尺で、被写体と背景、カメラの動きを分解して指定します。",
    caution: "制限や商用利用条件は更新されることがあるため、公式情報で確認してください。",
    fit: "素材カットを作って編集で組み立てたい人。",
  },
] as const;

const recommendationsByPurpose = [
  {
    title: "SNS動画（ショート/リール）",
    recommendation:
      "生成AIでカット（B-roll）を作り、仕上げはCapCut AIやOpus Clipで縦型・字幕・テンポを整える。",
    detail:
      "SNSは「量産」と「テンポ」が重要です。生成AIだけで完結させるより、編集AIで後工程を自動化した方が継続しやすいです。",
  },
  {
    title: "プレゼン動画（説明・解説）",
    recommendation: "スクリプト（台本）を先に固め、必要なカットを生成AIで作って編集で組み立てる。",
    detail:
      "伝わりやすさは構成が8割です。最初に台本と見出し（章立て）を決め、映像は補助素材として追加すると品質が安定します。",
  },
  {
    title: "プロモーション（LP/広告）",
    recommendation: "品質優先のツールで少数精鋭のカットを作り、Runway等で合成・調整して仕上げる。",
    detail:
      "広告はブランド表現と誤情報リスクの管理が重要です。素材の権利確認と最終チェックの運用を前提に進めるのが安全です。",
  },
  {
    title: "教育コンテンツ（研修・講座）",
    recommendation: "解説音声・字幕の整備を重視し、Descript等で編集工程を効率化する。",
    detail:
      "学習は「聞き取りやすさ」と「字幕の正確さ」が成果に直結します。生成映像はあくまで理解補助に使うと破綻しにくいです。",
  },
] as const;

const gettingStartedSteps = [
  "用途（SNS/プレゼン/広告/教育）と合格ライン（尺・比率・品質）を決める",
  "無料枠のあるツールで短尺（5〜10秒）を1シーンだけ試す",
  "当たりパターンのプロンプト（目的・動き・画の雰囲気）をテンプレ化する",
  "必要なら画像→動画に切り替え、素材（静止画）を整えて再現性を上げる",
  "編集AIで字幕・縦型化・テンポ調整を行い、運用フローとして固定する",
] as const;

const aiEditingTools = [
  {
    tool: "CapCut AI",
    strengths: "縦型動画の編集、字幕生成、テンプレ活用などSNS運用の後工程をまとめて効率化しやすい。",
  },
  {
    tool: "Descript",
    strengths: "文字起こし・音声編集・章立てなど、話す系コンテンツの編集フローと相性が良い。",
  },
  {
    tool: "Opus Clip",
    strengths: "長尺動画からショートを自動抽出し、字幕やフォーマットを整えて量産する用途で使われやすい。",
  },
] as const;

const businessUseCases = [
  {
    title: "マーケティング（広告・SNS運用）",
    detail: "素材カットの生成、バリエーション案の高速作成、クリエイティブ検証の回転数アップ。",
  },
  {
    title: "採用（求人・会社紹介）",
    detail: "採用動画の構成案づくり、短尺の職種紹介、撮影が難しいシーンの補助素材生成。",
  },
  {
    title: "社内教育（研修・マニュアル）",
    detail: "手順説明の補助映像、字幕の自動化、章立てと要点まとめの効率化。",
  },
  {
    title: "EC（商品紹介・レビュー）",
    detail: "商品特徴の説明カット、背景やB-rollの補完、ショート動画の量産。",
  },
] as const;

const cautionChecklist = [
  "各ツールの利用規約（商用利用・クレジット・禁止事項）を確認する",
  "第三者の著作権・商標・肖像権（ロゴ/有名キャラクター/特定人物の再現）を侵害しない",
  "誤情報や誤解を招く表現（実在人物の発言捏造、誇大な性能表現）を避け、最終チェックを必ず入れる",
  "機密情報や未公開情報を入力しない（社内ルールの整備が前提）",
  "BGM/効果音/フォントなど、動画の周辺素材の権利も含めて管理する",
] as const;

export default function AiVideoToolComparisonPage({ faqItems }: AiVideoToolComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-3xl px-5 sm:px-6">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI動画生成ツール比較" },
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
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI動画生成ツールおすすめ比較｜用途別の選び方と始め方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月17日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論から言うと、AI動画生成は<strong className="font-semibold text-gray-900">「素材を作る（生成）」</strong>と
            <strong className="font-semibold text-gray-900">「仕上げる（編集）」</strong>を分けると失敗しにくいです。
            SNSの短尺は編集AI、プロモや説明動画は生成AIでカットを作って編集で組み立てる、という使い分けが現実的です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※料金や提供機能は更新されるため、最新の条件は公式サイトで確認してください。
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
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              ツール選びの前に<strong className="font-semibold text-gray-900">用途（SNS/プレゼン/広告/教育）</strong>と
              <strong className="font-semibold text-gray-900">合格ライン（尺・比率・品質）</strong>を決めると迷いが減ります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              生成AIは「完成品を一発で作る」より、<strong className="font-semibold text-gray-900">素材カットの初稿を増やす</strong>
              使い方で効果が出やすいです。
            </li>
            <li className="pl-1 marker:text-gray-500">
              SNSの短尺は、CapCut AIやOpus Clipなどの<strong className="font-semibold text-gray-900">編集AI</strong>を組み合わせると継続しやすくなります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              商用利用は<strong className="font-semibold text-gray-900">規約・著作権・商標・肖像権</strong>の確認が必須です。
            </li>
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
          <h2 id="what-is-ai-video-generation" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI動画生成とは？（テキストから動画、画像から動画、動画編集AI）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI動画は大きく「テキスト→動画」「画像→動画」「動画編集AI（後工程の自動化）」の3カテゴリに分けて考えると整理しやすいです。
            多くの現場では、生成AI単体よりも、編集AIまで含めたワークフローとして設計した方が成果が出やすい傾向があります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">まず押さえるプロンプトの型</h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {promptStarter.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
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
          <h2 id="tool-comparison" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            主要AI動画生成ツール比較（Sora/Runway/Pika/Kling/Veo/Luma Dream Machine）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            迷ったら「何を作るか（短尺/SNS/広告/教育）」と「どこまでをAIに任せるか（生成/編集）」で選ぶと判断が速くなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">強み</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">始め方</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="py-4 px-4">{row.strengths}</td>
                    <td className="py-4 px-4">{row.howToStart}</td>
                    <td className="py-4 px-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 id="recommended-by-purpose" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別おすすめツール（SNS動画/プレゼン動画/プロモーション/教育コンテンツ）
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {recommendationsByPurpose.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.recommendation}</p>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.detail}</p>
              </div>
            ))}
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
          <h2 id="getting-started" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI動画生成の始め方（無料で試せるツールから）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            初心者は、いきなり長尺を作らず「1シーンの短尺」を反復して、当たりの型を作るのが最短ルートです。
            その上で、編集AIを使って仕上げ工程を固定すると、実務で回せる形になります。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">ステップ（初心者向け）</h3>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {gettingStartedSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="ai-video-editing" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI動画編集ツールの活用（CapCut AI/Descript/Opus Clip等）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            「生成した素材をどう使うか」で成果が決まります。SNS運用や説明動画では、編集工程の自動化（字幕、カット、縦型化）が効くことが多いです。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {aiEditingTools.map((item) => (
              <div key={item.tool} className="rounded-xl border border-slate-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-bold text-gray-900">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.strengths}</p>
              </div>
            ))}
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
          <h2 id="business-use" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ビジネスでのAI動画活用シーン（マーケ/採用/社内教育/EC）
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {businessUseCases.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-subtle">
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </div>
            ))}
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
          <h2 id="cautions" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            AI動画生成の注意点（著作権、品質管理、商用利用条件）
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-700">
            AI動画は便利ですが、商用利用では「ツールの規約」と「第三者権利」の両方を確認する必要があります。判断が難しい場合は、社内の法務/コンプライアンスと相談しながら運用ルールを整えるのが安全です。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">チェックリスト</h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {cautionChecklist.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
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
          <h2 id="faq" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
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

        <section className="mt-14 border-t border-slate-200 pt-12 pb-4">
          <h2 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/academy" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIリブートアカデミー TOP
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
                href="/academy/blog/how-to-learn-generative-ai"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                社会人のための生成AI学習ロードマップ
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-business-efficiency-cases"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI業務効率化事例集
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
                href="/academy/blog/ai-image-generation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI画像生成おすすめツール比較
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-presentation-workflow"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでプレゼン資料を効率的に作る方法
              </Link>
            </li>
          </ul>
        </section>

        <motion.section
          className="mt-14 border-t border-gray-300 pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="next-step" className="scroll-mt-28 text-2xl font-bold text-gray-900">
            次にAI動画を業務に組み込みたい方へ
          </h2>
          <p className="mt-4 text-base leading-8 text-gray-700">
            AI動画は、ツール選びよりも「運用設計」で差がつきます。用途（SNS/広告/教育）を決め、品質基準（尺・誤情報・ブランド表現）とルール（機密情報・権利確認・最終チェック）までセットで整えると、継続的な時短と成果につながります。まずは無料セミナーで活用事例を確認し、個別相談で自社に合う運用の作り方を相談できます。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              個別相談を申し込む
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
