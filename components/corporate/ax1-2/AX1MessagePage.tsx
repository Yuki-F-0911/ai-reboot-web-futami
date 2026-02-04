"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AX1MessagePage.module.css";
import { AX1EntryForm } from "./AX1EntryForm";

export default function AX1MessagePage() {
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
                    <a href="#" className={styles.navLogo}>AX-1</a>

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
                        <a href="#case" onClick={(e) => scrollToSection(e, "#case")} className={styles.navLink}>
                            研修実績
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
                        経営者の意思決定が、未来を創る。
                    </div>
                </div>

                <div className={styles.heroContent}>
                    <div className={`${styles.heroMain} ${styles.revealTrigger}`}>
                        <div className={styles.heroDate}>
                            <span className={styles.heroDateLine} />
                            2026.2.18 TUE
                        </div>

                        <h1 className={styles.heroTitle}>
                            <span style={{ display: "block" }}>社員ではなく、</span>
                            <span style={{ display: "block" }} className={styles.heroTitleIndent}>あなた自身が</span>
                            <span style={{ display: "block" }} className={styles.heroTitleAccent}>AIを学ぶ理由。</span>
                        </h1>

                        <div className={styles.heroSubCopy}>
                            <p className={styles.heroSubText}>
                                それは、業務効率化のためではありません。<br />
                                <span className={styles.heroSubSmall}>
                                    経営者として、AIを前提にした意思決定をするための1日です。
                                </span>
                            </p>
                        </div>

                        <div className={styles.heroCta}>
                            <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.btnPrimary}>
                                セミナーにエントリーする
                            </a>
                            <div className={styles.heroScrollHint}>
                                <svg style={{ width: 16, height: 16, animation: "bounce 1s infinite" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                Scroll for Reality
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
                            <p>
                                ここまで読んで「なるほど」と思えた方は、このセミナーで、その準備を最短距離で進める方法を持ち帰っていただけます。
                            </p>
                            <p>
                                もしピンとこなかったなら、それ自体が、このセミナーを受ける必要性を表しているのかもしれません。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Evidence (Fact) */}
            <section className={`${styles.sectionMa} ${styles.evidenceSection}`}>
                <div className={styles.evidenceContainer}>
                    <div className={`${styles.evidenceHeader} ${styles.revealTrigger}`}>
                        <div>
                            <h2 className={styles.evidenceTitle}>数字が示す、<br />経営者の関与の重要性</h2>
                            <p className={styles.evidenceDesc}>
                                AI導入の成否を分けるのは、ツールの選定ではありません。<br />
                                経営者が戦略を持っているかどうかです。
                            </p>
                        </div>
                        <div className={styles.evidenceStats}>
                            <div className={styles.statCard}>
                                <div className={styles.statSource}>PwC分析 [1]</div>
                                <div className={styles.statNumber}>4<span className={styles.statUnit}>倍</span></div>
                                <div className={styles.statLabel}>AI導入の影響が大きい業界の生産性成長率</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statSource}>PwC調査 [2]</div>
                                <div className={styles.statNumber}>2<span className={styles.statUnit}>%</span></div>
                                <div className={styles.statLabel}>日本で「期待を大きく上回る成果」を報告した企業</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statSource}>CEO調査 [3]</div>
                                <div className={styles.statNumber}>56<span className={styles.statUnit}>%</span></div>
                                <div className={styles.statLabel}>AI投資で売上増・コスト減を得られていない企業</div>
                            </div>
                            <div className={`${styles.statCard} ${styles.statCardAccent}`}>
                                <div className={styles.statSource}>Thomson Reuters [4]</div>
                                <div className={`${styles.statNumber} ${styles.statNumberAccent}`}>3.5<span className={styles.statUnit}>倍</span></div>
                                <div className={styles.statLabel}>可視化された戦略を持つ組織がROIを得る確率</div>
                            </div>
                        </div>
                    </div>

                    <p className={`${styles.evidenceConclusion} ${styles.revealTrigger} ${styles.delay200}`}>
                        成果を出している企業と、そうでない企業。<br />
                        その差は「戦略の有無」にあります。
                    </p>
                </div>
            </section>

            {/* Section 3: Overview (About) */}
            <section id="about" className={`${styles.sectionMa} ${styles.aboutSection}`}>
                <div className={styles.aboutDecoration} />

                <div className={styles.aboutContainer}>
                    <div className={styles.revealTrigger}>
                        <span className={styles.aboutBadge}>1DAY SEMINAR</span>
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

            {/* Section 4: Program (Time) */}
            <section id="program" className={`${styles.sectionMa} ${styles.programSection}`}>
                <div className={styles.programContainer}>
                    <div className={`${styles.programHeader} ${styles.revealTrigger}`}>
                        <h2 className={styles.programTitle}>1日の流れ</h2>
                        <p className={styles.programDesc}>朝10時から夕方19時まで。濃密な1日をご用意しています。</p>
                    </div>

                    <div className={`${styles.timeline} ${styles.revealTrigger} ${styles.delay100}`}>
                        {/* Item 1 */}
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
                                    AIによる未来予測を踏まえた戦略の考え方。そして、経営者の「想い」を言語化するワークを行います。アクティブリスニングの手法を活用し、普段は言葉にしない思考を引き出していきます。
                                </p>
                                <ul className={styles.timelineList}>
                                    <li className={styles.timelineListItem}>
                                        <span className={styles.timelineListBullet}>•</span>
                                        AI時代の経営戦略フレームワーク
                                    </li>
                                    <li className={styles.timelineListItem}>
                                        <span className={styles.timelineListBullet}>•</span>
                                        経営者の暗黙知を形式知に変換するワーク
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Lunch */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTime}>
                                <span className={styles.timelineTimeMain} style={{ fontSize: "1.25rem", color: "var(--ax1-sub)" }}>13:00</span>
                            </div>
                            <div className={`${styles.timelineDot} ${styles.timelineDotSmall}`} />
                            <div className={styles.timelineSimple}>
                                <h3>昼食休憩</h3>
                                <p>参加者同士の交流時間としてもお使いください</p>
                            </div>
                        </div>

                        {/* Item 2 */}
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
                                    Google Gems（カスタムAI）を実際に作成します。プログラミング知識は不要です。また、自社の課題を可視化するチェックシートを使い、現状と理想のギャップを明確にします。
                                </p>
                                <ul className={styles.timelineList}>
                                    <li className={styles.timelineListItem}>
                                        <span className={styles.timelineListBullet}>•</span>
                                        自社専用AIボットの構築（持ち帰り可能）
                                    </li>
                                    <li className={styles.timelineListItem}>
                                        <span className={styles.timelineListBullet}>•</span>
                                        AI活用200選チェックによる現状診断
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Item 3 */}
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
                                    人材開発支援助成金の活用シミュレーション。中小企業等は経費助成率 最大75%の可能性があります。経営者同士のネットワーキングの時間も設けています。
                                </p>
                            </div>
                        </div>

                        {/* Closing */}
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineTime}>
                                <span className={styles.timelineTimeMain} style={{ fontSize: "1.25rem", color: "var(--ax1-sub)" }}>18:00</span>
                            </div>
                            <div className={`${styles.timelineDot} ${styles.timelineDotSmall}`} />
                            <div className={styles.timelineSimple}>
                                <h3>クロージング</h3>
                                <p>経営者限定コミュニティへのご招待と、個別相談のご案内</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Benefits (Assets) */}
            <section id="benefits" className={`${styles.sectionMa} ${styles.benefitsSection}`}>
                <div className={styles.benefitsContainer}>
                    <h2 className={`${styles.benefitsTitle} ${styles.revealTrigger}`}>参加後に残る、4つの資産</h2>
                    <p className={`${styles.benefitsDesc} ${styles.revealTrigger}`}>
                        セミナーで学んで終わり、ではありません。<br />持ち帰って使えるものをお渡しします。
                    </p>

                    <div className={`${styles.benefitsGrid} ${styles.revealTrigger} ${styles.delay200}`}>
                        {[
                            {
                                icon: (
                                    <svg style={{ width: 32, height: 32 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                title: "自社の現在地レポート & 言語化",
                                desc: "「AI活用200選チェック」と音声診断で、組織の遅れを数値化。さらに、経営者の脳内を「アクティブリスニング」の手法で言語化し、AIへの指示（プロンプト）精度を劇的に高めます。",
                            },
                            {
                                icon: (
                                    <svg style={{ width: 32, height: 32 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                                title: "Google Gems（カスタムAI）",
                                desc: "プログラミング不要。「SNS投稿」「日報分析」など、自社専用のAIボットをその場で作成し、持ち帰っていただきます。",
                            },
                            {
                                icon: (
                                    <svg style={{ width: 32, height: 32 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "人材開発支援助成金",
                                desc: "本セミナー後の人材育成・AI研修にかかる費用を大幅に圧縮。「コスト」を理由に変革を諦めないための、具体的な資金調達プランを提示します。",
                            },
                            {
                                icon: (
                                    <svg style={{ width: 32, height: 32 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "経営者コミュニティ & 個別戦略相談",
                                desc: "完全招待制・経営者限定Slackコミュニティへの1年間参加権。さらに、後日「AI研修」や「人材紹介」を含めた組織導入の個別コンサルティング（60分）を優先案内。",
                            },
                        ].map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{benefit.icon}</div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDesc}>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Speakers (Humanity) */}
            <section id="speakers" className={`${styles.sectionMa} ${styles.speakersSection}`}>
                <div className={styles.speakersContainer}>
                    <h2 className={`${styles.speakersTitle} ${styles.revealTrigger}`}>登壇者</h2>
                    <p className={`${styles.speakersDesc} ${styles.revealTrigger}`}>
                        日々進化するAIツール、AI活用、AIによる組織変革を追求している講師陣が、<br />遠慮なく本気でお伝えします。
                    </p>

                    <div className={`${styles.speakersGrid} ${styles.revealTrigger} ${styles.delay100}`}>
                        <div className={styles.speakerCard}>
                            <div className={styles.speakerImage}>
                                <Image
                                    src="/images/naruse.jpg"
                                    alt="成瀬 拓也"
                                    fill
                                    sizes="(max-width: 768px) 6rem, 8rem"
                                    className={styles.speakerImg}
                                />
                            </div>
                            <p className={styles.speakerRole}>AIリブートアカデミー主宰</p>
                            <h3 className={styles.speakerName}>成瀬 拓也</h3>
                            <p className={styles.speakerBio}>
                                AIリブートアカデミーを主宰し、経営者向けのAI活用支援を行う。ビジネスプロデューサーとして、多くの企業の変革に携わってきた。
                            </p>
                        </div>

                        <div className={styles.speakerCard}>
                            <div className={styles.speakerImage}>
                                <Image
                                    src="/images/iwamoto.jpg"
                                    alt="岩本 和也"
                                    fill
                                    sizes="(max-width: 768px) 6rem, 8rem"
                                    className={styles.speakerImg}
                                />
                            </div>
                            <p className={styles.speakerRole}>「AIのある暮らし」主宰</p>
                            <h3 className={styles.speakerName}>岩本 和也</h3>
                            <p className={styles.speakerBio}>
                                「週刊 AIのニュース」を発行し、AI情報の発信を続ける。映像クリエイターとしての視点から、AIの実践的な活用法を伝える。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Track Record */}
            <section id="case" className={`${styles.sectionMa} ${styles.caseSection}`}>
                <div className={styles.caseContainer}>
                    {/* ヘッダー */}
                    <div className={`${styles.caseHeader} ${styles.revealTrigger}`}>
                        <span className={styles.caseBadge}>TRACK RECORD</span>
                        <h2 className={styles.caseTitle}>
                            私たちの研修が、<br />
                            組織にもたらしたもの
                        </h2>
                        <p className={styles.caseLead}>
                            AIリブートでは、経営者向けセミナーから社員研修まで、<br className={styles.brPc} />
                            組織全体のAI活用を一貫して支援しています。<br />
                            公的採択や導入実績、そして私たち自身がAIを活用している事例をご紹介します。
                        </p>
                    </div>

                    {/* 信頼の根拠（実績） */}
                    <div className={styles.credibilityBlock}>
                        <h3 className={`${styles.credibilityTitle} ${styles.revealTrigger} ${styles.delay100}`}>
                            公的採択・導入事例
                        </h3>
                        <p className={`${styles.credibilityDesc} ${styles.revealTrigger} ${styles.delay100}`}>
                            AI REBOOT（運営：株式会社ウィルフォワード）は、公的機関への採択や法人研修の実績を持っています。
                        </p>

                        <div className={styles.credibilityGrid}>
                            <article className={`${styles.credibilityCard} ${styles.revealTrigger} ${styles.delay200}`}>
                                <div className={styles.credibilityCardHeader}>
                                    <span className={styles.credibilityCardBadge}>公的採択</span>
                                    <h4 className={styles.credibilityCardTitle}>
                                        経済産業省「リスキリングを通じたキャリアアップ支援事業」採択
                                    </h4>
                                </div>
                                <p className={styles.credibilityCardText}>
                                    AIリブートアカデミーが同事業に採択。受講料の最大70%が補助対象。
                                </p>
                            </article>

                            <article className={`${styles.credibilityCard} ${styles.revealTrigger} ${styles.delay200}`}>
                                <div className={styles.credibilityCardHeader}>
                                    <span className={styles.credibilityCardBadge}>法人研修</span>
                                    <h4 className={styles.credibilityCardTitle}>導入事例：ウィルトラスト株式会社様</h4>
                                </div>
                                <p className={styles.credibilityCardText}>
                                    4日間の集中研修＋フォローアップ計12回。意思決定から伴走しました。
                                </p>
                            </article>

                            <article className={`${styles.credibilityCard} ${styles.revealTrigger} ${styles.delay300}`}>
                                <div className={styles.credibilityCardHeader}>
                                    <span className={styles.credibilityCardBadge}>組織づくり</span>
                                    <h4 className={styles.credibilityCardTitle}>リクナビNEXT「GOOD ACTION」受賞</h4>
                                </div>
                                <p className={styles.credibilityCardText}>
                                    ウィルフォワードの組織文化「お仲間理論」が評価されました。
                                </p>
                            </article>

                            <article className={`${styles.credibilityCard} ${styles.revealTrigger} ${styles.delay300}`}>
                                <div className={styles.credibilityCardHeader}>
                                    <span className={styles.credibilityCardBadge}>社内制度</span>
                                    <h4 className={styles.credibilityCardTitle}>自社で実践するAI活用支援</h4>
                                </div>
                                <p className={styles.credibilityCardText}>
                                    「生成AIパスポート」受験費用の全額補助、AIツール導入の無制限支援。
                                </p>
                            </article>
                        </div>

                        <div className={`${styles.credibilityFootnotes} ${styles.revealTrigger} ${styles.delay200}`}>
                            <p className={styles.credibilityNote}>
                                ※補助制度はAIリブートアカデミー（個人向け講座）に関するものです。AX-1とは別プログラムです。補助の適用可否・支給条件・上限等は制度の要件により異なります。
                            </p>
                            <p className={styles.credibilityCompany}>
                                運営会社：
                                <a className={styles.credibilityLink} href="/company">
                                    株式会社ウィルフォワード
                                </a>
                                （Willforward, Inc.）｜2011年8月8日設立｜神奈川県鎌倉市｜代表取締役 成瀬 拓也
                            </p>
                        </div>
                    </div>

                    {/* 事例カード */}
                    <div className={`${styles.caseCard} ${styles.revealTrigger} ${styles.delay100}`}>
                        {/* 企業情報 */}
                        <div className={styles.caseCompanyInfo}>
                            <div className={styles.caseCompanyName}>
                                <span className={styles.caseCompanyLabel}>導入企業</span>
                                <h3>ウィルトラスト株式会社 様</h3>
                            </div>
                            <div className={styles.caseCompanyMeta}>
                                <div className={styles.caseMetaItem}>
                                    <span className={styles.caseMetaLabel}>業種</span>
                                    <span className={styles.caseMetaValue}>ゴルフ練習場運営・コンサルティング</span>
                                </div>
                                <div className={styles.caseMetaItem}>
                                    <span className={styles.caseMetaLabel}>研修</span>
                                    <span className={styles.caseMetaValue}>4日間集中 + フォローアップ12回</span>
                                </div>
                            </div>
                        </div>

                        {/* 動画とコメント */}
                        <div className={styles.caseTestimonialGrid}>
                            {/* 動画 */}
                            <div className={styles.caseVideoWrapper}>
                                <div className={styles.caseVideoAspect}>
                                    <iframe
                                        className={styles.caseVideoIframe}
                                        src="https://www.youtube.com/embed/AcJrcmt1bp8"
                                        title="お客様の声 - ウィルトラスト社 礒崎様"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>

                            {/* 経営者コメント */}
                            <div className={styles.caseQuoteSection}>
                                <div className={styles.caseQuoteHeader}>
                                    <span className={styles.caseQuoteRole}>代表取締役</span>
                                    <span className={styles.caseQuoteName}>礒崎 様</span>
                                </div>
                                <blockquote className={styles.caseQuote}>
                                    <p>
                                        多くのAI研修は「ツールの使い方を学ばせる」ことに焦点を当てています。
                                    </p>
                                    <p>
                                        しかしウィルフォワード社の研修は、まったく違いました。
                                    </p>
                                    <p className={styles.caseQuoteHighlight}>
                                        「そのツールを使って、自分たちはどうしていくのか」<br />
                                        「自分たちの思い（Will）は何か」<br />
                                        「将来どうなっていきたいのか」
                                    </p>
                                    <p>
                                        単なるツール習得ではなく、ビジョンを深く考えるきっかけになりました。
                                    </p>
                                    <p className={styles.caseQuoteConclusion}>
                                        「もう一度、自分たちの組織を大きくしていきたい」<br />
                                        そう本気で考えている経営者にこそ、強くお勧めします。
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* 導線 */}
                    <div className={`${styles.caseCta} ${styles.revealTrigger} ${styles.delay200}`}>
                        <p className={styles.caseCtaText}>
                            組織変革の第一歩は、経営者自身がAIを理解すること。<br />
                            AX-1は、その最初の1日です。
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 8: Details & FAQ */}
            <section id="details" className={`${styles.sectionMa} ${styles.detailsSection}`}>
                <div className={styles.detailsContainer}>
                    <h2 className={`${styles.detailsTitle} ${styles.revealTrigger}`}>開催概要</h2>

                    <div className={`${styles.detailsCard} ${styles.revealTrigger} ${styles.delay100}`}>
                        <dl>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>日時</dt>
                                <dd className={styles.detailsValue}>2026年2月18日（火） 10:00 - 19:00（開場 9:45）</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>会場</dt>
                                <dd className={styles.detailsValue}>東京都内（参加確定者に別途ご連絡いたします）</dd>
                            </div>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>定員</dt>
                                <dd className={styles.detailsValue}>限定20名</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>参加費</dt>
                                <dd className={styles.detailsValue}>50,000円（税込）</dd>
                            </div>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>対象</dt>
                                <dd className={styles.detailsValue}>経営者・CxO・決裁者の方</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>持ち物</dt>
                                <dd className={styles.detailsValue}>PC（プログラミング知識は不要です）</dd>
                            </div>
                        </dl>
                        <div className={styles.detailsNote}>
                            <p>※ 本セミナーは審査制です。エントリー後、参加可否をご連絡いたします。</p>
                            <p>※ 営業目的（保険、不動産、投資等の勧誘）でのご参加はお断りしております。</p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <h3 className={`${styles.faqTitle} ${styles.revealTrigger}`}>よくあるご質問</h3>
                    <div className={`${styles.faqList} ${styles.revealTrigger}`}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>
                                ITやAIの知識がなくても参加できますか？
                                <span className={styles.faqIcon}>
                                    <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className={styles.faqAnswer}>
                                はい、参加いただけます。プログラミングの知識は一切不要です。経営者としての視点と判断力があれば、十分に内容を理解し、活用いただけます。
                            </div>
                        </details>

                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>
                                なぜ審査制なのですか？
                                <span className={styles.faqIcon}>
                                    <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className={styles.faqAnswer}>
                                本セミナーは経営者同士の学び合いの場でもあります。参加者の質を担保し、有意義な交流を実現するため、審査制とさせていただいております。
                            </div>
                        </details>

                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>
                                50,000円の価値はありますか？
                                <span className={styles.faqIcon}>
                                    <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </summary>
                            <div className={styles.faqAnswer}>
                                カスタムAIの作成、可視化レポート、1年間のコミュニティ参加権、個別コンサルティングなど、持ち帰れる資産を考えると、十分な価値があると考えています。また、人材開発支援助成金を活用すれば、実質的な負担を大幅に軽減できる可能性があります。
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Section 8: Entry (The Gate) */}
            <section id="entry" className={styles.entrySection}>
                <div className={styles.entryBg} />

                <div className={styles.entryContainer}>
                    <h2 className={`${styles.entryTitle} ${styles.revealTrigger}`}>
                        経営者として、<br />AIと向き合う1日を。
                    </h2>

                    <p className={`${styles.entryDesc} ${styles.revealTrigger} ${styles.delay100}`}>
                        ここまでお読みいただき、ありがとうございます。<br />
                        もし少しでも「必要かもしれない」と感じたなら、まずはエントリーしてみてください。<br />
                        審査の上、参加可否をご連絡いたします。
                    </p>

                    <div className={`${styles.entryCard} ${styles.revealTrigger} ${styles.delay200}`}>
                        <p className={styles.entryCardDate}>2026年2月18日（火） 10:00 - 19:00</p>
                        <p className={styles.entryCardInfo}>東京都内 | 限定20名 | 50,000円（税込）</p>
                    </div>

                    <div className={`${styles.revealTrigger} ${styles.delay300}`}>
                        <AX1EntryForm />
                    </div>
                </div>
            </section>

            {/* Data Sources Section */}
            <section className={styles.dataSourcesSection}>
                <div className={styles.dataSourcesContainer}>
                    <h4 className={styles.dataSourcesTitle}>データ出典</h4>
                    <div className={styles.dataSourcesList}>
                        <div className={styles.dataSourceItem}>
                            [1] PwC「2025年グローバル AIジョブバロメーター」<br />
                            <a href="https://www.pwc.com/jp/ja/knowledge/thoughtleadership/ai-jobs-barometer.html" target="_blank" rel="noopener noreferrer">
                                https://www.pwc.com/jp/ja/knowledge/thoughtleadership/ai-jobs-barometer.html
                            </a>
                        </div>
                        <div className={styles.dataSourceItem}>
                            [2] PwC Japan「生成AIに関する実態調査 2025春（5カ国比較）」<br />
                            <a href="https://www.pwc.com/jp/ja/knowledge/thoughtleadership/2025/assets/pdf/generative-ai-survey2025.pdf" target="_blank" rel="noopener noreferrer">
                                https://www.pwc.com/jp/ja/knowledge/thoughtleadership/2025/assets/pdf/generative-ai-survey2025.pdf
                            </a>
                        </div>
                        <div className={styles.dataSourceItem}>
                            [3] PwC「29th Global CEO Survey（2026）」<br />
                            <a href="https://www.pwc.com/gx/en/ceo-survey/2026/pwc-ceo-survey-2026.pdf" target="_blank" rel="noopener noreferrer">
                                https://www.pwc.com/gx/en/ceo-survey/2026/pwc-ceo-survey-2026.pdf
                            </a>
                        </div>
                        <div className={styles.dataSourceItem}>
                            [4] Thomson Reuters「Future of Professionals Report 2025」<br />
                            <span className={styles.dataSourceNote}>※調査は主にプロフェッショナル領域の文脈</span><br />
                            <a href="https://www.thomsonreuters.com/content/dam/ewp-m/documents/thomsonreuters/en/pdf/reports/future-of-professionals-report-2025.pdf" target="_blank" rel="noopener noreferrer">
                                https://www.thomsonreuters.com/content/dam/ewp-m/documents/thomsonreuters/en/pdf/reports/future-of-professionals-report-2025.pdf
                            </a>
                        </div>
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
                <a href="#why-ceo" onClick={(e) => scrollToSection(e, "#why-ceo")} className={styles.mobileMenuLink}>なぜ経営者なのか</a>
                <a href="#program" onClick={(e) => scrollToSection(e, "#program")} className={styles.mobileMenuLink}>プログラム</a>
                <a href="#speakers" onClick={(e) => scrollToSection(e, "#speakers")} className={styles.mobileMenuLink}>登壇者</a>
                <a href="#case" onClick={(e) => scrollToSection(e, "#case")} className={styles.mobileMenuLink}>研修実績</a>
                <a href="#details" onClick={(e) => scrollToSection(e, "#details")} className={styles.mobileMenuLink}>開催概要</a>
                <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.mobileMenuBtn}>ENTRY</a>
            </div>
        </div>
    );
}
