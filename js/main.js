import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@2.00": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@3.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@4.00": {
            slidesPerView: 4,
            spaceBetween: 100,
        },
        "@5.00": {
            slidesPerView: 5,
            spaceBetween: 100,
        },
        "@6.00": {
            slidesPerView: 6,
            spaceBetween: 100,
        },
        "@7.00": {
            slidesPerView: 7,
            spaceBetween: 100,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
