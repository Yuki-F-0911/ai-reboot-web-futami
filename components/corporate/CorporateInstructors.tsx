"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const CorporateInstructors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const instructors = [
    {
      name: "成瀬 拓也（なるせ たくや）",
      title: "代表講師・PM",
      subtitle: "株式会社ウィルフォワード 代表取締役 / 株式会社Lively 共同創業者CSO / 筑波大学 非常勤講師",
      description: "経営者・教育者としての経験を活かし、AIを活用したキャリア支援の最前線で活動。株式会社ウィルフォワードを率いて、ホラクラシー経営やティール組織など、いち早く「働き方改革」の実践に取り組み、社員一人ひとりがウェルビーイングなキャリア選択を行える社会の実現を目指し、起業家・ビジネスマン・アスリート・政治家など多様なキャリア支援を行ってきた。近年は生成AIの急速な普及を背景に、AIと共生する時代のキャリア形成に注力。経済産業省認定のリスキリング講座「AIリブートアカデミー」を主宰し、マインドセットとスキルを実践的に身につける学びを提供している。さらに、趣味のマラソンではフルマラソン2時間34分の記録を持ち、マスターズアスリートとして世界大会にも出場。自身でもウェルネスとウェルビーイングを追求し続けている。",
      color: "harmony",
      image: "/images/naruse.jpg"
    },
    {
      name: "坂本 拓磨（さかもと たくま）",
      title: "AI活用支援・開発リード",
      subtitle: "株式会社ウィルフォワード AIスペシャリスト／クリエイティブリード",
      description: "ウェブ制作から映像、音楽、写真まで多岐にわたるクリエイティブ分野での経験を基に、現在は株式会社ウィルフォワードにてAI技術を活用した組織変革や人材育成プロジェクトを牽引。特に、経済産業省認定のリスキリング講座「AIリブートアカデミー」では、カリキュラム設計や技術実装を担当し、多くのビジネスパーソンのAIスキル習得を支援している。「AIはもう一つの脳である」という哲学のもと、RAG（Retrieval-Augmented Generation）を用いたナレッジシステムの構築や、複数のAIを連携させるエージェント設計を得意とする。また、AIとUXデザイン、心理学の知見を融合させ、「Lively Talk」や「Back Aging」といった新規事業のブランド設計・AI実装もリード。個人としてはトレイルランナーとしても活動。「体力こそが最強のポータブルスキルである」という信念を持つ。",
      color: "will-primary",
      image: "/images/sakamoto.jpg"
    },
    {
      name: "青木 玲仁（あおき　りょうと）",
      title: "AI活用支援・現場定着リード",
      subtitle: "株式会社ウィルフォワード AI活用コンサルタント",
      description: "採用やクリエイティブ職で培った「人」と「業務」への深い洞察を強みに、企業のAI活用を推進するコンサルタント。机上の空論ではない、現場に寄り添った業務プロセス設計、ツール導入、推進体制の構築を得意とする。自らもバックオフィス業務を担う実践者として、AI技術の組織へのスムーズな定着をリードする。",
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
                  <p className="text-depth-700 leading-relaxed">
                    {instructor.description}
                  </p>
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