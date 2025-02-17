// TOGGLE DISPLAY
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// FADE DOWN SECTION ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-down");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 } 
  );

  elements.forEach((el) => observer.observe(el));
});

// SWIPER JS
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


// HEADER ANIMATION JS
new FinisherHeader({
  "count": 65,
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

//CONTACT FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorMessage = document.getElementById("errorMessage");

  if (!name || !email || !message) {
    event.preventDefault(); 
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please fill out all required fields.";
  } else {
    errorMessage.style.display = "none"; 
  }
});
