function Dog(name, color, size) { 
    this.name = name;
    this.color = color;
    this.size = size;
}

// 不要用 arrow function
Dog.prototype.bark = function() {
    console.log(this.name + " bark!!");
}

let bibi = new Dog("bibi", "brown", "small");
console.log(bibi);  // Dog { name: 'bibi', color: 'brown', size: 'small' }
bibi.bark();        // bibi bark!!

let pupu = new Dog("pupu", "white", "big")
console.log(pupu);  // Dog { name: 'pupu', color: 'white', size: 'big' }
pupu.bark();        // pupu bark!!