const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel .prev');
const nextBtn = document.querySelector('.carousel .next');
const totalSlides = track.children.length;
let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
