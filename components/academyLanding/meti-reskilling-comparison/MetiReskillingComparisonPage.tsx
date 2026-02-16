import Link from "next/link";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type MetiReskillingComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const selectionCriteria = [
  {
    title: "認定要件の確認",
    points: ["対象制度名が明記されているか", "対象者条件が説明されているか", "申請手順の案内があるか"],
  },
  {
    title: "実績情報の透明性",
    points: ["実績や事例の開示があるか", "更新日が確認できるか", "情報の出典が示されているか"],
  },
  {
    title: "サポート体制の具体性",
    points: ["質問窓口が明確か", "相談頻度が明示されているか", "受講後サポートの範囲が明確か"],
  },
] as const;

const checklistItems = [
  "制度の公式情報と講座ページの両方を確認した",
  "対象条件と申請手順を確認した",
  "実績情報の更新日を確認した",
  "質問・面談・受講後支援の範囲を確認した",
  "実践課題の有無を確認した",
  "申し込み前に最新情報で再確認する",
] as const;

const rebootFacts = [
  "経産省リスキリング関連制度の対象講座として案内している",
  "100日伴走の学習設計を採用している",
  "実務直結のアウトプットを重視している",
] as const;

const internalLinks = [
  { href: "/academy", label: "AIリブートアカデミーTOP" },
  { href: "/academy/subsidy-guide", label: "補助金ガイド" },
  { href: "/academy/reviews", label: "受講生の評判・口コミ" },
  { href: "/academy/seminars", label: "セミナー一覧" },
] as const;

export default function MetiReskillingComparisonPage({
  faqItems,
}: MetiReskillingComparisonPageProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 pt-24 pb-12 md:px-6 md:pt-28">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "経産省認定比較" },
          ]}
        />
        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
          経産省認定リスキリング講座を比較する視点｜選び方のポイント
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
          結論として、認定の有無だけでなく、実績の透明性とサポート運用を合わせて確認すると講座選びの精度が上がります。
        </p>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">経産省認定の意味と信頼性</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            経産省認定は制度要件を満たしているかを判断する重要な材料です。ただし、認定だけで受講成果が決まるわけではないため、
            講座内容との一致も確認が必要です。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
            制度の一次情報は
            <a
              href="https://careerup.reskilling.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-bold text-slate-900 underline underline-offset-4"
            >
              careerup.reskilling.go.jp
            </a>
            で確認できます。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">認定講座の選定基準</h2>
        <div className="mt-6 space-y-5">
          {selectionCriteria.map((criterion, index) => (
            <article key={criterion.title} className="border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-bold text-slate-900">
                基準{index + 1}: {criterion.title}
              </h3>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                {criterion.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">チェックリストで評価する方法</h2>
          <ol className="mt-6 space-y-3">
            {checklistItems.map((item, index) => (
              <li key={item} className="border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 md:text-base">
                <h3 className="font-bold text-slate-900">CHECK {index + 1}</h3>
                <p className="mt-1">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">AIリブートアカデミーの認定情報</h2>
        <ul className="mt-6 space-y-3">
          {rebootFacts.map((fact) => (
            <li key={fact} className="border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 md:text-base">
              <h3 className="font-bold text-slate-900">{fact}</h3>
            </li>
          ))}
        </ul>
        {/* TODO: 要ファクト確認 - 制度要件や公式表現の変更時に更新 */}
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">よくある質問</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 bg-white">
            {faqItems.map((item, index) => (
              <details key={item.question} className="p-4">
                <summary className="cursor-pointer list-none text-base font-bold text-slate-900">
                  Q{index + 1}: {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                  A{index + 1}: {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-lg font-bold text-slate-900">関連ページ</h2>
        <ul className="mt-4 space-y-2 text-sm md:text-base">
          {internalLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-orange-600 underline underline-offset-4 hover:text-orange-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
