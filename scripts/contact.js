// ===================================
// CONTACT PAGE JAVASCRIPT
// ===================================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        try {
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;

            // Send to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');

                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Reset form
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                // Optional: Reset after 5 seconds
                setTimeout(() => {
                    contactForm.style.display = 'flex';
                    formSuccess.classList.remove('show');
                }, 5000);
            } else {
                throw new Error('Erreur lors de l\'envoi du formulaire');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Une erreur est survenue. Veuillez réessayer ou me contacter directement par email à planandco9@gmail.com');

            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Envoyer ma demande';
            submitButton.disabled = false;
        }
    });
}

// Form validation feedback
const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#E74C3C';
        } else {
            input.style.borderColor = '';
        }
    });

    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(231, 76, 60)') {
            input.style.borderColor = '';
        }
    });
});
