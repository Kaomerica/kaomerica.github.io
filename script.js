// Menú responsive
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('show');
});

// Animaciones en scroll
const animatedElements = document.querySelectorAll('[data-animate]');
const animateOnScroll = () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Inicial

// Botón scroll arriba
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
