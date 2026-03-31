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
  MousePointer,
} from "lucide-react";
import { useState } from "react";
import { LineCTA } from "../shared/LineCTA";
import styles from "./DarkTechLP.module.css";

const LINE_SRC_PREFIX = "lp_dark";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ══════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Glow blobs */}
      <div
        className={styles.glowBlob}
        style={{
          top: "-20%",
          left: "20%",
          width: 500,
          height: 500,
          background: "rgba(0, 100, 220, 0.08)",
        }}
      />
      <div
        className={styles.glowBlob}
        style={{
          bottom: "-10%",
          right: "10%",
          width: 400,
          height: 400,
          background: "rgba(0, 251, 255, 0.05)",
        }}
      />

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
        <span className={styles.heroAccent}>AIツールTOP3</span>を、
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
      >
        <div className={styles.bounceCta}>
          <LineCTA
            className={styles.ctaButtonLarge}
            analyticsSource={`${LINE_SRC_PREFIX}_hero`}
          />
        </div>
        <p className={styles.safetyNote}>
          <Shield style={{ width: 14, height: 14 }} />
          クレジットカード・メールアドレスの入力は不要です
        </p>
      </motion.div>

      <div className={styles.heroScrollHint}>
        <span>SCROLL</span>
        <MousePointer style={{ width: 14, height: 14 }} />
      </div>
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
      <div className={styles.divider} />
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Pain Points</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              AIを「なんとなく」使っていませんか
            </motion.h2>

            <div className={styles.gridTwo}>
              {pains.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeIn}
                  className={styles.glassCard}
                >
                  <div className={styles.glassCardHorizontal}>
                    <div className={styles.iconBox}>{p.icon}</div>
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
              style={{
                marginTop: 48,
                maxWidth: 640,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(15px, 3.5vw, 18px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.6,
                }}
              >
                その悩みの原因は、
                <span className={styles.heroAccent}>
                  「自分に合ったツールを知らないだけ」
                </span>
                かもしれません。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   3. SOLUTION
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
    <>
      <div className={styles.divider} />
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Solution</span>
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
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeIn}
                  className={styles.glassCard}
                >
                  <div className={styles.glassCardHorizontal}>
                    <div className={styles.iconBox}>{item.icon}</div>
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
    </>
  );
}

/* ══════════════════════════════════════════════
   4. STEPS
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
      <div className={styles.divider} />
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Flow</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              3ステップで完了！
            </motion.h2>

            <div className={styles.gridThree}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeIn}
                  className={styles.stepCard}
                >
                  {i < steps.length - 1 && (
                    <div className={styles.flowArrow}>
                      <ArrowRight style={{ width: 22, height: 22 }} />
                    </div>
                  )}
                  <div className={styles.stepNumber}>{step.icon}</div>
                  <p className={styles.stepLabel}>STEP {step.num}</p>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} style={{ marginTop: 40 }}>
              <LineCTA
                className={styles.ctaButton}
                analyticsSource={`${LINE_SRC_PREFIX}_steps`}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════
   5. QUESTIONS PREVIEW
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
    <>
      <div className={styles.divider} />
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Preview</span>
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
                  className={styles.glassCard}
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
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "#00fbff",
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
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
    </>
  );
}

/* ══════════════════════════════════════════════
   6. GIFT
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
      <div className={styles.divider} />
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Bonus</span>
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
                      className={styles.glassCard}
                    >
                      <div className={styles.glassCardHorizontal}>
                        <div className={styles.iconBox}>{gift.icon}</div>
                        <div style={{ textAlign: "left" }}>
                          <h3 className={styles.cardTitle}>{gift.title}</h3>
                          <p className={styles.cardDesc}>{gift.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeIn} style={{ marginTop: 28 }}>
                  <LineCTA
                    label="今すぐ無料診断を受ける"
                    className={styles.ctaButton}
                    analyticsSource={`${LINE_SRC_PREFIX}_gift`}
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
   7. TOOLS
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
      <div className={styles.divider} />
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Tools</span>
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
                color: "#00fbff",
                fontWeight: 600,
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
   8. NEWSLETTER
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
      <div className={styles.divider} />
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>Newsletter</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className={styles.sectionTitle}>
              診断だけじゃない。
              <br />
              AI時代に必要な情報を定期配信。
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.sectionSubtitle}>
              友だち追加後も、忙しい社会人が「これだけ読めばOK」な
              AI活用ニュースを厳選してお届けします。
            </motion.p>

            <div className={styles.gridTwo} style={{ marginBottom: 40 }}>
              {feeds.map((feed) => (
                <motion.div
                  key={feed.title}
                  variants={fadeIn}
                  className={styles.glassCard}
                >
                  <div className={styles.glassCardHorizontal}>
                    <div className={styles.iconBox}>{feed.icon}</div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#00fbff",
                          marginBottom: 2,
                        }}
                      >
                        {feed.label}
                      </p>
                      <h3 className={styles.cardTitle}>{feed.title}</h3>
                      <p className={styles.cardDesc}>{feed.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn}>
              <LineCTA
                label="LINEを追加して最新情報を受け取る"
                className={styles.ctaButton}
                analyticsSource={`${LINE_SRC_PREFIX}_newsletter`}
              />
              <p
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#4a6080",
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
      <div className={styles.divider} />
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner} style={{ maxWidth: 700 }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            <motion.div variants={fadeIn}>
              <span className={styles.sectionLabel}>FAQ</span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className={styles.sectionTitle}
              style={{ marginBottom: 36 }}
            >
              よくある質問
            </motion.h2>

            <div>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={styles.faqItem}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
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
                    transition={{ duration: 0.25, ease: "easeInOut" }}
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
      <div className={styles.divider} />
      <section className={styles.finalCta}>
        <div
          className={styles.glowBlob}
          style={{
            top: "20%",
            left: "30%",
            width: 500,
            height: 500,
            background: "rgba(0, 100, 220, 0.06)",
          }}
        />

        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={styles.accentBar} />
          </motion.div>

          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.sectionTitle}
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
              color: "#8a9ab5",
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            4問答えるだけで、あなたの仕事に本当に合ったAIツールと
            <br />
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
              gap: "8px 24px",
              marginBottom: 36,
            }}
          >
            {[
              {
                icon: <Check style={{ width: 16, height: 16 }} />,
                text: "完全無料",
              },
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
              <span key={b.text} className={styles.finalCtaBadge}>
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
            <LineCTA
              className={styles.ctaButtonLarge}
              analyticsSource={`${LINE_SRC_PREFIX}_final_cta`}
            />
            <p style={{ marginTop: 16, fontSize: 12, color: "#4a6080" }}>
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
export default function DarkTechLP() {
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
