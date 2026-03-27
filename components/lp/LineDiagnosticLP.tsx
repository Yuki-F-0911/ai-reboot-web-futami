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
  Star,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import styles from "./LineDiagnosticLP.module.css";

const LINE_URL = "https://bexn9pao.autosns.app/line?src=lp_line_diagnostic";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── LINE Icon SVG ── */
function LineIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 5.92 2 10.72c0 3.3 2.1 6.18 5.22 7.8-.22.82-.8 2.98-.92 3.44-.15.57.21.56.44.41.18-.11 2.86-1.9 4.02-2.68.38.05.77.08 1.17.08 5.52 0 10-3.92 10-8.72C22 5.92 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── CTA Button ── */
function LineButton({
  label = "LINEに追加して無料診断を受ける",
  size = "default",
  analyticsSource = "lp_line_diagnostic",
  variant = "green",
}: {
  label?: string;
  size?: "default" | "large";
  analyticsSource?: string;
  variant?: "green" | "dark";
}) {
  const className =
    variant === "dark"
      ? size === "large"
        ? styles.ctaButtonDark + " " + styles.ctaButtonLarge
        : styles.ctaButtonDark
      : size === "large"
        ? styles.ctaButtonLarge
        : styles.ctaButton;

  return (
    <motion.a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent.lineRegisterClick(analyticsSource)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      <LineIcon />
      <span>{label}</span>
      <ArrowRight style={{ width: 16, height: 16, opacity: 0.6 }} />
    </motion.a>
  );
}

/* ── Checkerboard divider ── */
function CheckerPink() {
  return <div className={styles.checkerboardPink} />;
}
function CheckerCyan() {
  return <div className={styles.checkerboardCyan} />;
}

/* ══════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Decorative crosses */}
      <span className={styles.decoCross} style={{ top: "12%", left: "6%" }}>
        +
      </span>
      <span className={styles.decoCross} style={{ top: "20%", right: "8%" }}>
        +
      </span>
      <span
        className={styles.decoCross}
        style={{ bottom: "18%", left: "14%" }}
      >
        +
      </span>
      <Star
        className={styles.decoStarPink}
        style={{ top: "8%", right: "15%", width: 36, height: 36 }}
      />
      <Star
        className={styles.decoStarCyan}
        style={{ bottom: "12%", right: "6%", width: 28, height: 28 }}
      />

      <div className={styles.heroInner}>
        {/* Left text column */}
        <div style={{ flex: 1 }}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ marginBottom: 20 }}
          >
            <span className={styles.heroBadge}>
              <Zap style={{ width: 14, height: 14 }} />
              完全無料 ／ 登録30秒 ／ 個人情報不要
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className={styles.heroTitle}
          >
            あなたの仕事に合う
            <br />
            <span className={styles.heroTitleAccentPink}>AIツール</span>
            <span className={styles.heroTitleAccentCyan}>TOP3</span>を、
            <br />
            無料で診断します。
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className={styles.heroSubtitle}
          >
            LINEで友だち追加 → 4問に答えるだけ。
            <br />
            診断結果と攻略本PDFがすぐ届きます。
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            style={{ marginTop: 28 }}
          >
            <div className={styles.bounceCta}>
              <LineButton size="large" analyticsSource="lp_hero" />
            </div>
            <p className={styles.safetyNote}>
              <Shield style={{ width: 14, height: 14 }} />
              クレジットカード・メールアドレスの入力は不要です
            </p>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/images/lp/line-diagnostic/hero-popart.png"
            alt="AIツールに囲まれたビジネスパーソンのポップアートイラスト"
            width={1200}
            height={900}
            className={styles.heroImage}
            priority
          />
        </motion.div>
      </div>

      <CheckerPink />
    </section>
  );
}

/* ══════════════════════════════════════════════
   2. PAIN POINTS
   ══════════════════════════════════════════════ */
function PainSection() {
  const pains = [
    {
      icon: <Target style={{ width: 24, height: 24 }} />,
      title: "ツール選びで迷子",
      desc: "ChatGPT、Claude、Gemini… 種類が多すぎてどれを使えばいいか分からない",
    },
    {
      icon: <Briefcase style={{ width: 24, height: 24 }} />,
      title: "仕事に活かせない",
      desc: "AIを触ってはみたが、実務でどう使えばいいか分からず放置している",
    },
    {
      icon: <TrendingUp style={{ width: 24, height: 24 }} />,
      title: "周りに置いていかれる不安",
      desc: "同僚や競合がAIで成果を出し始めていて、焦りを感じている",
    },
    {
      icon: <BarChart3 style={{ width: 24, height: 24 }} />,
      title: "有料プランの判断がつかない",
      desc: "無料で十分なのか、課金すべきなのか、判断材料がない",
    },
  ];

  return (
    <>
      <section className={`${styles.sectionWhite} ${styles.halftone}`}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>こんなお悩みはありませんか？</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              AIを「なんとなく」使っていませんか
            </motion.h2>

            <div className={styles.gridTwo}>
              {pains.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeIn}
                  className={styles.popCard}
                >
                  <div className={styles.cardHorizontal}>
                    <div className={styles.iconBoxPink}>{p.icon}</div>
                    <div style={{ textAlign: "left" }}>
                      <h3 className={styles.cardTitle}>{p.title}</h3>
                      <p className={styles.cardDesc}>{p.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn}
              className={styles.giftBanner}
              style={{ marginTop: 40, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}
            >
              <p
                style={{
                  fontSize: "clamp(15px, 3.5vw, 18px)",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  lineHeight: 1.6,
                }}
              >
                その悩みの原因は、
                <span className={styles.heroTitleAccentPink}>
                  「自分に合ったツールを知らないだけ」
                </span>
                かもしれません。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <CheckerCyan />
    </>
  );
}

/* ══════════════════════════════════════════════
   3. SOLUTION — What you get
   ══════════════════════════════════════════════ */
function SolutionSection() {
  const items = [
    {
      icon: <Users style={{ width: 22, height: 22 }} />,
      title: "あなた専用の診断結果",
      desc: "4問のアンケートに答えるだけで、職種・目的に最適化されたAIツールTOP3を自動算出。",
    },
    {
      icon: <FileText style={{ width: 22, height: 22 }} />,
      title: "攻略本PDFも同時に届く",
      desc: "診断結果と合わせて、各ツールの初期設定からプロンプト集まで網羅した攻略本を無料で配布。",
    },
    {
      icon: <Lightbulb style={{ width: 22, height: 22 }} />,
      title: "2026年最新情報に対応",
      desc: "GPT-5.2、Claude 4.5、Gemini 2.5など最新モデルを含む17種類以上から選定。随時更新中。",
    },
  ];

  return (
    <section className={styles.sectionCyan}>
      <Star
        className={styles.decoStarCyan}
        style={{ top: "8%", left: "5%", width: 32, height: 32 }}
      />
      <div className={styles.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fadeIn}>
            <span className={styles.sectionLabelCyan}>
              AIリブートアカデミーの無料診断
            </span>
          </motion.div>
          <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
            職種×作業×レベルから導く
            <br />
            あなた専用のAIツールTOP3
          </motion.h2>
          <motion.p variants={fadeIn} className={styles.sectionSubtitle}>
            17種類以上の最新AIツールの中から、あなたの職種・困っている作業・経験レベルをもとに、
            本当に役立つツール3つを厳選してご提案します。
          </motion.p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {items.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className={styles.popCardCyan}
              >
                <div className={styles.cardHorizontal}>
                  <div className={styles.iconBoxCyan}>{item.icon}</div>
                  <div style={{ textAlign: "left" }}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   4. STEPS — 3-step flow
   ══════════════════════════════════════════════ */
function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "LINEで友だち追加",
      desc: "ボタンをタップしてAIリブートアカデミーの公式LINEを追加。費用は一切かかりません。",
      icon: <MessageCircle style={{ width: 24, height: 24 }} />,
    },
    {
      num: "02",
      title: "4問のアンケートに回答",
      desc: "職種・困っている作業・AI使用歴・予算の4問だけ。所要時間は約1分です。",
      icon: <FileText style={{ width: 24, height: 24 }} />,
    },
    {
      num: "03",
      title: "診断結果＋PDFを受取",
      desc: "あなた専用のTOP3とツール攻略本PDFがLINEに自動送信されます。",
      icon: <Zap style={{ width: 24, height: 24 }} />,
    },
  ];

  return (
    <>
      <CheckerPink />
      <section className={`${styles.sectionPink} ${styles.halftone}`}>
        <Star
          className={styles.decoStarPink}
          style={{ top: "10%", right: "8%", width: 40, height: 40 }}
        />
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>ご利用の流れ</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              3ステップで完了！
            </motion.h2>

            <div className={styles.gridThree}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeIn}
                  className={styles.popCard}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  {i < steps.length - 1 && (
                    <div className={styles.flowArrow}>
                      <ArrowRight style={{ width: 22, height: 22 }} />
                    </div>
                  )}
                  <div className={styles.stepNumber}>{step.icon}</div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      color: "#e91e78",
                      marginBottom: 4,
                    }}
                  >
                    STEP {step.num}
                  </p>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn}
              style={{ marginTop: 36 }}
            >
              <LineButton analyticsSource="lp_steps" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <CheckerCyan />
    </>
  );
}

/* ══════════════════════════════════════════════
   5. QUESTIONS — Preview the 4 questions
   ══════════════════════════════════════════════ */
function QuestionsSection() {
  const questions = [
    {
      num: "Q1",
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
      num: "Q2",
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
      num: "Q3",
      label: "レベル",
      title: "今のAI活用レベルは？",
      options: [
        "ほとんど使ったことがない",
        "ChatGPTを少し触ったことがある",
        "日常的に使っているが活用しきれていない",
      ],
    },
    {
      num: "Q4",
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
    <section className={styles.sectionWhite}>
      <div className={styles.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fadeIn}>
            <span className={styles.sectionLabel}>診断内容</span>
          </motion.div>
          <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
            聞かれるのはこの4問だけ
          </motion.h2>
          <motion.p variants={fadeIn} className={styles.sectionSubtitle}>
            複雑な設問はありません。タップで選ぶだけの簡単なアンケートです。
          </motion.p>

          <div className={styles.gridTwo}>
            {questions.map((q) => (
              <motion.div
                key={q.num}
                variants={fadeIn}
                className={styles.popCardCyan}
                style={{ textAlign: "left" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 14,
                  }}
                >
                  <span className={styles.questionBadge}>{q.num}</span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      color: "#00838f",
                    }}
                  >
                    {q.label}
                  </span>
                </div>
                <h3
                  className={styles.cardTitle}
                  style={{ marginBottom: 12 }}
                >
                  {q.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {q.options.map((opt) => (
                    <div key={opt} className={styles.optionPill}>
                      <span className={styles.optionDot} />
                      {opt}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   6. GIFT — PDF guides
   ══════════════════════════════════════════════ */
function GiftSection() {
  const gifts = [
    {
      icon: <BookOpen style={{ width: 22, height: 22 }} />,
      title: "初期設定ガイド",
      desc: "アカウント作成から日本語設定まで画像付きで解説",
    },
    {
      icon: <MessageCircle style={{ width: 22, height: 22 }} />,
      title: "仕事別プロンプト集",
      desc: "コピペして使えるテンプレートを職種別に収録",
    },
    {
      icon: <Sparkles style={{ width: 22, height: 22 }} />,
      title: "無料活用の裏ワザ",
      desc: "有料プランなしでも使い倒すコツをまとめて紹介",
    },
  ];

  return (
    <>
      <CheckerPink />
      <section className={`${styles.sectionPink} ${styles.halftone}`}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>特典</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              診断結果と一緒に
              <br />
              攻略本PDFをプレゼント！
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.sectionSubtitle}>
              診断で選ばれたTOP3ツールの使い方を、初心者でもすぐ実践できる形でまとめました。
            </motion.p>

            <div className={styles.giftLayout}>
              <motion.div variants={fadeIn}>
                <Image
                  src="/images/lp/line-diagnostic/guides-popart.png"
                  alt="攻略本PDFイメージ"
                  width={800}
                  height={450}
                  className={styles.giftImage}
                />
              </motion.div>

              <div className={styles.giftContent}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {gifts.map((gift) => (
                    <motion.div
                      key={gift.title}
                      variants={fadeIn}
                      className={styles.popCard}
                    >
                      <div className={styles.cardHorizontal}>
                        <div className={styles.iconBoxPink}>{gift.icon}</div>
                        <div style={{ textAlign: "left" }}>
                          <h3 className={styles.cardTitle}>{gift.title}</h3>
                          <p className={styles.cardDesc}>{gift.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeIn}
                  style={{ marginTop: 24 }}
                >
                  <LineButton
                    label="今すぐ無料診断を受ける"
                    analyticsSource="lp_gift"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   7. TOOLS — Pill grid
   ══════════════════════════════════════════════ */
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
    <>
      <CheckerCyan />
      <section className={styles.sectionCyan}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabelCyan}>対応ツール</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              17種類以上のAIツールから
              <br />
              最適な組み合わせを選定
            </motion.h2>

            <motion.div
              variants={fadeIn}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 10,
                marginBottom: 28,
              }}
            >
              {tools.map((tool) => (
                <span key={tool} className={styles.pillTag}>
                  {tool}
                </span>
              ))}
              <span className={styles.pillTagAdd}>+ さらに追加中</span>
            </motion.div>

            <motion.p
              variants={fadeIn}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                color: "#00838f",
                fontWeight: 700,
              }}
            >
              <Check style={{ width: 16, height: 16 }} />
              2026年最新情報をもとに選定・随時アップデート
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   8. NEWSLETTER — LINE delivery content
   ══════════════════════════════════════════════ */
function NewsletterSection() {
  const feeds = [
    {
      icon: <Zap style={{ width: 22, height: 22 }} />,
      label: "週1配信",
      title: "最新AI情報",
      desc: "話題の新モデル・新ツールを速報。知らないと損するレベルの情報だけを厳選。",
    },
    {
      icon: <Lightbulb style={{ width: 22, height: 22 }} />,
      label: "実践Tips",
      title: "すぐ使えるワザ",
      desc: "「今日の業務で試せる」AIプロンプトや時短テクを具体例つきで紹介。",
    },
    {
      icon: <BarChart3 style={{ width: 22, height: 22 }} />,
      label: "業界別",
      title: "AI活用事例",
      desc: "営業・事務・クリエイターなど職種ごとの活用事例を配信。",
    },
    {
      icon: <Users style={{ width: 22, height: 22 }} />,
      label: "キャリア",
      title: "AI時代の働き方",
      desc: "AIを活かして差をつけるビジネスパーソンの生存戦略を考える。",
    },
  ];

  return (
    <>
      <CheckerPink />
      <section className={styles.sectionDark}>
        <Star
          className={styles.decoStarPink}
          style={{
            top: "6%",
            right: "10%",
            width: 36,
            height: 36,
            opacity: 0.15,
          }}
        />
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabelDark}>LINE配信コンテンツ</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitleWhite}>
              診断だけじゃない。
              <br />
              AI時代に必要な情報を定期配信。
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.sectionSubtitleDark}>
              友だち追加後も、忙しい社会人が「これだけ読めばOK」な
              AI活用ニュースを厳選してお届けします。
            </motion.p>

            <div className={styles.gridTwo} style={{ marginBottom: 36 }}>
              {feeds.map((feed) => (
                <motion.div
                  key={feed.title}
                  variants={fadeIn}
                  className={styles.popCardDark}
                >
                  <div className={styles.cardHorizontal}>
                    <div
                      className={styles.iconBox}
                      style={{
                        background: "rgba(255,182,193,0.15)",
                        borderColor: "rgba(255,182,193,0.3)",
                        color: "#ffb6c1",
                      }}
                    >
                      {feed.icon}
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#ffb6c1",
                          marginBottom: 2,
                        }}
                      >
                        {feed.label}
                      </p>
                      <h3
                        className={styles.cardTitle}
                        style={{ color: "#fff" }}
                      >
                        {feed.title}
                      </h3>
                      <p className={styles.cardDescDark}>{feed.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn}>
              <LineButton
                label="LINEを追加して最新情報を受け取る"
                analyticsSource="lp_newsletter"
              />
              <p
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#777",
                }}
              >
                配信頻度は週1〜2回程度 · いつでもブロック解除できます
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   9. FAQ
   ══════════════════════════════════════════════ */
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
    <>
      <CheckerCyan />
      <section className={styles.sectionCyan}>
        <div className={styles.sectionInner} style={{ maxWidth: 680 }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabelCyan}>よくある質問</span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className={styles.sectionTitle}
              style={{ marginBottom: 32 }}
            >
              FAQ
            </motion.h2>

            <div>
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={fadeIn} className={styles.faqItem}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className={styles.faqButton}
                  >
                    <span className={styles.questionBadge}>Q</span>
                    <span className={styles.faqQuestion}>{faq.q}</span>
                    <ChevronDown
                      style={{ width: 18, height: 18 }}
                      className={
                        openIndex === i
                          ? styles.faqChevronOpen
                          : styles.faqChevron
                      }
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === i ? "auto" : 0,
                      opacity: openIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className={styles.faqAnswer}>{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   10. FINAL CTA
   ══════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <>
      <CheckerPink />
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 50%, #1a2a3a 100%)",
          color: "#f0f0f0",
          padding: "64px 20px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blurs */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "30%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,182,193,0.08)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "20%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(128,222,234,0.08)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.sectionTitleWhite}
          >
            「自分に合うAIツール」が
            <br />
            今日分かります。
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontSize: 16,
              color: "#ccc",
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            4問答えるだけで、あなたの仕事に本当に合ったAIツールと
            <br className="hidden sm:block" />
            すぐ使える攻略本PDFがLINEに届きます。
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px 20px",
              marginBottom: 28,
            }}
          >
            {[
              { icon: <Check style={{ width: 16, height: 16 }} />, text: "完全無料" },
              {
                icon: <Shield style={{ width: 16, height: 16 }} />,
                text: "個人情報不要",
              },
              {
                icon: <Clock style={{ width: 16, height: 16 }} />,
                text: "所要時間1〜2分",
              },
              {
                icon: <Zap style={{ width: 16, height: 16 }} />,
                text: "すぐ結果が届く",
              },
            ].map((b) => (
              <span
                key={b.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#ffb6c1",
                }}
              >
                {b.icon}
                {b.text}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.bounceCta}
          >
            <LineButton size="large" analyticsSource="lp_final_cta" />
            <p style={{ marginTop: 16, fontSize: 12, color: "#777" }}>
              ※ブロック・登録解除はいつでも可能です
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════ */
function LPFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerBrand}>AIリブートアカデミー</p>
      <p className={styles.footerLinks}>
        © 2026 AIリブートアカデミー　|　
        <a href="/privacy">プライバシーポリシー</a>
        　|　
        <a href="/terms">特定商取引法に基づく表記</a>
      </p>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   EXPORT
   ══════════════════════════════════════════════ */
export default function LineDiagnosticLP() {
  return (
    <div className={styles.wrapper}>
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
