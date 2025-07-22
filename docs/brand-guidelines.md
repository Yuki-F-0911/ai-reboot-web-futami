---
title: "AIリブート ブランドガイドライン"
version: "1.0"
last_updated: "2025-07-21"
author: "さかもと"
status: "draft"
---

# AIリブート ブランドガイドライン

## 1. ブランドコンセプト

### ミッション
AIの力で個人と企業の可能性を解き放ち、ウェルビーイングな未来を創造する

### ビジョン
- **変革と成長**：AIによる自己変革と継続的な成長
- **人間中心**：テクノロジーと人間性の調和
- **多様性と包摂**：すべての人に開かれた学びの場

## 2. カラーパレット

### プライマリカラー（グラデーション）
```css
/* AIリブート メイングラデーション */
background: linear-gradient(135deg, #FF4B8B 0%, #9747FF 50%, #3B82F6 100%);
```

- **ピンク** `#FF4B8B` - 情熱、革新、創造性
- **パープル** `#9747FF` - 変革、知性、可能性
- **ブルー** `#3B82F6` - 信頼、技術、安定性

### セカンダリカラー
```css
/* サポートカラー */
--ai-light-pink: #FFE4ED;
--ai-light-purple: #E9D5FF;
--ai-light-blue: #DBEAFE;
--ai-dark-gray: #1F2937;
--ai-medium-gray: #6B7280;
--ai-light-gray: #F3F4F6;
```

### アクセントカラー（リスキリング事業連携）
```css
/* レインボーグラデーション（補助的使用） */
background: linear-gradient(90deg, 
  #EF4444 0%, 
  #F59E0B 20%, 
  #EAB308 40%, 
  #22C55E 60%, 
  #3B82F6 80%, 
  #8B5CF6 100%
);
```

## 3. タイポグラフィ

### フォントファミリー
```css
/* 日本語 */
font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif;

/* 英語 */
font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

### フォントウェイト
- **見出し**：700 (Bold)
- **サブ見出し**：600 (Semi-bold)
- **本文**：400 (Regular)
- **注釈**：300 (Light)

### フォントサイズ（デスクトップ）
```css
--font-hero: 3.5rem;      /* 56px - ヒーローセクション */
--font-h1: 2.5rem;        /* 40px - 大見出し */
--font-h2: 2rem;          /* 32px - 中見出し */
--font-h3: 1.5rem;        /* 24px - 小見出し */
--font-body: 1rem;        /* 16px - 本文 */
--font-small: 0.875rem;   /* 14px - 注釈 */
```

## 4. デザイン原則

### 4.1 グラデーションの使用
- **主要要素**：ボタン、ヘッダー、重要なCTA
- **背景**：セクションの区切り、カードのアクセント
- **テキスト**：特別な見出しやロゴ

### 4.2 余白とレイアウト
```css
/* スペーシングシステム（8の倍数） */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
```

### 4.3 角丸とシャドウ
```css
/* 角丸 */
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.75rem;   /* 12px */
--radius-lg: 1rem;      /* 16px */
--radius-xl: 1.5rem;    /* 24px */

/* シャドウ */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-glow: 0 0 20px rgba(151, 71, 255, 0.3);
```

## 5. UI コンポーネント

### 5.1 ボタン
```css
/* プライマリボタン */
.btn-primary {
  background: linear-gradient(135deg, #FF4B8B 0%, #9747FF 50%, #3B82F6 100%);
  color: white;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(151, 71, 255, 0.3);
}
```

### 5.2 カード
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(151, 71, 255, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(151, 71, 255, 0.15);
}
```

## 6. アニメーション

### 6.1 トランジション
```css
/* 標準的なトランジション */
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;
```

### 6.2 グラデーションアニメーション
```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
```

## 7. アイコンとイラスト

### 7.1 アイコンスタイル
- **スタイル**：線画（アウトライン）
- **太さ**：2px
- **角**：丸みを帯びた
- **カラー**：単色またはグラデーション

### 7.2 イラストガイドライン
- **テイスト**：フラット、ミニマル
- **カラー**：ブランドカラーを基調
- **人物**：多様性を表現、親しみやすい表情

## 8. 写真・画像

### 8.1 写真のトーン
- **明るさ**：明るく前向きな印象
- **色調**：暖色系を含む自然な色合い
- **構図**：人物中心、アクティブな場面

### 8.2 画像処理
```css
/* オーバーレイ効果 */
.image-overlay {
  position: relative;
}

.image-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(255, 75, 139, 0.2), 
    rgba(151, 71, 255, 0.2), 
    rgba(59, 130, 246, 0.2)
  );
  mix-blend-mode: multiply;
}
```

## 9. トーン&マナー

### 9.1 コミュニケーショントーン
- **親しみやすい**：専門用語を避け、分かりやすい言葉を使用
- **前向き**：ポジティブで励ましのメッセージ
- **包摂的**：すべての人を歓迎する表現

### 9.2 禁止事項
- ❌ 威圧的・高圧的な表現
- ❌ 専門用語の多用
- ❌ ネガティブな比較
- ❌ 排他的な表現

## 10. レスポンシブデザイン

### ブレークポイント
```css
/* モバイルファースト */
--breakpoint-sm: 640px;   /* スマートフォン */
--breakpoint-md: 768px;   /* タブレット */
--breakpoint-lg: 1024px;  /* デスクトップ */
--breakpoint-xl: 1280px;  /* ラージデスクトップ */
```

### モバイル最適化
- タッチターゲット：最小44px × 44px
- フォントサイズ：最小14px
- 余白：デスクトップの75%

## 11. アクセシビリティ

### カラーコントラスト
- 通常テキスト：4.5:1以上
- 大きいテキスト：3:1以上
- アクティブUI要素：3:1以上

### フォーカススタイル
```css
:focus-visible {
  outline: 2px solid #9747FF;
  outline-offset: 2px;
}
```

## 更新履歴

| バージョン | 更新日 | 更新者 | 更新内容 |
|------------|--------|--------|----------|
| 1.0        | 2025-07-21 | さかもと | 初版作成 |