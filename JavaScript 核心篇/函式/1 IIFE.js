// Immediately Invoked Functions Expressions - 定義完會直接呼叫
;(function () {
    console.log("something");
}());


// 帶入參數，並且回傳
let content = (function (text) {
    return text
}("something"));

console.log(content);


// 使用 object，在兩立即函式之間傳遞變數
let a = {};

;(function (b) {
		b.person = "小明";
}(a));

;(function (c) {
		console.log(c.person);
}(a));


// 使用 window（全域物件）
// ;(function (global) {
//     global.person = "小明";
// }(window));

// ;(function () {
//     console.log(person);
// }());