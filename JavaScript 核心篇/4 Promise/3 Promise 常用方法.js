function promiseFn(num, time = 500) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num){
                resolve(`success ${num}`);
            }
            else{
                reject(`fail ${num}`);
            }
        }, time);
    });
}

Promise.all([
    promiseFn(3, 1000),
    promiseFn(2, 250),
    promiseFn(1, 2000)
])
    .then((res) => {
        console.log(res);  // [ 'success 3', 'success 2', 'success 1' ]
    })
    .catch((err) => {
        console.log(err);
    });

    
Promise.race([
    promiseFn(0, 1000),
    promiseFn(2, 250),
    promiseFn(1, 2000)
])
    .then((res) => {
        console.log(res);  // success 2
    })
    .catch((err) => {
        console.log(err);
    });

