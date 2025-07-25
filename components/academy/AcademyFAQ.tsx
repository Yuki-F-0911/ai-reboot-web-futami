"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const AcademyFAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "プログラミング経験がなくても受講できますか？",
      answer: "はい、プログラミング経験は必要ありません。AIツールの活用に焦点を当てており、ノーコード・ローコードツールを中心に学習します。技術的な背景がなくても、AIを業務に活用できるスキルが身につきます。"
    },
    {
      question: "働きながら受講することは可能ですか？",
      answer: "はい、働きながらの受講を前提に設計されています。週末のオンライン講座と、録画視聴による柔軟な学習が可能です。多くの受講生が仕事と両立しながら修了しています。"
    },
    {
      question: "補助金の申請は難しいですか？",
      answer: "補助金申請は当社が全面的にサポートします。必要書類の準備から申請手続きまで、専門スタッフが丁寧にご案内しますので、初めての方でも安心して申請いただけます。"
    },
    {
      question: "どのようなAIツールを学習しますか？",
      answer: "ChatGPT、Claude、Midjourney、Stable Diffusionなどの主要な生成AIツールから、Zapier、Make、Notionなどの業務自動化ツールまで、実践的なツールを幅広く学習します。"
    },
    {
      question: "受講後のサポートはありますか？",
      answer: "修了後も専用のコミュニティで継続的な情報交換が可能です。また、最新のAI情報やアップデート情報も定期的に共有され、スキルを維持・向上できる環境を提供しています。"
    },
    {
      question: "他のAIスクールとの違いは何ですか？",
      answer: "単なるツールの使い方ではなく、「生き方を変える」ことに焦点を当てています。自己分析から始まり、AIを活用した新しいキャリアデザインまで、包括的な成長をサポートする点が最大の特徴です。"
    },
    {
      question: "受講料の分割払いは可能ですか？",
      answer: "はい、分割払いに対応しています。3回、6回、12回払いから選択可能で、無理のない支払いプランをご提案します。詳細は個別相談会でご案内いたします。"
    },
    {
      question: "地方からでも参加できますか？",
      answer: "はい、全国どこからでも参加可能です。オンライン講座を中心に、必要に応じて東京での対面セッションも用意しています。遠方の方には宿泊支援制度もございます。"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-depth-800">
            よくある質問
          </h2>
          <p className="text-xl text-depth-700">
            受講に関するご質問にお答えします
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border border-depth-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-depth-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-depth-800 pr-4">
                  {faq.question}
                </h3>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-will-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-depth-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-depth-600">
            その他のご質問は、お気軽に
            <a href="/contact" className="text-will-primary hover:underline mx-1">
              お問い合わせ
            </a>
            ください。
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export { AcademyFAQ }