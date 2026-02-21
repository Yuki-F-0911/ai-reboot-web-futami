import Link from "next/link";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type AiCourseComparisonPageProps = {
  faqItems: readonly FAQItem[];
};

const lineUrl = "https://bexn9pao.autosns.app/line";

const selectionChecklist = [
  {
    title: "目的",
    checks: [
      "転職・副業・業務改善のどれを優先するか1つに絞る",
      "受講後3か月で実現したい変化を言語化する",
      "成果物や実務適用のイメージまで持てる講座を選ぶ",
    ],
  },
  {
    title: "期間",
    checks: [
      "1週間に確保できる学習時間を先に決める",
      "短期集中型か、長期で定着させる型かを選ぶ",
      "仕事や家庭と両立できるスケジュールか確認する",
    ],
  },
  {
    title: "予算",
    checks: [
      "受講料だけでなく追加費用（教材・ツール）も確認する",
      "補助金対象・適用条件・申請導線を事前確認する",
      "価格とサポート密度のバランスで比較する",
    ],
  },
  {
    title: "サポート重視度",
    checks: [
      "質問対応の手段・頻度・回答スピードを確認する",
      "課題レビューや個別相談の有無を確認する",
      "卒業後も学び続けられるコミュニティの有無を見る",
    ],
  },
] as const;

export default function AiCourseComparisonPage({ faqItems }: AiCourseComparisonPageProps) {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#ffffff_0%,#fff8ee_56%,#ffefd9_100%)] pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_8%,rgba(245,158,11,0.15),transparent_40%)]" />
        <div className="relative container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <AcademyBreadcrumb
            className="mb-6"
            items={[
              { label: "ホーム", href: "/" },
              { label: "アカデミー", href: "/academy" },
              { label: "AI講座比較" },
            ]}
          />
          <p className="text-xs font-bold tracking-[0.14em] text-slate-500">AI COURSE COMPARISON</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            AI講座、どれを選べばいい？選び方の基準を整理しました
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            「生成AI活用力」「自己理解・キャリアデザイン」「仲間と共に学ぶ環境」の3軸で比較すると、
            受講後のミスマッチを減らせます。まずは比較表で候補を整理し、最後にLINEで無料相談して判断を固めてください。
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.14em] text-slate-500">HOW TO CHOOSE</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            自分に合う講座の選び方チェックリスト
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">
            4項目を先に決めると、比較の精度が上がります。すべてを満たす講座が難しい場合は、目的への直結度を最優先してください。
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {selectionChecklist.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {item.checks.map((check) => (
                    <li key={check} className="flex gap-2">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-400">
                        ✓
                      </span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-[0.14em] text-slate-500">FAQ</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">よくある質問</h2>
          <div className="mt-8 border-t border-slate-200">
            {faqItems.map((item, index) => (
              <details key={item.question} className="border-b border-slate-200 py-4">
                <summary className="cursor-pointer list-none text-base font-bold text-slate-900 sm:text-lg [&::-webkit-details-marker]:hidden">
                  Q{index + 1}. {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">A{index + 1}. {item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-[linear-gradient(135deg,#f0fdf4_0%,#dcfce7_100%)] p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.14em] text-emerald-800">FREE CONSULTATION</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              まずAIリブートアカデミーをLINEで無料相談してみる
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              比較表だけでは決めきれない場合は、あなたの目的・期間・予算に合わせて最適な受講戦略を整理します。
              無理な勧誘はせず、判断材料の明確化に集中してご案内します。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#05b54d]"
              >
                LINEで無料相談する
              </a>
              <Link
                href="/academy"
                className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
              >
                アカデミー詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
