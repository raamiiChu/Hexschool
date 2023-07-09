// function callName(){
//     console.log(this);
//     console.log(this.myName);
// }


// 指向 window
// var myName = "John";
// callName();  // John


// 指向 family
// let family = {
//     "myName": "Jane family",
//     "callName": callName
// };
// family.callName();  // Jane family


// 指向 family.Jane
// let family = {
//     "myName": "Jane family",
//     "callName": callName,
//     "Jane": {
//         "myName": "Jane",
//         "callName": callName
//     }
// };

// family.Jane.callName();  // Jane


// 比較
let family = {
    "myName": "Jane family",
    "callName": function(){
        console.log(this.myName);
    }
};

family.callName();  // Jane family
let callName = family.callName;
callName();  // undefined