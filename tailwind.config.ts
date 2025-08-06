import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Will（意思）を中心とした感情的カラーパレット
        'will': {
          'primary': '#FF4B8B',
          'secondary': '#9747FF',
          'tertiary': '#3B82F6',
          'light': '#FFE4ED',
          'lighter': '#FFF4F7',
        },
        'warmth': '#FF6B9D',
        'growth': '#C44569',
        'wisdom': {
          'DEFAULT': '#574B90',
          'light': '#E9D5FF',
          'lighter': '#F5EDFF',
        },
        'harmony': {
          'DEFAULT': '#2E86AB',
          'light': '#DBEAFE',
          'lighter': '#EBF4FF',
        },
        'depth': {
          '900': '#0F0F14',
          '800': '#1A1A23',
          '700': '#2D2D3F',
          '600': '#42425A',
          '500': '#6B6B85',
          '400': '#9494AC',
          '300': '#BDBDD2',
          '200': '#E6E6EE',
          '100': '#F7F7FA',
        },
        // 互換性のために旧名称も保持
        'ai-pink': '#FF4B8B',
        'ai-purple': '#9747FF',
        'ai-blue': '#3B82F6',
        'ai-light-pink': '#FFE4ED',
        'ai-light-purple': '#E9D5FF',
        'ai-light-blue': '#DBEAFE',
        'ai-dark-gray': '#1F2937',
        'ai-medium-gray': '#6B7280',
        'ai-light-gray': '#F3F4F6',
      },
      backgroundImage: {
        // Willのグラデーション - 意思から創造、そして実現へ
        'will-gradient': 'linear-gradient(135deg, #FF4B8B 0%, #9747FF 50%, #3B82F6 100%)',
        'will-gradient-soft': 'linear-gradient(135deg, #FFE4ED 0%, #E9D5FF 50%, #DBEAFE 100%)',
        'will-gradient-hover': 'linear-gradient(135deg, #FF6BA3 0%, #A860FF 50%, #5B9BFF 100%)',
        // 成長のグラデーション - 暖かさから知恵へ
        'growth-gradient': 'linear-gradient(180deg, #FF6B9D 0%, #C44569 50%, #574B90 100%)',
        // 調和のグラデーション - 個から全体へ
        'harmony-gradient': 'radial-gradient(circle at center, #2E86AB 0%, #574B90 50%, #1A1A23 100%)',
        // オーロラグラデーション - 変革のエネルギー
        'aurora': 'linear-gradient(60deg, #FF4B8B 0%, #FF6B9D 20%, #9747FF 40%, #574B90 60%, #2E86AB 80%, #3B82F6 100%)',
        // レインボーグラデーション（リスキリング事業連携）
        'ai-rainbow': 'linear-gradient(90deg, #EF4444 0%, #F59E0B 20%, #EAB308 40%, #22C55E 60%, #3B82F6 80%, #8B5CF6 100%)',
        // 互換性のために旧名称も保持
        'ai-gradient': 'linear-gradient(135deg, #FF4B8B 0%, #9747FF 50%, #3B82F6 100%)',
        'ai-gradient-hover': 'linear-gradient(135deg, #FF6BA3 0%, #A860FF 50%, #5B9BFF 100%)',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Noto Serif JP', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        black: ['Anton', 'Impact', 'sans-serif'],
      },
      fontSize: {
        // Refined typography scale with 1.25 ratio
        'xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base': ['1rem', { lineHeight: '1.75rem' }],      // 16px
        'lg': ['1.125rem', { lineHeight: '2rem' }],       // 18px
        'xl': ['1.25rem', { lineHeight: '2rem' }],        // 20px
        '2xl': ['1.5rem', { lineHeight: '2.25rem' }],     // 24px
        '3xl': ['1.875rem', { lineHeight: '2.5rem' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],    // 36px
        '5xl': ['2.75rem', { lineHeight: '3.25rem' }],    // 44px
        '6xl': ['3.5rem', { lineHeight: '4rem' }],        // 56px
        // Custom semantic sizes
        'hero': ['clamp(2.5rem, 7vw, 3.5rem)', { lineHeight: '1.1' }],
        'h1': ['clamp(2rem, 5vw, 2.75rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.25' }],
        'h3': ['clamp(1.25rem, 3vw, 1.875rem)', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'lead': ['1.25rem', { lineHeight: '1.8' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1.5': '0.375rem',  // 6px
        '2.5': '0.625rem',  // 10px
        '3.5': '0.875rem',  // 14px
        'xs': '0.5rem',     // 8px
        'sm': '1rem',       // 16px
        'md': '1.5rem',     // 24px
        'lg': '2rem',       // 32px
        'xl': '3rem',       // 48px
        '2xl': '4rem',      // 64px
        '3xl': '5rem',      // 80px
        '4xl': '6rem',      // 96px
        '5xl': '8rem',      // 128px
        '6xl': '10rem',     // 160px
        '18': '4.5rem',     // 72px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
      },
      borderRadius: {
        'sm': '0.375rem',  // 6px
        'md': '0.75rem',   // 12px
        'lg': '1rem',      // 16px
        'xl': '1.5rem',    // 24px
      },
      boxShadow: {
        // 繊細な影の階層
        'subtle': '0 2px 8px rgba(15, 15, 20, 0.04)',
        'soft': '0 4px 20px rgba(15, 15, 20, 0.08)',
        'elevated': '0 8px 40px rgba(15, 15, 20, 0.12)',
        'floating': '0 20px 60px rgba(15, 15, 20, 0.16)',
        // 光の表現
        'glow': '0 0 20px rgba(151, 71, 255, 0.3)',
        'glow-hover': '0 10px 20px rgba(151, 71, 255, 0.3)',
        'glow-warm': '0 0 30px rgba(255, 107, 157, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(151, 71, 255, 0.1)',
        // 互換性のために旧名称も保持
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fade-in': 'fade-in 0.5s ease',
        'slide-up': 'slide-up 0.5s ease',
        'organic-float': 'organic-float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'thought-emerge': 'thought-emerge 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'emotion-flow': 'emotion-flow 2s cubic-bezier(0.37, 0, 0.63, 1)',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'organic-float': {
          '0%, 100%': { transform: 'translateY(0) rotateZ(0deg)' },
          '33%': { transform: 'translateY(-10px) rotateZ(1deg)' },
          '66%': { transform: 'translateY(-5px) rotateZ(-1deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', filter: 'blur(0px)' },
          '50%': { opacity: '1', filter: 'blur(2px)' },
        },
        'thought-emerge': {
          '0%': { transform: 'scale(0.95) translateY(10px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        'emotion-flow': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '50%': { transform: 'translateX(5px)', opacity: '0.7' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
};

export default config;