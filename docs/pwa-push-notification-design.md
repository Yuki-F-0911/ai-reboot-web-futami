# PWA プッシュ通知 設計書

**対象リポジトリ**: ai-reboot-web
**技術スタック**: Next.js 15.4 (App Router) / React 19 / TypeScript 5 / Tailwind CSS 3
**作成日**: 2026-03

---

## 1. 要件定義

### 1.1 通知の目的・ユースケース

| 優先度 | ユースケース | トリガー |
|--------|------------|---------|
| 高 | アカデミーブログ新記事公開 | 管理者がmicroCMSに記事を公開したとき |
| 高 | LINE登録 CTAリマインダー | ユーザーが購読後 X 日経過しても LINE 未登録 |
| 中 | セミナー・説明会の案内 | 開催 3 日前・当日 |
| 低 | 期間限定キャンペーン通知 | 管理者手動送信 |

### 1.2 対象ブラウザ・OS

| 環境 | 対応 | 制約 |
|------|------|------|
| Chrome (Android/Desktop) | ✅ 完全対応 | - |
| Firefox (Desktop) | ✅ 完全対応 | - |
| Edge (Desktop) | ✅ 完全対応 | - |
| Safari (macOS 13+) | ✅ 対応 | macOS Ventura 以降 |
| Safari (iOS 16.4+) | ✅ 条件付き対応 | **ホーム画面追加 (PWA インストール) 必須**。ブラウザでのサイト閲覧中は通知権限 API 自体が無効 |
| iOS 16.3 以下 | ❌ 非対応 | Push API 未実装 |
| Chrome (iOS) | ❌ 非対応 | iOS の WebKit 制限により Push API 使用不可 |

**iOS 対応の重要制約**:
- ユーザーがホーム画面に追加して PWA として起動している状態でのみ `Notification.requestPermission()` が有効
- `manifest.json` の `display: "standalone"` が必須
- プッシュ通知権限ダイアログは PWA 内から明示的に呼び出す必要がある（自動表示不可）

### 1.3 オプトイン UI の要件

- **トリガー**: 記事閲覧後のスクロール 75% 到達 or 読了後にソフトプロンプトを表示
- **表示条件**:
  - 過去に「拒否」していない
  - ページ訪問 2 回目以降（`localStorage` で管理）
  - iOS の場合、`standalone` モードでのみ表示（`window.matchMedia('(display-mode: standalone)')` で判定）
- **ソフトプロンプト**: ブラウザネイティブのダイアログより先に、サイト独自の説明 UI を表示して同意を得る（2 段階オプトイン）
- **拒否時の再表示**: 30 日間は再表示しない（`localStorage` に日時を保存）

---

## 2. アーキテクチャ

### 2.1 全体構成

```
[ユーザーブラウザ]
  - Service Worker (sw.js)
  - PushManager.subscribe()
  - Notification API
       |
       | HTTPS
       v
[Next.js API Routes]
  - POST /api/push/subscribe   → 購読情報保存
  - DELETE /api/push/subscribe → 購読解除
  - POST /api/push/send        → 通知送信 (管理者/cron用)
       |
       | web-push (VAPID)
       v
[ブラウザ Push Service]
  FCM (Chrome/Edge/Firefox) / APNs (Safari/iOS)
       |
       v
[ユーザーデバイス] ← 通知表示
```

### 2.2 Service Worker の構成

**採用**: `@serwist/next`（旧 `next-pwa` の後継、Next.js 15 App Router に対応）

`next-pwa` は Next.js 14+ の App Router で問題が発生するため、`@serwist/next` を採用する。

**インストールパッケージ**:
```bash
npm install @serwist/next serwist
npm install web-push
npm install --save-dev @types/web-push
```

### 2.3 Web Push API の実装方針

- **VAPID** (Voluntary Application Server Identification) 認証を使用
- サーバーサイドの push 送信には `web-push` npm パッケージを使用
- iOS Safari 用に `applicationServerKey` を Uint8Array に変換する処理が必要

### 2.4 VAPID キー管理

```bash
# キー生成 (実装時に1回のみ実行)
npx web-push generate-vapid-keys
```

生成したキーは `.env.local`（ローカル）と Vercel 環境変数（本番）に保存:

```env
# .env.local (Git 管理外)
NEXT_PUBLIC_VAPID_PUBLIC_KEY=BExamplePublicKey...
VAPID_PRIVATE_KEY=ExamplePrivateKey...
VAPID_EMAIL=mailto:admin@ai-reboot.io
```

**制約**: `VAPID_PRIVATE_KEY` はサーバーサイド専用。クライアントに露出しない。

### 2.5 購読情報の保存先

**フェーズ1（MVP）**: ファイルベース（`data/push-subscriptions.json`）

- Supabase 未導入のため、まず JSON ファイルに保存
- Vercel のサーバーレス関数はステートレスなのでファイル書き込みは**本番環境では不可**
- → **本番環境では Upstash Redis を使用**（Upstash Redis は新規利用不可のため）

**フェーズ2**: Supabase を導入した場合はテーブルに移行

**Upstash Redis の選択理由**:
- Upstash Redis の後継として Upstash Redis に移行済み（Upstash Redis は新規プロジェクトで利用不可）
- Upstash コンソールで Redis データベースを作成し、接続情報を環境変数に設定
- `@upstash/redis` パッケージで利用可能

```bash
npm install @upstash/redis
```

環境変数（Vercel ダッシュボードおよび `.env.local` に設定）:
```env
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

KV のデータ構造（競合リスク回避のためキーを分散）:
```
Key: "push:sub:{endpoint_hash}"
Value: { subscription, createdAt, userAgent }
TTL: 5184000 秒（60日）

※ 配列丸ごと保存する "push:subscriptions" キーは競合リスクがあるため使用しない。
   endpoint の SHA-256 ハッシュをキーサフィックスにして1購読1キーで管理する。
```

### 2.6 Push サーバー

- **ライブラリ**: `web-push`（Node.js）
- **送信 API**: Next.js Route Handler (`app/api/push/send/route.ts`)
- **認証**: 送信 API は `Authorization: Bearer {PUSH_ADMIN_SECRET}` ヘッダーで保護
- **Cron 実行**: Vercel Cron Jobs（`vercel.json` で設定）

---

## 3. ファイル構成

```
ai-reboot-web/
├── public/
│   ├── manifest.json                         # PWA マニフェスト（新規）
│   ├── sw.js                                 # Service Worker（ビルド生成）
│   └── icons/
│       ├── icon-192x192.png                  # PWA アイコン（新規）
│       ├── icon-512x512.png                  # PWA アイコン（新規）
│       └── badge-72x72.png                   # 通知バッジアイコン（新規・モノクロ推奨）
│
├── app/
│   ├── sw.ts                                 # 新規: Service Worker ソース（Serwist）
│   ├── layout.tsx                            # 変更: manifest リンク・viewport export 追加
│   └── api/
│       └── push/
│           ├── subscribe/
│           │   └── route.ts                  # 新規: 購読 CRUD API
│           ├── send/
│           │   └── route.ts                  # 新規: 通知送信 API（管理者/cron）
│           └── cron/
│               └── new-articles/
│                   └── route.ts              # 新規: Vercel Cron 新記事通知トリガー
│
├── components/
│   └── pwa/
│       ├── PushNotificationManager.tsx       # 新規: 購読管理ロジック（Client Component）
│       ├── PushOptInPrompt.tsx               # 新規: ソフトプロンプト UI
│       └── IosPwaInstallBanner.tsx           # 新規: iOS 向けインストール誘導バナー
│
├── lib/
│   ├── push/
│   │   ├── vapid.ts                          # 新規: VAPID 設定・web-push 初期化
│   │   └── subscription.ts                   # 新規: Upstash Redis との購読情報 CRUD
│   └── utils/
│       └── pwa.ts                            # 新規: PWA 判定ユーティリティ
│
├── hooks/
│   └── usePushNotification.ts                # 新規: 購読状態管理カスタムフック
│
├── serwist.config.ts                         # 新規: Serwist (Service Worker) 設定
├── next.config.ts                            # 変更: Serwist プラグイン追加
└── .env.local                               # 変更: VAPID キー追加（Git 管理外）
```

---

## 4. 実装フロー

### 4.1 Service Worker 登録

**`next.config.ts` の変更**:
```typescript
import withSerwist from "@serwist/next";

const withSerwistConfig = withSerwist({
  swSrc: "app/sw.ts",          // SW ソース
  swDest: "public/sw.js",      // ビルド出力先
  disable: process.env.NODE_ENV === "development",  // dev では無効化
});

export default withSerwistConfig({
  // 既存の next.config 設定
});
```

**`app/sw.ts`（Service Worker ソース）**:
```typescript
import { defaultCache } from "@serwist/next/worker";
import { Serwist } from "serwist";

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: defaultCache,
});
serwist.addEventListeners();

// Push イベントハンドラ
self.addEventListener("push", (event) => {
  const data = event.data?.json() ?? {};
  event.waitUntil(
    self.registration.showNotification(data.title ?? "AI Reboot", {
      body: data.body,
      icon: "/icons/icon-192x192.png",
      badge: "/icons/badge-72x72.png",
      data: { url: data.url ?? "/" },
    })
  );
});

// 通知クリックハンドラ
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
```

**SW 登録について**:

`@serwist/next` は `register: true` がデフォルトのため、SW は自動登録される。`PushNotificationManager.tsx` で `navigator.serviceWorker.register("/sw.js")` を手動呼び出すと **二重登録** が発生するため、手動登録コードは不要。`navigator.serviceWorker.ready` で登録済み SW を参照するだけでよい。

### 4.2 購読処理（PushManager.subscribe）

**`hooks/usePushNotification.ts`**:
```typescript
async function subscribe() {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
    ),
  });
  // バックエンドに購読情報を送信
  await fetch("/api/push/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscription),
  });
}
```

**iOS での `urlBase64ToUint8Array` 変換は必須**（Base64 → Uint8Array）。

### 4.3 バックエンド API

**`app/api/push/subscribe/route.ts`**（購読保存・削除）:
```typescript
// POST: 購読登録
export async function POST(req: Request) {
  const subscription = await req.json();
  await saveSubscription(subscription);   // Upstash Redis に保存（TTL: 60日）
  return Response.json({ ok: true });
}

// DELETE: 購読解除
export async function DELETE(req: Request) {
  const { endpoint } = await req.json();
  await removeSubscription(endpoint);
  return Response.json({ ok: true });
}
```

**`app/api/push/send/route.ts`**（通知送信）:
```typescript
// POST: 全購読者に通知送信
export async function POST(req: Request) {
  // 管理者認証チェック
  const authHeader = req.headers.get("Authorization");
  if (authHeader !== `Bearer ${process.env.PUSH_ADMIN_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, body, url } = await req.json();
  const subscriptions = await getAllSubscriptions();

  const results = await Promise.allSettled(
    subscriptions.map((sub) =>
      webpush.sendNotification(sub, JSON.stringify({ title, body, url }))
    )
  );

  // 410 Gone の購読を Upstash Redis から即時削除
  // （ユーザーが購読解除済みのゾンビ購読を除去してストレージを適正維持）
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    if (result.status === "rejected") {
      const err = result.reason;
      if (err?.statusCode === 410) {
        const endpointHash = hashEndpoint(subscriptions[i].endpoint);
        await redis.del(`push:sub:${endpointHash}`);
      }
    }
  }

  return Response.json({ sent: results.filter(r => r.status === "fulfilled").length });
}
```

### 4.4 通知トリガー

**手動送信**（管理者 UI または curl）:
```bash
curl -X POST https://ai-reboot.io/api/push/send \
  -H "Authorization: Bearer {PUSH_ADMIN_SECRET}" \
  -H "Content-Type: application/json" \
  -d '{"title":"新記事公開","body":"AIツール活用ガイド更新しました","url":"/academy/blog/xxx"}'
```

**Vercel Cron（`vercel.json`）**:
```json
{
  "crons": [
    {
      "path": "/api/push/cron/new-articles",
      "schedule": "0 9 * * 1"
    }
  ]
}
```

---

## 5. セキュリティ考慮事項

### 5.1 VAPID 鍵のサーバーサイド管理

- `VAPID_PRIVATE_KEY` は `NEXT_PUBLIC_` プレフィックスを付けず、サーバーサイドのみで使用
- Vercel ダッシュボードの Environment Variables に登録し、Edge Runtime には公開しない
- ローカルの `.env.local` は `.gitignore` 対象であることを確認

```gitignore
.env.local
.env*.local
```

### 5.2 購読エンドポイントの保護

- Push エンドポイント URL はブラウザの Push Service が発行するもので、それ自体が秘密情報
- Upstash Redis への保存時はエンドポイントをハッシュ化してキーに使用（元の URL はバリューに暗号化して保存）
- `/api/push/send` は `PUSH_ADMIN_SECRET` による Bearer 認証を必須とする
- `/api/push/subscribe` は過剰な購読登録を防ぐためレート制限を設定（Vercel の Edge Rate Limiting または `upstash/ratelimit`）

### 5.3 410 Gone の処理

- Push サービスが `410 Gone` を返した場合（ユーザーが購読解除）は、KV から該当購読を即時削除
- 購読のゾンビ化を防ぎ、KV の使用量を適正に維持

---

## 6. 制約・注意事項

### 6.1 iOS 16.4+ の対応状況と制限

| 項目 | 詳細 |
|------|------|
| 最低要件 | iOS 16.4 以上、Safari のみ |
| インストール要件 | ホーム画面に追加して `standalone` モードで起動が必須 |
| ブラウザ起動時 | `Notification.requestPermission()` は `undefined` / エラーを返す |
| 通知権限ダイアログ | PWA 内からユーザーアクション（タップ等）で明示的に呼び出す必要がある |
| バッジ表示 | iOS/iPadOS 16.4+ のホーム画面 Web App (PWA) は Badging API をサポート。`navigator.setAppBadge(count)` で角バッジを表示できる |
| 無音通知 | iOS はサイレント通知（`silent: true`）未対応 |

**iOS 向けインストール誘導バナー**（`IosPwaInstallBanner.tsx`）が必要:
- iOS Safari でアクセスかつ未インストールの場合に「ホーム画面に追加」手順を案内
- 判定: `navigator.userAgent` に `iPhone/iPad` を含み、`navigator.standalone` が `false`

### 6.2 manifest.json の必須設定

```json
{
  "name": "AI Reboot",
  "short_name": "AI Reboot",
  "display": "standalone",
  "start_url": "/",
  "theme_color": "#0f172a",
  "background_color": "#ffffff",
  "icons": [
    { "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

`display: "standalone"` がないと iOS での Push API が動作しない。

### 6.3 Next.js App Router との統合方法

- **Service Worker のビルド**: `@serwist/next` が `next build` 時に SW を自動生成
- **Client Component 分離**: `PushNotificationManager` は `"use client"` 指令が必須。`app/layout.tsx`（Server Component）から import する場合は dynamic import + `ssr: false` を使用
- **manifest.json のリンク**: `app/layout.tsx` の `metadata` オブジェクトに追加

```typescript
// Next.js 15 では themeColor は metadata ではなく viewport export で指定する
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  // ... 既存の設定
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};
```

- **HTTPS 必須**: Service Worker と Push API は HTTPS でのみ動作。ローカル開発は `localhost` が例外として許可される
- **Edge Runtime 非対応**: `web-push` パッケージは Node.js ランタイム依存。Route Handler に `export const runtime = "nodejs"` を明示するか、デフォルトの Node.js ランタイムを使用

### 6.4 開発環境での動作確認

```bash
# SW は dev モードでは無効化（serwist.config の disable 設定）
# 本番相当で確認する場合
npm run build && npm run start
```

Upstash Redis はローカルでも Docker Redis + `@upstash/redis` の HTTP アダプタ（またはローカル Upstash Dev Server）で代替可能:
```bash
docker run -p 6379:6379 redis
# .env.local に UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN を設定
# (ローカルでは @upstash/redis の compatibility mode か ioredis を使用)
```

---

## 7. 実装優先順位（フェーズ計画）

### Phase 1: 基盤構築（必須）
1. `manifest.json` 作成・`layout.tsx` への追加
2. `@serwist/next` セットアップ・`next.config.ts` 変更
3. VAPID キー生成・環境変数設定
4. `app/api/push/subscribe/route.ts` 実装（Upstash Redis）
5. `usePushNotification` フック実装
6. `PushOptInPrompt` ソフトプロンプト UI 実装

### Phase 2: 送信機能
7. `app/api/push/send/route.ts` 実装
8. 管理者向け送信 UI or curl ドキュメント整備
9. `IosPwaInstallBanner` 実装

### Phase 3: 自動化
10. Vercel Cron による新記事通知の自動化
11. 購読分析（KV のカウント）・GA4 イベント連携

---

## 8. 参考リンク

- [Serwist ドキュメント](https://serwist.pages.dev/)
- [web-push npm パッケージ](https://github.com/web-push-libs/web-push)
- [Upstash Redis ドキュメント](https://upstash.com/docs/redis/overall/getstarted)
- [Safari Web Push (Apple)](https://developer.apple.com/documentation/usernotifications/sending_web_push_notifications_in_web_apps_safari_and_other_browsers)
- [MDN: Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
