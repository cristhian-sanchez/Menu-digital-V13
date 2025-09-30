// script.js
// Toggle theme functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        menuItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
            } else {
                const categories = item.getAttribute('data-category').split(' ');
                if (categories.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
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