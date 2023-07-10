$(document).ready(function () {
    $(".btn").click(function (e) { 
        $(".box1").delay(0).fadeIn();
        $(".box2").delay(1000).slideDown();

        // show / hide / toggle 要加秒數
        $(".box3").delay(2000).show(0);
    });
});