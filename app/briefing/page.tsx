import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "AIリブートアカデミー 無料相談ページ｜LINEで気軽に相談する";
const pageDescription =
  "経産省リスキリング補助金対象の100日間プログラム「AIリブートアカデミー」への無料相談ページ。補助金の使い方・カリキュラム・学習イメージをLINEで無料でお伝えします。";
const pageUrl = "https://ai-reboot.io/briefing";
const lineUrl = "https://bexn9pao.autosns.app/line?src=briefing";

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

const values = [
  {
    title: "思考OSをインストールする",
    description:
      "生成AIを「使う」だけでなく、AI時代を生き抜くマインドセットとスキルを体系的に身につけます。ツールの使い方より、考え方のアップデートが核心です。",
    icon: "🧠",
  },
  {
    title: "100日間の実践プログラム",
    description:
      "仕事の現場で使えるAI活用力を、100日間かけて着実に習得。座学だけでなく、実務に直結する課題に取り組みながら学習します。",
    icon: "📅",
  },
  {
    title: "経産省リスキリング補助金対象",
    description:
      "受講料最大70%が補助される、経済産業省のリスキリング補助金に対応。費用負担を大幅に抑えてキャリアを変える一歩を踏み出せます。",
    icon: "💴",
  },
] as const;

const consultationPatterns = [
  {
    title: "転職・キャリアチェンジを考えている",
    description:
      "「AI関連の仕事に転職したい」「今の職場でAIを使って評価を上げたい」など、キャリア変革を目指す方の相談に対応します。",
  },
  {
    title: "社内でAI推進を担当することになった",
    description:
      "「AI導入を任されたが何から始めればいいか分からない」「現場への展開方法を知りたい」といった組織内AI推進の悩みも気軽にご相談ください。",
  },
  {
    title: "AIをとにかく使えるようになりたい",
    description:
      "「ChatGPTは使ってみたが深く活用できていない」「業務の効率化に本気で取り組みたい」という方の最初の一歩をサポートします。",
  },
] as const;

const BriefingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6f9ff] via-white to-[#f7fff8] pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur sm:p-12">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            LINEで無料相談・登録無料
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            AIで仕事を変える、100日間のリアルなプログラム
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            「AIを使いこなせるようになりたい」「キャリアを変えたい」そんな方へ。経産省リスキリング補助金対象の「AIリブートアカデミー」について、LINEで気軽に相談できます。
          </p>
          <div className="mt-6">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#05b04b]"
            >
              LINEで無料相談する（登録無料）
            </a>
          </div>
        </div>
      </section>

      {/* 3つの価値 */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">AIリブートアカデミーの3つの価値</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-2xl">{v.icon}</p>
              <h3 className="mt-3 text-base font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* よくある相談 */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">こんな方からよく相談をいただきます</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {consultationPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
            >
              <h3 className="text-base font-bold text-emerald-900">{pattern.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{pattern.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* メインCTA */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-slate-900 p-8 text-center text-white sm:p-10">
          <h2 className="text-xl font-bold sm:text-2xl">まずはLINEで気軽に相談する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            補助金の使い方・カリキュラム・学習イメージ・費用など、気になることは何でもご相談ください。
            <br />
            無理な勧誘は一切行いません。
          </p>
          <div className="mt-6">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white transition hover:bg-[#05b04b]"
            >
              LINEで無料相談する（登録無料）
            </a>
          </div>
          <div className="mt-5">
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              プログラム詳細を見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BriefingPage;
