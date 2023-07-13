// let bibi = { 
//     "name": "bibi",
//     "color": "brown",
//     "size": "small",

//     // 不要用 arrow function
//     "bark": function() {
//         console.log(this.name + " bark!!!");
//     }
// }

// let pupu = Object.create(bibi);
// console.log(pupu.name);  // bibi

// pupu.name = "pupu"
// console.log(pupu.name);  // pupu
// pupu.bark();  // pupu bark!!!


function Animal(family) {
    this.kingdom = "動物界";
    this.family = family || "人科";
}

// 不要用 arrow function
Animal.prototype.move = function() {
    console.log(this.name + " move");
}

function Dog(name, color, size) { 
    // 把 Animal 的建構式代入
    Animal.call(this, "犬科");

    this.name = name;
    this.color = color || "white";
    this.size = size || "small";
}

// Dog 的原型繼承於 Animal 的原型
Dog.prototype = Object.create(Animal.prototype);

// 把原本的 constructor 加回去
Dog.prototype.constructor = Dog;

// 不要用 arrow function
Dog.prototype.bark = function() {
    console.log(this.name + " bark!!");
}

let bibi = new Dog("bibi", "brown", "small");
bibi.bark();  // bibi bark!!
bibi.move();  // bibi move
console.log(bibi.family);  // 犬科