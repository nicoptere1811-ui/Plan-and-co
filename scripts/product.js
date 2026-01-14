// ===================================
// PRODUCT PAGE JAVASCRIPT
// ===================================

// Tab switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update active panel
            tabPanels.forEach(panel => {
                const panelName = panel.getAttribute('data-panel');
                if (panelName === targetTab) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });

            // Scroll to tabs section
            const productDetails = document.querySelector('.product-details');
            if (productDetails) {
                const offsetTop = productDetails.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Sticky product info on scroll (optional enhancement)
const productHeroInfo = document.querySelector('.product-hero-info');
const productHeader = document.querySelector('.product-header');

if (productHeroInfo && productHeader) {
    let productHeaderBottom = 0;

    window.addEventListener('scroll', () => {
        productHeaderBottom = productHeader.offsetTop + productHeader.offsetHeight;
        const scrollPosition = window.pageYOffset;

        // You can add sticky behavior here if needed
        // For now, we keep it simple
    });
}

// Smooth scroll to product details
const learnMoreBtn = document.querySelector('a[href="#product-details"]');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const productDetails = document.querySelector('#product-details');
        if (productDetails) {
            const offsetTop = productDetails.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}
