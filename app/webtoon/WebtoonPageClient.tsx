'use client'

import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './webtoon.css'

// 漫画の画像データ
const mangaPanels = [
  { src: '/webtoon/koma/hyoushi.png', alt: '表紙', dramatic: true },
  { src: '/webtoon/koma/1.jpg', alt: 'コマ1' },
  { src: '/webtoon/koma/2.jpg', alt: 'コマ2' },
  { src: '/webtoon/koma/3.jpg', alt: 'コマ3' },
  { src: '/webtoon/koma/4.jpg', alt: 'コマ4' },
  { src: '/webtoon/koma/5.jpg', alt: 'コマ5' },
  { src: '/webtoon/koma/6.jpg', alt: 'コマ6' },
  { src: '/webtoon/koma/7.jpg', alt: 'コマ7' },
  { src: '/webtoon/koma/8.jpg', alt: 'コマ8' },
  { src: '/webtoon/koma/9.png', alt: 'コマ9' },
  { src: '/webtoon/koma/10.png', alt: 'コマ10' },
  { src: '/webtoon/koma/11.png', alt: 'コマ11' },
  { src: '/webtoon/koma/12.png', alt: 'コマ12' },
  { src: '/webtoon/koma/13.jpg', alt: 'コマ13' },
  { src: '/webtoon/koma/14.jpg', alt: 'コマ14' },
  { src: '/webtoon/koma/15.jpg', alt: 'コマ15' },
  { src: '/webtoon/koma/16.jpg', alt: 'コマ16' },
  { src: '/webtoon/koma/17.png', alt: 'コマ17' },
  { src: '/webtoon/koma/18.png', alt: 'コマ18' },
  { src: '/webtoon/koma/19.png', alt: 'コマ19' },
  { src: '/webtoon/koma/20.png', alt: 'コマ20' },
  { src: '/webtoon/koma/21.png', alt: 'コマ21' },
  { src: '/webtoon/koma/22.png', alt: 'コマ22' },
  { src: '/webtoon/koma/23.png', alt: 'コマ23' },
  { src: '/webtoon/koma/24.png', alt: 'コマ24' },
  { src: '/webtoon/koma/25.png', alt: 'コマ25' },
  { src: '/webtoon/koma/26.png', alt: 'コマ26', dramatic: true },
  { src: '/webtoon/koma/27.png', alt: 'コマ27' },
  { src: '/webtoon/koma/28.png', alt: 'コマ28', dramatic: true },
]

export default function WebtoonPageClient() {
  const scrollProgressRef = useRef<HTMLDivElement>(null)

  // スクロールプログレスを更新
  const updateScrollProgress = useCallback(() => {
    if (!scrollProgressRef.current) return
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    scrollProgressRef.current.style.width = scrollPercent + '%'
  }, [])

  useEffect(() => {
    // スクロール位置をリセット
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }

    // スクロールイベントリスナー
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    // Intersection Observer でパネルの表示を検知
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }

    const panelObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = Math.min(index * 50, 200)
          setTimeout(() => {
            entry.target.classList.add('visible')
          }, delay)

          // シーンキャプションのフェードテキスト効果
          if (entry.target.classList.contains('wt-scene-caption')) {
            const span = entry.target.querySelector('span')
            if (span && !span.classList.contains('fade-text')) {
              span.classList.add('fade-text')
            }
          }
        }
      })
    }, observerOptions)

    // 全てのマンガパネルとシーンキャプションを監視
    document.querySelectorAll('.wt-manga-panel, .wt-scene-caption').forEach(element => {
      panelObserver.observe(element)
    })

    // 最初のパネルを表示
    setTimeout(() => {
      const firstPanel = document.querySelector('.wt-manga-panel')
      if (firstPanel) {
        firstPanel.classList.add('visible')
      }
    }, 300)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      panelObserver.disconnect()
    }
  }, [updateScrollProgress])

  return (
    <div className="webtoon-page">
      {/* Scroll Progress Indicator */}
      <div className="wt-scroll-progress" ref={scrollProgressRef}></div>

      {/* Manga Section */}
      <section id="manga" className="wt-manga-section">
        <div className="wt-manga-container">
          {/* 表紙 */}
          <Image
            src={mangaPanels[0].src}
            alt={mangaPanels[0].alt}
            width={480}
            height={720}
            priority
            className={`wt-manga-panel${mangaPanels[0].dramatic ? ' dramatic' : ''}`}
          />
          <div className="wt-panel-spacer"></div>

          <div className="wt-panel-spacer large"></div>
          {/* あらすじ */}
          <div className="wt-scene-caption synopsis">
            <span className="synopsis-title">あらすじ</span>
            <span>学生時代は陸上選手として輝いていた今治彰（32）は、いまやAIニュースに怯え、航空会社のカウンターで「代わりのきく毎日」を送っていた。</span>
            <span>「このままでいいのか？」と焦る彼が出会ったのは、AIを使いこなすかつての先輩で起業家の池上。</span>
            <span>「AIに怯える人生」から、「AIと共に走り出す人生」へ。<br />止まっていた時間が、再び動き出す——！</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ1 */}
          <Image
            src={mangaPanels[1].src}
            alt={mangaPanels[1].alt}
            width={480}
            height={720}
            loading="lazy"
            className="wt-manga-panel"
          />

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption small">
            <span>今治は猛勉強の甲斐あって、<br />憧れのWILL大学に入学した...</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ2 */}
          <Image
            src={mangaPanels[2].src}
            alt={mangaPanels[2].alt}
            width={480}
            height={720}
            loading="lazy"
            className="wt-manga-panel"
          />

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption">
            <span>地道に練習を積み重ね、<br />最後の大会に臨む...</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ3-6 */}
          {mangaPanels.slice(3, 7).map((panel) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={480}
              height={720}
              loading="lazy"
              className="wt-manga-panel"
            />
          ))}

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption short">
            <span>10年後…</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ7-11 */}
          {mangaPanels.slice(7, 12).map((panel) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={480}
              height={720}
              loading="lazy"
              className="wt-manga-panel"
            />
          ))}

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption">
            <span>友人の結婚式にて…</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ12-16 */}
          {mangaPanels.slice(12, 17).map((panel) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={480}
              height={720}
              loading="lazy"
              className="wt-manga-panel"
            />
          ))}

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption short">
            <span>数日後…</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ17-20 */}
          {mangaPanels.slice(17, 21).map((panel) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={480}
              height={720}
              loading="lazy"
              className="wt-manga-panel"
            />
          ))}

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption">
            <span>AIリブートキャンプ当日…</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ21-23 */}
          {mangaPanels.slice(21, 24).map((panel) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={480}
              height={720}
              loading="lazy"
              className="wt-manga-panel"
            />
          ))}

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption">
            <span>AIリブート50日目...</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ24 */}
          <Image
            src={mangaPanels[24].src}
            alt={mangaPanels[24].alt}
            width={480}
            height={720}
            loading="lazy"
            className="wt-manga-panel"
          />

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption">
            <span>AIリブート100日目...</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ25 */}
          <Image
            src={mangaPanels[25].src}
            alt={mangaPanels[25].alt}
            width={480}
            height={720}
            loading="lazy"
            className="wt-manga-panel"
          />

          <div className="wt-panel-spacer large"></div>
          <div className="wt-scene-caption">
            <span>AIリブート修了後<br />キャリア相談にて…</span>
          </div>
          <div className="wt-panel-spacer large"></div>

          {/* コマ26-28 */}
          {mangaPanels.slice(26, 29).map((panel) => (
            <Image
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={480}
              height={720}
              loading="lazy"
              className={`wt-manga-panel${panel.dramatic ? ' dramatic' : ''}`}
            />
          ))}

          <div className="wt-panel-spacer"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="wt-cta-section">
        <div className="wt-cta-container">
          <div className="wt-cta-badge">現在募集中</div>
          <h2 className="wt-cta-title">
            あなたのキャリアを、<br />
            <span className="highlight">OSから再起動</span>する。
          </h2>
          <p className="wt-cta-description">
            AI時代を生き抜くための「思考」と「技術」を手に入れる。<br />
            詳細ページでプログラム内容をご覧ください。
          </p>

          <div className="wt-cta-buttons">
            <Link href="/academy" className="wt-cta-button primary">
              <span>AIリブートアカデミーの詳細を見る</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <p className="wt-cta-note">※ 無理な勧誘は一切ございません。安心してお申し込みください。</p>

          <div className="wt-subsidy-banner">
            <div className="wt-subsidy-content">
              <div className="wt-subsidy-badge">経済産業省認定</div>
              <div className="wt-subsidy-text">
                <strong>リスキリング補助金対象講座</strong>
                <span className="wt-subsidy-discount">最大<em>70%</em>補助</span>
              </div>
              <div className="wt-subsidy-price">
                <span className="wt-original-price">通常価格 330,000円</span>
                <span className="wt-actual-price">実質 <strong>120,000円</strong>〜</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
