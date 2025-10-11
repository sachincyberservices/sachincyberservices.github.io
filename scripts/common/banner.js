let bannerConfig = null;

async function loadBannerConfig() {
    try {
        const response = await fetch('./scripts/database/config.json');
        bannerConfig = await response.json();
        if (bannerConfig.banner.enabled) {
            initBanner();
        }
    } catch (error) {
        console.error('Failed to load banner config:', error);
    }
}

function initBanner() {
    const banner = document.getElementById('wishes-banner');
    const header = document.querySelector('header');
    
    if (!banner || !header) return;

    banner.style.backgroundColor = bannerConfig.banner.backgroundColor;
    banner.style.color = bannerConfig.banner.textColor;
    banner.querySelector('.banner-text').textContent = bannerConfig.banner.message;
    banner.classList.remove('hidden');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 150) {
            banner.classList.add('in-header');
        } else {
            banner.classList.remove('in-header');
        }
    });
}

function closeBanner() {
    const banner = document.getElementById('wishes-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', loadBannerConfig);
