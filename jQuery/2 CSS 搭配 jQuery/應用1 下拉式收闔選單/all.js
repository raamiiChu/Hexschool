$(document).ready(function () {
    $(".dropdown").click(function (e) { 
        e.preventDefault();

        // 點擊按鈕之後，保持 hover 樣式
        $(".dropdown").toggleClass("active");

        // 滑動子清單
        $(".dropdown-open").slideToggle();
    });
});