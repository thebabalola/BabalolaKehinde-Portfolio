document.addEventListener('DOMContentLoaded', () => {
    // Function to create media element (image or video)
    const createMediaElement = ({ type, src, alt }) => {
        if (type === 'video') {
            return `
                <video muted controls>
                    <source src="${src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>`;
        }
        return `<img src="${src}" alt="${alt}">`;
    };

    // Function to create portfolio item HTML
    const createPortfolioItem = ({ category, media, title, description }) => {
        const mediaElements = media.map(createMediaElement).join('');
        const hasMultipleMedia = media.length > 1;
        return `
            <div class="portfolio-item" data-category="${category}">
                ${hasMultipleMedia ? `
                    <div class="project-slider">
                        <div class="slider-container">
                            ${mediaElements}
                        </div>
                        <button class="slider-btn prev"><</button>
                        <button class="slider-btn next">></button>
                    </div>
                ` : mediaElements}
                <div class="${hasMultipleMedia ? 'project-info' : 'portfolio-item-info'}">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>`;
    };

    // Function to create project item HTML for portfolio.html
    const createProjectItem = ({ media, title, description }) => {
        const mediaElements = media.map(createMediaElement).join('');
        const hasMultipleMedia = media.length > 1;
        return `
            <div class="project-item">
                ${hasMultipleMedia ? `
                    <div class="project-slider">
                        <div class="slider-container">
                            ${mediaElements}
                        </div>
                        <button class="slider-btn prev"><</button>
                        <button class="slider-btn next">></button>
                    </div>
                ` : `
                    <div class="project-slider">
                        <div class="slider-container">
                            ${mediaElements}
                        </div>
                    </div>
                `}
                <div class="project-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>`;
    };

    // Populate index.html portfolio
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (portfolioGrid) {
        portfolioGrid.innerHTML = portfolioData.indexPortfolio.map(createPortfolioItem).join('');
    }

    // Populate portfolio.html sections (only if grids are empty)
    const sections = {
        'residential-grid': portfolioData?.portfolioPage?.residential,
        'commercial-grid': portfolioData?.portfolioPage?.commercial,
        'renovations-grid': portfolioData?.portfolioPage?.renovations,
        'custom-designs-grid': portfolioData?.portfolioPage?.customDesigns
    };

    Object.entries(sections).forEach(([gridId, projects]) => {
        const grid = document.getElementById(gridId);
        if (grid && !grid.hasChildNodes() && projects) {
            grid.innerHTML = projects.map(createProjectItem).join('');
        }
    });

    // Portfolio filtering for index.html
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            const items = document.querySelectorAll('.portfolio-item');
            items.forEach(item => {
                item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
            });
        });
    });

    // Slider functionality for portfolio and projects
    const sliders = document.querySelectorAll('.project-slider');
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const slides = container?.children || [];
        let currentIndex = 0;

        if (slides.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        const showSlide = (index) => {
            container.style.transform = `translateX(-${index * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        };

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

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

    // Automatic slider for testimonials
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const container = testimonialSlider.querySelector('.slider-container');
        const slides = container?.children || [];
        let currentIndex = 0;

        if (slides.length > 1) {
            const showSlide = (index) => {
                container.style.transform = `translateX(-${index * 100}%)`;
                Array.from(slides).forEach((slide, i) => {
                    slide.classList.toggle('active', i === index);
                });
            };

            const nextSlide = () => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            };

            showSlide(currentIndex);
            setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
        }
    }

    // Mobile navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle');

            navLinks.forEach((link, index) => {
                link.style.animation = link.style.animation
                    ? ''
                    : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            });
        });

        // Close nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            });
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.container, .service-item, .portfolio-item, .project-item, .skill-item, .testimonial-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(element => observer.observe(element));
    };

    animateOnScroll();

    // Back-to-top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});