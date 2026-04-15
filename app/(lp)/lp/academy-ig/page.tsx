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

      {/* 講師紹介 */}
      <section className="border-t border-stone-100 bg-stone-50 px-5 py-12">
        <div className="mx-auto max-w-lg">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-stone-400">
            Instructor
          </p>
          <h2 className="mb-8 text-center text-xl font-bold text-stone-900">
            講師紹介
          </h2>

          {/* 成瀬拓也 */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-2xl">
                🧭
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Lead Instructor</p>
                <h3 className="text-lg font-bold text-stone-900">成瀬 拓也</h3>
                <p className="text-xs text-stone-400">株式会社ウィルフォワード 代表取締役</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-amber-500">▸</span>
                経済産業省認定リスキリング支援事業を企画・運営
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-amber-500">▸</span>
                大手・中小企業へのAI導入支援・社内研修を多数実施
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-amber-500">▸</span>
                「AI時代のキャリア設計」をテーマに全国で講演・ワークショップを展開
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-amber-500">▸</span>
                AIリブートアカデミー カリキュラム設計・100日間伴走プログラム構築者
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-amber-500">▸</span>
                Forbes JAPAN・Newsweek Japan 等メディア掲載実績あり（成瀬個人）
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-amber-500">▸</span>
                大手上場企業・スタートアップへの採用支援・人材紹介実績あり（成瀬個人）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 運営会社の信頼性 */}
      <section className="border-t border-stone-100 bg-white px-5 py-12">
        <div className="mx-auto max-w-lg">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-stone-400">
            About Us
          </p>
          <h2 className="mb-2 text-center text-xl font-bold text-stone-900">
            運営会社について
          </h2>
          <p className="mb-8 text-center text-sm text-stone-500">
            AIリブートアカデミーは、株式会社ウィルフォワードが運営しています。
          </p>

          {/* 谷出正直 — 会社の信頼性補強 */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-stone-400">
              In-House Career Expert
            </p>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-stone-200 text-xl">
                🎓
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">谷出 正直</h3>
                <p className="text-xs text-stone-500">ウィルフォワード 在籍 ／ キャリアコンサルタント（国家資格）</p>
              </div>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-stone-500">
              ウィルフォワードには、キャリア教育の専門家が在籍しています。
            </p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-stone-400">▸</span>
                大学・専門学校でキャリア教育講師として延べ1,000名以上を支援
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-stone-400">▸</span>
                就職・転職・副業・独立など多様なキャリアパスにおける伴走実績
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0 text-stone-400">▸</span>
                AI時代の「強みの再定義」をテーマにしたワークショップを開発・展開
              </li>
            </ul>
            <p className="mt-4 text-xs text-stone-400">
              ※ 谷出はAIリブートアカデミーの講師ではなく、ウィルフォワードのキャリア支援の専門性を担う在籍メンバーです。
            </p>
          </div>
        </div>
      </section>

      {/* 受講生の声 */}
      <section className="border-t border-stone-100 bg-white px-5 py-12">
        <div className="mx-auto max-w-lg">
          <p className="mb-2 text-center text-sm font-bold uppercase tracking-widest text-stone-400">
            Alumni Voices
          </p>
          <h2 className="mb-8 text-center text-xl font-bold text-stone-900">
            受講生の声
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "多忙で目的を見失いかけましたが、『人の思いを最速で形にする』という原点に立ち返ることができました。AIを活用してWebサイトのデザイン案を数分で出せるようになり、現場での提案スピードが劇的に変わりました。",
                role: "30代・建築リペア職",
                tag: "建築 × AI",
              },
              {
                text: "コードが書けない自分でも、自分の声で動く秘書AIやマニュアル自動化ツールを実際に作れました。『形にできる』という体験が、仕事への向き合い方を根本から変えてくれました。",
                role: "40代・エンタメ出身",
                tag: "AI秘書 × 自動化",
              },
              {
                text: "メール対応の自動化を皮切りに、各業務の担当AIを束ねる『AIチーム』を構築できました。今は『作業者』ではなく『AIのマネージャー』として動いています。",
                role: "40代・事業マネジメント",
                tag: "AIチーム × 事業拡張",
              },
              {
                text: "治療やアスリートサポートの現場で、予約・分析データの自動連携やスマホ専用タスク管理UIを自作。会社の『仕組み』を変えるアプリ開発まで踏み込めるとは思っていませんでした。",
                role: "20代・治療家・スポーツトレーナー",
                tag: "医療 × AI実装",
              },
            ].map((v) => (
              <div key={v.role} className="rounded-xl border border-stone-100 bg-stone-50 p-5">
                <span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-700">
                  {v.tag}
                </span>
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
