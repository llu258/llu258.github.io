
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

new Swiper('.card-wrapper', {
    
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //For responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
  });

  new FinisherHeader({
    "count": 555,
    "size": {
      "min": 1,
      "max": 18,
      "pulse": 0
    },
    "speed": {
      "x": {
        "min": 0,
        "max": 0.4
      },
      "y": {
        "min": 0,
        "max": 0.1
      }
    },
    "colors": {
      "background": "#fafafa",
      "particles": [
        "#ffffff",
        "#a2c2cd",
        "#a0bbcd",
        "#e8e8e8",
        "#cdc8cd"
      ]
    },
    "blending": "screen",
    "opacity": {
      "center": 1,
      "edge": 1
    },
    "skew": 0,
    "shapes": [
      "c",
      "s",
      "t"
    ]
  });