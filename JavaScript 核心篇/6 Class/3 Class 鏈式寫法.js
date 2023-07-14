class Calculator{
    constructor(total){
        this.total = total || 500;
    }

    add(val) {
        this.total += val;
        return this;
    }

    minus(val) {
        this.total -= val;
        return this
    }
}

let cal = new Calculator(1000);

// 鏈式寫法
cal
    .add(150)
    .minus(300)
    .minus(500)
    .add(50);

console.log(cal.total);  // 400