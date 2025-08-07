# FV漫画モンタージュ演出コンセプト

## 概要
FVのノイズエフェクトと重ねて、様々な人々の「Will」を表現する漫画テイストの白黒イラストをモンタージュ的に表示する演出。

## ビジュアルコンセプト
- **スタイル**: 日本の漫画風、モノクロ、高コントラスト
- **演出**: 走馬灯のようなループアニメーション
- **透明度**: ノイズと重なるよう半透明（opacity: 0.3-0.6）
- **配置**: ランダムな位置にフェードイン・フェードアウト

## Midjourney プロンプト集

### 1. 深夜のオフィスで企画書を書く人
```
black and white manga style, dramatic shading, businessman writing passionately at desk late night, determined expression, speed lines, high contrast, Japanese manga aesthetic --ar 16:9 --style raw --v 6
```

### 2. プレゼンで情熱的に語る女性
```
black and white manga panel, businesswoman giving presentation with passion, dynamic pose, impact lines, dramatic lighting, shoujo manga style, high contrast --ar 16:9 --style raw --v 6
```

### 3. チームメンバーと議論する瞬間
```
manga style illustration, black and white, team discussion scene, multiple people engaged in heated debate, motion lines, dramatic angles, seinen manga aesthetic --ar 16:9 --style raw --v 6
```

### 4. コードを書くエンジニアの横顔
```
monochrome manga art, programmer coding intensely, side profile, screen glow on face, concentration lines, detailed cross-hatching, Japanese comic style --ar 16:9 --style raw --v 6
```

### 5. アイデアがひらめく瞬間
```
black and white manga panel, eureka moment, light bulb effect, surprised expression, action lines radiating, impact text effect, high contrast shading --ar 16:9 --style raw --v 6
```

### 6. 資料を見つめて考え込む人
```
manga illustration, black and white, person deep in thought looking at documents, contemplative pose, screentone shading, close-up angle --ar 16:9 --style raw --v 6
```

### 7. 窓の外を見つめる後ろ姿
```
monochrome manga scene, person looking out office window, back view, city lights reflection, melancholic mood, detailed background, seinen style --ar 16:9 --style raw --v 6
```

### 8. 手を握りしめる決意の瞬間
```
black and white manga close-up, clenched fist determination, dramatic shading, power lines, impact effect, high contrast, shonen manga style --ar 16:9 --style raw --v 6
```

### 9. 早朝のジョギング、自己投資の瞬間
```
black and white manga panel, businessman jogging at dawn, determined expression, motion blur, speed lines, cityscape silhouette, seinen manga style, high contrast --ar 16:9 --style raw --v 6
```

### 10. スマホで学習動画を見る瞬間
```
monochrome manga illustration, person watching educational video on smartphone, focused eyes, screen light reflection, close-up angle, detailed shading --ar 16:9 --style raw --v 6
```

### 11. ホワイトボードに戦略を描く
```
black and white manga scene, executive drawing strategy on whiteboard, dynamic angle, marker in hand, flowchart and arrows, business manga style --ar 16:9 --style raw --v 6
```

### 12. 同僚と成功を喜ぶハイタッチ
```
manga panel, two businesspeople high-five celebration, impact lines, joy expression, motion blur, office background, high contrast shading --ar 16:9 --style raw --v 6
```

### 13. 鏡の前で自分と向き合う
```
black and white manga art, person looking at reflection in mirror, split composition, contemplative mood, detailed cross-hatching, psychological seinen style --ar 16:9 --style raw --v 6
```

### 14. カフェでノートPCに向かう週末起業家
```
monochrome manga illustration, freelancer working in cafe on weekend, laptop screen glow, coffee cup, concentrated expression, urban background --ar 16:9 --style raw --v 6
```

### 15. 子供に勉強を教える親の姿
```
black and white manga panel, parent teaching child at home desk, warm lighting, educational moment, detailed background, family manga style --ar 16:9 --style raw --v 6
```

### 16. オンライン会議で発言する勇気
```
manga illustration, person speaking up in video conference, multiple screens, raised hand, determined expression, modern business setting, high contrast --ar 16:9 --style raw --v 6
```

## 実装コンセプト

### コンポーネント構造
```typescript
// components/effects/MangaMontage.tsx
- 8-10枚の画像をランダムに表示
- 各画像は3-5秒でフェードイン・フェードアウト
- 位置はグリッド上にランダム配置
- スクロールに応じて透明度変化
```

### アニメーション仕様
```css
/* 各コマのアニメーション */
@keyframes manga-appear {
  0% { 
    opacity: 0;
    transform: scale(0.8) rotate(-5deg);
    filter: blur(10px);
  }
  20% { 
    opacity: 0.4;
    transform: scale(1) rotate(0deg);
    filter: blur(0px);
  }
  80% { 
    opacity: 0.4;
    transform: scale(1) rotate(0deg);
  }
  100% { 
    opacity: 0;
    transform: scale(1.1) rotate(5deg);
    filter: blur(5px);
  }
}
```

### レイヤー構成
1. **最背面**: 背景グラデーション
2. **中間層1**: ノイズエフェクト（Canvas）
3. **中間層2**: 漫画モンタージュ（opacity: 0.3-0.5）
4. **中間層3**: グリッチテキスト
5. **最前面**: メインコンテンツ

## スタイルガイド

### 漫画表現の統一要素
- **線の太さ**: 太い輪郭線、繊細な内部線
- **影の表現**: クロスハッチング、ベタ塗り
- **効果線**: 集中線、スピード線、感情線
- **構図**: ダイナミックなアングル、クローズアップ
- **トーン**: スクリーントーン風の中間調

### 感情表現のバリエーション
1. **決意**: 握りこぶし、真剣な眼差し
2. **発見**: 驚きの表情、ひらめきの光
3. **集中**: 没頭する横顔、細められた目
4. **情熱**: 身振り手振り、動きのある構図
5. **内省**: 静かな表情、窓への視線

## 技術実装詳細

### 画像の準備
1. Midjourneyで8-10枚生成
2. 背景を透過処理（必要に応じて）
3. サイズ最適化（WebP形式、各200KB以下）
4. モノクロ調整（コントラスト強調）

### Next.js実装
```tsx
const mangaImages = [
  '/images/manga/will-01.webp',
  '/images/manga/will-02.webp',
  // ...
]

const MangaMontage = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {mangaImages.map((src, i) => (
        <MangaPanel 
          key={i}
          src={src}
          delay={i * 1.5}
          position={getRandomPosition(i)}
        />
      ))}
    </div>
  )
}
```

## パフォーマンス考慮

### 最適化方針
- 遅延読み込み（Intersection Observer）
- 画像のプリロード（priority images）
- GPUアクセラレーション（transform, opacity）
- モバイルでは枚数削減（4-5枚）

### アクセシビリティ
- `aria-hidden="true"`で装飾要素として扱う
- prefers-reduced-motionで無効化
- 背景装飾のため、コンテンツ理解に影響なし

## 更新履歴
- 2025-01-08: 初版作成
- コンセプト定義とMidjourneyプロンプト作成