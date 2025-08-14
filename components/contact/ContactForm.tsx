'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Building2, User, Loader2 } from 'lucide-react';

type ContactType = 'individual' | 'corporate';

interface FormData {
  contactType: ContactType;
  // 共通項目
  email: string;
  subject: string;
  message: string;
  // 個人用項目
  name?: string;
  phone?: string;
  // 法人用項目
  companyName?: string;
  department?: string;
  position?: string;
  employeeCount?: string;
  contactPerson?: string;
  companyPhone?: string;
}

export function ContactForm() {
  const [contactType, setContactType] = useState<ContactType>('individual');
  const [formData, setFormData] = useState<FormData>({
    contactType: 'individual',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    // 共通項目のバリデーション
    if (!formData.email) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    if (!formData.subject) {
      newErrors.subject = '件名は必須です';
    }

    if (!formData.message) {
      newErrors.message = 'お問い合わせ内容は必須です';
    }

    // 個人用項目のバリデーション
    if (contactType === 'individual') {
      if (!formData.name) {
        newErrors.name = 'お名前は必須です';
      }
    }

    // 法人用項目のバリデーション
    if (contactType === 'corporate') {
      if (!formData.companyName) {
        newErrors.companyName = '会社名は必須です';
      }
      if (!formData.contactPerson) {
        newErrors.contactPerson = 'ご担当者名は必須です';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // フォームをリセット
        setFormData({
          contactType,
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // エラーをクリア
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleContactTypeChange = (type: ContactType) => {
    setContactType(type);
    setFormData(prev => ({ ...prev, contactType: type }));
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
      {/* 法人/個人切り替え */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => handleContactTypeChange('individual')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
              contactType === 'individual'
                ? 'bg-will-primary text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <User className="w-4 h-4" />
            個人のお客様
          </button>
          <button
            type="button"
            onClick={() => handleContactTypeChange('corporate')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
              contactType === 'corporate'
                ? 'bg-will-primary text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Building2 className="w-4 h-4" />
            法人のお客様
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {contactType === 'individual' ? (
            <motion.div
              key="individual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* 個人用フィールド */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all ${
                    errors.name ? 'border-red-400' : 'border-gray-300'
                  }`}
                  placeholder="山田 太郎"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all"
                  placeholder="090-1234-5678"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="corporate"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* 法人用フィールド */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName || ''}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all ${
                      errors.companyName ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="株式会社〇〇"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    部署名
                  </label>
                  <input
                    type="text"
                    id="department"
                    value={formData.department || ''}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all"
                    placeholder="人事部"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                    ご担当者名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    value={formData.contactPerson || ''}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all ${
                      errors.contactPerson ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="山田 太郎"
                  />
                  {errors.contactPerson && (
                    <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    役職
                  </label>
                  <input
                    type="text"
                    id="position"
                    value={formData.position || ''}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all"
                    placeholder="課長"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                    従業員数
                  </label>
                  <select
                    id="employeeCount"
                    value={formData.employeeCount || ''}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all"
                  >
                    <option value="">選択してください</option>
                    <option value="1-10">1-10名</option>
                    <option value="11-50">11-50名</option>
                    <option value="51-100">51-100名</option>
                    <option value="101-500">101-500名</option>
                    <option value="501-1000">501-1000名</option>
                    <option value="1001+">1001名以上</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="companyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="companyPhone"
                    value={formData.companyPhone || ''}
                    onChange={(e) => handleInputChange('companyPhone', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all"
                    placeholder="03-1234-5678"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 共通フィールド */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all ${
              errors.email ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            件名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all ${
              errors.subject ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="お問い合わせの件名"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={6}
            className={`w-full px-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-will-primary focus:border-transparent transition-all resize-none ${
              errors.message ? 'border-red-400' : 'border-gray-300'
            }`}
            placeholder="お問い合わせ内容をご記入ください"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* 送信ステータス */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-300 rounded-lg text-green-700"
          >
            お問い合わせを送信しました。担当者より折り返しご連絡いたします。
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-300 rounded-lg text-red-700"
          >
            送信に失敗しました。しばらく時間をおいて再度お試しください。
          </motion.div>
        )}

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-will-primary to-will-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-will-primary/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              送信中...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              送信する
            </>
          )}
        </button>
      </form>
    </div>
  );
}