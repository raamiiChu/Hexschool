class Calculator {
    subtotal = 0;
    total = 0;
    serviceFee = 0.05;

    // 私有變數，無法從外側讀取、修改
    #shopName = "A restaurant";

    constructor(items) {
        this.items = items;
        this.orderName = this.items[0].name;
    }

    addNoddles() {
        this.items.push({
            name: "加麵",
            price: 15
        });
    }

    sum() {
        this.subtotal = this.items.reduce((total, value) => {
            return total + value.price;
        }, 0);
        // console.log(this.subtotal);  // 135
    }

    withServiceFee() {
        this.sum();
        this.total = Math.round(this.subtotal * (1 + this.serviceFee));
    }

    createOrder() {
        this.withServiceFee();
        this.orderName = `${this.#shopName} - ${this.orderName}`;
    }

    // setter
    set fee(val){
        this.sum();
        this.serviceFee = (val / this.subtotal).toFixed(3) * 1;
    }

    // getter
    get fee(){
        return Number.parseInt(this.total * this.serviceFee);
    }
}

const order = new Caculator([
    {
        name: "鍋燒意麵",
        price: 120
    }
]);

order.addNoddles();
order.fee = 20;
order.createOrder();

console.log(order.items);       // [ { name: '鍋燒意麵', price: 120 }, { name: '加麵', price: 15 } ]
console.log(order.subtotal);    // 135
console.log(order.fee);         // 22
console.log(order.serviceFee);  // 0.148
console.log(order.total);       // 155
console.log(order.orderName);   // A restaurant - 鍋燒意麵



class Counter{
    // 靜態變數
    static className = "Counter";
    
    constructor(){
        this.x = 100;
        this.y = 200;
    }

    // 靜態方法
    static add(a, b) {
        return a + b;
    }

    // 不能調用 this
    static minus() {
        return this.x - this.y;
    }
}

console.log(Counter.className);    // Counter
console.log(Counter.add(10, 20));  // 30

// 不能調用 this
console.log(Counter.minus());  // NaN

// 無法被呼叫
// a = new Counter();
// a.add(10, 20);  // TypeError: a.add is not a function