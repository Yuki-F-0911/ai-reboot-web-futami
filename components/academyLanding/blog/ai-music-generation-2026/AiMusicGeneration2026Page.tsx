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

type AiMusicGeneration2026PageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "AI音楽生成 比較 2026",
  "Suno 最新版 使い方",
  "Udio AI音楽",
  "Mureka V8 比較",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "core-comparison", label: "3強比較表" },
  { id: "commercial-license", label: "商用利用と権利" },
  { id: "pricing", label: "料金比較と課金判断" },
  { id: "use-cases", label: "用途別おすすめ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const comparisonRows = [
  {
    point: "最新機能トピック",
    suno: "v5系 + Studio 1.2（2026-01）",
    udio: "Changelog継続更新（2025-11以降）",
    mureka: "公式UIでV8提供を確認",
    check: "変動情報（確認日: 2026-02-20）",
  },
  {
    point: "音質の傾向",
    suno: "全体バランスが良く、短時間で雛形を作りやすい",
    udio: "歌ものの方向調整を細かく試しやすい",
    mureka: "多言語展開とAPI連携を前提にしやすい",
    check: "最終判断は同条件で試作比較",
  },
  {
    point: "スタイル幅",
    suno: "ポップス/BGM/シネマ系まで幅広い",
    udio: "ジャンル探索がしやすく、拡張機能で反復改善しやすい",
    mureka: "10+言語歌詞を前提にスタイル展開しやすい",
    check: "制作物の用途で優先順位が変わる",
  },
  {
    point: "歌詞対応",
    suno: "歌詞入力・生成ともに対応",
    udio: "歌詞主導の曲作りに対応",
    mureka: "歌詞入力と多言語歌詞に対応",
    check: "日本語の自然さは試作必須",
  },
  {
    point: "日本語対応",
    suno: "日本語プロンプトで運用可能",
    udio: "日本語運用は可能だが曲調で品質差が出る",
    mureka: "API docsで日本語生成対応を明記",
    check: "発音品質は用途別に検証",
  },
] as const;

const licenseRows = [
  {
    tool: "Suno",
    free: "Basic生成曲は非商用",
    paid: "Pro/Premier加入中に生成した曲は商用利用可能",
    caution: "無料時生成曲の商用化は原則不可。作成時プランの記録が必要",
  },
  {
    tool: "Udio",
    free: "無料運用は条件変更リスクが高い",
    paid: "有料利用者の商用利用はFAQで案内あり",
    caution: "規約更新事例あり。利用前にTerms更新日を確認",
  },
  {
    tool: "Mureka V8",
    free: "無料枠運用はあり（仕様変動）",
    paid: "API docsでPaid planのcommercial use可を明示",
    caution: "[要確認: Webアプリ課金プランごとの商用条件詳細]",
  },
] as const;

const pricingRows = [
  {
    tool: "Suno",
    free: "Basic: 1日50クレジット",
    paid: "Pro: 月2,500 / Premier: 月10,000クレジット",
    price: "有料は$10から（詳細はPricing画面で確認）",
    fit: "BGM検証から本番移行を分けやすい",
  },
  {
    tool: "Udio",
    free: "Free: 月100クレジット",
    paid: "Standard: 月1,200 / Pro: 月4,800クレジット",
    price: "Standard $10/月、Pro $30/月",
    fit: "歌ものを反復生成する運用に向く",
  },
  {
    tool: "Mureka V8",
    free: "無料トライアル枠あり（条件変動）",
    paid: "Paid planで商用利用可（API文脈）",
    price: "[要確認: 公開Web価格表]",
    fit: "多言語とAPI活用を同時に進めたいチーム向け",
  },
] as const;

const useCaseRows = [
  {
    scene: "BGM自動生成",
    recommendation: "Suno",
    reason: "短尺試作を高速で回しやすく、業務BGMの雛形づくりに向いている",
    firstStep: "30秒前後で3パターン生成し、動画やスライドで聞き比べる",
  },
  {
    scene: "ポップス制作",
    recommendation: "Udio",
    reason: "歌ものの方向調整を反復しやすく、候補比較の作業効率が高い",
    firstStep: "同じ歌詞でテンポ違いを3案作り、サビの聞こえ方を比較する",
  },
  {
    scene: "ボカロ風アプローチ",
    recommendation: "Suno / Udio",
    reason: "ボーカル質感の好み差が大きいため、2ツール同時比較が現実的",
    firstStep: "同一プロンプトで生成し、発音と抑揚の違和感を優先評価する",
  },
  {
    scene: "プロ品質・多言語展開",
    recommendation: "Mureka V8 + DTM編集",
    reason: "多言語歌詞やAPI連携を前提にしたワークフローを組みやすい",
    firstStep: "API連携で雛形生成し、最終ミックスはDAWで仕上げる",
  },
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

export default function AiMusicGeneration2026Page({ faqItems }: AiMusicGeneration2026PageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI音楽生成ツール比較2026" },
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
                title="AI音楽生成ツール比較2026｜Suno最新版・Udio・Mureka V8の違いと選び方"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI音楽生成ツール比較2026｜Suno最新版・Udio・Mureka V8の違いと選び方
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論として、2026年時点のAI音楽生成は「Suno最新版・Udio・Mureka V8」の3強を同条件で試し、用途ごとに使い分ける運用が最短です。
            1つのツールに固定するより、BGMと歌ものを分離して判断した方が失敗しにくくなります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            本記事は `suno-ai-music-guide` の発展版として、
            <strong className="font-semibold text-gray-900">
              音質・スタイル幅・歌詞対応・日本語対応・商用利用・料金
            </strong>
            を同じ評価軸で整理しました（確認日: 2026-02-20）。
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
          <p className="mt-5 text-sm leading-7 text-gray-700">判断を先に書くと、BGM中心ならSuno、歌ものの反復改善ならUdio、多言語とAPI運用ならMureka V8が候補です。</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              比較は「機能」より先に「商用条件」と「料金変動リスク」を確認すると、公開直前の差し戻しを減らせます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              無料枠は検証用途、有料枠は本番用途として分離する運用が安全です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              日本語歌詞の自然さはツール差よりもプロンプト設計と試作回数の影響が大きく、3案比較を標準化すると品質が安定します。
            </li>
            <li className="pl-1 marker:text-gray-500">
              料金・規約・リリース情報は短期間で更新されるため、確認日を付けた記録運用が必須です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="core-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            2026年の3強比較は、Suno最新版・Udio・Mureka V8を同じ評価軸で見ると判断しやすくなります
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、音質評価だけで選ぶと運用で詰まりやすいため、歌詞対応・日本語運用・ライセンス条件まで同時に比較する必要があります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Suno単体の手順は
            <Link href="/academy/blog/suno-ai-music-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              suno-ai-music-guide
            </Link>
            で解説済みです。本記事は「どれを選ぶか」の判断に特化し、3ツールを同じ形式で比較します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-7 text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  <th className="border border-gray-200 px-4 py-3">比較軸</th>
                  <th className="border border-gray-200 px-4 py-3">Suno最新版</th>
                  <th className="border border-gray-200 px-4 py-3">Udio</th>
                  <th className="border border-gray-200 px-4 py-3">Mureka V8</th>
                  <th className="border border-gray-200 px-4 py-3">運用メモ</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.point} className="align-top">
                    <td className="border border-gray-200 px-4 py-4 font-semibold text-gray-900">{row.point}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.suno}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.udio}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.mureka}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-600">
            注記: Mureka V8の正式公開日は第三者報道と公式UI表記に差分があるため、本文では「一般公開UIでV8稼働を確認」と「日付断定は保留」を分けて記載しています。
          </p>
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
          id="commercial-license"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            商用利用で失敗しないコツは、生成時プランと規約版を同時に記録することです
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、同じ曲でも「いつ」「どのプランで」作ったかで商用可否が変わるため、制作ログの設計を先に行う必要があります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-7 text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  <th className="border border-gray-200 px-4 py-3">ツール</th>
                  <th className="border border-gray-200 px-4 py-3">無料枠の扱い</th>
                  <th className="border border-gray-200 px-4 py-3">有料枠の扱い</th>
                  <th className="border border-gray-200 px-4 py-3">注意点</th>
                </tr>
              </thead>
              <tbody>
                {licenseRows.map((row) => (
                  <tr key={row.tool} className="align-top">
                    <td className="border border-gray-200 px-4 py-4 font-semibold text-gray-900">{row.tool}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.free}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.paid}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">生成日時、利用プラン、利用規約の更新日を1行で記録する。</li>
            <li className="pl-1 marker:text-gray-500">公開前チェックで、対象曲が商用利用条件を満たしているかを再確認する。</li>
            <li className="pl-1 marker:text-gray-500">配信先の利用規約（YouTube、SNS、配信ストア）も同時に確認する。</li>
          </ol>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            動画と組み合わせる場合は、
            <Link href="/academy/blog/ai-video-generation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-video-generation-comparison
            </Link>
            を併読すると、映像側の商用条件も同じ観点で整理できます。
          </p>
        </motion.section>

        <motion.section
          id="pricing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            料金比較は「無料で試す回数」ではなく「本番で必要な生成量」から逆算すると精度が上がります
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、無料枠の有無だけで選ぶと長期コストを見誤ります。月内で必要な曲数と修正回数を先に決める方法が有効です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-7 text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                  <th className="border border-gray-200 px-4 py-3">ツール</th>
                  <th className="border border-gray-200 px-4 py-3">無料枠</th>
                  <th className="border border-gray-200 px-4 py-3">有料枠</th>
                  <th className="border border-gray-200 px-4 py-3">料金</th>
                  <th className="border border-gray-200 px-4 py-3">向いている課金パターン</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.tool} className="align-top">
                    <td className="border border-gray-200 px-4 py-4 font-semibold text-gray-900">{row.tool}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.free}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.paid}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.price}</td>
                    <td className="border border-gray-200 px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-gray-600">
            料金・クレジット仕様は更新頻度が高いため、比較表は確認日（2026-02-20）付きで管理してください。
          </p>
          <div className="mt-7 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーの学習設計</p>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              AIリブートアカデミーでは、生成AI活用力の習得に加えて、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境まで一体で設計しています。
              どのツールを使うかより先に、業務課題に対する判断基準と継続学習の仕組みを整えることが重要です。
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
          id="use-cases"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            用途別おすすめは、BGM・ポップス・ボカロ風・プロ品質で分けると選定ミスを減らせます
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、1つの正解を探すより、用途ごとに主力ツールを変える方が実務の成果が安定します。
          </p>
          <div className="mt-6 space-y-4">
            {useCaseRows.map((row) => (
              <section key={row.scene} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{row.scene}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">推奨:</span> {row.recommendation}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">理由:</span> {row.reason}
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">最初の一手:</span> {row.firstStep}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            SNS投稿や配信導線まで設計する場合は、
            <Link href="/academy/blog/ai-content-sns-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-content-sns-guide
            </Link>
            を合わせて読むと、制作から発信までの工数を揃えやすくなります。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            迷った場合は、無料枠で10〜20本の短尺試作を行い、商用条件を満たすプランで本番曲を作る流れを基本にしてください。
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
          <p className="mb-4 text-sm leading-7 text-gray-700">AI音楽生成の実務導線を深掘りする場合は、次の記事を併読してください。</p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/suno-ai-music-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                Sunoで音楽を作る方法入門｜プロンプトから楽曲生成・ビジネス活用まで
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-video-generation-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方
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
