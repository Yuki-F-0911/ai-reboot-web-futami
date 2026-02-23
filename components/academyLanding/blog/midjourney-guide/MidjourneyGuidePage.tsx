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

type MidjourneyGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["Midjourney v7 使い方", "Midjourney 日本語", "AI 画像生成 比較 2026"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "v7-start", label: "Midjourney v7の特徴と始め方" },
  { id: "web-discord", label: "Discord経由 vs Webアプリの使い分け" },
  { id: "prompt-writing", label: "プロンプトの書き方（日本語対応の実態）" },
  { id: "tool-comparison", label: "AI画像生成ツール比較 2026" },
  { id: "commercial", label: "商用利用・著作権の注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩を決める" },
] as const;

const summaryPoints = [
  "Midjourney v7は2025年4月3日にAlpha公開、2025年6月17日にデフォルト化されました。",
  "導入はWebアプリ先行のほうが迷いにくく、慣れたらDiscordコマンド運用に広げると生産性が上がります。",
  "日本語入力でも使えますが、再現性を重視する作業は英語キーワード併用が安定しやすいです。",
  "料金はBasic/Standard/Pro/Megaの4階層。年商100万USD超の企業利用はPro/Mega条件があります。",
  "比較は「生成品質」「拡張性」「制作フロー統合」「商用規約確認コスト」で判断すると失敗しにくくなります。",
] as const;

const releaseRows = [
  {
    date: "2025-04-03",
    topic: "V7 Alpha公開",
    detail: "Personalization既定ON、Draft Mode、Turbo/Relax導線が告知。",
  },
  {
    date: "2025-06-17",
    topic: "V7がデフォルト化",
    detail: "Midjourneyの標準生成バージョンとしてv7が適用。",
  },
  {
    date: "2026-02-20",
    topic: "本記事確認日",
    detail: "料金・規約・提供仕様を公式情報で再確認。",
  },
] as const;

const startSteps = [
  "Midjourneyアカウントを作成し、用途に合うプラン（Basic/Standard/Pro/Mega）を選ぶ。",
  "まずWebアプリで画像生成し、アップスケールやバリエーションの流れを体験する。",
  "次にDiscordを接続し、`/imagine` や `--ar` など最低限のコマンド運用を試す。",
  "Draft Modeで大量試行し、当たりの方向性を見つけてから通常生成で仕上げる。",
] as const;

const planRows = [
  { plan: "Basic", monthly: "$10", annual: "$96（$8/月換算）", fast: "3.3h/月", relax: "なし", stealth: "なし" },
  { plan: "Standard", monthly: "$30", annual: "$288（$24/月換算）", fast: "15h/月", relax: "あり", stealth: "なし" },
  { plan: "Pro", monthly: "$60", annual: "$576（$48/月換算）", fast: "30h/月", relax: "あり", stealth: "あり" },
  { plan: "Mega", monthly: "$120", annual: "$1,152（$96/月換算）", fast: "60h/月", relax: "あり", stealth: "あり" },
] as const;

const channelRows = [
  {
    channel: "Webアプリ（midjourney.com）",
    strength: "UIで操作しやすく、生成・修正の導線が見える。初心者が流れを把握しやすい。",
    caution: "パラメータの体系理解はDiscordより遅れやすい。",
    fit: "デザイン初心者、最初の1週間で制作フローを掴みたい人。",
  },
  {
    channel: "Discord経由",
    strength: "コマンド中心で高速運用しやすい。テキストベースで反復管理がしやすい。",
    caution: "最初はコマンド表記に慣れが必要。入力ミスで意図がずれやすい。",
    fit: "副業案件で量産する人、細かいパラメータ管理を行う人。",
  },
] as const;

const promptRules = [
  "長文説明より、短く具体的なキーワードに分解する。",
  "目的・被写体・構図・質感・制約を分けて書く。",
  "1回で完成を狙わず、修正点を1つずつ追加する。",
  "再現したい条件（比率、余白、禁止事項）は毎回明記する。",
] as const;

const promptTemplate = `目的: 何に使う画像か（例: Instagram投稿サムネ）
被写体: 何を描くか（例: ノートPCとコーヒー）
構図: 画角・余白（例: 16:9, 右側にテキスト余白）
質感: 写真風/イラスト/3Dなど
制約: ロゴなし、人の顔なし、文字なし`;

const languageWorkflow = [
  "日本語で要件を整理する（何を伝えたい画像か）",
  "英語で短いキーワードに変換して主プロンプト化する",
  "日本語で修正指示を出し、必要語だけ英語追記する",
] as const;

const comparisonRows = [
  {
    tool: "Midjourney v7",
    start: "中（DiscordかWebの理解が必要）",
    freedom: "高（スタイル表現が強い）",
    workflow: "単体生成に強い",
    commercial: "規約確認は必須。会社規模条件あり",
    fit: "世界観重視のビジュアル制作",
  },
  {
    tool: "DALL·E 3",
    start: "低（チャット起点で始めやすい）",
    freedom: "中（会話で修正しやすい）",
    workflow: "文章作成と同一導線で扱える",
    commercial: "OpenAI規約確認。2026年は移行期注記が必要",
    fit: "非デザイナーの初期利用",
  },
  {
    tool: "Stable Diffusion系",
    start: "中〜高（環境で差が大きい）",
    freedom: "非常に高い（モデル/拡張の自由度）",
    workflow: "作り込み前提で強い",
    commercial: "ライセンス条件と配布形態確認が必要",
    fit: "技術寄りで自由度を優先する人",
  },
  {
    tool: "Canva AI",
    start: "低（既存Canvaユーザーが移行しやすい）",
    freedom: "中（制作テンプレ連携に強い）",
    workflow: "バナーやSNS制作に直結",
    commercial: "Canva AI Product Termsの確認が必要",
    fit: "デザイン実務を短時間で回したい人",
  },
] as const;

const commercialChecklist = [
  "Midjourneyの利用規約とプラン条件を確認する（会社規模要件を含む）。",
  "著作権・商標・肖像権の侵害リスクがあるモチーフは避ける。",
  "クライアント案件は、成果物の権利帰属と再利用範囲を契約で明記する。",
  "公開前に法務チェックを通し、利用ツール・生成日時・規約版を記録する。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "特定ツール名ではなく、業務課題に対してAIをどう当てるかを設計し、再現可能な活用力として定着させます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AI活用を通して自分の強みと価値観を言語化し、次の仕事や働き方の選択に接続します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間とのレビューと対話を重ね、継続学習を仕組み化します。",
  },
] as const;

export default function MidjourneyGuidePage({ faqItems }: MidjourneyGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Midjourney v7使い方完全ガイド" },
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
                title="Midjourney v7使い方完全ガイド｜Discord・Web・料金・商用利用【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Midjourney v7使い方完全ガイド｜Discord・Web・料金・商用利用【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Midjourney v7は、画像生成の品質だけでなく運用のしやすさも改善され、個人クリエイターが実務に組み込みやすくなりました。一方で、DiscordとWebの使い分け、料金プラン、商用利用条件を曖昧なまま進めると、途中で手戻りしやすくなります。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            この記事では、2026年時点の公式情報を基準に、Midjourney v7の始め方から比較、著作権と商用利用の判断ポイントまでを順番に整理します。
          </p>
          <p className="mt-3 text-xs text-gray-500">情報確認日: 2026-02-20（価格・仕様は更新されるため利用前に再確認してください）</p>
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
          id="v7-start"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Midjourney v7（2026年最新版）の特徴と始め方</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            2026年時点の実務判断では、v7の価値は「生成品質」だけでなく「試行速度」にあります。Draft Modeで方向性を素早く絞り、仕上げを通常生成で行う流れが定着すると、制作時間の予測がしやすくなります。
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

          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">始め方の最短手順（個人向け）</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {startSteps.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>

          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">料金プラン（2026年確認時点）</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">プラン</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">月額</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">年額</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Fast GPU</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">Relax</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">Stealth</th>
                </tr>
              </thead>
              <tbody>
                {planRows.map((row) => (
                  <tr key={row.plan} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.plan}</th>
                    <td className="px-4 py-4">{row.monthly}</td>
                    <td className="px-4 py-4">{row.annual}</td>
                    <td className="px-4 py-4">{row.fast}</td>
                    <td className="px-4 py-4">{row.relax}</td>
                    <td className="py-4 pl-4">{row.stealth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="web-discord"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">Discord経由 vs Webアプリ（midjourney.com）の使い分け</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            両方使えますが、向いている作業が異なります。Webは視覚的に把握しやすく、Discordはコマンド中心で反復速度を上げやすい設計です。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">チャネル</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {channelRows.map((row) => (
                  <tr key={row.channel} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.channel}</th>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            AI画像生成ツール全体の比較軸を先に確認したい場合は
            <Link href="/academy/blog/ai-image-generation-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI画像生成おすすめツール比較
            </Link>
            を参照し、用途と品質基準を先に固定してからMidjourneyに入ると判断が早くなります。
          </p>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            プロンプトの書き方｜日本語対応の実態と英語推奨の理由
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Midjourney公式は、短く具体的なプロンプトを推奨しています。言語別の公式ベンチは限定的ですが、実務では「日本語で要件整理→英語キーワードで主指示化」が再現性を作りやすい運用です。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {promptRules.map((rule) => (
              <li key={rule} className="blog-li pl-1 marker:text-gray-500">
                {rule}
              </li>
            ))}
          </ul>
          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">プロンプト雛形（コピペ可）</h3>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-7 text-gray-700">{promptTemplate}</pre>
          <h3 className="blog-h3 mt-8 text-xl font-semibold text-gray-900">日本語と英語を併用する実務フロー</h3>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {languageWorkflow.map((step) => (
              <li key={step} className="blog-li pl-1 marker:text-gray-500">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-gray-500">[要確認] Midjourney公式の言語別品質比較が公開された場合は本節を更新します。</p>
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
          id="tool-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            AI 画像生成 比較 2026｜Midjourney・DALL·E 3・Stable Diffusion・Canva AI
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            どれが最強かより、業務の型に合うかで選ぶほうが成果につながります。比較時は「開始難易度」「自由度」「制作フロー統合」「規約確認コスト」の4軸を固定してください。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[960px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">開始難易度</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">自由度</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">制作フロー統合</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">商用利用時の確認</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている用途</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.start}</td>
                    <td className="px-4 py-4">{row.freedom}</td>
                    <td className="px-4 py-4">{row.workflow}</td>
                    <td className="px-4 py-4">{row.commercial}</td>
                    <td className="py-4 pl-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            注記: OpenAIのdeprecationsでは `dall-e-3` は2026-05-12に削除予定と案内されています。利用時は最新提供モデルを確認してください。
          </p>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            プロンプト設計の基礎を固める場合は
            <Link href="/academy/blog/chatgpt-prompt-beginner" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプロンプト入門
            </Link>
            、副業文脈で運用設計を詰める場合は
            <Link href="/academy/blog/ai-side-business-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI副業ガイド
            </Link>
            も参照すると、用途別の判断がしやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="commercial"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">商用利用・著作権の注意点</h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            Midjourneyは商用利用の道が開かれていますが、規約条件の理解と、案件ごとの権利確認は別問題です。制作前にチェック項目を固定するとトラブルを防ぎやすくなります。
          </p>
          <ul className="blog-ul mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {commercialChecklist.map((item) => (
              <li key={item} className="blog-li pl-1 marker:text-gray-500">
                {item}
              </li>
            ))}
          </ul>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            法務観点をより詳しく確認したい場合は
            <Link href="/academy/blog/ai-legal-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI法務ガイド
            </Link>
            をあわせて参照し、著作権・契約・運用フローをまとめて見直してください。
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
            料金・機能・規約は更新頻度が高いため、最終判断前には公式情報を再確認してください。
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
            AIリブートアカデミーは、特定ツールの操作を教える場ではなく、AIを使って価値を出すための学習プロセスを設計する場です。Midjourneyのようなツールを「いつ・どこで・何のために使うか」を判断できる状態を目指します。
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
          <h3 id="related-links" className="scroll-mt-28 mb-4 text-lg font-bold text-slate-900">
            関連リンク
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/academy/blog/ai-image-generation-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI画像生成おすすめツール比較｜Google Gemini・Midjourney・ChatGPT画像生成の使い方と選び方【2026年版】
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-legal-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI法務ガイド｜著作権・契約・実務リスクの整理
              </Link>
            </li>
            <li>
              <Link href="/academy/blog/ai-side-business-guide" className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                AI副業ガイド｜会社員が無理なく始める設計
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
