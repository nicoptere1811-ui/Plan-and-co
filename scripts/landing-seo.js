// Landing SEO - JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
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

    // Form submission
    const devisForm = document.getElementById('devisForm');
    if (devisForm) {
        devisForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(devisForm);
            const data = {};

            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                if (key === 'services') {
                    if (!data.services) {
                        data.services = [];
                    }
                    data.services.push(value);
                } else {
                    data[key] = value;
                }
            }

            // Validate services selection
            if (!data.services || data.services.length === 0) {
                alert('Veuillez sélectionner au moins un service');
                return;
            }

            // Log form data (in production, send to server)
            console.log('Form submitted:', data);

            // Show success message
            alert('Merci ! Votre demande de devis a été envoyée. Nous vous contacterons sous 24h.');

            // Reset form
            devisForm.reset();

            // In production, you would send this to your backend:
            // fetch('/api/devis', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Merci ! Votre demande de devis a été envoyée.');
            //     devisForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('Une erreur est survenue. Veuillez réessayer.');
            // });
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card-seo, .why-card-seo, .process-step-seo').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
