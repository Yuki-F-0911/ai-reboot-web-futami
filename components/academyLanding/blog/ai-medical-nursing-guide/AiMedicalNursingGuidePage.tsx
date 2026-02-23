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

type AiMedicalNursingGuidePageProps = {
  faqItems: readonly FAQItem[];
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const keywordTags = ["AI 医療 看護 活用", "医療 AI 2026", "看護師 AI ツール", "電子カルテ AI", "医療 診断支援"] as const;

const tocItems = [
  { id: "conclusion", label: "要点まとめ" },
  { id: "medical-areas", label: "医療AIの実用領域" },
  { id: "nursing-tools", label: "看護師がすぐ使えるAI" },
  { id: "governance-risks", label: "導入課題とリスク対策" },
  { id: "emr-trends", label: "電子カルテ連携の動向" },
  { id: "burden-reduction", label: "業務負担軽減の実例" },
  { id: "faq", label: "FAQ" },
] as const;

const medicalUseAreas = [
  {
    title: "画像診断支援",
    description:
      "胸部X線、CT、内視鏡、超音波で病変候補を提示し、読影や検査の見落としリスクを下げる用途。PMDAの承認済みプログラム医療機器でも件数が伸びている領域です。",
    examples: [
      "肺結節検出プログラム FS-AI688型（30200BZX00150000）",
      "胸部X線画像病変検出 LU-AI689型（30300BZX00188000）",
      "内視鏡検査支援プログラム EW10-EG01（30400BZX00217000）",
    ],
  },
  {
    title: "投薬管理・服薬指導支援",
    description:
      "薬歴の要点化、服薬指導文案作成、疑義照会前の論点整理など、薬剤師・看護師・医師の連携文書を短時間で整える用途。最終判断は必ず医療職が行います。",
    examples: ["SOAP形式の記載補助", "服薬説明文の平易化", "薬剤変更時の説明ポイント抽出"],
  },
  {
    title: "記録自動化（文書生成）",
    description:
      "退院サマリー、退院看護サマリー、診療情報提供書のドラフト作成を補助し、記録作成工数を減らす用途。導入効果は時間短縮だけでなく修正率で評価します。",
    examples: ["退院サマリー", "退院看護サマリー", "主治医意見書の下書き"],
  },
] as const;

const nursingTasks = [
  {
    task: "文書作成",
    goal: "記録時間を短縮し、記載の抜け漏れを減らす",
    prompt:
      "患者状態・実施処置・観察所見・次シフトへの注意点を入力し、看護記録案を300字で作成。推測は書かず、未確認事項は「未確認」と明記。",
    caution: "患者特定情報は入力範囲を院内ルールで固定する",
  },
  {
    task: "引き継ぎ記録",
    goal: "夜勤/日勤間の情報伝達を標準化する",
    prompt: "この記録をSBAR形式（Situation/Background/Assessment/Recommendation）で整理し、引き継ぎ要点を5項目で出力。",
    caution: "AI出力をそのまま貼り付けず、担当者が最終確認する",
  },
  {
    task: "患者説明",
    goal: "難しい説明を患者向けに分かりやすくする",
    prompt: "医療用語を中学生でも理解できる日本語に変換。説明は200字以内、注意事項は箇条書きで3点。",
    caution: "診断確定に関わる説明は医師の最終説明に一本化する",
  },
] as const;

const riskChecklist = [
  {
    title: "個人情報・機微情報",
    body: "個人情報保護法と院内ポリシーに基づき、入力可否を業務単位で決める。生成AIの利用規約確認と匿名化手順をセットで運用する。",
    checks: ["入力禁止データを定義しているか", "第三者提供・越境移転の条件を確認したか", "利用ログを監査可能な形で残せるか"],
  },
  {
    title: "責任分界",
    body: "AIは補助、最終判断は人という責任分界を明文化する。診療録への確定記載は責任者承認を通す。",
    checks: ["最終承認者を固定したか", "修正履歴を残しているか", "誤出力時のエスカレーション経路を定義したか"],
  },
  {
    title: "精度・安全性",
    body: "感度・特異度だけでなく、現場運用では再作業率・差し戻し率・見逃し再発率を追う。部署ごとの症例特性を前提に評価する。",
    checks: ["導入前後を同条件で比較しているか", "データセット差による性能劣化を監視しているか", "定期再評価の頻度を決めているか"],
  },
] as const;

const emrTrends = [
  {
    vendor: "富士フイルム",
    point:
      "SYNAPSE SAI viewerを更新し、読影支援ワークフローを拡張。PMDA承認済みの画像診断支援プログラムを複数持ち、放射線・内視鏡領域での実装が先行。",
    note: "PMDA承認番号ベースで導入可否を確認する運用が有効。",
  },
  {
    vendor: "オムロン",
    point:
      "血圧計のIntellisense AFibなど在宅データ側のAI活用を強化。院内EHRへ直接連携する製品整理は案件ごとに異なるため、接続仕様と責任分界の確認が必要。",
    note: "[要確認: PMDA SaMD一覧上の申請者名にオムロンが見当たらないため、承認区分の整理を事前確認する。]",
  },
  {
    vendor: "EMR各社",
    point:
      "メドレーMALLの文書作成アシスト、ウィーメックスの薬歴入力支援のように、記録業務の補助機能が先行。FHIRベースのデータ連携と監査ログ整備が実装条件。",
    note: "院内導入は「文書生成精度」だけでなく、アクセス権限・ログ保全・再現性の運用設計が前提。",
  },
] as const;

const burdenCases = [
  {
    name: "MALL AI文書作成アシスト（メドレー発表）",
    impact: "退院サマリーで平均7割以上、退院看護サマリーで最大8割程度の作成時間削減（パイロット結果）",
    caution: "ベンダー公表値。対象施設・運用条件が限定されるため横展開時は再検証が必要。",
  },
  {
    name: "生成AI薬歴入力支援（ウィーメックス発表）",
    impact: "薬歴記載時間を61.5%/68.3%削減（社内検証値）",
    caution: "薬局業務の検証値であり、病院病棟業務へ適用する際は要件差を確認する。",
  },
  {
    name: "EndoBRAIN-EYE（AMED公開）",
    impact: "国内5施設の性能試験で感度95%、特異度89%を報告",
    caution: "[要確認: 疾患領域・症例条件が異なる他部署への一般化可否]",
  },
] as const;

export default function AiMedicalNursingGuidePage({ faqItems }: AiMedicalNursingGuidePageProps) {
  return (
    <main className="bg-white pb-20 pt-28 sm:pt-32">
      <article className="mx-auto max-w-5xl px-5 sm:px-6" data-blog-article-body>
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "ブログ", href: "/academy/blog" },
            { label: "AI医療・看護活用ガイド2026" },
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
                className="rounded-full border border-will-primary/20 bg-will-lighter px-3 py-1 text-xs font-semibold tracking-wide text-will-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex">
            <div className="ml-auto w-full sm:w-auto">
              <CopyAsMarkdownButton title="AI医療・看護活用ガイド2026｜診断支援・記録自動化・電子カルテ連携の実務" sourceSelector="[data-blog-article-body]" />
            </div>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            AI医療・看護活用ガイド2026｜診断支援・記録自動化・電子カルテ連携の実務
          </h1>
          <p className="mt-4 text-sm font-medium text-gray-500">最終更新日: 2026年2月20日</p>
          <p className="mt-6 text-base leading-8 text-gray-700">
            医療現場のAI活用は、画像診断、投薬管理、記録自動化の3領域で実務導入が進んでいます。2026年2月20日時点で重要なのは、精度だけでなく
            <span className="font-semibold text-gray-900">個人情報管理と責任分界を先に設計すること</span>です。
          </p>
          <p className="mt-3 text-base leading-8 text-gray-700">
            本記事では、医師・看護師・医療事務が現場で使える具体例と、PMDA承認事例、電子カルテ連携の動向、導入リスク対策を確認日付きで整理します。
          </p>
        </motion.header>

        <ArticleTOC items={tocItems} />

        <motion.section
          className="mt-14 rounded-lg border border-orange-200 bg-orange-50 p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="conclusion" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            要点まとめ
          </h2>
          <ul className="blog-ul mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-700">
            <li className="blog-li pl-1 marker:text-gray-500">医療AIは「診断や記録の補助」に使い、最終判断は必ず医療職が担う。</li>
            <li className="blog-li pl-1 marker:text-gray-500">看護業務では、文書作成・引き継ぎ・患者説明の3タスクから始めると定着しやすい。</li>
            <li className="blog-li pl-1 marker:text-gray-500">導入前に、個人情報管理・責任分界・精度KPIを同時に設計する必要がある。</li>
            <li className="blog-li pl-1 marker:text-gray-500">電子カルテ連携は、標準規格対応、監査ログ、契約条件確認が実装の前提になる。</li>
          </ul>
        </motion.section>

        <LineCtaBox />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="medical-areas" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            医療現場でAIが使われている3領域（画像診断・投薬管理・記録自動化）
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            導入が進んでいる領域は限定的です。まずは成果と責任範囲が定義しやすい業務に絞って展開するのが実務上の基本です。
          </p>

          <div className="mt-8 space-y-4">
            {medicalUseAreas.map((area) => (
              <section key={area.title} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{area.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{area.description}</p>
                <ul className="blog-ul mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {area.examples.map((example) => (
                    <li key={example} className="blog-li pl-1 marker:text-gray-500">
                      {example}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            情報管理の運用設計は、
            <Link href="/academy/blog/ai-data-leak-patterns" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIで情報漏えいが起きるパターン10選
            </Link>
            と
            <Link href="/academy/blog/ai-guideline-template" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              生成AIの社内ガイドライン雛形
            </Link>
            を併用して整備すると運用に落とし込みやすくなります。
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
          <h2 id="nursing-tools" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            看護師が今すぐ使えるAIツール（文書作成・引き継ぎ記録・患者説明）
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            看護現場での第一歩は、判断を代替する用途ではなく、情報整理と説明文作成を補助する用途から始めることです。
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="blog-table w-full min-w-[860px] border-collapse text-left text-sm leading-7 text-gray-700">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-semibold text-gray-900">業務</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">目的</th>
                  <th className="px-4 py-3 font-semibold text-gray-900">推奨プロンプト例</th>
                  <th className="py-3 pl-4 font-semibold text-gray-900">運用注意点</th>
                </tr>
              </thead>
              <tbody>
                {nursingTasks.map((item) => (
                  <tr key={item.task} className="border-b border-gray-200 align-top">
                    <th className="py-4 pr-4 font-semibold text-gray-900">{item.task}</th>
                    <td className="px-4 py-4">{item.goal}</td>
                    <td className="px-4 py-4">{item.prompt}</td>
                    <td className="py-4 pl-4">{item.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            業務上の責任分界は、
            <Link href="/academy/blog/ai-legal-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              法務の生成AI活用ガイド
            </Link>
            の考え方を医療文脈に置き換えると設計しやすくなります。
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
          <h2 id="governance-risks" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            医療AI導入の課題（個人情報・責任・精度リスク）
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            導入失敗の多くは、ツール選定より前に運用設計を詰めないことが原因です。以下の3項目を同時に決めると、現場の混乱を抑えられます。
          </p>

          <div className="mt-8 space-y-4">
            {riskChecklist.map((item) => (
              <section key={item.title} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.body}</p>
                <ul className="blog-ul mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-700">
                  {item.checks.map((check) => (
                    <li key={check} className="blog-li pl-1 marker:text-gray-500">
                      {check}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            院内横断での運用展開は、
            <Link href="/academy/blog/shadow-ai-countermeasures" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              シャドーAI対策
            </Link>
            の設計観点を取り入れると、利用実態を把握しながら統制できます。
          </p>
        </motion.section>

        <LineCtaBox />

        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={sectionReveal}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 id="emr-trends" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            電子カルテとAIの連携動向（富士フイルム・オムロン・EMR各社）
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            2026年は、単体AIの導入から、電子カルテや部門システムに接続する実装フェーズへ移行しています。接続性と監査性を先に確認することが重要です。
          </p>

          <div className="mt-8 space-y-4">
            {emrTrends.map((trend) => (
              <section key={trend.vendor} className="rounded-lg border border-gray-200 p-6">
                <h3 className="blog-h3 text-lg font-semibold text-gray-900">{trend.vendor}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{trend.point}</p>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-600">{trend.note}</p>
              </section>
            ))}
          </div>

          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            関連する文書処理の設計は、
            <Link href="/academy/blog/ai-document-ocr-guide" className="blog-link mx-1 text-orange-600 underline underline-offset-4 hover:text-orange-700">
              AI OCRで書類処理を自動化する方法
            </Link>
            も合わせて確認すると、記録業務の統合設計がしやすくなります。
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
          <h2 id="burden-reduction" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            医療スタッフの業務負担軽減の実例
          </h2>
          <p className="blog-p mt-5 text-base font-medium leading-8 text-gray-900">
            時間削減だけで成功とは判断できません。削減効果と品質維持を同時に確認する指標設計が必要です。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {burdenCases.map((item) => (
              <section key={item.name} className="rounded-lg border border-gray-200 p-5">
                <h3 className="blog-h3 text-base font-semibold text-gray-900">{item.name}</h3>
                <p className="blog-p mt-3 text-sm leading-7 text-gray-700">{item.impact}</p>
                <p className="blog-p mt-3 text-xs leading-6 text-gray-500">{item.caution}</p>
              </section>
            ))}
          </div>
          <p className="blog-p mt-6 text-sm leading-7 text-gray-700">
            現場導入では、1) 対象文書を限定、2) 編集責任者を固定、3) KPIを月次評価、の順で進めると失敗確率を下げられます。
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
          <h2 id="faq" className="blog-h2 scroll-mt-28 text-2xl font-bold text-gray-900">
            FAQ
          </h2>
          <dl className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-base font-semibold leading-7 text-gray-900">Q. {item.question}</dt>
                <dd className="mt-3 text-sm leading-7 text-gray-700">A. {item.answer}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-8 rounded-lg border border-will-primary/20 bg-will-lighter p-6">
            <h3 className="blog-h3 text-lg font-semibold text-gray-900">AI活用の判断軸とキャリアを同時に設計する</h3>
            <p className="blog-p mt-3 text-sm leading-7 text-gray-700">
              AIリブートアカデミーでは、生成AI活用力の習得だけでなく、AIを鏡にした自己理解・キャリアデザイン、仲間と共に学ぶ環境の3本柱を一体で設計しています。
              医療現場でAIを使うときの判断軸を整理し、実務とキャリアの両方を前進させたい方は、学習プロセス全体の設計から見直すことが有効です。
            </p>
          </section>
        </motion.section>

        <LineCtaBox />
      </article>
    </main>
  );
}
