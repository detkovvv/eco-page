import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1700: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
