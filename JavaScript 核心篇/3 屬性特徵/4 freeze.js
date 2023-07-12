var person = {
    "a": 1,
    "b": 2,
    "c": {}
}

Object.freeze(person);

// 是否可被擴充 false
console.log("是否可被擴充", Object.isExtensible(person));

// 是否被封裝 true
console.log("是否被封裝", Object.isSealed(person));

// 是否被凍結 true
console.log("是否被凍結", Object.isFrozen(person));

// person a 的屬性特徵 { value: 1, writable: false, enumerable: true, configurable: false }
console.log("person a 的屬性特徵", Object.getOwnPropertyDescriptor(person, "a"));

// 調整屬性 => 失敗
person.a = "a";

// 新增屬性 => 失敗
person.d = "d";

// 刪除屬性 => 失敗
delete person.b;

// 巢狀屬性調整 => 成功
person.c.a = "ca";

// 調整 writable 特徵 => 失敗
Object.defineProperty(person, "a", {
    writable: false
})

// 調整特徵 => 失敗 TypeError: Cannot redefine property: a
// Object.defineProperty(person, "a", {
//     enumerable: false
// })


// 結果
// { a: 1, b: 2, c: { a: 'ca' } }
console.log(person);
// { value: 1, writable: false, enumerable: true, configurable: false }
console.log(Object.getOwnPropertyDescriptor(person, "a"));