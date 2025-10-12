
// document.addEventListener('DOMContentLoaded', function() {
//     // Set current year in footer
//     const yearSpan = document.getElementById('currentYear-footer');
//     if (yearSpan) {
//         yearSpan.textContent = new Date().getFullYear();
//     }
//     // Footer Whatsapp CLick
//     const whatsappLink = document.getElementById('footer-whatsapp');
//     if (whatsappLink) {
//         whatsappLink.addEventListener('click', function() {
//             window.open('https://wa.me/918053769503', '_blank');
//         });
//     }
//     //Footer Phone Click
//     const phoneLink = document.getElementById('footer-mobile');
//     if (phoneLink) {
//         phoneLink.addEventListener('click', function() {
//             window.location.href = 'tel:+918053769503';
//         });
//     }
//     //Footer Email Click
//     const emailLink = document.getElementById('footer-email');
//     if (emailLink) {
//         emailLink.addEventListener('click', function() {
//             window.location.href = 'mailto:sachindehra503@gmailcom';
//         });
//     }
//     //Footer Website Click
//     const websiteLink = document.getElementById('footer-website');
//     if (websiteLink) {
//         websiteLink.addEventListener('click', function() {
//             window.location.href = 'https://sachincyberservices.github.io';
//         });
//     }
//     // Footer Address Click
//     const addressLink = document.getElementById('footer-address');
// if (addressLink) {
//     addressLink.addEventListener('click', function() {
//         // Option 1: Using coordinates
//         const lat = 29.2095271; // Replace with your latitude
//         const lng = 77.0702973; // Replace with your longitude
//         const url = `https://www.google.com/maps?q=${lat},${lng}`;
        
//         // Option 2: Using address
//         // const address = "Your Full Address Here";
//         // const url = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
        
//         window.open(url, '_blank');
//     });
// }

// });

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('navMenu');
        const toggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all product categories and service cards
document.querySelectorAll('.product-category, .service-card').forEach(el => {
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});


        // Gallery Lightbox Functionality
const galleryImages = document.querySelectorAll('#shop-image-gallery img');
        
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const counter = document.getElementById('lightbox-counter');
    
    img.src = galleryImages[index].src;
    img.onerror = () => { img.src = galleryImages[index].fallback; };
    caption.textContent = galleryImages[index].title;
    counter.textContent = `${index + 1} / ${galleryImages.length}`;
    
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
});
    