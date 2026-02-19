import Link from "next/link";
import AcademyBreadcrumb from "@/components/academyLanding/common/AcademyBreadcrumb";

type FAQItem = {
  question: string;
  answer: string;
};

type AiTrainingForIndividualsPageProps = {
  faqItems: readonly FAQItem[];
};

const selfStudyPros = [
  "自分のペースで学習範囲を調整しやすい",
  "必要なテーマだけ選んで学べる",
  "学習コストを段階的に管理しやすい",
] as const;

const selfStudyCons = [
  "つまずいた際の解決に時間がかかりやすい",
  "学習順序が曖昧だと遠回りしやすい",
  "実務で使う形まで落とし込みにくい",
] as const;

const schoolPros = [
  "カリキュラムで学習順序を整理しやすい",
  "質問やレビューで停滞を減らしやすい",
  "実践課題を通じて再現性を作りやすい",
] as const;

const schoolCons = [
  "独学より自由度が下がる場合がある",
  "講座ごとにサポート範囲が異なる",
  "目的に合わない講座を選ぶと費用対効果が落ちる",
] as const;

const fitChecklist = [
  "短期間で業務活用まで進めたい",
  "質問できる環境が必要",
  "学習計画を一人で維持しづらい",
  "実践課題で習得したい",
  "受講後の相談先も確保したい",
] as const;

const learningPaths = [
  {
    title: "業務効率化を目指す人",
    steps: ["業務課題を整理する", "小さな改善テーマで試す", "運用手順を社内で共有する"],
  },
  {
    title: "転職を目指す人",
    steps: ["基礎スキルを固める", "成果物を作る", "応募準備に接続する"],
  },
  {
    title: "副業を目指す人",
    steps: ["想定案件を決める", "納品フローを再現する", "提案テンプレートを整える"],
  },
] as const;

const internalLinks = [
  { href: "/academy", label: "AIリブートアカデミーTOP" },
  { href: "/academy/subsidy-guide", label: "補助金ガイド" },
  { href: "/academy/reviews", label: "受講生の評判・口コミ" },
  { href: "/academy/seminars", label: "セミナー一覧" },
] as const;

export default function AiTrainingForIndividualsPage({
  faqItems,
}: AiTrainingForIndividualsPageProps) {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 pt-24 pb-12 md:px-6 md:pt-28">
        <AcademyBreadcrumb
          className="mb-6"
          items={[
            { label: "ホーム", href: "/" },
            { label: "アカデミー", href: "/academy" },
            { label: "個人向けAI研修" },
          ]}
        />
        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
          個人向けAI研修おすすめの選び方｜独学 vs スクール徹底比較
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
          短期で実務活用したい場合はスクール、自由度を重視する場合は独学が向いています。比較判断のための整理表をまとめました。
        </p>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <article className="border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">独学のメリット</h2>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
              {selfStudyPros.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <h3 className="mt-5 text-lg font-bold text-slate-900">独学のデメリット</h3>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
              {selfStudyCons.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <article className="border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">スクール活用のメリット</h2>
            <ul className="mt-3 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
              {schoolPros.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <h3 className="mt-5 text-lg font-bold text-slate-900">スクール活用のデメリット</h3>
            <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
              {schoolCons.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">どんな人にスクールが向いているか</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
          短期で実務活用したい人ほど、質問環境と伴走があるスクールが向きやすいです。
        </p>
        <ol className="mt-6 space-y-3">
          {fitChecklist.map((item, index) => (
            <li key={item} className="border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 md:text-base">
              <h3 className="font-bold text-slate-900">CHECK {index + 1}</h3>
              <p className="mt-1">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">目的別おすすめ学習パス</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            目的に合わせて「学ぶ順番」と「アウトプット」を先に決めると、学習の迷いが減ります。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {learningPaths.map((path) => (
              <article key={path.title} className="border border-slate-200 bg-white p-4">
                <h3 className="text-lg font-bold text-slate-900">{path.title}</h3>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
                  {path.steps.map((step) => (
                    <li key={step}>- {step}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
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
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
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
        </div>
      </section>
    </main>
  );
}
