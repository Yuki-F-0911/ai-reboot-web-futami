'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'
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

// ストーリーフェーズごとの煽り文句（週刊連載風）
const storyTeasers = [
  { threshold: 0, text: null }, // 最初は非表示
  { threshold: 15, teaser: 'あの頃の輝きを取り戻したい方は、、、', text: '人生をリブートする' },
  { threshold: 30, teaser: '10年後、あなたはどこにいる——？', text: '人生をリブートする' },
  { threshold: 45, teaser: '運命の出会いは、動いた者だけに訪れる——', text: '人生をリブートする' },
  { threshold: 60, teaser: '最初の一歩を踏み出す勇気、あなたにはあるか——', text: '人生をリブートする' },
  { threshold: 75, teaser: '100日後、止まっていた時間が動き出す——', text: '人生をリブートする' },
  { threshold: 90, teaser: '次は、あなたの番だ——', text: '人生をリブートする' },
]

export default function WebtoonPageClient() {
  const scrollProgressRef = useRef<HTMLDivElement>(null)
  const [showStickyFooter, setShowStickyFooter] = useState(false)
  const [currentTeaser, setCurrentTeaser] = useState<{ teaser: string; text: string } | null>(null)
  const [glowIntensity, setGlowIntensity] = useState(0) // 0〜1の輝き強度
  const lineUrl = 'https://bexn9pao.autosns.app/line?src=webtoon'

  // スクロールプログレスと固定フッターの表示を更新
  const updateScrollProgress = useCallback(() => {
    if (!scrollProgressRef.current) return
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    scrollProgressRef.current.style.width = scrollPercent + '%'

    // 現在のストーリーフェーズに応じた煽り文句を決定
    let activeTeaser: { teaser: string; text: string } | null = null
    for (let i = storyTeasers.length - 1; i >= 0; i--) {
      if (scrollPercent >= storyTeasers[i].threshold && storyTeasers[i].text) {
        activeTeaser = { teaser: storyTeasers[i].teaser!, text: storyTeasers[i].text! }
        break
      }
    }
    setCurrentTeaser(activeTeaser)

    // 輝き強度を計算（15%〜90%の間で0〜1に変化）
    const glowStart = 15
    const glowEnd = 90
    const intensity = Math.min(1, Math.max(0, (scrollPercent - glowStart) / (glowEnd - glowStart)))
    setGlowIntensity(intensity)

    // 固定フッターの表示制御
    const ctaSection = document.getElementById('cta')
    const shouldShow = scrollPercent >= 15 && activeTeaser !== null
    if (ctaSection) {
      const ctaRect = ctaSection.getBoundingClientRect()
      const ctaVisible = ctaRect.top < window.innerHeight && ctaRect.bottom > 0
      setShowStickyFooter(shouldShow && !ctaVisible)
    } else {
      setShowStickyFooter(shouldShow)
    }
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

          {/* ===== ポストクレジット導入 ===== */}
          <div className="wt-postcredit">
            <p className="wt-postcredit-lead">— 第1話 完 —</p>
            <h2 className="wt-postcredit-title">
              今治の物語は、<br />
              <span className="highlight">あなたの物語でもある。</span>
            </h2>
            <p className="wt-postcredit-text">
              AIに怯える日々から、AIと共に走り出す日々へ。<br />
              彼が踏み出した「最初の一歩」——<br />
              <strong>次は、あなたの番です。</strong>
            </p>
          </div>

          {/* ===== LINE登録CTA ===== */}
          <div className="wt-line-cta">
            <p className="wt-line-cta-label">＼ 登録30秒・匿名OK・勧誘なし ／</p>
            <h3 className="wt-line-cta-title">
              あなたが使うべきAIを、<br />
              <span className="highlight-gold">30秒で診断します</span>
            </h3>
            <p className="wt-line-cta-description">
              LINEに登録して30秒の診断に答えるだけで、ChatGPTやGeminiだけでなく、数十種類の最新AIの中からあなたに最適なAIツール3選がわかります。さらに無料の攻略本もすぐに届きます。
            </p>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent.lineRegisterClick('webtoon_cta')}
              className="wt-line-cta-button"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <span>LINEで無料AI診断をはじめる</span>
            </a>
          </div>

        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div className={`wt-sticky-footer ${showStickyFooter ? 'visible' : ''} ${glowIntensity >= 1 ? 'sparkling' : ''}`}>
        {currentTeaser && (
          <>
            <p className="wt-sticky-teaser">{currentTeaser.teaser}</p>
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent.lineRegisterClick('webtoon_sticky')}
              className="wt-sticky-button"
              style={{
                boxShadow: `0 4px ${15 + glowIntensity * 35}px rgba(6, 199, 85, ${0.4 + glowIntensity * 0.5}), 0 0 ${glowIntensity * 60}px rgba(6, 199, 85, ${glowIntensity * 0.8}), 0 0 ${glowIntensity * 100}px rgba(100, 230, 150, ${glowIntensity * 0.4})`,
                textShadow: glowIntensity > 0.2 ? `0 0 ${glowIntensity * 20}px rgba(255, 255, 255, ${glowIntensity}), 0 0 ${glowIntensity * 40}px rgba(200, 255, 200, ${glowIntensity * 0.6})` : 'none',
                transform: glowIntensity > 0.7 ? `scale(${1 + (glowIntensity - 0.7) * 0.05})` : undefined,
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <span>LINEで無料AI診断をはじめる</span>
            </a>
          </>
        )}
      </div>
    </div >
  )
}
