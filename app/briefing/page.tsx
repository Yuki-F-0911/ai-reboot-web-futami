import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "AIリブートアカデミー LINE特典を受け取る";
const pageDescription =
  "AIリブートアカデミーのLINE特典ページです。特典01〜06の実践テンプレートを、目的に合わせて受け取れます。";
const pageUrl = "https://ai-reboot.io/briefing";
const lineBaseUrl = "https://bexn9pao.autosns.app/line";

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

const bonuses = [
  {
    id: "01",
    name: "AI活用ガイドライン雛形（社内配布用テンプレート）",
    description: "社内展開でそのまま使えるAI活用ルール雛形です。",
  },
  {
    id: "02",
    name: "AI導入効果チェックリスト（30項目）",
    description: "導入前後で確認すべき効果指標を30項目で整理しています。",
  },
  {
    id: "03",
    name: "AI導入ROI試算シート（Excel形式）",
    description: "投資対効果を可視化できるROI試算フォーマットを配布します。",
  },
  {
    id: "04",
    name: "AI転職・求人票チェックシート",
    description: "転職活動時にAI関連求人を見極めるための確認シートです。",
  },
  {
    id: "05",
    name: "業種別AIプロンプト50選",
    description: "業務ですぐ流用できる用途別プロンプトをまとめています。",
  },
  {
    id: "06",
    name: "30日AI学習プラン（ロードマップ付き）",
    description: "1か月で学習を進める日次ロードマップを受け取れます。",
  },
] as const;

const BriefingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f9ff] via-white to-[#f7fff8] pb-20">
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur sm:p-12">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            登録無料・すぐ受け取り可能
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            AIリブートアカデミー LINE特典を受け取る
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            目的に合う特典を選んで、LINEから受け取れます。各特典のボタンは計測用に
            src=briefing と bonus=bonus0X を付与しています。
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus) => {
            const lineUrl = `${lineBaseUrl}?src=briefing&bonus=bonus${bonus.id}`;

            return (
              <article
                key={bonus.id}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold tracking-[0.08em] text-emerald-700">
                  特典{bonus.id}
                </p>
                <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900">{bonus.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{bonus.description}</p>
                <a
                  href={lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#06C755] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#05b04b]"
                >
                  LINEで受け取る
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">AIリブートアカデミーの3つの価値</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
            <li>生成AI活用力: 実務で使えるスキルを体系的に習得</li>
            <li>自己理解・キャリアデザイン: 自分の強みを整理して次の道筋を設計</li>
            <li>仲間と共に学ぶ環境: 対話と協働で学習継続と変化を加速</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              AIリブートアカデミーについて詳しく見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BriefingPage;
