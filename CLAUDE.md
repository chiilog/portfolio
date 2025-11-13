## 開発手法

t_wadaのTDDで、YAGNIの原則に従い、Baby stepsでペアプロを行ってください。

- TDDサイクル: Red → Green → Refactor の順で進める
- 報告タイミング: Greenフェーズ(テストが通る最小実装)で一旦報告
- YAGNI原則: 今必要のない機能は実装しない
- Baby steps: 小さく確実に進む、一度に多くを変更しない
- 可読性優先: 最初は動作する汚い状態でOK、抽象化は後回し

## プロジェクト概要

これは、WordPressの開発を専門とするフロントエンド開発者 Chiaki Okamoto (chiilog) の作品を紹介するAstroで構築された日本のポートフォリオサイトです。このサイトの特徴：

- 個人プロフィールと職歴
- ZennブログのRSS連携による記事表示
- 制作実績の紹介
- 職歴を含む経歴セクション
- Tailwind CSSを使用したレスポンシブデザイン

## 開発コマンド

すべてのコマンドはルートディレクトリで実行します：

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（localhost:3000、Turbopack使用）
npm run dev

# 本番用ビルド（./.next/に出力）
npm run build

# 本番サーバーの起動
npm run start

# リンター実行（ESLint）
npm run lint
```

## アーキテクチャ

### フレームワーク & 設定

- **Next.js 16.0.2** App Router使用
- **React 19.2.0** Server Components & Client Components
- **Turbopack** デフォルトバンドラー
- **Vercel** デプロイメント用（Next.jsネイティブサポート）
- **Tailwind CSS 4.0** スタイリング用
- **TypeScript** 型安全性のため
- **Google Fonts** Quicksandフォント読み込み
- **Google Analytics 4** トラッキング統合
