const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll('.slide');
const bullets = document.querySelectorAll('.bullet');
const slideWidth = slides[0].offsetWidth + 30;
let slideIndex = 0;

function showSlide(index) {
    if (index > slides.length - 4) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 4;
    } else {
        slideIndex = index;
    }

    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    updateBullets(slideIndex);
}

function updateBullets(index) {
    bullets.forEach(b => b.classList.remove('active'));
    bullets[index].classList.add('active');
}

prev.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

next.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(slideIndex);
