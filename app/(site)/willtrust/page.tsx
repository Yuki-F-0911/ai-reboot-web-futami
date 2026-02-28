'use client'

import { useEffect } from 'react'

export default function WilltrustPage() {
  useEffect(() => {
    // JavaScriptを動的にロード
    const script = document.createElement('script')
    script.src = '/willtrust/script.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // クリーンアップ
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <header>
        <div className="container">
          <h1>ウィルトラストAIリブート研修</h1>
          <p className="subtitle">生成AI活用力研修 振り返りページ</p>
        </div>
      </header>

      <nav>
        <div className="container">
          <ul>
            <li><a href="#overview">研修概要</a></li>
            <li><a href="#day1">Day 1</a></li>
            <li><a href="#day2">Day 2</a></li>
            <li><a href="#tools">AIツール集</a></li>
            <li><a href="#quiz">理解度チェック</a></li>
            <li><a href="#action">アクションプラン</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <section id="overview" className="section">
          <h2>研修概要</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>研修の背景</h3>
              <p>会社の急速な成長と新規案件の増加に対応するため、全社員のAI活用能力向上を目指す</p>
              <ul>
                <li>幕張インタースクール事業買収（4,100万円）</li>
                <li>神戸、北海道、沖縄からのコンサルティングオファー</li>
                <li>マンパワー不足への対応</li>
              </ul>
            </div>
            <div className="overview-card">
              <h3>研修の目標</h3>
              <p>AIを誰かに習わなくても、必要に応じて自在に使いこなせるようになる</p>
              <ul>
                <li>全員がロイヤルグリーンのコンサルティングができるレベルへ</li>
                <li>やりたい仕事に手を挙げられる環境の実現</li>
                <li>AI × ゴルフ業界の新たな価値創造</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="day1" className="section">
          <h2>Day 1: AIとの出会いとパラダイムシフト</h2>
          
          <div className="concept-card">
            <h3>🧩 パラダイムシフト</h3>
            <div className="exercise-box">
              <h4>思考の体操：9つの点を4本の直線で結ぶ</h4>
              <canvas id="nine-dots" width="300" height="300"></canvas>
              <p className="exercise-hint">ヒント：枠の外まで線を延ばすことがポイント</p>
            </div>
            <div className="key-points">
              <h4>学びのポイント</h4>
              <ul>
                <li><strong>パラダイムの内側</strong>：安全、可能、常識</li>
                <li><strong>パラダイムの外側</strong>：冒険、可能性、常識を超える常識</li>
              </ul>
              <p className="quote">&quot;世の中を変えるのは「よそ者、若者、ばか者」&quot;</p>
            </div>
          </div>

          <div className="concept-card">
            <h3>🔄 DXの3段階</h3>
            <div className="dx-stages">
              <div className="stage">
                <h4>1. デジタイゼーション</h4>
                <p>アナログ→デジタル変換</p>
                <span className="example">例：紙の名簿をExcelに</span>
              </div>
              <div className="stage">
                <h4>2. デジタライゼーション</h4>
                <p>業務プロセスの効率化</p>
                <span className="example">例：データ分析でマーケティング</span>
              </div>
              <div className="stage">
                <h4>3. DX</h4>
                <p>ビジネスモデルの変革</p>
                <span className="example">例：VRゴルフ新産業</span>
              </div>
            </div>
          </div>

          <div className="concept-card">
            <h3>🔄 自己紹介クイズの仕組み（オーケストレーション）</h3>
            <div className="flow-diagram">
              <div className="flow-step">
                <span className="step-number">1</span>
                <span className="step-name">Google Forms</span>
                <span className="step-desc">アンケート回答</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">2</span>
                <span className="step-name">Google Sheets</span>
                <span className="step-desc">データ集約</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">3</span>
                <span className="step-name">Apps Script</span>
                <span className="step-desc">API連携</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">4</span>
                <span className="step-name">Dify</span>
                <span className="step-desc">クイズ生成</span>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">5</span>
                <span className="step-name">Web</span>
                <span className="step-desc">表示</span>
              </div>
            </div>
            <p className="flow-explanation">複数のサービスをAPIで連携させ、一つの新しいサービスのように機能させることを<strong>オーケストレーション</strong>と呼びます。</p>
          </div>

          <div className="concept-card">
            <h3>💡 AI活用事例</h3>
            <div className="case-studies">
              <div className="case">
                <h4>村田製作所プロジェクト</h4>
                <p>センサー × AI でウェルビーイング診断</p>
              </div>
              <div className="case">
                <h4>ウェルモン（天神屋）</h4>
                <p>AI相棒とタイミングマーケティング</p>
              </div>
              <div className="case">
                <h4>採用コンテンツ</h4>
                <p>AIで高品質コンテンツを短期間・低コストで制作</p>
              </div>
            </div>
          </div>

          <div className="concept-card">
            <h3>🎯 AI時代の競争優位性</h3>
            <div className="highlight-box">
              <h4>価値の源泉は「1次情報」</h4>
              <p>皆さんが現場で直接得られる情報こそが、他社には真似できない独自のAIサービスを生み出すための最も価値ある資産</p>
              <ul>
                <li>顧客との生の対話</li>
                <li>現場で得られるデータ</li>
                <li>独自のノウハウ</li>
              </ul>
            </div>
          </div>

          <div className="concept-card">
            <h3>🚀 AI革命と人間の価値</h3>
            <div className="timeline">
              <div className="era">
                <span className="era-name">農業革命</span>
                <span className="era-change">狩猟→定住</span>
              </div>
              <div className="era">
                <span className="era-name">産業革命</span>
                <span className="era-change">大量生産</span>
              </div>
              <div className="era">
                <span className="era-name">IT革命</span>
                <span className="era-change">情報アクセス</span>
              </div>
              <div className="era current">
                <span className="era-name">AI革命</span>
                <span className="era-change">？？？</span>
              </div>
            </div>
            <div className="highlight-box">
              <h4>人間に残される価値</h4>
              <p><strong>Will（～したい）という欲求</strong></p>
              <ul>
                <li>身体性（フィジカル）：体験したい</li>
                <li>人間による価値：人にしてほしい</li>
                <li>非合理性の追求：意味を超えた挑戦</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="day2" className="section">
          <h2>Day 2: AI活用の壁を突破する</h2>

          <div className="concept-card">
            <h3>👁️ スコトーマ（心理的盲点）</h3>
            <div className="exercise-box">
              <h4>ワーク：腕時計の文字盤を描く</h4>
              <p>毎日見ているものでも、意識していない部分は認識できない</p>
            </div>
            <div className="key-points">
              <h4>視点を変える方法</h4>
              <ul>
                <li><strong>立場を変える</strong>：お客様、競合、初心者の視点</li>
                <li><strong>時間軸を変える</strong>：3年後、10年後から今を見る</li>
                <li><strong>視座を変える</strong>：店舗→業界→日本全体</li>
              </ul>
              <div className="warning-box">
                <strong>エコーチェンバーに注意</strong>
                <p>自分の考えを補強する情報ばかりに囲まれると思考が偏る</p>
              </div>
            </div>
          </div>

          <div className="concept-card">
            <h3>🧗 AI活用を阻む3つの壁</h3>
            <div className="walls">
              <div className="wall">
                <h4>第1の壁：言語の壁</h4>
                <p className="problem">専門用語が分からない</p>
                <p className="solution">✅ AIに聞けば小学生でも分かるように説明してくれる</p>
                <div className="practice">
                  <strong>練習問題：</strong>
                  <p>&quot;RAGのベクトル検索機能により、LLMに最適なコンテキストを提供&quot;</p>
                  <button onClick={() => window.showTermExplanation && window.showTermExplanation()}>用語解説を見る</button>
                </div>
              </div>

              <div className="wall">
                <h4>第2の壁：未経験の壁</h4>
                <p className="problem">使ったことがないから怖い</p>
                <p className="solution">✅ とりあえずやってみるマインドセット</p>
                <div className="missions">
                  <h5>実践ミッション</h5>
                  <ul>
                    <li>✓ Google NotebookLMでポッドキャスト作成</li>
                    <li>✓ 静止画を動画に変換</li>
                    <li>✓ AI音声生成にチャレンジ</li>
                  </ul>
                </div>
              </div>

              <div className="wall">
                <h4>第3の壁：習慣の壁</h4>
                <p className="problem">今までのやり方を変えられない</p>
                <p className="solution">✅ 音声入力とプロンプト修正で新しい働き方</p>
                <div className="new-style">
                  <h5>新しい仕事スタイル</h5>
                  <ul>
                    <li>タイピング → 音声入力</li>
                    <li>文章修正 → プロンプト改善</li>
                    <li>作文ツール → 思考整理パートナー</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="section">
          <h2>研修で使用したAIツール集</h2>
          
          <div className="tool-philosophy">
            <h3>⚠️ 大切なのはツールではなく「What」と「Why」</h3>
            <p>以下にツールを紹介しますが、<strong>どのツールを使うかは本質ではありません</strong>。</p>
            <p>重要なのは：</p>
            <ul>
              <li><strong>What</strong>：何を実現したいのか（目的）</li>
              <li><strong>Why</strong>：なぜそれをやりたいのか（Will）</li>
              <li><strong>Who</strong>：誰を笑顔にしたいのか（価値）</li>
            </ul>
            <p>ツールは日々進化し、新しいものが生まれます。大切なのは、<strong>目的に応じて適切なツールを選び、使いこなす力</strong>です。</p>
          </div>
          
          <div className="tool-category">
            <h3>📝 LLMチャットツール</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <h3>ChatGPT</h3>
                <p>OpenAIの対話型AI</p>
                <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Claude</h3>
                <p>Anthropicの高性能AI</p>
                <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Gemini</h3>
                <p>Googleの対話型AI</p>
                <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
            </div>
          </div>

          <div className="tool-category">
            <h3>🎙️ 音声・音楽生成</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <h3>ElevenLabs</h3>
                <p>磯崎社長のボイスクローン生成</p>
                <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Google AI Studio</h3>
                <p>Text to Speech機能で音声生成</p>
                <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Suno</h3>
                <p>AI楽曲生成（研修中に実践）</p>
                <a href="https://suno.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
            </div>
          </div>

          <div className="tool-category">
            <h3>🎬 動画・画像処理</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <h3>Runway</h3>
                <p>Image2Videoとリップシンク</p>
                <a href="https://runwayml.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Google NotebookLM</h3>
                <p>資料からポッドキャスト自動生成</p>
                <a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
            </div>
          </div>

          <div className="tool-category">
            <h3>🎮 ロイヤルグリーンクエスト開発</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <h3>ChatGPT</h3>
                <p>ゲーム仕様の作成</p>
                <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Sora</h3>
                <p>キャラクター画像生成</p>
                <a href="https://openai.com/sora" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Claude</h3>
                <p>ゲームのコーディング</p>
                <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Google Whisk</h3>
                <p>ロゴ画像生成（Imagen 3）</p>
                <a href="https://whisk.google.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Canva</h3>
                <p>ロゴデザイン調整</p>
                <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
            </div>
          </div>

          <div className="tool-category">
            <h3>🔧 システム連携・自動化</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <h3>Google Forms</h3>
                <p>自己紹介アンケート収集</p>
                <a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Google Sheets</h3>
                <p>データ集約・管理</p>
                <a href="https://docs.google.com/spreadsheets/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Google Apps Script</h3>
                <p>データ処理・API連携</p>
                <a href="https://script.google.com/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Dify</h3>
                <p>AI処理・クイズ生成</p>
                <a href="https://dify.ai/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
              <div className="tool-card">
                <h3>Notion</h3>
                <p>ナレッジ管理・共有</p>
                <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">ツールを開く</a>
              </div>
            </div>
          </div>
        </section>

        <section id="quiz" className="section">
          <h2>理解度チェッククイズ</h2>
          <div className="quiz-container">
            <div className="quiz-question">
              <h3>Q1: パラダイムシフトとは？</h3>
              <div className="quiz-options">
                <label><input type="radio" name="q1" value="a" /> 段階的な改善</label>
                <label><input type="radio" name="q1" value="b" /> 思考の枠を超えた変革</label>
                <label><input type="radio" name="q1" value="c" /> デジタル化</label>
              </div>
            </div>
            
            <div className="quiz-question">
              <h3>Q2: AI時代の競争優位性の源泉は？</h3>
              <div className="quiz-options">
                <label><input type="radio" name="q2" value="a" /> 開発力</label>
                <label><input type="radio" name="q2" value="b" /> 資金力</label>
                <label><input type="radio" name="q2" value="c" /> 1次情報</label>
              </div>
            </div>

            <div className="quiz-question">
              <h3>Q3: DXの最終段階で起こることは？</h3>
              <div className="quiz-options">
                <label><input type="radio" name="q3" value="a" /> データのデジタル化</label>
                <label><input type="radio" name="q3" value="b" /> 業務効率化</label>
                <label><input type="radio" name="q3" value="c" /> ビジネスモデルの変革</label>
              </div>
            </div>

            <button onClick={() => window.checkQuiz && window.checkQuiz()}>回答をチェック</button>
            <div id="quiz-result"></div>
          </div>
        </section>

        <section id="action" className="section">
          <h2>今後のアクションプラン</h2>
          <div className="action-timeline">
            <div className="action-item">
              <div className="action-date">今週</div>
              <div className="action-content">
                <h4>AIツールを1つ選んで実践</h4>
                <p>研修で学んだツールから1つ選び、実際の業務で使ってみる</p>
              </div>
            </div>
            <div className="action-item">
              <div className="action-date">今月</div>
              <div className="action-content">
                <h4>1次情報の整理</h4>
                <p>自分が持つ独自の情報・ノウハウを整理し、AI活用の素材として準備</p>
              </div>
            </div>
            <div className="action-item">
              <div className="action-date">3ヶ月後</div>
              <div className="action-content">
                <h4>新サービスのプロトタイプ</h4>
                <p>AI × ゴルフ業界の新しいサービスアイデアを形にする</p>
              </div>
            </div>
          </div>

          <div className="will-declaration">
            <h3>私のWill宣言</h3>
            <textarea id="will-text" placeholder="この研修を通じて、私が実現したいことは..."></textarea>
            <button onClick={() => window.saveWill && window.saveWill()}>Willを保存</button>
          </div>
        </section>

        <section className="section key-message">
          <h2>研修のキーメッセージ</h2>
          <blockquote>
            <p>&quot;AIはあくまで武器、主役は「人間」&quot;</p>
            <p>&quot;できる/できない ではなく したい/したくない が価値を決める時代&quot;</p>
            <p>&quot;100億、500億、1兆円企業へ。それはもはや夢物語ではない&quot;</p>
          </blockquote>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>ウィルトラストAIリブート研修 © 2024</p>
          <p>Powered by ウィルフォワード</p>
        </div>
      </footer>
    </>
  )
}

// TypeScript用のグローバル宣言
declare global {
  interface Window {
    showTermExplanation?: () => void
    checkQuiz?: () => void
    saveWill?: () => void
  }
}