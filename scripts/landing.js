// ===================================
// LANDING PAGE JAVASCRIPT
// ===================================

// Countdown Timer
function initCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Set target date (December 31, 2025, 23:59:59)
    const targetDate = new Date('2025-12-31T23:59:59').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Countdown finished
            countdownElement.innerHTML = '<p style="color: var(--accent-color); font-size: 1.5rem; font-weight: 700;">Offre expirée</p>';
            return;
        }

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Order Form
const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitButton = orderForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Traitement en cours...';
        submitButton.disabled = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Order submitted:', data);

            // Here you would normally:
            // 1. Send data to your server
            // 2. Process payment
            // 3. Send confirmation email

            // Example:
            // const response = await fetch('/api/orders', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });

            // Show success message
            alert('🎉 Commande reçue avec succès!\n\nMerci pour votre confiance. Vous recevrez un email de confirmation dans quelques instants.\n\nJe vous contacterai sous 24h pour démarrer votre projet.');

            // Reset form
            orderForm.reset();

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (error) {
            console.error('Error submitting order:', error);
            alert('❌ Une erreur est survenue lors de la commande.\n\nVeuillez réessayer ou me contacter directement par email ou téléphone.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Smooth scroll to order section
const orderButtons = document.querySelectorAll('a[href="#order"]');
orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const orderSection = document.getElementById('order');
        if (orderSection) {
            const offsetTop = orderSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
let lastScrollPosition = 0;
const landingHeader = document.querySelector('.landing-header');

if (landingHeader) {
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > 100) {
            landingHeader.style.boxShadow = '0 4px 16px rgba(230, 126, 34, 0.12)';
        } else {
            landingHeader.style.boxShadow = '0 2px 8px rgba(230, 126, 34, 0.08)';
        }

        lastScrollPosition = currentScrollPosition;
    });
}

// Form validation with real-time feedback
const orderInputs = orderForm?.querySelectorAll('.form-input, .form-textarea');

orderInputs?.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });

    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateInput(input);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();

    if (input.hasAttribute('required') && !value) {
        input.classList.add('error');
        input.style.borderColor = '#E74C3C';
        return false;
    }

    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            input.classList.add('error');
            input.style.borderColor = '#E74C3C';
            return false;
        }
    }

    if (input.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value)) {
            input.classList.add('error');
            input.style.borderColor = '#E74C3C';
            return false;
        }
    }

    input.classList.remove('error');
    input.style.borderColor = '';
    return true;
}

// Initialize countdown on page load
document.addEventListener('DOMContentLoaded', initCountdown);

// Track scroll depth for analytics (optional)
let maxScrollDepth = 0;

window.addEventListener('scroll', () => {
    const scrollDepth = (window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight * 100;

    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = Math.floor(scrollDepth);

        // Log milestone scroll depths
        if (maxScrollDepth === 25 || maxScrollDepth === 50 || maxScrollDepth === 75 || maxScrollDepth === 100) {
            console.log(`Scroll depth: ${maxScrollDepth}%`);
            // In production, send to analytics
            // gtag('event', 'scroll_depth', { depth: maxScrollDepth });
        }
    }
});
