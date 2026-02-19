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

const keywordTags = ["動画生成AI 比較", "Kling 使い方", "Runway AI 使い方", "Sora 使い方"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "scope", label: "比較対象と評価軸" },
  { id: "comparison-table", label: "4ツール比較表" },
  { id: "selection-guide", label: "用途別の選び方" },
  { id: "getting-started", label: "無料で始める方法と料金の見方" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const comparisonRows = [
  {
    tool: "Kling",
    quality: "高（動き・質感の表現で評価されやすい）",
    speed: "中〜高（短尺は比較的回しやすい）",
    price: "中国本土向け公式発表ではサブスク66元/月〜。海外料金は地域差が大きい。",
    japanese: "△（公式の日本語仕様公開が限定）",
    commercial: "△（規約依存。案件利用前に最新規約確認が必須）",
    fit: "SNS向け短尺、印象カット、動き重視の素材作成",
  },
  {
    tool: "Runway",
    quality: "高（生成と編集を同一基盤で回しやすい）",
    speed: "中（品質優先設定では待機が発生しやすい）",
    price: "公式Pricingは Standard $15/月（年払い）〜。クレジット消費モデル。",
    japanese: "△（UIは英語中心、運用時は実地検証推奨）",
    commercial: "○（有料プランで商用利用可。Freeは不可）",
    fit: "制作フロー全体を1つの環境で管理したいチーム",
  },
  {
    tool: "Seedance",
    quality: "高（ByteDance公式が高品質モデルとして提示）",
    speed: "高（Seedance 1.0で10秒1080pを約41秒の公式記載）",
    price: "Dreamina / Doubao側プラン依存。グローバル一律価格の公式明示は限定。",
    japanese: "△（公式の日本語運用情報は限定）",
    commercial: "△（利用プラットフォーム規約で判断）",
    fit: "高品質の動画案を高速に複数比較したい用途",
  },
  {
    tool: "Sora",
    quality: "高（長尺・構図維持の安定性で評価される）",
    speed: "中（混雑時は待機時間が伸びることがある）",
    price: "ChatGPT Plus $20/月、Pro $200/月（Sora利用条件に差あり）",
    japanese: "△（日本語プロンプトは要検証、プラン差確認が必要）",
    commercial: "○（OpenAI規約に基づく。第三者権利確認は必須）",
    fit: "高品質重視の企画動画、プレゼン用映像の下書き",
  },
] as const;

const toolUsageNotes = [
  {
    tool: "Klingの使い方（最短）",
    detail:
      "まず5〜8秒の縦動画で、被写体の動きとカメラワークを1つずつ分けて検証すると、クレジット消費を抑えながら当たりパターンを作れます。初回は「背景固定 + 被写体1体 + カメラ固定」で再現性を確保してください。",
  },
  {
    tool: "Runway AIの使い方（最短）",
    detail:
      "生成だけで終わらせず、同じ環境で合成・調整まで行う前提で設計するのが効率的です。まず短尺素材を作り、使えるカットだけを編集タイムラインへ移して仕上げる運用が安定します。",
  },
  {
    tool: "Seedanceの使い方（最短）",
    detail:
      "DreaminaやDoubao側で利用する場合は、最初に出力解像度と尺の上限を確認してください。高品質モデルほどコストが増えやすいため、1シーン検証で品質基準を決めてから本数を増やす流れが安全です。",
  },
  {
    tool: "Soraの使い方（最短）",
    detail:
      "Soraはプラン差で同時生成数や解像度上限が変わるため、先に契約条件を確認してからプロンプト設計に入ると手戻りが減ります。混雑時間帯を避け、同じプロンプトの微調整で比較するのが実務向きです。",
  },
] as const;

const selectionGuides = [
  {
    useCase: "SNS動画（短尺を継続運用）",
    recommendation: "Kling / Seedanceを短尺素材生成に使い、仕上げ編集は別ツールに分離する。",
    reason:
      "SNSは本数と再現性が重要です。最初から完成動画を狙うより、短尺素材を量産して編集で整える方が運用が崩れにくくなります。",
  },
  {
    useCase: "プレゼン動画（説明・提案）",
    recommendation: "SoraかRunwayで必要シーンを生成し、章立てに合わせて差し込む。",
    reason:
      "プレゼンは情報伝達が優先です。映像の派手さより、スライド構成と同期しやすいカットを安定して作れるかで選ぶと失敗しません。",
  },
  {
    useCase: "副業案件（納期と商用利用を両立）",
    recommendation: "Runwayの有料プランを軸に、規約確認済みの素材運用を固定する。",
    reason:
      "案件では商用条件の明確さが重要です。生成品質だけでなく、利用条件と修正スピードを同時に満たせる運用を優先してください。",
  },
  {
    useCase: "個人制作（作品づくり・学習）",
    recommendation: "Kling / Seedance / Soraを小さく試し、自分の表現と合うものに絞る。",
    reason:
      "個人制作はコスト管理と試行回数のバランスが鍵です。無料枠で画作りの相性を確認し、1サービスに集約した方が学習効率が上がります。",
  },
] as const;

const freeStartSteps = [
  "比較前に用途を固定する（SNS / プレゼン / 副業 / 個人制作）",
  "無料枠で5〜10秒の同一シーンを4ツールで生成し、品質と速度を横並びで確認する",
  "生成失敗率と待機時間を記録し、1本あたりの実作業時間を計測する",
  "商用利用予定がある場合は、無料枠段階で規約と著作権チェックフローを作る",
  "有料移行は「1本あたり工数」と「再現率」が基準値を超えた時点で判断する",
] as const;

const pricingChecks = [
  "月額だけでなく、クレジット単価と1本あたり消費量で比較する",
  "高解像度・長尺・同時生成数は課金差が出やすい項目として先に確認する",
  "Freeと有料で商用可否が変わるかを最優先で確認する",
  "混雑時の待機時間と優先処理条件を確認し、納期リスクを減らす",
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
        LINEで週1AI通信を受け取る（無料）
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
                title="動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月19日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            この記事は<strong className="font-semibold text-gray-900">テキスト/画像から動画を生成するAI</strong>の比較です。
            VrewやCapCutのような編集・字幕・ショート化中心ツールは対象外とし、
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画生成ツールおすすめ比較
            </Link>
            で相互補完する構成にしています。比較軸は品質、速度、価格、日本語対応、商用利用の5項目で統一し、用途別に判断できる形で整理しました。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            ※料金・機能・商用条件は変動が速いため、公式情報の確認日を「2026年2月19日」として記載しています。
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              4ツールの中で、<strong className="font-semibold text-gray-900">商用条件の明確さ</strong>はRunwayとSoraが比較しやすく、KlingとSeedanceは地域・導線差の確認が重要です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              品質比較は「1本の完成度」ではなく、同じ条件での<strong className="font-semibold text-gray-900">再現率と待機時間</strong>を含めて判断すると実務判断がぶれません。
            </li>
            <li className="pl-1 marker:text-gray-500">
              無料枠は最終制作よりも、プロンプト型と品質基準を決める検証用途に使うのが効率的です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              SNS運用に接続する場合は、
              <Link href="/academy/blog/ai-content-sns-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI×ブログ・SNS・YouTube台本の作り方
              </Link>
              のように配信導線まで先に設計すると成果が安定します。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="scope"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            この比較の対象範囲（テキスト/画像→動画生成）と評価軸
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、生成AI比較は「作る工程」と「仕上げる工程」を分けると判断しやすくなります。本記事は前者に絞り、後者は別記事へ分離しています。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            具体的には、Kling・Runway・Seedance・Soraの4ツールについて、テキストまたは画像から動画を生成する観点を中心に比較しています。
            編集AI（字幕、再編集、ショート切り出し、音声補正）を含めた全体設計は
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-video-tool-comparison
            </Link>
            を参照してください。動画サムネイルや素材画像づくりまで含める場合は
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-image-generation-guide
            </Link>
            と組み合わせると設計がしやすくなります。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">評価軸（全ツール共通）</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
              <li className="pl-1 marker:text-gray-500">品質: 動きの破綻率、構図の維持、ノイズの少なさ</li>
              <li className="pl-1 marker:text-gray-500">速度: 1本あたりの生成待機時間、同時生成のしやすさ</li>
              <li className="pl-1 marker:text-gray-500">価格: 月額とクレジット消費を掛け合わせた実運用コスト</li>
              <li className="pl-1 marker:text-gray-500">日本語対応: 日本語プロンプト運用とUIの扱いやすさ</li>
              <li className="pl-1 marker:text-gray-500">商用利用: 規約上の可否、案件運用での確認項目の明確さ</li>
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
            Kling・Runway・Seedance・Soraの比較表（品質・速度・価格・日本語対応・商用利用）
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            下表は公式情報を基準に、実運用で比較が必要な5軸で整理したものです（確認日: 2026-02-19）。
            価格は地域・契約形態で変わるため、最終判断は必ず各公式ページで更新情報を確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
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
          <p className="mt-5 text-xs leading-6 text-gray-600">
            注記: 本表は公開情報を優先し、言語対応や提供地域など公式で明示が薄い項目は「△」としています。実務導入前のPoCで再検証してください。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {toolUsageNotes.map((item) => (
              <section key={item.tool} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-bold text-gray-900">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.detail}</p>
              </section>
            ))}
          </div>
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
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、最初に「どの成果物を継続して作るか」を決めると、ツールの最適解は絞れます。機能一覧を比較するより、運用シーンで逆算する方が早く決まります。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            無料で使う方法と料金プランの見方（失敗しない課金判断）
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            無料利用の目的は「作品を完成させること」ではなく、「有料化したときに回収できる運用か」を見極めることです。検証期間で計測軸を作ると、課金の失敗を減らせます。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">無料検証の進め方（5ステップ）</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {freeStartSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">料金比較で見るべき項目</h3>
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
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、そして仲間と共に学ぶ環境を重視して、実務で継続できる運用づくりまで支援しています。
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
