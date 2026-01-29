"use client";

import { useEffect, useState } from "react";
import styles from "./AX1SpecialPage.module.css";
import { AX1EntryForm } from "../ax1-2/AX1EntryForm";

export default function AX1SpecialPage() {
    const [isNavScrolled, setIsNavScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.isVisible);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(`.${styles.revealTrigger}`).forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={styles.page}>
            {/* Texture Layer */}
            <div className={styles.textureOverlay} />

            {/* Navigation */}
            <nav className={`${styles.nav} ${isNavScrolled ? styles.navScrolled : styles.navTransparent}`}>
                <div className={styles.navContainer}>
                    <a href="#" className={styles.navLogo}>AX-1 Special</a>

                    <div className={styles.navLinks}>
                        <a href="#why-ceo" onClick={(e) => scrollToSection(e, "#why-ceo")} className={styles.navLink}>
                            なぜ経営者なのか
                        </a>
                        <a href="#program" onClick={(e) => scrollToSection(e, "#program")} className={styles.navLink}>
                            プログラム
                        </a>
                        <a href="#speakers" onClick={(e) => scrollToSection(e, "#speakers")} className={styles.navLink}>
                            登壇者
                        </a>
                        <a href="#details" onClick={(e) => scrollToSection(e, "#details")} className={styles.navLink}>
                            開催概要
                        </a>
                        <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.navEntryBtn}>
                            ENTRY
                        </a>
                    </div>

                    <button className={styles.navMobileMenuBtn} onClick={() => setIsMobileMenuOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroBlob1} />
                <div className={styles.heroBlob2} />

                <div className={styles.heroVerticalHook}>
                    <div className={styles.heroVerticalText}>
                        紹介者限定・特別プレビュー回。
                    </div>
                </div>

                <div className={styles.heroContent}>
                    <div className={`${styles.heroMain} ${styles.revealTrigger}`}>
                        <div className={styles.heroDate}>
                            <span className={styles.heroDateLine} />
                            2026.2.25 TUE
                        </div>

                        <h1 className={styles.heroTitle}>
                            <span style={{ display: "block" }}>経営者が</span>
                            <span style={{ display: "block" }} className={styles.heroTitleIndent}>自ら描く</span>
                            <span style={{ display: "block" }} className={styles.heroTitleAccent}>AI戦略の1日。</span>
                        </h1>

                        <div className={styles.heroSubCopy}>
                            <p className={styles.heroSubText}>
                                4月の正式スタートに先駆け、<br />
                                10名限定の特別回を開催します。<br />
                                <span className={styles.heroSubSmall}>
                                    このご案内をお送りした方、またはそのご紹介者様のみのクローズドなセッションです。
                                </span>
                            </p>
                        </div>

                        <div className={styles.heroCta}>
                            <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.btnPrimary}>
                                特別回にエントリーする
                            </a>
                            <div className={styles.heroScrollHint}>
                                <svg style={{ width: 16, height: 16, animation: "bounce 1s infinite" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                Details for Visionaries
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section 1: The Message */}
            <section id="why-ceo" className={`${styles.sectionMa} ${styles.whyCeoSection}`}>
                <div className={styles.whyCeoLine} />

                <div className={styles.containerReading} style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                    <h2 className={styles.whyCeoTitle}>
                        4月開講に先駆けた、<br />特別プレビュー回のご案内
                    </h2>

                    <div className={`${styles.whyCeoContent} ${styles.revealTrigger}`}>
                        <p>
                            中小・ベンチャー企業の経営者（CxO）向けに、AI活用と組織変革を考える1DAY研修「AX1」を4月から本格始動させます。
                        </p>
                        <p>
                            それに先立ち、10名限定（紹介者限定）で、特別回を実施することにしました。本回の一般公開はいたしません。
                        </p>
                        <p>
                            このご案内をしているあなたか、そのご紹介者のみを対象とさせていただきます。
                        </p>

                        <div className={styles.whyCeoHighlight}>
                            「役員との参加」を推奨しています。
                        </div>

                        <p>
                            経営を一緒に担う役員の方と一緒に参加されることを強くオススメしています。共通言語を持つことで、翌日からの変革スピードが劇的に変わるからです。
                        </p>

                        <div className={styles.whyCeoBox}>
                            モニター価格：2.5万円（一般 5万円）<br />
                            <span style={{ fontSize: "0.875rem", opacity: 0.8 }}>※研修後にお客さまの声を収録し、サイト等での公開をご快諾いただける方限定の価格です。</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Overview */}
            <section id="about" className={`${styles.sectionMa} ${styles.aboutSection}`}>
                <div className={styles.aboutDecoration} />

                <div className={styles.aboutContainer}>
                    <div className={styles.revealTrigger}>
                        <span className={styles.aboutBadge}>SPECIAL PREVIEW</span>
                        <h2 className={styles.aboutTitle}>AX-1とは</h2>
                        <div className={styles.aboutText}>
                            <p>
                                AX-1は、経営者のための1日集中型AI戦略セミナーです。
                            </p>
                            <p>
                                「AIをどう使うか」ではなく「AIを前提にどう経営をアップデートするか」を、実践的なワークを通して体得します。
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.aboutCards} ${styles.revealTrigger} ${styles.delay200}`}>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.aboutCardTitle}>経営者・CxO限定</h3>
                            <p className={styles.aboutCardText}>意思決定者が自らAIのポテンシャルを理解し、戦略を描けるようになるためのカリキュラムです。</p>
                        </div>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.aboutCardTitle}>思考の外部化・AI化</h3>
                            <p className={styles.aboutCardText}>経営者の脳内にあるナレッジをAIに学習させ、組織の資産として活用する手法を学びます。</p>
                        </div>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.aboutCardTitle}>10名限定の密な環境</h3>
                            <p className={styles.aboutCardText}>少人数だからこそ、個別の課題に深く切り込んだディスカッションが可能です。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Program */}
            <section id="program" className={`${styles.sectionMa} ${styles.programSection}`}>
                <div className={styles.programContainer}>
                    <div className={`${styles.programHeader} ${styles.revealTrigger}`}>
                        <h2 className={styles.programTitle}>1日の流れ</h2>
                        <p className={styles.programDesc}>10:00から19:00まで。濃密な1日をご用意しています。</p>
                    </div>

                    <div className={`${styles.timeline} ${styles.revealTrigger} ${styles.delay100}`}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTime}>
                                <span className={styles.timelineTimeMain}>10:00</span>
                                <div className={styles.timelineTimeSub}>- 13:00</div>
                            </div>
                            <div className={styles.timelineDot} />
                            <div>
                                <span className={styles.timelineLabel}>第1部</span>
                                <h3 className={styles.timelineTitle}>AX戦略と脳内言語化</h3>
                                <p className={styles.timelineDesc}>
                                    AI時代の経営フレームワーク。経営者の「想い」を引き出し、形式知化するワークを行います。
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTime}>
                                <span className={styles.timelineTimeMain}>14:00</span>
                                <div className={styles.timelineTimeSub}>- 17:00</div>
                            </div>
                            <div className={styles.timelineDot} />
                            <div>
                                <span className={styles.timelineLabel}>第2部</span>
                                <h3 className={styles.timelineTitle}>実践ワークショップ</h3>
                                <p className={styles.timelineDesc}>
                                    自社専用のカスタムAIをその場で構築。プログラミング不要で思考をプロダクト化します。
                                </p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTime}>
                                <span className={styles.timelineTimeMain}>17:00</span>
                                <div className={styles.timelineTimeSub}>- 18:00</div>
                            </div>
                            <div className={styles.timelineDot} />
                            <div>
                                <span className={styles.timelineLabel}>第3部</span>
                                <h3 className={styles.timelineTitle}>資金戦略と交流</h3>
                                <p className={styles.timelineDesc}>
                                    助成金活用シミュレーションと、参加者同士のネットワーキング。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Speakers */}
            <section id="speakers" className={`${styles.sectionMa} ${styles.speakersSection}`}>
                <div className={styles.speakersContainer}>
                    <h2 className={`${styles.speakersTitle} ${styles.revealTrigger}`}>講師陣</h2>
                    <div className={`${styles.speakersGrid} ${styles.revealTrigger} ${styles.delay100}`}>
                        <div className={styles.speakerCard}>
                            <div className={styles.speakerImage}>
                                <img src="/images/naruse.jpg" alt="成瀬 拓也" className={styles.speakerImg} />
                            </div>
                            <p className={styles.speakerRole}>AIリブートアカデミー主宰</p>
                            <h3 className={styles.speakerName}>成瀬 拓也</h3>
                        </div>

                        <div className={styles.speakerCard}>
                            <div className={styles.speakerImage}>
                                <img src="/images/iwamoto.jpg" alt="岩本 和也" className={styles.speakerImg} />
                            </div>
                            <p className={styles.speakerRole}>「AIのある暮らし」主宰</p>
                            <h3 className={styles.speakerName}>岩本 和也</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Details */}
            <section id="details" className={`${styles.sectionMa} ${styles.detailsSection}`}>
                <div className={styles.detailsContainer}>
                    <h2 className={`${styles.detailsTitle} ${styles.revealTrigger}`}>特別回 開催概要</h2>

                    <div className={`${styles.detailsCard} ${styles.revealTrigger} ${styles.delay100}`}>
                        <dl>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>日時</dt>
                                <dd className={styles.detailsValue}>2026年2月25日（水） 10:00 - 19:00</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>会場</dt>
                                <dd className={styles.detailsValue}>東京都内（参加確定者に別途ご連絡いたします）</dd>
                            </div>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>定員</dt>
                                <dd className={styles.detailsValue}>10名限定（完全招待・紹介制）</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>参加費</dt>
                                <dd className={styles.detailsValue}>
                                    一般：50,000円（税込）<br />
                                    モニター価格：25,000円（税込）<br />
                                    <span style={{ fontSize: "0.875rem", opacity: 0.7 }}>
                                        ※モニター価格適用には研修後のお客さまの声収録へのご協力が必要です。
                                    </span>
                                </dd>
                            </div>
                        </dl>
                        <div className={styles.detailsNote}>
                            <p>※ 定員になり次第、締め切らせていただきます。</p>
                            <p>※ 経営を一緒に担う役員の方との参加を強く推奨しております。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Entry */}
            <section id="entry" className={styles.entrySection}>
                <div className={styles.entryBg} />

                <div className={styles.entryContainer}>
                    <h2 className={`${styles.entryTitle} ${styles.revealTrigger}`}>
                        未来を創る経営者のために。
                    </h2>

                    <p className={`${styles.entryDesc} ${styles.revealTrigger} ${styles.delay100}`}>
                        本回は一般公開されないクローズドなセッションです。<br />
                        紹介者限定の特別な1日を、ぜひご活用ください。
                    </p>

                    <div className={`${styles.entryCard} ${styles.revealTrigger} ${styles.delay200}`}>
                        <p className={styles.entryCardDate}>2026年2月25日（水） 10:00 - 19:00</p>
                        <p className={styles.entryCardInfo}>紹介者限定 | 10名限定 | モニター価格 25,000円</p>
                        <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "var(--ax1-secondary)" }}>
                            プロモーションコードをお持ちの方は入力してください。
                        </p>
                    </div>

                    <div className={`${styles.revealTrigger} ${styles.delay300}`}>
                        <AX1EntryForm />
                    </div>
                </div>
            </section>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <button className={styles.mobileMenuClose} onClick={() => setIsMobileMenuOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 32, height: 32 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <a href="#why-ceo" onClick={(e) => scrollToSection(e, "#why-ceo")} className={styles.mobileMenuLink}>ご案内</a>
                <a href="#program" onClick={(e) => scrollToSection(e, "#program")} className={styles.mobileMenuLink}>プログラム</a>
                <a href="#speakers" onClick={(e) => scrollToSection(e, "#speakers")} className={styles.mobileMenuLink}>講師</a>
                <a href="#details" onClick={(e) => scrollToSection(e, "#details")} className={styles.mobileMenuLink}>開催概要</a>
                <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.mobileMenuBtn}>ENTRY</a>
            </div>
        </div>
    );
}
