$(document).ready(function () {
    $(".header").click(function (e) { 
        e.preventDefault();

        $("body").toggleClass("open");
    });
});