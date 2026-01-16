'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './webtoon.css'

// 申し込みフォームURL
const REGISTER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf8nTvEXBRIJSzcb_4SbMrwPi5NKx9_ihR6kzjYeCu1ngKrdA/viewform?usp=dialog'

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
  const [isBelowMainCta, setIsBelowMainCta] = useState(false) // メインCTAより下にいるかどうか
  const mainCtaRef = useRef<HTMLDivElement>(null)

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
    const mainCta = mainCtaRef.current
    const shouldShow = scrollPercent >= 15 && activeTeaser !== null
    if (mainCta) {
      const ctaRect = mainCta.getBoundingClientRect()
      const ctaVisible = ctaRect.top < window.innerHeight && ctaRect.bottom > 0
      // メインCTAより下にいるかどうかを判定
      const belowCta = ctaRect.bottom < 0
      setIsBelowMainCta(belowCta)
      // メインCTAが見えているときは非表示、見えていないときは表示
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

          {/* ===== 30秒セルフ診断 ===== */}
          <div className="wt-diagnosis">
            <p className="wt-diagnosis-label">30秒セルフ診断</p>
            <h3 className="wt-diagnosis-title">今、どの言葉が一番響きましたか？</h3>

            <div className="wt-diagnosis-options">
              <div className="wt-diagnosis-option">
                <div className="wt-diagnosis-choice">
                  <span className="wt-diagnosis-letter">A</span>
                  <span>「AIに仕事を奪われるかも…」という今治の焦り</span>
                </div>
                <p className="wt-diagnosis-comment">→ その焦りは、変化への準備が整っている証拠です</p>
              </div>

              <div className="wt-diagnosis-option">
                <div className="wt-diagnosis-choice">
                  <span className="wt-diagnosis-letter">B</span>
                  <span>「代わりのきく毎日」という言葉へのモヤモヤ</span>
                </div>
                <p className="wt-diagnosis-comment">→ 違和感に気づけるあなたは、すでに一歩先にいます</p>
              </div>

              <div className="wt-diagnosis-option">
                <div className="wt-diagnosis-choice">
                  <span className="wt-diagnosis-letter">C</span>
                  <span>池上先輩のような「AIを味方につける」生き方への憧れ</span>
                </div>
                <p className="wt-diagnosis-comment">→ 憧れを行動に変える方法、お伝えします</p>
              </div>

              <div className="wt-diagnosis-option">
                <div className="wt-diagnosis-choice">
                  <span className="wt-diagnosis-letter">D</span>
                  <span>「100日で変われる」という希望</span>
                </div>
                <p className="wt-diagnosis-comment">→ 100日後の自分、一緒に設計しませんか？</p>
              </div>
            </div>

            <p className="wt-diagnosis-result">
              どれを選んでも、答えは同じ。<br />
              <strong>あなたには「次の一歩」を踏み出す準備ができています。</strong>
            </p>
          </div>

          {/* ===== セミナーの価値提示 ===== */}
          <div className="wt-value">
            <p className="wt-value-label">無料オンラインセミナー</p>
            <h3 className="wt-value-title">
              <span className="highlight-gold">生成AI時代のキャリア設計論</span>
            </h3>
            <p className="wt-value-subtitle">1時間で得られること</p>

            <div className="wt-value-points">
              <div className="wt-value-point">
                <span className="wt-value-number">01</span>
                <div className="wt-value-content">
                  <strong>「思考OS」のアップデート法</strong>
                  <p>ツールに依存しない、本質的な強みの作り方</p>
                </div>
              </div>

              <div className="wt-value-point">
                <span className="wt-value-number">02</span>
                <div className="wt-value-content">
                  <strong>100日で変わるロードマップ</strong>
                  <p>今治が辿った道を、あなた用にカスタマイズ</p>
                </div>
              </div>

              <div className="wt-value-point">
                <span className="wt-value-number">03</span>
                <div className="wt-value-content">
                  <strong>AI時代の「走り方」</strong>
                  <p>AIを敵ではなく&quot;チームメイト&quot;にする考え方</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== やらないこと宣言 ===== */}
          <div className="wt-trust">
            <h4 className="wt-trust-title">このセミナーで「やらないこと」</h4>
            <ul className="wt-trust-list">
              <li>
                <span className="wt-trust-x">✕</span>
                <span>AIツールの操作説明会ではありません</span>
              </li>
              <li>
                <span className="wt-trust-x">✕</span>
                <span>高額プログラムへの売り込みはしません</span>
              </li>
              <li>
                <span className="wt-trust-x">✕</span>
                <span>「すぐ稼げる」系の話もしません</span>
              </li>
            </ul>
            <p className="wt-trust-message">
              私たちがお伝えするのは、<br />
              AI時代を自分らしく生き抜くための<strong>「土台」</strong>の作り方です。
            </p>
          </div>

          {/* ===== 開催概要 ===== */}
          <div className="wt-event">
            <h4 className="wt-event-title">AI時代のキャリア設計セミナー開催概要</h4>
            <div className="wt-event-details">
              <div className="wt-event-row">
                <span className="wt-event-label">日時</span>
                <span className="wt-event-value">1月18日（日）20:00〜21:00</span>
              </div>
              <div className="wt-event-row">
                <span className="wt-event-label">形式</span>
                <span className="wt-event-value">オンライン（Zoom）</span>
              </div>
              <div className="wt-event-row">
                <span className="wt-event-label">参加費</span>
                <span className="wt-event-value highlight">完全無料</span>
              </div>
              <div className="wt-event-row">
                <span className="wt-event-label">視聴URL</span>
                <span className="wt-event-value">お申込み後にメールでお届け</span>
              </div>
            </div>
            <p className="wt-event-note">
              ※ 当日ご都合が合わない方も、<strong>アーカイブ配信</strong>でご視聴いただけます
            </p>
          </div>

          {/* ===== 申込みCTAブロック ===== */}
          <div ref={mainCtaRef} className="wt-main-cta">
            <a
              href={REGISTER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wt-cta-button primary large"
            >
              <span>最初の一歩を踏み出す（無料）</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <div className="wt-cta-assurance">
              <p>✓ 完全無料 ✓ 勧誘なし ✓ 視聴URLは後日メールでお届け</p>
            </div>
            <Link href="/seminars/career-design" className="wt-cta-detail-link">
              セミナー詳細・講師プロフィールはこちら →
            </Link>
          </div>

          {/* ===== FAQ ===== */}
          <div className="wt-faq">
            <h4 className="wt-faq-title">よくあるご質問</h4>

            <div className="wt-faq-item">
              <p className="wt-faq-q">Q. 参加後、何か売り込まれませんか？</p>
              <p className="wt-faq-a">
                A. いいえ。セミナー内での勧誘は一切ありません。<br />
                ご興味があれば後日ご案内をお送りしますが、強引なセールスはいたしません。
              </p>
            </div>

            <div className="wt-faq-item">
              <p className="wt-faq-q">Q. 当日参加できない場合は？</p>
              <p className="wt-faq-a">
                A. アーカイブ動画をお届けします。<br />
                お申込みいただければ、後日メールで視聴リンクをお送りします。
              </p>
            </div>

            <div className="wt-faq-item">
              <p className="wt-faq-q">Q. 参加後の流れを教えてください</p>
              <p className="wt-faq-a">
                A. セミナー視聴 → ご興味があれば詳しい資料をお送り → ご自身のペースでご検討ください。<br />
                無理なお声がけはいたしません。
              </p>
            </div>
          </div>

          {/* ===== セミナー詳細リンク ===== */}
          <div className="wt-sub-cta">
            <Link href="/seminars/career-design" className="wt-sub-cta-link">
              <span>セミナー詳細・講師プロフィールを見る</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div className={`wt-sticky-footer ${showStickyFooter ? 'visible' : ''} ${glowIntensity >= 1 ? 'sparkling' : ''}`}>
        {currentTeaser && (
          <>
            <p className="wt-sticky-teaser">{currentTeaser.teaser}</p>
            <button
              onClick={() => {
                const scrollToMainCta = () => {
                  if (!mainCtaRef.current) return
                  const rect = mainCtaRef.current.getBoundingClientRect()
                  const scrollTop = window.scrollY
                  // CTAボタンが画面の下から25%（上から75%）の位置に来るよう調整
                  const targetY = scrollTop + rect.top - (window.innerHeight * 0.75)
                  window.scrollTo({ top: targetY, behavior: 'smooth' })
                }
                scrollToMainCta()
                // 画像ロードでページ高さが変わった場合に備えて再調整
                if (!isBelowMainCta) {
                  setTimeout(scrollToMainCta, 600)
                  setTimeout(scrollToMainCta, 1200)
                }
              }}
              className="wt-sticky-button"
              style={{
                boxShadow: `0 4px ${15 + glowIntensity * 35}px rgba(245, 158, 11, ${0.4 + glowIntensity * 0.5}), 0 0 ${glowIntensity * 60}px rgba(255, 200, 50, ${glowIntensity * 0.8}), 0 0 ${glowIntensity * 100}px rgba(255, 220, 100, ${glowIntensity * 0.4})`,
                textShadow: glowIntensity > 0.2 ? `0 0 ${glowIntensity * 20}px rgba(255, 255, 255, ${glowIntensity}), 0 0 ${glowIntensity * 40}px rgba(255, 230, 150, ${glowIntensity * 0.6})` : 'none',
                transform: glowIntensity > 0.7 ? `scale(${1 + (glowIntensity - 0.7) * 0.05})` : undefined,
              }}
            >
              <span>{isBelowMainCta ? 'セミナーに申し込む' : currentTeaser.text}</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isBelowMainCta ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                )}
              </svg>
            </button>
          </>
        )}
      </div>
    </div >
  )
}
