# first-todo

簡単な Todo アプリ（Vite + React + TypeScript）です。デプロイ済みのデモは次の URL で確認できます。

https://first-todo-23481.web.app/

**目的**
- React の `useState` を使ったシンプルな状態管理の学習用
- タスクの追加・削除の基本動作を学ぶ
- Firebase Hosting にデプロイする流れを学ぶ

**機能（現状）**
- タスクの追加（入力→追加ボタン）
- タスクの削除（削除ボタン）
- Vite による開発・ビルド構成
- Firebase Hosting にデプロイ済み

**Tech Stack**
- Vite
- React + TypeScript
- Tailwind CSS
- Firebase Hosting

**使い方（ローカル）**
- Node のバージョンはプロジェクトの依存に合わせてください（推奨: Node 20 系）
- 推奨: `nvm` を使って Node バージョンを管理します

```zsh
# 依存インストール
npm install

# 開発サーバーを起動（ホットリロードあり）
npm run dev

# ブラウザで開く（通常は http://localhost:5173 など）
```

**本番ビルド**
```zsh
npm run build
# 出力は `dist/` に生成されます
ls -la dist/
```

**Firebase へデプロイ**
- `firebase-tools` が必要です（グローバルインストールまたは `npx` を利用）
- `firebase.json` は `"public": "dist"`、SPA 用の `rewrites` が設定されています

```zsh
# ビルドしてからデプロイ
npm run build
firebase deploy
```

- デプロイ後に古いページが見える場合はブラウザのスーパーリロード（mac: `Cmd+Shift+R`）を試してください。CDN/ブラウザのキャッシュが原因で古いコンテンツが表示されることがあります。

**よくあるトラブル**
- `firebase deploy` しても古いページが出る → スーパーリロードまたはキャッシュ削除
- `npm install -g firebase-tools` が失敗する → Node のバージョン確認（>=20 推奨）と権限（nvm を使うか npm の prefix を変更）

**開発メモ**
- `src/App.tsx` に主要なロジックがあります（`useState` による `todo` と `todos` の制御、`map` / `filter` で表示・削除）
- `firebase.json` を編集する場合は `public` が `dist` を指すことを確認してください

**貢献・改善案**
- 各タスクに一意の ID を付けて `key` に使う（`index` を `key` に使うと再描画で問題が出る場合あり）
- 入力バリデーション（空文字・重複防止）
- ローカルストレージや外部 DB への永続化

**参考サイト**
- https://qiita.com/Tomoboo_319/items/dba30847d78de47b8e6b
 

---

作成者: TKmatsu2008
