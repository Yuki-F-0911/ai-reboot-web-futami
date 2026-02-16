"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type SubsidyEligibleCoursesPageProps = {
  faqItems: readonly FAQItem[];
};

type ChecklistItem = {
  id: number;
  title: string;
  description: string;
  checkPoint: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const sectionLabelClass = "text-[11px] font-bold tracking-[0.18em] text-slate-500";
const sectionHeadingClass = "mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl";

const requirementItems = [
  "制度上の対象として登録された講座であること",
  "キャリア相談・転職支援など、キャリアアップを前提にした支援が組み込まれていること",
  "定められた受講・報告フローに対応していること",
] as const;

const checklistItems: readonly ChecklistItem[] = [
  {
    id: 1,
    title: "経済産業省の認定事業として案内されているか",
    description:
      "講座ページや説明会で「リスキリングを通じたキャリアアップ支援事業」の対象講座である旨が明記されているかを確認します。",
    checkPoint: "公式サイト情報と講座側の案内に矛盾がないかを確認する",
  },
  {
    id: 2,
    title: "キャリア相談がカリキュラムに含まれているか",
    description:
      "制度は学習だけでなくキャリアアップ支援を重視します。個別相談やキャリア面談が事前に案内されているか確認しましょう。",
    checkPoint: "相談回数・担当範囲・相談タイミングが明示されているかを見る",
  },
  {
    id: 3,
    title: "転職支援まで一体で提供されているか",
    description:
      "求人紹介、応募書類支援、面接対策など、学習後の移行支援があるかで制度適合性の判断がしやすくなります。",
    checkPoint: "学習終了後の支援内容と期間を事前に確認する",
  },
  {
    id: 4,
    title: "受講期間・形式が要件に対応しているか",
    description:
      "オンライン中心でも、制度要件に沿った進捗管理や実施記録が必要です。形式だけでなく運用体制も確認が必要です。",
    checkPoint: "受講管理・進捗報告の方法が説明されているか確認する",
  },
  {
    id: 5,
    title: "補助金申請手続きのサポートがあるか",
    description:
      "必要書類の案内、提出タイミングの説明、要件達成の確認フローが整っている事業者ほど手続きの不明点が減らせます。",
    checkPoint: "申請時に必要な対応を伴走してくれる窓口があるかを見る",
  },
  {
    id: 6,
    title: "補助条件（最大70%、上限56万円）の説明が正確か",
    description:
      "補助率は一律ではなく段階要件があります。金額だけを強調せず、条件もセットで説明しているかを確認することが重要です。",
    checkPoint: "条件未達時の扱いまで説明されているかを確認する",
  },
] as const;

const cautionItems = [
  {
    title: "教育訓練給付金と同じだと思い込まない",
    detail:
      "管轄省庁、対象者、申請フローが異なります。どちらの制度かを先に整理してから比較してください。",
  },
  {
    title: "在職者要件を見落とさない",
    detail:
      "本制度は雇用契約のある在職者向けです。申込時点の就業状態で対象外になるケースがあるため、事前確認が必須です。",
  },
  {
    title: "受講すれば自動で満額補助されるわけではない",
    detail:
      "受講修了や転職後の継続就業など、段階的な条件があります。条件未達の場合、補助率は変わる可能性があります。",
  },
  {
    title: "公式情報より広告表現を優先しない",
    detail:
      "最終判断は公式情報と事業者の最新案内で行いましょう。情報が古いページのまま比較すると誤解につながります。",
  },
] as const;

const SubsidyEligibleCoursesPage = ({ faqItems }: SubsidyEligibleCoursesPageProps) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-white to-white" />
        <motion.div
          className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "対象講座チェック" },
            ]}
          />
          <p className={sectionLabelClass}>SUBSIDY ELIGIBILITY</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            リスキリング補助金の対象講座とは？
            <br />
            見分け方チェックリスト
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            「リスキリング補助金 対象講座」を探すと情報が多く、判断しづらいことがあります。
            このページでは、経済産業省「リスキリングを通じたキャリアアップ支援事業」の考え方に沿って、
            対象講座を見分けるための確認項目を整理しました。
          </p>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-16">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>WHAT IS ELIGIBLE</p>
          <h2 className={sectionHeadingClass}>リスキリング補助金の対象講座とは</h2>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            対象講座は、単なるスキル学習ではなく、キャリアアップに接続する支援設計が前提です。要件を満たすと、受講費用の
            <span className="font-bold"> 最大70%（上限56万円）</span>
            が補助されます。講座選定時は、公式情報と講座提供事業者の案内を必ず照合してください。
          </p>
          <motion.ul
            className="mt-7 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {requirementItems.map((item) => (
              <motion.li
                key={item}
                variants={itemReveal}
                className="flex gap-3 border-b border-slate-200 py-4 text-sm leading-relaxed text-slate-700 sm:text-base"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-6 text-sm text-slate-600">
            公式参照先:
            <a
              href="https://careerup.reskilling.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 font-semibold text-slate-800 underline underline-offset-4 hover:text-slate-600"
            >
              careerup.reskilling.go.jp
            </a>
          </p>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-16">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>CHECKLIST</p>
          <h2 className={sectionHeadingClass}>対象講座の見分け方チェックリスト</h2>
          <motion.dl
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {checklistItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemReveal}
                className="border-b border-slate-200 py-6"
              >
                <div className="grid gap-3 md:grid-cols-[1.1fr_1fr] md:gap-8">
                  <dt>
                    <p className="text-xs font-bold tracking-[0.16em] text-slate-500">CHECK {item.id}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-slate-900 sm:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{item.description}</p>
                  </dt>
                  <dd className="pt-1 md:pt-0">
                    <p className="text-xs font-bold tracking-[0.16em] text-slate-500">確認ポイント</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.checkPoint}</p>
                  </dd>
                </div>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-16">
        <motion.div
          className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>CAUTION</p>
          <h2 className={sectionHeadingClass}>よくある誤解・注意点</h2>
          <motion.ol
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {cautionItems.map((item, index) => (
              <motion.li
                key={item.title}
                variants={itemReveal}
                className="border-b border-slate-200 py-5"
              >
                <p className="text-xs font-bold tracking-[0.16em] text-slate-500">NOTE {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{item.detail}</p>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-16">
        <motion.div
          className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className={sectionLabelClass}>FAQ</p>
          <h2 className={sectionHeadingClass}>よくある質問</h2>
          <motion.div
            className="mt-8 border-t border-slate-200"
            variants={listReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                variants={itemReveal}
                className="border-b border-slate-200 py-4"
              >
                <details
                  open={openFaqIndex === index}
                  onToggle={(event) => {
                    if (event.currentTarget.open) {
                      setOpenFaqIndex(index);
                      return;
                    }
                    if (openFaqIndex === index) {
                      setOpenFaqIndex(null);
                    }
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                    <span>
                      Q{index + 1}. {item.question}
                    </span>
                    <span className="text-xl text-slate-500">{openFaqIndex === index ? "−" : "+"}</span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-700 sm:text-base">A{index + 1}. {item.answer}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-slate-200 pt-12 pb-4">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-4 text-lg font-bold text-slate-900">関連コンテンツ</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/academy/meti-reskilling-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                経産省認定講座の比較ポイント
              </Link>
            </li>
            <li>
              <Link
                href="/academy/ai-course-comparison"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                AI講座の選び方 7つの比較ポイント
              </Link>
            </li>
            <li>
              <Link
                href="/academy/reskilling-course-recommendation"
                className="text-orange-600 underline underline-offset-4 hover:text-orange-700"
              >
                リスキリング講座おすすめガイド
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-16">
        <motion.div
          className="container mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            補助金対象か迷ったら、先に条件を一緒に確認しましょう
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            無料相談で対象可否の確認ポイントをご案内します。講座選びとあわせて、補助金活用の進め方も確認できます。
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://bexn9pao.autosns.app/line"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b54d]"
            >
              LINEで相談する
            </a>
            <Link
              href="/briefing"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-700"
            >
              無料説明会に申し込む
            </Link>
          </div>
          <div className="mt-5">
            <Link
              href="/academy/subsidy-guide"
              className="text-sm font-semibold text-slate-800 underline underline-offset-4 hover:text-slate-600"
            >
              リスキリング補助金ガイドを見る
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default SubsidyEligibleCoursesPage;
