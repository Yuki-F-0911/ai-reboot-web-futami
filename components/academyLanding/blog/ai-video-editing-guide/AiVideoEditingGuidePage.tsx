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

const keywordTags = ["AI 動画編集 初心者", "CapCut AI 使い方", "Descript AI", "動画編集 AI ツール 2026"] as const;

const tocItems = [
  { id: "summary", label: "結論: 初心者が最初にやること" },
  { id: "tools", label: "主要ツール比較" },
  { id: "capcut", label: "CapCut無料で始める手順" },
  { id: "paid-timing", label: "課金切り替えの判断軸" },
  { id: "commercial", label: "商用利用の注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "related-links", label: "関連記事" },
  { id: "academy-cta", label: "次の学習ステップ" },
] as const;

const comparisonRows = [
  {
    tool: "CapCut",
    strength: "短尺動画の自動字幕・テンプレ編集を短時間で回しやすい",
    fit: "SNS運用の個人・小規模チーム",
    caution: "素材ごとに商用可否が分かれる",
  },
  {
    tool: "Descript",
    strength: "文字起こしベース編集と音声処理の効率化に強い",
    fit: "インタビュー・解説系動画",
    caution: "日本語対応は機能ごとの差分確認が必要",
  },
  {
    tool: "VEED",
    strength: "ブラウザ完結で字幕付き動画を量産しやすい",
    fit: "社内外向けの簡易動画制作",
    caution: "無料枠では書き出し条件に制限がある",
  },
  {
    tool: "Premiere Pro AI",
    strength: "本格編集とAI補助を同じ制作フローで扱える",
    fit: "既存Adobe運用の法人チーム",
    caution: "学習コストとPCスペック要件が高い",
  },
] as const;

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody = "AIリブート通信｜週1本、仕事で使えるAI知識＋ニュース解説をLINEで届ける（無料）";

function LineCtaBox({
  className = "blog-cta-box rounded-lg border border-green-200 bg-green-50 p-6",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <p className="text-base font-semibold text-green-900">LINEで毎週AI知識を配信中</p>
      <p className="mt-3 text-sm leading-7 text-green-900">{lineCtaBody}</p>
      <div className="mt-4">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="line-cta-button inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
        >
          LINEで週1AI通信を受け取る（無料）
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
            初心者のAI動画編集は、ツールを増やすよりも「1本を最後まで公開するフロー」を先に固めるほうが成果につながります。本記事では短尺動画を前提に、無料開始から有料移行までの判断軸を整理します。
          </p>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-blue-900">結論: 最初はCapCut無料で1本完走し、時短不足だけ課金で補う</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-900">
            <li className="blog-li pl-1 marker:text-blue-700">初期段階は無料機能で「自動字幕・カット・BGM調整」を体験する</li>
            <li className="blog-li pl-1 marker:text-blue-700">週次投稿を始めて編集時間が足りなくなったら有料機能を検討する</li>
            <li className="blog-li pl-1 marker:text-blue-700">商用配信時はツール本体だけでなく素材ライセンスを個別に確認する</li>
          </ul>
        </motion.section>

        <motion.section
          id="tools"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">主要AI動画編集ツール比較（初心者向け）</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-3 font-semibold text-gray-900">ツール</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">強み</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">向いている用途</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.tool} className="border-b border-gray-200 align-top">
                    <th className="px-4 py-4 font-semibold text-gray-900">{row.tool}</th>
                    <td className="px-4 py-4">{row.strength}</td>
                    <td className="px-4 py-4">{row.fit}</td>
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
          id="capcut"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">CapCut無料で始める実践フロー</h2>
          <ol className="blog-ol mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">9:16の短尺動画素材を1本用意する</li>
            <li className="blog-li pl-1 marker:text-gray-500">自動字幕を生成し、誤字と固有名詞のみ先に修正する</li>
            <li className="blog-li pl-1 marker:text-gray-500">不要区間を削除し、冒頭3秒に要点を置く</li>
            <li className="blog-li pl-1 marker:text-gray-500">BGMと効果音を調整して1080pで書き出す</li>
          </ol>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            投稿設計まで含めて見直す場合は、
            <Link
              href="/academy/blog/ai-content-sns-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AIコンテンツSNS運用ガイド
            </Link>
            も参考になります。
          </p>
        </motion.section>

        <motion.section
          id="paid-timing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">無料から有料に切り替える判断軸</h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">月間投稿本数が増えて編集時間が確保できない</li>
            <li className="blog-li pl-1 marker:text-gray-500">ブランド管理のためにテンプレ統一や共同編集が必要</li>
            <li className="blog-li pl-1 marker:text-gray-500">案件単価に対して編集工数が見合わない</li>
          </ul>
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
          <h2 className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">商用利用の注意点</h2>
          <p className="blog-p mt-5 text-sm leading-7 text-gray-700">
            ツール利用規約だけでは不十分で、音源・画像・フォント・テンプレートの権利条件を分けて確認する必要があります。特に短尺動画は素材混在が多く、公開前チェックを省略するとリスクが残ります。
          </p>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            権利観点の基礎は、
            <Link
              href="/academy/blog/ai-copyright-commercial-guide"
              className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700"
            >
              AI著作権・商用利用ガイド
            </Link>
            で整理できます。
          </p>
        </motion.section>

        <section className="mt-10">
          <LineCtaBox className="blog-cta-box rounded-lg border border-orange-200 bg-orange-50 p-6" />
        </section>

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
                AI動画生成ツール比較2026
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
                href="/academy/blog/ai-presentation-workflow"
                className="blog-link text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AIでプレゼン資料を効率化する方法
              </Link>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="blog-h2 text-xl font-bold text-will-primary">AI活用の判断軸とキャリア設計を同時に整える</h2>
          <p className="blog-p mt-4 text-sm leading-7 text-gray-700">
            AIリブートアカデミーでは、生成AI活用力・自己理解とキャリアデザイン・仲間と共に学ぶ環境の3本柱で、実務の変化を継続できる学習設計を行っています。
          </p>
        </motion.section>
      </article>
    </main>
  );
}
