"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowRight, ChevronDown, Check, Shield, Clock, Zap, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const LINE_URL = "https://bexn9pao.autosns.app/line?src=lp_line_diagnostic";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function LineButton({
  label = "LINEに追加して無料診断を受ける",
  size = "default",
  analyticsSource = "lp_line_diagnostic",
}: {
  label?: string;
  size?: "default" | "large";
  analyticsSource?: string;
}) {
  const sizeClasses =
    size === "large"
      ? "px-10 py-5 text-lg sm:text-xl"
      : "px-8 py-4 text-base sm:text-lg";

  return (
    <motion.a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent.lineRegisterClick(analyticsSource)}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#06C755] font-bold text-white shadow-[0_6px_24px_rgba(6,199,85,0.35)] transition-shadow hover:shadow-[0_12px_40px_rgba(6,199,85,0.45)] ${sizeClasses}`}
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span>{label}</span>
      <ArrowRight className="h-5 w-5 opacity-70" />
    </motion.a>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
      {children}
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-lime-400/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-16 pt-16 text-center sm:pb-24 sm:pt-20 lg:flex-row lg:gap-12 lg:px-8 lg:text-left">
        <div className="flex-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-300"
          >
            <Sparkles className="h-4 w-4" />
            完全無料・登録1分
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            ChatGPT、使ってみたけど
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-300">
                結局どれ使えばいいの？
              </span>
              <span className="absolute bottom-0 left-0 h-3 w-full rounded bg-emerald-500/20" />
            </span>
            <br />
            を解決します。
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mb-8 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            職種・作業・レベルに合わせて
            <strong className="text-white">あなた専用のAIツールTOP3</strong>
            を無料で診断。
            <br />
            LINEに追加して、たった4問答えるだけ。
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {[
              { num: "1", text: "LINE追加" },
              { num: "2", text: "4問診断" },
              { num: "3", text: "結果＋PDF受取" },
            ].map((step, i) => (
              <div key={step.num} className="flex items-center gap-2">
                {i > 0 && (
                  <ArrowRight className="h-4 w-4 text-emerald-400/60" />
                )}
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    {step.num}
                  </span>
                  {step.text}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <LineButton size="large" analyticsSource="lp_hero" />
            <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-slate-400 lg:justify-start">
              <Shield className="h-4 w-4" />
              個人情報の入力は不要です
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-12 w-full max-w-md flex-shrink-0 lg:mt-0 lg:max-w-lg"
        >
          <Image
            src="/images/lp/line-diagnostic/hero.png"
            alt="AIツール診断イメージ"
            width={1024}
            height={576}
            className="rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

function PainSection() {
  const pains = [
    {
      icon: "😵",
      text: "AIツールが多すぎてどれを使えばいいか分からない",
    },
    {
      icon: "😓",
      text: "ChatGPT触ったけど、仕事への活かし方が謎のまま",
    },
    {
      icon: "😰",
      text: "周りがAI使い始めてて乗り遅れている気がする…",
    },
    {
      icon: "🤔",
      text: "有料プランにする価値があるのかどうか判断できない",
    },
  ];

  return (
    <section className="bg-slate-900 px-5 py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-3 text-2xl font-black text-white sm:text-3xl"
        >
          こんなお悩み、ありませんか？
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-10 text-sm text-slate-400"
        >
          ChatGPT使ってみたものの、うまく活かせていない方へ
        </motion.p>

        <div className="mb-10 grid gap-3 sm:grid-cols-2">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-xl border border-white/8 bg-white/5 p-5 text-left backdrop-blur-sm"
            >
              <span className="mb-2 block text-2xl">{pain.icon}</span>
              <p className="text-sm leading-relaxed text-slate-300">
                「{pain.text}」
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-lime-400 px-8 py-5 text-base font-black leading-relaxed text-slate-900 sm:text-lg"
        >
          💡 その悩み、
          <strong>「自分に合ったツールが分かっていないだけ」</strong>
          かもしれません。
        </motion.div>
      </div>
    </section>
  );
}

function HowSection() {
  const steps = [
    {
      num: "1",
      icon: <MessageCircle className="h-5 w-5" />,
      title: "LINEで友だち追加",
      desc: "下のボタンをタップしてAIリブートアカデミーのLINEを追加。登録費用は一切かかりません。",
    },
    {
      num: "2",
      icon: <BookOpen className="h-5 w-5" />,
      title: "4問のアンケートに答える",
      desc: "職種・困っている作業・AIの使用歴・予算の4問だけ。所要時間は1〜2分です。",
    },
    {
      num: "3",
      icon: <Zap className="h-5 w-5" />,
      title: "LINEに診断結果が届く",
      desc: "あなた専用のAIツールTOP3と、各ツールの攻略本PDFがLINEに自動送信されます。",
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-12"
        >
          <SectionTag>使い方</SectionTag>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            3ステップで診断完了
          </h2>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="flex items-start gap-5 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 text-left transition-shadow hover:shadow-lg hover:shadow-emerald-100/50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-xl font-extrabold text-white shadow-lg shadow-emerald-500/30">
                {step.num}
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 sm:text-lg">
                  {step.icon}
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuestionsSection() {
  const questions = [
    {
      q: "Q1",
      label: "職種",
      title: "あなたの職種に一番近いものは？",
      options: [
        "営業・マーケティング",
        "事務・バックオフィス",
        "エンジニア・IT・開発",
        "クリエイター・デザイナー",
      ],
    },
    {
      q: "Q2",
      label: "悩み",
      title: "今、一番時間がかかっている作業は？",
      options: [
        "文章作成・メール・資料づくり",
        "データ整理・分析・リサーチ",
        "画像やデザインの作成",
        "企画・アイデア出し",
      ],
    },
    {
      q: "Q3",
      label: "レベル",
      title: "今のAI活用レベルは？",
      options: [
        "ほとんど使ったことがない",
        "ChatGPTを少し触ったことがある",
        "日常的に使っているが活用しきれていない",
      ],
    },
    {
      q: "Q4",
      label: "予算",
      title: "AIツールにかけられる月額予算は？",
      options: [
        "無料がいい（0円）",
        "月3,000円くらいまで",
        "月5,000〜10,000円",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-12"
        >
          <SectionTag>診断の中身</SectionTag>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            聞かれるのはこの4問だけ
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {questions.map((q, i) => (
            <motion.div
              key={q.q}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="rounded-2xl border border-emerald-100 bg-white p-5 text-left shadow-sm"
            >
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                {q.q} · {q.label}
              </p>
              <h3 className="mb-3 text-sm font-bold text-slate-800">
                {q.title}
              </h3>
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <div
                    key={opt}
                    className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-slate-600"
                  >
                    <span className="h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-emerald-400" />
                    {opt}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultPreviewSection() {
  return (
    <section className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-12"
        >
          <SectionTag>診断結果イメージ</SectionTag>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            こんな診断結果が届きます
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="w-full max-w-sm flex-shrink-0"
          >
            <Image
              src="/images/lp/line-diagnostic/result-phone.png"
              alt="LINE診断結果イメージ"
              width={800}
              height={450}
              className="rounded-2xl shadow-2xl shadow-slate-900/20"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-left sm:p-8"
          >
            <p className="mb-5 flex items-center gap-2 text-sm text-slate-400">
              💼{" "}
              <strong className="text-lime-300">
                営業・マーケティング
              </strong>{" "}
              のあなたへの診断結果
            </p>

            <div className="mb-2 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="text-xl">🥇</span>
              <div>
                <h4 className="text-sm font-bold text-white">
                  ChatGPT（GPT-5.2）
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  メール・資料・文章作成が最も手軽。日本語で指示するだけ
                </p>
              </div>
            </div>

            <div className="mb-2 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 opacity-40 blur-[3px]">
              <span className="text-xl">🥈</span>
              <div>
                <h4 className="text-sm font-bold text-white">●●●●●●</h4>
                <p className="text-xs text-slate-400">
                  あなたの回答によって変わります
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 opacity-40 blur-[3px]">
              <span className="text-xl">🥉</span>
              <div>
                <h4 className="text-sm font-bold text-white">●●●●●●</h4>
                <p className="text-xs text-slate-400">
                  あなたの回答によって変わります
                </p>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p className="mb-1 text-sm font-bold text-lime-300">
                🎁 各ツールの攻略本PDFも一緒に届きます
              </p>
              <p className="text-xs text-slate-400">
                診断を受けるとTOP3すべての結果が確認できます
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GiftSection() {
  const gifts = [
    {
      icon: <BookOpen className="h-7 w-7 text-emerald-600" />,
      title: "初期設定ガイド",
      desc: "アカウント作成から日本語設定まで画像付きで解説",
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-emerald-600" />,
      title: "仕事別プロンプト集",
      desc: "コピペして使えるテンプレートが職種別に掲載",
    },
    {
      icon: <Sparkles className="h-7 w-7 text-emerald-600" />,
      title: "無料活用の裏ワザ",
      desc: "有料プランなしで使い倒すコツをまとめて紹介",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y-2 border-dashed border-emerald-200 bg-emerald-50 px-5 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-emerald-200/40 blur-[80px]" />
        <div className="absolute -right-20 top-1/3 h-[250px] w-[250px] rounded-full bg-lime-200/30 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-bold text-white"
        >
          🎁 アンケート回答の特典
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-3 text-2xl font-black text-slate-900 sm:text-3xl"
        >
          診断結果と一緒に
          <br />
          攻略本PDFをプレゼント
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mb-10 text-sm leading-relaxed text-slate-500"
        >
          診断で選ばれたTOP3ツールの使い方を
          <br />
          初心者でもすぐ実践できる形でまとめました。
        </motion.p>

        <div className="mb-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="w-full max-w-sm flex-shrink-0"
          >
            <Image
              src="/images/lp/line-diagnostic/gift-pdf.png"
              alt="攻略本PDFイメージ"
              width={800}
              height={450}
              className="rounded-xl"
            />
          </motion.div>

          <div className="flex w-full flex-col gap-3">
            {gifts.map((gift, i) => (
              <motion.div
                key={gift.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                className="flex items-start gap-4 rounded-xl border border-emerald-100 bg-white p-5 text-left shadow-sm"
              >
                <div className="mt-0.5 flex-shrink-0">{gift.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    {gift.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {gift.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={7}
        >
          <LineButton
            label="今すぐ無料診断を受ける"
            analyticsSource="lp_gift"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const tools = [
    "ChatGPT",
    "Claude",
    "Gemini",
    "Perplexity AI",
    "Midjourney",
    "Canva AI",
    "Runway",
    "ElevenLabs",
    "GitHub Copilot",
    "Cursor",
    "DeepSeek",
    "Adobe Firefly",
    "Kling",
    "Sora",
  ];

  return (
    <section className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-10"
        >
          <SectionTag>対応ツール</SectionTag>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            17種類以上のAIツールから
            <br />
            あなたに合う組み合わせを選定
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-6 flex flex-wrap justify-center gap-2"
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:bg-emerald-50"
            >
              {tool}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-600">
            + さらに追加中
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2 text-sm text-slate-600"
        >
          <Check className="h-4 w-4 text-emerald-500" />
          2026年最新情報をもとに選定・随時アップデート
        </motion.p>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const feeds = [
    {
      icon: "🔥",
      label: "週1配信 · 最新AI情報",
      desc: "話題の新モデル・新ツールを速報。「これ知らなかったら損してた」レベルの情報だけをピックアップ",
    },
    {
      icon: "⚡",
      label: "実践Tips · すぐ使えるワザ",
      desc: "「今日の業務で試せる」AIプロンプトや時短テクを具体例つきで紹介",
    },
    {
      icon: "📊",
      label: "業界別 · AI活用事例",
      desc: "営業・事務・クリエイターなど職種ごとの活用事例を配信",
    },
    {
      icon: "🎓",
      label: "キャリア · AI時代の働き方",
      desc: "AIに仕事を奪われる人・活かして差をつける人の違いとは",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 px-5 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[100px]" />
        <div className="absolute right-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-lime-400/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <span className="inline-block rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-300">
            📲 LINE配信コンテンツ
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-3 mt-5 text-2xl font-black text-white sm:text-3xl"
        >
          診断だけじゃない。
          <br />
          <span className="text-lime-300">AI時代のビジネスマン</span>に届けたい
          <br />
          最新情報を定期配信中。
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mb-10 text-sm leading-relaxed text-slate-400"
        >
          友だち追加後も役立つ情報をお届けします。
          <br />
          忙しい社会人が「これだけ読めばOK」な
          <br />
          AI活用ニュースを厳選して配信。
        </motion.p>

        <div className="mb-10 space-y-3 text-left">
          {feeds.map((feed, i) => (
            <motion.div
              key={feed.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/8"
            >
              <span className="flex-shrink-0 text-xl">{feed.icon}</span>
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-lime-300">
                  {feed.label}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feed.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <LineButton
            label="LINEを追加して最新情報を受け取る"
            analyticsSource="lp_newsletter"
          />
          <p className="mt-4 text-xs text-slate-500">
            配信頻度は週1〜2回程度 · いつでもブロック解除できます
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "本当に無料ですか？",
      a: "はい、診断・攻略本PDFの受け取りまで完全無料です。クレジットカードの入力なども一切不要です。",
    },
    {
      q: "個人情報は必要ですか？",
      a: "LINE以外の個人情報（名前・メールアドレス等）の入力は不要です。アンケートは職種・悩み・レベル・予算の4問のみです。",
    },
    {
      q: "診断結果はどのくらいで届きますか？",
      a: "アンケートを送信してから数秒〜1分程度でLINEに自動送信されます。",
    },
    {
      q: "AI初心者でも大丈夫ですか？",
      a: "もちろんです。「まだAIをほとんど使ったことがない」方向けの診断結果・攻略本も用意しています。初期設定から丁寧に解説しています。",
    },
    {
      q: "LINEのブロックはいつでもできますか？",
      a: "はい、いつでも自由にブロック・友だち削除ができます。しつこい勧誘等は一切行いません。",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-emerald-50 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-10"
        >
          <SectionTag>よくある質問</SectionTag>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="overflow-hidden rounded-xl border border-emerald-100 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="flex w-full items-center gap-3 px-5 py-4 text-left"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-xs font-bold text-white">
                  Q
                </span>
                <span className="flex-1 text-sm font-bold text-slate-800 sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-emerald-500 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 pl-14 text-left text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const badges = [
    { icon: <Check className="h-4 w-4" />, text: "完全無料" },
    { icon: <Shield className="h-4 w-4" />, text: "個人情報不要" },
    { icon: <Clock className="h-4 w-4" />, text: "所要時間1〜2分" },
    { icon: <Zap className="h-4 w-4" />, text: "すぐ結果が届く" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 px-5 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-4 text-2xl font-black text-slate-900 sm:text-4xl"
        >
          「自分に合うAIツール」が
          <br />
          今日分かります。
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="mb-8 text-base leading-relaxed text-slate-500"
        >
          4問答えるだけで、あなたの仕事に本当に合ったAIツールと
          <br />
          すぐ使える攻略本PDFがLINEに届きます。
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="mb-8 flex flex-wrap justify-center gap-4"
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="flex items-center gap-1.5 text-sm font-bold text-emerald-700"
            >
              {badge.icon}
              {badge.text}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <LineButton size="large" analyticsSource="lp_final_cta" />
          <p className="mt-4 text-xs text-slate-400">
            ※ブロック・登録解除はいつでも可能です
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function LPFooter() {
  return (
    <footer className="bg-slate-900 px-5 py-8 text-center">
      <p className="text-xs text-slate-500">
        © 2026 AIリブートアカデミー　｜　
        <a href="/privacy" className="text-slate-400 hover:underline">
          プライバシーポリシー
        </a>
        　｜　
        <a href="/terms" className="text-slate-400 hover:underline">
          特定商取引法に基づく表記
        </a>
      </p>
    </footer>
  );
}

export default function LineDiagnosticLP() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <PainSection />
      <HowSection />
      <QuestionsSection />
      <ResultPreviewSection />
      <GiftSection />
      <ToolsSection />
      <NewsletterSection />
      <FAQSection />
      <FinalCTASection />
      <LPFooter />
    </div>
  );
}
