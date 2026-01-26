'use client';

import { CorporateConsultationForm } from './CorporateConsultationForm';

export const CorporateContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-depth-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* フォーム */}
        <CorporateConsultationForm />

        {/* 補足情報 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-depth-400 mb-2">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <p className="text-sm text-depth-500">
            📧 <a href="mailto:info@ai-reboot.io" className="text-harmony hover:underline">info@ai-reboot.io</a>
          </p>
        </div>
      </div>
    </section>
  );
};
