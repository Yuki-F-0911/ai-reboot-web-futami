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

type AiVideoGenerationComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["動画生成AI 比較", "Kling AI", "Midjourney V1 Video", "Runway Gen-3 Alpha"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "scope", label: "比較対象と評価軸" },
  { id: "comparison-table", label: "5ツール比較表" },
  { id: "selection-guide", label: "用途別の選び方" },
  { id: "getting-started", label: "無料で始める方法と料金の見方" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const comparisonRows = [
  {
    tool: "Kling AI",
    specs: "テキスト→動画 / 画像→動画、最大1080p・30fps・最大3分",
    quality: "高（長尺でも動き表現が安定しやすい）",
    speed: "中（長尺設定時は待機増）",
    price: "無料枠あり（1日あたり上限）/ 有料プランあり（2026年2月時点）",
    japanese: "△（公式の日本語仕様公開が限定）",
    commercial: "△（商用利用は有料プラン必須）",
    fit: "SNS向け短尺〜中尺、動き重視素材",
  },
  {
    tool: "Midjourney V1 Video",
    specs: "静止画→動画（Animate）、4〜8秒の短尺生成",
    quality: "高（既存画像のテイスト維持が得意）",
    speed: "高（短尺生成中心）",
    price: "Pro / Megaプラン限定（2026年2月時点）",
    japanese: "△（英語UI中心）",
    commercial: "△（プラン規約と権利確認が必須）",
    fit: "既存ビジュアルの短尺アニメ化、MV/広告の絵コンテ",
  },
  {
    tool: "Runway Gen-3 Alpha",
    specs: "テキスト→動画 / 画像→動画、最大10秒",
    quality: "高（モーション精度と映像品質が高い）",
    speed: "中",
    price: "Advancedプランで利用可（2026年2月時点）",
    japanese: "△（UIは英語中心）",
    commercial: "○（有料プランで可、Free不可）",
    fit: "案件制作、チーム運用",
  },
  {
    tool: "Seedance",
    specs: "Dreamina / Doubao経由で利用、モデル仕様は提供元ごとに差",
    quality: "高（公式が高品質モデルとして提示）",
    speed: "中〜高（モデル/混雑状況で変動）",
    price: "Dreamina / Doubao側プラン依存",
    japanese: "△（公式情報が限定）",
    commercial: "△（利用先規約で判断）",
    fit: "高品質案の試作工程",
  },
  {
    tool: "Sora",
    specs: "テキスト→動画中心、利用プランで生成上限と同時実行数が変動",
    quality: "高（構図維持と表現安定性で評価）",
    speed: "中（混雑時に待機あり）",
    price: "Plus $20/月、Pro $200/月（条件差あり）",
    japanese: "△（利用前に実地検証推奨）",
    commercial: "○（OpenAI規約ベースで運用）",
    fit: "企画・提案向けの初稿作成",
  },
] as const;

const selectionGuides = [
  {
    useCase: "SNS動画",
    recommendation: "Kling AIまたはRunway Gen-3 Alphaで短尺素材を量産し、編集ツールで仕上げる。",
    reason: "初動の本数確保とモーション品質を両立しやすくなります。",
  },
  {
    useCase: "プレゼン動画",
    recommendation: "SoraまたはRunway Gen-3 Alphaで必要カットを生成し、章立てに合わせる。",
    reason: "説明動画は情報伝達が優先なので、構図の安定を重視します。",
  },
  {
    useCase: "副業案件",
    recommendation: "Runwayの有料プランを基軸に、Kling AIの商用条件を補助選択肢として管理する。",
    reason: "商用条件の明確さと修正速度を優先してください。",
  },
  {
    useCase: "個人制作",
    recommendation: "Midjourney V1 Videoで既存画像を4〜8秒で動かし、必要に応じて他ツールに展開する。",
    reason: "ビジュアル資産を活かして、試作速度を高めやすくなります。",
  },
] as const;

const freeStartSteps = [
  "用途を固定する（SNS / プレゼン / 副業 / 個人制作）",
  "同一シーンを各ツールで短尺生成し、品質と待機時間を比較する",
  "Midjourneyは同じ元画像からAnimateを実行し、4〜8秒の再現性を確認する",
  "1本あたり工数を記録し、再現性が出るまで絞り込む",
] as const;

const pricingChecks = [
  "月額だけでなく、1本あたりのクレジット消費量で比較する",
  "Kling AIは無料枠の日次上限を確認し、商用利用が有料プラン前提かを先に確定する",
  "Midjourney V1 VideoはPro / Mega限定、Runway Gen-3 AlphaはAdvanced条件を先に確認する",
  "Freeと有料で商用可否が変わるかを最優先で確認する",
] as const;

type LineCtaBoxProps = {
  className: string;
  titleClassName: string;
};

function LineCtaBox({ className, titleClassName }: LineCtaBoxProps) {
  return (
    <div className={className}>
      <p className={titleClassName}>📩 LINEで毎週AI知識を配信中</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        AIリブートのLINEでは、毎週1本・仕事で使えるAI知識とニュース解説を配信しています。講座に来る前に基礎を揃えておきたい方に最適です。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </div>
  );
}

export default function AiVideoGenerationComparisonPage({ faqItems }: AiVideoGenerationComparisonPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "動画生成AI比較2026" },
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
                title="動画生成AI比較2026｜Kling AI・Midjourney V1 Video・Runway Gen-3と主要モデルの選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            動画生成AI比較2026｜Kling AI・Midjourney V1 Video・Runway Gen-3と主要モデルの選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論として、動画生成AIは「用途→商用条件→コスト→品質」の順で絞ると選定が速くなります。この記事は
            <strong className="font-semibold text-gray-900">テキスト/画像から動画を作る生成AI</strong>
            の比較に限定し、VrewやCapCutなど編集中心ツールは対象外とします。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            編集中心ツールは
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-video-tool-comparison
            </Link>
            で扱います。比較軸は品質・速度・価格・日本語対応・商用利用の5つです。
          </p>
          <p className="mt-4 text-base leading-8 text-gray-700">
            Suno/Udioなど音楽生成AIは
            <Link href="/academy/blog/ai-music-generation-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-music-generation-2026
            </Link>
            に分離し、動画生成の比較とは切り分けて判断してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※料金・機能・規約は更新が速いため、確認日は2026年2月20日で統一しています。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">先に用途と商用条件を固定し、その後に品質とコストを比較すると選定がぶれません。</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Kling AIは最大1080p・30fps・最大3分まで対応しますが、商用利用は有料プラン前提です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              Midjourney V1 Videoは既存画像を4〜8秒で動かせるため、短尺の検証サイクルが速くなります。
            </li>
            <li className="pl-1 marker:text-gray-500">Runway Gen-3 Alphaは最大10秒生成で、映像品質とモーション精度を重視する用途に向きます。</li>
            <li className="pl-1 marker:text-gray-500">無料枠は相性確認と工数見積もりに使います。</li>
            <li className="pl-1 marker:text-gray-500">
              配信導線まで含める場合は
              <Link href="/academy/blog/ai-content-sns-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ai-content-sns-guide
              </Link>
              を参照してください。
            </li>
          </ul>
        </motion.section>

        {/* Answer Box */}
        <section className="mb-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">この記事の結論</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            動画生成AIの比較は、用途を決めたうえで商用条件と1本あたりコストを先に確認するのが最短です。短尺の高速検証はMidjourney V1 Video、案件運用はRunway Gen-3 Alpha、動き重視素材はKling AIが有力候補になります。SoraやSeedanceを含めて同一シーンで無料検証し、再現性が出るツールだけに課金するのが安全です。
          </p>
        </section>

        <motion.section
          id="scope"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">比較対象と評価軸を先に固定すると、選定が速くなる</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            迷いやすい原因は、生成工程と編集工程を混在させることです。本記事は生成工程に限定し、編集工程は
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-video-tool-comparison
            </Link>
            へ分離します。動画サムネイルや素材画像まで含める場合は
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-image-generation-guide
            </Link>
            を併用してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            音楽生成（Suno/Udio）を同時に検討する場合は、比較軸が異なるため
            <Link href="/academy/blog/ai-music-generation-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-music-generation-2026
            </Link>
            を別途参照してください。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">この比較で見る5軸</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">品質: 動きの破綻率と構図維持</li>
              <li className="pl-1 marker:text-gray-500">速度: 待機時間と同時生成のしやすさ</li>
              <li className="pl-1 marker:text-gray-500">価格: 月額とクレジット消費の実コスト</li>
              <li className="pl-1 marker:text-gray-500">日本語対応: 日本語入力での再現性</li>
              <li className="pl-1 marker:text-gray-500">商用利用: 規約上の可否と確認しやすさ</li>
            </ul>
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
        </motion.section>

        <motion.section
          id="comparison-table"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Kling AI・Midjourney V1 Video・Runway Gen-3 Alpha・Seedance・Soraの比較表
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            下表は公式情報を優先し、2026年2月時点の料金・機能・商用条件を整理しています（確認日: 2026-02-20）。導入前に規約を再確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[1200px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主要機能/最大尺</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">品質</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">速度</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">価格</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語対応</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.specs}</td>
                    <td className="px-4 py-4">{row.quality}</td>
                    <td className="px-4 py-4">{row.speed}</td>
                    <td className="px-4 py-4">{row.price}</td>
                    <td className="px-4 py-4">{row.japanese}</td>
                    <td className="px-4 py-4">{row.commercial}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            使い方のコツは共通で、最初は短尺を同一プロンプトで比較し、再現性を確認してから長尺化することです。
          </p>
        </motion.section>

        <motion.section
          id="selection-guide"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            どれを選べばいい？用途別ガイド（SNS動画・プレゼン・副業・個人制作）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ツール名から入ると比較が長引きます。まず用途を決め、次に商用条件、最後に品質差を見る順番で選ぶと判断が速くなります。
          </p>
          <div className="mt-6 space-y-4">
            {selectionGuides.map((item) => (
              <section key={item.useCase} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.useCase}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-gray-900">推奨: {item.recommendation}</p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.reason}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="getting-started"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">無料で始める方法と料金プランの見方</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            無料利用の目的は有料移行の判断材料を集めることです。短尺比較で再現率を把握し、次にコストを計算してください。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">無料検証の流れ</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {freeStartSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">課金判断のチェックポイント</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {pricingChecks.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーの学習設計</p>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              生成AI活用力に加え、自己理解・キャリアデザイン、仲間と学ぶ環境で実務定着を支援します。
            </p>
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" titleClassName="text-base font-semibold text-orange-800" />
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            まず結論を短く示し、その上で料金・商用条件・利用可能プランは必ず公式規約で再確認してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <LineCtaBox className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" titleClassName="text-base font-semibold text-green-800" />
          </div>
        </motion.section>

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <p className="mb-4 text-sm leading-7 text-gray-700">編集工程や画像素材まで含めて設計したい場合は、次の関連記事を併読してください。</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-video-tool-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画生成ツールおすすめ比較｜用途別の選び方と始め方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-image-generation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI画像生成おすすめツール比較｜主要サービスの使い分け
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-content-sns-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
