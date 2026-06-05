// =====================================================================
// Day 01 — アロー関数・テンプレートリテラル・let/const
// =====================================================================
//
// 実行方法（プロジェクトのルートで）:
//   npm run day01
//   または
//   node Day01/lesson.mjs
//
// 学習目標:
//   - const / let の使い分けを説明できる
//   - 通常の関数（function）とアロー関数の違いがわかり、書き換えられる
//   - テンプレートリテラル `${...}` で文字列を組み立てられる
//
// 公式ドキュメント（一次情報 / MDN）:
//   - アロー関数: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//   - テンプレートリテラル: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals
//   - const: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const
//   - let:   https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let
//
// このファイルは「解説 → サンプル → 演習」の順です。
// 演習は未回答（空欄）のままでもエラーにならず実行できます。
// 回答を書いたら `npm run day01` で結果を確認してください。
// =====================================================================


// ---------------------------------------------------------------------
// 1. const と let
// ---------------------------------------------------------------------
//
// const : 再代入できない（値を後から差し替えられない）変数。基本はこれを使う。
// let   : 再代入できる変数。値が変化する場合だけ使う。
// var   : 古い書き方。今は使わない。
//
// 「再代入できない」と「中身を変更できない」は別物です。
// const のオブジェクト/配列は、中身（プロパティや要素）は変更できます。

const pi = 3.14;     // 円周率は変わらないので const
let count = 0;       // これから増やすので let
count = count + 1;   // let なので再代入OK

const colors = ["red", "green"];
colors.push("blue"); // const でも配列の中身は追加できる（再代入ではないため）

console.log("■ 1. const / let");
console.log(" const pi =", pi);
console.log(" let count =", count);
console.log(" const colors =", colors);
console.log("");


// ---------------------------------------------------------------------
// 2. アロー関数
// ---------------------------------------------------------------------
//
// 同じ「2倍にする関数」を3通りで書いてみます。

// (a) 通常の関数
function doubleA(n) {
  return n * 2;
}

// (b) アロー関数（ブロック本体）
const doubleB = (n) => {
  return n * 2;
};

// (c) アロー関数（式が1つだけなら return と {} を省略できる = 暗黙のreturn）
const doubleC = (n) => n * 2;

console.log("■ 2. アロー関数（すべて同じ結果）");
console.log("  doubleA(5) =", doubleA(5));
console.log("  doubleB(5) =", doubleB(5));
console.log("  doubleC(5) =", doubleC(5));
console.log("");


// ---------------------------------------------------------------------
// 3. テンプレートリテラル
// ---------------------------------------------------------------------
//
// バッククォート ` ` で囲み、${ } の中に変数や式を埋め込めます。
// 文字列の "+" 連結より読みやすく、改行もそのまま書けます。

const userName = "Taro";
const age = 20;

// 従来の連結（読みにくい）
const oldStyle = "私は" + userName + "、" + age + "歳です。";

// テンプレートリテラル（読みやすい）
const newStyle = `私は${userName}、${age}歳です。`;

// ${ } の中には式も書ける
const nextYear = `来年は${age + 1}歳になります。`;

console.log("■ 3. テンプレートリテラル");
console.log("  oldStyle =", oldStyle);
console.log("  newStyle =", newStyle);
console.log("  nextYear =", nextYear);
console.log("");


// =====================================================================
// 演習課題
// =====================================================================
//
// 各関数の中の「// ここにコードを書いてください」を、あなたのコードに
// 置き換えてください。模範解答は載せていません。書けたら実行して、
// 期待結果と一致するか確認しましょう（一致しなくても、まずは提出OK。
// レビューします）。
// =====================================================================


// --- 演習1（やさしい）: const / let -----------------------------------
// 「現在の年(year)は再代入しない」「合計(total)は後で変化する」とき、
// それぞれ const / let のどちらが適切か考え、変数を宣言してください。
// year には 2026、total には 0 を入れてください。
function exercise1() {
  // ここにコードを書いてください
  // 例: ??? year = 2026;
  //     ??? total = 0;

  const year = 2026;
  let total = 0;

  // 下の return はそのままにしておいてください（採点用）。
  return { year: typeof year !== "undefined" ? year : undefined,
           total: typeof total !== "undefined" ? total : undefined };
}


// --- 演習2（やさしい）: アロー関数に書き換え --------------------------
// 次の通常関数 triple を、暗黙のreturnを使ったアロー関数に書き換えて
// triple という名前で完成させてください。
//
//   function triple(n) {
//     return n * 3;
//   }
//
function exercise2() {
  // ここにコードを書いてください
  // const triple = ... ;
  const triple = (n) => n*3;

  return typeof triple === "function" ? triple(4) : undefined; // 期待値: 12
}


// --- 演習3（ふつう）: テンプレートリテラル ----------------------------
// 引数 name と price を受け取り、
//   「商品: ◯◯ / 税込: △△円」
// という文字列を返すアロー関数 makeLabel を作ってください。
// 税込価格は price の 1.1 倍（小数はそのままでOK）です。
function exercise3() {
  // ここにコードを書いてください
  // const makeLabel = (name, price) => ... ;
  const makeLabel = (name,price) => `商品: ${name} / 税込: ${price * 1.1}円`

  return typeof makeLabel === "function" ? makeLabel("ペン", 100) : undefined;
  // 期待値の例: "商品: ペン / 税込: 110円"
}


// --- 演習4（ふつう）: 組み合わせ --------------------------------------
// 配列 scores の合計と平均を計算し、テンプレートリテラルで
//   「合計: X点 / 平均: Y点」
// という文字列を返してください。
// ・合計を入れる変数は再代入が必要 → 適切なキーワードで宣言
// ・平均 = 合計 / 件数
function exercise4() {
  const scores = [80, 90, 100];
  let total = 0;
  let ave = 0;
  let resultText = ``;

  for (let i = 0;i < scores.length;i++){
    total += scores[i];
  }
  ave = total/scores.length

  resultText = `合計: ${total}点 / 平均: ${ave}点`
  // ここにコードを書いてください
  // 合計を求める（forやfor...of、reduce など好きな方法で）
  // 平均を求める
  // 結果の文字列を resultText に入れる

  
  

  return typeof resultText !== "undefined" ? resultText : undefined;
  // 期待値: "合計: 270点 / 平均: 90点"
}


// =====================================================================
// 【補足解説】 アロー関数を返すアロー関数（高階関数）の文法
// =====================================================================
//
// 演習5の
//
//   const makeTaxCalculator = (rate) => price => price * (1 + rate);
//
// が「なぜこう書けるのか」を、分解して理解しましょう。
//
//
// ■ ステップ1: アロー関数は「値」である
//   アロー関数は、数値や文字列と同じように「変数に入れられる値」です。
//
//     const add = (a, b) => a + b;
//     //    ↑ 変数 add に「関数という値」を入れている
//
//   ということは、「関数の戻り値として関数を返す」こともできます。
//   （数値を返せるなら、関数も返せる、というだけのこと）
//
//
// ■ ステップ2: まず "省略しない" 形で書いてみる
//   makeTaxCalculator を、ブロック本体 { return ... } で丁寧に書くとこうです。
//
//     const makeTaxCalculator = (rate) => {
//       // ここでもう一つアロー関数を作り、それを return する
//       const calc = (price) => {
//         return price * (1 + rate);
//       };
//       return calc;   // ← 関数 calc を返している
//     };
//
//   つまり makeTaxCalculator(0.1) を呼ぶと、
//   「price を受け取って price * 1.1 を返す関数」が返ってきます。
//
//
// ■ ステップ3: 暗黙のreturnで短くする
//   Day1のサンプルでやったとおり、アロー関数は本体が式1つだけなら
//   { return ... } を省略できます（暗黙のreturn）。これを2回使います。
//
//     // 内側の calc を暗黙のreturnに:
//     const makeTaxCalculator = (rate) => {
//       return (price) => price * (1 + rate);
//     };
//
//     // 外側も暗黙のreturnに（return している式が「アロー関数」そのもの）:
//     const makeTaxCalculator = (rate) => (price) => price * (1 + rate);
//
//   これが演習5の形です。( ) は省略してもOKなので
//   (price) は price とも書けます。
//
//
// ■ ステップ4: 読み方のコツ ―― 「=>」は右から1つずつ
//   矢印が2つ並んでいたら、左から「引数を1つ受け取る関数」が
//   入れ子になっていると読みます。
//
//     (rate) => (price) => price * (1 + rate)
//      └─外側─┘  └────────内側────────┘
//
//     外側: rate を受け取る → 戻り値は「(price) => ...」という関数
//     内側: price を受け取る → 戻り値は price * (1 + rate) という数値
//
//
// ■ ステップ5: 使うときは「2回」呼ぶ
//
//     const calc = makeTaxCalculator(0.1);
//     //    ↑ 1回目の呼び出し。rate=0.1 が「内側の関数の中に記憶」される。
//     //      calc には「price => price * 1.1」が入る。
//
//     calc(200);   // ↑ 2回目の呼び出し。price=200 → 200 * 1.1 = 220
//
//   一気に書くなら、こうも書けます（( )( ) と続けて2回呼ぶ）:
//
//     makeTaxCalculator(0.1)(200);  // → 220
//
//
// ■ なぜ rate を「覚えて」いられるのか（クロージャ）
//   1回目の呼び出しが終わっても、内側の関数は外側の引数 rate を
//   参照し続けられます。この「関数が、自分が作られた場所の変数を
//   覚えている」仕組みを【クロージャ(closure)】と呼びます。
//   今は「内側の関数は外側の引数を使える」とだけ覚えればOKです。
//   ※ クロージャは React の useState などを理解するとき再登場します。
//
// =====================================================================


// --- 演習5（ちょいむず）: アロー関数を返す関数 ------------------------
// 「税率」を受け取り、「金額を受け取って税込価格を返すアロー関数」を
// 返す関数 makeTaxCalculator を作ってください。
// （アロー関数の中でアロー関数を返す = 高階関数の入り口です）
//
// 使用イメージ:
//   const calc = makeTaxCalculator(0.1); // 税率10%
//   calc(200); // → 220
function exercise5() {
  // ここにコードを書いてください
  const makeTaxCalculator = (rate) => price => price*(1+rate) ;

  if (typeof makeTaxCalculator !== "function") return undefined;
  const calc = makeTaxCalculator(0.1);
  return typeof calc === "function" ? calc(200) : undefined; // 期待値: 220
}


// =====================================================================
// 演習の実行結果を表示（未回答は「（未回答）」と出ます）
// =====================================================================
const show = (label, value) =>
  console.log(`  ${label}:`, value === undefined ? "（未回答）" : value);

console.log("■ 演習の結果");
show("演習1", exercise1());
show("演習2 (期待: 12)", exercise2());
show("演習3 (期待: 商品: ペン / 税込: 110円)", exercise3());
show("演習4 (期待: 合計: 270点 / 平均: 90点)", exercise4());
show("演習5 (期待: 220)", exercise5());
console.log("");
console.log("書けたら `npm run day01` で再実行して結果を確認してください。");
