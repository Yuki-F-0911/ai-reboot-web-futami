import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ACADEMY_COLORS, ACADEMY_TYPOGRAPHY } from "@/components/academyLanding/sections/academyDesignTokens";

export const metadata: Metadata = {
  title: "DEMO DAY 2026 | AIリブートアカデミー 1期生 成果発表会",
  description:
    "2026年5月22日-23日開催。AIリブートアカデミー1期生5名が100日間で掴んだ変化を発表します。AI時代のキャリアを考えるすべての人へ。",
  robots: { index: true, follow: true },
  openGraph: {
    title: "DEMO DAY 2026 | AIリブートアカデミー",
    description:
      "1期生5名が100日間で掴んだ変化を発表。2026年5月22日-23日開催。",
    type: "website",
  },
};

/**
 * 受講生のストーリー（Before → Now タイムライン）
 */
const rebooterTimelines = [
  {
    nickname: "リオさん",
    attribute: "元ミュージカル出身・歌唱指導",
    day0: "生成AIはほとんど使ったことがない。AIを学ぶことで自分の新しい場所を開拓したい。",
    midpoint:
      "Geminiとの壁打ちで「制作進行」が得意分野だと発見。メール自動整理やスケジュール管理システムを自力で構築。",
    demoday: "DEMO DAYで発表予定",
  },
  {
    nickname: "きばちゃん",
    attribute: "治療関係・アスリートパフォーマンス支援",
    day0: "AIを治療データ分析やWeb業務に活用したいが、具体的な使い方が分からない。",
    midpoint:
      "GA・予約管理データの自動スプレッドシート反映を構築し実務稼働中。サブリーダーに立候補。",
    demoday: "DEMO DAYで発表予定",
  },
  {
    nickname: "むすびんさん",
    attribute: "ゲーム開発・仕様設計",
    day0: "AIはまだ現場で使われておらず、コードを書いてもらう程度。子供とゲームを作りたい。",
    midpoint:
      "POSシステムのバグをAIで解決。ローカルLLM構築でナレッジグラフを自ら学び環境構築に成功。",
    demoday: "DEMO DAYで発表予定",
  },
  {
    nickname: "カッシーさん",
    attribute: "建築リペア・独立開業",
    day0: "画像生成は試しているが業務活用はまだ。独立したばかりで使い道を広げたい。",
    midpoint:
      "知人のジムHPをAIで最速プロトタイピング。次のスプリントのリーダーに自ら志願。",
    demoday: "DEMO DAYで発表予定",
  },
  {
    nickname: "ダザイさん",
    attribute: "研修・イベントコンサルティング",
    day0: "ChatGPT（自称「ダザイ2」）で制作物を作っているが、もっと使いこなしたい。",
    midpoint: "業務での活用をさらに深掘り中。",
    demoday: "DEMO DAYで発表予定",
  },
];

const LINE_URL = "https://bexn9pao.autosns.app/line";

export default function DemodayPage() {
  return (
    <div style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-8">
            <span
              className="inline-block rounded-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                backgroundColor: ACADEMY_COLORS.accentSoft,
                color: ACADEMY_COLORS.accentDeep,
                fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              }}
            >
              2026.05.22 — 23
            </span>
          </div>
          <h1
            className="mb-8 text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.15] tracking-tight"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            DEMO DAY
            <br />
            <span className="text-[clamp(1.2rem,3.5vw,2.2rem)]">
              — 100日間のリブートを、見届ける2日間。
            </span>
          </h1>
          <p
            className="mb-10 max-w-2xl text-base leading-loose lg:text-lg"
            style={{ color: ACADEMY_COLORS.textBody }}
          >
            AIリブートアカデミー1期生5名が、それぞれの100日間で掴んだ変化を発表します。
            <br />
            完成された成功事例ではなく、挑戦のリアルをお届けします。
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg px-10 py-4 text-base font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              DEMO DAYの情報を受け取る
            </a>
            <Link
              href="/academy"
              className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
              style={{
                color: ACADEMY_COLORS.textStrong,
                borderColor: ACADEMY_COLORS.textStrong,
              }}
            >
              <span>AIリブートアカデミーとは</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About DEMO DAY ── */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}
      >
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            About
          </span>
          <h2
            className="mb-8 text-2xl font-bold leading-tight lg:text-3xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            DEMO DAYとは
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p
                className="mb-6 text-base leading-loose"
                style={{ color: ACADEMY_COLORS.textBody }}
              >
                AIリブートアカデミーの100日間プログラムの集大成として、受講生がそれぞれの成果と変化を発表するイベントです。
              </p>
              <p
                className="text-base leading-loose"
                style={{ color: ACADEMY_COLORS.textBody }}
              >
                スキルの習得だけでなく、「自分は何のためにAIを使うのか」「どう生きたいのか」という問いに向き合い続けた100日間。
                その過程で生まれた変化を、飾らない言葉で共有します。
              </p>
            </div>
            <div
              className="rounded-sm border p-6 lg:p-8"
              style={{
                borderColor: ACADEMY_COLORS.lineSoft,
                backgroundColor: ACADEMY_COLORS.bgCanvas,
              }}
            >
              <h3
                className="mb-4 text-lg font-bold"
                style={{ color: ACADEMY_COLORS.textStrong }}
              >
                こんな方におすすめ
              </h3>
              <ul className="space-y-3">
                {[
                  "AIを仕事にどう活かすか考えている方",
                  "AIリブートアカデミーに興味がある方",
                  "リアルな受講生の変化を見たい方",
                  "2期生としての参加を検討中の方",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: ACADEMY_COLORS.textBody }}
                  >
                    <span
                      className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{
                        backgroundColor: ACADEMY_COLORS.accentMain,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1期生の100日間ストーリー ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-16">
            <span
              className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{
                fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                color: ACADEMY_COLORS.accentMain,
              }}
            >
              Rebooters
            </span>
            <h2
              className="mb-6 text-2xl font-bold leading-tight lg:text-3xl"
              style={{
                fontFamily: ACADEMY_TYPOGRAPHY.serif,
                color: ACADEMY_COLORS.textStrong,
              }}
            >
              1期生の100日間
            </h2>
            <p
              className="max-w-2xl leading-loose"
              style={{ color: ACADEMY_COLORS.textBody }}
            >
              それぞれ異なる職種・背景を持つ5名が、AI時代に自分らしいキャリアを探り始めた100日間の軌跡。
            </p>
          </div>

          {/* タイムラインカード */}
          <div className="space-y-8">
            {rebooterTimelines.map((story, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-sm border"
                style={{
                  borderColor: ACADEMY_COLORS.lineSoft,
                  backgroundColor: ACADEMY_COLORS.bgPanel,
                }}
              >
                <div
                  className="flex items-center justify-between border-b px-6 py-4"
                  style={{ borderColor: ACADEMY_COLORS.lineSoft }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-sm text-xs font-bold"
                      style={{
                        backgroundColor: ACADEMY_COLORS.accentSoft,
                        color: ACADEMY_COLORS.accentDeep,
                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        className="text-base font-bold"
                        style={{ color: ACADEMY_COLORS.textStrong }}
                      >
                        {story.nickname}
                      </p>
                      <p
                        className="text-[11px]"
                        style={{ color: ACADEMY_COLORS.textMuted }}
                      >
                        {story.attribute}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-stone-200 md:grid-cols-3">
                  {/* DAY 0 */}
                  <div
                    className="p-5 lg:p-6"
                    style={{ backgroundColor: ACADEMY_COLORS.bgCanvas }}
                  >
                    <p
                      className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                        color: ACADEMY_COLORS.textMuted,
                      }}
                    >
                      Day 0 — Start
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: ACADEMY_COLORS.textBody }}
                    >
                      {story.day0}
                    </p>
                  </div>

                  {/* 中間 */}
                  <div
                    className="p-5 lg:p-6"
                    style={{ backgroundColor: ACADEMY_COLORS.bgPanel }}
                  >
                    <p
                      className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                        color: ACADEMY_COLORS.accentMain,
                      }}
                    >
                      Day 50 — Midpoint
                    </p>
                    <p
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: ACADEMY_COLORS.textStrong }}
                    >
                      {story.midpoint}
                    </p>
                  </div>

                  {/* DEMO DAY */}
                  <div
                    className="p-5 lg:p-6"
                    style={{ backgroundColor: ACADEMY_COLORS.accentSoft }}
                  >
                    <p
                      className="mb-2 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        fontFamily: ACADEMY_TYPOGRAPHY.numeric,
                        color: ACADEMY_COLORS.accentDeep,
                      }}
                    >
                      Day 100 — Demo Day
                    </p>
                    <p
                      className="text-sm font-bold leading-relaxed"
                      style={{ color: ACADEMY_COLORS.accentDeep }}
                    >
                      {story.demoday}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 開催概要 ── */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: ACADEMY_COLORS.bgSection }}
      >
        <div className="container mx-auto max-w-4xl px-6 lg:px-12">
          <span
            className="mb-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Event Details
          </span>
          <h2
            className="mb-10 text-2xl font-bold leading-tight lg:text-3xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            開催概要
          </h2>

          <div
            className="overflow-hidden rounded-sm border"
            style={{
              borderColor: ACADEMY_COLORS.lineSoft,
              backgroundColor: ACADEMY_COLORS.bgPanel,
            }}
          >
            {[
              { label: "日程", value: "2026年5月22日（金）- 23日（土）" },
              { label: "形式", value: "詳細は追ってご案内します" },
              { label: "参加費", value: "無料" },
              {
                label: "主催",
                value: "株式会社ウィルフォワード / AIリブートアカデミー",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex border-b last:border-b-0"
                style={{ borderColor: ACADEMY_COLORS.lineSoft }}
              >
                <div
                  className="w-28 flex-shrink-0 p-4 text-sm font-bold lg:w-40 lg:p-5"
                  style={{
                    backgroundColor: ACADEMY_COLORS.bgSection,
                    color: ACADEMY_COLORS.textStrong,
                  }}
                >
                  {item.label}
                </div>
                <div
                  className="p-4 text-sm leading-relaxed lg:p-5"
                  style={{ color: ACADEMY_COLORS.textBody }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-5xl px-6 lg:px-12">
          <div
            className="mb-10 h-px w-full"
            style={{ backgroundColor: ACADEMY_COLORS.lineStrong }}
          />
          <span
            className="mb-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.numeric,
              color: ACADEMY_COLORS.accentMain,
            }}
          >
            Join Us
          </span>
          <h2
            className="mb-8 text-3xl font-bold leading-tight lg:text-5xl"
            style={{
              fontFamily: ACADEMY_TYPOGRAPHY.serif,
              color: ACADEMY_COLORS.textStrong,
            }}
          >
            100日間の変化を、
            <br />
            あなたの目で確かめてください。
          </h2>
          <p
            className="mb-10 max-w-2xl text-base leading-loose"
            style={{ color: ACADEMY_COLORS.textBody }}
          >
            DEMO DAYは、受講生の発表を「見る」イベントではありません。
            AI時代に自分はどう生きるかを「考え始める」きっかけです。
          </p>

          <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg px-12 py-4 text-base font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: ACADEMY_COLORS.ctaLine }}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              DEMO DAYの情報を受け取る
            </a>

            <Link
              href="/academy"
              className="inline-flex items-center gap-2 border-b pb-1 text-sm font-bold transition-opacity hover:opacity-70"
              style={{
                color: ACADEMY_COLORS.textStrong,
                borderColor: ACADEMY_COLORS.textStrong,
              }}
            >
              <span>アカデミー詳細を見る</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p
            className="text-xs leading-loose"
            style={{ color: ACADEMY_COLORS.textMuted }}
          >
            ※ LINEに友だち追加するだけで、DEMO DAYの詳細情報が届きます。勧誘はありません。
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="border-t px-6 py-8 text-center"
        style={{ borderColor: ACADEMY_COLORS.lineSoft }}
      >
        <p className="text-xs" style={{ color: ACADEMY_COLORS.textMuted }}>
          © AIリブートアカデミー / 株式会社ウィルフォワード |{" "}
          <Link href="/privacy" className="underline">
            プライバシーポリシー
          </Link>
        </p>
      </footer>
    </div>
  );
}
