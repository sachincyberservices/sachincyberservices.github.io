// ========== BANNER POPUP START ==========
(function() {
    let confettiAnimationId;
    
    // Confetti particle system
    function createConfetti() {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particles = [];
        const colors = ['#9333ea', '#ec4899', '#f59e0b', '#3b82f6', '#10b981'];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height - canvas.height;
                this.size = Math.random() * 8 + 4;
                this.speedY = Math.random() * 3 + 2;
                this.speedX = Math.random() * 2 - 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 10 - 5;
            }
            
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.rotation += this.rotationSpeed;
                
                if (this.y > canvas.height) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }
            }
            
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);
                ctx.fillStyle = this.color;
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }
        
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            confettiAnimationId = requestAnimationFrame(animate);
        }
        
        animate();
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    setTimeout(function() {
        const banner = document.getElementById('promo-banner');
        if (banner) {
            banner.classList.remove('hidden');
            createConfetti();
            document.body.style.overflow = 'hidden';
        }
    }, 5000);
    
    window.closeBanner = function() {
        const banner = document.getElementById('promo-banner');
        if (banner) {
            if (confettiAnimationId) {
                cancelAnimationFrame(confettiAnimationId);
            }
            banner.style.opacity = '0';
            banner.style.transition = 'opacity 0.5s ease-out';
            setTimeout(function() {
                banner.classList.add('hidden');
                banner.style.opacity = '1';
            }, 500);
        }
        document.body.style.overflow = 'auto';

    };
})();
// ========== BANNER POPUP END ==========
