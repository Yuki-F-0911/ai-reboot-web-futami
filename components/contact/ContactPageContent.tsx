'use client';

import { ContactForm } from '@/components/contact/ContactForm';
import { motion } from 'framer-motion';

export default function ContactPageContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            お問い合わせ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            AIリブート事業に関するご質問・ご相談はこちらから
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
