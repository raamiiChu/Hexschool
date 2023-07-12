function promiseFn(num) {
    return new Promise((resolve, reject) => {
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


promiseFn(1)
    .then((res) => {
        console.log(res);  // success 1
        return promiseFn(2);
    })
    .then((res) => {
        console.log(res);  // success 2
        return promiseFn(0);
    })
    .then((res) => {
        console.log(res);  // 不會執行
    })
    .catch((err) => {
        console.log(err);  // fail 0
        return promiseFn(4);
    })
    .then((res) => {
        console.log(res);  // success 4
    })


// promiseFn(0)
//     .then((res) => {
//         console.log(res);  // 不會執行
//         return promiseFn(3);
//     }, (err) => {
//         console.log(err);  // fail 0
//         return promiseFn(4);
//     })

//     .then((res) => {
//         console.log(res);  // success 4
//     }, (err) => {
//         console.log(err);  // 不會執行
//     })