"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./AX10415Page.module.css";
import { AX1EntryForm } from "../ax1-2/AX1EntryForm";
import CorporateNewsletterCtaBox from "@/components/corporate/CorporateNewsletterCtaBox";

type NavItem = {
    label: string;
    targetId: string;
    isEntry?: boolean;
};

type ProgramChapter = {
    label: string;
    title: string;
    description: string;
    topics: string[];
};

type BenefitItem = {
    title: string;
    description: string;
};

type AudienceItem = {
    text: string;
    highlightText?: string;
};

type Testimonial = {
    quote: string;
    highlight: string;
    name: string;
    role: string;
    industry: string;
    image?: string;
};

type Speaker = {
    id: string;
    name: string;
    role: string;
    company: string[];
    bio: string;
    image: string;
};

const navItems: NavItem[] = [
    { label: "必要性", targetId: "#why-ceo" },
    { label: "講座内容", targetId: "#program" },
    { label: "成果", targetId: "#benefits" },
    { label: "参加者の声", targetId: "#voices" },
    { label: "対象者", targetId: "#audience" },
    { label: "登壇者", targetId: "#speakers" },
    { label: "概要", targetId: "#details" },
    { label: "ENTRY", targetId: "#entry", isEntry: true },
];

const programChapters: ProgramChapter[] = [
    {
        label: "CHAPTER 01",
        title: "2030年の未来から逆算する経営視点",
        description: "AI産業革命の構造変化を捉え、次の一手を「生存戦略」と「飛躍シナリオ」の両軸で設計します。",
        topics: [
            "2030年の未来からの逆算",
            "知能のコストゼロ社会の衝撃",
            "AI産業革命がもたらすもの",
            "経営者が打つべき「生存戦略」と「飛躍シナリオ」のための一手",
        ],
    },
    {
        label: "CHAPTER 02",
        title: "経営者の思考OSを再起動する",
        description: "過去の成功体験を再定義し、AI時代の意思決定に必要な自己認知と経営者の役割を明確化します。",
        topics: [
            "経験のグレートリセットと経験のリブート",
            "AI駆動型経営への社長の役割",
            "成功体験の「アンラーニング（学習棄却）」",
            "経営者の自己認知の重要性",
        ],
    },
    {
        label: "CHAPTER 03",
        title: "AXの実装と経営インフラ化",
        description: "デジタルツインとAIOを軸に、社内業務からプロダクト開発までをAI前提で再設計する実践を行います。",
        topics: [
            "経営者のデジタルツイン化",
            "定型業務の効率化",
            "業務変革のAX思考",
            "社長の思考・Willを学習させた「AI分身（社長ボット）」の作り方",
            "AIO（AI Optimization）戦略",
            "1人でCM・Web・システムを開発する「Vibe Coding」の実演",
        ],
    },
    {
        label: "CHAPTER 04",
        title: "全社変革を定着させる組織設計",
        description: "現場で起きる失敗パターンを先回りし、全社員をAI駆動型に変えるための実装ロードマップを固めます。",
        topics: [
            "AI活用の「3つの壁」と突破法",
            "全社員をAI駆動型に変える方法",
            "AI駆動型組織の落とし穴",
            "AI駆動型宣言",
        ],
    },
];

const benefitItems: BenefitItem[] = [
    {
        title: "危機感と勝算",
        description: "「なぜ今やるべきか」の理由と、競争優位を築くための具体的な勝ち筋が明確になります。",
    },
    {
        title: "意思決定の高速化",
        description: "AIを壁打ち相手に活用し、孤独な経営判断のスピードと精度を同時に引き上げます。",
    },
    {
        title: "コスト構造の革命",
        description: "外注依存を減らし、社内でクリエイティブ・開発を進める内製化の道筋を設計できます。",
    },
    {
        title: "次世代リーダーの育成論",
        description: "AIネイティブ人材を組織の推進力に変え、ベテランとの協働を前提にした育成戦略を描けます。",
    },
    {
        title: "経営者ネットワーク",
        description: "同じ視座でAXに挑む経営者同士のつながりを築き、実践知を交換できる関係性が得られます。",
    },
];

const audienceItems: AudienceItem[] = [
    { text: "単純な「DX」ではなく「変革（AX）」を求めている", highlightText: "「DX」ではなく「変革（AX）」" },
    { text: "AI活用を積極的に進め、事業成長につなげたい" },
    { text: "全社にAI活用を浸透させ、業績向上のチャンスに変えたい" },
    { text: "社員へAI活用を指示しているが、成果が見えず焦りを感じている" },
    { text: "数年後を見据え、自社の存在意義を再定義したい" },
    { text: "「採用難」や「人材不足」を、AI×組織戦略で根本解決したい", highlightText: "「採用難」や「人材不足」" },
    { text: "「デジタルツイン」や「AIO」を、自社の経営戦略に落とし込みたい", highlightText: "「デジタルツイン」や「AIO」" },
    { text: "中小企業向けのAI活用ノウハウと、実践的な経営者ネットワークを得たい" },
];

const speakers: Speaker[] = [
    {
        id: 'naruse',
        name: '成瀬 拓也',
        role: 'AIリブートアカデミー主宰 / ビジネスプロデューサー',
        company: [
            '株式会社ウィルフォワード 代表取締役',
            '株式会社Lively 共同創業者CSO',
            '筑波大学 非常勤講師',
        ],
        bio: '経営者として複数の事業を創出しながら、経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰。ホラクラシー経営やティール組織など次世代の組織開発を実践し、「AI時代のキャリア戦略」を発信。',
        image: '/images/naruse.jpg',
    },
    {
        id: 'iwamoto',
        name: '岩本 和也',
        role: '「AIのある暮らし」主宰 / 映像クリエイター',
        company: [
            'AI×動画マーケティング総合研究所 主宰',
            '学校法人 杉野学園 ドレスメーカー学院 特別講師',
        ],
        bio: '「しごとや暮らしに役立つ生成AI」をテーマに情報発信。毎週「週刊 AIのニュース」を発行、月1回「AIの勉強会」を開催。AI×動画マーケティングの実践者として、クリエイティブ分野でのAI活用を牽引。',
        image: '/images/iwamoto.jpg',
    },
];

const testimonials: Testimonial[] = [
    {
        quote: "この歳で感動とか興奮とかって、日々薄れていくものなんですけど、今日は本当に感動しました。AIって、知ってるか知らないかで大きく変わる世界だと思ってます。",
        highlight: "みんなに受けてもらいたい。一人でも多くの方にAIに触れてもらいたいし、知ってもらいたいな。",
        name: "山田 宜義 様",
        role: "代表取締役",
        industry: "ヤマインターナショナル株式会社",
        image: "/images/corporate/ax1-special/voice-yamada.jpg",
    },
    {
        quote: "AIのやり方の羅列の1日であれば、正直半日も持たなかったと思う。でも、経営者としての在り方、落とし穴、そして絶対に必要なスキルであること──全部理解できた。",
        highlight: "社員を送るだけじゃなくて、まずトップが感じてもらうことが大事。ちょっと最近壁にぶつかっている経営者の方々にぜひトライしてもらいたい。",
        name: "小松 伸克 様",
        role: "会長",
        industry: "小松水産株式会社",
        image: "/images/corporate/ax1-special/voice-komatsu.jpg",
    },
    {
        quote: "本当にこんなことまでできるんだってびっくりしました。フォルダ整理もあっという間にしてくれて、それって私がスタッフに頼んでることなんです。スタッフがこれを知ってれば、人がやる必要もない。",
        highlight: "実作業者も知った方がいいし、指示を出す側もこういうツールがある前提で仕事を頼んだ方がいい。トップから末端まで、幅広でみんなが使っていけたらすごくいいなと感じました。",
        name: "R.N 様",
        role: "経営者",
        industry: "サービス業",
    },
];

function renderAudienceText(item: AudienceItem) {
    if (!item.highlightText || !item.text.includes(item.highlightText)) {
        return item.text;
    }

    const [before, after] = item.text.split(item.highlightText);

    return (
        <>
            {before}
            <span className={styles.markerText}>{item.highlightText}</span>
            {after}
        </>
    );
}

export default function AX10415Page() {
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
                        {navItems.map((item) => (
                            <a
                                key={item.targetId}
                                href={item.targetId}
                                onClick={(e) => scrollToSection(e, item.targetId)}
                                className={item.isEntry ? styles.navEntryBtn : styles.navLink}
                            >
                                {item.label}
                            </a>
                        ))}
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
                        2026年4月15日（水）開催。
                    </div>
                </div>

                <div className={styles.heroContent}>
                    <div className={`${styles.heroMain} ${styles.revealTrigger}`}>
                        <div className={styles.heroKicker}>
                            <span className={styles.heroKickerLabel}>1DAY集中研修</span>
                            <span className={styles.heroKickerDate}>
                                2026年4月15日（水）<br className={styles.brMobile} />10:00〜19:00
                            </span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            <span className={`${styles.heroTitleLine} ${styles.heroTitleLead}`}>
                                2026年、<br className={styles.brMobile} />中小企業は、
                            </span>
                            <span className={`${styles.heroTitleLine} ${styles.heroTitleCore}`}>
                                <span className={styles.markerText}>社長自らがAI駆動型に</span>
                            </span>
                            <span className={`${styles.heroTitleLine} ${styles.heroTitleTrail} ${styles.heroTitleAccent}`}>
                                変われるかどうかが問われます
                            </span>
                        </h1>

                        <div className={styles.heroSubCopy}>
                            <p className={styles.heroSubText}>
                                大企業がまだ本格的に舵を切っていない今だからこそ、劇的に業績を伸ばすチャンスがあります。<br />
                                ただし、社長自らがAIで何ができるのか、
                                <span className={styles.markerText}>AI前提で経営を考えるAI駆動型</span>
                                にならないと本質的な勝負はできません。
                                <span className={styles.heroSubSmall}>
                                    <span className={styles.heroSubLabel}>少人数開催</span>
                                    経営を一緒に担う役員の方との参加も歓迎しています。
                                </span>
                            </p>
                        </div>

                        <div className={styles.heroCta}>
                            <a href="#entry" onClick={(e) => scrollToSection(e, "#entry")} className={styles.btnPrimary}>
                                4月15日のエントリーはこちら
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
                        なぜ、<span className={styles.headingAccent}>社長自らがAI駆動型</span><br />になる必要があるのか
                    </h2>

                    <div className={`${styles.whyCeoContent} ${styles.revealTrigger}`}>
                        <p className={styles.whyCeoNotice}>
                            【少人数開催｜定員に達し次第、受付終了】
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
                            <span className={styles.whyCeoHighlightText}>おそらく、社長がブレーキになります。</span>
                        </div>

                        <p>
                            企業の舵取りをしているのは、ほとんどの場合、経営者です。
                            <span className={styles.markerText}>その意思決定をする人が、AIを前提にした戦略を描けなければ</span>
                            、社員が勝手に描くことはできません。
                        </p>
                        <p>
                            もし社員が独自の判断で新商品開発を始めたり、契約中の基幹システムを解約して自分で作り始めたりしたら、「おいおい、待ってくれ」となるはずです。
                        </p>
                        <p>
                            すでに、そのくらいのことはやろうと思えばできる時代に来ています。それをすべきかどうか、やるならどう進めるか。
                            <span className={styles.markerText}>経営者が同じ知識と感覚を持って判断できなければ、いずれ競争力を失います。</span>
                        </p>
                        <p>
                            社員は「ならば別のところでやります」と、旅立っていくかもしれません。
                        </p>

                        <div className={styles.imperfectLine} />

                        <p>もう一つ、お伝えしたいことがあります。</p>

                        <div className={styles.whyCeoBox}>
                            <span className={styles.markerText}>社長の頭の中にある考え、想い、判断基準。</span><br />
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
                                <strong>2026年4月15日（水）開催のご案内：</strong><br />
                                少人数での1DAY研修です。経営を一緒に担う役員の方との参加も歓迎しています。
                                <br /><br />
                                <strong>参加費：50,000円（税込）</strong>
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
                        <span className={styles.aboutBadge}>2026年4月開催</span>
                        <h2 className={styles.aboutTitle}><span className={styles.headingAccent}>AX-1</span>とは</h2>
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


            {/* Section 4: Program */}
            <section id="program" className={`${styles.sectionMa} ${styles.programSection}`}>
                <div className={styles.programContainer}>
                    <div className={`${styles.programHeader} ${styles.revealTrigger}`}>
                        <h2 className={styles.programTitle}>
                            <span className={styles.headingAccent}>講座内容</span>
                        </h2>
                        <p className={styles.programDesc}>
                            AI時代の経営を、戦略・思考・実装・組織の4章で体系化して学びます。
                        </p>
                        <p className={styles.programNotice}>
                            ※AIのトレンドは激しく変化するため、講座内容は当日までに予告なくアップデートされる場合があります。
                        </p>
                    </div>

                    <div className={`${styles.timeline} ${styles.revealTrigger} ${styles.delay100}`}>
                        {programChapters.map((chapter, index) => (
                            <div key={chapter.title} className={styles.timelineItem}>
                                <div className={styles.timelineTime}>
                                    <span className={styles.timelineTimeMain}>{String(index + 1).padStart(2, "0")}</span>
                                    <div className={styles.timelineTimeSub}>CHAPTER</div>
                                </div>
                                <div className={styles.timelineDot} />
                                <div>
                                    <span className={styles.timelineLabel}>{chapter.label}</span>
                                    <h3 className={styles.timelineTitle}>{chapter.title}</h3>
                                    <p className={styles.timelineDesc}>{chapter.description}</p>
                                    <ul className={styles.timelineList}>
                                        {chapter.topics.map((topic) => (
                                            <li key={topic} className={styles.timelineListItem}>
                                                <span className={styles.timelineListBullet}>•</span>
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className={`${styles.programClosing} ${styles.revealTrigger} ${styles.delay200}`}>
                        1日で「理解」だけでなく、翌日から動ける経営判断の型まで持ち帰っていただきます。
                    </p>
                </div>
            </section>

            {/* Section 5: Benefits */}
            <section id="benefits" className={`${styles.sectionMa} ${styles.benefitsSection}`}>
                <div className={styles.benefitsContainer}>
                    <h2 className={`${styles.benefitsTitle} ${styles.revealTrigger}`}>
                        <span className={styles.headingAccent}>講座で得られる成果</span>
                    </h2>
                    <p className={`${styles.benefitsDesc} ${styles.revealTrigger}`}>
                        学んで終わりではなく、経営に実装できる成果を持ち帰る設計です。
                    </p>

                    <div className={`${styles.benefitsGrid} ${styles.revealTrigger} ${styles.delay100}`}>
                        {benefitItems.map((benefit) => (
                            <article key={benefit.title} className={styles.benefitCard}>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDesc}>{benefit.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Testimonials (Voices) */}
            <section id="voices" className={`${styles.sectionMa} ${styles.voicesSection}`}>
                <div className={styles.voicesContainer}>
                    <h2 className={`${styles.voicesTitle} ${styles.revealTrigger}`}>
                        参加した経営者の声
                    </h2>
                    <p className={`${styles.voicesDesc} ${styles.revealTrigger}`}>
                        前回参加者（経営者）のリアルなフィードバックです。
                    </p>

                    <div className={`${styles.voicesGrid} ${styles.revealTrigger} ${styles.delay100}`}>
                        {testimonials.map((t) => (
                            <div key={t.name} className={styles.voiceCard}>
                                <span className={styles.voiceQuoteMark}>&ldquo;</span>
                                <p className={styles.voiceQuote}>{t.quote}</p>
                                <blockquote className={styles.voiceHighlight}>
                                    {t.highlight}
                                </blockquote>
                                <div className={styles.voiceAttribution}>
                                    {t.image && (
                                        <Image
                                            src={t.image}
                                            alt={t.name}
                                            width={48}
                                            height={48}
                                            className={styles.voiceAvatar}
                                        />
                                    )}
                                    <div>
                                        <span className={styles.voiceName}>{t.name}</span>
                                        <span className={styles.voiceRole}>{t.industry} {t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mid-page Newsletter CTA */}
            <div className="px-6 py-10">
                <CorporateNewsletterCtaBox source="ax1-0415" />
            </div>

            {/* Section 7: Audience */}
            <section id="audience" className={`${styles.sectionMa} ${styles.audienceSection}`}>
                <div className={styles.audienceContainer}>
                    <h2 className={`${styles.audienceTitle} ${styles.revealTrigger}`}>
                        <span className={styles.headingAccent}>こんな経営者におすすめ</span>
                    </h2>
                    <p className={`${styles.audienceLead} ${styles.revealTrigger}`}>
                        中小企業の経営者・役員（CxO）を対象としています。
                    </p>

                    <div className={`${styles.audienceGrid} ${styles.revealTrigger} ${styles.delay100}`}>
                        {audienceItems.map((item) => (
                            <div key={item.text} className={styles.audienceItem}>
                                {renderAudienceText(item)}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Speakers */}
            <section id="speakers" className={`${styles.sectionMa} ${styles.speakersSection}`}>
                <div className={styles.speakersContainer}>
                    <h2 className={`${styles.speakersTitle} ${styles.revealTrigger}`}>
                        <span className={styles.headingAccent}>登壇者</span>
                    </h2>
                    <div className={`${styles.speakersGrid} ${styles.revealTrigger} ${styles.delay100}`}>
                        {speakers.map((speaker) => (
                            <div key={speaker.id} className={styles.speakerCard}>
                                <div className={styles.speakerImage}>
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        sizes="(max-width: 768px) 6rem, 8rem"
                                        className={styles.speakerImg}
                                    />
                                </div>
                                <p className={styles.speakerRole}>{speaker.role}</p>
                                <h3 className={styles.speakerName}>{speaker.name}</h3>
                                <div className={styles.speakerCompany}>
                                    {speaker.company.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                                <p className={styles.speakerBio}>{speaker.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Section 9: Details & FAQ */}
            <section id="details" className={`${styles.sectionMa} ${styles.detailsSection}`}>
                <div className={styles.detailsContainer}>
                    <h2 className={`${styles.detailsTitle} ${styles.revealTrigger}`}>
                        <span className={styles.headingAccent}>4月15日開催</span> 概要
                    </h2>

                    <div className={`${styles.detailsCard} ${styles.revealTrigger} ${styles.delay100}`}>
                        <dl>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>日時</dt>
                                <dd className={styles.detailsValue}>2026年4月15日（水）10:00〜19:00</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>会場</dt>
                                <dd className={styles.detailsValue}>
                                    都内（参加者に詳細連絡）
                                </dd>
                            </div>
                            <div className={styles.detailsRow}>
                                <dt className={styles.detailsLabel}>定員</dt>
                                <dd className={styles.detailsValue}>少人数開催（定員に達し次第、受付終了）</dd>
                            </div>
                            <div className={`${styles.detailsRow} ${styles.detailsRowAlt}`}>
                                <dt className={styles.detailsLabel}>参加費</dt>
                                <dd className={styles.detailsValue}>
                                    50,000円（税込）
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <h3 className={`${styles.faqTitle} ${styles.revealTrigger}`}>
                        <span className={styles.headingAccent}>よくあるご質問</span>
                    </h3>
                    <div className={`${styles.faqList} ${styles.revealTrigger}`}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>講座内容は固定ですか？</summary>
                            <div className={styles.faqAnswer}>
                                いいえ。AIトレンドの変化に対応するため、講座内容は当日までに予告なくアップデートされる場合があります。
                            </div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>AIの知識がなくても参加できますか？</summary>
                            <div className={styles.faqAnswer}>はい、プログラミング知識は不要です。経営者としての視点があれば活用いただけます。</div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>1日でどこまで学べますか？</summary>
                            <div className={styles.faqAnswer}>AI駆動型の経営判断に必要な考え方と、明日から使える視点を1日で整理します。</div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>社長以外の役員も参加できますか？</summary>
                            <div className={styles.faqAnswer}>経営を共に担う役員の方との参加も歓迎しています。エントリーフォームにてご相談ください。</div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>持ち帰れる成果物はありますか？</summary>
                            <div className={styles.faqAnswer}>AI前提で経営を考えるための整理フレームと、次の一手を定める視点を持ち帰れます。</div>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>会場はどこですか？</summary>
                            <div className={styles.faqAnswer}>都内での開催となります。エントリー後、参加確定された方に詳細をご連絡いたします。</div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Section 10: Entry */}
            <section id="entry" className={styles.entrySection}>
                <div className={styles.entryBg} />

                <div className={styles.entryContainer}>
                    <h2 className={`${styles.entryTitle} ${styles.revealTrigger}`}>
                        経営者として、<br /><span className={styles.headingAccent}>AIと向き合う1日</span>を。
                    </h2>

                    <p className={`${styles.entryDesc} ${styles.revealTrigger} ${styles.delay100}`}>
                        少人数開催のため、定員に達し次第、受付を終了します。<br />
                        4月15日（水）、都内にてお会いしましょう。
                    </p>

                    <div className={`${styles.entryCard} ${styles.revealTrigger} ${styles.delay200}`}>
                        <p className={styles.entryCardDate}>2026年4月15日（水）10:00〜19:00</p>
                        <p className={styles.entryCardInfo}>少人数開催 | 都内（参加者に詳細連絡） | 参加費 50,000円（税込）</p>
                    </div>

                    <div className={`${styles.revealTrigger} ${styles.delay300}`}>
                        <AX1EntryForm hideScreeningText entryType="ax1-0415" />
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
                {navItems.map((item) => (
                    <a
                        key={`mobile-${item.targetId}`}
                        href={item.targetId}
                        onClick={(e) => scrollToSection(e, item.targetId)}
                        className={item.isEntry ? styles.mobileMenuBtn : styles.mobileMenuLink}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
