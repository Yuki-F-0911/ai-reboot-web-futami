import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "LINE登録で今すぐ無料でAI特典を受け取る | AIリブートアカデミー";
const pageDescription =
  "AIリブートアカデミーのLINE公式アカウントに登録すると、社内AI利用ガイドライン雛形・AI転職テンプレ・業種別プロンプト50選など6つの特典を今すぐ無料で受け取れます。";
const pageUrl = "https://ai-reboot.io/briefing";
const lineUrl = "https://bexn9pao.autosns.app/line";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "AI REBOOT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

const benefits = [
  {
    id: "01",
    title: "社内AI利用ガイドライン雛形",
    description:
      "法人のAI導入担当者向け。情報セキュリティ・著作権・禁止事項などを整理した社内展開用のガイドライン雛形テンプレートです。",
    tag: "法人導入検討者向け",
    color: "bg-blue-50 border-blue-200",
    tagColor: "bg-blue-100 text-blue-700",
    icon: "🏢",
  },
  {
    id: "02",
    title: "AI導入効果チェックリスト",
    description:
      "AI導入を比較・検討中の方向け。導入前に確認すべき効果測定項目を業務カテゴリ別に整理。社内説明にも使えます。",
    tag: "比較・検討層向け",
    color: "bg-green-50 border-green-200",
    tagColor: "bg-green-100 text-green-700",
    icon: "✅",
  },
  {
    id: "03",
    title: "AI活用ROI試算シート",
    description:
      "補助金・費用比較を検討している方向け。AI導入コストと削減効果を数値化し、稟議資料に落とし込めるスプレッドシートテンプレートです。",
    tag: "補助金・費用比較層向け",
    color: "bg-orange-50 border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
    icon: "📊",
  },
  {
    id: "04",
    title: "AI転職テンプレ",
    description:
      "AI活用スキルをアピールしたいキャリアチェンジ層向け。職務経歴書・自己PRへのAIスキルの書き方テンプレートをまとめました。",
    tag: "キャリアチェンジ層向け",
    color: "bg-purple-50 border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
    icon: "💼",
  },
  {
    id: "05",
    title: "業種別プロンプト50選",
    description:
      "実務でAIツールを使いたい方向け。営業・マーケ・人事・経理・エンジニアなど業種別にそのまま使えるプロンプトを50本収録。",
    tag: "実務活用・ツール比較層向け",
    color: "bg-cyan-50 border-cyan-200",
    tagColor: "bg-cyan-100 text-cyan-700",
    icon: "⚡",
  },
  {
    id: "06",
    title: "30日学習プラン",
    description:
      "資格取得・リスキリングを目指す方向け。1日単位でやることが決まる30日間の生成AI学習ロードマップ。迷わず始められます。",
    tag: "資格・学習・リスキリング層向け",
    color: "bg-yellow-50 border-yellow-200",
    tagColor: "bg-yellow-100 text-yellow-700",
    icon: "📅",
  },
] as const;

const faqs = [
  {
    q: "LINE登録は本当に無料ですか？",
    a: "はい、完全無料です。登録後すぐに6つの特典をお受け取りいただけます。費用は一切かかりません。",
  },
  {
    q: "特典はすべて受け取れますか？",
    a: "LINE登録後にメッセージが届きます。ご自身の目的に合った特典をお選びください。全6種類を受け取ることも可能です。",
  },
  {
    q: "登録後に勧誘はありますか？",
    a: "講座への無理な勧誘は一切しておりません。週1本のAI活用情報を配信するほか、ご希望の方のみ個別相談をご案内します。",
  },
  {
    q: "LINEの友だち登録を解除できますか？",
    a: "いつでもブロック・解除できます。強制的な継続はありませんので安心してご登録ください。",
  },
  {
    q: "法人担当者でも個人でも利用できますか？",
    a: "どちらでもご利用いただけます。法人向け特典（ガイドライン雛形・ROI試算シート）と個人向け特典（転職テンプレ・学習プラン）を揃えています。",
  },
] as const;

const BriefingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-28 pb-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            無料プレゼント配布中
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            LINE登録で
            <span className="text-emerald-400">AI特典6つ</span>
            を<br className="sm:hidden" />
            今すぐ無料で受け取る
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            社内AI導入から転職・リスキリングまで、
            <br className="hidden sm:block" />
            あなたの目的に合った実践テンプレートを今すぐ入手できます。
          </p>
          <div className="mt-10">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#06C755] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-900/30 transition-all hover:bg-[#05b04b] hover:shadow-xl hover:shadow-green-900/40 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで今すぐ無料で受け取る
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">登録30秒・完全無料・いつでも解除OK</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              受け取れる特典6選
            </h2>
            <p className="mt-3 text-slate-600">
              あなたの目的・フェーズに合った特典を今すぐ入手できます
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className={`rounded-2xl border p-6 ${benefit.color} transition-shadow hover:shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{benefit.icon}</span>
                  <div className="flex-1">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${benefit.tagColor} mb-2`}
                    >
                      {benefit.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      特典{benefit.id}：{benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#06C755] px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#05b04b] hover:shadow-lg active:scale-95"
            >
              LINEで今すぐ無料で受け取る
            </a>
            <p className="mt-3 text-xs text-slate-500">登録30秒・完全無料・いつでも解除OK</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            よくある質問
          </h2>
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <dt className="flex items-start gap-3 text-base font-semibold text-slate-900">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    Q
                  </span>
                  {faq.q}
                </dt>
                <dd className="mt-3 pl-9 text-sm leading-7 text-slate-600">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            まず特典を受け取って、
            <br />
            AI活用の第一歩を踏み出す
          </h2>
          <p className="mt-4 text-slate-300 text-sm leading-7">
            登録後すぐに特典が届きます。週1回のAI最新情報も無料で受け取れます。
          </p>
          <div className="mt-8">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#06C755] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#05b04b] hover:shadow-xl active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEで今すぐ無料で受け取る
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">登録30秒・完全無料・いつでも解除OK</p>
          <div className="mt-8 flex justify-center gap-6 text-xs text-slate-400">
            <Link href="/academy" className="hover:text-slate-200 underline">
              アカデミーTOP
            </Link>
            <Link href="/academy/blog" className="hover:text-slate-200 underline">
              ブログ一覧
            </Link>
            <Link href="/academy/seminars" className="hover:text-slate-200 underline">
              無料セミナー
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BriefingPage;
