// Basic JavaScript for potential future enhancements
// For now, this file can be empty or include simple DOM manipulation

document.addEventListener('DOMContentLoaded', function() {
    console.log('Saveetha Engineering College website loaded.');

    // Example: Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of smoothScrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});