$(document).ready(function () {
    $(".question h3").click(function (e) { 
        // 點擊到的元素觸發效果
        $(this).toggleClass("active");
        $(this).siblings().slideToggle();

        // 切換文字
        if ($(this).hasClass("active")){
            $(this).text("▼ click me");
        }
        else{
            $(this).text("△ click me");
        }
        
        // 關閉除自己之外的選單
        $(this).parent().siblings().find("p").slideUp();
        $(this).parent().siblings().find("h3").removeClass("active");
        $(this).parent().siblings().find("h3").text("△ click me");
    });
});