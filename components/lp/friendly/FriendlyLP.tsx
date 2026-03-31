"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Check,
  Shield,
  Zap,
  BookOpen,
  Sparkles,
  Users,
  FileText,
  Lightbulb,
  MessageCircle,
  ArrowDown,
} from "lucide-react";
import { useState } from "react";
import { LineCTA } from "../shared/LineCTA";
import s from "./FriendlyLP.module.css";

const SRC = "lp_friendly";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Deco bar under titles ── */
function TitleDeco() {
  return (
    <div className={s.titleDeco}>
      <span className={s.titleDecoLine} />
      <span className={s.titleDecoDot} />
      <span className={s.titleDecoLine} />
    </div>
  );
}

/* ══════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className={s.hero}>
      {/* Soft blobs */}
      <div
        className={s.heroBlob}
        style={{ top: "-10%", left: "-5%", width: 350, height: 350, background: "#cce0f5" }}
      />
      <div
        className={s.heroBlob}
        style={{ bottom: "5%", right: "-8%", width: 280, height: 280, background: "#fef3c7" }}
      />

      <motion.div variants={fade} initial="hidden" animate="visible" style={{ position: "relative", zIndex: 1 }}>
        <Image
          src="/images/lp/line-friendly/hero.png"
          alt="AIツール診断イメージ"
          width={720}
          height={720}
          className={s.heroIllust}
          priority
        />
      </motion.div>

      <motion.div variants={fade} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
        <span className={s.heroBadge}>
          <Zap style={{ width: 14, height: 14, color: "#e6a629" }} />
          完全無料 ／ 登録30秒 ／ 個人情報不要
        </span>
      </motion.div>

      <motion.h1
        variants={fade}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className={s.heroTitle}
      >
        あなたの仕事に合う
        <br />
        <span className={s.heroTitleAccent}>AIツールTOP3</span>を
        <br />
        無料で診断します
      </motion.h1>

      <motion.p variants={fade} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className={s.heroSub}>
        LINEで友だち追加して、かんたん4問に回答するだけ。
        <br />
        診断結果とAI攻略本PDFがすぐに届きます。
      </motion.p>

      <motion.div variants={fade} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
        <div className={s.bounceCta}>
          <LineCTA className={s.ctaBtnLg} analyticsSource={`${SRC}_hero`} />
        </div>
        <p className={s.ctaSafe}>
          <Shield style={{ width: 14, height: 14 }} />
          クレジットカード・メールアドレスの入力は不要です
        </p>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   2. PAIN POINTS
   ══════════════════════════════════════════════ */
function PainSection() {
  const pains = [
    { emoji: "😵‍💫", title: "ツール選びで迷子", desc: "ChatGPT、Claude、Gemini… 多すぎてどれを使えばいいか分からない" },
    { emoji: "😮‍💨", title: "仕事に活かせない", desc: "AIに触ってはみたけど、実務に落とし込めず結局放置している" },
    { emoji: "😰", title: "周りに置いていかれる…", desc: "同僚や競合がAIで成果を出し始めていて焦りを感じている" },
    { emoji: "🤔", title: "課金すべきか分からない", desc: "無料で十分？有料プラン？ どう判断すればいいか分からない" },
  ];

  return (
    <section className={s.sectionSky}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn}>Pain Points</span>
            <h2 className={s.sectionTitle}>
              こんなお悩み、
              <br />
              ありませんか？
            </h2>
            <TitleDeco />
          </motion.div>

          <div className={s.painGrid}>
            {pains.map((p) => (
              <motion.div key={p.title} variants={fade} className={s.painCard}>
                <div className={s.painEmoji}>{p.emoji}</div>
                <h3 className={s.painTitle}>{p.title}</h3>
                <p className={s.painDesc}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Illustration overlap */}
          <motion.div variants={fade} className={s.illustOverlap} style={{ marginTop: 32, marginBottom: 0 }}>
            <Image
              src="/images/lp/line-friendly/pain.png"
              alt="悩んでいるビジネスパーソン"
              width={600}
              height={600}
              className={s.illustOverlapImg}
            />
          </motion.div>

          <motion.div variants={fade} className={s.painBridge}>
            <p className={s.painBridgeText}>
              その悩みの原因は
              <br />
              <span className={s.sectionTitleAccent}>
                「自分に合ったツールを知らないだけ」
              </span>
              <br />
              かもしれません
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   3. SOLUTION
   ══════════════════════════════════════════════ */
function SolutionSection() {
  const items = [
    {
      num: 1,
      title: "あなた専用の診断結果",
      desc: "4問のアンケートに答えるだけで、職種・目的に最適化されたAIツールTOP3を自動で算出します。",
    },
    {
      num: 2,
      title: "攻略本PDFも同時にお届け",
      desc: "診断結果と合わせて、各ツールの初期設定からプロンプト集まで網羅した攻略本を無料でプレゼント。",
    },
    {
      num: 3,
      title: "2026年の最新情報に対応",
      desc: "GPT-5.2、Claude 4.5、Gemini 2.5など最新モデルを含む17種類以上から選定。随時アップデート中。",
    },
  ];

  return (
    <section className={s.section}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn}>Solution</span>
            <h2 className={s.sectionTitle}>
              職種 × 作業 × レベルから導く
              <br />
              あなた専用の
              <span className={s.sectionTitleAccent}>AIツールTOP3</span>
            </h2>
            <TitleDeco />
            <p className={s.sectionSub}>
              17種類以上の最新AIツールの中から、あなたの職種・困っている作業・経験レベルをもとに
              本当に役立つツール3つを厳選してご提案します。
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div variants={fade} style={{ margin: "32px auto 0", textAlign: "center" }}>
            <Image
              src="/images/lp/line-friendly/solution.png"
              alt="LINEで診断結果を受け取るイメージ"
              width={600}
              height={600}
              style={{ width: "100%", maxWidth: 280, height: "auto" }}
            />
          </motion.div>

          <div className={s.solStack}>
            {items.map((item) => (
              <motion.div key={item.num} variants={fade} className={s.solCard}>
                <div className={s.bigNum}>{item.num}</div>
                <div style={{ textAlign: "left" }}>
                  <h3 className={s.solTitle}>{item.title}</h3>
                  <p className={s.solDesc}>{item.desc}</p>
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
   4. STEPS
   ══════════════════════════════════════════════ */
function StepsSection() {
  const steps = [
    {
      label: "Step 1",
      title: "LINEで友だち追加",
      desc: "ボタンをタップしてAIリブートアカデミーの公式LINEを追加。登録は30秒で完了します。",
      icon: <MessageCircle style={{ width: 20, height: 20 }} />,
    },
    {
      label: "Step 2",
      title: "4問のアンケートに回答",
      desc: "職種・困っている作業・AI使用歴・予算の4問をタップで選ぶだけ。所要時間は約1分です。",
      icon: <FileText style={{ width: 20, height: 20 }} />,
    },
    {
      label: "Step 3",
      title: "診断結果 + 攻略本PDFを受取",
      desc: "あなた専用のAIツールTOP3と攻略本PDFがLINEに自動で届きます。",
      icon: <Sparkles style={{ width: 20, height: 20 }} />,
    },
  ];

  return (
    <section className={s.sectionCream}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn}>How it Works</span>
            <h2 className={s.sectionTitle}>
              かんたん
              <span className={s.sectionTitleAccent}>3ステップ</span>
              で完了
            </h2>
            <TitleDeco />
          </motion.div>

          <div className={s.stepFlow}>
            {steps.map((step, i) => (
              <motion.div key={step.label} variants={fade} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className={s.stepItem}>
                  <span className={s.stepLabel}>{step.label}</span>
                  <h3 className={s.stepTitle}>{step.title}</h3>
                  <p className={s.stepDesc}>{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className={s.stepArrow}>
                    <ArrowDown style={{ width: 28, height: 28 }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fade} style={{ marginTop: 36 }}>
            <LineCTA className={s.ctaBtn} analyticsSource={`${SRC}_steps`} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   5. QUESTIONS PREVIEW (Navy bg)
   ══════════════════════════════════════════════ */
function QuestionsSection() {
  const questions = [
    { num: "Q1", title: "あなたの職種に一番近いものは？", options: ["営業・マーケティング", "事務・バックオフィス", "エンジニア・IT・開発", "クリエイター・デザイナー"] },
    { num: "Q2", title: "今、一番時間がかかっている作業は？", options: ["文章作成・メール・資料づくり", "データ整理・分析・リサーチ", "画像やデザインの作成", "企画・アイデア出し"] },
    { num: "Q3", title: "今のAI活用レベルは？", options: ["ほとんど使ったことがない", "ChatGPTを少し触ったことがある", "日常的に使っているが活用しきれていない"] },
    { num: "Q4", title: "AIツールにかけられる月額予算は？", options: ["無料がいい（0円）", "月3,000円くらいまで", "月5,000〜10,000円"] },
  ];

  return (
    <section className={s.sectionNavy}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn} style={{ color: "rgba(255,255,255,0.4)" }}>
              Preview
            </span>
            <h2 className={s.sectionTitleWhite}>
              聞かれるのは
              <span style={{ color: "#e6a629" }}>この4問</span>
              だけ
            </h2>
            <p className={s.sectionSubWhite}>
              複雑な設問はありません。タップで選ぶだけの簡単なアンケートです。
            </p>
          </motion.div>

          <div className={s.qGrid} style={{ marginTop: 32 }}>
            {questions.map((q) => (
              <motion.div key={q.num} variants={fade} className={s.qCard}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                  <span className={s.qBadge}>{q.num}</span>
                </div>
                <h3 className={s.qTitle}>{q.title}</h3>
                <div>
                  {q.options.map((opt) => (
                    <div key={opt} className={s.qOption}>
                      <span className={s.qDot} />
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
   6. GIFT / BONUS
   ══════════════════════════════════════════════ */
function GiftSection() {
  const gifts = [
    { title: "初期設定ガイド", desc: "アカウント作成から日本語設定まで画像付きで丁寧に解説" },
    { title: "仕事別プロンプト集", desc: "コピペで使えるテンプレートを職種別に収録" },
    { title: "無料活用の裏ワザ", desc: "有料プランなしでも使い倒すコツをまとめて紹介" },
  ];

  return (
    <section className={s.section}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn}>Bonus</span>
            <h2 className={s.sectionTitle}>
              診断結果と一緒に
              <br />
              <span className={s.sectionTitleAccent}>攻略本PDF</span>
              をプレゼント
            </h2>
            <TitleDeco />
            <p className={s.sectionSub}>
              診断で選ばれたTOP3ツールの使い方を、初心者でもすぐ実践できるかたちでまとめました。
            </p>
          </motion.div>

          <div className={s.giftLayout}>
            <motion.div variants={fade}>
              <Image
                src="/images/lp/line-friendly/gift.png"
                alt="攻略本PDFイメージ"
                width={560}
                height={560}
                className={s.giftIllust}
              />
            </motion.div>
            <div className={s.giftContent}>
              {gifts.map((g) => (
                <motion.div key={g.title} variants={fade} className={s.giftItem}>
                  <div className={s.giftCheck}>
                    <Check style={{ width: 16, height: 16 }} />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <h3 className={s.giftTitle}>{g.title}</h3>
                    <p className={s.giftDesc}>{g.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fade} style={{ marginTop: 20 }}>
                <LineCTA
                  label="今すぐ無料診断を受ける"
                  className={s.ctaBtn}
                  analyticsSource={`${SRC}_gift`}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   7. TOOLS
   ══════════════════════════════════════════════ */
function ToolsSection() {
  const tools = [
    "ChatGPT", "Claude", "Gemini", "Perplexity AI", "Midjourney", "Canva AI",
    "Runway", "ElevenLabs", "GitHub Copilot", "Cursor", "DeepSeek", "Adobe Firefly",
    "Kling", "Sora",
  ];

  return (
    <section className={s.sectionSky}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn}>Supported Tools</span>
            <h2 className={s.sectionTitle}>
              <span className={s.sectionTitleAccent}>17種類以上</span>
              のAIツールから
              <br />
              最適な組み合わせを選定
            </h2>
            <TitleDeco />
          </motion.div>

          <motion.div variants={fade} className={s.tagWrap}>
            {tools.map((t) => (
              <span key={t} className={s.tag}>{t}</span>
            ))}
            <span className={s.tagAdd}>+ さらに追加中</span>
          </motion.div>

          <motion.p
            variants={fade}
            style={{
              marginTop: 20,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 600,
              color: "#1a315e",
            }}
          >
            <Check style={{ width: 16, height: 16 }} />
            2026年最新情報をもとに選定・随時アップデート
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   8. FAQ
   ══════════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    { q: "本当に無料ですか？", a: "はい、診断・攻略本PDFの受け取りまで完全無料です。クレジットカードの入力なども一切不要です。" },
    { q: "個人情報は必要ですか？", a: "LINE以外の個人情報（名前・メールアドレス等）の入力は不要です。アンケートは職種・悩み・レベル・予算の4問のみです。" },
    { q: "診断結果はどのくらいで届きますか？", a: "アンケート送信から数秒〜1分程度でLINEに自動送信されます。" },
    { q: "AI初心者でも大丈夫ですか？", a: "もちろんです。「まだAIをほとんど使ったことがない」方向けの診断結果・攻略本も用意しています。初期設定から丁寧に解説しています。" },
    { q: "LINEのブロックはいつでもできますか？", a: "はい、いつでも自由にブロック・友だち削除ができます。しつこい勧誘等は一切行いません。" },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className={s.sectionCream}>
      <div className={s.sectionInner}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          style={{ textAlign: "center" }}
        >
          <motion.div variants={fade}>
            <span className={s.sectionEn}>FAQ</span>
            <h2 className={s.sectionTitle}>よくある質問</h2>
            <TitleDeco />
          </motion.div>

          <div className={s.faqList}>
            {faqs.map((f, i) => (
              <motion.div key={i} variants={fade} className={s.faqItem}>
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className={s.faqBtn}>
                  <span className={s.qBadge}>Q</span>
                  <span className={s.faqQ}>{f.q}</span>
                  <ChevronDown
                    style={{ width: 18, height: 18 }}
                    className={openIdx === i ? s.faqChevronOpen : s.faqChevron}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIdx === i ? "auto" : 0, opacity: openIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p className={s.faqA}>{f.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   9. FINAL CTA
   ══════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section className={s.finalCta}>
      <div className={s.heroBlob} style={{ top: "10%", right: "-5%", width: 300, height: 300, background: "#cce0f5" }} />
      <div className={s.heroBlob} style={{ bottom: "10%", left: "-5%", width: 250, height: 250, background: "#fef3c7" }} />

      <div style={{ maxWidth: 620, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className={s.sectionEn}>Start Now</span>
          <h2 className={s.sectionTitle}>
            「自分に合うAIツール」が
            <br />
            <span className={s.sectionTitleAccent}>今日</span>分かります
          </h2>
          <TitleDeco />
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={s.sectionSub}
          style={{ marginBottom: 28 }}
        >
          4問答えるだけで、あなたの仕事に本当に合ったAIツールと
          すぐ使える攻略本PDFがLINEに届きます。
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 20px", marginBottom: 32 }}
        >
          {[
            { icon: <Check style={{ width: 15, height: 15 }} />, text: "完全無料" },
            { icon: <Shield style={{ width: 15, height: 15 }} />, text: "個人情報不要" },
            { icon: <Zap style={{ width: 15, height: 15 }} />, text: "所要時間1〜2分" },
          ].map((b) => (
            <span key={b.text} className={s.finalBadge}>
              {b.icon}
              {b.text}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className={s.bounceCta}>
          <LineCTA className={s.ctaBtnLg} analyticsSource={`${SRC}_final`} />
          <p style={{ marginTop: 14, fontSize: 12, color: "#6b7280" }}>
            ※ブロック・登録解除はいつでも可能です
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════ */
function LPFooter() {
  return (
    <footer className={s.footer}>
      <p className={s.footerBrand}>AIリブートアカデミー</p>
      <p className={s.footerLinks}>
        © 2026 AIリブートアカデミー　|　
        <a href="/privacy">プライバシーポリシー</a>　|　
        <a href="/terms">特定商取引法に基づく表記</a>
      </p>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   EXPORT
   ══════════════════════════════════════════════ */
export default function FriendlyLP() {
  return (
    <div className={s.wrapper}>
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <StepsSection />
      <QuestionsSection />
      <GiftSection />
      <ToolsSection />
      <FAQSection />
      <FinalCTASection />
      <LPFooter />
    </div>
  );
}
