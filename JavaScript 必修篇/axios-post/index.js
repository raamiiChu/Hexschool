const account = document.querySelector(".account");
const password = document.querySelector(".password");
const send = document.querySelector(".send");

send.addEventListener("click", (event) => {
    callSignUp();
})

function callSignUp() {
    if (account.value == "" || password.value == "") {
        alert("請填寫正確資訊");
        return;
    }

    const URL = "https://hex-escape-room.herokuapp.com/api/user/signup"

    let obj = {};
    obj.email = account.value;
    obj.password = password.value;

    axios.post(URL, obj)
        .then((response) => {
            alert(response.data.message);;

            account.value = "";
            password.value = "";
        })
        .catch((error) => {
            console.log(error);
        });
}
