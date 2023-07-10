$(document).ready(function () {
    $(".btn").click(function (e) { 
        e.preventDefault();
        let fontSize = e.target.getAttribute("id");
        let fontPx;

        if (fontSize === "font-big"){
            fontPx = 20;
        }
        else if (fontSize === "font-medium"){
            fontPx = 16;
        }
        else if (fontSize === "font-small"){
            fontPx = 12;
        }

        $(".content p").css("font-size", `${fontPx}px`);
    });

    $(".ad-close").click(function (e) { 
        e.preventDefault();
        
        $(".ad").fadeOut();
    });
});