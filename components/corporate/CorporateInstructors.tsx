"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface Instructor {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  achievements?: string[];
  color: string;
  image: string;
}

export const CorporateInstructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Instructor | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const instructors: Instructor[] = [
    {
      name: "成瀬 拓也（なるせ たくや）",
      title: "代表講師・PM",
      subtitle: "株式会社ウィルフォワード 代表取締役 / 株式会社Lively 共同創業者CSO / 筑波大学 非常勤講師",
      description: "経営者・教育者としての経験を活かし、AIを活用したキャリア支援の最前線で活動。株式会社ウィルフォワードを率いて、ホラクラシー経営やティール組織など、いち早く「働き方改革」の実践に取り組み、社員一人ひとりがウェルビーイングなキャリア選択を行える社会の実現を目指してきた。近年は生成AIの急速な普及を背景に、AIと共生する時代のキャリア形成に注力。経済産業省認定のリスキリング講座「AIリブートアカデミー」を主宰し、マインドセットとスキルを実践的に身につける学びを提供している。大学講義から企業研修、一般向けセミナーまで幅広く登壇し、「AI時代のキャリア戦略」や「ウェルビーイングと仕事の両立」をテーマにメッセージを発信している。",
      achievements: [
        "株式会社ウィルフォワード代表として、ホラクラシー経営・ティール組織による組織開発を実践",
        "起業家・ビジネスマン・アスリート・政治家など多様なキャリア支援を実施",
        "経済産業省認定リスキリング講座「AIリブートアカデミー」主宰",
        "筑波大学非常勤講師として、AI時代のキャリア戦略を教授",
        "マスターズアスリートとしてフルマラソン2時間34分の記録保持者、世界大会出場"
      ],
      color: "harmony",
      image: "/images/naruse.jpg"
    },
    {
      name: "坂本 拓磨（さかもと たくま）",
      title: "AI活用支援・開発リード",
      subtitle: "株式会社ウィルフォワード AIスペシャリスト／クリエイティブリード",
      description: "ウェブ制作から映像、音楽、写真まで多岐にわたるクリエイティブ分野での経験を基に、株式会社ウィルフォワードにてAI技術を活用した組織変革や人材育成プロジェクトを牽引。経済産業省認定のリスキリング講座「AIリブートアカデミー」では、カリキュラム設計や技術実装を担当し、多くのビジネスパーソンのAIスキル習得を支援している。「AIはもう一つの脳である」という哲学のもと、RAG（Retrieval-Augmented Generation）を用いたナレッジシステムの構築や、複数のAIを連携させるエージェント設計を得意とする。Notion、Dify、Supabase、Next.jsといった最新技術を組み合わせ、クライアントの課題解決に直結する実践的なAIシステム開発を実現。AIとUXデザイン、心理学の知見を融合させ、「Lively Talk」や「Back Aging」といった新規事業のブランド設計・AI実装もリードしている。",
      achievements: [
        "経済産業省認定リスキリング講座「AIリブートアカデミー」のカリキュラム設計・技術実装担当",
        "RAGを用いたナレッジシステム構築、AIエージェント設計の多数実装",
        "Notion、Dify、Supabase、Next.jsを活用した実践的なAIシステム開発",
        "「Lively Talk」「Back Aging」など新規事業のブランド設計・AI実装をリード",
        "トレイルランナーとして活動、身体的挑戦を通じた創造的思考の実践"
      ],
      color: "will-primary",
      image: "/images/sakamoto.jpg"
    },
    {
      name: "青木 玲仁（あおき　りょうと）",
      title: "AI活用支援・現場定着リード",
      subtitle: "株式会社ウィルフォワード ビジネスマネージャー／AIキャリアデザイナー",
      description: "10年以上にわたり、自社の採用・教育・人材育成に携わり、個人と組織の成長支援を実践。中小企業から大手企業まで、採用戦略や教育体系の設計、キャリア支援のコンサルティングを数多く手がけてきた。経営と現場、企業と個人の双方に寄り添いながら、組織の基盤づくりと人材開発を推進している。近年は、生成AIを活用した採用・教育領域でのクリエイティブ制作やプログラム設計を推進。仕事体感プログラムや教育研修向けの映像コンテンツを中心に、企画から編集までを一貫して手がけるなど、AIを実務に統合する支援を多数行っている。AIリブート研修では、キャリア理論とAIリテラシーを組み合わせ、「AI時代における自分の価値を再定義し、キャリアを再起動（リブート）する」実践的な学びを提供する。",
      achievements: [
        "自社で10年間、人事（採用・教育）を担当し、組織開発・人材育成を推進",
        "中小〜大手企業の採用支援および教育プログラム設計のコンサルティング経験",
        "生成AIを活用した仕事体感プログラム・教育研修コンテンツの企画〜編集を多数実施",
        "キャリア支援とAIリテラシーを融合した研修プログラムの開発・監修"
      ],
      color: "wisdom",
      image: "/images/aoki.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-depth-100 to-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-bold mb-8 text-depth-800">
            講師・支援体制
          </h2>
          <p className="text-xl text-depth-700">
            実務経験豊富な、現役AIコンサルタントが支援
          </p>
        </motion.div>

        {/* カード（3列） */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <motion.button
                type="button"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-left bg-white rounded-3xl p-6 shadow-elevated hover:shadow-floating hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-harmony/50"
                onClick={() => { setSelected(instructor); setIsOpen(true); }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 relative overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-base font-bold text-harmony mb-1">{instructor.title}</h4>
                  <p className="text-lg font-bold text-depth-800 mb-2">{instructor.name}</p>
                  <p className="text-sm text-depth-600 line-clamp-2 text-center min-h-[3.5rem]">{instructor.subtitle}</p>
                  <div className="mt-4 w-full">
                    <p className="text-sm text-depth-700 line-clamp-3">{instructor.description}</p>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-harmony font-bold">
                    <span>詳しく見る</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* モーダル */}
        <AnimatePresence>
          {isOpen && selected && (
            <motion.div
              key="instructor-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              {/* 背景 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsOpen(false)}
              />

              {/* コンテンツ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-3xl shadow-elevated border border-depth-100 max-w-3xl w-[92%] p-6 md:p-8 overflow-y-auto max-h-[85vh]"
              >
                <button
                  type="button"
                  className="absolute top-3 right-3 p-2 rounded-full hover:bg-depth-50"
                  onClick={() => setIsOpen(false)}
                  aria-label="閉じる"
                >
                  <svg className="w-5 h-5 text-depth-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
                </button>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 md:w-32 md:h-32 relative overflow-hidden rounded-2xl">
                      <Image src={selected.image} alt={selected.name} width={128} height={128} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-harmony font-bold text-base md:text-lg mb-1">{selected.title}</h4>
                    <h3 className="text-2xl md:text-3xl font-bold text-depth-800 mb-2">{selected.name}</h3>
                    <p className="text-depth-600 font-medium mb-4">{selected.subtitle}</p>
                    <p className="text-depth-700 leading-relaxed mb-6">{selected.description}</p>
                    {selected.achievements && (
                      <div className="bg-gradient-to-r from-depth-50 to-white p-6 rounded-2xl">
                        <h5 className="font-bold text-depth-800 mb-3">主な実績</h5>
                        <ul className="space-y-2">
                          {selected.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className={`text-${selected.color} mt-1`}>•</span>
                              <span className="text-depth-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};