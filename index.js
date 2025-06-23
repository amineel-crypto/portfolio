document.addEventListener('DOMContentLoaded', function () {

    // --- Hamburger Menu Logic ---
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle between hamburger and close icon
            const icon = menuIcon.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuIcon.querySelector('i').classList.remove('fa-times');
                    menuIcon.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }


    // --- Interactive Project Carousel Logic ---
    const projectCards = document.querySelectorAll('.project-card');

    if (projectCards.length > 0) {
        const observerOptions = {
            root: document.querySelector('.projects-grid'), // The scroll container
            rootMargin: '0px',
            threshold: 0.6 // Card is >60% visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        projectCards.forEach(card => {
            observer.observe(card);
        });
    }

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active-link');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active-link');
            }
        });
    });

});