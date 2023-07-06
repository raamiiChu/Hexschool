let data = [
    {
        charge: "免費",
        name: "充電站 1"
    },
    {
        charge: "投幣",
        name: "充電站 2"
    },
    {
        charge: "投幣",
        name: "充電站 3"
    },
    {
        charge: "免費",
        name: "充電站 4"
    }
];

const list = document.querySelector(".list");

// 預設載入
function init() {
    let content = "";

    data.forEach((item) => {
        content += `<li>${item.name}，${item.charge}</li>`;
    });

    list.innerHTML = content;
};

init();


// 篩選器
const stationFilter = document.querySelector(".filter");
stationFilter.addEventListener("click", (event) => {
    let content = "";

    if (event.target.value === undefined) {
        return ;
    }

    if (event.target.value === "全部") {
        init();
        return ;
    }

    data.forEach((item) => {
        if (event.target.value === item.charge) {
            content += `<li>${item.name}，${item.charge}</li>`;
        }
    });

    list.innerHTML = content;
});


// 新增資料
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
    let obj = {
        charge: stationCharge.value, 
        name: stationName.value
    }
    data.push(obj);
    
    init();

    // 清空輸入欄
    stationName.value = "充電站";
    stationCharge.value = "免費";
});