import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIで仕事を変える3ヶ月 | AIリブートアカデミー",
  description:
    "100日間で生成AIを使いこなし、仕事の質とスピードを変える。経済産業省認定リスキリング補助金対象。無料相談受付中。",
  robots: { index: false, follow: false },
};

const lineUrl = "https://bexn9pao.autosns.app/line";

export default function AcademyIgLp() {
  return (
    <div className="min-h-screen bg-white">
      {/* FV */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-50 to-amber-50 px-5 pb-16 pt-12">
        <div className="mx-auto max-w-lg">
          {/* Badge */}
          <span className="mb-5 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700">
            AI Reboot Academy
          </span>

          {/* Headline */}
          <h1 className="mb-6 text-[clamp(1.75rem,6vw,2.5rem)] font-bold leading-snug tracking-tight text-stone-900">
            AIで仕事を変える、<br />
            <span className="text-amber-600">3ヶ月の旅</span>が始まる。
          </h1>

          {/* Value props */}
          <ul className="mb-8 space-y-3 text-base text-stone-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-amber-500">✓</span>
              ChatGPT・Claude を業務で使いこなす実践スキル
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-amber-500">✓</span>
              100日間の伴走で、確実に習慣化
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-amber-500">✓</span>
              経済産業省認定・補助金で最大70%オフ
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-[#06C755] px-6 text-base font-bold text-white shadow-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで無料相談する（登録無料）
            </a>
            <Link
              href="/contact"
              className="flex min-h-[56px] w-full items-center justify-center rounded-xl border-2 border-stone-300 bg-white px-6 text-base font-bold text-stone-700"
            >
              フォームで問い合わせる
            </Link>
          </div>

          {/* Trust */}
          <p className="mt-6 text-center text-xs text-stone-500">
            経済産業省認定リスキリング補助金対象 ｜ 無料相談は24時間受付
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-stone-100 bg-white px-5 py-12">
        <div className="mx-auto max-w-lg">
          <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-stone-400">
            受講生の声
          </p>
          <div className="space-y-4">
            {[
              {
                text: "AIを使って、月10時間以上の業務を自動化できました。もっと早く始めればよかった。",
                role: "30代・マーケター",
              },
              {
                text: "文系でITが苦手でしたが、100日で実際に業務改善ツールを作れるようになりました。",
                role: "40代・人事担当",
              },
              {
                text: "補助金を使って実質12万円で受講。コスパは最高でした。",
                role: "20代・フリーランス",
              },
            ].map((v) => (
              <div key={v.role} className="rounded-xl border border-stone-100 bg-stone-50 p-5">
                <p className="mb-3 text-sm leading-relaxed text-stone-700">&ldquo;{v.text}&rdquo;</p>
                <p className="text-xs font-medium text-stone-400">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-stone-900 px-5 py-12">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-2 text-sm font-medium text-amber-400">まずは無料相談から</p>
          <h2 className="mb-6 text-xl font-bold text-white">
            今の仕事に、AIを取り入れてみませんか？
          </h2>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] w-full max-w-xs items-center justify-center gap-3 rounded-xl bg-[#06C755] px-6 text-base font-bold text-white"
          >
            LINEで無料相談する
          </a>
          <p className="mt-4 text-xs text-stone-400">しつこい営業は一切ありません</p>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-stone-100 px-5 py-6 text-center">
        <p className="text-xs text-stone-400">
          © AIリブートアカデミー /{" "}
          <Link href="/privacy" className="underline">
            プライバシーポリシー
          </Link>
        </p>
      </footer>
    </div>
  );
}
