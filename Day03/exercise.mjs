// =====================================================================
// Day 03 — 演習: 配列メソッド・Promise/async
// =====================================================================
//
// 先に Day03/lesson.html（解説・例題）を読んでから取り組んでください。
//
// 実行方法（プロジェクトのルートで）:
//   npm run day03
//   または
//   node Day03/exercise.mjs
//
// ルール:
//   - 各関数の「// ここにコードを書いてください」を自分のコードに置き換える。
//   - 模範解答は載せていません。書けたら実行して期待値と比べましょう。
//   - 未回答のままでもエラーにならず「（未回答）」と表示されます。
// =====================================================================


// --- 演習1（やさしい）: map で変換 -----------------------------------
// 数値の配列 nums の各要素を「2乗（n * n）」した新しい配列を、
// map を使って作って返してください。元の nums は変更しないこと。
function exercise1() {
  const nums = [1, 2, 3, 4];

  // ここにコードを書いてください
  // const squared = nums.map(...);
  const squared = nums.map((n) => n*n);

  return typeof squared !== "undefined" ? squared : undefined;
  // 期待値: [1, 4, 9, 16]
}


// --- 演習2（やさしい）: filter で絞り込み ----------------------------
// scores の中から「60点以上（合格）」の点数だけを残した新しい配列を、
// filter を使って作って返してください。
function exercise2() {
  const scores = [45, 80, 60, 30, 95, 59];

  // ここにコードを書いてください
  const passed = scores.filter((n) => n >= 60);

  return typeof passed !== "undefined" ? passed : undefined;
  // 期待値: [80, 60, 95]
}


// --- 演習3（ふつう）: map でオブジェクトから取り出す -----------------
// users（オブジェクトの配列）から、name だけを取り出した
// 文字列の配列を map で作って返してください。
function exercise3() {
  const users = [
    { id: 1, name: "Taro" },
    { id: 2, name: "Hanako" },
    { id: 3, name: "Jiro" },
  ];

  // ここにコードを書いてください
  const names = users.map((u) => u.name) ;

  return typeof names !== "undefined" ? names : undefined;
  // 期待値: ["Taro", "Hanako", "Jiro"]
}


// --- 演習4（ふつう）: find で1件だけ探す -----------------------------
// products の中から id が 2 の商品（オブジェクト1個）を
// find を使って探して返してください。
function exercise4() {
  const products = [
    { id: 1, name: "りんご" },
    { id: 2, name: "みかん" },
    { id: 3, name: "ぶどう" },
  ];

  // ここにコードを書いてください
  const target = products.find((p) => (p.id)===2);

  return typeof target !== "undefined" ? target : undefined;
  // 期待値: { id: 2, name: "みかん" }
}


// --- 演習5（ちょいむず）: reduce で合計 ------------------------------
// cart（商品の配列）の price を全部足した合計金額を、
// reduce を使って計算して返してください。初期値は 0 にすること。
function exercise5() {
  const cart = [
    { name: "りんご", price: 120 },
    { name: "みかん", price: 80 },
    { name: "ぶどう", price: 300 },
  ];

  // ここにコードを書いてください
  // const total = cart.reduce((acc, item) => ..., 0);
  const total = cart.reduce((acc,n) => acc+n.price,0);

  return typeof total !== "undefined" ? total : undefined;
  // 期待値: 500
}


// --- 演習6（ちょいむず）: filter → map のチェーン --------------------
// todos のうち「done が false（未完了）」のものだけ残し、
// その text だけを取り出した配列を作って返してください。
// （filter で絞り込んでから map で変換、の2段構え）
function exercise6() {
  const todos = [
    { text: "牛乳を買う",   done: false },
    { text: "メール返信",   done: true },
    { text: "部屋の掃除",   done: false },
    // true,falseはboolean
  ];

  // ここにコードを書いてください
  const remaining = todos.filter((t) => t.done === false).map((t) => t.text);
  

  return typeof remaining !== "undefined" ? remaining : undefined;
  // 期待値: ["牛乳を買う", "部屋の掃除"]
}


// --- 演習7（ちょいむず）: async/await -------------------------------
// 下の wait は「指定ミリ秒後に value で成功する Promise」を返す関数です。
// これを await で待って、返ってきた値をそのまま return してください。
// （この関数 solve は async 関数なので、中で await が使えます）
function makeWaiter() {
  return (ms, value) =>
    new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function exercise7() {
  const wait = makeWaiter();

  // ここにコードを書いてください
  // const result = await wait(10, "完了!");
  const result = await wait(10,"完了!");

  return typeof result !== "undefined" ? result : undefined;
  // 期待値: "完了!"
}


// =====================================================================
// 実行結果の表示（未回答は「（未回答）」と出ます）
// =====================================================================
const fmt = (v) => (v === undefined ? "（未回答）" : JSON.stringify(v));
const show = (label, value) => console.log(`  ${label}:`, fmt(value));

// 演習7 は非同期なので、await してから表示する必要があります。
async function main() {
  console.log("■ Day03 演習の結果");
  show("演習1 (期待: [1,4,9,16])", exercise1());
  show("演習2 (期待: [80,60,95])", exercise2());
  show("演習3 (期待: Taro/Hanako/Jiro)", exercise3());
  show("演習4 (期待: id:2 みかん)", exercise4());
  show("演習5 (期待: 500)", exercise5());
  show("演習6 (期待: 牛乳/掃除)", exercise6());
  show("演習7 (期待: 完了!)", await exercise7());
  console.log("");
  console.log("書けたら `npm run day03` で再実行して確認してください。");
}
main();
