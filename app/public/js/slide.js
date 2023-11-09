let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

function autoChangeSlide() {
  changeSlide(1);
}
setInterval(autoChangeSlide, 3000);

showSlide(currentSlide);