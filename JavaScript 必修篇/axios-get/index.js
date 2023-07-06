const URL = "https://hexschool.github.io/ajaxHomework/data.json"
let array = [];

axios.get(URL)
    .then((response) => {
        array = response.data;
        randerData(); 
    });

function randerData() {
    const TITLE = document.querySelector(".title");
    TITLE.textContent = array[0]["name"];
};