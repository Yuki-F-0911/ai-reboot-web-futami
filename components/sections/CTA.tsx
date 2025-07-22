'use client';

import React, { useState } from 'react';
import { Button, GradientText } from '@/components/ui';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'personal',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理（実装は後で追加）
    console.log('Form submitted:', formData);
    alert('お問い合わせありがとうございます。担当者より連絡させていただきます。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-ai-dark-gray text-white">
      <div className="container-section">
        <div className="max-w-4xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-4">
              今すぐ<GradientText>無料相談</GradientText>を申し込む
            </h2>
            <p className="text-xl text-gray-300">
              AIで変革する第一歩を、今ここから始めましょう
            </p>
          </div>

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  お名前 <span className="text-ai-pink">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-purple transition-colors"
                  placeholder="山田 太郎"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  メールアドレス <span className="text-ai-pink">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-purple transition-colors"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* 会社名 */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  会社名（法人の場合）
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-purple transition-colors"
                  placeholder="株式会社ウィルフォワード"
                />
              </div>

              {/* お問い合わせ種別 */}
              <div>
                <label htmlFor="type" className="block text-sm font-semibold mb-2">
                  お問い合わせ種別 <span className="text-ai-pink">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-ai-purple transition-colors"
                >
                  <option value="personal" className="text-ai-dark-gray">個人向け（AIリブートアカデミー）</option>
                  <option value="corporate" className="text-ai-dark-gray">法人向け（AI活用コンサルティング）</option>
                  <option value="other" className="text-ai-dark-gray">その他</option>
                </select>
              </div>
            </div>

            {/* メッセージ */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                ご相談内容
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-purple transition-colors resize-none"
                placeholder="AIリブートについて詳しく聞きたい、補助金について知りたい等、お気軽にご記入ください"
              />
            </div>

            {/* 送信ボタン */}
            <div className="text-center">
              <Button type="submit" size="lg">
                無料相談を申し込む
              </Button>
            </div>
          </form>

          {/* 追加情報 */}
          <div className="mt-12 text-center text-gray-300">
            <p className="mb-4">
              お電話でのお問い合わせも承っております
            </p>
            <p className="text-2xl font-bold">
              <a href="tel:0000000000" className="hover:text-ai-purple transition-colors">
                000-0000-0000
              </a>
            </p>
            <p className="text-sm mt-2">
              営業時間：平日 9:00-18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};