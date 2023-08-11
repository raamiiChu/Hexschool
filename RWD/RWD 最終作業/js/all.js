$(document).ready(function () {
    // 點擊漢堡按鈕，啟動手機版選單
    $(".mobile-menu-dropdown").click(function (e) {
        e.preventDefault();

        // 啟動手機板選單 ( 漢堡選單 )
        // 在收合之後，要刪除 display: none; ( 否則在寬度變寬的情況下會有顯示 bug )
        $(".menu").slideToggle(250, function () {
            if ($(this).css("display") === "none") {
                $(this).removeAttr("style");
            }
        });

        // slideToggle 本身會啟用 display: block;，所以先註解起來
        // $(".menu").toggleClass("active");
    });

    // 視窗滑動 => scroll-to-top 按鈕會顯現
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
            $(".scroll-to-top").fadeIn(250);
        } else {
            $(".scroll-to-top").fadeOut(250);
        }
    });

    // scroll-to-top 按鈕 動畫效果
    $(".scroll-to-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            500
        );
    });

    // cart page 產品清單 愛心 click 事件
    $(".fa-heart").click(function (e) {
        e.preventDefault();

        // 切換愛心樣式
        $(this).toggleClass("fa-regular");
        $(this).toggleClass("fa-solid");
    });

    // cart page 產品清單 愛心 hover 效果
    // animate css
    $(".fa-heart").hover(
        function () {
            $(this).addClass("animate__animated animate__jello");
        },
        function () {
            $(this).removeClass("animate__animated animate__jello");
        }
    );

    // lightbox 效果
    lightbox.option({
        resizeDuration: 250,
        wrapAround: true, // 最後一張圖片可以轉到第一張圖片
        disableScrolling: true, // 觸發時不可滾動視窗
        showImageNumberLabel: false, // 不顯示圖片編號
        alwaysShowNavOnTouchDevices: true, // 始終顯示箭頭
        positionFromTop: 150, // 離頂端 150 px
    });
});

// swiper 效果
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true, // 循環播放
    grabCursor: true,
    slidesPerView: 1, // 1 次只會出現 1 個

    // 自動播放
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
        // screen width >= 577
        // 3 個同時出現
        577: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
