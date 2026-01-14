// ===================================
// BLOG PAGE JAVASCRIPT
// ===================================

// Category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const blogCards = document.querySelectorAll('.blog-card');

if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter blog cards
            blogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    // Animate in
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Show loading state
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Inscription...';
        submitButton.disabled = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Newsletter subscription:', email);

            // Here you would normally send to your server
            // Example:
            // await fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });

            // Show success message
            submitButton.textContent = '✓ Inscrit !';
            submitButton.style.background = '#27AE60';

            // Reset form
            emailInput.value = '';

            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);

        } catch (error) {
            console.error('Error subscribing to newsletter:', error);
            submitButton.textContent = '✗ Erreur';
            submitButton.style.background = '#E74C3C';

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 3000);
        }
    });
}

// Pagination (simple example)
const paginationNumbers = document.querySelectorAll('.pagination-number');

if (paginationNumbers.length > 0) {
    paginationNumbers.forEach(number => {
        number.addEventListener('click', () => {
            // Update active page
            paginationNumbers.forEach(num => num.classList.remove('active'));
            number.classList.add('active');

            // Scroll to top of blog section
            const blogSection = document.querySelector('.blog-section');
            if (blogSection) {
                window.scrollTo({
                    top: blogSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }

            // In a real application, you would load new blog posts here
            console.log('Loading page:', number.textContent);
        });
    });
}
