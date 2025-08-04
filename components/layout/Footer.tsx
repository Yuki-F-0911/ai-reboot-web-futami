'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    services: [
      { label: 'AIリブートアカデミー', href: '/academy' },
      { label: 'プログラム詳細', href: '/academy#program' },
      { label: '受講生の声', href: '#testimonials' },
    ],
    company: [
      { label: '会社概要', href: '#company' },
      { label: 'ミッション', href: '#mission' },
      { label: 'お知らせ', href: '#news' },
    ],
    support: [
      { label: 'よくある質問', href: '#faq' },
      { label: 'お問い合わせ', href: '#contact' },
      { label: 'プライバシーポリシー', href: '#privacy' },
    ],
  };

  return (
    <footer className="bg-ai-dark-gray text-white">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="col-span-1">
            <Link href="/" className="relative group flex items-center gap-3 mb-4">
              {/* シンボルマーク */}
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="AI REBOOT"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              {/* テキスト部分 */}
              <span className="text-2xl font-light tracking-wider text-white">
                AI
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ml-2">
                  REBOOT
                </span>
              </span>
            </Link>
            <p className="text-ai-light-gray text-sm">
              あなたの「Will」から始まる、AI時代のキャリア変革
            </p>
          </div>

          {/* サービス */}
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ai-light-gray hover:text-white transition-colors duration-base text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ai-light-gray hover:text-white transition-colors duration-base text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h4 className="font-semibold mb-4">サポート</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ai-light-gray hover:text-white transition-colors duration-base text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 経済産業省リスキリング支援事業 */}
        <div className="mt-8 pt-8 border-t border-ai-medium-gray">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/images/keisan-reskiling-logo-darkbg.webp"
              alt="経済産業省 リスキリング通じたキャリアアップ支援事業"
              width={240}
              height={70}
              className="h-14 md:h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-center text-ai-light-gray text-sm">
              経済産業省リスキリング支援事業 採択プログラム
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-4 text-center">
          <p className="text-ai-light-gray text-sm">
            © {currentYear} ウィルフォワード株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};