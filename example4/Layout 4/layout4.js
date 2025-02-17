const slider = document.querySelector('.section1 .section1-content .slider-container .slider');
const slides = document.querySelectorAll('.section1 .section1-content .slider-container .slider .slide');
let slideIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => showSlide(slideIndex + 1));
prev.addEventListener('click', () => showSlide(slideIndex - 1));
