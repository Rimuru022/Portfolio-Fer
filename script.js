/**
 * Navigation scroll behavior, mobile menu, and active section tracking
 */

(function() {
    const nav = document.getElementById('nav');
    const hamburger = document.getElementById('nav-hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (!nav) return;
    
    let ticking = false;
    
    function updateNav() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            nav.style.background = 'rgba(14, 12, 20, 0.95)';
        } else {
            nav.style.background = 'rgba(18, 16, 24, 0.8)';
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNav);
            ticking = true;
        }
    });
    
    // Scroll-spy: highlight nav link for visible section
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = [];
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const section = document.querySelector(href);
        if (section) {
            sections.push({ link, section });
        }
    });
    
    if (sections.length) {
        let spyTicking = false;
        
        function updateActiveLink() {
            const scrollY = window.scrollY + window.innerHeight / 3; // upper third bias
            
            let activeSection = null;
            let minDistance = Infinity;
            
            sections.forEach(({ link, section }) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const distance = Math.abs(scrollY - sectionTop);
                
                if (scrollY >= sectionTop && distance < minDistance) {
                    minDistance = distance;
                    activeSection = link;
                }
            });
            
            // Also check if we're near the top (hero is visible)
            if (window.scrollY < 300) {
                activeSection = null; // no active link when hero is visible
            }
            
            sections.forEach(({ link }) => {
                link.classList.toggle('active', link === activeSection);
            });
            
            spyTicking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!spyTicking) {
                window.requestAnimationFrame(updateActiveLink);
                spyTicking = true;
            }
        });
        
        updateActiveLink();
    }
    
    // Mobile hamburger menu
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('active');
            
            if (isOpen) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.add('active');
                hamburger.classList.add('active');
                hamburger.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            }
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    updateNav();
})();
