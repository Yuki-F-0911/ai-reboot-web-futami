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

type AiPcCopilotPlusGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line?src=blog&slug=ai-pc-copilot-plus-guide";

const keywordTags = ["Copilot+ PC 活用", "AI PC おすすめ", "NPU", "Windows AI機能", "Recall"] as const;

const tocItems = [
  { id: "answer-box", label: "要点まとめ（Answer Box）" },
  { id: "copilot-plus-definition", label: "Copilot+ PCの定義" },
  { id: "key-features", label: "Recall/Live Captions/画像生成の実際" },
  { id: "device-comparison", label: "搭載機種比較" },
  { id: "purchase-checklist", label: "購入前チェック5点" },
  { id: "business-scenes", label: "在宅ワーク・ビジネス活用シーン" },
  { id: "faq", label: "よくある質問（FAQ）" },
] as const;

const answerPoints = [
  "Copilot+ PCは、NPU 40TOPS以上を目安にローカルAI機能を日常業務に組み込みやすくしたPCカテゴリです。",
  "重要なのは「AI機能があるか」ではなく、会議・資料作成・検索業務のどこで時間削減できるかを先に決めることです。",
  "RecallやLive Captionsは便利ですが、情報管理ポリシーと運用ルールを同時に設計しないと効果が安定しません。",
  "買い替え判断は、性能だけでなくバッテリー・管理要件・回収期間を含めた5点チェックで行うと失敗しにくくなります。",
] as const;

const definitionRows = [
  {
    axis: "技術要件",
    content: "NPU 40TOPS以上を一つの基準として、ローカルAI処理の実行性能を確保する設計",
  },
  {
    axis: "体験面の特徴",
    content: "OSレベルでAI機能を利用しやすく、日常タスクの省力化を狙いやすい",
  },
  {
    axis: "従来PCとの差",
    content: "CPU/GPU中心処理より、連続的なAIタスクで効率差が出やすい",
  },
  {
    axis: "導入時の注意",
    content: "機能有効化範囲とデータ管理ルールを事前に固定する必要がある",
  },
] as const;

const featureCards = [
  {
    title: "Recall",
    benefit: "過去作業の再検索が速くなり、情報探索の再現性が上がる",
    caution: "保存対象を誤ると情報管理リスクが増えるため、部署単位の利用ルールが必要",
  },
  {
    title: "Live Captions",
    benefit: "会議や動画視聴の字幕化で、聞き漏れとメモ工数を削減しやすい",
    caution: "精度は音質と専門用語依存。重要会議は人の確認を残す",
  },
  {
    title: "AI画像生成",
    benefit: "企画段階のラフ作成や提案資料の初稿を短時間で作りやすい",
    caution: "商用利用条件と著作権の確認を運用手順に組み込む",
  },
] as const;

const deviceRows = [
  {
    device: "Surface Pro 11",
    strengths: "軽量性、タッチ/ペン運用、モバイル会議との相性",
    bestFor: "外出先業務やプレゼンが多い人",
  },
  {
    device: "ThinkPad X1 Carbon",
    strengths: "キーボード品質、企業導入の管理性、長時間作業の安定感",
    bestFor: "オフィス業務中心で導入標準化したい組織",
  },
  {
    device: "ASUS Zenbook S 14クラス",
    strengths: "薄型軽量とバランス型性能、個人導入の自由度",
    bestFor: "個人利用でコストと性能を両立したい人",
  },
] as const;

const purchaseChecklist = [
  "NPU性能とメモリ容量が業務要件を満たすか",
  "バッテリー駆動時間が在宅・移動を含む1日運用に耐えるか",
  "利用予定のWindows AI機能が組織ポリシーで許可されるか",
  "既存業務アプリとの互換性に問題がないか",
  "12か月の回収期間（時短効果×人件費）を見積もれるか",
] as const;

const businessScenes = [
  {
    title: "会議後15分で議事整理",
    detail: "Live Captionsと要点抽出を組み合わせ、決定事項と次アクションを即時共有する。",
  },
  {
    title: "提案書の初稿作成を短縮",
    detail: "資料構成・画像ラフ・本文の下書きを同日に作成し、レビュー時間を前倒しする。",
  },
  {
    title: "在宅ワークでの情報探索時間を削減",
    detail: "Recall系機能で過去作業を再取得し、検索のやり直しを減らす。",
  },
] as const;

export default function AiPcCopilotPlusGuidePage({ faqItems }: AiPcCopilotPlusGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "Copilot+ PC活用ガイド" },
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
                title="Copilot+ PC活用ガイド｜NPU 40TOPS基準と購入前チェック5点【2026年版】"
                sourceSelector="[data-blog-article-body]"
              />
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Copilot+ PC活用ガイド｜NPU 40TOPS基準と購入前チェック5点【2026年版】
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            Copilot+ PCは、単なる新モデルではなく「AI処理を日常業務に組み込む前提」で設計されたカテゴリです。重要なのはスペック比較より、どの業務を何分短縮するかを先に決めることです。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事は、NPU 40TOPS基準の見方、主要AI機能の実務性、搭載機種比較、購入前チェック、在宅ワーク活用までを判断軸中心で整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="answer-box"
          className="mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-blue-900">要点まとめ（Answer Box）</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            {answerPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-600">
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="copilot-plus-definition"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Copilot+ PCの定義（NPU 40TOPS以上）</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">観点</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">押さえるポイント</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((row) => (
                  <tr key={row.axis} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.axis}</th>
                    <td className="py-4 pl-4">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="key-features"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Recall / Live Captions / AI画像生成の実際</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => (
              <section key={card.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{card.benefit}</p>
                <p className="mt-3 text-xs leading-6 text-gray-500">注意: {card.caution}</p>
              </section>
            ))}
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
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6"
            href={lineUrl}
          />
        </motion.section>

        <motion.section
          id="device-comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">搭載機種比較（Surface Pro 11・ThinkPad X1 Carbon等）</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[880px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">機種</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {deviceRows.map((row) => (
                  <tr key={row.device} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{row.device}</th>
                    <td className="px-4 py-4">{row.strengths}</td>
                    <td className="py-4 pl-4">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="purchase-checklist"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">購入前チェック5点</h2>
          <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            {purchaseChecklist.map((item) => (
              <li key={item} className="pl-1 marker:font-semibold marker:text-gray-500">
                {item}
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          id="business-scenes"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">在宅ワーク・ビジネスでの活用シーン</h2>
          <div className="mt-6 space-y-4">
            {businessScenes.map((scene) => (
              <section key={scene.title} className="rounded-lg border border-gray-200 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{scene.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">{scene.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            Microsoft系AI機能の使い分けは
            <Link href="/academy/blog/microsoft-copilot-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              Microsoft Copilot使い方ガイド
            </Link>
            も併せて確認すると判断しやすくなります。
          </p>
        </motion.section>

        <motion.section
          id="faq"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
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
        </motion.section>

        <motion.section
          className="mt-14 rounded-lg border border-gray-200 bg-gray-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="pl-1 marker:text-gray-500">Copilot+ PC導入は「NPU性能」だけでなく「業務フロー設計」で成果が決まります。</li>
            <li className="pl-1 marker:text-gray-500">Recall等の機能は便利ですが、利用範囲とデータポリシーの同時設計が必須です。</li>
            <li className="pl-1 marker:text-gray-500">購入前に5点チェックを行うと、過剰投資と導入失敗を抑えやすくなります。</li>
          </ul>
        </motion.section>

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <LineCtaBox
            className="blog-cta-box rounded-lg border border-emerald-200 bg-emerald-50 p-6"
            href={lineUrl}
          />
        </motion.section>
      </article>
    </main>
  );
}
