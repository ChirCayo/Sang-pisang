let slides = document.getElementsByClassName("carousel-slide");
let indicators = document.getElementsByClassName("carousel-indicator");
let currentSlide = 0;

function showSlide(slideIndex) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Deactivate all indicators
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }

  // Show the selected slide and activate the corresponding indicator
  slides[slideIndex].style.display = "block";
  indicators[slideIndex].classList.add("active");
  currentSlide = slideIndex; // Update the currentSlide variable
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    showSlide(index);
  }
}

// Event listeners for prev/next buttons
document.querySelector(".carousel-prev").addEventListener("click", previousSlide);
document.querySelector(".carousel-next").addEventListener("click", nextSlide);

// Event listeners for indicators
for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function() {
    goToSlide(i);
  });
}

// Inisialisasi tampilan awal
showSlide(0);

/*Customer Review Section*/
var swiper = new Swiper('.review-slider', {
  loop:true,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView:2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

