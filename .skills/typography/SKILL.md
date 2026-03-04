---
name: typography
description: CSS タイポグラフィのベストプラクティス。日本語・英語両対応の文字組み、行間・文字間、縦書き対応。
---

# Typography Best Practices

日本語・英語両対応のCSSタイポグラフィ実装ガイド。

## Quick Start

`:root`に基本設定を適用:

```css
:where(:root) {
  text-spacing-trim: trim-start;
  text-autospace: normal;
  line-break: strict;
  overflow-wrap: anywhere;

  &:lang(ja) { font-kerning: none; }
  &:lang(en) { font-kerning: normal; }
}
```

## Core Principles

| 項目 | 日本語 | 英語 |
|------|--------|------|
| 本文 | ベタ組み（詰めない） | カーニングあり |
| 見出し | `palt` + `auto-phrase` | `pretty` |
| カーニング | `none`（本文）/ `normal`（見出し） | `normal` |

## Line Height（行間）の黄金律

| 用途 | 推奨値 | 理由 |
|------|--------|------|
| 本文（16px） | `1.5`〜`1.7` | 視線移動を楽にし行を見失わない |
| 見出し（大） | `1.1`〜`1.3` | 複数行をひとまとまりに見せる |
| 小サイズ（12px以下） | `1.6`〜`1.8` | 小さい文字は広めの行間で補う |
| 日本語本文 | `1.5`〜`1.8` | 英語より広めが自然 |
| 英語本文 | `1.3`〜`1.5` | 日本語より狭めでOK |

```css
body {
  font-size: 16px;
  line-height: 1.5;  /* 単位なし＝フォントサイズの1.5倍 */
}

h1 { font-size: 48px; line-height: 1.2; }
h2 { font-size: 32px; line-height: 1.25; }
```

## Letter Spacing（文字間）の原則

**本文は触らない**のが鉄則。フォント本来の設計を活かす。

| 用途 | 推奨値 | 理由 |
|------|--------|------|
| 本文 | `normal`（0） | フォントデザインに委ねる |
| 大文字のみ | `+0.05em` | 大文字は詰まりやすく可読性低下 |
| 小サイズ（12px以下） | `+0.02em` | わずかに広げて識別しやすく |
| 大見出し（48px超） | `-0.02em`程度 | 大きいと間延びするので微調整 |

**禁忌**: 本文の`letter-spacing`をいじる（\"羊泥棒\"と同罪）

## 日本語タイポグラフィ詳細

### ベタ組みの原則

```css
:where(:root:lang(ja)) {
  font-kerning: none;
}
```

**理由**: 日本語は等幅で配置されることを前提に設計されており、本文の文字詰めは可読性を悪化させる。

### 見出しの文字詰め

```css
:where(h1, h2, h3, h4, h5, h6, caption) {
  &:lang(ja) {
    font-feature-settings: "palt";
    font-kerning: normal;
  }
}
```

### text-autospace

日本語と英数字の間に自動でスペースを挿入。

```css
:where(:root) {
  text-autospace: normal;
}

/* 除外が必要な要素 */
:where(pre, time, input, textarea, [contenteditable]) {
  text-autospace: no-autospace;
}
```

### 文節区切り改行

```css
:where(h1, h2, h3, h4, h5, h6, caption) {
  &:lang(ja) {
    word-break: auto-phrase;
  }
}
```

## 英語タイポグラフィ詳細

### text-wrap: pretty

段落最後の孤立単語を防止。

```css
:where(:is(h1, h2, h3, h4, h5, h6, p, caption):lang(en)) {
  text-wrap: pretty;
}
```

### ハーフレディング除去

```css
.-trim-both {
  text-box-trim: trim-both;
  &:lang(en) { text-box-edge: cap alphabetic; }
}
```

## 縦書き（Vertical Writing）

```css
.vertical {
  writing-mode: vertical-rl;
  font-feature-settings: "vpal" 1;  /* 縦書き用プロポーショナル */
  line-height: 2.0;                  /* 縦書きは行間広めに */
}
```

### 論理プロパティへの移行

| 物理（横書き） | 論理 | 縦書きでの意味 |
|---------------|------|----------------|
| `width` | `inline-size` | 高さ（行の長さ） |
| `height` | `block-size` | 幅（行が増える方向） |
| `margin-top` | `margin-block-start` | 右マージン |
| `margin-left` | `margin-inline-start` | 上マージン |

### 縦中横（2桁数字）

```css
.tcy { text-combine-upright: all; }
```

```html
会議は<span class="tcy">15</span>時から。
```

## フォントサイズ別推奨値

```css
:root {
  /* Display（超大見出し） */
  --display-large: 96px;
  --display-large-lh: 1.1;
  --display-large-ls: -0.015em;

  /* Headline（見出し） */
  --h1: 48px; --h1-lh: 1.15; --h1-ls: -0.01em;
  --h2: 32px; --h2-lh: 1.25; --h2-ls: 0;
  --h3: 24px; --h3-lh: 1.3;  --h3-ls: 0;
  --h4: 20px; --h4-lh: 1.35; --h4-ls: 0.01em;

  /* Body（本文） */
  --body-large: 18px;  --body-large-lh: 1.55;
  --body: 16px;        --body-lh: 1.6;
  --body-small: 14px;  --body-small-lh: 1.65;

  /* Caption（キャプション） */
  --caption: 12px;     --caption-lh: 1.7; --caption-ls: 0.02em;
}
```

## アクセシビリティ（WCAG準拠）

### WCAG 2.1 テキスト間隔基準

| 項目 | 最低値 |
|------|--------|
| 行間 | フォントサイズの**1.5倍** |
| 段落間隔 | フォントサイズの**2倍** |
| 文字間 | フォントサイズの**0.12倍**（12%） |
| 単語間隔 | フォントサイズの**0.16倍**（16%） |

## Common Pitfalls

1. `:root`に`font-size: 10px`を指定しない（文字拡大が無効化される）
2. 日本語本文に`palt`を指定しない（ベタ組みが原則）
3. `line-height: 1`は使わない（`text-box-trim`で代替）
4. `overflow: hidden`より`overflow: clip`を優先
