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

type FluxImageGenerationGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Flux 画像生成 使い方", "Flux.1 Dev Schnell Pro 比較", "ローカル AI画像生成", "Stable Diffusion 後継"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-flux", label: "Fluxとは何か" },
  { id: "variant-comparison", label: "Dev / Schnell / Pro / Ultra比較" },
  { id: "local-setup", label: "ローカル運用（ComfyUI / Forge）" },
  { id: "cloud-setup", label: "クラウド運用（Replicate / fal.ai / HF）" },
  { id: "comparison-prompt", label: "他ツール比較と日本語プロンプト" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "アカデミーで次の一歩へ" },
] as const;

const variantRows = [
  {
    model: "FLUX.1 [schnell]",
    quality: "4ステップ前後で高速生成。下書き・大量試作向け。",
    speed: "最速クラス",
    license: "Apache-2.0（モデルライセンス）",
    fit: "まずFluxを試したい人、コスト重視の試行",
  },
  {
    model: "FLUX.1 [dev]",
    quality: "品質重視。構図・質感の再現性が高め。",
    speed: "Schnellより遅い",
    license: "非商用ライセンスが基本。商用は別契約要確認",
    fit: "ローカルで品質検証したい人",
  },
  {
    model: "FLUX 1.1 [pro]",
    quality: "プロダクション向け品質。API統合しやすい。",
    speed: "中速〜高速",
    license: "提供元API規約に従う（BFL/fal/Replicate等）",
    fit: "商用案件やSaaS連携",
  },
  {
    model: "FLUX 1.1 [pro] ultra",
    quality: "高解像度・人物描写など品質最優先の用途向け。",
    speed: "Proより重い",
    license: "提供元API規約に従う（API前提）",
    fit: "広告素材、高精細クリエイティブ",
  },
] as const;

const localPathRows = [
  {
    tool: "ComfyUI",
    step: "公式ExamplesのFLUXワークフローを読み込み、推奨ノード構成から開始する。",
    strength: "可視化されたノードで試行錯誤しやすく、再利用しやすい。",
    caution: "VRAM不足時は `weight_dtype` を `fp8` にするなどメモリ最適化が必要。",
  },
  {
    tool: "Forge",
    step: "FLUX対応チェックポイント（FP8/NF4）を選び、低VRAMなら軽量構成で初期検証する。",
    strength: "Stable Diffusion運用経験を活かしやすい。",
    caution: "モデル形式と設定の組み合わせで速度差が大きく、再現性確認が必須。",
  },
] as const;

const vramRows = [
  {
    profile: "Schnell + FP8（目安）",
    vram: "約6GB〜",
    useCase: "素早いラフ生成、検証ループ",
  },
  {
    profile: "Dev + 標準構成（目安）",
    vram: "約12GB〜16GB",
    useCase: "品質重視の静止画生成",
  },
  {
    profile: "高解像度・複雑構図（目安）",
    vram: "16GB以上推奨",
    useCase: "商用向け素材の高精細出力",
  },
] as const;

const cloudRows = [
  {
    service: "Replicate",
    bestFor: "APIをすぐ試したい個人・小規模チーム",
    points: "モデルページから即実行しやすく、初速が出しやすい。",
    caution: "課金単価と規約はモデルごとに確認する。",
  },
  {
    service: "fal.ai",
    bestFor: "本番API統合・レイテンシ重視",
    points: "FLUX dev/schnell/pro系が揃っており、API実装導線が明確。",
    caution: "PRO系利用時はBFL側Terms of Service準拠が必要。",
  },
  {
    service: "Hugging Face",
    bestFor: "モデル比較・ローカル検証前の情報収集",
    points: "model cardでライセンスと実装例を確認しやすい。",
    caution: "実行環境やEndpoint設定で体感速度が変わる。",
  },
] as const;

const toolComparisonRows = [
  {
    tool: "Flux（Dev/Schnell/Pro）",
    realism: "質感と陰影の再現性が高く、ローカル〜APIまで選択肢が広い。",
    promptFit: "プロンプト追従の調整がしやすいが、文字入り画像は要反復。",
    fit: "運用を自分で設計したい人",
  },
  {
    tool: "Midjourney",
    realism: "スタイル表現と完成度の高い出力を短時間で得やすい。",
    promptFit: "短く具体的なプロンプト運用が基本。細かな制御は慣れが必要。",
    fit: "制作速度と見栄えを優先したい人",
  },
  {
    tool: "OpenAI（GPT Image）",
    realism: "実用向け品質。テキストレンダリングは改善傾向。",
    promptFit: "指示追従・文字描画に強みがある一方、モデル更新に追従が必要。",
    fit: "アプリ連携やプロダクト組み込み重視",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "実務で再利用できるAI活用スキルを、業務課題に結びつけて整理します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして強みと価値観を言語化し、次のキャリア選択へ接続します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "対話と協働で学習を継続し、変化を習慣化できる場をつくります。",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaBody = "最新モデル更新、実務での使い分け、運用時の失敗パターンを週1本で整理して届けます。";
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

export default function FluxImageGenerationGuidePage({ faqItems }: FluxImageGenerationGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Flux画像生成の使い方ガイド" },
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
                title="Flux画像生成の使い方ガイド｜Dev/Schnell/Pro/Ultra比較とローカル運用【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Flux画像生成の使い方ガイド｜Dev/Schnell/Pro/Ultra比較とローカル運用【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            Fluxは、ローカル運用とAPI運用の両方を選びやすい画像生成モデル群です。Stable Diffusion後継候補として語られることも多いですが、実務では「品質」より先に「ライセンス」と「運用責任」を整理してから選ぶほうが失敗しにくくなります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、Flux.1 Dev / Schnell / Pro / Ultraの違い、ComfyUIとForgeのローカル導入、Replicate・fal.ai・Hugging Faceのクラウド活用、Midjourney・DALL·E系との比較、日本語プロンプトの実践手順を2026年2月20日時点の公開情報で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（確認日: 2026-02-20）</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">まず試すならSchnell、品質重視の検証ならDev、本番APIはPro/Ultraが基本線。</li>
            <li className="blog-li pl-1 marker:text-gray-500">SchnellはApache-2.0で扱いやすい一方、Devは非商用が基本なので商用条件を先に確認する。</li>
            <li className="blog-li pl-1 marker:text-gray-500">ローカル運用はComfyUI/Forgeどちらでも可能だが、VRAMと量子化設定で体感が大きく変わる。</li>
            <li className="blog-li pl-1 marker:text-gray-500">文字入り画像や日本語プロンプトはモデルを問わず反復調整が必要。短文化と制約指定が有効。</li>
          </ul>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox />
        </div>

        <motion.section
          id="what-is-flux"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Fluxとは何か: 注目される背景とFlux.1の位置づけ
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            FluxはBlack Forest Labsが展開する画像生成モデル群で、オープン寄りモデルとAPI専用モデルを併存させている点が特徴です。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            実務での価値は、ユースケースに応じて「ローカルで管理するか」「クラウドAPIで運用するか」を選べることにあります。2026年2月時点ではFlux.1系に加えてFlux.2系のラインアップも公開され、運用先の選択肢が増えています。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            画像生成全体の基礎を先に整理したい場合は
            <Link href="/academy/blog/midjourney-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Midjourney使い方ガイド
            </Link>
            や
            <Link href="/academy/blog/adobe-firefly-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Adobe Fireflyガイド
            </Link>
            と合わせて読むと、比較軸が揃います。
          </p>
        </motion.section>

        <motion.section
          id="variant-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Flux.1 Dev / Schnell / Pro / Ultra比較: 品質・速度・ライセンス・用途
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            Flux選定で最初に決めるべきは「出力品質」より「利用条件」です。特にDevは商用条件の確認が必須で、Schnellはモデルライセンス上の扱いやすさが強みです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">モデル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">品質特性</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">速度傾向</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">ライセンス / 規約</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {variantRows.map((row) => (
                  <tr key={row.model} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.model}</th>
                    <td className="px-4 py-4">{row.quality}</td>
                    <td className="px-4 py-4">{row.speed}</td>
                    <td className="px-4 py-4">{row.license}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            注記: Devの商用利用条件、Pro/Ultraの利用規約、API料金は更新頻度が高いため、契約前に公式ページを再確認してください。
          </p>
        </motion.section>

        <motion.section
          id="local-setup"
          className="mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            ローカルでの使い方: ComfyUI / Forgeで始める手順とVRAM現実ライン
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            Stable Diffusion経験者はForgeが入りやすく、ノード構成で再利用性を高めたい場合はComfyUIが扱いやすいです。どちらでも最初はSchnellで評価セットを回し、必要に応じてDevへ移る運用が安全です。
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[900px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">導入先</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">開始手順</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {localPathRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.step}</td>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">VRAM目安（コミュニティ実測ベース）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">構成</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">VRAM目安</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">想定用途</th>
                </tr>
              </thead>
              <tbody>
                {vramRows.map((row) => (
                  <tr key={row.profile} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.profile}</th>
                    <td className="px-4 py-4">{row.vram}</td>
                    <td className="py-4 pl-4">{row.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            [要確認: Black Forest Labs公式の統一「最低VRAM」基準]。現時点ではComfyUI WikiとForgeコミュニティの実測知見が中心のため、手元環境での再計測を前提にしてください。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            プロンプト設計の基礎を先に整えたい場合は
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプト入門
            </Link>
            も合わせて確認すると、画像指示の再現性が上がります。
          </p>
        </motion.section>

        <div className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </div>

        <motion.section
          id="cloud-setup"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            クラウドでの使い方: Replicate / fal.ai / Hugging Faceの使い分け
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            クラウド運用の判断軸は「立ち上がりの速さ」「本番連携のしやすさ」「運用責任の置き場」です。単価だけでなく、規約確認と更新追従の負荷も含めて選んでください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">サービス</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いているケース</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">主な利点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {cloudRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="px-4 py-4">{row.bestFor}</td>
                    <td className="px-4 py-4">{row.points}</td>
                    <td className="py-4 pl-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            法務面のチェックを強化したい場合は
            <Link href="/academy/blog/ai-legal-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI法務ガイド
            </Link>
            をあわせて参照し、著作権・規約・契約条件の確認フローを固定してください。
          </p>
        </motion.section>

        <motion.section
          id="comparison-prompt"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            Midjourney・DALL·E比較と日本語プロンプト実践
          </h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            比較は「どれが上か」より「どの制作フローに合うか」で判断します。OpenAI公式ではDALL·E 2/3はdeprecated情報が明記されているため、実運用ではGPT Image系列を含めた現行導線で確認してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">写真リアリズム傾向</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">プロンプト追従傾向</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている運用</th>
                </tr>
              </thead>
              <tbody>
                {toolComparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.realism}</td>
                    <td className="px-4 py-4">{row.promptFit}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="blog-h3 mt-8 text-lg font-semibold text-gray-900">日本語プロンプトの実用テンプレ</h3>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            日本語のみでも生成できますが、再現性を高めるには指示を短く分解し、必要な英語キーワードを併記する構成が有効です。
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-xs leading-6 text-gray-100">
{`目的: EC商品LPのメインビジュアル
被写体: 白背景に置いた革のトートバッグ1点
構図: 斜め45度、やや俯瞰、中央配置
質感: natural leather texture, soft shadows, studio lighting
制約: ロゴ文字なし、手や人物なし、背景ノイズなし
出力: 4:5, high detail, photorealistic`}
          </pre>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            文字入り画像は、1回で決めようとせず「短い文言で指示する・生成する・修正する」を繰り返す運用が現実的です。文字品質で詰まる場合は、生成後のデザインツール補正も前提にすると工数を読みやすくなります。
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
          <div className="mt-6">
            <LineCtaBox />
          </div>
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
              <Link href="/academy/blog/midjourney-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Midjourney v7使い方完全ガイド
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/adobe-firefly-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Adobe Firefly使い方ガイド2026
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/ollama-local-llm-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Ollamaで始めるローカルLLM実務ガイド
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link href="/academy/blog/chatgpt-prompt-beginner" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
                ChatGPTプロンプト入門
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得を目的とした場ではなく、生成AIを実務で活かす判断軸を育てる学習設計を重視しています。Fluxのような個別ツールは手段として扱い、仕事で価値を出すための思考と行動に接続します。
          </p>
          <div className="mt-5 space-y-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
        </motion.section>
      </article>
    </main>
  );
}
