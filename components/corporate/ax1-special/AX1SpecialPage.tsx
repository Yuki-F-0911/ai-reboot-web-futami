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
                            2026.2.25 WED
                        </div>

                        <h1 className={styles.heroTitle}>
                            <span style={{ display: "block" }}>社員ではなく、</span>
                            <span style={{ display: "block" }} className={styles.heroTitleIndent}>あなた自身が</span>
                            <span style={{ display: "block" }} className={styles.heroTitleAccent}>AIを学ぶ理由。</span>
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

                    <div className={`${styles.heroVisual} ${styles.revealTrigger} ${styles.delay200}`}>
                        <div className={styles.heroEnso}>
                            <div className={styles.heroEnsoGradient} />
                            <div className={styles.heroEnsoLine1} />
                            <div className={styles.heroEnsoLine2} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Section 1: The Letter (Philosophy) */}
            <section id="why-ceo" className={`${styles.sectionMa} ${styles.whyCeoSection}`}>
                <div className={styles.whyCeoLine} />

                <div className={styles.containerReading} style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                    <h2 className={styles.whyCeoTitle}>
                        なぜ、経営者自身が<br />AIを学ぶ必要があるのか
                    </h2>

                    <div className={`${styles.whyCeoContent} ${styles.revealTrigger}`}>
                        <p style={{ color: "var(--ax1-secondary)", fontWeight: "700", textAlign: "center", marginBottom: "2rem" }}>
                            【4月開講に先駆けた、10名限定特別プレビュー回のご案内】
                        </p>
                        <p>
                            「AIは社員に任せておけばいい」<br />
                            そう考えている経営者の方は、少なくないと思います。
                        </p>
                        <p>
                            実際、社員がAIを活用して業務を効率化したり、定型作業を自動化したりすることは、すでに可能です。スライドやWebサイトは、誰でも短時間で作れるようになりました。
                        </p>
                        <p>
                            でも、その先に進もうとしたとき、何が起こるでしょうか。
                        </p>

                        <div className={styles.whyCeoHighlight}>
                            おそらく、社長がブレーキになります。
                        </div>

                        <p>
                            企業の舵取りをしているのは、ほとんどの場合、経営者です。その意思決定をする人が、AIを前提にした戦略を描けなければ、社員が勝手に描くことはできません。
                        </p>
                        <p>
                            もし社員が独自の判断で新商品開発を始めたり、契約中の基幹システムを解約して自分で作り始めたりしたら、「おいおい、待ってくれ」となるはずです。
                        </p>
                        <p>
                            すでに、そのくらいのことはやろうと思えばできる時代に来ています。それをすべきかどうか、やるならどう進めるか。経営者が同じ知識と感覚を持って判断できなければ、いずれ競争力を失います。
                        </p>
                        <p>
                            社員は「ならば別のところでやります」と、旅立っていくかもしれません。
                        </p>

                        <div className={styles.imperfectLine} />

                        <p>もう一つ、お伝えしたいことがあります。</p>

                        <div className={styles.whyCeoBox}>
                            社長の頭の中にある考え、想い、判断基準。<br />
                            それが社員の使うAIに活かされていないのは、<br />
                            大きな機会損失です。
                        </div>

                        <p>
                            組織のトップである経営者が持つ知識や表現を、頭の中にとどめたままでは、AIがどれだけ進化しても、勝手に抜き取っていくことはできません。少なくとも、そんな未来はすぐには来ません。
                        </p>
                        <p>
                            だからこそ、経営者の脳内にあるナレッジを言語化し、会社として共有できる資産にして、それが常に更新されていく状態を作ること。これが、まず最低限やるべき準備だと私たちは考えています。
                        </p>

                        <div className={styles.whyCeoFooter}>
                            <p style={{ background: "#E8F4F8", padding: "1.5rem", borderRadius: "0.5rem", color: "var(--ax1-primary)" }}>
                                <strong>特別回のご案内：</strong><br />
                                10名限定（紹介者限定）で、2月25日に特別回を実施します。経営を一緒に担う役員の方との参加を推奨しています。
                                <br /><br />
                                <strong>モニター価格：2.5万円</strong>（一般 5万円）<br />
                                <span style={{ fontSize: "0.875rem" }}>※研修後にお客さまの声を収録し、サイト等での公開にご協力いただける方限定。</span>
                            </p>
                            <p style={{ marginTop: "2rem" }}>
                                ここまで読んで「なるほど」と思えた方は、このセミナーで、その準備を最短距離で進める方法を持ち帰っていただけます。
                            </p>
                            <p style={{ marginTop: "1rem" }}>
                                もしピンとこなかったなら、それ自体が、このセミナーを受ける必要性を表しているのかもしれません。
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 3: Overview (About) */}
            <section id="about" className={`${styles.sectionMa} ${styles.aboutSection}`}>
                <div className={styles.aboutDecoration} />

                <div className={styles.aboutContainer}>
                    <div className={styles.revealTrigger}>
                        <span className={styles.aboutBadge}>SPECIAL PREVIEW</span>
                        <h2 className={styles.aboutTitle}>AX-1とは</h2>
                        <div className={styles.aboutText}>
                            <p>
                                AX-1は、中小・ベンチャー企業の経営者（CxO）のための1日集中型のAI戦略セミナーです。
                            </p>
                            <p>
                                「AX」は「AI Transformation」の略。<br />
                                ただのAIの使い方講座ではありません。
                            </p>
                            <p>
                                AIを前提にした組織変革の考え方と方法を、1日に凝縮してお伝えします。
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.aboutCards} ${styles.revealTrigger} ${styles.delay200}`}>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.aboutCardTitle}>経営者限定</h3>
                            <p className={styles.aboutCardText}>意思決定者だからこそ意味がある内容です。共通言語を持つ参加者との議論も資産になります。</p>
                        </div>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.aboutCardTitle}>実践ワークショップ</h3>
                            <p className={styles.aboutCardText}>聞くだけでなく、手を動かして身につけます。思考を外部化するプロセスを体感します。</p>
                        </div>
                        <div className={styles.aboutCard}>
                            <h3 className={styles.aboutCardTitle}>持ち帰れる資産</h3>
                            <p className={styles.aboutCardText}>セミナー後も使える、あなた専用のAIツールと組織変革の仕組みを提供します。</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 5: Benefits (Assets) */}

            {/* Section 6: Speakers */}
            <section id="speakers" className={`${styles.sectionMa} ${styles.speakersSection}`}>
                <div className={styles.speakersContainer}>
                    <h2 className={`${styles.speakersTitle} ${styles.revealTrigger}`}>登壇者</h2>
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


            {/* Section 8: Details & FAQ */}
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
                                <dd className={styles.detailsValue}>都内（港区）</dd>
                            </div>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>定員</dt>
                                <dd className={styles.detailsValue}>10名限定（完全招待・紹介制）</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>参加費</dt>
                                <dd className={styles.detailsValue}>
                                    一般：50,000円（税込）<br />
                                    <strong>モニター価格：25,000円（税込）</strong><br />
                                    <span style={{ fontSize: "0.875rem", opacity: 0.7 }}>
                                        ※モニター価格適用には研修後のお客さまの声収録へのご協力が必要です。
                                    </span>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <h3 className={`${styles.faqTitle} ${styles.revealTrigger}`}>よくあるご質問</h3>
                    <div className={`${styles.faqList} ${styles.revealTrigger}`}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>知識がなくても参加できますか？</summary>
                            <div className={styles.faqAnswer}>はい、プログラミング知識は不要です。経営者としての視点があれば活用いただけます。</div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Section 9: Entry */}
            <section id="entry" className={styles.entrySection}>
                <div className={styles.entryBg} />

                <div className={styles.entryContainer}>
                    <h2 className={`${styles.entryTitle} ${styles.revealTrigger}`}>
                        経営者として、<br />AIと向き合う1日を。
                    </h2>

                    <p className={`${styles.entryDesc} ${styles.revealTrigger} ${styles.delay100}`}>
                        本回は一般公開されない完全招待制のセッションです。<br />
                        紹介者限定の特別な1日を、あなたの組織の未来に。
                    </p>

                    <div className={`${styles.entryCard} ${styles.revealTrigger} ${styles.delay200}`}>
                        <p className={styles.entryCardDate}>2026年2月25日（水） 10:00 - 19:00</p>
                        <p className={styles.entryCardInfo}>紹介者限定 | 10名限定 | モニター価格 25,000円</p>
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
                <a href="#why-ceo" onClick={(e) => scrollToSection(e, "#why-ceo")} className={styles.mobileMenuLink}>なぜ経営者か</a>
                <a href="#speakers" onClick={(e) => scrollToSection(e, "#speakers")} className={styles.mobileMenuLink}>講師</a>
                <a href="#details" onClick={(e) => scrollToSection(e, "#details")} className={styles.mobileMenuLink}>概要</a>
                <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.mobileMenuBtn}>ENTRY</a>
            </div>
        </div>
    );
}
