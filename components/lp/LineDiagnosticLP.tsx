"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Check,
  Shield,
  Clock,
  Zap,
  BookOpen,
  Sparkles,
  Users,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

const LINE_URL = "https://bexn9pao.autosns.app/line?src=lp_line_diagnostic";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

function LineButton({
  label = "LINEに追加して無料診断を受ける",
  size = "default",
  analyticsSource = "lp_line_diagnostic",
  variant = "solid",
}: {
  label?: string;
  size?: "default" | "large";
  analyticsSource?: string;
  variant?: "solid" | "dark";
}) {
  const sizeClasses =
    size === "large"
      ? "px-5 py-4 text-sm sm:px-10 sm:py-5 sm:text-lg gap-2.5 sm:gap-3"
      : "px-8 py-4 text-sm sm:text-base gap-2.5";

  const colorClasses =
    variant === "dark"
      ? "lp-line-register-btn--dark"
      : "lp-line-register-btn";

  const isLarge = size === "large";
  const labelClass = isLarge
    ? "whitespace-nowrap text-sm leading-tight sm:text-lg sm:leading-normal"
    : "leading-snug";

  return (
    <motion.a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent.lineRegisterClick(analyticsSource)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex max-w-full items-center justify-center rounded-full font-bold shadow-lg transition-colors ${sizeClasses} ${colorClasses} ${isLarge ? "w-full sm:w-auto" : ""}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <path
          d="M12 2C6.48 2 2 5.92 2 10.72c0 3.3 2.1 6.18 5.22 7.8-.22.82-.8 2.98-.92 3.44-.15.57.21.56.44.41.18-.11 2.86-1.9 4.02-2.68.38.05.77.08 1.17.08 5.52 0 10-3.92 10-8.72C22 5.92 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
      <span className={`text-center ${labelClass}`}>{label}</span>
      <ArrowRight className="h-4 w-4 flex-shrink-0 opacity-60" />
    </motion.a>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   1. HERO — Dark bg + 悩む30代男性ビジュアル（AIアイコン浮遊）
   ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="lp-line-hero relative w-full overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col justify-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:min-h-[560px] lg:flex-row lg:items-center lg:gap-12 lg:py-28">
        <div className="flex-1 lg:max-w-xl">
          <motion.p
            variants={fadeIn}
            initial={false}
            animate="visible"
            className="lp-line-hero__eyebrow mb-5 text-sm font-semibold tracking-wider text-blue-400"
          >
            完全無料 ／ 登録30秒 ／ 個人情報不要
          </motion.p>

          <motion.h1
            variants={fadeIn}
            initial={false}
            animate="visible"
            transition={{ delay: 0.15 }}
            className="mb-6 font-serif text-3xl font-black leading-[1.35] tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="text-white">あなたの仕事に合う</span>
            <br />
            {/* text-transparent+bg-clip は本番でCSS欠落時に文字が消えるため実色のみ */}
            <span className="font-black text-cyan-300">AIツールTOP3</span>
            <span className="text-white">を、</span>
            <br />
            <span className="text-white">無料で診断します。</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial={false}
            animate="visible"
            transition={{ delay: 0.3 }}
            className="lp-line-hero__lead mb-10 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            LINEで友だち追加 → 4問に答えるだけ。
            <br />
            診断結果と攻略本PDFがすぐ届きます。
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial={false}
            animate="visible"
            transition={{ delay: 0.45 }}
            className="flex flex-col items-start gap-4"
          >
            <LineButton size="large" analyticsSource="lp_hero" />
            <p className="lp-line-hero__muted flex items-center gap-2 text-xs text-slate-400">
              <Shield className="h-3.5 w-3.5" />
              クレジットカード・メールアドレスの入力は不要です
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          initial={false}
          animate="visible"
          transition={{ delay: 0.2 }}
          className="relative mx-auto w-full max-w-md flex-shrink-0 lg:mx-0 lg:max-w-lg"
        >
          <Image
            src="/images/lp/line-diagnostic/hero-nanobananapro.png"
            alt="AIアイコンが頭の中で浮かび、どのツールを使えばよいか悩むビジネスパーソン"
            width={1200}
            height={900}
            className="h-auto w-full rounded-2xl object-cover object-center shadow-2xl shadow-black/40"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   2. PAIN POINTS — Corporate card grid
   ────────────────────────────────────────────── */
function PainSection() {
  const pains = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "ツール選びで迷子",
      desc: "ChatGPT、Claude、Gemini… 種類が多すぎてどれを使えばいいか分からない",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "仕事に活かせない",
      desc: "AIを触ってはみたが、実務でどう使えばいいか分からず放置している",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "周りに置いていかれる不安",
      desc: "同僚や競合がAIで成果を出し始めていて、焦りを感じている",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "有料プランの判断がつかない",
      desc: "無料で十分なのか、課金すべきなのか、判断材料がない",
    },
  ];

  return (
    <Section className="bg-white py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="text-center"
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-sm font-bold tracking-widest text-blue-600"
        >
          こんなお悩みはありませんか？
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-14 font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          AIを「なんとなく」使っていませんか
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {pains.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeIn}
              className="flex items-start gap-5 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-left transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {p.icon}
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          className="mx-auto mt-12 max-w-2xl rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6 text-center"
        >
          <p className="text-base font-bold leading-relaxed text-white sm:text-lg">
            その悩みの原因は、
            <span className="text-cyan-300">
              「自分に合ったツールを知らないだけ」
            </span>
            かもしれません。
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   3. SOLUTION — What we offer
   ────────────────────────────────────────────── */
function SolutionSection() {
  return (
    <Section className="bg-slate-50 py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-center text-sm font-bold tracking-widest text-blue-600"
        >
          AIリブートアカデミーの無料診断
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-6 text-center font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          職種×作業×レベルから導く
          <br />
          あなた専用のAIツールTOP3
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-slate-500 sm:text-base"
        >
          17種類以上の最新AIツールの中から、あなたの職種・困っている作業・経験レベルをもとに、
          本当に役立つツール3つを厳選してご提案します。
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="mx-auto max-w-2xl space-y-5"
        >
            {[
              {
                icon: <Users className="h-5 w-5" />,
                title: "あなた専用の診断結果",
                desc: "4問のアンケートに答えるだけで、職種・目的に最適化されたAIツールTOP3を自動算出。",
              },
              {
                icon: <FileText className="h-5 w-5" />,
                title: "攻略本PDFも同時に届く",
                desc: "診断結果と合わせて、各ツールの初期設定からプロンプト集まで網羅した攻略本を無料で配布。",
              },
              {
                icon: <Lightbulb className="h-5 w-5" />,
                title: "2026年最新情報に対応",
                desc: "GPT-5.2、Claude 4.5、Gemini 2.5など最新モデルを含む17種類以上から選定。随時更新中。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   4. STEPS — Horizontal flow
   ────────────────────────────────────────────── */
function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "LINEで友だち追加",
      desc: "ボタンをタップしてAIリブートアカデミーの公式LINEを追加。費用は一切かかりません。",
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      num: "02",
      title: "4問のアンケートに回答",
      desc: "職種・困っている作業・AI使用歴・予算の4問だけ。所要時間は約1分です。",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      num: "03",
      title: "診断結果＋PDFを受取",
      desc: "あなた専用のTOP3とツール攻略本PDFがLINEに自動送信されます。",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  return (
    <Section className="bg-white py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-center text-sm font-bold tracking-widest text-blue-600"
        >
          ご利用の流れ
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-14 text-center font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          3ステップで完了
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeIn}
              className="relative rounded-2xl border border-slate-100 bg-white p-7 text-center"
            >
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
                  <ArrowRight className="h-5 w-5 text-slate-300" />
                </div>
              )}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                {step.icon}
              </div>
              <p className="mb-1 text-xs font-bold tracking-widest text-blue-600">
                STEP {step.num}
              </p>
              <h3 className="mb-2 text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="mt-12 text-center">
          <LineButton analyticsSource="lp_steps" />
        </motion.div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   5. QUESTIONS — Preview the 4 questions
   ────────────────────────────────────────────── */
function QuestionsSection() {
  const questions = [
    {
      num: "Q1",
      label: "職種",
      title: "あなたの職種に一番近いものは？",
      options: ["営業・マーケティング", "事務・バックオフィス", "エンジニア・IT・開発", "クリエイター・デザイナー"],
    },
    {
      num: "Q2",
      label: "悩み",
      title: "今、一番時間がかかっている作業は？",
      options: ["文章作成・メール・資料づくり", "データ整理・分析・リサーチ", "画像やデザインの作成", "企画・アイデア出し"],
    },
    {
      num: "Q3",
      label: "レベル",
      title: "今のAI活用レベルは？",
      options: ["ほとんど使ったことがない", "ChatGPTを少し触ったことがある", "日常的に使っているが活用しきれていない"],
    },
    {
      num: "Q4",
      label: "予算",
      title: "AIツールにかけられる月額予算は？",
      options: ["無料がいい（0円）", "月3,000円くらいまで", "月5,000〜10,000円"],
    },
  ];

  return (
    <Section className="bg-slate-50 py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-center text-sm font-bold tracking-widest text-blue-600"
        >
          診断内容
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-4 text-center font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          聞かれるのはこの4問だけ
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="mx-auto mb-14 max-w-lg text-center text-sm text-slate-500"
        >
          複雑な設問はありません。タップで選ぶだけの簡単なアンケートです。
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2">
          {questions.map((q) => (
            <motion.div
              key={q.num}
              variants={fadeIn}
              className="rounded-2xl border border-slate-100 bg-white p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
                  {q.num}
                </span>
                <span className="text-xs font-bold tracking-wider text-slate-400">
                  {q.label}
                </span>
              </div>
              <h3 className="mb-4 text-sm font-bold text-slate-800">
                {q.title}
              </h3>
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <div
                    key={opt}
                    className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-3 py-2.5 text-xs text-slate-600"
                  >
                    <span className="h-3 w-3 flex-shrink-0 rounded-full border-2 border-slate-300" />
                    {opt}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   6. GIFT — PDF guides with image
   ────────────────────────────────────────────── */
function GiftSection() {
  const gifts = [
    {
      icon: <BookOpen className="h-5 w-5 text-blue-600" />,
      title: "初期設定ガイド",
      desc: "アカウント作成から日本語設定まで画像付きで解説",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-blue-600" />,
      title: "仕事別プロンプト集",
      desc: "コピペして使えるテンプレートを職種別に収録",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-600" />,
      title: "無料活用の裏ワザ",
      desc: "有料プランなしでも使い倒すコツをまとめて紹介",
    },
  ];

  return (
    <Section className="bg-white py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-center text-sm font-bold tracking-widest text-blue-600"
        >
          特典
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-4 text-center font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          診断結果と一緒に
          <br className="sm:hidden" />
          攻略本PDFをプレゼント
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="mx-auto mb-14 max-w-lg text-center text-sm text-slate-500"
        >
          診断で選ばれたTOP3ツールの使い方を、初心者でもすぐ実践できる形でまとめました。
        </motion.p>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-14">
          <motion.div
            variants={fadeIn}
            className="w-full max-w-sm flex-shrink-0 lg:w-5/12"
          >
            <Image
              src="/images/lp/line-diagnostic/guides.png"
              alt="攻略本PDFイメージ"
              width={800}
              height={450}
              className="rounded-xl"
            />
          </motion.div>

          <div className="flex-1 space-y-4">
            {gifts.map((gift) => (
              <motion.div
                key={gift.title}
                variants={fadeIn}
                className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  {gift.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-slate-900">
                    {gift.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {gift.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fadeIn} className="pt-2">
              <LineButton
                label="今すぐ無料診断を受ける"
                analyticsSource="lp_gift"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   7. TOOLS — Pill grid
   ────────────────────────────────────────────── */
function ToolsSection() {
  const tools = [
    "ChatGPT", "Claude", "Gemini", "Perplexity AI", "Midjourney",
    "Canva AI", "Runway", "ElevenLabs", "GitHub Copilot", "Cursor",
    "DeepSeek", "Adobe Firefly", "Kling", "Sora",
  ];

  return (
    <Section className="bg-slate-50 py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="text-center"
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-sm font-bold tracking-widest text-blue-600"
        >
          対応ツール
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-14 font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          17種類以上のAIツールから
          <br />
          最適な組み合わせを選定
        </motion.h2>

        <motion.div
          variants={fadeIn}
          className="mb-8 flex flex-wrap justify-center gap-2.5"
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
            >
              {tool}
            </span>
          ))}
          <span className="rounded-full border border-dashed border-blue-300 bg-blue-50 px-5 py-2.5 text-sm font-bold text-blue-600">
            + さらに追加中
          </span>
        </motion.div>

        <motion.p
          variants={fadeIn}
          className="inline-flex items-center gap-2 text-sm text-slate-500"
        >
          <Check className="h-4 w-4 text-blue-500" />
          2026年最新情報をもとに選定・随時アップデート
        </motion.p>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   8. NEWSLETTER — LINE delivery content
   ────────────────────────────────────────────── */
function NewsletterSection() {
  const feeds = [
    {
      icon: <Zap className="h-5 w-5" />,
      label: "週1配信",
      title: "最新AI情報",
      desc: "話題の新モデル・新ツールを速報。知らないと損するレベルの情報だけを厳選。",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      label: "実践Tips",
      title: "すぐ使えるワザ",
      desc: "「今日の業務で試せる」AIプロンプトや時短テクを具体例つきで紹介。",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      label: "業界別",
      title: "AI活用事例",
      desc: "営業・事務・クリエイターなど職種ごとの活用事例を配信。",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "キャリア",
      title: "AI時代の働き方",
      desc: "AIを活かして差をつけるビジネスパーソンの生存戦略を考える。",
    },
  ];

  return (
    <Section className="bg-slate-900 py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-center text-sm font-bold tracking-widest text-blue-400"
        >
          LINE配信コンテンツ
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-4 text-center font-serif text-2xl font-black text-white sm:text-3xl"
        >
          診断だけじゃない。
          <br />
          AI時代に必要な情報を定期配信。
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="mx-auto mb-14 max-w-lg text-center text-sm leading-relaxed text-slate-400"
        >
          友だち追加後も、忙しい社会人が「これだけ読めばOK」な
          AI活用ニュースを厳選してお届けします。
        </motion.p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {feeds.map((feed) => (
            <motion.div
              key={feed.title}
              variants={fadeIn}
              className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                {feed.icon}
              </div>
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  {feed.label}
                </p>
                <h3 className="mb-1 text-sm font-bold text-white">
                  {feed.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {feed.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="text-center">
          <LineButton
            label="LINEを追加して最新情報を受け取る"
            analyticsSource="lp_newsletter"
          />
          <p className="mt-4 text-xs text-slate-500">
            配信頻度は週1〜2回程度 · いつでもブロック解除できます
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   9. FAQ
   ────────────────────────────────────────────── */
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
    <Section className="bg-white py-20 sm:py-28">
      <motion.div
        variants={stagger}
        initial={false}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-2xl"
      >
        <motion.p
          variants={fadeIn}
          className="mb-2 text-center text-sm font-bold tracking-widest text-blue-600"
        >
          よくある質問
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="mb-12 text-center font-serif text-2xl font-black text-slate-900 sm:text-3xl"
        >
          FAQ
        </motion.h2>

        <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeIn}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-slate-900 text-[10px] font-bold text-white">
                  Q
                </span>
                <span className="flex-1 text-sm font-bold text-slate-800">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 pl-[3.25rem] text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   10. FINAL CTA
   ────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="lp-line-cta-dark relative w-full overflow-hidden bg-slate-900 px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h2
          variants={fadeIn}
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 font-serif text-2xl font-black text-white sm:text-4xl"
        >
          「自分に合うAIツール」が
          <br />
          今日分かります。
        </motion.h2>

        <motion.p
          variants={fadeIn}
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 text-base leading-relaxed text-slate-200"
        >
          4問答えるだけで、あなたの仕事に本当に合ったAIツールと
          <br className="hidden sm:block" />
          すぐ使える攻略本PDFがLINEに届きます。
        </motion.p>

        <motion.div
          variants={fadeIn}
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {[
            { icon: <Check className="h-4 w-4" />, text: "完全無料" },
            { icon: <Shield className="h-4 w-4" />, text: "個人情報不要" },
            { icon: <Clock className="h-4 w-4" />, text: "所要時間1〜2分" },
            { icon: <Zap className="h-4 w-4" />, text: "すぐ結果が届く" },
          ].map((b) => (
            <span
              key={b.text}
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-300"
            >
              {b.icon}
              {b.text}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial={false}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <LineButton size="large" analyticsSource="lp_final_cta" />
          <p className="mt-5 text-xs text-slate-500">
            ※ブロック・登録解除はいつでも可能です
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────────── */
function LPFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white px-5 py-10 text-center">
      <p className="mb-2 text-xs font-bold tracking-wider text-slate-400">
        AIリブートアカデミー
      </p>
      <p className="text-[11px] text-slate-400">
        © 2026 AIリブートアカデミー　|　
        <a href="/privacy" className="underline hover:text-slate-600">
          プライバシーポリシー
        </a>
        　|　
        <a href="/terms" className="underline hover:text-slate-600">
          特定商取引法に基づく表記
        </a>
      </p>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   MAIN EXPORT
   ────────────────────────────────────────────── */
export default function LineDiagnosticLP() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <StepsSection />
      <QuestionsSection />
      <GiftSection />
      <ToolsSection />
      <NewsletterSection />
      <FAQSection />
      <FinalCTASection />
      <LPFooter />
    </div>
  );
}
