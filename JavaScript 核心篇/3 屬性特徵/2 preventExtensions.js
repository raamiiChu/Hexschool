var person = {
    "a": 1,
    "b": 2,
    "c": {}
}

Object.preventExtensions(person);

// 是否可被擴充 false
console.log("是否可被擴充", Object.isExtensible(person));

// person a 的屬性特徵 { value: 1, writable: true, enumerable: true, configurable: true }
console.log("person a 的屬性特徵", Object.getOwnPropertyDescriptor(person, "a"));

// 調整屬性 => 成功
person.a = "a";

// 新增屬性 => 失敗
person.d = "d";

// 刪除屬性 => 成功
delete person.b;

// 巢狀屬性調整 => 成功
person.c.a = "ca";

// 調整特徵 => 成功
Object.defineProperty(person, "a", {
    configurable: false
})


// 結果
// { a: 'a', c: { a: 'ca' } }
console.log(person);
// { value: 'a', writable: true, enumerable: true, configurable: false }
console.log(Object.getOwnPropertyDescriptor(person, "a"));