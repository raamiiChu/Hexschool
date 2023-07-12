function HomeAppliance(name, electricity){
    this.name = name || "HomeAppliance";
    this.electricity = electricity || 500;

    this.discharge = function() {
        console.log(`electricity: ${this.electricity}`);
    }
}

function Television(brand, color){
    HomeAppliance.call(this, "television", 200);

    this.brand = brand;
    this.color = color || "white";

    this.turnOn = function () {
        console.log(`turn on ${this.brand} ${this.name}, its color is ${this.color}`);
    }
}

Television.prototype = Object.create(HomeAppliance.prototype);
Television.prototype.constructor = Television;


function Refrigerator(brand, color){
    HomeAppliance.call(this, "refrigerator", 1000);

    this.brand = brand;
    this.color = color || "white";

    this.open = function () {
        console.log(`open ${this.brand} ${this.name}, its color is ${this.color}`);
    }
}

Refrigerator.prototype = Object.create(HomeAppliance.prototype);
Refrigerator.prototype.constructor = Refrigerator;



let sony = new Television("Sony", "black")
sony.discharge();  // electricity: 200
sony.turnOn();     // turn on Sony television, its color is black


let lg = new Refrigerator("LG", "blue")
lg.discharge();  // electricity: 1000
lg.open();       // open LG refrigerator, its color is blue