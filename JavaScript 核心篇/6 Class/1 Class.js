// function Animal(family) {
//     this.kingdom = "動物界";
//     this.family = family || "人科";
// }

// Animal.prototype.move = function() {
//     console.log(this.name + " move");
// }

// function Dog(name, color, size) { 
//     // 把 Animal 的建構式代入
//     Animal.call(this, "犬科");

//     this.name = name;
//     this.color = color || "white";
//     this.size = size || "small";
// }

// // Dog 的原型繼承於 Animal 的原型
// Dog.prototype = Object.create(Animal.prototype);

// // 把原本的 constructor 加回去
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log(this.name + " bark!!");
// }

// let bibi = new Dog("bibi", "brown", "small");
// bibi.bark();  // bibi bark!!
// bibi.move();  // bibi move
// console.log(bibi.family);  // 犬科


class Animal {
    constructor(family) {
        this.kingdom = "動物界";
        this.family = family || "人科";
    }

    move() {
        console.log(`${this.name} move`);
    }
}


// 繼承
class Dog extends Animal {
    constructor(name, color, size) { 
        // 把資料傳入上層
        super("犬科");  // 對應到 family
    
        this.name = name;
        this.color = color || "white";
        this.size = size || "small";
    }

    bark() {
        console.log(`${this.name} bark!!`);
    }
}


let bibi = new Dog("bibi", "brown", "small");
bibi.bark();  // bibi bark!!
bibi.move();  // bibi move
console.log(bibi.family);  // 犬科