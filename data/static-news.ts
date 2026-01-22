import { News } from '@/lib/microcms'

/**
 * 静的ニュースデータ
 * microCMSにアクセスせずにニュースを追加できます。
 * 
 * 使い方:
 * 1. このファイルに新しいニュースを追加
 * 2. id は 'static-' プレフィックスを付けて一意にする
 * 3. publishedAt を適切な日付に設定（新しい順にソートされます）
 */
export const staticNews: News[] = [
  {
    id: 'static-ax1-launch',
    createdAt: '2026-01-22T00:00:00.000Z',
    updatedAt: '2026-01-22T00:00:00.000Z',
    publishedAt: '2026-01-22T00:00:00.000Z',
    revisedAt: '2026-01-22T00:00:00.000Z',
    title: '【2/18東京開催】経営者限定セミナー「AX-1」エントリー受付開始',
    category: 'イベント',
    description: 'DXの次は「AX（AIトランスフォーメーション）」。中小・ベンチャー経営者・幹部（CXO）限定の1日完結戦略ブリーフィングを2026年2月18日に東京で開催。AI活用200選チェック、Google Gems実装、助成金活用ガイドなど、経営資産を手に入れる1日です。',
    content: `
<h2>「AX-1」戦略ブリーフィング開催決定</h2>

<p><strong>DXの時代は終わった。次は、AXだ。</strong></p>

<p>中小・ベンチャー経営者・幹部（CXO）限定の戦略ブリーフィング「AX-1」を開催します。</p>

<h3>開催概要</h3>
<ul>
  <li><strong>日時</strong>: 2026年2月18日（火）10:00〜19:00</li>
  <li><strong>会場</strong>: 東京都内（参加確定者に通知）</li>
  <li><strong>定員</strong>: 限定20名</li>
  <li><strong>参加費</strong>: ¥50,000（税込）</li>
</ul>

<h3>受講で手に入る4つの経営資産</h3>
<ol>
  <li><strong>自社の現在地レポート &amp; 言語化</strong> - AI活用200選チェックで組織の遅れを数値化</li>
  <li><strong>Google Gems（カスタムAI）</strong> - プログラミング不要で自社専用AIを作成</li>
  <li><strong>助成金活用ガイド（最大75%補助）</strong> - 人材育成・AI研修費用を大幅圧縮</li>
  <li><strong>経営者コミュニティ &amp; 個別戦略相談</strong> - 招待制Slack1年間参加権</li>
</ol>

<h3>なぜ、今なのか？</h3>
<ul>
  <li>AI活用企業の生産性成長率は<strong>4倍</strong></li>
  <li>全社AI統合できている日本企業はわずか<strong>2%</strong></li>
  <li>AI投資の<strong>56%</strong>が効果を得られていない</li>
  <li>戦略を持つ企業の成功率は<strong>3.5倍</strong></li>
</ul>

<p>戦略なきAI投資は、56%が失敗する。AX-1は、その「戦略」を1日で手に入れる場です。</p>

<h3>参加条件</h3>
<ul>
  <li>中小・ベンチャー企業の経営者・幹部（CXO）</li>
  <li>本気で組織を変えたい方（審査制）</li>
  <li>営業目的での参加はお断りします</li>
</ul>

<p><a href="/corporate/ax1">詳細・エントリーはこちら →</a></p>
`,
    'md-content': `## 「AX-1」戦略ブリーフィング開催決定

**DXの時代は終わった。次は、AXだ。**

中小・ベンチャー経営者・幹部（CXO）限定の戦略ブリーフィング「AX-1」を開催します。

### 開催概要

- **日時**: 2026年2月18日（火）10:00〜19:00
- **会場**: 東京都内（参加確定者に通知）
- **定員**: 限定20名
- **参加費**: ¥50,000（税込）

### 受講で手に入る4つの経営資産

1. **自社の現在地レポート & 言語化** - AI活用200選チェックで組織の遅れを数値化
2. **Google Gems（カスタムAI）** - プログラミング不要で自社専用AIを作成
3. **助成金活用ガイド（最大75%補助）** - 人材育成・AI研修費用を大幅圧縮
4. **経営者コミュニティ & 個別戦略相談** - 招待制Slack1年間参加権

### なぜ、今なのか？

- AI活用企業の生産性成長率は**4倍**
- 全社AI統合できている日本企業はわずか**2%**
- AI投資の**56%**が効果を得られていない
- 戦略を持つ企業の成功率は**3.5倍**

戦略なきAI投資は、56%が失敗する。AX-1は、その「戦略」を1日で手に入れる場です。

### 参加条件

- 中小・ベンチャー企業の経営者・幹部（CXO）
- 本気で組織を変えたい方（審査制）
- 営業目的での参加はお断りします

[詳細・エントリーはこちら →](/corporate/ax1)
`,
    tags: ['AX-1', 'セミナー', '経営者向け', 'AI変革', '東京']
  }
]

/**
 * 静的ニュースとmicroCMSニュースをマージする
 * publishedAt の降順でソート
 */
export function mergeWithStaticNews(microCmsNews: News[]): News[] {
  const allNews = [...staticNews, ...microCmsNews]
  
  // publishedAt の降順でソート
  return allNews.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime()
    const dateB = new Date(b.publishedAt).getTime()
    return dateB - dateA
  })
}

/**
 * 静的ニュースをIDで取得
 */
export function getStaticNewsById(id: string): News | null {
  return staticNews.find(news => news.id === id) || null
}

/**
 * 静的ニュースかどうかを判定
 */
export function isStaticNews(id: string): boolean {
  return id.startsWith('static-')
}
