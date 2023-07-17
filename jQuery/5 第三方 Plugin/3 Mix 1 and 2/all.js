$(document).ready(function () {
    // 可以自行更改動畫設定
    lightbox.option({
        "resizeDuration": 1500
    })
});

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
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});