// Add JavaScript for interactivity if needed

document.addEventListener('DOMContentLoaded', () => {
    const filterTabs = document.querySelector('.filter-tabs');
    const tabButtons = document.querySelectorAll('.tab-button');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterTabs) {
        filterTabs.addEventListener('click', (event) => {
            if (event.target.classList.contains('tab-button')) {
                const filter = event.target.getAttribute('data-filter');

                // Update active button state
                tabButtons.forEach(button => {
                    button.classList.remove('active');
                });
                event.target.classList.add('active');

                // Filter project cards
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || filter === category) {
                        card.style.display = 'block'; // Or 'grid', 'flex', etc. depending on layout
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }

    console.log("Portfolio JavaScript loaded and filter tabs initialized.");

    // Example: Smooth scrolling for internal links (if CSS scroll-behavior is not sufficient or more control is needed)
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    */

    // Example: Simple scroll reveal animation for project cards
    /*
    const projectCardsForAnimation = document.querySelectorAll('.project-card');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Optional: Unobserve after revealing to save resources
                // observer.unobserve(entry.target);
            } else {
                 // Optional: Reset animation if element scrolls out of view
                 // entry.target.style.opacity = 0;
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    projectCardsForAnimation.forEach(card => {
        // Initial state for animation
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
    */

}); 