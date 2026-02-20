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

type KlingAiGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const keywordTags = ["Kling AI 使い方", "Kling AI 動画生成", "KuaiShou AI動画", "テキスト to 動画 2026"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-kling", label: "Kling AIとは" },
  { id: "first-video", label: "登録から初回生成まで" },
  { id: "text-image", label: "Text to Video / Image to Video" },
  { id: "pricing", label: "料金とRunway/Sora比較" },
  { id: "commercial", label: "商用利用の注意点" },
  { id: "faq", label: "FAQ" },
  { id: "related-links", label: "関連記事" },
] as const;

const firstVideoSteps = [
  "アカウント作成後、ダッシュボードで生成モードを選ぶ",
  "まずは5〜10秒の短尺でテストし、比率（9:16 / 16:9）を固定する",
  "被写体・背景・カメラ動作を分けてプロンプトに記述する",
  "同じプロンプトを3回生成し、破綻率と再現性を比較する",
  "当たりパターンをテンプレ化してから長尺化する",
] as const;

const textToVideoChecklist = [
  "被写体: 主役を1つに絞る",
  "シーン: 場所、時間帯、光源を明記する",
  "動き: 被写体の動作とカメラ指示を分ける",
  "尺: まずは短尺で検証する",
  "比率: 投稿先に合わせて固定する",
] as const;

const imageToVideoChecklist = [
  "基準画像は主題が明確で、余計な要素が少ないものを使う",
  "指示は1回で盛り込みすぎず、動き要素を1つずつ追加する",
  "顔、手、テキスト部分など破綻しやすい領域を先に確認する",
  "同じ画像でカメラ指示だけ変更し、最適解を比較する",
] as const;

const pricingRows = [
  {
    tool: "Kling AI",
    pricing: "中国本土向けIRでFree + サブスク課金を案内",
    freeTier: "66クレジット/日（中国本土向けIR記載）",
    limits: "5秒1080p生成で10クレジット消費（IR記載）",
    commercial: "要規約確認（グローバル条件は[要確認]）",
    note: "グローバルの最新プラン数値は画面表示で再確認",
  },
  {
    tool: "Runway Gen-3",
    pricing: "Standard $15/月、Pro $35/月（月払い）",
    freeTier: "Freeプランあり",
    limits: "Standard 625 credits、Pro 2,250 credits",
    commercial: "有料プランで可、Freeは不可（公式Help）",
    note: "年払い時は月額換算が下がる",
  },
  {
    tool: "Sora",
    pricing: "ChatGPT Plus $20/月、Pro $200/月",
    freeTier: "専用無料枠なし（有料プラン内で利用）",
    limits: "Plusは720p/10秒、Proは最大1080p/20秒",
    commercial: "OpenAI Terms準拠で運用",
    note: "同時生成数はPlus 2件、Pro 5件（公式Help）",
  },
] as const;

const useCaseRows = [
  {
    useCase: "SNS短尺を週次で量産",
    kling: "短尺カットの量産向き。まずは短尺の再現性を検証。",
    runway: "生成後の編集まで一気通貫で進めやすい。",
    sora: "少数本を丁寧に作る企画向き。",
  },
  {
    useCase: "クライアント案件で商用運用",
    kling: "契約・規約条件の再確認が前提。",
    runway: "有料プランの商用条件が明示され比較しやすい。",
    sora: "プラン条件と利用規約をセットで確認。",
  },
  {
    useCase: "既存画像を活かした動画化",
    kling: "Image to Videoで試作しやすい。",
    runway: "生成素材を編集工程へ接続しやすい。",
    sora: "企画検証向き。素材管理は別途設計が必要。",
  },
] as const;

const commercialChecks = [
  "生成前に、利用規約の商用可否と禁止事項を確認する",
  "人物、ロゴ、商標、既存IPの扱いを案件単位で確認する",
  "納品物ごとにプロンプト、生成条件、確認日を記録する",
  "社内レビューで誤情報と不適切表現を最終チェックする",
  "クライアントへはAI生成利用の範囲を事前共有する",
] as const;

type LineCtaBoxProps = {
  className?: string;
};

function LineCtaBox({ className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6" }: LineCtaBoxProps) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-800">AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">
        週1回、実務で使うための要点だけを受け取りたい方向けに配信しています。ツール更新の追従に時間を使いすぎない運用設計に役立ちます。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </section>
  );
}

export default function KlingAiGuidePage({ faqItems }: KlingAiGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Kling AI使い方ガイド2026" },
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
              <CopyAsMarkdownButton title="Kling AI使い方ガイド2026" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Kling AI使い方ガイド2026｜登録・動画生成・料金・商用利用を解説
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            結論として、Kling AIは「短尺で再現性を確認してから長尺へ移る」使い方が最も安定します。この記事では、登録から初回生成、Text to VideoとImage to
            Videoの使い分け、料金と商用利用の判断軸を確認日つきで整理します。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            本文の料金・仕様・規約情報の確認日: <strong className="font-semibold text-gray-900">2026-02-20</strong>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ</h2>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              Kling AIはKuaishou系の動画生成AIで、公式IRでは最大3分、1080p、30fpsが案内されています。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              初回はText to Videoを短尺で試し、次にImage to Videoで構図固定の再現性を作る順番が効率的です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              料金はKlingがクレジット消費型、RunwayとSoraは公開プラン比較がしやすい構造です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              商用運用では、規約確認に加えて第三者権利と社内承認フローの整備が必須です。
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="what-is-kling"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Kling AIとは？Kuaishou開発の動画生成AIの基本</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            Kling AIは、テキストや画像から動画を生成する用途で使われるサービスです。2026年2月時点では、Kuaishouの公式リリースでモデル更新と製品機能拡張が継続して案内されています。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[780px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">項目</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">確認内容（2026-02-20）</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 align-top">
                  <th className="px-4 py-4 font-semibold text-gray-900">提供元</th>
                  <td className="px-4 py-4">Kuaishou系の動画生成AIプロダクトとして公式IRで発信</td>
                  <td className="px-4 py-4">ニュースリリース基準で確認</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="px-4 py-4 font-semibold text-gray-900">仕様</th>
                  <td className="px-4 py-4">最大3分、1080p、30fpsの言及あり</td>
                  <td className="px-4 py-4">公式IR（1周年発表）</td>
                </tr>
                <tr className="border-b border-gray-200 align-top">
                  <th className="px-4 py-4 font-semibold text-gray-900">料金構造</th>
                  <td className="px-4 py-4">Free + クレジット消費型 + サブスク</td>
                  <td className="px-4 py-4">中国本土向け数値は公式IR記載</td>
                </tr>
                <tr className="align-top">
                  <th className="px-4 py-4 font-semibold text-gray-900">使いどころ</th>
                  <td className="px-4 py-4">SNS短尺、企画カット、素材試作</td>
                  <td className="px-4 py-4">長尺案件は規約とコスト管理が前提</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            先に比較全体を見たい方は
            <Link href="/academy/blog/ai-video-generation-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              動画生成AI比較2026
            </Link>
            も参照してください。編集中心の導線まで含める場合は
            <Link href="/academy/blog/ai-video-tool-comparison" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画生成ツール比較
            </Link>
            が役立ちます。
          </p>
        </motion.section>

        <motion.section
          id="first-video"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">登録から初回動画生成までの手順（初心者向け）</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            初回は、機能を一気に触るよりも「短尺1本を安定して作る」ことを目標にすると失敗しにくくなります。登録後は以下の順で進めてください。
          </p>
          <ol className="blog-ol mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {firstVideoSteps.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <h3 className="blog-h3 mt-7 text-xl font-semibold text-gray-900">初回プロンプトテンプレ（Text to Video）</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">
{`目的: SNS投稿用の短尺動画
被写体: 20代女性がカフェでノートPCを操作
背景: 午後の自然光、ミニマルな室内
動き: 被写体はゆっくり視線移動、カメラは右へ緩やかにパン
尺: 6秒
比率: 9:16
トーン: クリア、暖色、広告風`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            生成後は「顔・手・文字の破綻」「動きの不自然さ」「投稿先との比率一致」を確認し、1項目ずつ修正指示を追加してください。
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
          <LineCtaBox />
        </motion.section>

        <motion.section
          id="text-image"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Text to VideoとImage to Videoの使い分け</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            指示文だけで方向性を決めたいときはText to Video、構図や被写体を固定したいときはImage to Videoが向いています。最初は両方を同じテーマで試し、再現性の差を比較してください。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="blog-h3 text-lg font-semibold text-gray-900">Text to Videoで失敗しにくい要素</h3>
              <ul className="blog-ul mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                {textToVideoChecklist.map((item) => (
                  <li key={item} className="blog-li pl-1 marker:text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="blog-h3 text-lg font-semibold text-gray-900">Image to Videoで失敗しにくい要素</h3>
              <ul className="blog-ul mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                {imageToVideoChecklist.map((item) => (
                  <li key={item} className="blog-li pl-1 marker:text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            生成素材をSNS向けに仕上げる段階では、
            <Link href="/academy/blog/ai-video-editing-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI動画編集ガイド
            </Link>
            の後工程（字幕・カット・縦型化）を組み合わせると運用負荷を下げられます。
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">料金・無料枠・Runway Gen-3/Sora比較（確認日: 2026-02-20）</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            比較は「公開価格」「無料枠」「上限」「商用条件」を同時に見ると判断しやすくなります。Klingの一部数値は中国本土向けIR値で、グローバル表示は再確認が必要です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[1080px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">料金</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">無料枠</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">上限/目安</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注記</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.pricing}</td>
                    <td className="px-4 py-4">{row.freeTier}</td>
                    <td className="px-4 py-4">{row.limits}</td>
                    <td className="px-4 py-4">{row.commercial}</td>
                    <td className="px-4 py-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            Klingのグローバル版価格は、画面表示や地域で差が出るため
            <span className="font-semibold text-gray-900">[要確認: app.klingai.com/globalの最新プラン表示]</span>
            として扱ってください。
          </p>
          <h3 className="blog-h3 mt-7 text-xl font-semibold text-gray-900">用途別の選び方（Kling / Runway Gen-3 / Sora）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="blog-table w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Kling AI</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Runway Gen-3</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Sora</th>
                </tr>
              </thead>
              <tbody>
                {useCaseRows.map((row) => (
                  <tr key={row.useCase} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.useCase}</th>
                    <td className="px-4 py-4">{row.kling}</td>
                    <td className="px-4 py-4">{row.runway}</td>
                    <td className="px-4 py-4">{row.sora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </motion.section>

        <motion.section
          id="commercial"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">商用利用の注意点（ライセンス・権利・運用）</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            商用利用は「ツール規約」「第三者権利」「社内運用」の3点を揃えないと事故率が上がります。RunwayはFree不可/有料可が明示されていますが、Klingは契約条件を都度確認する前提で運用してください。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {commercialChecks.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-7 text-gray-700">
            企業運用のルール設計まで整理したい場合は
            <Link href="/academy/blog/ai-copyright-commercial-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの著作権・商用利用ガイド
            </Link>
            を併読してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Klingの商用ライセンス細則は
            <span className="font-semibold text-gray-900">[要確認: 最新Termsおよびプラン別利用条件]</span>
            として案件前に再確認する運用が安全です。
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
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox />
        </motion.section>

        <section className="mt-14 border-t border-slate-200 pb-4 pt-12">
          <h2 id="related-links" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            関連記事
          </h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/academy/blog/ai-video-generation-comparison"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                動画生成AI比較2026｜Kling・Runway・Seedance・Soraの特徴と選び方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-video-tool-comparison"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画生成ツールおすすめ比較｜用途別の選び方と始め方
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-video-editing-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI動画編集の始め方｜初心者向けツール比較
              </Link>
            </li>
            <li>
              <Link
                href="/academy/blog/ai-copyright-commercial-guide"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                生成AIの著作権・商用利用ガイド
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
          <h2 className="blog-h2 text-2xl font-bold text-gray-900">AI活用の判断軸とキャリアを同時に設計したい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            ツールは短期間で入れ替わるため、特定サービスの操作習得だけでは実務成果が安定しません。AIリブートアカデミーでは、次の3本柱を一体で設計しています。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              生成AI活用力: 実務で使うための判断軸と活用設計を身につける
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              自己理解・キャリアデザイン: AIを鏡に強みと価値観を整理し、次のキャリアを具体化する
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              仲間と共に学ぶ環境: 対話と協働で実務への定着を加速させる
            </li>
          </ul>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            Klingのようなツールをどう業務課題に当てるか、活用判断と学習プロセスを見直したい方は、無料セミナーと個別相談をご活用ください。
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/academy/seminars"
              className="inline-flex items-center justify-center rounded-lg border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              無料セミナーに参加する
            </Link>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              LINEで相談する
            </a>
          </div>
        </motion.section>
      </article>
    </main>
  );
}
