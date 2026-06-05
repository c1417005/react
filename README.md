# React 14日間マスター学習プラン
https://engineering.mercari.com/blog/entry/20251223-ai-driven-learning/
こちらの記事を参考にさせていただき、キャッチアップしたいと思っていたReactの学習用レポジトリ
を作りました。問題作成、質問対応、コードレビューすべてclaude codeに任せています。
解説はhtmlで作成させると、見やすく目次から飛べて便利でした。
↓以下コース内容

React 公式ドキュメント [https://react.dev/learn](https://react.dev/learn) を一次情報とした、14日間の体系的学習プランです。
1日あたり **60〜90分** を想定しています。

> 注: Day 1〜3 の JavaScript 復習は react.dev の範囲外のため、一次情報として **MDN Web Docs** を参照URLに記載しています。Day 4 以降は react.dev/learn を一次情報とします。

## 進め方

- 各 Day のディレクトリ（`Day01/` 〜 `Day14/`）に、解説コメント・サンプルコード・演習課題を含む実行可能ファイルを配置します。
- 演習課題は `// ここにコードを書いてください` の空欄形式です。**模範解答は出さず、あなたが書いたコードをレビューする方式**で進めます。
- Day を完了するごとに `PROGRESS.md` を更新します。

---

## フェーズ1: JavaScript 復習（Day 1〜3）

### Day 1 — アロー関数・テンプレートリテラル・let/const
- **学習目標**: モダンJSの基本構文を理解し、`function` とアロー関数の違い・`const`/`let` の使い分けを説明できる。
- **公式ドキュメント**:
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
- **演習課題のテーマ**: 通常関数をアロー関数に書き換え、テンプレートリテラルで挨拶文を組み立てる。

### Day 2 — 分割代入・スプレッド/レスト構文
- **学習目標**: オブジェクト/配列の分割代入と、スプレッド（`...`）によるコピー・結合を使いこなす。Reactのprops・stateで多用する基礎を固める。
- **公式ドキュメント**:
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- **演習課題のテーマ**: オブジェクトから必要な値を分割代入で取り出し、スプレッドで一部だけ更新した新オブジェクトを作る。

### Day 3 — 配列メソッドと非同期（Promise / async・await）
- **学習目標**: `map` / `filter` / `reduce` でデータを変換でき、`Promise` と `async`/`await` で非同期処理の流れを読める。
- **公式ドキュメント**:
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function
- **演習課題のテーマ**: 配列を `map`/`filter` で加工し、`async`/`await` で擬似的なデータ取得を順に処理する。

---

## フェーズ2: React 本編 — UIを記述する（Day 4〜7）

### Day 4 — React入門と最初のコンポーネント
- **学習目標**: Reactとは何かを理解し、開発環境を整え、コンポーネントを定義してレンダリングできる。
- **公式ドキュメント**:
  - https://react.dev/learn （Quick Start）
  - https://react.dev/learn/installation
  - https://react.dev/learn/your-first-component
  - https://react.dev/learn/importing-and-exporting-components
- **演習課題のテーマ**: 関数コンポーネントを自作し、別ファイルからimport/exportして画面に表示する。

### Day 5 — JSX の書き方
- **学習目標**: JSXのルール（単一ルート・属性のキャメルケース等）を理解し、`{}` でJSの値を埋め込める。
- **公式ドキュメント**:
  - https://react.dev/learn/writing-markup-with-jsx
  - https://react.dev/learn/javascript-in-jsx-with-curly-braces
- **演習課題のテーマ**: 変数・式・オブジェクトのスタイルを `{}` で埋め込んだJSXを書く。

### Day 6 — Props でデータを渡す
- **学習目標**: 親から子へ props でデータを渡し、分割代入で受け取り、`children` を扱える。
- **公式ドキュメント**:
  - https://react.dev/learn/passing-props-to-a-component
- **演習課題のテーマ**: プロフィールカードを作り、名前・画像・役職を props で受け取って表示する。

### Day 7 — 条件付きレンダリング・リスト・純粋性
- **学習目標**: 条件分岐でUIを出し分け、配列を `map` でリスト描画し（`key` の意味を含む）、コンポーネントを純粋に保つ原則を理解する。
- **公式ドキュメント**:
  - https://react.dev/learn/conditional-rendering
  - https://react.dev/learn/rendering-lists
  - https://react.dev/learn/keeping-components-pure
- **演習課題のテーマ**: データ配列から `key` 付きリストを描画し、条件によってバッジ表示を切り替える。

---

## フェーズ3: インタラクティビティを加える（Day 8〜10）

### Day 8 — イベント処理と state（useState）
- **学習目標**: イベントハンドラを登録し、`useState` でコンポーネントに「記憶」を持たせて再レンダリングを起こせる。
- **公式ドキュメント**:
  - https://react.dev/learn/responding-to-events
  - https://react.dev/learn/state-a-components-memory
- **演習課題のテーマ**: ボタンクリックでカウントが増減するカウンターを `useState` で実装する。

### Day 9 — state のスナップショットと更新のキューイング
- **学習目標**: stateが「スナップショット」として振る舞う理由を理解し、更新関数（`setX(n => n+1)`）の使いどころを説明できる。
- **公式ドキュメント**:
  - https://react.dev/learn/render-and-commit
  - https://react.dev/learn/state-as-a-snapshot
  - https://react.dev/learn/queueing-a-series-of-state-updates
- **演習課題のテーマ**: 1クリックで複数回stateを更新する処理を、直接指定と更新関数の両方で書き比べる。

### Day 10 — オブジェクト/配列の state 更新
- **学習目標**: stateを直接変更せず、スプレッド構文や `map`/`filter` で新しい値を作って更新する（不変性）を徹底できる。
- **公式ドキュメント**:
  - https://react.dev/learn/updating-objects-in-state
  - https://react.dev/learn/updating-arrays-in-state
- **演習課題のテーマ**: ToDoリストで項目の追加・削除・完了切り替えを不変な方法で実装する。

---

## フェーズ4: state を管理する（Day 11）

### Day 11 — state 構造の設計と共有（リフトアップ）
- **学習目標**: 適切なstate構造を選び、複数コンポーネント間でstateを親に持ち上げて共有できる。
- **公式ドキュメント**:
  - https://react.dev/learn/reacting-to-input-with-state
  - https://react.dev/learn/choosing-the-state-structure
  - https://react.dev/learn/sharing-state-between-components
- **演習課題のテーマ**: 2つの入力欄を親stateで同期させ、片方の変更がもう片方に反映されるUIを作る。

---

## フェーズ5: TypeScript 導入（Day 12）

### Day 12 — React に TypeScript を導入する
- **学習目標**: コンポーネントの props・state に型を付け、型エラーを読んで直せる。これまで書いたJSコンポーネントの一部をTSへ移行する。
- **公式ドキュメント**:
  - https://react.dev/learn/typescript
- **演習課題のテーマ**: Day 6 のプロフィールカードに props 型（interface/type）を付け、`useState` にジェネリックで型を与える。

---

## フェーズ6: 一歩進んだ状態管理と escape hatches（Day 13〜14）

### Day 13 — Reducer と Context
- **学習目標**: 複雑なstateロジックを `useReducer` に切り出し、`Context` でデータを深い階層へ渡せる。
- **公式ドキュメント**:
  - https://react.dev/learn/extracting-state-logic-into-a-reducer
  - https://react.dev/learn/passing-data-deeply-with-context
  - https://react.dev/learn/scaling-up-with-reducer-and-context
- **演習課題のテーマ**: Day 10 のToDoを `useReducer` に書き換え、テーマ設定を `Context` で配布する。

### Day 14 — Refs・Effects・カスタムフック（総まとめ）
- **学習目標**: `useRef` でDOM/値を参照し、`useEffect` で外部システムと同期し、ロジックをカスタムフックに抽出できる。学んだ要素を組み合わせて小さなアプリを完成させる。
- **公式ドキュメント**:
  - https://react.dev/learn/referencing-values-with-refs
  - https://react.dev/learn/synchronizing-with-effects
  - https://react.dev/learn/you-might-not-need-an-effect
  - https://react.dev/learn/reusing-logic-with-custom-hooks
- **演習課題のテーマ**: 入力フォーカス（`useRef`）とデータ取得（`useEffect`）を持つミニアプリを作り、取得ロジックをカスタムフックに切り出す。

---

## 学習の進め方メモ

- 各Day開始時に、上記「公式ドキュメントの該当URL」を一次情報として確認してから着手します。
- 不明点を質問したときは、まず公式ドキュメントの該当箇所を示してから解説します。
- 1日の分量が重いと感じたら、演習を翌日に分割して構いません（マラソンより継続を優先）。
