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

type AiFreelanceGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const lineUrl = "https://bexn9pao.autosns.app/line";
const lineCtaBody =
  "毎週1本、実務で使える生成AI活用のヒントとAIニュースをLINEで配信しています（無料）。読むだけで、AI活用の「知っておくべきこと」が自然と身につきます。受講前の不安や、自分に合うか確認したい方は、個別LINE相談もできます。";
const infoCheckedDate = "2026-02-26";

const keywordTags = ["フリーランス AI 活用", "フリーランス ChatGPT", "フリーランス AI 効率化", "フリーランス 生成AI"] as const;

const tocItems = [
  { id: "summary", label: "要点まとめ" },
  { id: "time-allocation", label: "時間を「売れる仕事」に集中する" },
  { id: "proposal", label: "場面1: 提案書・見積書" },
  { id: "email", label: "場面2: クライアント対応" },
  { id: "quality", label: "場面3: 成果物の品質向上" },
  { id: "marketing", label: "場面4: 自己PR・営業" },
  { id: "learning", label: "場面5: 学習・スキルアップ" },
  { id: "caution", label: "現実的な注意点" },
  { id: "faq", label: "よくある質問（FAQ）" },
  { id: "academy-cta", label: "次の一歩" },
] as const;

const summaryPoints = [
  "フリーランスの時間は「売れる仕事（直接収入に結びつく作業）」と「売れない作業（提案書・メール・経理など）」に分かれます。AIは後者を圧縮するツールです。",
  "提案書・クライアントメール・成果物の品質チェックにAIを使うことで、稼働時間あたりの収益効率が上がります。",
  "AIの出力をそのまま納品しない。数字・法律・専門知識は必ずファクトチェックを行い、自分の判断と経験を乗せて仕上げる。",
  "機密情報・NDA案件のデータはAIに入力しない。契約上のリスクと情報漏洩への意識が、クライアントとの信頼維持の基盤になります。",
] as const;

const timeRows = [
  {
    category: "売れる仕事",
    examples: "デザイン・執筆・コーディング・コンサルティング・納品物制作",
    aiEffect: "品質向上・レビュー支援で付加価値を高められる",
  },
  {
    category: "売れない作業",
    examples: "提案書作成・見積書・メール返信・請求書処理・スケジュール調整",
    aiEffect: "下書き・文案生成で大幅に時間短縮できる",
  },
] as const;

const occupationRows = [
  {
    occupation: "ライター",
    usage: "下書きレビュー、タイトル案出し、読者目線チェック",
    prompt: "「この下書きを読んで、離脱しそうな箇所と改善案を教えてください」",
  },
  {
    occupation: "デザイナー",
    usage: "アクセシビリティ確認、改善ポイント洗い出し、ユーザー視点の質問",
    prompt: "「このUI設計でアクセシビリティ上の問題点と改善案を指摘してください」",
  },
  {
    occupation: "エンジニア",
    usage: "コードレビュー依頼、バグ原因の探索、リファクタリング方針の相談",
    prompt: "「このコードのバグの可能性がある箇所と修正案を教えてください」",
  },
  {
    occupation: "コンサルタント",
    usage: "調査・情報整理、提案の論点整理、議事録の要点化",
    prompt: "「次の議事録メモを整理して、決定事項とネクストアクションを箇条書きにしてください」",
  },
] as const;

const cautionPoints = [
  "機密情報・NDA案件のクライアントデータはAIに入力しない。情報漏洩リスクがあります。",
  "AIの出力は必ずファクトチェックを行う。特に数字・法律・専門知識は信頼できる一次情報で確認する。",
  "「AIに全部任せた」感が出る成果物はクライアントの信頼を損なう可能性がある。自分の判断・経験・視点を必ず加える。",
  "あくまで「自分の思考を補助するツール」として使う。AIは手段であり、最終責任は自分にある。",
] as const;

const academyPillars = [
  {
    title: "生成AI活用力",
    body: "業務課題に対して適切なAIを選び、成果へ接続する判断力を整理します。",
  },
  {
    title: "自己理解・キャリアデザイン",
    body: "フリーランスとしての強みを言語化し、中長期のキャリア設計へつなげます。",
  },
  {
    title: "仲間と共に学ぶ環境",
    body: "実践レビューと対話を通じて改善を継続し、再現性のある成長を作ります。",
  },
] as const;

function LineCtaBox({ tone }: { tone: "green" | "orange" }) {
  const boxClass =
    tone === "green"
      ? "mt-14 rounded-lg border border-green-200 bg-green-50 p-6"
      : "mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6";
  const titleClass = tone === "green" ? "text-base font-semibold text-green-800" : "text-base font-semibold text-orange-800";

  return (
    <motion.section
      className={boxClass}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionReveal}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className={titleClass}>AIリブート通信</p>
      <p className="mt-2 text-sm leading-7 text-gray-700">{lineCtaBody}</p>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#05b04b]"
      >
        今すぐ無料で登録する（30秒）
      </a>
    </motion.section>
  );
}

export default function AiFreelanceGuidePage({ faqItems }: AiFreelanceGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "フリーランスがAIを使うと" },
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
              <span
                key={tag}
                className="inline-flex rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            フリーランスがAIを使うと収入・時間はどう変わる？実践ガイド【2026年版】
          </h1>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <time dateTime="2026-02-26">2026年2月26日</time> 公開
            </p>
            <CopyAsMarkdownButton
              title="フリーランスがAIを使うと収入・時間はどう変わる？実践ガイド【2026年版】"
              sourceSelector="[data-blog-article-body]"
            />
          </div>
          <p className="mt-6 text-base leading-8 text-gray-700">
            フリーランスの時間はすべて「売れる仕事」か「売れない作業」かに分かれます。提案書の作成、メール返信、請求書処理——これらは必要だけれど、それ自体が収入にはなりません。AIを使うことでこの「売れない作業」を圧縮し、「売れる仕事」に充てる時間を増やせます。本記事では、場面別の活用例とプロンプト例を整理しながら、現実的な注意点もあわせて解説します。
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
            {summaryPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-blue-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-blue-800">確認日: {infoCheckedDate}</p>
        </motion.section>

        <motion.section
          id="time-allocation"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">フリーランスの時間を「売れる仕事」に集中するには</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            フリーランスにとって時間は直接収益に結びつく資源です。収入を上げるには、稼働時間を増やすか、時間あたりの単価を上げるか——このどちらかしかありません。AIは「単価に直結しない作業」の時間を削ることで、後者のアプローチを現実的にします。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">種類</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">具体例</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">AIの効き方</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {timeRows.map((row) => (
                  <tr key={row.category}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.category}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.examples}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.aiEffect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section
          id="proposal"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">場面1: 提案書・見積書の作成</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            新規クライアントへの提案書は、構成を考えて文章を整えるだけで数時間かかることがあります。AIに構成案と各セクションの下書きを出してもらい、それに自分の実績・数字・提案の核心を加える流れにすると、時間を大幅に削れます。
          </p>
          <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">プロンプト例</p>
            <p className="mt-3 text-sm leading-7 text-gray-800">
              ECサイトのデザインリニューアル案件で、月20万円の提案書を作りたい。提供サービス：Webデザイン・コーディング・画像選定。期間2ヶ月。説得力のある提案書の構成と各セクションの下書きを作ってください。
            </p>
          </div>
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">落とし穴</p>
            <p className="mt-1 text-sm leading-7 text-amber-800">
              数字・実績・固有名詞は必ず自分で追加する。AIは架空の数値を生成することがあります。提案書の「信頼の根拠」となる部分は、必ず自分の実際のデータに差し替えてください。
            </p>
          </div>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="email"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">場面2: クライアントとのメール・チャット対応</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            感情的に難しいメールや、断りにくい要求への返答は、言葉を選ぶだけで時間と精神的エネルギーを消耗します。AIに文案を出してもらい、それを自分の言葉・関係性に合わせて調整する方法が有効です。
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">プロンプト例：スコープ外作業を断る</p>
              <p className="mt-3 text-sm leading-7 text-gray-800">
                クライアントから契約外の修正を5回以上求められています。追加料金が必要と伝えつつ、関係を壊さない丁寧なメールの文案を作ってください。
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">他にも使える場面</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                <li className="pl-1 marker:text-gray-500">納期延長をお願いする丁寧な文章</li>
                <li className="pl-1 marker:text-gray-500">単価交渉・値上げ打診のメール</li>
                <li className="pl-1 marker:text-gray-500">案件終了後のお礼とフォローアップ</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">落とし穴</p>
            <p className="mt-1 text-sm leading-7 text-amber-800">
              文案はひな形として使い、関係性・相手のトーンに合わせて必ず手を加えること。AIが作る文章は丁寧だが無難になりがちです。あなたとクライアントの関係性の温度感を加えることで、自然なコミュニケーションになります。
            </p>
          </div>
        </motion.section>

        <motion.section
          id="quality"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">場面3: 成果物の品質向上</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIを「成果物の品質チェック役」に使う方法は、職種を問わず効果的です。自分が作ったものを第三者視点でレビューしてもらうことで、見落としや改善点に気づきやすくなります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-collapse overflow-hidden rounded-lg border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">職種</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">使い方</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">プロンプト例</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {occupationRows.map((row) => (
                  <tr key={row.occupation}>
                    <th scope="row" className="border-b border-gray-100 px-4 py-3 text-left font-semibold text-gray-900">
                      {row.occupation}
                    </th>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-700">{row.usage}</td>
                    <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">{row.prompt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-800">落とし穴</p>
            <p className="mt-1 text-sm leading-7 text-amber-800">
              AIのフィードバックは参考意見です。最終判断は自分の読者理解・ユーザー理解に基づいて行う。AIは「一般的に良い」視点でフィードバックしますが、あなたのクライアントやユーザーの文脈は自分が一番よく知っています。
            </p>
          </div>
        </motion.section>

        <LineCtaBox tone="orange" />

        <motion.section
          id="marketing"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">場面4: マーケティング・自己PR</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            ポートフォリオのキャッチコピー、SNS投稿、新規クライアントへのDM文——これらは「やらなければ」と思いつつ後回しになりがちな作業です。AIに案を出してもらい、自分らしくアレンジする方法で、マーケティング活動のハードルが下がります。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <section className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">ポートフォリオ・自己紹介</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「デザイナーとして5年。UXとブランドデザインが得意。特にBtoB SaaSのプロダクトデザインに強み。この強みを伝えるポートフォリオのキャッチコピーを3案出してください」
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">SNS投稿案</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「フリーランスのWebライターとして、読者の共感を呼ぶX（旧Twitter）投稿案を5本作ってください。テーマ：フリーランスの孤独感をポジティブに転換するコンテンツ」
              </p>
            </section>
            <section className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">新規クライアントへのDM</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「スタートアップのCEOにWebデザインを提案するDM文を書いてください。押しつけがましくなく、興味を持ってもらいやすいトーンで150字以内」
              </p>
            </section>
          </div>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIが出した案はあくまでひな形です。自分の実績・言葉のクセ・ターゲットへのトーンを加えることで、「AIらしさ」ではなく「自分らしさ」が出る文章に仕上がります。
          </p>
        </motion.section>

        <motion.section
          id="learning"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">場面5: 学習・スキルアップ</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            フリーランスにとって学習は自己投資です。知らない分野のクライアント案件を引き受けた時、AIを「家庭教師」として使うことで、短時間でその分野の基礎を掴めます。
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">知らない分野に入る時の使い方</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「私はWebライターです。製造業のBtoBマーケティング案件を初めて受けます。この業界のキーパーソン（決裁者）の関心事、業界用語、よく使われるコンテンツ形式を教えてください」
              </p>
              <p className="mt-3 text-xs text-gray-500">
                ※AIの回答は出発点です。業界特有の最新情報は、業界メディアや実際の担当者への確認が必要です。
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">競合調査・トレンドリサーチ</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「2026年のUIデザイントレンドを教えてください。特に、日本のスタートアップが採用している傾向と海外との違いを中心に」
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">資格・スキルアップの学習計画</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">
                「フリーランスのエンジニアがAWSの資格（Solutions Architect Associate）を3か月で取得するための週次学習計画を作ってください。週に使える時間は約10時間です」
              </p>
            </div>
          </div>
        </motion.section>

        <LineCtaBox tone="green" />

        <motion.section
          id="caution"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="scroll-mt-28 text-2xl font-bold text-gray-900">フリーランスがAIを使う際の現実的な注意点</h2>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            AIは便利なツールですが、フリーランスとしての信頼と品質を守るために、使い方のルールを自分で決めておくことが重要です。
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-gray-700">
            {cautionPoints.map((point) => (
              <li key={point} className="pl-1 marker:text-gray-500">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-700">
            関連記事:
            <Link href="/academy/blog/freelancer-ai-checklist" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              フリーランス向けAIチェックリスト
            </Link>
            ・
            <Link href="/academy/blog/ai-side-business-2026" className="mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI副業の稼ぎ方2026
            </Link>
          </p>
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

        <LineCtaBox tone="orange" />

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
            AIを「時間を作るツール」から「収入と成長の基盤」へと育てるには、単なる操作知識だけでなく、課題設定と改善の仕組みを持つことが重要です。AIリブートアカデミーでは、次の3本柱を軸に、実務アウトプットとキャリア設計を一体で支援しています。
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
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-lg bg-will-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-growth"
            >
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
      </article>
    </main>
  );
}
