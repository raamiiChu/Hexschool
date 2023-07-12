// var myName = "John";
// let family = {
//     "myName": "John family"
// };

// function fn(para1, para2){
//     console.log(this.myName, para1 ,para2);
// }

// simple call
// fn(1, 2);  // John 1 2

// call
// fn.call(family, 1, 2);  // John family 1 2

// apply
// fn.apply(family, [3, 4]);  // John family 3 4

// bind
// let fn2 = fn.bind(family);
// fn2(5, 6);  // John family 5 6

// let fn3 = fn.bind(family, 7, 8);
// fn3(5, 6);  // John family 7 8

// let fn4 = fn.bind(family, 100);
// fn4(1000);  // John family 100 1000


// 進階
// function fn(para1, para2){
//     console.log(this, typeof this, para1 ,para2);
// }

// fn.call(1, "參數1", "參數2");          // Number {1} '參數1' '參數2'
// fn.call("string", "參數1", "參數2");   // String {'string'} '參數1' '參數2'
// fn.call(null, "參數1", "參數2");       // window '參數1' '參數2'
// fn.call(undefined, "參數1", "參數2");  // window '參數1' '參數2'


function callStrict(para1, para2){
    "use strict";
    console.log(this, typeof this, para1 ,para2);
};

callStrict.call(1, "參數1", "參數2");          // 1 'number' '參數1' '參數2'
callStrict.call(undefined, "參數1", "參數2");  // undefined 'undefined' '參數1' '參數2'

// 直接呼叫下，不會傳入 this，原本的 window 變成 undefined
callStrict("參數1", "參數2");  // undefined 'undefined' '參數1' '參數2'