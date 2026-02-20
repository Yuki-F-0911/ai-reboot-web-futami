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

type ElevenlabsGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = [
  "ElevenLabs 使い方",
  "AI音声合成 ツール",
  "テキスト読み上げ AI",
  "ナレーション 自動化 2026",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is", label: "ElevenLabsとは？" },
  { id: "getting-started", label: "登録〜初回音声生成手順" },
  { id: "voice-clone", label: "音声クローンの使い方と規約" },
  { id: "use-cases", label: "活用事例（動画・ポッドキャスト）" },
  { id: "comparison", label: "日本語対応・料金・競合比較" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const summaryPoints = [
  "ElevenLabsは、2026年2月時点でFree/Starter/Creator/Proの4段階プランを公開し、自然な音声合成と音声クローン機能を提供しています。",
  "使い方の基本は、アカウント作成後にText to Speech画面でVoice・Model・安定性パラメータを設定し、生成と再調整を繰り返す流れです。",
  "商用利用はTerms上でPaidプラン前提のため、Freeは検証用途に限定し、公開用音声は有料契約中に生成する運用が安全です。",
  "日本語は公式対応済みですが、固有名詞や漢字読みは原稿側で読みを調整すると品質が安定しやすくなります。",
  "比較検討では、音質だけでなく、クレジット管理、商用ライセンス、クローン同意管理を含めて判断する必要があります。",
] as const;

const firstGenerationSteps = [
  "ElevenLabs公式サイトでアカウント作成後、ダッシュボードから `Text to Speech` 画面を開く。",
  "用途に合うVoice（既存または作成済み）を選択し、必要なら言語に合わせたModelを選ぶ。",
  "読み上げる原稿を入力する。日本語は句読点・改行・固有名詞読みを整えてから入れる。",
  "Stability / Style Similarity / Speedなどの調整項目を少しずつ変更して比較する。",
  "Generate Speechを実行し、音声を確認。違和感があれば原稿とパラメータを修正して再生成する。",
  "採用した音声をダウンロードし、案件単位で「生成日・使用ボイス・利用先」をメモしておく。",
] as const;

const voiceCloneRows = [
  {
    feature: "Instant Voice Clone",
    summary: "短時間サンプルで素早くクローン作成",
    requirement: "本人または明示許諾済み音声のみ",
    suitable: "短納期の検証、複数パターン試作",
  },
  {
    feature: "Professional Voice Clone",
    summary: "長めの収録で品質を高める方式",
    requirement: "プラン枠と検証フロー、同意管理が必要",
    suitable: "ブランド音声、継続運用する定番ナレーション",
  },
] as const;

const useCases = [
  {
    title: "YouTubeナレーション",
    body: "台本修正が多い動画では、再収録の代わりにAI音声を差し替える運用が有効です。章ごとに音声を書き出して管理すると、編集工数を減らしやすくなります。",
    flow: "台本確定 → ElevenLabsで章単位生成 → 動画編集ソフトに配置 → BGM/効果音と最終ミックス",
  },
  {
    title: "ポッドキャスト・音声配信",
    body: "更新頻度が高い番組では、告知パートや定型説明の自動生成で制作時間を短縮できます。人の収録とAI音声を役割分担すると、配信品質を維持しやすくなります。",
    flow: "番組構成作成 → 定型パートをAI生成 → 人のコメントを収録 → 1本に統合して公開",
  },
  {
    title: "企業広報・社内読み上げ",
    body: "ニュースレターの有声化、社内アナウンス、製品紹介の仮ナレーションなど、短時間で複数案を比較したい場面に向いています。",
    flow: "原稿ドラフト → 読み上げ候補を複数生成 → 社内レビュー → 公開版を確定",
  },
] as const;

const elevenlabsPlanRows = [
  { plan: "Free", price: "$0 / 月", credit: "10k / 月", commercial: "不可（非商用）", note: "検証用途向け" },
  { plan: "Starter", price: "$5 / 月", credit: "30k / 月", commercial: "可能", note: "個人運用の初期段階" },
  { plan: "Creator", price: "$11 / 月", credit: "100k / 月", commercial: "可能", note: "継続的な制作運用" },
  { plan: "Pro", price: "$99 / 月", credit: "500k / 月", commercial: "可能", note: "チーム・大量生成向け" },
] as const;

const competitorRows = [
  {
    service: "ElevenLabs",
    pricing: "Free/Starter/Creator/Proを公式公開",
    japanese: "公式対応。自然さは高いが原稿調整で差が出る",
    commercial: "Paidで商用可（Terms準拠）",
    fit: "多言語対応と高品質ナレーションを重視する運用",
  },
  {
    service: "VOICEVOX",
    pricing: "公式製品ページで無料提供",
    japanese: "日本語TTS特化で導入しやすい",
    commercial: "規約と各音源ルール遵守で商用可",
    fit: "まず低コストで日本語音声運用を始めたいケース",
  },
  {
    service: "NijiVoice",
    pricing: "[要確認: 2026-02-20時点の公開価格体系]",
    japanese: "日本語運用しやすさを訴求",
    commercial: "規約とクレジット表記ルール確認が必要",
    fit: "国内向け運用の第一候補を比較したいケース",
  },
  {
    service: "CoeFont",
    pricing: "Free/Standard/Plusを公式ページで公開",
    japanese: "日本語音声資産が豊富",
    commercial: "プラン条件に応じて可能",
    fit: "商用条件を細かく分けて設計したいケース",
  },
] as const;

const licenseChecks = [
  "生成時のプラン状態（FreeかPaidか）を記録する。",
  "外部公開用途（広告、YouTube収益化、クライアント納品）を事前に分類する。",
  "音声クローン対象の同意証跡を保存する。",
  "他サービス併用時はクレジット表記要否を媒体ごとに確認する。",
  "規約更新日を月1回点検し、利用ルールを更新する。",
] as const;

function LineCtaBox({ tone }: { tone: "gray" | "green" | "orange" }) {
  const className =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : tone === "orange"
        ? "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
        : "mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6";

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-sm font-semibold text-gray-900">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-3 text-sm leading-7 text-gray-700">
        ツール情報だけで終わらせず、業務に落とす視点を毎週1本で受け取れます。実務導入前の判断軸を整えたい方に向けた無料配信です。
      </p>
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
    </motion.section>
  );
}

export default function ElevenlabsGuidePage({ faqItems }: ElevenlabsGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "ElevenLabs使い方ガイド" },
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
                title="ElevenLabs使い方ガイド2026｜料金・音声クローン・日本語対応を解説"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            ElevenLabs使い方ガイド2026｜料金・音声クローン・日本語対応を解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            ElevenLabsは、音声合成ツールの中でも自然な抑揚と多言語対応で評価されるサービスです。結論として、導入で失敗しないポイントは
            「音質」だけでなく「クレジット運用」と「商用ルール」を同時に設計することです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、アカウント作成から初回生成、音声クローン、活用事例、日本語対応、料金比較、商用利用の注意点までを
            <strong className="font-semibold text-gray-900">2026年2月20日時点の公式情報</strong>
            で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="what-is"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            ElevenLabsとは？AI音声合成ツールとして評価される理由
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            ElevenLabsは、テキスト読み上げ、音声変換、音声クローンを1つの制作フローにまとめられる点が強みです。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            特にYouTubeやポッドキャストでは、再収録コストを下げながらトーンを揃えられることが導入理由になります。公式ヘルプでもText to
            Speech画面からの生成手順が明確に示されており、初回導入ハードルは高くありません。
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">多言語モデルを選択でき、日本語を含む読み上げ運用に対応。</li>
            <li className="pl-1 marker:text-gray-500">音声パラメータを調整して、同じ台本でも複数トーンを短時間で比較可能。</li>
            <li className="pl-1 marker:text-gray-500">クローン音声と標準音声を使い分け、用途別に制作ラインを分離しやすい。</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            台本設計から先に固めたい場合は、
            <Link href="/academy/blog/ai-writing-tool" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI文章作成ツール比較2026
            </Link>
            の手順を合わせると、音声生成前の修正回数を減らしやすくなります。
          </p>
        </motion.section>

        <LineCtaBox tone="gray" />

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
            アカウント作成〜初回音声生成は6ステップで進めると失敗しにくい
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、最初は「1本を完璧に作る」より「短い原稿で調整感覚を掴む」ほうが早く品質が安定します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            ElevenLabs公式ヘルプのText to Speechガイド（確認日: 2026-02-20）に沿うと、最初に覚えるべき操作はVoice選択、Model選択、設定調整、Generateの4点です。
          </p>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {firstGenerationSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">初心者が最初に詰まりやすいポイント</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-amber-800">
              <li className="pl-1 marker:text-amber-500">長文を一度に生成して、修正箇所の特定が難しくなる。</li>
              <li className="pl-1 marker:text-amber-500">固有名詞の読みを台本側で指定せず、発音にばらつきが出る。</li>
              <li className="pl-1 marker:text-amber-500">商用利用前提なのにFree枠生成音声を本番に使ってしまう。</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="voice-clone"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            音声クローン機能は「同意管理」と「枠管理」を先に決めると安全に運用できる
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            音声クローンは便利ですが、運用ルールを先に定義しないと規約違反や公開停止リスクにつながります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            公式ヘルプでは、クローン対象は本人または明示許諾済みの声に限定され、年齢要件や検証フローが提示されています。Professional
            Voice Cloneの保有数もプランごとに制限があります（確認日: 2026-02-20）。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">機能</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">概要</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">要件</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {voiceCloneRows.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.feature}</th>
                    <td className="px-4 py-4">{row.summary}</td>
                    <td className="px-4 py-4">{row.requirement}</td>
                    <td className="px-4 py-4">{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">クローン導入時の実務手順</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">対象音声の同意取得（書面または社内承認）を完了する。</li>
            <li className="pl-1 marker:text-gray-500">サンプル音声の品質を整え、ノイズの少ない素材を準備する。</li>
            <li className="pl-1 marker:text-gray-500">検証環境で短尺原稿を試し、発音傾向と改善点を記録する。</li>
            <li className="pl-1 marker:text-gray-500">本番は利用先とライセンス条件をチェックしてから公開する。</li>
          </ol>
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
            動画ナレーション・ポッドキャスト・広報読み上げは工程分割で運用すると再現性が高い
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            活用効果を出すには、生成そのものより「どの工程を自動化するか」を先に決めることが重要です。
          </p>
          <div className="mt-6 space-y-4">
            {useCases.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-900">
                  実装フロー: <span className="font-normal text-gray-700">{item.flow}</span>
                </p>
              </section>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            動画全体の制作導線を作るときは、
            <Link href="/academy/blog/ai-youtube-content-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              YouTube AI動画制作ガイド2026
            </Link>
            と
            <Link href="/academy/blog/ai-video-editing-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画編集の始め方
            </Link>
            を併読すると、台本・音声・編集を分断せずに設計できます。
          </p>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            日本語対応・料金プラン・競合比較をまとめて判断する
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、ElevenLabsは日本語を公式対応しており、品質は高い一方で原稿前処理とライセンス管理が導入成否を分けます。
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">日本語対応の実態（2026-02-20確認）</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">公式ヘルプ/Docsで日本語は対応言語に含まれる。</li>
            <li className="pl-1 marker:text-gray-500">コミュニティ実声では、固有名詞や漢字読みに補正が必要という報告がある。</li>
            <li className="pl-1 marker:text-gray-500">対策として、読み仮名の追記、文の分割、英数字の読み統一を先に行うと改善しやすい。</li>
          </ul>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">ElevenLabs料金比較（2026-02-20確認）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">価格</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">クレジット</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている段階</th>
                </tr>
              </thead>
              <tbody>
                {elevenlabsPlanRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-4">{row.price}</td>
                    <td className="px-4 py-4">{row.credit}</td>
                    <td className="px-4 py-4">{row.commercial}</td>
                    <td className="px-4 py-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">VOICEVOX・NijiVoice・CoeFontとの違い</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">サービス</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金情報</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">日本語運用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                {competitorRows.map((row) => (
                  <tr key={row.service} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.service}</th>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="px-4 py-4">{row.japanese}</td>
                    <td className="px-4 py-4">{row.commercial}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">商用利用ライセンスの最終チェック</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {licenseChecks.map((item) => (
              <li key={item} className="pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-6 text-gray-600">
            注記: 法的助言ではありません。案件運用では最新規約と社内法務確認を併用してください。
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
            料金・規約・日本語品質は更新されるため、導入前に確認日付きで見直してください。
          </p>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <LineCtaBox tone="green" />

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-content-sns-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI×ブログ・SNS・YouTube台本の作り方｜コンテンツ制作を10倍速にする
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-youtube-content-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                YouTube AI動画制作ガイド2026｜企画・台本・編集・サムネを一気通貫で効率化
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-video-editing-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画編集の始め方｜初心者向けツール比較とCapCut無料実践【2026】
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
          <h2 className="text-2xl font-bold text-gray-900">次のアクション</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力を実務で使える形に整えることに加えて、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境づくりまで一体で設計しています。ツール名ではなく「自分の業務で何を改善するか」を言語化し、継続運用までつなげたい方は、学習プロセス全体を見直すことが有効です。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
            >
              今すぐ無料で登録する（30秒）
            </a>
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーを見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
