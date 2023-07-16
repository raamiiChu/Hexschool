$(document).ready(function () {
    $(".btn").click(function (e) { 
        e.preventDefault();
        $(".addTitle").html(`<h1>new title here!!!</h1>`);
        $(".addText").text("new text here");

        console.log($(".addTitle").html());  // <h1>new title here!!!</h1>
        console.log($(".addText").text());   // new text here
    });
});