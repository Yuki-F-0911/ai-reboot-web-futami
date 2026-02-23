"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";
import ArticleTOC from "@/components/academyLanding/common/ArticleTOC";
import WebtoonBannerSection from "@/components/academyLanding/common/WebtoonBannerSection";
import CopyAsMarkdownButton from "@/components/blog/CopyAsMarkdownButton";
import LineCtaBox from "@/components/blog/LineCtaBox";

type FAQItem = {
  question: string;
  answer: string;
};

type MidjourneyVideoGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Midjourney 動画生成 使い方", "Midjourney V1 Video", "AI動画 静止画から動画"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "v1-overview", label: "V1 Videoとは？リリース時期と基本機能" },
  { id: "plans", label: "対応プラン（Basic/Standard/Pro/Mega）" },
  { id: "animate", label: "Animateボタンの使い方（Web / Discord）" },
  { id: "specs", label: "秒数・品質・解像度スペック" },
  { id: "download-commercial", label: "ダウンロード・共有・商用利用" },
  { id: "comparison", label: "Runway Gen-3・Kling AIとの使い分け" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩を決める" },
] as const;

const summaryPoints = [
  "Midjourney V1 Videoの正式公開日は2025-06-18です。2026年リリースではありません。",
  "V1 Videoは「静止画を起点に4秒動画を作る」設計で、Extendにより最大21秒まで伸ばせます。",
  "動画生成は全プランFastモードで利用できますが、HD（VideoUpscale）はStandard以上が対象です。",
  "AnimateはWeb/Discordの両方で操作でき、初心者はWebから始めると流れを掴みやすくなります。",
  "比較時は「短尺の見栄え」「編集のしやすさ」「商用条件」の順で判断すると手戻りを減らせます。",
] as const;

const releaseRows = [
  {
    date: "2025-06-18",
    topic: "V1 Video正式公開",
    detail: "Midjourney公式がV1 Videoを発表。Image-to-Video、Extend、4モーションモードが案内された。",
  },
  {
    date: "2026-02-20",
    topic: "本記事確認日",
    detail: "仕様・プラン・規約を公式ドキュメントで再確認。",
  },
] as const;

const planRows = [
  {
    plan: "Basic",
    monthly: "$10",
    videoGeneration: "利用可（Fast）",
    hdUpscale: "不可",
    fit: "動画化を少量テストしたい個人",
  },
  {
    plan: "Standard",
    monthly: "$30",
    videoGeneration: "利用可（Fast / Relax）",
    hdUpscale: "利用可",
    fit: "継続的に制作して品質も上げたい人",
  },
  {
    plan: "Pro",
    monthly: "$60",
    videoGeneration: "利用可（Fast / Relax）",
    hdUpscale: "利用可",
    fit: "案件運用・作業量が多い人",
  },
  {
    plan: "Mega",
    monthly: "$120",
    videoGeneration: "利用可（Fast / Relax）",
    hdUpscale: "利用可",
    fit: "高頻度で量産するチーム",
  },
] as const;

const webSteps = [
  "Webアプリで画像を生成またはアップロードする。",
  "対象画像の下に表示される `Animate` を選択する。",
  "Auto（自動）かManual（テキスト指定）を選び、Low/High Motionを決める。",
  "出力を確認し、必要ならExtendで4秒ずつ延長する。",
  "仕上げが必要ならVideoUpscale（HD）を実行する。",
] as const;

const discordSteps = [
  "Discordで画像生成後、対象画像を開く。",
  "画像アクションの `Animate` 導線から動画化を開始する。",
  "Low/High MotionとAuto/Manualを選ぶ。",
  "同じ構図で複数パターンを比較し、当たりを残す。",
  "最終版のみExtendとHD化を行い、コストを抑える。",
] as const;

const specRows = [
  {
    item: "開始秒数",
    value: "4秒",
    note: "V1 Videoの初回生成は4秒。",
  },
  {
    item: "最大秒数",
    value: "21秒",
    note: "Extendを重ねると最大21秒まで延長可能。",
  },
  {
    item: "モーション設定",
    value: "Low / High",
    note: "動きの破綻が出る場合はLowから試すと安定しやすい。",
  },
  {
    item: "生成モード",
    value: "Auto / Manual",
    note: "Manualは動きの意図をテキストで指定できる。",
  },
  {
    item: "解像度",
    value: "360p / 480p / 720p",
    note: "720pはVideoUpscale工程。Standard以上が対象。",
  },
  {
    item: "コスト目安",
    value: "画像比およそ8倍",
    note: "公式発表時点の案内。運用前に最新条件を確認。",
  },
] as const;

const downloadShareSteps = [
  "書き出し後にローカル保存し、案件別フォルダで管理する。",
  "共有前に解像度と尺を確認し、提出要件（SNS/広告/LP）に合わせる。",
  "公開前に著作権・商標・肖像権のリスクをチェックする。",
  "規約更新に備え、生成日・使用プラン・利用規約版を記録する。",
] as const;

const comparisonRows = [
  {
    tool: "Midjourney V1 Video",
    strength: "静止画の世界観を短尺モーションへ速く変換しやすい",
    weakPoint: "長尺編集や緻密なタイムライン管理には向かない",
    fit: "サムネ、KV、ティザーなどの短尺ビジュアル展開",
  },
  {
    tool: "Runway Gen-3",
    strength: "生成から編集まで一気通貫。Extendで最大40秒運用がしやすい",
    weakPoint: "料金管理とクレジット設計を先に決めないとコストが読みづらい",
    fit: "説明動画、案件用ラフ、複数カット管理",
  },
  {
    tool: "Kling AI",
    strength: "動き表現のバリエーション探索に向く公式アップデートが継続している",
    weakPoint: "価格・地域導線の確認が複雑になりやすい",
    fit: "実験的なカット探索、表現の方向性検証",
  },
] as const;

const comparisonTips = [
  "同一画像・同一尺（4〜5秒）で3ツールを比較してから本番尺へ伸ばす。",
  "最初から長尺を狙わず、用途に必要な最短秒数で合格基準を作る。",
  "商用案件は、画質より先に規約と契約条件の整合を確認する。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "ツール名に振り回されず、業務課題に対してAIをどう使うかを判断できる状態を作ります。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを使って自分の強みや価値観を整理し、次の働き方やキャリア選択へつなげます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との対話とレビューで、学習を継続できる仕組みを整えます。",
  },
] as const;

export default function MidjourneyVideoGuidePage({ faqItems }: MidjourneyVideoGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Midjourney V1 Video使い方ガイド" },
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
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton
                title="Midjourney V1 Video使い方ガイド｜静止画から動画生成・設定・商用利用【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Midjourney V1 Video使い方ガイド｜静止画から動画生成・設定・商用利用【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Midjourney V1 Videoは、既に作った静止画を短尺動画へ展開しやすい機能です。画像の世界観を崩さずに動きをつけられるため、SNS素材やティザー制作で試す人が増えています。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            先に重要な点を明確にすると、V1 Videoの正式公開日は
            <strong className="font-semibold text-gray-900">2025年6月18日</strong>
            です。2026年公開ではありません。本記事では2026年2月20日時点の公式情報を基準に、手順と判断軸を整理します。
          </p>
          <p className="mt-3 text-xs text-gray-500">情報確認日: 2026-02-20（料金・仕様・規約は更新されるため利用前に再確認してください）</p>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {summaryPoints.map((point) => (
              <li key={point} className="blog-li pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <LineCtaBox />
          </div>
        </motion.section>

        <WebtoonBannerSection />

        <motion.section
          id="v1-overview"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Midjourney V1 Videoとは？リリース時期と基本機能</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            V1 Videoは、Midjourneyで生成した画像やアップロード画像を起点に、短い動画を作るImage-to-Video機能です。静止画の質感を活かしながら、最小限の操作で動きを追加できます。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            日付の混同が起きやすいため、ここで固定します。正式公開日は2025-06-18です。2026年は仕様確認や運用拡張の文脈で参照される年であり、初回公開年ではありません。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">日付</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">更新内容</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務インパクト</th>
                </tr>
              </thead>
              <tbody>
                {releaseRows.map((row) => (
                  <tr key={row.date + row.topic} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.date}</th>
                    <td className="px-4 py-4">{row.topic}</td>
                    <td className="py-4 pl-4">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Midjourney本体の画像生成をまだ整理していない場合は
            <Link href="/academy/blog/midjourney-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Midjourney v7使い方完全ガイド
            </Link>
            を先に確認すると、動画化の前提が揃います。
          </p>
        </motion.section>

        <motion.section
          id="plans"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">対応プラン（Basic/Standard/Pro/Mega）</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            「動画はStandard以上のみ」という理解は正確ではありません。2026年2月20日時点の公式Plan Tiersでは、動画生成自体は全プランで利用できます。差が出るのはHDアップスケール可否です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">月額</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">動画生成</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">HD（VideoUpscale）</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている運用</th>
                </tr>
              </thead>
              <tbody>
                {planRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-4">{row.monthly}</td>
                    <td className="px-4 py-4">{row.videoGeneration}</td>
                    <td className="px-4 py-4">{row.hdUpscale}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">注記: 価格と機能制限は更新されるため、契約前に公式Plansを再確認してください。</p>
        </motion.section>

        <motion.section
          id="animate"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Animateボタンの使い方（Web / Discord）</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            どちらの環境でもAnimate導線は共通ですが、初心者はWebのほうが状態を把握しやすいです。Discordは量産運用に強く、慣れてから移行すると安定します。
          </p>

          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">Webアプリ手順</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {webSteps.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>

          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">Discord手順</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {discordSteps.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Midjourney操作で迷ったら
            <Link href="/academy/blog/midjourney-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Midjourneyガイド
            </Link>
            を併読し、画像生成の段階で構図を固めてからAnimateへ進むと失敗を減らせます。
          </p>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="specs"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">動画の長さ・品質設定・解像度スペック</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            実務で最も確認されるのは「何秒まで作れるか」と「どの解像度で納品できるか」です。先にスペックを固定しておくと、生成回数とコストの見積もりが安定します。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[920px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">仕様</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">実務メモ</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row) => (
                  <tr key={row.item} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.item}</th>
                    <td className="px-4 py-4">{row.value}</td>
                    <td className="py-4 pl-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            動画生成AI全体の比較を先に見たい場合は
            <Link href="/academy/blog/ai-video-generation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              動画生成AI比較2026
            </Link>
            を参照し、要件に合う尺と品質基準を先に定義してください。
          </p>
        </motion.section>

        <motion.section
          id="download-commercial"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">生成した動画のダウンロード・共有方法と商用利用条件</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Midjourneyで作った動画は保存と共有が容易ですが、公開前チェックを省くと後工程で手戻りが発生します。とくに商用案件では、規約条件と第三者権利の確認を同時に行ってください。
          </p>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {downloadShareSteps.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
            商用利用は規約上可能ですが、年商100万USD超の企業利用にはPro/Mega条件があります。加えて、著作権・商標・肖像権の法的判断は案件ごとに必要です。
          </p>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            法務観点を深掘りする場合は
            <Link href="/academy/blog/ai-legal-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI法務ガイド
            </Link>
            もあわせて確認してください。
          </p>
        </motion.section>

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Runway Gen-3・Kling AIとの使い分け指針</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            3ツールは目的が少しずつ異なります。Midjourney V1 Videoは静止画起点の短尺展開、Runway Gen-3は編集を含む映像制作、Klingは表現探索の幅を取りたいときに検討される傾向があります。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="px-4 py-4">{row.weakPoint}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {comparisonTips.map((tip) => (
              <li key={tip} className="blog-li pl-1 marker:text-gray-500">
                {tip}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            [要確認] Klingのグローバル向け常時価格とクレジット条件は公開導線が地域で異なるため、契約直前に公式最新情報を確認してください。
          </p>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            画像生成側の選定基準を固めたい場合は
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI画像生成おすすめツール比較
            </Link>
            も参照すると、制作全体の判断がしやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.055 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            仕様と料金は更新されるため、最終判断前に公式情報を再確認してください。
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
            <LineCtaBox />
          </div>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーは、特定ツールの操作習得を目的にした場ではありません。Midjourneyのような生成AIを、どの業務課題にどう当てるかを判断し、継続して成果に結びつけるための学習設計を重視しています。
          </p>
          <div className="mt-5 space-y-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-blue-100 bg-white p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h3 id="related-links" className="mb-4 scroll-mt-28 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/midjourney-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                Midjourney v7使い方完全ガイド｜Discord・Web・料金・商用利用【2026年版】
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
              <Link href="/academy/blog/ai-legal-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI法務ガイド｜著作権・契約・実務リスクの整理
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

