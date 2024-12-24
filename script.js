document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
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








    const sliders = document.querySelectorAll('.project-slider');

    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const slides = container.children;
        let currentIndex = 0;

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

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Autoplay functionality
        let autoplayInterval;

        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
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
            }, { threshold: 0.5 }).observe(video);
        }
    });
    







    function initPortfolioPage() {
        const portfolioLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        portfolioLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80; // Height of the fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }


    // Portfolio filtering
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Sample portfolio items (replace with your actual projects)
    // const portfolioItems = [
    //     { category: 'residential', image: './assets/imgs/modern-LR.jpeg', title: 'Modern Living Room', description: 'A contemporary living space with clean lines and neutral tones.'},
    //     { category: 'commercial', image: './assets/imgs/sleek office design.jpg', title: 'Sleek Office Design', description: 'An open-plan office space promoting collaboration and productivity.' },
    //     { category: 'renovation', image: './assets/imgs/Kitchen-MO.jpeg', title: 'Kitchen Makeover', description: 'A complete kitchen renovation with modern appliances and stylish finishes.' },
    //     { category: 'residential', video: './assets/vids/cozy-BR.mp4', title: 'Cozy Bedroom Retreat', description: 'A serene bedroom design focusing on comfort and relaxation.' },
    //     { category: 'commercial', image: './assets/imgs/chic-RS.jpeg', title: 'Chic Retail Space', description: 'A trendy retail interior designed to enhance the shopping experience.' },
    //     { category: 'renovation', video: './assets/vids/bathroom-TF.mp4', title: 'Bathroom Transformation', description: 'A luxurious bathroom renovation with spa-like features.' }
    // ];


    // Select all video elements
const videos = document.querySelectorAll('.portfolio-item video');

// Add click event listeners to each video
videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play(); // Play the video if it is paused
        } else {
            video.pause(); // Pause the video if it is playing
        }
    });
});


    function createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.dataset.category = item.category;

        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;

        return portfolioItem;
    }

    function filterPortfolio(category) {
        const items = portfolioGrid.children;
        for (let item of items) {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

    // Populate portfolio grid
    portfolioItems.forEach(item => {
        portfolioGrid.appendChild(createPortfolioItem(item));
    });

    // Add click event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPortfolio(button.dataset.category);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:', Object.fromEntries(formData));
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });

    // Add this condition to initialize the portfolio page if we're on that page
    if (window.location.pathname.includes('portfolio.html')) {
        initPortfolioPage();
    }
});

