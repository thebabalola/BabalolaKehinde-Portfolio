document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.project-slider');

    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const slides = container.children;
        let currentIndex = 0;

        // Check if the slider has more than one child element
        if (slides.length <= 1) {
            // If there's only one or no slides, hide the navigation buttons
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return; // Skip the rest of the setup for this slider
        }

        function showSlide(index) {
            container.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Autoplay functionality
        let autoplayInterval;

        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 7000); // Change slide every 5 seconds
        }

        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        // Start autoplay when the mouse leaves the slider
        slider.addEventListener('mouseleave', startAutoplay);

        // Stop autoplay when the mouse enters the slider
        slider.addEventListener('mouseenter', stopAutoplay);

        // Initialize autoplay
        startAutoplay();

        // Pause video when it's not in view
        const video = slider.querySelector('video');
        if (video) {
            video.addEventListener('ended', nextSlide);

            new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.7 }).observe(video);
        }
    });

    // Mobile navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

