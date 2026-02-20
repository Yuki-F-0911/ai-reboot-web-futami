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

type AiSmartphoneAppsPageProps = {
  faqItems: readonly FAQItem[];
};

type AppRow = {
  category: string;
  name: string;
  ios: string;
  android: string;
  freePlan: string;
  japanese: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaTitle = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";
const lineCtaButtonLabel = "LINEで週1AI通信を受け取る（無料）";

const keywordTags = ["AI アプリ おすすめ スマホ 2026", "iPhone AI アプリ", "Android AI アプリ", "無料 AI アプリ 日本語"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "apps-20", label: "2026年おすすめ20選" },
  { id: "ios-vs-android", label: "iPhone vs Androidの差" },
  { id: "free-top5", label: "完全無料TOP5" },
  { id: "paid-decision", label: "課金価値の判断基準" },
  { id: "japanese-support", label: "日本語対応が優秀なアプリ" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次に学ぶ" },
] as const;

const appRows: readonly AppRow[] = [
  { category: "チャット", name: "ChatGPT", ios: "4.8（1,407,664件）", android: "4.8（39,452,562件 / 1,000,000,000+）", freePlan: "無料あり（利用上限あり）", japanese: "◎" },
  { category: "チャット", name: "Google Gemini", ios: "4.6（484,384件）", android: "4.6（28,617,118件 / 1,000,000,000+）", freePlan: "無料あり（上位機能は有料拡張）", japanese: "◎" },
  { category: "チャット", name: "Claude", ios: "4.6（9,181件）", android: "4.6（204,177件 / 10,000,000+）", freePlan: "無料あり（利用上限あり）", japanese: "◎" },
  { category: "チャット", name: "Perplexity", ios: "4.7（74,817件）", android: "4.6（1,800,790件 / 50,000,000+）", freePlan: "無料あり（Pro機能は制限）", japanese: "◎" },
  { category: "チャット", name: "Microsoft Copilot", ios: "4.7（70,900件）", android: "4.7（2,168,171件 / 50,000,000+）", freePlan: "無料あり（Proは有料）", japanese: "◎" },
  { category: "画像", name: "Canva", ios: "4.7（496,282件）", android: "4.8（24,515,985件 / 500,000,000+）", freePlan: "無料あり（Proで拡張）", japanese: "◎" },
  { category: "画像", name: "Adobe Express", ios: "4.7（28,695件）", android: "4.6（715,422件 / 100,000,000+）", freePlan: "無料あり（Premiumで拡張）", japanese: "◎" },
  { category: "画像", name: "Photoroom", ios: "4.7（33,028件）", android: "4.7（3,787,289件 / 100,000,000+）", freePlan: "無料あり（商用機能は有料中心）", japanese: "◎" },
  { category: "画像", name: "Picsart", ios: "4.5（246,724件）", android: "4.1（12,247,090件 / 1,000,000,000+）", freePlan: "無料あり（広告・一部機能制限）", japanese: "◎" },
  { category: "画像", name: "Remini", ios: "4.5（49,116件）", android: "4.1（5,698,096件 / 500,000,000+）", freePlan: "無料あり（回数制限あり）", japanese: "○" },
  { category: "音声", name: "Otter", ios: "4.7（5,100件）", android: "4.3（25,947件 / 5,000,000+）", freePlan: "月300分・1会話30分", japanese: "△（英語中心）" },
  { category: "音声", name: "Notta", ios: "4.3（22,514件）", android: "公式ページ確認できず", freePlan: "月120分", japanese: "◎" },
  { category: "音声", name: "LINE WORKS AiNote", ios: "4.6（4,106件）", android: "公式ページ確認できず", freePlan: "月300分・1件60分", japanese: "◎" },
  { category: "音声", name: "Google Recorder", ios: "iOS提供なし", android: "3.3（14,719件 / DL帯は要確認）", freePlan: "無料（Pixel中心）", japanese: "○（端末依存）" },
  { category: "翻訳", name: "DeepL", ios: "4.7（33,979件）", android: "4.6（395,500件 / 10,000,000+）", freePlan: "無料あり（Proで拡張）", japanese: "◎" },
  { category: "翻訳", name: "Google Translate", ios: "3.6（20,571件）", android: "4.3（9,062,757件 / 1,000,000,000+）", freePlan: "無料", japanese: "◎" },
  { category: "翻訳", name: "Microsoft Translator", ios: "4.5（30,471件）", android: "4.3（792,044件 / 50,000,000+）", freePlan: "無料", japanese: "◎" },
  { category: "翻訳", name: "Papago", ios: "4.5（14,666件）", android: "4.6（166,579件 / 10,000,000+）", freePlan: "無料", japanese: "◎（日韓強め）" },
  { category: "生産性", name: "Notion", ios: "4.7（43,438件）", android: "4.7（337,636件 / 10,000,000+）", freePlan: "無料あり（AI本格活用は有料帯）", japanese: "◎" },
  { category: "生産性", name: "Grammarly", ios: "4.5（3,472件）", android: "4.2（256,810件 / 50,000,000+）", freePlan: "無料あり（高度校正は有料）", japanese: "△（英語中心）" },
] as const;

const freeTop5 = [
  {
    rank: "1位",
    app: "Google Translate",
    reason: "テキスト・音声・カメラ翻訳まで無料でカバーしやすい。旅行と日常利用の両方で使いやすい。",
  },
  {
    rank: "2位",
    app: "Microsoft Translator",
    reason: "会話モードや複数端末での共有が無料で使えるため、チーム利用でも導入しやすい。",
  },
  {
    rank: "3位",
    app: "Papago",
    reason: "日韓文脈に強く、短文翻訳の自然さが安定しやすい。無料で試しやすい。",
  },
  {
    rank: "4位",
    app: "Google Recorder",
    reason: "Pixel利用者なら追加課金なしで音声記録と検索を回せる。議事メモ用途に向く。",
  },
  {
    rank: "5位",
    app: "ChatGPT（無料枠）",
    reason: "完全無料運用ではないが、学習初期の要約・相談・下書き用途は無料枠で十分始められる。",
  },
] as const;

const paidDecisionRows = [
  {
    axis: "無料上限の到達頻度",
    threshold: "週2回以上止まる",
    action: "まず課金候補",
  },
  {
    axis: "時短効果",
    threshold: "1日20分以上の削減",
    action: "課金回収しやすい",
  },
  {
    axis: "日本語品質",
    threshold: "誤訳・再編集が多い",
    action: "上位モデル検討",
  },
  {
    axis: "利用範囲",
    threshold: "個人利用から業務利用へ移行",
    action: "セキュリティ/管理機能付きプラン検討",
  },
] as const;

const japaneseFocusRows = [
  {
    app: "DeepL / Papago / Google Translate",
    strongPoint: "翻訳品質・スピード・無料運用のバランス",
    bestUse: "日常翻訳、旅行、英文読解の下支え",
  },
  {
    app: "ChatGPT / Gemini / Claude",
    strongPoint: "日本語での要約、相談、下書き作成",
    bestUse: "学習メモ整理、文章下書き、情報整理",
  },
  {
    app: "Notta / LINE WORKS AiNote / Otter",
    strongPoint: "音声をテキスト化して議事メモ化",
    bestUse: "会議メモ、講義メモ、後追い確認",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "アプリ名ではなく業務課題から逆算し、どのAIをどう使うかを設計できる力を育てます。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AIを鏡にして自分の強みと価値観を言語化し、次のキャリアを具体化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "継続しにくい学習を対話と協働で支え、実務で使える状態まで進めます。",
  },
] as const;

function LineCtaBox({ className }: { className: string }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="text-base font-semibold text-gray-900">{lineCtaTitle}</p>
      <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
        新しいAIアプリが多すぎて追い切れない方向けに、毎週の重要アップデートを業務目線で要約して配信しています。
      </p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="line-cta-button mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        {lineCtaButtonLabel}
      </a>
    </motion.section>
  );
}

export default function AiSmartphoneAppsPage({ faqItems }: AiSmartphoneAppsPageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AIアプリおすすめ20選【スマホ版2026】" },
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
              <CopyAsMarkdownButton title="AIアプリおすすめ20選【スマホ版2026】" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AIアプリおすすめ20選【スマホ版2026】iPhone/Android比較・無料TOP5
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            スマホでAIを使い始める人が最初に迷うのは、アプリを入れすぎて定着しないことです。この記事では2026年時点の評価データをもとに、
            用途別20アプリを比較し、iPhoneとAndroidの差、無料で使い切る方法、課金判断まで一気に整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="conclusion"
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">要点まとめ（結論）</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">
              初心者は「チャット1本・翻訳1本・生産性1本」の3本で開始すると、使い分けが定着しやすいです。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              無料で始めるなら翻訳系（Google翻訳、Microsoft Translator、Papago）を先に使い、次にチャット系無料枠へ広げる順序が効率的です。
            </li>
            <li className="blog-li pl-1 marker:text-gray-500">
              課金は「無料上限で止まる頻度」と「時短効果」で判断します。感覚ではなく、週単位で利用時間を測ると判断しやすくなります。
            </li>
          </ul>
          <p className="blog-p mt-4 text-xs text-gray-500">
            データ確認日: 2026-02-20（App Store: 評価/件数、Google Play: 評価/件数/DL帯）
          </p>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-10 rounded-lg border border-green-200 bg-green-50 p-6" />

        <motion.section
          id="apps-20"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">2026年おすすめAIスマホアプリ20選（カテゴリ別）</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            App StoreとGoogle Playの数値を同じ基準で並べると、規模感と安定性を同時に比較できます。App Storeはダウンロード数を公開しないため、
            iPhone側は評価件数を主要指標として扱います。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[1120px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">カテゴリ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">アプリ</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">iPhone（評価/件数）</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">Android（評価/件数/DL帯）</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">無料プラン制限</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">日本語対応</th>
                </tr>
              </thead>
              <tbody>
                {appRows.map((row) => (
                  <tr key={`${row.category}-${row.name}`} className="border-b border-gray-200 align-top">
                    <td className="py-4 pr-4 font-semibold text-gray-900">{row.category}</td>
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.name}</td>
                    <td className="py-4 px-4">{row.ios}</td>
                    <td className="py-4 px-4">{row.android}</td>
                    <td className="py-4 px-4">{row.freePlan}</td>
                    <td className="py-4 pl-4">{row.japanese}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="ios-vs-android"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">iPhone vs Androidで使えるアプリの差</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            主要AIアプリは両対応ですが、2026年時点では一部に差が残ります。最初に自分の端末で使えるかを確認しておくと、比較表の解釈を間違えにくくなります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <section className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">iPhone側の導線が明確な例</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                NottaやLINE WORKS AiNoteは、App Storeでの導線が明確です。文字起こし用途なら iPhone 起点で試す方が早いケースがあります。
              </p>
            </section>
            <section className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">Androidで強い例</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                Google RecorderはiOS非提供で、Pixel環境では無料で使いやすい音声メモ基盤になります。
              </p>
            </section>
            <section className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="blog-h3 text-base font-semibold text-gray-900">両対応で選びやすい例</h3>
              <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
                ChatGPT、Gemini、Claude、Perplexity、Canva、DeepL、Notionは両OSで比較しやすく、初心者が最初に選びやすいグループです。
              </p>
            </section>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            スマホ導入の手順は{" "}
            <Link href="/academy/blog/chatgpt-start-guide-smartphone" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTをスマホで始める方法
            </Link>{" "}
            もあわせて確認すると、初期設定で詰まりにくくなります。
          </p>
        </motion.section>

        <motion.section
          id="free-top5"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">完全無料で使える優秀アプリTOP5（2026）</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            「先に無料でどこまで行けるか」を確認してから有料比較に進む方が、無駄な課金を避けやすくなります。ここでは日常利用で効果が出やすい順に整理しました。
          </p>
          <div className="mt-6 space-y-4">
            {freeTop5.map((item) => (
              <section key={item.rank} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">
                  {item.rank}: {item.app}
                </h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.reason}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6" />

        <motion.section
          id="paid-decision"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">月額課金する価値があるアプリの選び方</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            課金判断は、価格ではなく「止まる頻度」と「回収できる時間」で決めると失敗を減らせます。無料のまま我慢するより、必要な1本だけ有料化した方が総効率は上がることが多いです。
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[760px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">判断軸</th>
                  <th className="py-3 px-4 font-semibold text-gray-900">目安</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">判断</th>
                </tr>
              </thead>
              <tbody>
                {paidDecisionRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 px-4">{row.threshold}</td>
                    <td className="py-4 pl-4">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            詳しい料金比較は{" "}
            <Link href="/academy/blog/chatgpt-plan-comparison" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              ChatGPTプラン比較
            </Link>{" "}
            と{" "}
            <Link href="/academy/blog/ai-notion-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI Notion活用ガイド
            </Link>{" "}
            も参考になります。音声系を使う場合は{" "}
            <Link href="/academy/blog/ai-transcription-guide" className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI文字起こし比較
            </Link>{" "}
            で無料枠を先に確認してください。
          </p>
        </motion.section>

        <motion.section
          id="japanese-support"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">日本語対応が優秀なアプリ特集</h2>
          <p className="blog-p mt-5 text-base leading-8 text-gray-700">
            日本語対応は「対応しているか」だけでなく、用途との相性で決まります。翻訳、長文チャット、議事録で使うアプリを分けると精度の不満が減ります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {japaneseFocusRows.map((row) => (
              <section key={row.app} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{row.app}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">強み:</span> {row.strongPoint}
                </p>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">向く用途:</span> {row.bestUse}
                </p>
              </section>
            ))}
          </div>
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
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">Q. {item.question}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <LineCtaBox className="blog-cta-box mt-14 rounded-lg border border-emerald-200 bg-emerald-50 p-6" />

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">アプリ選びを、次のキャリア設計につなげたい方へ</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            ツールの数を増やすだけでは、仕事の成果は安定しません。重要なのは、どの課題にどのAIを当てるかを判断し、継続して改善できる学習設計です。
          </p>
          <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、次の3本柱を一体で設計し、実務アウトプットとキャリアの次の一歩につなげます。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{pillar.title}</h3>
                <p className="blog-p mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              アカデミーの詳細を見る
            </Link>
          </div>
        </motion.section>
      </article>
    </main>
  );
}

