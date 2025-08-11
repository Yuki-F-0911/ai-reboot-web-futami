# Manga Panels — Monochrome Prompt Pack (Midjourney) — Character-driven (Varied Protagonists)

本ファイルは、サイト各章に挿入する「白黒（モノクロ）漫画コマ」画像の生成プロンプト集です。抽象表現ではなく、ターゲット読者の代弁者となる“等身大の人物キャラクター”のストーリーで構成します。各コマ/各章でキャラクターデザインはバラバラでOK（多様な主人公）。

## Global style and parameters（人物ストーリー前提）

- Style keywords (common)
  - monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, cinematic composition, Japanese seinen manga style, subtle paper texture, expressive facial expression, clear body language
- Negative / avoid (use “--no”)
  - color, text, watermark, logo, photorealistic, 3D, low-res, artifacts, cluttered background
- MJ parameters (guideline)
  - `--style raw`（ディテール過多を避ける）
  - `--ar`（下記の各コマで指定）
  - `--seed <any>`（キャラ多様性を出すため、コマごとに変えてOK）
  - `--chaos 8`（軽いバリエーションを許容）
  - `--v 6`（お好みで）
- Output sizes
  - landscape: 1536x1024（`--ar 3:2`）
  - portrait: 1024x1536（`--ar 2:3`）
  - square: 1024x1024（`--ar 1:1`）

使い方
- 各プロンプトの先頭にキャラクター記述を入れています。必要に応じて変更してください
- 生成後は粒状ノイズ/紙テクスチャを2〜4%加え統一感UP
- 背景は簡素に（室内/デスク/職場ヒント程度）。文字は描かない

---

## Chapter 1 — 原動力・内声（4枚）

1) ch1-01 — 深夜の机で走り書き（portrait / left）
- JP: 深夜の机で、主人公がメモに走り書き。「ここだけは直したい」と唇が少し結ばれている。
- Prompt:
```
a mid-30s product manager man, short neat hair, plain shirt, focused but kind gaze, simple watch,
a close-up of the protagonist writing quick notes at a desk at night, lips slightly tightened with resolve, eraser crumbs, smudged pencil marks, paper fibers visible, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background, cinematic angle, Japanese seinen manga style --style raw --ar 2:3 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 11111 --v 6
```

2) ch1-02 — 履歴書の空白に向き合う（landscape / right）
- JP: 履歴書の空白欄に手を止めて見つめる主人公。白場の強調。
- Prompt:
```
a graduate student in 20s, messy hair, round glasses, backpack, inquisitive look,
protagonist looking at an empty section on a resume page, pen paused, empty space emphasized, subtle focus lines, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background, paper texture subtle --style raw --ar 3:2 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 11112 --v 6
```

3) ch1-03 — 指先アップ（square / left）
- JP: 紙原稿を軽く丸める／マスキングテープを剥がす指先。紙の繊維や折り目が見える。
- Prompt:
```
a freelance designer in early 30s, bob hair, oversized cardigan, sketchbook in hand, thoughtful eyes,
a macro close-up of the protagonist's fingertips crumpling a paper draft or peeling masking tape, fine paper fibers and creases visible, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 1:1 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 11113 --v 6
```

4) ch1-04 — 目を閉じて“なぜ”を探る（landscape / center）
- JP: 目を閉じて胸に手を当てる主人公。背景は簡素、線の集中で内面の集中を表現（文字は描かない）。
- Prompt:
```
a non-binary creator, short dyed hair, minimal outfit, gentle smile, confident posture,
protagonist closing eyes, hand on chest, focusing inward, minimal background, lines converging to suggest inner focus, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art --style raw --ar 3:2 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 11114 --v 6
```

---

## Chapter 2 — 目的→設計（3枚）

1) ch2-01 — 目標を書く前の深呼吸（landscape / left）
- JP: 便箋とペンの前で深呼吸する主人公。狙いを定める眼差し。
- Prompt:
```
a mid-30s engineer man, light stubble beard, rolled sleeves, plain tee, calm determination,
protagonist taking a deep breath before writing a goal on stationery, determined eyes, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 3:2 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 22221 --v 6
```

2) ch2-02 — 「目的」一行（square / right）
- JP: 便箋に書く以外の行為。付箋を3列（カンバン風）に並べる手元。文字は読めない記号。
- Prompt:
```
a public servant in 30s, neat shirt, ID lanyard, composed and sincere expression,
protagonist sorting sticky notes into three columns on a corkboard (kanban-like), moving notes with one hand, no readable text, icons or shapes only, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 1:1 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 22222 --v 6
```

3) ch2-04 — 小さく試す（landscape / right）
- JP: スマホで紙プロトを試す／キッチンタイマーで1分計測して操作する。UI文字は描かない。
- Prompt:
```
a late 20s nurse off-duty, tied hair, relaxed casual clothes, caring expression,
protagonist testing a paper prototype on a smartphone, tapping the screen, a small stopwatch or kitchen timer on the desk, no readable UI text, sense of first trial, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 3:2 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 22223 --v 6
```

---

## Chapter 3 — 共犯者（2枚）

1) ch3-01 — 机を挟んで共創（landscape / left）
- JP: 机を挟んでノートを共有する主人公と相棒（相棒は抽象化顔/横顔でOK）。
- Prompt:
```
a late 20s startup founder, hoodie and sneakers, high energy, quick smile,
protagonist collaborating with a partner across a desk, sharing a notebook, partner shown in side view or simplified face, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, cinematic framing --style raw --ar 3:2 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 33331 --v 6
```

2) ch3-03 — 付箋だらけの壁に向かう（square / left）
- JP: 付箋だらけの壁の前で、線で優先度を繋ぎ考える主人公。
- Prompt:
```
a single parent in 30s, casual work clothes, tote bag, tired but hopeful eyes,
protagonist in front of a wall full of sticky notes, connecting priorities with lines, no readable letters, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 1:1 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 33332 --v 6
```

---

## Chapter 4 — 小さな変化（3枚）

1) ch4-01 — 小さなチェック（square / left）
- JP: カレンダーに小さなチェックを入れる主人公。小さな達成感の微笑。
- Prompt:
```
a late 20s Japanese office worker, short black hair, thin round glasses, simple hoodie,
protagonist putting a small check mark on a calendar, subtle sense of achievement, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 1:1 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 44441 --v 6
```

2) ch4-02 — コミットの積み上げ（portrait / right）
- JP: 紙のコミットログを見て頷く主人公。+1の抽象ラインが並ぶ（文字は読めない）。
- Prompt:
```
a warehouse worker in 40s, cap and work gloves, sturdy jacket, kind and steady eyes,
protagonist nodding at a paper-like commit log with abstract +1 lines repeating (no readable text), sense of incremental updates, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 2:3 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 44442 --v 6
```

3) ch4-03 — 小さな芽（landscape / left）
- JP: 窓辺の小さな芽を見つめる主人公。連続小コマ風でも一枚でOK。
- Prompt:
```
a mid-30s product manager woman, ponytail, plain shirt, focused but kind gaze, simple accessories,
protagonist looking at a tiny sprout by the window, sense of calm progress, monochrome manga panel, black and white, halftone screentone, high contrast, clean line art, minimal background --style raw --ar 3:2 --chaos 8 --no color, text, watermark, photorealistic, 3D --seed 44443 --v 6
```

---

## File naming and placement

- Path: `/public/panels/{chapter}-{index}.jpg`
  - Examples: `/public/panels/ch1-01.jpg`, `/public/panels/ch2-02.jpg`
- 追加生成の際は `{chapter}-{index}{a|b|c}.jpg` でバリエーション管理可

## Alt text policy（代替テキスト）
- 記述的に（例）
  - ch2-02: 「便箋に目的を一行で書く主人公の手元。消しゴムのカスと修正跡。」
  - ch3-01: 「机を挟んでノートを共有する主人公と相棒。」

## 次のステップ
- 先行12枚を生成して配置 → `MangaPanel`/`ChapterPanels` 実装へ適用
- 仕上げでスクリーントーン密度（light/medium/heavy）と回転角（-3〜3°）をUIで微調整