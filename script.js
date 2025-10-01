// Toggle theme functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de texto espeluznante en el título
const logo = document.querySelector('.logo h1');
if (logo) {
    logo.addEventListener('mouseover', () => {
        logo.style.textShadow = '0 0 10px #8b0000, 0 0 20px #8b0000, 0 0 30px #8b0000';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    });
}

// Manejo de imágenes faltantes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.menu-item-img img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Efecto de scroll para el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        header.style.background = 'var(--color-primary)';
    }
});
