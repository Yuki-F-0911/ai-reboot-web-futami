"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    concerns: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // ここで実際のフォーム送信処理を行う
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (step === 1 && formData.name && formData.email) {
      setStep(2);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mb-4 flex justify-center">
          <svg className="w-16 h-16 text-harmony" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-depth-900 mb-2">
          お申し込みありがとうございます！
        </h3>
        <p className="text-depth-700">
          24時間以内に担当者よりご連絡させていただきます。
        </p>
      </motion.div>
    );
  }

  return (
    <section id="application" className="section-spacing bg-gradient-to-b from-white to-will-lighter">
      <div className="container-section">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-will-gradient bg-clip-text text-transparent">
                無料説明会お申し込み
              </span>
            </h2>
            <p className="text-lg text-depth-700">
              まずは無料説明会で、プログラムの詳細をご確認ください
            </p>
          </motion.div>

          {/* プログレスバー */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-semibold ${step >= 1 ? 'text-will-primary' : 'text-depth-400'}`}>
                基本情報
              </span>
              <span className={`text-sm font-semibold ${step >= 2 ? 'text-will-primary' : 'text-depth-400'}`}>
                詳細情報
              </span>
            </div>
            <div className="w-full h-2 bg-depth-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-will-primary to-harmony"
                animate={{ width: `${step * 50}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-elevated p-10">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-depth-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-depth-200 focus:border-will-primary focus:ring-2 focus:ring-will-primary/20 transition-all"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-depth-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-depth-200 focus:border-will-primary focus:ring-2 focus:ring-will-primary/20 transition-all"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-depth-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-depth-200 focus:border-will-primary focus:ring-2 focus:ring-will-primary/20 transition-all"
                      placeholder="090-1234-5678"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.name || !formData.email}
                    className="px-8 py-3 bg-will-primary text-white font-semibold rounded-lg hover:bg-will-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-will-primary/20"
                  >
                    次へ進む
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-semibold text-depth-700 mb-2">
                      希望日時
                    </label>
                    <select
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-depth-200 focus:border-will-primary focus:ring-2 focus:ring-will-primary/20 transition-all"
                    >
                      <option value="">選択してください</option>
                      <option value="2024-02-10">2月10日（土）14:00-16:00</option>
                      <option value="2024-02-17">2月17日（土）14:00-16:00</option>
                      <option value="2024-02-24">2月24日（土）14:00-16:00</option>
                      <option value="other">その他（ご相談）</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="concerns" className="block text-sm font-semibold text-depth-700 mb-2">
                      ご質問・ご相談内容
                    </label>
                    <textarea
                      id="concerns"
                      name="concerns"
                      value={formData.concerns}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-depth-200 focus:border-will-primary focus:ring-2 focus:ring-will-primary/20 transition-all resize-none"
                      placeholder="気になること、不安なことなど、お気軽にご記入ください"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border-2 border-depth-300 text-depth-700 font-semibold rounded-full hover:bg-depth-50 transition-all"
                  >
                    戻る
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-will-primary text-white font-semibold rounded-lg hover:bg-will-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md shadow-will-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        送信中...
                      </>
                    ) : (
                      "申し込む"
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>

          {/* 補足情報 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-depth-600"
          >
            <p>
              ※ お申し込み後、24時間以内に担当者よりご連絡いたします。
              <br />
              ※ 無料説明会は約2時間を予定しています。
              <br />
              ※ オンライン（Zoom）での開催となります。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};