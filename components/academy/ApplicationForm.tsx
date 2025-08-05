"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const ApplicationForm = () => {
  // Google フォームのURL（実際のURLに置き換えてください）
  const GOOGLE_FORM_URL = "https://forms.google.com/your-form-url";

  return (
    <section id="application" className="section-spacing bg-gradient-to-b from-white to-will-lighter">
      <div className="container-section">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-will-gradient bg-clip-text text-transparent">
                無料説明会お申し込み
              </span>
            </h2>
            <p className="text-lg text-depth-700 mb-8">
              まずは無料説明会で、プログラムの詳細をご確認ください
            </p>
            
            <div className="bg-white rounded-3xl shadow-elevated p-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-will-primary/10 text-will-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  開催スケジュールは個別にご案内いたします
                </div>
                
                <h3 className="text-xl font-bold text-depth-900 mb-4">
                  お申し込みはGoogleフォームから
                </h3>
                <p className="text-depth-700 mb-8">
                  以下のボタンからGoogleフォームへアクセスし、
                  <br />
                  必要事項をご記入の上、お申し込みください。
                </p>
              </div>
              
              <Link
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-will-primary text-white font-bold text-lg rounded-full hover:bg-will-primary/90 transition-all shadow-lg shadow-will-primary/20 hover:shadow-xl hover:shadow-will-primary/30"
              >
                <span>無料説明会に申し込む</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              
              {/* 補足情報 */}
              <div className="mt-10 pt-8 border-t border-depth-100">
                <div className="text-sm text-depth-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    無料説明会は約1時間を予定しています
                  </p>
                  <p className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-will-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    オンラインでの開催となります
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};