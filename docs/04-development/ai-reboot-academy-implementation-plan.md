# AIリブートアカデミー トップページ実装計画

作成日: 2025-01-05
作成者: Claude
ステータス: 実装準備中

## 📋 実装概要

### プロジェクト情報
- **ページ**: AIリブートアカデミー トップページ
- **開発期間**: 約2週間（フェーズ1-3）
- **技術スタック**: Next.js 15, React 19, TypeScript, Framer Motion, Tailwind CSS

### コアコンセプト
「内なる対話」- 読者自身との対話を生み出す体験型Webページ

## 🎯 実装フェーズ

### Phase 1: MVP実装（3日間）
**目的**: 基本的な読書体験の実装

#### Day 1: 基盤構築
- [ ] ページ構造の実装（`app/academy/page.tsx`の作成）
- [ ] 6章構成のセクションコンポーネント作成
- [ ] 基本的なスクロール検知システム
- [ ] レスポンシブ対応の基礎

#### Day 2: コンテンツ統合
- [ ] 原稿テキストの組み込み
- [ ] タイポグラフィシステムの実装
- [ ] 基本的なアニメーション（フェードイン）
- [ ] プログレスインジケーター

#### Day 3: 初期インタラクション
- [ ] スムーススクロール実装
- [ ] 章ごとのトランジション
- [ ] CTA（Call to Action）ボタンの実装
- [ ] 基本的なアナリティクス設定

### Phase 2: 体験向上（4日間）
**目的**: 「鏡と窓」メタファーの実装

#### Day 4-5: ファーストビューの革新
- [ ] 白い画面からの文字出現演出
- [ ] 呼吸に合わせたペーシングシステム
- [ ] アダプティブタイミングの基礎実装

#### Day 6-7: スクロール演出の洗練
- [ ] パララックス効果の実装
- [ ] 各章の感情トリガー演出
- [ ] マイクロインタラクション（ホバー、クリック）

### Phase 3: パーソナライゼーション（3日間）
**目的**: 個々の読者に最適化された体験

#### Day 8-9: 診断システム
- [ ] 初回訪問時の簡易診断UI
- [ ] 診断結果に基づく章の並び替え
- [ ] パーソナライズされた導線設計

#### Day 10: データ駆動の最適化
- [ ] エンゲージメントトラッキング
- [ ] A/Bテスト基盤の構築
- [ ] パフォーマンス最適化

### Phase 4: 先進機能（オプション - 5日間）
**目的**: 差別化要素の実装

- [ ] オーディオナレーション機能
- [ ] 読書モード切り替え（フォーカス/俯瞰/スピード）
- [ ] ソーシャル共有機能（Willを見つけた人数表示）
- [ ] 継続的エンゲージメント（メール/LINE連携）

## 🏗️ 技術実装詳細

### ディレクトリ構造
```
app/academy/
├── page.tsx                    # メインページ
├── components/
│   ├── AcademyHero.tsx        # ファーストビュー
│   ├── ChapterSection.tsx     # 章のベースコンポーネント
│   ├── chapters/              # 各章のコンポーネント
│   │   ├── Prologue.tsx       # 序章
│   │   ├── Chapter1.tsx       # 第一章
│   │   ├── Chapter2.tsx       # 第二章
│   │   ├── Chapter3.tsx       # 第三章
│   │   ├── Chapter4.tsx       # 第四章
│   │   └── Finale.tsx         # 最終章
│   ├── effects/               # 演出用コンポーネント
│   │   ├── BreathingText.tsx  # 呼吸アニメーション
│   │   ├── MirrorEffect.tsx   # 鏡のメタファー
│   │   └── WindowEffect.tsx   # 窓のメタファー
│   └── ui/                    # UI要素
│       ├── ProgressBar.tsx    # 進捗表示
│       ├── ReadingMode.tsx    # 読書モード切替
│       └── PersonalityQuiz.tsx # 診断UI
├── hooks/
│   ├── useScrollProgress.ts   # スクロール進捗
│   ├── useReadingSpeed.ts     # 読書速度検知
│   └── useEngagement.ts       # エンゲージメント計測
└── lib/
    ├── analytics.ts           # 分析ユーティリティ
    └── personalization.ts     # パーソナライズロジック
```

### 主要コンポーネント仕様

#### 1. AcademyHero
```typescript
// 白い画面から始まる演出
// テキストが一文字ずつ現れる
// スクロールを促す微細なアニメーション
interface AcademyHeroProps {
  onScrollStart: () => void;
  personalizedMessage?: string;
}
```

#### 2. ChapterSection
```typescript
// 各章の共通構造
// スクロール位置に応じた演出制御
interface ChapterSectionProps {
  chapter: ChapterData;
  scrollProgress: number;
  isActive: boolean;
  emotionalTrigger: EmotionType;
}
```

#### 3. BreathingText
```typescript
// 呼吸のリズムに合わせたテキスト表示
// 4秒周期での拡大縮小
interface BreathingTextProps {
  text: string;
  delay?: number;
  duration?: number;
}
```

### アニメーション戦略

#### 基本方針
- **すべてのアニメーションは60fps維持**
- **will-change プロパティの適切な使用**
- **GPU アクセラレーションの活用**

#### 実装例
```typescript
// スクロール連動アニメーション
const scrollAnimation = {
  opacity: scrollProgress,
  transform: `translateY(${(1 - scrollProgress) * 50}px)`,
  filter: `blur(${(1 - scrollProgress) * 4}px)`,
};

// 呼吸アニメーション
const breathingAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.8, 1, 0.8],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
```

### パフォーマンス最適化

#### 1. Lazy Loading
```typescript
// Intersection Observer でのコンポーネント遅延読み込み
const ChapterLazy = dynamic(() => import('./chapters/Chapter1'), {
  loading: () => <ChapterSkeleton />,
  ssr: false
});
```

#### 2. デバウンス処理
```typescript
// スクロールイベントの最適化
const debouncedScroll = useMemo(
  () => debounce(handleScroll, 16), // 60fps
  []
);
```

#### 3. Critical CSS
```typescript
// ファーストビューのスタイルをインライン化
<style dangerouslySetInnerHTML={{
  __html: criticalCSS
}} />
```

### 状態管理

#### グローバル状態
```typescript
// Zustand での状態管理
interface AcademyState {
  scrollProgress: number;
  currentChapter: number;
  readingSpeed: number;
  personalityType?: PersonalityType;
  engagementScore: number;
}
```

#### ローカル状態
- 各章の表示状態
- アニメーション制御
- インタラクション状態

### アナリティクス実装

#### トラッキングイベント
```typescript
// カスタムイベント定義
trackEvent('chapter_viewed', {
  chapter: chapterNumber,
  timeSpent: duration,
  scrollDepth: percentage,
  engagementScore: score
});

trackEvent('cta_clicked', {
  location: 'finale',
  personalityType: type,
  readingTime: totalTime
});
```

### アクセシビリティ対応

#### 1. スクリーンリーダー
```typescript
// 適切なARIA属性
<section 
  role="article"
  aria-label={`第${chapterNumber}章`}
  aria-describedby="chapter-description"
>
```

#### 2. キーボードナビゲーション
```typescript
// 章間の移動
useKeyboardNavigation({
  ArrowDown: nextChapter,
  ArrowUp: previousChapter,
  Home: firstChapter,
  End: lastChapter
});
```

#### 3. モーション設定
```typescript
// prefers-reduced-motion 対応
const prefersReducedMotion = usePrefersReducedMotion();
const animationIntensity = prefersReducedMotion ? 0 : 1;
```

## 📊 成功指標とモニタリング

### 主要KPI
1. **平均読了率**: 70%以上
2. **平均滞在時間**: 5分以上
3. **エンゲージメントスコア**: 80/100以上
4. **CTA クリック率**: 20%以上

### A/Bテスト計画
- ファーストビューのバリエーション
- 章の順序
- アニメーション強度
- CTA文言とデザイン

## 🚀 デプロイメント計画

### 段階的リリース
1. **内部テスト**: Phase 1完了後
2. **限定公開**: Phase 2完了後（10%のトラフィック）
3. **段階的拡大**: Phase 3完了後（50% → 100%）
4. **全面公開**: すべての最適化完了後

### モニタリング体制
- Real User Monitoring (RUM)
- エラートラッキング（Sentry）
- パフォーマンス監視（Web Vitals）
- ユーザーフィードバック収集

## 🔧 開発環境セットアップ

```bash
# 依存関係のインストール
npm install framer-motion@latest
npm install @vercel/analytics
npm install zustand
npm install intersection-observer

# 開発サーバー起動
npm run dev

# ビルドとテスト
npm run build
npm run test:e2e
```

## 📝 実装チェックリスト

### 必須要件
- [ ] モバイルファースト設計
- [ ] Core Web Vitals 達成
- [ ] アクセシビリティ基準準拠
- [ ] SEO最適化
- [ ] アナリティクス実装

### 品質基準
- [ ] Lighthouse スコア 90以上
- [ ] 0エラー、0警告
- [ ] 100% TypeScript カバレッジ
- [ ] E2Eテストカバレッジ 80%以上

---

この実装計画に基づいて、段階的かつ確実に「内なる対話」体験を実現していきます。