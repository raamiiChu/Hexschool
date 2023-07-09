function storeMoney() {
		let money = 1000;
		return function(price) {
				money += price;
				return money;
		}
}

console.log(storeMoney()(100));  // 1100


let mingMoney = storeMoney();
// console.log(mingMoney);
// ƒ (price) {
// 	money += price;
// 	return money;
// }

console.log(mingMoney(100));  // 1100
console.log(mingMoney(100));  // 1200
console.log(mingMoney(100));  // 1300


// 相互獨立的函式與變數
let jayMoney = storeMoney();
console.log(jayMoney(1000));  // 2000
console.log(jayMoney(1000));  // 3000
console.log(jayMoney(1000));  // 4000
