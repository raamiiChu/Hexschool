$(document).ready(function () {
    $("h1").hide(2000);
    $("h1").show(2000);

    $(".button").click(function (e) { 
        $("h1").hide(200);
        $("h1").show(200);
    });
});