const LIST = document.querySelector(".list");
const TXT = document.querySelector(".txt");
const SAVE = document.querySelector(".save");


let data = [];

function renderData() {
    let listContent = "";

    data.forEach((item, index) => {
        listContent += `
            <li>
                ${item.content} 
                <input type="button" class="delete" value="刪除待辦" data-index="${index}">
            </li>
        `;
    })

    LIST.innerHTML = listContent;
    TXT.value = "";
}

// 新增
SAVE.addEventListener("click", (event) => {
    if (TXT.value === "") {
        alert("請輸入內容");
        return;
    }

    obj = {};
    obj.content = TXT.value;
    data.push(obj);

    renderData();
});

// 刪除
LIST.addEventListener("click", (event) => {
    if (event.target.getAttribute("class") === "delete"){
        let index = event.target.getAttribute("data-index");
        data.splice(index, 1);

        renderData();
    };
})