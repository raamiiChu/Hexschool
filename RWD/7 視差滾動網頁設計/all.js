$(document).ready(function () {
    let showSkill = false;

    $(".scrollTop").click(function (e) {
        e.preventDefault();

        let target = $(this).attr("href");
        let targetPos = $(target).offset().top;

        $("html, body").animate(
            {
                scrollTop: targetPos,
            },
            500
        );
    });

    // 視窗滾動效果
    $(window).scroll(function () {
        let scrollPos = $(this).scrollTop();
        let windowHeight = $(window).height();

        // navbar
        $(".scrollTop").each(function (index, element) {
            // element == this
            let target = $(element).attr("href");
            let targetPos = $(target).offset().top;
            let targetHeight = $(target).outerHeight();

            // 元素是否包含在當前視窗高度
            // 若有，則僅啟用自身的 css 樣式
            // 若沒有，則刪除自身的 css 樣式
            if (
                targetPos - 40 <= scrollPos &&
                scrollPos <= targetPos + targetHeight
            ) {
                $(".scrollTop").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });

        // progress bar
        let skillTop = $("#skills").offset().top;

        // 接近進度條，則顯示動畫效果
        if (skillTop - windowHeight / 2 <= scrollPos && !showSkill) {
            $("#skills .progress-bar").each(function (index, element) {
                // element == this
                let progress = $(element).attr("data-progress");
                $(element).css("width", `${progress}%`);
            });

            showSkill = true; // 只會觸發一次
        }

        // animated
        $(".animated").each(function (index, element) {
            // element == this
            let pos = $(element).offset().top;

            // 接近當前視窗時觸發
            if (pos <= scrollPos + windowHeight) {
                $(element).addClass("fade-in");
            }
        });

        // bg scroll
        $("#profiles").css("background-position-y", -(scrollPos / 2));
        $("#header-ele").css("transform", `translateY(${scrollPos / 2}px)`);
    });
});
