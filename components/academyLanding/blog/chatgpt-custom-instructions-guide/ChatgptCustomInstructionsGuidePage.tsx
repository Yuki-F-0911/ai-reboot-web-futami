"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

type Props = {
  faqItems: readonly FaqItem[];
};

export default function ChatgptCustomInstructionsGuidePage({ faqItems }: Props) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <motion.div initial="hidden" animate="visible" variants={sectionReveal}>
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/academy">アカデミー</Link>
            <span className="mx-2">/</span>
            <Link href="/academy/blog">ブログ</Link>
            <span className="mx-2">/</span>
            <span>ChatGPTのカスタム指示完全ガイド</span>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            ChatGPTのカスタム指示（Custom Instructions）完全ガイド｜設定するだけで毎回の回答が劇的に変わる方法
          </h1>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">よくある質問</h2>
          <dl className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-4">
                <dt className="font-bold text-gray-800 mb-2">{item.question}</dt>
                <dd className="text-gray-700">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="bg-green-50 rounded-lg p-6 text-center"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-2">AIをもっと活用したい方へ</h2>
          <p className="text-gray-600 mb-4">
            AIリブートのLINEを追加して、無料の学習サポートを受け取りましょう。
          </p>
          <a
            href="https://bexn9pao.autosns.app/line?src=blog&slug=chatgpt-custom-instructions-guide&bonus=bonus06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            LINEで無料サポートを受け取る
          </a>
        </motion.section>
      </div>
    </main>
  );
}
