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

type AiDocumentOcrGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI OCR 書類 自動化", "OCR 請求書 自動処理", "電子帳簿保存法 OCR", "Document AI 比較"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "what-is-ai-ocr", label: "Q1. AI OCRとは何か" },
  { id: "workflow", label: "Q2. 書類処理の自動化フロー" },
  { id: "comparison", label: "Q3. 主要ツール比較" },
  { id: "accounting-integration", label: "Q4. 会計連携の設計" },
  { id: "roi", label: "Q5. ROIの計算方法" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const comparisonRows = [
  {
    service: "AIRead",
    pricing: "月額 + 枚数従量",
    feature: "帳票読取と検索項目抽出を一体で運用しやすい",
    caution: "詳細な精度指標は個別確認が必要",
  },
  {
    service: "DX Suite",
    pricing: "基本料金 + データ処理単価",
    feature: "帳票処理運用を前提に業務設計しやすい",
    caution: "帳票種別ごとのチューニング前提",
  },
  {
    service: "Microsoft Document Intelligence",
    pricing: "ページ従量課金",
    feature: "confidenceを使ったレビュー分岐を実装しやすい",
    caution: "帳票品質で抽出精度が変動する",
  },
  {
    service: "Google Document AI",
    pricing: "ページ従量課金",
    feature: "OCR/Parser/Extractorを用途別に選びやすい",
    caution: "confidenceは評価設計とセットで扱う必要がある",
  },
] as const;

const rolloutSteps = [
  {
    step: "1. 帳票分類",
    detail: "請求書・領収書・契約書を分離し、抽出項目を固定する。",
  },
  {
    step: "2. 抽出 + 信頼度判定",
    detail: "低信頼データを保留キューへ回し、人手レビュー導線を作る。",
  },
  {
    step: "3. 会計連携",
    detail: "正規化データをfreee/会計APIへ段階投入し、重複検知を入れる。",
  },
  {
    step: "4. 監査運用",
    detail: "修正履歴と証憑原本を紐づけ、検索要件と証跡を維持する。",
  },
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務課題に合うAIを選び、運用へ落とし込む判断力を体系化します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "AI活用を通じて、自分の強みと価値提供領域を言語化します。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "同じ課題を持つ仲間との実践レビューで、継続的に成果を高めます。",
  },
] as const;

export default function AiDocumentOcrGuidePage({ faqItems }: AiDocumentOcrGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI OCRで書類処理を自動化する方法" },
          ]}
        />

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            {keywordTags.map((tag) => (
              <span key={tag} className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            AI OCRで書類処理を自動化する方法｜請求書・契約書の読取と会計連携【2026】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-20">2026年2月20日</time> 更新
            </p>
            <CopyAsMarkdownButton title="AI OCRで書類処理を自動化する方法" sourceSelector="[data-blog-article-body]" />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            AI OCR導入は、文字認識の精度比較だけで判断すると失敗しやすくなります。実務では「抽出」「レビュー」「会計連携」「証跡管理」を一連で設計することが重要です。
            本記事では、帳票処理フローとツール比較、ROI算出の考え方を法人向けに整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          id="summary"
          className="scroll-mt-28 mt-14 rounded-lg border border-blue-200 bg-blue-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-xl font-bold text-blue-900">要点まとめ</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-blue-800">
            <li className="pl-1 marker:text-blue-500">AI OCRは文字認識だけでなく、抽出結果を業務システムへ接続する設計まで含めて評価する。</li>
            <li className="pl-1 marker:text-blue-500">電子帳簿保存法対応では、検索項目・証跡・運用ルールの整備が必須になる。</li>
            <li className="pl-1 marker:text-blue-500">ROIは処理件数と削減時間で試算し、低信頼データのレビュー工数まで入れて判断する。</li>
          </ul>
        </motion.section>

        <motion.section
          id="what-is-ai-ocr"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q1. AI OCRとは何か（従来OCRとの違い）</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            従来OCRは文字認識が中心ですが、AI OCRは帳票分類、項目抽出、信頼度判定、後続連携まで設計できます。現場では「認識率」よりも、例外処理の再現性が成果を左右します。
          </p>
        </motion.section>

        <motion.section
          id="workflow"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q2. 請求書・領収書・契約書の自動化フロー</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {rolloutSteps.map((step) => (
              <section key={step.step} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">{step.step}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{step.detail}</p>
              </section>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            連携設計は
            <Link href="/academy/blog/ai-accounting-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              経理・財務部門のAI活用ガイド
            </Link>
            と合わせて見ると、導入範囲を決めやすくなります。
          </p>
        </motion.section>

        <LineCtaBox />

        <motion.section
          id="comparison"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q3. 主要4ツール比較（AIRead・DX Suite・Microsoft・Google）</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">サービス</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">価格体系</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">強み</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">注意点</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.service}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.service}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.pricing}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.feature}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="accounting-integration"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q4. freee・会計システム連携で最初に決めること</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            最初に作るべきは、抽出項目の正規化ルールと保留キューです。API連携だけ先に進めると、誤登録時の復旧コストが上がります。低信頼データを人手確認へ回す運用設計を先に固定してください。
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            税務面の運用は
            <Link href="/academy/blog/ai-tax-accounting-guide" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              税務・会計業務のAI活用ガイド
            </Link>
            と併せて確認すると安全です。
          </p>
        </motion.section>

        <motion.section
          id="roi"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">Q5. 導入ROIの計算方法</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            まず月間処理件数と1件あたり削減時間を定義し、削減金額を算出します。そこからOCR利用料、レビュー工数、保守費を差し引いた純効果で投資回収期間を判断します。
          </p>
          <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">ROI計算式</h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              ROI（%）=（削減工数の人件費換算 - 利用料 - 運用費）÷（利用料 + 運用費）× 100
            </p>
          </div>
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
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <section key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{item.answer}</p>
              </section>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="academy-cta"
          className="mt-14 rounded-lg border border-will-primary/20 bg-will-lighter p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">次の一歩</h2>
          <p className="mt-4 text-sm leading-7 text-gray-700">
            OCRツール選定だけでは、業務成果の再現性は安定しません。AIリブートアカデミーでは、業務課題への適用判断と運用設計を、次の3本柱で支援しています。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {academyPillars.map((pillar) => (
              <section key={pillar.title} className="rounded-lg border border-white/80 bg-white p-4">
                <h3 className="text-sm font-semibold text-will-primary">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-700">{pillar.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/academy" className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth">
              アカデミーの詳細を見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-will-primary/30 px-6 py-3 text-sm font-semibold text-will-primary transition-colors hover:border-will-primary hover:bg-white"
            >
              無料相談を予約する
            </Link>
          </div>
        </motion.section>

        <LineCtaBox />
      </article>
    </main>
  );
}
