"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";

type FAQItem = {
  question: string;
  answer: string;
};

type CanvaAiGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Canva AI 使い方 2026", "Canva Magic Studio", "Canva 無料 有料 違い"] as const;

const tocItems = [
  { id: "conclusion", label: "結論: まず押さえる使い方" },
  { id: "capabilities", label: "Magic Studioでできること" },
  { id: "practical-workflows", label: "実践: 3つの制作フロー" },
  { id: "free-vs-pro", label: "無料版とProの違い" },
  { id: "comparison", label: "Adobe Express・Designer比較" },
  { id: "risks", label: "商用利用・日本語精度の注意点" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "アカデミーの学び方" },
  { id: "cta", label: "LINEで継続学習する" },
] as const;

const capabilityRows = [
  {
    feature: "Magic Write",
    what: "投稿文・説明文・見出しの下書きを作る",
    bestFor: "SNS文案、チラシのコピー、プレゼンの要点整理",
    notes: "無料は回数制限あり（確認日: 2026-02-20）",
  },
  {
    feature: "Magic Design",
    what: "入力文や素材からレイアウト初稿を提案する",
    bestFor: "テンプレ選定の時短、初稿の方向性比較",
    notes: "提案後の余白・文字組みは手修正が前提",
  },
  {
    feature: "Text to Image",
    what: "文章指示から画像素材を生成する",
    bestFor: "SNS背景、プレゼン挿絵、チラシのラフ素材",
    notes: "日次上限が機能単位で設定される",
  },
  {
    feature: "Background Remover",
    what: "写真や動画の背景を削除する",
    bestFor: "商品画像、人物切り抜き、素材差し替え",
    notes: "動画は90秒未満など制約あり（確認日: 2026-02-20）",
  },
] as const;

const practicalWorkflows = [
  {
    title: "SNS投稿を15分で作るフロー",
    steps: [
      "Magic Writeで「投稿目的・読者・トーン・文字数」を指定して本文を下書きする",
      "Magic Designで投稿テンプレを3案作り、ブランド色に合わせて1案に絞る",
      "Text to Imageで背景素材を生成し、最後に手動で文字間と改行を整える",
    ],
    output: "日次投稿の初稿速度を上げつつ、最終品質を維持しやすい。",
  },
  {
    title: "プレゼン資料の初稿を半日でまとめるフロー",
    steps: [
      "Magic Writeでスライドごとの見出しと要点を箇条書き化する",
      "Magic Designで構成に合うテンプレを適用し、図表スライドだけ先に固定する",
      "不足する図版はText to Imageで作成し、説明テキストは人手で事実確認する",
    ],
    output: "構成検討に時間を回せるため、レビュー往復を減らしやすい。",
  },
  {
    title: "チラシ制作を内製化するフロー",
    steps: [
      "訴求軸を1つに絞り、Magic Writeでキャッチコピー案を複数生成する",
      "商品写真はBackground Removerで切り抜き、テキスト配置スペースを確保する",
      "Magic Designで複数案を比較し、最終版は印刷前提の余白と可読性を確認する",
    ],
    output: "外注前のラフを内製化でき、修正指示の精度が上がる。",
  },
] as const;

const planComparisonRows = [
  {
    item: "Magic Write",
    free: "最大50回（lifetime）",
    pro: "最大500回/月",
    practical: "文章生成を毎日使うならProの方が運用しやすい",
  },
  {
    item: "Text to Image",
    free: "1日あたり上限あり",
    pro: "1日あたり上限あり（条件は機能画面で確認）",
    practical: "大量生成より「方向性決め」に使うと無駄が減る",
  },
  {
    item: "Background Remover",
    free: "制限あり",
    pro: "最大500画像/日（動画は90秒未満など制約あり）",
    practical: "商品画像や人物素材を継続運用するならProが有利",
  },
  {
    item: "料金目安",
    free: "0円",
    pro: "月額1,500円前後[要確認]",
    practical: "投稿頻度と制作工数を基準に費用対効果を判断する",
  },
] as const;

const toolComparisonRows = [
  {
    tool: "Canva AI（Magic Studio）",
    pricing: "無料 / Pro（月額目安あり）",
    strengths: "テンプレ資産が多く、文章からデザイン初稿まで一気通貫で作りやすい",
    cautions: "機能ごとに上限単位が異なり、回数設計を理解しないと詰まりやすい",
  },
  {
    tool: "Adobe Express",
    pricing: "無料 / Premium $9.99/月（公式）",
    strengths: "Adobe製品との連携がしやすく、生成クレジット管理が明示されている",
    cautions: "生成クレジットを使い切ると制作速度が落ちるため、運用計画が必要",
  },
  {
    tool: "Microsoft Designer",
    pricing: "無料（Boost credits日次付与）/ Microsoft 365で増量",
    strengths: "Microsoftアカウントで始めやすく、日次クレジット前提で試しやすい",
    cautions: "無料でも使えるが、クレジット残量で応答速度が変わる点を理解する必要がある",
  },
] as const;

const commercialChecklist = [
  "生成素材に第三者の商標・ロゴ・固有キャラクターを含めない",
  "人物画像は肖像権や利用許諾の前提を確認する",
  "公開前に事実誤認や誤字を人がレビューする",
  "クライアント案件では生成物利用方針を合意文書に残す",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "実務で再現できる使い方を業務単位で設計し、成果に結びつける力を育てる。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを使う目的を自分の強み・価値観と接続し、中長期のキャリア設計に落とし込む。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "対話と相互レビューを通じて、学習を継続できる状態をつくる。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "📩 LINEで毎週AI知識を配信中";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";
const lineCtaButtonLabel = "今すぐ無料で登録する（30秒）";

function LineCtaBox({ className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" }: { className?: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">{lineCtaTitle}</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          {lineCtaButtonLabel}
        </a>
      </div>
    </section>
  );
}

export default function CanvaAiGuidePage({ faqItems }: CanvaAiGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Canva AI使い方ガイド2026" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Canva AI（Magic Studio）使い方ガイド2026｜無料版・Proの違いと実務活用"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Canva AI（Magic Studio）使い方ガイド2026｜無料版・Proの違いと実務活用
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            Canva AIは、文章作成からデザイン初稿、画像素材生成までを1つの画面で回せるのが強みです。初心者がつまずきやすいのは
            「機能ごとの上限が違う」「どこまでAI任せにするか」を決めないまま使うことです。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、Magic Write・Magic Design・Text to Image・背景削除を用途別に整理し、無料版とProの判断軸、
            Adobe Express・Microsoft Designerとの違いまで実務目線でまとめます。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">
            料金・回数制限・ライセンス条件の確認日: 2026-02-20
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">結論: Canva AIは「機能分担」を先に決めると成果が出る</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            まずは「文章」「レイアウト」「素材生成」「仕上げ」の4工程に分け、AIに任せる範囲を固定してください。これだけで、作業時間と品質のブレを抑えやすくなります。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">Magic Write: 文章の初稿を作る</li>
            <li className="blog-li pl-1 marker:text-gray-500">Magic Design: レイアウト候補を比較する</li>
            <li className="blog-li pl-1 marker:text-gray-500">Text to Image: 素材のラフを生成する</li>
            <li className="blog-li pl-1 marker:text-gray-500">人の最終編集: 事実確認・文字組み・権利確認を行う</li>
          </ul>
        </motion.section>

        <WebtoonBannerSection />

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="capabilities"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Canva AI（Magic Studio）でできること一覧</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Canvaの公式案内（Magic機能ページ、Text to Image、Background Remover）を基に、個人と広報担当が実務で使う頻度が高い機能を整理します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">機能</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">できること</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">運用メモ</th>
                </tr>
              </thead>
              <tbody>
                {capabilityRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.feature}</th>
                    <td className="px-4 py-4">{row.what}</td>
                    <td className="px-4 py-4">{row.bestFor}</td>
                    <td className="px-4 py-4">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            画像生成を主軸にしたい場合は
            <Link href="/academy/blog/ai-image-generation-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI画像生成ツール比較
            </Link>
            、投稿文の量産を重視する場合は
            <Link href="/academy/blog/ai-content-sns-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI×ブログ・SNS制作ガイド
            </Link>
            もあわせて確認してください。
          </p>
        </motion.section>

        <motion.section
          id="practical-workflows"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">実践: Magic Write・Magic Design・Text to Imageの使い方</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            どの用途でも共通するコツは「1回で完成を狙わない」ことです。初稿を速く作り、修正を段階化すると精度が上がります。
          </p>
          <div className="mt-6 grid gap-4">
            {practicalWorkflows.map((workflow) => (
              <section key={workflow.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{workflow.title}</h3>
                <ol className="blog-ol mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-7 text-gray-700">
                  {workflow.steps.map((step) => (
                    <li key={step} className="pl-1 marker:text-gray-500">
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="blog-p mt-3 text-sm font-semibold leading-7 text-gray-900">{workflow.output}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            プレゼン用途の工程設計は
            <Link href="/academy/blog/ai-presentation-workflow" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AIでプレゼン資料を効率的に作る方法
            </Link>
            で、プロンプトの型は
            <Link href="/academy/blog/prompt-template-for-work" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              仕事で使えるプロンプトテンプレート集
            </Link>
            で補強できます。
          </p>
        </motion.section>

        <motion.section
          id="free-vs-pro"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">無料版 vs Canva Proの違い（確認日: 2026-02-20）</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            CanvaのAI上限は「機能ごとに管理単位が異なる」点が重要です。回数/月次/日次が混在するため、契約前に自分の利用頻度を業務単位で見積もると失敗しにくくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">無料版</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Canva Pro</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">判断ポイント</th>
                </tr>
              </thead>
              <tbody>
                {planComparisonRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.free}</td>
                    <td className="px-4 py-4">{row.pro}</td>
                    <td className="px-4 py-4">{row.practical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-xs leading-6 text-gray-500">
            注記: Pro価格は地域・税制・表示通貨で変動します。公開時点では契約画面の最新表示を優先してください。[要確認]
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Adobe Express・Microsoft Designerとの比較</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            3ツールの差は、見た目より「クレジット運用」と「既存ワークフロー接続」で出ます。SNS運用者はCanva、中長期のAdobe資産連携はAdobe
            Express、Microsoft環境中心ならDesignerを優先すると選びやすくなります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">価格/クレジット</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="px-4 py-4">{row.cautions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="risks"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">商用利用・ライセンス・日本語精度の注意点</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            Canva AIは商用利用可能なケースがある一方で、第三者権利の侵害を自動で防いでくれるわけではありません。特に中小企業の広報運用では、公開前チェックを定型化することが重要です。
          </p>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">公開前チェックリスト</h3>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {commercialChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">日本語テキスト生成は「下書き用途」で使う</h3>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            公式条件ではAI機能がすべての言語で同等提供される保証はありません。日本語文案は、助詞や語尾の不自然さが残るケースを前提に、公開前の人手校正を必須にしてください。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-content-sns-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-image-generation-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI画像生成おすすめツール比較｜使い方と選び方
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ai-presentation-workflow" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AIでプレゼン資料を効率的に作る方法
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/prompt-template-for-work" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                仕事で使えるプロンプトテンプレート集
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-xl font-bold text-will-primary">AI活用の判断軸とキャリア設計を同時に整える</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得だけではなく、実務で継続できるAI活用とキャリア設計を一体で扱います。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {academyPillars.map((pillar) => (
              <li key={pillar.title} className="blog-li pl-1 marker:text-gray-500">
                <span className="font-semibold text-gray-900">{pillar.title}</span>: {pillar.body}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            Canvaのようなツールをどの業務課題に当てるかを判断し、実務で再現できる学習設計へつなげたい方は、全体の学習プロセスを見直すことが有効です。
          </p>
        </motion.section>

        <section id="cta" className="mt-14">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
