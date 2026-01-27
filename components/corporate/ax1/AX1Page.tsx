"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AX1Page.module.css";

import { AX1Hero } from "./AX1Hero";
import { AX1EntryForm } from "./AX1EntryForm";

export default function AX1Page() {
    const [expandedSpeakers, setExpandedSpeakers] = useState<Record<string, boolean>>({});

    const toggleSpeaker = (id: string) => {
        setExpandedSpeakers((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const [showStickyNav, setShowStickyNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 400px
            if (window.scrollY > 400) {
                setShowStickyNav(true);
            } else {
                setShowStickyNav(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Intersection Observer for fade-up animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll(`.${styles.fadeUp}`).forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.page}>
            {/* Sticky Navigation */}
            <AnimatePresence>
                {showStickyNav && (
                    <motion.div
                        className={styles.stickyNav}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="#cta" className={styles.stickyBtn}>
                            エントリー（審査制）
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <AX1Hero />

            <main>
                {/* Why Now Section */}
                <section className={styles.whatIsAx}>
                    {/* Why Now - Horizontal Facts */}
                    <div className={styles.whyNow}>
                        <div className={styles.container}>
                            <h3 className={`${styles.whyNowTitle} ${styles.fadeUp}`}>
                                なぜ、<span className={styles.accent}>今</span>なのか？
                            </h3>

                            <div className={styles.factStrip}>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>約4倍</span>
                                    <span className={styles.factText}>
                                        AI導入の影響が大きい“業界”の生産性成長率
                                        <span style={{ display: "block", fontSize: "0.85em", opacity: 0.7, marginTop: "0.2em" }}>（PwC分析）[1]</span>
                                    </span>
                                </div>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>2%</span>
                                    <span className={styles.factText}>
                                        日本で“期待を大きく上回る成果”を報告した企業
                                        <span style={{ display: "block", fontSize: "0.85em", opacity: 0.7, marginTop: "0.2em" }}>（PwC調査）[2]</span>
                                    </span>
                                </div>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>56%</span>
                                    <span className={styles.factText}>
                                        AI投資で“売上増・コスト減”のどちらも得られていない
                                        <span style={{ display: "block", fontSize: "0.85em", opacity: 0.7, marginTop: "0.2em" }}>（CEO調査）[3]</span>
                                    </span>
                                </div>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>3.5倍</span>
                                    <span className={styles.factText}>
                                        可視化された戦略を持つ組織がROIを得る確率
                                        <span style={{ display: "block", fontSize: "0.85em", opacity: 0.7, marginTop: "0.2em" }}>（Thomson Reuters調査）[4]</span>
                                    </span>
                                </div>
                            </div>

                            <div className={styles.leadContainer}>
                                <p className={`${styles.leadProblem} ${styles.fadeUp}`}>
                                    戦略なき<wbr />AI投資は、
                                    <span className={styles.leadNumber}>56%</span>が<wbr />
                                    <span className={styles.leadNegative}>成果</span>
                                    <span className={styles.leadNote}>（売上増・コスト減）</span>を<wbr />
                                    <span className={styles.leadNegative}>得られない</span>
                                    <sup className={styles.leadRef}>[3]</sup>。
                                </p>
                                <p className={`${styles.leadSolution} ${styles.fadeUp}`}>
                                    このセミナーは、<wbr />その「戦略」を<br className={styles.brSp} />
                                    <span className={styles.leadAccent}>1日で手に入れる場</span>です。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Section */}
                <section className={styles.problem}>
                    <div className={styles.container}>
                        <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
                            なぜ、現場にAIを
                            <br />
                            丸投げしてはいけないのか？
                        </h2>

                        <p className={`${styles.fadeUp} ${styles.problemIntro}`}>
                            単なる「便利ツールの紹介会」ではありません。
                            <br />
                            採用、マーケティング、そして
                            <span className={styles.underlineAccent}>
                                経営の意思決定そのものを見直す
                            </span>
                            <br />
                            ビジネスモデル変革のための戦略を考える場です。
                        </p>

                        <div className={styles.problemList}>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>組織変革の不在</strong>
                                現場任せのAI導入は、個人の時短にしかならず、利益率に直結しない。
                            </div>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>意思決定の遅れ</strong>
                                競合他社は「AI前提」で事業を組み立てています。この変化に対応した戦略が求められています。
                            </div>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>言語化の壁</strong>
                                経営者の脳内にあるビジョンが、AI（そして社員）に伝わる言葉になっていない。
                            </div>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>人材の枯渇</strong>
                                右腕となる人材がいない。人材確保と並行して、仕組みで解決することも有効な選択肢です。
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className={`${styles.solution} ${styles.container}`}>
                    <div className={styles.solutionContent}>
                        <h2 className={`${styles.bigStatement} ${styles.fadeUp}`}>
                            <span className={styles.mark}>このセミナーでできること</span>
                        </h2>
                        <p className={`${styles.fadeUp} ${styles.solutionDesc}`}>
                            1日で、御社を「AIを武器にした組織」へと変革するきっかけをつくります。
                            <br />
                            プログラミング不要のツール実装から、
                            <br />
                            組織を変えるための資金戦略（助成金）まで。
                            <br />
                            <br />
                            <strong>
                                経営者が「決断」するための材料を、すべて揃えました。
                            </strong>
                        </p>
                    </div>
                </section>

                {/* Deliverables Section */}
                <section className={`${styles.deliverables} ${styles.container}`}>
                    <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
                        セミナー受講で手に入る
                        <br />
                        4つの「経営資産」
                    </h2>

                    <div className={styles.cardGrid}>
                        <div className={`${styles.card} ${styles.fadeUp}`}>
                            <div className={styles.cardNum}>1</div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>可視化</span>
                                <h3>自社の現在地レポート & 言語化</h3>
                                <p>
                                    「AI活用200選チェック」と音声診断で、組織の遅れを数値化。
                                    <br />
                                    さらに、経営者の脳内を「アクティブリスニング」の手法で言語化し、AIへの指示（プロンプト）精度を劇的に高めます。
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.fadeUp}`}>
                            <div className={styles.cardNum}>2</div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>即効性</span>
                                <h3>Google Gems (カスタムAI)</h3>
                                <p>
                                    プログラミング不要。
                                    <br />
                                    「SNS投稿」「日報分析」など、自社専用のAIボットをその場で作成し、持ち帰っていただきます。
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.fadeUp}`}>
                            <div className={styles.cardNum}>3</div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>資金戦略</span>
                                <h3>
                                    人材開発支援助成金
                                    <div style={{ fontSize: "0.75em", fontWeight: "normal", marginTop: "0.5rem", lineHeight: "1.4" }}>
                                        要件により経費助成率 最大75%（中小企業等）<sup style={{ fontSize: "0.6em" }}>[5]</sup>
                                    </div>
                                </h3>
                                <p>
                                    本セミナー後の人材育成・AI研修にかかる費用を大幅に圧縮。
                                    <br />
                                    <span style={{ fontSize: "0.85em", opacity: 0.8 }}>※コース／企業規模／要件で助成率は変動</span>
                                    <br />
                                    「コスト」を理由に変革を諦めないための、具体的な資金調達プランを提示します。
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.fadeUp}`}>
                            <div className={styles.cardNum}>4</div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>継続性</span>
                                <h3>経営者コミュニティ & 個別戦略相談</h3>
                                <p>
                                    完全招待制・経営者限定Slackコミュニティへの1年間参加権。
                                    <br />
                                    さらに、後日「AI研修」や「人材紹介」を含めた組織導入の個別コンサルティング（60分）を優先案内。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Speakers Section */}
                <section className={`${styles.speakers} ${styles.container}`}>
                    <h2 className={`${styles.sectionTitle} ${styles.fadeUp}`}>
                        登壇者
                    </h2>

                    <div className={styles.speakerGrid}>
                        <div
                            className={`${styles.speakerCard} ${styles.fadeUp} ${styles.clickable}`}
                            onClick={() => toggleSpeaker("naruse")}
                        >
                            <div className={styles.speakerImage}>
                                <img src="/images/naruse.jpg" alt="成瀬 拓也" />
                            </div>
                            <div className={styles.speakerInfo}>
                                <h3 className={styles.speakerName}>成瀬 拓也</h3>
                                <p className={styles.speakerRole}>
                                    AIリブートアカデミー主宰 / ビジネスプロデューサー
                                </p>
                                <AnimatePresence initial={false}>
                                    {expandedSpeakers["naruse"] ? (
                                        <motion.div
                                            key="expanded-naruse"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <p className={styles.speakerCompany}>
                                                株式会社ウィルフォワード 代表取締役<br />
                                                株式会社Lively 共同創業者CSO<br />
                                                筑波大学 非常勤講師
                                            </p>
                                            <p className={styles.speakerBio}>
                                                経営者として複数の事業を創出しながら、経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰。ホラクラシー経営やティール組織など次世代の組織開発を実践し、「AI時代のキャリア戦略」を発信。
                                            </p>
                                            <div className={styles.speakerSocial}>
                                                <span className={styles.socialBadge}>X 13,000 followers</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="collapsed-naruse"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <p className={`${styles.speakerBio} ${styles.bioCollapsed}`}>
                                                経営者として複数の事業を創出しながら、経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰...
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span className={styles.expandHint}>
                                    {expandedSpeakers["naruse"] ? "閉じる" : "詳しく見る"}
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${styles.speakerCard} ${styles.fadeUp} ${styles.clickable}`}
                            onClick={() => toggleSpeaker("iwamoto")}
                        >
                            <div className={styles.speakerImage}>
                                <img src="/images/iwamoto.jpg" alt="岩本 和也" />
                            </div>
                            <div className={styles.speakerInfo}>
                                <h3 className={styles.speakerName}>岩本 和也</h3>
                                <p className={styles.speakerRole}>
                                    「AIのある暮らし」主宰 / 映像クリエイター
                                </p>
                                <AnimatePresence initial={false}>
                                    {expandedSpeakers["iwamoto"] ? (
                                        <motion.div
                                            key="expanded-iwamoto"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <p className={styles.speakerCompany}>
                                                AI×動画マーケティング総合研究所 主宰<br />
                                                学校法人 杉野学園 ドレスメーカー学院 特別講師
                                            </p>
                                            <p className={styles.speakerBio}>
                                                「しごとや暮らしに役立つ生成AI」をテーマに情報発信。毎週「週刊 AIのニュース」を発行、月1回「AIの勉強会」を開催。AI×動画マーケティングの実践者として、クリエイティブ分野でのAI活用を牽引。
                                            </p>
                                            <div className={styles.speakerSocial}>
                                                <span className={styles.socialBadge}>note 1,400 followers</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="collapsed-iwamoto"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <p className={`${styles.speakerBio} ${styles.bioCollapsed}`}>
                                                「しごとや暮らしに役立つ生成AI」をテーマに情報発信。毎週「週刊 AIのニュース」を発行...
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <span className={styles.expandHint}>
                                    {expandedSpeakers["iwamoto"] ? "閉じる" : "詳しく見る"}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Schedule Section */}
                <section className={styles.schedule}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>
                            無関心から、
                            <br />
                            当事者へ変える1日。
                        </h2>
                        <div className={styles.timeline}>
                            <div className={`${styles.timeSlot} ${styles.fadeUp}`}>
                                <span className={styles.timeLabel}>
                                    10:00 - 13:00 / 第1部：AX戦略と脳内言語化
                                </span>
                                <p>
                                    <strong>視座の転換</strong>
                                    <br />
                                    AIが変える未来予測と、経営者の「想い」を言語化するワーク。
                                    <br />
                                    なぜ「聴く力（アクティブリスニング）」がAI時代に必須なのかを解く。
                                </p>
                            </div>
                            <div className={`${styles.timeSlot} ${styles.fadeUp}`}>
                                <span className={styles.timeLabel}>
                                    14:00 - 17:00 / 第2部：実践ワークショップ
                                </span>
                                <p>
                                    <strong>Google Gems 実装 & 自己診断</strong>
                                    <br />
                                    手を動かし、「自分でもできる」という成功体験を作る。
                                    <br />
                                    同時にチェックシートで自社の課題（痛み）を可視化する。
                                </p>
                            </div>
                            <div className={`${styles.timeSlot} ${styles.fadeUp}`}>
                                <span className={styles.timeLabel}>
                                    17:00 - 18:00 / 第3部：資金戦略とネットワーキング
                                </span>
                                <p>
                                    <strong>実装プラン策定</strong>
                                    <br />
                                    助成金活用シミュレーションと、参加者同士の交流。
                                    <br />
                                    「孤独な経営者」から「同志」へと関係を変える。
                                </p>
                            </div>
                            <div className={`${styles.timeSlot} ${styles.fadeUp}`}>
                                <span className={styles.timeLabel}>
                                    18:00 - 19:00 / クロージング
                                </span>
                                <p>
                                    <strong>変革へのコミットメント</strong>
                                    <br />
                                    コミュニティ（Slack）への招待と、次のステップ（個別相談）への案内。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="cta" className={`${styles.ctaSection} ${styles.container}`}>
                    <div className={`${styles.warningBox} ${styles.fadeUp}`}>
                        <h3>参加条件・注意事項</h3>
                        <p>
                            <strong>【審査制】</strong>{" "}
                            経営者・決裁者の方を対象としています。審査の上、ご参加いただけます。
                            <br />
                            <strong>【営業禁止】</strong>{" "}
                            保険、不動産、投資等の勧誘目的での参加はご遠慮ください。
                            <br />
                            <strong>【スキル】</strong>{" "}
                            プログラミング知識は不要です。PCをご持参ください。
                        </p>
                    </div>

                    <div className={`${styles.fadeUp} ${styles.eventDetails}`}>
                        <p>
                            <strong>開催日：</strong> 2026年2月18日（火）
                        </p>
                        <p>
                            <strong>時間：</strong> 10:00 - 19:00（開場 9:45）
                        </p>
                        <p>
                            <strong>会場：</strong> 東京都内（参加確定者に通知）
                        </p>
                        <p>
                            <strong>定員：</strong> 限定20名
                        </p>
                        <hr className={styles.divider} />
                        <p className={styles.priceLabel}>参加費（税込）</p>
                        <span className={styles.priceTag}>¥50,000</span>
                        <p className={styles.priceNote}>
                            ※完全招待制・経営者限定Slackコミュニティ1年間参加権
                            <br />
                            ※助成金申請ガイド、書籍データ込み
                        </p>
                    </div>

                    <br />

                    {/* Entry Form */}
                    <div className={styles.fadeUp}>
                        <AX1EntryForm />
                    </div>

                    <p className={styles.ctaFooterText}>
                        経営判断に必要な知識と、すぐに活用できるツールを
                        <br />
                        1日で持ち帰れるプログラムです。
                        <br />
                        ご参加をお待ちしております。
                    </p>
                </section>
                {/* Data Sources Section */}
                <section className={styles.container} style={{ padding: "3rem 20px", borderTop: "1px solid var(--c-border)", fontSize: "0.8rem", color: "var(--c-sub)" }}>
                    <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "var(--c-ink)" }}>データ出典</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div>
                            [1] PwC「2025年グローバル AIジョブバロメーター」<br />
                            <a href="https://www.pwc.com/jp/ja/knowledge/thoughtleadership/ai-jobs-barometer.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                                https://www.pwc.com/jp/ja/knowledge/thoughtleadership/ai-jobs-barometer.html
                            </a>
                        </div>
                        <div>
                            [2] PwC Japan「生成AIに関する実態調査 2025春（5カ国比較）」<br />
                            <a href="https://www.pwc.com/jp/ja/knowledge/thoughtleadership/2025/assets/pdf/generative-ai-survey2025.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                                https://www.pwc.com/jp/ja/knowledge/thoughtleadership/2025/assets/pdf/generative-ai-survey2025.pdf
                            </a>
                        </div>
                        <div>
                            [3] PwC「29th Global CEO Survey（2026）」<br />
                            <a href="https://www.pwc.com/gx/en/ceo-survey/2026/pwc-ceo-survey-2026.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                                https://www.pwc.com/gx/en/ceo-survey/2026/pwc-ceo-survey-2026.pdf
                            </a>
                        </div>
                        <div>
                            [4] Thomson Reuters「Future of Professionals Report 2025」<br />
                            <span style={{ opacity: 0.8 }}>※調査は主にプロフェッショナル領域の文脈</span><br />
                            <a href="https://www.thomsonreuters.com/content/dam/ewp-m/documents/thomsonreuters/en/pdf/reports/future-of-professionals-report-2025.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                                https://www.thomsonreuters.com/content/dam/ewp-m/documents/thomsonreuters/en/pdf/reports/future-of-professionals-report-2025.pdf
                            </a>
                        </div>
                        <div>
                            [5] 厚労省「人材開発支援助成金」資料<br />
                            <a href="https://www.mhlw.go.jp/content/11800000/001514280.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>
                                https://www.mhlw.go.jp/content/11800000/001514280.pdf
                            </a>
                        </div>
                    </div>
                </section>

            </main>


        </div>
    );
}
