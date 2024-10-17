document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');
    const skillsCards = document.querySelectorAll('.skills-card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');
    const themeToggle = document.getElementById('theme-toggle');

    // Function to open modal
    function openModal(title, description) {
        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modal.style.display = 'flex';
    }

    // Add click event listeners to project cards
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            openModal(title, description);
        });
    });

    // Add click event listeners to skill cards
    skillsCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');
            openModal(title, description);
        });
    });

    // Close modal when close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll event for animations
    window.addEventListener('scroll', function () {
        let elements = document.querySelectorAll('.fade-in-box, .slide-in-left, .slide-in-right');
        let windowHeight = window.innerHeight;

        elements.forEach(el => {
            let elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode'); // Toggle header dark mode
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '🌞' : '🌙'; // Change icon based on mode
    });
});
