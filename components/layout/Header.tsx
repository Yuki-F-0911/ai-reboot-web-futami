'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FluidButton } from '@/components/ui/FluidButton';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'AIリブートとは', href: '#mission' },
    { label: '企業向け研修', href: '/corporate' },
    { label: 'アカデミー', href: '/academy' },
    { label: '講師', href: '#instructors' },
    { label: '始める', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md">
      <nav className="container-section py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="relative group flex items-center gap-3">
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
            {/* ホバー時のアンダーライン効果 */}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500" />
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-100 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <FluidButton size="sm" href="#contact">無料相談</FluidButton>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-full h-0.5 bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`} />
              <span className={`absolute w-full h-0.5 bg-gray-100 top-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute w-full h-0.5 bg-gray-100 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`} />
            </div>
          </button>
        </div>

        {/* モバイルメニュー */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-100 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <FluidButton size="sm" href="#contact">無料相談</FluidButton>
          </div>
        </div>
      </nav>
    </header>
  );
};