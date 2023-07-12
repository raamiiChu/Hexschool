const URL = "https://jsonplaceholder.typicode.com/todos";

// axios.put(`${URL}/1`)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.error(err); 
//     });


// Promise.all([
//     axios.get(`${URL}/1`),
//     axios.get(`${URL}/2`)
// ])
//     .then((res) => {
//         console.log(res);
//     })


const getData = async () => {
    try {
        const res = await Promise.all([
            axios.get(`${URL}/1`),
            axios.get(`${URL}/2`)
        ]);
        return res;

    } catch (error) {
        throw new Error(error)
    }
}

// getData()
//     .then(res => {
//         console.log(res);
//     });

(async () => {
    const res = await getData();
    console.log(res); 
})();