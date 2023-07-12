let wallet = {
    "total": 100,
    // set save(price){
    //     this.total += price;
    // },
    // get check(){
    //     return this.total;
    // }
}

Object.defineProperty(wallet, "save", {
    configurable: true,
    enumerable: true,
    set: function(price){
        this.total = this.total + price;
    },
    get: function(){
        return this.total;
    }
})

wallet.save = 100;
console.log(wallet.save);  // 200




Object.defineProperty(Array.prototype, "latest", {
    get: function(){
        return this[this.length - 1];
    }
})

a = [1, 2, 3];
b = [4, 5, 6, 7, 8, 9, 5, 2, 4, 5, 7, 8, 0]
console.log(a.latest);  // 3
console.log(b.latest);  // 0