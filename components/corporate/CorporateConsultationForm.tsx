'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Building2, User, Calendar, CheckCircle2 } from 'lucide-react';

interface ConsultationFormData {
  // 会社情報
  companyName: string;
  department: string;
  position: string;
  employeeCount: string;
  // 担当者情報
  contactPerson: string;
  email: string;
  phone: string;
  // 相談内容
  currentStatus: string;
  consultationContent: string;
  preferredDate: string;
  howDidYouKnow: string;
  // プライバシーポリシー同意
  privacyAgreed: boolean;
}

const initialFormData: ConsultationFormData = {
  companyName: '',
  department: '',
  position: '',
  employeeCount: '',
  contactPerson: '',
  email: '',
  phone: '',
  currentStatus: '',
  consultationContent: '',
  preferredDate: '',
  howDidYouKnow: '',
  privacyAgreed: false,
};

const employeeCountOptions = [
  { value: '', label: '選択してください' },
  { value: '1-10', label: '1〜10名' },
  { value: '11-50', label: '11〜50名' },
  { value: '51-100', label: '51〜100名' },
  { value: '101-300', label: '101〜300名' },
  { value: '301-500', label: '301〜500名' },
  { value: '501-1000', label: '501〜1,000名' },
  { value: '1001+', label: '1,001名以上' },
];

const currentStatusOptions = [
  { value: '', label: '選択してください' },
  { value: 'not-started', label: 'まだAIは導入していない' },
  { value: 'individual-use', label: '一部の社員が個人的に使用している' },
  { value: 'trial', label: '試験的に導入中' },
  { value: 'partial-deployment', label: '一部部署で本格導入済み' },
  { value: 'company-wide', label: '全社的に導入済み' },
];

const howDidYouKnowOptions = [
  { value: '', label: '選択してください' },
  { value: 'search', label: 'Google等の検索' },
  { value: 'sns', label: 'SNS（X, Facebook, LinkedIn等）' },
  { value: 'referral', label: '知人・同僚からの紹介' },
  { value: 'seminar', label: 'セミナー・イベント' },
  { value: 'media', label: 'メディア記事' },
  { value: 'other', label: 'その他' },
];

export const CorporateConsultationForm = () => {
  const [formData, setFormData] = useState<ConsultationFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = '会社名は必須です';
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'ご担当者名は必須です';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号は必須です';
    }
    if (!formData.employeeCount) {
      newErrors.employeeCount = '従業員数を選択してください';
    }
    if (!formData.currentStatus) {
      newErrors.currentStatus = 'AI活用状況を選択してください';
    }
    if (!formData.consultationContent.trim()) {
      newErrors.consultationContent = 'ご相談内容は必須です';
    }
    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = 'プライバシーポリシーへの同意が必要です';
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
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
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

  const handleInputChange = (
    field: keyof ConsultationFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // 送信成功時の表示
  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-depth-100 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-depth-800 mb-4">
          お申し込みありがとうございます
        </h3>
        <p className="text-depth-600 mb-6 leading-relaxed">
          無料相談のお申し込みを受け付けました。<br />
          ご入力いただいたメールアドレスに確認メールをお送りしましたので、ご確認ください。<br />
          <span className="font-medium">2営業日以内</span>に担当者よりご連絡いたします。
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-harmony hover:text-harmony-dark font-medium transition-colors"
        >
          別の相談を申し込む
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-depth-100">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-depth-800 mb-2">
          無料相談お申し込みフォーム
        </h3>
        <p className="text-sm text-depth-500">
          <span className="text-red-500">*</span> は必須項目です
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 会社情報セクション */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-depth-100">
            <Building2 className="w-5 h-5 text-harmony" />
            <h4 className="font-bold text-depth-800">会社情報</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 会社名 */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-depth-700 mb-2">
                会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all ${
                  errors.companyName ? 'border-red-400' : 'border-depth-200'
                }`}
                placeholder="株式会社〇〇"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
              )}
            </div>

            {/* 部署名 */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-depth-700 mb-2">
                部署名
              </label>
              <input
                type="text"
                id="department"
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-depth-200 rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all"
                placeholder="人事部"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 役職 */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-depth-700 mb-2">
                役職
              </label>
              <input
                type="text"
                id="position"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-depth-200 rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all"
                placeholder="部長"
              />
            </div>

            {/* 従業員数 */}
            <div>
              <label htmlFor="employeeCount" className="block text-sm font-medium text-depth-700 mb-2">
                従業員数 <span className="text-red-500">*</span>
              </label>
              <select
                id="employeeCount"
                value={formData.employeeCount}
                onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all ${
                  errors.employeeCount ? 'border-red-400' : 'border-depth-200'
                }`}
              >
                {employeeCountOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.employeeCount && (
                <p className="mt-1 text-sm text-red-500">{errors.employeeCount}</p>
              )}
            </div>
          </div>
        </div>

        {/* 担当者情報セクション */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-depth-100">
            <User className="w-5 h-5 text-harmony" />
            <h4 className="font-bold text-depth-800">ご担当者情報</h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* ご担当者名 */}
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-depth-700 mb-2">
                ご担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactPerson"
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all ${
                  errors.contactPerson ? 'border-red-400' : 'border-depth-200'
                }`}
                placeholder="山田 太郎"
              />
              {errors.contactPerson && (
                <p className="mt-1 text-sm text-red-500">{errors.contactPerson}</p>
              )}
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-depth-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-400' : 'border-depth-200'
                }`}
                placeholder="03-1234-5678"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-depth-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all ${
                errors.email ? 'border-red-400' : 'border-depth-200'
              }`}
              placeholder="example@company.co.jp"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        {/* 相談内容セクション */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-depth-100">
            <Calendar className="w-5 h-5 text-harmony" />
            <h4 className="font-bold text-depth-800">ご相談内容</h4>
          </div>

          {/* AI活用の現状 */}
          <div>
            <label htmlFor="currentStatus" className="block text-sm font-medium text-depth-700 mb-2">
              現在のAI活用状況 <span className="text-red-500">*</span>
            </label>
            <select
              id="currentStatus"
              value={formData.currentStatus}
              onChange={(e) => handleInputChange('currentStatus', e.target.value)}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all ${
                errors.currentStatus ? 'border-red-400' : 'border-depth-200'
              }`}
            >
              {currentStatusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.currentStatus && (
              <p className="mt-1 text-sm text-red-500">{errors.currentStatus}</p>
            )}
          </div>

          {/* 相談内容 */}
          <div>
            <label htmlFor="consultationContent" className="block text-sm font-medium text-depth-700 mb-2">
              ご相談内容・ご希望の研修内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="consultationContent"
              value={formData.consultationContent}
              onChange={(e) => handleInputChange('consultationContent', e.target.value)}
              rows={5}
              className={`w-full px-4 py-3 bg-white border rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all resize-none ${
                errors.consultationContent ? 'border-red-400' : 'border-depth-200'
              }`}
              placeholder="例：営業部門でのAI活用を検討しています。提案書作成や顧客対応の効率化について相談したいです。"
            />
            {errors.consultationContent && (
              <p className="mt-1 text-sm text-red-500">{errors.consultationContent}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* ご希望の相談日時 */}
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-depth-700 mb-2">
                ご希望の相談日時
              </label>
              <input
                type="text"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-depth-200 rounded-lg text-depth-900 placeholder-depth-400 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all"
                placeholder="例：平日10時〜17時希望"
              />
            </div>

            {/* 知ったきっかけ */}
            <div>
              <label htmlFor="howDidYouKnow" className="block text-sm font-medium text-depth-700 mb-2">
                本サービスを知ったきっかけ
              </label>
              <select
                id="howDidYouKnow"
                value={formData.howDidYouKnow}
                onChange={(e) => handleInputChange('howDidYouKnow', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-depth-200 rounded-lg text-depth-900 focus:outline-none focus:ring-2 focus:ring-harmony focus:border-transparent transition-all"
              >
                {howDidYouKnowOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* プライバシーポリシー同意 */}
        <div className="space-y-4">
          <div className={`flex items-start gap-3 p-4 rounded-lg ${errors.privacyAgreed ? 'bg-red-50 border border-red-200' : 'bg-depth-50'}`}>
            <input
              type="checkbox"
              id="privacyAgreed"
              checked={formData.privacyAgreed}
              onChange={(e) => handleInputChange('privacyAgreed', e.target.checked)}
              className="mt-1 w-5 h-5 text-harmony border-depth-300 rounded focus:ring-harmony"
            />
            <label htmlFor="privacyAgreed" className="text-sm text-depth-600">
              <a href="/privacy" target="_blank" className="text-harmony hover:underline font-medium">
                プライバシーポリシー
              </a>
              に同意の上、送信します。<span className="text-red-500">*</span>
            </label>
          </div>
          {errors.privacyAgreed && (
            <p className="text-sm text-red-500">{errors.privacyAgreed}</p>
          )}
        </div>

        {/* エラーメッセージ */}
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
          className="w-full py-4 bg-harmony hover:bg-harmony-dark text-white font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg shadow-harmony/20 hover:shadow-xl hover:shadow-harmony/30"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              送信中...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              無料相談を申し込む
            </>
          )}
        </button>

        <p className="text-center text-xs text-depth-400">
          ※ 2営業日以内に担当者よりご連絡いたします
        </p>
      </form>
    </div>
  );
};
