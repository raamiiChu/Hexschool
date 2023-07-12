const a = new Promise((resolve, reject) => {
    resolve("success");
});

console.log(a);  // Promise { 'success' }

a
.then((res) => {
    console.log(res);  // success
}).catch((err) => {
    console.log(err);
})



function promiseFn(num) {
    console.log("2");

    return new Promise((resolve, reject) => {
        console.log("3");

        setTimeout(() => {
            if (num){
                resolve(`success ${num}`);
            }
            else{
                reject(`fail ${num}`);
            }
        }, 1000);
    });
}


console.log("1");

promiseFn(1)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

console.log("程式碼結束");

// 1
// 2
// 3
// 程式碼結束
// success 1