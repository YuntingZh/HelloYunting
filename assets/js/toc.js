const sections = document.querySelectorAll('section'); // Sections in your page
const progressItems = document.querySelectorAll('.progress-item'); // TOC items

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Check which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Add active class to the corresponding TOC item
    progressItems.forEach(item => {
        const section = item.getAttribute('data-section').replace('#', '');

        if (section === currentSection) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});