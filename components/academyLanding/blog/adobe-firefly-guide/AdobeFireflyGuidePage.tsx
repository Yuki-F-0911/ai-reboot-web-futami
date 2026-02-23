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

type AdobeFireflyGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Adobe Firefly 使い方 2026",
  "Adobe AI 画像生成",
  "Firefly 商用利用",
  "Adobe Express AI",
  "Firefly Video",
] as const;

const tocItems = [
  { id: "summary", label: "結論: Firefly導入の判断軸" },
  { id: "what-is-firefly", label: "Fireflyとは何か（2026年版）" },
  { id: "how-to-use-apps", label: "Photoshop・Illustrator・Expressでの使い方" },
  { id: "free-vs-paid", label: "無料版と有料版の違い" },
  { id: "commercial-license", label: "商用利用ライセンスの読み方" },
  { id: "midjourney-dalle", label: "Midjourney・DALL·Eとの違い" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "次の学習ステップ" },
  { id: "line-cta-final", label: "LINEで継続学習する" },
] as const;

const appFeatureRows = [
  {
    app: "Photoshop",
    strengths: "Generative Fill / Expand で既存画像の編集工程に直接統合できる",
    typicalUse: "広告バナー、商品写真補正、構図の再調整",
    premiumBoundary: "動画生成やpartner model利用時はpremium消費",
  },
  {
    app: "Illustrator",
    strengths: "Text to Vector Graphic と Generative Recolor でベクター制作を短縮できる",
    typicalUse: "ロゴ案、アイコン、配色パターンの初稿作成",
    premiumBoundary: "一部機能はbeta継続、運用前に機能条件を確認",
  },
  {
    app: "Adobe Express",
    strengths: "画像・コピー・動画を1画面で編集し、SNS配布まで完結しやすい",
    typicalUse: "SNS投稿、短尺動画、社内資料の量産",
    premiumBoundary: "Generate Video はpremium機能",
  },
  {
    app: "Firefly Web",
    strengths: "Text to Image / Text to Video / Image to Video を起点に高速で試行できる",
    typicalUse: "コンセプト検証、ラフ案作成、素材探索",
    premiumBoundary: "freeはクレジットがLimitedで変動",
  },
] as const;

const planRows = [
  {
    plan: "Firefly Free",
    credits: "Limited（固定値は公開されず、時期により変動）",
    premium: "試用枠のみ",
    fit: "初期検証・UI確認",
  },
  {
    plan: "Firefly Standard",
    credits: "premium 2,000 + standard無制限",
    premium: "利用可",
    fit: "静止画中心の個人運用",
  },
  {
    plan: "Firefly Pro",
    credits: "premium 4,000 + standard無制限",
    premium: "利用可",
    fit: "動画・画像を定期生成する制作者",
  },
  {
    plan: "Creative Cloud Pro",
    credits: "premium 4,000 + standard無制限",
    premium: "利用可",
    fit: "Photoshop/Illustrator運用と一体化したい法人・個人",
  },
  {
    plan: "Adobe Express Premium",
    credits: "premium 250 + standard利用",
    premium: "利用可",
    fit: "SNS/マーケ素材を少量高速で回すチーム",
  },
] as const;

const commercialChecklist = [
  {
    title: "1. 機能画面の注記を確認する",
    detail:
      "Adobe Legalの原則だけで判断せず、実際に使う機能画面の利用条件を必ず確認します。betaやpartner modelには追加注記が付く場合があります。",
  },
  {
    title: "2. 公開前レビュー責任者を固定する",
    detail:
      "生成物をそのまま公開せず、商標・著作権・肖像などの観点を確認する責任者を明確にします。個人運用でもチェック工程を省略しない運用が安全です。",
  },
  {
    title: "3. 生成プロセスを記録する",
    detail:
      "プロンプト、編集履歴、採用版の理由を残すと、後日確認が必要になった際に対応しやすくなります。法人は監査対応と再現性の観点で特に有効です。",
  },
  {
    title: "4. beta機能は都度の再確認をルール化する",
    detail:
      "Firefly Video周辺などbeta機能は提供条件が変わる可能性があります。月次で利用条件を確認する運用を固定しておくと、急な変更に対応しやすくなります。",
  },
] as const;

const comparisonRows = [
  {
    service: "Adobe Firefly",
    commercial: "原則商用可（条件は機能画面・規約注記を確認）",
    contract: "Creative Cloud契約と連携しやすい",
    workflow: "Photoshop / Illustrator / Expressに直結",
    fit: "既存Adobe運用を活かして安全に拡張したい個人・法人",
  },
  {
    service: "Midjourney",
    commercial: "有料会員は原則保有可、企業規模条件あり",
    contract: "年商100万USD超はPro/Mega条件",
    workflow: "独自環境中心。Adobe連携は後工程で実施",
    fit: "画風探索を重視する制作チーム",
  },
  {
    service: "DALL·E（OpenAI）",
    commercial: "Terms上でOutput権利はユーザーに割当（適用法範囲）",
    contract: "OpenAI利用規約・ポリシー準拠が前提",
    workflow: "API連携や他ツール統合が中心",
    fit: "アプリ実装や自社ワークフロー統合を重視するチーム",
  },
] as const;

export default function AdobeFireflyGuidePage({ faqItems }: AdobeFireflyGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Adobe Firefly使い方ガイド2026" },
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
                title="Adobe Firefly使い方ガイド2026｜商用利用・料金・連携機能を解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Adobe Firefly使い方ガイド2026｜商用利用・料金・連携機能を解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            Adobe Fireflyは、画像生成だけでなく動画・音声・ベクターまで扱えるAdobe公式の生成AI群です。2026年時点では、Firefly Video
            Model本体は正式提供ですが、周辺の一部機能にはbeta表記が残っています。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、Photoshop・Illustrator・Adobe Expressでの使い方、商用利用ライセンス、無料版と有料版の差、Midjourney・DALL·Eとの違いを、導入判断に必要な観点で整理します。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">
            価格・仕様・規約の確認日: 2026-02-20（変動情報は導入前に再確認してください）
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">
            結論: Firefly導入は「商用条件の確認」と「既存Adobe運用との接続」で決める
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li className="blog-li pl-1 marker:text-blue-700">
              商用利用は原則可能。ただしbeta機能やpartner modelは機能画面の注記確認が必須。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              Firefly無料版のクレジットは固定値公開ではなくLimited表記。運用時は毎月の残高確認が必要。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              Firefly Video Model本体は正式提供だが、video editorなど周辺機能はbetaが継続。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              Photoshop/Illustrator/Expressの得意領域が異なるため、制作工程に合わせて使い分けると効果が高い。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="what-is-firefly"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Adobe Fireflyとは何か（2026年版）</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            FireflyはAdobeが提供する生成AIの総称で、画像・動画・音声・ベクター生成をCreative Cloudの各アプリに統合しています。実務では「単体の生成AIツール」ではなく、制作フローに埋め込める点が価値になります。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            2026年時点では、Text to Image、Text to Video、Image to Video、Translate Video/Audio、Text to Sound Effectsなどが提供され、機能ごとにstandard/premium消費の境界が定義されています。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">Firefly Videoの提供状況</h3>
            <ul className="blog-ul mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              <li className="blog-li pl-1 marker:text-gray-500">Firefly Video Model本体はAdobe公式発表でgenerally available。</li>
              <li className="blog-li pl-1 marker:text-gray-500">
                Firefly video editor / Prompt to Edit / Generate Soundtrackはbeta表記が残る。
              </li>
              <li className="blog-li pl-1 marker:text-gray-500">
                教育用途（K12など）では利用可否に制約があるため、契約形態ごとの確認が必要。
              </li>
            </ul>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            動画生成AIを横断で比較したい場合は、
            <Link
              href="/academy/blog/ai-video-generation-comparison"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI動画生成ツール比較ガイド
            </Link>
            も併せて確認してください。
          </p>
        </motion.section>

        <motion.section
          id="how-to-use-apps"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Photoshop・Illustrator・Expressでの使い方</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Fireflyの実務価値は、単発生成より「既存制作工程のどこに組み込むか」で決まります。以下は個人・法人どちらでも使いやすい整理です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">アプリ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている業務</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">premium境界</th>
                </tr>
              </thead>
              <tbody>
                {appFeatureRows.map((row) => (
                  <tr key={row.app} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.app}</th>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="px-4 py-4">{row.typicalUse}</td>
                    <td className="px-4 py-4">{row.premiumBoundary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">導入の基本フロー</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">Firefly Webでラフ案を複数生成し、方向性を確定する</li>
            <li className="blog-li pl-1 marker:text-gray-500">PhotoshopまたはIllustratorで本番用に編集し、ブランド基準に合わせる</li>
            <li className="blog-li pl-1 marker:text-gray-500">Adobe ExpressでSNS/広告向けにサイズ展開し、配布物を作成する</li>
            <li className="blog-li pl-1 marker:text-gray-500">公開前に商用利用条件と権利確認を実施する</li>
          </ol>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            画像生成ツール全体の役割分担は、
            <Link
              href="/academy/blog/ai-image-generation-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI画像生成ガイド
            </Link>
            でも比較できます。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="free-vs-paid"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">無料版（firefly.adobe.com）と有料Creative Cloudの違い</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            もっとも誤解が多いのがクレジット仕様です。2026年2月時点でAdobe公式FAQは、無料ユーザーのクレジットを固定値で示さず、Limitedとsubject to
            changeの方針を明示しています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">クレジット目安</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">premium機能</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {planRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-4">{row.credits}</td>
                    <td className="px-4 py-4">{row.premium}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-xs leading-6 text-gray-500">
            注記: freeの月間クレジットは固定値断定ができないため、Adobeアカウント画面で毎月確認してください。
          </p>
          <p className="blog-p mt-2 text-xs leading-6 text-gray-500">
            注記: 期間限定キャンペーンの無制限提供は終了日が設定される場合があります。[要確認: 公開時点の最新施策]
          </p>
        </motion.section>

        <motion.section
          id="commercial-license"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Firefly商用利用ライセンスの正確な読み方</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Fireflyは「商用利用しやすい生成AI」として知られていますが、実務では規約文を運用手順に落とし込むことが重要です。原則商用利用可でも、用途・機能・契約条件を読まずに運用するとリスクが残ります。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">Adobe Legal Guidelines §8では、商用利用可を明示</li>
            <li className="blog-li pl-1 marker:text-gray-500">ただし機能上で別途制限が示された場合はその条件が優先</li>
            <li className="blog-li pl-1 marker:text-gray-500">企業向けには契約条件付きでIP indemnification対象機能がある</li>
          </ul>
          <div className="mt-6 grid gap-4">
            {commercialChecklist.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            著作権と社内ガイドラインまで整理する場合は、
            <Link
              href="/academy/blog/ai-copyright-commercial-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI著作権・商用利用ガイド
            </Link>
            の観点も有効です。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="midjourney-dalle"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Midjourney・DALL·Eとの違い（商用利用可否の観点）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            画像品質だけで比較すると判断を誤りやすくなります。法人利用では、契約条件の明確さ、導入時の説明責任、既存制作ワークフローとの接続が優先度の高い評価軸です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">サービス</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用条件</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">契約上の注意</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">制作フロー適合</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="px-4 py-4">{row.commercial}</td>
                    <td className="px-4 py-4">{row.contract}</td>
                    <td className="px-4 py-4">{row.workflow}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            どのツールでも、最終成果物の品質と権利確認責任は利用者側に残ります。実務導入では、モデル性能よりも運用設計の明確さが成果を左右します。
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

        <motion.section
          id="related-links"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">関連記事</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-image-generation-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI画像生成ガイド｜用途別の選び方と運用の基本
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-video-generation-comparison"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画生成ツール比較2026｜主要サービスの違い
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/canva-ai-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Canva AIガイド｜非デザイナー向けの実務活用
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-xl font-bold text-will-primary">AI活用の判断軸とキャリア設計を同時に整える</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力の習得だけに留まらず、次の3本柱で学習と実践を設計しています。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">生成AI活用力: 実務に落とし込めるAI活用の型を体系化する</li>
            <li className="blog-li pl-1 marker:text-gray-500">
              自己理解・キャリアデザイン: AIを鏡に強みと価値観を言語化し、次の役割を再設計する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">仲間と共に学ぶ環境: 対話と協働で学習を継続し、変化を定着させる</li>
          </ul>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            Firefly導入をきっかけに、ツール選定だけで終わらず、業務成果とキャリアの両方を更新したい方は、学習プロセス全体を見直すことが有効です。
          </p>
        </motion.section>

        <section id="line-cta-final" className="mt-14">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
