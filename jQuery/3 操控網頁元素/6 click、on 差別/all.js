$(document).ready(function () {
    // 時刻監聽
    $(".wrap").on("click", "h1",  function (e) {
        e.preventDefault();
        alert("有效!");
    });
    
    // 僅綁定事件，不會時刻監聽
    // $("h1").click(function (e) { 
    //     alert("有效!");
    // });

    $(".box1").html(`<h1>使用 jQuery</h1>`);
});