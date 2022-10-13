import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
    
var swiper = new Swiper('#team_swiper', {
    slidesPerView: 4,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    on: {
        resize: function () {
        swiper.changeDirection(getDirection());
        },
    },

    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 50,
        },

        834: {
            slidesPerView: 2,
            spaceBetween: 42,
        },

        375: {
            slidesPerView: 1,
            spaceBetweenSlides: 40
        },
    },

    
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

const best_bootcamp_swiper = new Swiper('#best_bootcamp_swiper', {
    direction: 'horizontal',
    loop: false,

    pagination: {
    el: '.swiper-pagination',
    },

    navigation: {
    nextEl: '#best_bootcamp_next_button',
    prevEl: '#best_bootcamp_prev_button',
    },

    scrollbar: {
    el: '.swiper-scrollbar',
    },
});