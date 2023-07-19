$(document).ready(function () {
    // lightbox
    lightbox.option({
        "disableScrolling": true,
        'resizeDuration': 300,
        "positionFromTop": 300,
        "showImageNumberLabel": false,
        'wrapAround': true,
    });


    // 獲取 top-nav 的高度，用於設定 wrap 的 margin-top，避免遮擋
    let topNavHeight = $(".top-nav").height();
    $(".wrap").attr("style", `margin-top:${topNavHeight}px;`);


    // 下拉式選單點擊事件
    $(".header-menu > li").click(function (e) { 
        e.preventDefault();

        // 開啟當前選單
        $(this).find(".dropdown").slideToggle(250);
        $(this).find(".dropdown").toggleClass("active");
        
        // 關掉其他選單 ( 底下的 hover 事件 能避免同時開啟兩個的選單，所以先註解掉 )
        // $(this).siblings().find(".dropdown").slideUp(250);
        // $(this).siblings().find(".dropdown").removeClass("active");
    });

    // 滑鼠離開當前選單的範圍，選單就會關閉
    $(".header-menu > li").hover(function (e) {
            // none
        }, function (e) {
            $(".dropdown").slideUp(250);
            $(".dropdown").removeClass("active");
        }
    );


    // 課程 LOGO hover 效果 (Animate CSS)
    let courseAnimation = "animate__animated animate__tada";
    $(".course-item img").hover(function (e) {
            $(this).addClass(courseAnimation);
            
        }, function (e) {
            $(this).removeClass(courseAnimation);
        }
    );
    
    
    // scroll-to-top 箭頭圖片樣式 (Font Awesome)
    // <i class="fa-solid fa-arrow-up" style="color: #00cc99;"></i>
    $(".scroll-to-top").addClass("fa-solid fa-arrow-up fa-2xl");
    
    // 視窗滑動 => scroll-to-top 按鈕會顯現
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 100){
            $(".scroll-to-top").fadeIn(250);
        }
        else{
            $(".scroll-to-top").fadeOut(250);
        }
    });
    
    // scroll-to-top 按鈕 & footer logo 動畫效果
    $(".scroll-to-top, .footer > a").click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});


// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: "coverflow",

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // 底下的點點可以點擊
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});