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

type AiVideoEditingGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 動画編集 初心者", "CapCut AI 使い方", "Descript AI", "自動字幕 AI"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-ai-can-do", label: "AI動画編集でできること" },
  { id: "tool-comparison", label: "主要ツール比較" },
  { id: "capcut-free", label: "CapCut無料実践手順" },
  { id: "short-optimization", label: "Shorts/TikTok/Reels最適化" },
  { id: "paid-decision", label: "課金判断の基準" },
  { id: "rights", label: "商用利用・著作権の注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連記事" },
  { id: "next-step", label: "次の学習ステップ" },
] as const;

const automationRows = [
  {
    feature: "自動字幕（Auto Captions）",
    effect: "字幕入力の手作業を削減し、ショート動画の編集時間を短縮できる。",
    caution: "固有名詞・専門用語は誤変換が残るため、公開前の目視確認は必須。",
  },
  {
    feature: "自動カット（無音/不要部分の削除）",
    effect: "長尺素材からテンポの良い短尺へ変換しやすくなる。",
    caution: "発話の間を削りすぎると不自然になるため、しきい値調整が必要。",
  },
  {
    feature: "BGM自動調整",
    effect: "音量バランス調整の初稿を高速化できる。",
    caution: "商用利用時は音源ライセンス区分の確認が必要。",
  },
  {
    feature: "翻訳字幕 / AI吹替",
    effect: "同一動画の多言語展開を短時間で試せる。",
    caution: "ツールごとに対応言語が異なり、Descriptは機能別に日本語対応差がある。",
  },
] as const;

const toolRows = [
  {
    tool: "CapCut",
    freeOrPaid: "Freeあり / Proあり（価格表示は地域・導線差あり）",
    strength: "短尺SNS向け編集を一通り揃えやすい。初心者が最初の1本を作りやすい。",
    japanese: "UI日本語対応。字幕精度は素材依存。",
    rights: "素材ライセンス区分（Dual Use / Non-Commercial）確認が必須。",
  },
  {
    tool: "Descript",
    freeOrPaid: "Free / Hobbyist / Creator / Business",
    strength: "テキスト編集起点の動画・音声編集が速い。要約や再編集と相性が良い。",
    japanese: "転写は日本語未対応。翻訳字幕と吹替は日本語対応。",
    rights: "Input/Output権利はユーザー側。ただし第三者権利侵害は利用者責任。",
  },
  {
    tool: "VEED.io",
    freeOrPaid: "Lite / Pro / Enterprise（年払いで割引あり）",
    strength: "ブラウザ完結で字幕・テンプレ編集を進めやすい。",
    japanese: "日本語字幕運用は可能だが、最終精度は素材品質に依存。",
    rights: "User Content権利はユーザー保持。Free利用時のデータ利用条項に注意。",
  },
  {
    tool: "Adobe Premiere Pro + AI",
    freeOrPaid: "Premiere Pro単体プラン（月額課金）",
    strength: "長尺編集・複雑案件・他Adobe連携に強い。生成拡張や文字起こし連携も可能。",
    japanese: "日本語編集実務で利用事例が多い。設定最適化は必要。",
    rights: "Firefly生成物はベータ外で商用利用可。ベータ機能生成物は補償対象外。",
  },
] as const;

const capcutFreeSteps = [
  {
    step: "1. プロジェクトを縦型（9:16）で作成する",
    detail:
      "YouTube Shorts / TikTok / Reelsの再利用性を優先し、最初に比率を固定します。後から比率を変えると字幕位置と画角調整の手戻りが増えます。",
  },
  {
    step: "2. 元動画を30〜60秒に粗カットする",
    detail:
      "最初から完成版を狙わず、要点だけ残した粗編集を先に作る方が失敗が減ります。無音部分は自動カット機能で一括処理し、細部だけ手動で整えます。",
  },
  {
    step: "3. 自動字幕を作成し、固有名詞を優先修正する",
    detail:
      "全体を均等に直すより、固有名詞・商品名・数字を先に修正すると視聴者の誤解を防ぎやすくなります。",
  },
  {
    step: "4. BGMとノイズ除去を適用して聞き取りやすさを確認する",
    detail:
      "BGMは声を隠さない音量に調整し、ノイズ除去は強すぎない設定で比較します。イヤホン視聴で最終確認すると見落としを減らせます。",
  },
  {
    step: "5. 書き出し前に透かし・素材ライセンスを確認する",
    detail:
      "テンプレートや音源によってはPro制限やライセンス条件が変わります。エクスポート前にウォーターマーク有無と商用利用可否を確認してください。",
  },
] as const;

const shortOptimizationRows = [
  {
    platform: "YouTube Shorts",
    recommended: "縦型または正方形、最長3分（公式ヘルプ）",
    practicalTip: "冒頭1〜3秒で結論を表示し、字幕は1行を短く保つ。",
  },
  {
    platform: "TikTok",
    recommended: "9:16推奨、広告クリエイティブは21〜30秒推奨値あり",
    practicalTip: "テキストを中央寄せしすぎず、UI被りを避ける余白を残す。",
  },
  {
    platform: "Instagram Reels",
    recommended: "縦型9:16運用が基本。尺上限は更新が多いため投稿画面で要確認。",
    practicalTip: "字幕の縦位置を下げすぎず、プロフィール名や操作UIとの重なりを避ける。",
  },
] as const;

const paidSignals = [
  {
    signal: "月8本以上の投稿を継続する",
    reason: "無料運用だけでは編集待ち時間が増え、公開頻度を維持しづらくなるため。",
  },
  {
    signal: "1本あたりの編集時間を30分未満にしたい",
    reason: "自動字幕・テンプレ・書き出し制限の差が時短に直結しやすいため。",
  },
  {
    signal: "案件化して納期を守る必要がある",
    reason: "素材制限や透かしリスクを減らし、再現性の高い制作フローを作る必要があるため。",
  },
  {
    signal: "翻訳字幕や多言語配信を本格運用したい",
    reason: "無料枠だと言語・分数・品質管理が不足しやすいため。",
  },
] as const;

const rightsChecklist = [
  "ツール規約と素材ライセンス（音源・テンプレ・画像）を分けて確認する",
  "BGMや効果音の商用利用区分をプロジェクト単位で記録する",
  "人物・ロゴ・商標が入る素材は公開前に権利処理を確認する",
  "AI生成/自動翻訳の内容は事実誤認チェックを実施する",
  "規約更新日をメモし、月1回は条件差分を見直す",
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";

function LineCtaBox({ className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" }: { className?: string }) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          今すぐ無料で登録する（30秒）
        </a>
      </div>
    </section>
  );
}

export default function AiVideoEditingGuidePage({ faqItems }: AiVideoEditingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI動画編集初心者ガイド" },
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
              <CopyAsMarkdownButton title="AI動画編集の始め方ガイド" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI動画編集の始め方｜初心者向けツール比較とCapCut無料実践【2026】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="blog-p mt-6 text-base leading-8 text-gray-700">
            結論はシンプルで、初心者は<strong className="font-semibold text-gray-900">無料で1本を完走</strong>し、
            足りない機能だけを有料で補う進め方が最も再現性があります。AI動画編集では、自動字幕・自動カット・BGM調整・翻訳・ノイズ除去までを短時間で試せますが、
            公開品質は最後の人手チェックで決まります。
          </p>
          <p className="blog-p mt-3 text-base leading-8 text-gray-700">
            本記事では、CapCut・Descript・VEED・Adobe Premiere Pro AIの違いを整理し、CapCut無料版の実践手順、Shorts/TikTok/Reels向け最適化、
            課金判断と商用利用チェックまでを一本化して解説します。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-600">価格・仕様・規約の確認日: 2026-02-20</p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li className="blog-li pl-1 marker:text-blue-700">
              AI動画編集は「撮影素材の補正」よりも「公開までの編集工程短縮」に強いです。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              CapCutは無料でも始められますが、素材やテンプレートによってPro制限が発生します。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              Descriptは日本語対応が機能別で異なり、転写と翻訳/吹替を分けて判断する必要があります。
            </li>
            <li className="blog-li pl-1 marker:text-blue-700">
              商用利用の事故は、ツール本体より素材ライセンス確認不足で起きやすいため、公開前チェックを固定することが重要です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="what-ai-can-do"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            AI動画編集でできること（自動字幕・カット・BGM・翻訳・ノイズ除去）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            まず押さえるべきなのは、AIは編集者の代替ではなく、繰り返し作業の短縮装置だという点です。特にショート動画運用では、
            手作業で時間を奪われる工程を自動化すると継続率が上がります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[780px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">機能</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">短縮できる作業</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {automationRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.feature}</th>
                    <td className="px-4 py-4">{row.effect}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>

        <motion.section
          id="tool-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            主要ツール比較（CapCut・Descript・VEED.io・Adobe Premiere Pro AI）
          </h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            比較で見るべき軸は「価格」よりも、作業時間を削れる工程が自分の運用に合っているかです。初心者は、最初から最高機能を選ぶより、
            無料で公開1本を作って不足点を特定すると判断精度が上がります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[1000px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金レンジ</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語対応</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用の注意</th>
                </tr>
              </thead>
              <tbody>
                {toolRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.freeOrPaid}</td>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="px-4 py-4">{row.japanese}</td>
                    <td className="px-4 py-4">{row.rights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            CapCut価格は公式ページでも円建て・ドル建てで差が見えるため、最終判断は購入画面を基準にしてください。Descriptは
            <strong className="font-semibold text-gray-900">文字起こし日本語未対応</strong>と
            <strong className="font-semibold text-gray-900">翻訳/吹替の日本語対応</strong>が分かれている点を誤認しないことが重要です。
          </p>
        </motion.section>

        <motion.section
          id="capcut-free"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">完全無料で始めるCapCut AIの実践手順</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            初心者の目標は「操作を覚える」ではなく「公開まで完走する」ことです。以下の5ステップを固定すると、ショート動画の量産フローを作りやすくなります。
          </p>
          <ol className="blog-ol mt-5 list-decimal space-y-4 pl-5 text-sm leading-7 text-gray-700">
            {capcutFreeSteps.map((item) => (
              <li key={item.step} className="blog-li pl-1 marker:text-gray-500">
                <span className="font-semibold text-gray-900">{item.step}</span>
                <p className="mt-1 text-sm leading-7 text-gray-700">{item.detail}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          id="short-optimization"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">SNSショート最適化（YouTube Shorts・TikTok・Instagram Reels）</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            1本を複数SNSで使い回す前提なら、比率・尺・字幕密度を先に共通化すると再編集コストが下がります。特に冒頭3秒の情報密度は視聴維持に直結します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">プラットフォーム</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">仕様の目安</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">編集時の実務ポイント</th>
                </tr>
              </thead>
              <tbody>
                {shortOptimizationRows.map((row) => (
                  <tr key={row.platform} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.platform}</th>
                    <td className="px-4 py-4">{row.recommended}</td>
                    <td className="px-4 py-4">{row.practicalTip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            SNS運用の全体設計は、
            <Link
              href="/academy/blog/ai-content-sns-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIコンテンツSNS運用ガイド
            </Link>
            と
            <Link
              href="/academy/blog/ai-youtube-content-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              YouTube運用ガイド
            </Link>
            も合わせて確認すると、投稿企画から改善まで一貫して設計できます。
          </p>
        </motion.section>

        <motion.section
          id="paid-decision"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">課金する価値があるツールの選び方</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            課金判断は「機能が多いか」ではなく、時短と収益の差分で評価してください。次の4条件のうち2つ以上に当てはまるなら、有料プランの検討価値があります。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {paidSignals.map((item) => (
              <div key={item.signal} className="rounded-xl border border-slate-200 bg-white p-5 shadow-subtle">
                <h3 className="blog-h3 text-base font-bold text-gray-900">{item.signal}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.reason}</p>
              </div>
            ))}
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            判断式の目安: <strong className="font-semibold text-gray-900">月額課金額 &lt; 時短時間（時間） × 自分の時給換算</strong>。
            これを満たせない間は、無料運用で編集体力を上げる方が効果的です。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </section>

        <motion.section
          id="rights"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">商用利用・著作権で失敗しないチェック項目</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            「このツールは商用OK」と書かれていても、素材ライセンスが別条件なら公開後に問題になります。最低限、以下の5項目を公開前に確認してください。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {rightsChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            ツール比較の観点を広げたい場合は、
            <Link href="/academy/blog/ai-video-tool-comparison" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画ツール比較
            </Link>
            と
            <Link href="/academy/blog/ai-video-generation-comparison" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              動画生成AI比較
            </Link>
            も確認してください。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
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
              <Link
                href="/academy/blog/ai-video-generation-comparison"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-content-sns-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIコンテンツSNS運用ガイド
              </Link>
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <Link
                href="/academy/blog/ai-youtube-content-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでYouTube運用を改善する実践ガイド
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="next-step"
          className="mt-14 rounded-2xl border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-2xl font-bold text-gray-900">次の学習ステップを決めたい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            ツール名だけで学習計画を立てると、実務で使い分ける判断軸が育ちにくくなります。AIリブートアカデミーでは、
            次の3本柱を同時に設計し、実務アウトプットとキャリア選択をつなげます。
          </p>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              <strong className="font-semibold text-gray-900">生成AI活用力</strong>: 仕事で使えるAI活用の判断軸を体系化する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <strong className="font-semibold text-gray-900">自己理解・キャリアデザイン</strong>: AIを鏡に強みと価値観を言語化する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              <strong className="font-semibold text-gray-900">仲間と共に学ぶ環境</strong>: 対話と協働で継続学習を加速させる
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-will-primary/90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox />
        </section>
      </article>
    </main>
  );
}
