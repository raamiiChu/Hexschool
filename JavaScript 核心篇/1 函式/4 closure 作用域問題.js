function arrFunction(){
    let arr = [];
    for (var i = 0; i < 3; i++){
        arr.push(function() {
            console.log(i);
        });
    }
    console.log(i);  // 3
    
    return arr;
}


let fn = arrFunction();
fn[0]();  // 3
fn[1]();  // 3
fn[2]();  // 3


// 解決方案 1
// 使用立即函式，限制作用域
// function arrFunction(){
//     let arr = [];
//     for (var i = 0; i < 3; i++){
//         ;(function (j){
//             arr.push(function (){
//                 console.log(j);
//             });
//         }(i))
//     }
    
//     return arr;
// }


// let fn = arrFunction();
// fn[0]();  // 0
// fn[1]();  // 1
// fn[2]();  // 2


// 解決方案 2
// 使用 ES6 “let”
// function arrFunction(){
//     let arr = [];

// 		// 使用 "let" 宣告變數 i
//     for (let i = 0; i < 3; i++){
//         arr.push(function (){
//             console.log(i);
//         });
//     }
// 		// console.log(i);  // 這行會報錯，因為 i 只存在於 for 的大括號內
    
//     return arr;
// }


// let fn = arrFunction();
// fn[0]();  // 0
// fn[1]();  // 1
// fn[2]();  // 2