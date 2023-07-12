// 工廠函式
// function storeMoney(initMoney){
//     let money = initMoney || 1000;
//     return function(price){
//         money += price;
//         return money;
//     }
// }

// let mingMoney = storeMoney(100);
// console.log(mingMoney(1000));  // 1100


// 私有方法
function storeMoney(initMoney){
    let money = initMoney || 1000;

    // 回傳物件，物件內每個值都是函式
    return {
        "increase": function(price){
            money += price;
        },
        "decrease": function(price){
            money -= price;
        },
        "check": function(){
            return money;
        }
    }
}

let mingMoney = storeMoney(100);
mingMoney.increase(100);
mingMoney.increase(1000);
mingMoney.increase(1238);
mingMoney.decrease(932);
mingMoney.decrease(1300);
mingMoney.decrease(49);

console.log(mingMoney.check());  // 157