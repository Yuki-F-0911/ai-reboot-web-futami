"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface Instructor {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  achievements?: string[];
  image: string;
}

export const CorporateInstructors = () => {
  const ref = useRef(null);
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
      image: "/images/aoki.jpg"
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container-section px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-depth-800">
            講師・支援体制
          </h2>
          <p className="text-sm md:text-base text-depth-600">
            実務経験豊富な、現役AIコンサルタントが支援
          </p>
        </div>

        {/* カード（3列） */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {instructors.map((instructor, index) => (
              <button
                type="button"
                key={index}
                className="text-left bg-depth-50 rounded-lg p-4 md:p-5 hover:bg-depth-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-harmony/50"
                onClick={() => { setSelected(instructor); setIsOpen(true); }}
              >
                <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative overflow-hidden rounded-full flex-shrink-0 sm:mb-3">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 sm:text-center">
                    <h4 className="text-xs font-medium text-harmony mb-0.5 sm:mb-1">{instructor.title}</h4>
                    <p className="text-sm font-bold text-depth-800 mb-0.5 sm:mb-1">{instructor.name}</p>
                    <p className="text-xs text-depth-500 line-clamp-2 sm:text-center">{instructor.subtitle}</p>
                    <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-harmony text-xs font-medium">
                      <span>詳しく見る</span>
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </button>
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
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            >
              {/* 背景 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40"
                onClick={() => setIsOpen(false)}
              />

              {/* コンテンツ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-t-2xl sm:rounded-lg border border-depth-100 max-w-2xl w-full p-5 sm:p-6 overflow-y-auto max-h-[90vh] sm:max-h-[85vh]"
              >
                <button
                  type="button"
                  className="absolute top-3 right-3 p-2 rounded-full hover:bg-depth-50"
                  onClick={() => setIsOpen(false)}
                  aria-label="閉じる"
                >
                  <svg className="w-5 h-5 sm:w-4 sm:h-4 text-depth-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
                </button>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 relative overflow-hidden rounded-lg">
                      <Image src={selected.image} alt={selected.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-harmony font-medium text-sm mb-1">{selected.title}</h4>
                    <h3 className="text-lg sm:text-xl font-bold text-depth-800 mb-1">{selected.name}</h3>
                    <p className="text-depth-500 text-xs sm:text-sm mb-3 sm:mb-4">{selected.subtitle}</p>
                    <p className="text-sm text-depth-600 leading-relaxed mb-4 sm:mb-5 text-left">{selected.description}</p>
                    {selected.achievements && (
                      <div className="bg-depth-50 p-3 sm:p-4 rounded-lg text-left">
                        <h5 className="font-medium text-depth-800 text-sm mb-2">主な実績</h5>
                        <ul className="space-y-1.5">
                          {selected.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                              <span className="text-harmony mt-0.5 flex-shrink-0">•</span>
                              <span className="text-depth-600">{achievement}</span>
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