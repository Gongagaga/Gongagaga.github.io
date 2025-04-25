document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track'); // selection div avec toutes les imgs
    const slides = track.querySelectorAll('img'); // selection des images
    const prevBtn = document.querySelector('.carousel-btn.prev'); // selection bouton prev
    const nextBtn = document.querySelector('.carousel-btn.next'); // selection bouton next
    let currentSlide = 0;

    function updateSlide(position) {
        track.style.transform = `translateX(-${position * 100}%)`; 
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    });
});
