"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./AX1Page.module.css";

export default function AX1Page() {
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
            <div className={styles.stickyNav}>
                <a href="#cta" className={styles.stickyBtn}>
                    エントリー（審査制）
                </a>
            </div>

            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.dateStamp}>
                    2026
                    <br />
                    02.18 (火)
                    <br />
                    東京開催
                </div>
                <div className={styles.heroSub}>
                    中小・ベンチャー経営者・幹部（CXO）限定 戦略ブリーフィング
                </div>
                <h1 className={styles.heroTitle}>AX-1</h1>
                <div className={styles.heroTagline}>
                    <span className={styles.accent}>DX</span>の時代は終わった。次は、<span className={styles.accent}>AX</span>だ。
                </div>
            </header>

            <main>
                {/* What is AX-1 Section */}
                <section className={styles.whatIsAx}>
                    {/* Big Typography Statement */}
                    <div className={styles.axStatement}>
                        <div className={`${styles.axEquation} ${styles.fadeUp}`}>
                            <div className={styles.eqRow}>
                                <span className={styles.eqTerm}>AX</span>
                                <span className={styles.eqEquals}>=</span>
                                <span className={styles.eqMeaning}>
                                    <span className={styles.eqMain}>AI Transformation</span>
                                    <span className={styles.eqSub}>DXの次。AIを前提としたビジネスモデルへの変革</span>
                                </span>
                            </div>
                            <div className={styles.eqRow}>
                                <span className={styles.eqTerm}>1</span>
                                <span className={styles.eqEquals}>=</span>
                                <span className={styles.eqMeaning}>
                                    <span className={styles.eqMain}>One Day + First Step</span>
                                    <span className={styles.eqSub}>1日完結。そしてAX変革への最初の一歩</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Why Now - Horizontal Facts */}
                    <div className={styles.whyNow}>
                        <div className={styles.container}>
                            <h3 className={`${styles.whyNowTitle} ${styles.fadeUp}`}>
                                なぜ、<span className={styles.accent}>今</span>なのか？
                            </h3>
                            
                            <div className={styles.factStrip}>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>4倍</span>
                                    <span className={styles.factText}>AI活用企業の生産性成長率</span>
                                </div>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>2%</span>
                                    <span className={styles.factText}>全社AI統合できている日本企業</span>
                                </div>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>56%</span>
                                    <span className={styles.factText}>AI投資の効果を得られていない</span>
                                </div>
                                <div className={`${styles.factItem} ${styles.fadeUp}`}>
                                    <span className={styles.factNum}>3.5倍</span>
                                    <span className={styles.factText}>戦略を持つ企業の成功率</span>
                                </div>
                            </div>

                            <p className={`${styles.whyNowMessage} ${styles.fadeUp}`}>
                                戦略なきAI投資は、<strong>56%が失敗</strong>する。
                                <br />
                                AX-1は、その「戦略」を1日で手に入れる場です。
                            </p>
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
                            これは「便利ツールの紹介会」ではない。
                            <br />
                            採用、マーケティング、そして
                            <span className={styles.underlineAccent}>
                                経営の意思決定そのものを再構築する
                            </span>
                            <br />
                            ビジネスモデル変革の戦略会議だ。
                        </p>

                        <div className={styles.problemList}>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>組織変革の不在</strong>
                                現場任せのAI導入は、個人の時短にしかならず、利益率に直結しない。
                            </div>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>意思決定の遅れ</strong>
                                競合他社は「AI前提」で事業を組み立てている。周回遅れの事実に気づいているか？
                            </div>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>言語化の壁</strong>
                                経営者の脳内にあるビジョンが、AI（そして社員）に伝わる言葉になっていない。
                            </div>
                            <div className={`${styles.problemItem} ${styles.fadeUp}`}>
                                <strong>人材の枯渇</strong>
                                右腕となる人材がいない。「やる人がいない」と嘆く前に、仕組みを変える必要がある。
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className={`${styles.solution} ${styles.container}`}>
                    <div className={styles.solutionContent}>
                        <p className={styles.solutionSub}>DX（デジタル化）の次は、</p>
                        <h2 className={`${styles.bigStatement} ${styles.fadeUp}`}>
                            <span className={styles.mark}>AX（AIトランスフォーメーション）</span>
                            だ。
                        </h2>
                        <p className={`${styles.fadeUp} ${styles.solutionDesc}`}>
                            たった1日で、御社のビジネスモデルを「AI前提」に書き換える。
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
                            <div className={styles.cardNum}>01</div>
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
                            <div className={styles.cardNum}>02</div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>即効性</span>
                                <h3>Google Gems (カスタムAI)</h3>
                                <p>
                                    プログラミング不要。Co-Pilot程度の知識でOK。
                                    <br />
                                    「SNS投稿」「日報分析」など、自社専用のAIボットをその場で作成し、持ち帰っていただきます。
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.fadeUp}`}>
                            <div className={styles.cardNum}>03</div>
                            <div className={styles.cardContent}>
                                <span className={styles.tag}>資金戦略</span>
                                <h3>助成金活用ガイド（最大75%補助）</h3>
                                <p>
                                    本セミナー後の人材育成・AI研修にかかる費用を大幅に圧縮。
                                    <br />
                                    「コスト」を理由に変革を諦めないための、具体的な資金調達プランを提示します。
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.card} ${styles.fadeUp}`}>
                            <div className={styles.cardNum}>04</div>
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
                        <div className={`${styles.speakerCard} ${styles.fadeUp}`}>
                            <div className={styles.speakerImage}>
                                <img src="/images/naruse.jpg" alt="成瀬 拓也" />
                            </div>
                            <div className={styles.speakerInfo}>
                                <h3 className={styles.speakerName}>成瀬 拓也</h3>
                                <p className={styles.speakerRole}>
                                    AIリブートアカデミー主宰 / ビジネスプロデューサー
                                </p>
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
                            </div>
                        </div>

                        <div className={`${styles.speakerCard} ${styles.fadeUp}`}>
                            <div className={`${styles.speakerImage} ${styles.speakerPlaceholder}`}>
                                <span>岩本</span>
                            </div>
                            <div className={styles.speakerInfo}>
                                <h3 className={styles.speakerName}>岩本 和也</h3>
                                <p className={styles.speakerRole}>
                                    「AIのある暮らし」主宰 / 映像クリエイター
                                </p>
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
                            本気で組織を変えたい経営者・決裁者のみを対象とします。
                            <br />
                            <strong>【営業禁止】</strong>{" "}
                            保険、不動産、投資等の勧誘目的での参加は固くお断りします。
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

                    <motion.a
                        href="#"
                        className={`${styles.radicalBtn} ${styles.fadeUp}`}
                        whileHover={{ scale: 0.98 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>戦略ブリーフィングにエントリーする</span>
                    </motion.a>

                    <p className={styles.ctaFooterText}>
                        この5万円はコストではありません。
                        <br />
                        あなたの会社がAI時代を生き抜くための、最も安い「投資」です。
                        <br />
                        席が埋まる前に、ご決断ください。
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>&copy; AX-1 Seminar Executive Committee. All rights reserved.</p>
            </footer>
        </div>
    );
}
