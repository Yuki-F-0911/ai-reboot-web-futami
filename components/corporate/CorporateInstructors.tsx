"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-depth-100 to-white">
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
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-elevated hover:shadow-floating transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* プロフィール画像 */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 relative overflow-hidden rounded-2xl mx-auto md:mx-0">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* プロフィール内容 */}
                <div className="flex-1">
                  {/* 役職 */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-depth-800">
                      {instructor.title}
                    </h3>
                    <h4 className="text-xl font-bold mb-2 text-harmony">
                      {instructor.name}
                    </h4>
                    <p className="text-depth-600 font-medium">
                      {instructor.subtitle}
                    </p>
                  </div>
                  
                  {/* 説明 */}
                  <p className="text-depth-700 leading-relaxed mb-6">
                    {instructor.description}
                  </p>
                  
                  {/* 主な実績 */}
                  {instructor.achievements && (
                    <div className="bg-gradient-to-r from-depth-50 to-white p-6 rounded-2xl">
                      <h5 className="font-bold text-depth-800 mb-3">主な実績</h5>
                      <ul className="space-y-2">
                        {instructor.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`text-${instructor.color} mt-1`}>•</span>
                            <span className="text-depth-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* その他専門メンター */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-harmony-lighter to-will-lighter rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-depth-800 text-center">その他専門メンター</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-depth-700">
                <li className="flex items-start gap-2">
                  <span className="text-harmony mt-1">•</span>
                  <span>生成AIパスポート有資格者</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-harmony mt-1">•</span>
                  <span>各業界のAI活用スペシャリスト</span>
                </li>
              </ul>
              <ul className="space-y-2 text-depth-700">
                <li className="flex items-start gap-2">
                  <span className="text-will-primary mt-1">•</span>
                  <span>データサイエンティスト</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-will-primary mt-1">•</span>
                  <span>エンジニア・デザイナー</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};