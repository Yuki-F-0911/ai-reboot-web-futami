# URLパラメータガイド

## 概要

`/rebooters` ページでは、URLパラメータを使用して初回アンケートをスキップしたり、特定の設定で開始することができます。

## 使用可能なパラメータ

### 基本パラメータ

| パラメータ | 値 | 説明 |
|-----------|-----|------|
| `skip` | `true` | アンケートをスキップしてデフォルト値で開始 |
| `preset` | `efficiency` | 効率重視のプリセット |
| | `possibility` | 可能性重視のプリセット |
| | `debug` | デバッグ用プリセット（開発者向け） |
| `name` | 文字列 | ユーザー名を設定（URLエンコードが必要） |
| `music` | `play` | BGMを再生 |
| | `mute` | BGMをミュート |

## プリセット詳細

### 効率重視プリセット (`preset=efficiency`)
- **期待**: 効率性重視
- **感情**: 変化への適応
- **フォーカス**: スキル習得
- **BGMトラック**: reboot_1.mp3

### 可能性重視プリセット (`preset=possibility`)
- **期待**: 可能性の探求
- **感情**: 成長への欲求
- **フォーカス**: マインドセット変革
- **BGMトラック**: reboot.mp3

### デバッグプリセット (`preset=debug`)
- **自動設定**: 
  - ユーザー名: "デバッグユーザー"
  - BGM: ミュート
  - 効率重視の設定
- **用途**: 開発・テスト用

## 使用例

### 基本的な使用

```
# アンケートをスキップ（デフォルト値）
https://example.com/rebooters?skip=true

# 効率重視プリセットで開始
https://example.com/rebooters?preset=efficiency

# 可能性重視プリセットで開始
https://example.com/rebooters?preset=possibility

# デバッグモードで開始
https://example.com/rebooters?preset=debug
```

### パラメータの組み合わせ

```
# スキップ + 名前設定 + BGM再生
https://example.com/rebooters?skip=true&name=太郎&music=play

# 効率重視プリセット + BGMミュート
https://example.com/rebooters?preset=efficiency&music=mute

# カスタム設定
https://example.com/rebooters?skip=true&name=山田太郎&music=play
```

### 日本語名の使用

日本語を含むパラメータはURLエンコードが必要です：

```javascript
// JavaScriptでのエンコード例
const name = "山田太郎";
const encodedName = encodeURIComponent(name);
const url = `https://example.com/rebooters?name=${encodedName}`;
// 結果: https://example.com/rebooters?name=%E5%B1%B1%E7%94%B0%E5%A4%AA%E9%83%8E
```

## 実装詳細

### フック: `useUrlParams`

URLパラメータの読み取りと処理は `hooks/useUrlParams.tsx` で実装されています。

```typescript
export function useUrlParams() {
  // URLパラメータを読み取り、PersonalizationContextを更新
  // ...
  return {
    isSkipped: boolean,
    preset: string | null,
    urlName: string | null,
    urlMusic: string | null
  }
}
```

### 処理フロー

1. ページロード時にURLパラメータを読み取り
2. パラメータに基づいて `PersonalizationContext` を更新
3. `skip` または `preset` が指定されている場合：
   - アンケート画面をスキップ
   - 指定された設定を適用
   - コンテンツを即座に表示

## 注意事項

- URLパラメータは初回アクセス時のみ有効です
- 既に設定が完了している場合（localStorage に保存済み）は、URLパラメータは無視されます
- 設定をリセットしたい場合は、設定メニューから「初回設定をやり直す」を選択してください

## ユースケース

### 1. マーケティングキャンペーン
特定のペルソナ向けのランディングページから直接誘導：
```
# 効率重視のビジネスパーソン向け
https://example.com/rebooters?preset=efficiency

# 成長志向のクリエイター向け
https://example.com/rebooters?preset=possibility
```

### 2. デモ・プレゼンテーション
```
# デモ用（名前付き、BGMミュート）
https://example.com/rebooters?skip=true&name=デモユーザー&music=mute
```

### 3. 開発・テスト
```
# 開発用（デバッグモード）
https://example.com/rebooters?preset=debug
```

### 4. パーソナライズドリンク
メールマーケティングなどで個人名を含むリンクを送信：
```
# パーソナライズされたリンク
https://example.com/rebooters?name={user_name}&preset=efficiency
```

## トラブルシューティング

### パラメータが適用されない場合

1. **既存の設定を確認**
   - ブラウザの開発者ツールで LocalStorage を確認
   - `aiRebootPersonalization` キーが存在する場合は削除

2. **URLエンコーディング**
   - 特殊文字や日本語は必ずURLエンコード

3. **パラメータの綴り**
   - パラメータ名は大文字小文字を区別します
   - 正確な綴りを確認してください

### デバッグ方法

ブラウザのコンソールで以下を確認：
```javascript
// LocalStorage の内容を確認
localStorage.getItem('aiRebootPersonalization')

// 現在のURLパラメータを確認
new URLSearchParams(window.location.search).toString()
```