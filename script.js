// =============================================
// AMAZON CLONE - script.js
// =============================================

/* ---- Hero Slideshow ---- */
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoplay;

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function startAutoplay() {
    autoplay = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

document.querySelector('.next-btn').addEventListener('click', () => {
    clearInterval(autoplay);
    goToSlide(currentSlide + 1);
    startAutoplay();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    clearInterval(autoplay);
    goToSlide(currentSlide - 1);
    startAutoplay();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        clearInterval(autoplay);
        goToSlide(i);
        startAutoplay();
    });
});

startAutoplay();

/* ---- Cart Counter ---- */
const cartCount = document.querySelector('.cart-count');
let count = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;

        // Button feedback animation
        btn.textContent = '✓ Added!';
        btn.style.background = '#067d62';
        btn.style.color = '#fff';
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
            btn.style.background = '';
            btn.style.color = '';
        }, 1200);
    });
});

/* ---- Search Input Focus Style ---- */
const searchInput = document.querySelector('.search-input');
const navSearch   = document.querySelector('.nav-search');
searchInput.addEventListener('focus', () => {
    navSearch.style.outline = '3px solid var(--amazon-orange)';
});
searchInput.addEventListener('blur', () => {
    navSearch.style.outline = 'none';
});
