$(document).ready(function () {
    $(".top a").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});