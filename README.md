# Portfolio - Chiaki Okamoto

フロントエンド開発者 Chiaki Okamoto (chiilog) のポートフォリオサイト。

## 技術スタック

- **Next.js 16.0.2** - App Router使用
- **React 19.2.0** - Server Components & Client Components
- **Turbopack** - デフォルトバンドラー
- **Tailwind CSS 4.0** - スタイリング
- **TypeScript** - 型安全性
- **Vitest + React Testing Library** - テスト
- **Google Analytics 4** - アクセス解析

## 主な機能

- ✅ Zenn記事のRSS連携（12時間キャッシュ）
- ✅ レスポンシブデザイン
- ✅ フェードインアニメーション
- ✅ スムーススクロール
- ✅ Google Analytics統合

## 開発コマンド

すべてのコマンドはルートディレクトリで実行します：

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（localhost:3000）
npm run dev

# 本番用ビルド
npm run build

# 本番サーバーの起動
npm run start

# リンター実行
npm run lint

# コードフォーマット
npm run format

# テスト実行
npm test
```

## プロジェクト構造

```
/app                  # Next.js App Router
  /layout.tsx         # ルートレイアウト（Google Analytics設定）
  /page.tsx           # メインページ
  /globals.css        # グローバルスタイル（Tailwindカスタムテーマ）
/components           # Reactコンポーネント
  /HeroImage.tsx      # ヒーロー画像（Client Component）
  /Section.tsx        # セクションラッパー
  /ZennArticles.tsx   # Zenn記事一覧（Server Component）
  /ProductCard.tsx    # プロダクトカード
  /ResumeItem.tsx     # 職歴アイテム
  /TechnologyStack.tsx # 技術スタックバッジ
/lib                  # ユーティリティ
  /zennRss.ts         # Zenn RSS取得
/public               # 静的ファイル
/docs                 # ドキュメント
```

## Vercelへのデプロイ

詳細は [docs/vercel-deployment.md](./docs/vercel-deployment.md) を参照してください。

### クイックスタート

1. GitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com) にログイン
3. 「Add New...」→「Project」からリポジトリを選択
4. 「Deploy」をクリック

自動的にビルド・デプロイが実行されます。

## 環境変数

現在、環境変数は使用していません（Google Analytics IDはハードコード済み）。

必要に応じて `.env.example` を `.env` にコピーして編集してください。

## テスト戦略

- **ユニットテスト**: Vitest + React Testing Library
  - シンプルなServer Components
  - Client Components
  - ユーティリティ関数

詳細は [CLAUDE.md](./CLAUDE.md) を参照してください。

## ライセンス

© 2025 Chiaki Okamoto. All rights reserved.

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
