# 新トップページ 設計書 (Blueprint 3.0)

#### はじめに: アートディレクション - "Journey into Inner-Space"

この設計書のビジュアルコンセプトは、「Cosmic（宇宙的）」から「Organic（有機的）」へと全面的にピボットします。私たちは、AIと未来を、冷たい宇宙や光で描く安易な表現を採用しません。

**コアコンセプト:**
私たちのサービスは、ユーザー自身の**「内なる宇宙（Inner-Space）」**への旅です。ビジュアルは、その旅――つまり、混沌とした内面が、一つの明確な意志（Will）へと「**焦点（フォーカス）が合っていく**」プロセス――を、美しく、誠実に描き出します。

*   **ビジュアルモチーフ:** 植物の細胞、神経細胞（ニューロン）、絡み合う繊維、深海。生命の根源を感じさせる、温かく、複雑で、有機的なテクスチャ。
*   **コアインタラクション:** スクロールに応じて、ぼやけた（Out of Focus）背景が、徐々にシャープに、クリアに（In Focus）なっていく。
*   **AIの表現:** ユーザーの操作に追従する「魔法のレンズ」のように、通過した部分のピントを一時的に鋭くする、触媒としてのエフェクト。

---
```yaml
# global-styles.yaml
palette:
  background: "#121828" # 深い藍色。内省的な静けさ
  text_primary: "#F0F4F8" # わずかに青みがかった、読みやすい白
  text_secondary: "#7F8C9B" # 背景に馴染む、落ち着いたグレー
  accent: "linear-gradient(90deg, #38E8D3, #00B2FF)" # 生命の輝きを感じさせる、ティールからシアンへのグラデーション
```
```yaml
# persistent-visuals.yaml
inner_scape:
  element_id: "inner-scape-visual"
  initial_state: "out_of_focus"
  texture: "abstract_organic_neural_network" # ニューロンや植物の根が絡み合うような、美しい抽象テクスチャ
  states:
    out_of_focus: # 序章
      description: "画面全体が美しくぼやけている。カーソル周辺のみ、ほんの少しだけディテールが見える"
      blur_radius: 16
      brightness: 0.8
    focusing_center: # 第一章
      description: "画面中央に向かって、ゆっくりとピントが合い始める"
      blur_radius: 12
      vignette_strength: 0.3 # 周辺光量を落とし、中央に視線を誘導
    revealing_patterns: # 第二章
      description: "ピントの合う範囲が広がり、テクスチャ内の繋がりやパターンが見え始める"
      blur_radius: 8
      contrast: 1.1
    sharpening_clarity: # 第三章
      description: "パターンが明確になり、全体の構造が理解できるようになる"
      blur_radius: 4
      contrast: 1.2
    full_focus: # 第四章
      description: "ついにテクスチャ全体のピントが合い、複雑で調和の取れた「内なる宇宙の全体像」が現れる"
      blur_radius: 0
      contrast: 1.3
    serene_clarity: # 幕間 (余韻)
      description: "完全にピントが合った状態で、ゆっくりと呼吸するように、全体が微かに明滅する"
      animation: "slow_pulse_breathing"

catalyst_effect: # AIの表現
  element_id: "ai-lens"
  description: "カーソルに追従する円形の領域。この領域内だけ、背景のピントが一時的に最大になる。ユーザーが自らの意志で『フォーカス』する行為のメタファー"
  size: "150px"
  blur_effect: "inverse"
  border: "1px solid palette.accent"
```
---

### 【序章】 あなたへの問いかけ
```yaml
# section-00-hero.yaml
visuals:
  persistent_visuals_state: "out_of_focus"
# ... (他の内容は変更なし)
```

---
### 【幕間 1】 混沌から、問いへ
```yaml
# interlude-01.yaml
visuals:
  persistent_visuals_state: "focusing_center"
# ... (他の内容は変更なし)
```
---

### 【第一章】 すべては、一つの問いから始まる
```yaml
# section-01-the-question.yaml
visuals:
  persistent_visuals_state: "focusing_center"
# ... (他の内容は変更なし)
```

---
### 【幕間 2】 問いから、プロセスへ
```yaml
# interlude-02.yaml
visuals:
  persistent_visuals_state: "revealing_patterns"
# ... (他の内容は変更なし)
```
---

### 【第二章】 私たちの哲学と、変革へのプロセス
```yaml
# section-02-the-process.yaml
# ...
  process_steps:
    # ...
    items:
      - title: "STEP 1: Discover"
        subtitle: "あなたの「Will」を探求する"
        icon: "seed" # or "sprout"
        description: "..."
      - title: "STEP 2: Design"
        subtitle: "あなただけの「戦略」を設計する"
        icon: "root_network" # or "map"
        description: "..."
      - title: "STEP 3: Accelerate"
        subtitle: "AIという「翼」で加速する"
        icon: "flower" # or "wings"
        description: "..."
```

---
### 【第三章】 あなたの変革を実現する場所
```yaml
# section-03-the-solution.yaml
visuals:
  persistent_visuals_state: "sharpening_clarity"
# ... (他の内容は変更なし)
```
---

### 【第四章】 あなたのガイドと、創設メンバーへの招待状
```yaml
# section-04-guides-and-invitation.yaml
visuals:
  persistent_visuals_state: "full_focus"
# ... (他の内容は変更なし)
```
---

### 【幕間 3】 決意のための、沈黙
```yaml
# interlude-03-reflection-pause.yaml
visuals:
  persistent_visuals_state: "serene_clarity"
# ... (他の内容は変更なし)
```
---

### 【終章】 あなたの物語を、私に聞かせてください
```yaml
# section-05-final-cta.yaml
visuals:
  # 画面の片隅に、前のセクションから引き継いだ「内なる宇宙」のアートワークが静かに表示され続けている
  persistent_visuals_state: "serene_clarity_subtle"
# ... (他の内容は変更なし)
```