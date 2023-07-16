$(document).ready(function () {
    $(".menu li").click(function (e) { 
        // $(this).toggleClass("active");
        // $(this).siblings().removeClass("active");
        $(this).toggleClass("active").siblings().removeClass("active");
    });
});