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

// promiseFn(1)
//     .then((res) => {
//         console.log(res);  // success 1
//         return promiseFn(2);
//     })
//     .then((res) => {
//         console.log(res);  // success 2
//         return promiseFn(0);
//     })
//     .then((res) => {
//         console.log(res);  // 不會執行
//     })
//     .catch((err) => {
//         console.log(err);  // fail 0
//         return promiseFn(4);
//     })
//     .then((res) => {
//         console.log(res);  // success 4
//     });

async function asyncFn() {
    console.log(0);  // 0
    const res = await promiseFn(1);
    console.log(1, res);   // 1 success 1
    const res2 = await promiseFn(2);
    console.log(2, res2);  // 2 success 2
}

asyncFn();


async function asyncFn2() {
    try {
        const res = await promiseFn(0);
        console.log(res);
    } catch (error) {
        console.log(error);  // fail 0
    }
}

asyncFn2();