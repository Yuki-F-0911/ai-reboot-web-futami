"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface InstructorProfile {
  name: string;
  title: string;
  subtitle?: string;
  qualification?: string;
  description: string;
  gradient: string;
  image?: string;
}

export const AcademyInstructors = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const instructors: InstructorProfile[] = [
    {
      name: "成瀬 拓也",
      title: "AIリブートアカデミー主宰 / ビジネスプロデューサー",
      subtitle: "株式会社ウィルフォワード 代表取締役／株式会社Lively 共同創業者CSO",
      description: "経営者として複数の事業を創出しながら、経済産業省認定リスキリング講座「AIリブートアカデミー」を主宰。ホラクラシー経営やティール組織など次世代の組織開発を実践し、社会全体のウェルビーイングを高めるキャリア支援を牽引してきた。大学・企業・行政機関での講演や研修を通じて「AI時代のキャリア戦略」「人とAIが共創する働き方」を発信し、受講生の意志と可能性を解き放つ場づくりに情熱を注いでいる。AIと人間の共進化をテーマに、ビジネスプロデューサーとしても数多くのプロジェクトを立ち上げ、未来の働き方を共に描くパートナー。",
      gradient: "from-will-primary to-will-secondary",
      image: "/images/naruse.jpg"
    },
    {
      name: "坂本 拓磨",
      title: "AIプロダクト/クリエイティブリード",
      subtitle: "株式会社ウィルフォワード AIスペシャリスト",
      qualification: "一般社団法人生成AI活用普及協会「生成AIパスポート」保有",
      description: "AIアーキテクトとしてRAGやエージェント設計を実務導入し、UI/UXからブランド開発まで統合的に手がける生成AIのプロフェッショナル。NotionやDify、Supabase、Next.jsを組み合わせ、組織のナレッジ運用から顧客体験設計までをシステムとデザインの両面から支援する。生成AIを「もう一つの脳」と捉え、音楽・映像・インタラクティブ作品といったクリエイティブ表現へも展開。受講生一人ひとりのプロジェクトに入り込みながら、技術選定・プロンプト設計・ワークフロー構築を伴走し、自走できるAI活用力を育てる。",
      gradient: "from-wisdom to-harmony",
      image: "/images/sakamoto.jpg"
    },
    {
      name: "青木 玲仁",
      title: "キャリア支援ディレクター",
      subtitle: "株式会社ウィルフォワード ビジネスマネージャー／AIキャリアデザイナー",
      qualification: "一般社団法人生成AI活用普及協会「生成AIパスポート」保有",
      description: "10年以上にわたり採用・教育・人材育成に携わり、企業規模を問わずキャリア設計と現場定着を支援してきたキャリア支援の専門家。生成AIを活用した研修プログラムや映像コンテンツ制作を手がけ、学習デザインから運用までを一気通貫で伴走する。受講生の内発的動機を引き出し、実務で成果へつなげるためのキャリア再設計を、AIリテラシーと人材開発の視点で支える。",
      gradient: "from-harmony to-will-secondary",
      image: "/images/aoki.jpg"
    },
    {
      name: "久米田 克",
      title: "キャリアリブート伴走コーチ",
      subtitle: "大手企業休職中／AIリブートアカデミー事業責任者",
      qualification: "国家資格キャリアコンサルタント／一般社団法人生成AI活用普及協会「生成AIパスポート」保有",
      description: "自らも大手企業を休職し、新たなキャリアを描くために挑戦中のキャリア支援の実践者。AIリブートアカデミー事業責任者として受講生の声を誰よりも近くで拾い、プログラム改善に反映している。国家資格キャリアコンサルタントとしての対話力と、AIプロジェクト運営の経験を活かし、自己理解と行動変容を引き出しながら、実務で使えるAI活用の型を共に築いていく伴走者。",
      gradient: "from-will-secondary to-wisdom",
      image: "/images/kumeda.jpg"
    }
  ];

  return (
    <section className="section-spacing bg-depth-50">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-will-gradient bg-clip-text text-transparent">
              講師・メンター
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-12">
            {instructors.map((instructor, index) => {
              const isExpanded = expandedIndex === index;
              const descriptionId = `instructor-description-${index}`;

              return (
                <motion.button
                  type="button"
                  key={instructor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-20%" }}
                  onClick={() =>
                    setExpandedIndex((current) => (current === index ? null : index))
                  }
                  className="group w-full text-left bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-will-primary/60"
                  aria-expanded={isExpanded}
                  aria-controls={descriptionId}
                >
                  <div className={`h-2 bg-gradient-to-r ${instructor.gradient}`} />
                  <div className="p-6 md:p-8">
                    {instructor.image && (
                      <div className="flex justify-center mb-6">
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md ring-2 ring-white/50 group-hover:ring-will-primary/40 transition-all duration-300">
                          <Image
                            src={instructor.image}
                            alt={`${instructor.name}の写真`}
                            fill
                            sizes="128px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-depth-900 mb-2 text-center md:text-left">
                      {instructor.name}
                    </h3>
                    <p className="text-lg font-semibold text-will-primary mb-1 text-center md:text-left">
                      {instructor.title}
                    </p>
                    {instructor.subtitle && (
                      <p className="text-depth-700 mb-2 text-center md:text-left">
                        {instructor.subtitle}
                      </p>
                    )}
                    {instructor.qualification && (
                      <p className="text-sm text-wisdom font-medium mb-3 text-center md:text-left">
                        {instructor.qualification}
                      </p>
                    )}
                    <div className="relative">
                      <AnimatePresence initial={false}>
                        <motion.p
                          key={isExpanded ? "expanded" : "collapsed"}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          id={descriptionId}
                          className={`text-depth-700 text-center md:text-left leading-relaxed ${
                            isExpanded ? "" : "line-clamp-4"
                          }`}
                        >
                          {instructor.description}
                        </motion.p>
                      </AnimatePresence>
                      <div className="mt-5 flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-will-primary">
                        <span>{isExpanded ? "閉じる" : "全文を見る"}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 5v14" />
                          <path d="m19 12-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-center text-lg text-depth-700"
          >
            他、生成AI活用に関して専門性をもった講師・メンターがサポートします
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};