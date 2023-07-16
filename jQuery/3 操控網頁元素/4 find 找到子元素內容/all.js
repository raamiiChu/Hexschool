$(document).ready(function () {
    $("li").click(function (e) { 
        $(this).find("h3").toggleClass("active");
    });
});