const URL = "https://jsonplaceholder.typicode.com/todos/1";

function get(URL){
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();

        req.open("GET", URL);

        // 完成請求，則執行函式結果
        req.onload = function() {
            if (req.status === 200){
                resolve(req.response);
            }
            else{
                reject("error!!!");
            }
        }

        req.send();
    });
}

get(URL)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }