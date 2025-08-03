# 新トップページ 設計書 (Blueprint)

#### はじめに: 設計思想とグローバルスタイル

このドキュメントは、AI REBOOTトップページのフロントエンド実装のための設計書です。各セクションは、私たちのブランド哲学である「深く、パーソナル」「力強く、共感的」を体現するように設計されています。

**コア思想:**
*   **没入感:** ユーザーが「自分の物語」に集中できる、静かでミニマルな空間。
*   **タイポグラフィ:** フォントのウェイト、サイズ、行間、そして「間」そのものが、最も重要なデザイン要素です。
*   **インタラクション:** すべての操作は、ユーザーの感情に寄り添い、静かで意味のあるフィードバックを返します。

---
```yaml
# global-styles.yaml
# サイト全体で共通のデザイントークンを定義

palette:
  background: "#0A0A0A" # 漆黒に近い、深みのある黒
  text_primary: "#EAEAEA" # 可読性が高く、柔らかい白
  text_secondary: "#A0A0A0" # ややグレーがかった、補助的なテキスト色
  accent: "linear-gradient(90deg, #4A90E2, #9013FE)" # 知性と情熱を表す青から紫へのグラデーション

typography:
  font_family: "'Noto Sans JP', sans-serif"
  base_font_size: "16px"
  line_height: "1.8"

  # 各テキストスタイルの定義
  styles:
    display:
      font_size: "clamp(2.5rem, 6vw, 4.5rem)" # レスポンシブ対応
      font_weight: 700
      line_height: 1.2
    heading_l:
      font_size: "clamp(2rem, 5vw, 3rem)"
      font_weight: 700
      line_height: 1.3
    heading_m:
      font_size: "clamp(1.5rem, 4vw, 2rem)"
      font_weight: 700
      line_height: 1.4
    body:
      font_size: "1rem"
      font_weight: 400
    caption:
      font_size: "0.875rem"
      font_weight: 400
      color: "palette.text_secondary"
```
---

### 【序章】 あなたへの問いかけ / A Question for You

**意図:** サイト訪問者の時間を止め、日常から切り離し、物語の始まりを告げる。ユーザーのアクションが世界を生み出す感覚を創出する。

```yaml
# section-00-hero.yaml
section_id: "hero"
component_name: "HeroSection"
intent: "ユーザーの時間を止め、物語の始まりを告げる"

visuals:
  background: "palette.background"
  # オプション: マウスカーソルに追従する、非常に微細でゆっくりとした光の粒子エフェクト
  interactive_element: "particle_field"
  layout:
    type: "flex"
    direction: "column"
    align: "center"
    justify: "center"
    min_height: "100vh"

animation:
  on_load:
    - target: ".main-copy"
      type: "fadeIn"
      duration: 1.5
      delay: 0.5
      stagger: 0.2 # 各行が少しずつずれて表示される
    - target: ".sub-copy"
      type: "fadeInUp"
      duration: 1.0
      delay: 1.5
    - target: ".cta-button"
      type: "fadeIn"
      duration: 1.0
      delay: 2.0

content:
  main_copy:
    style: "display"
    text: |
      AIに、あなたの未来を任せるな。
      あなたの「Will」で、未来を創れ。
  sub_copy:
    style: "heading_m"
    margin_top: "2rem"
    text: "最高のキャリアは、スキルの習得の先にある、心の底からの「目的」から始まる。"
  cta:
    type: "primary_button"
    margin_top: "4rem"
    text: "あなたの物語を始める（プログラム詳細へ）"
```

---

### 【第一章】 すべては、一つの問いから始まる / The Starting Point

**意図:** ユーザーの内面に深く問いかけ、内省を促す。問いの重みを「間」とタイポグラフィで表現する。

```yaml
# section-01-the-question.yaml
section_id: "the_question"
component_name: "TheQuestionSection"
intent: "ユーザーの内面に深く問いかけ、内省を促す"

visuals:
  background: "palette.background"
  layout:
    type: "flex"
    direction: "column"
    align: "center"
    padding: "10rem 0"

animation:
  on_scroll_into_view:
    - target: ".headline"
      type: "fadeInUp"
      duration: 1.0
    - target: ".divider"
      type: "scaleX"
      duration: 1.0
      delay: 0.5
    - target: ".main-question"
      type: "fadeIn"
      duration: 1.5
      delay: 1.0
      stagger: 0.5 # 各問いが順番に表示
    - target: ".closing-message"
      type: "fadeIn"
      duration: 1.5
      delay: 2.5 # 問いの後、十分な間を置いて表示

content:
  headline:
    style: "heading_m"
    color: "palette.text_secondary"
    text: "AIという強力な「手段」を手にする前に、あなたには、答えるべき「目的」についての問いがある。"
  body:
    style: "body"
    margin_top: "2rem"
    text: "それは、あなたのキャリアと人生にとって、最もシンプルで、最も重要な問い。"
  divider:
    type: "horizontal_line"
    width: "80px"
    margin: "4rem auto"
    background: "palette.accent"
  main_question:
    - style: "heading_l"
      text: "AIを使って、あなたは本当は何がしたいのか？"
    - style: "heading_l"
      margin_top: "1rem"
      text: "どんな自分になりたいのか？"
  closing_message:
    style: "heading_m"
    margin_top: "6rem"
    text: "この根源的な問いに、AIは答えてくれません.\nだからこそ私たちは、まず、あなたの「Will」を明確に定義することから始めます."
```

---

### 【第二章】 私たちの哲学と、変革へのプロセス / Our Philosophy & Process

**意図:** 私たちの独自メソッドを、具体的で信頼できる「3つのステップ」として提示する。ユーザーが自身の変革の道のりを明確にイメージできるようにする。

```yaml
# section-02-the-process.yaml
section_id: "the_process"
component_name: "TheProcessSection"
intent: "独自メソッドを具体的で信頼できる3ステップとして提示する"

visuals:
  background: "palette.background"
  layout:
    type: "flex"
    direction: "column"
    align: "center"
    padding: "10rem 0"

animation:
  on_scroll_into_view:
    - target: ".step-card"
      type: "fadeInUp"
      duration: 0.8
      stagger: 0.3 # 各ステップが順番にアニメーション

content:
  headline:
    style: "heading_l"
    text: "AIという「手段」からではなく、あなたの「目的」から、キャリア戦略を設計します。"
  intro_text:
    style: "body"
    margin_top: "2rem"
    max_width: "60ch" # 読みやすい文字数に制限
    text: "私たちは、以下の3つのステップを通じて、あなたの内なる「Will」を、現実のキャリアと価値に変える、唯一のパートナーです。"
  process_steps:
    type: "grid"
    columns: 3
    gap: "2rem"
    margin_top: "6rem"
    items:
      - title: "STEP 1: Discover"
        subtitle: "あなたの「Will」を探求する"
        icon: "compass" # or similar
        description: "まず、徹底的な自己分析と対話を通じて、あなたが心の底から望むこと、大切にする価値観、そして情熱の源泉である「Will」を言語化します。キャリアの羅針盤となる、揺るぎない北極星を定める、最も重要なプロセスです。"
      - title: "STEP 2: Design"
        subtitle: "あなただけの「戦略」を設計する"
        icon: "blueprint" # or similar
        description: "次に、明確になった「Will」を実現するための、具体的なキャリア戦略と行動計画を設計します。あなたの強みと市場の機会を掛け合わせ、目標達成までの最短ルートを描き出します。これは、あなたの未来の青写真です。"
      - title: "STEP 3: Accelerate"
        subtitle: "AIという「翼」で加速する"
        icon: "rocket" # or similar
        description: "最後に、設計した戦略を実行し、そのプロセスをAIで圧倒的に加速させます。情報収集、学習、アウトプット制作など、あらゆる場面でAIを「思考と創造のパートナー」として活用し、あなたの可能性を最大化します。"
```

---

### 【第三章】 あなたの変革を実現する場所 / The Solution

**意図:** これまでの物語の結論として、具体的な解決策であるアカデミーを提示する。信頼感と価値が凝縮された「カード」として見せる。

```yaml
# section-03-the-solution.yaml
section_id: "the_solution"
component_name: "TheSolutionSection"
intent: "具体的な解決策としてアカデミーを提示する"

visuals:
  background: "#101010" # 背景色を少しだけ変え、セクションの区切りを意識させる
  layout:
    type: "flex"
    direction: "column"
    align: "center"
    padding: "10rem 0"

animation:
  on_scroll_into_view:
    - target: ".solution-card"
      type: "fadeInUp"
      duration: 1.0

content:
  headline:
    style: "heading_l"
    text: "あなたの「変革プロセス」を、現実にする場所がここに。"
  solution_card:
    margin_top: "4rem"
    padding: "4rem"
    border: "1px solid #333"
    border_radius: "16px"
    background: "#151515"
    items:
      - type: "tag"
        text: "AI REBOOT ACADEMY"
      - type: "heading_m"
        margin_top: "1rem"
        text: "「Willの探求」と「AIによる実現」を100日間で体験する、自己変革プログラム。"
      - type: "value_props_list"
        margin_top: "2rem"
        items:
          - "キャリアの方向性の明確化"
          - "AIを活用した問題解決能力"
          - "同じ志を持つ仲間とのネットワーク"
      - type: "primary_button"
        margin_top: "3rem"
        text: "アカデミーの詳細を見る"
```

---

### 【第四章】 あなたのガイドと、創設メンバーへの招待状

**意図:** 講師陣の権威性と、第一期生になることの特権性を伝え、不在の「実績」を未来への「期待」へと転換する。

```yaml
# section-04-guides-and-invitation.yaml
section_id: "guides_and_invitation"
component_name: "GuidesAndInvitationSection"
intent: "講師の権威性と第一期生の特権性を伝え、信頼と期待を醸成する"

visuals:
  background: "palette.background"
  layout:
    type: "flex"
    direction: "column"
    align: "center"
    padding: "10rem 0"

content:
  headline:
    style: "heading_l"
    text: "最高の旅には、最高のガイドと、最初の仲間が必要だ。"
  
  part_1_guides:
    margin_top: "6rem"
    headline:
      style: "heading_m"
      text: "あなたの変革に伴走するプロフェッショナル"
    body:
      style: "body"
      margin_top: "1rem"
      text: "あなたの旅は、決して孤独ではありません。AI、キャリア設計、そして人間心理の深い知見を持つプロフェッショナルたちが、あなたの思考の壁打ち相手となり、伴走者となり、時に厳しいフィードバックをくれる仲間となります。"
    guide_profiles:
      # (ここに講師陣のプロフィールをグリッドで表示)
      placeholder: "ここに、講師・メンターの顔写真、経歴、そして「なぜこのプログラムに参加するのか」という情熱的なメッセージを掲載"

  part_2_invitation:
    margin_top: "8rem"
    padding: "4rem"
    background: "rgba(255, 255, 255, 0.05)" # 招待状のように少し特別な背景
    border_radius: "16px"
    headline:
      style: "heading_m"
      text: "創設メンバー（第一期生）となる、あなたへの招待状"
    body:
      - style: "body"
        margin_top: "2rem"
        font_weight: 700
        text: "まだ、ここに「卒業生の声」はありません。"
      - style: "body"
        margin_top: "1rem"
        text: "なぜなら、あなたが、その最初の「声」になるからです.\n\n私たちは、AI REBOOT ACADEMYの歴史を共に創り上げる「創設メンバー」を募集しています。それは、単なる第一期生ではありません。私たちの理念に共鳴し、自らの変革を通じて、未来の受講生たちの道標となる、開拓者のことです。"
    promises:
      headline:
        style: "body"
        font_weight: 700
        margin_top: "2rem"
        text: "創設メンバーである、あなただけの特別な約束:"
      list:
        margin_top: "1rem"
        items:
          - "密度の高い伴走: ガイド陣からの、通常期以上にパーソナルで、集中的なサポートをお約束します。"
          - "未来への影響力: あなたのフィードバックが、このプログラムの未来を直接形作ります。"
          - "唯一無二の連帯: 歴史の始まりを共にする、かけがえのない仲間との強固な繋がりを築きます。"
    closing_statement:
      style: "heading_m"
      margin_top: "3rem"
      text: "私たちは、完成されたプログラムの「消費者」を探しているのではありません.\nまだ見ぬ未来を、共に創り出す「冒険仲間」を探しています。"
```

---

### 【終章】 あなたの物語を、私に聞かせてください

**意図:** 創設者からの個人的な呼びかけで、ユーザーの心を掴み、最後の行動を促す。説明会ではなく「対話」であることを強調する。

```yaml
# section-05-final-cta.yaml
section_id: "final_cta"
component_name: "FinalCtaSection"
intent: "創設者からの個人的な呼びかけで、最後の行動を促す"

visuals:
  background: "#101010"
  layout:
    type: "grid"
    columns: "1fr 2fr" # 左に写真、右にテキスト
    gap: "4rem"
    align_items: "center"
    padding: "10rem 5%"

content:
  founder_image:
    # 代表者の、誠実さが伝わるポートレート
    placeholder: "代表者の顔写真"
  message_area:
    headline:
      style: "heading_l"
      text: "あなたの物語を、私に聞かせてください。"
    founder_intro:
      style: "body"
      margin_top: "2rem"
      text: "はじめまして。AI REBOOTの創設者、〇〇です。\n\nここまで読み進めてくださったあなたは、きっと、ご自身のキャリアや人生について、深く、真剣に向き合っている方なのだと思います。\n\nなぜ、私が自ら、最初の対話の場に立つのか。\nそれは、このプログラムが、単なるビジネスではなく、私自身の「Will」そのものだからです。そして、歴史の始まりを共にする創設メンバーお一人おひとりの物語に、私自身が、誰よりも真剣に向き合いたいからです。\n\nこれは、一方的な「説明会」ではありません。\n\nあなたがこれまで歩んできた道のり、これから描きたい未来、そして今抱えている葛藤。それらを共有し、私たちのプログラムが、あなたの人生の新たな一章にどう貢献できるのかを、共に探るための「対話の場」です。"
  cta_buttons:
    margin_top: "3rem"
    items:
      - type: "primary_button"
        text: "創設者と直接対話する（無料オンライン）"
      - type: "secondary_button"
        text: "まずは資料で理解を深める（PDF）"
      - type: "text_link"
        text: "先輩たちの変革事例を受け取る（ニュースレター）"
        note: "注: セカンダリBは、将来的に卒業生が出た際に「先駆者たちの物語」などに差し替える"
```