// =====================================================================
// Day 02 — 演習: 分割代入・スプレッド/レスト構文
// =====================================================================
//
// 先に Day02/lesson.html（解説・例題）を読んでから取り組んでください。
//
// 実行方法（プロジェクトのルートで）:
//   npm run day02
//   または
//   node Day02/exercise.mjs
//
// ルール:
//   - 各関数の「// ここにコードを書いてください」を自分のコードに置き換える。
//   - 模範解答は載せていません。書けたら実行して期待値と比べましょう。
//   - 未回答のままでもエラーにならず「（未回答）」と表示されます。
// =====================================================================


// --- 演習1（やさしい）: 配列の分割代入 --------------------------------
// 配列 rgb から、1番目を red、2番目を green、3番目を blue という
// 変数に「分割代入」で取り出してください。
function exercise1() {
  const rgb = ["#f00", "#0f0", "#00f"];

  // ここにコードを書いてください
  // const [ ... ] = rgb;
  const [red,green,blue] = rgb;
  return {
    red:   typeof red   !== "undefined" ? red   : undefined,
    green: typeof green !== "undefined" ? green : undefined,
    blue:  typeof blue  !== "undefined" ? blue  : undefined,
  };
  // 期待値: { red: "#f00", green: "#0f0", blue: "#00f" }
}


// --- 演習2（やさしい）: オブジェクトの分割代入 ------------------------
// 引数で受け取った user オブジェクトから name と age を分割代入で取り出し、
// テンプレートリテラルで「名前: ◯◯ / 年齢: △△」という文字列にして
// 返すアロー関数 introduce を完成させてください。
function exercise2() {
  // const introduce = (user) => { ... };
  // ここにコードを書いてください
  let Info = ``
  const introduce = (user) => {
    const{name,age} = user
    return `名前: ${name} / 年齢: ${age}`
  };

  if (typeof introduce !== "function") return undefined;
  return introduce({ name: "Taro", age: 20, city: "Tokyo" });
  // 期待値: "名前: Taro / 年齢: 20"
}


// --- 演習3（ふつう）: デフォルト値つき分割代入 ------------------------
// settings オブジェクトから theme と fontSize を分割代入で取り出します。
// ただし fontSize が無い場合は 16 をデフォルト値にしてください。
// 取り出した2つを { theme, fontSize } の形で返します。
function exercise3() {
  const settings = { theme: "dark" }; // ← fontSize は入っていない

  // ここにコードを書いてください
  // const { ... } = settings;

  const {theme,fontSize=16} = settings;

  return {
    theme:    typeof theme    !== "undefined" ? theme    : undefined,
    fontSize: typeof fontSize !== "undefined" ? fontSize : undefined,
  };
  // 期待値: { theme: "dark", fontSize: 16 }
}


// --- 演習4（ふつう）: スプレッドで「一部だけ上書き」 ------------------
// 元の user は変更せず（不変性）、age だけ 21 に変えた
// 「新しいオブジェクト」を作って返してください。
function exercise4() {
  const user = { name: "Taro", age: 20, city: "Tokyo" };

  // ここにコードを書いてください
  const updated = {...user,age:21 };

  return typeof updated !== "undefined" ? updated : undefined;
  // 期待値: { name: "Taro", age: 21, city: "Tokyo" }
  // （user 自体は { ..., age: 20 } のままであること）
}


// --- 演習5（ちょいむず）: レストで集める + スプレッドで配列追加 -------
// (1) members 配列を「先頭」と「それ以外（rest）」に分割代入で分ける。
// (2) 元の members は変えずに、末尾に "Newcomer" を加えた
//     新しい配列 added を作る。
// 返り値は { leader, rest, added } の形にしてください。
function exercise5() {
  const members = ["Alice", "Bob", "Carol"];

  // ここにコードを書いてください
  const [leader, ...rest] = members;
  const added = [...members,"Newcomer"];

  return {
    leader: typeof leader !== "undefined" ? leader : undefined,
    rest:   typeof rest   !== "undefined" ? rest   : undefined,
    added:  typeof added  !== "undefined" ? added  : undefined,
  };
  // 期待値:
  //   leader: "Alice"
  //   rest:   ["Bob", "Carol"]
  //   added:  ["Alice", "Bob", "Carol", "Newcomer"]
}


// =====================================================================
// 実行結果の表示（未回答は「（未回答）」と出ます）
// =====================================================================
const fmt = (v) => (v === undefined ? "（未回答）" : JSON.stringify(v));
const show = (label, value) => console.log(`  ${label}:`, fmt(value));

console.log("■ Day02 演習の結果");
show("演習1 (期待: red/green/blue)", exercise1());
show("演習2 (期待: 名前: Taro / 年齢: 20)", exercise2());
show("演習3 (期待: theme=dark, fontSize=16)", exercise3());
show("演習4 (期待: age=21, 他はそのまま)", exercise4());
show("演習5 (期待: leader/rest/added)", exercise5());
console.log("");
console.log("書けたら `npm run day02` で再実行して確認してください。");
