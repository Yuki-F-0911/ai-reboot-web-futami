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

type SunoAiMusicGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = [
  "Suno 使い方",
  "AI 音楽 生成 無料",
  "Suno プロンプト 書き方",
  "Suno 商用利用",
] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "getting-started", label: "Sunoの始め方（無料プラン）" },
  { id: "prompt-writing", label: "Sunoプロンプトの書き方" },
  { id: "commercial-copyright", label: "商用利用と著作権の整理" },
  { id: "business-use", label: "ビジネス活用シーン" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "related-links", label: "関連リンク" },
] as const;

const freeStartSteps = [
  "Sunoアカウントを作成し、ダッシュボードを開く。",
  "無料（Basic）プランで1日50クレジットが付与されることを確認する（確認日: 2026-02-20）。",
  "最初は15〜30秒程度の短尺BGMを3パターン生成して、好みの方向を決める。",
  "公開用途がある場合は、無料生成曲を本番で使わず、検証専用として扱う。",
  "収益化する曲は、ProまたはPremier契約中に作成して作成ログを残す。",
] as const;

const promptFramework = [
  {
    key: "ジャンル（Genre）",
    detail: "lo-fi hip hop / cinematic / ambient / EDM など、音楽の土台を先に固定します。",
  },
  {
    key: "テンポ（Tempo）",
    detail: "slow 80 BPM / mid-tempo 100 BPM / upbeat 128 BPM のように速度を指定します。",
  },
  {
    key: "ムード（Mood）",
    detail: "calm / uplifting / emotional / tense など、感情トーンを短語で指定します。",
  },
  {
    key: "楽器（Instruments）",
    detail: "piano / acoustic guitar / synth pad / soft drums のように主役楽器を明示します。",
  },
] as const;

const promptExamples = [
  {
    scene: "YouTube解説動画のBGM",
    prompt:
      "Instrumental, cinematic ambient, 92 BPM, calm and focused mood, soft piano, warm synth pad, minimal drums, no vocals, clean intro for narration.",
  },
  {
    scene: "SNSリール（商品紹介）",
    prompt:
      "Instrumental, upbeat electronic pop, 124 BPM, bright and energetic mood, punchy kick, plucky synth lead, short hook in first 3 seconds.",
  },
  {
    scene: "プレゼン導入パート",
    prompt:
      "Instrumental, modern corporate background music, 100 BPM, confident and positive mood, piano arpeggio, light percussion, smooth transition loop.",
  },
  {
    scene: "落ち着いたVlog",
    prompt:
      "Instrumental, lo-fi chillhop, 78 BPM, relaxed and warm mood, jazz guitar, vinyl texture, soft snare, no vocal layers.",
  },
  {
    scene: "商品デモの緊張感演出",
    prompt:
      "Instrumental, minimal cinematic pulse, 110 BPM, tense but controlled mood, deep bass pulse, subtle strings, sparse percussion.",
  },
] as const;

const businessScenes = [
  {
    title: "プレゼンBGM",
    description:
      "社内提案や営業資料の冒頭・切り替えで使うと、場面転換が明確になります。1本を長く作るより、導入・本編・締めの3パーツに分けると使い回ししやすくなります。",
    workflow:
      "用途定義 → 20〜40秒素材を複数生成 → ナレーション音量と干渉しない帯域を選ぶ → スライドに合わせて配置",
  },
  {
    title: "YouTube動画",
    description:
      "著作権フリーBGMを都度探す時間を減らせます。動画テーマに合わせたBGMプリセットを作っておくと、編集工数を下げながら統一感を維持できます。",
    workflow:
      "チャンネルごとの音楽トーンを定義 → Sunoで3候補生成 → 編集ソフトで音量正規化 → テンプレ化",
  },
  {
    title: "SNSリール",
    description:
      "短尺では最初の数秒で印象が決まるため、冒頭フックのあるBGMが有効です。投稿テーマ別に3パターン用意しておくと継続運用しやすくなります。",
    workflow:
      "投稿カテゴリを分ける → カテゴリ別にテンポを固定 → 冒頭3秒重視で生成 → 投稿前に尺を合わせる",
  },
] as const;

export default function SunoAiMusicGuidePage({ faqItems }: SunoAiMusicGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Sunoで音楽を作る方法入門" },
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
                title="Sunoで音楽を作る方法入門｜プロンプトから楽曲生成・ビジネス活用まで"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Sunoで音楽を作る方法入門｜プロンプトから楽曲生成・ビジネス活用まで
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論として、Sunoは動画・SNS・プレゼン用BGMを短時間で試作したい人に向いています。ただし、無料プランと有料プランで商用利用条件が大きく違うため、
            生成前に運用ルールを決める必要があります。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            本記事では、Sunoの始め方、プロンプトの書き方、商用利用・著作権の整理、実務導入手順を
            <strong className="font-semibold text-gray-900">2026年2月20日時点の公式情報</strong>
            を基準にまとめています。
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
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">先に商用可否の境界を決め、無料枠は検証に限定すると後工程の権利トラブルを避けやすくなります。</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">
              Suno無料（Basic）プランは1日50クレジットで、目安10曲/日の試作が可能です。
            </li>
            <li className="pl-1 marker:text-gray-500">
              収益化や案件利用を前提にするなら、無料生成曲ではなく、Pro/Premier契約中に本番曲を作る必要があります。
            </li>
            <li className="pl-1 marker:text-gray-500">
              プロンプトは「ジャンル・テンポ・ムード・楽器」の4要素を固定すると、修正回数を減らせます。
            </li>
            <li className="pl-1 marker:text-gray-500">
              実務導入では、作曲そのものより「曲の権利管理」と「利用ログ管理」を先に設計する方が失敗しにくくなります。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="getting-started"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Sunoの始め方は、無料プランで検証し本番曲だけ有料で作る流れが効率的です
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、Sunoは無料で曲調検証を行い、商用公開する曲だけを有料契約中に作る運用が最も合理的です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Suno公式Pricing/Help（確認日: 2026-02-20）では、Basicは1日50クレジットの無料枠、Pro/Premierは商用利用向けの契約として整理されています。
            ここを分けずに運用すると、公開直前に権利要件で詰まるケースが増えます。
          </p>
          <h3 className="mt-7 text-xl font-semibold text-gray-900">無料プランで始める5ステップ</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {freeStartSteps.map((step) => (
              <li key={step} className="pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            動画用BGMの運用を並行で作る場合は、
            <Link href="/academy/blog/ai-video-generation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-video-generation-comparison
            </Link>
            で映像生成フローを合わせて設計すると、音と映像の制作速度を揃えやすくなります。
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
          id="prompt-writing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Sunoプロンプトは、ジャンル・テンポ・ムード・楽器を固定すると再現性が上がります
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、Sunoプロンプトは感覚語だけで書くより、音楽要素を4項目で分解した方が狙ったBGMに近づきます。
          </p>
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-lg font-semibold text-gray-900">プロンプト設計の基本4項目</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
              {promptFramework.map((item) => (
                <li key={item.key} className="pl-1 marker:text-gray-500">
                  <span className="font-semibold text-gray-900">{item.key}:</span> {item.detail}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Suno公式のPromptingガイド（確認日: 2026-02-20）でも、ジャンル指定とスタイル記述、必要に応じたInstrumental指定が推奨されています。
            BGM用途では、歌詞生成より先に「Instrumental」を前提に書く方が編集工程を安定させやすくなります。
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">そのまま使えるプロンプト例（5用途）</h3>
          <div className="mt-4 space-y-4">
            {promptExamples.map((item) => (
              <section key={item.scene} className="rounded-lg border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">{item.scene}</p>
                <pre className="mt-3 overflow-x-auto rounded-md bg-slate-900 p-4 text-xs leading-6 text-slate-100">
                  <code>{item.prompt}</code>
                </pre>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            サムネイルや告知画像まで同時に作る場合は、
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-image-generation-guide
            </Link>
            とセットで運用すると、BGMとビジュアルのトーンを揃えやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="commercial-copyright"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Sunoの商用利用と著作権は、作成時プランと曲の作成履歴で判断する必要があります
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、Sunoでは「どのプランで、いつ作った曲か」が商用可否の判断軸です。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Suno公式Help/Terms（確認日: 2026-02-20）に基づく実務整理は次の通りです。なお、法制度は国ごとに異なるため、最終判断は配信先規約と法務確認を前提にしてください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">論点</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">公式整理（2026-02-20確認）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">実務対応</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4">無料曲の商用利用</td>
                  <td className="px-4 py-4">Basicで生成した曲は非商用利用のみ</td>
                  <td className="px-4 py-4">収益化用途では使わず、検証用に限定する</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4">有料曲の商用利用</td>
                  <td className="px-4 py-4">Pro/Premierで生成した曲は商用利用可能</td>
                  <td className="px-4 py-4">生成日時と契約状態のログを保存する</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <td className="px-4 py-4">曲の所有</td>
                  <td className="px-4 py-4">Basic生成曲はSuno所有、Pro/Premier生成曲はユーザー所有</td>
                  <td className="px-4 py-4">曲ごとに権利区分を台帳化する</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4">著作権保護の可否</td>
                  <td className="px-4 py-4">AI生成物は法域により著作権保護対象外となる可能性がある</td>
                  <td className="px-4 py-4">配信国・プラットフォームごとの規約確認を必須化する</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs leading-6 text-gray-600">
            注記: 上記はSuno公式Help/Termsの要点整理です。法的助言ではありません。案件運用では利用プラットフォーム規約と顧問確認を併用してください。
          </p>
        </motion.section>

        <motion.section
          id="business-use"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">
            Sunoはプレゼン・YouTube・SNSリールのBGM作成を短時間で回す用途に向いています
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-gray-900">
            結論として、Sunoは音楽制作そのものの高度編集より、コンテンツ制作現場のBGM試作と再利用に適しています。
          </p>
          <div className="mt-6 space-y-4">
            {businessScenes.map((scene) => (
              <section key={scene.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{scene.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{scene.description}</p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">実装フロー:</span> {scene.workflow}
                </p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            運用全体を作るときは、
            <Link href="/academy/blog/ai-content-sns-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ai-content-sns-guide
            </Link>
            の媒体別ワークフローと組み合わせると、BGMだけ先行して余る状態を避けやすくなります。
          </p>
          <div className="mt-7 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <p className="text-sm font-semibold text-blue-900">AIリブートアカデミーの実務支援方針</p>
            <p className="mt-2 text-sm leading-7 text-blue-800">
              AIリブートアカデミーでは、生成AI活用力の習得に加えて、AIを鏡にした自己理解・キャリアデザイン、さらに仲間と共に学ぶ環境を通じて、実務で継続できる運用まで設計しています。
            </p>
          </div>
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
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">よくある質問（FAQ）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            まず結論を確認し、商用利用・著作権・プラン条件は制作前に公式ヘルプの最新情報で再確認してください。
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

        <section id="related-links" className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">関連リンク</h2>
          <p className="mb-4 text-sm leading-7 text-gray-700">映像制作や配信導線まで含めて設計する場合は、次の記事を併読してください。</p>
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
                href="/academy/blog/ai-video-generation-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-image-generation-guide"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI画像生成おすすめツール比較｜Nano Banana・Midjourney・DALL-Eの使い方と選び方
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
