# おみくじアプリケーション

ブラウザで楽しめるシンプルなおみくじアプリケーションです。運勢を引いて、その日の運勢と詳細な解説を確認することができます。

## 機能

- 6種類の運勢（大吉、中吉、小吉、末吉、凶、大凶）
- 各運勢に対する詳細な解説
- シンプルで使いやすいUI
- レスポンシブデザイン対応

## 技術スタック

- [Next.js](https://nextjs.org) - Reactフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発環境
- [React](https://reactjs.org/) - UIライブラリ
- [Geist](https://vercel.com/font) - Vercelが提供するフォント

## インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd omikuji

# 依存関係のインストール
npm install
# または
yarn install
# または
pnpm install
```

## 使用方法

1. 開発サーバーを起動：

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
```
2. ブラウザで [http://localhost:3000](http://localhost:3000) を開く
3. 「おみくじを引く」ボタンをクリックして運勢を確認

## 開発

`src/lib/omikuji.ts` にはおみくじの主要なロジックが実装されています：

- `OmikujiResult` - おみくじの結果を表す型定義
- `omikujiResults` - 運勢と解説文のデータ
- `drawOmikuji()` - ランダムにおみくじを引く関数
### 開発用コマンド

```bash
# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境での起動
npm start

# リントの実行
npm run lint
```

## ライセンス

MIT
