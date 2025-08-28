'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './seminar.module.css'
import './seminar-styles.css'

export default function Seminar0828Page() {
  const countdownRef = useRef<HTMLDivElement>(null)

  // Hide main site header and footer and apply fonts
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Noto+Serif+JP:wght@400;500;700&display=swap');
      
      header:has(nav), footer:has(h4) {
        display: none !important;
      }
      main.min-h-screen.pt-16 {
        padding-top: 0 !important;
      }
      body {
        font-family: 'Noto Serif JP', serif !important;
        font-size: 18px !important;
        line-height: 1.75 !important;
        background: #FFFEF9 !important;
        color: #0A0A0A !important;
      }
      h1, h2, h3 {
        font-family: 'Noto Sans JP', sans-serif !important;
        font-weight: 900 !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    const countdownEl = countdownRef.current
    if (!countdownEl) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      let count = 100
      const interval = setInterval(() => {
        count--
        if (count > 0) {
          countdownEl.innerHTML = `<span class="${styles.num}">${count}</span><span class="${styles.unit}">日</span>`
        } else {
          countdownEl.innerHTML = `<span class="${styles.num}">今</span>`
          clearInterval(interval)
        }
      }, 20)
      
      return () => clearInterval(interval)
    }
  }, [])

  return (
    <>
      {/* Header Logo */}
      <header className={styles.headerLogo}>
        <Image 
          src="/lp/seminar0828/logo_horizon_lightbg.png" 
          alt="AIリブートアカデミー"
          width={355}
          height={64}
          priority
        />
      </header>

      {/* Hero Section */}
      <section className={styles.hero} role="banner">
        <div className={styles.heroVertical} ref={countdownRef} aria-label="100日">
          <span className={styles.num}>100</span><span className={styles.unit}>日</span>
        </div>
        <div className={styles.diagonalLine} aria-hidden="true"></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.line1}>AI革命時代の</span>
            <span className={styles.line2}>
              <span className={styles.part1}>キャリア</span>
              <span className={styles.part2}>ハック術</span>
            </span>
          </h1>
          <div className={styles.heroSubtitle}>
            <span className={styles.numLarge}>100</span>
            <div className={styles.text}>
              <span className={styles.textMain}>日間で</span>
              <span className={styles.textSub}>AI下剋上する方法</span>
            </div>
          </div>
          
          <div className={styles.heroMeta}>
            <time dateTime="2025-08-28T20:00">2025年8月28日(木) 20:00-21:00</time><br/>
            無料オンライン開催
          </div>
          
          <p className={styles.heroSpeaker}>
            <strong>登壇：成瀬 拓也</strong><br/>
            株式会社ウィルフォワード 代表取締役
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="https://ai-reboot-0828.peatix.com/view" className={`${styles.cta} ${styles.ctaPrimary}`}>
              今すぐ参加登録する
            </a>
          </div>
        </div>
      </section>

      {/* 課題提起 */}
      <section className={styles.section}>
        <blockquote className={styles.problemQuote}>
          頑張っているのに、前に進んでいない気がする。<br/>
          仕事をこなしているのに成果の伸びが鈍い。<br/>
          学んでも現場での変化に結びつかない。<br/><br/>
          そんな停滞感の正体をAI時代の文脈で解き明かします。
        </blockquote>
      </section>

      {/* セミナー概要 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>セミナー概要</h2>
        <p>
          本セミナーでは、生成AIの使い方そのものを教えることはしません。<br/>
          しかし、本セミナーに参加した人が、生成AIを使いこなすようになる可能性があります。
        </p>
        <p>
          それはなぜか。生成AIツールの進化が早すぎて、使い方そのものを身に付けても、すぐに古くなるからです。じゃあ、何をすれば良いのか？
        </p>
        <p>
          人事や採用領域の専門家として20年以上活動し、現在AI活用の事業に本格的に取り組むウィルフォワードの代表・成瀬が解説します。
        </p>
      </section>

      {/* セミナー内容 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>セミナー内容</h2>
        <div className={styles.contentList}>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>1</span>
            <div className={styles.contentItemText}>
              生成AIは単なる技術のイノベーションでは終わらない理由
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>2</span>
            <div className={styles.contentItemText}>
              便利すぎる生成AI革命が引き起こす不都合な真実
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>3</span>
            <div className={styles.contentItemText}>
              生成AIが「働く」をどう変えていくのか？
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>4</span>
            <div className={styles.contentItemText}>
              知っている人だけがハックできるこれからくる波
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>5</span>
            <div className={styles.contentItemText}>
              今なら（今だけ）学歴も社歴もリセットできる
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>6</span>
            <div className={styles.contentItemText}>
              生成AIツールの使い方を学んでもダメな理由
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>7</span>
            <div className={styles.contentItemText}>
              生成AIを使いこなすための「思考OS」
            </div>
          </div>
          <div className={styles.contentItem}>
            <span className={styles.contentItemNumber}>8</span>
            <div className={styles.contentItemText}>
              100日でキャリア下剋上を起こす方法
            </div>
          </div>
        </div>
        <p>
          「AIを学んで終わり」ではなく、「AIで生き方・働き方をアップデートし続ける」ための視点を得られる時間です。
        </p>
      </section>

      {/* おすすめ対象者 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>おすすめ対象者</h2>
        <ul className={styles.targetList}>
          <li>今の仕事や働き方にモヤモヤを感じている方</li>
          <li>これまでのキャリアにコンプレックスを感じている方</li>
          <li>生成AIをキャリアの武器に変えたい方</li>
          <li>転職・キャリアアップを本気で考え始めている方</li>
          <li>「自分には特別な強みがない」と思っている方</li>
        </ul>
      </section>

      {/* 登壇者紹介 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>登壇者紹介</h2>
        <div className={styles.speakerBlock}>
          <div className={styles.speakerImage}>
            <Image 
              src="/lp/seminar0828/naruse.webp" 
              alt="成瀬拓也"
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.speakerInfo}>
            <h3>成瀬 拓也</h3>
            <p>株式会社ウィルフォワード 代表取締役</p>
            <p>
              人事・採用領域で20年以上の実績を持ち、現在はAI活用を企業の現場へ導入。<br/>
              キャリアの停滞感に悩む人へ「AI時代の思考OS」を伝える。
            </p>
          </div>
        </div>
      </section>

      {/* 申込み */}
      <section className={`${styles.section}`} id="register">
        <h2 className={styles.sectionTitle}>申込み</h2>
        <div className={styles.ctaGroup}>
          <a href="https://ai-reboot-0828.peatix.com/view" className={`${styles.cta} ${styles.ctaPrimary}`}>
            今すぐ参加登録する
          </a>
        </div>
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--size-caption)' }}>
          メールにてZoom視聴URLをお送りします。迷惑メールフォルダもご確認ください。
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>主催：株式会社ウィルフォワード</p>
        <p>運営：AIリブートアカデミー</p>
        <p>問い合わせ：<a href="mailto:info@ai-reboot.io">info@ai-reboot.io</a></p>
      </footer>
    </>
  )
}