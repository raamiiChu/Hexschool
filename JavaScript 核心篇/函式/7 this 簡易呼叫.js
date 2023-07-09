var myName = "John";

// IIFE
// ;(function (){
//     function callSomeone(){
//         console.log(this);  // window
//         console.log(this.myName);  // John
//     };
//     callSomeone();
// }());


// closure
// function easyCard(base){
//     let money = base;
//     let myName = "悠遊卡";

//     return function (update){
//         money += update;
//         console.log(this);  // window
//         console.log(this.myName);  // John
//         console.log(money);  // 200
//     };
// }

// let myCard = easyCard(100);
// myCard(100);


// callback
// function myEasyCard(callback){
//     let money = 100;
//     return callback(money);
// }

// function callback(money){
//     console.log(this);  // window
//     console.log(this.myName);  // John
//     console.log(money + 100);  // 200 
// }

// myEasyCard(callback);


// 內建 callback 函式
// let a = [1, 2 ,3];

// a.forEach((item) => {
//     console.log(this);  // window
//     console.log(this.myName);  // John
//     console.log(item);  // 1, 2, 3
// });


let family = {
    "myName": "John family",
    "callName": function (){
        setTimeout(function() {
            console.log(this.myName);
        }, 1000);
    }
}

family.callName();  // John