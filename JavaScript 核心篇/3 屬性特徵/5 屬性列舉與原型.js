function Person(){}
Person.prototype.name = "人類"
// Object.defineProperty(Person.prototype, "name", {
//     enumerable: false
// })

let ming = new Person();
ming.a = "a";

console.log(ming);  // Person { a: 'a' }

console.log(ming.hasOwnProperty("a"));     // true
console.log(ming.hasOwnProperty("b"));     // false
console.log(ming.hasOwnProperty("name"));  // false

for (const key in ming) {
    if (ming.hasOwnProperty(key)) {
        console.log(key);  // a
    }
}