# 新トップページ 設計書 (Blueprint 2.0)

#### はじめに: 設計思想 - The Conversational Scroll

この設計書は、トップページを**「対話としてのスクロール体験」**として実装するためのものです。ユーザーのスクロールは、単なるページ移動ではなく、私たちの問いかけに対する「返事」です。私たちはその返事を受け取り、次の言葉と景色を、完璧なタイミングで提示します。

**コア体験:**
*   **時間のデザイン:** 各情報の「間」と「場面転換」を意図的に設計し、ユーザーの感情移入を最大化します。
*   **持続するメタファー:** サイト全体を貫く「光」のビジュアルが、ユーザーの思考の旅（混沌→収束→決意）と同期して変化し続けます。
*   **ユーザーが主役の演出:** スクロールというユーザーの意志が、物語を次の場面へと進める唯一のトリガーとなります。

---
```yaml
# global-styles.yaml
# サイト全体で共通のデザイントークン

palette:
  background: "#0A0A0A"
  text_primary: "#EAEAEA"
  text_secondary: "#A0A0A0"
  accent: "linear-gradient(90deg, #4A90E2, #9013FE)"

typography:
  font_family: "'Noto Sans JP', sans-serif"
  base_font_size: "16px"
  line_height: "1.8"
```
```yaml
# persistent-visuals.yaml
# ページ全体で持続し、変化するビジュアル要素

light_particles:
  element_id: "light-journey"
  initial_state: "chaos"
  states:
    chaos: # 序章
      description: "無数の粒子が画面全体に広がり、カーソルにゆっくりと反応する"
      particle_count: 500
      movement_speed: 0.1
    converging: # 第一章
      description: "粒子が中央の軸に向かって、緩やかに収束し始める"
      target_area: "viewport_center_axis"
      attraction_force: 0.05
    path_forming: # 第二章
      description: "収束した粒子が、スクロールに応じて一本の光の道を形成する"
      shape: "vertical_path"
    clear_path: # 第三章
      description: "光の道がより明確で力強くなり、ユーザーを導く"
      intensity: 1.5
    focusing: # 第四章
      description: "光の道が画面下部の一点に向かって収束していく"
      target_element: "#final-star"
    star_pulsing: # 幕間 (余韻)
      description: "全ての光が一点の星に収束し、静かに鼓動するように明滅する"
      shape: "star"
      animation: "pulse"
```
---

### 【序章】 あなたへの問いかけ

**意図:** 物語の始まり。ユーザーのアクションが、混沌の中から最初の光を生み出す。

```yaml
# section-00-hero.yaml
section_id: "hero"
visuals:
  min_height: "100vh"
  persistent_visuals_state: "chaos"
scenes:
  - scene_id: "hero-1"
    trigger: "on_load"
    # animation: (省略...)
    # content: (省略...)
```

---
### 【幕間 1】 混沌から、問いへ

**意図:** 最初の問いかけの前に、思考を深めるための「間」を作る。光が、次の展開を予感させる。

```yaml
# interlude-01.yaml
section_id: "interlude-1"
visuals:
  min_height: "50vh"
  persistent_visuals_state: "converging"
animation:
  on_scroll:
    - target: "#light-journey"
      property: "attraction_force"
      start_value: 0.05
      end_value: 0.2
```
---

### 【第一章】 すべては、一つの問いから始まる

**意図:** スクロールを「対話」と捉え、ユーザー自身のペースで問いと向き合えるよう、各要素を一つずつ提示する。

```yaml
# section-01-the-question.yaml
section_id: "the_question"
visuals:
  min_height: "200vh" # スクロールによる演出のため、十分な高さを確保
  persistent_visuals_state: "converging"
scenes:
  - scene_id: "question-1-headline"
    trigger: "on_enter_section"
    # animation: (fadeInUp)
    # content: (ヘッドライン...)
  - scene_id: "question-2-body"
    trigger: "scroll_progress > 0.1"
    # animation: (fadeIn)
    # content: (それは、あなたのキャリアと人生にとって...)
  - scene_id: "question-3-main-q1"
    trigger: "scroll_progress > 0.4"
    # animation: (fadeIn)
    # content: (AIを使って、あなたは本当は何がしたいのか？)
  - scene_id: "question-4-main-q2"
    trigger: "scroll_progress > 0.6"
    # animation: (fadeIn)
    # content: (どんな自分になりたいのか？)
  - scene_id: "question-5-closing"
    trigger: "scroll_progress > 0.9"
    # animation: (fadeIn)
    # content: (この根源的な問いに...)
```

---
### 【幕間 2】 問いから、プロセスへ

**意図:** ユーザーの内省（問い）が、具体的な「道」へと形作られていく様を視覚的に表現する。

```yaml
# interlude-02.yaml
section_id: "interlude-2"
visuals:
  min_height: "50vh"
  persistent_visuals_state: "path_forming"
```
---

### 【第二章】 私たちの哲学と、変革へのプロセス

**意図:** 3つのステップが、ユーザーが歩むべき「道」の標識であることを示す。

```yaml
# section-02-the-process.yaml
section_id: "the_process"
visuals:
  persistent_visuals_state: "path_forming"
scenes:
  - scene_id: "process-1"
    trigger: "on_enter_section"
    # animation: (fadeInUp)
    # content: (ヘッドライン、導入テキスト、3つのステップカード)
```

---
### 【第三章】 あなたの変革を実現する場所

**意図:** 明確になった「道」の先に、具体的な目的地（ベースキャンプ）が存在することを示す。

```yaml
# section-03-the-solution.yaml
section_id: "the_solution"
visuals:
  persistent_visuals_state: "clear_path"
scenes:
  - scene_id: "solution-1"
    trigger: "on_enter_section"
    # animation: (fadeInUp)
    # content: (ヘッドライン、ソリューションカード)
```
---

### 【第四章】 あなたのガイドと、創設メンバーへの招待状

**意図:** 旅のクライマックス。全ての道が、この一点の「招待」へと繋がっていたことを示す。

```yaml
# section-04-guides-and-invitation.yaml
section_id: "guides_and_invitation"
visuals:
  persistent_visuals_state: "focusing"
scenes:
  - scene_id: "guides-1"
    trigger: "on_enter_section"
    # content: (ヘッドライン、ガイド紹介)
  - scene_id: "invitation-1"
    trigger: "scroll_progress > 0.5"
    # content: (招待状パート)
```
---

### 【幕間 3】 決意のための、沈黙

**意図:** 熱いメッセージの後、ユーザーに内省と決意のための「余韻」を与える。テキストを排し、視覚と感情にのみ訴えかける。

```yaml
# interlude-03-reflection-pause.yaml
section_id: "reflection_pause"
visuals:
  min_height: "80vh"
  persistent_visuals_state: "star_pulsing"
  layout:
    type: "flex"
    align: "center"
    justify: "center"
content:
  # このセクションにはテキストコンテンツは存在しない
  # 中央で静かに明滅する「星」のみが表示される
```
---

### 【終章】 あなたの物語を、私に聞かせてください

**意図:** 輝く星（決意）を胸に、最後の扉を開く。創設者との対話が、その星を現実の光にするための鍵であることを示す。

```yaml
# section-05-final-cta.yaml
section_id: "final_cta"
visuals:
  # 画面の片隅に、前のセクションから引き継いだ「星」が静かに輝き続けている
  persistent_visuals_state: "star_present"
scenes:
  - scene_id: "cta-1"
    trigger: "on_enter_section"
    # animation: (fadeIn)
    # content: (創設者の写真、メッセージ、CTAボタン)
```
