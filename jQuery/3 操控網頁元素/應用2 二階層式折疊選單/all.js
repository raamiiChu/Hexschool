$(document).ready(function () {
    $(".cart > li > a").click(function (e) { 
        e.preventDefault();

        // 點擊到的元素觸發效果
        $(this).toggleClass("active");
        $(this).parent().find("ul").slideToggle();

        // 切換文字
        let textBody = $(this).text().slice(1);
        if ($(this).hasClass("active")){
            $(this).text(`▼${textBody}`);
        }
        else{
            $(this).text(`△${textBody}`);
        }
        
        // 關閉除自己之外的選單
        $(this).parent().siblings().find("ul").slideUp();
        $(this).parent().siblings().find("a").removeClass("active");
        for (const iterator of $(this).parent().siblings().find("a")) {
            iterator.textContent = iterator.textContent.replace("▼", "△");
        }
    });
});